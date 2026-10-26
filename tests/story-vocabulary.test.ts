import {describe,it,expect} from 'vitest';
import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
const bank=JSON.parse(readFileSync('data/story-vocabulary.json','utf8'));
function setup(voices:any[]=[]){let utterances:any[]=[];let canceled=0;const window:any={speechSynthesis:{getVoices:()=>voices,addEventListener(){},cancel(){canceled++;},speak(u:any){utterances.push(u);}},SpeechSynthesisUtterance:class{constructor(public text:string){}},localStorage:{getItem(){return null;},setItem(){}},addEventListener(){},dispatchEvent(){}};vm.runInNewContext(readFileSync('english-vocabulary-tools.js','utf8'),{window,Event:class{}});return {api:window.LPEnglishVocabulary,utterances,get canceled(){return canceled;}};}
describe('storybook vocabulary catalog',()=>{
 it('includes all 55 books and every card has its own image and labels',()=>{
  expect(bank.books.map((b:any)=>b.number)).toEqual(Array.from({length:55},(_,i)=>i+1));expect(bank.words).toHaveLength(1189);
  expect(new Set(bank.words.map((w:any)=>w.id)).size).toBe(bank.words.length);
  for(const b of bank.books)expect(bank.words.filter((w:any)=>w.book===b.number)).toHaveLength(b.count);
  for(const w of bank.words){expect(w.word.trim()).toBeTruthy();expect(w.meaning.trim()).toBeTruthy();expect(existsSync(w.image),w.image).toBe(true);expect(w.height).toBeGreaterThan(w.width);}
 });
 it('sorts by numeric story then card order, with stable case-insensitive ABC sorting',()=>{
  const {api}=setup(),shuffled=[bank.words[200],bank.words[1],bank.words[0]];
  expect(api.filterCards(shuffled).map((w:any)=>w.id)).toEqual([bank.words[0].id,bank.words[1].id,bank.words[200].id]);
  const abc=api.filterCards(bank.words,{sort:'abc'});expect(abc).toHaveLength(bank.words.length);
  for(let i=1;i<abc.length;i++)expect(abc[i-1].word.localeCompare(abc[i].word,'en',{sensitivity:'base'})).toBeLessThanOrEqual(0);
 });
 it('filters by book and Chinese/English search without losing repeated story cards',()=>{
  const {api}=setup();expect(api.filterCards(bank.words,{book:53})).toHaveLength(20);
  expect(api.filterCards(bank.words,{book:53,query:'偵探'}).length).toBeGreaterThan(0);
  expect(api.filterCards(bank.words,{query:'zzzz-no-word'})).toHaveLength(0);
 });
});
describe('English voice preference',()=>{
 it('prefers an identifiable English female voice over a male default or novelty voice',()=>{
  const male={name:'Alex',lang:'en-US',voiceURI:'male'},novelty={name:'Bubbles',lang:'en-US'},female={name:'Samantha (Enhanced)',lang:'en-US',voiceURI:'female'};
  const s=setup([male,novelty,female]);s.api.speak('butterfly');expect(s.utterances[0].voice).toBe(female);expect(s.utterances[0].rate).toBe(.9);expect(s.canceled).toBe(1);expect(s.api.voices()).not.toContain(novelty);
 });
 it('honors selected voice and cancels previous speech on repeated taps',()=>{
  const a={name:'Samantha',lang:'en-US',voiceURI:'a'},b={name:'Karen',lang:'en-AU',voiceURI:'b'};const s=setup([a,b]);s.api.select(b);s.api.speak('one');s.api.speak('two');expect(s.utterances[1].voice).toBe(b);expect(s.canceled).toBe(2);
 });
 it('handles devices with delayed voice lists using the English default',()=>{const s=setup();expect(s.api.speak('hello')).toBe(true);expect(s.utterances[0].lang).toBe('en-US');});
});
