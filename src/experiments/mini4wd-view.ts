import * as T from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {MiniCarModel} from './mini4wd-model';
import {completeParts} from './mini4wd-parts';
import {TRACK,STEP,trackPoint,ground,createCar,stepCar,collideCars,type CarState,type Setup,DEFAULT_SETUP} from './mini4wd-physics';

export class Mini4wdView{
  readonly car=new MiniCarModel();state=createCar();setup={...DEFAULT_SETUP};onUpdate?:(state:CarState)=>void;onPick?:(id:string)=>void;
  private renderer:T.WebGLRenderer;private scene=new T.Scene();private camera=new T.PerspectiveCamera(42,1,.025,300);private environment:T.WebGLRenderTarget;
  private arena=new T.Group();private plinth=new T.Group();private rival=new MiniCarModel();private rivalState=createCar(1);private race=false;private running=false;private power=false;
  private first=false;private reduced=true;private frame=0;private previous=0;private accumulator=0;private distance=0;private lastUI=0;private dead=false;private orbit={yaw:.75,pitch:.52,zoom:6.8};
  private installed=completeParts();private exploded=false;private xray=false;private selected='';private observer:ResizeObserver;private abort=new AbortController();
  private dragging?:{x:number;y:number;yaw:number;pitch:number;id:number;moved:boolean};private audio?:AudioContext;private oscillator?:OscillatorNode;private gain?:GainNode;private sound=false;private compare=false;
  private look=new T.Vector3();private goal=new T.Vector3();private target=new T.Vector3();private wind?:AudioBufferSourceNode;private windGain?:GainNode;
  constructor(private stage:HTMLElement){
    this.renderer=new T.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.toneMapping=T.ACESFilmicToneMapping;
    this.renderer.domElement.setAttribute('aria-label','四驅車模型，可拖動旋轉，也可點零件');this.renderer.domElement.tabIndex=0;stage.append(this.renderer.domElement);
    const room=new RoomEnvironment(),pmrem=new T.PMREMGenerator(this.renderer);this.environment=pmrem.fromScene(room,.04);this.scene.environment=this.environment.texture;room.dispose();pmrem.dispose();
    this.scene.add(new T.HemisphereLight(0xc6eaff,0x263856,2.2));const sun=new T.DirectionalLight(0xfff3d0,3.6);sun.position.set(12,35,-18);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-40,right:40,top:32,bottom:-32});sun.shadow.bias=-.0002;this.scene.add(sun);
    const floor=new T.Mesh(new T.CylinderGeometry(3,3.1,.18,64),new T.MeshStandardMaterial({color:0x263b5e,metalness:.45,roughness:.35}));floor.position.y=-.16;floor.receiveShadow=true;this.plinth.add(floor);
    const ring=new T.Mesh(new T.TorusGeometry(2.86,.018,6,100),new T.MeshBasicMaterial({color:0x6ce8ff}));ring.rotation.x=Math.PI/2;ring.position.y=-.058;this.plinth.add(ring);
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
    this.resize();this.wake();
  }
  private buildTrack(){
    const n=240,roadMat=new T.MeshStandardMaterial({color:0x314764,roughness:.89}),railMat=new T.MeshStandardMaterial({color:0x3fe0ef,metalness:.3,roughness:.3});
    const railGeo=new T.BoxGeometry(1,.8,.13),rails=new T.InstancedMesh(railGeo,railMat,n*2);rails.castShadow=true;const transform=new T.Object3D();let ri=0;
    const verts:number[]=[],indices:number[]=[];
    for(let i=0;i<n;i++){
      const s=i/n*TRACK.length,next=(i+1)/n*TRACK.length,p=trackPoint(s),q=trackPoint(next),gp=ground(p.x,p.z),gq=ground(q.x,q.z),len=Math.hypot(p.x-q.x,p.z-q.z);
      for(const side of [-1,1]){transform.position.set((p.x+q.x)/2-p.tz*side*TRACK.width/2,.4+Math.max(0,gp.height),(p.z+q.z)/2+p.tx*side*TRACK.width/2);transform.rotation.set(0,-Math.atan2(p.tz,p.tx),0);transform.scale.set(len*1.08,1,1);transform.updateMatrix();rails.setMatrixAt(ri++,transform.matrix);}
      if(gp.gap||gq.gap)continue;
      const base=verts.length/3;for(const t of [p,q])for(const side of [-1,1])verts.push(t.x-t.tz*side*TRACK.width/2,Math.max(0,ground(t.x,t.z).height),t.z+t.tx*side*TRACK.width/2);
      indices.push(base,base+1,base+2,base+1,base+3,base+2);
    }
    rails.count=ri;this.arena.add(rails);roadMat.side=T.DoubleSide;const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(verts,3));geo.setIndex(indices);geo.computeVertexNormals();const road=new T.Mesh(geo,roadMat);road.receiveShadow=true;this.arena.add(road);
    const base=new T.Mesh(new T.BoxGeometry(78,.7,44),new T.MeshStandardMaterial({color:0x152740,roughness:.7}));base.position.y=-1.2;base.receiveShadow=true;this.arena.add(base);
    const markers=new T.InstancedMesh(new T.BoxGeometry(.18,.015,.45),new T.MeshBasicMaterial({color:0xffdc73}),90);for(let i=0;i<90;i++){const p=trackPoint(i/90*TRACK.length);transform.position.set(p.x-p.tz*1.9,.015+Math.max(0,ground(p.x,p.z).height),p.z+p.tx*1.9);transform.rotation.set(0,-Math.atan2(p.tz,p.tx),0);transform.scale.set(1,1,1);transform.updateMatrix();markers.setMatrixAt(i,transform.matrix);}this.arena.add(markers);
    for(let i=0;i<10;i++)for(let j=0;j<2;j++){const tile=new T.Mesh(new T.BoxGeometry(.45,.025,.48),new T.MeshBasicMaterial({color:(i+j)%2?0xf4fbff:0x11223c}));tile.position.set(-15+j*.45,.018,-14.2+i*.48);this.arena.add(tile);}
    const gateMat=new T.MeshStandardMaterial({color:0x6a76ff,metalness:.3,roughness:.3});for(const z of [-15, -9]){const gate=new T.Mesh(new T.BoxGeometry(.35,4,.35),gateMat);gate.position.set(-15,2,z);this.arena.add(gate);}const bridge=new T.Mesh(new T.BoxGeometry(.35,.7,6.4),gateMat);bridge.position.set(-15,4,-12);this.arena.add(bridge);
    // Track landmarks are geometry, not a flat background with a moving sticker.
    for(let i=0;i<12;i++){const p=trackPoint(i/12*TRACK.length),mast=new T.Mesh(new T.CylinderGeometry(.07,.1,3,8),railMat);mast.position.set(p.x-p.tz*4,1,p.z+p.tx*4);this.arena.add(mast);}
  }
  private resize(){const w=Math.max(1,this.stage.clientWidth),h=Math.max(1,this.stage.clientHeight);this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();}
  setMode(race:boolean){this.pause();this.race=race;this.arena.visible=race;this.plinth.visible=!race;this.rival.root.visible=race&&this.compare;this.power=false;this.car.root.position.set(0,0,0);this.car.root.rotation.set(0,0,0);this.camera.fov=race?65:42;this.camera.updateProjectionMatrix();this.previous=0;this.layout();this.wake();}
  configure(s:Setup){this.setup={...s};this.car.configure(s);this.wake();}
  setParts(installed:Set<string>,explode:boolean,xray:boolean,selected=''){this.installed=new Set(installed);this.exploded=explode;this.xray=xray;this.selected=selected;this.layout();this.wake();}
  private layout(){this.car.layout(this.race?completeParts():this.installed,this.race?0:Number(this.exploded),!this.race&&this.xray,this.race?'':this.selected);}
  setCamera(first:boolean){this.first=first;this.previous=0;this.wake();}
  setReduced(v:boolean){this.reduced=v;this.wake();}
  setPower(v:boolean){this.power=v;this.wake();}
  zoom(delta:number){this.orbit.zoom=Math.max(4,Math.min(11,this.orbit.zoom+delta));this.wake();}
  reset(){this.state=createCar();this.rivalState=createCar(1);this.rival.root.visible=false;this.distance=0;this.wake();}
  run(compare=false){this.state=createCar();this.rivalState=createCar(1);this.compare=compare;this.rival.root.visible=compare;this.rival.configure({...DEFAULT_SETUP,color:'#ff9266'});this.running=true;this.accumulator=0;this.distance=0;this.wake();}
  pause(){this.running=false;this.power=false;if(this.gain)this.gain.gain.setTargetAtTime(0,this.audio!.currentTime,.05);if(this.windGain)this.windGain.gain.setTargetAtTime(0,this.audio!.currentTime,.05);this.wake();}
  setSound(v:boolean){this.sound=v;if(v&&!this.audio){try{this.audio=new AudioContext();this.oscillator=this.audio.createOscillator();this.gain=this.audio.createGain();this.oscillator.type='sawtooth';this.gain.gain.value=0;this.oscillator.connect(this.gain);this.gain.connect(this.audio.destination);this.oscillator.start();
    const buffer=this.audio.createBuffer(1,this.audio.sampleRate,this.audio.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
    this.wind=this.audio.createBufferSource();this.wind.buffer=buffer;this.wind.loop=true;const filter=this.audio.createBiquadFilter();filter.type='lowpass';filter.frequency.value=1100;this.windGain=this.audio.createGain();this.windGain.gain.value=0;this.wind.connect(filter);filter.connect(this.windGain);this.windGain.connect(this.audio.destination);this.wind.start();
    }catch{this.sound=false;}}if(v)void this.audio?.resume();else{if(this.gain)this.gain.gain.value=0;if(this.windGain)this.windGain.gain.value=0;}}
  thumbnails(){
    const result:Record<string,string>={};const old=this.renderer.getSize(new T.Vector2());this.renderer.setSize(160,110,false);const camera=new T.PerspectiveCamera(35,160/110,.01,100);this.plinth.visible=false;
    for(const [id,g] of this.car.parts){for(const [other,p] of this.car.parts)p.visible=other===id;const b=new T.Box3().setFromObject(g),center=b.getCenter(new T.Vector3()),size=b.getSize(new T.Vector3()),d=Math.max(size.x,size.y,size.z)*2.4+.3;camera.position.copy(center).add(new T.Vector3(d*.72,d*.7,d));camera.lookAt(center);this.renderer.render(this.scene,camera);result[id]=this.renderer.domElement.toDataURL('image/png');}
    this.renderer.setSize(old.x,old.y,false);this.plinth.visible=true;this.layout();this.wake();return result;
  }
  wake(){if(!this.dead&&!this.frame&&!document.hidden)this.frame=requestAnimationFrame(t=>this.render(t));}
  private render(now:number){
    this.frame=0;if(this.dead)return;const fresh=!this.previous,dt=fresh?0:Math.min(.05,(now-this.previous)/1000);this.previous=now;
    if(this.race){
      if(this.running){this.accumulator+=dt;while(this.accumulator>=STEP){stepCar(this.state,this.setup);if(this.compare){stepCar(this.rivalState,DEFAULT_SETUP);collideCars(this.state,this.rivalState,this.setup,DEFAULT_SETUP);}this.accumulator-=STEP;}
        this.distance+=Math.hypot(this.state.vx,this.state.vz)*dt;if(this.state.finished||this.state.offTrack)this.running=false;
      }
      for(const [model,c] of [[this.car,this.state],[this.rival,this.rivalState]] as const){model.root.position.set(c.x,c.y+(model===this.car?(this.setup.diameter-26)/100:0),c.z);model.root.rotation.set(0,-c.yaw,0);model.root.rotateZ(c.pitch);model.root.rotateX(c.roll);model.animate(this.distance,true,model===this.car?this.setup.gear:4,model===this.car?this.setup.diameter/100:.26);}
      const c=this.state,f=new T.Vector3(Math.cos(c.yaw),0,Math.sin(c.yaw)),pos=new T.Vector3(c.x,c.y,c.z),v=Math.hypot(c.vx,c.vz);
      this.goal.copy(pos).addScaledVector(f,this.first?1.4:-6.5).add(new T.Vector3(0,this.first?1.2:3.8,0));this.target.copy(pos).addScaledVector(f,this.first?9:5).add(new T.Vector3(0,.7,0));
      const smoothing=fresh?1:1-Math.exp(-dt*(this.first?18:7));this.camera.position.lerp(this.goal,smoothing);this.look.lerp(this.target,smoothing);if(!this.reduced)this.camera.position.y+=Math.sin(now*.025)*Math.min(.035,v*.001)+c.impact*.08;
      this.camera.lookAt(this.look);this.camera.fov+=(65+Math.min(9,v*.18)-this.camera.fov)*(fresh?1:.08);this.camera.updateProjectionMatrix();
    }else{
      this.car.root.position.set(0,(this.setup.diameter-26)/100,0);this.car.root.rotation.set(0,0,0);if(this.power){this.distance+=dt*1.8;this.car.animate(this.distance,true,this.setup.gear,this.setup.diameter/100);}
      const d=this.orbit.zoom*(this.exploded?1.5:1);this.camera.position.set(Math.cos(this.orbit.yaw)*d,Math.sin(this.orbit.pitch)*d+.5,Math.sin(this.orbit.yaw)*d);this.camera.lookAt(0,this.exploded?1.1:.4,0);
    }
    if(this.audio&&this.gain&&this.oscillator){const on=this.sound&&(this.running||this.power);this.gain.gain.setTargetAtTime(on?.015:0,this.audio.currentTime,.05);this.oscillator.frequency.setTargetAtTime(100+(this.race?Math.hypot(this.state.vx,this.state.vz)*13:130),this.audio.currentTime,.08);this.windGain?.gain.setTargetAtTime(on&&this.race?Math.min(.045,Math.hypot(this.state.vx,this.state.vz)*.0007)+this.state.impact*.045:0,this.audio.currentTime,.03);}
    this.renderer.render(this.scene,this.camera);if(now-this.lastUI>100||this.state.finished||this.state.offTrack){this.onUpdate?.(this.state);this.lastUI=now;}
    if(this.running||this.power)this.wake();else this.previous=0;
  }
  destroy(){this.dead=true;cancelAnimationFrame(this.frame);this.abort.abort();this.observer.disconnect();this.car.dispose();this.rival.dispose();this.arena.traverse(o=>{if(o instanceof T.Mesh){o.geometry.dispose();(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});this.plinth.traverse(o=>{if(o instanceof T.Mesh){o.geometry.dispose();(o.material as T.Material).dispose();}});this.environment.dispose();this.renderer.dispose();this.oscillator?.stop();this.wind?.stop();void this.audio?.close();this.renderer.domElement.remove();}
}
