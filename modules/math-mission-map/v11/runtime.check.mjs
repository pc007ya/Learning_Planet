import test from 'node:test';
import assert from 'node:assert/strict';
import {createLifetime,disposeTree,movementKey,editableTarget} from './lifecycle.mjs';
import {createV11PlanetScene} from './planet-v11.mjs';
import {toWorld,dijkstra,circleBlocked} from './nav.mjs';
import fs from 'node:fs';

test('lifetime aborts first, releases in reverse order, idempotent, late ownership disposed',()=>{
 const life=createLifetime(),calls=[];life.own(()=>calls.push('a'));life.own(()=>{assert.equal(life.signal.aborted,true);calls.push('b');throw Error('cleanup');});
 life.dispose();life.dispose();life.own(()=>calls.push('late'));assert.deepEqual(calls,['b','a','late']);assert.equal(life.disposed,true);
});
test('tree disposal deduplicates shared resources',()=>{
 const calls=[];const g={dispose:()=>calls.push('geometry')},t={isTexture:true,dispose:()=>calls.push('texture')},m={map:t,dispose:()=>calls.push('material')};
 disposeTree({traverse:fn=>[{geometry:g,material:[m,m]},{geometry:g,material:m}].forEach(fn),removeFromParent:()=>calls.push('remove')});assert.deepEqual(calls,['texture','material','geometry','remove']);
});
test('keyboard normalization and editable targets',()=>{assert.equal(movementKey('ArrowUp'),'up');assert.equal(movementKey('w'),'up');assert.equal(movementKey('Escape'),null);assert.equal(editableTarget({closest:()=>({})}),true);assert.equal(editableTarget(null),false);});
function dom(){
 const targets=[];class Target{constructor(){this.listeners=new Map();this.style={};this.children=[];targets.push(this);}addEventListener(n,f){this.listeners.set(n,f);}removeEventListener(n){this.listeners.delete(n);}appendChild(el){this.children.push(el);el.parent=this;}setAttribute(){}remove(){if(this.parent)this.parent.children=this.parent.children.filter(x=>x!==this);}getBoundingClientRect(){return {width:800,height:600};}}
 const win=new Target();win.cancelAnimationFrame=()=>{};win.requestAnimationFrame=fn=>{win.nextFrame=fn;return 1;};win.matchMedia=()=>({matches:false});const doc=new Target();doc.defaultView=win;doc.createElement=()=>new Target();const container=new Target();container.ownerDocument=doc;return {container,targets};
}
test('dispose before dependency loading: no late callbacks, all listeners removed, remount safe',async()=>{
 const {container,targets}=dom();let calls=0;const api=createV11PlanetScene(container,{grade:1,assetBaseUrl:'/models/',onState:()=>calls++,onError:()=>calls++});
 assert.equal(api.getState().loading,true);api.dispose();api.dispose();const count=calls;assert.equal(await api.ready,false);assert.equal(calls,count);assert.equal(container.children.length,0);assert.ok(targets.every(x=>x.listeners.size===0));assert.equal(api.navigate('u101'),false);assert.equal(api.setMovement('w',true),false);assert.equal(api.skipLanding(),false);
 const second=createV11PlanetScene(container,{grade:2,assetBaseUrl:'/models/'});second.dispose();await second.ready;assert.equal(container.children.length,0);
});
test('dependency failure produces truthful fallback and remains disposable',async()=>{
 const {container,targets}=dom();let error;const api=createV11PlanetScene(container,{grade:1,assetBaseUrl:'/models/',onError:e=>error=e});assert.equal(await api.ready,false);assert.equal(api.getState().ready,false);assert.equal(error.code,'SCENE_UNAVAILABLE');api.dispose();assert.ok(targets.every(x=>x.listeners.size===0));
});
test('invalid grade rejected before mounting',()=>{const {container}=dom();assert.throws(()=>createV11PlanetScene(container,{grade:4,assetBaseUrl:'/models/'}));assert.equal(container.children.length,0);});
test('coordinates and disconnected graph',()=>{assert.deepEqual(toWorld([1,2,3]),[1,3,-2]);assert.deepEqual(dijkstra([{id:1,p:[0,0,0]},{id:2,p:[1,0,0]}],[],1,2),[]);assert.equal(circleBlocked(1,-2,[{x:1,y:2,r:1}]),true);});
test('exact v11 IDs and topology provide routes to all 78 stations',()=>{
 let count=0;for(const grade of [1,2,3]){const d=JSON.parse(fs.readFileSync(new URL(`./assets/grade${grade}-scene.json`,import.meta.url)));for(const s of d.stationsData){assert.ok(dijkstra(d.nodes,d.edges,d.nodes[0].id,s.navNode).length);count++;}}assert.equal(count,78);
});

