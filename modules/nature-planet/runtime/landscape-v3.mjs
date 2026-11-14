import {createFaunaMotion} from './fauna-motion.mjs';
import {createLandscapeSurfaceSampler} from './landscape-surface-v3.mjs';
import {createLandscapeEntryLampSupports} from './landscape-entry-lamps-v3.mjs';
const inside=(x,y,poly)=>{let hit=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit;};
/** World-positioned authored landscape. Caller owns GLB loading and asset disposal.
 * Never stack with the grade-3 botanical pilot. update receives elapsed SECONDS, not RAF milliseconds.
 */
export function installLandscapeV3(THREE,terrain,patchRoot,data,manifest,{reducedMotion=false}={}){
 if(manifest.version!=='nature-landscape-v3'||manifest.grade!==data.grade)throw new Error('Landscape grade/version mismatch');
 if(manifest.baseTerrainSha256!==data.sha256)throw new Error('Landscape source terrain changed; rebuild and verify first');
 if(!terrain?.parent)throw new Error('Terrain must be attached to a world scene');
 if(terrain.userData.landscapeV3)throw new Error('A landscape is already installed');
 let hasPilot=false;terrain.parent.traverse(o=>{if(o.name==='Walk_Pilot_BotanicalSlope')hasPilot=true;});if(hasPilot)throw new Error('Dispose the grade-3 botanical pilot before installing landscape v3');
 const worldScene=terrain.parent,regions=manifest.regions,names=new Set(manifest.clearStaticMaterialNames),changes=[],hidden=[],walkMeshes=[],world=new THREE.Vector3();let removedTriangles=0,removedComponents=0,disposed=false,motion,surface,entrySupports;const batchRestores=[];
 const inRegion=(x,y)=>regions.some(r=>inside(x,y,r.boundary));const hideIds=new Set(manifest.hideOriginalActorIds||[]);
 const restore=()=>{for(const b of batchRestores){b.instance.removeFromParent();b.instance.dispose();for(const n of b.nodes)n.parent.add(n.node);}for(const c of changes){c.mesh.geometry=c.original;c.filtered.dispose();}for(const h of hidden)h.node.visible=h.visible;patchRoot.removeFromParent();delete terrain.userData.landscapeV3;};
 try{
 terrain.updateMatrixWorld(true);terrain.traverse(node=>{
  if(hideIds.has(node.name)){hidden.push({node,visible:node.visible});node.visible=false;}
  if(!node.isMesh||!names.has(node.name))return;
  const original=node.geometry,p=original.attributes.position,index=original.index,count=p.count,parent=new Int32Array(count),keys=new Map();for(let i=0;i<count;i++)parent[i]=i;
  const find=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;},union=(a,b)=>{a=find(a);b=find(b);if(a!==b)parent[b]=a;};
  for(let i=0;i<count;i++){const key=[p.getX(i),p.getY(i),p.getZ(i)].map(v=>Math.round(v*1e5)).join(',');if(keys.has(key))union(i,keys.get(key));else keys.set(key,i);}
  const at=i=>index?index.getX(i):i,total=index?.count||count;for(let i=0;i<total;i+=3){union(at(i),at(i+1));union(at(i),at(i+2));}
  const bounds=new Map();for(let i=0;i<count;i++){const id=find(i);if(!bounds.has(id))bounds.set(id,new THREE.Box3());world.fromBufferAttribute(p,i).applyMatrix4(node.matrixWorld);bounds.get(id).expandByPoint(world);}
  const remove=new Set();for(const [id,box] of bounds){const c=box.getCenter(new THREE.Vector3());if(inRegion(c.x,-c.z)){remove.add(id);removedComponents++;}}
  if(!remove.size)return;const kept=[];for(let i=0;i<total;i+=3){if(remove.has(find(at(i))))removedTriangles++;else kept.push(at(i),at(i+1),at(i+2));}
  const filtered=original.clone();filtered.setIndex(kept);filtered.clearGroups();node.geometry=filtered;changes.push({mesh:node,original,filtered});
 });
 const groundNames=new Set(manifest.groundNodes);patchRoot.traverse(o=>{if(o.isMesh&&groundNames.has(o.name)){walkMeshes.push(o);for(const m of Array.isArray(o.material)?o.material:[o.material])m.side=THREE.DoubleSide;}});
 if(walkMeshes.length!==regions.length||groundNames.size!==regions.length)throw new Error('Landscape must have exactly one walk surface per region');
 worldScene.add(patchRoot);patchRoot.updateMatrixWorld(true);
 // Reuse actual detailed geometry in GPU instances. Transparent windows and articulated animals
 // remain separate so sorting and joints still work; no geometry is replaced by low-poly stand-ins.
 const groups=new Map(),inverseRoot=patchRoot.matrixWorld.clone().invert();patchRoot.traverse(o=>{if(!o.isMesh||o.isInstancedMesh||o.name.startsWith('Walk_')||Array.isArray(o.material)||o.material.transparent)return;for(let p=o;p&&p!==patchRoot;p=p.parent)if(p.name.includes('_Fauna_'))return;const key=o.geometry.uuid+'|'+o.material.uuid;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(o);});
 for(const nodes of groups.values()){if(nodes.length<2)continue;const first=nodes[0],instance=new THREE.InstancedMesh(first.geometry,first.material,nodes.length);instance.name='LandscapeInstanced_'+first.name;instance.castShadow=first.castShadow;instance.receiveShadow=first.receiveShadow;for(let i=0;i<nodes.length;i++)instance.setMatrixAt(i,inverseRoot.clone().multiply(nodes[i].matrixWorld));instance.instanceMatrix.needsUpdate=true;instance.computeBoundingBox();instance.computeBoundingSphere();const saved=nodes.map(node=>({node,parent:node.parent}));for(const node of nodes)node.removeFromParent();patchRoot.add(instance);batchRestores.push({instance,nodes:saved});}
 patchRoot.updateMatrixWorld(true);
 const originalNavigation=JSON.stringify({stationsData:data.stationsData,nodes:data.nodes,edges:data.edges,spawn:data.spawn,landingZone:data.landingZone});
 const physicsData={...data,obstacles:[...data.obstacles.filter(o=>!inRegion(o.x,o.y)&&!hideIds.has(o.actorId)),...manifest.additionalObstacles.map(o=>({...o}))]};
 surface=createLandscapeSurfaceSampler(THREE,walkMeshes);const sampleFloor=(x,z)=>{const y=surface.sample(x,z);return y===null?null:y+.005;};
 entrySupports=createLandscapeEntryLampSupports(THREE,terrain,patchRoot,data,{sampleFloor});
 const fauna=manifest.fauna.map(r=>{const matches=[];patchRoot.traverse(n=>{if(n.name===r.id)matches.push(n);});if(matches.length!==1)throw new Error('Missing or duplicate fauna root '+r.id);const root=matches[0],collider={x:root.position.x,y:-root.position.z,r:r.radius,actorId:r.id,dynamic:true};if(r.mode!=='fly')physicsData.obstacles.push(collider);return {...r,root,collider};});
 motion=createFaunaMotion(THREE,fauna,{sampleFloor,reducedMotion});terrain.userData.landscapeV3=manifest.version;
 if(JSON.stringify({stationsData:data.stationsData,nodes:data.nodes,edges:data.edges,spawn:data.spawn,landingZone:data.landingZone})!==originalNavigation)throw new Error('Authoritative navigation changed');
 return {root:patchRoot,walkMeshes,physicsData,sampleFloor,get supportWarnings(){return motion.supportWarnings;},report:{grade:data.grade,removedTriangles,removedComponents,maskedMeshes:changes.length,hiddenOriginalActors:hidden.length,landmarks:manifest.landmarks.length,fauna:fauna.length,instancedStaticBatches:batchRestores.length,sourceTerrainSha256:manifest.baseTerrainSha256,entryLampSupports:entrySupports.report},update(elapsedSeconds,deltaSeconds){if(disposed)return;motion.update(elapsedSeconds,deltaSeconds);for(const a of fauna){a.collider.x=a.root.position.x;a.collider.y=-a.root.position.z;}},setReduced(value){if(!disposed)motion.setReduced(value);},dispose(){if(disposed)return;disposed=true;motion?.dispose();entrySupports?.dispose();surface?.dispose();restore();}};
 }catch(error){motion?.dispose();entrySupports?.dispose();surface?.dispose();restore();throw error;}
}
