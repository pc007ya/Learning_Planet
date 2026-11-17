import {test} from 'node:test';import assert from 'node:assert/strict';
import {gardenLayout,advance} from '../../modules/english-original/english-exploration.mjs';
import {createGardenNavigation,themeFor} from '../../modules/english-original/english-garden-world.mjs';
const units=Array.from({length:8},(_,i)=>({id:`u${i}`,title:`Lesson ${i}`})),nodes=gardenLayout(units),nav=createGardenNavigation(nodes),station=n=>({x:n.x,z:n.z+.5});
test('every pair of 8 lesson stations connects across continuous meadow and pond bridge without decorative collisions',()=>{for(const a of nodes)for(const b of nodes){const from=station(a),to=station(b),path=nav.path(from,to);assert(path,`${a.id} -> ${b.id}`);let p=from;for(const next of path){assert(nav.clear(p,next));p=next;}}assert(!nav.safe({x:99,z:99}));for(const o of nav.obstacles)assert(!nav.safe(o));});
test('speed stable across 20/30/60/120fps and cannot teleport after long pause',()=>{for(const fps of [20,30,60,120]){const p=station(nodes[0]),route=[{x:p.x-.8,z:p.z}];for(let i=0;i<fps/4;i++)advance(p,route,1/fps,nav);assert(Math.abs(p.x-(nodes[0].x-.6))<.05);}const p=station(nodes[0]);advance(p,[station(nodes[1])],100,nav);assert(Math.abs(p.x-nodes[0].x)<=.121);});
test('input rejects duplicate IDs and oversized grade',()=>{assert.throws(()=>gardenLayout([units[0],units[0]]));assert.throws(()=>gardenLayout([...units,units[0]]));});

test('pond is blocked except the physical footbridge, meadow is freely walkable',()=>{assert(nav.safe({x:0,z:0}));assert(!nav.safe({x:2,z:0}));assert(nav.safe({x:-2,z:1.2}));assert(nav.path({x:0,z:-1.4},{x:0,z:1.4}));assert.notEqual(themeFor({title:'Colors Around Me'}),themeFor({title:'How Old Are You?'}));});
