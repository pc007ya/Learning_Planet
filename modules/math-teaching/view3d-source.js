import * as T from 'three';
export {FractionView} from './fraction-view.js';
export {MultiplicationView} from './multiplication-view.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
export class TeachingView {
  constructor(onAction,onError){
    this.onAction=onAction;this.onError=onError;this.element=document.createElement('div');this.element.className='mw-three';this.scene=new T.Scene();this.scene.background=new T.Color('#efe4cf');
    this.camera=new T.OrthographicCamera(-9,9,7,-7,.1,100);this.camera.position.set(4.5,12,13);this.camera.lookAt(0,0,0);
    this.renderer=new T.WebGLRenderer({antialias:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.renderer.domElement.setAttribute('aria-label','立體積木操作桌：點選積木，或拖曳到另一側托盤');this.element.append(this.renderer.domElement);
    this.scene.add(new T.HemisphereLight(0xffffff,0x78705e,1.2));const light=new T.DirectionalLight(0xffffff,1.6);light.position.set(-5,12,8);this.scene.add(light);
    this.geometry=new RoundedBoxGeometry(.58,.58,.58,2,.055);this.materials={unit:new T.MeshStandardMaterial({color:0xeab352,roughness:.45}),rod:new T.MeshStandardMaterial({color:0x399faf,roughness:.4}),active:new T.MeshStandardMaterial({color:0x51b88b,roughness:.35}),tray:new T.MeshStandardMaterial({color:0xf9f5e9,roughness:.8}),line:new T.MeshStandardMaterial({color:0xa9b9b0})};
    this.static=new T.Group();this.scene.add(this.static);this.blocks=new T.Group();this.scene.add(this.blocks);this.ray=new T.Raycaster();this.plane=new T.Plane(new T.Vector3(0,1,0),-.4);this.entities=[];
    for(const x of [-4.2,4.2]){const tray=new T.Mesh(new T.BoxGeometry(7.8,.15,8.5),this.materials.tray);tray.position.set(x,-.13,0);this.static.add(tray);}
    this.resize=new ResizeObserver(()=>{const w=this.element.clientWidth,h=this.element.clientHeight;if(!w||!h)return;const aspect=w/h;const half=Math.max(5,9.4/aspect);this.camera.left=-half*aspect;this.camera.right=half*aspect;this.camera.top=half;this.camera.bottom=-half;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h,false);this.draw();});this.resize.observe(this.element);
    this.abort=new AbortController();const c=this.renderer.domElement,o={signal:this.abort.signal};c.style.touchAction='none';
    c.addEventListener('pointerdown',e=>{if(!e.isPrimary||this.busy||this.mode!=='practice')return;const hit=this.pick(e);if(!hit)return;this.drag={id:e.pointerId,group:hit,start:hit.position.clone(),x:e.clientX,y:e.clientY};c.setPointerCapture(e.pointerId);},o);
    c.addEventListener('pointermove',e=>{const d=this.drag;if(!d||d.id!==e.pointerId)return;const p=this.point(e);if(p){d.group.position.set(T.MathUtils.clamp(p.x,-8,8),.75,T.MathUtils.clamp(p.z,-4,4));this.draw();}},o);
    c.addEventListener('pointerup',e=>{const d=this.drag;if(!d||d.id!==e.pointerId)return;this.drag=null;c.releasePointerCapture(e.pointerId);d.group.position.copy(d.start);const moved=Math.hypot(e.clientX-d.x,e.clientY-d.y)>8,p=this.point(e);const validDrop=!moved||(p&&Math.abs(p.z)<4.25&&Math.abs(p.x)<8.1&&(this.state.kind==='sub'?p.x>0:p.x<0));this.draw();if(!d.group.userData.active){this.onError('先選發亮的積木，照目前步驟操作。');return;}if(!validDrop&&this.action!=='exchange'){this.onError('請放到另一側托盤，或直接點一下積木。');return;}if(this.action==='exchange'&&moved&&!validDrop){this.onError('這一步請點一下發亮的積木來換十或拆十。');return;}this.onAction();},o);
    c.addEventListener('pointercancel',()=>this.cancelDrag(),o);document.addEventListener('visibilitychange',()=>{if(document.hidden){this.finish();this.cancelDrag();}},o);
  }
  point(e){const r=this.renderer.domElement.getBoundingClientRect();this.ray.setFromCamera(new T.Vector2((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2),this.camera);return this.ray.ray.intersectPlane(this.plane,new T.Vector3());}
  pick(e){this.point(e);const h=this.ray.intersectObjects(this.blocks.children,true)[0];if(h)return h.object.parent;const r=this.renderer.domElement.getBoundingClientRect();let nearest,dist=22;this.blocks.updateMatrixWorld(true);for(const g of this.blocks.children)for(const m of g.children){const p=m.getWorldPosition(new T.Vector3()).project(this.camera);const d=Math.hypot(r.left+(p.x+1)*r.width/2-e.clientX,r.top+(1-p.y)*r.height/2-e.clientY);if(d<dist){nearest=g;dist=d;}}return nearest;}
  cancelDrag(){if(this.drag){this.drag.group.position.copy(this.drag.start);this.drag=null;this.draw();}}
  setTop(top){this.camera.position.set(top?0:4.5,top?18:12,top?.001:13);this.camera.lookAt(0,0,0);this.draw();}
  draw(){this.element.setAttribute('aria-busy',String(!!this.busy));this.element.setAttribute('role','group');this.element.setAttribute('aria-label','3D 教具');this.renderer.render(this.scene,this.camera);}
  finish(){cancelAnimationFrame(this.frame);this.busy=false;for(const e of this.entities){e.group.position.copy(e.target);e.group.children.forEach(m=>{if(m.userData.end)m.position.copy(m.userData.end);});}this.draw();}
  update(s,mode,step){
    const prev=this.state;const change=prev&&mode===this.mode&&prev.kind===s.kind&&prev.a===s.a&&prev.b===s.b&&s.events.length===prev.events.length+1;
    if(prev===s&&this.mode===mode)return;
    this.finish();this.cancelDrag();const old=new Map(this.entities.map(e=>[e.key,e]));this.blocks.clear();this.entities=[];this.state=s;this.mode=mode;this.action=step?.action;
    const add=(side,type,i)=>{
      const x=side==='left'?-4.2:4.2;const pos=type==='rod'?new T.Vector3(x,.32,-3+i*.75):new T.Vector3(x-2.5+i%5*1.12,.32,(s.kind==='ten'?-1:1)+Math.floor(i/5)*.85);
      const key=`${side}-${type}-${i}`,g=new T.Group();const source=s.kind==='sub'?'left':'right';const active=mode==='practice'&&!!step&&(step.action==='exchange'?side==='left'&&(s.kind==='sub'?type==='rod'&&i===s.t-1:type==='unit'&&i>=s.u-10):side===source&&type===step.action);
      g.userData={active};const beads=type==='rod'?10:1;for(let j=0;j<beads;j++){const m=new T.Mesh(this.geometry,active?this.materials.active:this.materials[type]);m.position.x=type==='rod'?(j-4.5)*.62:0;g.add(m);}g.position.copy(pos);this.blocks.add(g);
      let from=old.get(key)?.target.clone()||pos.clone();
      if(change&&!old.has(key)){
        const a=s.events.at(-1).action;if(a==='unit'||a==='rod'){const origin=s.kind==='sub'?'left':'right',n=a==='unit'?(origin==='left'?prev.u:prev.ru):(origin==='left'?prev.t:prev.rt);from=old.get(`${origin}-${a}-${n-1}`)?.target.clone()||from;}
        else if(s.kind==='sub'&&type==='unit'){from=old.get(`left-rod-${prev.t-1}`)?.target.clone()||from;from.x+=(i-prev.u-4.5)*.62;}
        else if(s.kind==='add'&&type==='rod'){from=old.get(`left-unit-${prev.u-10}`)?.target.clone()||from;}
      }
      if(change&&s.kind==='add'&&s.events.at(-1).action==='exchange'&&type==='rod'&&!old.has(key)){from=pos.clone();g.children.forEach((m,j)=>{m.userData.end=m.position.clone();m.userData.start=(old.get(`left-unit-${prev.u-10+j}`)?.target.clone()||pos.clone()).sub(pos);});}
      this.entities.push({key,group:g,target:pos,from});
    };
    for(const side of ['left','right']){const t=side==='left'?s.t:s.kind==='sub'?s.removedT:s.rt,u=side==='left'?s.u:s.kind==='sub'?s.removedU:s.ru;for(let i=0;i<t;i++)add(side,'rod',i);for(let i=0;i<u;i++)add(side,'unit',i);}
    if(this.grid){this.static.remove(this.grid);this.grid.children.forEach(m=>m.geometry.dispose());this.grid=null;}
    if(s.kind==='ten'){this.grid=new T.Group();for(let i=0;i<10;i++){const m=new T.Mesh(new T.BoxGeometry(.9,.05,.7),this.materials.line);m.position.set(-6.7+i%5*1.12,.005,-1+Math.floor(i/5)*.85);this.grid.add(m);}this.static.add(this.grid);}
    if(change&&!matchMedia('(prefers-reduced-motion: reduce)').matches){this.busy=true;const start=performance.now();const tick=now=>{const f=Math.min(1,(now-start)/650),ease=f*f*(3-2*f);for(const e of this.entities){e.group.position.lerpVectors(e.from,e.target,ease);if(e.from.distanceTo(e.target)>.01)e.group.position.y+=Math.sin(f*Math.PI)*1.1;e.group.children.forEach(m=>{if(m.userData.start){m.position.lerpVectors(m.userData.start,m.userData.end,ease);m.position.y+=Math.sin(f*Math.PI)*.8;}});}this.busy=f<1;this.draw();if(f<1)this.frame=requestAnimationFrame(tick);};this.frame=requestAnimationFrame(tick);this.draw();}else this.draw();
  }
  destroy(){this.finish();this.abort.abort();this.resize.disconnect();this.geometry.dispose();Object.values(this.materials).forEach(m=>m.dispose());this.static.traverse(o=>o.geometry?.dispose());this.renderer.dispose();}
}
