import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { fireWeatherOutcome, type FireWeatherState } from './fire-weather-model';
export class FireWeatherStage {
  private scene=new THREE.Scene(); private camera=new THREE.PerspectiveCamera(40,1,.1,100);
  private renderer:THREE.WebGLRenderer; private controls:OrbitControls; private observer:ResizeObserver;
  private smoke=new THREE.Group(); private cloud=new THREE.Group(); private fire=new THREE.Group(); private rain=new THREE.Group(); private arrows=new THREE.Group(); private lightning:THREE.Line;
  private frame=0; private elapsed=0; private last=0; private disposed=false;
  private state:FireWeatherState={heat:'low',moisture:'dry'}; private progress=1; private playing=false; private active=true;
  constructor(host:HTMLElement){
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:true}); this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    host.append(this.renderer.domElement); this.renderer.domElement.setAttribute('aria-label','森林、煙柱、雲與氣流的三維教學場景');this.renderer.domElement.setAttribute('role','img');
    this.camera.position.set(13,9,17); this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.target.set(0,4,0);this.controls.minDistance=14;this.controls.maxDistance=30;this.controls.maxPolarAngle=Math.PI/2.05;this.controls.enablePan=false;this.controls.addEventListener('change',()=>this.draw());
    this.scene.add(new THREE.HemisphereLight(0xc4e8ff,0x365132,2.6));const sun=new THREE.DirectionalLight(0xffe4bb,3);sun.position.set(5,12,5);this.scene.add(sun);
    const ground=new THREE.Mesh(new THREE.CylinderGeometry(7.5,8,1,64),new THREE.MeshStandardMaterial({color:0x4e795a,roughness:1}));ground.position.y=-.5;this.scene.add(ground);
    const trunkMaterial=new THREE.MeshStandardMaterial({color:0x846447}); const leafMaterial=new THREE.MeshStandardMaterial({color:0x24694e,roughness:1});
    for(let i=0;i<25;i++){const angle=i*2.399,r=3.3+(i%4)*.8;const tree=new THREE.Group();const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.11,.17,1.4,7),trunkMaterial);trunk.position.y=.7;tree.add(trunk);for(let j=0;j<3;j++){const cone=new THREE.Mesh(new THREE.ConeGeometry(.8-j*.14,1.35,8),leafMaterial);cone.position.y=1.2+j*.55;tree.add(cone);}tree.position.set(Math.cos(angle)*r,0,Math.sin(angle)*r);this.scene.add(tree);}
    const puffGeo=new THREE.IcosahedronGeometry(1,2);
    for(let i=0;i<32;i++){const m=new THREE.Mesh(puffGeo,new THREE.MeshStandardMaterial({color:0x73818a,transparent:true,opacity:.45,depthWrite:false,roughness:1}));m.userData.seed=i/32;this.smoke.add(m);}
    const cloudMat=new THREE.MeshStandardMaterial({color:0xf3f5f3,roughness:1});for(let i=0;i<23;i++){const m=new THREE.Mesh(puffGeo,cloudMat);m.position.set(Math.sin(i*2.4)*((i%4)*.55),Math.floor(i/7)*.62,Math.cos(i*2.4)*((i%4)*.5));m.scale.set(1.2,.8,1);this.cloud.add(m);}
    for(let i=0;i<9;i++){const m=new THREE.Mesh(new THREE.ConeGeometry(.27,.9,7),new THREE.MeshBasicMaterial({color:i%2?0xffb54e:0xf47635}));m.position.set(Math.sin(i*2.4)*.7,.4,Math.cos(i*2.4)*.7);this.fire.add(m);}
    const rainMat=new THREE.LineBasicMaterial({color:0x80d7ff,transparent:true,opacity:.7});for(let i=0;i<30;i++){const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0),new THREE.Vector3(-.07,-.45,0)]),rainMat);line.position.set(Math.sin(i*2.4)*2,2+(i%7)*.5,Math.cos(i*2.4)*1.6);this.rain.add(line);}
    this.lightning=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(1,6,1),new THREE.Vector3(.6,5,1),new THREE.Vector3(1,5,1),new THREE.Vector3(.3,4,1)]),new THREE.LineBasicMaterial({color:0xffe8ac}));
    for(let i=0;i<3;i++){const arrow=new THREE.ArrowHelper(new THREE.Vector3(0,1,0),new THREE.Vector3(-1.6+i*1.6,1,1.1),3,0xffcf79,.4,.2);this.arrows.add(arrow);}
    this.scene.add(this.smoke,this.cloud,this.fire,this.rain,this.arrows,this.lightning);
    this.observer=new ResizeObserver(()=>{const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h);this.draw();});this.observer.observe(host);this.update(this.state,1,false,true);
  }
  update(state:FireWeatherState,progress:number,playing:boolean,active:boolean){this.state={...state};this.progress=progress;this.playing=playing;this.active=active;cancelAnimationFrame(this.frame);this.draw();if(playing&&active&&!document.hidden)this.frame=requestAnimationFrame(this.tick);}
  home(){this.camera.position.set(13,9,17);this.controls.target.set(0,4,0);this.controls.update();this.draw();}
  private tick=(time:number)=>{if(this.disposed)return;this.elapsed+=this.last?Math.min((time-this.last)/1000,.05):0;this.last=time;this.draw();if(this.playing&&this.active&&!document.hidden)this.frame=requestAnimationFrame(this.tick);};
  private draw(){if(this.disposed)return;const out=fireWeatherOutcome(this.state),p=this.progress;this.fire.scale.setScalar(this.state.heat==='high'?1.35:.7);this.fire.visible=p>.02;
    this.smoke.visible=p>.12;this.smoke.children.forEach((m,i)=>{const t=((i/32+this.elapsed*.08)%1);m.position.set(Math.sin(i*2.4)*(.15+t*.65),.7+t*out.rise*Math.max(.15,p),Math.cos(i*2.4)*(.15+t*.5));m.scale.setScalar(.2+t*.8);});
    this.cloud.visible=out.cloud&&p>.5;this.cloud.position.y=out.deepCloud?6.3:3.8;this.cloud.scale.set(out.deepCloud?1.35: .7,out.deepCloud?1.65:.5,out.deepCloud?1.2:.65);
    this.rain.visible=out.deepCloud&&p>.82;this.rain.children.forEach((m,i)=>m.position.y=1+((i*.13-this.elapsed*.8)%1+1)%1*4);
    this.lightning.visible=out.deepCloud&&p>.82;this.arrows.visible=p>.15;this.arrows.scale.y=this.state.heat==='high'?1.65:.9;this.renderer.render(this.scene,this.camera);}
  dispose(){this.disposed=true;cancelAnimationFrame(this.frame);this.observer.disconnect();this.controls.dispose();const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();this.scene.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Line){geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());this.renderer.dispose();this.renderer.domElement.remove();}
}
