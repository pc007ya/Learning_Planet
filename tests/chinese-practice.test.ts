import { describe, expect, it } from 'vitest';
import { LESSONS, STROKE_SEARCH, lessonDisplayTitle, lessonLabel } from '../src/chinese-practice/catalog';
import phoneticsReview from '../src/chinese-practice/phonetics-targeted-review.json';
import phoneticsStatus from '../src/chinese-practice/phonetics-status.json';
import { customSelections, dictionaryUrl, matchingLessons, paginate, practiceRows, removeCharacter, selectionOf, setSelections, strokeLink, validSound } from '../src/chinese-practice/model';
const first=LESSONS.find(lesson=>lesson.id==='0102011150101')!, second=LESSONS.find(lesson=>lesson.id==='0102011150102')!;
describe('Chinese practice selection and provenance',()=>{
  it('shows the publisher-confirmed title without overwriting the original index title or source',()=>{
    const lesson=LESSONS.find(lesson=>lesson.id==='0101031150105')!;
    expect(lesson.title).toBe('為梨花撐傘用');
    expect(lessonDisplayTitle(lesson)).toBe('為梨花撐傘');
    expect(lessonLabel(lesson)).toBe('115上・3年級・翰林・第5課 為梨花撐傘');
    expect(selectionOf(lesson,0).source).toBe(lessonLabel(lesson));
    expect(lesson.sourceUrl).toBe('https://pedia.cloud.edu.tw/Bookmark/TCollection?TextNameId=0101031150105');
    expect(lesson.sourceNote).toContain('為梨花撐傘用');
    expect(lesson.sourceNote).toContain('出版社第五課課名為「為梨花撐傘」');
    expect(lessonDisplayTitle(first)).toBe(first.title);
  });
  it('keeps catalog blanks, pending index and targeted review in exact agreement',()=>{
    const key=(item:{lessonId:string;category:string;text:string})=>`${item.lessonId}:${item.category}:${item.text}`;
    const catalogPending=LESSONS.flatMap(lesson=>lesson.vocabulary.filter(item=>item.sounds.includes('')).map(item=>key({...item,lessonId:lesson.id}))).sort();
    const pending=phoneticsReview.entries.filter(entry=>entry.status==='待確認');
    const confirmed=phoneticsReview.entries.filter(entry=>entry.status==='已確認');
    expect(phoneticsStatus.pendingEntries.map(key).sort()).toEqual(catalogPending);
    expect(pending.map(key).sort()).toEqual(catalogPending);
    expect(new Set(catalogPending).size).toBe(catalogPending.length);
    expect(phoneticsReview.pendingCount).toBe(pending.length);
    expect(phoneticsReview.confirmedCount).toBe(confirmed.length);
    expect(phoneticsStatus.targetedReview.pendingCount).toBe(pending.length);
    expect(phoneticsStatus.targetedReview.confirmedCount).toBe(confirmed.length);
    expect(phoneticsStatus.targetedReview.originalPendingCount).toBe(pending.length+confirmed.length);
    for(const entry of confirmed) {
      const item=LESSONS.find(lesson=>lesson.id===entry.lessonId)!.vocabulary.find(item=>item.category===entry.category&&item.text===entry.text)!;
      expect(item.sounds).toEqual(entry.override!.sounds);
      expect(entry.confirmationMethod).toBeTruthy();
      expect(entry.evidence?.length).toBeGreaterThan(0);
    }
  });
  it('covers all nine verified 115-upper books with exact course counts and no semester substitution',()=>{
    const expected:Record<string,number>={'南一':7,'康軒':6,'翰林':7};
    for(const publisher of Object.keys(expected)) for(const grade of [1,2,3]) {
      const lessons=matchingLessons({year:115,semester:'上',grade,publisher});
      expect(lessons.filter(lesson=>lesson.number>0)).toHaveLength(grade===1?expected[publisher]:12);
      expect(lessons.filter(lesson=>lesson.number===0)).toHaveLength(grade===1&&publisher==='南一'?1:0);
      expect(matchingLessons({year:115,semester:'下',grade,publisher})).toEqual([]);
    }
    expect(LESSONS).toHaveLength(93);
    expect(new Set(LESSONS.map(lesson=>lesson.id)).size).toBe(93);
    expect(LESSONS.reduce((n,lesson)=>n+lesson.vocabulary.length,0)).toBe(2379);
  });
  it('preserves official sources, category boundaries, tones and explicit unresolved readings throughout the catalog',()=>{
    for(const lesson of LESSONS) {
      expect(new URL(lesson.sourceUrl).searchParams.get('TextNameId')).toBe(lesson.id);
      expect(lesson.checkedAt).toBe('2026-10-09');
      expect(lesson.edition).toBeNull();
      expect(lesson.curriculum).toBeNull();
      expect(lesson.volumeDerived).toBe(true);
      for(const item of lesson.vocabulary) {
        expect(['生字','認讀字','語詞']).toContain(item.category);
        expect(item.sounds).toHaveLength(Array.from(item.text).length);
        expect(item.soundSources?.length).toBeGreaterThan(0);
        for(const sound of item.sounds) expect(!sound||validSound(sound)).toBe(true);
        if(item.sounds.includes('')) expect(item.soundNote).toContain('待');
      }
    }
  });
  it('selects frog, curved neck and cat belly readings by classroom meaning instead of the first dictionary homograph',()=>{
    const word=(id:string,text:string)=>LESSONS.find(lesson=>lesson.id===id)!.vocabulary.find(item=>item.text===text)!;
    expect(word('0101021150104','呱呱').sounds).toEqual(['ㄍㄨㄚ','ㄍㄨㄚ']);
    expect(word('0101021150112','曲').sounds).toEqual(['ㄑㄩ']);
    expect(word('0103031150106','肚子').sounds).toEqual(['ㄉㄨˋ','˙ㄗ']);
    expect(word('0102011150103','泡泡').sounds).toEqual(['ㄆㄠˋ','ㄆㄠˋ']);
  });
  it('keeps provenance across publishers and does not duplicate repeated whole-book operations',()=>{
    const books=['南一','康軒','翰林'].flatMap(publisher=>matchingLessons({year:115,semester:'上',grade:1,publisher}).filter(lesson=>lesson.number===1));
    const entries=books.flatMap(lesson=>lesson.vocabulary.flatMap((item,index)=>item.category==='生字'?[selectionOf(lesson,index)]:[]));
    const selected=setSelections(setSelections([],entries,true),entries,true);
    const left=practiceRows(selected).find(row=>row.char==='左')!;
    expect(left.origins).toHaveLength(3);
    const cancelled=setSelections(selected,entries.filter(entry=>entry.lessonId===books[1].id),false);
    expect(practiceRows(cancelled).find(row=>row.char==='左')!.origins).toHaveLength(2);
  });
  it('keeps verified categories distinct and never borrows another year/version',()=>{
    expect(first.vocabulary.filter(item=>item.category==='生字').map(item=>item.text).join('')).toBe('小上走左右向魚也來加');
    expect(first.vocabulary.filter(item=>item.category==='認讀字')).toHaveLength(3);
    expect(first.vocabulary.filter(item=>item.category==='語詞')).toHaveLength(2);
    expect(second.vocabulary.filter(item=>item.category==='生字')).toHaveLength(10);
    expect(second.vocabulary.filter(item=>item.category==='語詞')).toHaveLength(5);
    for(const filter of [{year:114,semester:'上',grade:1,publisher:'南一'},{year:115,semester:'下',grade:1,publisher:'南一'},{year:115,semester:'上',grade:4,publisher:'南一'},{year:115,semester:'上',grade:1,publisher:'未知出版社'}]) expect(matchingLessons(filter)).toEqual([]);
  });
  it('deduplicates across lessons and phrases while retaining every source',()=>{
    const 上=selectionOf(first,1), 地上=selectionOf(second,16);
    const rows=practiceRows([上,地上,...customSelections('上上')]);
    expect(rows.map(row=>row.char)).toEqual(['上','地']);
    expect(rows[0].origins).toHaveLength(3);
    expect(rows[0].origins.map(origin=>origin.text)).toEqual(['上','地上','上']);
  });
  it('makes repeated whole-lesson selection idempotent and cancellation precise',()=>{
    const entries=first.vocabulary.slice(0,10).map((_,index)=>selectionOf(first,index));
    const selected=setSelections(setSelections([],entries,true),entries,true);
    expect(selected).toHaveLength(10);
    expect(setSelections(selected,[entries[0]],false)).toHaveLength(9);
    expect(setSelections(selected,entries,false)).toEqual([]);
  });
  it('removes a merged character without corrupting phrase provenance or its other characters',()=>{
    const entry=selectionOf(second,16);
    const changed=removeCharacter([entry],'上');
    expect(practiceRows(changed).map(row=>row.char)).toEqual(['地']);
    expect(changed[0].text).toBe('地上');
    expect(practiceRows(setSelections(changed,[entry],true)).map(row=>row.char)).toEqual(['地','上']);
  });
  it('preserves supplementary Han and rejects numeric or unsafe custom input',()=>{
    expect(customSelections(' 𠮷，小 小，花 ').map(item=>item.text)).toEqual(['𠮷','小','花']);
    for(const text of ['', '123','小<script>','ㄒ']) expect(()=>customSelections(text)).toThrow();
    expect(customSelections('𠮷')[0].sounds).toEqual(['']);
  });
  it('requires contextual confirmation when two selections disagree on pronunciation',()=>{
    const contextual=selectionOf(second,4);
    const rows=practiceRows([contextual,...customSelections('子')]);
    expect(contextual.sounds).toEqual(['˙ㄗ']);
    expect(rows[0].sounds).toEqual(['˙ㄗ','ㄗˇ']);
    expect(rows[0].sound).toBe('');
    expect(practiceRows([contextual,...customSelections('子')],{子:'˙ㄗ'})[0].sound).toBe('˙ㄗ');
  });
  it('keeps unresolved targeted entries blank and confirms only source-evidenced readings',()=>{
    const confirmedReadings:Record<string,string[]>={
      '0102011150105:哪':['ㄋㄚˇ'],
      '0102011150105:哪個':['ㄋㄚˇ','˙ㄍㄜ'],
      '0102011150106:吐':['ㄊㄨˇ'],
      '0103021150101:還':['ㄏㄞˊ'],
      '0102021150101:哇':['ㄨㄚ'],
      '0102031150111:石虎':['ㄕˊ','ㄏㄨˇ'],
      '0101031150105:結':['ㄐㄧㄝˊ'],
    };
    expect(phoneticsReview.entries).toHaveLength(21);
    expect(phoneticsStatus.pendingEntries).toHaveLength(14);
    expect(phoneticsReview.entries.filter(entry=>entry.status==='已確認').map(entry=>`${entry.lessonId}:${entry.text}`)).toEqual(Object.keys(confirmedReadings));
    for (const entry of phoneticsReview.entries) {
      const lesson=LESSONS.find(lesson=>lesson.id===entry.lessonId)!;
      const index=lesson.vocabulary.findIndex(item=>item.text===entry.text&&item.category===entry.category);
      const selected=selectionOf(lesson,index);
      if (entry.status==='待確認') {
        expect(entry.missingEvidence.length).toBeGreaterThan(0);
        expect(selected.sounds).toContain('');
        expect(practiceRows([selected]).some(row=>!row.sound)).toBe(true);
      } else expect(selected.sounds).toEqual(confirmedReadings[`${entry.lessonId}:${entry.text}`]);
    }
    const 哪個=LESSONS.find(lesson=>lesson.id==='0102011150105')!.vocabulary.find(item=>item.text==='哪個')!;
    expect(哪個.sounds).toEqual(['ㄋㄚˇ','˙ㄍㄜ']);
  });
  it('confirms fish-blowing context without clearing the same unresolved character in a different lesson',()=>{
    const selected=(id:string)=>{
      const lesson=LESSONS.find(lesson=>lesson.id===id)!;
      return selectionOf(lesson,lesson.vocabulary.findIndex(item=>item.text==='吐'));
    };
    const fish=selected('0102011150106'), fire=selected('0102031150105');
    expect(fish.sounds).toEqual(['ㄊㄨˇ']);
    expect(fire.sounds).toEqual(['']);
    expect(practiceRows([fish])[0].sound).toBe('ㄊㄨˇ');
    expect(practiceRows([fish,fire])[0].sound).toBe('');
    const item=LESSONS.find(lesson=>lesson.id==='0102011150106')!.vocabulary.find(item=>item.text==='吐')!;
    expect(item.soundNote).toContain('課程語境核音');
    expect(item.soundNote).toContain('非出版社課本原頁');
    expect(item.soundSources).toContain('https://dict.concised.moe.edu.tw/dictView.jsp?ID=11552&la=0&powerMode=0');
  });
  it('limits the verified interjection to its same-lesson workbook source and keeps other wa pending',()=>{
    const select=(id:string)=>{
      const lesson=LESSONS.find(lesson=>lesson.id===id)!;
      return selectionOf(lesson,lesson.vocabulary.findIndex(item=>item.text==='哇'));
    };
    const greeting=select('0102021150101'), sports=select('0103021150104');
    expect(greeting.sounds).toEqual(['ㄨㄚ']);
    expect(sports.sounds).toEqual(['']);
    expect(practiceRows([greeting,sports])[0].sound).toBe('');
    const item=LESSONS.find(lesson=>lesson.id==='0102021150101')!.vocabulary.find(item=>item.text==='哇')!;
    expect(item.soundNote).toContain('同課習作用例');
    expect(item.soundNote).toContain('未宣稱已核對課文每一處');
    expect(item.soundSources).toContain('https://dict.concised.moe.edu.tw/dictView.jsp?ID=43102');
  });
  it('does not silently borrow a reading from another selected phrase for an unresolved classroom character',()=>{
    const pendingLesson=LESSONS.find(lesson=>lesson.id==='0102011150104')!;
    const knownLesson=LESSONS.find(lesson=>lesson.id==='0102031150111')!;
    const pending=selectionOf(pendingLesson,pendingLesson.vocabulary.findIndex(item=>item.text==='頭'));
    const known=selectionOf(knownLesson,knownLesson.vocabulary.findIndex(item=>item.text==='額頭'));
    const verifiedSound=known.sounds[1];
    expect(verifiedSound).not.toBe('');
    for (const selections of [[pending,known],[known,pending]]) {
      const row=practiceRows(selections).find(row=>row.char==='頭')!;
      expect(row.origins).toHaveLength(2);
      expect(row.sounds).toEqual([verifiedSound]);
      expect(row.sound).toBe('');
      expect(practiceRows(selections,{頭:verifiedSound}).find(row=>row.char==='頭')!.sound).toBe(verifiedSound);
    }
  });
  it('uses encoded dictionary links and verified stroke mappings only',()=>{
    expect(dictionaryUrl('車子')).toBe('https://pedia.cloud.edu.tw/Entry/Detail?title=%E8%BB%8A%E5%AD%90');
    expect(strokeLink('右').url).toBe('https://stroke-order.learningweb.moe.edu.tw/dictView.jsp?ID=21491');
    expect(strokeLink('小').url).not.toBe(strokeLink('右').url);
    for(const char of ['123','𠮷','toString']) expect(strokeLink(char).url).toBe(STROKE_SEARCH);
  });
  it('paginates exact A4 capacities including empty selections and validates tones',()=>{
    expect(paginate([], 'low')).toEqual([]);
    expect(paginate(Array.from({length:13},(_,i)=>i),'low').map(page=>page.length)).toEqual([6,6,1]);
    expect(paginate(Array.from({length:17},(_,i)=>i),'high').map(page=>page.length)).toEqual([8,8,1]);
    for(const sound of ['ㄒㄧㄠˇ','ㄩˊ','ㄔㄜ','˙ㄗ']) expect(validSound(sound)).toBe(true);
    for(const sound of ['ㄗ˙','123','ㄅㄆㄇㄈ','ㄒㄧㄠˇˋ']) expect(validSound(sound)).toBe(false);
  });
});
