/** Exact barycentric height on the actual loaded walk triangles, with a bounded 2D lookup.
 * No approximate metadata heightfield and no per-frame scan of the whole map.
 */
export function createLandscapeSurfaceSampler(THREE,meshes,{cellSize=1}={}){
 const count=meshes.reduce((n,o)=>n+(o.geometry.index?.count||o.geometry.attributes.position.count)/3,0);let tris=new Float32Array(count*9);const cells=new Map(),a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();let used=0;
 for(const o of meshes){o.updateWorldMatrix(true,false);const g=o.geometry,p=g.attributes.position,index=g.index,n=index?.count||p.count,at=i=>index?index.getX(i):i;
  for(let i=0;i<n;i+=3){a.fromBufferAttribute(p,at(i)).applyMatrix4(o.matrixWorld);b.fromBufferAttribute(p,at(i+1)).applyMatrix4(o.matrixWorld);c.fromBufferAttribute(p,at(i+2)).applyMatrix4(o.matrixWorld);const den=(b.z-c.z)*(a.x-c.x)+(c.x-b.x)*(a.z-c.z);if(Math.abs(den)<1e-10)continue;const offset=used*9;tris.set([a.x,a.y,a.z,b.x,b.y,b.z,c.x,c.y,c.z],offset);for(let ix=Math.floor(Math.min(a.x,b.x,c.x)/cellSize);ix<=Math.floor(Math.max(a.x,b.x,c.x)/cellSize);ix++)for(let iz=Math.floor(Math.min(a.z,b.z,c.z)/cellSize);iz<=Math.floor(Math.max(a.z,b.z,c.z)/cellSize);iz++){const key=ix+','+iz;if(!cells.has(key))cells.set(key,[]);cells.get(key).push(offset);}used++;}
 }
 let disposed=false;
 return {triangleCount:used,cellCount:cells.size,sample(x,z){if(disposed||!Number.isFinite(x)||!Number.isFinite(z))return null;const candidates=cells.get(Math.floor(x/cellSize)+','+Math.floor(z/cellSize));if(!candidates)return null;let height=-Infinity;for(const i of candidates){const ax=tris[i],ay=tris[i+1],az=tris[i+2],bx=tris[i+3],by=tris[i+4],bz=tris[i+5],cx=tris[i+6],cy=tris[i+7],cz=tris[i+8],den=(bz-cz)*(ax-cx)+(cx-bx)*(az-cz),wa=((bz-cz)*(x-cx)+(cx-bx)*(z-cz))/den,wb=((cz-az)*(x-cx)+(ax-cx)*(z-cz))/den,wc=1-wa-wb;if(wa>=-1e-6&&wb>=-1e-6&&wc>=-1e-6)height=Math.max(height,wa*ay+wb*by+wc*cy);}return height===-Infinity?null:height;},dispose(){if(disposed)return;disposed=true;cells.clear();tris=new Float32Array(0);}};
}
