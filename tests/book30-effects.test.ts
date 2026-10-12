import {beforeEach,afterEach,describe,it,expect,vi} from 'vitest';
import {createSnowBeforeEffects} from '../src/story/interactive/snow-before-effects';
import {mountSnowBeforeImage} from '../src/story/interactive/snow-before-image';
import {mockImageDOM} from './helpers/book30-dom';
const setup=(page=1)=>{const dom=mockImageDOM();const cleanup=mountSnowBeforeImage(dom.host,page,vi.fn());return {...dom,cleanup,focus:dom.world.querySelector('[data-snow-focus]')!,image:dom.world.querySelector('.snow-full-image')!};};
beforeEach(()=>{vi.useFakeTimers();vi.setSystemTime(0);vi.stubGlobal('matchMedia',()=>({matches:false}));});
afterEach(()=>{vi.useRealTimers();vi.unstubAllGlobals();});
describe('book30 full-image effects lifecycle (mock DOM; no listening QA)',()=>{
 it('creates no sound/animation before a reading or interaction gesture',()=>{
  const dom=setup();const audio=vi.fn();vi.stubGlobal('AudioContext',audio);const fx=createSnowBeforeEffects(dom.host,1,true);
  expect(dom.focus.frames).toHaveLength(0);expect(audio).not.toHaveBeenCalled();fx.dispose();dom.cleanup();
 });
 it('pauses the snowflake-to-portal reveal timer and resumes its remaining delay',()=>{
  const dom=setup();const fx=createSnowBeforeEffects(dom.host,1,false);fx.sentence(0,'The snowflake glows.');
  expect(dom.focus.frames).toHaveLength(1);expect(dom.nodes.filter(n=>n.className==='snow-image-particle')).toHaveLength(6);expect(dom.image.frames).toHaveLength(0);
  vi.advanceTimersByTime(200);fx.playback(true,true);vi.advanceTimersByTime(2000);expect(dom.image.frames).toHaveLength(0);expect(dom.focus.animations[0].pause).toHaveBeenCalled();
  fx.playback(true,false);vi.advanceTimersByTime(499);expect(dom.image.frames).toHaveLength(0);vi.advanceTimersByTime(1);expect(dom.image.frames).toHaveLength(1);
  expect(dom.requests).toHaveLength(1);fx.dispose();dom.cleanup();
 });
 it('cancels all overlays/timers on page exit without changing the illustration URL',()=>{
  const dom=setup();const fx=createSnowBeforeEffects(dom.host,1,false);fx.interact('illustration');fx.dispose();vi.advanceTimersByTime(4000);
  expect(dom.image.frames).toHaveLength(0);expect(vi.getTimerCount()).toBe(0);expect(dom.nodes.filter(n=>n.className==='snow-image-particle').every(n=>n.removeCount===1)).toBe(true);
  expect(dom.focus.animations[0].cancel).toHaveBeenCalled();const count=dom.focus.frames.length;fx.sentence(0,'ignored');expect(dom.focus.frames).toHaveLength(count);expect(dom.requests).toHaveLength(1);dom.cleanup();
 });
 it('uses reduced-motion fades without particle motion',()=>{
  vi.stubGlobal('matchMedia',()=>({matches:true}));const dom=setup();const fx=createSnowBeforeEffects(dom.host,1,false);fx.interact('illustration');
  expect(dom.nodes.some(n=>n.className==='snow-image-particle')).toBe(false);expect(dom.focus.frames[0]).toEqual([{opacity:.25},{opacity:0}]);vi.advanceTimersByTime(180);expect(dom.image.frames).toHaveLength(1);fx.dispose();dom.cleanup();
 });
 it('does not replay an entrance midway through a second sentence or move baked characters',()=>{
  const dom=setup();const fx=createSnowBeforeEffects(dom.host,1,false);fx.sentence(0,'first');fx.sentence(1,'second');vi.advanceTimersByTime(700);
  expect(dom.focus.frames).toHaveLength(1);expect(dom.image.frames).toHaveLength(1);expect(dom.requests).toHaveLength(1);fx.dispose();dom.cleanup();
  const late=setup(10);const other=createSnowBeforeEffects(late.host,10,false);other.sentence(0,'The jars are steady.');expect(late.image.frames).toHaveLength(0);other.interact('illustration');expect(late.image.frames[0]).toEqual([{opacity:.92},{opacity:1}]);other.dispose();late.cleanup();
 });
});
