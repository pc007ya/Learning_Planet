import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {magicBallBook,magicBallBookFromPath} from '../src/story/interactive/magic-ball';
import {magicBallQuizRows} from '../src/story/interactive/magic-ball-quiz';
import source from './fixtures/book29-reader-source.json';
import sourceC from './fixtures/book29-original-C.json';
const levels=['A','B','C'] as const;
function viewPath(path:string){if(path.includes('../shared-gail-v1/'))return '../books28-29-gail-v1/'+path.split('/').pop()!.replace('-clean-v2','').replace('.png','.webp');return path.endsWith('.png')?path.slice(0,-4)+'.webp':path;}
function viewPage(page:any,index:number){for(const item of Object.values(page.placements)as any[])if(item?.image)item.image=viewPath(item.image);if(index===16)page.placements.card.image='eyes-card.svg';return page;}
describe('Book29 complete local reader candidate',()=>{
 it('preserves the canonical manuscript bytes, title, twenty words and previous Mira learning',()=>{
  const raw=readFileSync(new URL('./fixtures/book29-original-C.json',import.meta.url));
  expect(createHash('sha256').update(raw).digest('hex')).toBe('979d767766f041e4f46eded373d70b861b0d02964fed413ebd7f557d6e3eccbe');
  const book=magicBallBook();expect(book.words).toEqual(source.words);expect(book.words).toHaveLength(20);
  expect(book.title).toBe('Gail and the Ball with No Rules');expect(book.chineseTitle).toBe('瑜瑜與沒有規則的魔法球');
  expect(book.pages('C').map(p=>p.lines)).toEqual(sourceC.scenes.map(s=>s.text.C));
  expect(book.pages('C')[1].lines.join(' ')).toContain('where Mira learned her first low flight');
  expect(book.pages('C')[2].lines.join(' ')).toContain('She still practices small steps');
 });
 it.each(levels)('%s preserves all original text, translation, layers and missions apart from a clear charm label',level=>{
  const pages=magicBallBook().pages(level);expect(pages).toHaveLength(20);
  pages.forEach((p,i)=>{
   const expected=viewPage(structuredClone(source.levels[level][i]),i);
   if(expected.mission.answer==='guide')expected.mission.prompt='Find the broom charm.';
   expect(p).toEqual(expected);expect(p.objects).toContain(p.mission.answer);
   expect(p.translation?.split('|')).toHaveLength(p.lines.length);
  });
 });
 it.each(levels)('%s has sixteen contextual four-choice questions and balanced noncyclic answers',level=>{
  const qs=magicBallBook().questions(level);expect(qs).toHaveLength(16);
  expect(qs.map(q=>q.id)).toEqual(Array.from({length:16},(_,i)=>`magic-ball-${i}`));
  expect([0,1,2,3].map(n=>qs.filter(q=>q.answer[0]===n).length)).toEqual([4,4,4,4]);
  expect(qs.map(q=>q.answer[0])).not.toEqual(Array.from({length:16},(_,i)=>i%4));
  qs.forEach((q,i)=>{
   expect(q.kind).toBe('choice');expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text.toLowerCase().trim())).size).toBe(4);
   expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(magicBallQuizRows[i].tracks[level].choices[0]);
   expect(q.prompt).toMatch(/^In this story,/);expect(q.explanation).toMatch(/^Pages? \d/);expect(q.explanation).not.toBe(q.options[q.answer[0]].text);
   const art=source.originalArt[String(magicBallQuizRows[i].imageScene) as keyof typeof source.originalArt];expect(q.image).toBeUndefined();expect(q.sceneImage?.objects.length).toBeGreaterThan(0);expect(q.sceneImage?.background).toMatch(/\.webp$/);expect(q.imageAlt).toBe('故事回顧插圖');
  });
 });
 it('has genuinely different tracks and short A choices without claims of measured Lexile',()=>{
  magicBallQuizRows.forEach(r=>{
   expect(new Set(levels.map(l=>r.tracks[l].prompt)).size).toBe(3);
   expect(new Set(levels.map(l=>JSON.stringify(r.tracks[l].choices))).size).toBe(3);
   expect(new Set(levels.map(l=>r.tracks[l].explanation)).size).toBe(3);
   r.tracks.A.choices.forEach(s=>expect(s.split(/\s+/).length).toBeLessThanOrEqual(5));
   expect(r.pages.every(p=>p>=1&&p<=20)).toBe(true);
  });
 });
 it('retains the original picture families and narrowly selects only this route',()=>{
  expect(magicBallQuizRows.map(r=>r.imageScene)).toEqual([1,3,4,5,6,7,8,10,11,12,13,14,15,16,17,19]);
  expect(magicBallBookFromPath('/magic-ball-storybook.html')).toBe(true);
  for(const p of ['/english-storybook.html','/witch-storybook.html','/unicorn-storybook.html','/market-storybook.html'])expect(magicBallBookFromPath(p)).toBe(false);
  expect(magicBallBook().coverImage).toBe('images/story/magic-ball-v1/cover.webp');
 });
 it('regresses the actual source order, safety and shared decision evidence',()=>{
  expect(magicBallQuizRows[0].tracks.C.choices[0]).toContain('ball and charm stop');
  expect(magicBallQuizRows[1].tracks.C.choices[0]).toContain('still practices small steps');
  expect(magicBallQuizRows[4].tracks.C.explanation).toContain('does not hit anyone');
  expect(magicBallQuizRows[6].tracks.C.choices[0]).toContain('Gail asks the players to pause');
  expect(magicBallQuizRows[9].tracks.C.choices[0]).toContain('waits until the players are ready');
  expect(magicBallQuizRows[14].tracks.C.choices[0]).toContain('without blaming');
  expect(magicBallQuizRows[15].tracks.C.explanation).toContain('everyone helping decide');
 });
});
