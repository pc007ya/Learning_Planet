import {describe,expect,it} from 'vitest';
import {moonlightObjects,moonlightPages,moonlightScenes} from '../src/story/interactive/moonlight';
import {moonlightQuestions} from '../src/story/interactive/moonlight-quiz';

describe('Gail and the Moonlight Garden',()=>{
 it('keeps one 20-scene story across A, B and C reading levels',()=>{
  for(const level of ['A','B','C'] as const){
   const pages=moonlightPages(level);
   expect(pages).toHaveLength(20);
   expect(pages.filter(page=>page.checkpoint)).toHaveLength(5);
   expect(pages.every(page=>page.translation&&page.lines.length>0)).toBe(true);
  }
 });

 it('keeps every interactive answer and sequence target tappable',()=>{
  for(const page of moonlightPages('B')){
   const required=[page.mission.answer,page.mission.target,...(page.mission.steps||[])].filter(Boolean) as string[];
   expect(required.every(id=>page.objects.includes(id)&&Boolean(moonlightObjects[id]))).toBe(true);
  }
 });

 it('maps all scenes to the five production atlases and supplies ten questions',()=>{
  expect(new Set(Object.values(moonlightScenes).map(scene=>scene.sheet)).size).toBe(5);
  for(const level of ['A','B','C'] as const)expect(moonlightQuestions(level)).toHaveLength(10);
 });
});
