import {describe,it,expect,vi} from 'vitest';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
function adminApi(auth:any, currentRole:any, calls:any) {
  const source=readFileSync('auth-v2/admin-api.mjs','utf8').replace(/^import .*;\n/gm,'').replace(/export /g,'');
  const ctx=vm.createContext({auth,currentRole,db:{},functions:{},console:{warn(){}},query:(x:any)=>x,collection:()=>({}),doc:()=>({}),onSnapshot:()=>{calls.subscriptions++;return()=>calls.stopped++;},httpsCallable:()=>{calls.callables++;return()=>({});},setDoc:()=>{calls.writes++;},getDoc:()=>{calls.reads++;return {exists:()=>false};}});
  vm.runInContext(source,ctx);return ctx;
}
describe('deferred role APIs',()=>{
 it('refuses teacher access before creating any admin network operation',async()=>{
  const calls={subscriptions:0,stopped:0,callables:0,writes:0,reads:0};
  const api=adminApi({currentUser:{uid:'fixture-teacher'}},async()=>'teacher',calls);
  for(const name of ['createStudent','saveRosterSnapshot','loadRosterSnapshot'])await expect(api[name]({})).rejects.toThrow('Role refused');
  expect(calls).toEqual({subscriptions:0,stopped:0,callables:0,writes:0,reads:0});
 });
 it('refuses an account change while claims are refreshing',async()=>{
  const auth={currentUser:{uid:'fixture-admin'}};
  const calls={subscriptions:0,stopped:0,callables:0,writes:0,reads:0};
  const api=adminApi(auth,async()=>{auth.currentUser.uid='other-session';return 'admin';},calls);
  await expect(api.createStudent({})).rejects.toThrow('Role refused');expect(calls.callables).toBe(0);
 });
 it('does not attach a subscription cancelled before the claims check completes',async()=>{
  let resolve!: (s:string)=>void;const role=new Promise<string>(r=>resolve=r);
  const calls={subscriptions:0,stopped:0,callables:0,writes:0,reads:0};
  const api=adminApi({currentUser:{uid:'fixture-admin'}},()=>role,calls);
  api.subscribeStudentsList(vi.fn())();resolve('admin');await Promise.resolve();await Promise.resolve();expect(calls.subscriptions).toBe(0);
 });
});

import ts from 'typescript';
it('refuses a retained backend callback after logout and a new login',async()=>{
 const html=readFileSync('index.html','utf8');
 const start=html.indexOf('class Component extends DCLogic');
 const source=ts.createSourceFile('logic.js',html.slice(start,html.indexOf('</script>',start)),ts.ScriptTarget.Latest,true,ts.ScriptKind.JS);
 const component=source.statements.find(ts.isClassDeclaration)!;
 const method=component.members.find(m=>ts.isMethodDeclaration(m)&&m.name.getText(source)==='prepareBackend')!;
 const auth={auth:{currentUser:{uid:'fixture-admin'}},currentRole:async()=>'admin',loadRoleApi:async()=>{}};
 const ctx=vm.createContext({window:{LearningPlanetAuthV2:auth},fetch:async(path:string)=>({ok:true,text:async()=>path.includes('staff-identity')?'({})':'(class { renderBackendVals() {this.setState({fixture:true});} })'})});
 vm.runInContext('let TEACHER_FACE_IMAGES,normalizeTeacherFace,defaultTeacherRecord,normalizeTeacherConfig,readTeacherConfig,saveTeacherConfig;',ctx);
 const prepare=vm.runInContext('(async function '+method.getText(source).slice('async '.length)+')',ctx);
 const setState=vi.fn((_patch:any,callback?:()=>void)=>callback?.());
 const owner:any={sessionGeneration:0,setState};
 await prepare.call(owner,'admin');const old=owner.renderBackendVals;old.call(owner);expect(setState).toHaveBeenCalledTimes(1);
 owner.sessionGeneration++;await prepare.call(owner,'admin');old.call(owner);expect(setState).toHaveBeenCalledTimes(1);
 owner.renderBackendVals();expect(setState).toHaveBeenCalledTimes(2);
});

