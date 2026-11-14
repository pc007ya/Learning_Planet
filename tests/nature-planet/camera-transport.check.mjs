import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

// Exercise the actual controller bodies with only renderer/event boundaries stubbed.
// This is a deterministic state-transition regression, not a WebGL visual test.
const source=fs.readFileSync(new URL('../../modules/nature-planet/runtime/planet-v11.mjs',import.meta.url),'utf8');
const lock=source.match(/  const cameraTransportLocked=[^\n]+/)[0];
const mode=source.match(/  function setMode\(mode\) [^\n]+/)[0];
const pan=source.match(/  function setCameraPan\(point\)\{[\s\S]*?\n  \}/)[0];
function controller(){
 const context={life:{disposed:false},state:{landed:true,contextLost:false,mode:'follow'},flight:{active:false},crewedArrival:{active:false},crewApproach:false,crewState:{active:false,occupancy:'outside'},cameraPan:[4,5],cameraSettling:false,emits:0,wakes:0};
 context.crew={getState:()=>context.crewState};context.emit=()=>context.emits++;context.wake=()=>context.wakes++;
 vm.createContext(context);const api=vm.runInContext(lock+'\n'+mode+'\n'+pan+'\n({setMode,setCameraPan})',context);return{context,api};
}
test('runtime camera calls reject every transport phase and recover without changing passenger state',()=>{
 for(const phase of ['approaching','boarding','aboard','flight','arrival']){
  const{context:c,api}=controller();
  if(phase==='approaching')c.crewApproach=true;
  if(phase==='boarding')c.crewState.active=true;
  if(phase==='aboard')c.crewState.occupancy='aboard';
  if(phase==='flight')c.flight.active=true;
  if(phase==='arrival')c.crewedArrival.active=true;
  const passenger=JSON.stringify(c.crewState);
  assert.equal(api.setMode('overview'),false,phase);
  assert.equal(api.setCameraPan([9,9]),false,phase);
  assert.equal(c.state.mode,'follow');assert.deepEqual(c.cameraPan,[4,5]);assert.equal(c.emits,0);assert.equal(c.wakes,0);
  assert.equal(JSON.stringify(c.crewState),passenger);
  c.crewApproach=false;c.crewState.active=false;c.crewState.occupancy='outside';c.flight.active=false;c.crewedArrival.active=false;
  assert.equal(api.setMode('overview'),true);assert.equal(api.setCameraPan([9,9]),true);
  assert.equal(api.setMode('follow'),true);assert.deepEqual(Array.from(c.cameraPan),[0,0]);
 }
});
test('context loss blocks camera actions and restoration retains normal controls',()=>{
 const{context:c,api}=controller();c.state.contextLost=true;
 assert.equal(api.setMode('overview'),false);assert.equal(api.setCameraPan([1,2]),false);
 c.state.contextLost=false;assert.equal(api.setMode('overview'),true);
 assert.equal(api.setCameraPan([1,2]),true);c.life.disposed=true;
 assert.equal(api.setMode('follow'),false);assert.equal(api.setCameraPan([2,3]),false);
});
