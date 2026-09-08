import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {TRACK,trackPoint,ground,type TrackKind} from './mini4wd-physics';

/** The artwork and collision ground use the same route and height function. */
export function makeToyTrack(kind:TrackKind){
  const root=new T.Group(),object=new T.Object3D();
  const plastic=(color:number)=>new T.MeshStandardMaterial({color,roughness:.46,metalness:.06});
  const add=(geo:T.BufferGeometry,mat:T.Material,x=0,y=0,z=0)=>{const mesh=new T.Mesh(geo,mat);mesh.position.set(x,y,z);mesh.receiveShadow=true;mesh.castShadow=true;root.add(mesh);return mesh;};
  const cream=plastic(0xffecd0),navy=plastic(0x25526b),mint=plastic(0x4ebbad),gold=plastic(0xffc366);
  add(new RoundedBoxGeometry(69,1.1,35,3,1),plastic(0xb9834e),0,-1.0,0);
  add(new RoundedBoxGeometry(67,.20,33,3,.8),plastic(0x26465b),0,-.38,0);
  add(new RoundedBoxGeometry(44,.3,14,3,2),plastic(0x6caaa0),0,-.17,0);
  const n=360,rails=new T.InstancedMesh(new T.BoxGeometry(1,.72,.17),cream,n*2),trim=new T.InstancedMesh(new T.BoxGeometry(1,.06,.22),cream,n*2);
  const seams=new T.InstancedMesh(new T.BoxGeometry(.035,.018,TRACK.width),navy,n);
  let count=0,seamCount=0;const vertices:number[]=[],colors:number[]=[],indices:number[]=[];
  for(let i=0;i<n;i++){
    const a=trackPoint(i/n*TRACK.length),b=trackPoint((i+1)/n*TRACK.length),ga=ground(a.x,a.z,kind),gb=ground(b.x,b.z,kind);
    if(ga.gap||gb.gap)continue;
    const base=vertices.length/3,roadColor=new T.Color(kind==='jump'&&a.z<-8&&a.x>-6&&a.x<1?0xffc66d:0xe4eee9);
    for(const [p,g] of [[a,ga],[b,gb]] as const)for(const side of [-1,1]){vertices.push(p.x-p.tz*side*TRACK.width/2,g.height,p.z+p.tx*side*TRACK.width/2);colors.push(roadColor.r,roadColor.g,roadColor.b);}
    indices.push(base,base+2,base+1,base+1,base+2,base+3);
    const dx=b.x-a.x,dz=b.z-a.z,len=Math.hypot(dx,dz),pitch=Math.atan2(gb.height-ga.height,len);
    for(const side of [-1,1]){
      object.position.set((a.x+b.x)/2-a.tz*side*TRACK.width/2,(ga.height+gb.height)/2+.36,(a.z+b.z)/2+a.tx*side*TRACK.width/2);
      object.rotation.set(0,-Math.atan2(dz,dx),0);object.rotateZ(pitch);object.scale.set(len*1.04,1,1);object.updateMatrix();rails.setMatrixAt(count,object.matrix);
      rails.setColorAt(count,new T.Color(Math.floor(i/15)%2?0xf0eadc:side===1?0x3eaeb4:0xe58270));
      object.position.y+=.37;object.updateMatrix();trim.setMatrixAt(count++,object.matrix);
    }
    if(i%12===0){object.position.set(a.x,ga.height+.012,a.z);object.rotation.set(0,-Math.atan2(a.tz,a.tx),0);object.scale.set(1,1,1);object.updateMatrix();seams.setMatrixAt(seamCount++,object.matrix);}
    if(ga.height>.15&&i%10===0)add(new T.BoxGeometry(.32,ga.height+.32,4.0),navy,a.x,(ga.height-.32)/2,a.z);
  }
  rails.count=trim.count=count;seams.count=seamCount;rails.castShadow=true;root.add(rails,trim,seams);
  const road=new T.BufferGeometry();road.setAttribute('position',new T.Float32BufferAttribute(vertices,3));road.setAttribute('color',new T.Float32BufferAttribute(colors,3));road.setIndex(indices);road.computeVertexNormals();add(road,new T.MeshStandardMaterial({vertexColors:true,side:T.DoubleSide,roughness:.82}));
  // A real start arch and checkerboard stripe at the starting position.
  for(const z of [-14.85,-9.15])add(new T.CylinderGeometry(.16,.20,3.4,12),mint,-15,1.7,z);
  add(new RoundedBoxGeometry(.45,.65,6.3,2,.18),gold,-15,3.4,-12);
  for(let i=0;i<10;i++)for(let j=0;j<2;j++)add(new T.BoxGeometry(.42,.024,.49),i%2===j?navy:cream,-15+j*.42,.02,-14.2+i*.49);
  // Low toy landmarks stay inside the infield, never in the driving corridor.
  const planet=add(new T.SphereGeometry(2,24,16),plastic(0xe6b55b),0,2.0,0);
  const ring=add(new T.TorusGeometry(2.65,.13,8,48),cream,0,2,0);ring.rotation.x=1.2;ring.rotation.y=.24;
  planet.rotation.y=.4;add(new T.CylinderGeometry(2.8,3,.35,32),navy,0,.15,0);
  for(const x of [-17,-11,11,17])for(const z of [-3.4,3.4]){
    add(new T.CylinderGeometry(.12,.16,1.2,8),plastic(0xaa784c),x,.6,z);
    add(new T.SphereGeometry(.85,12,8),plastic(x<0?0x91c88f:0x69baae),x,1.4,z).scale.y=1.15;
  }
  return root;
}

export function disposeTrack(root:T.Group){
  const geometries=new Set<T.BufferGeometry>(),materials=new Set<T.Material>();
  root.traverse(o=>{if(o instanceof T.Mesh){geometries.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));if(o instanceof T.InstancedMesh)o.dispose();}});
  geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());root.clear();
}
