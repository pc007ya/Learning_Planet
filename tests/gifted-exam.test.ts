import { describe,it,expect } from 'vitest';
import { readFileSync } from 'node:fs';
// @ts-ignore Native browser module
import { startAttempt, remaining, choose, navigate, finish, analyze, validAttempt, storageKey, readHistory, writeHistory, attemptQuestions } from '../modules/gifted-exam/model.mjs';
// @ts-ignore Reviewed subject readings
import '../modules/gifted-exam/readings.mjs';
// @ts-ignore Native browser module
import { readingTokens } from '../modules/math-foundations/zhuyin.mjs';
const bank=JSON.parse(readFileSync('modules/gifted-exam/bank.json','utf8')),form=bank.forms[0],now=1700000000000;
describe('mock exam',()=>{
 it('keeps official historical key, unique IDs, readable choices and complete original forms',()=>{
  expect(bank.questions).toHaveLength(73);expect(new Set(bank.questions.map((q:any)=>q.id)).size).toBe(73);
  expect(bank.questions.filter((q:any)=>q.source==='history115').map((q:any)=>q.correct+1)).toEqual([2,1,3,1,4,3,4,4,2,3,3,1,3,4,4,1,3,1,1,2,2,2,3,2,4]);
  for(const f of bank.forms){expect(new Set(f.questionIds).size).toBe(f.questionIds.length);for(const id of f.questionIds)expect(bank.questions.some((q:any)=>q.id===id)).toBe(true);}
  for(const c of Object.values(bank.categories) as any[])expect(readingTokens(c.title+c.practice).filter((t:any)=>/[\u4e00-\u9fff]/.test(t.char)&&!t.reading)).toEqual([]);
  for(const q of bank.questions){expect(new Set(q.options).size,q.id).toBe(4);expect(q.explain.length).toBeGreaterThan(10);expect(bank.categories[q.category]).toBeTruthy();const chars=[q.stem,q.explain,q.check,...q.options].join('');expect(readingTokens(chars).filter((t:any)=>/[\u4e00-\u9fff]/.test(t.char)&&!t.reading),q.id).toEqual([]);}
 });
 it('withholds analysis until submission and separates wrong from unanswered',()=>{
  const a=startAttempt(form,now);const first=attemptQuestions(a,bank)[0];
  expect(()=>analyze(a,bank)).toThrow();expect(choose(a,first.correct,now+10000)).toBe(true);
  navigate(a,1,now+20000);const second=attemptQuestions(a,bank)[1];choose(a,(second.correct+1)%4,now+30000);finish(a,now+40000);
  const report=analyze(a,bank);expect(report).toMatchObject({correct:1,wrong:1,skipped:14,total:16,score:6,seconds:40});expect(report.rows[0].seconds).toBe(20);expect(report.rows[1].seconds).toBe(20);expect(report.categories.reduce((n:number,c:any)=>n+c.total,0)).toBe(16);
  expect(choose(a,0,now+41000)).toBe(false);expect(navigate(a,2,now+41000)).toBe(false);
 });
 it('retains an absolute deadline through resume and finishes elapsed attempts once',()=>{
  const a=startAttempt(form,now);expect(remaining(a,now+60000)).toBe(24*60);expect(choose(a,0,a.deadline)).toBe(false);finish(a,a.deadline+10000);const snapshot=JSON.stringify(a);finish(a,a.deadline+20000);expect(JSON.stringify(a)).toBe(snapshot);expect(analyze(a,bank).seconds).toBe(25*60);expect(validAttempt(a,bank)).toBe(true);
 });
 it('isolates learners, survives broken storage and rejects malformed drafts',()=>{
  const map=new Map<string,string>(),storage={getItem:(key:string)=>map.get(key),setItem:(key:string,value:string)=>map.set(key,value)};const a=startAttempt(form,now);
  expect(writeHistory(storage,'A',{active:a,history:[]})).toBe(true);expect(readHistory(storage,'B',bank).active).toBeNull();expect(readHistory(storage,'A',bank).active.deadline).toBe(a.deadline);expect(storageKey('A')).not.toBe(storageKey('B'));
  const bad={...a,deadline:a.deadline+1};expect(validAttempt(bad,bank)).toBe(false);expect(validAttempt({...a,seconds:[]},bank)).toBe(false);expect(validAttempt({...a,answers:a.answers.map(()=>9)},bank)).toBe(false);
  expect(writeHistory({setItem(){throw Error('quota');}},'A',{active:a,history:[]})).toBe(false);map.set(storageKey('A'),'{bad');expect(readHistory(storage,'A',bank)).toEqual({active:null,history:[]});
 });
 it('preserves the standard weekly reward and assessment implementation',()=>{
  const source=readFileSync('index.html','utf8');expect(source).toContain('weeklyMode: "weekly"');expect(source).toContain('this.startWeeklyExam()');expect(source).toContain('learning-planet.weekly-exam-config.v1');expect(source).toContain('React.createElement("lp-mock-exam"');expect(readFileSync('modules/gifted-exam/app.mjs','utf8')).not.toContain('saveWeeklyResult');
 });
});
