import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import quiz from '../src/story/interactive/little-robot-quiz.json';
import content from '../src/story/interactive/little-robot-content.json';
import original from './fixtures/book35-original.json';
import r2 from './fixtures/book35-r3-baseline.json';
function canonical(value:unknown):unknown{
 if(Array.isArray(value))return value.map(canonical);
 if(value!==null&&typeof value==='object')return Object.fromEntries(Object.entries(value).sort(([a],[b])=>a<b?-1:a>b?1:0).map(([k,v])=>[k,canonical(v)]));
 return value;
}
const sha=(value:string|Buffer)=>createHash('sha256').update(value).digest('hex');
describe('book35 R3 targeted repairs (independent R2 baseline; no browser)',()=>{
 it('changes only two NG prompt pairs and preserves all46 independently PASS question objects and SHAs',()=>{
  const current=[...quiz.A,...quiz.B,...quiz.C];const changed:string[]=[];
  for(const before of r2.independentBaseline.questions){
   const after=current.find(q=>q.id===before.id)!;expect(after).toBeDefined();
   if(before.independentR2PASS){expect(after).toEqual(before.question);expect(sha(JSON.stringify(canonical(after)))).toBe(before.canonicalSHA256);}
   else{changed.push(before.id);const {prompt:_p,chinesePrompt:_z,...rest}=after;const {prompt:_bp,chinesePrompt:_bz,...oldRest}=before.question;expect(rest).toEqual(oldRest);}
  }
  expect(changed).toEqual(['book35-A06','book35-A11']);expect(r2.independentBaseline.questions.filter(q=>q.independentR2PASS)).toHaveLength(46);
  expect(quiz.A[5].prompt).toBe("What number ends the robot's self-check?");expect(quiz.A[5].chinesePrompt).toContain('完成自我檢查');
  expect(quiz.A[10].prompt).toBe('In Scene 13, what is ready before the test?');expect(quiz.A[10].chinesePrompt).toContain('第13幕測試之前');
  expect([quiz.A[5].prompt,quiz.A[10].prompt].join(' ')).not.toMatch(/here|this page/);
 });
 it('rewrites only B Scene03 to match the floor/path lanterns while preserving formal C and the original fixture',()=>{
  for(const level of ['A','B','C'] as const)for(let i=0;i<20;i++){
   const english=level==='B'&&i===2?r2.b03Correction.afterEnglish:original.levels[level].english[i];
   const chinese=level==='B'&&i===2?r2.b03Correction.afterChinese:original.levels[level].chinese[i];
   expect(content.levels[level].pages[i].lines).toEqual(english);expect(content.levels[level].chinese[i]).toEqual(chinese);expect(content.levels[level].pages[i].translation).toBe(chinese.join(' '));
  }
  expect(original.levels.B.english[2]).toEqual(r2.b03Correction.beforeEnglish);expect(original.levels.B.chinese[2]).toEqual(r2.b03Correction.beforeChinese);
  expect(content.words).toEqual(original.words);expect(content.extensionWords).toEqual(original.extensionWords);expect(content.extensionNote).toBe(original.extensionNote);
 });
 it('keeps the R2 cover guard, full-image renderer, effects, CSS and shell byte-for-byte',()=>{
  for(const f of r2.r2CoverFileSHAs.filter(f=>!['src/story/interactive/index.ts','little-robot-storybook.html'].includes(f.path)))expect(sha(readFileSync(f.path))).toBe(f.sha256);
 });
});
