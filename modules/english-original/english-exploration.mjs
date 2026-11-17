import {createGardenNavigation,buildGarden,themeFor} from './english-garden-world.mjs';
import {createYuyu} from '../math-mission-map/v11/planet-yuyu.mjs';

// A connected garden village, not a graph of floating lesson buttons.
export function gardenLayout(units) {
  if(!Array.isArray(units)||!units.length||units.length>8)throw Error('Expected 1–8 units');
  const seen=new Set();
  return units.map((u,i)=>{if(!u?.id||seen.has(u.id))throw Error('Unique course IDs required');seen.add(u.id);const col=i<4?i:7-i;return {...u,number:i+1,x:(col-1.5)*3.4,z:i<4?-2.4:2.4};});
}
export function advance(position,route,dt,nav,speed=2.4){
  let remaining=Math.min(.05,Math.max(0,dt))*speed,moved=0;
  while(remaining>0&&route.length){const p=route[0],dx=p.x-position.x,dz=p.z-position.z,d=Math.hypot(dx,dz),step=Math.min(d,remaining);if(d<.001){route.shift();continue;}const next={x:position.x+dx/d*step,z:position.z+dz/d*step};if(!nav.clear(position,next)){route.length=0;break;}position.x=next.x;position.z=next.z;remaining-=step;moved+=step;if(step>=d)route.shift();}
  return moved;
}
export function createExplorer(container,options){
 const T=options.THREE,doc=container.ownerDocument,win=doc.defaultView,nodes=gardenLayout(options.units),nav=createGardenNavigation(nodes);
 let closed=false,frame=0,last=0,route=[],pending=null,progress=options.progress||{},selected=options.selectedId,radius=17,overview=17,theta=.08,phi=.63;
 const cleanup=[],resources=new Set(),keys=new Set(),pointers=new Map(),markers=[],birds=[],pickables=[];
 const own=r=>(resources.add(r),r),color=(c,extra={})=>own(new T.MeshStandardMaterial({color:c,roughness:.85,...extra}));
 const scene=new T.Scene();scene.background=new T.Color('#d7f0ee');scene.fog=new T.Fog('#d7f0ee',28,55);
 const camera=new T.PerspectiveCamera(43,1,.1,100),renderer=new T.WebGLRenderer({antialias:true});
 renderer.setPixelRatio(Math.min(win.devicePixelRatio||1,1.75));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
 let toolbar,status;
 const canvas=renderer.domElement;canvas.style.cssText='display:block;width:100%;height:100%;touch-action:none';canvas.tabIndex=0;canvas.setAttribute('aria-label','3D 探索。方向鍵或 WASD 移動，點地面走動，點課程標牌走到課程。');container.append(canvas);
 const oldPosition=container.style.position;container.style.position='relative';
 function mesh(parent,geometry,material,pos=[0,0,0]){const m=new T.Mesh(own(geometry),material);m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function listen(target,event,fn,opts){target.addEventListener(event,fn,opts);cleanup.push(()=>target.removeEventListener(event,fn,opts));}
 function dispose(){if(closed)return;closed=true;win.cancelAnimationFrame(frame);cleanup.reverse().forEach(f=>f());resources.forEach(r=>r.dispose?.());renderer.dispose();renderer.forceContextLoss?.();canvas.remove();toolbar?.remove();status?.remove();container.style.position=oldPosition;}
 function fail(e){dispose();options.onError?.(e);}
 try {
 const hemi=new T.HemisphereLight(0xfff9df,0x347b83,1.5);scene.add(hemi);const sun=new T.DirectionalLight(0xfff5dc,2.3);sun.position.set(-6,14,8);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-10,right:10,top:10,bottom:-10});sun.shadow.bias=-.001;scene.add(sun);
 const ocean=color(0x67b5bc,{roughness:.45});mesh(scene,new T.CylinderGeometry(18,19,.5,80),ocean,[0,-.8,0]);
 const garden=buildGarden(T,{scene,nodes,mesh,color,own});
 nodes.forEach(n=>{
  const bitmap=doc.createElement('canvas');bitmap.width=256;bitmap.height=128;const ctx=bitmap.getContext('2d');ctx.fillStyle='#fffbea';ctx.beginPath();ctx.roundRect(3,3,250,122,18);ctx.fill();ctx.strokeStyle='#227b84';ctx.lineWidth=6;ctx.stroke();ctx.fillStyle='#205b66';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 52px sans-serif';ctx.fillText(String(n.number),128,38);ctx.font='bold 35px sans-serif';ctx.fillText(themeFor(n).toUpperCase(),128,91,225);
  const sign=new T.Sprite(own(new T.SpriteMaterial({map:Object.assign(own(new T.CanvasTexture(bitmap)),{colorSpace:T.SRGBColorSpace}),depthTest:false,toneMapped:false})));sign.position.set(n.x,1.85,n.z-.6);sign.scale.set(1.3,.65,1);sign.userData.unitId=n.id;scene.add(sign);pickables.push(sign);
  const marker=mesh(scene,new T.TorusGeometry(.24,.035,8,32),color(0x37a3b0),[n.x,.13,n.z+.5]);marker.rotation.x=-Math.PI/2;marker.userData.unitId=n.id;markers.push(marker);
 });
 const actor=createYuyu(T,{own,color,mesh});actor.root.scale.setScalar(.52);const spawn=nodes.find(n=>n.id===selected)||nodes[0];actor.root.position.set(spawn.x,.08,spawn.z+.5);scene.add(actor.root);
 toolbar=doc.createElement('div');toolbar.style.cssText='position:absolute;left:10px;top:10px;display:flex;gap:6px;flex-wrap:wrap;max-width:calc(100% - 20px)';container.append(toolbar);
 status=doc.createElement('div');status.setAttribute('role','status');status.style.cssText='position:absolute;bottom:9px;left:10px;right:10px;background:#fffffff0;color:#205b66;padding:6px 9px;border-radius:12px;font:13px sans-serif;pointer-events:none';status.textContent='↔ WASD / ↑↓←→ · 👆 · ＋ / −';container.append(status);
 function button(text,label,fn){const b=doc.createElement('button');b.type='button';b.textContent=text;b.setAttribute('aria-label',label);b.style.cssText='min-width:44px;min-height:44px;padding:4px 10px;border:1px solid #73acae;border-radius:12px;background:#fffbea;color:#205b66;font:bold 17px sans-serif';b.onclick=fn;toolbar.append(b);return b;}
 button('＋','放大',()=>radius=Math.max(7,radius/1.2));button('−','縮小',()=>radius=Math.min(overview*1.5,radius*1.2));button('⌂','全景',()=>{radius=overview;theta=.08;phi=.63;});
 const dpad=doc.createElement('span');dpad.style.cssText='display:flex;gap:3px';toolbar.append(dpad);
 for(const [text,key,label]of[['←','ArrowLeft','向左'],['↑','ArrowUp','向前'],['↓','ArrowDown','向後'],['→','ArrowRight','向右']]){const b=button(text,label,()=>{});dpad.append(b);listen(b,'pointerdown',e=>{e.preventDefault();keys.add(key);route=[];pending=null;b.setPointerCapture(e.pointerId);});listen(b,'pointerup',()=>keys.delete(key));listen(b,'pointercancel',()=>keys.delete(key));listen(b,'lostpointercapture',()=>keys.delete(key));}
 function updateProgress(next,id){progress=next||{};if(id!==undefined)selected=id;for(const m of markers){const p=progress[m.userData.unitId];m.material.color.setHex(m.userData.unitId===selected?0xeaa945:p===true||p?.completed?0x438a57:0x37a3b0);}}
 function stop(){keys.clear();route=[];pending=null;pointers.clear();}
 function go(n){const p={x:n.x,z:n.z+.5};const found=nav.path(actor.root.position,p);if(found){route=found;pending=n;status.textContent=`🚶 ${n.number} · ${n.title}`;}}
 const ray=new T.Raycaster(),mouse=new T.Vector2(),plane=new T.Plane(new T.Vector3(0,1,0),-.13);let gesture=false,drag=null,gap=null;
 function pointerGap(){const p=[...pointers.values()];return p.length===2?Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y):null;}
 listen(canvas,'pointerdown',e=>{if(e.button!==0)return;canvas.focus({preventScroll:true});canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1){gesture=false;drag={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY};}else{gesture=true;gap=pointerGap();}});
 listen(canvas,'pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size>1){const g=pointerGap();if(g&&gap)radius=Math.max(7,Math.min(overview*1.5,radius*gap/g));gap=g;gesture=true;return;}if(!drag)return;if(Math.hypot(e.clientX-drag.sx,e.clientY-drag.sy)>6)gesture=true;if(gesture){theta-=(e.clientX-drag.x)*.006;phi=Math.max(.3,Math.min(1.1,phi+(e.clientY-drag.y)*.005));}drag.x=e.clientX;drag.y=e.clientY;});
 function end(e){const click=e.type==='pointerup'&&pointers.size===1&&!gesture&&drag;pointers.delete(e.pointerId);gap=null;if(!pointers.size)drag=null;if(!click)return;const r=canvas.getBoundingClientRect();mouse.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);ray.setFromCamera(mouse,camera);const hit=ray.intersectObjects(pickables)[0];if(hit){go(nodes.find(n=>n.id===hit.object.userData.unitId));return;}const p=new T.Vector3();if(ray.ray.intersectPlane(plane,p)&&nav.safe(p)){const found=nav.path(actor.root.position,p);if(found){route=found;pending=null;}}}
 listen(canvas,'pointerup',end);listen(canvas,'pointercancel',end);listen(canvas,'lostpointercapture',e=>{pointers.delete(e.pointerId);gesture=true;});
 listen(canvas,'wheel',e=>{e.preventDefault();radius=Math.max(7,Math.min(overview*1.5,radius*Math.exp(Math.max(-300,Math.min(300,e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?300:1)))*.001)));},{passive:false});
 const movement=new Set(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d']);
 listen(canvas,'keydown',e=>{if(movement.has(e.key)){e.preventDefault();keys.add(e.key);route=[];pending=null;}});listen(win,'keyup',e=>keys.delete(e.key));listen(win,'blur',stop);listen(canvas,'blur',()=>keys.clear());listen(doc,'visibilitychange',()=>{if(doc.hidden)stop();});listen(canvas,'webglcontextlost',e=>{e.preventDefault();fail(Error('WebGL unavailable; use traditional lessons.'));});
 function resize(){const oldOverview=overview;overview=Math.max(17,8/(Math.tan(43*Math.PI/360)*(container.clientWidth/Math.max(1,container.clientHeight))));radius=radius/oldOverview*overview;renderer.setSize(Math.max(1,container.clientWidth),Math.max(1,container.clientHeight),false);camera.aspect=container.clientWidth/Math.max(1,container.clientHeight);camera.updateProjectionMatrix();}
 const observer=new win.ResizeObserver(resize);observer.observe(container);cleanup.push(()=>observer.disconnect());
 function animate(time){if(closed)return;try{const dt=last?Math.min(.05,(time-last)/1000):0;last=time;let moved=0;if(!doc.hidden){let x=(keys.has('d')||keys.has('ArrowRight')?1:0)-(keys.has('a')||keys.has('ArrowLeft')?1:0),z=(keys.has('s')||keys.has('ArrowDown')?1:0)-(keys.has('w')||keys.has('ArrowUp')?1:0);const prev=actor.root.position.clone();if(x||z){const len=Math.hypot(x,z);const p={x:prev.x+(x*Math.cos(theta)+z*Math.sin(theta))/len*dt*2.4,z:prev.z+(-x*Math.sin(theta)+z*Math.cos(theta))/len*dt*2.4};if(nav.clear(prev,p)){actor.root.position.x=p.x;actor.root.position.z=p.z;moved=1;}}else moved=advance(actor.root.position,route,dt,nav);if(moved){options.onPosition?.({x:actor.root.position.x,z:actor.root.position.z});actor.root.rotation.y=Math.atan2(actor.root.position.x-prev.x,actor.root.position.z-prev.z);actor.body.rotation.y=0;}actor.animate(time/1000,!!moved,win.matchMedia('(prefers-reduced-motion: reduce)').matches,{stride:.624});garden.animate(time/1000);if(pending&&!route.length){const n=pending;pending=null;status.textContent=`✓ ${n.number} · ${n.title}`;options.onSelect?.(n.id);if(closed)return;}}
 const follow=Math.max(0,Math.min(1,(1-radius/overview)/.55)),cx=actor.root.position.x*follow,cz=actor.root.position.z*follow;camera.position.set(cx+radius*Math.sin(phi)*Math.sin(theta),radius*Math.cos(phi),cz+radius*Math.sin(phi)*Math.cos(theta));camera.lookAt(cx,0,cz);renderer.render(scene,camera);frame=win.requestAnimationFrame(animate);}catch(e){fail(e);}}
 resize();updateProgress(progress,selected);frame=win.requestAnimationFrame(animate);
 return {dispose,updateProgress};
 } catch(error){dispose();throw error;}
}
