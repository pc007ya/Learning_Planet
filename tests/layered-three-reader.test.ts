import {describe,it,expect} from 'vitest';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {layeredBook,layeredBookFromPath} from '../src/story/interactive/layered-three';
import type {ReadingLevel} from '../src/story/interactive/dragon-text';
describe('three complete layered readers',()=>{
 for(const key of ['witch','mirror','star-library'] as const){
  const book=layeredBook(key);
  it(`${key}: loads the correct book, not the fallback star story`,()=>{expect(layeredBookFromPath('/'+key+'-storybook.html')).toBe(key);expect(existsSync(key+'-storybook.html')).toBe(true);});
  it(`${key}: all levels have complete bilingual pages and existing layer assets`,()=>{
   for(const level of ['A','B','C'] as ReadingLevel[]){
    const pages=book.pages(level);expect(pages).toHaveLength(20);
    for(const p of pages){expect(p.lines.length).toBeGreaterThan(0);expect(p.translation?.split('|')).toHaveLength(p.lines.length);expect(p.objects).toContain(p.mission.answer);expect(p.objects).toContain('gail');expect(new Set(p.objects).size).toBe(p.objects.length);
     expect(existsSync(resolve(book.asset,p.scene==='bedroom'?'../shared-gail-v1/bedroom.png':p.scene+'.png'))).toBe(true);
     for(const id of p.objects){const object={...book.objects[id],...p.placements?.[id]};expect(object.image).toBeTruthy();expect(existsSync(resolve(book.asset,object.image!))).toBe(true);}
    }
   }
   expect(book.pages('A')[5].lines).not.toEqual(book.pages('C')[5].lines);
   expect(book.words).toHaveLength(20);expect(book.entries.every(e=>e[1]&&e[1]!==e[0])).toBe(true);
  });
  it(`${key}: 16 answerable questions per level`,()=>{for(const level of ['A','B','C'] as ReadingLevel[]){const questions=book.questions(level);expect(questions).toHaveLength(16);for(const q of questions){expect(q.sceneImage).toBeTruthy();expect(existsSync(resolve(q.sceneImage!.background))).toBe(true);expect(q.sceneImage!.objects.length).toBeGreaterThan(1);for(const o of q.sceneImage!.objects)expect(existsSync(resolve(q.sceneImage!.assetBase,o.image!))).toBe(true);expect(q.options).toHaveLength(4);expect(new Set(q.options.map(o=>o.text)).size).toBe(4);expect(q.options[q.answer[0]].text).toBe(q.explanation);}}});
 }
 it('unknown routes do not select a new book',()=>expect(layeredBookFromPath('/mermaid-storybook.html')).toBeUndefined());
});
