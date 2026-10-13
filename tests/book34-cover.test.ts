import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {transpileModule,ScriptTarget} from 'typescript';
import {bridgeCoverMarkup,bridgeCover,bridgeBook} from '../src/story/interactive/bridge-construction';
import r1 from './fixtures/book34-cover-r1.json';
const sha=(s:string|Buffer)=>createHash('sha256').update(s).digest('hex');
const index=readFileSync('src/story/interactive/index.ts','utf8');
function firstCoverDOM(fullImage:boolean,newBook:unknown,asset:string){
 const begin=index.indexOf('function cover(){')+'function cover(){'.length;
 const end=index.indexOf(';if(!illustrated)',begin);
 const prefix=index.slice(begin,end)+';return cover;';
 const assignments:string[]=[],requests:string[]=[];
 const node={set innerHTML(html:string){assignments.push(html);for(const m of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g))requests.push(m[1]);}};
 const flags=Object.fromEntries([...new Set(prefix.match(/\bis[A-Z]\w*/g)||[])].map(key=>[key,false]));
 const env={...flags,isBridge:fullImage,bridgeCoverMarkup,el:()=>node,pages:Array(20),asset,newBook};
 new Function(...Object.keys(env),prefix)(...Object.values(env));
 return {assignments,requests};
}
describe('book34 initial cover lifecycle (production DOM assignment in mock; no browser)',()=>{
 it('never inserts a temporary Gail or scene image before selecting the formal cover',()=>{
  const dom=firstCoverDOM(true,bridgeBook(),'images/story/bridge-construction-v1/');
  expect(dom.assignments).toEqual([bridgeCoverMarkup()]);expect(dom.requests).toEqual([]);
  expect(dom.assignments[0]).not.toMatch(/<img\b|standing\.png|shared-gail-v1|scene\//);
  expect(dom.assignments[0]).toContain('cover-copy');expect(dom.assignments[0]).toContain('cover-border');
  const start=index.indexOf("if(newBook){cover.querySelector('.eyebrow')");
  const end=index.indexOf('front.replaceChildren();',start);
  const productionCover=transpileModule(index.slice(start,end)+'}',{compilerOptions:{target:ScriptTarget.ES2022}}).outputText;
  const backgrounds:string[]=[];
  const front={style:{set backgroundImage(value:string){backgrounds.push(value);}}};
  const node={textContent:'',style:{}};
  const coverFlags=Object.fromEntries([...new Set(productionCover.match(/\bis[A-Z]\w*/g)||[])].map(key=>[key,false]));
  const coverEnv={...coverFlags,cover:{querySelector:(s:string)=>s==='.cover-border'?front:node},newBook:bridgeBook(),pages:bridgeBook().pages('B'),selectedBookCover:bridgeCover(),asset:'images/story/'+bridgeBook().key+'-v1/'};
  new Function(...Object.keys(coverEnv),productionCover)(...Object.values(coverEnv));
  expect(backgrounds).toEqual(['url(images/story/bridge-construction-v1/cover.webp)']);
 });
 it('preserves the existing initial image branches for other new and classic books',()=>{
  expect(firstCoverDOM(false,{key:'unicorn'},'images/story/unicorn-v1/').requests).toEqual(['images/story/unicorn-v1/../shared-gail-v1/standing.png']);
  expect(firstCoverDOM(false,undefined,'images/story/little-star-v1/').requests).toEqual(['images/story/little-star-v1/gail-paper-clean.png']);
 });
 it('keeps prior reader branches and selects this cover before the preserved legacy template',()=>{
  for(const key of ['market','magic-ball','snow-before','lost-lighthouse','mixed-up-museum'])expect(index).toContain(key);
  expect(index).toContain('isBridge?bridgeCoverMarkup():');
 });
 it('keeps original ABC, core words and all21 images byte-for-byte',()=>{
  for(const f of r1.unchangedFiles.filter(f=>!f.path.endsWith('bridge-construction-quiz.json')))expect(sha(readFileSync(f.path))).toBe(f.sha256);
 });
});
