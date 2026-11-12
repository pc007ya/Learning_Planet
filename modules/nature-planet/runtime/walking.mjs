import {circleBlocked} from './nav.mjs';
export function isWalkSurface(object){
 if(!object.isMesh)return false;
 for(let node=object;node;node=node.parent)if(node.name.startsWith('Walk_')||node.userData.walkable===true)return true;
 return false;
}
// Shared by the visible candidate and Node mesh validation. No render context needed.
export function createWalking(THREE,getData,getMeshes){
 const ray=new THREE.Raycaster(),down=new THREE.Vector3(0,-1,0);
 // Scene geometry/transforms are static for one mount. Build conservative world
 // bounds once, after updateMatrixWorld. A new mesh array invalidates the cache.
 // Call invalidateBounds() if a future caller changes geometry/transforms in place.
 let cachedMeshes=null,bounds=[];
 function invalidateBounds(){cachedMeshes=null;bounds=[];}
 function candidates(x,z){
  const meshes=getMeshes();
  if(meshes!==cachedMeshes){
   cachedMeshes=meshes;
   bounds=meshes.map(mesh=>{
    // Deforming/custom/instanced raycasts require their original unrestricted path.
    if(!mesh.geometry || mesh.isSkinnedMesh || mesh.isInstancedMesh || mesh.morphTargetInfluences?.length || mesh.raycast!==THREE.Mesh.prototype.raycast)return {mesh,box:null};
    mesh.geometry.computeBoundingBox();
    const box=mesh.geometry.boundingBox?.clone().applyMatrix4(mesh.matrixWorld);
    return {mesh,box:box && [...box.min.toArray(),...box.max.toArray()].every(Number.isFinite)?box:null};
   });
  }
  const epsilon=1e-7;
  return bounds.filter(({box})=>!box || (x>=box.min.x-epsilon && x<=box.max.x+epsilon && z>=box.min.z-epsilon && z<=box.max.z+epsilon)).map(({mesh})=>mesh);
 }
 function floor(x,z){ray.set(new THREE.Vector3(x,35,z),down);const hit=ray.intersectObjects(candidates(x,z),false)[0];return hit?hit.point.y:null;}
 function valid(x,z,oldY,{footprint=true}={}){const data=getData();if(!data)return {ok:false,reason:'no-terrain'};if(circleBlocked(x,z,data.obstacles||[]))return {ok:false,reason:'obstacle'};const h=floor(x,z);if(h===null)return {ok:false,reason:'edge-or-water'};if(Math.abs(h-oldY)>.46)return {ok:false,reason:'cliff'};if(footprint)for(const [dx,dz] of [[.28,0],[-.28,0],[0,.28],[0,-.28]]){const f=floor(x+dx,z+dz);if(f===null||Math.abs(f-h)>.46)return {ok:false,reason:'edge-or-water'};}return {ok:true,y:h};}
 function step(p,dx,dz){const n=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.12));let moved=false,blocked=null;for(let i=0;i<n;i++){const x=p.x+dx/n,z=p.z+dz/n,v=valid(x,z,p.y);if(!v.ok){blocked=v.reason;break;}p.set(x,v.y,z);moved=true;}return {moved,blocked};}
 function lineSafe(a,b){let oldY=a.y;const n=Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.4);for(let i=1;i<=n;i++){const t=i/n,v=valid(THREE.MathUtils.lerp(a.x,b.x,t),THREE.MathUtils.lerp(a.z,b.z,t),oldY);if(!v.ok)return false;oldY=v.y;}return true;}
 return {floor,valid,step,lineSafe,invalidateBounds};
}
