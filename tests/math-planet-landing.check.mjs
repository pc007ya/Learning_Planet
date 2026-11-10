import test from 'node:test';
import assert from 'node:assert/strict';
import {createLandingTimeline} from '../modules/math-mission-map/planet-art-v2-landing.mjs';
const advance=(t,options,n=1000)=>{let state;for(let i=0;i<n;i++)state=t.step(.05,options);return state;};
test('landing never completes without required resources, including slow and failed loads',()=>{
 const t=createLandingTimeline();assert.equal(t.start(),true);assert.equal(t.start(),false);
 assert.equal(advance(t,{}).shot,'loading');assert.equal(advance(t,{rocketReady:true}).shot,'waiting');
 assert.equal(t.complete,false);assert.equal(advance(t,{rocketReady:true,ready:true}).shot,'surface');assert.equal(t.complete,true);
});
test('cinematic includes approach, push-in, cut, descent and settle before surface',()=>{
 const t=createLandingTimeline(),shots=new Set();t.start();for(let i=0;i<250;i++)shots.add(t.step(.05,{rocketReady:true,ready:true}).shot);
 for(const shot of ['approach','push-in','cut','descent','settle','surface'])assert.ok(shots.has(shot),shot);
});
test('cancel clears completed/active state, repeat entry restarts full sequence',()=>{
 const t=createLandingTimeline();t.start();advance(t,{rocketReady:true,ready:true},100);t.cancel();assert.equal(t.step(1,{ready:true}).shot,'orbit');
 t.start();assert.equal(t.step(.05,{rocketReady:true,ready:true}).shot,'approach');assert.equal(t.complete,false);
});
test('reduced motion removes travel but still waits for resources',()=>{
 const t=createLandingTimeline();t.start();assert.equal(advance(t,{reduced:true}).complete,false);assert.equal(t.step(.01,{ready:true,reduced:true}).complete,true);
});

import fs from 'node:fs';
import * as THREE from '../modules/math-knowledge/vendor/three-r187/three.module.js';
import {GLTFLoader} from '../modules/math-knowledge/vendor/three-r187/addons/loaders/GLTFLoader.js';
import {createLandingDirector} from '../modules/math-mission-map/planet-art-v2-landing.mjs';
test('director reuses exact authored rocket, frames approach/descent and restores/disposes only clone',async()=>{
 const bytes=fs.readFileSync(new URL('../assets/models/grade1-space-props/grade1-space-props-v1.glb',import.meta.url));
 const {scene:props}=await new GLTFLoader().parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
 const scene=new THREE.Scene();scene.add(props);const director=createLandingDirector(THREE,scene);assert.equal(director.attach(props),true);
 const original=props.getObjectByName('Space_Exploration_Rocket_Runtime'),clone=scene.getObjectByName('grade-one-cinematic-rocket');
 assert.ok(original&&clone);const resources=new Set();original.traverse(o=>{if(o.geometry)resources.add(o.geometry);});
 clone.traverse(o=>{if(o.geometry)assert.ok(resources.has(o.geometry),'no replacement geometry or duplicate upload');});
 for(const aspect of [4/3,16/9,.78])for(const elapsed of [0,.5,2,3.9,8.2,8.8,9.5,10.5,11.39]){
  const camera=new THREE.PerspectiveCamera(28,aspect,.35,7200);director.apply({active:true,shot:elapsed<4?'approach':'descent',elapsed},camera,new THREE.Vector3(-30,47,45),new THREE.Vector3(-5,1,14));camera.updateMatrixWorld(true);scene.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(clone);for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z]){const p=new THREE.Vector3(x,y,z).project(camera);assert.ok(Math.abs(p.x)<1&&Math.abs(p.y)<1&&p.z<1,`rocket framed ${aspect} / ${elapsed}`);}
 }
 let disposed=0;resources.forEach(g=>g.addEventListener('dispose',()=>disposed++));director.hide();assert.equal(original.visible,true);assert.equal(clone.visible,false);director.dispose();assert.equal(scene.getObjectByName('grade-one-cinematic-rocket'),undefined);assert.equal(disposed,0,'props owner retains shared geometry');
 const cleanup=new Set();props.traverse(o=>{if(o.geometry)cleanup.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])if(m)cleanup.add(m);});cleanup.forEach(r=>r.dispose());
});
