import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import {loadPageScripts} from '../auth-v2/page-script-loader.mjs';
const inventory=JSON.parse(fs.readFileSync(new URL('../docs/security/page-auth-inventory.json',import.meta.url)));
const scoped=inventory.filter(x=>['unguarded','story-guard','parent-host'].includes(x.classification)&&!/^(chinese-|docs\/|qa\/)/.test(x.path));
test('72 additional direct pages have an initial lock and a single gate; original scripts are inert',()=>{
 assert.equal(scoped.length,72);
 for(const {path:p} of scoped){
  const html=fs.readFileSync(p,'utf8');
  assert.match(html,/data-auth-content hidden inert/,p);
  assert.match(html,/\[data-auth-content\]\[hidden\]\{display:none!important\}/,p);
  const scripts=[...html.matchAll(/<script\b[^>]*>/g)].map(x=>x[0]);
  const active=scripts.filter(x=>!x.includes('application/x-lp-deferred'));
  assert.equal(active.length,1,p); assert.match(active[0],/data-page-access/,p);
 }
});
test('deferred script loader restores classic/module order and awaits external scripts',async()=>{
 const seen=[];
 const descriptor=(kind,src,text)=>({dataset:{authScript:kind},attributes:[{name:'type',value:'application/x-lp-deferred'},...(src?[{name:'src',value:src}]:[])],textContent:text,hasAttribute:n=>n==='src'&&!!src,getAttribute:()=>src,replaceWith:s=>{seen.push([s.type,s.src||s.textContent]);queueMicrotask(()=>s.onload?.());}});
 const ds=[descriptor('text/javascript','./model.js'),descriptor('text/javascript',null,'window.x=1'),descriptor('module','app.mjs')];
 await loadPageScripts({baseURI:'https://example.com/folder/page.html',querySelectorAll:()=>ds,createElement:()=>({setAttribute(){}})});
 assert.deepEqual(seen,[['text/javascript','https://example.com/folder/model.js'],['text/javascript','window.x=1'],['module','https://example.com/folder/app.mjs']]);
});
test('both hosting artifacts exclude development docs and QA',()=>{
 for(const f of ['.github/workflows/pages.yml','.github/workflows/firebase-hosting-deploy.yml']){
  const text=fs.readFileSync(f,'utf8'); assert.ok(text.includes("--exclude='docs' --exclude='qa'"));
 }
});

test('every tracked HTML entry must have an explicit audit classification',()=>{
 const actual=execFileSync('git',['ls-files','--','*.html'],{encoding:'utf8'}).trim().split('\n').filter(Boolean).sort();
 assert.deepEqual(inventory.map(x=>x.path).sort(),actual,'New HTML must be audited and classified before deployment');
});
