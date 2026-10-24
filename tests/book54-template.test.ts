import {describe,it,expect,afterEach} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import data from '../src/story/underwater-world/data.json';
import quizzes from '../src/story/interactive/underwater-world-quiz.json';
import {underwaterBook,underwaterCard,underwaterCoverMarkup,underwaterObjects} from '../src/story/interactive/underwater-world';
import {mockImageDOM,MockNode} from './helpers/book34-dom';
import {vi} from 'vitest';
import {drawCover} from '../src/story/jacket';
afterEach(()=>vi.unstubAllGlobals());
describe('Book54 shared template and protected content',()=>{
 it('preserves the complete approved bilingual story and layer metadata byte for byte',()=>{
  // Approved data at b95ad213; keep this check independent of Git history in shallow CI checkouts.
  const originalSHA256='78f1a452ceec2565b6f81548c06c24a37588374c0c48b75a39e950cfbdefa372';
  expect(createHash('sha256').update(readFileSync('src/story/underwater-world/data.json')).digest('hex')).toBe(originalSHA256);
  const book=underwaterBook();for(const level of ['A','B','C'] as const){const pages=book.pages(level);expect(pages).toHaveLength(20);pages.forEach((p,i)=>{expect(p.lines.join(' ')).toEqual(data.scenes[i].text[level].join(' '));expect(book.chinese(i,level)).toEqual(data.scenes[i].chinese[level]);expect(p.objects).toEqual(underwaterObjects(i).map(o=>o.id));});}
 });
 it('guards the direct route before importing the common reader and avoids old cover layers',()=>{
  const html=readFileSync('underwater-world-storybook.html','utf8');expect(html).toContain('modules/story-entry.mjs');expect(html).toContain('data-story-reader="modules/little-star/little-star.js');expect(html).not.toContain('modules/underwater-world/underwater-world.js');
  expect(underwaterCoverMarkup()).not.toMatch(/<img|shared-gail|Scene/);
 });
 it('links only whole teaching words to a page, including ordinary noun variants',()=>{
  const pages=underwaterBook().pages('C');expect(pages[1].words).toContain('necklace');expect(pages[1].words).not.toContain('fin');expect(pages[12].words).toContain('cling');
 });
 it('gives each level sixteen independent, uniquely answerable questions with story evidence',()=>{
  const ids=new Set<string>(),prompts=new Set<string>();for(const level of ['A','B','C'] as const){expect(quizzes[level]).toHaveLength(16);for(const q of quizzes[level]){expect(ids.has(q.id)).toBe(false);ids.add(q.id);expect(prompts.has(q.prompt)).toBe(false);prompts.add(q.prompt);expect(new Set(q.options).size).toBe(4);expect(q.answer).toBeGreaterThanOrEqual(0);expect(q.answer).toBeLessThan(4);expect(q.options[q.answer]).toBeTruthy();expect(q.evidenceScenes.every(n=>n>=1&&n<=20)).toBe(true);expect(q.explanation.length).toBeGreaterThan(25);}}
  expect(quizzes.C.every(q=>['inference','integration','prediction','transfer'].includes(q.skill))).toBe(true);
  expect(quizzes.C.filter(q=>q.evidenceScenes.length>1).length).toBeGreaterThanOrEqual(10);
 });
 it('does not request word art until that card is activated and requests it once',async()=>{
  const dom=mockImageDOM();const cards=data.vocabulary.map(v=>{const c=new MockNode('button',dom.requests);c.className='vocab-card';c.append(underwaterCard(v.word) as unknown as MockNode);dom.world.append(c);return c;});
  await Promise.resolve();expect(dom.requests).toHaveLength(0);expect(dom.nodes.filter(n=>n.style.backgroundImage)).toHaveLength(0);
  const kelp=cards[data.vocabulary.findIndex(v=>v.word==='detour')];kelp.click();expect(dom.requests).toEqual(['images/story/underwater-world-v1/kelp.png']);kelp.click();expect(dom.requests).toHaveLength(1);
 });
 it('shows the full native cover on the shelf without a book49 title overlay',()=>{
  const image={naturalWidth:320,naturalHeight:480};const ctx={canvas:{width:816,height:972},fillRect:vi.fn(),drawImage:vi.fn(),fillText:vi.fn()};
  drawCover(ctx as unknown as CanvasRenderingContext2D,image as HTMLImageElement,data.title,true);
  expect(ctx.drawImage).toHaveBeenCalledWith(image,84,0,648,972);expect(ctx.fillText).not.toHaveBeenCalled();
  drawCover(ctx as unknown as CanvasRenderingContext2D,image as HTMLImageElement,'Gail and the Princess’s Weekend Break',true);expect(ctx.fillText).toHaveBeenCalledWith('Weekend Break',408,124,752);
 });
});
