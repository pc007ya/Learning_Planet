import {describe,it,expect} from 'vitest';
import {giantPages,giantVocabulary,giantObjects,giantChoreography} from '../src/story/interactive/giant';
import {giantQuestions} from '../src/story/interactive/giant-quiz';
import {existsSync} from 'node:fs';
describe('giant book',()=>{
 it('has 20 shared scenes and 20 core words across three levels',()=>{
  expect(new Set(giantVocabulary).size).toBe(20);
  for(const level of ['A','B','C'] as const){const pages=giantPages(level);expect(pages).toHaveLength(20);expect(pages.map(p=>p.scene)).toEqual(giantPages('A').map(p=>p.scene));for(const p of pages){expect(p.lines.length).toBeGreaterThanOrEqual(2);expect(p.objects).toContain(p.mission.answer);for(const id of p.objects)expect(giantObjects[id]).toBeTruthy();}for(const [page,lines] of Object.entries(giantChoreography(level)))for(const [line,cues] of Object.entries(lines)){expect(Number(line)).toBeLessThan(pages[Number(page)].lines.length);for(const cue of cues)expect(pages[Number(page)].objects).toContain(cue.actor);}}
 });
 it('has 16 four-choice questions including six image scenes',()=>{for(const l of ['A','B','C'] as const){const qs=giantQuestions(l);expect(qs).toHaveLength(16);expect(qs.filter(q=>q.id.startsWith('scene-'))).toHaveLength(6);for(const q of qs){expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text)).size).toBe(4);expect(q.answer[0]).toBeLessThan(4);expect(existsSync(q.image!)).toBe(true);}}});
});
