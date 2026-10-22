/*
 * Independent grade-4/5 regression checks against current source AND built JS.
 * Run: node scripts/check-chinese-grades45.cjs [--source-only] [--allow-interim] [--published-only]
 * No browser is launched. This checks generated HTML and model behavior only,
 * not rendered layout, visual quality, browser navigation, or a PDF file.
 * Inputs are runtime JSON and published audit manifests, never cached definitions.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const ts = require('typescript');
const repo = path.resolve(__dirname, '..');
const read = name => fs.readFileSync(path.join(repo, name), 'utf8');
const json = name => JSON.parse(read(name));
const clone = object => JSON.parse(JSON.stringify(object));
const hash = name => crypto.createHash('sha256').update(read(name)).digest('hex');
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const key = 'lp-chinese-practice-v1';
const results = [];
let checks = 0;
function check(condition, message) { checks++; assert(condition, message); }
function equal(actual, expected, message) { checks++; assert.deepEqual(clone(actual), clone(expected), message); }
function baseState(overrides = {}) {
  return { filters:{year:115,semester:'上',grade:4,publisher:'南一'}, categories:['生字'], selections:[], overrides:{}, layout:'low', name:'', date:'', allowBlank:false, ...overrides };
}
function selection(lesson, index) {
  return { ...lesson.vocabulary[index], id:`${lesson.id}:${index}`, lessonId:lesson.id,
    source:`${lesson.year}${lesson.semester}・${lesson.grade}年級・${lesson.publisher}・第${lesson.number}課 ${lesson.displayTitle ?? lesson.title}`, sourceUrl:lesson.sourceUrl };
}
function app(mode, saved = baseState(), search = '', catalogTransform = null) {
  const runtimeJSON = { stringify: JSON.stringify, parse(value, reviver) {
    const parsed=JSON.parse(value,reviver);
    return catalogTransform&&Array.isArray(parsed)&&parsed.some(item=>item?.vocabulary)?catalogTransform(parsed):parsed;
  } };
  const handlers = {};
  const root = { innerHTML:'', addEventListener:(event, listener) => { handlers[event] = listener; } };
  const customInput = { value:'', focus() {} };
  const storage = new Map([[key, JSON.stringify(saved)]]);
  const calls = { scroll:0, print:0, close:0 };
  const location = { search, href:'' };
  const context = vm.createContext({ console, URL, URLSearchParams, JSON:runtimeJSON,
    sessionStorage:{ getItem:name => storage.get(name), setItem:(name,value) => storage.set(name,value) },
    document:{ querySelector:selector => selector==='#practice-app'?root:selector==='#custom-input'?customInput:null, fonts:{ready:Promise.resolve()} },
    window:{scrollTo(){calls.scroll++;},print(){calls.print++;},close(){calls.close++;}}, location });
  const cache = new Map();
  function load(file) {
    if (!path.extname(file)) file += '.ts';
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports:{} }; cache.set(file, module);
    if (file.endsWith('.json')) { module.exports=runtimeJSON.parse(fs.readFileSync(file,'utf8')); return module.exports; }
    const js = ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
    const wrapper=vm.runInContext(`(function(require,module,exports){${js}\n})`,context,{filename:file});
    wrapper(specifier=>load(path.resolve(path.dirname(file),specifier)),module,module.exports);
    return module.exports;
  }
  if (mode==='source') load(path.join(repo,'src/chinese-practice/app.ts'));
  else vm.runInContext(read('modules/chinese-practice/chinese-practice.js'),context,{filename:'chinese-practice.js'});
  return { root, calls, location, customInput, state:()=>JSON.parse(storage.get(key)),
    load:name=>load(path.join(repo,'src/chinese-practice',name)),
    change:target=>handlers.change({target:{dataset:{},...target}}),
    input:target=>handlers.input({target:{dataset:{},...target}}),
    click:dataset=>handlers.click({target:{closest:()=>({dataset})}}),
    submit:()=>handlers.submit({preventDefault(){}}) };
}
async function scenario(mode, name, fn) {
  const before=checks;
  try { await fn(); } catch(error) { results.push({mode,scenario:name,assertions:checks-before,status:'failed',error:error.message}); throw error; }
  const result={mode,scenario:name,assertions:checks-before,status:'passed'}; results.push(result);
  console.log(`PASS ${mode}: ${name} (${result.assertions} assertions)`);
}
function optionLabels(html, name) {
  const group=html.match(new RegExp(`<select name="${name}">([\\s\\S]*?)</select>`));
  assert(group,`select ${name} exists`);
  return [...group[1].matchAll(/<option value="([^"]*)"[^>]*>([^<]*)<\/option>/g)].map(match=>[match[1],match[2]]);
}
function cards(html) { return [...html.matchAll(/data-lesson="([^"]+)"/g)].map(match=>match[1]); }
function sheets(html) { return [...html.matchAll(/<section class="sheet (low|high)"[\s\S]*?<\/section>/g)].map(match=>match[0]); }
function rowSound(html,char) {
  const match=html.match(new RegExp(`data-char="${char}" value="([^"]*)"`));
  assert(match,`row ${char} exists`); return match[1];
}
const legacy=json('src/chinese-practice/lessons-115-upper.json');
const added=json('src/chinese-practice/lessons-115-upper-grades45.json');
const optionalJson=name=>!process.argv.includes('--published-only')&&fs.existsSync(path.join(repo,name))?json(name):null;
const manifest=optionalJson('output/qa/grade45-source-manifest.json');
const raw=optionalJson('output/qa/grade45-catalog-raw.json');
const coverage=json('src/chinese-practice/coverage-sources-grades45.json');
const phonetics=json('src/chinese-practice/phonetics-status-grades45.json');
const countBy=(values,key)=>values.reduce((counts,value)=>(counts[key(value)]=(counts[key(value)]??0)+1,counts),{});
const hasPending=entry=>Array.from(entry.text).some((char,index)=>/^\p{Script=Han}$/u.test(char)&&!entry.sounds[index]);
const all=[...legacy,...added];
const byId=new Map(added.map(lesson=>[lesson.id,lesson]));
const books=[4,5].flatMap(grade=>['南一','康軒','翰林'].map(publisher=>({grade,publisher,lessons:added.filter(lesson=>lesson.grade===grade&&lesson.publisher===publisher)})));
const allEntries=all.flatMap(lesson=>lesson.vocabulary.map((_,index)=>selection(lesson,index)));
const newEntries=added.flatMap(lesson=>lesson.vocabulary.map((_,index)=>selection(lesson,index)));
const pending=newEntries.find(hasPending);
const pair=(()=>{
  for(const entry of newEntries) for(const [index,char] of Array.from(entry.text).entries()) if(/^\p{Script=Han}$/u.test(char)&&!entry.sounds[index]) {
    const known=allEntries.find(other=>other.id!==entry.id&&Array.from(other.text).some((letter,i)=>letter===char&&other.sounds[i]));
    if(known) return {pending:entry,known,char};
  }
  return null;
})();
(async()=>{
  await scenario('data','six verified official books, source manifest parity, untouched earlier grades',()=>{
    equal(added.length,72,'72 new lessons'); equal(new Set(added.map(l=>l.id)).size,72,'no duplicate IDs');
    check(!phonetics.interim||process.argv.includes('--allow-interim'),'interim phonetic data requires explicit --allow-interim and is not final completion');
    if(manifest) { equal(manifest.complete,true,'optional full official source manifest is complete'); equal(manifest.books.length,6,'optional manifest has six official book indexes'); }
    equal(coverage.books.length,6,'six shipped book-source manifests'); equal(coverage.lessonCount,72,'shipped manifest lesson count'); equal(coverage.vocabularyCount,newEntries.length,'shipped manifest vocabulary count');
    equal(coverage.sourceVocabularyHashEncoding,'SHA-256 of UTF-8 JSON.stringify([{category,text},...]); source order, no whitespace, unescaped Unicode.','source hash encoding explicitly declared');
    const rawLessons=raw?(Array.isArray(raw)?raw:raw.lessons):null;
    if(rawLessons) { check(Array.isArray(rawLessons),'optional sanitized raw manifest has lessons'); equal(rawLessons.length,72,'optional raw lesson count'); }
    for(const book of books) {
      equal(book.lessons.length,12,`${book.grade}/${book.publisher}: twelve courses`);
      equal(book.lessons.map(l=>l.number),Array.from({length:12},(_,i)=>i+1),'consecutive actual lesson numbers');
      const official=manifest?.books.find(item=>item.grade===book.grade&&item.publisher===book.publisher);
      const published=coverage.books.find(item=>item.grade===book.grade&&item.publisher===book.publisher);
      equal(published.lessons.map(l=>[l.id,l.title,l.sourceUrl]),book.lessons.map(l=>[l.id,l.title,l.sourceUrl]),'shipped source manifest matches runtime');
      equal(published.vocabularyCount,book.lessons.reduce((n,l)=>n+l.vocabulary.length,0),'shipped book vocabulary total');
      if(official) equal(book.lessons.map(l=>({id:l.id,number:l.number,title:l.title})),official.lessons.map(l=>({id:l.id,number:l.number,title:l.title})),'optional full index IDs and titles match runtime');
      for(const lesson of book.lessons) {
        const publishedLesson=published.lessons.find(item=>item.id===lesson.id);
        const vocabulary=lesson.vocabulary.map(v=>({category:v.category,text:v.text}));
        const vocabularyHash=crypto.createHash('sha256').update(JSON.stringify(vocabulary),'utf8').digest('hex');
        equal(vocabularyHash,publishedLesson.sourceVocabularySha256,'ordered category/headword hash matches independently collected official source manifest');
        equal(vocabulary.length,publishedLesson.vocabularyCount,'source lesson vocabulary count');
        equal(vocabulary.reduce((counts,item)=>(counts[item.category]=(counts[item.category]??0)+1,counts),{}),publishedLesson.categoryCounts,'source lesson category counts');
        check(/^[a-f0-9]{64}$/.test(publishedLesson.sha256),'official HTML snapshot digest retained');
        if(rawLessons) { const origin=rawLessons.find(item=>item.id===lesson.id); equal(vocabulary,origin.vocabulary.map(v=>({category:v.category,text:v.text})),'optional raw source preserves all categories/headwords in official order'); }
        equal([lesson.year,lesson.semester,lesson.checkedAt,lesson.volume,lesson.volumeDerived,lesson.edition,lesson.curriculum],[115,'上','2026-10-22',book.grade*2-1,true,null,null],'scope and transparent version facts');
        const url=new URL(lesson.sourceUrl); equal(url.host,'pedia.cloud.edu.tw','official lesson source'); equal(url.searchParams.get('TextNameId'),lesson.id,'exact official ID');
        for(const entry of lesson.vocabulary) {
          equal(entry.sounds.length,Array.from(entry.text).length,'sound and Unicode character lengths agree');
          for(const [index,char] of Array.from(entry.text).entries()) {
            const sound=entry.sounds[index];
            if(/^\p{Script=Han}$/u.test(char)) check(!sound||/^(?:˙[ㄅ-ㄩ]{1,3}|[ㄅ-ㄩ]{1,3}[ˊˇˋ]?)$/u.test(sound),'Han sound uses valid aligned Zhuyin tone notation');
            else equal(sound,'','non-Han separator keeps empty aligned sound slot');
          }
          check(['生字','認讀字','語詞'].includes(entry.category),'known category');
          check(entry.soundSources?.length>0,'phonetic provenance present');
          check(!['definition','definitions','description','examples','passage','body','html'].some(field=>field in entry),'no dictionary definitions or passages in runtime');
          if(hasPending(entry)) check(entry.soundNote?.includes('待'),'pending reading explicitly documented');
          for(const source of entry.soundSources) check(['pedia.cloud.edu.tw','dict.revised.moe.edu.tw','dict.concised.moe.edu.tw','stroke-order.learningweb.moe.edu.tw'].includes(new URL(source).host),'phonetic provenance uses official MOE destination');
        }
      }
    }
    equal(hash('src/chinese-practice/lessons-115-upper.json'),'34bda50dc27218d8877f6ac5ed558ff604734dfcadeec81f7a80e690abe8ed35','approved grade1–3 catalog is byte-identical to reviewed baseline5db9706');
    const changed=execFileSync('git',['diff','--name-only','5db9706'],{cwd:repo,encoding:'utf8'}).trim().split('\n').filter(Boolean);
    const forbidden=changed.filter(file=>/^(auth-v2\/|roles\/|functions\/|src\/experiments\/|modules\/(?:experiments|interactive-labs|earth-lab|earth-orbit|optics|fire-weather)\/|firestore\.rules$|index\.html$|support\.js$)/.test(file));
    equal(forbidden,[],'no existing auth/teacher/experiment/homepage files changed');
  });
  if(!phonetics.interim) await scenario('data','final phonetic decisions independently reconcile with published dictionary facts',()=>{
    const audit=json('src/chinese-practice/sounds-audit-grades45.json');
    equal(phonetics.lookupsComplete,true,'final official lookup completion explicitly confirmed');
    equal(phonetics.interim,false,'final report explicitly not interim');
    const required=[...new Set(newEntries.flatMap(entry=>[entry.text,...Array.from(entry.text).filter(char=>/^\p{Script=Han}$/u.test(char))]))].sort();
    equal(Object.keys(audit).sort(),required,'audit contains every required term exactly and no standalone separators');
    equal(phonetics.requiredTerms,required.length,'required-term count derived independently from source text');
    equal(phonetics.auditedTerms,Object.keys(audit).length,'audit total consistent');
    equal(phonetics.lookupErrors,{},'final lookup error list is empty');
    equal(Object.values(audit).filter(entry=>entry.error).length,0,'no hidden lookup errors in audited facts');
    const candidates=text=>{
      if(!audit[text]?.toneChecked) return [];
      for(const name of ['mini_dict','dic_concise','dic_revised']) {
        const rows=(audit[text].dictionaries??[]).filter(d=>d.dictionary===name).flatMap(d=>d.readings.map(r=>r.sounds));
        if(rows.length) return [...new Map(rows.map(row=>[JSON.stringify(row),row])).values()];
      }
      return [];
    };
    const characterCandidates=char=>!audit[char]?.toneChecked?[]:[...new Set((audit[char].dictionaries??[]).filter(d=>['mini_dict','dic_concise','dic_revised'].includes(d.dictionary)).flatMap(d=>d.readings.filter(r=>r.sounds.length===1).map(r=>r.sounds[0])))].sort().map(sound=>[sound]);
    const pendingKey=entry=>`${entry.lessonId}:${entry.category}:${entry.text}`;
    equal(phonetics.pendingEntries.map(pendingKey).sort(),newEntries.filter(hasPending).map(pendingKey).sort(),'pending status exactly matches runtime Han blanks');
    equal(phonetics.methods.pending,newEntries.filter(hasPending).length,'pending summary matches actual entries');
    for(const lesson of added) for(const entry of lesson.vocabulary) {
      const chars=Array.from(entry.text), choices=candidates(entry.text);
      check(entry.soundMethod,'explicit evidence method recorded');
      if(choices.length===1&&chars.length>1) {
        equal(entry.sounds,choices[0],'single preferred whole-word candidate retained exactly');
        equal(entry.soundMethod,'exact_official_word','exact whole-word evidence labeled');
      } else if(choices.length>1&&chars.length>1) {
        equal(entry.sounds,chars.map((_,index)=>new Set(choices.map(choice=>choice[index])).size===1?choices[0][index]:''),'whole-word ambiguous slots remain empty, never first-reading default');
        equal(entry.soundMethod,'pending_multiple_word_readings','whole-word ambiguity labeled');
      } else for(const [index,char] of chars.entries()) {
        if(!/^\p{Script=Han}$/u.test(char)) { equal(entry.sounds[index],'','source separator has no fabricated phonetic sound'); continue; }
        const charChoices=characterCandidates(char);
        if(charChoices.length===1) equal(entry.sounds[index],charChoices[0][0],'unique character reading across all three official dictionaries retained');
        else if(entry.sounds[index]) {
          equal(chars.length,1,'contextual resolution never silently composes a missing whole word');
          const supports=lesson.vocabulary.flatMap(term=>{
            const termChars=Array.from(term.text), readings=candidates(term.text);
            return termChars.length>1&&readings.length===1?termChars.flatMap((c,i)=>c===char?[{term:term.text,sound:readings[0][i]}]:[]):[];
          });
          equal([...new Set(supports.map(item=>item.sound))],[entry.sounds[index]],'same-lesson context unambiguous across all audited phrases');
          check(supports.some(item=>entry.soundSources.some(url=>new URL(url).searchParams.get('title')===item.term)),'same-lesson supporting phrase cited');
          check(entry.soundNote?.includes('本課'),'same-lesson limitation explicitly noted');
          equal(entry.soundMethod,'same_lesson_unambiguous_phrase','contextual evidence labeled');
        } else check(entry.soundNote?.includes('待'),'unresolved letter kept pending, not guessed');
      }
    }
  });
  check(pending,'at least one genuine new pending entry available for gate regression'); check(pair,'genuine known/pending shared character available');
  for(const mode of process.argv.includes('--source-only')?['source']:['source','bundle']) {
    await scenario(mode,'six-book grade labels, actual hero coverage, empty state, no substitutions',()=>{
      const ui=app(mode);
      check(ui.root.innerHTML.includes('115 上 · 三出版社 1～5 年級 · 164 課＋前導單元'),'hero accurately describes combined catalog');
      for(const book of books) {
        ui.change({name:'grade',value:String(book.grade)}); ui.change({name:'publisher',value:book.publisher});
        equal(cards(ui.root.innerHTML),book.lessons.map(l=>l.id),'only exact selected book cards');
        for(const lesson of book.lessons) check(ui.root.innerHTML.includes(`第 ${lesson.number} 課 ${escape(lesson.displayTitle??lesson.title)}</h3>`),'all card titles use source-aware canonical display');
        const gradeLabels=Object.fromEntries(optionLabels(ui.root.innerHTML,'grade'));
        equal(gradeLabels[4],'4 年級','fourth grade not labeled missing'); equal(gradeLabels[5],'5 年級','fifth grade not labeled missing'); equal(gradeLabels[6],'6 年級（未收錄）','sixth grade remains unavailable');
        check(ui.root.innerHTML.includes('已收錄 12 課'),'actual book count shown');
        ui.change({name:'semester',value:'下'}); equal(cards(ui.root.innerHTML),[],'no115下 substitution');
        check(/本批[^<]*未收錄[^<]*115\s*下/.test(ui.root.innerHTML),'115下 described only as outside this collected batch');
        check(ui.root.innerHTML.includes('下學期（未收錄）'),'semester selector says uncollected rather than officially unavailable');
        check(!ui.root.innerHTML.includes('教育百科尚未列出'),'no unsupported claim that official115下 sources do not exist');
        check(/不以[^<]*舊年[^<]*(?:代替|替代)/.test(ui.root.innerHTML),'no old-year substitution explanation');
        ui.change({name:'semester',value:'上'});
      }
      ui.change({name:'grade',value:'6'}); equal(cards(ui.root.innerHTML),[],'no grade6 substitution');
      check(ui.root.innerHTML.includes('目前已收錄 115 上學期・1～5 年級'),'empty-state coverage current');
      ui.change({name:'grade',value:'4'}); ui.change({name:'year',value:'114'}); equal(cards(ui.root.innerHTML),[],'no old-year substitution');
    });
    await scenario(mode,'cross-six-book whole-lesson selection idempotency, provenance, precise cancellation',async()=>{
      const ui=app(mode); let expected=[];
      for(const book of books) {
        const lesson=book.lessons[0];
        ui.change({name:'grade',value:String(book.grade)}); ui.change({name:'publisher',value:book.publisher});
        const entries=lesson.vocabulary.flatMap((v,index)=>v.category==='生字'?[selection(lesson,index)]:[]);
        ui.change({dataset:{lesson:lesson.id},checked:true}); ui.change({dataset:{lesson:lesson.id},checked:true}); expected.push(...entries);
        equal(ui.state().selections.map(e=>e.id),expected.map(e=>e.id),'repeated select never duplicates or loses another book');
      }
      const saved=ui.state(); equal(new Set(saved.selections.map(e=>e.lessonId)).size,6,'all six lesson origins retained');
      for(const entry of saved.selections) { const lesson=byId.get(entry.lessonId); equal(entry.source,selection(lesson,Number(entry.id.split(':')[1])).source,'canonical grade/publisher/title provenance'); equal(entry.sourceUrl,lesson.sourceUrl,'canonical official link'); }
      const cancelled=books[2].lessons[0].id;
      ui.change({dataset:{lesson:cancelled},checked:false});
      equal(ui.state().selections.map(e=>e.id),expected.filter(e=>e.lessonId!==cancelled).map(e=>e.id),'cancel affects exact chosen lesson only');
      const id=ui.state().selections[0].id; await ui.click({removeEntry:id});
      check(!ui.state().selections.some(e=>e.id===id),'one source entry cancellation precise');
      equal(new Set(ui.state().selections.map(e=>e.lessonId)).size,5,'other books remain selected');
    });
    await scenario(mode,'genuine pending reading blocks preview until explicit allowBlank',async()=>{
      const ui=app(mode,baseState({selections:[pending]}));
      await ui.click({action:'preview'}); check(!ui.root.innerHTML.includes('paper-scroller'),'pending preview initially blocked');
      check(ui.root.innerHTML.includes('請核對並填寫缺少的注音'),'pending diagnostic visible'); equal(ui.calls.print,0,'no accidental printing');
      ui.change({name:'allowBlank',checked:true}); await ui.click({action:'preview'});
      check(ui.root.innerHTML.includes('paper-scroller'),'explicit blank permission allows preview');
      check(ui.root.innerHTML.includes('class="pending">注音待核'),'pending label remains printed');
      await ui.click({action:'print'}); equal(ui.calls.print,1,'print invoked once only after allowed preview');
    });
    await scenario(mode,'known plus pending shared character remains pending in either selection order',async()=>{
      for(const entries of [[pair.pending,pair.known],[pair.known,pair.pending]]) {
        const ui=app(mode,baseState({selections:entries})); equal(rowSound(ui.root.innerHTML,pair.char),'','known reading cannot clear separate unresolved source');
        await ui.click({action:'preview'}); check(!ui.root.innerHTML.includes('paper-scroller'),'merged pending still blocks preview');
        const index=Array.from(pair.known.text).findIndex((char,i)=>char===pair.char&&pair.known.sounds[i]), sound=pair.known.sounds[index];
        ui.change({dataset:{char:pair.char},value:sound}); equal(rowSound(ui.root.innerHTML,pair.char),sound,'explicit manual override retained');
        check(ui.root.innerHTML.includes('手動注音（請核對官方來源）'),'override not represented as officially verified');
      }
    });
    await scenario(mode,'restored sessions refresh canonical entries and preserve removed phrase characters',async()=>{
      const term=newEntries.find(e=>new Set(Array.from(e.text)).size>1);
      const omitted=Array.from(term.text)[0];
      const stale={...term,text:'錯誤',sounds:['ㄅㄆㄇ'],source:'<script>stale</script>',sourceUrl:'javascript:alert(1)',omitted:[omitted,'🧪']};
      const ui=app(mode,baseState({selections:[stale],allowBlank:true})); const restored=ui.state().selections[0];
      equal(restored.text,term.text,'canonical text restored'); equal(restored.sounds,term.sounds,'canonical sound restored'); equal(restored.source,term.source,'canonical label restored'); equal(restored.sourceUrl,term.sourceUrl,'canonical URL restored');
      equal(restored.omitted,[omitted],'real omission retained, unrelated omission dropped');
      check(!ui.root.innerHTML.includes(`data-char="${omitted}"`),'removed character does not reappear');
      check(!ui.root.innerHTML.includes('javascript:alert'),'stale unsafe source not rendered');
      await ui.click({action:'preview'}); check(!ui.root.innerHTML.includes(`<span class="head-char">${omitted}</span>`),'removed character absent from workbook');
      await ui.click({action:'edit'}); equal(ui.state().selections[0].omitted,[omitted],'preview/edit keeps omission');
    });
    await scenario(mode,'high-grid eight-row pagination, complete source appendix, edit and return behavior',async()=>{
      const entries=books.flatMap(book=>book.lessons[0].vocabulary.flatMap((v,index)=>v.category==='生字'?[selection(book.lessons[0],index)]:[]));
      const extra=selection(books[0].lessons[1],0); entries.push(extra);
      const ui=app(mode,baseState({selections:entries,layout:'high',allowBlank:true}));
      await ui.click({action:'preview'}); const pages=sheets(ui.root.innerHTML); const rowCount=new Set(entries.flatMap(e=>Array.from(e.text))).size;
      equal(pages.length,Math.ceil(rowCount/8),'high layout has eight characters per content page');
      pages.forEach((page,index)=>equal((page.match(/class="practice-row"/g)||[]).length,index===pages.length-1?rowCount-index*8:8,'correct content row count'));
      equal((ui.root.innerHTML.match(/class="sheet source-sheet"/g)||[]).length,2,'seven sources create two appendix pages');
      equal((ui.root.innerHTML.match(/class="source-block"/g)||[]).length,7,'all lesson sources retained');
      for(const lesson of [...books.map(book=>book.lessons[0]),books[0].lessons[1]]) check(ui.root.innerHTML.includes(lesson.sourceUrl),'appendix preserves source URL');
      check(ui.root.innerHTML.includes(`${pages.length+2} 頁 A4`),'toolbar total includes source pages');
      await ui.click({action:'edit'}); check(ui.root.innerHTML.includes('class="workspace no-print"'),'return to selection works'); equal(ui.state().selections.map(e=>e.id),entries.map(e=>e.id),'return preserves selection');
      await ui.click({action:'return'}); equal(ui.location.href,'index.html','regular return destination unchanged');
      const fromMap=app(mode,baseState(),'?from=map'); await fromMap.click({action:'return'}); equal(fromMap.calls.close,1,'map popup return calls close'); equal(fromMap.location.href,'','map popup does not change destination');
    });
    await scenario(mode,'mixed legacy/new workbook sources retain each actual audit date',async()=>{
      const oldLesson=legacy.find(lesson=>lesson.grade===1&&lesson.number===1);
      const anotherOld=legacy.find(lesson=>lesson.grade===3&&lesson.number===1);
      const newLesson=books[0].lessons[0];
      for(const lessons of [[oldLesson,newLesson],[oldLesson,newLesson,anotherOld]]) {
        const ui=app(mode,baseState({selections:lessons.map(lesson=>selection(lesson,0)),allowBlank:true}));
        await ui.click({action:'preview'});
        check(ui.root.innerHTML.includes('paper-scroller'),'mixed sources preview opens');
        equal(ui.root.innerHTML.includes('class="sheet source-sheet"'),lessons.length>2,'correct inline versus source-appendix branch');
        for(const lesson of lessons) {
          check(ui.root.innerHTML.includes(`詞表查核 ${lesson.checkedAt} · ${lesson.sourceUrl}</p>`),'actual audit date is tied to its exact lesson URL');
          const wrong=lesson.grade<=3?'2026-10-22':'2026-10-09';
          check(!ui.root.innerHTML.includes(`詞表查核 ${wrong} · ${lesson.sourceUrl}`),'global date never overwrites that lesson audit');
        }
        check(ui.root.innerHTML.includes('字音：教育部《國語小字典》《國語辭典簡編本》《重編國語辭典修訂本》（教育百科）'),'printed source attribution distinguishes dictionary sound evidence');
        check(!ui.root.innerHTML.includes('字音：教育部國字標準字體筆順學習網／教育百科'),'old misleading stroke-site phonetic attribution absent');
      }
    });
    await scenario(mode,'source name separator preserved but never becomes handwriting or a pending sound',async()=>{
      const properName=newEntries.find(entry=>entry.text==='海倫‧凱勒'); check(properName,'real source name fixture exists');
      const ui=app(mode,baseState({selections:[properName]}));
      equal(ui.state().selections[0].text,'海倫‧凱勒','original official proper-name spelling retained');
      check(!ui.root.innerHTML.includes('data-char="‧"'),'middle dot creates no selection/phonetic row');
      equal(rowSound(ui.root.innerHTML,'勒'),properName.sounds[4],'last Han reading remains exactly as official evidence currently permits');
      for(const [index,char] of Array.from(properName.text).entries()) if(/^\p{Script=Han}$/u.test(char)) equal(rowSound(ui.root.innerHTML,char),properName.sounds[index],'sound indexing unaffected by skipped separator');
      await ui.click({action:'preview'}); equal(ui.root.innerHTML.includes('paper-scroller'),!hasPending(properName),'real-name preview gate depends on Han evidence, not separator');
      ui.change({name:'allowBlank',checked:true}); await ui.click({action:'preview'});
      equal((ui.root.innerHTML.match(/class="head-char"/g)||[]).length,4,'only four Han characters get writing rows');
      check(!ui.root.innerHTML.includes('<span class="head-char">‧</span>'),'separator not printed as practice character');
      await ui.click({action:'edit'}); for(const char of ['海','倫','凱','勒']) await ui.click({removeChar:char});
      equal(ui.state().selections,[],'removing all Han characters leaves no punctuation-only selection');
      const fixture=app(mode,baseState({selections:[properName]}),'',lessons=>{
        // Synthetic in-memory-only data, never an official reading or file edit.
        for(const lesson of lessons) if(lesson.id===properName.lessonId) {
          const entry=lesson.vocabulary[Number(properName.id.split(':')[1])];
          entry.text='海‧倫'; entry.sounds=['ㄏㄞˇ','','ㄌㄨㄣˊ']; entry.soundNote='Synthetic known-Han separator regression fixture.';
        }
        return lessons;
      });
      await fixture.click({action:'preview'}); check(fixture.root.innerHTML.includes('paper-scroller'),'known Han + blank separator previews without allowBlank');
      equal((fixture.root.innerHTML.match(/class="head-char"/g)||[]).length,2,'synthetic fixture has exactly two writing rows');
      check(!fixture.root.innerHTML.includes('class="pending"'),'blank non-Han position never gets pending label');
    });
    await scenario(mode,'unsafe text escaped and unsafe custom characters rejected',async()=>{
      const unsafe='<img src=x onerror=alert(1)> & " \' ';
      const ui=app(mode,baseState({selections:[newEntries[0]],name:unsafe,date:unsafe,allowBlank:true}));
      check(!ui.root.innerHTML.includes('<img src=x'),'unsafe name/date never becomes element'); check(ui.root.innerHTML.includes(escape(unsafe)),'selection fields contain escaped text');
      await ui.click({action:'preview'}); check(!ui.root.innerHTML.includes('<img src=x'),'workbook unsafe text never becomes element'); check(ui.root.innerHTML.includes(escape(unsafe)),'workbook contains escaped name/date');
      await ui.click({action:'edit'}); const before=ui.state().selections.map(e=>e.id); ui.customInput.value='國<script>alert(1)</script>'; ui.submit();
      equal(ui.state().selections.map(e=>e.id),before,'unsafe custom entry rejected without changing selection');
      check(ui.root.innerHTML.includes('自訂字只接受國字'),'validation shown'); check(!ui.root.innerHTML.includes('<script>alert'),'input not interpolated into HTML');
    });
  }
  const report={checkedAt:new Date().toISOString(),result:phonetics.interim?'passed with interim phonetic data; final phonetic audit required':'passed',phoneticDataStatus:phonetics.interim?'interim':'final',executedModes:process.argv.includes('--source-only')?['source']:['source','bundle'],assertions:checks,scenarios:results,
    phoneticAudit:{lookupsComplete:phonetics.lookupsComplete??false,requiredTerms:phonetics.requiredTerms??null,auditedTerms:phonetics.auditedTerms,lookupErrors:phonetics.lookupErrors??null,newUnambiguousSingleCharacters:phonetics.singleNewUnambiguous,pendingByMethod:countBy(phonetics.pendingEntries,entry=>entry.method),pendingByBook:countBy(phonetics.pendingEntries,entry=>{const lesson=byId.get(entry.lessonId);return `${lesson.grade} ${lesson.publisher}`;})},
    sourceEvidence:{requiredManifest:'src/chinese-practice/coverage-sources-grades45.json',orderedVocabularyHashesVerified:72,optionalRawCompared:!!raw,optionalFullManifestCompared:!!manifest},
    catalog:{newBooks:books.map(book=>({grade:book.grade,publisher:book.publisher,lessons:book.lessons.length,vocabulary:book.lessons.reduce((n,l)=>n+l.vocabulary.length,0)})),newLessons:added.length,newVocabulary:newEntries.length,pendingEntries:newEntries.filter(hasPending).length,combinedLessons:all.length},
    genuinePendingMergeFixture:{pendingId:pair.pending.id,knownId:pair.known.id,char:pair.char},
    files:{catalogSha256:hash('src/chinese-practice/lessons-115-upper-grades45.json'),sourceSha256:hash('src/chinese-practice/app.ts'),bundleSha256:process.argv.includes('--source-only')?null:hash('modules/chinese-practice/chinese-practice.js')},
    limitations:['Mocked DOM and generated HTML only; no browser was launched.','No rendered tablet layout, screenshot, generated PDF or print-output verification.','No deployment or user-computer operations performed.','Published source-manifest parity is checked; cached dictionary definitions are neither parsed nor treated as test evidence.','Dictionary readings and same-lesson vocabulary support are not claims of full textbook-page pronunciation verification.']};
  fs.mkdirSync(path.join(repo,'output/qa'),{recursive:true});
  fs.writeFileSync(path.join(repo,'output/qa/grade45-independent-review.json'),JSON.stringify(report,null,2)+'\n');
  const lines=['# Independent Chinese 115-upper grades 4–5 regression review','',`Checked: ${report.checkedAt}`,`Result: ${report.result}; ${checks} assertions in ${results.length} scenarios.`, '',
    '## Scope', `Executed ${report.executedModes.join(' and ')} in a minimal mocked DOM. Runtime catalog compared with 72 source-derived ordered-vocabulary hashes in the shipped coverage manifest. Optional sanitized raw comparison: ${!!raw}; optional full-source manifest comparison: ${!!manifest}. No browser, visual, tablet-layout or generated-PDF validation was performed. No deployment or user-computer operation was performed.`, '',
    '## Catalog',`Six new books, ${added.length} new lessons and ${newEntries.length} categorized vocabulary entries. ${report.catalog.pendingEntries} entries remain explicitly pending. Earlier grade 1–3 catalog byte-identical to baseline 5db9706.`, '',
    ...books.map(book=>`- Grade ${book.grade}, ${book.publisher}: ${book.lessons.length} lessons, ${book.lessons.reduce((n,l)=>n+l.vocabulary.length,0)} vocabulary entries.`),'','## Phonetic scope',`Official required/audited terms: ${report.phoneticAudit.requiredTerms}/${report.phoneticAudit.auditedTerms}; lookupsComplete: ${report.phoneticAudit.lookupsComplete}; lookup errors: ${Object.keys(report.phoneticAudit.lookupErrors??{}).length}.`,...Object.entries(report.phoneticAudit.pendingByMethod).map(([method,count])=>`- Pending ${method}: ${count}.`),'','## Scenarios',...results.map(result=>`- ${result.mode}: ${result.scenario} (${result.assertions} assertions).`),'','## Limits',...report.limitations.map(line=>`- ${line}`),''];
  fs.writeFileSync(path.join(repo,'output/qa/grade45-independent-review.md'),lines.join('\n'));
  console.log(`PASS ${checks} assertions, ${results.length} scenarios; phonetic data ${report.phoneticDataStatus}. Report: output/qa/grade45-independent-review.json`);
})().catch(error=>{
  const failed={checkedAt:new Date().toISOString(),result:'failed',phoneticDataStatus:phonetics.interim?'interim':'final',executedModes:process.argv.includes('--source-only')?['source']:['source','bundle'],assertions:checks,scenarios:results,error:error.message,limitations:['Mocked DOM only; no browser, rendered layout or generated-PDF verification.']};
  fs.mkdirSync(path.join(repo,'output/qa'),{recursive:true});
  fs.writeFileSync(path.join(repo,'output/qa/grade45-independent-review.json'),JSON.stringify(failed,null,2)+'\n');
  fs.writeFileSync(path.join(repo,'output/qa/grade45-independent-review.md'),`# Independent grade 4–5 regression review\n\nResult: FAILED. Phonetic data: ${failed.phoneticDataStatus}.\nChecked: ${failed.checkedAt}\n\n${results.map(r=>`- ${r.status}: ${r.mode}, ${r.scenario}`).join('\n')}\n\nFailure: ${error.message}\n\nMocked DOM only. No browser, rendered layout or generated-PDF verification.\n`);
  console.error(error);process.exitCode=1;
});
