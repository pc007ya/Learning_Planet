import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseHTML} from 'linkedom';
const read=p=>fs.readFileSync(new URL('../'+p,import.meta.url),'utf8');
const data=JSON.parse(read('data/kangxuan-midgrade-115-catalog.json'));
test('115 midgrade index is separate, scoped and complete',()=>{
 assert.equal(data.year,115);assert.equal(data.edition,null);
 for(const k of ['contentImported','practiceAvailable','fullTextLicensed'])assert.equal(data[k],false);
 assert.equal(new URL(data.sourceUrl).hostname,'945cloud.knsh.com.tw');
 assert.equal(data.books.length,4);
 assert.deepEqual(data.books.map(b=>`${b.grade}${b.semester}`),['3上','3下','4上','4下']);
 const prior=[...JSON.parse(read('src/chinese-practice/lessons-115-upper.json')),...JSON.parse(read('src/chinese-practice/lessons-115-upper-grades45.json'))];
 for(const b of data.books){
  assert.deepEqual(b.lessons.map(x=>x.number),Array.from({length:12},(_,i)=>i+1));
  assert.equal(b.readingLadders.length,2);
  if(b.semester==='上')for(const l of b.lessons)assert.equal(prior.find(x=>x.grade===b.grade&&x.publisher==='康軒'&&x.number===l.number).title,l.title);
 }
});
test('static page includes all titles and return navigation without progress writes',()=>{
 const page=read('chinese-115-midgrade-catalog.html');const {document}=parseHTML(page);
 assert.equal(document.querySelectorAll('section').length,4);
 assert.equal(document.querySelectorAll('section ol li').length,48);
 assert.equal(document.querySelectorAll('.readings li').length,8);
 for(const b of data.books)for(const l of b.lessons)assert.ok(document.body.textContent.includes(l.title));
 assert.equal(document.querySelector('nav a').getAttribute('href'),'chinese-practice.html');
 assert.ok(page.includes('不是完整教材'));assert.equal(document.querySelectorAll('script').length,1);
 assert.equal(document.querySelector('script').getAttribute('src'),'auth-v2/page-access.mjs');
 assert.ok(document.querySelector('main').hasAttribute('hidden'));
 assert.equal(document.querySelector('script').getAttribute('data-entry'),null);
 for(const p of ['src/chinese-practice/app.ts','modules/chinese-practice/chinese-practice.js'])assert.ok(read(p).includes('chinese-115-midgrade-catalog.html'));
});
