import {test,expect,vi} from 'vitest';
import {existsSync,readFileSync} from 'node:fs';
import {parrotPages,parrotObjects,parrotScenes,parrotVocabulary} from '../src/story/interactive/parrot';
import {volcanoPages,volcanoObjects,volcanoScenes,volcanoVocabulary} from '../src/story/interactive/volcano';
import {parrotChinese} from '../src/story/interactive/parrot-text';
import {volcanoChinese} from '../src/story/interactive/volcano-text';
import {parrotQuestions} from '../src/story/interactive/parrot-quiz';
import {volcanoQuestions} from '../src/story/interactive/volcano-quiz';
import {createListeningFeelingsEffects} from '../src/story/interactive/listening-feelings-effects';
import {vocabularyGlossary} from '../src/story/interactive/vocabulary-glossary';
for(const [id,pages,objects,scenes,words,chinese,questions] of [
 ['parrot',parrotPages,parrotObjects,parrotScenes,parrotVocabulary,parrotChinese,parrotQuestions],
 ['volcano',volcanoPages,volcanoObjects,volcanoScenes,volcanoVocabulary,volcanoChinese,volcanoQuestions]
] as const){
 test(id+' has complete ABC story, translations, assets and meaningful missions',()=>{
  for(const level of ['A','B','C'] as const){const ps=pages(level);expect(ps).toHaveLength(20);expect(ps[0].scene).toBe('bedroom');expect(ps[19].scene).toBe('bedroom');expect(ps[0].objects.filter(o=>!['gail','book','stamp','stone'].includes(o))).toHaveLength(0);
   ps.forEach((p,i)=>{expect(p.lines).toHaveLength(chinese(i,level).length);expect(p.lines.every(t=>t.length>0)).toBe(true);expect(p.objects).toContain(p.mission.answer);expect(scenes[p.scene]).toBeTruthy();if(p.scene!=='bedroom')expect(existsSync(`images/story/${id}-v1/${p.scene}.png`)).toBe(true);p.objects.forEach(key=>{const obj={...objects[key],...p.placements?.[key]};expect(objects[key]).toBeTruthy();if(obj.image)expect(existsSync(`images/story/${id}-v1/${obj.image}`),obj.image).toBe(true);});});
   const qs=questions(level);expect(qs).toHaveLength(16);expect(new Set(qs.map(q=>q.id)).size).toBe(16);qs.forEach(q=>{expect(existsSync(q.image!)).toBe(true);expect(q.answer).toHaveLength(1);expect(q.options[q.answer[0]].text).toBe(q.explanation);expect(new Set(q.options.map(o=>o.text)).size).toBe(4);});
  }
 });
 test(id+' teaches 20 approved translated words with at most two old core repeats',()=>{
  expect(new Set(words).size).toBe(20);const taught=new Set(pages('C').flatMap(p=>p.words));words.forEach(w=>{expect(taught.has(w),w).toBe(true);expect(vocabularyGlossary[w],w).toBeTruthy();});
  const older=JSON.parse(readFileSync('docs/story-catalog/catalog.json','utf8')).books.filter((b:{id:string})=>b.id!==id);const used=new Set(older.flatMap((b:{words:string[]})=>b.words));expect(words.filter(w=>used.has(w)).length).toBeLessThanOrEqual(2);
 });
}
test('single-image replacement pauses the 200ms blank gap and disposal restores state',()=>{
 vi.useFakeTimers();vi.stubGlobal('matchMedia',()=>({matches:false}));const img={src:'original.png',style:{visibility:''}};
 const animation={pause(){},play(){},cancel(){}};const host={querySelector:()=>img,animate:()=>animation,append(){}};
 vi.stubGlobal('document',{createElement:()=>({className:'',textContent:'',style:{},setAttribute(){},remove(){},animate:()=>animation})});
 const fx=createListeningFeelingsEffects({querySelector:()=>host} as unknown as HTMLElement,'volcano',11,false);
 fx.interact('tobi');expect(img.style.visibility).toBe('hidden');vi.advanceTimersByTime(90);fx.playback(false,true);vi.advanceTimersByTime(1000);expect(img.style.visibility).toBe('hidden');fx.playback(true,false);vi.advanceTimersByTime(109);expect(img.src).toBe('original.png');vi.advanceTimersByTime(1);expect(img.src).toContain('tobi-calm');expect(img.style.visibility).toBe('');fx.dispose();expect(img.src).toBe('original.png');vi.runAllTimers();expect(img.src).toBe('original.png');vi.useRealTimers();vi.unstubAllGlobals();
});
