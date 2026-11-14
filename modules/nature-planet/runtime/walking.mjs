import {circleBlocked} from './nav.mjs';
export function isWalkSurface(object){
 if(!object.isMesh)return false;
 for(let node=object;node;node=node.parent)if(node.name.startsWith('Walk_')||node.userData.walkable===true)return true;
 return false;
}
// Shared by the visible candidate and Node mesh validation. No render context needed.
export function createWalking(THREE,getData,getMeshes){
 const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0),origin=new THREE.Vector3();
 const cellSize=2,cellEps=1e-5;
 const vA=new THREE.Vector3(),vB=new THREE.Vector3(),vC=new THREE.Vector3();
 const wA=new THREE.Vector3(),wB=new THREE.Vector3(),wC=new THREE.Vector3();
 const tmpLocal=new THREE.Vector3(),tmpWorld=new THREE.Vector3(),raySpherePt=new THREE.Vector3();
 // Scene geometry/transforms are static for one mount. Build a uniform 2D triangle
 // spatial grid once, after updateMatrixWorld. A new mesh array invalidates the cache.
 // Call invalidateBounds() if a future caller changes geometry/transforms in place.
 let cachedMeshes=null,meshEntries=[],fallbackMeshes=[],grid=new Map(),queryId=0;
 function invalidateBounds(){cachedMeshes=null;meshEntries=[];fallbackMeshes=[];grid=new Map();}
 function sideCode(mat,THREE){return mat?.side===THREE.BackSide?1:mat?.side===THREE.DoubleSide?2:0;}
 function addTriangle(entry,pos,iA,iB,iC,side){
  wA.fromBufferAttribute(pos,iA).applyMatrix4(entry.matrixWorld);
  wB.fromBufferAttribute(pos,iB).applyMatrix4(entry.matrixWorld);
  wC.fromBufferAttribute(pos,iC).applyMatrix4(entry.matrixWorld);
  const minX=Math.min(wA.x,wB.x,wC.x),maxX=Math.max(wA.x,wB.x,wC.x);
  const minZ=Math.min(wA.z,wB.z,wC.z),maxZ=Math.max(wA.z,wB.z,wC.z);
  if(!Number.isFinite(minX)||!Number.isFinite(maxX)||!Number.isFinite(minZ)||!Number.isFinite(maxZ))return;
  const tri={entry,iA,iB,iC,side,minX,maxX,minZ,maxZ};
  const x0=Math.floor((minX-cellEps)/cellSize),x1=Math.floor((maxX+cellEps)/cellSize);
  const z0=Math.floor((minZ-cellEps)/cellSize),z1=Math.floor((maxZ+cellEps)/cellSize);
  for(let gx=x0;gx<=x1;gx++)for(let gz=z0;gz<=z1;gz++){
   const k=gx+','+gz;let bucket=grid.get(k);
   if(!bucket){bucket=[];grid.set(k,bucket);}
   bucket.push(tri);
  }
 }
 function ensureIndex(){
  const meshes=getMeshes();
  if(meshes===cachedMeshes)return;
  cachedMeshes=meshes;meshEntries=[];fallbackMeshes=[];grid=new Map();
  for(let order=0;order<meshes.length;order++){
   const mesh=meshes[order];
   if(!mesh.geometry||mesh.isSkinnedMesh||mesh.isInstancedMesh||mesh.morphTargetInfluences?.length||mesh.raycast!==THREE.Mesh.prototype.raycast){
    fallbackMeshes.push({mesh,order});continue;
   }
   if(mesh.material===undefined)continue;
   const g=mesh.geometry,pos=g.attributes?.position;if(!pos)continue;
   if(g.boundingSphere===null)g.computeBoundingSphere();
   if(g.boundingBox===null)g.computeBoundingBox();
   const invMatrix=mesh.matrixWorld.clone().invert();
   if(!invMatrix.elements.every(Number.isFinite)){fallbackMeshes.push({mesh,order});continue;}
   const entry={order,mesh,pos,matrixWorld:mesh.matrixWorld,invMatrix,boundingBox:g.boundingBox,boundingSphere:g.boundingSphere,worldSphere:new THREE.Sphere(),localRay:new THREE.Ray(),lastQuery:0,active:false};
   meshEntries.push(entry);
   const idx=g.index,draw=g.drawRange,groups=g.groups;
   if(idx!==null){
    if(Array.isArray(mesh.material)){
     for(let f=0;f<groups.length;f++){
      const gr=groups[f],mat=mesh.material[gr.materialIndex];if(!mat)continue;
      const start=Math.max(gr.start,draw.start),end=Math.min(idx.count,Math.min(gr.start+gr.count,draw.start+draw.count));
      const sc=sideCode(mat,THREE);
      for(let b=start;b+2<end;b+=3)addTriangle(entry,pos,idx.getX(b),idx.getX(b+1),idx.getX(b+2),sc);
     }
    }else{
     const start=Math.max(0,draw.start),end=Math.min(idx.count,draw.start+draw.count),sc=sideCode(mesh.material,THREE);
     for(let b=start;b+2<end;b+=3)addTriangle(entry,pos,idx.getX(b),idx.getX(b+1),idx.getX(b+2),sc);
    }
   }else if(Array.isArray(mesh.material)){
    for(let f=0;f<groups.length;f++){
     const gr=groups[f],mat=mesh.material[gr.materialIndex];if(!mat)continue;
     const start=Math.max(gr.start,draw.start),end=Math.min(pos.count,Math.min(gr.start+gr.count,draw.start+draw.count));
     const sc=sideCode(mat,THREE);
     for(let b=start;b+2<end;b+=3)addTriangle(entry,pos,b,b+1,b+2,sc);
    }
   }else{
    const start=Math.max(0,draw.start),end=Math.min(pos.count,draw.start+draw.count),sc=sideCode(mesh.material,THREE);
    for(let b=start;b+2<end;b+=3)addTriangle(entry,pos,b,b+1,b+2,sc);
   }
  }
 }
 function floor(x,z){
  ensureIndex();
  origin.set(x,35,z);ray.set(origin,down);
  let bestDist=Infinity,bestOrder=Infinity,bestY=null;
  if(fallbackMeshes.length){
   const hits=ray.intersectObjects(fallbackMeshes.map(f=>f.mesh),false);
   if(hits[0]){bestDist=hits[0].distance;bestY=hits[0].point.y;bestOrder=-1;}
  }
  const bucket=grid.get(Math.floor(x/cellSize)+','+Math.floor(z/cellSize));
  if(bucket){
   const qid=++queryId;
   for(let i=0;i<bucket.length;i++){
    const tri=bucket[i];
    if(x<tri.minX-cellEps||x>tri.maxX+cellEps||z<tri.minZ-cellEps||z>tri.maxZ+cellEps)continue;
    const entry=tri.entry;
    if(entry.lastQuery!==qid){
     entry.lastQuery=qid;entry.active=false;
     if(entry.boundingSphere){
      entry.worldSphere.copy(entry.boundingSphere).applyMatrix4(entry.matrixWorld);
      if(!entry.worldSphere.containsPoint(ray.ray.origin)&&!ray.ray.intersectSphere(entry.worldSphere,raySpherePt))continue;
     }
     entry.localRay.copy(ray.ray).applyMatrix4(entry.invMatrix);
     if(entry.boundingBox&&!entry.localRay.intersectsBox(entry.boundingBox))continue;
     entry.active=true;
    }
    if(!entry.active)continue;
    vA.fromBufferAttribute(entry.pos,tri.iA);vB.fromBufferAttribute(entry.pos,tri.iB);vC.fromBufferAttribute(entry.pos,tri.iC);
    const hit=tri.side===1?entry.localRay.intersectTriangle(vC,vB,vA,true,tmpLocal):entry.localRay.intersectTriangle(vA,vB,vC,tri.side===0,tmpLocal);
    if(!hit)continue;
    tmpWorld.copy(hit).applyMatrix4(entry.matrixWorld);
    const dist=ray.ray.origin.distanceTo(tmpWorld);
    if(dist<bestDist||(dist===bestDist&&entry.order<bestOrder)){bestDist=dist;bestOrder=entry.order;bestY=tmpWorld.y;}
   }
  }
  return bestY;
 }
 function valid(x,z,oldY,{footprint=true}={}){const data=getData();if(!data)return {ok:false,reason:'no-terrain'};if(circleBlocked(x,z,data.obstacles||[]))return {ok:false,reason:'obstacle'};const h=floor(x,z);if(h===null)return {ok:false,reason:'edge-or-water'};if(Math.abs(h-oldY)>.46)return {ok:false,reason:'cliff'};if(footprint)for(const [dx,dz] of [[.28,0],[-.28,0],[0,.28],[0,-.28]]){const f=floor(x+dx,z+dz);if(f===null||Math.abs(f-h)>.46)return {ok:false,reason:'edge-or-water'};}return {ok:true,y:h};}
 function step(p,dx,dz){const n=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.12));let moved=false,blocked=null;for(let i=0;i<n;i++){const x=p.x+dx/n,z=p.z+dz/n,v=valid(x,z,p.y);if(!v.ok){blocked=v.reason;break;}p.set(x,v.y,z);moved=true;}return {moved,blocked};}
 function lineSafe(a,b){let oldY=a.y;const n=Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.4);for(let i=1;i<=n;i++){const t=i/n,v=valid(THREE.MathUtils.lerp(a.x,b.x,t),THREE.MathUtils.lerp(a.z,b.z,t),oldY);if(!v.ok)return false;oldY=v.y;}return true;}
 return {floor,valid,step,lineSafe,invalidateBounds};
}
