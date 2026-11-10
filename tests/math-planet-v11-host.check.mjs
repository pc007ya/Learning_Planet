import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {buildV11Region,loadV11Region,v11RegionURLs} from '../modules/math-mission-map/v11-host/region.mjs';
import {V11_WORLD_VERSION,restoreV11Exploration,runtimeState} from '../modules/math-mission-map/v11-host/state.mjs';
import {createPlanetSceneAsync} from '../modules/math-mission-map/v11-host/adapter.mjs';
import {usesV11Planet} from '../modules/math-mission-map/view.mjs';
import {createPlanetArtReview} from '../modules/math-mission-map/planet-art-v2-view.mjs';
import {arrangeArtLabels,artActorReserve} from '../modules/math-mission-map/planet-art-v2-labels.mjs';
const read=path=>fs.readFileSync(new URL('../'+path,import.meta.url),'utf8');
const metadata=grade=>JSON.parse(read(`modules/math-mission-map/v11/assets/grade${grade}-scene.json`));
const regions=[];
for(const grade of [1,2,3])regions[grade]=buildV11Region(grade,await import(`../modules/math-knowledge/grade${grade}.mjs`),metadata(grade));

test('default exploration routes grades 1–3 only, independent of preview query',()=>{
 assert.deepEqual([1,2,3,4,5,6].map(usesV11Planet),[true,true,true,false,false,false]);
 const host=read('modules/math-mission-map/view.mjs');assert.match(host,/v11-host\/view/);assert.doesNotMatch(host,/planetReview.*===/);
 assert.match(host,/usesV11Planet\(props.grade\) \? GradeOneMap : MissionMapView/);
});
for(const grade of [1,2,3])test(`grade ${grade}: graph order, exact v11 doorway and source metadata agree`,()=>{
 const region=regions[grade],data=metadata(grade);assert.equal(region.landmarks.length,[0,27,28,23][grade]);
 for(const landmark of region.landmarks){const entry=data.stationsData.find(s=>s.id===landmark.id).entry;assert.deepEqual([landmark.x,landmark.y,landmark.z],[entry[0],entry[2],-entry[1]]);}
 assert.deepEqual(region.spawn,[data.spawn[0],-data.spawn[1]]);assert.ok(region.landmarks.some(l=>Math.abs(l.x)>44||Math.abs(l.z)>43),'not clamped to old island');
 assert.ok(region.related(region.courseIds[0]).every(item=>region.courseIds.includes(item.id)));
});
test('invalid region coverage, stale version and broken graph reject before mounting',async()=>{
 const graph=await import('../modules/math-knowledge/grade1.mjs');
 for(const mutate of [d=>d.grade=2,d=>d.layoutVersion='old',d=>d.stationsData.pop(),d=>d.stationsData.push(d.stationsData[0]),d=>d.stationsData[0].entry=[NaN,0,0],d=>d.stationsData[0].navNode=-999]){const d=metadata(1);mutate(d);assert.throws(()=>buildV11Region(1,graph,d));}
});
test('loader requests only selected-grade JSON and honors abort after completion',async()=>{
 const requests=[],abort=new AbortController();
 const result=await loadV11Region(2,{signal:abort.signal,fetcher:async(url,opt)=>{requests.push([url,opt]);return {ok:true,text:async()=>JSON.stringify(metadata(2))};}});
 assert.equal(result.grade,2);assert.equal(requests.length,1);assert.match(requests[0][0],/grade2-scene.json$/);assert.equal(requests[0][1].signal,abort.signal);
 await assert.rejects(loadV11Region(3,{signal:AbortSignal.abort(),fetcher(){throw Error('must not fetch');}}),{name:'AbortError'});
 const later=new AbortController();await assert.rejects(loadV11Region(1,{signal:later.signal,fetcher:async()=>({ok:true,text:async()=>{later.abort();return JSON.stringify(metadata(1));}})}),{name:'AbortError'});
 assert.throws(()=>v11RegionURLs(4));
});
test('failed and oversize metadata do not poison retry',async()=>{
 await assert.rejects(loadV11Region(1,{fetcher:async()=>({ok:false})}),/unavailable/);
 await assert.rejects(loadV11Region(1,{fetcher:async()=>({ok:true,headers:{get:()=>3000000}})}),/too large/);
 assert.equal((await loadV11Region(1,{fetcher:async()=>({ok:true,text:async()=>JSON.stringify(metadata(1))})})).grade,1);
});
test('restore is versioned and never reuses old-world or other-grade coordinates',()=>{
 const r=regions[1],old={grade:1,mode:'surface',resumeSurface:true,position:[5,20],selectedId:r.courseIds[1]};
 assert.deepEqual(restoreV11Exploration(old,r).position,r.spawn);assert.equal(restoreV11Exploration(old,r).resumeSurface,false);
 const current={...old,worldVersion:V11_WORLD_VERSION,position:[-73.9245,-38.231],view:'overview'};
 assert.deepEqual(restoreV11Exploration(current,r),current);assert.deepEqual(runtimeState(current,r).position,[current.position[0],0,current.position[1]]);
 assert.equal(runtimeState(current,r).landed,true);assert.deepEqual(restoreV11Exploration({...current,grade:2},r).position,r.spawn);
 assert.deepEqual(restoreV11Exploration({...current,position:[Infinity,1]},r).position,r.spawn);
 assert.equal(restoreV11Exploration({...current,resumeSurface:false},r).mode,'orbit');
});
function fakeRuntime({initialized=Promise.resolve(true)}={}){
 let opts,disposed=0,resources=false;const calls=[];
 const api={initialized,ready:Promise.resolve(true),dispose(){disposed++;},moveTo(p,c){calls.push(['move',p,c]);return p[0]!==999;},setResourcesReady(v){resources=v;calls.push(['resources',v]);},beginLanding(){calls.push(['begin']);return true;},cancelLanding(){calls.push(['cancel']);return true;},stop(){calls.push(['stop']);},setMode(v){calls.push(['mode',v]);},panBy(x,z){calls.push(['pan',x,z]);},setCameraViewport(v){calls.push(['viewport',v]);}};
 return {createScene(container,options){opts=options;return api;},api,calls,get options(){return opts;},get disposed(){return disposed;},get resources(){return resources;}};
}
const surface=(extra={})=>({grade:1,ready:true,landed:true,position:[-10,2,45],remainingWaypoints:0,...extra});
test('adapter translates modes/points/projections and holds exploration until resource+landing gates',async()=>{
 const f=fakeRuntime(),positions=[],phases=[],projections=[],blocked=[],ground=[];
 const adapter=await createPlanetSceneAsync({}, {v11Region:regions[1],resourcesReady:false,initial:{},onPosition:(...a)=>positions.push(a),onPhase:p=>phases.push(p),onProject:p=>projections.push(p),onGround:p=>ground.push(p),onNavigationBlocked:p=>blocked.push(p)}, {createScene:f.createScene});
 assert.equal(f.options.sceneData,regions[1].metadata);assert.equal(f.options.manualLanding,true);assert.equal(f.options.initialState.worldVersion,V11_WORLD_VERSION);
 assert.equal(adapter.canExplore,false);adapter.setMode('surface');f.options.onState(surface());assert.equal(adapter.canExplore,false);
 adapter.setResourcesReady(true);assert.equal(adapter.canExplore,true);assert.equal(phases.at(-1),'surface');assert.deepEqual(positions.at(-1)[0],[-10,45]);
 assert.equal(adapter.moveTo([1,2],'u101'),true);assert.deepEqual(f.calls.at(-1),['move',[1,2],{courseId:'u101'}]);
 assert.equal(adapter.moveTo([999,2]),false);assert.equal(blocked.length,1);
 f.options.onProject([{courseId:regions[1].courseIds[0],x:.2,y:.3,visible:true}]);f.options.onActorProject({avatar:{x:.4,y:.5},bodyFocus:{x:.4,y:.4},actorBounds:{left:.3,right:.5,top:.2,bottom:.7}});
 assert.deepEqual(projections.at(-1).landmarks[0],[.2,.3]);assert.deepEqual(projections.at(-1).avatar,[.4,.5]);assert.equal(projections.at(-1).actorBounds.left,.3);
 f.options.onGround([3,4]);assert.deepEqual(ground,[[3,4]]);adapter.setMode('orbit');assert.equal(adapter.canExplore,false);f.options.onGround([4,5]);assert.equal(ground.length,1);
 assert.deepEqual(f.calls.slice(-2),[['cancel'],['stop']]);adapter.setView('near');assert.deepEqual(f.calls.at(-1),['mode','follow']);adapter.dispose();adapter.dispose();assert.equal(f.disposed,1);
 const count=positions.length;f.options.onState(surface());assert.equal(positions.length,count);
});
test('adapter abort during renderer initialization disposes late candidate once; no stale callback',async()=>{
 let release;const f=fakeRuntime({initialized:new Promise(resolve=>release=resolve)}),abort=new AbortController(),events=[];
 const pending=createPlanetSceneAsync({}, {v11Region:regions[1],onPhase:p=>events.push(p)}, {signal:abort.signal,createScene:f.createScene});
 abort.abort();release(true);await assert.rejects(pending,{name:'AbortError'});assert.equal(f.disposed,1);f.options.onState(surface());assert.deepEqual(events,[]);
});
test('adapter initialization failure stays unavailable and fresh retry mounts independently',async()=>{
 const f=fakeRuntime({initialized:Promise.resolve(false)});await assert.rejects(createPlanetSceneAsync({}, {v11Region:regions[1]}, {createScene:f.createScene}),/unavailable/);assert.equal(f.disposed,1);
 const fresh=fakeRuntime(),events=[];const api=await createPlanetSceneAsync({}, {v11Region:regions[2],onUnavailable:()=>events.push('error')}, {createScene:fresh.createScene});
 fresh.options.onError({message:'context lost'});fresh.options.onError({message:'duplicate'});assert.deepEqual(events,['error']);assert.equal(api.canExplore,false);api.dispose();
});
test('latest UI keeps original callback/art/difficulty/toolbar controls, without old geometry imports',()=>{
 const source=read('modules/math-mission-map/planet-art-v2-view.mjs');
 for(const expected of ['data-star-kind','difficulty','onDoubleClick','onPointerUp','onKnowledge','setExpanded','setCameraViewport','measureArtLabel','resumeSurface','unit.watchVideo','unit.lesson'])assert.ok(source.includes(expected),expected);
 assert.doesNotMatch(source,/import .*planet-model/);assert.ok(fs.existsSync(new URL('../images/space-vehicles/learning-planet-rocket-v1.png',import.meta.url)));
 const React={createElement:(type,props,...children)=>({type,props:props||{},children:children.flat()}),useState:v=>[typeof v==='function'?v():v,()=>{}],useRef:v=>({current:v}),useEffect(){}};
 const View=createPlanetArtReview(React,{region:regions[1],prepareGrade:async()=>{}});
 const tree=View({units:regions[1].courseIds.map(id=>({id,title:id,displayCode:id,showStart:true,start(){},teachingLinks:[]})),onClassic(){},onKnowledge(){}});
 assert.equal(tree.props['data-world-version'],V11_WORLD_VERSION);assert.equal(tree.props['data-grade'],1);
 const all=n=>n&&typeof n==='object'?[n,...n.children.flatMap(all)]:[];
 assert.ok(all(tree).some(n=>n.props['aria-label']==='開啟一年級數學知識星圖'));
 assert.ok(all(tree).filter(n=>n.type==='button'&&n.props.className==='math-mission-primary').every(n=>n.props.disabled));
});
test('label layout at tablet sizes avoids actor and toolbar without changing course coordinates',()=>{
 for(const [width,height] of [[1024,600],[1024,768],[1280,720],[460,320]]){
  const actor=artActorReserve({actorBounds:{left:.4,right:.6,top:.35,bottom:.8}},width,height),toolbar={left:0,right:width,top:height-80,bottom:height};
  const input=regions[1].landmarks.slice(0,6).map((l,i)=>({id:l.id,x:width*.5+i,y:height*.6+i,width:104,height:64,nearby:i===0}));
  const before=structuredClone(input),placed=arrangeArtLabels(input,width,height,[actor,toolbar]);assert.deepEqual(input,before);
  for(const p of placed.values())for(const r of [actor,toolbar])assert.ok(p.box.right+9<=r.left||p.box.left-9>=r.right||p.box.bottom+9<=r.top||p.box.top-9>=r.bottom);
  const values=[...placed.values()];for(let i=0;i<values.length;i++)for(let j=i+1;j<values.length;j++){const a=values[i].box,b=values[j].box;assert.ok(a.left>=b.right||a.right<=b.left||a.top>=b.bottom||a.bottom<=b.top);}
 }
});


