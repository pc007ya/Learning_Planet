import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {placeLabels,type LabelAnchor,type Rect} from './labels';

export type Metric={label:string;value:number|string;unit?:string};
export interface World {
  readonly name: string;
  readonly intro: string;
  readonly controls: ReadonlyArray<{ id: string; title: string; values: ReadonlyArray<{ id: string; label: string }> }>;
  readonly missions: ReadonlyArray<{ title: string; detail: string }>;
  readonly quiz: { question: string; answers: readonly [string, string, string, string]; correct: number; explanation: string };
  selected(id: string): string;
  choose(id: string, value: string): void;
  observe(): void;
  completed(): boolean[];
  readout(): string;
  tick(dt: number): void;
  reset(): void;
  dispose(): void;
  move?(direction: string): void;
  readonly steps?:ReadonlyArray<{title:string;question:string;detail:string}>;
  readonly modelNote?:string;
  readonly sourceLinks?:ReadonlyArray<{label:string;url:string}>;
  metrics?():ReadonlyArray<Metric>;
  records?():ReadonlyArray<{label:string;value:string}>;
  status?():string;
  challenge?():{title:string;target:string;hint:string};
  checkChallenge?():{passed:boolean;message:string};
  demo?():void;
  setPlaying?(value:boolean):void;
  setStep?(index:number):void;
  snapshot?():Record<string,unknown>;
  restore?(value:Record<string,unknown>):void;
}

