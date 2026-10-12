import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {snowBeforeBook,snowBeforeFromPath} from '../src/story/interactive/snow-before';
import quizzes from '../src/story/interactive/snow-before-quiz.json';
import original from './fixtures/book30-original.json';
const book=snowBeforeBook();
describe('book 30 source and graded quiz candidate',()=>{
 it('preserves recovered ABC except explicit neutral-role repairs; C is exact',()=>{
  for(const level of ['A','B','C'] as const){
   const english=original.levels[level].english.map(lines=>[...lines]);
   const chinese=original.levels[level].chinese.map(lines=>[...lines]);
   if(level==='A'){chinese[4][0]='孩子們摘成熟的蘋果。';chinese[6][0]='孩子們收集葡萄。';chinese[10][0]='鄰居們裝滿乾淨的罐子。';}
   if(level==='B'){english[4][0]='The children pick ripe apples gently.';chinese[4]=['孩子們輕輕摘下成熟蘋果。','孩子們把蘋果放進籃子。'];chinese[6][1]='孩子們把籃子交給大人。';chinese[10][1]='鄰居們蓋好每個罐蓋。';}
   expect(book.pages(level).map(p=>p.lines)).toEqual(english);
   expect(book.pages(level).map((_,i)=>book.chinese(i,level))).toEqual(chinese);
   expect(book.pages(level)).toHaveLength(20);
  }
  expect(book.words).toEqual(original.words);expect(new Set(book.words).size).toBe(20);
 });
 it('keeps distinct full ABC texts and consistent scene/mission object references',()=>{
  const serialized=['A','B','C'].map(l=>JSON.stringify(book.pages(l as 'A'|'B'|'C').map(p=>p.lines)));
  expect(new Set(serialized).size).toBe(3);
  for(const level of ['A','B','C'] as const)for(const page of book.pages(level)){
   expect(book.scenes[page.scene]).toBeDefined();expect(page.objects).toContain(page.mission.answer);
   expect(page.objects).toEqual(['illustration']);expect(page.placements).toBeUndefined();
   for(const id of page.objects)expect(book.objects[id]).toBeDefined();
  }
  expect(JSON.stringify(book.pages('C'))).not.toContain('kneeling-clean-v2.png');
 });
 it('offers 16 distinct questions per level, four unique options and one valid answer',()=>{
  const ids:string[]=[];
  for(const level of ['A','B','C'] as const){
   const questions=book.questions(level);expect(questions).toHaveLength(16);
   for(const q of questions){
    ids.push(q.id);expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.trim().toLowerCase())).size).toBe(4);
    expect(q.answer).toHaveLength(1);expect(q.answer[0]).toBeGreaterThanOrEqual(0);expect(q.answer[0]).toBeLessThan(4);
    expect(q.explanation).not.toBe(q.options[q.answer[0]].text);expect(q.explanation).toMatch(/第\d+幕/);
   }
   expect(new Set(questions.map(q=>q.prompt)).size).toBe(16);
  }
  expect(new Set(ids).size).toBe(48);
  expect(quizzes.A.map(q=>q.prompt)).not.toEqual(quizzes.B.map(q=>q.prompt));
  expect(quizzes.B.map(q=>q.prompt)).not.toEqual(quizzes.C.map(q=>q.prompt));
 });
 it('anchors every explanation in that same level, with independent JPGs only on reviewed A questions',()=>{
  for(const level of ['A','B','C'] as const)for(const q of quizzes[level]){
   expect(q.evidencePages.length).toBeGreaterThan(0);
   for(const e of q.evidenceText){expect(e.page).toBeGreaterThanOrEqual(1);expect(e.page).toBeLessThanOrEqual(20);expect(e.lines).toEqual(book.pages(level)[e.page-1].lines);}
  }
  expect(quizzes.A.filter(q=>q.image).map(q=>q.image)).toEqual([5,8,10,15].map(n=>`images/story/snow-before-v1/scene/${String(n).padStart(2,'0')}.webp`));
  expect(book.questions('B').some(q=>q.image||q.sceneImage)).toBe(false);
  expect(book.questions('C').some(q=>q.image||q.sceneImage)).toBe(false);
 });
 it('uses isolated route wiring and no story-scene preloads or remote source paths',()=>{
  expect(snowBeforeFromPath('/snow-before-storybook.html')).toBe(true);
  expect(snowBeforeFromPath('/snow-after-storybook.html')).toBe(false);
  const html=readFileSync('snow-before-storybook.html','utf8');
  expect(html).toContain('modules/little-star/little-star.js');expect(html).not.toMatch(/preload|prefetch|raw\.githubusercontent|https:\/\//);
  const source=readFileSync('src/story/interactive/index.ts','utf8');
  expect(source).toContain("if(screen==='cover'){cover();return;}");
  expect(source.match(/createSnowBeforeEffects\(world,page,soundEffects\)/g)).toHaveLength(2);
  const shelf=readFileSync('src/story/index.ts','utf8');
  expect(shelf.match(/Gail and the Town Before the Snow/g)).toHaveLength(1);
  expect(shelf.match(/'snow-before-storybook.html'/g)).toHaveLength(1);
 });
});
