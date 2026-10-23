import {describe,it,expect} from 'vitest';
import {readFileSync,existsSync} from 'node:fs';
import data from '../src/story/amusement-park/data.json';
describe('Book 55 publication contract',()=>{
 it('has twenty bilingual scenes at each level and twenty taught words in the actual C story',()=>{
  expect(data.scenes).toHaveLength(20);expect(new Set(data.coreWords).size).toBe(20);
  const text=data.scenes.flatMap(s=>s.text.C).join(' ').toLowerCase();
  for(const word of data.coreWords)expect(text).toContain(word.toLowerCase());
  expect(data.coreWords).not.toContain('ticket');expect(data.coreWords).not.toContain('ride');
  for(const s of data.scenes)for(const l of ['A','B','C'] as const){expect(s.text[l].join(' ').length).toBeGreaterThan(15);expect(s.chinese[l].join('').length).toBeGreaterThan(5);}
  expect(data.scenes[16].text.C.join(' ')).toContain('safe in her hand');
  expect(data.scenes[19].text.C.join(' ')).toContain('back to her familiar room');
 });
 it('resolves every layer, word card and quiz illustration',()=>{
  const assets=data.assets as Record<string,{image:string}>;
  for(const a of Object.values(assets))expect(existsSync('images/story/amusement-park-v1/'+a.image)).toBe(true);
  for(const s of data.scenes){expect(existsSync('images/story/amusement-park-v1/'+s.background)).toBe(true);for(const o of s.objects)expect(assets[o.asset]).toBeDefined();}
  for(const v of data.vocabulary)expect(assets[v.asset]).toBeDefined();
  expect(data.quiz).toHaveLength(16);
  for(const q of data.quiz){expect(q.options[q.answer]).toBeTruthy();expect(q.prompt.C).toBeTruthy();if(q.picture)expect(q.picture).toBeLessThanOrEqual(6);}
  expect(readFileSync('images/story/amusement-park-v1/bedroom.png')).toEqual(readFileSync('images/story/shared-gail-v1/bedroom.png'));
 });
 it('publishes through the existing authenticated entry and shelf',()=>{
  expect(readFileSync('amusement-park-storybook.html','utf8')).toContain('modules/story-entry.mjs');
  expect(readFileSync('modules/story-entry.mjs','utf8')).toContain("new URL('amusement-park-storybook.html'");
  expect(readFileSync('src/story/index.ts','utf8')).toContain('amusement-park-storybook.html');
 });
});
