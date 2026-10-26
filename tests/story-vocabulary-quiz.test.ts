import {it,expect} from 'vitest';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const window:any={};vm.runInNewContext(readFileSync('story-vocabulary-quiz.js','utf8'),{window});
const api=window.LPStoryQuiz,bank=JSON.parse(readFileSync('data/story-vocabulary.json','utf8'));
it('keeps every answer and distractor in selected books with exactly one correct word',()=>{
 for(const books of [[1],[49,53],[54,55],bank.books.map((b:any)=>b.number)]){
 const qs=api.questions(bank.words,books,0);expect(qs.length).toBe(api.pool(bank.words,books).length);
 expect(new Set(qs.map((q:any)=>q.answer.word.toLowerCase())).size).toBe(qs.length);
 for(const q of qs){expect(q.options).toHaveLength(4);expect(new Set(q.options.map((c:any)=>c.word.toLowerCase())).size).toBe(4);expect(q.options.filter((c:any)=>c.id===q.answer.id)).toHaveLength(1);for(const c of q.options)expect(books).toContain(c.book);}
 }
});
it('blocks empty or too-small pools and caps requested question count',()=>{
 expect(api.questions(bank.words,[],10)).toEqual([]);expect(api.questions(bank.words.slice(0,3),[1],10)).toEqual([]);
 expect(api.questions(bank.words,[53],10)).toHaveLength(10);expect(api.questions(bank.words,[53],100)).toHaveLength(20);
});
it('retries only wrong target words while retaining three in-range distractors',()=>{
 const targets=bank.words.filter((c:any)=>c.book===53).slice(0,2);const qs=api.questions(bank.words,[53],10,Math.random,targets);
 expect(qs).toHaveLength(2);expect(new Set(qs.map((q:any)=>q.answer.id))).toEqual(new Set(targets.map((c:any)=>c.id)));
});
