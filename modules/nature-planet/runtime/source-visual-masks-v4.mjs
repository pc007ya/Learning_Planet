/** Reversible visual-only masking. Walk vertices and index buffers remain identical. */
export function applySourceVisualMasksV4(THREE,terrain,specs=[]){
 const changes=[],reports=[],hiddenMaterial=new THREE.MeshBasicMaterial({name:'LandscapeV4_SourceHidden',transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide});
 hiddenMaterial.visible=false;let disposed=false;
 const restore=()=>{for(const c of changes){c.mesh.geometry=c.geometry;c.mesh.material=c.material;c.clone.dispose();}hiddenMaterial.dispose();};
 try{
  for(const spec of specs){
   const nodes=[];terrain.traverse(o=>{if(o.isMesh&&o.name===spec.meshName)nodes.push(o);});
   if(nodes.length!==1)throw Error('Source visual mask requires one mesh: '+spec.meshName);
   const mesh=nodes[0],geometry=mesh.geometry,positions=geometry.getAttribute('position'),index=geometry.index,total=index?.count??positions.count,faces=total/3;
   if(!Number.isInteger(faces))throw Error('Source mask received incomplete triangles');
   if(spec.positionCount!==undefined&&spec.positionCount!==positions.count)throw Error('Source position count changed: '+spec.meshName);
   const at=i=>index?index.getX(i):i,ordinals=new Set(spec.triangleIndices||[]),triples=new Set((spec.triangleVertexIndices||[]).map(t=>t.join(','))),hits=new Uint8Array(faces);let matched=0;
   for(const i of ordinals)if(!Number.isInteger(i)||i<0||i>=faces)throw Error('Source triangle ordinal outside current geometry');
   for(let f=0;f<faces;f++){const i=f*3;if(spec.allTriangles||ordinals.has(f)||triples.has([at(i),at(i+1),at(i+2)].join(','))){hits[f]=1;matched++;}}
   if(!matched&&!spec.allowAlreadyMasked)throw Error('Source visual mask matched no triangles: '+spec.meshName);
   if(triples.size&&!spec.allowAlreadyMasked&&matched!==triples.size)throw Error('Source visual mask did not find every authored triangle: '+spec.meshName);
   const material=mesh.material,materials=Array.isArray(material)?material.slice():[material],hiddenIndex=materials.length;materials.push(hiddenMaterial);
   const clone=geometry.clone(),groups=geometry.groups.length?geometry.groups:[{start:0,count:total,materialIndex:0}];clone.clearGroups();let current=-1,start=0,gi=0;
   for(let f=0;f<faces;f++){const i=f*3;while(gi<groups.length-1&&i>=groups[gi].start+groups[gi].count)gi++;const mi=hits[f]?hiddenIndex:(groups[gi]?.materialIndex??0);if(mi!==current){if(current!==-1)clone.addGroup(start,i-start,current);current=mi;start=i;}}
   if(total)clone.addGroup(start,total-start,current);mesh.geometry=clone;mesh.material=materials;changes.push({mesh,geometry,material,clone});reports.push({meshName:spec.meshName,trianglesVisuallyHidden:matched,trianglesRetainedForRaycast:faces,positionsUnchanged:true,indicesUnchanged:true});
  }
  return {report:reports,dispose(){if(disposed)return;disposed=true;restore();}};
 }catch(error){restore();throw error;}
}

const distanceToSegment=(x,y,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],length=dx*dx+dy*dy,t=length?Math.max(0,Math.min(1,((x-a[0])*dx+(y-a[1])*dy)/length)):0;return Math.hypot(x-a[0]-t*dx,y-a[1]-t*dy);};
const smooth=(a,b,x)=>{const t=Math.max(0,Math.min(1,(x-a)/(b-a)));return t*t*(3-2*t);};

