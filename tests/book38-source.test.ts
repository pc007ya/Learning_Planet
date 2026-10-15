import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {scienceBook,scienceFromPath,scienceReadingTargets} from '../src/story/interactive/science-homework';
import quiz from '../src/story/interactive/science-homework-quiz.json';
import original from './fixtures/book38-original.json';
const book=scienceBook();
describe('book38 ABC and independent 48-question evidence tracks',()=>{
 it('preserves formal C and all authored AB English and Chinese pages exactly',()=>{
  for(const level of ['A','B','C'] as const){
   const english=original.levels[level].english.map(lines=>[...lines]);
   expect(book.pages(level)).toHaveLength(20);expect(book.pages(level).map(p=>p.lines)).toEqual(english);
   expect(book.pages(level).map((_,i)=>book.chinese(i,level))).toEqual(original.levels[level].chinese);
   book.pages(level).forEach((p,i)=>expect(p.translation).toBe(book.chinese(i,level).join(' ')));
  }
  expect(book.words).toEqual(original.words);expect(book.entries.map(e=>e[0])).toEqual(original.words);
  expect(scienceReadingTargets.A).not.toMatch(/L\b|BR/);expect(scienceReadingTargets.B).toContain('設計目標');
 });
 it('routes only the new book and preserves distinct ABC text on every page',()=>{
  expect(scienceFromPath('/science-homework-storybook.html')).toBe(true);expect(scienceFromPath('/snow-before-storybook.html')).toBe(false);
  for(let page=0;page<20;page++)expect(new Set((['A','B','C'] as const).map(l=>book.pages(l)[page].lines.join(' '))).size).toBe(3);
 });
 it('has16 independently phrased questions per level with single valid answers',()=>{
  const prompts:string[]=[],optionSets:string[]=[],ids:string[]=[];
  for(const level of ['A','B','C'] as const){
   expect(quiz[level]).toHaveLength(16);expect(book.questions(level)).toHaveLength(16);
   const answerPositions=[0,0,0,0];
   quiz[level].forEach(q=>{expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text)).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.answer[0]).toBeGreaterThanOrEqual(0);expect(q.answer[0]).toBeLessThan(4);answerPositions[q.answer[0]]++;prompts.push(q.prompt);optionSets.push(JSON.stringify(q.options));ids.push(q.id);expect(q.explanation.length).toBeGreaterThan(70);expect(q.chinesePrompt.length).toBeGreaterThan(3);});
   expect(answerPositions).toEqual([4,4,4,4]);
  }
  expect(new Set(prompts).size).toBe(48);expect(new Set(ids).size).toBe(48);expect(new Set(optionSets).size).toBe(48);
 });
 it('attaches exact same-level story evidence to all48 explanations',()=>{
  for(const level of ['A','B','C'] as const)for(const q of quiz[level]){
   expect(q.evidence.length).toBeGreaterThan(0);
   for(const e of q.evidence){expect(e.scene).toBeGreaterThanOrEqual(1);expect(e.scene).toBeLessThanOrEqual(20);expect(e.quote).toBe(book.pages(level)[e.scene-1].lines.join(' '));expect(e.chinese).toBe(book.chinese(e.scene-1,level).join(' '));}
   expect(q.explanation).toMatch(/第\d+/);
  }
 });
 it('uses the actual formal photos for four concrete A picture questions',()=>{
  const pictures=quiz.A.filter(q=>'image' in q);expect(pictures).toHaveLength(4);
  expect(pictures.map(q=>(q as {image:string}).image)).toEqual([1,5,8,19].map(n=>`images/story/science-homework-v1/scene/${String(n).padStart(2,'0')}.webp`));
  expect(quiz.B.some(q=>'image' in q)).toBe(false);expect(quiz.C.some(q=>'image' in q)).toBe(false);
 });
 it('keeps A concrete, B clause links, and C evidence/method questions distinct',()=>{
  expect(quiz.A.filter(q=>q.evidence.length>1)).toHaveLength(0);
  expect(quiz.C.filter(q=>q.evidence.length>1).length).toBeGreaterThanOrEqual(5);
  expect(quiz.C.map(q=>q.skill)).toContain('apply-method');expect(quiz.C.map(q=>q.skill)).toContain('evidence-scope');
 });
 it('scopes all new CSS and has no eager selected-book image preloading',()=>{
  const css=readFileSync('src/story/interactive/science-homework.css','utf8');expect(css.split('\n').filter(Boolean).every(l=>l.startsWith('.science-homework-book'))).toBe(true);
  const active=['science-homework.ts','science-homework-image.ts','science-homework-effects.ts'].map(f=>readFileSync('src/story/interactive/'+f,'utf8')).join('\n');
  expect(active).not.toMatch(/new Image\(|fetch\(|rel=['"`]prefetch/);
 });
});