export class Stage {
 readonly scene=new THREE.Scene();readonly camera=new THREE.PerspectiveCamera(42,1,.1,180);readonly worldRoot=new THREE.Group();readonly renderer:THREE.WebGLRenderer|null;readonly orbit:OrbitControls;
 onFrame:(dt:number)=>void=()=>{};onInteraction:()=>void=()=>{};
 private labelObstacles:THREE.Object3D[]=[];private leaderLayer:SVGSVGElement|null=null;private leaderPaths=new Map<string,SVGPathElement>();
 protectLabelArea(object:THREE.Object3D){this.labelObstacles.push(object);}
 private workingBounds:THREE.Box3|null=null;
 private fittedView="orbit";private previousAspect=0;private frameId=0;private running=false;private disposed=false;private last=0;private abort=new AbortController();private observer:ResizeObserver;private labels:{node:HTMLElement;anchor:THREE.Object3D|THREE.Vector3}[]=[];private environment:THREE.WebGLRenderTarget|null=null;private dragging=false;
 constructor(readonly host:HTMLElement,readonly ocean=false){
  this.scene.background=new THREE.Color(ocean?0x092c3b:0x071526);this.scene.fog=new THREE.Fog(this.scene.background,26,65);this.scene.add(this.worldRoot);this.camera.position.set(8,5.8,10.5);
  this.scene.add(new THREE.HemisphereLight(0xe5f6ff,0x263b51,1.5));const key=new THREE.DirectionalLight(0xffefd8,3.5);key.position.set(-5,10,7);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-9;key.shadow.camera.right=9;key.shadow.camera.top=9;key.shadow.camera.bottom=-9;key.shadow.normalBias=.035;this.scene.add(key);const fill=new THREE.DirectionalLight(0x73c7ff,.7);fill.position.set(7,4,-5);this.scene.add(fill);
  let renderer:THREE.WebGLRenderer|null=null;try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'low-power',preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.75));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;host.append(renderer.domElement);const pmrem=new THREE.PMREMGenerator(renderer);this.environment=pmrem.fromScene(new RoomEnvironment(),.06);this.scene.environment=this.environment.texture;pmrem.dispose();}catch(error){console.warn('3D unavailable',error);const p=document.createElement('p');p.className='ep-webgl-fallback';p.textContent='這個裝置無法顯示 3D，請改用支援 WebGL 的瀏覽器。';host.append(p);}this.renderer=renderer;
  this.orbit=new OrbitControls(this.camera,renderer?.domElement||host);this.orbit.enableDamping=true;this.orbit.dampingFactor=.09;this.orbit.minDistance=4;this.orbit.maxDistance=26;this.orbit.maxPolarAngle=Math.PI*.49;this.orbit.target.set(0,.15,0);this.orbit.addEventListener('change',()=>this.renderOnce());
  this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);document.addEventListener('visibilitychange',()=>document.hidden?this.stop():this.start(),{signal:this.abort.signal});window.addEventListener('pagehide',()=>this.stop(),{signal:this.abort.signal});this.resize();this.start();
 }
 notify(){this.onInteraction();this.renderOnce();}
 label(text:string,anchor:THREE.Object3D|THREE.Vector3){const node=document.createElement('span');node.className='ep-world-label';node.textContent=text;this.host.append(node);this.labels.push({node,anchor});return node;}
 bindDrag(target:THREE.Object3D,onMove:(point:THREE.Vector3)=>void,plane=new THREE.Plane(new THREE.Vector3(0,0,1),0)){
  const canvas=this.renderer?.domElement;if(!canvas)return()=>{};const abort=new AbortController(),ray=new THREE.Raycaster(),point=new THREE.Vector3();let pointer:number|null=null;const cast=(event:PointerEvent)=>{const r=canvas.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1),this.camera);};
  canvas.addEventListener('pointerdown',e=>{cast(e);if(!ray.intersectObject(target,true).length)return;e.preventDefault();e.stopImmediatePropagation();pointer=e.pointerId;this.dragging=true;this.orbit.enabled=false;canvas.setPointerCapture(pointer);},{capture:true,signal:abort.signal});
  canvas.addEventListener('pointermove',e=>{if(pointer!==e.pointerId)return;cast(e);if(ray.ray.intersectPlane(plane,point)){onMove(point.clone());this.notify();}},{signal:abort.signal});
  const end=()=>{pointer=null;this.dragging=false;this.orbit.enabled=true;this.notify();};for(const name of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(name,end,{signal:abort.signal});return()=>abort.abort();
 }
 setWorkingBounds(bounds:THREE.Box3){this.workingBounds=bounds.clone();}
 setView(view:string){this.fittedView=view;const points:THREE.Vector3[]=[];this.worldRoot.updateMatrixWorld(true);const addBox=(box:THREE.Box3,matrix:THREE.Matrix4)=>{for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])points.push(new THREE.Vector3(x,y,z).applyMatrix4(matrix));};this.worldRoot.traverse(o=>{if(!(o instanceof THREE.Mesh||o instanceof THREE.Line))return;let ancestor:THREE.Object3D|null=o;while(ancestor){if(!ancestor.visible||ancestor.userData.noFit)return;ancestor=ancestor.parent;}if(!o.geometry.boundingBox)o.geometry.computeBoundingBox();if(o.geometry.boundingBox)addBox(o.geometry.boundingBox,o.matrixWorld);});if(this.workingBounds)addBox(this.workingBounds,new THREE.Matrix4());if(!points.length)points.push(new THREE.Vector3(-3,-2,-2),new THREE.Vector3(3,3,2));const center=new THREE.Box3().setFromPoints(points).getCenter(new THREE.Vector3());const direction=(view==='top'?new THREE.Vector3(.001,1,.001):view==='front'?new THREE.Vector3(0,.24,1):new THREE.Vector3(.8,.55,1)).normalize();const right=new THREE.Vector3().crossVectors(new THREE.Vector3(0,1,0),direction).normalize(),up=new THREE.Vector3().crossVectors(direction,right).normalize(),tanY=Math.tan(THREE.MathUtils.degToRad(this.camera.fov/2)),tanX=tanY*Math.max(.6,this.host.clientWidth/this.host.clientHeight);let distance=5;for(const p of points){const point=p.clone().sub(center),depth=point.dot(direction);distance=Math.max(distance,depth+Math.abs(point.dot(right))/tanX*1.12,depth+Math.abs(point.dot(up))/tanY*1.12);}this.orbit.target.copy(center);this.camera.position.copy(center).addScaledVector(direction,Math.min(26,distance));this.orbit.update();this.host.dataset.cameraFit=distance.toFixed(2);this.renderOnce();}
 zoom(factor:number){this.camera.position.sub(this.orbit.target).multiplyScalar(factor).add(this.orbit.target);this.orbit.update();}
 private resize(){const width=Math.max(200,this.host.clientWidth),height=Math.max(180,this.host.clientHeight);this.camera.aspect=width/height;this.camera.updateProjectionMatrix();this.renderer?.setSize(width,height,false);const changed=this.previousAspect>0&&Math.abs(Math.log(this.camera.aspect/this.previousAspect))>.18;this.previousAspect=this.camera.aspect;if(changed&&this.worldRoot.children.length&&!this.dragging)this.setView(this.fittedView);else this.renderOnce();}
 private layoutLabels(){this.leaderPaths.forEach(p=>p.style.display='none');const w=this.host.clientWidth,h=this.host.clientHeight,items:LabelAnchor[]=[];this.labels.forEach((l,i)=>{if(l.node.style.display==='none')return;let anchorVisible=true;if(l.anchor instanceof THREE.Object3D){let parent:THREE.Object3D|null=l.anchor;while(parent){if(!parent.visible)anchorVisible=false;parent=parent.parent;}}if(!anchorVisible){l.node.hidden=true;return;}const p=l.anchor instanceof THREE.Vector3?l.anchor.clone():l.anchor.getWorldPosition(new THREE.Vector3());p.project(this.camera);const visible=p.z<1&&Math.abs(p.x)<1.1&&Math.abs(p.y)<1.1;l.node.hidden=!visible;if(visible)items.push({id:String(i),x:(p.x*.5+.5)*w,y:(-.5*p.y+.5)*h,width:l.node.offsetWidth,height:l.node.offsetHeight});});const hostRect=this.host.getBoundingClientRect(),blocked:Rect[]=[];for(const el of this.host.parentElement!.querySelectorAll<HTMLElement>('.ep-view-tools,.ep-world-note,.ep-metrics,#ep-dpad,.ep-ocean-handle,.ep-moon-handle,.ep-weather-handle,.ep-ground-inset')){const r=el.getBoundingClientRect();if(r.width&&r.height)blocked.push({x:r.x-hostRect.x,y:r.y-hostRect.y,width:r.width,height:r.height});}for(const object of this.labelObstacles){if(!object.visible)continue;const projected:THREE.Vector3[]=[];if(object instanceof THREE.Mesh&&object.geometry instanceof THREE.SphereGeometry){const center=object.getWorldPosition(new THREE.Vector3()),scale=object.getWorldScale(new THREE.Vector3()),radius=object.geometry.parameters.radius*Math.max(scale.x,scale.y,scale.z),right=new THREE.Vector3(1,0,0).applyQuaternion(this.camera.quaternion),up=new THREE.Vector3(0,1,0).applyQuaternion(this.camera.quaternion);for(let i=0;i<32;i++){const a=i*Math.PI/16;projected.push(center.clone().addScaledVector(right,Math.cos(a)*radius).addScaledVector(up,Math.sin(a)*radius).project(this.camera));}}else{const box=new THREE.Box3().setFromObject(object);for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])projected.push(new THREE.Vector3(x,y,z).project(this.camera));}if(projected.every(p=>p.z>1))continue;const xs=projected.map(p=>(p.x*.5+.5)*w),ys=projected.map(p=>(-.5*p.y+.5)*h),x=Math.max(0,Math.min(...xs)),y=Math.max(0,Math.min(...ys));blocked.push({x:x-3,y:y-3,width:Math.min(w,Math.max(...xs))-x+6,height:Math.min(h,Math.max(...ys))-y+6});}const placed=placeLabels(items,blocked,w,h,7);for(const item of items){const l=this.labels[Number(item.id)],r=placed.get(item.id);l.node.style.visibility=r?'visible':'hidden';if(r){l.node.style.left=r.x+'px';l.node.style.top=r.y+'px';if(l.node.dataset.tether==='true'){if(!this.leaderLayer){this.leaderLayer=document.createElementNS('http://www.w3.org/2000/svg','svg');this.leaderLayer.classList.add('ep-label-leaders');this.leaderLayer.setAttribute('aria-hidden','true');this.host.append(this.leaderLayer);}let path=this.leaderPaths.get(item.id);if(!path){path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('stroke','#b4ecdf');path.setAttribute('stroke-width','1.3');path.setAttribute('fill','none');this.leaderLayer.append(path);this.leaderPaths.set(item.id,path);}const endX=Math.max(r.x,Math.min(item.x,r.x+r.width)),endY=Math.max(r.y,Math.min(item.y,r.y+r.height));path.setAttribute('d',`M${item.x} ${item.y}L${endX} ${endY}`);path.style.display='';}}}this.host.dataset.labelLayout=placed.size===items.length?'clear':'crowded';}
 private frame=(now:number)=>{if(!this.running||this.disposed)return;const dt=Math.min(.04,Math.max(0,(now-(this.last||now))/1000));this.last=now;this.onFrame(dt);if(!this.dragging)this.orbit.update();this.renderOnce();this.frameId=requestAnimationFrame(this.frame);};
 renderOnce(){if(this.disposed)return;this.renderer?.render(this.scene,this.camera);this.layoutLabels();}
 start(){if(this.running||this.disposed||document.hidden)return;this.running=true;this.last=0;this.frameId=requestAnimationFrame(this.frame);}
 stop(){this.running=false;cancelAnimationFrame(this.frameId);}
 destroy(){if(this.disposed)return;this.disposed=true;this.stop();this.abort.abort();this.observer.disconnect();this.orbit.dispose();const textures=new Set<THREE.Texture>();this.worldRoot.traverse(o=>{if(o instanceof THREE.Mesh||o instanceof THREE.Line||o instanceof THREE.Points){o.geometry.dispose();for(const m of Array.isArray(o.material)?o.material:[o.material]){for(const value of Object.values(m))if(value instanceof THREE.Texture)textures.add(value);m.dispose();}}});textures.forEach(t=>t.dispose());this.labels.forEach(l=>l.node.remove());this.leaderLayer?.remove();this.environment?.dispose();this.scene.clear();this.renderer?.dispose();this.renderer?.domElement.remove();}
}

export function mat(color: number, opacity = 1) {
  return new THREE.MeshStandardMaterial({ color, roughness: .46, metalness: .06, transparent: opacity < 1, opacity, flatShading: false });
}
export function box(w: number, h: number, d: number, color: number) {
  return new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(color));
}
export function sphere(r: number, color: number, seg = 40) {
  return new THREE.Mesh(new THREE.SphereGeometry(r, seg, 24), mat(color));
}
export function tube(r: number, h: number, color: number) {
  return new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 32), mat(color));
}
