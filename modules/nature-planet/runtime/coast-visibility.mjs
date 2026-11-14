/** Presentation only: preserve source geometry/navigation and restore cloned water materials. */
export function createCoastVisibility(THREE,{scene,terrain,data,landscapeRoot}={}){
 const bindings=[],copies=new Map(),day=new THREE.Color('#1c5268'),night=new THREE.Color('#2c5c72'),previousFog=scene.fog?{near:scene.fog.near,far:scene.fog.far}:null;
 let disposed=false,lastNight=-1,primaryDistance=0,seaTriangles=0,preservedOtherWaterTriangles=0;
 terrain.updateMatrixWorld(true);
 terrain.traverse(o=>{
  if(!o.isMesh||o.name!=='Nature_water'||Array.isArray(o.material)||o.material?.name!=='water'||!o.material.color)return;
  const original=o.material,g=o.geometry,p=g.attributes.position,index=g.index,total=index?.count||p.count,at=i=>index?index.getX(i):i,parent=new Int32Array(p.count),keys=new Map(),point=new THREE.Vector3();for(let i=0;i<p.count;i++)parent[i]=i;
  const find=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;},union=(a,b)=>{a=find(a);b=find(b);if(a!==b)parent[b]=a;};
  for(let i=0;i<p.count;i++){const key=[p.getX(i),p.getY(i),p.getZ(i)].map(v=>Math.round(v*1e5)).join(',');if(keys.has(key))union(i,keys.get(key));else keys.set(key,i);}
  for(let i=0;i<total;i+=3){union(at(i),at(i+1));union(at(i),at(i+2));}
  const boxes=new Map();for(let i=0;i<p.count;i++){const id=find(i);if(!boxes.has(id))boxes.set(id,new THREE.Box3());point.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);boxes.get(id).expandByPoint(point);}
  // The inspected source sea spans 170 x 170. Small separate water features retain their source material.
  const sea=new Set([...boxes].filter(([,box])=>box.max.x-box.min.x>100&&box.max.z-box.min.z>100).map(([id])=>id));
  const flags=[];let count=0;for(let i=0;i<total;i+=3){const selected=sea.has(find(at(i)));flags.push(selected);if(selected)count++;}
  if(!count)return;seaTriangles+=count;preservedOtherWaterTriangles+=flags.length-count;
  if(!copies.has(original)){const copy=original.clone();copy.name=original.name+'__coastContrast';copy.color.copy(day);copy.roughness=.45;copy.metalness=.06;if('envMapIntensity'in copy)copy.envMapIntensity=.85;copies.set(original,copy);}
  let clone=null;
  if(count===flags.length)o.material=copies.get(original);
  else{clone=g.clone();clone.clearGroups();let start=0,last=flags[0];for(let i=1;i<=flags.length;i++)if(i===flags.length||flags[i]!==last){clone.addGroup(start*3,(i-start)*3,last?1:0);start=i;last=flags[i];}o.geometry=clone;o.material=[original,copies.get(original)];}
  bindings.push({o,original,geometry:g,clone});
 });
 const bounds=new THREE.Box3();
 for(const region of data.regions||[])for(const p of region.boundary||[])bounds.expandByPoint(new THREE.Vector3(p[0],p[2],-p[1]));
 if(landscapeRoot)bounds.union(new THREE.Box3().setFromObject(landscapeRoot));
 if(!bounds.isEmpty())bounds.expandByScalar(2);
 const corners=[];if(!bounds.isEmpty())for(let i=0;i<8;i++)corners.push(new THREE.Vector3(i&1?bounds.max.x:bounds.min.x,i&2?bounds.max.y:bounds.min.y,i&4?bounds.max.z:bounds.min.z));
 return {update(camera,lighting={}){if(disposed)return;const strength=Number.isFinite(lighting.night)?Math.max(0,Math.min(1,lighting.night)):0;if(strength!==lastNight){for(const material of copies.values())material.color.copy(day).lerp(night,strength);lastNight=strength;}
   if(scene.fog&&corners.length&&camera?.position){primaryDistance=Math.max(...corners.map(p=>p.distanceTo(camera.position)));scene.fog.near=primaryDistance+12;scene.fog.far=scene.fog.near+180;}
  },getState(){return{waterMeshes:bindings.length,materialCopies:copies.size,seaTriangles,preservedOtherWaterTriangles,primaryDistance,fogNear:scene.fog?.near??null,fogFar:scene.fog?.far??null,primaryMapFogFree:!corners.length||!scene.fog||scene.fog.near>=primaryDistance+12};},
  dispose(){if(disposed)return;disposed=true;for(const b of bindings){b.o.material=b.original;if(b.clone){b.o.geometry=b.geometry;b.clone.dispose();}}for(const m of copies.values())m.dispose();if(scene.fog&&previousFog){scene.fog.near=previousFog.near;scene.fog.far=previousFog.far;}bindings.length=0;copies.clear();}
 };
}
