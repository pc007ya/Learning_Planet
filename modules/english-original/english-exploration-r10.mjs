import {createGardenNavigation,buildGarden,gardenEntries,gardenSurfaceHeight,gardenRoadPaths,createGardenRoadRouting} from './english-garden-world-r10.mjs';
import {createYuyu} from '../math-mission-map/v11/planet-yuyu.mjs';

// A connected garden village, not a graph of floating lesson buttons.
export function gardenLayout(units) {
  if(!Array.isArray(units)||!units.length||units.length>8)throw Error('Expected 1–8 units');
  const seen=new Set();
  return units.map((u,i)=>{if(!u?.id||seen.has(u.id))throw Error('Unique course IDs required');seen.add(u.id);const [x,z]=[[-4.8,-1.4],[-2.7,-2.4],[0,-2.5],[3.5,-1.9],[5,.8],[2.5,2.5],[-.4,2.6],[-3.7,1.8]][i];return {...u,number:i+1,x,z};});
}
export function advance(position,route,dt,nav,speed=2.4){
  let remaining=Math.min(.05,Math.max(0,dt))*speed,moved=0;
  while(remaining>0&&route.length){const p=route[0],dx=p.x-position.x,dz=p.z-position.z,d=Math.hypot(dx,dz),step=Math.min(d,remaining);if(d<.001){route.shift();continue;}const next={x:position.x+dx/d*step,z:position.z+dz/d*step};if(!nav.clear(position,next)){route.length=0;break;}position.x=next.x;position.z=next.z;remaining-=step;moved+=step;if(step>=d)route.shift();}
  return moved;
}
export function isAtGardenStation(position,node){
 return Math.hypot(position.x-node.x,position.z-node.z-.5)<=.012;
}
// Fit the island around the same desktop camera, but protect the shoreline on
// portrait screens. Zoom intentionally shows only the nearby learning stations.
export function gardenCameraFit(width,height){
 const aspect=Math.max(1,width)/Math.max(1,height),halfFov=Math.tan(43*Math.PI/360);
 return {aspect,overview:Math.max(17,9.75/(halfFov*aspect)),compact:width<480};
}
// Keep station 7 pickable and associated with its own building while
// moving the screen-facing plaque off the south bridge stair sightline.
export function gardenStationSignPosition(node){
 return {x:node.x-(node.number===7?.85:0),y:2.16,z:node.z-.6};
}
export function easeGardenZoom(from,to,dt){
 const step=1-Math.exp(-Math.min(.05,Math.max(0,dt))*14);
 return Math.abs(from-to)<.003?to:from+(to-from)*step;
}
export function gardenStationLabelMode(ndc,{compact,focused,x,z},actor){
 if(ndc.z>1||ndc.z< -1||Math.abs(ndc.x)>.87||Math.abs(ndc.y)>.81)return 'hidden';
 if(!focused&&compact)return 'number';
 return !focused||Math.hypot(actor.x-x,actor.z-z)<3.2?'full':'number';
}
// Claim only visible traversable geometry. The nav checks cut the pond and
// building footprints out of the meadow visual mesh, just as for walking.
export function pickGardenGround(ray,walkMeshes,nav){
 const hit=ray.intersectObjects(walkMeshes,false).find(h=>h.face&&h.face.normal.clone().transformDirection(h.object.matrixWorld).y>.4);
 return hit&&nav.safe(hit.point)?{x:hit.point.x,z:hit.point.z}:null;
}
// Keep all complete lesson labels legible in overview on compact screens;
// candidate positions stay close to the projected building and never overlap.
export function englishLabelLayout(points,width,height){
 const w=width<480?Math.min(104,Math.max(84,Math.floor((width-24)/3))):130,h=46;
 const clamp=(n,a,b)=>Math.min(Math.max(n,a),b),boxes=[];let jammed=false;
 const boxed=points.map(p=>{
  if(!p||p.z< -1||p.z>1||Math.abs(p.ndcX)>1.05||Math.abs(p.ndcY)>1.05)return null;
  const bottom=Math.max(54,height-h-30),right=Math.max(3,width-w-3),c=[];
  for(const dy of [0,-44,44,-88,88,-130,130])for(const dx of [0,-25,25,-55,55,-105,105])c.push({
   x:clamp(p.x-w/2+dx,3,right),y:clamp(p.y-h+7+dy,54,bottom)
  });
  const score=b=>Math.hypot(b.x+w/2-p.x,(b.y+h-7-p.y)*1.12);
  c.sort((a,b)=>score(a)-score(b));
  const vacant=b=>boxes.every(a=>b.x+w+2<=a.x||a.x+w+2<=b.x||b.y+h+2<=a.y||a.y+h+2<=b.y);
  let b=c.find(vacant);
  if(!b){
   const fallback=[];
   for(let y=54;y<=bottom;y+=h+2)for(let x=3;x<=right;x+=w+2)fallback.push({x,y});
   fallback.sort((a,b)=>score(a)-score(b));b=fallback.find(vacant);if(!b){jammed=true;b=c[0];}
  }
  boxes.push(b);return {x:Math.round(b.x),y:Math.round(b.y),w,h,anchorX:p.x,anchorY:p.y};
 });
 if(!jammed)return boxed;
 const columns=Math.max(1,Math.floor((width-4)/(w+2)));
 const ordered=boxed.flatMap((b,i)=>b?[{b,i}]:[]).sort((a,b)=>a.b.anchorY-b.b.anchorY);
 const rows=Math.ceil(ordered.length/columns);
 const firstY=Math.max(54,Math.min(Math.round((height-rows*(h+2))/2),height-30-rows*(h+2)));
 for(let row=0;row<rows;row++){
  const slots=ordered.slice(row*columns,(row+1)*columns).sort((a,b)=>a.b.anchorX-b.b.anchorX);
  const firstX=Math.max(3,Math.round((width-slots.length*(w+2))/2));
  slots.forEach(({b,i},col)=>{boxed[i]={...b,x:firstX+col*(w+2),y:firstY+row*(h+2)};});
 }
 return boxed;
}
export function createExplorer(container,options){
 const T=options.THREE,doc=container.ownerDocument,win=doc.defaultView,nodes=gardenLayout(options.units),nav=createGardenNavigation(nodes),roads=gardenRoadPaths(nodes,nav),routeOnRoad=createGardenRoadRouting(roads,nav);
 let closed=false,frame=0,last=0,route=[],pending=null,progress=options.progress||{},selected=options.selectedId,radius=17,viewRadius=17,overview=17,theta=.08,phi=.63;
 const cleanup=[],resources=new Set(),keys=new Set(),pointers=new Map(),markers=[],stationSigns=[];
 const own=r=>(resources.add(r),r),color=(c,extra={})=>own(new T.MeshStandardMaterial({color:c,roughness:.85,...extra}));
 const scene=new T.Scene();scene.background=new T.Color('#d7f0ee');scene.fog=new T.Fog('#d7f0ee',28,55);
 const camera=new T.PerspectiveCamera(43,1,.1,100),renderer=new T.WebGLRenderer({antialias:true});
 renderer.setPixelRatio(Math.min(win.devicePixelRatio||1,1.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;
 let toolbar,status,help,labelLayer,compact=false;
 const canvas=renderer.domElement;canvas.style.cssText='display:block;width:100%;height:100%;touch-action:none';canvas.tabIndex=0;canvas.setAttribute('aria-label','3D 探索。方向鍵或 WASD 移動，點地面走動，點課程標牌走到課程。');container.append(canvas);
 const oldPosition=container.style.position;container.style.position='relative';
 function mesh(parent,geometry,material,pos=[0,0,0]){const m=new T.Mesh(own(geometry),material);m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function listen(target,event,fn,opts){target.addEventListener(event,fn,opts);cleanup.push(()=>target.removeEventListener(event,fn,opts));}
 function dispose(){if(closed)return;closed=true;win.cancelAnimationFrame(frame);cleanup.reverse().forEach(f=>f());resources.forEach(r=>r.dispose?.());renderer.dispose();renderer.forceContextLoss?.();canvas.remove();toolbar?.remove();status?.remove();help?.remove();labelLayer?.remove();container.style.position=oldPosition;}
 function fail(e){dispose();options.onError?.(e);}
 try {
 const hemi=new T.HemisphereLight(0xfff9df,0x347b83,1.5);scene.add(hemi);const sun=new T.DirectionalLight(0xfff5dc,2.3);sun.position.set(-6,14,8);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-10,right:10,top:10,bottom:-10});sun.shadow.bias=-.001;scene.add(sun);
 const ocean=color(0x67b5bc,{roughness:.45});
 const water=mesh(scene,new T.PlaneGeometry(320,320),ocean,[0,-.55,0]);water.rotation.x=-Math.PI/2;water.castShadow=false;
 const garden=buildGarden(T,{scene,nodes,mesh,color,own,nav,roads});
 const ns='http://www.w3.org/2000/svg';
 labelLayer=doc.createElement('div');labelLayer.className='english-map-labels';labelLayer.style.cssText='position:absolute;inset:0;pointer-events:none;';
 const lines=doc.createElementNS(ns,'svg');lines.setAttribute('aria-hidden','true');lines.style.cssText='position:absolute;inset:0;width:100%;height:100%;overflow:hidden;pointer-events:none;';labelLayer.append(lines);container.append(labelLayer);
 const entries=gardenEntries(nodes);nodes.forEach((n,i)=>{
  const line=doc.createElementNS(ns,'line');line.setAttribute('stroke','#fffbe8');line.setAttribute('stroke-width','1.8');line.setAttribute('stroke-linecap','round');lines.append(line);
  const pin=doc.createElement('button');pin.type='button';pin.dataset.englishUnit=n.id;pin.textContent=n.title;
  pin.setAttribute('aria-label',n.number+' · '+n.title);pin.setAttribute('lang','en');pin.title=n.title;
  pin.style.cssText='position:absolute;box-sizing:border-box;display:grid;place-items:center;background:#fffbea;color:#205b66;border:1.5px solid #328388;border-radius:9px;box-shadow:0 2px 4px #1b4c5160;text-align:center;line-height:1.1;padding:3px 4px;font-size:12px;font-family:system-ui,sans-serif;font-weight:800;min-height:46px;overflow-wrap:normal;pointer-events:auto;cursor:pointer;touch-action:manipulation;';
  pin.onclick=()=>go(n);labelLayer.append(pin);
  stationSigns.push({pin,line,at:new T.Vector3(n.x,gardenStationSignPosition(n).y,n.z-.6)});
  mesh(scene,new T.CylinderGeometry(.025,.035,.5,10),color(0x76533c),[entries[i].x,.33,entries[i].z]);const marker=mesh(scene,new T.BoxGeometry(.23,.14,.025),color(0x37a3b0),[entries[i].x+.11,.51,entries[i].z]);marker.userData.unitId=n.id;markers.push(marker);
 });
 const actor=createYuyu(T,{own,color,mesh});actor.root.scale.setScalar(.52);const spawn=nodes.find(n=>n.id===selected)||nodes[0];actor.root.position.set(spawn.x,gardenSurfaceHeight({x:spawn.x,z:spawn.z+.5}),spawn.z+.5);scene.add(actor.root);
 toolbar=doc.createElement('div');toolbar.style.cssText='position:absolute;right:8px;top:8px;display:flex;gap:4px;max-width:calc(100% - 16px)';container.append(toolbar);
 status=doc.createElement('div');status.setAttribute('role','status');status.style.cssText='position:absolute;bottom:9px;left:8px;max-width:calc(100% - 34px);background:#fffffff0;color:#205b66;padding:5px 9px;border-radius:10px;font:13px sans-serif;pointer-events:none';status.textContent='點地面走動 · 點課名進課';container.append(status);
 help=doc.createElement('small');help.textContent='方向鍵 / WASD 移動';help.style.cssText='position:absolute;right:8px;bottom:9px;padding:5px 9px;background:#fffffff0;color:#205b66;border-radius:10px;pointer-events:none';container.append(help);
 function button(text,label,fn){const b=doc.createElement('button');b.type='button';b.textContent=text;b.setAttribute('aria-label',label);b.style.cssText='min-width:44px;min-height:44px;padding:4px 10px;border:1px solid #73acae;border-radius:12px;background:#fffbea;color:#205b66;font:bold 17px sans-serif';b.onclick=fn;toolbar.append(b);return b;}
 button('＋','放大',()=>radius=Math.max(7,radius/1.2));button('−','縮小',()=>radius=Math.min(overview*1.5,radius*1.2));button('⌂','全景',()=>{radius=overview;theta=.08;phi=.63;});
 const dpad=doc.createElement('span');dpad.style.cssText='display:flex;gap:3px';toolbar.prepend(dpad);
 for(const [text,key,label]of[['←','ArrowLeft','向左'],['↑','ArrowUp','向前'],['↓','ArrowDown','向後'],['→','ArrowRight','向右']]){const b=button(text,label,()=>{});dpad.append(b);listen(b,'pointerdown',e=>{e.preventDefault();keys.add(key);route=[];pending=null;b.setPointerCapture(e.pointerId);});listen(b,'pointerup',()=>keys.delete(key));listen(b,'pointercancel',()=>keys.delete(key));listen(b,'lostpointercapture',()=>keys.delete(key));}
 function updateProgress(next,id){progress=next||{};if(id!==undefined)selected=id;for(const m of markers){const p=progress[m.userData.unitId];m.material.color.setHex(m.userData.unitId===selected?0xeaa945:p===true||p?.completed?0x438a57:0x37a3b0);}}
 function stop(){keys.clear();route=[];pending=null;pointers.clear();}
 function go(n){const p={x:n.x,z:n.z+.5};const found=routeOnRoad(actor.root.position,p);if(found){route=found;pending=n;status.textContent=`🚶 ${n.number} · ${n.title}`;}else status.textContent='未找到可走的路，請再試一次。';}
 const ray=new T.Raycaster(),mouse=new T.Vector2();let gesture=false,drag=null,gap=null;
 function pointerGap(){const p=[...pointers.values()];return p.length===2?Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y):null;}
 listen(canvas,'pointerdown',e=>{if(e.button!==0)return;canvas.focus({preventScroll:true});canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size===1){gesture=false;drag={x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY};}else{gesture=true;gap=pointerGap();}});
 listen(canvas,'pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pointers.size>1){const g=pointerGap();if(g&&gap)radius=Math.max(7,Math.min(overview*1.5,radius*gap/g));gap=g;gesture=true;return;}if(!drag)return;if(Math.hypot(e.clientX-drag.sx,e.clientY-drag.sy)>6)gesture=true;if(gesture){theta-=(e.clientX-drag.x)*.006;phi=Math.max(.3,Math.min(1.1,phi+(e.clientY-drag.y)*.005));}drag.x=e.clientX;drag.y=e.clientY;});
 function release(id){
  pointers.delete(id);gap=null;
  const p=pointers.size===1?pointers.values().next().value:null;
  drag=p?{x:p.x,y:p.y,sx:p.x,sy:p.y}:null;
 }
 function end(e){
  const click=e.type==='pointerup'&&pointers.has(e.pointerId)&&pointers.size===1&&!gesture&&drag&&Math.hypot(e.clientX-drag.sx,e.clientY-drag.sy)<=8;
  release(e.pointerId);if(!click)return;
  const r=canvas.getBoundingClientRect();if(r.width<=0||r.height<=0)return;
  mouse.set((e.clientX-r.left)/r.width*2-1,1-(e.clientY-r.top)/r.height*2);
  scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);ray.setFromCamera(mouse,camera);
  const destination=pickGardenGround(ray,garden.walkMeshes,nav);
  if(!destination)return;
  const found=nav.path(actor.root.position,destination);
  if(found){route=found;pending=null;status.textContent='🚶 前往地圖位置';}
 }
 listen(canvas,'pointerup',end);listen(canvas,'pointercancel',end);listen(canvas,'lostpointercapture',e=>{release(e.pointerId);gesture=true;});
 listen(canvas,'wheel',e=>{e.preventDefault();radius=Math.max(7,Math.min(overview*1.5,radius*Math.exp(Math.max(-300,Math.min(300,e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?300:1)))*.001)));},{passive:false});
 const movement=new Set(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d']);
 listen(canvas,'keydown',e=>{if(movement.has(e.key)){e.preventDefault();keys.add(e.key);route=[];pending=null;}});listen(win,'keyup',e=>keys.delete(e.key));listen(win,'blur',stop);listen(canvas,'blur',()=>keys.clear());listen(doc,'visibilitychange',()=>{if(doc.hidden)stop();});listen(canvas,'webglcontextlost',e=>{e.preventDefault();fail(Error('WebGL unavailable; use traditional lessons.'));});
 const projected=new T.Vector3();let mapWidth=1,mapHeight=1,labelSignature="";
 function resize(){
  const w=mapWidth=container.clientWidth,h=mapHeight=container.clientHeight,{overview:next,aspect,compact:isCompact}=gardenCameraFit(w,h);labelSignature="";
  const scale=next/overview;overview=next;radius*=scale;viewRadius*=scale;compact=isCompact;
  renderer.setSize(Math.max(1,w),Math.max(1,h),false);camera.aspect=aspect;camera.updateProjectionMatrix();
  // Touch can access every stop by tapping the map; preserve accessible
  // D-pad buttons in landscape/desktop, without overlaying the phone village.
  dpad.style.display=compact?'none':'flex';help.hidden=compact;
 }
 const observer=new win.ResizeObserver(resize);observer.observe(container);cleanup.push(()=>observer.disconnect());
 function animate(time){if(closed)return;try{const dt=last?Math.min(.05,(time-last)/1000):0;last=time;let moved=0;if(!doc.hidden){let x=(keys.has('d')||keys.has('ArrowRight')?1:0)-(keys.has('a')||keys.has('ArrowLeft')?1:0),z=(keys.has('s')||keys.has('ArrowDown')?1:0)-(keys.has('w')||keys.has('ArrowUp')?1:0);const prev=actor.root.position.clone();if(x||z){const len=Math.hypot(x,z);const p={x:prev.x+(x*Math.cos(theta)+z*Math.sin(theta))/len*dt*2.4,z:prev.z+(-x*Math.sin(theta)+z*Math.cos(theta))/len*dt*2.4};if(nav.clear(prev,p)){actor.root.position.x=p.x;actor.root.position.z=p.z;moved=1;}}else moved=advance(actor.root.position,route,dt,nav);if(moved){actor.root.position.y=gardenSurfaceHeight(actor.root.position);options.onPosition?.({x:actor.root.position.x,z:actor.root.position.z});actor.root.rotation.y=Math.atan2(actor.root.position.x-prev.x,actor.root.position.z-prev.z);actor.body.rotation.y=0;}const reduceMotion=win.matchMedia('(prefers-reduced-motion: reduce)').matches;actor.animate(time/1000,!!moved,reduceMotion,{stride:.624});garden.animate(reduceMotion?0:time/1000);if(pending&&!route.length){const n=pending;pending=null;if(!isAtGardenStation(actor.root.position,n)){status.textContent='路線中斷，請重新選擇入口。';}else{status.textContent=`✓ ${n.number} · ${n.title}`;options.onSelect?.(n.id);if(closed)return;}}}
 viewRadius=easeGardenZoom(viewRadius,radius,dt);
 const follow=Math.max(0,Math.min(1,(1-viewRadius/overview)/.55)),cx=actor.root.position.x*follow,cz=actor.root.position.z*follow;camera.position.set(cx+viewRadius*Math.sin(phi)*Math.sin(theta),viewRadius*Math.cos(phi),cz+viewRadius*Math.sin(phi)*Math.cos(theta));camera.lookAt(cx,0,cz);camera.updateMatrixWorld();
 scene.fog.near=Math.max(28,viewRadius+3);scene.fog.far=Math.max(55,viewRadius+27);
 const points=stationSigns.map(({at})=>{
  projected.copy(at).project(camera);
  return {x:(1+projected.x)*mapWidth/2,y:(1-projected.y)*mapHeight/2,z:projected.z,ndcX:projected.x,ndcY:projected.y};
 });
 const signature=points.map(p=>[Math.round(p.x),Math.round(p.y),p.z< -1||p.z>1].join(',')).join(';');
 if(signature!==labelSignature){
  labelSignature=signature;
  englishLabelLayout(points,mapWidth,mapHeight).forEach((b,i)=>{
   const {pin,line}=stationSigns[i];
   pin.hidden=!b;pin.style.display=b?'grid':'none';line.style.visibility=b?'visible':'hidden';
   if(!b)return;
   pin.style.width=b.w+'px';pin.style.height=b.h+'px';pin.style.transform=`translate3d(${b.x}px,${b.y}px,0)`;
   line.setAttribute('x1',b.anchorX);line.setAttribute('y1',b.anchorY);
   line.setAttribute('x2',b.x+b.w/2);line.setAttribute('y2',b.y+b.h);
  });
 }
 renderer.render(scene,camera);frame=win.requestAnimationFrame(animate);}catch(e){fail(e);}}
 resize();updateProgress(progress,selected);frame=win.requestAnimationFrame(animate);
 return {dispose,updateProgress};
 } catch(error){dispose();throw error;}
}
