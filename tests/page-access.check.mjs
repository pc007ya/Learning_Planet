import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createPageAccess } from '../auth-v2/page-access-core.mjs';
function setup(authorize=async u=>({claims:{role:u.role}})) {
 const calls=[]; const update=createPageAccess({authorize,lock:()=>calls.push('lock'),unlock:()=>calls.push('unlock'),redirect:()=>calls.push('redirect'),fail:()=>calls.push('fail')});
 return {calls,update};
}
test('unauthenticated and unknown roles never unlock',async()=>{
 for (const user of [null,{uid:'x'}, {uid:'x',role:'anonymous'}]) {const {calls,update}=setup();await update(user);assert.deepEqual(calls,['lock','redirect']);}
});
for (const role of ['student','teacher','admin']) test(`${role} authenticated session unlocks`,async()=>{const {calls,update}=setup();await update({uid:'a',role});assert.deepEqual(calls,['lock','unlock']);});
test('token failure fails closed',async()=>{const {calls,update}=setup(async()=>{throw Error('expired')});await update({uid:'a'});assert.deepEqual(calls,['lock','lock','fail']);});
test('logout and identity switching lock immediately',async()=>{for(const next of [null,{uid:'b',role:'student'}]){const {calls,update}=setup();await update({uid:'a',role:'student'});await update(next);assert.deepEqual(calls,['lock','unlock','lock','redirect']);}});
test('late token result cannot unlock after logout',async()=>{let resolve;const {calls,update}=setup(()=>new Promise(r=>resolve=r));const pending=update({uid:'a'});await update(null);resolve({claims:{role:'student'}});await pending;assert.deepEqual(calls,['lock','lock','redirect']);});
test('all four standalone Chinese pages have fail-closed bootstraps',()=>{
 for(const file of ['chinese-practice.html','chinese-grade6.html','chinese-zhuyin-supplement.html','chinese-115-midgrade-catalog.html']) {
 const html=readFileSync(file,'utf8');assert.match(html,/<main data-auth-content hidden inert/);assert.match(html,/data-page-access/);assert.match(html,/\[data-auth-content\]\[hidden\]/);assert.equal((html.match(/<script/g)||[]).length,1);assert.match(html,/src="auth-v2\/page-access.mjs"/);
 }
});

test('requireStudent does not accept missing or unknown roles',()=>{
 const source=readFileSync('auth-v2/role-router.js','utf8');
 assert.match(source,/if \(role !== 'student'\)/);
});


test('shell and protected tabs share one Firebase SDK and persistence policy',()=>{
 const legacy=readFileSync('src/firebase-config.js','utf8');
 const canonical=readFileSync('auth-v2/firebase-client.js','utf8');
 const versions=[...legacy.matchAll(/firebasejs\/([^/]+)\//g),...canonical.matchAll(/firebasejs\/([^/]+)\//g)].map(m=>m[1]);
 assert.deepEqual([...new Set(versions)],['10.14.1']);
 assert.doesNotMatch(legacy,/setPersistence\(/);
 assert.match(canonical,/await setPersistence\(auth, browserLocalPersistence\)/);
});
