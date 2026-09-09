import {describe,it,expect} from 'vitest';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {princessPages,princessObjects,princessScenes,princessChoreography} from '../src/story/interactive/princess';
import {princessVocabulary} from '../src/story/interactive/princess-text';
import {princessQuestions} from '../src/story/interactive/princess-quiz';
import {freshQuiz,quizScore} from '../src/story/interactive/story-quiz';
describe('Princess complete volume',()=>{
 for(const level of ['A','B','C'] as const){
  it(`${level}: all scenes, vocabulary, missions and motions are reachable`,()=>{
   const pages=princessPages(level);expect(pages).toHaveLength(20);
   const text=pages.flatMap(p=>p.lines).join(' ').toLowerCase();
   for(const word of princessVocabulary)expect(text).toMatch(new RegExp('\\b'+word+'(?:s|ing)?\\b'));
   pages.forEach((p,i)=>{expect(princessScenes[p.scene]).toBeTruthy();
    for(const id of [p.mission.answer,...(p.mission.target?[p.mission.target]:[]),...(p.mission.steps||[])])expect(p.objects).toContain(id);
    for(const id of p.objects){expect(princessObjects[id]).toBeTruthy();const o={...princessObjects[id],...p.placements?.[id]};expect(o.x-o.w/2).toBeGreaterThanOrEqual(0);expect(o.x+o.w/2).toBeLessThanOrEqual(100);expect(o.y+o.h/2).toBeLessThanOrEqual(100);const file=o.image||o.sprite?.sheet;if(file)expect(existsSync(resolve('images/story/princess-v1',file))).toBe(true);}
    for(const [line,cues] of Object.entries(princessChoreography(level)[i]||{})){expect(Number(line)).toBeLessThan(p.lines.length);for(const cue of cues)expect(p.objects).toContain(cue.actor);}
   });
  });
  it(`${level}: sixteen four-choice questions, six distinct picture matches and submission-only scoring`,()=>{
   const qs=princessQuestions(level);expect(qs).toHaveLength(16);expect(new Set(qs.map(q=>q.id)).size).toBe(16);expect(new Set(qs.slice(10).map(q=>q.image)).size).toBe(6);
   const state=freshQuiz();qs.forEach((q,i)=>{expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text)).size).toBe(4);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]]).toBeTruthy();expect(existsSync(q.image!)).toBe(true);state.answers[i]=q.answer;});expect(quizScore(state,qs)).toBe(0);
   state.attempted=qs.map(()=>true);expect(quizScore(state,qs)).toBe(16);state.answers[0]=[(qs[0].answer[0]+1)%4];expect(quizScore(state,qs)).toBe(15);
  });
 }
 it('has exactly twenty core words and shared illustrations across levels',()=>{expect(princessVocabulary).toHaveLength(20);expect(new Set(princessVocabulary).size).toBe(20);const a=princessPages('A'),c=princessPages('C');a.forEach((p,i)=>{expect(p.scene).toBe(c[i].scene);expect(p.objects).toEqual(c[i].objects);expect(p.lines).not.toEqual(c[i].lines);});});
 it('ships the art referenced by the reader',()=>{for(const o of Object.values(princessObjects)){const f=o.image||o.sprite?.sheet;if(f)expect(existsSync(resolve('images/story/princess-v1',f))).toBe(true);}expect(existsSync('images/story/princess-v1/environments.png')).toBe(true);});
});