test('adapter never reports blocked routes as arrivals or held keyboard input as stopped',async()=>{
 const f=fakeRuntime(),positions=[],blocked=[];
 const api=await createPlanetSceneAsync({}, {v11Region:regions[1],resourcesReady:true,initial:{},onPosition:(...args)=>positions.push(args),onNavigationBlocked:message=>blocked.push(message)}, {createScene:f.createScene});
 api.setMode('surface');
 f.options.onState(surface({positionReady:false}));assert.equal(positions.length,0);
 f.options.onState(surface({moving:true}));assert.equal(positions.at(-1)[1],false);
 f.options.onState(surface({moving:false,target:'u101',blocked:'obstacle',arrived:false}));assert.equal(positions.at(-1)[2],null);assert.equal(blocked.length,1);
 f.options.onState(surface({moving:false,target:'u101',blocked:'obstacle',arrived:false}));assert.equal(blocked.length,1);
 f.options.onState(surface({target:'u101',arrived:true}));assert.equal(positions.at(-1)[2],'u101');api.dispose();
});
test('adapter relands at safe spawn if a versioned restore fails floor validation',async()=>{
 const f=fakeRuntime();
 const api=await createPlanetSceneAsync({}, {v11Region:regions[1],resourcesReady:true,initial:{worldVersion:V11_WORLD_VERSION,grade:1,mode:'surface',resumeSurface:true,position:[99999,99999]}}, {createScene:f.createScene});
 await Promise.resolve();assert.ok(f.calls.some(call=>call[0]==='begin'));assert.equal(api.canExplore,false);api.dispose();
});
