import { CHECKED_AT, LESSONS, lessonLabel, soundSource, type Category } from './catalog';
import { customSelections, dictionaryUrl, keyOf, matchingLessons, paginate, practiceRows, removeCharacter, selectionOf, setSelections, strokeLink, validSound, type Filters, type Selection } from './model';
const root = document.querySelector<HTMLElement>('#practice-app')!;
const esc = (value:unknown) => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]!));
const link = (url:string,label:string) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
const categories: Category[] = ['生字','認讀字','語詞'];
interface State { filters:Filters; categories:Category[]; selections:Selection[]; overrides:Record<string,string>; layout:string; name:string; date:string; allowBlank:boolean }
const defaultState:State = {filters:{year:115,semester:'上',grade:1,publisher:'南一'},categories:['生字'],selections:[],overrides:{},layout:'low',name:'',date:'',allowBlank:false};
let state = defaultState;
try {
  const saved = JSON.parse(sessionStorage.getItem('lp-chinese-practice-v1') ?? 'null');
  if (saved && Array.isArray(saved.selections) && saved.filters && Array.isArray(saved.categories)) {
    const canonical = LESSONS.flatMap(lesson => lesson.vocabulary.map((_,index)=>selectionOf(lesson,index)));
    const selections = saved.selections.flatMap((old:Selection) => {
      const entry = canonical.find(item => item.id === old.id);
      if (entry) return [{...entry,omitted:Array.isArray(old.omitted)?old.omitted.filter(char=>entry.text.includes(char)):[]}];
      try { return old.id?.startsWith('custom:') ? customSelections(old.text) : []; } catch { return []; }
    });
    state = {...defaultState,...saved,selections};
  }
} catch { /* Session storage is optional (private browsing/storage quota). */ }
let preview = false, message = '';
const save = () => { try { sessionStorage.setItem('lp-chinese-practice-v1',JSON.stringify(state)); } catch { /* Keep working in memory. */ } };
const option = (value:string|number,label:string,selected:string|number) => `<option value="${esc(value)}" ${value === selected ? 'selected':''}>${esc(label)}</option>`;
const field = (name:string,label:string,content:string) => `<label class="filter">${label}<select name="${name}">${content}</select></label>`;
const selected = (id:string) => state.selections.some(item=>item.id === id && !item.omitted?.length);
function validate() {
  const rows = practiceRows(state.selections,state.overrides);
  if (!rows.length) return '請先勾選生字或加入自訂字。';
  if (rows.some(row=>row.sound && !validSound(row.sound))) return '注音格式有誤：請使用注音符號與聲調，輕聲 ˙ 放在前方。';
  if (!state.allowBlank && rows.some(row=>!row.sound)) return '請核對並填寫缺少的注音；也可勾選「待核注音留空」後列印。';
  return '';
}
function render() {
  save();
  const rows = practiceRows(state.selections,state.overrides);
  root.innerHTML = `<header class="topbar no-print"><a class="brand" href="index.html">✦ Learning Planet <span>學習星球</span></a><button data-action="return">← 返回國語星球</button></header>
  <section class="hero no-print"><p class="eyebrow">國語星球 / HANDWRITING</p><h1>我的生字練習簿</h1><p>挑一課、選幾個字，慢慢寫出自己的進步。</p><span class="badge">115 上 · 三出版社 1～3 年級 · 92 課＋前導單元</span></section>
  <p class="feedback no-print" role="status" aria-live="polite">${esc(message)}</p>
  ${preview ? `<section class="print-toolbar no-print"><button data-action="edit">← 返回選字</button><strong>${rows.length} 字 · ${workbookPageCount(rows)} 頁 A4</strong><button class="primary" data-action="print">列印／另存 PDF</button><p>列印選 A4、比例 100%、關閉瀏覽器頁首頁尾。目的地選「儲存為 PDF」。</p></section>
  <div class="paper-scroller">${workbook()}</div>` : `<div class="workspace no-print"><section class="panel lessons"><h2>① 選教材與生字</h2>
  <div class="filters">${field('year','學年度',Array.from({length:9},(_,i)=>option(115-i,`${115-i} 學年度${i?'（未收錄）':''}`,state.filters.year)).join(''))}
  ${field('semester','學期',option('上','上學期',state.filters.semester)+option('下',state.filters.year===115?'下學期（教育百科尚未列出）':'下學期（未收錄）',state.filters.semester))}
  ${field('grade','年級',Array.from({length:6},(_,i)=>option(i+1,`${i+1} 年級${i>=3?'（未收錄）':''}`,state.filters.grade)).join(''))}
  ${field('publisher','出版社',['南一','康軒','翰林'].map(name=>option(name,name,state.filters.publisher)).join(''))}</div>
  <div class="category-controls" role="group" aria-label="詞條分類">${categories.map(category=>`<label><input type="checkbox" name="category" value="${category}" ${state.categories.includes(category)?'checked':''}> ${category}</label>`).join('')}</div>
  <p class="muted">預設只選生字。切換教材或分類，已選清單仍保留；語詞拆成逐字練習並去重。</p>
  ${lessonCards()}<div class="custom"><h3>加入自訂字</h3><form id="custom-form"><label for="custom-input">輸入國字（可用空格或逗號分隔）</label><div class="input-row"><input id="custom-input" name="custom" placeholder="例如：小、右、花" maxlength="200"><button type="submit">加入</button></div></form><p class="muted">自訂字不屬於教材。未核對字的注音留待填寫，筆順導向官方查詢。</p></div></section>
  <aside class="panel cart"><div class="heading-row"><h2>② 已選 ${rows.length} 字</h2><button data-action="clear" ${rows.length?'':'disabled'}>全部清除</button></div><p class="muted">${state.selections.length} 個詞條，國字合併重複，保留每個來源。</p>
  ${rows.length ? `<div class="selection-list">${rows.map(row=>`<article class="selected-row"><div class="char-title"><strong>${esc(row.char)}</strong><label>注音 ${esc(row.char)}<input class="sound-input" data-char="${esc(row.char)}" value="${esc(row.sound)}" placeholder="待核" maxlength="5" aria-label="注音 ${esc(row.char)}"></label><button data-remove-char="${esc(row.char)}" aria-label="移除 ${esc(row.char)}">×</button></div>
  ${row.sounds.length>1?`<p class="warning">來源讀音不同：${esc(row.sounds.join(' / '))}，請依練習語境確認。</p>`:''}
  <div class="external-links">${link(dictionaryUrl(row.char),'查字義 ↗')} ${link(strokeLink(row.char).url,strokeLink(row.char).label)} ${link(soundSource(row.char),'核對注音 ↗')}</div>
  <details><summary>${row.origins.length} 個出處</summary>${row.origins.map(origin=>`<div class="origin">${link(origin.sourceUrl,origin.source)} · ${esc(origin.category)}「${esc(origin.text)}」 <button data-remove-entry="${esc(origin.id)}" aria-label="取消 ${esc(origin.source)} ${esc(origin.text)}">取消</button>${origin.soundNote?`<p>${esc(origin.soundNote)}</p>`:''}</div>`).join('')}</details>${state.overrides[row.char]!==undefined?'<small class="warning">手動注音（請核對官方來源）</small>':''}</article>`).join('')}</div>` : '<div class="empty">✎<p>從左邊勾選喜歡的字<br>或加入自己的國字。</p></div>'}
  <div class="settings"><h3>③ 練習簿設定</h3><label>格子大小<select name="layout">${option('low','低年級 · 30 mm 大格（6 字／頁）',state.layout)}${option('high','高年級 · 21 mm 小格（8 字／頁）',state.layout)}</select></label>
  <div class="name-date"><label>姓名<input name="studentName" value="${esc(state.name)}" maxlength="20" placeholder="留空供手寫"></label><label>日期<input name="date" type="date" value="${esc(state.date)}"></label></div>
  <label class="blank-option"><input name="allowBlank" type="checkbox" ${state.allowBlank?'checked':''}> 待核注音留空（紙上標示待核）</label><p class="muted">每字：字頭＋注音 → 2 格描紅 → 2 格空白。使用既有 Noto Sans TC 字體。</p><button class="primary preview-button" data-action="preview" ${rows.length?'':'disabled'}>預覽 A4 練習簿 →</button></div></aside></div>`}
  <footer class="site-footer no-print">教材詞表與字音來源：教育部教育百科、國字標準字體筆順學習網。查核日 ${CHECKED_AT}。<br>其餘教材尚未收錄，不沿用舊年資料；本頁不儲存到雲端。字體：${link('https://github.com/notofonts/noto-cjk/blob/main/Sans/LICENSE','Noto Sans TC / SIL OFL 1.1')}。</footer>`;
  const focus = document.querySelector<HTMLInputElement>('#custom-input');
  if (message.startsWith('已加入')) focus?.focus();
}
function lessonCards() {
  const lessons = matchingLessons(state.filters);
  if (!lessons.length) return `<div class="empty unavailable"><h3>這個教材組合尚未收錄</h3><p>${state.filters.year===115&&state.filters.semester==='下'?'教育百科尚未列出 115 下詞表；不以 114 下或其他舊年資料代替。':'目前已收錄 115 上學期・1～3 年級・南一、康軒、翰林各課。'}</p>${link('https://pedia.cloud.edu.tw/Bookmark/TextWord','查看官方教材表 ↗')}</div>`;
  return lessons.map(lesson=>{
    const entries = lesson.vocabulary.flatMap((item,index)=>state.categories.includes(item.category)?[selectionOf(lesson,index)]:[]);
    const checked = entries.length>0 && entries.every(entry=>selected(entry.id));
    return `<article class="lesson-card"><div class="lesson-header"><h3>${lesson.number===0?'前導單元':`第 ${lesson.number} 課`} ${esc(lesson.title)}</h3><label><input type="checkbox" data-lesson="${lesson.id}" ${checked?'checked':''} ${entries.length?'':'disabled'}> 勾整課（目前分類）</label></div>
    <p class="muted">${lesson.vocabulary.filter(item=>item.category==='生字').length} 生字 / ${lesson.vocabulary.filter(item=>item.category==='認讀字').length} 認讀字 / ${lesson.vocabulary.filter(item=>item.category==='語詞').length} 語詞 · ${link(lesson.sourceUrl,'官方詞表 ↗')}</p>
    <div class="word-grid">${lesson.vocabulary.map((item,index)=>state.categories.includes(item.category)?`<label class="word-option ${selected(keyOf(lesson,index))?'chosen':''}"><input type="checkbox" data-entry="${keyOf(lesson,index)}" ${selected(keyOf(lesson,index))?'checked':''}><strong>${esc(item.text)}</strong><small>${esc(item.category)}</small></label>`:'').join('')}</div>
    ${lesson.vocabulary.some(item=>item.sounds.includes(''))?`<p class="warning">${lesson.vocabulary.filter(item=>item.sounds.includes('')).length} 個詞條的注音仍待語境確認，請核對後列印。</p>`:''}<details class="metadata"><summary>教材版本與查核資訊</summary><p>${esc(lessonLabel(lesson))} · 查核 ${lesson.checkedAt} · 已核詞表<br>課綱：待核；版次：未提供；冊次：第 ${lesson.volume} 冊（由年級、學期推導）。<br>注音：官方字／詞音讀；多音字由編輯依課名、同課語詞選音，教師可依課文覆核。${lesson.sourceNote?`<br>${esc(lesson.sourceNote)}`:''}</p></details></article>`;
  }).join('') + `<p class="muted">已收錄 ${lessons.filter(lesson=>lesson.number>0).length} 課${lessons.some(lesson=>lesson.number===0)?'＋1 前導單元':''}。分類逐課核對；多音或缺注音需確認。</p>`;
}
function zhuyin(sound:string) {
  if (!sound) return '<span class="pending">注音待核</span>';
  const neutral = sound.startsWith('˙');
  const tone = /[ˊˇˋ]$/u.test(sound)?sound.slice(-1):'';
  const symbols = sound.replace(/[˙ˊˇˋ]/gu,'');
  return `<span class="zhuyin" aria-label="${esc(sound)}">${neutral?'<span class="neutral">˙</span>':''}<span class="phonetics">${Array.from(symbols).map(symbol=>`<span>${esc(symbol)}</span>`).join('')}</span>${tone?`<span class="tone">${tone}</span>`:''}</span>`;
}
function workbookSources(rows:ReturnType<typeof practiceRows>) {
  return [...new Map(rows.flatMap(row=>row.origins.filter(origin=>origin.lessonId).map(origin=>[origin.lessonId!,origin]))).values()];
}
function workbookPageCount(rows:ReturnType<typeof practiceRows>) {
  const count=workbookSources(rows).length;
  return paginate(rows,state.layout).length+(count>2?Math.ceil(count/6):0);
}
function workbook() {
  const allRows=practiceRows(state.selections,state.overrides);
  const pages = paginate(allRows,state.layout);
  const sources=workbookSources(allRows);
  const appendix=sources.length>2;
  const sourceNumber=new Map(sources.map((source,index)=>[source.lessonId,index+1]));
  const total=workbookPageCount(allRows);
  const sheets=pages.map((rows,index)=>{
    const origins = [...new Map(rows.flatMap(row=>row.origins.filter(origin=>origin.lessonId).map(origin=>[origin.lessonId,origin]))).values()];
    const hasCustom = rows.some(row=>row.origins.some(origin=>!origin.lessonId));
    return `<section class="sheet ${state.layout}" aria-label="練習簿第 ${index+1} 頁"><div class="sheet-header"><div><small>LEARNING PLANET · 學習星球</small><h2>國語生字練習簿</h2></div><span>第 ${index+1} / ${total} 頁</span></div>
    <div class="sheet-person"><span>姓名：${esc(state.name)||'________________'}</span><span>日期：${esc(state.date)||'________________'}</span></div><p class="sheet-version">${esc(appendix?'教材來源：'+origins.map(origin=>`〔${sourceNumber.get(origin.lessonId)}〕`).join('')+'（完整版本與詞條見來源頁）':origins.map(origin=>origin.source).join('；'))}${hasCustom?'；含自訂字':''}</p>
    <div class="grid-caption"><span>字頭與注音</span><span>描紅 ①</span><span>描紅 ②</span><span>自己寫 ①</span><span>自己寫 ②</span></div>
    <div class="practice-grid">${rows.map(row=>`<div class="practice-row"><div class="boxes"><div class="head-cell"><span class="head-char">${esc(row.char)}</span>${zhuyin(row.sound)}</div>${[0,1,2,3].map(i=>`<div class="write-cell ${i<2?'trace':''}"><span>${i<2?esc(row.char):''}</span></div>`).join('')}</div>
    <p class="row-source">${esc(appendix?`教材來源 ${[...new Set(row.origins.filter(origin=>origin.lessonId).map(origin=>`〔${sourceNumber.get(origin.lessonId)}〕`))].join('')} · ${[...new Set(row.origins.map(origin=>origin.category))].join('／')}`:row.origins.map(origin=>origin.lessonId?`${LESSONS.find(lesson=>lesson.id===origin.lessonId)!.number===0?'前導單元':`第${LESSONS.find(lesson=>lesson.id===origin.lessonId)!.number}課`}・${origin.category}「${origin.text}」`:'自訂字').join('；'))}${row.char==='子'&&row.sound==='˙ㄗ'?' · 車子讀輕聲':''}${!row.sound?' · 注音待核':state.overrides[row.char]!==undefined?' · 手動注音待核':''}</p></div>`).join('')}</div>
    <footer class="sheet-footer"><p>教材：教育部教育百科生字詞表 · 查核日 ${CHECKED_AT} · 課綱／版次待核 · 冊次由年級、學期推導。</p>${appendix?'<p>完整逐課官方連結、選取詞條與分類見本練習簿來源頁。</p>':origins.map(origin=>`<p>${esc(origin.sourceUrl)}</p>`).join('')}${hasCustom?'<p>自訂字由使用者加入；字義與注音可至 https://pedia.cloud.edu.tw/ 查核。</p>':''}<p>字音：教育部國字標準字體筆順學習網／教育百科。字體 Noto Sans TC（SIL OFL 1.1）。</p></footer></section>`;
  }).join('');
  if (!appendix) return sheets;
  const sourcePages=Array.from({length:Math.ceil(sources.length/6)},(_,index)=>sources.slice(index*6,index*6+6));
  return sheets+sourcePages.map((items,index)=>`<section class="sheet source-sheet" aria-label="教材來源第 ${index+1} 頁"><div class="sheet-header"><div><small>LEARNING PLANET · 學習星球</small><h2>教材來源與選取詞條</h2></div><span>第 ${pages.length+index+1} / ${total} 頁</span></div><p class="muted">字格下方的〔數字〕對照本頁教材。查核日 ${CHECKED_AT}；課綱、印刷版次待核，冊次由年級與學期推導。</p>${items.map(source=>{
    const entries=state.selections.filter(entry=>entry.lessonId===source.lessonId);
    return `<article class="source-block"><h3>〔${sourceNumber.get(source.lessonId)}〕${esc(source.source)}</h3><p>${esc(source.sourceUrl)}</p>${categories.map(category=>{
      const terms=entries.filter(entry=>entry.category===category).map(entry=>entry.text+(entry.omitted?.length?`（未練：${entry.omitted.join('')}）`:''));
      return terms.length?`<p><strong>${esc(category)}：</strong>${esc(terms.join('、'))}</p>`:'';
    }).join('')}</article>`;
  }).join('')}<footer class="sheet-footer"><p>教育部教育百科逐課分類來源；語詞拆字並跨課去重，選取清單保留原詞條。筆順僅官方外鏈。</p></footer></section>`).join('');
}
root.addEventListener('change',event=>{
  const target = event.target as HTMLInputElement;
  message='';
  if (target.dataset.entry) {
    const [id,index]=target.dataset.entry.split(':');
    state.selections=setSelections(state.selections,[selectionOf(LESSONS.find(lesson=>lesson.id===id)!,Number(index))],target.checked);
  } else if (target.dataset.lesson) {
    const lesson=LESSONS.find(item=>item.id===target.dataset.lesson)!;
    const entries=lesson.vocabulary.flatMap((item,index)=>state.categories.includes(item.category)?[selectionOf(lesson,index)]:[]);
    state.selections=setSelections(state.selections,entries,target.checked);
  } else if (target.name==='category') state.categories=target.checked?[...state.categories,target.value as Category]:state.categories.filter(item=>item!==target.value);
  else if (target.dataset.char) state.overrides[target.dataset.char]=target.value.trim();
  else if (['year','grade','semester','publisher'].includes(target.name)) {
    state.filters={...state.filters,[target.name]:['year','grade'].includes(target.name)?Number(target.value):target.value};
  } else if (target.name==='layout') state.layout=target.value;
  else if (target.name==='allowBlank') state.allowBlank=target.checked;
  else if (target.name==='studentName') state.name=target.value;
  else if (target.name==='date') state.date=target.value;
  render();
});
root.addEventListener('input',event=>{
  const target=event.target as HTMLInputElement;
  if (target.name==='studentName') state.name=target.value;
  if (target.name==='date') state.date=target.value;
  if (target.dataset.char) state.overrides[target.dataset.char]=target.value.trim();
  save();
});
root.addEventListener('submit',event=>{
  event.preventDefault();
  const input=document.querySelector<HTMLInputElement>('#custom-input')!;
  try { const entries=customSelections(input.value); state.selections=setSelections(state.selections,entries,true); message=`已加入 ${entries.length} 個自訂字（重複字合併）。`; }
  catch(error) {message=(error as Error).message;}
  render();
});
root.addEventListener('click',async event=>{
  const target=(event.target as HTMLElement).closest<HTMLElement>('button');
  if (!target) return;
  if (target.dataset.removeChar) {
    // Removing a merged character removes its occurrences, leaving other characters from a phrase intact.
    const char=target.dataset.removeChar;
    state.selections=removeCharacter(state.selections,char);
    delete state.overrides[char];
  } else if (target.dataset.removeEntry) state.selections=state.selections.filter(item=>item.id!==target.dataset.removeEntry);
  else if (target.dataset.action==='clear') {state.selections=[];state.overrides={};}
  else if (target.dataset.action==='preview') {message=validate();if (!message) {preview=true;window.scrollTo(0,0);}}
  else if (target.dataset.action==='edit') {preview=false;window.scrollTo(0,0);}
  else if (target.dataset.action==='print') {
    message=validate(); if (message) {render();return;}
    await document.fonts.ready;
    window.print(); return;
  } else if (target.dataset.action==='return') {
    if (new URLSearchParams(location.search).get('from')==='map') window.close();
    else location.href='index.html';
    return;
  } else return;
  render();
});
render();
