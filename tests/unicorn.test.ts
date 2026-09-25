import {expect,test} from 'vitest';
import {existsSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {unicornBook} from '../src/story/interactive/unicorn';
import story from '../src/story/interactive/unicorn-story.json';
import vocabulary from '../src/story/interactive/unicorn-vocabulary.json';

test('the published C text stays identical to the already produced video narration',()=>{
 const cText=story.map(page=>page.C.join('\n')).join('\n\n');
 expect(createHash('sha256').update(cText).digest('hex')).toBe('d3e778da3d62ab456bb22b1d2d71cbb4594299f268d2be209c3565734dd1830d');
});

test('all levels have 20 complete pages, usable layered art and 16 illustrated questions',()=>{
 const book=unicornBook();
 expect(vocabulary).toHaveLength(20);
 expect(new Set(vocabulary).size).toBe(20);
 for(const level of ['A','B','C'] as const){
  const pages=book.pages(level);
  const questions=book.questions(level);
  expect(pages).toHaveLength(20);
  expect(questions).toHaveLength(16);
  pages.forEach((page,index)=>{
   expect(page.lines.length).toBeGreaterThan(0);
   expect(book.chinese(index,level).length).toBeGreaterThan(0);
   expect(page.objects).toContain(page.mission.answer);
   expect(existsSync(`${book.asset}${page.scene}.png`)).toBe(true);
   page.objects.forEach(id=>{
    const object={...book.objects[id],...page.placements?.[id]};
    expect(existsSync(`${book.asset}${object.image}`),object.image).toBe(true);
   });
  });
  questions.forEach(question=>{
   expect(question.sceneImage).toBeDefined();
   expect(existsSync(question.sceneImage!.background)).toBe(true);
   expect(question.options).toHaveLength(4);
   expect(question.answer[0]).toBeGreaterThanOrEqual(0);
   expect(question.answer[0]).toBeLessThan(4);
  });
 }
 const catalog=JSON.parse(readFileSync('docs/story-catalog/catalog.json','utf8'));
 const prior=new Set(catalog.books.filter((book:{id:string})=>book.id!=='unicorn').flatMap((book:{words:string[]})=>book.words));
 expect(vocabulary.filter(word=>prior.has(word)).length).toBeLessThanOrEqual(2);
});
