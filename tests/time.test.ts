import {test,expect} from 'vitest';
import {existsSync,readFileSync} from 'node:fs';
import {timePages,timeObjects,timeVocabulary} from '../src/story/interactive/time';
import {timeQuestions} from '../src/story/interactive/time-quiz';
import {timeChinese} from '../src/story/interactive/time-text';
import {vocabularyGlossary} from '../src/story/interactive/vocabulary-glossary';
test('time book has complete levels, translations, mission targets and image questions',()=>{for(const level of ['A','B','C'] as const){const pages=timePages(level);expect(pages).toHaveLength(20);const questions=timeQuestions(level);expect(questions).toHaveLength(16);pages.forEach((p,i)=>{expect(timeChinese(i,level).length).toBeGreaterThan(0);expect(p.objects).toContain(p.mission.answer);for(const id of p.objects){const o={...timeObjects[id],...p.placements?.[id]};if(o.image)expect(existsSync(o.image.startsWith('images/')?o.image:'images/story/time-v1/'+o.image),o.image).toBe(true);}});questions.forEach(q=>expect(existsSync(q.image!.split('?')[0]),q.image).toBe(true));}});
test('20 core words are taught, translated and avoid three historic repeats',()=>{expect(new Set(timeVocabulary).size).toBe(20);const taught=new Set(timePages('C').flatMap(p=>p.words));timeVocabulary.forEach(w=>{expect(taught.has(w),w).toBe(true);expect(vocabularyGlossary[w],w).toBeTruthy();});const old=JSON.parse(readFileSync('docs/story-catalog/catalog.json','utf8')).books.filter((b:{id:string;source?:string})=>b.source&&b.id!=='time');const used=new Set(old.flatMap((b:{words:string[]})=>b.words));expect(timeVocabulary.filter(w=>used.has(w)).length).toBeLessThan(3);});

import {vi} from 'vitest';
import {createTimeEffects} from '../src/story/interactive/time-effects';
test('breakfast replacement has a 200ms blank interval and can be disposed safely',()=>{
 vi.stubGlobal('matchMedia',()=>({matches:false}));
 const props=Object.fromEntries(['breakfast','empty'].map(id=>[id,{style:{visibility:''},setAttribute(){}}]));
 vi.stubGlobal('HTMLButtonElement',class {});
 const pending:Array<{duration:number;onfinish:null|(()=>void);cancel:()=>void}>=[];
 const world={querySelector:(selector:string)=>props[selector.includes('breakfast')?'breakfast':'empty'],animate:(_frames:unknown,options:{duration:number})=>{const a={duration:options.duration,onfinish:null as null|(()=>void),cancel:vi.fn()};pending.push(a);return a;}};
 const fx=createTimeEffects(world as unknown as HTMLElement,8,false);
 expect(props.empty.style.visibility).toBe('hidden');fx.interact('breakfast');
 expect(props.breakfast.style.visibility).toBe('visible');pending[0].onfinish!();
 expect(props.breakfast.style.visibility).toBe('hidden');expect(props.empty.style.visibility).toBe('hidden');
 expect(pending[1].duration).toBe(200);pending[1].onfinish!();expect(props.empty.style.visibility).toBe('visible');
 fx.dispose();expect(pending.every(a=>a.onfinish===null)).toBe(true);vi.unstubAllGlobals();
});
