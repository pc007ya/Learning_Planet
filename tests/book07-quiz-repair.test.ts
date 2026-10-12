import {describe,it,expect} from 'vitest';
import {unicornBook} from '../src/story/interactive/unicorn';
import {unicornQuizRows} from '../src/story/interactive/unicorn-quiz';
import rows from '../src/story/interactive/unicorn-story.json';
import original from './fixtures/book07-original.json';
const levels=['A','B','C'] as const;
describe('Book 07 graded quiz repair',()=>{
 it('uses natural English for the near bump without claiming an actual collision',()=>{expect(unicornQuizRows[1].tracks.C.explanation).toContain('He gallops so fast that he nearly bumps into Gail.');expect(unicornQuizRows[1].tracks.C.explanation).not.toContain('brings him into Gail');});
 it('preserves all original ABC text, words and sixteen layered scene images',()=>{
  expect(rows).toEqual(original.rows);expect(unicornBook().words).toEqual(original.words);
  levels.forEach(l=>{const b=unicornBook();expect(b.pages(l).map(p=>p.lines)).toEqual(original.rows.map(r=>r[l]));expect(b.pages(l)).toHaveLength(20);expect(b.questions(l).map(q=>q.sceneImage)).toEqual(original.sceneImages);});
 });
 it.each(levels)('%s has sixteen contextual questions with valid schema and balanced answers',level=>{
  const qs=unicornBook().questions(level);expect(qs).toHaveLength(16);expect(qs.map(q=>q.id)).toEqual(Array.from({length:16},(_,i)=>'unicorn-'+(i+1)));
  expect([0,1,2,3].map(a=>qs.filter(q=>q.answer[0]===a).length)).toEqual([4,4,4,4]);
  qs.forEach((q,i)=>{expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.toLowerCase().trim())).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(unicornQuizRows[i].tracks[level].choices[0]);expect(q.prompt).toMatch(/^In this story,/);expect(q.imageAlt).toBe('故事回顧插圖');expect(q.explanation).toMatch(/Page/);expect(unicornQuizRows[i].pages.every(p=>p>=1&&p<=20)).toBe(true);});
 });
 it('varies all prompts, choices and reasons across tracks and keeps A options short',()=>{
  unicornQuizRows.forEach(q=>{expect(new Set(levels.map(l=>q.tracks[l].prompt)).size).toBe(3);expect(new Set(levels.map(l=>JSON.stringify(q.tracks[l].choices))).size).toBe(3);expect(new Set(levels.map(l=>q.tracks[l].explanation)).size).toBe(3);q.tracks.A.choices.forEach(s=>expect(s.split(/\s+/).length).toBeLessThanOrEqual(5));});
 });
 it('regresses map answer types and scopes the early claim, later admission and actual rabbit meeting',()=>{
  const q=unicornQuizRows;
  expect(q[13].tracks.A.prompt).toContain('look at');expect(q[13].tracks.A.choices[0]).toBe('A map');
  expect(q[13].tracks.B.prompt).toContain('how');expect(q[13].tracks.B.choices[0]).toMatch(/^They find/);
  expect(q[13].tracks.C.choices[0]).toBe('The curved river, tall mountain, and rising moon.');
  expect(q[2].tracks.A.prompt).toContain('first');expect(q[2].tracks.A.choices[0]).toBe('“No!”');
  expect(q[11].tracks.A.prompt).toContain('gets dark');expect(q[11].tracks.A.choices[0]).toBe('“I do not know.”');
  expect(q[9].tracks.B.prompt).toContain('crosses their path');expect(q[14].tracks.B.prompt).toContain('points toward');
  expect(q[15].tracks.A.prompt).toContain('finally find home');expect(q[15].tracks.A.choices[0]).toBe('He asks for help');
  expect(q[8].tracks.C.explanation).toContain('does not say who made the mark');
 });
 it('retains the official Lumi story instead of importing an old proposal or changing page order',()=>{
  expect(rows[2].A[1]).toBe('“No!” says Lumi.');expect(rows[12].A[1]).toBe('“I do not know,” says Lumi.');
  expect(rows[14].A).toEqual(['They look at the map.','Now they see the way.']);expect(rows[15].B[1]).toBe('The rabbit points to the glowing flowers.');expect(rows[18].B[1]).toBe('“I asked for help!” says Lumi.');
 });
});
