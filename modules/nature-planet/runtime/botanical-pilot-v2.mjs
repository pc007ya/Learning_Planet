/** Install the world-positioned botanical terrain/model pilot without moving any course or road.
 * Caller owns loading and disposing patchRoot. This adapter owns only its source-mask clones.
 */
export function installBotanicalPilot(THREE,terrain,patchRoot,data,manifest){
  if(data.grade!==3||manifest.grade!==3)throw new Error('Botanical pilot is authored for grade 3 only');
  if(manifest.baseTerrainSha256!==data.sha256)throw new Error('Pilot source terrain changed; rebase and verify instead of masking unknown geometry');
  if(!terrain?.parent)throw new Error('Terrain must already be attached to the world scene');
  const anchors=[...(manifest.removeProps||[]),manifest.replaceStation].filter(Boolean),names=new Set(manifest.clearStaticMaterialNames),changes=[],world=new THREE.Vector3();
  const sourceData=JSON.stringify({stationsData:data.stationsData,nodes:data.nodes,edges:data.edges,spawn:data.spawn,landingZone:data.landingZone});
  terrain.updateMatrixWorld(true);let removedTriangles=0,components=0,disposed=false;
  terrain.traverse(mesh=>{
    if(!mesh.isMesh||!names.has(mesh.name))return;
    const original=mesh.geometry,p=original.attributes.position,index=original.index,count=p.count,parent=new Int32Array(count),keys=new Map();for(let i=0;i<count;i++)parent[i]=i;
    const find=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;};const union=(a,b)=>{a=find(a);b=find(b);if(a!==b)parent[b]=a;};
    for(let i=0;i<count;i++){const key=[p.getX(i),p.getY(i),p.getZ(i)].map(v=>Math.round(v*1e5)).join(',');if(keys.has(key))union(i,keys.get(key));else keys.set(key,i);}
    const at=i=>index?index.getX(i):i,total=index?.count||count;for(let i=0;i<total;i+=3){union(at(i),at(i+1));union(at(i),at(i+2));}
    const bounds=new Map();for(let i=0;i<count;i++){const id=find(i);if(!bounds.has(id))bounds.set(id,new THREE.Box3());world.fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld);bounds.get(id).expandByPoint(world);}
    const hidden=new Set();for(const [id,box] of bounds){const c=box.getCenter(new THREE.Vector3());if(Math.hypot(c.x-manifest.center[0],-c.z-manifest.center[1])<(manifest.removeRegionRadius||0)||anchors.some(a=>Math.hypot(c.x-a.x,-c.z-a.y)<a.r+.65)){hidden.add(id);components++;}}
    if(!hidden.size)return;const kept=[];for(let i=0;i<total;i+=3){if(hidden.has(find(at(i))))removedTriangles++;else kept.push(at(i),at(i+1),at(i+2));}
    const filtered=original.clone();filtered.setIndex(kept);filtered.clearGroups();mesh.geometry=filtered;changes.push({mesh,original,filtered});
  });
  terrain.parent.add(patchRoot);patchRoot.updateMatrixWorld(true);const walkMeshes=[];patchRoot.traverse(o=>{if(o.isMesh&&o.name===manifest.groundNode){for(const m of Array.isArray(o.material)?o.material:[o.material])m.side=THREE.DoubleSide;walkMeshes.push(o);}});
  if(walkMeshes.length!==1){for(const c of changes){c.mesh.geometry=c.original;c.filtered.dispose();}patchRoot.removeFromParent();throw new Error('Pilot must have exactly one authored walk surface');}
  const physicsData={...data,obstacles:[...data.obstacles.filter(o=>!anchors.some(a=>Math.hypot(o.x-a.x,o.y-a.y)<.05)),...manifest.additionalObstacles]};
  if(JSON.stringify({stationsData:data.stationsData,nodes:data.nodes,edges:data.edges,spawn:data.spawn,landingZone:data.landingZone})!==sourceData)throw new Error('Authoritative navigation unexpectedly changed');
  return {root:patchRoot,walkMeshes,physicsData,report:{removedTriangles,components,maskedMeshes:changes.length,addedObstacles:manifest.additionalObstacles.length},dispose(){if(disposed)return;disposed=true;for(const c of changes){c.mesh.geometry=c.original;c.filtered.dispose();}patchRoot.removeFromParent();}};
}
