import {createIslandWalk} from '../math-mission-map/island-walk.mjs';
import {createYuyu} from '../math-mission-map/v11/planet-yuyu.mjs';

// A connected garden village, not a graph of floating lesson buttons.
export function gardenLayout(units) {
  if(!Array.isArray(units)||!units.length||units.length>8)throw Error('Expected 1–8 units');
  const seen=new Set();
  return units.map((u,i)=>{if(!u?.id||seen.has(u.id))throw Error('Unique course IDs required');seen.add(u.id);const col=i<4?i:7-i;return {...u,number:i+1,x:(col-1.5)*3.4,z:i<4?-2.1:2.1};});
}
export function advance(position,route,dt,nav,speed=2.4){
  let remaining=Math.min(.05,Math.max(0,dt))*speed,moved=0;
  while(remaining>0&&route.length){const p=route[0],dx=p.x-position.x,dz=p.z-position.z,d=Math.hypot(dx,dz),step=Math.min(d,remaining);if(d<.001){route.shift();continue;}const next={x:position.x+dx/d*step,z:position.z+dz/d*step};if(!nav.clear(position,next)){route.length=0;break;}position.x=next.x;position.z=next.z;remaining-=step;moved+=step;if(step>=d)route.shift();}
  return moved;
}
export function createExplorer(container,options){
 const T=options.THREE,doc=container.ownerDocument,win=doc.defaultView,nodes=gardenLayout(options.units),nav=createIslandWalk(nodes);
 let closed=false,frame=0,last=0,route=[],pending=null,progress=options.progress||{},selected=options.selectedId,radius=17,overview=17,theta=.08,phi=.63;
 const cleanup=[],resources=new Set(),keys=new Set(),pointers=new Map(),markers=[],birds=[],pickables=[];
 const own=r=>(resources.add(r),r),color=(c,extra={})=>own(new T.MeshStandardMaterial({color:c,roughness:.85,...extra}));
 const scene=new T.Scene();scene.background=new T.Color('#d7f0ee');scene.fog=new T.Fog('#d7f0ee',28,55);
 const camera=new T.PerspectiveCamera(43,1,.1,100),renderer=new T.WebGLRenderer({antialias:true});
 renderer.setPixelRatio(Math.min(win.devicePixelRatio||1,1.75));renderer.outputColorSpace=T.SRGBColorSpace;
 let toolbar,status;
 const canvas=renderer.domElement;canvas.style.cssText='display:block;width:100%;height:100%;touch-action:none';canvas.tabIndex=0;canvas.setAttribute('aria-label','3D 探索。方向鍵或 WASD 移動，點地面走動，點課程標牌走到課程。');container.append(canvas);
 const oldPosition=container.style.position;container.style.position='relative';
 function mesh(parent,geometry,material,pos=[0,0,0]){const m=new T.Mesh(own(geometry),material);m.position.set(...pos);parent.add(m);return m;}
 function listen(target,event,fn,opts){target.addEventListener(event,fn,opts);cleanup.push(()=>target.removeEventListener(event,fn,opts));}
 function dispose(){if(closed)return;closed=true;win.cancelAnimationFrame(frame);cleanup.reverse().forEach(f=>f());resources.forEach(r=>r.dispose?.());renderer.dispose();renderer.forceContextLoss?.();canvas.remove();toolbar?.remove();status?.remove();container.style.position=oldPosition;}
 function fail(e){dispose();options.onError?.(e);}
 try {
 const hemi=new T.HemisphereLight(0xfff9df,0x347b83,2.2);scene.add(hemi);const sun=new T.DirectionalLight(0xfff5dc,2.3);sun.position.set(-6,14,8);scene.add(sun);
 const water=color(0x76cfce,{roughness:.35}),soil=color(0x9e8564),sand=color(0xeee2ba),grassColors=[0x91c699,0xb5d59a,0x87c7b0,0xa6c89b];
 mesh(scene,new T.CylinderGeometry(18,19,.5,80),water,[0,-.67,0]);
 // Raised grassy islands, sandy rims and physical walkable wooden bridges.
 nodes.forEach((n,i)=>{
  mesh(scene,new T.CylinderGeometry(1.48,1.24,.65,12),soil,[n.x,-.39,n.z]);
  mesh(scene,new T.CylinderGeometry(1.5,1.45,.13,32),sand,[n.x,-.08,n.z]);
  mesh(scene,new T.CylinderGeometry(1.39,1.43,.08,32),color(grassColors[i%4]),[n.x,.015,n.z]);
  if(i){const a=nodes[i-1],length=Math.hypot(n.x-a.x,n.z-a.z),angle=Math.atan2(n.x-a.x,n.z-a.z);const bridge=new T.Group();bridge.position.set((n.x+a.x)/2,.04,(n.z+a.z)/2);bridge.rotation.y=angle;scene.add(bridge);for(let k=-length/2;k<length/2;k+=.22)mesh(bridge,new T.BoxGeometry(1.55,.09,.19),color(k%2?0xd3b480:0xbfa06c),[0,0,k]);}
  // Each actual collision disc has a matching decoration; the centre stays open.
  const obs=nav.obstacles.slice(i*3,i*3+3),building=obs[0],tree=obs[1],flowers=obs[2],roofColors=[0x2b9ca4,0xe6a260,0xc086a6,0x7c9fc4];
  const house=new T.Group();house.position.set(building.x,.07,building.z);scene.add(house);
  mesh(house,new T.BoxGeometry(.48,.55,.48),color(0xfff3da),[0,.28,0]);
  const roof=mesh(house,new T.ConeGeometry(.44,.34,4),color(roofColors[i%4]),[0,.72,0]);roof.rotation.y=Math.PI/4;
  mesh(house,new T.BoxGeometry(.16,.29,.025),color(0x8c6848),[0,.15,.25]);
  for(const s of [-1,1])mesh(house,new T.BoxGeometry(.09,.12,.026),color(0x8bd4d5,{emissive:0x194444}),[s*.155,.37,.25]);
  mesh(house,new T.BoxGeometry(.14,.2,.14),color(0xe6cfb1),[.2,.72,-.1]);
  mesh(scene,new T.CylinderGeometry(.045,.06,.4,8),color(0x93704a),[tree.x,.24,tree.z]);
  const crown=mesh(scene,new T.SphereGeometry(.23,16,12),color([0x489a79,0x67ac76,0x73b892][i%3]),[tree.x,.6,tree.z]);crown.scale.y=1.35;
  for(let k=0;k<5;k++){const a=k*1.26,x=flowers.x+Math.cos(a)*.12,z=flowers.z+Math.sin(a)*.12;mesh(scene,new T.CylinderGeometry(.012,.012,.16,6),color(0x54874b),[x,.15,z]);mesh(scene,new T.SphereGeometry(.055,8,6),color(i%2?0xffce75:0xf0b5c2),[x,.25,z]);}
  // Distinct topical pavilion signs. English titles use the same course data as the list.
  const bitmap=doc.createElement('canvas');bitmap.width=512;bitmap.height=128;const ctx=bitmap.getContext('2d');ctx.fillStyle='#fffbea';ctx.beginPath();ctx.roundRect(2,2,508,124,24);ctx.fill();ctx.strokeStyle='#227b84';ctx.lineWidth=5;ctx.stroke();ctx.fillStyle='#205b66';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 29px sans-serif';ctx.fillText(`${n.number}  ${n.title}`,256,64,475);
  const sign=new T.Sprite(own(new T.SpriteMaterial({map:own(new T.CanvasTexture(bitmap)),depthTest:false})));sign.position.set(n.x,1.28,n.z-.12);sign.scale.set(2.9,.725,1);sign.userData.unitId=n.id;scene.add(sign);pickables.push(sign);
  const marker=mesh(scene,new T.TorusGeometry(.32,.055,8,32),color(0x37a3b0),[n.x,.09,n.z+.5]);marker.rotation.x=-Math.PI/2;marker.userData.unitId=n.id;markers.push(marker);
 });
 // Small original shore creatures sit off walking decks; gently bob in the water, never block routes.
 for(let i=0;i<5;i++){const bird=new T.Group(),mat=color(0xfff8e9);bird.position.set(-5+i*2.6,-.24,i%2?-.1:4.1);scene.add(bird);mesh(bird,new T.SphereGeometry(.13,12,8),mat,[0,0,0]).scale.set(1.4,.8,1);mesh(bird,new T.SphereGeometry(.08,12,8),mat,[.12,.1,0]);const beak=mesh(bird,new T.ConeGeometry(.035,.1,8),color(0xe9a94d),[.22,.1,0]);beak.rotation.z=-Math.PI/2;birds.push(bird);}
 const actor=createYuyu(T,{own,color,mesh});actor.root.scale.setScalar(.52);actor.root.position.set(nodes[0].x,.07,nodes[0].z+.5);scene.add(actor.root);
 toolbar=doc.createElement('div');toolbar.style.cssText='position:absolute;left:10px;top:10px;display:flex;gap:6px;flex-wrap:wrap;max-width:calc(100% - 20px)';container.append(toolbar);
 status=doc.createElement('div');status.setAttribute('role','status');status.style.cssText='position:absolute;bottom:9px;left:10px;right:10px;background:#fffffff0;color:#205b66;padding:6px 9px;border-radius:12px;font:13px sans-serif;pointer-events:none';status.textContent='↔ WASD / ↑↓←→ · 👆 · ＋ / −';container.append(status);
 function button(text,label,fn){const b=doc.createElement('button');b.type='button';b.textContent=text;b.setAttribute('aria-label',label);b.style.cssText='min-width:40px;min-height:40px;padding:4px 10px;border:1px solid #73acae;border-radius:12px;background:#fffbea;color:#205b66;font:bold 17px sans-serif';b.onclick=fn;toolbar.append(b);return b;}
 button('＋','放大',()=>radius=Math.max(7,radius/1.2));button('−','縮小',()=>radius=Math.min(overview*1.5,radius*1.2));button('⌂','全景',()=>{radius=overview;theta=.08;phi=.63;});
 const dpad=doc.createElement('span');dpad.style.cssText='display:flex;gap:3px';toolbar.append(dpad);
 for(const [text,key,label]of[['←','ArrowLeft','向左'],['↑','ArrowUp','向前'],['↓','ArrowDown','向後'],['→','ArrowRight','向右']]){const b=button(text,label,()=>{});dpad.append(b);listen(b,'pointerdown',e=>{e.preventDefault();keys.add(key);route=[];pending=null;b.setPointerCapture(e.pointerId);});listen(b,'pointerup',()=>keys.delete(key));listen(b,'pointercancel',()=>keys.delete(key));listen(b,'lostpointercapture',()=>keys.delete(key));}
 function updateProgress(next,id){progress=next||{};if(id!==undefined)selected=id;for(const m of markers){const p=progress[m.userData.unitId];m.material.color.setHex(m.userData.unitId===selected?0xeaa945:p===true||p?.completed?0x438a57:0x37a3b0);}}
 function stop(){keys.clear();route=[];pending=null;pointers.clear();}
 function go(n){const p={x:n.x,z:n.z+.5};const found=nav.path(actor.root.position,p);if(found){route=found;pending=n;status.textContent=`🚶 ${n.number} · ${n.title}`;}}
 const ray=new T.Raycaster(),mouse=new T.Vector2(),plane=new T.Plane(new T.Vector3(0,1,0),-.07);let gesture=false,drag=null,gap=null;
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
 function animate(time){if(closed)return;try{const dt=last?Math.min(.05,(time-last)/1000):0;last=time;let moved=0;if(!doc.hidden){let x=(keys.has('d')||keys.has('ArrowRight')?1:0)-(keys.has('a')||keys.has('ArrowLeft')?1:0),z=(keys.has('s')||keys.has('ArrowDown')?1:0)-(keys.has('w')||keys.has('ArrowUp')?1:0);const prev=actor.root.position.clone();if(x||z){const len=Math.hypot(x,z);const p={x:prev.x+(x*Math.cos(theta)+z*Math.sin(theta))/len*dt*2.4,z:prev.z+(-x*Math.sin(theta)+z*Math.cos(theta))/len*dt*2.4};if(nav.clear(prev,p)){actor.root.position.x=p.x;actor.root.position.z=p.z;moved=1;}}else moved=advance(actor.root.position,route,dt,nav);if(moved){options.onPosition?.({x:actor.root.position.x,z:actor.root.position.z});actor.root.rotation.y=Math.atan2(actor.root.position.x-prev.x,actor.root.position.z-prev.z);actor.body.rotation.y=0;}actor.animate(time/1000,!!moved,win.matchMedia('(prefers-reduced-motion: reduce)').matches,{stride:.624});birds.forEach((b,i)=>b.position.y=-.24+Math.sin(time*.0017+i)*.025);if(pending&&!route.length){const n=pending;pending=null;status.textContent=`✓ ${n.number} · ${n.title}`;options.onSelect?.(n.id);if(closed)return;}}
 camera.position.set(radius*Math.sin(phi)*Math.sin(theta),radius*Math.cos(phi),radius*Math.sin(phi)*Math.cos(theta));camera.lookAt(0,0,0);renderer.render(scene,camera);frame=win.requestAnimationFrame(animate);}catch(e){fail(e);}}
 resize();updateProgress(progress,selected);frame=win.requestAnimationFrame(animate);
 return {dispose,updateProgress};
 } catch(error){dispose();throw error;}
}
