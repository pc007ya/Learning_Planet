import {describe,it,expect} from 'vitest';
import {elfQuestions,elfQuizRows} from '../src/story/interactive/elf-quiz';
import {elfText} from '../src/story/interactive/elf-text';
import original from './fixtures/book02-original.json';
const levels=['A','B','C'] as const;
describe('Book 02 graded quiz repair',()=>{
 it('keeps the original C text and all twenty ABC pages unchanged',()=>{expect(elfText).toHaveLength(20);elfText.forEach((row,i)=>{expect(row.C).toEqual(original.pages[i].text.C.en);for(const l of levels)expect(row[l].length).toBeGreaterThan(0);});});
 it.each(levels)('%s has sixteen contextual questions with valid schema and balanced answers',level=>{
  const qs=elfQuestions(level);expect(qs).toHaveLength(16);expect(new Set(qs.map(q=>q.id)).size).toBe(16);expect([0,1,2,3].map(a=>qs.filter(q=>q.answer[0]===a).length)).toEqual([4,4,4,4]);
  qs.forEach((q,i)=>{expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.toLowerCase().trim())).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(elfQuizRows[i].tracks[level].choices[0]);expect(q.prompt).toMatch(/^In this story,/);expect(q.imageAlt).toBe('故事回顧插圖');expect(q.explanation).toMatch(/Page|page/);expect(elfQuizRows[i].pages.every(p=>p>=1&&p<=20)).toBe(true);});
 });
 it('retains the original IDs and every image path',()=>{
  expect(elfQuestions('A').map(q=>q.id)).toEqual([...Array.from({length:10},(_,i)=>'elf-'+i),...Array.from({length:6},(_,i)=>'elf-picture-'+i)]);
  expect(elfQuizRows.map(q=>q.image)).toEqual(['nori.png','acorn.png','nori.png','bud.png','unripe.png','young.png','acorn.png','winter.png','nori-happy.png','forest.png',...Array.from({length:6},(_,i)=>`quiz/scene-${i+1}.jpg`)]);
 });
 it('varies all three tracks and keeps A choices short',()=>{elfQuizRows.forEach(q=>{expect(new Set(levels.map(l=>q.tracks[l].prompt)).size).toBe(3);expect(new Set(levels.map(l=>JSON.stringify(q.tracks[l].choices))).size).toBe(3);expect(new Set(levels.map(l=>q.tracks[l].explanation)).size).toBe(3);q.tracks.A.choices.forEach(s=>expect(s.split(/\s+/).length).toBeLessThanOrEqual(5));});});
 it('regresses the reported noun/yes-no mismatches and preserves story time scope',()=>{
  expect(elfQuizRows[7].tracks.A.choices[0]).toBe('The snow');expect(elfQuizRows[9].tracks.A.prompt).toContain('what stays familiar');expect(elfQuizRows[9].tracks.A.choices[0]).toBe('His old home');expect(elfQuizRows[3].tracks.A.prompt).toContain('while time is still');expect(elfQuizRows[4].tracks.A.prompt).toContain('while the forest is still');expect(elfQuizRows[14].tracks.C.choices[0]).toContain('as time passes');expect(elfQuizRows[15].tracks.C.choices[0]).toContain('with practice');
 });
});
