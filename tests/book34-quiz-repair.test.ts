import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import quiz from '../src/story/interactive/bridge-construction-quiz.json';
import snapshot from './fixtures/book34-quiz-r2.json';
const sha=(s:string|Buffer)=>createHash('sha256').update(s).digest('hex');
const flatten=(q:typeof quiz)=>Object.values(q).flat();
const current=flatten(quiz);
const byId=new Map(current.map(q=>[q.id,q]));
const before=Object.values(snapshot.beforeQuestions).flat();
describe('book34 R3 targeted quiz repairs (regression contracts; not independent content approval)',()=>{
 it('preserves the33 independently passed full objects and compact QA snapshot SHA',()=>{
  const passed=snapshot.passQuestions.map(q=>byId.get(q.id));
  expect(passed).toEqual(snapshot.passQuestions);
  expect(sha(JSON.stringify(passed))).toBe(snapshot.passSnapshotCompactSHA256);
 });
 it('changes exactly the15 independent NG and preserves all48 IDs and answer positions',()=>{
  const changed=before.filter(q=>JSON.stringify(byId.get(q.id))!==JSON.stringify(q)).map(q=>q.id.replace('book34-',''));
  expect(changed).toEqual(snapshot.NG);
  for(const old of before){expect(byId.get(old.id)?.id).toBe(old.id);expect(byId.get(old.id)?.answer).toEqual(old.answer);}
 });
 it('puts the A scene and B next-action restrictions into the visible prompts',()=>{
  const patterns:Record<string,RegExp>={A02:/through the ruler’s light/,A03:/first sees the bridge/,A05:/builders stop to check/,A11:/model plank bends.*under/,A15:/bridge is ready.*next/,B11:/happens next after/};
  for(const [track,scope] of Object.entries(patterns)){
   const q=byId.get('book34-'+track)!;expect(q.prompt).toMatch(scope);
   const old=before.find(o=>o.id===q.id)!;
   expect({...q,prompt:old.prompt,chinesePrompt:old.chinesePrompt}).toEqual(old);
  }
  expect(byId.get('book34-B11')!.chinesePrompt).toContain('緊接著');
 });
 it('keeps every protected R2 file, including the cover fix, ABC and21 images unchanged',()=>{
  for(const f of snapshot.protectedR2Files.filter(f=>f.path.startsWith('src/story/interactive/bridge-construction')||f.path.startsWith('images/story/bridge-construction-v1/')||f.path.startsWith('tests/fixtures/book34')))expect(sha(readFileSync(f.path)),f.path).toBe(f.sha256);
 });
});
