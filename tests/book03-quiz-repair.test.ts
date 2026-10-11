import {describe,it,expect} from 'vitest';
import {princessQuestions,princessQuizRows} from '../src/story/interactive/princess-quiz';
import {princessText} from '../src/story/interactive/princess-text';
import original from './fixtures/book03-original.json';
const levels=['A','B','C'] as const;
describe('Book 03 graded quiz repair',()=>{
 it('keeps the original C text and all twenty ABC pages unchanged',()=>{expect(princessText).toHaveLength(20);princessText.forEach((row,i)=>{expect(row.C).toEqual(original.pages[i].text.C.en);for(const l of levels)expect(row[l].length).toBeGreaterThan(0);});});
 it.each(levels)('%s has sixteen contextual questions with valid schema and balanced answers',level=>{
  const qs=princessQuestions(level);expect(qs).toHaveLength(16);expect(new Set(qs.map(q=>q.id)).size).toBe(16);expect([0,1,2,3].map(a=>qs.filter(q=>q.answer[0]===a).length)).toEqual([4,4,4,4]);
  qs.forEach((q,i)=>{expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.toLowerCase().trim())).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(princessQuizRows[i].tracks[level].choices[0]);expect(q.prompt).toMatch(/^In this story,/);expect(q.imageAlt).toBe('故事回顧插圖');expect(q.explanation).toMatch(/Page|page/);expect(princessQuizRows[i].pages.every(p=>p>=1&&p<=20)).toBe(true);});
 });
 it('retains the original IDs and every image path',()=>{
  expect(princessQuestions('A').map(q=>q.id)).toEqual(['princess','lonely','blocks','listen','orange','pinwheel','wish','rain','laugh','meaning',...Array.from({length:6},(_,i)=>'picture-'+(i+1))]);
  expect(princessQuizRows.map(q=>q.image)).toEqual([1,1,2,3,4,5,3,5,6,6,1,2,3,4,5,6].map(n=>`quiz/scene-${String(n).padStart(2,'0')}.png`));
 });
 it('varies all three tracks and keeps A choices short',()=>{princessQuizRows.forEach(q=>{expect(new Set(levels.map(l=>q.tracks[l].prompt)).size).toBe(3);expect(new Set(levels.map(l=>JSON.stringify(q.tracks[l].choices))).size).toBe(3);expect(new Set(levels.map(l=>q.tracks[l].explanation)).size).toBe(3);q.tracks.A.choices.forEach(s=>expect(s.split(/\s+/).length).toBeLessThanOrEqual(5));});});
 it('regresses the ambiguous moral question and keeps the written task roles',()=>{
  expect(princessQuizRows[3].tracks.A.prompt).toContain('after Ella asks her to stop');
  for(const l of levels){expect(princessQuizRows[9].tracks[l].choices[0]).toMatch(/choose/i);expect(princessQuizRows[9].tracks[l].choices.join(' ')).not.toContain('Making them smile');}
  expect(princessQuizRows[9].tracks.A.prompt).toContain('after Ella asks for a friend');
  expect(princessQuizRows[4].tracks.C.choices[0]).toBe('Ella picks up the oranges while Gail holds the basket.');
  expect(princessQuizRows[5].tracks.C.choices[0]).toBe('Gail holds the paper while Ella folds it carefully.');
  expect(princessQuizRows[8].tracks.C.explanation).toContain('not the sneeze itself');
  expect(princessText[10].C.join(' ')).toContain('caregiver');expect(princessText[10].C.join(' ')).toContain('permission');
 });
});
