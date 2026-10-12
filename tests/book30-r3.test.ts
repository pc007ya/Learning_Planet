import {describe,it,expect,afterEach,vi} from 'vitest';
import {readFileSync} from 'node:fs';
import {snowBeforeBook} from '../src/story/interactive/snow-before';
import {snowReadingRegions,snowNarrationRegions} from '../src/story/interactive/snow-before-cues';
import {createSnowBeforeEffects} from '../src/story/interactive/snow-before-effects';
import {mountSnowBeforeImage} from '../src/story/interactive/snow-before-image';
import passed from './fixtures/book30-r2-passed.json';
import {mockImageDOM} from './helpers/book30-dom';
afterEach(()=>{vi.useRealTimers();vi.unstubAllGlobals();});
describe('book30 R3 targeted independent-QA repairs',()=>{
 it('preserves all37 independent PASS questions as complete runtime objects',()=>{
  expect(passed).toHaveLength(37);const book=snowBeforeBook();
  for(const item of passed)expect(book.questions(item.track[0] as 'A'|'B'|'C')[item.index]).toEqual(item.question);
 });
 it('limits the three NG B after-questions to the immediate next story step',()=>{
  const qs=snowBeforeBook().questions('B');
  for(const i of [0,2,5])expect(qs[i].prompt).toMatch(/next after/);
  expect(qs[0].options[qs[0].answer[0]].text).toBe('It begins to glow.');
  expect(qs[2].options[qs[2].answer[0]].text).toBe('Pick ripe apples gently.');
  expect(qs[5].options[qs[5].answer[0]].text).toBe('Press grapes and seal a wine barrel.');
 });
 it('gives the eight NG C tracks concrete hypothetical conditions without the invented snow-control distractor',()=>{
  const qs=snowBeforeBook().questions('C');const indices=[2,3,5,7,11,12,14,15];
  for(const i of indices){expect(qs[i].prompt.length).toBeGreaterThan(55);expect(qs[i].explanation).toMatch(/新情境|新安排|新增|新小鎮|新工作/);}
  expect(qs[2].prompt).toContain('fill a basket quickly');expect(qs[7].prompt).toContain('more apples still need cutting');
  expect(qs[14].prompt).toContain('boxes block');expect(qs[15].prompt).toContain('missing from the gathering');
  expect(JSON.stringify(qs[14])).not.toContain('hand stops');
 });
 it('has actual-art reading regions for exactly the17 reported pages and every narrated A/B/C sentence',()=>{
  const expected=[...Array.from({length:15},(_,i)=>i+2),18,19];expect(Object.keys(snowReadingRegions).map(Number)).toEqual(expected);
  const book=snowBeforeBook();for(const level of ['A','B','C'] as const)for(const page of expected)for(const line of book.pages(level)[page].lines){
   const regions=snowNarrationRegions(page,line);expect(regions.length).toBeGreaterThan(0);
   for(const region of regions){expect(region.x).toBeGreaterThanOrEqual(0);expect(region.x).toBeLessThanOrEqual(100);expect(region.y).toBeGreaterThanOrEqual(0);expect(region.y).toBeLessThanOrEqual(100);expect(region.w).toBeGreaterThan(0);expect(region.h).toBeGreaterThan(0);}
  }
  for(const p of [0,1,17])expect(snowNarrationRegions(p,'unchanged entrance/palm scene')).toEqual([]);
 });
 it('couples every reported page to overlay motion on narration, without altering or requesting another image',()=>{
  vi.useFakeTimers();vi.stubGlobal('matchMedia',()=>({matches:false}));const book=snowBeforeBook();
  for(const page of [...Array.from({length:15},(_,i)=>i+2),18,19]){
   const dom=mockImageDOM();const cleanup=mountSnowBeforeImage(dom.host,page,vi.fn());const fx=createSnowBeforeEffects(dom.host,page,false);
   fx.playback(true,false);fx.sentence(0,book.pages('C')[page].lines[0]);vi.advanceTimersByTime(1200);
   const cues=dom.nodes.filter(n=>n.className.startsWith('snow-narration-cue'));expect(cues.length).toBeGreaterThan(0);expect(cues.every(n=>n.animations.length===1)).toBe(true);
   expect(dom.world.querySelector('.snow-full-image')!.frames).toEqual([]);expect(dom.requests).toHaveLength(1);
   fx.dispose();expect(cues.every(n=>n.removeCount===1)).toBe(true);cleanup();expect(vi.getTimerCount()).toBe(0);
  }
 });
 it('pauses scheduled region cues, replaces them for the next sentence, and cleans all work on exit',()=>{
  vi.useFakeTimers();vi.setSystemTime(0);vi.stubGlobal('matchMedia',()=>({matches:false}));const dom=mockImageDOM();const cleanup=mountSnowBeforeImage(dom.host,7,vi.fn());const fx=createSnowBeforeEffects(dom.host,7,false);
  fx.playback(true,false);fx.sentence(0,'The adults press grapes and seal a wine barrel.');expect(dom.nodes.filter(n=>n.dataset.readingRegion).length).toBe(1);
  vi.advanceTimersByTime(200);fx.playback(true,true);vi.advanceTimersByTime(2000);expect(dom.nodes.filter(n=>n.dataset.readingRegion).length).toBe(1);
  fx.playback(true,false);vi.advanceTimersByTime(299);expect(dom.nodes.filter(n=>n.dataset.readingRegion).length).toBe(1);vi.advanceTimersByTime(1);expect(dom.nodes.filter(n=>n.dataset.readingRegion).length).toBe(2);
  fx.sentence(1,'Gail makes grape juice at another table.');expect(dom.nodes.filter(n=>n.dataset.readingRegion&&n.removeCount===0).map(n=>n.dataset.readingRegion)).toEqual(['gail-juice-bowl']);
  fx.dispose();cleanup();expect(vi.getTimerCount()).toBe(0);expect(dom.requests).toHaveLength(1);
 });
 it('uses motion-free region fades for reduced-motion and no unscoped CSS',()=>{
  vi.useFakeTimers();vi.stubGlobal('matchMedia',()=>({matches:true}));const dom=mockImageDOM();const cleanup=mountSnowBeforeImage(dom.host,12,vi.fn());const fx=createSnowBeforeEffects(dom.host,12,false);
  fx.playback(true,false);fx.sentence(0,'Gail notices a draft.');const cue=dom.nodes.find(n=>n.dataset.readingRegion==='window-gap')!;
  expect(cue.frames[0]).toEqual([{opacity:0},{opacity:.35,offset:.4},{opacity:0}]);expect(vi.getTimerCount()).toBe(0);fx.dispose();cleanup();
  const css=readFileSync('src/story/interactive/snow-before.css','utf8');expect(css.split('\n').filter(Boolean).every(line=>line.startsWith('.snow-before-book'))).toBe(true);
 });
});
