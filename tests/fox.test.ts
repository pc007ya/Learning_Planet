import {describe,it,expect} from 'vitest';
import {existsSync} from 'node:fs';
import {foxPages,foxVocabulary,foxObjects,foxScenes} from '../src/story/interactive/fox';
import {foxQuestions} from '../src/story/interactive/fox-quiz';
describe('fox new content and assets',()=>{
 it('has complete layered scenes, working mission references and 20 core words',()=>{
  const pages=foxPages('B');expect(pages).toHaveLength(20);expect(new Set(foxVocabulary).size).toBe(20);
  expect(new Set(pages.flatMap(p=>p.words))).toEqual(new Set(foxVocabulary));
  for(const p of pages){expect(existsSync('images/story/fox-v1/'+p.scene+'.png')).toBe(true);expect(foxScenes[p.scene]).toBeTruthy();
   for(const id of [p.mission.answer,p.mission.target,...(p.mission.steps||[])].filter(Boolean))expect(p.objects).toContain(id);
   for(const id of p.objects){const o={...foxObjects[id],...p.placements?.[id]};expect(o.id).toBe(id);if(o.image)expect(existsSync('images/story/fox-v1/'+o.image)).toBe(true);}
  }
 });
 it('offers six scene questions and ten comprehension questions without duplicate answers',()=>{
  const qs=foxQuestions('B');expect(qs).toHaveLength(16);expect(qs.filter(q=>q.id.startsWith('scene-'))).toHaveLength(6);
  for(const q of qs){expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text)).size).toBe(4);expect(q.answer[0]).toBeLessThan(4);expect(existsSync(q.image!)).toBe(true);}
 });
});
