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
  expect(PRIMER.entries.filter(e=>e.kind==='課文').map(e=>[e.number,e.title,e.page])).toEqual([[1,'貓咪',22],[2,'鵝寶寶',28],[3,'河馬和河狸',34],[4,'笑嘻嘻',48],[5,'翹翹板',54],[6,'謝謝老師',60],[7,'龜兔賽跑',76],[8,'拔蘿蔔',82],[9,'動物狂歡會',90]]);
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

import { PRIMER_LEARNING, reviewOptions } from '../src/chinese-practice/primer-learning';
import { primerStudy } from '../src/chinese-practice/primer-view';
it('keeps verified lesson scope, source layers and incomplete originals explicit',()=>{
 expect(PRIMER_LEARNING.map(l=>l.number)).toEqual([1,2,3,4,5,6,7,8]);
 expect(PRIMER_LEARNING[1].missingOriginalPages).toEqual([]);
 expect(PRIMER_LEARNING[1].textbookPractice[0].content).toMatchObject({pages:[30,31]});
 expect(PRIMER_LEARNING[6].symbols).toEqual(['ㄊ','ㄎ','ㄣ']);
 expect(PRIMER_LEARNING[6].uncertainItems).toHaveLength(0);
 expect(PRIMER_LEARNING[7].text.pages).toEqual([82,83,84,85]);
 expect(PRIMER_LEARNING[7].textbookPractice[0]).toMatchObject({pages:[86,87]});
 for(const l of PRIMER_LEARNING){expect(l.specifiedCharacters).toBeNull();expect(l.audio.rate).toBe('-30%');expect(l.audio.voice).toBe('zh-TW-HsiaoChenNeural');expect(l.sourceRecords.length).toBeGreaterThan(0);}
 expect(primerStudy(2,'practice',{})).not.toContain('原題尚缺');
 expect(primerStudy(2,'practice',{})).toContain('ㄧㄚˊ ㄔˇ');
 expect(primerStudy(2,'practice',{})).toContain('念完後，你有什麼新發現？');
 expect(primerStudy(7,'practice',{})).toContain('念一念');
 expect(primerStudy(7,'practice',{})).toContain('ㄉㄨㄛ ㄊㄧㄠˋ ㄕㄥˊ');
 expect(primerStudy(7,'practice',{})).toContain('ㄐㄧㄥ ㄕㄣˊ ㄏㄠˇ');
 expect(primerStudy(7,'practice',{})).not.toContain('被筆跡遮住');
 expect(primerStudy(8,'text',{})).toContain('ㄅㄚˊ ㄌㄨㄛˊ ˙ㄅㄛ');
});
it('rotates all 24 review questions while preserving answer mapping and feedback',()=>{
 expect(PRIMER_LEARNING.reduce((n,l)=>n+l.review.questions.length,0)).toBe(24);
 for(const l of PRIMER_LEARNING)for(let i=0;i<l.review.questions.length;i++){
  const q=l.review.questions[i],options=reviewOptions(l,i);
  expect(options.filter(o=>o.correct).map(o=>o.text)).toEqual([q.options[q.correctIndex]]);
  expect(primerStudy(l.number,'review',{[q.id]:options.findIndex(o=>o.correct)})).toContain('答對了');
 }
});
