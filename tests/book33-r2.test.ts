import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {museumCoverMarkup} from '../src/story/interactive/mixed-up-museum';
import quiz from '../src/story/interactive/mixed-up-museum-quiz.json';
import r1 from './fixtures/book33-r1-question-shas.json';
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
 const execute=new Function('el','isMuseum','museumCoverMarkup','pages','asset','newBook','isRed','isSnowBefore','isLighthouse','lighthouseCoverMarkup',productionPrefix);
 execute(()=>node,fullImage,museumCoverMarkup,Array(20),asset,newBook,false,false,false,()=>null);
 return {assignments,requests};
}
describe('book33 R2 minimal independent-QA repairs (source/mock; no browser)',()=>{
 it('changes only5 NG questions and preserves all43 independent PASS objects',()=>{
  const current=[...quiz.A,...quiz.B,...quiz.C];const changed:string[]=[];
  for(const before of r1.questions){
   const row=current.find(q=>q.id===before.id)!;expect(row).toBeDefined();
   if(sha(JSON.stringify(canonical(row)))!==before.canonicalSHA256)changed.push(before.id.replace('book33-',''));
   if(before.independentR1PASS)expect(sha(JSON.stringify(canonical(row)))).toBe(before.canonicalSHA256);
   expect(row.answer).toEqual(before.answer);
  }
  expect(changed).toEqual(['A03','A05','A09','A13','A15']);expect(r1.questions.filter(q=>q.independentR1PASS)).toHaveLength(43);
 });
 it('executes the production initial book33 cover assignment without any transient character or scene img',()=>{
  const dom=firstCoverDOM(true,{key:'mixed-up-museum'},'images/story/mixed-up-museum-v1/');
  expect(dom.assignments).toHaveLength(1);expect(dom.assignments[0]).toBe(museumCoverMarkup());expect(dom.requests).toEqual([]);
  expect(dom.assignments[0]).not.toMatch(/standing\.png|shared-gail-v1|scene\//);
  expect(dom.assignments[0]).toContain('cover-copy');expect(dom.assignments[0]).toContain('cover-border');
 });
 it('keeps the original initial-cover image branch for other new and classic books',()=>{
  expect(firstCoverDOM(false,{key:'unicorn'},'images/story/unicorn-v1/').requests).toEqual(['images/story/unicorn-v1/../shared-gail-v1/standing.png']);
  expect(firstCoverDOM(false,undefined,'images/story/little-star-v1/').requests).toEqual(['images/story/little-star-v1/gail-paper-clean.png']);
 });
 it('preserves current reader branches and protects book33 entry',()=>{
  for(const key of ['market','magic-ball','snow-before','lost-lighthouse','mixed-up-museum'])expect(index).toContain(key);
  expect(index).toContain('else if(isLighthouse)');
  const html=readFileSync('mixed-up-museum-storybook.html','utf8');expect(html).toContain('modules/story-entry.mjs');expect(html).toContain('data-story-reader');
 });
});
