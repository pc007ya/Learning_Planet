import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';
const base=new URL('../../modules/english-original/',import.meta.url);
const bootstrap=fs.readFileSync(new URL('bootstrap.js',base),'utf8');
const html=fs.readFileSync(new URL('index.html',base),'utf8');
class Node extends EventTarget {constructor(tag){super();this.tag=tag;this.style={};this.children=[];this.contentWindow={};this.isConnected=false;}setAttribute(){}append(...xs){for(const x of xs){this.children.push(x);x.parent=this;x.isConnected=true;}}replaceChildren(){this.children=[];}remove(){if(this.parent)this.parent.children=this.parent.children.filter(x=>x!==this);this.isConnected=false;}showModal(){this.open=true;}close(){this.open=false;}focus(){}}
function environment(){const window=new EventTarget(),body=new Node('body'),stack=[{host:'map'}];let pos=0;
 const history={get state(){return stack[pos];},pushState(v){stack.splice(++pos);stack[pos]=v;},replaceState(v){stack[pos]=v;},back(){if(pos){pos--;queueMicrotask(()=>window.dispatchEvent(new Event('popstate')));}},forward(){if(pos<stack.length-1){pos++;queueMicrotask(()=>window.dispatchEvent(new Event('popstate')));}}};
 const document={body,activeElement:new Node('button'),createElement:t=>new Node(t)};Object.assign(globalThis,{window,document,history});if(!globalThis.crypto)Object.defineProperty(globalThis,"crypto",{value:webcrypto,configurable:true});return{window,document,history,stack};}
const wait=()=>new Promise(r=>setImmediate(r));
test('bootstrap denies standalone/wrong-source; inline cannot fall back to preview learner',()=>{
 for(const kind of ['standalone','wrongSource']){const body=new Node('body'),w={location:{origin:'https://example.test'},name:'token'};w.parent=kind==='standalone'?w:{location:{origin:w.location.origin},__LPEnglishOriginalHosts:new Map([['token',source=>null]])};const c={window:w,document:{body,createElement:t=>new Node(t)}};assert.throws(()=>vm.runInNewContext(bootstrap,c));assert.equal(w.LPEnglishCandidateHost,undefined);assert.match(body.children[0].textContent,/不會使用示範帳號/);}
 assert(html.indexOf('src="bootstrap.js"')<html.indexOf('src="english-writer-lease-r29.js"'));assert(html.indexOf('src="english-writer-lease-r29.js"')<html.indexOf('src="english-progress-r29.js"'));assert.match(html,/if\(!window.LPEnglishCandidateHost\)throw Error\("Active host required"\)/);
});
test('launcher authenticates frame claim, disposes on close, preserves history and can reopen',async()=>{
 const e=environment();const {openEnglishOriginal}=await import(new URL('launch.mjs?review=serial',base));let active=true,closed=0;
 await assert.rejects(openEnglishOriginal({learnerId:'',isActive:()=>true}));await assert.rejects(openEnglishOriginal({learnerId:'a',isActive:()=>false}));
 const close=await openEnglishOriginal({learnerId:'a',grade:2,isActive:()=>active,onClose:()=>closed++});const dialog=e.document.body.children[0],frame=dialog.children[1];const claim=e.window.__LPEnglishOriginalHosts.get(frame.name);
 assert.equal(claim({}),null);const host=claim(frame.contentWindow);assert.equal(host.learnerId,'a');assert.equal(host.grade,2);assert.equal(e.window.__LPEnglishOriginalHosts.has(frame.name),false);
 let disposed=0;frame.contentWindow.LPEnglishCandidate={dispose(){disposed++;}};await close();await close();assert.equal(disposed,1);assert.equal(closed,1);assert(host.signal.aborted);assert.equal(host.isActive(),false);assert.equal(e.document.body.children.length,0);assert.deepEqual(e.history.state,{host:'map'});
 const close2=await openEnglishOriginal({learnerId:'b',isActive:()=>true});assert.equal(e.document.body.children.length,1);e.history.back();await wait();assert.equal(e.document.body.children.length,0);await close2();
});
test('scope invalidation auto closes and blocks claims; owner hooks cover role/unmount/navigation',async()=>{
 const e=environment();const {openEnglishOriginal}=await import(new URL('launch.mjs?review=scope',base));let active=true;const close=await openEnglishOriginal({learnerId:'a',isActive:()=>active});const frame=e.document.body.children[0].children[1],claim=e.window.__LPEnglishOriginalHosts.get(frame.name);active=false;assert.equal(claim(frame.contentWindow),null);await new Promise(r=>setTimeout(r,230));assert.equal(e.document.body.children.length,0);await close();
 const main=fs.readFileSync(new URL('../../index.html',import.meta.url),'utf8');assert.match(main,/teardownRole\(\)\s*{\s*this.closeEnglishOriginal\(\)/);assert.match(main,/componentWillUnmount\(\)\s*{\s*this.closeEnglishOriginal\(\)/);assert.match(main,/lastEnglishOriginalNavigation!==undefined&&englishNavigation!==this.lastEnglishOriginalNavigation\)this.closeEnglishOriginal\(\)/);assert.match(main,/students.some\(x=>x.id===s.currentId\)/);
});
test('simultaneous launcher opens do not leave two dialogs',async()=>{
 const e=environment();const {openEnglishOriginal}=await import(new URL('launch.mjs?review=parallel',base));const closes=await Promise.all([openEnglishOriginal({learnerId:'a',isActive:()=>true}),openEnglishOriginal({learnerId:'a',isActive:()=>true})]);const count=e.document.body.children.length;
 // Cleanup before assertion, even when the concurrency invariant fails.
 for(const close of closes.reverse())await close();assert.equal(count,1,'Expected one owned overlay even when two requests arrive before initial await resolves');
});
