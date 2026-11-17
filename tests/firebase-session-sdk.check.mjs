// Offline real-SDK integration regression. No production service or real credentials.
import assert from 'node:assert/strict';
import {pathToFileURL} from 'node:url';
const base=process.env.AUTH_SDK_TEST_ROOT;
if(!base) throw Error('AUTH_SDK_TEST_ROOT must point to isolated npm fixture install');
const dep=p=>import(pathToFileURL(base+'/node_modules/'+p));
const {indexedDB,IDBKeyRange}=await dep('fake-indexeddb/build/esm/index.js');
const fixed=process.argv.includes('--fixed');
globalThis.indexedDB=indexedDB;globalThis.IDBKeyRange=IDBKeyRange;
class Storage { constructor(){this.m=new Map()}getItem(k){return this.m.get(k)??null}setItem(k,v){this.m.set(k,String(v))}removeItem(k){this.m.delete(k)}}
globalThis.window={localStorage:new Storage(),sessionStorage:new Storage(),addEventListener(){},removeEventListener(){},location:{href:'http://localhost',protocol:'http:',hostname:'localhost'}};
globalThis.document={documentElement:{},visibilityState:'visible',addEventListener(){},removeEventListener(){}};
const jwt=(uid)=>[{}, {sub:uid,user_id:uid,iat:Math.floor(Date.now()/1000),exp:Math.floor(Date.now()/1000)+3600,auth_time:Math.floor(Date.now()/1000),role:'student'}].map(v=>Buffer.from(JSON.stringify(v)).toString('base64url')).join('.')+'.sig';
globalThis.fetch=async (url,opts)=>{let body=JSON.parse(opts?.body||'{}');if(String(url).includes('signInWithPassword'))return new Response(JSON.stringify({localId:'test-student',email:body.email,idToken:jwt('test-student'),refreshToken:'local-test-only',expiresIn:'3600'}));if(String(url).includes('lookup'))return new Response(JSON.stringify({users:[{localId:'test-student',email:'test@example.invalid',emailVerified:true}]}));throw Error('Unexpected network '+url)};
const appmod=await dep('@firebase/app/dist/esm/index.esm2017.js');
const sdk=await dep('@firebase/auth/dist/esm2017/index.js');
const cfg={apiKey:'test-key',authDomain:'localhost',projectId:'offline-only'};
const oldAppMod=fixed?appmod:await dep('firebase-old/node_modules/@firebase/app/dist/esm/index.esm2017.js');const oldSDK=fixed?sdk:await dep('firebase-old/node_modules/@firebase/auth/dist/esm2017/index.js');const oldApp=oldAppMod.initializeApp(cfg);const oldAuth=oldSDK.getAuth(oldApp);if(!fixed) oldSDK.setPersistence(oldAuth,oldSDK.browserLocalPersistence);
const app=appmod.initializeApp(cfg);const auth=sdk.getAuth(app);if(fixed) await sdk.setPersistence(auth,sdk.browserLocalPersistence);await auth.authStateReady();
await sdk.signInWithEmailAndPassword(auth,'test@example.invalid','not-real-password');
assert.equal(auth.currentUser?.uid,'test-student');
await appmod.deleteApp(app); const tabapp=appmod.initializeApp(cfg);const tab=sdk.getAuth(tabapp);await tab.authStateReady();assert.equal(tab.currentUser?.uid,fixed?'test-student':undefined); console.log(fixed?'PASS: unified SDK restores signed-in learner in new tab':'REPRODUCED: mixed SDK versions lose signed-in learner in new tab');
await sdk.setPersistence(tab,sdk.browserLocalPersistence);await appmod.deleteApp(tabapp);process.exit(0);