import * as RealTHREE from '../../math-knowledge/vendor/three-r187/three.module.js';
function renderFixture({deferParse=false}={}) {
 const d=dom();const win=d.container.ownerDocument.defaultView;const requests=[];
 const manifest={spawn:[0,0,0],nodes:[{id:1,p:[0,0,0]},{id:2,p:[2,0,0]}],edges:[[1,2]],obstacles:[],stationsData:[{id:'u101',title:'Course',navNode:2,entry:[2,0,0]}]};
 win.fetch=async url=>{requests.push(String(url));return {ok:true,json:async()=>manifest,arrayBuffer:async()=>new ArrayBuffer(0)};};d.container.ownerDocument.baseURI='https://example.test/';
 let rendererDisposed=0, geometryDisposed=0, release;
 class Renderer {constructor(){this.renderLists={dispose(){}};}setPixelRatio(){}setSize(){}render(){}dispose(){rendererDisposed++;}}
 const mesh=new RealTHREE.Mesh(new RealTHREE.PlaneGeometry(100,100),new RealTHREE.MeshStandardMaterial());mesh.rotation.x=-Math.PI/2;mesh.name='Walk_Surface';mesh.geometry.addEventListener('dispose',()=>geometryDisposed++);
 const scene=new RealTHREE.Group();scene.add(mesh);
 class Loader{async parseAsync(){if(deferParse)await new Promise(r=>release=r);return {scene};}}
 return {...d,requests,modules:async()=>[{...RealTHREE,WebGLRenderer:Renderer},{GLTFLoader:Loader}],get release(){return release;},get geometryDisposed(){return geometryDisposed;},get rendererDisposed(){return rendererDisposed;}};
}
test('successful mount loads only selected grade; landing lock/skip, course selection, cleanup',async()=>{
 const f=renderFixture();let selected;const api=createV11PlanetScene(f.container,{grade:1,assetBaseUrl:'/v11/',onSelect:e=>selected=e},f.modules);
 assert.equal(await api.ready,true);assert.equal(api.getState().landed,false);assert.equal(api.navigate('u101'),false);assert.equal(api.setMovement('w',true),false);assert.equal(api.skipLanding(),true);
 assert.equal(api.navigate('missing'),false);assert.equal(api.navigate('u101'),true);assert.equal(selected.courseId,'u101');assert.equal(api.getState().target,'u101');
 assert.deepEqual(f.requests,['https://example.test/v11/grade1-scene.json','https://example.test/v11/grade1-terrain.glb']);api.dispose();assert.equal(f.geometryDisposed,1);assert.equal(f.rendererDisposed,1);assert.ok(f.targets.every(t=>t.listeners.size===0));
});
test('dispose during GLTF parse disposes late parsed scene and suppresses callbacks',async()=>{
 const f=renderFixture({deferParse:true});let callbacks=0;const api=createV11PlanetScene(f.container,{grade:1,assetBaseUrl:'/v11/',onState:()=>callbacks++},f.modules);
 while(!f.release)await new Promise(r=>setImmediate(r));api.dispose();const count=callbacks;f.release();assert.equal(await api.ready,false);assert.equal(f.geometryDisposed,1);assert.equal(callbacks,count);
});
test('context loss clears input and pauses, restoration permits recovery without duplicate load',async()=>{
 const f=renderFixture();const errors=[];const api=createV11PlanetScene(f.container,{grade:1,assetBaseUrl:'/v11/',initialState:{worldVersion:'planet-v11-world-v1',grade:1,position:[0,0,0],landed:true},onError:e=>errors.push(e)},f.modules);await api.ready;
 const canvas=f.container.children[0].children[0];canvas.listeners.get('webglcontextlost')({preventDefault(){}});assert.equal(api.getState().contextLost,true);assert.equal(api.setMovement('w',true),false);assert.equal(errors[0].code,'WEBGL_CONTEXT_LOST');
 canvas.listeners.get('webglcontextrestored')();assert.equal(api.getState().contextLost,false);assert.equal(api.navigate('u101'),true);assert.equal(f.requests.length,2);api.dispose();
});

