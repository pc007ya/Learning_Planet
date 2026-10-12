import{describe,it,expect}from'vitest';
import{marketBook,marketBookFromPath}from'../src/story/interactive/market';
import{marketQuestions,marketQuizRows}from'../src/story/interactive/market-quiz';
import source from'./fixtures/book28-reader-source.json';
const levels=['A','B','C']as const;
function path(p:string){if(p.includes('../shared-gail-v1/'))return'../books28-29-gail-v1/'+p.split('/').pop()!.replace('-clean-v2','').replace('.png','.webp');if(p==='../time-v1/table.png')return'table.webp';return p.endsWith('.png')?p.slice(0,-4)+'.webp':p;}
describe('Book28 wired original reader',()=>{
 it.each(levels)('%s keeps original text, translations, twenty pages and usable current character layers',level=>{
  const book=marketBook(),pages=book.pages(level);expect(pages).toHaveLength(20);expect(book.words).toEqual(source.words);expect(book.words).toHaveLength(24);
  pages.forEach((page,i)=>{const expected=structuredClone(source.levels[level].pages[i]);for(const obj of Object.values(expected.placements)){obj.image=path(obj.image);if(obj.id==='card2')obj.word='second card';}if(expected.mission.answer==='guide')expected.mission.prompt='Find the gold token.';expect(page).toEqual(expected);expect(page.objects).toContain(page.mission.answer);});
 });
 it.each(levels)('%s preserves the reviewed question text and answer mapping while rendering the matching page',level=>{
  const book=marketBook();book.questions(level).forEach((q,i)=>{const original=marketQuestions(level)[i];expect(q.prompt).toBe(original.prompt);expect(q.options).toEqual(original.options);expect(q.answer).toEqual(original.answer);expect(q.explanation).toBe(original.explanation);expect(q.image).toBeUndefined();const page=book.pages(level)[marketQuizRows[i].imageScene-1];expect(q.sceneImage?.objects.map(o=>o.id)).toEqual(page.objects);expect(q.sceneImage?.background).toMatch(/\.webp$/);});
 });
 it('selects only the new route and keeps 24 teaching entries',()=>{expect(marketBookFromPath('/market-storybook.html')).toBe(true);expect(marketBookFromPath('/magic-ball-storybook.html')).toBe(false);expect(marketBook().entries).toHaveLength(24);expect(marketBook().objects.gail.image).toBe('../books28-29-gail-v1/kneeling.webp');});
});
