import {describe,it,expect} from 'vitest';
import {redPages as originalPages,redObjects,redScenes,redChoreography} from '../src/story/interactive/red-hood';
import {redPages,redText,redChinese} from '../src/story/interactive/red-hood-text';
import {redQuestions,redQuizRows} from '../src/story/interactive/red-hood-quiz';
import original from './fixtures/book09-original.json';
const levels=['A','B','C'] as const;
describe('Book 09 original-preserving graded completion',()=>{
 it('matches the 24-page official original, including every teaching word',()=>{
  expect(originalPages).toHaveLength(24);expect(redText).toHaveLength(24);
  originalPages.forEach((p,i)=>{expect(p.lines).toEqual(original.pages[i].text.original.en);expect(p.title).toBe(original.pages[i].title);expect(p.words).toEqual(original.pages[i].words);expect(p.mission).toEqual(original.pages[i].mission);});
 });
 it.each(levels)('%s preserves layout, missions, words and sentence motion indices',level=>{
  redPages(level).forEach((p,i)=>{const o=originalPages[i];expect({...p,lines:o.lines,translation:o.translation}).toEqual(o);expect(p.lines).toHaveLength(3);expect(redChinese(i,level)).toHaveLength(3);expect(p.translation).toBe(redChinese(i,level).join('|'));expect(redScenes[p.scene]).toBeDefined();for(const id of p.objects)expect(redObjects[id]).toBeDefined();for(const [line,cues] of Object.entries(redChoreography[i]||{})){expect(p.lines[+line]).toBeTruthy();for(const cue of cues)expect(p.objects).toContain(cue.actor);}});
 });
 it.each(levels)('%s has sixteen structurally valid, balanced, contextual questions',level=>{
  const qs=redQuestions(level);expect(qs).toHaveLength(16);expect(new Set(qs.map(q=>q.id)).size).toBe(16);
  expect([0,1,2,3].map(a=>qs.filter(q=>q.answer[0]===a).length)).toEqual([4,4,4,4]);
  qs.forEach((q,i)=>{expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.trim().toLowerCase())).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(redQuizRows[i].tracks[level].choices[0]);expect(q.prompt).toMatch(/^In this story,/);expect(q.imageAlt).toBe('故事回顧插圖');expect(q.explanation).toMatch(/Page|page/);expect(redQuizRows[i].pages.every(p=>p>=1&&p<=24)).toBe(true);});
 });
 it('actually varies all tracks, with short A choices and unchanged core word sets',()=>{
  redText.forEach(p=>expect(new Set(levels.map(l=>p[l].en.join(' '))).size).toBe(3));
  redQuizRows.forEach(row=>{expect(new Set(levels.map(l=>row.tracks[l].prompt)).size).toBe(3);expect(new Set(levels.map(l=>JSON.stringify(row.tracks[l].choices))).size).toBe(3);expect(new Set(levels.map(l=>row.tracks[l].explanation)).size).toBe(3);row.tracks.A.choices.forEach(s=>expect(s.split(/\s+/).length).toBeLessThanOrEqual(5));});
  for(const l of levels)expect(new Set(redPages(l).flatMap(p=>p.words))).toEqual(new Set(originalPages.flatMap(p=>p.words)));
 });
});
