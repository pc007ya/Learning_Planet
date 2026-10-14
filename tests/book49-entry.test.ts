import {describe,it,expect,vi} from 'vitest';
import {readFileSync} from 'node:fs';
const entry=readFileSync('modules/story-entry.mjs','utf8');
const access=readFileSync('modules/story-access.mjs','utf8').replaceAll('export function','function');
const {protectStoryEntry,hasStoryParentSession}=new Function(access+';return {protectStoryEntry,hasStoryParentSession};')();
const code=entry.replace(/^import .*\n/,'').replaceAll('await import(', 'await loadModule(');
const tick=()=>new Promise(resolve=>setTimeout(resolve,0));
async function harness(pagePath='/princess-weekend-storybook.html',reader='modules/book-49/reader.js?v=test',demo=false){
 let onUser:(user:object|null)=>void=()=>{},onFailure:()=>void=()=>{};
 const loadModule=vi.fn(async (source:string)=>{
  if(source==='../auth-v2/firebase-client.js')return {auth:{},currentRole:async()=> 'student',onAuthStateChanged:(_auth:unknown,next:typeof onUser,fail:typeof onFailure)=>{onUser=next;onFailure=fail;return vi.fn();}};
  return {};
 });
 const location={origin:'https://learnplanet.win',pathname:pagePath,replace:vi.fn()};
 const host={replaceChildren:vi.fn()},status={setAttribute:vi.fn(),textContent:''};
 const document={baseURI:'https://learnplanet.win'+pagePath,querySelector:(selector:string)=>selector==='script[data-story-reader]'?{dataset:{storyReader:reader}}:host,createElement:()=>status,createTextNode:(s:string)=>s};
 const window:any={location,document,speechSynthesis:{cancel:vi.fn()}};window.top=demo?{location:{origin:location.origin,pathname:'/stories/'},LPHomeRoutes:{},document:{querySelector:(s:string)=>s.startsWith('.home-subject-card')?{}:null}}:window;
 await new Function('protectStoryEntry','hasStoryParentSession','document','location','window','addEventListener','loadModule','return (async()=>{'+code+'})();')(protectStoryEntry,hasStoryParentSession,document,location,window,vi.fn(),loadModule);
 return {loadModule,location,user:(u:object|null)=>onUser(u),fail:()=>onFailure()};
}
describe('book49 guarded entry (mock auth, no browser credentials)',()=>{
 it('loads only the approved login entry from its dedicated HTML',()=>{
  const html=readFileSync('princess-weekend-storybook.html','utf8');const scripts=[...html.matchAll(/<script[^>]*src="([^"]+)"[^>]*>/g)];
  expect(scripts).toHaveLength(1);expect(scripts[0][1]).toContain('modules/story-entry.mjs');expect(html).toContain('type="module"');expect(html).toContain('data-story-reader="modules/book-49/reader.js?');expect(html).not.toMatch(/<script[^>]*src="modules\/book-49\/reader\.js/);
 });
 it('waits for restored auth before loading book49 and refuses anonymous entry',async()=>{
  const h=await harness();expect(h.loadModule.mock.calls.map(c=>c[0])).toEqual(['../auth-v2/firebase-client.js']);h.user(null);await tick();expect(h.location.replace).toHaveBeenCalledWith('https://learnplanet.win/stories/');expect(h.loadModule).toHaveBeenCalledTimes(1);
 });
 it('imports the dedicated reader once after the accepted role and revokes on signout',async()=>{
  const h=await harness();h.user({});await tick();h.user({});await tick();expect(h.loadModule.mock.calls.map(c=>c[0])).toEqual(['../auth-v2/firebase-client.js','https://learnplanet.win/modules/book-49/reader.js?v=test']);h.user(null);await tick();expect(h.location.replace).toHaveBeenCalledOnce();
 });
 it('keeps the approved embedded DEMO home path',async()=>{
  const h=await harness('/princess-weekend-storybook.html','modules/book-49/reader.js?v=test',true);expect(h.loadModule.mock.calls.map(c=>c[0])).toEqual(['https://learnplanet.win/modules/book-49/reader.js?v=test']);
 });
 it.each(['/story-planet.html','/magic-potion-storybook.html'])('does not admit book49 from another entry %s',async page=>{
  const h=await harness(page);expect(h.loadModule).not.toHaveBeenCalled();expect(h.location.replace).toHaveBeenCalledOnce();
 });
 it('still rejects a reader from another origin',async()=>{
  const h=await harness('/princess-weekend-storybook.html','https://other.example/modules/book-49/reader.js');expect(h.loadModule).not.toHaveBeenCalled();expect(h.location.replace).toHaveBeenCalledOnce();
 });
 it('fails closed on auth errors',async()=>{const h=await harness();h.fail();await tick();expect(h.location.replace).toHaveBeenCalledOnce();expect(h.loadModule).toHaveBeenCalledTimes(1);});
 it.each(['modules/little-star/little-star.js','modules/story-planet/story-planet.js'])('preserves the existing allowed reader %s',async reader=>{
  const h=await harness('/story-planet.html',reader);h.user({});await tick();expect(h.loadModule.mock.calls.map(c=>c[0])).toEqual(['../auth-v2/firebase-client.js','https://learnplanet.win/'+reader]);
 });
});
