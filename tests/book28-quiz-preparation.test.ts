import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {marketQuestions,marketQuizRows} from '../src/story/interactive/market-quiz';
import original from './fixtures/book28-original.json';
import sourceC from './fixtures/book28-original-C.json';
const levels=['A','B','C'] as const;

describe('Book 28 original-art graded quiz candidate',()=>{
 it('preserves the byte-identical original C manuscript and its twenty scenes',()=>{
  const raw=readFileSync(new URL('./fixtures/book28-original-C.json',import.meta.url));
  expect(createHash('sha256').update(raw).digest('hex')).toBe('41f4ea54f4c0ced7242e966f48ec0629824fc2c715d7db6dbdd65fb05a3b0817');
  expect(sourceC.number).toBe(28);expect(sourceC.title).toBe('Gail and the Market with No Prices');
  expect(sourceC.scenes.map(s=>s.number)).toEqual(Array.from({length:20},(_,i)=>i+1));
  expect(sourceC.scenes.map(s=>s.text.C)).toEqual(original.sourceC);
  expect(sourceC.scenes.map(s=>s.chinese.C)).toEqual(original.sourceZhC);
  levels.forEach(l=>expect(original.ABCSource[l]).toHaveLength(20));expect(original.words).toHaveLength(24);
 });
 it.each(levels)('%s has sixteen unique four-choice questions, valid balanced answers and story explanations',level=>{
  const qs=marketQuestions(level);expect(qs).toHaveLength(16);expect(qs.map(q=>q.id)).toEqual(Array.from({length:16},(_,i)=>`market-${i}`));
  expect([0,1,2,3].map(n=>qs.filter(q=>q.answer[0]===n).length)).toEqual([4,4,4,4]);
  expect(qs.map(q=>q.answer[0])).not.toEqual(Array.from({length:16},(_,i)=>i%4));
  qs.forEach((q,i)=>{
   expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);
   expect(new Set(q.options.map(o=>o.text.toLowerCase().trim())).size).toBe(4);
   expect(q.answer).toHaveLength(1);expect(q.answer[0]).toBeGreaterThanOrEqual(0);expect(q.answer[0]).toBeLessThan(4);
   expect(q.options[q.answer[0]].text).toBe(marketQuizRows[i].tracks[level].choices[0]);
   expect(q.prompt).toMatch(/^In this story,/);expect(q.explanation).toMatch(/^Pages? \d/);
   expect(q.explanation).not.toBe(q.options[q.answer[0]].text);expect(q.imageAlt).toBe('故事回顧插圖');
   expect(q).not.toHaveProperty('sceneImage');
  });
 });
 it('has truly different prompts, choices and explanations, with short A options',()=>{
  marketQuizRows.forEach(row=>{
   expect(new Set(levels.map(l=>row.tracks[l].prompt)).size).toBe(3);
   expect(new Set(levels.map(l=>JSON.stringify(row.tracks[l].choices))).size).toBe(3);
   expect(new Set(levels.map(l=>row.tracks[l].explanation)).size).toBe(3);
   row.tracks.A.choices.forEach(text=>expect(text.split(/\s+/).length).toBeLessThanOrEqual(5));
   expect(row.pages.every(n=>n>=1&&n<=20)).toBe(true);
  });
 });
 it('keeps the original sixteen picture families and never uses mismatched old reader cast layers',()=>{
  expect(marketQuizRows.map(r=>r.imageScene)).toEqual([1,3,4,5,6,7,8,10,11,12,13,14,15,16,17,19]);
  for(const level of levels)marketQuestions(level).forEach((q,i)=>{
   const image=original.images[String(marketQuizRows[i].imageScene) as keyof typeof original.images];
   expect(q.image).toBe(image.candidateURL);expect(image.sha256).toMatch(/^[a-f0-9]{64}$/);
   expect(q.image).not.toMatch(/worker|customer|market-v1\//);
  });
  expect(original.imagesArePlannedURLsOnly).toBe(true);
 });
 it('keeps timing, roles, foods and the checking lesson grounded in the original source',()=>{
  expect(marketQuizRows[0].tracks.C.choices[0]).toBe('The token stops; golden light spreads; a market doorway opens.');
  expect(marketQuizRows[1].tracks.A.choices[0]).toBe('Beef, pork, rice, salad');
  expect(marketQuizRows[4].tracks.A.choices[0]).toBe('She waits');
  expect(marketQuizRows[8].tracks.C.choices[0]).toContain('listens fully');
  expect(marketQuizRows[10].tracks.C.choices[0]).toContain('fruit shape');
  expect(marketQuizRows[12].tracks.A.choices[0]).toBe('They agree together');
  expect(marketQuizRows[12].tracks.C.choices[0]).toContain('they make the decision together');
  expect(marketQuizRows[14].tracks.C.choices[0]).toContain('agreed price');
  expect(marketQuizRows[15].tracks.C.explanation).toContain('asking the people involved');
  const text=JSON.stringify(marketQuizRows);
  expect(text).not.toMatch(/\b(?:Vicky|Ricky|Abby)\b|\$\d|\b\d+ dollars?\b/);
 });
});
