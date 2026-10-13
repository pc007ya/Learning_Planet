import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {lighthouseCoverMarkup} from '../src/story/interactive/lost-lighthouse';
import quiz from '../src/story/interactive/lost-lighthouse-quiz.json';
import r1 from './fixtures/book32-r1-question-shas.json';
const sha=(s:string)=>createHash('sha256').update(s,'utf8').digest('hex');
function canonical(v:unknown):unknown{
 if(Array.isArray(v))return v.map(canonical);
 if(v!==null&&typeof v==='object')return Object.fromEntries(Object.entries(v).sort(([a],[b])=>a<b?-1:a>b?1:0).map(([k,x])=>[k,canonical(x)]));
 return v;
}
const index=readFileSync('src/story/interactive/index.ts','utf8');
function firstCoverDOM(fullImage:boolean,newBook:unknown,asset:string){
 const begin=index.indexOf("function cover(){")+'function cover(){'.length;
 const end=index.indexOf(';if(!illustrated)',begin);
 const productionPrefix=index.slice(begin,end)+';return cover;';
 const assignments:string[]=[];const requests:string[]=[];
 const node={set innerHTML(html:string){assignments.push(html);for(const m of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g))requests.push(m[1]);}};
 const flags=Object.fromEntries([...new Set(productionPrefix.match(/\bis[A-Z]\w*/g)||[])].map(key=>[key,false]));
 const env={...flags,isLighthouse:fullImage,lighthouseCoverMarkup,el:()=>node,pages:Array(20),asset,newBook};
 new Function(...Object.keys(env),productionPrefix)(...Object.values(env));
 return {assignments,requests};
}
describe('book32 R2 minimal independent-QA repairs (source/mock; no browser)',()=>{
 it('changes only8 NG questions and preserves all40 independent PASS objects',()=>{
  const current=[...quiz.A,...quiz.B,...quiz.C];const changed:string[]=[];
  for(const before of r1.questions){
   const row=current.find(q=>q.id===before.id)!;expect(row).toBeDefined();
   if(sha(JSON.stringify(canonical(row)))!==before.canonicalSHA256)changed.push(before.id.replace('book32-',''));
   if(before.independentR1PASS)expect(sha(JSON.stringify(canonical(row)))).toBe(before.canonicalSHA256);
   expect(row.answer).toEqual(before.answer);
  }
  expect(changed).toEqual(['B02','C02','C05','C06','C07','C08','C12','C14']);expect(r1.questions.filter(q=>q.independentR1PASS)).toHaveLength(40);
 });
 it('executes the production initial book32 cover assignment without any transient character or scene img',()=>{
  const dom=firstCoverDOM(true,{key:'lost-lighthouse'},'images/story/lost-lighthouse-v1/');
  expect(dom.assignments).toHaveLength(1);expect(dom.assignments[0]).toBe(lighthouseCoverMarkup());expect(dom.requests).toEqual([]);
  expect(dom.assignments[0]).not.toMatch(/standing\.png|shared-gail-v1|scene\//);
  expect(dom.assignments[0]).toContain('cover-copy');expect(dom.assignments[0]).toContain('cover-border');
 });
 it('keeps the original initial-cover image branch for other new and classic books',()=>{
  expect(firstCoverDOM(false,{key:'unicorn'},'images/story/unicorn-v1/').requests).toEqual(['images/story/unicorn-v1/../shared-gail-v1/standing.png']);
  expect(firstCoverDOM(false,undefined,'images/story/little-star-v1/').requests).toEqual(['images/story/little-star-v1/gail-paper-clean.png']);
 });
 it('keeps the integrated28/29/30 branches and protects book32 entry',()=>{
  for(const key of ['market','magic-ball','snow-before','lost-lighthouse'])expect(index).toContain(key);
  expect(index).toContain('else if(isSnowBefore)');
  const html=readFileSync('lost-lighthouse-storybook.html','utf8');expect(html).toContain('modules/story-entry.mjs');expect(html).toContain('data-story-reader');
 });
});
