import test from 'node:test';import assert from 'node:assert/strict';import {createIslandWalk} from '../modules/math-mission-map/island-walk.mjs';
const layout=[[.15,.64],[.37,.72],[.61,.73],[.84,.62],[.83,.31],[.61,.23],[.38,.24],[.16,.34]];
for(let count=1;count<=8;count++)test('safe walk connects '+count+' islands without crossing crystals or void',()=>{
 const points=count===1?[[.5,.47]]:count===2?[[.29,.58],[.71,.39]]:Array.from({length:count},(_,i)=>layout[Math.round(i*7/(count-1))]);
 const anchors=points.map(([x,y])=>({x:(x-.5)*21.2,z:(y-.49)*23})),nav=createIslandWalk(anchors);
 for(const target of anchors){const route=nav.path(anchors[0],target);assert.ok(route,'reachable island');let previous=anchors[0];for(const p of route){assert.ok(nav.safe(p));assert.ok(nav.clear(previous,p));previous=p;}}
 for(const o of nav.obstacles)assert.equal(nav.safe(o),false);
 assert.equal(nav.path(anchors[0],{x:100,z:100}),null);
});
test('segments cannot tunnel through a crystal',()=>{const n=createIslandWalk([{x:0,z:0}]);const o=n.obstacles[0];assert.equal(n.clear({x:o.x-.6,z:o.z},{x:o.x+.6,z:o.z}),false)});
import {ISLAND_WALK_SPEED,ISLAND_WALK_STRIDE} from '../modules/math-mission-map/island-walk.mjs';
test('accelerated walk stays safe at 60Hz and 25Hz, with distance-scaled gait',()=>{
 assert.equal(ISLAND_WALK_SPEED,2.4);assert.equal(ISLAND_WALK_STRIDE,.624);
 const anchors=layout.map(([x,y])=>({x:(x-.5)*21.2,z:(y-.49)*23})),nav=createIslandWalk(anchors);
 for(const dt of [1/60,.04])for(let i=1;i<anchors.length;i++){
  let p=anchors[i-1],seconds=0;const route=nav.path(p,anchors[i]);
  while(route.length){assert.ok(seconds<10);const target=route[0],d=Math.hypot(target.x-p.x,target.z-p.z),step=Math.min(ISLAND_WALK_SPEED*dt,d),next={x:p.x+(target.x-p.x)/(d||1)*step,z:p.z+(target.z-p.z)/(d||1)*step};assert.ok(nav.clear(p,next),'no accelerated tunnelling');p=next;seconds+=dt;if(Math.hypot(p.x-target.x,p.z-target.z)<.015)route.shift();}
  assert.ok(seconds<3.7,'adjacent islands reachable promptly');
 }
});
