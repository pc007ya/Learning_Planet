import {test,expect} from 'vitest';
import {existsSync,readFileSync} from 'node:fs';
import {elfPages,elfObjects,elfVocabulary} from '../src/story/interactive/elf';
import {elfQuestions} from '../src/story/interactive/elf-quiz';
import {elfChinese} from '../src/story/interactive/elf-text';
import {vocabularyGlossary} from '../src/story/interactive/vocabulary-glossary';
test('elf book has complete levels, translations, mission targets and image questions',()=>{for(const level of ['A','B','C'] as const){const pages=elfPages(level);expect(pages).toHaveLength(20);const questions=elfQuestions(level);expect(questions).toHaveLength(16);pages.forEach((p,i)=>{expect(elfChinese(i,level).length).toBeGreaterThan(0);expect(p.objects).toContain(p.mission.answer);for(const id of p.objects){const o={...elfObjects[id],...p.placements?.[id]};if(o.image)expect(existsSync(o.image.startsWith('images/')?o.image:'images/story/elf-v1/'+o.image),o.image).toBe(true);}});questions.forEach(q=>expect(existsSync(q.image!.split('?')[0]),q.image).toBe(true));}});
test('20 core words are taught, translated and avoid three historic repeats',()=>{expect(new Set(elfVocabulary).size).toBe(20);const taught=new Set(elfPages('C').flatMap(p=>p.words));elfVocabulary.forEach(w=>{expect(taught.has(w),w).toBe(true);expect(vocabularyGlossary[w],w).toBeTruthy();});const old=JSON.parse(readFileSync('docs/story-catalog/catalog.json','utf8')).books.filter((b:{id:string;source?:string})=>b.source&&b.id!=='elf');const used=new Set(old.flatMap((b:{words:string[]})=>b.words));expect(elfVocabulary.filter(w=>used.has(w)).length).toBeLessThan(3);});

import {vi} from 'vitest';
import {createElfEffects} from '../src/story/interactive/elf-effects';
test('apple states never overlap, leave 200ms blank, and pause/dispose safely',()=>{
 vi.useFakeTimers();vi.stubGlobal('matchMedia',()=>({matches:false}));
 const props=Object.fromEntries(['unripe','ripe'].map(id=>[id,{style:{visibility:'',pointerEvents:''},setAttribute(){},tabIndex:0,animate:()=>({pause(){},play(){},cancel(){}})}]));
 const world={querySelector:(s:string)=>s.includes('unripe')?props.unripe:props.ripe};
 const fx=createElfEffects(world as unknown as HTMLElement,17,false);
 expect(props.ripe.style.visibility).toBe('hidden');fx.interact('unripe');
 vi.advanceTimersByTime(1500);expect(props.unripe.style.visibility).toBe('hidden');expect(props.ripe.style.visibility).toBe('hidden');
 fx.playback(false,true);vi.advanceTimersByTime(1000);expect(props.ripe.style.visibility).toBe('hidden');
 fx.playback(true,false);vi.advanceTimersByTime(199);expect(props.ripe.style.visibility).toBe('hidden');
 vi.advanceTimersByTime(1);expect(props.ripe.style.visibility).toBe('visible');expect(props.unripe.style.visibility).toBe('hidden');
 fx.interact('unripe');fx.dispose();vi.advanceTimersByTime(3000);expect(props.unripe.style.visibility).toBe('visible');expect(props.ripe.style.visibility).toBe('hidden');
 vi.useRealTimers();vi.unstubAllGlobals();
});
