import {describe,it,expect} from 'vitest';
import {pages as original} from '../src/story/interactive/book';
import {starPages,starText,starChinese} from '../src/story/interactive/star-text';
import {starQuestions,starQuizRows} from '../src/story/interactive/star-quiz';
import {choreography} from '../src/story/interactive/choreography';
describe('book #1 complete reading levels and quiz',()=>{
 it('preserves every scene, word, mission and motion sentence across ABC',()=>{
  for(const l of ['A','B','C'] as const){
   const pages=starPages(l);expect(pages).toHaveLength(original.length);
   pages.forEach((p,i)=>{expect(p.scene).toBe(original[i].scene);expect(p.words).toEqual(original[i].words);expect(p.mission).toEqual(original[i].mission);expect(p.objects).toEqual(original[i].objects);expect(p.lines).toHaveLength(original[i].lines.length);expect(starChinese(i,l)).toHaveLength(p.lines.length);for(const cue of Object.keys(choreography[i]||{}))expect(Number(cue)).toBeLessThan(p.lines.length);});
  }
 });
 it('has genuinely different text at every page and increasing reading length',()=>{
  for(const row of starText)expect(new Set(['A','B','C'].map(l=>JSON.stringify(row[l as 'A'|'B'|'C'].en))).size).toBe(3);
  const words=(l:'A'|'B'|'C')=>starPages(l).flatMap(p=>p.lines).join(' ').split(/\s+/).length;
  expect(words('A')).toBeLessThan(words('B'));expect(words('B')).toBeLessThan(words('C'));
 });
 it('has sixteen valid questions and reasons without putting answers in the prompt or picture label',()=>{
  for(const l of ['A','B','C'] as const){const qs=starQuestions(l);expect(qs).toHaveLength(16);expect(new Set(qs.map(q=>q.id)).size).toBe(16);for(const q of qs){expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text)).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.answer[0]).toBeGreaterThanOrEqual(0);expect(q.answer[0]).toBeLessThan(4);expect(q.explanation.split(/\s+/).length).toBeGreaterThan(8);expect(q.explanation).not.toBe(q.options[q.answer[0]].text);expect(q.prompt).not.toContain(q.options[q.answer[0]].text);expect(q.imageAlt).toBe('故事回顧插圖');expect(q.image).toMatch(/^images\/story\/little-star-v1\//);}}
 });
 it('grades the question, options and reasons rather than only changing answer positions',()=>{
  for(const row of starQuizRows){expect(new Set(['A','B','C'].map(l=>row.tracks[l as 'A'|'B'|'C'].prompt)).size).toBe(3);expect(new Set(['A','B','C'].map(l=>JSON.stringify(row.tracks[l as 'A'|'B'|'C'].choices))).size).toBe(3);expect(new Set(['A','B','C'].map(l=>row.tracks[l as 'A'|'B'|'C'].explanation)).size).toBe(3);expect(row.pages.length).toBeGreaterThan(0);expect(Math.max(...row.pages)).toBeLessThanOrEqual(original.length);}
  const load=(l:'A'|'B'|'C')=>starQuizRows.flatMap(r=>[r.tracks[l].prompt,...r.tracks[l].choices,r.tracks[l].explanation]).join(' ').split(/\s+/).length;expect(load('A')).toBeLessThan(load('B'));expect(load('B')).toBeLessThan(load('C'));
  for(const q of starQuestions('A'))for(const option of q.options)expect(option.text.split(/\s+/).length).toBeLessThanOrEqual(5);
 });
 it('scopes the final question to the star’s thanks and uses same-category rescue distractors',()=>{
  expect(starQuizRows[15].tracks.A.prompt).toBe('Why does the star say “Thank you”?');
  expect(starQuizRows[13].tracks.A.choices).toEqual(['Gail and the cat','Gail and the duck','The cat and the duck','Gail and the firefly']);
  for(const level of ['A','B','C'] as const){const qs=starQuestions(level);expect(qs[15].options[qs[15].answer[0]].text).toBe(starQuizRows[15].tracks[level].choices[0]);expect(qs[13].options[qs[13].answer[0]].text).toBe(starQuizRows[13].tracks[level].choices[0]);expect(qs.map(q=>q.answer[0])).not.toEqual([0,1,2,3,0,1,2,3,0,1,2,3,0,1,1,2]);for(let position=0;position<4;position++)expect(qs.filter(q=>q.answer[0]===position)).toHaveLength(4);}
 });
});
