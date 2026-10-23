import { describe, expect, it } from 'vitest';
import { PRIMER, hasPrimer, textbookBookLabel } from '../src/chinese-practice/primer';
import { matchingLessons } from '../src/chinese-practice/model';
describe('Kangxuan primer contents from the supplied contents photo',()=>{
 const filters={year:115,semester:'上',grade:1,publisher:'康軒'};
 it('separates primer and first textbook without losing the original six lessons',()=>{
  expect(hasPrimer(filters)).toBe(true);
  expect(matchingLessons(filters)).toHaveLength(6);
  expect(matchingLessons(filters)[0].title).toBe('拍拍手');
  expect(textbookBookLabel(filters)).toBe('第1冊（國字課文）');
  for(const f of [{...filters,year:114},{...filters,semester:'下'},{...filters,grade:2},{...filters,publisher:'南一'}]) expect(hasPrimer(f)).toBe(false);
 });
 it('preserves all nine lesson titles, numbers and page starts from the photo',()=>{
  expect(PRIMER.entries.filter(e=>e.kind==='課文').map(e=>[e.number,e.title,e.page])).toEqual([[1,'貓咪',22],[2,'鵝媽媽',28],[3,'河馬和河狸',34],[4,'笑嘻嘻',48],[5,'翹翹板',54],[6,'謝謝老師',60],[7,'龜兔賽跑',76],[8,'拔蘿蔔',82],[9,'動物狂歡會',90]]);
  expect(PRIMER.entries).toHaveLength(22);
  expect(PRIMER.entries.filter(e=>e.kind==='單元').map(e=>[e.title,e.page])).toEqual([['米米的好朋友',17],['上學真有趣',43],['神奇故事樹',69]]);
  expect(new Set(PRIMER.entries.map(e=>e.id)).size).toBe(22);
 });
 it('does not label a contents page as a verified vocabulary source',()=>{
  expect(PRIMER.status).toBe('目錄已核');
  expect(PRIMER.vocabularyStatus).toContain('尚未收錄');
  expect(PRIMER.yearEvidence).toContain('使用者說明');
  for(const entry of PRIMER.entries) expect(entry).not.toHaveProperty('vocabulary');
 });
});
