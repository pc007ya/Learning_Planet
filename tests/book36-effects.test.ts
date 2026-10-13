import {beforeEach,afterEach,describe,it,expect,vi} from 'vitest';
import {createPotionEffects} from '../src/story/interactive/magic-potion-effects';
import {mountPotionImage} from '../src/story/interactive/magic-potion-image';
import {mockImageDOM} from './helpers/book36-dom';
const setup=(page=1)=>{const dom=mockImageDOM();const cleanup=mountPotionImage(dom.host,page,vi.fn());return {...dom,cleanup,focus:dom.world.querySelector('[data-potion-focus]')!,image:dom.world.querySelector('.potion-full-image')!};};
beforeEach(()=>{vi.useFakeTimers();vi.setSystemTime(0);vi.stubGlobal('matchMedia',()=>({matches:false}));});
afterEach(()=>{vi.useRealTimers();vi.unstubAllGlobals();});
describe('book36 full-image effects lifecycle (mock DOM; no listening QA)',()=>{
 it('creates no sound/animation before a reading or interaction gesture',()=>{
  const dom=setup();const audio=vi.fn();vi.stubGlobal('AudioContext',audio);const fx=createPotionEffects(dom.host,1,true);
  expect(dom.focus.frames).toHaveLength(0);expect(audio).not.toHaveBeenCalled();fx.dispose();dom.cleanup();
 });
 it('pauses the moonmint-to-portal reveal timer and resumes its remaining delay',()=>{
  const dom=setup();const fx=createPotionEffects(dom.host,1,false);fx.sentence(0,'The moonmint opens.');
  expect(dom.focus.frames).toHaveLength(1);expect(dom.nodes.filter(n=>n.className==='potion-image-particle')).toHaveLength(6);expect(dom.image.frames).toHaveLength(0);expect(dom.nodes.filter(n=>n.className==='potion-image-particle').map(n=>n.animationOptions[0].delay)).toEqual([300,410,520,630,740,850]);
  vi.advanceTimersByTime(200);fx.playback(true,true);vi.advanceTimersByTime(2000);expect(dom.image.frames).toHaveLength(0);expect(dom.focus.animations[0].pause).toHaveBeenCalled();
  fx.playback(true,false);vi.advanceTimersByTime(899);expect(dom.image.frames).toHaveLength(0);vi.advanceTimersByTime(1);expect(dom.image.frames).toHaveLength(1);
  expect(dom.requests).toHaveLength(1);fx.dispose();dom.cleanup();
 });
 it('cancels all overlays/timers on page exit without changing the illustration URL',()=>{
  const dom=setup();const fx=createPotionEffects(dom.host,1,false);fx.interact('illustration');fx.dispose();vi.advanceTimersByTime(4000);
  expect(dom.image.frames).toHaveLength(0);expect(vi.getTimerCount()).toBe(0);expect(dom.nodes.filter(n=>n.className==='potion-image-particle').every(n=>n.removeCount===1)).toBe(true);
  expect(dom.focus.animations[0].cancel).toHaveBeenCalled();const count=dom.focus.frames.length;fx.sentence(0,'ignored');expect(dom.focus.frames).toHaveLength(count);expect(dom.requests).toHaveLength(1);dom.cleanup();
 });
 it('uses reduced-motion fades without particle motion',()=>{
  vi.stubGlobal('matchMedia',()=>({matches:true}));const dom=setup();const fx=createPotionEffects(dom.host,1,false);fx.interact('illustration');
  expect(dom.nodes.some(n=>n.className==='potion-image-particle')).toBe(false);expect(dom.focus.frames[0]).toEqual([{opacity:.25},{opacity:0}]);vi.advanceTimersByTime(180);expect(dom.image.frames).toHaveLength(1);fx.dispose();dom.cleanup();
 });
 it('does not replay an entrance midway through a second sentence or move baked characters',()=>{
  const dom=setup();const fx=createPotionEffects(dom.host,1,false);fx.sentence(0,'first');fx.sentence(1,'second');vi.advanceTimersByTime(1100);
  expect(dom.focus.frames).toHaveLength(1);expect(dom.image.frames).toHaveLength(1);expect(dom.requests).toHaveLength(1);fx.dispose();dom.cleanup();
  const late=setup(10);const other=createPotionEffects(late.host,10,false);other.sentence(0,'Gail checks the recipe.');expect(late.image.frames).toHaveLength(0);other.interact('illustration');expect(late.focus.frames).toHaveLength(2);expect(late.image.frames).toHaveLength(0);other.dispose();late.cleanup();
 });
 it('emphasizes a story object on every narrated page without fetching neighbors',()=>{
  for(let page=0;page<20;page++){const dom=setup(page);const fx=createPotionEffects(dom.host,page,false);fx.sentence(0,'first');expect(dom.focus.frames).toHaveLength(1);expect(dom.requests).toHaveLength(1);fx.dispose();dom.cleanup();}
 });
 it('respects the sound switch and suspends/closes the audio context (no audible QA)',()=>{
  const dom=setup();const stop=vi.fn(),start=vi.fn(),resume=vi.fn(),suspend=vi.fn(),close=vi.fn();
  const osc={frequency:{setValueAtTime:vi.fn(),exponentialRampToValueAtTime:vi.fn()},connect:vi.fn(),start,stop,onended:undefined};
  const gain={gain:{setValueAtTime:vi.fn(),exponentialRampToValueAtTime:vi.fn()},connect:vi.fn()};osc.connect.mockReturnValue(gain);
  const audio=vi.fn(function(){return {resume,suspend,close,currentTime:0,destination:{},createOscillator:()=>osc,createGain:()=>gain};});
  vi.stubGlobal('AudioContext',audio);const fx=createPotionEffects(dom.host,1,false);
  fx.interact('illustration');expect(audio).not.toHaveBeenCalled();fx.sound(true);fx.interact('illustration');expect(audio).toHaveBeenCalledOnce();expect(start).toHaveBeenCalledOnce();
  fx.playback(true,true);expect(suspend).toHaveBeenCalled();fx.playback(true,false);expect(resume).toHaveBeenCalled();
  fx.sound(false);expect(stop).toHaveBeenCalled();const calls=start.mock.calls.length;fx.interact('illustration');expect(start).toHaveBeenCalledTimes(calls);
  fx.dispose();expect(close).toHaveBeenCalledOnce();dom.cleanup();
 });
});
