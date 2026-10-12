import {describe,it,expect} from 'vitest';
import {pirateQuestions,pirateQuizRows} from '../src/story/interactive/pirate-quiz';
import {pirateText} from '../src/story/interactive/pirate-text';
import original from './fixtures/book08-original.json';
const levels=['A','B','C'] as const;
describe('Book 08 graded quiz repair',()=>{
 it('preserves all twenty ABC pages and the formal C source',()=>{expect(pirateText).toEqual(original.text);expect(pirateText.map(p=>p.C)).toEqual(original.sourceC);expect(pirateText).toHaveLength(20);expect(original.words).toHaveLength(20);});
 it.each(levels)('%s has sixteen contextual questions with valid schema and balanced answers',level=>{
  const qs=pirateQuestions(level);expect(qs).toHaveLength(16);expect(qs.map(q=>({id:q.id,image:q.image}))).toEqual(original.images);expect([0,1,2,3].map(a=>qs.filter(q=>q.answer[0]===a).length)).toEqual([4,4,4,4]);
  qs.forEach((q,i)=>{expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.toLowerCase().trim())).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(pirateQuizRows[i].tracks[level].choices[0]);expect(q.prompt).toMatch(/^In this story,/);expect(q.imageAlt).toBe('故事回顧插圖');expect(q.explanation).toMatch(/Page/);expect(pirateQuizRows[i].pages.every(p=>p>=1&&p<=20)).toBe(true);});
 });
 it('varies all prompts, choices and reasons across tracks and keeps A options short',()=>{pirateQuizRows.forEach(q=>{expect(new Set(levels.map(l=>q.tracks[l].prompt)).size).toBe(3);expect(new Set(levels.map(l=>JSON.stringify(q.tracks[l].choices))).size).toBe(3);expect(new Set(levels.map(l=>q.tracks[l].explanation)).size).toBe(3);q.tracks.A.choices.forEach(s=>expect(s.split(/\s+/).length).toBeLessThanOrEqual(5));});});
 it('regresses tool function, telescope order/return and unsupported sharing of shells',()=>{
  expect(pirateQuizRows[3].tracks.A.prompt).toContain('use to row');expect(pirateQuizRows[3].tracks.A.choices[0]).toBe('An oar');
  expect(pirateQuizRows[7].tracks.A.prompt).toContain('after the pirate sees the bay');expect(pirateQuizRows[7].tracks.A.choices[0]).toBe('Gail');
  expect(pirateQuizRows[8].tracks.A.choices[0]).toBe('Food');expect(pirateQuizRows[8].tracks.A.explanation).not.toMatch(/shell/i);
  expect(pirateQuizRows[8].tracks.B.choices[0]).toBe('An apple.');expect(pirateQuizRows[8].tracks.C.explanation).toContain('does not say that he shares the shells');
  expect(pirateQuizRows[9].tracks.A.prompt).toContain('after Gail’s turn');expect(pirateQuizRows[9].tracks.A.choices[0]).toBe('Back to the pirate');
  expect(pirateQuizRows[6].tracks.C.explanation).toContain('only after stepping onto dry land');expect(pirateQuizRows[15].tracks.C.explanation).toContain('not an explicit gift');
 });
 it('retains the original six picture paths and actual character jobs',()=>{
  expect(pirateQuizRows.slice(10).map(q=>q.image)).toEqual(Array.from({length:6},(_,i)=>`quiz/scene-${String(i+1).padStart(2,'0')}.png`));
  expect(pirateQuizRows[13].tracks.B.choices[0]).toBe('Girl: oar; boy: rope; pirate: telescope.');expect(pirateQuizRows[5].tracks.C.choices[0]).toContain('pirate first spots the bay');
 });
});
