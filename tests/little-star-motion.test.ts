import {describe,it,expect} from 'vitest';
import {pages} from '../src/story/interactive/book';
import {choreography,motionDuration} from '../src/story/interactive/choreography';
describe('narration choreography',()=>{
 it('uses existing actors and sentences in every scene',()=>{
  for(const [page,lines] of Object.entries(choreography))for(const [line,cues] of Object.entries(lines)){
   expect(pages[+page].lines[+line]).toBeTruthy();
   for(const cue of cues){expect(pages[+page].objects).toContain(cue.actor);expect(cue.x).toBeGreaterThan(0);expect(cue.x).toBeLessThan(100);expect(cue.y).toBeGreaterThan(0);expect(cue.y).toBeLessThan(100);}
  }
 });
 it('walks into the orchard during the opening sentence and gives slow mode more time',()=>{
  expect(pages[11].lines[0]).toBe('Gail walks into an orchard.');
  expect(choreography[11][0]).toContainEqual({actor:'gail',x:61,y:72,walk:true});
  expect(motionDuration(pages[11].lines[0],false)).toBeGreaterThanOrEqual(3200);
  expect(motionDuration(pages[11].lines[0],true)).toBeGreaterThan(motionDuration(pages[11].lines[0],false));
 });
});
