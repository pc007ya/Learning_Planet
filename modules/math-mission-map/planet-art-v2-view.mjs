import { createUnitEntryController } from './planet-unit-entry.mjs';
import { ensureGrade } from '../math-grade-resources.mjs';
import { arrangeArtLabels, artActorReserve, measureArtLabel } from './planet-art-v2-labels.mjs?v=20261108-label-visibility-v1';
// Real course callbacks, artwork and difficulty remain owned by the host.
// Region injection avoids loading grade-one graph/old world bounds for grades two/three.
const MAP_BOUNDS={x:120,z:120};
const clampPosition=point=>point;
const restoreExploration=(value,ids)=>({mode:value?.mode==='surface'?'surface':'orbit',position:value?.position||[0,0],selectedId:ids.includes(value?.selectedId)?value.selectedId:ids[0]||null,view:value?.view==='overview'?'overview':'near'});

export function createPlanetArtReview(React, {region=null,onRetryRegion=null,prepareGrade=()=>ensureGrade(region?.grade||1),sceneLoader=()=>import('./v11-host/adapter.mjs?v=20261110-v11-release1')}={}) {
  if(!region)throw new Error('A grade-local region is required');
  const landmarks=region.landmarks, gradeLabel=region?['','一年級','二年級','三年級'][region.grade]:'一年級';
  if(typeof document !== 'undefined') {
    const existing=document.querySelector('link[data-planet-art-v2]'),link=existing||document.createElement('link');
    const href=new URL('./planet-art-v2.css?v=20261108-expanded-layout-v1',import.meta.url).href;
    link.rel='stylesheet';if(link.href!==href)link.href=href;link.dataset.planetArtV2='20261108-expanded-layout-v1';if(!existing)document.head.append(link);
  }
  const h=React.createElement;
  // Preserve the host's difficulty-star presentation. Daily rounds are not mastery.
  function difficultyStars(real){
    const valid=Array.isArray(real?.stars)&&real.stars.length===3&&real.stars.every(star=>
      star&&(star.opacity===1||star.opacity===.28)&&(star.gray===0||star.gray===1));
    const count=valid?real.stars.filter(star=>star.gray===0).length:0;
    const label=valid?'難度 '+count+'/3 星':'難度尚未設定';
    return h('span',{className:'math-planet-near-difficulty',role:'img','aria-label':label,
      title:label+'；熟練度尚未評估','data-star-kind':'difficulty'},
      valid&&h('span',{className:'math-planet-stars','aria-hidden':true},real.stars.map((star,i)=>h('span',{
        key:i,'data-difficulty-active':star.gray===0,style:{opacity:star.opacity,filter:'grayscale('+star.gray+')'}},'★'))),
      h('small',null,label));
  }
  // Approved original illustration for orbit; the actual 3D rocket performs the landing.
  const artwork=[{id:'rocket',src:'images/space-vehicles/learning-planet-rocket-v1.png',x:12,z:-4,width:8.5}];
  return function PlanetArtReview({ units: sourceUnits, initialExploration, onExplorationChange, onSelect, onClassic, onKnowledge }) {
    const units = sourceUnits.filter(unit => (region?.courseIds||['u104','u1','u2','u108','u110']).includes(unit.id));
    if(region.restoreExploration)initialExploration=region.restoreExploration(initialExploration);
    if(region&&initialExploration?.grade!=null&&initialExploration.grade!==region.grade)initialExploration=undefined;
    const local = initialExploration?.position;
    const position = region ? (Array.isArray(local)&&local.length===2&&local.every(Number.isFinite)?local:region.spawn) : Array.isArray(local) && local[0] >= -25 && local[0] <= 17 && local[1] >= -3 && local[1] <= 30 ? local : [0,8];
    const resumeSurface=React.useRef(initialExploration?.resumeSurface===true&&initialExploration?.mode==='surface').current;
    initialExploration = {...initialExploration, mode:resumeSurface?'surface':'orbit', position};
    const available=landmarks.filter(item=>units.some(unit=>unit.id===item.id));
    const ids=available.map(item=>item.id);
    const [state,setState]=React.useState(()=>({...restoreExploration(initialExploration,ids),...(region?{position,grade:region.grade,...(region.worldVersion?{worldVersion:region.worldVersion}:{})}:{}),resumeSurface}));
    const live=React.useRef(state),stage=React.useRef(null),scene=React.useRef(null),actions=React.useRef(null);
    const [phase,setPhase]=React.useState(state.mode),[renderer,setRenderer]=React.useState('loading');
    const [projection,setProjection]=React.useState(null),[walking,setWalking]=React.useState(false);
    const [load,setLoad]=React.useState({status:'loading',message:'正在準備'+gradeLabel+'地形…'}),[propsLoad,setPropsLoad]=React.useState({status:'loading'});
    const [flight,setFlight]=React.useState({shot:'orbit',cut:0}),[boot,setBoot]=React.useState(0);
    const flightShot=React.useRef('orbit'),resourceRetry=React.useRef(null);
    const [courseLoad,setCourseLoad]=React.useState('loading');
    const [filter,setFilter]=React.useState('all');
    const [expanded,setExpanded]=React.useState(false);
    const [catalogPage,setCatalogPage]=React.useState(0);
    const [announcement,setAnnouncement]=React.useState('降落到'+gradeLabel+'學區，探索彼此相關的數學單元。');
    const [controlBounds,setControlBounds]=React.useState(null);
    const lastUI=React.useRef(0);
    const labelNodes=React.useRef(new Map()),[labelMetrics,setLabelMetrics]=React.useState({});
    const unit=units.find(item=>item.id===state.selectedId),landmark=available.find(item=>item.id===state.selectedId);
    const landed=renderer==='webgl'&&courseLoad==='ready'&&load.status==='ready'&&propsLoad.status==='ready'&&state.mode==='surface'&&phase==='surface';
    const entryContext=React.useRef(null),entryRef=React.useRef(null),walkingNow=React.useRef(walking);
    const markWalking=value=>{walkingNow.current=value;setWalking(value);};
    entryContext.current={units,landmarks:available,exploration:live.current,landed,coursesReady:courseLoad==='ready',walking:walkingNow.current,canExplore:scene.current?.canExplore===true};
    const makeEntry=()=>createUnitEntryController({
      getContext:()=>({...entryContext.current,exploration:live.current,walking:walkingNow.current,canExplore:scene.current?.canExplore===true}),
      onSelect:id=>{save({selectedId:id});onSelect?.(id);scene.current?.select?.(id);},
      onNavigate:(point,id)=>actions.current?.navigate(point,id),onBeforeStart:value=>save(value),
      onError:()=>setAnnouncement('這一課尚未開啟，請再試一次。'),
    });
    if(!entryRef.current)entryRef.current=makeEntry();
    React.useEffect(()=>{
      if(!entryRef.current)entryRef.current=makeEntry();
      const hide=()=>{if(document.hidden)entryRef.current?.cancel();};
      if(typeof document!=='undefined')document.addEventListener('visibilitychange',hide);
      return()=>{if(typeof document!=='undefined')document.removeEventListener('visibilitychange',hide);entryRef.current?.dispose();entryRef.current=null;};
    },[]);
    const related=region.related(state.selectedId,ids);
    const relatedIds=new Set(related.map(item=>item.id));
    function save(patch,paint=true){
      live.current={...live.current,...patch};
      onExplorationChange?.({...live.current,position:[...live.current.position]});
      if(paint)setState(live.current);
    }
    function arrive(position,finished,id){
      const now=performance.now(),paint=finished||now-lastUI.current>120;
      save({position:[...position]},paint);if(paint)lastUI.current=now;
      if(!finished&&scene.current?.canExplore===true)markWalking(true);
      if(finished){markWalking(false);if(live.current.mode==='surface'&&scene.current?.canExplore===true)setAnnouncement(id?'已抵達「'+(units.find(item=>item.id===id)?.title||'單元')+'」，可以開始學習。':'已移動。點單元標籤探索，或查看星圖關聯。');}
    }
    function go(point,id=null){
      entryRef.current?.cancel();
      if(!landed||scene.current?.canExplore!==true)return;
      if(id){save({selectedId:id});onSelect?.(id);scene.current?.select(id);}
      if(scene.current&&renderer==='webgl'){markWalking(true);if(scene.current.moveTo(point,id)===false)markWalking(false);}
      else arrive(clampPosition(point),true,id);
    }
    actions.current={arrive,navigate:(point,id)=>go(point,id),ground:point=>go(point),unavailable:()=>{
      entryRef.current?.cancel();      scene.current?.dispose();scene.current=null;setProjection(null);setRenderer('error');setPhase('error');markWalking(false);
      setAnnouncement('3D 顯示中斷。請重試，或切回傳統課程入口。');
    }};
    React.useEffect(()=>{
      let active=true,gradeReady=false,gradeAttempt=0;const sceneAbort=new AbortController();
      const loadGrade=()=>{const attempt=++gradeAttempt;setCourseLoad('loading');scene.current?.setResourcesReady(false);return Promise.resolve().then(prepareGrade).then(()=>{if(active&&attempt===gradeAttempt){gradeReady=true;setCourseLoad('ready');scene.current?.setResourcesReady(true);}}).catch(()=>{if(active&&attempt===gradeAttempt){gradeReady=false;setCourseLoad('error');scene.current?.setResourcesReady(false);}});};
      resourceRetry.current=loadGrade;loadGrade();setRenderer('loading');setLoad({status:'loading',message:'正在準備'+gradeLabel+'地形…'});setPropsLoad({status:'loading'});setPhase(resumeSurface?'landing':'orbit');save({mode:resumeSurface?'surface':'orbit',resumeSurface});
      sceneLoader(boot).then(async({createPlanetSceneAsync})=>{
        if(!active)return;
        try{
          const candidate=await createPlanetSceneAsync(stage.current,{
            ...(region?{region:true,regionGrade:region.grade,landmarks,courseIds:region.courseIds,terrainURL:region.terrainURL,terrainMetadata:region.metadata,metadataURL:region.metadataURL}:{}),
            v11Region:region,initial:{...live.current,mode:resumeSurface?'surface':'orbit',resumeSurface},units,artwork,cinematic:true,resourcesReady:gradeReady,
            onLoadState:value=>{if(active)setLoad(value);},
            onPropsState:value=>{if(active)setPropsLoad(value);},
            onLandingState:value=>{if(!active)return;stage.current?.style.setProperty('--landing-cut',String(value.cut));if(flightShot.current!==value.shot){flightShot.current=value.shot;setFlight(value);}},
            onProject:value=>{if(active)setProjection(value);},
            onPosition:(...args)=>{if(active)actions.current.arrive(...args);},
            onPhase:value=>{if(active){if(value!=='surface')entryRef.current?.cancel();setPhase(value);if(value==='surface'){save({resumeSurface:true});setAnnouncement('已降落'+gradeLabel+'學區。點單元前往，拖曳探索地表。');}}},
            onNavigationBlocked:message=>{if(active){entryRef.current?.cancel();markWalking(false);setAnnouncement(message);}},
            onGround:point=>actions.current.ground(point),onUnavailable:()=>{if(active)actions.current.unavailable();},
          },{signal:sceneAbort.signal});
          if(!active){candidate.dispose();return;}
          scene.current=candidate;candidate.setResourcesReady(gradeReady);setRenderer('webgl');
        }catch{if(active)actions.current.unavailable();}
      }).catch(()=>{if(active)actions.current.unavailable();});
      return()=>{active=false;sceneAbort.abort();gradeAttempt++;resourceRetry.current=null;scene.current?.dispose();scene.current=null;};
    },[boot]);
    // Measure the real host chrome instead of assuming a desktop header height.
    // The expanded panel keeps its own scrolling for enlarged text and the catalog.
    React.useEffect(()=>{
      const target=stage.current;
      if(!target||typeof window==='undefined')return;
      const chart=target.closest('.math-mission-chart');
      const host=target.closest('.subject-world-content');
      const panel=target.closest('.math-planet-art-review');
      const pad=landed?target.querySelector('.math-planet-camera-controls'):null;
      if(!pad)setControlBounds(previous=>previous===null?previous:null);
      let frame=0,viewportSize='';
      const measure=()=>{
        frame=0;
        const viewport=window.visualViewport;
        const viewportTop=viewport?.offsetTop||0,viewportHeight=viewport?.height||window.innerHeight;
        const bottom=viewportTop+viewportHeight;
        const boundary=(expanded?panel:host)?.getBoundingClientRect().bottom||bottom;
        const extra=chart?Array.from(chart.children).filter(child=>child!==target&&getComputedStyle(child).position!=='absolute').reduce((total,child)=>total+child.getBoundingClientRect().height,0):0;
        // A scrolled stage has a negative client top. Feeding that back as extra
        // height caused ResizeObserver growth (1053px in a 768px viewport).
        // Measure its unscrolled position instead; the fixed panel, not the
        // underlying subject host, owns the expanded viewport.
        let scrollOffset=0;
        if(expanded)for(let node=target.parentElement;node;node=node.parentElement){scrollOffset+=node.scrollTop||0;if(node===panel)break;}
        const top=Math.max(viewportTop,target.getBoundingClientRect().top+scrollOffset);
        const height=Math.max(expanded?120:220,Math.floor(Math.min(bottom,boundary)-top-extra-12));
        target.style.setProperty('--planet-available-height',height+'px');
        const outer=target.getBoundingClientRect(),computed=getComputedStyle(target);
        const safe=side=>parseFloat(computed.getPropertyValue?.('--planet-safe-'+side))||0;
        const badge=target.querySelector('.math-planet-badge')?.getBoundingClientRect();
        const toolbar=pad?.getBoundingClientRect();
        scene.current?.setCameraViewport?.({compact:!!window.matchMedia?.('(any-pointer: coarse), (max-width: 1024px)').matches,
          left:safe('left'),right:safe('right'),top:Math.max(safe('top'),badge?badge.bottom-outer.top+8:0),
          bottom:Math.max(safe('bottom'),toolbar?outer.bottom-toolbar.top+8:0)});
        // Post-commit measurement also schedules a render when the scene is idle.
        if(pad){
          const outer=target.getBoundingClientRect(),rect=pad.getBoundingClientRect();
          const next={left:rect.left-outer.left,right:rect.right-outer.left,top:rect.top-outer.top,bottom:rect.bottom-outer.top,width:target.clientWidth,height:target.clientHeight};
          setControlBounds(previous=>previous&&Object.keys(next).every(key=>previous[key]===next[key])?previous:next);
        }
      };
      const schedule=()=>{if(!frame)frame=requestAnimationFrame(measure);};
      const resized=()=>{
        const viewport=window.visualViewport,next=(viewport?.width||window.innerWidth)+'x'+(viewport?.height||window.innerHeight);
        // Rotation must not retain a scroll position calculated for the old
        // aspect ratio. Ordinary content scrolling never resets itself.
        if(expanded&&panel&&next!==viewportSize)panel.scrollTop=0;
        viewportSize=next;schedule();
      };
      const observer=typeof ResizeObserver==='undefined'?null:new ResizeObserver(schedule);
      if(chart)observer?.observe(chart);
      if(host)observer?.observe(host);
      if(panel)observer?.observe(panel);
      observer?.observe(target);
      if(pad)observer?.observe(pad);
      window.addEventListener('resize',resized);
      window.visualViewport?.addEventListener('resize',resized);
      resized();
      return()=>{observer?.disconnect();cancelAnimationFrame(frame);window.removeEventListener('resize',resized);window.visualViewport?.removeEventListener('resize',resized);};
    },[expanded,phase,landed]);
    function land(){
      if(live.current.mode==='surface'||renderer!=='webgl')return;setPhase('landing');
      save({mode:'surface'});setAnnouncement('正在降落到'+gradeLabel+'學區…');
      if(renderer==='webgl')scene.current?.setMode('surface');else setPhase('surface');
    }
    function orbit(){entryRef.current?.cancel();flightShot.current='orbit';setFlight({shot:'orbit',cut:0});scene.current?.stop();save({mode:'orbit',resumeSurface:false});scene.current?.setMode('orbit');setPhase('orbit');markWalking(false);}
    function choose(item){go([item.x,item.z],item.id);}
    function setView(view){save({view});scene.current?.setView?.(view);}
    function beforeCourse(callback){if(!courseReady||scene.current?.canExplore!==true)return;save({resumeSurface:true});callback?.();}
    function keys(event){
      if(event.target!==event.currentTarget||!landed)return;
      const vector={ArrowUp:[0,-1.4],ArrowDown:[0,1.4],ArrowLeft:[-1.4,0],ArrowRight:[1.4,0]}[event.key];
      if(vector){event.preventDefault();go(live.current.position.map((v,i)=>v+vector[i]));}
    }
    const fallbackPoint=p=>[.5+p[0]/(MAP_BOUNDS.x*2.2),.5+p[1]/(MAP_BOUNDS.z*2.2)];
    const atLandmark=landmark&&Math.hypot(state.position[0]-landmark.x,state.position[1]-landmark.z)<1.8-1e-9;
    const courseReady=landed&&!walking&&!!unit&&atLandmark;
    const pos=renderer==='webgl'&&projection?projection.avatar:fallbackPoint(state.position);
    const landingText={loading:'正在載入火箭，準備接近'+gradeLabel+'…',approach:'火箭正慢慢接近'+gradeLabel+'板塊…','push-in':'放大'+gradeLabel+'學區…',waiting:'學區仍在載入，火箭正在等待降落…',cut:'切換降落視角…',descent:'火箭正在緩緩降落…',settle:'著陸完成，準備出發…'}[flight.shot]||'準備降落'+gradeLabel+'';
    const failed=courseLoad==='error'||renderer==='error'||load.status==='error'||propsLoad.status==='error';
    function retry(){
      entryRef.current?.cancel();
      // Rebuild both the manifest-derived view and model after a terrain failure.
      // Retrying only the scene would retain the stale region.metadata closure.
      if(region&&onRetryRegion&&(load.status==='error'||propsLoad.status==='error'||renderer==='error')){scene.current?.dispose();scene.current=null;onRetryRegion();return;}
      if(renderer==='error'){setBoot(v=>v+1);return;}
      if(courseLoad!=='ready')resourceRetry.current?.();scene.current?.retry();
    }
    const groups=[...new Map(available.map(item=>[item.group,item.groupLabel])).entries()];
    const filtered=available.filter(item=>filter==='all'||item.group===filter), pageCount=Math.max(1,Math.ceil(filtered.length/8)), page=Math.min(catalogPage,pageCount-1);
    const catalogItems=region?filtered.slice(page*8,page*8+8):filtered;
    function art(real){return real?.art?h('img',{src:real.art,alt:'',draggable:false,loading:'lazy'}):h('span',{'aria-hidden':true},real?.icon||'✦');}
    const pinWidth=stage.current?.clientWidth||900,pinHeight=stage.current?.clientHeight||480;
    const compact=pinWidth<600;
    const labelItems=region?available.filter(item=>filter==='all'||item.group===filter).sort((a,b)=>Number(b.id===state.selectedId)-Number(a.id===state.selectedId)||Math.hypot(a.x-state.position[0],a.z-state.position[1])-Math.hypot(b.x-state.position[0],b.z-state.position[1])).filter(item=>projection?.visible?.[landmarks.indexOf(item)]!==false).slice(0,compact?3:6):available;
    const controlReserve=landed?[controlBounds||{left:0,right:pinWidth,top:Math.max(0,pinHeight-160),bottom:pinHeight}]:[];
    const actorReserve=landed?artActorReserve(projection,pinWidth,pinHeight):null;
    const labelReserve=[...controlReserve,...(actorReserve?[actorReserve]:[])];
    const labelMetricKey=(id,nearby)=>id+':'+Number(nearby)+':'+compact+':'+state.view;
    const pins=arrangeArtLabels(labelItems.flatMap(item=>{
      const i=landmarks.indexOf(item),p=renderer==='webgl'&&projection?projection.landmarks[i]:fallbackPoint([item.x,item.z]);
      if(!p||projection?.visible?.[i]===false)return [];
      const nearby=Math.hypot(state.position[0]-item.x,state.position[1]-item.z)<1.8-1e-9,measured=labelMetrics[labelMetricKey(item.id,nearby)];
      return [{id:item.id,x:p[0]*pinWidth,y:p[1]*pinHeight,width:compact?104:134,height:64,...measured,nearby,selected:item.id===state.selectedId}];
    }),pinWidth,pinHeight,labelReserve);
    const labelMeasureKey=labelItems.map(item=>labelMetricKey(item.id,Math.hypot(state.position[0]-item.x,state.position[1]-item.z)<1.8-1e-9)).join('|');
    React.useEffect(()=>{
      const measure=()=>{
        const values=[...labelNodes.current].map(([key,node])=>[key,measureArtLabel(node)]).filter(([,value])=>value);
        setLabelMetrics(previous=>{let next=previous;for(const [key,value] of values)if(!previous[key]||Object.keys(value).some(k=>previous[key][k]!==value[k])){if(next===previous)next={...previous};next[key]=value;}return next;});
      };
      const observer=typeof ResizeObserver==='undefined'?null:new ResizeObserver(measure);
      for(const node of labelNodes.current.values()){observer?.observe(node);const star=node.querySelector?.('.math-planet-near-difficulty');if(star)observer?.observe(star);}
      measure();return()=>observer?.disconnect();
    },[labelMeasureKey]);
    return h('section',{className:'math-mission-map math-planet-map math-planet-art-review','aria-label':''+gradeLabel+'可登陸數學星球','data-expanded':expanded,'data-layout-revision':'20261108-expanded-layout-v1','data-grade':region?.grade||1,'data-world-version':region.worldVersion||'art-v2',onKeyDown:event=>{if(event.key==='Escape')setExpanded(false);}},
      h('div',{className:'math-mission-heading'},h('div',null,h('p',null,(region.worldVersion?'數學星球 · ':'ART REVIEW · ')+gradeLabel),h('h2',null,region?gradeLabel+'完整數學板塊':'分合加減聚落 · 美術樣板')),h('div',{className:'math-planet-heading-actions'},onKnowledge&&h('button',{type:'button',className:'math-planet-knowledge','aria-label':'開啟'+gradeLabel+'數學知識星圖',onClick:onKnowledge},h('img',{src:'modules/math-knowledge/entry.svg',alt:''}),['','小一','小二','小三'][region?.grade||1]+'知識星圖'),h('button',{type:'button','aria-pressed':expanded,onClick:()=>setExpanded(!expanded)},expanded?'縮回面板':'展開地表'),h('button',{type:'button',onClick:onClassic},'傳統課程入口'))),
      h('div',{className:'math-planet-summary'},h('span',null,(region?units.length+' 個原有單元':'五個主題入口')+(region.worldVersion?' · v11 探索地表':' · 美術複查')),h('span',null,'星星＝難度 · 灰框＝熟練度尚未評估')),
      h('div',{className:'math-mission-layout math-planet-layout'},
        h('div',{className:'math-mission-chart'},
          h('div',{ref:stage,className:'math-planet-stage',tabIndex:0,role:'group','aria-label':''+gradeLabel+'學區地表，點單元或地面移動瑜瑜','data-renderer':renderer,'data-compact-labels':compact,'data-course-load':courseLoad,'data-phase':phase,'data-mode':state.mode,'data-view':state.view,onKeyDown:keys},
            h('div',{className:'math-mission-sky','aria-hidden':true}),h('div',{className:'math-planet-canvas','aria-hidden':true}),
            renderer!=='webgl'&&h('div',{className:'math-planet-fallback','aria-hidden':true}),
            h('span',{className:'math-planet-badge'},phase==='landing'?landingText:state.mode==='orbit'?'數學星球 · '+gradeLabel+'著陸區':walking?'瑜瑜前往單元中':''+gradeLabel+'學區 · 點擊前往／拖曳探索'),
            state.mode==='orbit'&&h('div',{className:'math-planet-landing'},h('img',{className:'math-planet-landing-art',src:artwork[0].src,alt:'學習星球原創探索火箭'}),h('p',null,'降落到遼闊地表，發現相連的學習任務'),h('button',{type:'button',className:'math-mission-primary',onClick:land,disabled:renderer!=='webgl'},renderer!=='webgl'?'準備星球中…':'↓ 降落'+gradeLabel+'星球')),
            h('div',{className:'math-planet-cinematic-cut','aria-hidden':true}),
            (phase==='landing'||failed||renderer==='loading')&&h('div',{className:'math-planet-flight-status',role:'status','aria-live':'polite'},
              h('span',null,failed?'素材尚未備妥，請重試或返回傳統課程。':renderer==='loading'?'正在準備 3D 星球…':landingText),
              (courseLoad!=='ready'||load.status!=='ready'||propsLoad.status!=='ready')&&h('small',null,'地形：'+(load.status==='ready'?'已就緒':load.status==='error'?'載入失敗':'載入中')+' · 火箭與載具：'+(propsLoad.status==='ready'?'已就緒':propsLoad.status==='error'?'載入失敗':'載入中')+' · '+gradeLabel+'課程：'+(courseLoad==='ready'?'已就緒':courseLoad==='error'?'載入失敗':'載入中')),
              h('div',null,h('button',{type:'button',onClick:retry},'重新載入'),h('button',{type:'button',onClick:orbit,disabled:renderer!=='webgl'},'取消降落'),h('button',{type:'button',onClick:onClassic},'傳統課程入口'))),
            landed&&h('svg',{className:'math-planet-art-leaders',width:pinWidth,height:pinHeight,'aria-hidden':true},[...pins.values()].map(pin=>{
              const line=pin.leader;
              return line&&Math.hypot(line.from[0]-line.to[0],line.from[1]-line.to[1])>3&&h('path',{key:pin.id,d:`M ${line.from[0]} ${line.from[1]} L ${line.to[0]} ${line.to[1]}`,fill:'none',stroke:'#e4e7ee',strokeWidth:1.4,opacity:.8});
            })),
            landed&&h('div',{className:'math-planet-labels','data-label-revision':'20261108-label-visibility-v1','data-actor-bounds':projection?.actorBounds?JSON.stringify(projection.actorBounds):null,'data-actor-reserve':actorReserve?JSON.stringify(actorReserve):null},labelItems.map(item=>{
              const i=landmarks.indexOf(item),p=renderer==='webgl'&&projection?projection.landmarks[i]:fallbackPoint([item.x,item.z]);
              if(!p||p[0]<-.08||p[0]>1.08||p[1]<-.05||p[1]>1.1||(renderer==='webgl'&&projection?.visible?.[i]===false))return null;
              const real=units.find(u=>u.id===item.id);
              const nearby=Math.hypot(state.position[0]-item.x,state.position[1]-item.z)<1.8-1e-9;
              const stageWidth=stage.current?.clientWidth||900;
              const labelWidth=state.view==='overview'?(stageWidth<400?54:88):(stageWidth<400?110:134);
              const margin=(labelWidth/2+7)/stageWidth;
              const settled=pins.get(item.id);
              if(labelReserve.length&&!settled)return null; // Never fall back underneath the HUD.
              const pinX=settled?settled.x/pinWidth:Math.max(margin,Math.min(1-margin,p[0]));
              const pinY=settled?settled.y/pinHeight:p[1];
              return h('button',{key:item.id,ref:node=>{const key=labelMetricKey(item.id,nearby);if(node)labelNodes.current.set(key,node);else labelNodes.current.delete(key);},type:'button',className:'math-planet-landmark','aria-label':'前往'+real.displayCode+' '+real.title+'，熟練度尚未評估'+(nearby?'；雙點擊進入課程':''),'aria-pressed':state.selectedId===item.id,'data-related':relatedIds.has(item.id),'data-unit':item.id,'data-nearby':nearby,'data-mastery':'unrecorded',title:nearby?'熟練度尚未評估；雙點擊進入課程':'熟練度尚未評估',onClick:event=>entryRef.current?.click(item.id,event),onDoubleClick:event=>entryRef.current?.doubleClick(item.id,event),onPointerDown:event=>entryRef.current?.pointerDown(item.id,event),onPointerMove:event=>entryRef.current?.pointerMove(item.id,event),onPointerUp:event=>entryRef.current?.pointerUp(item.id,event),onPointerCancel:()=>entryRef.current?.pointerCancel(),onLostPointerCapture:event=>entryRef.current?.lostPointerCapture(item.id,event),style:{touchAction:'manipulation',left:pinX*100+'%',top:pinY*100+'%','--landmark-color':item.color}},
                art(real),h('span',{className:'math-planet-unit-label'},h('small',null,real.displayCode),h('b',null,real.title)),nearby&&difficultyStars(real));
            })),
            landed&&h('div',{className:'math-planet-camera-controls','data-planet-control-overlay':true,onPointerDownCapture:event=>event.stopPropagation(),onClick:event=>event.stopPropagation(),role:'group','aria-label':'探索視角'},
            h('button',{type:'button',disabled:!landed,'aria-pressed':state.view==='near',onClick:()=>setView('near')},'瑜瑜附近'),
            h('button',{type:'button',disabled:!landed,'aria-pressed':state.view==='overview',onClick:()=>setView('overview')},'聚落全景'),
            ...[['←',-8,0,'向左看'],['↑',0,-8,'向前看'],['↓',0,8,'向後看'],['→',8,0,'向右看']].map(([label,x,z,name])=>h('button',{key:name,type:'button',disabled:!landed||renderer!=='webgl','aria-label':name,onClick:()=>scene.current?.pan?.(x,z)},label)),
            state.mode==='surface'&&h('button',{type:'button',onClick:orbit},'↑ 回到軌道')),
            landed&&pos&&h('div',{className:'math-planet-yuyu',style:{left:pos[0]*100+'%',top:pos[1]*100+'%'},'aria-hidden':true},renderer!=='webgl'&&h('img',{src:'images/story/little-star-v1/yuyu-paper.png',alt:''}),h('span',null,'瑜瑜'))),
          h('div',{className:'math-planet-a11y-status'},h('span',{role:'status','aria-live':'polite'},announcement))),
        h('aside',{className:'math-mission-detail math-planet-detail','aria-label':'單元與星圖關聯'},
          h('div',{className:'math-mission-cover',style:{'--mission-tint':unit?.tint||'#dcd6ff'}},art(unit),h('span',{className:'math-mission-code'},unit?.displayCode)),
          h('div',{className:'math-mission-info'},h('p',null,landmark?.groupLabel||''+gradeLabel+'學區'),h('h3',null,unit?.title||'課程準備中'),h('p',null,state.mode==='orbit'?'降落後，選一個原有子單元出發。':walking?'到達後就能開始學習。':unit?.sub),
            landmark?.extension&&h('p',{className:'math-planet-extension'},'自選延伸 · 不作為核心通關條件'),
            unit?.showProgress&&h('div',{className:'math-mission-status'},h('span',null,unit.stateLabel),h('span',null,unit.round+'/3 輪')),
            unit?.showProgress&&h('div',{className:'math-mission-progress',role:'progressbar','aria-label':'今日完成輪數','aria-valuemin':0,'aria-valuemax':3,'aria-valuenow':unit.round},h('span',{style:{width:unit.pct+'%'}}))),
          h('div',{className:'math-mission-actions'},
            unit?.showStart&&h('button',{type:'button',className:'math-mission-primary',disabled:!courseReady||unit?.atLimit,onClick:()=>entryRef.current?.start(unit.id)},unit?.atLimit?'今日已完成上限':walking?'正在走向單元…':!atLandmark&&landed?'先走到這個單元':'進入原有課程'),
            ...(unit?.teachingLinks||[]).map(({lesson,max,label})=>h('button',{key:lesson,type:'button',disabled:!courseReady,'data-math-teaching-open':courseReady?lesson:undefined,'data-math-teaching-max':max,onClick:()=>beforeCourse()},label)),
            unit?.hasVideo&&h('button',{type:'button',disabled:!courseReady,onClick:()=>beforeCourse(unit.watchVideo)},'看教學影片'),
            unit?.hasLesson&&h('button',{type:'button',disabled:!courseReady,onClick:()=>beforeCourse(unit.lesson)},'老師示範')),
          h('p',{className:'math-planet-return-note'},'離開課程後回到原位。星圖連線是學習建議，不會鎖住課程。已有成績不等於持續熟練度，目前尚未設定跨日評量規則。'),
          h('div',{className:'math-planet-related'},h('h3',null,'星圖關聯單元'),related.length?related.map(link=>{
            const other=units.find(u=>u.id===link.id),point=available.find(p=>p.id===link.id);
            return h('button',{type:'button',key:link.id,disabled:!landed,onClick:()=>choose(point)},art(other),h('span',null,h('b',null,other.title),h('small',null,link.reasons[0])));
          }):h('p',null,'此單元目前沒有設定關聯路徑。')))),
      h('div',{className:'math-planet-catalog'},
        h('div',{className:'math-planet-catalog-heading'},h('h3',null,region?'板塊內的原有課程':'樣板內的原有課程'),h('span',null,'原有單元圖與名稱')),
        h('div',{className:'math-planet-filters',role:'group','aria-label':'篩選單元主題'},[['all','全部'],...groups].map(([id,label])=>h('button',{key:id,type:'button','aria-pressed':filter===id,onClick:()=>{setFilter(id);setCatalogPage(0);if(region&&id!=='all'){const first=available.find(item=>item.group===id);if(first&&landed)choose(first);}}},label))),
        region&&pageCount>1&&h('div',{className:'math-planet-catalog-pages',role:'group','aria-label':'課程分頁'},h('button',{type:'button',disabled:page===0,onClick:()=>setCatalogPage(page-1)},'上一頁'),h('span',null,(page+1)+' / '+pageCount),h('button',{type:'button',disabled:page===pageCount-1,onClick:()=>setCatalogPage(page+1)},'下一頁')),
        h('div',{className:'math-planet-course-grid'},catalogItems.map(item=>{
          const real=units.find(u=>u.id===item.id);
          return h('button',{key:item.id,type:'button',disabled:!landed,'aria-pressed':state.selectedId===item.id,onClick:()=>choose(item)},art(real),h('span',null,h('small',null,real.displayCode+(item.extension?' · 延伸':'')),h('b',null,real.title)),real.round>0&&h('em',null,real.round+'/3'));
        }))),
      h('button',{type:'button',className:'math-planet-all-courses',onClick:onClassic},'切回傳統列表 · 保留完整課程'));
  };
}
