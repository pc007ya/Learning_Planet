import {learningText} from './zhuyin';
import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { planetMaterial,waterMaterial,sunMaterial } from './materials';
import { EARTH_RADIUS,shellRadius } from './science';
import {placeLabels,type LabelAnchor,type Rect} from './labels';
import { radians,wrap } from '../tides/model';
export type View='space'|'top'|'coast';
export class TideStage{
 readonly renderer:T.WebGLRenderer;readonly scene=new T.Scene();readonly camera=new T.PerspectiveCamera(38,1,.1,150);readonly orbit:OrbitControls;
 readonly earth:T.Mesh;readonly moon:T.Mesh;readonly water:T.Mesh;readonly marker=new T.Group();
 private surfaceTime=0;private readonly reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
 private readonly sun=new T.Vector3(1,0,0);private readonly shellGeometry=new T.SphereGeometry(1,80,48);private readonly normals:Float32Array;
 private readonly labelLeaders=document.createElementNS('http://www.w3.org/2000/svg','svg');private readonly guides=new T.Group();private readonly labelNodes:{node:HTMLElement;point:()=>T.Vector3}[]=[];
 private readonly earthTexture:T.Texture;private readonly moonTexture:T.Texture;private observer:ResizeObserver;
 private moonAngle=0;private observerAngle=90;private frame=0;private movingUntil=0;private destroyed=false;private drag=false;private dragObserver=false;private dragOffset=0;
 private readonly moonButton:HTMLButtonElement;private readonly markerButton:HTMLButtonElement;private last=0;private readonly onHide=()=>{if(document.hidden){cancelAnimationFrame(this.frame);this.frame=0;}else this.wake();};
 private readonly onControls=()=>{this.movingUntil=performance.now()+400;this.wake();};
 private pointerAngle(e:PointerEvent){const r=this.host.getBoundingClientRect();const ndc=new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);const ray=new T.Raycaster();ray.setFromCamera(ndc,this.camera);const hit=new T.Vector3();return ray.ray.intersectPlane(new T.Plane(new T.Vector3(0,1,0),0),hit)?wrap(Math.atan2(-hit.z,hit.x)*180/Math.PI):null;}
 private readonly move=(e:PointerEvent)=>{if(!this.drag&&!this.dragObserver)return;e.preventDefault();const a=this.pointerAngle(e);if(a!==null)this.onChange(this.dragObserver?'observer':'moon',wrap(a+this.dragOffset));};
 private readonly up=()=>{if(this.drag||this.dragObserver){this.drag=false;this.dragObserver=false;this.orbit.enabled=true;this.onFinish();}};
 constructor(private host:HTMLElement,earthTexture:T.Texture,moonTexture:T.Texture,private onChange:(kind:'moon'|'observer',value:number)=>void,private onFinish:()=>void,private onTick:(dt:number)=>void,private moonMode=false){
  this.earthTexture=earthTexture;this.moonTexture=moonTexture;earthTexture.colorSpace=T.NoColorSpace;moonTexture.colorSpace=T.NoColorSpace;earthTexture.anisotropy=4;moonTexture.anisotropy=4;
  this.scene.background=new T.Color(0x050e1d);this.renderer=new T.WebGLRenderer({antialias:true,preserveDrawingBuffer:true,powerPreference:'low-power'});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.12;host.prepend(this.renderer.domElement);this.labelLeaders.classList.add('label-leaders');this.labelLeaders.setAttribute('aria-hidden','true');host.append(this.labelLeaders);
  const canvas=this.renderer.domElement;canvas.setAttribute('role','img');canvas.setAttribute('aria-label',moonMode?'可旋轉的立體地球與月球。空白處拖曳轉視角。':'可旋轉的立體地球、月球與理想海水殼。空白處拖曳轉視角。');
  this.orbit=new OrbitControls(this.camera,canvas);this.orbit.enablePan=false;this.orbit.enableDamping=true;this.orbit.dampingFactor=.09;this.orbit.minDistance=7;this.orbit.maxDistance=25;this.orbit.minPolarAngle=.12;this.orbit.maxPolarAngle=Math.PI*.48;this.orbit.addEventListener('change',this.onControls);
  this.earth=new T.Mesh(new T.SphereGeometry(EARTH_RADIUS,96,64),planetMaterial(earthTexture,this.sun));this.earth.rotation.y=-.8;this.scene.add(this.earth);
  this.moon=new T.Mesh(new T.SphereGeometry(.42,48,32),planetMaterial(moonTexture,this.sun,true));this.scene.add(this.moon);
  const attr=this.shellGeometry.attributes.position;this.normals=new Float32Array(attr.array as Float32Array);this.water=new T.Mesh(this.shellGeometry,waterMaterial());this.scene.add(this.water,this.guides,this.marker);
  this.makeGuides();this.makeStars();this.makeSun();
  const pin=new T.Mesh(new T.SphereGeometry(.045,16,12),new T.MeshBasicMaterial({color:0xffd08d}));this.marker.add(pin);const ring=new T.Mesh(new T.TorusGeometry(.11,.012,8,40),new T.MeshBasicMaterial({color:0xffd08d}));ring.rotation.x=Math.PI/2;this.marker.add(ring);
  this.moonButton=this.makeHandle('拖動月球',()=>this.moon.position,'moon');this.markerButton=this.makeHandle('轉動海岸觀測點',()=>this.marker.position,'observer');
  if(!moonMode){
  this.label('近月方向',()=>new T.Vector3(Math.cos(radians(this.moonAngle))*2.9,.5,-Math.sin(radians(this.moonAngle))*2.9),'force');this.label('遠月方向',()=>new T.Vector3(-Math.cos(radians(this.moonAngle))*2.9,.5,Math.sin(radians(this.moonAngle))*2.9),'force');
this.label('海水殼 · 隆起已放大',()=>new T.Vector3(-1.6,2.4,-1.8));
  }
  this.label('太陽光',()=>new T.Vector3(6.8,.8,0));
  this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);host.addEventListener('pointermove',this.move);host.addEventListener('pointerup',this.up);host.addEventListener('pointercancel',this.up);host.addEventListener('lostpointercapture',this.up);document.addEventListener('visibilitychange',this.onHide);this.setView('space');this.update(0,90,0);this.resize();
 }
 static async create(host:HTMLElement,base:URL,onChange:(kind:'moon'|'observer',value:number)=>void,onFinish:()=>void,onTick:(dt:number)=>void,moonMode=false){const loader=new T.TextureLoader();const [e,m]=await Promise.all([loader.loadAsync(new URL('images/science/earth-orbit/v0.1/bodies/earth-surface-equirect-v02.png',base).href),loader.loadAsync(new URL('images/science/earth-lab/v1/moon-lroc-2k.jpg',base).href)]);return new TideStage(host,e,m,onChange,onFinish,onTick,moonMode);}
 private makeHandle(name:string,point:()=>T.Vector3,kind:'moon'|'observer'){
  const b=document.createElement('button');b.type='button';b.className='world-handle '+kind;b.setAttribute('aria-label',name);b.setAttribute('role','slider');b.setAttribute('aria-valuemin','0');b.setAttribute('aria-valuemax','359');b.innerHTML=`<span class="handle-ring"></span><span class="handle-label">${kind==='moon'?'月球 · 拖動':'海岸觀測點'}</span>`;this.host.append(b);this.labelNodes.push({node:b,point});
  b.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();if(kind==='moon')this.drag=true;else this.dragObserver=true;this.orbit.enabled=false;this.host.setPointerCapture(e.pointerId);const current=kind==='moon'?this.moonAngle:this.observerAngle,raw=this.pointerAngle(e);this.dragOffset=raw===null?0:current-raw;this.onChange(kind,current);});
  b.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();const a=kind==='moon'?this.moonAngle:this.observerAngle;this.onChange(kind,e.key==='Home'?0:e.key==='End'?270:wrap(a+(['ArrowRight','ArrowUp'].includes(e.key)?5:-5)));this.onFinish();});return b;
 }
 private label(text:string,point:()=>T.Vector3,kind='general'){const node=document.createElement('span');node.className='world-label';node.dataset.kind=kind;learningText(node,text);this.host.append(node);this.labelNodes.push({node,point});}
 private makeGuides(){
  const pts=Array.from({length:181},(_,i)=>new T.Vector3(Math.cos(i/180*Math.PI*2)*3.75,0,Math.sin(i/180*Math.PI*2)*3.75));const orbit=new T.LineLoop(new T.BufferGeometry().setFromPoints(pts),new T.LineDashedMaterial({color:0x5b91b5,transparent:true,opacity:.25,dashSize:.09,gapSize:.09}));orbit.computeLineDistances();this.guides.add(orbit);
  const axis=new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(0,-2.7,0),new T.Vector3(0,2.7,0)]),new T.LineBasicMaterial({color:0x7fe5d5,transparent:true,opacity:.13}));this.guides.add(axis);
  for(const z of [-1.5,0,1.5]){const a=new T.ArrowHelper(new T.Vector3(-1,0,0),new T.Vector3(6.5,0,z),1.8,0xffd18a,.22,.11);this.guides.add(a);}
 }
 private makeSun(){const sun=new T.Mesh(new T.SphereGeometry(.65,48,32),sunMaterial());sun.position.set(7,0,0);this.scene.add(sun);const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d')!;const g=x.createRadialGradient(64,64,14,64,64,64);g.addColorStop(0,'#ffd475bb');g.addColorStop(1,'#ffc66a00');x.fillStyle=g;x.fillRect(0,0,128,128);const sprite=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(c),transparent:true,depthWrite:false,blending:T.AdditiveBlending}));sprite.position.copy(sun.position);sprite.scale.setScalar(3.5);this.scene.add(sprite);}
 private makeStars(){let seed=73;const rand=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};const pos=[];for(let i=0;i<650;i++){const a=rand()*Math.PI*2,y=rand()*2-1,r=45;const s=Math.sqrt(1-y*y);pos.push(r*s*Math.cos(a),r*y,r*s*Math.sin(a));}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));this.scene.add(new T.Points(g,new T.PointsMaterial({color:0xabc6e6,size:.075,transparent:true,opacity:.65})));}
 update(a:number,observer:number,time:number){this.moonAngle=a;this.observerAngle=observer;this.moon.position.set(3.75*Math.cos(radians(a)),0,-3.75*Math.sin(radians(a)));this.moon.rotation.y=radians(a);this.earth.rotation.y=-.8+radians(time);this.water.visible=!this.moonMode;
  const pos=this.shellGeometry.attributes.position;for(let i=0;i<pos.count;i++){const x=this.normals[i*3],y=this.normals[i*3+1],z=this.normals[i*3+2],r=shellRadius(x,y,z,a);pos.setXYZ(i,x*r,y*r,z*r);}pos.needsUpdate=true;this.shellGeometry.computeVertexNormals();
  this.marker.position.set(Math.cos(radians(observer))*2.035,.03,-Math.sin(radians(observer))*2.035);this.markerButton.hidden=this.moonMode;const front=this.marker.position.dot(this.camera.position.clone().sub(this.marker.position))>0;learningText(this.markerButton.querySelector('.handle-label')!,front?'海岸觀測點':'背側海岸觀測點');this.moonButton.setAttribute('aria-valuenow',String(Math.round(wrap(a))%360));this.markerButton.setAttribute('aria-valuenow',String(Math.round(wrap(observer))%360));this.wake();
 }
 setView(view:View){this.camera.up.set(0,view==='top'?0:1,view==='top'?-1:0);this.orbit.target.set(view==='coast'?0:this.host.clientWidth<550?1.7:1.05,0,0);if(view==='space'&&(this.host.clientWidth<550||this.host.clientWidth/this.host.clientHeight<1.5)){this.orbit.target.x=1.7;this.camera.position.set(13,7,17);}else this.camera.position.copy(view==='top'?new T.Vector3(this.host.clientWidth<550?1.7:1.05,this.host.clientWidth<550?23:17,.001):view==='coast'?new T.Vector3(0,3.2,8):new T.Vector3(10,3.2,10.4));this.orbit.update();this.movingUntil=performance.now()+450;this.wake();}
 zoom(factor:number){this.camera.position.sub(this.orbit.target).multiplyScalar(factor).add(this.orbit.target);this.camera.position.clampLength(7,25);this.orbit.update();this.wake();}
 private resize(){const w=this.host.clientWidth,h=this.host.clientHeight;if(!w||!h)return;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.wake();}
 playing=false;
 wake(){if(this.destroyed)return;if(document.hidden){this.drawFrame();return;}if(this.frame)return;this.last=0;this.frame=requestAnimationFrame(this.render);}
 private render=(now:number)=>{this.frame=-1;if(this.destroyed||document.hidden){this.frame=0;return;}const dt=this.last?Math.min((now-this.last)/1000,.06):0;this.last=now;if(this.playing){this.onTick(dt);if(!this.reducedMotion)this.surfaceTime+=dt;(this.water.material as T.ShaderMaterial).uniforms.surfaceTime.value=this.surfaceTime;}this.orbit.update();this.drawFrame();if(this.playing||now<this.movingUntil)this.frame=requestAnimationFrame(this.render);else this.frame=0;};
 private drawFrame(){
  this.host.dataset.waterTime=this.surfaceTime.toFixed(3);this.host.dataset.waterDetail=this.reducedMotion?'still':'ripples';
  this.host.dataset.camera=this.camera.position.toArray().map(v=>v.toFixed(2)).join(',');this.renderer.render(this.scene,this.camera);
  const sunScreen=new T.Vector3(7,0,0).project(this.camera);this.host.dataset.sunVisible=String(Math.abs(sunScreen.x)<.9&&Math.abs(sunScreen.y)<.9&&sunScreen.z<1);
  const rayToMoon=this.moon.position.clone().sub(this.camera.position);const t=-this.camera.position.dot(rayToMoon)/rayToMoon.lengthSq();const behind=t>0&&t<1&&this.camera.position.clone().addScaledVector(rayToMoon,t).length()<2.1;
  this.moonButton.classList.toggle('occluded',behind);learningText(this.moonButton.querySelector('.handle-label')!,behind?'月球在地球後方 · 拖動':'月球 · 拖動');
  const front=this.marker.position.dot(this.camera.position.clone().sub(this.marker.position))>0;learningText(this.markerButton.querySelector('.handle-label')!,front?'海岸觀測點':'背側海岸觀測點');
  const hostRect=this.host.getBoundingClientRect(),width=this.host.clientWidth,height=this.host.clientHeight;
  const blocked:Rect[]=[];const items:LabelAnchor[]=[];const entries=new Map<string,{element:HTMLElement;anchorX:number;anchorY:number;handle:HTMLElement|null}>();
  const relative=(r:DOMRect):Rect=>({x:r.left-hostRect.left,y:r.top-hostRect.top,width:r.width,height:r.height});
  for(const selector of ['.world-top','.view-controls','.phase-options','.actions','.world-hint']){const el=this.host.parentElement!.querySelector<HTMLElement>(selector);if(el&&el.offsetWidth&&getComputedStyle(el).display!=='none')blocked.push(relative(el.getBoundingClientRect()));}
  this.labelLeaders.replaceChildren();
  const tether=(x:number,y:number,endX:number,endY:number,handle=false)=>{if(Math.hypot(endX-x,endY-y)<=14)return;const line=document.createElementNS('http://www.w3.org/2000/svg','line');for(const [name,value] of Object.entries({x1:x,y1:y,x2:endX,y2:endY}))line.setAttribute(name,String(value));if(handle)line.setAttribute('stroke-dasharray','3 3');this.labelLeaders.append(line);};
  const projected=this.labelNodes.map(l=>{const p=l.point().clone().project(this.camera);return {l,x:(p.x*.5+.5)*width,y:(-p.y*.5+.5)*height,visible:Math.abs(p.x)<=1.05&&Math.abs(p.y)<=1.05&&p.z<=1};});
  const handleItems:LabelAnchor[]=[];
  for(let i=0;i<projected.length;i++){const {l,x,y,visible}=projected[i];l.node.style.visibility=visible?'visible':'hidden';if(!l.node.classList.contains('world-handle'))continue;l.node.querySelector<HTMLElement>('.handle-label')!.style.visibility='inherit';if(l.node.hidden||!visible||getComputedStyle(l.node).visibility==='hidden')continue;handleItems.push({id:String(i),x,y:y-(l.node===this.moonButton&&behind?64:0),width:l.node.offsetWidth,height:l.node.offsetHeight});}
  const handlePositions=placeLabels(handleItems,blocked,width,height);
  for(let i=0;i<projected.length;i++){
   const {l,x:physicalX,y:physicalY,visible}=projected[i];const isHandle=l.node.classList.contains('world-handle');let x=physicalX,y=physicalY;
   if(isHandle){const pos=handlePositions.get(String(i));if(!pos){l.node.style.visibility='hidden';continue;}x=pos.x+pos.width/2;y=pos.y+pos.height/2;tether(physicalX,physicalY,x,y,true);}
   l.node.style.left=`${x}px`;l.node.style.top=`${y}px`;
   if(l.node.hidden||!visible||!l.node.offsetWidth||getComputedStyle(l.node).visibility==='hidden')continue;
   const element=isHandle?l.node.querySelector<HTMLElement>('.handle-label')!:l.node;
   if(isHandle)blocked.push(relative(l.node.getBoundingClientRect()));
   const id=String(i);items.push({id,x,y,width:element.offsetWidth,height:element.offsetHeight,handle:isHandle?l.node.offsetHeight/2:undefined});entries.set(id,{element,anchorX:x,anchorY:y,handle:isHandle?l.node:null});
  }
  const placed=placeLabels(items,blocked,width,height);let missing=handleItems.length-handlePositions.size;
  for(const item of items){const entry=entries.get(item.id)!,rect=placed.get(item.id);if(!rect){entry.element.style.visibility='hidden';missing++;continue;}entry.element.style.visibility='visible';entry.element.style.transform='none';entry.element.style.bottom='auto';
   entry.element.style.left=`${rect.x-(entry.handle?relative(entry.handle.getBoundingClientRect()).x+entry.handle.clientLeft:0)}px`;entry.element.style.top=`${rect.y-(entry.handle?relative(entry.handle.getBoundingClientRect()).y+entry.handle.clientTop:0)}px`;
   const endX=Math.max(rect.x,Math.min(entry.anchorX,rect.x+rect.width)),endY=Math.max(rect.y,Math.min(entry.anchorY,rect.y+rect.height));
   tether(entry.anchorX,entry.anchorY,endX,endY);
  }
  this.host.dataset.labelLayout=missing?'crowded':'clear';this.host.dataset.renderAngle=String(Math.round(wrap(this.moonAngle))%360);
 }
 dispose(){this.destroyed=true;cancelAnimationFrame(this.frame);this.orbit.dispose();this.observer.disconnect();document.removeEventListener('visibilitychange',this.onHide);this.host.removeEventListener('pointermove',this.move);this.host.removeEventListener('pointerup',this.up);this.host.removeEventListener('pointercancel',this.up);this.host.removeEventListener('lostpointercapture',this.up);this.scene.traverse(o=>{if(o instanceof T.Sprite){o.material.map?.dispose();o.material.dispose();}if(o instanceof T.Mesh||o instanceof T.Line||o instanceof T.Points){o.geometry.dispose();const mats=Array.isArray(o.material)?o.material:[o.material];mats.forEach(m=>m.dispose());}});this.earthTexture.dispose();this.moonTexture.dispose();this.renderer.dispose();this.labelNodes.forEach(l=>l.node.remove());this.labelLeaders.remove();this.renderer.domElement.remove();}
}
