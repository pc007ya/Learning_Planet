import { isScienceCurriculumEnabled } from './rollout.mjs';
import { createCurriculumEngine } from './engine.mjs';
import { createProgressStore, PREFIX } from './store.mjs';
import { acquireProgressLease } from './session-lock.mjs';
import { leaveOverlayHistory, waitForOverlayHistory } from './overlay-history.mjs';
import { claimRootOverlay } from './overlay-owner.mjs';

export function isLocalCandidate(locationLike = location) {
  return ['localhost', '127.0.0.1', '[::1]', '::1'].includes(locationLike.hostname);
}
const el = (tag, text, cls) => { const n = document.createElement(tag); if (text != null) n.textContent = text; if (cls) n.className = cls; return n; };
const button = (text, action, cls = '') => { const n = el('button', text, cls); n.type = 'button'; n.addEventListener('click', action); return n; };
let opened = null;
export async function openScienceCurriculum({ grade = 1, unitId = null, curriculum = 'publisher', publisher = '康軒', semester = 1, learnerId = 'preview', onClose, onOpen, parentSession = null, isActive: identityActive = () => true } = {}) {
  if (!isScienceCurriculumEnabled()) throw Error('生活與自然練習暫時未開放。');
  if (!['publisher', 'legacy'].includes(curriculum)) throw new RangeError('不支援的課程模式。');
  const legacy = curriculum === 'legacy';
  await waitForOverlayHistory(window);
  if (opened && !opened.isActive()) await opened.close(false, 'inactive');
  if (!identityActive() || (parentSession && !parentSession.isActive())) return () => Promise.resolve();
  if (opened && opened.learnerId === String(learnerId) && opened.unitId === unitId && opened.curriculum === curriculum && opened.grade === grade && opened.publisher === publisher && opened.semester === semester && opened.parentSession === parentSession && opened.onClose === onClose) return opened.close;
  let rootSession = null;
  if (parentSession) {
    if (opened) await opened.close(false, 'owner-handoff');
  } else rootSession = await claimRootOverlay({ window, isActive: identityActive });
  const owner = parentSession || rootSession;
  if (!owner?.isActive() || !identityActive()) { rootSession?.release(); return () => Promise.resolve(); }
  const isActive = () => identityActive() && owner.isActive();
  const opener = document.activeElement;
  const dialog = el('dialog', null, 'sc-dialog');
  dialog.dataset.scienceCurriculum = 'candidate';
  dialog.dataset.curriculum = curriculum;
  dialog.setAttribute('aria-label', legacy ? '自然原主題練習' : '生活與自然單元練習');
  const body = el('main', null, 'sc-shell'); dialog.append(body); document.body.append(dialog);
  let activeWatch, activeUtterance = null, speechToken = 0, lease = null;
  let closed = false, closeCompletion = null, readings = null, readingBusy = false, notice = '', speechNotice = '', view = 'catalog', selectedUnit = null, run = null, pickedChoice = null;
  const abort = new AbortController();
  const originalHistory = history.state;
  const token = 'science-' + Date.now() + '-' + Math.random();
  try { history.pushState({ ...originalHistory, scienceCandidateOverlay: token }, '', location.href); }
  catch (error) { dialog.remove(); rootSession?.release(); throw error; }
  function notifyClose(meta) {
    rootSession?.release();
    try { onClose?.(meta); } catch (_) { /* consumer callbacks cannot retain a session */ }
  }
  function close(fromHistory = false, reason = 'close') {
    if (closed) return closeCompletion || Promise.resolve();
    closed = true; lease?.release(); clearInterval(activeWatch); abort.abort(); stopSpeech(); document.removeEventListener('visibilitychange', visibilityChanged);
    window.removeEventListener('popstate', popped); dialog.close(); dialog.remove(); opened = null;
    const historyBackRequested = !fromHistory && history.state?.scienceCandidateOverlay === token;
    if (opener?.isConnected) opener.focus();
    if (!historyBackRequested) { notifyClose({ fromHistory, reason, historyBackRequested: false }); return closeCompletion = Promise.resolve(); }
    closeCompletion = leaveOverlayHistory({ window, history, marker: 'scienceCandidateOverlay', token, restoreState: originalHistory })
      .then(requested => { notifyClose({ fromHistory, reason, historyBackRequested: requested }); },
        () => { notifyClose({ fromHistory, reason, historyBackRequested: false, historyError: true }); });
    return closeCompletion;
  }
  function popped() { close(true, 'history'); }
  window.addEventListener('popstate', popped);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  dialog.addEventListener('keydown', trapFocus);
  document.addEventListener('visibilitychange', visibilityChanged);
  opened = { close, isActive, learnerId: String(learnerId), unitId, curriculum, grade, publisher, semester, parentSession, onClose };
  rootSession?.publishClose(close);
  try { dialog.showModal(); onOpen?.(close); } catch (_) { await close(); return close; }
  if (closed) return close;
  activeWatch = setInterval(() => { ensureActive(); }, 300);
  if (!document.getElementById('science-curriculum-css')) {
    const css = el('link'); css.id = 'science-curriculum-css'; css.rel = 'stylesheet'; const cssUrl = new URL('./style.css', import.meta.url); cssUrl.searchParams.set('v', 'v3-math-panel-20261112-r2'); css.href = cssUrl; document.head.append(css);
  }
  body.append(button('← 返回自然星球', () => close()), el('p', '正在準備生活與自然練習…', 'sc-loading'));
  let catalog, content, engine, store;
  const filters = { grade: Math.min(6, Math.max(legacy ? 3 : 1, Number(grade) || 1)), publisher: legacy ? '原主題' : ['康軒','南一'].includes(publisher) ? publisher : '康軒', semester: legacy ? 0 : semester === 2 ? 2 : 1 };
  function ensureActive() { if (closed) return false; if (!isActive()) { close(false, 'inactive'); return false; } if (lease && !lease.acquired) { close(false, 'lock-lost'); return false; } return true; }
  async function load() {
    const dataPath = legacy ? '../../data/science-curriculum/legacy/' : '../../data/science-curriculum/';
    const get = async name => { const r = await fetch(new URL(dataPath + name, import.meta.url), { signal: abort.signal, cache: 'no-cache' }); if (!r.ok) throw Error('課程資料暫時無法讀取'); return r.json(); };
    [catalog, content] = await Promise.all([get('catalog.json'), get('exercises.json')]);
    if ((catalog.kind === 'legacy_topic_catalog') !== legacy) throw new RangeError('課程資料與開啟模式不符，尚未開始練習。');
    if (closed || !isActive()) { close(); return; }
    const entry = unitId == null ? null : catalog.units.find(u => u.id === unitId);
    if (unitId != null && !entry) throw new RangeError('指定的生活／自然單元不存在，沒有改開其他單元。');
    if (entry) Object.assign(filters, { grade: entry.grade, publisher: entry.publisher, semester: entry.semester });
    if (!lease?.acquired) {
      const acquired = await acquireProgressLease(window.navigator?.locks, PREFIX + encodeURIComponent(String(learnerId)), { isActive: () => !closed && isActive() });
      if (closed || !isActive()) { acquired.release(); close(); return; }
      if (!acquired.acquired) {
        const message = acquired.reason === 'unsupported'
          ? '這個瀏覽器不支援安全的分頁協調。請改用支援 Web Locks 的新版瀏覽器；尚未抽題或更改紀錄。'
          : '這位學生的練習正在另一個分頁開啟，或分頁鎖暫時無法取得。請先關閉那個練習再重試；尚未抽題或更改紀錄。';
        body.replaceChildren(button('← 返回自然星球', () => close()), el('h1', '這次尚未開始練習'), el('p', message), button('重新確認', () => retryLoad()));
        return;
      }
      lease = acquired;
    }
    engine = createCurriculumEngine(catalog, content); store = createProgressStore(localStorage, learnerId, { canWrite: () => ensureActive() && !!lease?.acquired });
    if (store.read().settings.zhuyin) {
      try { readings = await import('../quiz-readings.mjs'); await readings.load(); }
      catch (_) { if (!closed) notice = '注音暫時無法載入，這次先顯示文字。'; }
    }
    if (!closed && isActive()) { if (entry) begin(entry); else render(); } else close();
  }
  function textNode(text, tag = 'span', cls) {
    const n = el(tag, null, cls);
    if (!readings || !store?.read().settings.zhuyin) { n.textContent = text; return n; }
    for (const { char, reading } of readings.tokens(text)) {
      if (!reading) n.append(document.createTextNode(char));
      else { const ruby = el('ruby', char); ruby.setAttribute('aria-label', char); const rt = el('rt', reading); rt.setAttribute('aria-hidden', 'true'); ruby.append(rt); n.append(ruby); }
    }
    return n;
  }
  function speechStatus(message) {
    speechNotice = message;
    if (closed) return;
    const status = body.querySelector('.sc-speech-status');
    if (status) { status.textContent = message; status.hidden = !message; }
  }
  function releaseUtterance() {
    if (activeUtterance) { activeUtterance.onstart = null; activeUtterance.onend = null; activeUtterance.onerror = null; }
    activeUtterance = null;
  }
  function stopSpeech() {
    speechToken++; releaseUtterance(); speechStatus('');
    try { window.speechSynthesis?.cancel(); } catch (_) {}
  }
  function speechErrorMessage(code) {
    const reasons = {
      'synthesis-unavailable': '此裝置的語音服務目前無法使用。',
      'language-unavailable': '語音服務目前不支援所需的中文語音。',
      'voice-unavailable': '目前選用的語音無法使用。',
      'audio-busy': '音訊目前忙碌，請稍後再按朗讀。',
      'audio-hardware': '裝置的音訊輸出目前無法使用。',
      'network': '語音服務連線失敗，請稍後再試。',
      'not-allowed': '瀏覽器未允許這次朗讀，請再按一次朗讀。',
      'text-too-long': '這段文字超過語音服務的長度限制。'
    };
    return '朗讀未能播放：' + (Object.hasOwn(reasons, code) ? reasons[code] : '語音服務暫時無法完成朗讀。') + '可請成人協助讀題。';
  }
  function visibilityChanged() { if (document.hidden) stopSpeech(); }
  function trapFocus(event) {
    if (event.key !== 'Tab' || event.altKey || event.ctrlKey || event.metaKey) return;
    const focusable = [...dialog.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),textarea:not([disabled]),select:not([disabled]),summary,[tabindex]')].filter(n => {
      if (n.getAttribute('tabindex') !== null && Number(n.getAttribute('tabindex')) < 0) return false;
      if (n.hidden || n.closest('[hidden]') || n.getAttribute('type') === 'hidden') return false;
      const closedDetails = n.closest('details:not([open])');
      return !closedDetails || n === closedDetails.querySelector('summary');
    });
    if (!focusable.length) { event.preventDefault(); dialog.focus(); return; }
    const first=focusable[0], last=focusable[focusable.length-1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  function say(text, control) {
    if (!ensureActive()) return;
    stopSpeech();
    // Keep feedback beside the clicked control without replacing a form,
    // scrolling away from a draft, or moving keyboard focus.
    const status = body.querySelector('.sc-speech-status');
    if (status && control?.isConnected && body.contains(control)) control.after(status);
    const synthesis = window.speechSynthesis;
    if (!synthesis || typeof synthesis.speak !== 'function' || typeof window.SpeechSynthesisUtterance !== 'function') {
      speechStatus('這個瀏覽器沒有朗讀功能，可請成人協助讀題。'); return;
    }
    const token = speechToken;
    const fail = code => {
      if (!closed && token === speechToken && isActive()) {
        releaseUtterance(); speechStatus(speechErrorMessage(code));
      }
    };
    try {
      const utterance = new window.SpeechSynthesisUtterance(text); activeUtterance = utterance;
      utterance.lang = 'zh-TW'; utterance.rate = filters.grade <= 2 ? 0.8 : 0.9;
      // Voice enumeration can arrive late or fail independently of speech. Keep
      // the synchronous user-gesture call and let the browser choose its default.
      try {
        const voice = synthesis.getVoices?.().find(v => /^zh[-_]TW$/i.test(v.lang));
        if (voice) utterance.voice = voice;
      } catch (_) {}
      const current = () => !closed && token === speechToken && activeUtterance === utterance && isActive();
      utterance.onstart = () => { if (current()) speechStatus('正在朗讀…'); };
      utterance.onend = () => { if (current()) { releaseUtterance(); speechStatus(''); } };
      utterance.onerror = event => {
        if (!current()) return;
        if (['canceled', 'interrupted'].includes(event.error)) { releaseUtterance(); speechStatus(''); return; }
        fail(event.error);
      };
      synthesis.speak(utterance);
    } catch (_) { fail(); }
  }
  async function toggleReading() {
    if (!ensureActive()) return;
    if (readingBusy) return;
    if (store.read().settings.zhuyin) { store.update(s => { s.settings.zhuyin = false; }); render(); return; }
    readingBusy = true; render();
    try { readings = await import('../quiz-readings.mjs'); await readings.load(); if (closed) return; store.update(s => { s.settings.zhuyin = true; }); notice = '注音沿用已核讀音；不確定讀音保留空白，可搭配朗讀。'; }
    catch (_) { if (!closed) notice = '注音暫時無法載入，文字練習仍可使用。'; }
    finally { readingBusy = false; if (!closed) render(); }
  }
  function begin(unit) {
    if (!ensureActive()) return;
    try {
      const ok = store.update(s => {
        const u = s.units[unit.id] ||= { attempts: [], seen: [] }, saved = u.active;
        const legacySeen = [...new Set([...u.seen, ...(saved?.questions || []).map(q => q.id),
          ...(u.interrupted || []).flatMap(r => r.questions.map(q => q.id)),
          ...u.attempts.flatMap(a => a.answers.map(answer => answer.questionId))])];
        const compatible = saved && !saved.finished && saved.questions.length === 10 && saved.questions.every(q => {
          const current = engine.getQuestion(q.id);
          return current?.unit_id === unit.id && unit.activities.some(a => a.id === current.activity_id && a.scope !== 'extension_from_114_school_plan') && engine.isCoreQuestion(q.id) && q.stem === current.stem && q.ans === current.options[current.answer_index] && q.explain === current.explanation && new Set(q.opts).size === 4 && q.opts.every(o => current.options.includes(o));
        });
        if (compatible) {
          u.questionPool = engine.reconcilePool(unit.id, u.questionPool || null, { legacySeen, allowCandidate: true });
        } else {
          const built = engine.createCycleRound(unit.id, { pool: u.questionPool || null, legacySeen, allowCandidate: true });
          if (saved && !saved.finished) (u.interrupted ||= []).push(saved);
          u.questionPool = built.pool;
          u.active = { id: crypto.randomUUID(), unitId: unit.id, requestedCount: 10, version: content.version || 'candidate-v3', started: Date.now(), questions: built.questions, answers: {}, index: 0, warnings: built.warnings, finished: false, poolCycleStart: built.poolCycleStart, poolCycleEnd: built.poolCycleEnd, poolSize: built.poolSize, questionCycles: built.questionCycles };
        }
        // A reserved round counts as allocated even when it is not completed.
        u.seen = [...new Set([...legacySeen, ...u.active.questions.map(q => q.id)])];
      });
      if (!ok) { notice = store.error() || '未能保留這回合題目，尚未開始練習。'; render(); return; }
      selectedUnit = unit; run = store.read().units[unit.id].active; pickedChoice = null;
      view = 'quiz'; notice = ''; render();
    } catch (error) { notice = error.message === '這個單元尚未備妥至少30題核心題，暫不開始新回合。' ? error.message : '題池紀錄無法安全使用，原資料保留，尚未開始新回合。'; render(); }
  }
  function selectAnswer(index, questionId) {
    if (!ensureActive() || !run || run.questions[run.index].id !== questionId || run.answers[questionId] || store.readonly()) return;
    if (!Number.isInteger(index) || index < 0 || index > 3) return;
    stopSpeech(); pickedChoice = index; render();
    body.querySelector('[data-option-index="'+index+'"]')?.focus({ preventScroll: true });
  }
  function submitAnswer(questionId) {
    if (pickedChoice == null) return;
    answer(pickedChoice, questionId);
  }
  function answer(index, questionId) {
    if (!ensureActive() || !run || !Number.isInteger(index) || index < 0 || index > 3) return;
    const q = run.questions[run.index]; if (questionId !== q.id || run.answers[q.id]) return;
    stopSpeech();
    let changed = false;
    const ok = store.update(s => {
      const active = s.units[run.unitId]?.active;
      if (!active || active.id !== run.id || active.index !== run.index || active.questions[active.index]?.id !== q.id || active.answers[q.id]) return;
      active.answers[q.id] = { questionId: q.id, selected: q.opts[index], correct: q.opts[index] === q.ans, time: Date.now() }; changed = true;
    });
    if (ok && changed) run = store.read().units[run.unitId].active;
    else notice = store.error() || '這個回合已變更，請關閉後重新開啟。';
    render();
  }
  function next() {
    if (!ensureActive() || !run) return;
    const q = run.questions[run.index]; if (!run.answers[q.id]) return;
    stopSpeech(); let changed = false;
    const ok = store.update(s => {
      const u = s.units[run.unitId], active = u?.active;
      if (!active || active.id !== run.id || active.index !== run.index || !active.answers[q.id] || active.finished) return;
      if (active.index < active.questions.length - 1) active.index++;
      else {
        if (Object.keys(active.answers).length !== active.questions.length) return;
        active.finished = true;
        if (!u.attempts.some(a => a.id === active.id)) u.attempts.push({ id: active.id, started: active.started, completed: Date.now(), version: active.version, answers: Object.values(active.answers), total: active.questions.length, correct: Object.values(active.answers).filter(a => a.correct).length, poolCycleStart: active.poolCycleStart, poolCycleEnd: active.poolCycleEnd });
      }
      changed = true;
    });
    if (ok && changed) { run = store.read().units[run.unitId].active; pickedChoice = null; view = run.finished ? 'result' : 'quiz'; }
    else notice = store.error() || '未能保存這一步，仍保留原來進度。';
    render();
  }
  function header() {
    if (view !== 'quiz') {
    const h = el('header', null, 'sc-header');
    h.append(button('← 返回自然星球', () => close(), 'sc-back'), el('div', legacy ? '自然星球 · 原主題練習' : '自然星球 · 生活與自然', 'sc-brand'));
    const reading = button(readingBusy ? '注音準備中' : 'ㄅ 注音', toggleReading); reading.disabled = readingBusy; reading.setAttribute('aria-pressed', String(!!store.read().settings.zhuyin)); h.append(reading);
    body.append(h);
    }
    body.append(el('p', '練習紀錄只存這台裝置，不改正式成績；不作能力認證。', 'sc-candidate'));
    if (notice || store.error()) { const status = el('p', store.error() || notice, 'sc-notice'); status.setAttribute('role', 'status'); body.append(status); }
    const speech = el('p', speechNotice, 'sc-notice sc-speech-status'); speech.hidden = !speechNotice; speech.setAttribute('role', 'status'); speech.setAttribute('aria-atomic', 'true'); body.append(speech);
  }
  function filterGroup(label, values, current, choose) {
    const f = el('fieldset', null, 'sc-filters'); f.append(el('legend', label));
    for (const [value, name] of values) { const b = button(name, () => { choose(value); notice = ''; render(); }); b.setAttribute('aria-pressed', String(value === current)); f.append(b); } return f;
  }
  function catalogView() {
    body.append(textNode('選一個單元，開始探索', 'h1'));
    const groups = el('section', null, 'sc-filter-panel');
    groups.append(filterGroup('年級', (legacy ? [3,4,5,6] : [1,2,3,4,5,6]).map(g => [g,g+'年級']), filters.grade, v => filters.grade=v));
    if (!legacy) groups.append(filterGroup('教材版本', [['康軒','康軒'],['南一','南一']], filters.publisher, v => filters.publisher=v),filterGroup('學期', [[1,'上學期'],[2,'下學期']], filters.semester, v => filters.semester=v));
    groups.append(el('p','每單元至少30題 · 每回10題 · 題池用完才重新循環','sc-round-policy')); body.append(groups);
    body.append(el('p', filters.grade <= 2 ? '生活：觀察、表達、創作，也練習合作與照顧環境。' : '自然科學：先觀察，再用證據想一想。', 'sc-intro'));
    const grid=el('section',null,'sc-grid');grid.setAttribute('aria-label','單元列表');
    for (const unit of engine.listUnits(filters)) {
      const card=el('article',null,'sc-card'); const records=store.read().units[unit.id];
      card.append(el('span',unit.subject+' · '+unit.publisher,'sc-label'),textNode(unit.title,'h2'),el('p',unit.activities.filter(a=>a.scope===(legacy?'legacy_topic':'current_publisher_activity')).length+'個活動 · '+unit.candidateQuestionCount+'題練習'));
      const attempted=records?.attempts?.length||0; if(attempted)card.append(el('p','已完成 '+attempted+' 次本機練習','sc-record'));
      const b=button(records?.active&&!records.active.finished?'繼續練習':'開始練習',()=>begin(unit),'sc-primary');b.dataset.unitId=unit.id;card.append(b);if(engine.getTasks(unit.id,{allowCandidate:true}).length)card.append(button('實作與反思',()=>{selectedUnit=unit;view='tasks';render();},'sc-secondary')); grid.append(card);
    }
    body.append(grid,el('p',legacy?'沿用原主題分類，未宣稱出版社或學期對應。練習紀錄另存，原有成績與星星保留。':'課綱為全國共通要求；兩版單元安排不同。練習為原創，並非出版社官方題庫。','sc-footnote'));
  }
  function unitNav() { body.append(button('← 單元列表',()=>{view='catalog';stopSpeech();render();},'sc-back')); }
  function quizView() {
    const q = run.questions[run.index], a = run.answers[q.id];
    const layout = el('section', null, 'sc-math-master'); layout.setAttribute('aria-label', '生活與自然單元練習');
    const progress = el('div', null, 'sc-progress');
    const back = button('', () => close(), 'sc-quiz-back'); back.setAttribute('aria-label', '返回自然星球');
    const arrow = el('img'); arrow.src = new URL('../../images/math-master/v1/back-arrow-v1.svg', import.meta.url); arrow.alt = '';
    back.append(arrow, el('span', '← 返回自然星球', 'sc-sr-only'));
    const copy = el('div', null, 'sc-progress-copy'), line = el('div', null, 'sc-progress-line');
    line.append(textNode(selectedUnit.title, 'strong'), el('span', `第 ${run.index+1} / ${run.questions.length} 題`));
    const track = el('div', null, 'sc-progress-track'), fill = el('div', null, 'sc-progress-fill');
    track.setAttribute('role','progressbar');track.setAttribute('aria-label','本回作答進度');track.setAttribute('aria-valuemin','0');track.setAttribute('aria-valuemax',String(run.questions.length));track.setAttribute('aria-valuenow',String(Object.keys(run.answers).length));fill.style.width=(Object.keys(run.answers).length/run.questions.length*100)+'%';track.append(fill);copy.append(line,track);
    const tools = el('div',null,'sc-quiz-tools'), pace=el('div',null,'sc-pace-circle');pace.setAttribute('aria-label','不計時，慢慢想');pace.append(el('strong',String(run.index+1)),el('small','慢慢想'));
    const reading=button(readingBusy?'注音準備中':'ㄅ 注音',toggleReading,'sc-quiz-reading');reading.disabled=readingBusy;reading.setAttribute('aria-pressed',String(!!store.read().settings.zhuyin));tools.append(pace,reading);progress.append(back,copy,tools);layout.append(progress);
    const rail=el('aside',null,'sc-math-rail');
    const guidance=a?(a.correct?'答對了！再看看解釋，說說你用到的證據。':'沒關係，一起看看解釋，再想想怎麼判斷。'):'先讀題目，再比較選項；選好後按提交答案。';
    const guide=button('',event=>say(guidance,event.currentTarget),'sc-presenter');guide.setAttribute('aria-label','聽學習提示');
    const presenter=el('img');presenter.alt='';presenter.src=new URL('../../images/math-master/v3/presenter/presenter-'+(a?(a.correct?'correct':'wrong'):pickedChoice==null?'hint':'retry')+'-v1.png',import.meta.url);guide.append(presenter);rail.append(guide,el('p',a?'一起看本題分析':'選好答案，再按提交','sc-guide-caption'),button('← 單元列表',()=>{view='catalog';stopSpeech();pickedChoice=null;render();},'sc-unit-list'));
    layout.append(rail);
    const card=el('section',null,'sc-question');card.dataset.questionId=q.id;
    card.append(el('p',legacy?`原主題 · ${selectedUnit.grade}年級 · ${selectedUnit.subject}`:`${selectedUnit.publisher} · ${selectedUnit.grade}年級${selectedUnit.semester===1?'上':'下'} · ${selectedUnit.subject}`,'sc-label'));
    const heading=el('div',null,'sc-question-heading'),sound=button('',event=>say(q.stem+'。'+q.opts.map((o,i)=>'選項'+(i+1)+'，'+o).join('。'),event.currentTarget),'sc-speak sc-quiz-sound');sound.setAttribute('aria-label','聽題目');const icon=el('img');icon.src=new URL('../../images/ui/sound-rounded.svg',import.meta.url);icon.alt='';sound.append(icon,el('span','🔊 聽題目','sc-sr-only'));heading.append(textNode(q.stem,'h1','sc-stem'),sound);card.append(heading);
    const options=el('div',null,'sc-options sc-math-options');q.opts.forEach((o,i)=>{
      const selected=a?o===a.selected:pickedChoice===i,b=button('',()=>selectAnswer(i,q.id),'sc-option');b.dataset.optionIndex=String(i);b.setAttribute('aria-pressed',String(selected));b.disabled=!!a||store.readonly();b.append(el('span',String(i+1),'sc-option-no'),textNode(o,'span','sc-option-text'));
      if(a&&o===q.ans)b.classList.add('sc-correct');else if(a&&o===a.selected)b.classList.add('sc-wrong');else if(!a&&selected)b.classList.add('sc-selected');
      if((a&&o===q.ans)||(!a&&selected))b.append(el('span','✓','sc-option-mark'));else if(a&&o===a.selected)b.append(el('span','✕','sc-option-mark'));options.append(b);
    });card.append(options);layout.append(card);
    if(!a){const submit=button('',()=>submitAnswer(q.id),'sc-submit');submit.disabled=pickedChoice==null||store.readonly();submit.dataset.ready=String(pickedChoice!=null);const mark=el('span','✓');mark.setAttribute('aria-hidden','true');submit.append(mark,el('strong',pickedChoice==null?'先選答案':'提交答案'));layout.append(submit);}
    const analysis=el('section',null,'sc-analysis'+(a?' sc-feedback '+(a.correct?'is-correct':'is-wrong'):''));analysis.setAttribute('aria-live','polite');const label=el('header');label.append(el('strong','本題分析'));analysis.append(label);
    if(!a)analysis.append(el('p','選擇答案並按「提交答案」，這裡會顯示解題方法。','sc-analysis-placeholder'));
    else {analysis.setAttribute('role','status');const result=el('div',null,'sc-analysis-result');result.append(el('h2',a.correct?'答對了！':'再一起想一想'),el('p','你的答案：'+a.selected),el('p','正確答案：'+q.ans));analysis.append(result,textNode(q.explain,'p'),button(run.index===run.questions.length-1?'看看這次成果':'下一題 →',next,'sc-primary sc-next'));}
    layout.append(analysis);
    const pool=store.read().units[selectedUnit.id]?.questionPool;
    const cycleNotice=run.poolCycleEnd>run.poolCycleStart?'前一輪題池已抽完，這回已開始下一輪；同一回合仍不重複。 ':'';
    body.append(layout,el('p',cycleNotice+'每回10題。第 '+(pool?.cycle??1)+' 輪題池尚有 '+(pool?.remainingIds.length??0)+' 題未抽；全部抽完後才開始下一輪。','sc-pool-status'));
  }
  function resultView(){unitNav();const score=Object.values(run.answers).filter(a=>a.correct).length;body.append(el('div','✦','sc-success'),textNode('完成這次探索！','h1'),el('p',`答對 ${score} / ${run.questions.length} 題`,'sc-score'),el('p','這是練習紀錄，不代表所有課綱能力都已達成。'));if(engine.getTasks(selectedUnit.id,{allowCandidate:true}).length)body.append(button('實作與反思',()=>{view='tasks';render();},'sc-primary'));body.append(button('再練一回',()=>begin(selectedUnit)));}
  function taskSignature(t) { return JSON.stringify({ prompt:t.prompt, rubric:t.rubric, materials:t.materials||t.materials_required||null, duration:t.duration||null }); }
  function editableTask(s,t) {
    const r=s.tasks[t.id]||={checks:[],note:''}, signature=taskSignature(t);
    if(r.assessmentSignature!==signature){
      if(r.checks.some(Boolean))(r.priorAssessments||=[]).push({checks:[...r.checks],assessmentSignature:r.assessmentSignature||null,curriculumVersion:r.curriculumVersion||null,archivedAt:Date.now(),assessment:'prior_self_check_not_verified'});
      r.checks=[];r.assessmentSignature=signature;
    }
    r.curriculumVersion=content.version||'candidate-v1';return r;
  }
  function tasksView(){
    unitNav();body.append(textNode(selectedUnit.title+'：做一做、說一說','h1'),el('p','自評只記錄你的檢查，操作、合作及作品仍需成人或老師觀察。不要填姓名、聯絡方式等私人資料。','sc-intro'));
    const visibleTasks=engine.getTasks(selectedUnit.id,{allowCandidate:true});
    const labels=new Map(visibleTasks.map((t,i)=>[t.id,t.title||('探索任務 '+(i+1))]));
    for(const t of visibleTasks){
      const readable=text=>text.replace(/s-(?:kh|na)-g[1-6]-t[12]-u\d{2}-task\d{2}/g,id=>labels.get(id)||'先前指定的探索任務');
      const displayPrompt=readable(t.prompt);
      const instructions=el('div',null,'sc-task-instructions');
      if(t.instruction_steps){const list=el('ol',null,'sc-task-steps');for(const step of t.instruction_steps){const item=el('li');item.append(textNode(step.label,'h3'),textNode(readable(step.text),'p','sc-step-text'));list.append(item);}instructions.append(list);}
      else instructions.append(textNode(displayPrompt,'p','sc-task-prompt'));
      const section=el('section',null,'sc-task');section.dataset.taskId=t.id;section.id='sc-task-'+t.id;section.tabIndex=-1;section.append(textNode(labels.get(t.id),'h2'),instructions,button('🔊 聽任務',event=>say(labels.get(t.id)+'。'+displayPrompt,event.currentTarget),'sc-speak'));
      if(t.dependencies?.length){const deps=el('div',null,'sc-task-dependencies');deps.append(el('p','先完成下列任務，再用自己的紀錄繼續：'));for(const id of t.dependencies){deps.append(button(labels.get(id)||'前置探索任務',()=>{if(!ensureActive())return;const target=body.querySelector('[data-task-id="'+id+'"]');target?.scrollIntoView?.({block:'start'});target?.focus({preventScroll:true});},'sc-secondary'));}section.append(deps);}
      if(t.shared_design_id)section.append(el('p','跨版本原創補充任務；在不同單元使用同一份實作紀錄。','sc-footnote'));
      if(t.adult_supervision)section.append(el('p','👥 請成人或老師陪同','sc-notice'));
      if(t.materials_required?.length)section.append(el('p','需要準備：'+t.materials_required.join('、')));
      else if(t.materials)section.append(el('p','需要準備：'+(Array.isArray(t.materials)?t.materials.join('、'):String(t.materials))));
      if(t.duration)section.append(el('p','觀察安排：'+(t.duration.days?t.duration.days+'天；':'')+(t.duration.observation_schedule||t.duration.note||''),'sc-notice'));
      if(t.delivery_mode==='teacher_guided_materials_required')section.append(el('p','教師引導任務：先備妥材料與成人陪同，再開始。','sc-notice'));
      if(t.evidence_requirement)section.append(el('p',t.evidence_requirement,'sc-footnote'));
      const saved=store.read().tasks[t.id]||{checks:[],note:''};const needsRecheck=saved.assessmentSignature!==taskSignature(t)&&saved.checks.some(Boolean);
      if(needsRecheck)section.append(el('p','任務已更新或舊紀錄未標版本，請依目前規準重新自評。原有發現、觀察及舊自評會保留。','sc-notice'));
      if(saved.priorAssessments?.length)section.append(el('p','已保留 '+saved.priorAssessments.length+' 份舊規準自評，不計入這次檢查。','sc-footnote'));
      const group=el('fieldset');group.append(el('legend','我的檢查（自評，非老師認證）'));
      t.rubric.forEach((criterion,i)=>{const label=el('label',null,'sc-check');const box=el('input');box.type='checkbox';box.checked=!needsRecheck&&!!saved.checks[i];box.addEventListener('change',()=>{store.update(s=>{const r=editableTask(s,t);r.checks[i]=box.checked;r.updated=Date.now();r.assessment='self_check_not_verified';});updateSaveStatus();});label.append(box,textNode(criterion));group.append(label);});section.append(group);
      const label=el('label','我的發現（只儲存在這台裝置）');const textarea=el('textarea');textarea.value=saved.note;textarea.maxLength=1500;textarea.rows=3;textarea.setAttribute('aria-label','我的發現');textarea.addEventListener('input',()=>{store.update(s=>{const r=editableTask(s,t);r.note=textarea.value;r.updated=Date.now();r.assessment='self_check_not_verified';});updateSaveStatus();});label.append(textarea);section.append(label);
      const history=el('details',null,'sc-observation');history.append(el('summary','分次觀察紀錄（'+(saved.observations?.length||0)+'次，未經老師確認）'));
      const d=new Date();const today=[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
      const dateLabel=el('label','觀察日期');const date=el('input');date.type='date';date.value=today;dateLabel.append(date);
      const entryLabel=el('label','這次看到什麼？有沒有需要提醒或協助？');const entry=el('textarea');entry.maxLength=1500;entry.rows=3;entry.setAttribute('aria-label','這次觀察紀錄');entryLabel.append(entry);
      let locked=false;
      history.append(dateLabel,entryLabel,button('加入這次紀錄',()=>{
        if(locked||!entry.value.trim()||!/^\d{4}-\d{2}-\d{2}$/.test(date.value)){notice='請填日期及這次實際觀察，不需要填姓名。';updateSaveStatus();return;}
        locked=true;const ok=store.update(s=>{const r=editableTask(s,t);(r.observations||=[]).push({id:crypto.randomUUID(),date:date.value,note:entry.value.trim(),recordedAt:Date.now(),assessment:'self_record_not_verified'});});
        if(ok){notice='已加入本機觀察紀錄，尚未經老師確認。';render();}else{locked=false;updateSaveStatus();}
      }));
      for(const entry of saved.observations||[]){const row=el('article',null,'sc-observation-row');row.append(el('strong',entry.date),el('p',entry.note));history.append(row);}section.append(history);
      if(t.performance_observation_criteria){const teacher=el('details');teacher.append(el('summary','老師觀察重點'));for(const [code,criterion]of Object.entries(t.performance_observation_criteria))teacher.append(el('p',code+'：'+criterion));section.append(teacher);}
      body.append(section);
    }
    const status=el('p','本機自評會在修改時保存。','sc-save-status');status.setAttribute('role','status');body.append(status);sourceDetails();
  }
  function updateSaveStatus(){const s=body.querySelector('.sc-save-status');if(s)s.textContent=store.error()||notice||'已保存本機自評，尚未經老師確認。';}
  function sourceDetails(){const source=catalog.sources[selectedUnit.source_id];if(!source)return;const details=el('details');details.append(el('summary','查看教材範圍與來源'));details.append(el('p',selectedUnit.verification||'依核實來源對照，未核實出版社ISBN版次。'));const a=el('a',source.title||'課程來源');a.href=source.url;a.target='_blank';a.rel='noopener noreferrer';details.append(a);body.append(details);}
  function render(){if(closed)return;if(!isActive()){close();return;}body.replaceChildren();header();if(view==='catalog')catalogView();else if(view==='quiz')quizView();else if(view==='tasks')tasksView();else resultView();body.dataset.grade=String(filters.grade);body.dataset.view=view;dialog.scrollTop=0;const heading=body.querySelector('h1');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true});}}
  function loadError(error) {
    if (closed || error.name === 'AbortError') return;
    body.replaceChildren(button('← 返回自然星球', () => close()), el('h1', '課程暫時無法開啟'), el('p', error instanceof RangeError ? error.message : '資料載入失敗，原有紀錄未被更動。'), button('重試', () => retryLoad()));
  }
  async function retryLoad() {
    if (!ensureActive()) return;
    body.replaceChildren(button('← 返回自然星球', () => close()), el('p', '重新載入中…'));
    try { await load(); } catch (error) { loadError(error); }
  }
  try { await load(); } catch (error) { loadError(error); }
  return close;
}
