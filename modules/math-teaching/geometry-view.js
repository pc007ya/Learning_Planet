import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
export class GeometryView {
  constructor(host,onFace){
    this.host=host;this.renderer=new T.WebGLRenderer({antialias:true,alpha:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));host.append(this.renderer.domElement);this.renderer.domElement.setAttribute('aria-label','可拖曳旋轉的幾何教具');
    this.scene=new T.Scene();this.camera=new T.PerspectiveCamera(35,1,.1,500);this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enablePan=false;this.controls.minDistance=3;this.controls.maxDistance=150;this.controls.addEventListener('change',()=>this.draw());this.scene.add(new T.HemisphereLight(0xdcefff,0x1b2750,2.7));const light=new T.DirectionalLight(0xffffff,3);light.position.set(10,20,15);this.scene.add(light);this.group=new T.Group();this.scene.add(this.group);this.labels=[];this.faceMeshes=[];this.ray=new T.Raycaster();this.abort=new AbortController();
    const opts={signal:this.abort.signal};this.renderer.domElement.addEventListener('pointerdown',e=>{this.down=[e.clientX,e.clientY];},opts);this.renderer.domElement.addEventListener('pointerup',e=>{if(!this.down||Math.hypot(e.clientX-this.down[0],e.clientY-this.down[1])>5)return;const r=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2),this.camera);const hit=this.ray.intersectObjects(this.faceMeshes)[0];if(hit)onFace(hit.object.userData.face);},opts);
    this.resize=new ResizeObserver(()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h,false);this.draw();});this.resize.observe(host);
  }
  clear(){this.group.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});this.group.clear();this.labels.forEach(x=>x.el.remove());this.labels=[];this.faceMeshes=[];}
  label(text,pos){const el=document.createElement('span');el.className='dimension-label';el.textContent=text;this.host.append(el);this.labels.push({el,pos:new T.Vector3(...pos)});}
  line(points,color=0x84d6ff){const g=new T.BufferGeometry().setFromPoints(points.map(p=>new T.Vector3(...p)));this.group.add(new T.Line(g,new T.LineBasicMaterial({color})));}
  boxes(positions,color){const geo=new T.BoxGeometry(.94,.94,.94),mat=new T.MeshStandardMaterial({color,roughness:.38,metalness:.1}),mesh=new T.InstancedMesh(geo,mat,positions.length),matrix=new T.Matrix4();positions.forEach((p,i)=>mesh.setMatrixAt(i,matrix.makeTranslation(...p)));this.group.add(mesh);}
  update(s,mode,layers,spread,selected,unit){
    this.clear();this.s=s;this.mode=mode;const {l,w,h}=s,planar=mode==='area'||mode==='perimeter';
    if(planar){const plate=new T.Mesh(new T.BoxGeometry(l,.08,w),new T.MeshStandardMaterial({color:0x255f7c,roughness:.6}));plate.position.y=-.07;this.group.add(plate);for(let x=0;x<=l;x++)this.line([[x-l/2,0,-w/2],[x-l/2,0,w/2]],0x5294b5);for(let z=0;z<=w;z++)this.line([[-l/2,0,z-w/2],[l/2,0,z-w/2]],0x5294b5);
      if(mode==='perimeter'){const corners=[[-l/2,.06,-w/2],[l/2,.06,-w/2],[l/2,.06,w/2],[-l/2,.06,w/2],[-l/2,.06,-w/2]];for(let i=0;i<4;i++){const a=new T.Vector3(...corners[i]),b=new T.Vector3(...corners[i+1]),mesh=new T.Mesh(new T.CylinderGeometry(.065,.065,a.distanceTo(b),8),new T.MeshStandardMaterial({color:i%2?0xffbd65:0x57e0d7,emissive:i%2?0x6b3300:0x005d57}));mesh.position.copy(a.clone().add(b).multiplyScalar(.5));mesh.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),b.sub(a).normalize());this.group.add(mesh);}}
    }else if(mode==='volume'){
      for(let y=0;y<layers;y++){const positions=[];for(let x=0;x<l;x++)for(let z=0;z<w;z++)positions.push([x-(l-1)/2,y-h/2+.5+y*spread*.65,z-(w-1)/2]);this.boxes(positions,[0x53c8c3,0x759fee,0xffbd65][y%3]);}
      const wire=new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(l,h,w)),new T.LineBasicMaterial({color:0x88a4ca,transparent:true,opacity:.35}));this.group.add(wire);
    }else{
      const faces=[{size:[l,w],p:[0,h/2,0],r:[-Math.PI/2,0,0]},{size:[l,w],p:[0,-h/2,0],r:[Math.PI/2,0,0]},{size:[l,h],p:[0,0,w/2],r:[0,0,0]},{size:[l,h],p:[0,0,-w/2],r:[0,Math.PI,0]},{size:[w,h],p:[l/2,0,0],r:[0,Math.PI/2,0]},{size:[w,h],p:[-l/2,0,0],r:[0,-Math.PI/2,0]}];
      faces.forEach((f,i)=>{const color=[0x53c8c3,0x53c8c3,0xffbd65,0xffbd65,0x9995f3,0x9995f3][i],mesh=new T.Mesh(new T.PlaneGeometry(...f.size),new T.MeshStandardMaterial({color,side:T.DoubleSide,roughness:.5,transparent:true,opacity:selected===null||selected===i? .92:.25}));mesh.position.set(...f.p.map(v=>v*(1+spread)));mesh.rotation.set(...f.r);mesh.userData.face=i;this.group.add(mesh);this.faceMeshes.push(mesh);const edges=new T.LineSegments(new T.EdgesGeometry(mesh.geometry),new T.LineBasicMaterial({color:0xffffff,transparent:true,opacity:.7}));edges.position.copy(mesh.position);edges.rotation.copy(mesh.rotation);this.group.add(edges);});
    }
    const y=planar?0:-h/2;this.label(`長 ${l} ${unit}`,[0,y-.25,w/2+.6]);this.label(`寬 ${w} ${unit}`,[l/2+.7,y,0]);if(!planar)this.label(`高 ${h} ${unit}`,[-l/2-.8,0,0]);this.draw();
  }
  home(top=false){const s=this.s||{l:4,w:3,h:2},size=Math.max(s.l,s.w,s.h),distance=size*(this.mode==='surface'?3.3:2.3)*Math.max(1,1/this.camera.aspect);this.camera.position.set(top?0:distance*.65,top?distance:distance*.6,top?.001:distance*.85);this.controls.target.set(0,0,0);this.controls.update();this.draw();}
  draw(){this.renderer.render(this.scene,this.camera);for(const {el,pos} of this.labels){const p=pos.clone().project(this.camera);el.style.left=(p.x+1)*50+'%';el.style.top=(1-p.y)*50+'%';el.hidden=Math.abs(p.x)>1||Math.abs(p.y)>1||p.z>1;}}
  destroy(){this.abort.abort();this.resize.disconnect();this.controls.dispose();this.clear();this.renderer.dispose();}
}
