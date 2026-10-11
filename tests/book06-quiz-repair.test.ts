import {describe,it,expect} from 'vitest';
import {layeredBook} from '../src/story/interactive/layered-three';
import {layeredThreeData,layeredThreeQuiz} from '../src/story/interactive/layered-three-data';
import {witchQuizRows} from '../src/story/interactive/witch-quiz';
import original from './fixtures/book06-original.json';
const levels=['A','B','C'] as const;
describe('Book 06 graded quiz repair',()=>{
 it('preserves every ABC row, original C source, twenty words and layered quiz scene',()=>{
  expect(layeredThreeData.witch.rows).toEqual(original.rows);
  expect(layeredBook('witch').words).toEqual(original.coreWords);
  levels.forEach(l=>{
   const book=layeredBook('witch');expect(book.pages(l)).toHaveLength(20);
   if(l==='C')expect(book.pages(l).map(p=>p.lines)).toEqual(original.sourceC);
   expect(book.questions(l).map(q=>q.sceneImage)).toEqual(original.sceneImages);
  });
 });
 it.each(levels)('%s has sixteen complete contextual questions with balanced valid answers',level=>{
  const qs=layeredBook('witch').questions(level);expect(qs).toHaveLength(16);
  expect(qs.map(q=>q.id)).toEqual(Array.from({length:16},(_,i)=>'witch-'+i));
  expect([0,1,2,3].map(a=>qs.filter(q=>q.answer[0]===a).length)).toEqual([4,4,4,4]);
  qs.forEach((q,i)=>{expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.toLowerCase().trim())).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(witchQuizRows[i].tracks[level].choices[0]);expect(q.prompt).toMatch(/^In this story,/);expect(q.imageAlt).toBe('故事回顧插圖');expect(q.explanation).toMatch(/Page/);expect(witchQuizRows[i].pages.every(p=>p>=1&&p<=20)).toBe(true);});
 });
 it('varies prompts, choices and explanations for all tracks and keeps A choices short',()=>{
  witchQuizRows.forEach(q=>{expect(new Set(levels.map(l=>q.tracks[l].prompt)).size).toBe(3);expect(new Set(levels.map(l=>JSON.stringify(q.tracks[l].choices))).size).toBe(3);expect(new Set(levels.map(l=>q.tracks[l].explanation)).size).toBe(3);q.tracks.A.choices.forEach(s=>expect(s.split(/\s+/).length).toBeLessThanOrEqual(5));});
 });
 it('regresses early yet and mismatched who/how-many/why questions without adding a flight success',()=>{
  expect(JSON.stringify(witchQuizRows[3].tracks)).not.toMatch(/\byet\b/i);
  expect(witchQuizRows[3].pages).toEqual([4]);expect(witchQuizRows[8].pages).toEqual([13]);
  expect(witchQuizRows[6].tracks.A.prompt).toContain('how many');expect(witchQuizRows[6].tracks.A.choices[0]).toBe('Four');
  expect(witchQuizRows[9].tracks.A.prompt).toContain('counts to three');expect(witchQuizRows[9].tracks.A.choices[0]).toBe('Stay up a little');
  expect(witchQuizRows[11].tracks.A.prompt).toContain('why');expect(witchQuizRows[11].tracks.A.choices[0]).toBe('To look and turn');
  expect(witchQuizRows[13].tracks.A.prompt).toContain('who');expect(witchQuizRows[13].tracks.A.choices[0]).toBe('A new friend');
  expect(witchQuizRows[14].tracks.C.explanation).toContain('simple spell');expect(witchQuizRows[12].tracks.C.choices[0]).toContain('low loop');
 });
 it('keeps mirror and star-library quizzes on their original shared contract',()=>{
  for(const key of ['mirror','star-library'] as const)for(const l of levels){
   const actual=layeredBook(key).questions(l),rows=layeredThreeQuiz[key];
   actual.forEach((q,i)=>{const row=rows[i],choices=[...row.slice(3)];choices.splice(i%4,0,row[2]);expect(q.prompt).toBe(row[l==='A'?0:1]);expect(q.options.map(o=>o.text)).toEqual(choices);expect(q.answer).toEqual([i%4]);expect(q.explanation).toBe(row[2]);expect(q.id).toBe(`${key}-${i}`);});
  }
 });
});
