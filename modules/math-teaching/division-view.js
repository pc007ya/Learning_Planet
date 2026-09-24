import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
export class DivisionView {
  constructor(host){this.host=host;this.renderer=new T.WebGLRenderer({antialias:true,alpha:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));host.append(this.renderer.domElement);this.scene=new T.Scene();this.camera=new T.PerspectiveCamera(35,1,.1,100);this.camera.position.set(6,7,10);this.camera.lookAt(0,0,0);this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enablePan=false;this.controls.minDistance=5;this.controls.maxDistance=30;this.controls.addEventListener('change',()=>this.draw());this.scene.add(new T.HemisphereLight(0xe8f8ff,0x172944,2.4));const light=new T.DirectionalLight(0xffffff,2.6);light.position.set(-5,10,8);this.scene.add(light);this.group=new T.Group();this.scene.add(this.group);this.resize=new ResizeObserver(()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h,false);this.draw();});this.resize.observe(host);}
  clear(){this.group.traverse(o=>{o.geometry?.dispose();if(o.material){for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose();}});this.group.clear();}
  value(n,x,color){const mat=new T.MeshStandardMaterial({color,roughness:.42,metalness:.05});const add=(geo,px,y,pz)=>{const m=new T.Mesh(geo,mat);m.position.set(px,y,pz);this.group.add(m);};let remaining=n,hundreds=Math.floor(remaining/100);remaining%=100;const tens=Math.floor(remaining/10),ones=remaining%10;
    for(let i=0;i<hundreds;i++)add(new T.BoxGeometry(2.8,.13,2.8),x+(i%3)*.16,.12+Math.floor(i/3)*.17,-1.6);
    for(let i=0;i<tens;i++)add(new T.BoxGeometry(.19,.28,2.55),x-1.2+(i%5)*.27,.25+Math.floor(i/5)*.34,1.1);
    for(let i=0;i<ones;i++)add(new T.BoxGeometry(.23,.23,.23),x+.55+(i%3)*.31,.18+Math.floor(i/3)*.26,1.1);
    const tray=new T.Mesh(new T.BoxGeometry(4.6,.07,5),new T.MeshStandardMaterial({color:0x25425e,transparent:true,opacity:.65}));tray.position.set(x,-.09,0);this.group.add(tray);
  }
  update(step,phase){this.clear();const showingProduct=phase==='product'||phase==='remainder';this.value(phase==='remainder'||phase==='finished'?step.remainder:step.partial,showingProduct?-3:0,0x67cbd1);if(showingProduct)this.value(step.product,3,0xffbd72);this.camera.position.set(showingProduct?6:4,showingProduct?7:5,showingProduct?10:7);this.controls.target.set(0,0,0);this.controls.update();this.draw();}
  draw(){this.renderer.render(this.scene,this.camera);}
  destroy(){this.resize.disconnect();this.controls.dispose();this.clear();this.renderer.dispose();}
}
