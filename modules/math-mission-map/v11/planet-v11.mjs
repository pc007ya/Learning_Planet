import { createLifetime, disposeTree, movementKey, editableTarget } from './lifecycle.mjs';
import { createWalking, isWalkSurface } from './walking.mjs';
import { dijkstra, toWorld } from './nav.mjs';
import { createLandingTimeline, createLandingDirector } from '../planet-art-v2-landing.mjs';
import { createYuyu } from './planet-yuyu.mjs';

/** A grade is immutable for one mount. Host owns lesson entry and learning progress. */
export const WORLD_VERSION = 'planet-v11-world-v1';
const loadProductionModules = () => Promise.all([import('../../math-knowledge/vendor/three-r187/three.module.js'), import('./vendor/GLTFLoader.js')]);
export function createV11PlanetScene(container, options = {}, loadModules = loadProductionModules) {
  const { grade, assetBaseUrl, initialState, onSelect, onArrive, onState, onError, onProject, onGround, onPosition, onActorProject, onLandingState, onPropsState } = options;
  if (![1,2,3].includes(grade)) throw new TypeError('grade must be 1, 2 or 3');
  if (!container?.appendChild) throw new TypeError('A DOM container is required');
  if (!assetBaseUrl) throw new TypeError('assetBaseUrl is required');
  const life = createLifetime(), assets=new AbortController();life.own(()=>assets.abort());
  let resolveInitialized;const initialized=new Promise(resolve=>{resolveInitialized=resolve;});
  life.own(()=>resolveInitialized(false));
  const doc = container.ownerDocument, win = doc.defaultView;
  const root = doc.createElement('div'); root.tabIndex = 0;
  root.setAttribute('aria-label', '學習星球，可使用方向鍵移動');
  Object.assign(root.style, {position:'relative',width:'100%',height:'100%',minHeight:'0',overflow:'hidden',outlineOffset:'-3px'});
  const canvas = doc.createElement('canvas'); canvas.setAttribute('aria-label','三維學習星球');
  Object.assign(canvas.style,{display:'block',width:'100%',height:'100%',touchAction:'none'}); root.appendChild(canvas); container.appendChild(root);
  life.own(() => root.remove());
  const restored=initialState?.worldVersion===WORLD_VERSION && initialState.grade===grade ? initialState : null;
  const manualLanding=options.manualLanding===true;
  const state = {worldVersion:WORLD_VERSION,grade,resourcesReady:options.resourcesReady!==false && !options.resourcesReady?.then,rocketReady:!manualLanding,landingStarted:!manualLanding,landingShot:'orbit',loading:true,ready:false,error:null,contextLost:false,landed:false,landingProgress:0,positionReady:false,mode:restored?.mode === 'follow'?'follow':'overview',position:[0,0,0],target:null,arrived:false,blocked:null,nearbyCourseId:null};
  let THREE,renderer,scene,camera,look,character,yuyu,terrain,data,physics,frameId=0,last=0,path=[],width=1,height=1,visible=true;
  let director=null,props=null,walkMeshes=[],cameraPan=[0,0],viewport={left:0,right:0,top:0,bottom:0};
  const timeline=createLandingTimeline();
  let cameraSettling=true,lastNotify=0,landingElapsed=0,lastProject=-Infinity;
  const keys = new Set();
  const notify = (fn, value) => { if (!life.disposed && typeof fn === 'function') { try { fn(value); } catch (e) { console.error('Planet host callback failed',e); } } };
  const getState = () => structuredClone({...state,disposed:life.disposed,position:character?.position.toArray() || state.position,remainingWaypoints:path.length,moving:keys.size>0||path.length>0});
  const emit = () => notify(onState,getState());
  function stopFrame() { if(frameId) win.cancelAnimationFrame(frameId); frameId=0; last=0; }
  life.own(stopFrame);
  function wake() { if(!life.disposed && renderer && camera && data && !state.error && !state.contextLost && !doc.hidden && visible && !frameId) frameId=win.requestAnimationFrame(frame); }
  function clearNav() { path=[];state.target=null;state.arrived=false; }
  function fail(error) { if(life.disposed)return; resolveInitialized(false);assets.abort();stopFrame();keys.clear();path=[];state.loading=false;state.ready=false;state.error=error.message || String(error);emit();notify(onError,{grade,message:state.error,code:'SCENE_UNAVAILABLE',recoverable:true}); }
  function reset() {
    if(!physics || !data || life.disposed || state.contextLost || !state.ready)return false;
    clearNav();keys.clear();const [x,,z]=toWorld(data.spawn), y=physics.floor(x,z);
    if(y===null) { fail(new Error('出生點缺少可走表面')); return false; }
    character.position.set(x,y,z);character.visible=true;state.blocked=null;cameraSettling=true;emit();wake();return true;
  }
  function setMode(mode) { if(life.disposed || !state.landed || !['overview','follow'].includes(mode))return false;state.mode=mode;cameraSettling=true;emit();wake();return true; }
  const movementReady=()=>state.ready&&state.landed&&(!manualLanding||(state.resourcesReady&&state.rocketReady))&&!state.contextLost&&!life.disposed;
  function setMovement(key,pressed) {
    const k=movementKey(key);if(!k || life.disposed)return false;
    if(!pressed){keys.delete(k);emit();wake();return true;}
    if(!movementReady() || doc.hidden)return false;
    keys.add(k);clearNav();state.mode='follow';cameraSettling=true;emit();wake();return true;
  }
  function navigate(courseId) {
    if(!movementReady())return false;
    const station=data.stationsData.find(s=>s.id===courseId);if(!station)return false;
    const by=new Map(data.nodes.map(n=>[n.id,n]));
    const candidates=data.nodes.map(n=>({n,p:new THREE.Vector3(...toWorld(n.p))})).sort((a,b)=>a.p.distanceToSquared(character.position)-b.p.distanceToSquared(character.position));
    let route=null;
    for(const c of candidates){if(!physics.lineSafe(character.position,c.p))continue;const ids=dijkstra(data.nodes,data.edges,c.n.id,station.navNode);if(ids.length){route=ids;break;}}
    if(!route){state.blocked='no-safe-route';emit();return false;}
    keys.clear();path=route.map(id=>new THREE.Vector3(...toWorld(by.get(id).p)));path.push(new THREE.Vector3(...toWorld(station.entry)));
    state.target=courseId;state.arrived=false;state.blocked=null;state.mode='follow';cameraSettling=true;
    notify(onSelect,{grade,courseId,title:station.title});emit();wake();return true;
  }
  function stop(){if(life.disposed)return false;keys.clear();clearNav();emit();return true;}
  function moveTo(point, config={}) {
    if(typeof config==='string')return navigate(config);
    if(config.courseId)return navigate(config.courseId);
    if(!movementReady()||!Array.isArray(point)||point.length!==2||!point.every(Number.isFinite))return false;
    const [x,z]=point,y=physics.floor(x,z);
    if(y===null||!physics.valid(x,z,y).ok)return false;
    const dest=new THREE.Vector3(x,y,z);let route=null;
    if(physics.lineSafe(character.position,dest))route=[dest];
    else {
      const by=new Map(data.nodes.map(n=>[n.id,n]));
      const nodes=data.nodes.map(n=>({n,p:new THREE.Vector3(...toWorld(n.p))}));
      const starts=nodes.filter(n=>physics.lineSafe(character.position,n.p)).sort((a,b)=>a.p.distanceToSquared(character.position)-b.p.distanceToSquared(character.position));
      const ends=nodes.filter(n=>physics.lineSafe(n.p,dest)).sort((a,b)=>a.p.distanceToSquared(dest)-b.p.distanceToSquared(dest));
      outer:for(const a of starts)for(const b of ends){const ids=dijkstra(data.nodes,data.edges,a.n.id,b.n.id);if(ids.length){route=ids.map(id=>new THREE.Vector3(...toWorld(by.get(id).p)));route.push(dest);break outer;}}
    }
    if(!route){state.blocked='no-safe-route';emit();return false;}
    keys.clear();clearNav();path=route;state.blocked=null;state.mode='follow';cameraSettling=true;emit();wake();return true;
  }
  function setCameraPan(point){
    if(life.disposed||!Array.isArray(point)||point.length!==2||!point.every(Number.isFinite))return false;
    cameraPan=point.map(n=>Math.max(-100,Math.min(100,n)));cameraSettling=true;wake();return true;
  }
  function panBy(dx,dz){return setCameraPan([cameraPan[0]+dx,cameraPan[1]+dz]);}
  function setCameraViewport(value={}){
    if(life.disposed||assets.signal.aborted)return false;
    for(const k of ['left','right','top','bottom'])viewport[k]=Number.isFinite(value[k])?Math.max(0,value[k]):0;
    resize();return true;
  }
  function setResourcesReady(value=true){if(life.disposed)return false;state.resourcesReady=value===true;if(!state.resourcesReady){keys.clear();clearNav();}emit();wake();return true;}
  function beginLanding(){
    if(life.disposed||state.error||state.landed||state.landingStarted)return false;
    state.landingStarted=true;state.mode='follow';timeline.start();emit();wake();return true;
  }
  function cancelLanding(){
    if(life.disposed)return false;
    timeline.cancel();state.landed=false;state.landingStarted=false;if(character)character.visible=false;state.landingProgress=0;state.landingShot='orbit';state.mode='overview';director?.hide();stop();cameraSettling=true;emit();wake();return true;
  }
  function move(dx,dz) {const result=physics.step(character.position,dx,dz);state.blocked=result.blocked;if(result.moved){character.rotation.y=Math.atan2(dx,dz)-.54;state.arrived=false;}return result.moved;}
  const reducedMotion=win.matchMedia?.('(prefers-reduced-motion: reduce)');
  function frame(now) {
    frameId=0;if(life.disposed || !renderer || !camera || !data || state.contextLost || doc.hidden || !visible)return;
    const dt=last?Math.min((now-last)/1000,.05):1/60;last=now;
    let walking=false;
    const dx=Number(keys.has('right'))-Number(keys.has('left')),dz=Number(keys.has('down'))-Number(keys.has('up'));
    if(movementReady()&&(dx||dz)){const n=Math.hypot(dx,dz);walking=move(dx/n*dt*6,dz/n*dt*6);}
    else if(movementReady()&&path.length){const p=character.position,dest=path[0],distance=Math.hypot(dest.x-p.x,dest.z-p.z);
      if(distance<.16){path.shift();if(!path.length){state.arrived=true;const station=data.stationsData.find(s=>s.id===state.target);emit();if(station)notify(onArrive,{grade,courseId:station.id,title:station.title});}}
      else {const step=Math.min(distance,dt*6);walking=move((dest.x-p.x)/distance*step,(dest.z-p.z)/distance*step);if(!walking){path=[];emit();}}
    }
    yuyu.animate(now,walking,reducedMotion?.matches===true);
    const view=data.view || {},follow=state.mode==='follow';
    let targetLook=follow?character.position.clone().add(new THREE.Vector3(0,1,0)):new THREE.Vector3(...(view.overviewTarget || [0,2,-15]));
    let targetCam=follow?character.position.clone().add(new THREE.Vector3(...(view.followOffset || [19,24,31]))):new THREE.Vector3(...(view.overviewPosition || [104,118,130]));
    targetCam.add(new THREE.Vector3(cameraPan[0],0,cameraPan[1]));
    const cameraFloor=physics?.floor(targetCam.x,targetCam.z);targetCam.y=Math.max(targetCam.y,(cameraFloor??0)+3);targetLook.add(new THREE.Vector3(cameraPan[0],0,cameraPan[1]));
    let landingFrame=null;
    if(manualLanding&&!state.landed){
      landingFrame=timeline.step(dt,{ready:state.ready&&state.resourcesReady&&state.rocketReady,rocketReady:state.rocketReady,reduced:reducedMotion?.matches===true});
      state.landingProgress=landingFrame.progress;state.landingShot=landingFrame.shot;character.visible=landingFrame.complete;notify(onLandingState,landingFrame);
      if(landingFrame.complete){state.landed=true;state.mode='follow';emit();}
    }else if(!state.landed){
      landingElapsed+=dt;state.landingProgress=Math.min(1,landingElapsed/2.4);
      const t=state.landingProgress,ease=t*t*(3-2*t);
      targetLook=character.position.clone().add(new THREE.Vector3(0,1,0));
      targetCam=character.position.clone().add(new THREE.Vector3(19+(1-ease)*55,24+(1-ease)*90,31+(1-ease)*70));
      if(t===1){state.landed=true;state.mode='follow';emit();}
    }
    const blend=reducedMotion?.matches?1:1-Math.exp(-dt*5);
    camera.position.lerp(targetCam,blend);look.lerp(targetLook,blend);camera.lookAt(look);
    if(landingFrame)director?.apply(landingFrame,camera,targetCam,targetLook);
    camera.updateMatrixWorld(true);
    if(now-lastProject>=100){
      lastProject=now;
      let nearest=null,nearestDistance=Infinity;
      const projected=data.stationsData.map(station=>{
        const entry=new THREE.Vector3(...toWorld(station.entry));
        const distance=entry.distanceTo(character.position);
        if(distance<nearestDistance){nearestDistance=distance;nearest=station.id;}
        const p=new THREE.Vector3(...toWorld(station.p || station.entry)).add(new THREE.Vector3(0,station.labelHeight ?? 5.2,0)).project(camera);
        return {courseId:station.id,x:(p.x+1)/2,y:(1-p.y)/2,visible:p.z>-1&&p.z<1&&Math.abs(p.x)<1&&Math.abs(p.y)<1,nearby:distance<=4};
      });
      state.nearbyCourseId=nearestDistance<=4?nearest:null;
      notify(onProject,projected);
      const avatar=character.position.clone().add(new THREE.Vector3(0,1.6,0)).project(camera);
      const box=new THREE.Box3().setFromObject(character),corners=[];
      for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])corners.push(new THREE.Vector3(x,y,z).project(camera));
      const bodyFocus=character.position.clone().add(new THREE.Vector3(0,2.4,0)).project(camera);
      notify(onActorProject,{bodyFocus:{x:(bodyFocus.x+1)/2,y:(1-bodyFocus.y)/2},avatar:{x:(avatar.x+1)/2,y:(1-avatar.y)/2,visible:character.visible&&avatar.z>-1&&avatar.z<1},actorBounds:{left:Math.min(...corners.map(p=>(p.x+1)/2)),right:Math.max(...corners.map(p=>(p.x+1)/2)),top:Math.min(...corners.map(p=>(1-p.y)/2)),bottom:Math.max(...corners.map(p=>(1-p.y)/2))}});
      notify(onPosition,character.position.toArray());
    }
    cameraSettling=camera.position.distanceToSquared(targetCam)>.0001 || look.distanceToSquared(targetLook)>.0001;
    try {renderer.render(scene,camera);} catch(e) {fail(e);return;}
    if(now-lastNotify>200 && (walking||path.length||!state.landed)){lastNotify=now;emit();}
    if(keys.size||path.length||cameraSettling||(!state.landed&&(!manualLanding||timeline.active)))wake();else {last=0;emit();}
  }
  function listen(target,name,handler,opts) {target.addEventListener(name,handler,opts);life.own(()=>target.removeEventListener(name,handler,opts));}
  listen(root,'keydown',e=>{if(editableTarget(e.target) || e.ctrlKey || e.metaKey || e.altKey)return;if(movementKey(e.key)){e.preventDefault();setMovement(e.key,true);}});
  listen(root,'keyup',e=>{if(movementKey(e.key)){e.preventDefault();setMovement(e.key,false);}});
  listen(root,'focusout',()=>keys.clear()); listen(win,'blur',()=>{keys.clear();pointerStart=null;});
  let pointerStart=null;
  listen(canvas,'pointerdown',e=>{
    if(e.isPrimary===false||(e.button!=null&&e.button!==0))return;
    root.focus({preventScroll:true});pointerStart={id:e.pointerId,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,dragged:false};
    canvas.setPointerCapture?.(e.pointerId);
  });
  listen(canvas,'pointermove',e=>{
    if(!pointerStart||pointerStart.id!==e.pointerId||!movementReady())return;
    if(Math.hypot(e.clientX-pointerStart.x,e.clientY-pointerStart.y)>8)pointerStart.dragged=true;
    if(pointerStart.dragged){
      const scale=state.mode==='overview'?.18:.07;
      panBy((pointerStart.lastX-e.clientX)*scale,(pointerStart.lastY-e.clientY)*scale);
      pointerStart.lastX=e.clientX;pointerStart.lastY=e.clientY;
    }
  });
  listen(canvas,'pointercancel',()=>{pointerStart=null;});
  listen(canvas,'lostpointercapture',()=>{pointerStart=null;});
  listen(canvas,'pointerup',e=>{
    const press=pointerStart;pointerStart=null;
    if(!press||press.id!==e.pointerId||press.dragged||Math.hypot(e.clientX-press.x,e.clientY-press.y)>8)return;
    if(!movementReady())return;
    const rect=canvas.getBoundingClientRect(),ray=new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2((e.clientX-(rect.left||0))/rect.width*2-1,1-(e.clientY-(rect.top||0))/rect.height*2),camera);
    const hit=ray.intersectObjects(walkMeshes,false).find(h=>h.face&&h.face.normal.clone().transformDirection(h.object.matrixWorld).y>.4);
    if(hit&&physics.valid(hit.point.x,hit.point.z,hit.point.y).ok)notify(onGround,[hit.point.x,hit.point.z]);
  });
  listen(doc,'visibilitychange',()=>{keys.clear();pointerStart=null;if(doc.hidden)stopFrame();else wake();});
  listen(canvas,'webglcontextlost',e=>{e.preventDefault();state.contextLost=true;keys.clear();stopFrame();emit();notify(onError,{grade,code:'WEBGL_CONTEXT_LOST',message:'3D 顯示暫時中斷，仍可使用課程清單。',recoverable:true});});
  listen(canvas,'webglcontextrestored',()=>{state.contextLost=false;cameraSettling=true;emit();wake();});
  function resize() {if(!renderer)return;const rect=root.getBoundingClientRect();width=Math.max(1,rect.width);height=Math.max(1,rect.height);renderer.setSize(width,height,false);camera.aspect=width/height;
    const left=Math.min(viewport.left,width*.4),right=Math.min(viewport.right,width*.4),top=Math.min(viewport.top,height*.4),bottom=Math.min(viewport.bottom,height*.4);
    camera.setViewOffset(width,height,(right-left)/2,(bottom-top)/2,width,height);camera.updateProjectionMatrix();cameraSettling=true;wake();}
  if(win.ResizeObserver){const ro=new win.ResizeObserver(resize);ro.observe(root);life.own(()=>ro.disconnect());}else listen(win,'resize',resize);
  if(win.IntersectionObserver){const io=new win.IntersectionObserver(entries=>{visible=entries.some(e=>e.isIntersecting);if(visible)wake();else{keys.clear();stopFrame();}});io.observe(root);life.own(()=>io.disconnect());}
  const ready = (async()=>{
    let parsedRoot=null;
    try {
      // Constructing the renderer happens before any model/JSON fetch. No graphics fallback bypass.
      const modules=await loadModules();
      if(life.disposed||assets.signal.aborted)return false;THREE=modules[0];const {GLTFLoader}=modules[1];
      scene=new THREE.Scene();scene.background=new THREE.Color('#14263b');scene.fog=new THREE.Fog('#14263b',140,340);
      renderer=new THREE.WebGLRenderer({canvas,antialias:false,powerPreference:'low-power'});life.own(()=>{renderer?.renderLists.dispose();renderer?.dispose();renderer=null;});
      renderer.setPixelRatio(Math.min(win.devicePixelRatio||1,1));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.18;resolveInitialized(true);
      camera=new THREE.PerspectiveCamera(43,1,.1,600);camera.position.set(104,118,130);look=new THREE.Vector3(0,2,-15);
      scene.add(new THREE.HemisphereLight(0xd5efff,0x596274,1.7));const sun=new THREE.DirectionalLight(0xffe5c5,3.3);sun.position.set(-40,85,50);scene.add(sun);
      // Mobile-safe default: no shadows, original geometry and character unchanged.
      yuyu=createYuyu(THREE,{own:x=>x,color:(c,opts)=>new THREE.MeshStandardMaterial({color:c,...opts}),mesh:(parent,g,m,pos=[0,0,0])=>{const mesh=new THREE.Mesh(g,m);mesh.position.set(...pos);parent.add(mesh);return mesh;}});
      character=yuyu.root;character.scale.setScalar(1.15);character.visible=false;scene.add(character);life.own(()=>{disposeTree(character);character=null;});
      const base=new URL(assetBaseUrl.endsWith('/')?assetBaseUrl:assetBaseUrl+'/',doc.baseURI);
      if(options.sceneData)data=options.sceneData;else {const fetchJson=await win.fetch(new URL(`grade${grade}-scene.json`,base),{signal:assets.signal});if(!fetchJson.ok)throw Error(`場景資料 HTTP ${fetchJson.status}`);data=await fetchJson.json();}
      if(life.disposed||assets.signal.aborted)return false;
      if(!Array.isArray(data.stationsData)||!Array.isArray(data.nodes)||!Array.isArray(data.edges)||!Array.isArray(data.spawn))throw Error('場景資料格式錯誤');
      character.position.set(...toWorld(data.spawn));
      // The small authored rocket loads alongside terrain. Its approach can play
      // during GLB transfer; the timeline waits before descent until the world is safe.
      const propsLoading=manualLanding?(async()=>{
        const {createSpaceProps}=modules[2] || await import('../planet-space-props.mjs');
        if(life.disposed||assets.signal.aborted)return false;
        director=createLandingDirector(THREE,scene);
        props=createSpaceProps(scene,{fetcher:win.fetch.bind(win),loader:new GLTFLoader(),signal:assets.signal,onState:value=>notify(onPropsState,value)});
        life.own(()=>props.dispose());life.own(()=>director.dispose());
        const loaded=await props.ready;if(life.disposed||assets.signal.aborted)return false;
        if(!loaded||!director.attach(loaded.root))throw Error('降落火箭載入失敗');
        director.setLanding(character.position.toArray());state.rocketReady=true;emit();wake();return true;
      })():Promise.resolve(true);
      // Observe rejection immediately even while the independent terrain request waits.
      propsLoading.catch(error=>{if(!life.disposed)fail(error);});
      resize();wake();
      const response=await win.fetch(new URL(`grade${grade}-terrain.glb`,base),{signal:assets.signal});if(!response.ok)throw Error(`地形模型 HTTP ${response.status}`);
      const buffer=await response.arrayBuffer();if(life.disposed||assets.signal.aborted)return false;
      const gltf=await new GLTFLoader().parseAsync(buffer,base.href);parsedRoot=gltf.scene;
      if(life.disposed||assets.signal.aborted){disposeTree(parsedRoot);parsedRoot=null;return false;}
      terrain=parsedRoot;parsedRoot=null;life.own(()=>{disposeTree(terrain);terrain=null;});scene.add(terrain);terrain.updateMatrixWorld(true);
      const meshes=[];walkMeshes=meshes;terrain.traverse(o=>{if(isWalkSurface(o)){meshes.push(o);for(const m of Array.isArray(o.material)?o.material:[o.material])m.side=THREE.DoubleSide;}});
      if(!meshes.length)throw Error('模型未提供可走表面');
      physics=createWalking(THREE,()=>data,()=>meshes);state.loading=false;state.ready=true;
      if(!reset())throw Error(state.error || '出生點載入失敗');
      let validRestore=false;
      if(restored && Array.isArray(restored.position) && restored.position.length===3 && restored.position.every(Number.isFinite)){
        const [x,,z]=restored.position,y=physics.floor(x,z);if(y!==null&&physics.valid(x,z,y).ok){character.position.set(x,y,z);validRestore=true;}
      }
      state.positionReady=true;
      if(!await propsLoading||life.disposed||assets.signal.aborted)return false;
      director?.setLanding(character.position.toArray());
      state.landed=validRestore&&restored?.landed===true || (!manualLanding&&reducedMotion?.matches===true);
      character.visible=!manualLanding||state.landed;
      state.landingStarted=state.landed||!manualLanding||state.landingStarted;
      state.landingProgress=state.landed?1:0;
      if(!state.landed){camera.position.copy(character.position).add(new THREE.Vector3(74,114,101));look.copy(character.position);}
      resize();emit();wake();return true;
    }catch(e){if(parsedRoot)disposeTree(parsedRoot);if(!life.disposed){fail(e);if(terrain){disposeTree(terrain);terrain=null;}if(character){disposeTree(character);character=null;}director?.dispose();props?.dispose();renderer?.dispose();renderer=null;}return false;}
  })();
  if(options.resourcesReady?.then)Promise.resolve(options.resourcesReady).then(()=>setResourcesReady(true),e=>fail(e));
  emit();
  return {ready,initialized,cancelLanding,beginLanding,setResourcesReady,moveTo,stop,setCameraPan,panBy,pan:panBy,setCameraViewport,navigate,setMode,reset,setMovement,getState,skipLanding(){if(life.disposed || !state.ready || manualLanding)return false;state.landed=true;state.landingProgress=1;state.mode='follow';cameraSettling=true;emit();wake();return true;},dispose(){if(life.disposed)return;life.dispose();keys.clear();path=[];state.ready=false;state.loading=false;data=null;physics=null;}};
}