import {createHash} from 'node:crypto';
test('packaged GLB geometry is byte-identical to approved v11 candidate',()=>{
 const hashes=['b8c3b445a8ca6a4332105713a321513a17b3b0da0327cc3991f5318bd66b42c5','728b8e36a855036b12003699bd7f40e845e4ad740778b820c4bc69ef565fba4b','f504470b9093b394d1c4fffe28bf028d4912b1590cbca6a55c23fa574bca13d8'];
 for(const grade of [1,2,3])assert.equal(createHash('sha256').update(fs.readFileSync(new URL(`./assets/grade${grade}-terrain.glb`,import.meta.url))).digest('hex'),hashes[grade-1]);
});

test('projection callback uses normalized coordinates, actual entry proximity and at most 10 Hz',async()=>{
 const f=renderFixture();const frames=[];const api=createV11PlanetScene(f.container,{grade:1,assetBaseUrl:'/v11/',initialState:{worldVersion:'planet-v11-world-v1',grade:1,position:[0,0,0],landed:true},onProject:p=>frames.push(p)},f.modules);await api.ready;
 const win=f.container.ownerDocument.defaultView;
 win.nextFrame(0);win.nextFrame(50);assert.equal(frames.length,1);win.nextFrame(101);assert.equal(frames.length,2);
 assert.equal(frames[0][0].courseId,'u101');assert.ok(Number.isFinite(frames[0][0].x));assert.ok(Number.isFinite(frames[0][0].y));assert.equal(frames[0][0].nearby,true);assert.equal(api.getState().nearbyCourseId,'u101');api.dispose();
});


test('renderer failure rejects initialized before fetching scene assets',async()=>{
 const f=renderFixture();let error;
 const modules=async()=>[{...RealTHREE,WebGLRenderer:class {constructor(){throw Error('WebGL disabled');}}},{}];
 const api=createV11PlanetScene(f.container,{grade:1,assetBaseUrl:'/v11/',onError:e=>error=e},modules);
 assert.equal(await api.initialized,false);assert.equal(await api.ready,false);assert.equal(f.requests.length,0);assert.match(error.message,/WebGL disabled/);api.dispose();
});
test('host movement, camera, projection and version restore APIs preserve standalone callback',async()=>{
 const f=renderFixture();let actor,position;
 const api=createV11PlanetScene(f.container,{grade:1,assetBaseUrl:'/v11/',initialState:{worldVersion:'old',grade:1,position:[3,0,3],landed:true},onActorProject:e=>actor=e,onPosition:p=>position=p},f.modules);
 assert.equal(await api.initialized,true);assert.equal(await api.ready,true);assert.equal(api.getState().landed,false);assert.ok(api.getState().position.every(n=>n===0));
 api.skipLanding();assert.equal(api.moveTo([4,0]),true);assert.equal(api.getState().remainingWaypoints,1);assert.equal(api.stop(),true);assert.equal(api.getState().remainingWaypoints,0);
 assert.equal(api.moveTo([999,999]),false);assert.equal(api.moveTo([0,0],{courseId:'u101'}),true);api.stop();
 assert.equal(api.setCameraPan([3,2]),true);assert.equal(api.panBy(1,-2),true);assert.equal(api.setCameraViewport({left:200,top:40,bottom:80}),true);
 f.container.ownerDocument.defaultView.nextFrame(0);assert.equal(position.length,3);assert.ok(Number.isFinite(actor.avatar.x));assert.ok(actor.actorBounds.right>=actor.actorBounds.left);assert.ok(Number.isFinite(actor.bodyFocus.y));api.dispose();
});
test('manual authored landing waits for click/resources, cancels, and unlocks only after timeline',async()=>{
 const f=renderFixture();let propsDisposed=0;
 const root=new RealTHREE.Group(),rocket=new RealTHREE.Mesh(new RealTHREE.CylinderGeometry(1,1,5),new RealTHREE.MeshStandardMaterial());rocket.name='Space_Exploration_Rocket_Runtime';root.add(rocket);
 const modules=async()=>[...(await f.modules()),{createSpaceProps(scene,{onState}){scene.add(root);onState({status:'ready'});return {ready:Promise.resolve({root}),dispose(){if(!propsDisposed++){disposeTree(root);}}};}}];
 const frames=[];const api=createV11PlanetScene(f.container,{grade:1,assetBaseUrl:'/v11/',manualLanding:true,resourcesReady:false,onLandingState:f=>frames.push(f)},modules);
 assert.equal(await api.initialized,true);assert.equal(api.beginLanding(),true);assert.equal(await api.ready,true);
 const win=f.container.ownerDocument.defaultView;let now=0;const advance=n=>{for(let i=0;i<n;i++)win.nextFrame(now+=50);};
 advance(180);assert.equal(api.getState().landed,false);assert.equal(api.getState().landingProgress,.625);assert.equal(api.skipLanding(),false);assert.equal(api.moveTo([2,0]),false);
 assert.equal(api.cancelLanding(),true);assert.equal(api.getState().landingProgress,0);assert.equal(api.getState().landingStarted,false);
 api.setResourcesReady(true);assert.equal(api.beginLanding(),true);advance(100);assert.equal(api.getState().landed,false);advance(150);assert.equal(api.getState().landed,true);assert.ok(frames.some(f=>f.shot==='approach'));assert.ok(frames.some(f=>f.shot==='push-in'));assert.ok(frames.some(f=>f.shot==='descent'));assert.equal(api.navigate('u101'),true);api.dispose();assert.equal(propsDisposed,1);
});

