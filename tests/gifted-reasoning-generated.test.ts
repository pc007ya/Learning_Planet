import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
// @ts-ignore Native browser module
import {reasoningQuestions} from '../modules/gifted-exam/reasoning-generated.mjs';
// @ts-ignore Native browser module
import {startAttempt,attemptQuestions,choose,navigate,finish,analyze,validAttempt,readHistory,writeHistory} from '../modules/gifted-exam/model.mjs';
// @ts-ignore Native browser module
import {visualMarkup} from '../modules/gifted-exam/visuals.mjs';
// @ts-ignore Native browser module
import '../modules/gifted-exam/readings.mjs';
// @ts-ignore Native browser module
import {readingTokens} from '../modules/math-foundations/zhuyin.mjs';
const bank=JSON.parse(readFileSync('modules/gifted-exam/bank.json','utf8')),forms=bank.forms.filter((f:any)=>f.generator==='reasoning'),now=1700000000000;
const perms=(a:string[]):string[][]=>a.length===1?[a]:a.flatMap((v,i)=>perms(a.filter((_,j)=>i!==j)).map(rest=>[v,...rest]));
const distributions=(k:number,m:number):number[][]=>k===0?[[]]:Array.from({length:m+1},(_,i)=>distributions(k-1,m).map(rest=>[i,...rest])).flat();
describe('automatic original mock exams',()=>{
 it('generates every original family with unique verified answers and matching diagrams across 3072 questions',()=>{
  const relations=new Set<number>();
  for(const form of forms){
   expect(form.source).toBe('generated');expect(reasoningQuestions(10,form.id)).toEqual(reasoningQuestions(10,form.id));expect(reasoningQuestions(10,form.id)).not.toEqual(reasoningQuestions(11,form.id));
   const variety=Array.from({length:16},()=>new Set<string>());
   for(let seed=0;seed<64;seed++){
    const qs=reasoningQuestions(seed,form.id);expect(qs).toHaveLength(16);expect(new Set(qs.map((q:any)=>q.id)).size).toBe(16);
    expect(qs.map((q:any)=>q.category)).toEqual(['patterns','patterns','patterns','patterns','space','space','space','space','logic','logic','logic','logic','reading','reading','reading','reading']);
    for(const [i,q] of qs.entries()){
     const p=q.parameters,v=q.visual;let expected:string|number;
     if(q.family==='sequence'){const d=p.values.slice(1).map((n:number,j:number)=>n-p.values[j]);expect(d).toEqual(d.map((_:number,j:number)=>p.delta+(p.growing?j:0)));expected=p.values[4]+d[3]+(p.growing?1:0);}
     else if(q.family==='alternating'){for(let j=1;j<p.values.length;j++)expect(p.values[j]).toBe(j%2===1?p.values[j-1]+p.a:p.multiply?p.values[j-1]*p.b:p.values[j-1]+p.b);expected=p.values[4]+p.a;}
     else if(q.family==='group-remove'){expected=Array.from({length:p.groups},()=>p.count).reduce((a:number,b:number)=>a+b,0)-p.remove;expect(v).toMatchObject({groups:p.groups,count:p.count,asset:p.asset});expect(visualMarkup(v).match(/<image /g)).toHaveLength(p.groups*p.count);expect(visualMarkup(v)).toContain(p.asset==='apple'?'apple-red-object-v1.png':'star-v1.png');}
     else if(q.family==='transport'){let cars=0,seats=0;while(seats<p.people){cars++;seats+=p.capacity;}expected=cars;}
     else if(q.family==='columns'||q.family==='full-solid'){expected=v.cubes.length;expect(Math.max(...Object.values(v.dimensions) as number[])).toBeLessThanOrEqual(5);expect(new Set(v.cubes.map((c:any)=>c.id)).size).toBe(v.cubes.length);for(const c of v.cubes){expect(c.x).toBeLessThan(v.dimensions.l);expect(c.y).toBeLessThan(v.dimensions.h);expect(c.z).toBeLessThan(v.dimensions.w);if(c.y>0)expect(v.cubes.some((b:any)=>b.x===c.x&&b.z===c.z&&b.y===c.y-1)).toBe(true);}if(q.family==='columns')expect(v.cubes.map((c:any)=>c.z)).toEqual(v.cubes.map(()=>0));else expect(v.cubes).toHaveLength(p.l*p.w*p.h);}
     else if(q.family==='rotation'){const right:Record<string,string>={'↑':'→','→':'↓','↓':'←','←':'↑'},left:Record<string,string>={'↑':'←','←':'↓','↓':'→','→':'↑'};expected=(p.direction===1?right:left)[v.values[v.values.length-2]];}
     else if(q.family==='mirror')expected=({'↗':'↖','↖':'↗','↘':'↙','↙':'↘'} as Record<string,string>)[p.arrow];
     else if(q.family==='height-order')expected=p.names[p.highest?0:2];
     else if(q.family==='card-order'){const [x,y,z]=p.colors,solutions=perms(p.colors).filter(o=>p.chain?o.indexOf(x)<o.indexOf(y)&&o.indexOf(y)<o.indexOf(z):o.indexOf(x)!==1&&o.indexOf(y)>o.indexOf(x)&&o.indexOf(z)!==2);expect(solutions).toHaveLength(1);expected=solutions[0].join('、');}
     else if(q.family==='balance'){expected=Array.from({length:p.apples},()=>p.weight).reduce((a:number,b:number)=>a+b,0);expect(visualMarkup(v).match(/apple-red-object-v1.png/g)).toHaveLength(p.apples);}
     else if(q.family==='guarantee'){const all=distributions(p.colors.length,p.target),without=all.filter(d=>d.every(n=>n<p.target)),worst=Math.max(...without.map(d=>d.reduce((a,b)=>a+b,0)));expected=worst+1;expect(all.filter(d=>d.reduce((a,b)=>a+b,0)===expected).every(d=>d.some(n=>n>=p.target))).toBe(true);}
     else if(q.family==='analogy'){relations.add(p.relationIndex);const meanings:Record<string,string>={'魚：鳥：天空':'水中','船：汽車：陸地':'水上','鞋子：手套：手':'腳','鞋子：帽子：頭':'腳','魚：鳥：翅膀':'魚鰭','耳朵：眼睛：看':'聽','剪刀：鉛筆：寫字':'剪紙','月亮：太陽：白天':'夜晚','一天：一週：七天':'二十四小時','三角形：正方形：四個邊':'三個邊'};expected=meanings[`${v.other}：${v.subject}：${v.feature}`];expect(expected).toBeTruthy();}
     else if(q.family==='rule'){const violations=q.options.filter((s:string)=>{const [shape,color]=s.split('／');return shape===p.shape&&color!==p.color+'色';});expect(violations).toHaveLength(1);expected=violations[0];}
     else if(q.family==='comparison')expected=p.large-p.difference;
     else {expect(q.family).toBe('irrelevant');expect(p.chairs).toBeGreaterThanOrEqual(p.tables*p.perTable);expected=p.tables*p.perTable*p.perPerson;expect(visualMarkup(v).match(/<circle /g)).toHaveLength(p.tables*p.perTable);}
     expect(q.options[q.correct],q.id).toBe(String(expected));expect(new Set(q.options).size).toBe(4);variety[i].add(JSON.stringify([q.stem,q.visual,q.options]));
     const strings=q.stem+q.explain+q.check+q.options.join('');expect(readingTokens(strings).filter((t:any)=>/[\u4e00-\u9fff]/.test(t.char)&&!t.reading),q.id).toEqual([]);
     if(v){expect(visualMarkup(v)).not.toMatch(/undefined|NaN/);expect(readingTokens([...visualMarkup(v).matchAll(/<text[^>]*>(.*?)<\/text>/g)].map(m=>m[1]).join('')).filter((t:any)=>/[\u4e00-\u9fff]/.test(t.char)&&!t.reading)).toEqual([]);}
    }
   }
   for(const changes of variety)expect(changes.size).toBeGreaterThan(1);
  }
  expect(relations.size).toBe(10);
 });
 it('resumes generated A/B/C without changing questions or keys and preserves all older fixed records',()=>{
  const entries=new Map<string,string>(),storage={getItem:(k:string)=>entries.get(k),setItem:(k:string,v:string)=>entries.set(k,v)};
  for(const form of forms){const a=startAttempt(form,now,form.id,77),qs=attemptQuestions(a,bank);writeHistory(storage,'learner',{active:a,history:[]});const resumed=readHistory(storage,'learner',bank).active;expect(attemptQuestions(resumed,bank)).toEqual(qs);expect(resumed.deadline).toBe(a.deadline);
   for(const [i,q] of qs.entries()){navigate(resumed,i,now+1000);choose(resumed,q.correct,now+1000);}finish(resumed,now+2000);expect(analyze(resumed,bank)).toMatchObject({correct:16,wrong:0,skipped:0,score:100});
   expect(validAttempt({...a,seed:NaN},bank)).toBe(false);expect(validAttempt({...a,generatedVersion:2},bank)).toBe(false);expect(validAttempt({...a,seed:undefined},bank)).toBe(false);
   const legacy=startAttempt({...form,source:'original'},now,'legacy-'+form.id),oldQs=form.questionIds.map((id:string)=>bank.questions.find((q:any)=>q.id===id));expect(validAttempt(legacy,bank)).toBe(true);expect(attemptQuestions(legacy,bank)).toEqual(oldQs);oldQs.forEach((q:any,i:number)=>{navigate(legacy,i,now+1000);choose(legacy,q.correct,now+1000);});finish(legacy,now+2000);writeHistory(storage,'learner',{active:null,history:[legacy,resumed]});const history=readHistory(storage,'learner',bank).history;expect(history).toHaveLength(2);expect(analyze(history[0],bank).correct).toBe(16);expect(analyze(history[1],bank).correct).toBe(16);
  }
  const historyForm=bank.forms.find((f:any)=>f.source==='history115'),historical=startAttempt(historyForm,now,'history',88);expect(historical).not.toHaveProperty('seed');expect(attemptQuestions(historical,bank).map((q:any)=>q.correct+1)).toEqual([2,1,3,1,4,3,4,4,2,3,3,1,3,4,4,1,3,1,1,2,2,2,3,2,4]);
 });
});
