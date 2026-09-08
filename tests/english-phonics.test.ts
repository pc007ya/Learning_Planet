import {describe,it,expect} from 'vitest';
import {existsSync,readFileSync} from 'node:fs';
import vm from 'node:vm';
import {SOUND_CARDS,uniqueWords,AnswerGate,shuffled} from '../src/english/phonics-data';
describe('English sound cards',()=>{
  it('provides 15 vowel and 24 consonant cards with real image files',()=>{
    expect(SOUND_CARDS.filter(c=>c.group==='vowels')).toHaveLength(15);
    expect(SOUND_CARDS.filter(c=>c.group==='consonants')).toHaveLength(24);
    expect(new Set(SOUND_CARDS.map(c=>c.id)).size).toBe(39);
    for(const c of SOUND_CARDS){expect(existsSync(c.image),c.image).toBe(true);expect(c.hint.length).toBeGreaterThan(5);expect(c.sentence).toContain(' ');}
  });
  it('draws four distinct example words',()=>{
    const words=uniqueWords(SOUND_CARDS);
    expect(new Set(words.map(c=>c.word)).size).toBe(words.length);
    expect(shuffled(words)).toHaveLength(words.length);
  });
  it('does not grade until explicit check, allows changing selection, prevents double scoring',()=>{
    const g=new AnswerGate('cat',['cat','dog','sun','moon']);
    expect(g.check()).toBeUndefined();g.select('dog');expect(g.checked).toBe(false);
    g.select('invalid');expect(g.selected).toBe('dog');
    g.select('cat');expect(g.check()).toBe(true);expect(g.check()).toBeUndefined();
    g.select('dog');expect(g.selected).toBe('cat');
    const wrong=new AnswerGate('cat',['cat','dog']);wrong.select('dog');expect(wrong.check()).toBe(false);
  });
  it('uses separate preview controls, not nested answer buttons',()=>{
    const source=readFileSync('src/english/phonics.ts','utf8');
    expect(source).toContain('data-preview=');
    expect(source).toContain('data-select=');
    expect(source).toContain("if(a==='check')");
  });
  it('deduplicates matching pictures and mother/mom aliases before sampling',()=>{
    const html=readFileSync('index.html','utf8');
    const begin=html.indexOf('  englishGeneratedPicturePool(grade) {');
    const end=html.indexOf('  englishShuffle(',begin);
    const context={englishSharedAssetKey:(w:{word:string})=>w.word==='mom'?'mother':w.word};
    const model=vm.runInNewContext('({' + html.slice(begin,end) + '})',context);
    model.englishPool=()=>[
      {id:'1',word:'mother',image:'images/english-generated-v3/mother-v1.webp'},
      {id:'2',word:'mom',image:'images/english-generated-v3/mom-v1.webp'},
      {id:'3',word:'cat',image:'images/english-generated-v3/cat-v1.webp'},
      {id:'4',word:'kitten',image:'images/english-generated-v3/cat-v1.webp'}
    ];
    model.englishImageForWord=(w:{image:string})=>w.image;
    expect(model.englishGeneratedPicturePool().map((w:{word:string})=>w.word)).toEqual(['mother','cat']);
  });
  it('parses the inline application script',()=>{
    const html=readFileSync('index.html','utf8');
    const scripts=[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
    for(const [,attrs,body] of scripts)if(body.trim()&&!attrs.includes('application/')&&!attrs.includes('module'))expect(()=>new vm.Script(body)).not.toThrow();
  });
});
