'use strict';
const {readFileSync}=require('node:fs');
const {stripTypeScriptTypes}=require('node:module');
const {runInNewContext}=require('node:vm');
const {resolve}=require('node:path');
const assert=require('node:assert/strict'),test=require('node:test');
const dir=process.argv[2]||resolve(__dirname,'../..');
const source=readFileSync(resolve(dir,'src/story/cover-request.ts'),'utf8');
const built=readFileSync(resolve(dir,'modules/story-planet/story-planet.js'),'utf8');
const expectedPrefix='https://pc007ya.github.io/Learning_Planet_Assets/images/story/';
const startAt=built.indexOf('.startsWith("'+expectedPrefix+'")');
assert.ok(startAt>0,'built CORS branch');
const before=built.lastIndexOf('\nfunction ',startAt);
const end=built.indexOf('\n}',startAt);
const builtLoader=built.slice(before,end+2);
const loaderName=builtLoader.match(/^\nfunction (\w+)\(/)[1];
function getLoader(kind){
 const allocations=[];
 class FakeImage{
  set crossOrigin(value){(this.ops??=[]).push(['crossOrigin',value]);}
  set src(value){(this.ops??=[]).push(['src',value]);}
  removeAttribute(name){(this.ops??=[]).push(['removeAttribute',name]);}
  constructor(){allocations.push(this);}
 }
 const syntax=kind==='source'?
   stripTypeScriptTypes(source).replace('export function','function')+'\ncreateDeferredCover;':
   builtLoader+'\n'+loaderName+';';
 return [runInNewContext(syntax,{Image:FakeImage}),allocations];
}
for(const kind of ['source','production bundle']){
 test(kind+' requests readable anonymous CORS before starting external image network load',()=>{
  const [make,images]=getLoader(kind), url=expectedPrefix+'test.webp', calls=[];
  const load=make(url,{start:()=>calls.push('start'),loaded:image=>calls.push(image),failed:()=>calls.push('failed')});
  assert.equal(images.length,0,'no prefetch');
  load.load();load.load();
  assert.equal(images.length,1);
  assert.deepEqual(images[0].ops,[['crossOrigin','anonymous'],['src',url]]);
  images[0].onload();assert.deepEqual(calls,['start',images[0]]);
 });
 test(kind+' leaves same-origin and unrelated images untouched, cancels pending load',()=>{
  for(const url of ['images/story/test.webp','https://learnplanet.win/images/story/test.webp','https://pc007ya.github.io/Learning_Planet_Assets/images/science/test.webp','https://example.com/Learning_Planet_Assets/images/story/test.webp']){
   const [make,images]=getLoader(kind);
   const load=make(url,{loaded(){throw new Error('stale load')}});load.load();const stale=images[0].onload;load.cancel();stale();
   assert.deepEqual(images[0].ops,[['src',url],['removeAttribute','src']]);
  }
 });
}
