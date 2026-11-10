import { createV11PlanetScene } from '../v11/planet-v11.mjs?v=20261110-v11-release1';
import { runtimeState } from './state.mjs';

/** Compatibility seam: old UI uses x/z pairs and surface/orbit, runtime uses xyz. */
export async function createPlanetSceneAsync(container, options, {signal,createScene=createV11PlanetScene} = {}) {
  if (signal?.aborted) throw new DOMException('Aborted','AbortError');
  const region = options.v11Region;
  if (!region?.worldVersion) throw Error('V11 region is required');
  let disposed = false, unavailable = false, runtime = null, resourcesReady = options.resourcesReady === true;
  let wanted = options.initial?.mode === 'surface' ? 'surface' : 'orbit', lastPhase = null;
  let lastBlocked = null;
  let state = {ready:false,landed:false}, points = [], actor = {avatar:null,bodyFocus:null,actorBounds:null};
  const emit = (name,...args) => {if (!disposed) options[name]?.(...args);};
  const project = () => {
    const byId = new Map(points.map(p => [p.courseId,p]));
    emit('onProject',{landmarks:region.landmarks.map(item => {const p=byId.get(item.id);return p?[p.x,p.y]:null;}),
      visible:region.landmarks.map(item => byId.get(item.id)?.visible === true),...actor});
  };
  const phase = () => {
    const next = unavailable ? 'error' : wanted === 'orbit' ? 'orbit' : state.ready && state.landed && resourcesReady ? 'surface' : 'landing';
    if (next !== lastPhase) {lastPhase=next;emit('onPhase',next);}
  };
  const fail = value => {
    if (disposed || unavailable) return;
    unavailable=true;emit('onLoadState',{status:'error',message:value?.message||'3D 顯示無法使用。'});
    phase();emit('onUnavailable',value);
  };
  const dispose = () => {
    if (disposed) return;
    disposed=true;signal?.removeEventListener('abort',dispose);runtime?.dispose();
  };
  const api = makeAPI();
  signal?.addEventListener('abort',dispose,{once:true});
  try {
    runtime = createScene(container.querySelector?.('.math-planet-canvas') || container, {
      grade:region.grade, assetBaseUrl:region.assetBaseUrl, sceneData:region.metadata,
      manualLanding:true, resourcesReady, initialState:runtimeState(options.initial,region),
      onState:value => {
        if (disposed) return;
        state=value;
        if (value.ready) {
          emit('onLoadState',{status:'ready'});
          if (value.positionReady!==false && Array.isArray(value.position) && value.position.length===3) {
            const finished=value.remainingWaypoints===0&&!value.moving;
            emit('onPosition',[value.position[0],value.position[2]],finished,value.arrived?value.target:null);
            if(finished&&value.blocked&&value.blocked!==lastBlocked)blocked();
            lastBlocked=value.blocked||null;
          }
        }
        phase();
      },
      onError:fail,
      onProject:value => {points=value;project();},
      onActorProject:value => {
        const p=value.avatar, b=value.bodyFocus;
        actor={avatar:Array.isArray(p)?p:p?[p.x,p.y]:null,
          bodyFocus:Array.isArray(b)?b:b?[b.x,b.y]:null,actorBounds:value.actorBounds||null};
        project();
      },
      onGround:point => {if (api.canExplore) emit('onGround',point);},
      onLandingState:value => emit('onLandingState',value),
      onPropsState:value => emit('onPropsState',value),
    });
    if (disposed) runtime.dispose();
    const initialized = await (runtime.initialized || runtime.ready);
    if (disposed || signal?.aborted) throw new DOMException('Aborted','AbortError');
    if (!initialized || unavailable) throw Error('V11 renderer unavailable');
    // Runtime owns late asset failure. No unhandled completion after unmount.
    Promise.resolve(runtime.ready).then(ok => {
      if(disposed)return;
      if(!ok)fail({message:'星球素材尚未備妥。'});
      // A versioned but invalid floor position safely falls back to spawn and lands again.
      else if(wanted==='surface'&&!state.landed)runtime.beginLanding();
    }).catch(fail);
    return api;
  } catch (error) {dispose();throw error;}

  // Methods are created before callbacks can be triggered by the async runtime.
  function canExplore() {return !disposed&&!unavailable&&resourcesReady&&wanted==='surface'&&state.ready&&state.landed&&!state.contextLost;}
  function blocked(message='這裡沒有安全的步行路線，請改選鄰近地面或課程。') {emit('onNavigationBlocked',message);return false;}
  function moveTo(point,id=null) {
    if (!canExplore()) return blocked('降落和課程準備完成後才能探索。');
    const accepted = runtime.moveTo(point,id?{courseId:id}:{});
    return accepted || blocked();
  }
  // Callbacks and the returned interface share one lifecycle gate.
  function makeAPI() {
    return {get canExplore(){return canExplore();},moveTo,
      select(){return !disposed;},
      setResourcesReady(value){resourcesReady=value===true;runtime?.setResourcesReady(resourcesReady);phase();},
      setMode(mode){if(disposed)return false;if(mode==='surface'){wanted='surface';phase();return runtime.beginLanding();}wanted='orbit';runtime.cancelLanding();runtime.stop();phase();return true;},
      setView(view){return runtime.setMode(view==='overview'?'overview':'follow');},
      pan(x,z){return runtime.panBy(x,z);},setCameraViewport(value){return runtime.setCameraViewport(value);},
      stop(){return runtime.stop();},retry(){return false;},dispose,
    };
  }
}