/** Remove only the previous cyan edge blend, without moving any terrain vertex. */
export function recolorCoastalEdgesV4(THREE,landscapeRoot,specs=[]){
 const changes=[],reports=[],point=new THREE.Vector3();let disposed=false;
 const restore=()=>{for(const c of changes){c.mesh.geometry=c.geometry;c.clone.dispose();}};
 try{
  landscapeRoot.updateMatrixWorld(true);
  for(const spec of specs){
   const nodes=[];landscapeRoot.traverse(o=>{if(o.isMesh&&o.name===spec.groundNode)nodes.push(o);});if(nodes.length!==1)throw Error('Missing unique coast ground: '+spec.groundNode);
   const mesh=nodes[0],geometry=mesh.geometry,originalColor=geometry.getAttribute('color');if(!originalColor)throw Error('Coastal ground lacks vertex colors');
   const clone=geometry.clone(),color=clone.getAttribute('color'),position=clone.getAttribute('position'),legacy=spec.legacy??[.3098039329,.6392157078,.6039215922],fade=spec.fade??[.25,1.6];let changed=0;
   if(!Array.isArray(spec.grass)||spec.grass.length!==3||!spec.boundary?.length)throw Error('Coastal color correction is incomplete');
   for(let i=0;i<position.count;i++){point.fromBufferAttribute(position,i).applyMatrix4(mesh.matrixWorld);const d=Math.min(...spec.boundary.map((a,j)=>distanceToSegment(point.x,-point.z,a,spec.boundary[(j+1)%spec.boundary.length]))),weight=1-smooth(fade[0],fade[1],d);if(weight<=0)continue;const values=[color.getX(i),color.getY(i),color.getZ(i)].map((v,k)=>Math.max(0,Math.min(1,v+(spec.grass[k]-legacy[k])*weight)));color.setXYZ(i,...values);changed++;}
   color.needsUpdate=true;mesh.geometry=clone;changes.push({mesh,geometry,clone});reports.push({groundNode:spec.groundNode,changedVertices:changed,maxPositionChange:0,indicesUnchanged:true});
  }
  return {report:reports,dispose(){if(disposed)return;disposed=true;restore();}};
 }catch(error){restore();throw error;}
}

/** Scope the arrival grass tint to its original closed boundary, never a shared material. */
export function recolorSourceGrassV4(THREE,terrain,spec){
 if(!spec)return {report:null,dispose(){}};
 const nodes=[];terrain.traverse(o=>{if(o.isMesh&&o.name===spec.meshName)nodes.push(o);});if(nodes.length!==1)throw Error('Missing arrival grass mesh');
 const mesh=nodes[0],geometry=mesh.geometry,material=mesh.material;if(Array.isArray(material)||!material.color)throw Error('Arrival grass requires a single colored material');
 const clone=geometry.clone(),clonedMaterial=material.clone(),position=clone.getAttribute('position'),color=new THREE.Float32BufferAttribute(new Float32Array(position.count*3).fill(1),3),point=new THREE.Vector3(),base=[material.color.r,material.color.g,material.color.b];let changed=0,disposed=false;
 const inside=(x,y)=>{let hit=false;const p=spec.boundary;for(let i=0,j=p.length-1;i<p.length;j=i++){const a=p[i],b=p[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])hit=!hit;}return hit;};
 try{
  if(geometry.getAttribute('color'))throw Error('Arrival grass color layout changed; review before recoloring');
  terrain.updateMatrixWorld(true);for(let i=0;i<position.count;i++){point.fromBufferAttribute(position,i).applyMatrix4(mesh.matrixWorld);const onEdge=spec.boundary.some((a,j)=>distanceToSegment(point.x,-point.z,a,spec.boundary[(j+1)%spec.boundary.length])<.0001);if(!inside(point.x,-point.z)&&!onEdge)continue;color.setXYZ(i,...spec.color.map((c,k)=>c/Math.max(base[k],1e-8)));changed++;}
  if(!changed)throw Error('No arrival grass vertices matched');clone.setAttribute('color',color);clonedMaterial.vertexColors=true;mesh.geometry=clone;mesh.material=clonedMaterial;
  return {report:{meshName:spec.meshName,changedVertices:changed,maxPositionChange:0,materialSharedWithSource:false},dispose(){if(disposed)return;disposed=true;mesh.geometry=geometry;mesh.material=material;clone.dispose();clonedMaterial.dispose();}};
 }catch(error){clone.dispose();clonedMaterial.dispose();throw error;}
}
