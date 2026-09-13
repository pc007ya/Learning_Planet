import {describe,it,expect} from 'vitest';
import {existsSync} from 'node:fs';
import {piratePages,pirateObjects,pirateVocabulary,pirateChoreography} from '../src/story/interactive/pirate';
import {pirateQuestions} from '../src/story/interactive/pirate-quiz';
describe('pirate new content',()=>{
 it('has complete scenes, tools and sentence cues',()=>{
  const pages=piratePages('B');expect(pages).toHaveLength(20);expect(new Set(pirateVocabulary).size).toBe(20);expect(new Set(pages.flatMap(p=>p.words))).toEqual(new Set(pirateVocabulary));
  for(const p of pages){expect(existsSync('images/story/pirate-v1/'+p.scene+'.png')).toBe(true);for(const id of [p.mission.answer,p.mission.target,...(p.mission.steps||[])].filter(Boolean))expect(p.objects).toContain(id);
   for(const id of p.objects){const o={...pirateObjects[id],...p.placements?.[id]};expect(o.id).toBe(id);if(o.image)expect(existsSync('images/story/pirate-v1/'+o.image)).toBe(true);}
  }
  for(const [p,lines] of Object.entries(pirateChoreography('B')))for(const [l,cues] of Object.entries(lines)){expect(Number(l)).toBeLessThan(pages[+p].lines.length);for(const cue of cues)expect(pages[+p].objects).toContain(cue.actor);}
 });
 it('keeps lifejackets for the boat and offers sixteen illustrated questions',()=>{
  const pages=piratePages('B');expect(pages[13].placements?.gail.image).toContain('lifejacket');expect(pages[18].placements?.gail.image).not.toContain('lifejacket');
  const qs=pirateQuestions('B');expect(qs).toHaveLength(16);expect(qs.filter(q=>q.id.startsWith('scene-'))).toHaveLength(6);for(const q of qs){expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text)).size).toBe(4);expect(q.answer[0]).toBeLessThan(4);expect(existsSync(q.image!)).toBe(true);}
 });
});
