import { describe, expect, it } from 'vitest';
import { createHash } from 'node:crypto';
import { CATALOG_SUMMARY, COVERED_GRADES, LESSONS, lessonDisplayTitle, lessonLabel } from '../src/chinese-practice/catalog';
import sources from '../src/chinese-practice/coverage-sources-grades45.json';
import status from '../src/chinese-practice/phonetics-status-grades45.json';
import legacyStatus from '../src/chinese-practice/phonetics-status.json';
import newSingleSounds from '../src/chinese-practice/sounds-single-grades45.json';
import oldSingleSounds from '../src/chinese-practice/sounds-single.json';
import auditData from '../src/chinese-practice/sounds-audit-grades45.json';
import { hasPendingSounds, matchingLessons, practiceRows, removeCharacter, selectionOf, setSelections, validSound } from '../src/chinese-practice/model';

const lessons = LESSONS.filter(lesson=>lesson.grade===4||lesson.grade===5);
const digest = (value:unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
const key = (entry:{lessonId:string;category:string;text:string}) => `${entry.lessonId}:${entry.category}:${entry.text}`;
type AuditRecord={text:string;sourceUrl:string;checkedAt:string;toneChecked:boolean;error?:string;
  dictionaries:{dictionary:string;readings:{sounds:string[];sourceUrl:string}[]}[]};
const audit=auditData as unknown as Record<string,AuditRecord>;

describe('115-upper Chinese grades 4–5 expansion',()=>{
  it('ships a complete non-interim lookup audit with explicit dictionary provenance and no copied definitions',()=>{
    expect('interim' in status&&status.interim).not.toBe(true);
    const terms=[...new Set(lessons.flatMap(lesson=>lesson.vocabulary.flatMap(item=>[
      item.text,...Array.from(item.text).filter(char=>/^\p{Script=Han}$/u.test(char)),
    ])))].sort();
    expect(terms).toHaveLength(2178);
    expect(Object.keys(audit).sort()).toEqual(terms);
    expect(status.auditedTerms).toBe(terms.length);
    expect((status as {requiredTerms?:number}).requiredTerms).toBe(terms.length);
    for(const [text,record] of Object.entries(audit)) {
      expect(record.text).toBe(text);
      expect(new URL(record.sourceUrl).hostname).toBe('pedia.cloud.edu.tw');
      expect(new URL(record.sourceUrl).searchParams.get('title')).toBe(text);
      expect(['2026-10-09','2026-10-22']).toContain(record.checkedAt);
      for(const field of ['definition','html','examples']) expect(Object.keys(record)).not.toContain(field);
      for(const dictionary of record.dictionaries) {
        expect(['mini_dict','dic_concise','dic_revised']).toContain(dictionary.dictionary);
        for(const reading of dictionary.readings) {
          expect(reading.sounds).toHaveLength(Array.from(text).length);
          Array.from(text).forEach((char,index)=>expect(/^\p{Script=Han}$/u.test(char)
            ? validSound(reading.sounds[index]) : reading.sounds[index]==='').toBe(true));
          expect(new URL(reading.sourceUrl).hostname).toMatch(/^dict\.(mini|concised|revised)\.moe\.edu\.tw$/);
        }
      }
    }
  });
  it('adds exactly six official books without replacing older books or borrowing lower semesters',()=>{
    const expected:Record<string,number[]> = {
      '4:南一':[177,122], '4:康軒':[180,127], '4:翰林':[176,117],
      '5:南一':[216,157], '5:康軒':[224,169], '5:翰林':[222,172],
    };
    expect(lessons).toHaveLength(72);
    expect(LESSONS).toHaveLength(165);
    expect(new Set(LESSONS.map(lesson=>lesson.id)).size).toBe(165);
    expect(lessons.reduce((n,lesson)=>n+lesson.vocabulary.length,0)).toBe(2059);
    expect(LESSONS.reduce((n,lesson)=>n+lesson.vocabulary.length,0)).toBe(4438);
    expect(COVERED_GRADES).toEqual([1,2,3,4,5]);
    expect(CATALOG_SUMMARY).toBe('115 上 · 三出版社 1～5 年級 · 164 課＋前導單元');
    for(const grade of [4,5]) for(const publisher of ['南一','康軒','翰林']) {
      const book=matchingLessons({year:115,semester:'上',grade,publisher});
      expect(book.map(lesson=>lesson.number)).toEqual(Array.from({length:12},(_,i)=>i+1));
      const terms=book.flatMap(lesson=>lesson.vocabulary);
      expect(['生字','語詞'].map(category=>terms.filter(item=>item.category===category).length)).toEqual(expected[`${grade}:${publisher}`]);
      expect(terms.filter(item=>item.category==='認讀字')).toEqual([]);
      expect(matchingLessons({year:115,semester:'下',grade,publisher})).toEqual([]);
      expect(matchingLessons({year:114,semester:'上',grade,publisher})).toEqual([]);
      expect(matchingLessons({year:115,semester:'上',grade:6,publisher})).toEqual([]);
    }
  });

  it('exactly matches the indexed lesson IDs, original source titles and categorized word sequences',()=>{
    expect(sources.lessonCount).toBe(72);
    expect(sources.vocabularyCount).toBe(2059);
    expect(sources.books).toHaveLength(6);
    const recorded=sources.books.flatMap(book=>book.lessons);
    expect(recorded.map(lesson=>lesson.id).sort()).toEqual(lessons.map(lesson=>lesson.id).sort());
    for(const book of sources.books) {
      const index=new URL(book.indexUrl);
      expect(index.hostname).toBe('pedia.cloud.edu.tw');
      expect(index.searchParams.get('year')).toBe('115_1');
      expect(index.searchParams.get('degree')).toBe(String(book.grade));
      expect(index.searchParams.get('press')).toBe(`${book.publisher}版`);
      expect(book.indexSha256).toMatch(/^[a-f0-9]{64}$/);
      for(const source of book.lessons) {
        const lesson=lessons.find(item=>item.id===source.id)!;
        expect(lesson.title).toBe(source.title);
        expect(lesson.sourceUrl).toBe(source.sourceUrl);
        expect(lesson.checkedAt).toBe('2026-10-22');
        expect(lesson.grade).toBe(book.grade);
        expect(lesson.publisher).toBe(book.publisher);
        expect(lesson.volume).toBe(book.grade*2-1);
        expect(lesson.volumeDerived).toBe(true);
        expect(source.exactSourceTitleMatch).toBe(true);
        expect(source.sha256).toMatch(/^[a-f0-9]{64}$/);
        expect(digest(lesson.vocabulary.map(({category,text})=>({category,text})))).toBe(source.sourceVocabularySha256);
        expect(lesson.vocabulary).toHaveLength(source.vocabularyCount);
      }
    }
  });

  it('retains the raw index typo while displaying the publisher-confirmed grade-four title',()=>{
    const lesson=lessons.find(lesson=>lesson.id==='0101041150112')!;
    expect(lesson.title).toBe('寧靜的意樂會');
    expect(lessonDisplayTitle(lesson)).toBe('寧靜的音樂會');
    expect(lessonLabel(lesson)).toBe('115上・4年級・翰林・第12課 寧靜的音樂會');
    expect(lesson.sourceNote).toContain('寧靜的意樂會');
    expect(lesson.sourceNote).toContain('https://books.hanlin.com.tw/product/2010071');
    expect(selectionOf(lesson,0).source).toBe(lessonLabel(lesson));
    expect(lesson.sourceUrl).toBe('https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101041150112');
  });

  it('keeps new pending readings separate from the fourteen approved legacy pending entries',()=>{
    const pending=lessons.flatMap(lesson=>lesson.vocabulary.filter(hasPendingSounds).map(item=>({...item,lessonId:lesson.id})));
    expect(status.lessonCount).toBe(72);
    expect(status.vocabularyEntryCount).toBe(2059);
    expect(status.pendingEntries.map(key).sort()).toEqual(pending.map(key).sort());
    expect(status.methods.pending).toBe(pending.length);
    expect(new Set(pending.map(key)).size).toBe(pending.length);
    expect(legacyStatus.pendingEntries).toHaveLength(14);
    for(const entry of status.pendingEntries) {
      const lesson=lessons.find(item=>item.id===entry.lessonId)!;
      const item=lesson.vocabulary.find(item=>item.category===entry.category&&item.text===entry.text)!;
      expect(item.sounds).toEqual(entry.sounds);
      expect(item.soundNote).toContain('待');
      expect(item.soundSources?.length).toBeGreaterThan(0);
      expect(item.sounds.every(sound=>!sound||validSound(sound))).toBe(true);
    }
    for(const [char,sound] of Object.entries(newSingleSounds)) {
      expect(Object.hasOwn(oldSingleSounds,char)).toBe(false);
      expect(validSound(sound)).toBe(true);
    }
  });

  it('retains official name punctuation without making it a handwriting row or an unresolved sound',()=>{
    const lesson=lessons.find(lesson=>lesson.vocabulary.some(item=>item.text==='海倫‧凱勒'))!;
    const selection=selectionOf(lesson,lesson.vocabulary.findIndex(item=>item.text==='海倫‧凱勒'));
    expect(selection.text).toBe('海倫‧凱勒');
    expect(selection.sounds).toHaveLength(5);
    expect(selection.sounds[2]).toBe('');
    expect(practiceRows([selection]).map(row=>row.char)).toEqual(['海','倫','凱','勒']);
    const known={...selection,sounds:['ㄏㄞˇ','ㄌㄨㄣˊ','','ㄎㄞˇ','ㄌㄜˋ']};
    expect(hasPendingSounds(known)).toBe(false);
    expect(practiceRows([known]).every(row=>row.sound!=='')).toBe(true);
    expect(hasPendingSounds({...known,sounds:['ㄏㄞˇ','','','ㄎㄞˇ','ㄌㄜˋ']})).toBe(true);
    expect(['海','倫','凱','勒'].reduce((selected,char)=>removeCharacter(selected,char),[selection])).toEqual([]);
  });

  it('retains every selected book provenance and never fills a pending origin using another book',()=>{
    const firsts=['南一','康軒','翰林'].flatMap(publisher=>[4,5].map(grade=>matchingLessons({year:115,semester:'上',grade,publisher})[0]));
    const entries=firsts.map(lesson=>selectionOf(lesson,0));
    const selected=setSelections(setSelections([],entries,true),entries,true);
    expect(selected).toHaveLength(6);
    expect(new Set(practiceRows(selected).flatMap(row=>row.origins.map(origin=>origin.lessonId))).size).toBe(6);
    expect(setSelections(selected,[entries[0]],false)).toHaveLength(5);
    const pending=lessons.flatMap(lesson=>lesson.vocabulary.flatMap((item,index)=>item.text.length===1&&item.sounds[0]===''?[selectionOf(lesson,index)]:[]));
    let pairs=0;
    for(const entry of pending) {
      const known=LESSONS.flatMap(lesson=>lesson.vocabulary.flatMap((item,index)=>item.text.includes(entry.text)&&item.sounds[Array.from(item.text).indexOf(entry.text)]?[selectionOf(lesson,index)]:[]))[0];
      if(!known) continue;
      for(const pair of [[entry,known],[known,entry]]) expect(practiceRows(pair).find(row=>row.char===entry.text)!.sound).toBe('');
      if(++pairs===5) break;
    }
    expect(pairs).toBeGreaterThan(0);
  });
});