function componentMethod(name:string, globals:Record<string,any>={}) {
 const html=readFileSync('index.html','utf8'),start=html.indexOf('class Component extends DCLogic');
 const source=ts.createSourceFile('logic.js',html.slice(start,html.indexOf('</script>',start)),ts.ScriptTarget.Latest,true,ts.ScriptKind.JS);
 const component=source.statements.find(ts.isClassDeclaration)!;
 const method=component.members.find(m=>ts.isMethodDeclaration(m)&&m.name.getText(source)===name)!;
 const ctx=vm.createContext(globals);
 vm.runInContext('let TEACHER_FACE_IMAGES,normalizeTeacherFace,defaultTeacherRecord,normalizeTeacherConfig,readTeacherConfig,saveTeacherConfig;',ctx);
 const text=method.getText(source),asyncPrefix=text.startsWith('async ');
 return vm.runInContext('('+ (asyncPrefix?'async function '+text.slice(6):'function '+text)+')',ctx);
}
it('does not fetch staff code if the account changes during the first claims refresh',async()=>{
 const auth={auth:{currentUser:{uid:'fixture-admin'}},currentRole:async()=>{auth.auth.currentUser.uid='new-session';return 'admin';}};
 const fetch=vi.fn();
 const prepare=componentMethod('prepareBackend',{window:{LearningPlanetAuthV2:auth},fetch});
 await expect(prepare.call({sessionGeneration:0},'admin')).rejects.toThrow('Session changed');
 expect(fetch).not.toHaveBeenCalled();
});
it('cleans a lab on browser navigation even when the DC host omits prevState',()=>{
 const cleanup=vi.fn();
 const update=componentMethod('componentDidUpdate',{window:{},document:{body:{dataset:{}}},saveStudentProfiles:vi.fn()});
 const owner:any={state:{screen:'plantWaterLab',students:[]},props:{},loadLearningData:async()=>{},queueCloudStudentProgressSync:vi.fn(),clearPlantTimers:cleanup};
 update.call(owner,{});expect(cleanup).not.toHaveBeenCalled();
 owner.state={...owner.state,screen:'map'};update.call(owner,{});expect(cleanup).toHaveBeenCalledOnce();
 update.call(owner,{});expect(cleanup).toHaveBeenCalledOnce();
});
it('loads the selected weekly grade and subject bank without unrelated English or game data',async()=>{
 const fetch=vi.fn(async()=>({ok:true,json:async()=>[{c:'字',u:'fixture'}]}));
 const load=componentMethod('loadLearningData',{fetch,MATH_UNITS:[{id:'u1',grade:1},{id:'u36',grade:3}],CH_UNITS:[{id:'c2',grade:1},{id:'c4',grade:2}],SCI_UNITS:[]});
 const owner:any={state:{screen:'weekly',subject:'math',grade:1,weeklyConfig:{modules:{c2:{count:4},c4:{count:4},u1:{count:3},u36:{count:3}}}},setState(patch:any,cb:any){this.state={...this.state,...patch};cb?.();}};
 await load.call(owner);expect(fetch.mock.calls).toEqual([['chinese-words.json?v=20260929-metadata']]);expect(owner.state.words[0].c).toBe('字');
});
it('keeps a failed required weekly bank retryable',async()=>{
 let fail=true;
 const fetch=vi.fn(async()=>({ok:!fail,json:async()=>[{c:'字',u:'fixture'}]}));
 const load=componentMethod('loadLearningData',{fetch,MATH_UNITS:[],CH_UNITS:[{id:'c2',grade:1}],SCI_UNITS:[]});
 const owner:any={state:{screen:'weekly',grade:1,weeklyConfig:{modules:{c2:{count:4}}}},setState(patch:any,cb:any){this.state={...this.state,...patch};cb?.();}};
 await expect(load.call(owner)).rejects.toThrow('題庫載入失敗');fail=false;await load.call(owner,true);expect(owner.state.words).toHaveLength(1);expect(fetch).toHaveBeenCalledTimes(2);
});
it('discards a delayed old staff callback before reading or persisting the new account state',async()=>{
 let release:any;const deferred=new Promise(r=>release=r);const save=vi.fn();
 const auth={auth:{currentUser:{uid:'fixture-admin'}},currentRole:async()=>'admin',loadRoleApi:async()=>{}};
 const prepare=componentMethod('prepareBackend',{window:{LearningPlanetAuthV2:auth},save,deferred,fetch:async(path:string)=>({ok:true,text:async()=>path.includes('staff-identity')?'({})':'(class { async delayed(){await deferred;save(this.state);this.setState({bad:true});} })'})});
 const owner:any={sessionGeneration:0,state:{old:true},setState:vi.fn()};await prepare.call(owner,'admin');const request=owner.delayed();owner.sessionGeneration++;owner.state={newAccount:true};release();await request;expect(save).not.toHaveBeenCalled();expect(owner.setState).not.toHaveBeenCalled();
});
it('lets a normal teacher save their own settings without admin roster methods',async()=>{
 const saved=vi.fn(),update=vi.fn(async()=>({})),flash=vi.fn();
 const ctx=vm.createContext({window:{LearningPlanetAuthV2:{updateOwnTeacherSettings:update}},saveTeacherConfig:saved,normalizeTeacherConfig:(x:any)=>x,normalizeTeacherFace:(x:any)=>x,teacherById:(cfg:any,id:string)=>cfg.teachers.find((x:any)=>x.id===id)});
 const Backend=vm.runInContext(readFileSync('roles/teacher.js','utf8'),ctx);
 const owner:any=new Backend();owner.state={editTeacherName:'Fixture',editTeacherAccount:'fixture',editTeacherPassword:'',editTeacherFace:'',currentTeacherId:'teacher-fixture',editingTeacherId:'teacher-fixture',teacherConfig:{teachers:[{id:'teacher-fixture',role:'teacher',googleUid:'fixture-uid'}]}};owner.flash=flash;owner.setState=(_p:any,cb:any)=>cb?.();await owner.saveTeacherSettings();expect(update).toHaveBeenCalledOnce();expect(saved).toHaveBeenCalledOnce();expect(flash).toHaveBeenLastCalledWith('✅ 教師設定已成功更新！');
});
