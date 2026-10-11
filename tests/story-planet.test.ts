import {describe,it,expect} from 'vitest';
import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
const catalog=JSON.parse(readFileSync(resolve('stories/catalog.json'),'utf8'));
describe('story planet reviewed catalog',()=>{
 it('publishes only complete books with unique IDs',()=>{expect(catalog.books.length).toBe(1);expect(new Set(catalog.books.map((b:{id:string})=>b.id)).size).toBe(catalog.books.length);});
 it('preserves the twenty clean pages and corrected sequence',()=>{const book=catalog.books[0];expect(book.pages).toHaveLength(20);expect(book.pages[12].title).toBe('第一個朋友');expect(book.pages[13].title).toBe('你好，我叫瑜瑜');expect(book.pages[15].title).toBe('放學的分享');for(const p of book.pages){expect(existsSync(resolve(p.image))).toBe(true);expect(p.title).toBeTruthy();}});
 it('retains authored text and layout separately from art',()=>{for(const p of catalog.books[0].pages){expect(typeof p.text).toBe('string');expect(p.authoringStyle).toBeTruthy();}});
 it('has a dedicated entrance and built reader',()=>{const html=readFileSync('index.html','utf8');expect(html).toContain('data-subject="story"');expect(html).toContain('href="story-planet.html"');expect(existsSync('modules/story-planet/story-planet.js')).toBe(true);});
});
