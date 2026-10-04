import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
// @ts-ignore Native browser modules
import {generatedQuestions,generatedForm} from '../modules/gifted-exam/generated.mjs';
// @ts-ignore Native browser modules
import {startAttempt,attemptQuestions,choose,navigate,finish,analyze,validAttempt,readHistory,writeHistory} from '../modules/gifted-exam/model.mjs';
// @ts-ignore Native browser modules
import {visualMarkup} from '../modules/gifted-exam/visuals.mjs';
// @ts-ignore Reviewed readings
import '../modules/gifted-exam/readings.mjs';
// @ts-ignore Reviewed readings
import {readingTokens} from '../modules/math-foundations/zhuyin.mjs';
const bank=JSON.parse(readFileSync('modules/gifted-exam/bank.json','utf8'));bank.forms.push(generatedForm);
const edgeCount=(cells:number[][])=>{const edges=new Map<string,number>();for(const [x,y] of cells)for(const [a,b] of [[[x,y],[x+1,y]],[[x+1,y],[x+1,y+1]],[[x+1,y+1],[x,y+1]],[[x,y+1],[x,y]]]){const key=[a.join(','),b.join(',')].sort().join(':');edges.set(key,(edges.get(key)||0)+1);}return [...edges.values()].filter(n=>n===1).length;};
describe('generated visual reasoning',()=>{
 it('generates deterministic varied questions with independently checked cube counts, area and boundary lengths',()=>{
  expect(generatedQuestions(123)).toEqual(generatedQuestions(123));expect(generatedQuestions(123)).not.toEqual(generatedQuestions(124));
  for(let seed=0;seed<64;seed++)for(const [i,q] of generatedQuestions(seed).entries()){
   const v=q.visual;let expected:number;
   if(i<8){const {l,w,h}=v.dimensions;expect(Math.max(l,w,h)).toBeLessThanOrEqual(5);expect(new Set(v.cubes.map((c:any)=>c.id)).size).toBe(v.cubes.length);for(const c of v.cubes){expect(c.x).toBeLessThan(l);expect(c.y).toBeLessThan(h);expect(c.z).toBeLessThan(w);if(c.y>0)expect(v.cubes.some((b:any)=>b.x===c.x&&b.z===c.z&&b.y===c.y-1)).toBe(true);}expected=i<4?v.cubes.length:l*w*h-v.cubes.length;}
   else if(i<12)expected=v.cells.length;
   else {expect(v.a.length).toBe(v.b.length);expected=Math.abs(edgeCount(v.a)-edgeCount(v.b));const markup=visualMarkup(v);const sizes=[...markup.matchAll(/width="([\d.]+)" height="([\d.]+)" fill="#66d1c9"/g)].map(m=>m[1]);expect(new Set(sizes).size).toBe(1);}
   expect(Number(q.options[q.correct])).toBe(expected);expect(new Set(q.options).size).toBe(4);expect(readingTokens(q.stem+q.explain+q.check).filter((t:any)=>/[\u4e00-\u9fff]/.test(t.char)&&!t.reading)).toEqual([]);
  }
 });
 it('keeps a generated attempt unchanged through storage, resumes it and scores the same geometry',()=>{
  const now=1700000000000,a=startAttempt(generatedForm,now,'saved',123);const data=new Map<string,string>(),storage={getItem:(k:string)=>data.get(k),setItem:(k:string,v:string)=>data.set(k,v)};
  expect(validAttempt(a,bank)).toBe(true);expect(validAttempt({...a,seed:-1},bank)).toBe(false);expect(validAttempt({...a,generatedVersion:2},bank)).toBe(false);
  writeHistory(storage,'student',{active:a,history:[]});const resumed=readHistory(storage,'student',bank).active;expect(attemptQuestions(resumed,bank)).toEqual(generatedQuestions(123));expect(resumed.deadline).toBe(a.deadline);
  for(const [i,q] of attemptQuestions(resumed,bank).entries()){navigate(resumed,i,now+1000+i*1000);choose(resumed,q.correct,now+1500+i*1000);}finish(resumed,now+20000);expect(analyze(resumed,bank)).toMatchObject({score:100,correct:16,wrong:0,skipped:0});
 });
});
