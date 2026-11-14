import {createSkyCruise} from './sky-cruise.mjs';
import {createCrewedArrival} from './crewed-arrival.mjs';
import {createCrewedWorldHost} from './crewed-world-host.mjs';
import {mountYuyuRig} from '../../shared-actors/yuyu-rig-adapter.mjs';
import {loadFlightPlatform} from './flight-platform-loader.mjs';
import {createShipFlight} from './ship-flight.mjs';
import {createWorldWildlife} from './world-wildlife.mjs';
import {loadLandscapeDetails} from './landscape-details-loader.mjs';
import {createCoastVisibility} from './coast-visibility.mjs';
import {loadVerifiedLandscape} from './landscape-loader.mjs';
import {reviewedLandscapeDescriptor,reviewReleasedFauna} from './landscape-releases.mjs';
import {installLandscapeV3} from './landscape-v3.mjs';
import {createLandscapeMotionHost} from './landscape-host-motion.mjs';
import { loadBotanicalPilot } from './botanical-loader.mjs';
import { createDayNight } from './day-night.mjs';
import { createLifetime, disposeTree, movementKey, editableTarget } from './lifecycle.mjs';
import { createWalking, isWalkSurface } from './walking.mjs';
import { dijkstra, toWorld } from './nav.mjs';
import { createLandingTimeline, createLandingDirector } from '../planet-art-v2-landing.mjs';
import { createYuyu } from './planet-yuyu.mjs';
import { createAerialMotion } from './aerial-motion.mjs?v=20261111-v23-cockpit';
import { createOceanMotion, createOceanClock, OCEAN_MOTION_MODES } from './ocean-motion.mjs?v=20261111-v23-cockpit';

import { createExplorationMotion } from './exploration-motion.mjs?v=20261111-v23-cockpit';
import { GROUND_WALK_SPEED, GROUND_WALK_STRIDE, advanceGroundPath, samplePathLookahead, stepGroundYaw } from './ground-motion.mjs';
import { resolveOverviewView } from './landmark-view-profiles.mjs';
import { createLandmarkViewCamera } from './landmark-view-camera.mjs';

