import test from 'node:test';
import assert from 'node:assert/strict';
import { leaveOverlayHistory, waitForOverlayHistory } from '../../modules/science-curriculum/overlay-history.mjs';

const tick = () => new Promise(resolve => setTimeout(resolve,0));
function navigation(states) {
  const window = new EventTarget(), entries = structuredClone(states), queued = [], writes = [];
  let index = entries.length-1;
  const history = { get state(){return entries[index];},replaceState(value){writes.push(index);entries[index]=structuredClone(value);},back(){const destination=index-1;queued.push(()=>{index=destination;window.dispatchEvent(new Event('popstate'));});} };
  return {window,history,entries,writes,queued,get index(){return index;},flush(){assert.ok(queued.length);queued.shift()();}};
}

test('owned traversal resolves after asynchronous popstate, never rewrites original host entry',async()=>{
  const env=navigation([{host:'untouched'},{host:'untouched',scienceCandidateOverlay:'child'}]);let complete=false;
  const close=leaveOverlayHistory({...env,marker:'scienceCandidateOverlay',token:'child',restoreState:{host:'untouched'}}).then(value=>{complete=true;return value;});
  const waiting=waitForOverlayHistory(env.window);await tick();assert.equal(complete,false);assert.deepEqual(env.writes,[1]);assert.deepEqual(env.entries[0],{host:'untouched'});
  env.flush();assert.equal(await close,true);await waiting;assert.equal(complete,true);assert.equal(env.index,0);
});

test('queued child and parent closes serialize, and new entry waits through both',async()=>{
  const env=navigation([{host:'original'},{host:'original',natureCandidate:'map'},{host:'original',natureCandidate:'map',scienceCandidateOverlay:'child'}]);
  const child=leaveOverlayHistory({...env,marker:'scienceCandidateOverlay',token:'child',restoreState:{host:'original',natureCandidate:'map'}});
  const parent=leaveOverlayHistory({...env,marker:'natureCandidate',token:'map',restoreState:{host:'original'}});
  let ready=false;const waiting=waitForOverlayHistory(env.window).then(()=>ready=true);
  assert.equal(env.queued.length,1);env.flush();await child;await tick();assert.equal(ready,false);assert.equal(env.queued.length,1);assert.equal(env.index,1);
  env.flush();assert.equal(await parent,true);await waiting;assert.equal(ready,true);assert.deepEqual(env.writes,[2,1]);assert.deepEqual(env.entries[0],{host:'original'});assert.equal(env.index,0);
});

test('newer host navigation is neither rewritten nor popped',async()=>{
  const env=navigation([{host:'new-route'}]);assert.equal(await leaveOverlayHistory({...env,marker:'scienceCandidateOverlay',token:'closed',restoreState:{host:'old'}}),false);
  assert.deepEqual(env.writes,[]);assert.deepEqual(env.queued,[]);assert.deepEqual(env.entries,[{host:'new-route'}]);
});

test('history exceptions release the pending barrier and propagate to the caller',async()=>{
  const env=navigation([{host:'original'},{scienceCandidateOverlay:'child'}]);env.history.back=()=>{throw Error('history unavailable');};
  await assert.rejects(leaveOverlayHistory({...env,marker:'scienceCandidateOverlay',token:'child'}),/history unavailable/);
  await waitForOverlayHistory(env.window);
});
