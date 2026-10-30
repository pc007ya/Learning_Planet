import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { planetMaterial,waterMaterial,sunMaterial } from './materials';
import { EARTH_RADIUS,shellRadius } from './science';
import { radians,wrap } from '../tides/model';
export type View='space'|'top'|'coast';
export class TideStage{
 readonly renderer:T.WebGLRenderer;readonly scene=new T.Scene();readonly camera=new T.PerspectiveCamera(38,1,.1,150);readonly orbit:OrbitControls;
 readonly earth:T.Mesh;readonly moon:T.Mesh;readonly water:T.Mesh;readonly marker=new T.Group();
 private readonly sun=new T.Vector3(1,0,0);private readonly shellGeometry=new T.SphereGeometry(1,80,48);private readonly normals:Float32Array;
 private readonly guides=new T.Group();private readonly labelNodes:{node:HTMLElement;point:()=>T.Vector3}[]=[];
 private readonly earthTexture:T.Texture;private readonly moonTexture:T.Texture;private observer:ResizeObserver;
 private moonAngle=0;private observerAngle=90;private frame=0;private movingUntil=0;private destroyed=false;private drag=false;private dragObserver=false;
 private readonly moonButton:HTMLButtonElement;private readonly markerButton:HTMLButtonElement;private last=0;private readonly onHide=()=>{if(document.hidden){cancelAnimationFrame(this.frame);this.frame=0;}else this.wake();};
 private readonly onControls=()=>{this.movingUntil=performance.now()+400;this.wake();};
 private readonly move=(e:PointerEvent)=>{if(!this.drag&&!this.dragObserver)return;e.preventDefault();const r=this.host.getBoundingClientRect();const ndc=new T.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);const ray=new T.Raycaster();ray.setFromCamera(ndc,this.camera);const hit=new T.Vector3();if(ray.ray.intersectPlane(new T.Plane(new T.Vector3(0,1,0),0),hit)){const a=wrap(Math.atan2(-hit.z,hit.x)*180/Math.PI);this.onChange(this.dragObserver?'observer':'moon',a);} };
 private readonly up=()=>{if(this.drag||this.dragObserver){this.drag=false;this.dragObserver=false;this.orbit.enabled=true;this.onFinish();}};
 constructor(private host:HTMLElement,earthTexture:T.Texture,moonTexture:T.Texture,private onChange:(kind:'moon'|'observer',value:number)=>void,private onFinish:()=>void,private onTick:(dt:number)=>void,private moonMode=false){
  this.earthTexture=earthTexture;this.moonTexture=moonTexture;earthTexture.colorSpace=T.NoColorSpace;moonTexture.colorSpace=T.NoColorSpace;earthTexture.anisotropy=4;moonTexture.anisotropy=4;
  this.scene.background=new T.Color(0x050e1d);this.renderer=new T.WebGLRenderer({antialias:true,powerPreference:'low-power'});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.12;host.prepend(this.renderer.domElement);
  const canvas=this.renderer.domElement;canvas.setAttribute('role','img');canvas.setAttribute('aria-label',moonMode?'可旋轉的立體地球與月球。空白處拖曳轉視角。':'可旋轉的立體地球、月球與理想海水殼。空白處拖曳轉視角。');
  this.orbit=new OrbitControls(this.camera,canvas);this.orbit.enablePan=false;this.orbit.enableDamping=true;this.orbit.dampingFactor=.09;this.orbit.minDistance=7;this.orbit.maxDistance=25;this.orbit.minPolarAngle=.12;this.orbit.maxPolarAngle=Math.PI*.48;this.orbit.addEventListener('change',this.onControls);
  this.earth=new T.Mesh(new T.SphereGeometry(EARTH_RADIUS,96,64),planetMaterial(earthTexture,this.sun));this.earth.rotation.y=2.3;this.scene.add(this.earth);
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
  b.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();if(kind==='moon')this.drag=true;else this.dragObserver=true;this.orbit.enabled=false;this.host.setPointerCapture(e.pointerId);this.onChange(kind,kind==='moon'?this.moonAngle:this.observerAngle);});
  b.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();const a=kind==='moon'?this.moonAngle:this.observerAngle;this.onChange(kind,e.key==='Home'?0:e.key==='End'?270:wrap(a+(['ArrowRight','ArrowUp'].includes(e.key)?5:-5)));this.onFinish();});return b;
 }
 private label(text:string,point:()=>T.Vector3,kind='general'){const node=document.createElement('span');node.className='world-label';node.dataset.kind=kind;node.textContent=text;this.host.append(node);this.labelNodes.push({node,point});}
 private makeGuides(){
  const pts=Array.from({length:181},(_,i)=>new T.Vector3(Math.cos(i/180*Math.PI*2)*3.75,0,Math.sin(i/180*Math.PI*2)*3.75));const orbit=new T.LineLoop(new T.BufferGeometry().setFromPoints(pts),new T.LineDashedMaterial({color:0x5b91b5,transparent:true,opacity:.5,dashSize:.09,gapSize:.09}));orbit.computeLineDistances();this.guides.add(orbit);
  const axis=new T.Line(new T.BufferGeometry().setFromPoints([new T.Vector3(0,-2.7,0),new T.Vector3(0,2.7,0)]),new T.LineBasicMaterial({color:0x7fe5d5,transparent:true,opacity:.4}));this.guides.add(axis);
  for(let k=0;k<3;k++){const line=new T.LineLoop(new T.BufferGeometry(),new T.LineBasicMaterial({color:0x6cdaff,transparent:true,opacity:k===0?.6:.2}));line.name='water-guide-'+k;this.guides.add(line);}
  for(const z of [-1.5,0,1.5]){const a=new T.ArrowHelper(new T.Vector3(-1,0,0),new T.Vector3(6.5,0,z),1.8,0xffd18a,.22,.11);this.guides.add(a);}
 }
 private makeSun(){const sun=new T.Mesh(new T.SphereGeometry(.65,48,32),sunMaterial());sun.position.set(7,0,0);this.scene.add(sun);const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d')!;const g=x.createRadialGradient(64,64,14,64,64,64);g.addColorStop(0,'#ffd475bb');g.addColorStop(1,'#ffc66a00');x.fillStyle=g;x.fillRect(0,0,128,128);const sprite=new T.Sprite(new T.SpriteMaterial({map:new T.CanvasTexture(c),transparent:true,depthWrite:false,blending:T.AdditiveBlending}));sprite.position.copy(sun.position);sprite.scale.setScalar(3.5);this.scene.add(sprite);}
 private makeStars(){let seed=73;const rand=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};const pos=[];for(let i=0;i<650;i++){const a=rand()*Math.PI*2,y=rand()*2-1,r=45;const s=Math.sqrt(1-y*y);pos.push(r*s*Math.cos(a),r*y,r*s*Math.sin(a));}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));this.scene.add(new T.Points(g,new T.PointsMaterial({color:0xabc6e6,size:.075,transparent:true,opacity:.65})));}
 update(a:number,observer:number,time:number){this.moonAngle=a;this.observerAngle=observer;this.moon.position.set(3.75*Math.cos(radians(a)),0,-3.75*Math.sin(radians(a)));this.moon.rotation.y=radians(a);this.earth.rotation.y=2.3+radians(time);this.water.visible=!this.moonMode;
  const pos=this.shellGeometry.attributes.position;for(let i=0;i<pos.count;i++){const x=this.normals[i*3],y=this.normals[i*3+1],z=this.normals[i*3+2],r=shellRadius(x,y,z,a);pos.setXYZ(i,x*r,y*r,z*r);}pos.needsUpdate=true;this.shellGeometry.computeVertexNormals();
  for(let k=0;k<3;k++){const points=[];for(let j=0;j<180;j++){const t=j/180*Math.PI*2;let x=Math.cos(t),y=0,z=Math.sin(t);if(k===1){y=z;z=0;}if(k===2){y=x;x=0;}const r=shellRadius(x,y,z,a)+.005;points.push(new T.Vector3(x*r,y*r,z*r));}const line=this.guides.getObjectByName('water-guide-'+k) as T.Line;line.geometry.dispose();line.geometry=new T.BufferGeometry().setFromPoints(points);line.visible=!this.moonMode;}
  this.marker.position.set(Math.cos(radians(observer))*2.035,.03,-Math.sin(radians(observer))*2.035);this.markerButton.hidden=this.moonMode;const front=this.marker.position.dot(this.camera.position.clone().sub(this.marker.position))>0;this.markerButton.querySelector('.handle-label')!.textContent=front?'海岸觀測點':'背側海岸觀測點';this.moonButton.setAttribute('aria-valuenow',String(Math.round(wrap(a))%360));this.markerButton.setAttribute('aria-valuenow',String(Math.round(wrap(observer))%360));this.wake();
 }
 setView(view:View){this.camera.up.set(0,view==='top'?0:1,view==='top'?-1:0);this.orbit.target.set(view==='coast'?0:this.host.clientWidth<550?1.7:1.05,0,0);if(view==='space'&&this.host.clientWidth<550){this.orbit.target.x=1.7;this.camera.position.set(6,6.5,15);}else this.camera.position.copy(view==='top'?new T.Vector3(this.host.clientWidth<550?1.7:1.05,this.host.clientWidth<550?23:17,.001):view==='coast'?new T.Vector3(0,3.2,8):new T.Vector3(5.4,6.4,12.8));this.orbit.update();this.movingUntil=performance.now()+450;this.wake();}
 zoom(factor:number){this.camera.position.sub(this.orbit.target).multiplyScalar(factor).add(this.orbit.target);this.camera.position.clampLength(7,25);this.orbit.update();this.wake();}
 private resize(){const w=this.host.clientWidth,h=this.host.clientHeight;if(!w||!h)return;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.wake();}
 playing=false;
 wake(){if(this.destroyed)return;if(document.hidden){this.drawFrame();return;}if(this.frame)return;this.last=0;this.frame=requestAnimationFrame(this.render);}
 private render=(now:number)=>{this.frame=-1;if(this.destroyed||document.hidden){this.frame=0;return;}const dt=this.last?Math.min((now-this.last)/1000,.06):0;this.last=now;if(this.playing)this.onTick(dt);this.orbit.update();this.drawFrame();if(this.playing||now<this.movingUntil)this.frame=requestAnimationFrame(this.render);else this.frame=0;};
 private drawFrame(){
  this.host.dataset.camera=this.camera.position.toArray().map(v=>v.toFixed(2)).join(',');this.renderer.render(this.scene,this.camera);
  const rayToMoon=this.moon.position.clone().sub(this.camera.position);const t=-this.camera.position.dot(rayToMoon)/rayToMoon.lengthSq();const behind=t>0&&t<1&&this.camera.position.clone().addScaledVector(rayToMoon,t).length()<2.1;
  this.moonButton.classList.toggle('occluded',behind);this.moonButton.querySelector('.handle-label')!.textContent=behind?'月球在地球後方 · 拖動':'月球 · 拖動';
  const front=this.marker.position.dot(this.camera.position.clone().sub(this.marker.position))>0;this.markerButton.querySelector('.handle-label')!.textContent=front?'海岸觀測點':'背側海岸觀測點';
  for(const l of this.labelNodes){const p=l.point().clone().project(this.camera);const y=(-p.y*.5+.5)*this.host.clientHeight-(l.node===this.moonButton&&behind?64:0);l.node.style.left=`${(p.x*.5+.5)*this.host.clientWidth}px`;l.node.style.top=`${y}px`;l.node.classList.toggle('label-above',l.node===this.moonButton&&behind||y>this.host.clientHeight-145);l.node.style.visibility=Math.abs(p.x)>1.05||Math.abs(p.y)>1.05||p.z>1?'hidden':'visible';}this.host.dataset.renderAngle=String(Math.round(wrap(this.moonAngle))%360);
 }
 dispose(){this.destroyed=true;cancelAnimationFrame(this.frame);this.orbit.dispose();this.observer.disconnect();document.removeEventListener('visibilitychange',this.onHide);this.host.removeEventListener('pointermove',this.move);this.host.removeEventListener('pointerup',this.up);this.host.removeEventListener('pointercancel',this.up);this.host.removeEventListener('lostpointercapture',this.up);this.scene.traverse(o=>{if(o instanceof T.Sprite){o.material.map?.dispose();o.material.dispose();}if(o instanceof T.Mesh||o instanceof T.Line||o instanceof T.Points){o.geometry.dispose();const mats=Array.isArray(o.material)?o.material:[o.material];mats.forEach(m=>m.dispose());}});this.earthTexture.dispose();this.moonTexture.dispose();this.renderer.dispose();this.labelNodes.forEach(l=>l.node.remove());this.renderer.domElement.remove();}
}
