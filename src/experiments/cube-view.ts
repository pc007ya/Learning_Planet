import * as T from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { solvedCube, turnCube, type CubeState, type CubeColor } from './cube-state';

export const CUBE_COLORS: Record<CubeColor,number>={white:0xfff9e6,yellow:0xffd53d,red:0xf14355,orange:0xff8b30,green:0x16b985,blue:0x2686ef};
export const CUBE_FACES=[{id:'U',color:'white',name:'白色上面',normal:[0,1,0]}, {id:'F',color:'green',name:'綠色前面',normal:[0,0,1]}, {id:'R',color:'red',name:'紅色右面',normal:[1,0,0]}, {id:'B',color:'blue',name:'藍色後面',normal:[0,0,-1]}, {id:'L',color:'orange',name:'橘色左面',normal:[-1,0,0]}, {id:'D',color:'yellow',name:'黃色底面',normal:[0,-1,0]}] as const;
const FACE_AXIS:Record<string,[number,number]>={R:[0,1],L:[0,-1],U:[1,1],D:[1,-1],F:[2,1],B:[2,-1]};
export class CubeView {
  readonly scene=new T.Scene(); readonly camera=new T.PerspectiveCamera(36,1,.1,80);
  readonly root=new T.Group(); readonly renderer:T.WebGLRenderer; readonly controls:OrbitControls;
  state:CubeState=solvedCube(); exploded=false; turnMode=false; busy=false;
  private groups=new Map<string,T.Group>(); private core=new T.Group(); private resize:ResizeObserver;
  private abort=new AbortController(); private frame=0; private dead=false; private task?:{start:number;duration:number;tick:(t:number)=>void;done:()=>void};
  private down?:{x:number;y:number;time:number;id:number}; private selected='F'; private halo:T.LineSegments;private floor:T.Mesh;
  onFace=(_face:string)=>{}; onDragTurn=(_move:string)=>{};
  constructor(readonly stage:HTMLElement) {
    this.renderer=new T.WebGLRenderer({alpha:true,antialias:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
    this.renderer.setClearColor(0x000000,0);this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;
    this.renderer.domElement.setAttribute('aria-label','可轉動與縮放的魔術方塊');stage.append(this.renderer.domElement);
    this.camera.position.set(6,4.5,7);this.scene.add(this.root);
    // A camera-side fill keeps underside/back stickers readable for color lessons.
    const readingLight=new T.DirectionalLight(0xffffff,2);readingLight.position.set(0,1,0);this.camera.add(readingLight);this.scene.add(this.camera);
    this.scene.add(new T.HemisphereLight(0xf2f8ff,0x3a486b,2));
    const key=new T.DirectionalLight(0xfff3da,3);key.position.set(-4,7,8);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-5;key.shadow.camera.right=5;key.shadow.camera.top=5;key.shadow.camera.bottom=-5;key.shadow.bias=-.002;this.scene.add(key);
    const fill=new T.DirectionalLight(0x6bd9ff,1.2);fill.position.set(5,2,-3);this.scene.add(fill);
    const floor=new T.Mesh(new T.PlaneGeometry(40,40),new T.ShadowMaterial({opacity:.20}));this.floor=floor;floor.rotation.x=-Math.PI/2;floor.position.y=-1.49;floor.receiveShadow=true;this.scene.add(floor);
    this.makeCore();this.root.add(this.core);
    this.halo=new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(2.98,2.98,.035)),new T.LineBasicMaterial({color:0xffec92,transparent:true,opacity:.9}));this.root.add(this.halo);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enablePan=false;this.controls.enableDamping=false;this.controls.minDistance=5.8;this.controls.maxDistance=16;this.controls.minPolarAngle=.04;this.controls.maxPolarAngle=Math.PI-.04;
    this.controls.addEventListener('change',this.draw);this.controls.addEventListener('start',()=>{if(this.task&&!this.busy)this.task=undefined;});
    this.resize=new ResizeObserver(()=>{const w=stage.clientWidth,h=stage.clientHeight;if(w&&h){this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h,false);this.draw();}});this.resize.observe(stage);
    const canvas=this.renderer.domElement;
    canvas.addEventListener('pointerdown',e=>{if(e.isPrimary)this.down={x:e.clientX,y:e.clientY,time:performance.now(),id:e.pointerId};},{signal:this.abort.signal});
    canvas.addEventListener('pointerup',e=>{
      const d=this.down;this.down=undefined;if(!d||d.id!==e.pointerId||this.busy||this.exploded)return;
      const dx=e.clientX-d.x,dy=e.clientY-d.y;
      if(Math.hypot(dx,dy)<9){const face=this.pick(e.clientX,e.clientY);if(face){this.select(face);this.onFace(face);}}
      else if(this.turnMode&&Math.hypot(dx,dy)>28){const face=this.pick(d.x,d.y)||this.selected;this.select(face);this.onFace(face);this.onDragTurn(face+(Math.abs(dx)>Math.abs(dy)?dx<0?"'":"":dy>0?"'":""));}
    },{signal:this.abort.signal});
    canvas.addEventListener('pointercancel',()=>{this.down=undefined;},{signal:this.abort.signal});
    this.sync();this.select('F');
    document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(this.frame);this.frame=0;}else this.draw();},{signal:this.abort.signal});
  }
  private plastic(color=0x192536){return new T.MeshStandardMaterial({color,roughness:.30,metalness:.08});}
  private add(g:T.BufferGeometry,m:T.Material,parent:T.Object3D){const mesh=new T.Mesh(g,m);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  private makeCore(){
    this.add(new T.SphereGeometry(.38,24,16),this.plastic(0xeff2e4),this.core);
    for(const f of CUBE_FACES){const n=new T.Vector3(...f.normal);const stem=this.add(new T.CylinderGeometry(.115,.115,1.24,16),this.plastic(0xb7c9d4),this.core);stem.position.copy(n).multiplyScalar(.62);stem.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),n);
      const collar=this.add(new T.CylinderGeometry(.22,.22,.18,20),this.plastic(0xe5e9de),this.core);collar.position.copy(n).multiplyScalar(.48);collar.quaternion.copy(stem.quaternion);
    }
  }
  private clearPieces(){for(const g of this.groups.values()){this.dispose(g);this.root.remove(g);}this.groups.clear();}
  private sync(){
    this.clearPieces();
    for(const p of this.state){const g=new T.Group();g.position.fromArray([...p.position]);g.userData.piece=p.id;this.groups.set(p.id,g);this.root.add(g);
      this.add(new RoundedBoxGeometry(.95,.95,.95,3,.075),this.plastic(),g);
      if(p.stickers.length>1){const inward=new T.Vector3(...p.position).normalize().negate();const stalk=this.add(new T.CylinderGeometry(.13,.18,.48,12),this.plastic(0x33485a),g);stalk.position.copy(inward).multiplyScalar(.52);stalk.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),inward);
        const shoe=this.add(new T.TorusGeometry(.24,.105,8,20,Math.PI*1.55),this.plastic(0x8da6b5),g);shoe.position.copy(inward).multiplyScalar(.75);shoe.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),inward);
      }
      // Color is lesson data: specular highlights must never turn a red/yellow
      // sticker white. Keep exact swatch colors; the lit plastic supplies depth.
      for(const sticker of p.stickers){const n=new T.Vector3(...sticker.normal);const tile=this.add(new RoundedBoxGeometry(.79,.79,.042,3,.021),new T.MeshBasicMaterial({color:CUBE_COLORS[sticker.color],toneMapped:false}),g);tile.position.copy(n).multiplyScalar(.488);tile.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),n);tile.userData.normal=[...sticker.normal];tile.userData.color=sticker.color;}
    }
    this.setSpread(this.exploded?1:0);this.draw();
  }
  private pick(x:number,y:number){const r=this.renderer.domElement.getBoundingClientRect();const ray=new T.Raycaster();ray.setFromCamera(new T.Vector2((x-r.left)/r.width*2-1,1-(y-r.top)/r.height*2),this.camera);const hit=ray.intersectObjects([...this.groups.values()],true).find(h=>h.object.userData.normal);if(!hit)return;const n=hit.object.userData.normal as number[];return CUBE_FACES.find(f=>f.normal.every((v,i)=>v===n[i]))?.id;}
  select(face:string){this.selected=face;const f=CUBE_FACES.find(f=>f.id===face)!;const n=new T.Vector3(...f.normal);this.halo.position.copy(n).multiplyScalar(1.53);this.halo.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),n);this.halo.visible=this.turnMode&&!this.exploded;this.draw();}
  mode(mode:'view'|'turn'|'inspect'){this.turnMode=mode==='turn';this.controls.enableRotate=!this.turnMode;this.halo.visible=this.turnMode&&!this.exploded;this.draw();}
  private setSpread(t:number){for(const p of this.state){const g=this.groups.get(p.id)!;g.position.fromArray([...p.position]).multiplyScalar(1+t*1.1);}this.halo.visible=this.turnMode&&t===0;this.floor.visible=t===0;}
  async inspect(open:boolean){if(this.busy)return;this.exploded=open;this.mode(open?'inspect':'view');this.home();await this.animate(650,t=>this.setSpread(open?t:1-t));}
  async move(move:string){if(this.busy||this.exploded)return false;const [axis,side]=FACE_AXIS[move[0]];const pivot=new T.Group();this.root.add(pivot);const pieces=this.state.filter(p=>p.position[axis]===side).map(p=>this.groups.get(p.id)!);pieces.forEach(g=>pivot.attach(g));const turns=move.endsWith('2')?2:move.endsWith("'")?-1:1;
    await this.animate(400,t=>{pivot.rotation.set(0,0,0);pivot.rotation[(['x','y','z'] as const)[axis]]=-side*turns*Math.PI/2*t;});
    if(this.dead)return false;pieces.forEach(g=>this.root.attach(g));this.root.remove(pivot);this.state=turnCube(this.state,move);this.sync();return true;
  }
  private animate(duration:number,tick:(t:number)=>void){this.busy=true;return new Promise<void>(resolve=>{this.task={start:performance.now(),duration:matchMedia('(prefers-reduced-motion: reduce)').matches?0:duration,tick,done:()=>{this.busy=false;resolve();}};this.draw();});}
  reset(state=solvedCube()){if(this.busy)return;this.state=state;this.exploded=false;this.sync();this.mode('view');this.home();}
  home(){this.camera.up.set(0,1,0);this.camera.position.set(6,4.5,7).multiplyScalar(this.exploded?1.5:1);this.controls.target.set(0,0,0);this.controls.update();this.draw();}
  zoom(factor:number){this.camera.position.sub(this.controls.target).multiplyScalar(factor).clampLength(this.controls.minDistance,this.controls.maxDistance).add(this.controls.target);this.controls.update();this.draw();}
  focusCore(){this.camera.position.set(6,4.1,7.2);this.controls.target.set(0,0,0);this.controls.update();this.draw();}
  focusPart(kind:'center'|'edge'|'corner'|'core'){
    for(const p of this.state){const g=this.groups.get(p.id)!;g.visible=kind==='core'?p.stickers.length===1:p.stickers.length===({center:1,edge:2,corner:3}[kind]);}this.core.visible=true;this.draw();
  }
  showAll(){this.groups.forEach(g=>g.visible=true);this.core.visible=true;this.draw();}
  highlight(ids:string[]){
    for(const [id,g] of this.groups){const old=g.getObjectByName('teacher-glow');if(old){this.dispose(old);g.remove(old);}if(ids.includes(id)){const glow=new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(1.02,1.02,1.02)),new T.LineBasicMaterial({color:0xffe788,depthTest:false}));glow.name='teacher-glow';glow.renderOrder=5;g.add(glow);}}this.draw();
  }
  faceCamera(face:string){const n=new T.Vector3(...CUBE_FACES.find(f=>f.id===face)!.normal);this.camera.up.set(0,1,0);if(face==='U')this.camera.up.set(0,0,-1);if(face==='D')this.camera.up.set(0,0,1);this.camera.position.copy(n).multiplyScalar(9);this.controls.target.set(0,0,0);this.controls.update();this.draw();}
  showPiece(id:string){const p=this.state.find(p=>p.id===id);if(!p)return;this.camera.up.set(0,1,0);this.camera.position.fromArray([...p.position]).normalize().multiplyScalar(10);this.controls.target.set(0,0,0);this.controls.update();this.draw();}
  snapshot(){this.renderer.render(this.scene,this.camera);return new Promise<Blob>((resolve,reject)=>this.renderer.domElement.toBlob(b=>b?resolve(b):reject(new Error('Capture failed')),'image/png'));}
  draw=()=>{if(this.frame||this.dead||document.hidden)return;this.frame=requestAnimationFrame(this.render);};
  private render=(now:number)=>{this.frame=0;if(this.dead)return;const task=this.task;if(task){const t=task.duration?Math.min(1,(now-task.start)/task.duration):1;task.tick(t*t*(3-2*t));if(t===1){this.task=undefined;task.done();}else this.draw();}this.renderer.render(this.scene,this.camera);};
  private dispose(root:T.Object3D){root.traverse(o=>{if(o instanceof T.Mesh||o instanceof T.LineSegments){o.geometry.dispose();(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>m.dispose());}});}
  destroy(){this.dead=true;if(this.frame)cancelAnimationFrame(this.frame);this.task?.done();this.task=undefined;this.abort.abort();this.resize.disconnect();this.controls.dispose();this.dispose(this.scene);this.renderer.dispose();this.renderer.domElement.remove();}
}