test('orbit re-entry and keyboard/resource gates remain consistent after landing',async()=>{
 const f=renderFixture(),root=new RealTHREE.Group(),rocket=new RealTHREE.Mesh(new RealTHREE.BoxGeometry(2,5,2),new RealTHREE.MeshStandardMaterial());rocket.name='Space_Exploration_Rocket_Runtime';root.add(rocket);
 const modules=async()=>[...(await f.modules()),{createSpaceProps(scene){scene.add(root);return {ready:Promise.resolve({root}),dispose(){disposeTree(root);}};}}];
 const api=createV11PlanetScene(f.container,{grade:1,assetBaseUrl:'/v11/',manualLanding:true,resourcesReady:true,initialState:{worldVersion:'planet-v11-world-v1',grade:1,position:[0,0,0],landed:true}},modules);
 await api.ready;assert.equal(api.getState().landed,true);
 api.setMovement('w',true);assert.equal(api.getState().moving,true);assert.equal(api.getState().remainingWaypoints,0);
 api.setMovement('w',false);assert.equal(api.getState().moving,false);
 api.setResourcesReady(false);assert.equal(api.moveTo([2,0]),false);assert.equal(api.setMovement('w',true),false);assert.equal(api.navigate('u101'),false);
 api.setResourcesReady(true);assert.equal(api.navigate('u101'),true);api.setResourcesReady(false);assert.equal(api.getState().remainingWaypoints,0);
 api.setResourcesReady(true);assert.equal(api.cancelLanding(),true);assert.equal(api.getState().landed,false);assert.equal(api.setMovement('w',true),false);assert.equal(api.beginLanding(),true);
 const win=f.container.ownerDocument.defaultView;for(let now=0;now<12500;now+=50)win.nextFrame(now);
 assert.equal(api.getState().landed,true);api.dispose();
});
test('rocket approach animates during terrain parse but cannot descend or walk',async()=>{
 const f=renderFixture({deferParse:true}),root=new RealTHREE.Group(),rocket=new RealTHREE.Mesh(new RealTHREE.BoxGeometry(2,5,2),new RealTHREE.MeshStandardMaterial());rocket.name='Space_Exploration_Rocket_Runtime';root.add(rocket);
 const frames=[],modules=async()=>[...(await f.modules()),{createSpaceProps(scene){scene.add(root);return {ready:Promise.resolve({root}),dispose(){disposeTree(root);}};}}];
 const api=createV11PlanetScene(f.container,{grade:1,assetBaseUrl:'/v11/',manualLanding:true,resourcesReady:true,onLandingState:frame=>frames.push(frame)},modules);
 await api.initialized;api.beginLanding();while(!f.release)await new Promise(r=>setImmediate(r));
 const win=f.container.ownerDocument.defaultView;for(let now=0;now<10000;now+=50)win.nextFrame(now);
 assert.equal(api.getState().ready,false);assert.equal(api.getState().landed,false);assert.equal(api.getState().landingProgress,.625);assert.ok(frames.some(f=>f.shot==='approach'));assert.ok(frames.some(f=>f.shot==='push-in'));assert.ok(!frames.some(f=>f.shot==='descent'));assert.equal(api.setMovement('w',true),false);
 f.release();assert.equal(await api.ready,true);for(let now=10000;now<15000;now+=50)win.nextFrame(now);assert.equal(api.getState().landed,true);api.dispose();
});
