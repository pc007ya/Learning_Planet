import {describe,it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {splitBookSentences} from '../src/story/interactive/shared-book-sentences';
import park from '../src/story/amusement-park/data.json';
import ocean from '../src/story/underwater-world/data.json';
describe('Books 54 and 55 use the first ebook reader',()=>{
 it('routes both guarded books to the first book runtime and stylesheet',()=>{
  const first=readFileSync('english-storybook.html','utf8');
  for(const book of ['underwater-world','amusement-park']){
   const html=readFileSync(book+'-storybook.html','utf8');
   for(const asset of ['modules/little-star/little-star.js','modules/little-star/little-star.css']){expect(first).toContain(asset);expect(html).toContain(asset);}
   expect(html).toContain('id="little-star"');expect(html).toContain('modules/story-entry.mjs');
   expect(html).not.toContain('modules/'+book+'/');
  }
 });
 it('preserves every approved word when separating paragraphs for shared reading controls',()=>{
  for(const data of [park,ocean])for(const scene of data.scenes)for(const level of ['A','B','C'] as const){
   const original=scene.text[level].join(' ').replace(/\s+/g,' ').trim();
   expect(splitBookSentences(scene.text[level]).join(' ')).toBe(original);
  }
  expect(splitBookSentences(['Mr. Reed smiles. “Let’s go!” Gail waves.'])).toEqual(['Mr. Reed smiles.','“Let’s go!”','Gail waves.']);
 });
 it('keeps the approved story data unchanged',()=>{
  expect(createHash('sha256').update(readFileSync('src/story/underwater-world/data.json')).digest('hex')).toBe('78f1a452ceec2565b6f81548c06c24a37588374c0c48b75a39e950cfbdefa372');
  const before='ca4e925ff2a489db68a05a0c0c3649d136cc1716f1d8046752143a2cc22722ee';
  expect(createHash('sha256').update(readFileSync('src/story/amusement-park/data.json')).digest('hex')).toBe(before);
 });
});
