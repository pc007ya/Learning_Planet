import {describe,it,expect} from 'vitest';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {dragonPages,dragonChoreography,dragonObjects,dragonScenes,dragonText,type ReadingLevel} from '../src/story/interactive/dragon';
import {dragonQuestions,correctOrder} from '../src/story/interactive/dragon-quiz';
import {freshQuiz,quizScore} from '../src/story/interactive/story-quiz';
describe('Magical Storybook first volume',()=>{
 for(const level of ['A','B','C'] as ReadingLevel[]){
 it(`${level}: all twenty scenes have valid missions and sentence-aligned movements`,()=>{const pages=dragonPages(level);expect(pages).toHaveLength(20);for(const [i,p] of pages.entries()){expect(p.lines.length).toBeGreaterThan(0);expect(dragonScenes[p.scene]).toBeTruthy();for(const id of [...p.objects,p.mission.answer,...(p.mission.target?[p.mission.target]:[])]){expect(dragonObjects[id]).toBeTruthy();expect(p.objects).toContain(id);}for(const [line,cues] of Object.entries(dragonChoreography(level)[i]||{})){expect(Number(line)).toBeLessThan(p.lines.length);for(const cue of cues){expect(p.objects).toContain(cue.actor);expect(cue.x).toBeGreaterThan(0);expect(cue.x).toBeLessThan(100);}}}});
 it(`${level}: ten questions have valid answers and score independently`,()=>{const questions=dragonQuestions(level);expect(questions).toHaveLength(10);expect(new Set(questions.map(q=>q.id)).size).toBe(10);const state=freshQuiz();expect(quizScore(state,questions)).toBe(0);for(const [i,q] of questions.entries()){expect(q.explanation).toBeTruthy();for(const a of q.answer)expect(q.options[a]).toBeTruthy();state.answers[i]=[...q.answer];state.attempted[i]=true;}expect(quizScore(state,questions)).toBe(10);state.answers[0]=[0];expect(quizScore(state,questions)).toBe(9);});
 }
 it('shares scenes and objects across levels while changing the text',()=>{const a=dragonPages('A'),c=dragonPages('C');for(let i=0;i<20;i++){expect(a[i].scene).toBe(c[i].scene);expect(a[i].objects).toEqual(c[i].objects);expect(a[i].lines).not.toEqual(c[i].lines);}expect(dragonText[16].B.join(' ')).toContain('edge');});
 it('does not score an answer until submitted',()=>{const state=freshQuiz(),questions=dragonQuestions('A');state.answers[0]=[...questions[0].answer];expect(quizScore(state,questions)).toBe(0);state.attempted[0]=true;expect(quizScore(state,questions)).toBe(1);});
 it('requires the whole sequence in the right order',()=>{expect(correctOrder([1,2],[1,2,0])).toBe(false);expect(correctOrder([0,2,1],[1,2,0])).toBe(false);expect(correctOrder([1,2,0],[1,2,0])).toBe(true);});
 it('ships all original character and setting artwork',()=>{for(const o of Object.values(dragonObjects)){const file=o.image||o.sprite?.sheet;if(file)expect(existsSync(resolve('images/story/dragon-v1',file))).toBe(true);}expect(existsSync('images/story/dragon-v1/scenes.png')).toBe(true);expect(existsSync('images/story/dragon-v1/cover.png')).toBe(true);});
});
