import {describe,it,expect} from 'vitest';
import {existsSync,readFileSync} from 'node:fs';
import data from '../src/story/underwater-world/data.json';
describe('Book 54 reader integrity',()=>{
 it('has complete bilingual ABC scenes and the return home',()=>{
  expect(data.scenes).toHaveLength(20);
  for(const s of data.scenes){for(const l of ['A','B','C'] as const){expect(s.text[l].join(' ').trim().length).toBeGreaterThan(20);expect(s.chinese[l].join('').trim().length).toBeGreaterThan(5);}}
  expect(data.scenes[0].background).toBe('bedroom.png');expect(data.scenes[19].background).toBe('bedroom.png');
  expect(data.scenes[9].text.C.join(' ')).toContain('bundled old rope');
  expect(data.scenes[18].text.C.join(' ')).toContain('keeps it');
 });
 it('uses all twenty approved teaching words in actual C text',()=>{
  expect(new Set(data.coreWords).size).toBe(20);const text=data.scenes.flatMap(s=>s.text.C).join(' ').toLowerCase();
  for(const w of data.coreWords)expect(text).toMatch(new RegExp('\\b'+w+'(?:s|es)?\\b'));
 });
 it('resolves every layered asset and keeps figures inside the stage',()=>{
  const assets=data.assets as Record<string,{image:string,rect?:number[],size?:number}>;
  for(const a of Object.values(assets)){expect(existsSync('images/story/underwater-world-v1/'+a.image)).toBe(true);if(a.rect){const[x,y,w,h]=a.rect;expect(x+w).toBeLessThanOrEqual(a.size!);expect(y+h).toBeLessThanOrEqual(a.size!);}}
  for(const s of data.scenes){expect(existsSync('images/story/underwater-world-v1/'+s.background)).toBe(true);for(const o of s.objects){expect(assets[o.asset]).toBeDefined();expect(o.x-o.w/2).toBeGreaterThanOrEqual(0);expect(o.x+o.w/2).toBeLessThanOrEqual(100);expect(o.y+o.h/2).toBeLessThanOrEqual(100);}}
 });
 it('has sixteen nonblank, answerable questions and real scene references',()=>{
  expect(data.quiz).toHaveLength(16);for(const q of data.quiz){expect(new Set(q.options).size).toBe(4);expect(q.options.every(Boolean)).toBe(true);expect(q.options[q.answer]).toBeTruthy();expect(q.scene).toBeGreaterThan(0);expect(q.scene).toBeLessThanOrEqual(20);for(const p of Object.values(q.prompt))expect(p.length).toBeGreaterThan(5);expect(q.explanation.length).toBeGreaterThan(10);}
 });
 it('is reachable from the shelf',()=>{expect(readFileSync('src/story/index.ts','utf8')).toContain("'underwater-world-storybook.html'");});
});
