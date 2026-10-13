import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {potionBook} from '../src/story/interactive/magic-potion';
import original from './fixtures/book36-original.json';
const current=JSON.parse(readFileSync('src/story/interactive/magic-potion-quiz.json','utf8'));
const baseline=JSON.parse(readFileSync('tests/fixtures/book36-r2-baseline.json','utf8'));
const all=(['A','B','C'] as const).flatMap(l=>current[l]);
const originals=[...baseline.passQuestions,...baseline.NGQuestions];
const oldById=new Map(originals.map(q=>[q.id,q]));
const byId=new Map(all.map(q=>[q.id,q]));
const repaired=['book36-A08','book36-B10','book36-C02','book36-C09','book36-C12','book36-C13','book36-C16'];
const changedFields=(a:any,b:any)=>Object.keys(a).filter(k=>JSON.stringify(a[k])!==JSON.stringify(b[k]));
describe('book36 R2 independent QA scope and evidence regressions',()=>{
 it('changes exactly the7 independent NG objects and preserves all41 PASS whole objects',()=>{
  expect(all.filter(q=>changedFields(q,oldById.get(q.id)).length).map(q=>q.id)).toEqual(repaired);
  for(const q of baseline.passQuestions)expect(byId.get(q.id)).toEqual(q);
  const kept=baseline.passQuestions.map((q:{id:string})=>byId.get(q.id));
  expect(createHash('sha256').update(JSON.stringify(kept)).digest('hex')).toBe('8b307417b43f7da6ad0ba48fd0a2a2bb71e7b704edb236c8e8ad22319d691a14');
 });
 it('preserves every48 ID and answer position in the independent snapshot',()=>{
  expect(all.map(q=>({id:q.id,answer:q.answer}))).toEqual(baseline.allAnswers);
  expect(all).toHaveLength(48);expect(new Set(all.map(q=>q.id)).size).toBe(48);
 });
 it('fixes A08 leaf/time scope and B10 next action using only English/Chinese prompts',()=>{
  for(const id of ['book36-A08','book36-B10'])expect(changedFields(byId.get(id),oldById.get(id))).toEqual(['prompt','chinesePrompt']);
  const a=byId.get('book36-A08'),b=byId.get('book36-B10');
  expect(a.prompt).toContain('look-alike leaf is not checked yet');expect(a.chinesePrompt).toContain('還沒確認');
  expect(b.prompt).toContain('next after');expect(b.chinesePrompt).toContain('緊接著');
 });
 it('keeps the five new C conditions visible before answering and preserves their exact story evidence',()=>{
  const conditions={
   'book36-C02':['magic ball','moonmint stays folded','same way'],
   'book36-C09':['ordinary fountain water','instead of catching','establish'],
   'book36-C12':['fresh vial','without measuring','Which judgment'],
   'book36-C13':['Trial1','Trial2','Neither result has been checked'],
   'book36-C16':['a report','omits','establish']
  };
  for(const [id,phrases] of Object.entries(conditions)){
   const q=byId.get(id);for(const phrase of phrases)expect(q.prompt).toContain(phrase);
   for(const e of q.evidence){expect(e.quote).toBe(original.levels.C.english[e.scene-1].join(' '));expect(e.chinese).toBe(original.levels.C.chinese[e.scene-1].join(' '));expect(q.explanation).toContain(e.quote);expect(q.explanation).toContain(e.chinese);}
   expect(q.explanation).not.toBe((oldById.get(id) as any).explanation);
  }
 });
 it('returns the repaired prompts/options/explanations from the actual book adapter',()=>{
  for(const l of ['A','B','C'] as const){
   const questions=potionBook().questions(l);
   current[l].forEach((q:any,i:number)=>{expect(questions[i].prompt).toBe(q.prompt);expect(questions[i].options).toEqual(q.options);expect(questions[i].explanation).toBe(q.explanation);expect(questions[i].answer).toEqual(q.answer);});
  }
 });
});