/** A grade is immutable for one mount. Host owns lesson entry and learning progress. */
export const WORLD_VERSION = 'nature-planet-world-v1';
const loadProductionModules = () => Promise.all([import('../../math-knowledge/vendor/three-r187/three.module.js'), import('./vendor/GLTFLoader.js')]);
export function createNaturePlanetScene(container, options = {}, loadModules = loadProductionModules) {
  const { grade, assetBaseUrl, initialState, onSelect, onArrive, onState, onError, onProject, onGround, onPosition, onActorProject, onLandingState, onPropsState } = options;
  if (![1,2,3,4,5,6].includes(grade)) throw new TypeError('grade must be an integer from 1 to 6');
  if (!container?.appendChild) throw new TypeError('A DOM container is required');
  if (!assetBaseUrl) throw new TypeError('assetBaseUrl is required');
  const life = createLifetime(), assets=new AbortController();life.own(()=>assets.abort());
  let resolveInitialized;const initialized=new Promise(resolve=>{resolveInitialized=resolve;});
  life.own(()=>resolveInitialized(false));
  const doc = container.ownerDocument, win = doc.defaultView;
  const root = doc.createElement('div'); root.tabIndex = 0;
  root.setAttribute('aria-label', '自然星球，可使用方向鍵移動');
  Object.assign(root.style, {position:'relative',width:'100%',height:'100%',minHeight:'0',overflow:'hidden',outlineOffset:'-3px'});
  const canvas = doc.createElement('canvas'); canvas.setAttribute('aria-label','三維自然星球');
  Object.assign(canvas.style,{display:'block',width:'100%',height:'100%',touchAction:'none'}); root.appendChild(canvas); container.appendChild(root);
  life.own(() => root.remove());
  const restored=initialState?.worldVersion===WORLD_VERSION && initialState.grade===grade ? initialState : null;
  const manualLanding=options.manualLanding===true;
  const state = {worldVersion:WORLD_VERSION,grade,resourcesReady:options.resourcesReady!==false && !options.resourcesReady?.then,rocketReady:!manualLanding,landingStarted:!manualLanding,landingShot:'orbit',loading:true,ready:false,error:null,contextLost:false,landed:false,landingProgress:0,positionReady:false,mode:restored?.mode === 'follow'?'follow':'overview',position:[0,0,0],target:null,arrived:false,blocked:null,nearbyCourseId:null};
  let THREE,renderer,scene,camera,look,character,yuyu,terrain,data,physics,frameId=0,idleTimer=0,last=0,path=[],width=1,height=1,visible=true;
  let director=null,props=null,arrivalRockets=[],walkMeshes=[],cameraPan=[0,0],viewport={left:0,right:0,top:0,bottom:0};
  const timeline=createLandingTimeline();
  let cameraSettling=true,lastNotify=0,landingElapsed=0,lastProject=-Infinity;
  const ambientClock=createOceanClock();
  let dayNight=null,ocean=null,aerial=null,exploration=null,landscape=null,landscapeMotion=null,landscapeInstalling=false,landscapeFallback=null,coastVisibility=null,landmarkCamera=null,details=null,detailsFallback=null,worldWildlife=null,wildlifeFallback=null,skyCruise=null,skyFallback=null,flight=null,flightRocket=null,flightFallback=null,flightView=null,flightPlatform=null,rigMount=null,releaseCharacter=null,restoreRig=null,crew=null,crewFallback=null,crewedArrival=null,crewedArrivalFallback=null,crewApproach=false,characterYaw=-.54,needsFrame=true,oceanMode=OCEAN_MOTION_MODES.includes(options.oceanMotion)?options.oceanMotion:'auto';
  const keys = new Set();
  const notify = (fn, value) => { if (!life.disposed && typeof fn === 'function') { try { fn(value); } catch (e) { console.error('Planet host callback failed',e); } } };
  const getState = () => structuredClone({...state,disposed:life.disposed,cameraPan:[...cameraPan],position:character?character.getWorldPosition(new THREE.Vector3()).toArray():state.position,remainingWaypoints:path.length,landmarkView:landmarkCamera?.getState()||null,crewedArrival:{available:!!crewedArrival,reason:crewedArrivalFallback,...crewedArrival?.getState()},dayNight:dayNight?.getState()||null,coastVisibility:coastVisibility?.getState()||null,boarding:{available:!!crew,reason:crewFallback,approaching:crewApproach,reducedMotion:reducedMotion?.matches===true,...crew?.getState()},characterRig:{candidate:!!rigMount,boardingImplemented:false,safeToFly:false,...rigMount?.getState()},flight:{platform:details?'combined-v4':flightPlatform?'standalone-v4':'none',available:!!flight,reason:flightFallback,active:false,phase:'unavailable',boardingImplemented:false,...flight?.getState()},skyCruise:{actors:0,routes:0,reason:skyFallback,...skyCruise?.getState()},worldWildlife:{birds:0,marine:0,routes:0,quality:'static',status:worldWildlife?'active':'unavailable',reason:wildlifeFallback,...worldWildlife?.getState()},details:{status:details?'v4':'v3',reason:detailsFallback,report:details?.report||null},landscape:{status:landscape?'v3':landscapeFallback?'baseline-fallback':'baseline',reason:landscapeFallback,modelSha256:landscape?.manifest?.sha256||null,...landscapeMotion?.getState()},moving:keys.size>0||path.length>0,oceanMotion:{mode:oceanMode,quality:ocean?.quality||'static',actors:ocean?.actorCount||0,routes:ocean?.routeCount||0,yielding:ocean?.yieldingCount||0,parts:ocean?.partCount||0,seconds:ocean?.seconds||0},explorationMotion:{quality:exploration?.quality||'static',actors:exploration?.actorCount||0,parts:exploration?.partCount||0,seconds:exploration?.seconds||0},aerialMotion:{quality:aerial?.quality||'static',actors:aerial?.actorCount||0,parts:aerial?.partCount||0,seconds:aerial?.seconds||0}});
  const emit = () => notify(onState,getState());
  function stopFrame() { if(frameId) win.cancelAnimationFrame(frameId);if(idleTimer)win.clearTimeout(idleTimer);frameId=idleTimer=0;last=0;ambientClock.pause();rigMount?.pause(true);landscapeMotion?.pause();worldWildlife?.pause();skyCruise?.pause();ocean?.pause();aerial?.pause();exploration?.pause(); }
  life.own(stopFrame);
  const canRender=()=>!life.disposed&&renderer&&camera&&data&&!state.error&&!state.contextLost&&!landscapeInstalling&&!doc.hidden&&visible;
  function wake() {needsFrame=true;if(idleTimer){win.clearTimeout(idleTimer);idleTimer=0;}if(canRender()&&!frameId)frameId=win.requestAnimationFrame(frame);}
  function requestAmbientFrame(){idleTimer=0;if(canRender()&&!frameId)frameId=win.requestAnimationFrame(frame);}
  function ambientWait(renderCost=0){
    if(!canRender()||(!ocean?.active&&!aerial?.active&&!exploration?.active&&!landscapeMotion?.active&&!worldWildlife?.active&&!skyCruise?.active&&!dayNight?.active)||idleTimer||frameId)return;
    // No 60 Hz polling while idle. A single timer requests a single capped ambient frame.
    idleTimer=win.setTimeout(requestAmbientFrame,Math.max(0,Math.min(Math.max(ocean?.active?ocean.interval:0,aerial?.active?aerial.interval:0,exploration?.active?exploration.interval:0,landscapeMotion?.active?landscapeMotion.interval:0,worldWildlife?.active?worldWildlife.interval:0,skyCruise?.active?skyCruise.interval:0)||Infinity,dayNight?.active?dayNight.interval:Infinity)-renderCost));
  }
  function setDayNightPreview(hour=null){if(life.disposed||!dayNight?.setPreview(hour))return false;wake();emit();return true;}
  function setOceanMotion(mode){
    if(life.disposed||!OCEAN_MOTION_MODES.includes(mode))return false;
    oceanMode=mode;if(mode==='static'){abandonCrewedArrival('motion-static');flight?.cancel('motion-static');}landscapeMotion?.setMode(mode);worldWildlife?.setMode(mode);skyCruise?.setMode(mode);ocean?.setMode(mode);aerial?.setMode(mode);exploration?.setMode(mode);stopFrame();wake();emit();return true;
  }
  function renderOcean(now){
    const started=win.performance?.now?.()??now;
    if(dayNight?.update())emit();
    coastVisibility?.update(camera,dayNight?.getState());
    try{landscapeMotion?.update(now);worldWildlife?.update(now);skyCruise?.update(now,camera,character);ocean?.update(now);aerial?.update(now,camera,character);exploration?.update(now,camera,character);}catch(error){fail(error);return -1;}
    try{renderer.render(scene,camera);}catch(error){fail(error);return -1;}
    const cost=Math.max(0,(win.performance?.now?.()??now)-started);ocean?.recordFrameCost(cost);aerial?.recordFrameCost(cost);exploration?.recordFrameCost(cost);return cost;
  }
  function clearNav() { path=[];state.target=null;state.arrived=false; }
  function fail(error) { if(life.disposed)return; resolveInitialized(false);assets.abort();stopFrame();keys.clear();path=[];state.loading=false;state.ready=false;state.error=error.message || String(error);emit();notify(onError,{grade,message:state.error,code:'SCENE_UNAVAILABLE',recoverable:true}); }
  function reset() {
    if(crewApproach||crew?.getState().active||crew?.getState().occupancy==='aboard'||flight?.active||!physics || !data || life.disposed || state.contextLost || !state.ready)return false;
    clearNav();keys.clear();cameraPan=[0,0];const [x,,z]=toWorld(data.spawn), y=physics.floor(x,z);
    if(y===null) { fail(new Error('出生點缺少可走表面')); return false; }
    characterYaw=-.54;character.position.set(x,y,z);character.quaternion.setFromAxisAngle(new THREE.Vector3(0,1,0),characterYaw);character.visible=true;state.blocked=null;cameraSettling=true;emit();wake();return true;
  }
  // Transport owns the camera until the passenger is safely outside again.
  const cameraTransportLocked=()=>!!(flight?.active||crewedArrival?.active||crewApproach||crew?.getState().active||crew?.getState().occupancy==='aboard');
  function setMode(mode) { if(life.disposed || state.contextLost || !state.landed || cameraTransportLocked() || !['overview','follow'].includes(mode))return false;state.mode=mode;if(mode==='follow')cameraPan=[0,0];cameraSettling=true;emit();wake();return true; }
  const movementReady=()=>!flight?.active&&!crewApproach&&!crew?.getState().active&&crew?.getState().occupancy!=='aboard'&&state.ready&&state.landed&&(!manualLanding||(state.resourcesReady&&state.rocketReady))&&!state.contextLost&&!life.disposed;
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
    if(life.disposed||state.contextLost||cameraTransportLocked()||!Array.isArray(point)||point.length!==2||!point.every(Number.isFinite))return false;
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
    state.landingStarted=true;state.mode='follow';if(!crewedArrival)timeline.start();emit();wake();return true;
  }
  function abandonCrewedArrival(reason){if(!crewedArrival||crewedArrival.getState().complete)return false;crewedArrival.cancel(reason);crewedArrivalFallback=reason;crewedArrival.dispose();crewedArrival=null;character.visible=false;state.landingProgress=0;state.landingShot='orbit';if(state.landingStarted)timeline.start();return true;}
  function flightChanged(){if(life.disposed)return;if(flight&&!flight.active&&flightView){state.mode=flightView.mode;cameraPan=flightView.pan;camera.position.copy(flightView.camera);look.copy(flightView.look);flightView=null;cameraSettling=true;}emit();}
  function beginFlight(){if(options.flightCandidate!==true||!flight||(crew&&!crew.getState().safeToFly)||!movementReady()||oceanMode==='static')return false;const saved={mode:state.mode,pan:[...cameraPan],camera:camera.position.clone(),look:look.clone()};director?.hide();if(!flight.start())return false;flightView=saved;keys.clear();clearNav();cameraPan=[0,0];emit();wake();return true;}
  function returnFlight(){if(crewedArrival?.active)return false;const ok=flight?.requestReturn()||false;if(ok){emit();wake();}return ok;}
  function cancelFlight(){if(crewedArrival?.active)return false;const ok=flight?.cancel('user-cancel')||false;if(ok){emit();wake();}return ok;}
  function beginBoarding(){if(!crew||reducedMotion?.matches||!movementReady())return false;const p=crew.proof.groundApproach;if(!moveTo([p[0],p[2]]))return false;crewApproach=true;emit();wake();return true;}
  function disembark(){if(crewedArrival?.active||!crew||flight?.active)return false;const ok=crew.start('disembark');if(ok){emit();wake();}return ok;}
  function cancelBoarding(){if(crewedArrival?.active)return false;if(!crew)return false;flight?.cancel('boarding-rollback');const approach=crewApproach;crewApproach=false;keys.clear();clearNav();const ok=crew.cancel();emit();wake();return ok||approach;}
  function showArrivalRocket(visible){
    for(const rocket of arrivalRockets)rocket.visible=visible;
  }
  function cancelLanding(){
    if(life.disposed)return false;
    if(crewedArrival?.active)abandonCrewedArrival('orbit-cancel');else if(crewedArrival){crewedArrival.dispose();crewedArrival=null;}
    if(crew?.getState().occupancy==='aboard'||crew?.getState().active||crewApproach)return false;flight?.cancel('orbit-cancel');timeline.cancel();state.landed=false;state.landingStarted=false;if(character)character.visible=false;state.landingProgress=0;state.landingShot='orbit';state.mode='overview';director?.hide();showArrivalRocket(true);stop();cameraSettling=true;emit();wake();return true;
  }
  let crewWasControlled=false;
  function syncCharacterYaw(){if(!character||!THREE)return;const e=new THREE.Euler(0,0,0,'YXZ').setFromQuaternion(character.quaternion,'YXZ');characterYaw=e.y;}
  function faceYaw(targetYaw,dt){characterYaw=stepGroundYaw(characterYaw,targetYaw,dt);character.quaternion.setFromAxisAngle(new THREE.Vector3(0,1,0),characterYaw);}
  function move(dx,dz,{yaw=Math.atan2(dx,dz)-.54,dt=1/60}={}) {const result=physics.step(character.position,dx,dz);state.blocked=result.blocked;if(result.moved){faceYaw(yaw,dt);state.arrived=false;}return result.moved;}
  const reducedMotion=win.matchMedia?.('(prefers-reduced-motion: reduce)');
  function frame(now) {
    frameId=0;if(life.disposed || !renderer || !camera || !data || state.contextLost || doc.hidden || !visible)return;
    const activeFrame=crewedArrival?.active||crewApproach||crew?.getState().active||flight?.active||(!ocean?.active&&!aerial?.active&&!exploration?.active&&!landscapeMotion?.active&&!worldWildlife?.active&&!skyCruise?.active)||needsFrame||keys.size||path.length||cameraSettling||(!state.landed&&(!manualLanding||timeline.active));
    needsFrame=false;
    if(!activeFrame){const cost=renderOcean(now);if(cost>=0)ambientWait(cost);return;}
    const dt=last?Math.min((now-last)/1000,.05):1/60;last=now;
    if(rigMount?.getState().paused)rigMount.pause(false);
    const crewBusy=Boolean(crewedArrival?.active||crew?.getState().active);
    if(crewWasControlled&&!crewBusy)syncCharacterYaw();
    crewWasControlled=crewBusy;
    let walking=false;
    const dx=Number(keys.has('right'))-Number(keys.has('left')),dz=Number(keys.has('down'))-Number(keys.has('up'));
    if(movementReady()&&(dx||dz)){const n=Math.hypot(dx,dz);walking=move(dx/n*dt*GROUND_WALK_SPEED,dz/n*dt*GROUND_WALK_SPEED,{yaw:Math.atan2(dx,dz)-.54,dt});}
    else if((movementReady()||crewApproach)&&path.length){
      const prevX=character.position.x,prevZ=character.position.z;
      const lookTarget=samplePathLookahead(character.position,path);
      const travelRes=advanceGroundPath({position:character.position,path,distanceBudget:dt*GROUND_WALK_SPEED,stopRadius:crewApproach?.06:.16,step:(sx,sz)=>physics.step(character.position,sx,sz)});
      state.blocked=travelRes.blocked?travelRes.blockReason:null;
      walking=travelRes.moved;
      if(walking){
        state.arrived=false;
        const tx=(lookTarget?.x??character.position.x)-prevX,tz=(lookTarget?.z??character.position.z)-prevZ;
        if(Math.hypot(tx,tz)>1e-6)faceYaw(Math.atan2(tx,tz)-.54,dt);
        else if(Math.hypot(character.position.x-prevX,character.position.z-prevZ)>1e-6)faceYaw(Math.atan2(character.position.x-prevX,character.position.z-prevZ)-.54,dt);
      }
      if(travelRes.arrived){state.arrived=true;const station=data.stationsData.find(s=>s.id===state.target);emit();if(station)notify(onArrive,{grade,courseId:station.id,title:station.title});}
      else if(travelRes.blocked){emit();}
    }
    if(crewApproach&&!path.length){crewApproach=false;if(!state.blocked)crew?.start('board');emit();}
    if(crewedArrival?.active){crewedArrival.update(dt,{started:state.landingStarted,ready:state.ready&&state.resourcesReady&&state.rocketReady,paused:state.contextLost,reduced:reducedMotion?.matches===true});if(crewedArrival.getState().failure)abandonCrewedArrival(crewedArrival.getState().failure);}
    if(!crewedArrival?.active&&crew?.getState().active)crew.update(dt,{ready:state.resourcesReady,paused:state.contextLost,reduced:reducedMotion?.matches===true});
    if(!crewedArrival?.active)flight?.update(dt,{ready:state.resourcesReady&&state.rocketReady&&!state.contextLost});
    if(!crew?.getState().active&&crew?.getState().occupancy!=='aboard')yuyu.animate(now,walking,reducedMotion?.matches===true,{stride:GROUND_WALK_STRIDE});
    const actorPosition=character.getWorldPosition(new THREE.Vector3());
    const view=resolveOverviewView(grade,data.view || {}),follow=state.mode==='follow';
    const camProfile=landmarkCamera?.resolve({mode:state.mode,flightActive:Boolean(flight?.active),arrivalActive:Boolean(crewedArrival?.active||(manualLanding&&!state.landed)),boardingActive:Boolean(crew?.getState().active),pan:cameraPan,aspect:width/Math.max(1,height),actorPosition});
    const followOffset=camProfile?.offset||view.followOffset||[19,24,31];
    let targetLook=follow?actorPosition.clone().add(new THREE.Vector3(0,1,0)):new THREE.Vector3(...(view.overviewTarget || [0,2,-15]));
    let targetCam=follow?actorPosition.clone().add(new THREE.Vector3(...followOffset)):new THREE.Vector3(...(view.overviewPosition || [104,118,130]));
    targetCam.add(new THREE.Vector3(cameraPan[0],0,cameraPan[1]));
    const cameraFloor=physics?.floor(targetCam.x,targetCam.z);targetCam.y=Math.max(targetCam.y,(cameraFloor??0)+3);targetLook.add(new THREE.Vector3(cameraPan[0],0,cameraPan[1]));
    let landingFrame=null;
    if(crewedArrival&&!state.landed){const arrivalState=crewedArrival.getState();state.landingProgress=arrivalState.progress;state.landingShot=arrivalState.shot;character.visible=true;notify(onLandingState,arrivalState);if(arrivalState.complete){state.landed=true;state.mode='follow';emit();}}else if(manualLanding&&!state.landed){
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
    if(flight?.active){targetLook=flight.position.clone().add(new THREE.Vector3(0,1.8,0));targetCam=flight.position.clone().add(new THREE.Vector3(13,10,18));}
    const blend=reducedMotion?.matches?1:1-Math.exp(-dt*5);
    camera.position.lerp(targetCam,blend);look.lerp(targetLook,blend);camera.lookAt(look);
    if(landingFrame)director?.apply(landingFrame,camera,targetCam,targetLook);
    if(manualLanding)showArrivalRocket(!crewedArrival&&!landingFrame?.active);
    if(crew){crew.craft.root.visible=state.landed||Boolean(crewedArrival&&state.landingStarted);if((state.landed||crewedArrival)&&flightRocket)flightRocket.visible=false;if(crewedArrival)director?.hide();}
    camera.updateMatrixWorld(true);
    if(now-lastProject>=100){
      lastProject=now;
      let nearest=null,nearestDistance=Infinity;
      const projected=data.stationsData.map(station=>{
        const entry=new THREE.Vector3(...toWorld(station.entry));
        const distance=entry.distanceTo(actorPosition);
        if(distance<nearestDistance){nearestDistance=distance;nearest=station.id;}
        const p=new THREE.Vector3(...toWorld(station.p || station.entry)).add(new THREE.Vector3(0,station.labelHeight ?? 5.2,0)).project(camera);
        return {courseId:station.id,x:(p.x+1)/2,y:(1-p.y)/2,visible:p.z>-1&&p.z<1&&Math.abs(p.x)<1&&Math.abs(p.y)<1,nearby:distance<=4};
      });
      state.nearbyCourseId=nearestDistance<=4?nearest:null;
      notify(onProject,projected);
      const avatar=actorPosition.clone().add(new THREE.Vector3(0,1.6,0)).project(camera);
      const corners=[];
      for(const x of [actorPosition.x-.48,actorPosition.x+.48])for(const y of [actorPosition.y,actorPosition.y+2.25])for(const z of [actorPosition.z-.48,actorPosition.z+.48])corners.push(new THREE.Vector3(x,y,z).project(camera));
      const bodyFocus=actorPosition.clone().add(new THREE.Vector3(0,2.4,0)).project(camera);
      notify(onActorProject,{bodyFocus:{x:(bodyFocus.x+1)/2,y:(1-bodyFocus.y)/2},avatar:{x:(avatar.x+1)/2,y:(1-avatar.y)/2,visible:character.visible&&avatar.z>-1&&avatar.z<1},actorBounds:{left:Math.min(...corners.map(p=>(p.x+1)/2)),right:Math.max(...corners.map(p=>(p.x+1)/2)),top:Math.min(...corners.map(p=>(1-p.y)/2)),bottom:Math.max(...corners.map(p=>(1-p.y)/2))}});
      notify(onPosition,actorPosition.toArray());
    }
    cameraSettling=camera.position.distanceToSquared(targetCam)>.0001 || look.distanceToSquared(targetLook)>.0001;
    const renderCost=renderOcean(now);if(renderCost<0)return;
    if(now-lastNotify>200 && (walking||path.length||!state.landed||flight?.active)){lastNotify=now;emit();}
    if((crewedArrival?.active&&state.landingStarted)||crewApproach||crew?.getState().active||flight?.active||keys.size||path.length||cameraSettling||(!state.landed&&(!manualLanding||timeline.active)))wake();else {last=0;emit();ambientWait(renderCost);}
  }
  function listen(target,name,handler,opts) {target.addEventListener(name,handler,opts);life.own(()=>target.removeEventListener(name,handler,opts));}
  const reducedChange=()=>{if(reducedMotion.matches)abandonCrewedArrival('reduced-motion');flight?.setReduced(reducedMotion.matches);if(reducedMotion.matches&&crew){crewApproach=false;keys.clear();clearNav();crew.cancel('reduced-motion');}landscapeMotion?.setReduced(reducedMotion.matches);worldWildlife?.setReduced(reducedMotion.matches);skyCruise?.setReduced(reducedMotion.matches);ocean?.setReduced(reducedMotion.matches);aerial?.setReduced(reducedMotion.matches);exploration?.setReduced(reducedMotion.matches);stopFrame();wake();};
  if(reducedMotion?.addEventListener)listen(reducedMotion,'change',reducedChange);
  else if(reducedMotion?.addListener){reducedMotion.addListener(reducedChange);life.own(()=>reducedMotion.removeListener(reducedChange));}
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
    let parsedRoot=null, botanical=null;
    try {
      // Constructing the renderer happens before any model/JSON fetch. No graphics fallback bypass.
      const modules=await loadModules();
      if(life.disposed||assets.signal.aborted)return false;THREE=modules[0];const {GLTFLoader}=modules[1];
      const isLowPower=options.lowPower===true||win.navigator?.connection?.saveData===true;
      scene=new THREE.Scene();scene.background=new THREE.Color('#14263b');scene.fog=new THREE.Fog('#14263b',230,520);
      renderer=new THREE.WebGLRenderer({canvas,antialias:!isLowPower,powerPreference:isLowPower?'low-power':'high-performance'});life.own(()=>{renderer?.renderLists.dispose();renderer?.dispose();renderer=null;});
      renderer.setPixelRatio(Math.min(win.devicePixelRatio||1,isLowPower?1:2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.08;resolveInitialized(true);
      camera=new THREE.PerspectiveCamera(43,1,.1,600);camera.position.set(104,118,130);look=new THREE.Vector3(0,2,-15);
      dayNight=createDayNight(THREE,scene,renderer,{...(options.dayNight||{}),lowPower:isLowPower});life.own(()=>dayNight?.dispose());
      // Mobile-safe default: no shadows, original geometry and character unchanged.
      yuyu=createYuyu(THREE,{own:x=>x,color:(c,opts)=>new THREE.MeshStandardMaterial({color:c,...opts}),mesh:(parent,g,m,pos=[0,0,0])=>{const mesh=new THREE.Mesh(g,m);mesh.position.set(...pos);parent.add(mesh);return mesh;}});
      character=yuyu.root;character.scale.setScalar(1.15);character.visible=false;scene.add(character);const baselineCharacter=character,baselineYuyu=yuyu;let baselineDisposed=false;releaseCharacter=()=>{if(baselineDisposed)return;baselineDisposed=true;disposeTree(baselineCharacter);if(character===baselineCharacter)character=null;};life.own(()=>releaseCharacter?.());
      if(options.yuyuRigCandidate===true){rigMount=mountYuyuRig(THREE,{characterRoot:baselineCharacter});character=rigMount.characterRoot;yuyu={...baselineYuyu,root:character,animate:rigMount.animate};restoreRig=()=>{if(!rigMount)return;if(character){baselineCharacter.position.copy(character.position);baselineCharacter.quaternion.copy(character.quaternion);baselineCharacter.scale.copy(character.scale);}rigMount.dispose();rigMount=null;character=baselineCharacter;yuyu=baselineYuyu;};life.own(()=>restoreRig?.());}
      const base=new URL(assetBaseUrl.endsWith('/')?assetBaseUrl:assetBaseUrl+'/',doc.baseURI);
      const assetURL=name=>{const url=new URL(name,base);if(options.assetVersion)url.searchParams.set('v',options.assetVersion);return url;};
      if(options.sceneData)data=structuredClone(options.sceneData);else {const fetchJson=await win.fetch(assetURL(`grade${grade}-scene.json`),{signal:assets.signal});if(!fetchJson.ok)throw Error(`場景資料 HTTP ${fetchJson.status}`);data=await fetchJson.json();}
      if(life.disposed||assets.signal.aborted)return false;
      if(!Array.isArray(data.stationsData)||!Array.isArray(data.nodes)||!Array.isArray(data.edges)||!Array.isArray(data.spawn))throw Error('場景資料格式錯誤');
      character.position.set(...toWorld(data.spawn));
      // Craft anchor and safe disembarkation/restored avatar position are distinct.
      const craftPoint=data.landingZone?.rocket?.p ?? data.spawn;
      if(!Array.isArray(craftPoint)||craftPoint.length!==3||!craftPoint.every(Number.isFinite))throw Error('火箭降落位置格式錯誤');
      const craftLanding=toWorld(craftPoint);
      // The small authored rocket loads alongside terrain. Its approach can play
      // during GLB transfer; the timeline waits before descent until the world is safe.
      const propsLoading=manualLanding?(async()=>{
        const {createSpaceProps}=modules[2] || await import('../planet-space-props.mjs');
        if(life.disposed||assets.signal.aborted)return false;
        director=createLandingDirector(THREE,scene);
        props=createSpaceProps(scene,{visible:false,fetcher:win.fetch.bind(win),loader:new GLTFLoader(),signal:assets.signal,onState:value=>notify(onPropsState,value)});
        life.own(()=>props.dispose());life.own(()=>director.dispose());
        const loaded=await props.ready;if(life.disposed||assets.signal.aborted)return false;
        if(!loaded||!director.attach(loaded.root))throw Error('降落火箭載入失敗');
        // Source geometry stays owned by props, but only the cinematic clone renders.
        // Terrain already contains its parked rocket and rover.
        const parkedRocket=loaded.root.getObjectByName('Space_Exploration_Rocket_Runtime')||loaded.root.getObjectByName('Space Exploration Rocket Runtime');
        flightRocket=parkedRocket;
        loaded.root.traverse(o=>{if(!o.isMesh)return;let n=o,part=false;while(n){if(n===parkedRocket)part=true;n=n.parent;}o.visible=part;});
        loaded.root.visible=true;
        director.setLanding(craftLanding);state.rocketReady=true;emit();wake();return true;
      })():Promise.resolve(true);
      // Observe rejection immediately even while the independent terrain request waits.
      propsLoading.catch(error=>{if(!life.disposed)fail(error);});
      resize();wake();
      const response=await win.fetch(assetURL(`grade${grade}-terrain.glb`),{signal:assets.signal});if(!response.ok)throw Error(`地形模型 HTTP ${response.status}`);
      const buffer=await response.arrayBuffer();if(life.disposed||assets.signal.aborted)return false;
      const gltf=await new GLTFLoader().parseAsync(buffer,base.href);parsedRoot=gltf.scene;
      if(life.disposed||assets.signal.aborted){disposeTree(parsedRoot);parsedRoot=null;return false;}
      terrain=parsedRoot;parsedRoot=null;life.own(()=>{disposeTree(terrain);terrain=null;});scene.add(terrain);terrain.updateMatrixWorld(true);
      const pilotCache=new Map();
      const pilotFetch=async(url,init)=>{const key=String(url);if(pilotCache.has(key))return new Response(pilotCache.get(key).slice(0));const response=await win.fetch(url,init);if(!response.ok)return response;const bytes=await response.arrayBuffer();pilotCache.set(key,bytes);return new Response(bytes.slice(0));};
      const mountPilot=()=>loadBotanicalPilot({THREE,GLTFLoader,terrain,data,sourceBuffer:buffer,fetcher:pilotFetch,signal:assets.signal,disposed:()=>life.disposed,assetVersion:options.assetVersion});
      if(grade===3){
        botanical=await mountPilot();
        if(!botanical)return false;
        life.own(()=>botanical?.dispose());
      }
      const descriptor=options.landscapeV3===false?null:reviewedLandscapeDescriptor(grade);
      if(descriptor&&data.grade===grade&&typeof data.sha256==='string'){
        try{
          landscape=await loadVerifiedLandscape({THREE,GLTFLoader,terrain,data,sourceBuffer:buffer,fetcher:win.fetch.bind(win),signal:assets.signal,disposed:()=>life.disposed,descriptor,reviewFauna:reviewReleasedFauna,install:modules[3]?.installLandscapeV3||installLandscapeV3,transition:{deactivate(){landscapeInstalling=true;stopFrame();botanical?.dispose();botanical=null;},async restore(){if(!life.disposed&&!assets.signal.aborted&&grade===3)botanical=await mountPilot();}}});
          if(life.disposed||assets.signal.aborted){landscape?.dispose();landscape=null;return false;}
          if(landscape){life.own(()=>{landscape?.dispose();landscape=null;});landscapeMotion=createLandscapeMotionHost(landscape,{clock:ambientClock,getPlayerPosition:()=>character?.visible?character.getWorldPosition(new THREE.Vector3()):null,mode:oceanMode,reduced:reducedMotion?.matches===true,lowPower:options.lowPower===true||win.navigator?.connection?.saveData===true});life.own(()=>{landscapeMotion?.dispose();landscapeMotion=null;});}
        }catch(error){if(life.disposed||assets.signal.aborted)return false;if(error instanceof AggregateError)throw error;if(landscape){landscapeMotion?.dispose();landscapeMotion=null;landscape.dispose();landscape=null;if(grade===3)botanical=await mountPilot();}landscapeFallback=error.message||String(error);}
        finally{landscapeInstalling=false;wake();}
      }
      if(landscape&&options.landscapeDetailsV4===true){try{details=await loadLandscapeDetails({THREE,GLTFLoader,terrain,data,sourceBuffer:buffer,landscape,fetcher:win.fetch.bind(win),signal:assets.signal,disposed:()=>life.disposed});if(details)life.own(()=>{details?.dispose();details=null;});}catch(error){if(life.disposed||assets.signal.aborted)return false;detailsFallback=error.message||String(error);}}
      if(options.flightCandidate===true&&landscape&&!details){try{flightPlatform=await loadFlightPlatform({THREE,GLTFLoader,terrain,data,landscape,fetcher:win.fetch.bind(win),signal:assets.signal,disposed:()=>life.disposed});if(flightPlatform)life.own(()=>{flightPlatform?.dispose();flightPlatform=null;});}catch(error){if(life.disposed||assets.signal.aborted)return false;flightFallback=error.message||String(error);}}
      if(landscape&&options.worldWildlife!==false){try{worldWildlife=createWorldWildlife(THREE,{scene,terrain,landscape,details:details||flightPlatform,clock:ambientClock,mode:oceanMode,reduced:reducedMotion?.matches===true,lowPower:options.lowPower===true,reserveFlight:()=>crewApproach||Boolean(crew?.getState().active)||Boolean(flight?.active)||(manualLanding&&!state.landed)});life.own(()=>{worldWildlife?.dispose();worldWildlife=null;});}catch(error){wildlifeFallback=error.message||String(error);}}
      const activePhysicsData=flightPlatform?.physicsData||details?.physicsData||landscape?.physicsData||botanical?.physicsData||data;
      const hiddenActors=new Set(landscape?.manifest?.hideOriginalActorIds||[]);
      ocean=createOceanMotion(THREE,terrain,{grade,obstacles:activePhysicsData.obstacles,sampleGround:(actor,x,z)=>data.ambientLife?.actors?.some(a=>a.id===actor.id)?physics?.floor(x,z):null,getPlayerPosition:()=>character?.visible?character.getWorldPosition(new THREE.Vector3()):null,actors:[...(data.oceanScenery?.actors||[]),...(data.ambientLife?.actors||[])].filter(a=>!hiddenActors.has(a.id)),mode:oceanMode,lowPower:options.lowPower===true||win.navigator?.connection?.saveData===true,reduced:reducedMotion?.matches===true,clock:ambientClock});
      life.own(()=>{ocean?.dispose();ocean=null;});
      aerial=createAerialMotion(THREE,terrain,{grade,actors:data.aerialLife?.actors||[],mode:oceanMode,lowPower:options.lowPower===true||win.navigator?.connection?.saveData===true,reduced:reducedMotion?.matches===true,clock:ambientClock});
      life.own(()=>{aerial?.dispose();aerial=null;});
      exploration=createExplorationMotion(THREE,terrain,{grade,actors:data.explorationLife?.version===1?data.explorationLife.actors:[],mode:oceanMode,lowPower:options.lowPower===true||win.navigator?.connection?.saveData===true,reduced:reducedMotion?.matches===true,clock:ambientClock});
      life.own(()=>{exploration?.dispose();exploration=null;});
      const rocketName=data.landingZone?.rocket?.root || 'ArrivalRocket';
      terrain.traverse(o=>{if(o.name===rocketName || o.name.startsWith(rocketName+'__'))arrivalRockets.push(o);});
      if(manualLanding)showArrivalRocket(!timeline.active);
      const meshes=[];walkMeshes=meshes;terrain.traverse(o=>{if(isWalkSurface(o)){meshes.push(o);for(const m of Array.isArray(o.material)?o.material:[o.material])m.side=THREE.DoubleSide;}});
      if(!meshes.length)throw Error('模型未提供可走表面');
      if(botanical)meshes.push(...botanical.walkMeshes);
      if(landscape)meshes.push(...landscape.walkMeshes);
      if(details)meshes.push(...details.walkMeshes);
      if(flightPlatform)meshes.push(...flightPlatform.walkMeshes);
      const shipKeepout=(details||flightPlatform)?.conditionalShipKeepout;
      const parkedPhysicsData=shipKeepout?{...activePhysicsData,obstacles:[...activePhysicsData.obstacles,{...shipKeepout}]}:activePhysicsData;
      physics=createWalking(THREE,()=>crew&&state.landed?crew.physicsData:manualLanding&&state.landed&&state.rocketReady&&(!flight?.active||flight.position.y<=craftLanding[1]+.4)?parkedPhysicsData:activePhysicsData,()=>meshes);
      landmarkCamera=createLandmarkViewCamera({stationsData:data.stationsData,defaultFollowOffset:data.view?.followOffset||[19,24,31],floorAt:(x,z)=>physics.floor(x,z)});
      ocean.refreshGround();
      dayNight.bindTerrain(terrain,data,{floor:(x,z)=>physics.floor(x,z),shadowRoots:[landscape?.root,details?.root,flightPlatform?.root,character].filter(Boolean)});life.own(()=>dayNight?.dispose());
      coastVisibility=createCoastVisibility(THREE,{scene,terrain,data,landscapeRoot:landscape?.root});coastVisibility.update(camera,dayNight.getState());life.own(()=>{coastVisibility?.dispose();coastVisibility=null;});
      state.loading=false;state.ready=true;
      if(!reset())throw Error(state.error || '出生點載入失敗');
      let validRestore=false;
      if(restored && Array.isArray(restored.position) && restored.position.length===3 && restored.position.every(Number.isFinite)){
        const [x,,z]=restored.position,y=physics.floor(x,z);if(y!==null&&physics.valid(x,z,y).ok){character.position.set(x,y,z);characterYaw=-.54;character.quaternion.setFromAxisAngle(new THREE.Vector3(0,1,0),characterYaw);validRestore=true;}
      }
      state.positionReady=true;
      if(!await propsLoading||life.disposed||assets.signal.aborted)return false;
      director?.setLanding(craftLanding);
      if(options.flightCandidate===true&&!options.crewedCandidate&&flightRocket&&landscape&&(details||flightPlatform)){try{flight=createShipFlight(THREE,{scene,rocket:flightRocket,data,worldRoots:[terrain,landscape.root,...(details?[details.root]:flightPlatform?[flightPlatform.root]:[])],fauna:landscape.manifest.fauna,birdRecords:worldWildlife?.records.filter(a=>a.kind==='bird')||[],reduced:reducedMotion?.matches===true,onChange:flightChanged});life.own(()=>{flight?.dispose();flight=null;});}catch(error){flightFallback=error.message||String(error);}}
      const initialCrew=manualLanding&&options.crewedArrivalCandidate===true&&!(validRestore&&restored?.landed===true)&&!reducedMotion?.matches;
      if(options.crewedCandidate===true&&rigMount&&landscape&&(details||flightPlatform)){try{crew=createCrewedWorldHost(THREE,{scene,rig:rigMount.rig,data,worldRoots:[terrain,landscape.root,(details||flightPlatform).root],walkMeshes:meshes,physicsData:activePhysicsData,actors:[...landscape.manifest.fauna,...(worldWildlife?.records||[])],validatedAssets:false,initialOccupancy:initialCrew?'aboard':'outside'});life.own(()=>{crew?.dispose();crew=null;});dayNight?.bindShadows(crew.craft.root);flight=(modules[4]?.createShipFlight||createShipFlight)(THREE,{scene,rocket:crew.craft.root,data,worldRoots:[terrain,landscape.root,(details||flightPlatform).root],fauna:landscape.manifest.fauna,birdRecords:worldWildlife.records.filter(a=>a.kind==='bird'),reduced:reducedMotion?.matches===true,onChange:flightChanged,craftBaseLocal:[0,0,0]});life.own(()=>{flight?.dispose();flight=null;});if(initialCrew){character.visible=true;crewedArrival=createCrewedArrival(THREE,{crew,flight,rig:rigMount.rig,candidate:true});timeline.cancel();life.own(()=>{crewedArrival?.dispose();crewedArrival=null;});}crew.craft.root.visible=false;}catch(error){flight?.dispose();flight=null;crew?.dispose();crew=null;crewFallback=error.message||String(error);director?.hide();try{flight=createShipFlight(THREE,{scene,rocket:flightRocket,data,worldRoots:[terrain,landscape.root,(details||flightPlatform).root],fauna:landscape.manifest.fauna,birdRecords:worldWildlife.records.filter(a=>a.kind==='bird'),reduced:reducedMotion?.matches===true,onChange:flightChanged});life.own(()=>{flight?.dispose();flight=null;});}catch(fallbackError){flightFallback=fallbackError.message||String(fallbackError);}}}
      if(options.skyCruiseCandidate===true&&landscape&&worldWildlife&&flight){try{skyCruise=createSkyCruise(THREE,{scene,worldRoots:[terrain,landscape.root,...((details||flightPlatform)?[(details||flightPlatform).root]:[])],actors:[...landscape.manifest.fauna,...worldWildlife.records],flightProof:flight.proof,clock:ambientClock,grade,mode:oceanMode,reduced:reducedMotion?.matches===true,lowPower:options.lowPower===true,candidate:true,protectedPoints:data.stationsData.map(s=>toWorld(s.entry))});life.own(()=>{skyCruise?.dispose();skyCruise=null;});}catch(error){skyFallback=error.message||String(error);}}
      state.landed=validRestore&&restored?.landed===true || (!manualLanding&&reducedMotion?.matches===true);
      character.visible=Boolean(crewedArrival)||!manualLanding||state.landed;
      state.landingStarted=state.landed||!manualLanding||state.landingStarted;
      state.landingProgress=state.landed?1:0;
      if(!state.landed){camera.position.copy(character.position).add(new THREE.Vector3(74,114,101));look.copy(character.position);}
      resize();emit();wake();return true;
    }catch(e){skyCruise?.dispose();skyCruise=null;crewedArrival?.dispose();crewedArrival=null;flight?.dispose();flight=null;crew?.dispose();crew=null;restoreRig?.();releaseCharacter?.();flight?.dispose();flight=null;flightPlatform?.dispose();flightPlatform=null;worldWildlife?.dispose();worldWildlife=null;coastVisibility?.dispose();details?.dispose();details=null;coastVisibility=null;landscapeMotion?.dispose();landscape?.dispose();landscape=null;botanical?.dispose();if(parsedRoot)disposeTree(parsedRoot);if(!life.disposed){fail(e);if(terrain){disposeTree(terrain);terrain=null;}if(character){disposeTree(character);character=null;}director?.dispose();props?.dispose();renderer?.dispose();renderer=null;}return false;}
  })();
  if(options.resourcesReady?.then)Promise.resolve(options.resourcesReady).then(()=>setResourcesReady(true),e=>fail(e));
  emit();
  return {ready,initialized,beginBoarding,disembark,cancelBoarding,beginFlight,returnFlight,cancelFlight,setDayNightPreview,setOceanMotion,cancelLanding,beginLanding,setResourcesReady,moveTo,stop,setCameraPan,panBy,pan:panBy,setCameraViewport,navigate,setMode,reset,setMovement,getState,skipLanding(){if(life.disposed || !state.ready || manualLanding)return false;state.landed=true;state.landingProgress=1;state.mode='follow';cameraSettling=true;emit();wake();return true;},dispose(){if(life.disposed)return;life.dispose();keys.clear();path=[];state.ready=false;state.loading=false;data=null;physics=null;}};
}
