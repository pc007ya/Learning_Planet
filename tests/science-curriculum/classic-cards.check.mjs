import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {loadClassicCards,getClassicProgress} from '../../modules/science-curriculum/classic-cards.mjs';
import {PREFIX} from '../../modules/science-curriculum/store.mjs';
import {unitArtURL} from '../../modules/nature-planet/unit-art.mjs';

const empty={completed:0,totalCorrect:0,totalAnswers:0,hasActive:false};
const unit={id:'kh',source_unit_ids:['kh','na']};
const answer=(id,correct)=>({questionId:id,selected:correct?'A':'B',correct,time:1});
const attempt=(id,correct=1)=>({id,answers:[answer(id+'-1',!!correct),answer(id+'-2',false)],total:2,correct});
const active=id=>({id,unitId:'na',version:'v',started:1,finished:false,index:0,answers:{},warnings:[],questions:[{id:'q',stem:'問題',ans:'A',opts:['A','B','C','D'],explain:'說明'}]});
const record=(attempts=[],rest={})=>({attempts,seen:[],...rest});
function storage(units,learnerId='a/b') {
 const raw=JSON.stringify({schemaVersion:1,units,tasks:{},settings:{}}),reads=[];
 return {raw,reads,getItem:key=>{reads.push(key);return key===PREFIX+encodeURIComponent(learnerId)?raw:null},setItem:()=>{throw Error('must never write')}};
}

test('all 12 scopes load only their catalog and every classic card has a registered existing image',async()=>{
 let count=0;
 for(let grade=1;grade<=6;grade++)for(let semester=1;semester<=2;semester++){
  const calls=[],controller=new AbortController();
  const cards=await loadClassicCards({grade,semester,signal:controller.signal,fetcher:async(url,options)=>{calls.push(String(url));assert.equal(options.signal,controller.signal);return new Response(await fs.readFile(url))}});
  assert.equal(calls.length,1);assert.ok(calls[0].endsWith(`all-g${grade}-t${semester}-catalog.json`));
  for(const card of cards){assert.equal(card.grade,grade);assert.equal(card.semester,semester);assert.equal(card.kind,'curriculum-unit');assert.equal(card.difficulty,1);assert.equal(card.icon,'🌱');assert.ok(card.title&&card.tint&&card.sub);assert.ok(card.source_unit_ids.includes(card.id));assert.ok(unitArtURL(card.id));assert.equal(card.art,`images/science-unit-art/${card.id}.webp`);assert.ok((await fs.stat(new URL('../../'+card.art,import.meta.url))).size>0);}
  count+=cards.length;
 }
 assert.equal(count,88);
});
test('source attempts are deduplicated against integrated attempts with the correct learner key and no writes',()=>{
 const s=storage({kh:record([attempt('shared'),attempt('kh',0)]),na:record([attempt('shared'),attempt('na')])});
 assert.deepEqual(getClassicProgress(unit,s,'a/b'),{completed:3,totalCorrect:2,totalAnswers:6,hasActive:false});
 assert.deepEqual(s.reads,[PREFIX+'a%2Fb']);
 assert.deepEqual(getClassicProgress(unit,s,'other'),empty);
});
test('unfinished source practice is reported, but a completed integrated copy wins over stale source active',()=>{
 const s=storage({na:record([],{active:active('run')})});assert.equal(getClassicProgress(unit,s,'a/b').hasActive,true);
 const done=storage({kh:record([attempt('run')]),na:record([],{active:active('run')})});assert.equal(getClassicProgress(unit,done,'a/b').hasActive,false);
});
test('missing, malformed, denied and unrelated math storage safely yield zero without writes',()=>{
 for(const s of [null,{}, {getItem:()=>null},{getItem:()=>'{broken'}, {getItem:()=>JSON.stringify({schemaVersion:99,units:{}})},{getItem:()=>{throw Error('denied')}},{getItem:key=>key==='lp-math-progress'?'100':null}])assert.deepEqual(getClassicProgress(unit,s,'a/b'),empty);
 assert.deepEqual(getClassicProgress(null,storage({}),'a/b'),empty);
});
test('catalog failures and cancellation propagate rather than returning stale cards',async()=>{
 await assert.rejects(loadClassicCards({fetcher:async()=>new Response('',{status:503})}),/課程資料/);
 const controller=new AbortController();controller.abort();await assert.rejects(loadClassicCards({signal:controller.signal,fetcher:async(_,options)=>{options.signal.throwIfAborted()}}),{name:'AbortError'});
});
