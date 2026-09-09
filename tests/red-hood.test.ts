import {describe,it,expect} from 'vitest';
import {existsSync} from 'node:fs';
import {redPages,redObjects,redScenes,redChoreography} from '../src/story/interactive/red-hood';
import {pages,parseProgress} from '../src/story/interactive/book';
describe('modern red hood story',()=>{
 it('has 24 complete pages with valid reachable mission objects',()=>{
  expect(redPages).toHaveLength(24);
  for(const p of redPages){expect(p.lines).toHaveLength(3);expect(redScenes[p.scene]).toBeDefined();for(const id of p.objects)expect(redObjects[id]).toBeDefined();
   for(const id of [p.mission.answer,p.mission.target,...(p.mission.steps||[])].filter(Boolean))expect(p.objects).toContain(id);
   expect(p.lines.join(' ')).not.toMatch(/yuyu|瑜瑜/i);
  }
 });
 it('provides all required scene, character and prop assets',()=>{
  for(const scene of Object.values(redScenes))expect(existsSync('images/story/red-hood-v1/'+(scene.sheet||'dining.png'))).toBe(true);
  for(const o of Object.values(redObjects)){if(o.image)expect(existsSync('images/story/red-hood-v1/'+o.image)).toBe(true);if(o.sprite)expect(existsSync('images/story/red-hood-v1/'+o.sprite.sheet)).toBe(true);}
 });
 it('keeps new progress in range without changing first-book limits',()=>{
  const raw=JSON.stringify({page:23,stars:[0,15,23,24],words:['hood']});
  expect(parseProgress(raw,24)).toEqual({page:23,stars:[0,15,23],words:['hood']});
  expect(parseProgress(raw).page).toBe(14);expect(pages).toHaveLength(15);
 });
 it('animates only present actors at valid sentence indices',()=>{
  for(const [page,lines] of Object.entries(redChoreography))for(const [line,cues] of Object.entries(lines)){
   expect(redPages[+page].lines[+line]).toBeTruthy();for(const cue of cues)expect(redPages[+page].objects).toContain(cue.actor);
  }
 });
});
