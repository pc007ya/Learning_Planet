import {describe,it,expect} from 'vitest';
import {genieQuestions,genieQuizRows} from '../src/story/interactive/genie-quiz';
import {genieText} from '../src/story/interactive/genie-text';
import original from './fixtures/book05-original.json';
const levels=['A','B','C'] as const;
describe('Book 05 graded quiz repair',()=>{
 it('keeps the original C text and all twenty ABC pages unchanged',()=>{expect(genieText).toHaveLength(20);genieText.forEach((row,i)=>{expect(row.C).toEqual(original.pages[i].text.C.en);for(const l of levels)expect(row[l].length).toBeGreaterThan(0);});});
 it.each(levels)('%s has sixteen contextual questions with valid schema and balanced answers',level=>{
  const qs=genieQuestions(level);expect(qs).toHaveLength(16);expect(new Set(qs.map(q=>q.id)).size).toBe(16);expect([0,1,2,3].map(a=>qs.filter(q=>q.answer[0]===a).length)).toEqual([4,4,4,4]);
  qs.forEach((q,i)=>{expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.toLowerCase().trim())).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(genieQuizRows[i].tracks[level].choices[0]);expect(q.prompt).toMatch(/^In this story,/);expect(q.imageAlt).toBe('故事回顧插圖');expect(q.explanation).toMatch(/Page|page/);expect(genieQuizRows[i].pages.every(p=>p>=1&&p<=20)).toBe(true);});
 });
 it('retains the original IDs and every image path',()=>{
  expect(genieQuestions('A').map(q=>q.id)).toEqual([...Array.from({length:10},(_,i)=>'genie-'+i),...Array.from({length:6},(_,i)=>'genie-picture-'+i)]);
  expect(genieQuizRows.map(q=>q.image)).toEqual(['lamp.png','genie.png','train.png','silver.png','castle.png','blocks.png','train.png','blocks.png','track.png','train.png',...Array.from({length:6},(_,i)=>`quiz/scene-${i+1}.jpg`)]);
 });
 it('varies all three tracks and keeps A choices short',()=>{genieQuizRows.forEach(q=>{expect(new Set(levels.map(l=>q.tracks[l].prompt)).size).toBe(3);expect(new Set(levels.map(l=>JSON.stringify(q.tracks[l].choices))).size).toBe(3);expect(new Set(levels.map(l=>q.tracks[l].explanation)).size).toBe(3);q.tracks.A.choices.forEach(s=>expect(s.split(/\s+/).length).toBeLessThanOrEqual(5));});});
 it('regresses timing and incomplete prompts without removing the useful bridge blocks',()=>{
  expect(genieQuizRows[5].tracks.A.prompt).toContain('when the friends first arrive');expect(genieQuizRows[5].tracks.A.choices[0]).toBe('Not enough space');expect(genieQuizRows[7].tracks.A.prompt).toContain('what makes more room');
  expect(genieQuizRows[2].tracks.C.prompt).toBe('In this story, what does Gail do immediately after the wooden train first appears, before she tries it?');expect(genieQuizRows[2].tracks.C.choices).toContain('She finishes a small bridge with her friends.');expect(genieQuizRows[2].tracks.A.prompt).toContain('which toy appears first');expect(genieQuizRows[3].tracks.A.prompt).toContain('what crown color comes after gold');
  expect(genieQuizRows[7].tracks.C.choices[0]).toContain('small bridge');expect(genieQuizRows[14].tracks.C.choices[0]).toContain('A few blocks');expect(genieQuizRows[15].tracks.C.choices[0]).toContain('retain a few bridge blocks');
  expect(genieQuizRows[11].tracks.C.explanation).toContain('early train');
 });
});
