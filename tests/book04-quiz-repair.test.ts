import {describe,it,expect} from 'vitest';
import {cloudQuestions,cloudQuizRows} from '../src/story/interactive/cloud-quiz';
import {cloudText} from '../src/story/interactive/cloud-text';
import original from './fixtures/book04-original.json';
const levels=['A','B','C'] as const;
describe('Book 04 graded quiz repair',()=>{
 it('keeps the original C text and all twenty ABC pages unchanged',()=>{expect(cloudText).toHaveLength(20);cloudText.forEach((row,i)=>{expect(row.C).toEqual(original.pages[i].text.C.en);for(const l of levels)expect(row[l].length).toBeGreaterThan(0);});});
 it.each(levels)('%s has sixteen contextual questions with valid schema and balanced answers',level=>{
  const qs=cloudQuestions(level);expect(qs).toHaveLength(16);expect(new Set(qs.map(q=>q.id)).size).toBe(16);expect([0,1,2,3].map(a=>qs.filter(q=>q.answer[0]===a).length)).toEqual([4,4,4,4]);
  qs.forEach((q,i)=>{expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.toLowerCase().trim())).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(cloudQuizRows[i].tracks[level].choices[0]);expect(q.prompt).toMatch(/^In this story,/);expect(q.imageAlt).toBe('故事回顧插圖');expect(q.explanation).toMatch(/Page|page/);expect(cloudQuizRows[i].pages.every(p=>p>=1&&p<=20)).toBe(true);});
 });
 it('retains the original IDs and every image path',()=>{
  expect(cloudQuestions('A').map(q=>q.id)).toEqual([...Array.from({length:10},(_,i)=>'cloud-'+i),...Array.from({length:6},(_,i)=>'cloud-picture-'+i)]);
  expect(cloudQuizRows.map(q=>q.image)).toEqual(['lid.png','bell.png','leaf.png','cloud-angry.png','pattern.png','cloud-upset.png','rotor.png','cloud-upset.png','pattern.png','cloud-calm.png',...Array.from({length:6},(_,i)=>`quiz/scene-${i+1}.jpg`)]);
 });
 it('varies all three tracks and keeps A choices short',()=>{cloudQuizRows.forEach(q=>{expect(new Set(levels.map(l=>q.tracks[l].prompt)).size).toBe(3);expect(new Set(levels.map(l=>JSON.stringify(q.tracks[l].choices))).size).toBe(3);expect(new Set(levels.map(l=>q.tracks[l].explanation)).size).toBe(3);q.tracks.A.choices.forEach(s=>expect(s.split(/\s+/).length).toBeLessThanOrEqual(5));});});
 it('regresses timing and answer-type defects while preserving the emotional sequence',()=>{
  expect(cloudQuizRows[6].tracks.A.prompt).toContain('right after taking a pause');expect(cloudQuizRows[6].tracks.A.choices[0]).toBe('Breathe in and out');expect(cloudQuizRows[6].tracks.A.choices).toContain('Make a new spiral');expect(cloudQuizRows[9].tracks.A.prompt).toContain('if upset again');expect(cloudQuizRows[9].tracks.A.choices[0]).toBe('Pause and ask for help');
  expect(cloudQuizRows[6].tracks.C.explanation).toContain('does not instantly remove every feeling');expect(cloudQuizRows[13].tracks.C.choices[0]).toContain('still cares');expect(cloudQuizRows[8].tracks.B.choices[0]).toContain('can be different');expect(cloudQuizRows[14].tracks.C.explanation).toContain('sheltered patch');
 });
});
