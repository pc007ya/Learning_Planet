/** Ground the original authored high entry lights without changing GLB-owned resources.
 * sampleFloor(x, z) returns an actual world-space walk-surface Y. All coordinates are Three.js Y-up.
 */
export function createLandscapeEntryLampSupports(THREE, terrain, patchRoot, data, {sampleFloor} = {}) {
  if (typeof sampleFloor !== 'function') throw new Error('Entry lamp supports require an actual floor sampler');
  if (!terrain || !patchRoot || !Array.isArray(data?.stationsData) || !Array.isArray(data?.regions)) throw new Error('Entry lamp support inputs are incomplete');
  terrain.updateMatrixWorld(true); patchRoot.updateMatrixWorld(true);
  const lampMeshes=[];terrain.traverse(o=>{if(o.isMesh&&o.name==='entry_lamp')lampMeshes.push(o);});
  if(lampMeshes.length!==1)throw new Error('Expected exactly one original entry_lamp mesh');
  const mesh=lampMeshes[0],position=mesh.geometry.attributes.position,index=mesh.geometry.index,n=position.count;
  const parents=new Int32Array(n),keys=new Map();for(let i=0;i<n;i++)parents[i]=i;
  const find=i=>{while(parents[i]!==i){parents[i]=parents[parents[i]];i=parents[i];}return i;};
  const join=(a,b)=>{a=find(a);b=find(b);if(a!==b)parents[b]=a;};
  for(let i=0;i<n;i++){const key=[position.getX(i),position.getY(i),position.getZ(i)].map(v=>Math.round(v*1e5)).join(',');if(keys.has(key))join(i,keys.get(key));else keys.set(key,i);}
  const at=i=>index?index.getX(i):i,total=index?.count||n;
  for(let i=0;i<total;i+=3){join(at(i),at(i+1));join(at(i),at(i+2));}
  const boxes=new Map(),point=new THREE.Vector3();for(let i=0;i<n;i++){const id=find(i);if(!boxes.has(id))boxes.set(id,new THREE.Box3());point.fromBufferAttribute(position,i).applyMatrix4(mesh.matrixWorld);boxes.get(id).expandByPoint(point);}
  const high=[];let lowMarkerCount=0;
  for(const [id,box] of boxes){const size=box.getSize(new THREE.Vector3());if(Math.abs(size.x-.32)<.001&&Math.abs(size.y-.48)<.001&&Math.abs(size.z-.32)<.001)high.push({id,box,center:box.getCenter(new THREE.Vector3())});else lowMarkerCount++;}
  const inside=(x,y,poly)=>{let yes=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){const a=poly[i],b=poly[j];if((a[1]>y)!==(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])yes=!yes;}return yes;};
  const supports=[],used=new Set(),nodes=new Map(data.nodes.map(o=>[o.id,o.p]));let minRoadClearance=Infinity,minBuildingContainment=Infinity;
  const pointSegment=(x,y,A,B)=>{const dx=B[0]-A[0],dy=B[1]-A[1],d=dx*dx+dy*dy,t=d?Math.max(0,Math.min(1,((x-A[0])*dx+(y-A[1])*dy)/d)):0;return Math.hypot(x-A[0]-t*dx,y-A[1]-t*dy);};
  // Validate every source head and every ground contact before allocating or attaching anything.
  for(const station of data.stationsData){const [x,y,z]=station.p,yaw=Math.atan2(station.entry[0]-x,-(station.entry[1]-y));
    for(const side of [-1,1]){const lx=side*1.10,ly=-2.12,expected=new THREE.Vector3(x+lx*Math.cos(yaw)-ly*Math.sin(yaw),z+1.50,-(y+lx*Math.sin(yaw)+ly*Math.cos(yaw)));const matches=high.filter(h=>h.center.distanceTo(expected)<.001);
      if(matches.length!==1||used.has(matches[0]?.id))throw new Error(`Missing or duplicate high entry light at ${station.id}/${side}`);
      const head=matches[0],cx=head.center.x,cz=head.center.z;if(!data.regions.some(r=>inside(cx,-cz,r.boundary)))throw new Error('Entry light is outside authored station regions');
      const floor=sampleFloor(cx,cz),top=head.box.min.y;if(!Number.isFinite(floor))throw new Error(`Missing walk surface under entry light ${station.id}`);if(floor>=top)throw new Error(`Walk surface reaches or exceeds entry light bottom at ${station.id}`);
      const containment=2.55-Math.hypot(cx-x,-cz-y)-.095;if(containment<0)throw new Error('Entry light support exceeds the existing building collider');minBuildingContainment=Math.min(minBuildingContainment,containment);
      for(const [a,b] of data.edges){const clearance=pointSegment(cx,-cz,nodes.get(a),nodes.get(b))-.095;minRoadClearance=Math.min(minRoadClearance,clearance);if(clearance<.38)throw new Error('Entry light support obstructs the original road network');}
      supports.push({stationId:station.id,side,x:cx,z:cz,bottom:floor-.005,headBottom:top});used.add(head.id);
    }
  }
  if(!supports.length)throw new Error('No verified station entry lights');
  const geometries=[],materials=[],meshes=[],group=new THREE.Group();group.name=`LandscapeEntryLampSupports_G${data.grade}`;
  const wood=new THREE.MeshStandardMaterial({name:'LandscapeEntryLamp_WarmTimber',color:0x68472f,roughness:.82,metalness:0});
  const bronze=new THREE.MeshStandardMaterial({name:'LandscapeEntryLamp_DarkBronze',color:0x514d3b,roughness:.64,metalness:.48});materials.push(wood,bronze);
  const shaft=new THREE.CylinderGeometry(.038,.052,1,16,1,false);
  const lathe=points=>new THREE.LatheGeometry(points.map(p=>new THREE.Vector2(...p)),20);
  const base=lathe([[0,0],[.083,0],[.095,.012],[.095,.029],[.083,.052],[.064,.079],[0,.079]]);
  const cap=lathe([[0,-.025],[.058,-.025],[.073,-.018],[.095,-.008],[.095,.012],[.083,.025],[0,.025]]);
  geometries.push(shaft,base,cap);const inverse=patchRoot.matrixWorld.clone().invert(),quaternion=new THREE.Quaternion();
  let disposed=false;
  try {
    for(const [name,geometry,material] of [['Shafts',shaft,wood],['Bases',base,bronze],['Caps',cap,bronze]]){const inst=new THREE.InstancedMesh(geometry,material,supports.length);inst.name=`LandscapeEntryLamp_${name}_G${data.grade}`;inst.castShadow=true;inst.receiveShadow=true;
      for(let i=0;i<supports.length;i++){const s=supports[i];let y,scaleY=1;if(name==='Shafts'){const lo=s.bottom+.042,hi=s.headBottom+.014;y=(lo+hi)/2;scaleY=hi-lo;}else y=name==='Bases'?s.bottom:s.headBottom+.006;
        const matrix=new THREE.Matrix4().compose(new THREE.Vector3(s.x,y,s.z),quaternion,new THREE.Vector3(1,scaleY,1));inst.setMatrixAt(i,inverse.clone().multiply(matrix));}
      inst.instanceMatrix.needsUpdate=true;inst.computeBoundingBox();inst.computeBoundingSphere();group.add(inst);meshes.push(inst);
    }
    patchRoot.add(group);group.updateMatrixWorld(true);
  } catch(error) {group.removeFromParent();for(const m of meshes)m.dispose();for(const g of geometries)g.dispose();for(const m of materials)m.dispose();throw error;}
  return {report:{grade:data.grade,supportedHighHeads:supports.length,untouchedLowMarkers:lowMarkerCount,unmatchedHighHeads:high.length-used.size,instanceBatches:3,baseRadius:.095,maxSupportRadius:.095,minRoadClearance,minBuildingContainment,sourceLampGeometryUnchanged:true},dispose(){if(disposed)return;disposed=true;group.removeFromParent();for(const m of meshes)m.dispose();for(const g of geometries)g.dispose();for(const m of materials)m.dispose();}};
}
