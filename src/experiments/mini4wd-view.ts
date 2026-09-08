import * as T from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {MiniCarModel} from './mini4wd-model';
import {completeParts,PARTS} from './mini4wd-parts';
import {STEP,createCar,stepCar,collideCars,type TrackKind,type CarState,type Setup,DEFAULT_SETUP} from './mini4wd-physics';
import {makeToyTrack,disposeTrack} from './mini4wd-track';
import {GhostRecorder,ghostAt,type GhostLap} from './mini4wd-ghost';

export class Mini4wdView{
  private track:TrackKind='flat';
  private ghosts=new Map<TrackKind,GhostLap>();private recording=new GhostRecorder();private ghost?:MiniCarModel;private activeGhost?:GhostLap;private savedGhost=false;
  hasGhost(){return this.ghosts.has(this.track);}
  ghostTime(){return this.activeGhost?.time;}
  isCollisionRun(){return this.compare;}
  hideGhost(){this.activeGhost=undefined;if(this.ghost)this.ghost.root.visible=false;this.wake();}
  readonly car=new MiniCarModel();state=createCar();setup={...DEFAULT_SETUP};onUpdate?:(state:CarState)=>void;onPick?:(id:string)=>void;
  private renderer:T.WebGLRenderer;private scene=new T.Scene();private camera=new T.PerspectiveCamera(42,1,.025,300);private environment:T.WebGLRenderTarget;
  private halo=new T.Box3Helper(new T.Box3(),0xffdc89);private balloon:HTMLSpanElement;
  private arena=new T.Group();private plinth=new T.Group();private rival=new MiniCarModel();private rivalState=createCar(1);private race=false;private running=false;private power=false;
  private first=false;private reduced=true;private frame=0;private previous=0;private accumulator=0;private distance=0;private lastUI=0;private dead=false;private orbit={yaw:.75,pitch:.38,zoom:5.2};
  private installed=completeParts();private exploded=false;private xray=false;private selected='';private observer:ResizeObserver;private abort=new AbortController();
  private dragging?:{x:number;y:number;yaw:number;pitch:number;id:number;moved:boolean};private audio?:AudioContext;private oscillator?:OscillatorNode;private gain?:GainNode;private sound=false;private compare=false;
  private look=new T.Vector3();private goal=new T.Vector3();private target=new T.Vector3();private wind?:AudioBufferSourceNode;private windGain?:GainNode;
  private explodedBounds=new T.Sphere();
  private explodedCorners:T.Vector3[]=[];
  constructor(private stage:HTMLElement){
    this.renderer=new T.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});this.renderer.setPixelRatio(1);this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.toneMapping=T.ACESFilmicToneMapping;
    this.renderer.domElement.setAttribute('aria-label','四驅車模型，可拖動旋轉，也可點零件');this.renderer.domElement.tabIndex=0;stage.append(this.renderer.domElement);
    const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(this.renderer);this.environment=pmrem.fromScene(room,.04);this.scene.environment=this.environment.texture;this.scene.environmentIntensity=.4;this.renderer.toneMappingExposure=.85;room.dispose();pmrem.dispose();
    this.scene.add(new T.HemisphereLight(0xc6eaff,0x263856,1.1));const sun=new T.DirectionalLight(0xfff3d0,1.8);sun.position.set(12,35,-18);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-40,right:40,top:32,bottom:-32});sun.shadow.bias=-.0002;this.scene.add(sun);
    const floor=new T.Mesh(new T.CylinderGeometry(2.25,2.30,.18,64),new T.MeshStandardMaterial({color:0x182a43,metalness:.45,roughness:.35}));floor.position.y=-.16;floor.receiveShadow=true;this.plinth.add(floor);
    const ring=new T.Mesh(new T.TorusGeometry(2.17,.012,6,100),new T.MeshBasicMaterial({color:0x6ce8ff}));ring.rotation.x=Math.PI/2;ring.position.y=-.058;this.plinth.add(ring);
    this.scene.add(this.plinth,this.car.root,this.arena,this.rival.root);this.rival.root.visible=false;this.buildTrack();this.arena.visible=false;
    this.observer=new ResizeObserver(()=>{this.resize();this.wake();});this.observer.observe(stage);
    const signal=this.abort.signal,canvas=this.renderer.domElement;
    canvas.addEventListener('pointerdown',e=>{if(this.race)return;this.dragging={x:e.clientX,y:e.clientY,yaw:this.orbit.yaw,pitch:this.orbit.pitch,id:e.pointerId,moved:false};canvas.setPointerCapture(e.pointerId);},{signal});
    canvas.addEventListener('pointermove',e=>{if(!this.dragging)return;const d=this.dragging,dx=e.clientX-d.x,dy=e.clientY-d.y;if(Math.hypot(dx,dy)>5)d.moved=true;this.orbit.yaw=d.yaw-dx*.008;this.orbit.pitch=Math.max(.15,Math.min(1.35,d.pitch+dy*.006));this.wake();},{signal});
    canvas.addEventListener('pointerup',e=>{if(!this.dragging)return;const moved=this.dragging.moved;this.dragging=undefined;if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(!moved){const r=canvas.getBoundingClientRect(),ray=new T.Raycaster();ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2),this.camera);for(const hit of ray.intersectObject(this.car.root,true)){let o:T.Object3D|null=hit.object;while(o&&!o.userData.part)o=o.parent;if(o&&o.visible){this.onPick?.(o.userData.part);break;}}}},{signal});
    canvas.addEventListener('pointercancel',()=>{this.dragging=undefined;},{signal});
    canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)&&!this.race){e.preventDefault();this.orbit.yaw+=(e.key==='ArrowLeft'?-.12:e.key==='ArrowRight'?.12:0);this.orbit.pitch=Math.max(.15,Math.min(1.35,this.orbit.pitch+(e.key==='ArrowUp'?.1:e.key==='ArrowDown'?-.1:0)));this.wake();}if(e.key.toLowerCase()==='c')this.setCamera(!this.first);},{signal});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(this.frame);this.frame=0;this.previous=0;this.gain?.gain.setTargetAtTime(0,this.audio!.currentTime,.05);}else this.wake();},{signal});
    canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();this.pause();this.stage.dispatchEvent(new CustomEvent('mini4wd-error',{bubbles:true,detail:'3D 畫面暫停，請返回後重新開啟。'}));},{signal});
    this.scene.add(this.halo);this.halo.visible=false;(this.halo.material as T.LineBasicMaterial).depthTest=false;this.halo.renderOrder=20;this.balloon=document.createElement('span');this.balloon.className='m4-balloon';this.balloon.hidden=true;stage.append(this.balloon);
    this.resize();this.wake();
  }
  private buildTrack(){this.arena.add(makeToyTrack(this.track));}
  private resize(){const w=Math.max(1,this.stage.clientWidth),h=Math.max(1,this.stage.clientHeight);const scale=Math.min(1,1280/w,800/h);this.renderer.setSize(Math.round(w*scale),Math.round(h*scale),false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();}
  setMode(race:boolean){this.pause();this.race=race;this.arena.visible=race;this.plinth.visible=!race;this.rival.root.visible=race&&this.compare;if(this.ghost)this.ghost.root.visible=race&&!!this.activeGhost;this.power=false;this.car.root.position.set(0,0,0);this.car.root.rotation.set(0,0,0);this.camera.fov=race?65:42;this.camera.updateProjectionMatrix();this.previous=0;this.layout();this.wake();}
  configure(s:Setup){this.setup={...s};this.car.configure(s);this.wake();}
  setParts(installed:Set<string>,explode:boolean,xray:boolean,selected=''){this.installed=new Set(installed);if(explode&&!this.exploded)this.orbit.zoom=5.2;this.exploded=explode;this.xray=xray;this.selected=selected;this.layout();this.wake();}
  private layout(){
    this.car.layout(this.race?completeParts():this.installed,this.race?0:Number(this.exploded),!this.race&&this.xray,this.race?'':this.selected);
    if(this.exploded){
      const visibleBounds=new T.Box3();for(const part of this.car.parts.values())if(part.visible)visibleBounds.union(new T.Box3().setFromObject(part));visibleBounds.getBoundingSphere(this.explodedBounds);this.explodedCorners=[];
      for(const part of this.car.parts.values())if(part.visible){const b=new T.Box3().setFromObject(part);for(const x of [b.min.x,b.max.x])for(const y of [b.min.y,b.max.y])for(const z of [b.min.z,b.max.z])this.explodedCorners.push(new T.Vector3(x,y,z).sub(this.explodedBounds.center));}
    }
  }
  setCamera(first:boolean){this.first=first;this.previous=0;this.wake();}
  setTrack(track:TrackKind){if(this.track===track)return;this.pause();disposeTrack(this.arena);this.track=track;this.buildTrack();this.reset();this.wake();}
  setReduced(v:boolean){this.reduced=v;this.wake();}
  setPower(v:boolean){this.power=v;this.wake();}
  zoom(delta:number){this.orbit.zoom=Math.max(4,Math.min(11,this.orbit.zoom+delta));this.wake();}
  reset(){this.state=createCar();this.rivalState=createCar(1);this.rival.root.visible=false;if(this.ghost)this.ghost.root.visible=false;this.activeGhost=undefined;this.distance=0;this.wake();}
  run(compare=false,withGhost=false){
    this.state=createCar();this.rivalState=createCar(1);this.compare=compare;this.rival.root.visible=compare;this.rival.configure({...DEFAULT_SETUP,color:'#ff9266'});
    this.activeGhost=!compare&&withGhost?this.ghosts.get(this.track):undefined;
    if(this.activeGhost){
      if(!this.ghost){this.ghost=new MiniCarModel();this.scene.add(this.ghost.root);}
      this.ghost.configure(this.activeGhost.setup);this.ghost.layout(completeParts(),0,false,'');
      this.ghost.root.traverse(o=>{if(o instanceof T.Mesh){o.castShadow=false;o.receiveShadow=false;for(const m of (Array.isArray(o.material)?o.material:[o.material])){m.transparent=true;m.opacity=.30;m.depthWrite=false;if(m instanceof T.MeshStandardMaterial){m.color.set(0xb4acff);m.emissive.set(0x6454c7);m.emissiveIntensity=.45;}}}});
    }
    if(this.ghost)this.ghost.root.visible=!!this.activeGhost;
    this.recording.start(this.state);this.savedGhost=false;this.running=true;this.accumulator=0;this.distance=0;this.wake();
  }
  pause(){this.running=false;this.power=false;if(this.gain)this.gain.gain.setTargetAtTime(0,this.audio!.currentTime,.05);if(this.windGain)this.windGain.gain.setTargetAtTime(0,this.audio!.currentTime,.05);this.wake();}
  setSound(v:boolean){this.sound=v;if(v&&!this.audio){try{this.audio=new AudioContext();this.oscillator=this.audio.createOscillator();this.gain=this.audio.createGain();this.oscillator.type='sawtooth';this.gain.gain.value=0;this.oscillator.connect(this.gain);this.gain.connect(this.audio.destination);this.oscillator.start();
    const buffer=this.audio.createBuffer(1,this.audio.sampleRate,this.audio.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
    this.wind=this.audio.createBufferSource();this.wind.buffer=buffer;this.wind.loop=true;const filter=this.audio.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1100;this.windGain=this.audio.createGain();this.windGain.gain.value=0;this.wind.connect(filter);filter.connect(this.windGain);this.windGain.connect(this.audio.destination);this.wind.start();
    }catch{this.sound=false;}}if(v)void this.audio?.resume();else{if(this.gain)this.gain.gain.value=0;if(this.windGain)this.windGain.gain.value=0;}}
  thumbnails(){
    const result:Record<string,string>={};const old=this.renderer.getSize(new T.Vector2());this.renderer.setSize(160,110,false);const camera=new T.PerspectiveCamera(35,160/110,.01,100);this.plinth.visible=false;
    for(const [id,g] of this.car.parts){
      for(const [other,p] of this.car.parts)p.visible=other===id;
      const target=id==='gears'?this.car.gears[1]:id==='rollers'?g.children[0]:g;
      const previous=g.children.map(child=>child.visible);
      if(target!==g)g.children.forEach((child,i)=>child.visible=id==='rollers'?i<2:child===target);
      const b=new T.Box3().setFromObject(target),center=b.getCenter(new T.Vector3()),radius=b.getBoundingSphere(new T.Sphere()).radius,d=radius/Math.sin(T.MathUtils.degToRad(17.5))*.92;
      camera.position.copy(center).add(new T.Vector3(.85,.60,1).normalize().multiplyScalar(d));camera.lookAt(center);this.renderer.render(this.scene,camera);result[id]=this.renderer.domElement.toDataURL('image/png');g.children.forEach((child,i)=>child.visible=previous[i]);
    }
    this.renderer.setSize(old.x,old.y,false);this.plinth.visible=true;this.layout();this.wake();return result;
  }
  trackThumbnails(){
    const result:Record<string,string>={},old=this.renderer.getSize(new T.Vector2());this.renderer.setSize(256,144,false);
    this.car.root.visible=false;this.plinth.visible=false;
    const camera=new T.PerspectiveCamera(40,256/144,.1,300);camera.position.set(43,59,58);camera.lookAt(0,0,0);
    for(const kind of ['flat','bridge','jump'] as const){const model=makeToyTrack(kind);this.scene.add(model);this.renderer.render(this.scene,camera);result[kind]=this.renderer.domElement.toDataURL('image/png');this.scene.remove(model);disposeTrack(model);}
    this.car.root.visible=true;this.plinth.visible=true;this.renderer.setSize(old.x,old.y,false);this.wake();return result;
  }
  optionThumbnails(){
    const result:Record<string,string>={},old=this.renderer.getSize(new T.Vector2());this.renderer.setSize(200,120,false);this.plinth.visible=false;
    const camera=new T.PerspectiveCamera(35,200/120,.01,100);
    const options:[string,string,Partial<Setup>][]=[['tire:grip','tire-fl',{tire:'grip'}],['tire:hard','tire-fl',{tire:'hard'}],['diameter:26','tire-fl',{diameter:26}],['diameter:30','tire-fl',{diameter:30}],['shell:arrow','shell',{shell:'arrow'}],['shell:wing','shell',{shell:'wing'}]];
    for(const [id,part,config] of options){this.car.configure({...this.setup,...config});for(const [key,g] of this.car.parts)g.visible=key===part;const g=this.car.parts.get(part)!,b=new T.Box3().setFromObject(g),center=b.getCenter(new T.Vector3()),radius=b.getBoundingSphere(new T.Sphere()).radius;
      const d=(id.startsWith('diameter:')?.36:radius)/Math.sin(T.MathUtils.degToRad(17.5))*1.1;camera.position.copy(center).add(new T.Vector3(.85,.6,1).normalize().multiplyScalar(d));camera.lookAt(center);this.renderer.render(this.scene,camera);result[id]=this.renderer.domElement.toDataURL('image/png');}
    this.car.configure(this.setup);this.layout();this.plinth.visible=true;this.renderer.setSize(old.x,old.y,false);this.wake();return result;
  }
  wake(){if(!this.dead&&!this.frame&&!document.hidden)this.frame=requestAnimationFrame(t=>this.render(t));}
  private render(now:number){
    this.frame=0;if(this.dead)return;if(this.previous&&now-this.previous<1000/30){this.wake();return;}const fresh=!this.previous,dt=fresh?0:Math.min(.05,(now-this.previous)/1000);this.previous=now;
    if(this.race){
      if(this.running){this.accumulator+=dt;while(this.accumulator>=STEP){stepCar(this.state,this.setup,STEP,true,this.track);if(this.compare){stepCar(this.rivalState,DEFAULT_SETUP,STEP,true,this.track);collideCars(this.state,this.rivalState,this.setup,DEFAULT_SETUP);}else this.recording.sample(this.state);this.accumulator-=STEP;}
        this.distance+=Math.hypot(this.state.vx,this.state.vz)*dt;if(this.state.finished||this.state.offTrack)this.running=false;
      }
      if(this.state.finished&&!this.compare&&!this.savedGhost){const lap=this.recording.finish(this.state,this.setup,this.track);if(lap)this.ghosts.set(this.track,lap);this.savedGhost=true;}
      if(this.activeGhost&&this.ghost){const p=ghostAt(this.activeGhost,this.state.time);this.ghost.root.position.set(p.x,p.y+(this.activeGhost.setup.diameter-26)/100,p.z);this.ghost.root.rotation.set(0,-p.yaw,0);this.ghost.root.rotateZ(p.pitch);this.ghost.root.rotateX(p.roll);this.ghost.animate(p.distance,true,this.activeGhost.setup.gear,this.activeGhost.setup.diameter/100);}
      for(const [model,c] of [[this.car,this.state],[this.rival,this.rivalState]] as const){model.root.position.set(c.x,c.y+(model===this.car?(this.setup.diameter-26)/100:0),c.z);model.root.rotation.set(0,-c.yaw,0);model.root.rotateZ(c.pitch);model.root.rotateX(c.roll);model.animate(this.distance,true,model===this.car?this.setup.gear:4,model===this.car?this.setup.diameter/100:.26);}
      const c=this.state,f=new T.Vector3(Math.cos(c.yaw),0,Math.sin(c.yaw)),pos=new T.Vector3(c.x,c.y,c.z),v=Math.hypot(c.vx,c.vz);
      this.goal.copy(pos).addScaledVector(f,this.first?1.4:-6.5).add(new T.Vector3(0,this.first?1.2:3.8,0));this.target.copy(pos).addScaledVector(f,this.first?9:5).add(new T.Vector3(0,.7,0));
      if(!this.first&&this.activeGhost&&this.ghost){const separation=pos.distanceTo(this.ghost.root.position);if(separation<24){this.goal.addScaledVector(f,-Math.min(8,separation*.4));this.goal.y+=Math.min(5,separation*.2);this.target.lerp(this.ghost.root.position,.3);}}
      const smoothing=fresh?1:1-Math.exp(-dt*(this.first?18:7));this.camera.position.lerp(this.goal,smoothing);this.look.lerp(this.target,smoothing);if(!this.reduced)this.camera.position.y+=Math.sin(now*.025)*Math.min(.035,v*.001)+c.impact*.08;
      this.camera.lookAt(this.look);this.camera.fov+=(65+Math.min(9,v*.18)-this.camera.fov)*(fresh?1:.08);
      if(!this.running&&c.time===0){this.camera.position.set(18,48,56);this.camera.lookAt(0,0,0);this.camera.fov=46;}
      this.camera.updateProjectionMatrix();
    }else{
      this.car.root.position.set(0,(this.setup.diameter-26)/100,0);this.car.root.rotation.set(0,0,0);if(this.power){this.distance+=dt*1.8;this.car.animate(this.distance,true,this.setup.gear,this.setup.diameter/100);}
      if(this.exploded){
        const tanV=Math.tan(T.MathUtils.degToRad(this.camera.fov/2)),tanH=tanV*this.camera.aspect;
        const dir=new T.Vector3(Math.cos(this.orbit.yaw),Math.sin(this.orbit.pitch),Math.sin(this.orbit.yaw)).normalize(),right=new T.Vector3().crossVectors(new T.Vector3(0,1,0),dir).normalize(),up=new T.Vector3().crossVectors(dir,right);
        let fit=1;for(const p of this.explodedCorners)fit=Math.max(fit,p.dot(dir)+Math.max(Math.abs(p.dot(up))/tanV,Math.abs(p.dot(right))/tanH));
        this.camera.position.copy(this.explodedBounds.center).addScaledVector(dir,fit*1.12*this.orbit.zoom/5.2);this.camera.lookAt(this.explodedBounds.center);
      }else{const d=this.orbit.zoom;this.camera.position.set(Math.cos(this.orbit.yaw)*d,Math.sin(this.orbit.pitch)*d+.5,Math.sin(this.orbit.yaw)*d);this.camera.lookAt(0,.4,0);}
    }
    if(this.audio&&this.gain&&this.oscillator){const on=this.sound&&(this.running||this.power);this.gain.gain.setTargetAtTime(on?.015:0,this.audio.currentTime,.05);this.oscillator.frequency.setTargetAtTime(100+(this.race?Math.hypot(this.state.vx,this.state.vz)*13:130),this.audio.currentTime,.08);this.windGain?.gain.setTargetAtTime(on&&this.race?Math.min(.045,Math.hypot(this.state.vx,this.state.vz)*.0007)+this.state.impact*.045:0,this.audio.currentTime,.03);}
    this.car.root.updateMatrixWorld(true);
    const chosen=this.car.parts.get(this.selected);this.halo.visible=!this.race&&!!chosen?.visible;this.balloon.hidden=!this.halo.visible;
    if(this.halo.visible&&chosen){this.halo.box.setFromObject(chosen).expandByScalar(.06);this.halo.updateMatrixWorld(true);const p=this.halo.box.getCenter(new T.Vector3()).project(this.camera);this.balloon.textContent=String(PARTS.findIndex(p=>p.id===this.selected)+1);this.balloon.style.left=Math.max(6,Math.min(this.stage.clientWidth-32,(p.x+1)*this.stage.clientWidth/2))+'px';this.balloon.style.top=Math.max(6,Math.min(this.stage.clientHeight-32,(1-p.y)*this.stage.clientHeight/2))+'px';}
    this.renderer.render(this.scene,this.camera);if(now-this.lastUI>100||this.state.finished||this.state.offTrack){this.onUpdate?.(this.state);this.lastUI=now;}
    if(this.running||this.power)this.wake();else this.previous=0;
  }
  destroy(){this.dead=true;cancelAnimationFrame(this.frame);this.abort.abort();this.observer.disconnect();this.car.dispose();this.rival.dispose();this.ghost?.dispose();this.ghosts.clear();this.arena.traverse(o=>{if(o instanceof T.Mesh){o.geometry.dispose();(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});this.plinth.traverse(o=>{if(o instanceof T.Mesh){o.geometry.dispose();(o.material as T.Material).dispose();}});this.halo.geometry.dispose();(this.halo.material as T.Material).dispose();this.balloon.remove();this.environment.dispose();this.renderer.dispose();this.oscillator?.stop();this.wind?.stop();void this.audio?.close();this.renderer.domElement.remove();}
}
