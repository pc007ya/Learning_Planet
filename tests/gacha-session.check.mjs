import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import {test} from 'node:test';
import assert from 'node:assert/strict';
const html=readFileSync(process.env.GACHA_SOURCE || 'index.html','utf8');
function fixture(){
 const timers=[],cancelled=new Set(),queue=[],profile={coins:30,gachaOwned:{},gachaDraws:0,log:[]};
 const ctx=vm.createContext({Math,setTimeout(fn){timers.push(fn);return timers.length;},clearTimeout(id){cancelled.add(id);},cancelAnimationFrame(){}});
 const owner={state:{screen:'gacha',currentId:'a',teacher:false,gachaStage:'idle',speechMuted:true,gachaBank:[{id:'card',character:'角色',name:'卡片'}]},sessionGeneration:0,profile,prof(){return this.profile;},flash(){},playGachaSound(){},startGachaConfetti(){},setState(p,cb){queue.push(()=>{Object.assign(this.state,typeof p==='function'?p(this.state):p);cb?.();});},patch(fn){queue.push(()=>Object.assign(this.profile,fn(this.profile)));}};
 for(const name of ['gachaRoundActive','cancelGachaRound','prepareGacha','turnGachaKnob','finishGachaDraw','clearGachaResult','cancelGachaCoinDrag']){
  const start=html.indexOf('\n  '+name+'('),end=html.slice(start+1).search(/\n  (?:async )?\w+\(/)+start+1;
  owner[name]=vm.runInContext('(function '+html.slice(start,end).trim()+')',ctx);
 }
 return {owner,flush(){while(queue.length)queue.shift()();},tick(i){if(!cancelled.has(i+1))timers[i]();},timers};
}
function drop(f){f.owner.prepareGacha();f.flush();f.tick(0);f.flush();f.owner.turnGachaKnob();f.flush();f.tick(2);f.flush();}
test('double activation and double settlement debit exactly once with batched state',()=>{const f=fixture();f.owner.prepareGacha();f.owner.prepareGacha();assert.equal(f.timers.length,1);f.flush();f.tick(0);f.flush();f.owner.turnGachaKnob();f.owner.turnGachaKnob();assert.equal(f.timers.length,3);f.flush();f.tick(2);f.flush();f.owner.finishGachaDraw();f.owner.finishGachaDraw();f.flush();assert.equal(f.owner.profile.coins,20);assert.equal(f.owner.profile.gachaDraws,1);});
test('switching learners before queued settlement awards neither the next learner nor an old result',()=>{const f=fixture();drop(f);f.owner.finishGachaDraw();f.owner.state.currentId='b';f.owner.profile={coins:50,gachaOwned:{},gachaDraws:0};f.flush();assert.equal(f.owner.profile.coins,50);assert.equal(f.owner.profile.gachaDraws,0);assert.notEqual(f.owner.state.gachaStage,'result');});
test('leaving during the coin animation cannot revive the machine',()=>{const f=fixture();f.owner.prepareGacha();f.flush();f.owner.state.screen='home';f.tick(0);f.flush();assert.notEqual(f.owner.state.gachaStage,'ready');});
test('session generation invalidates all retained callbacks',()=>{const f=fixture();f.owner.prepareGacha();f.flush();f.owner.sessionGeneration++;f.tick(0);f.flush();assert.notEqual(f.owner.state.gachaStage,'ready');});
test('insufficient or nonfinite coins at award time never debit',()=>{for(const coins of [0,9,NaN]){const f=fixture();drop(f);f.owner.profile.coins=coins;f.owner.finishGachaDraw();f.flush();assert.equal(f.owner.profile.gachaDraws,0);assert.equal(f.owner.state.gachaStage,'idle');}});
test('a retained callback after cancellation cannot affect a new round',()=>{const f=fixture();f.owner.prepareGacha();f.flush();const old=f.timers[0];f.owner.clearGachaResult();f.flush();f.owner.prepareGacha();f.flush();old();f.flush();assert.equal(f.owner.state.gachaStage,'coin');});
test('balance changing before the queued debit is checked again and round unlocks',()=>{const f=fixture();drop(f);f.owner.finishGachaDraw();f.owner.profile.coins=0;f.flush();assert.equal(f.owner.profile.coins,0);assert.equal(f.owner.profile.gachaDraws,0);assert.equal(f.owner.state.gachaStage,'idle');assert.equal(f.owner.gachaRound,null);});
