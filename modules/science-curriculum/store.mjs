import { validQuestionPool } from './rotation.mjs';
export const PREFIX = 'lp-science-curriculum-candidate-v2:';
const object = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const strings = v => Array.isArray(v) && v.every(x => typeof x === 'string');
const answer = v => object(v) && typeof v.questionId === 'string' && typeof v.selected === 'string' && typeof v.correct === 'boolean' && Number.isFinite(v.time);
function run(v) {
  if (!(object(v) && typeof v.id === 'string' && typeof v.unitId === 'string' && typeof v.version === 'string' && Number.isFinite(v.started) && typeof v.finished === 'boolean' &&
    Array.isArray(v.questions) && v.questions.length > 0 && v.questions.every(q => object(q) && typeof q.id === 'string' && typeof q.stem === 'string' && typeof q.ans === 'string' && typeof q.explain === 'string' && strings(q.opts) && q.opts.length === 4 && new Set(q.opts).size === 4 && q.opts.includes(q.ans)) &&
    new Set(v.questions.map(q => q.id)).size === v.questions.length && Number.isInteger(v.index) && v.index >= 0 && v.index < v.questions.length &&
    object(v.answers) && Object.entries(v.answers).every(([id,a]) => { const q = v.questions.find(q => q.id === id); return answer(a) && a.questionId === id && q && q.opts.includes(a.selected) && a.correct === (a.selected === q.ans); }) && strings(v.warnings))) return false;
  // The UI only advances after saving the preceding answer. Accept both the
  // unanswered and answered current question, including an unsubmitted result.
  if (v.questions.some((q,i) => i < v.index ? !Object.hasOwn(v.answers,q.id) : i > v.index && Object.hasOwn(v.answers,q.id))) return false;
  if (v.finished && (v.index !== v.questions.length - 1 || Object.keys(v.answers).length !== v.questions.length)) return false;
  const metadata = ['questionCycles','poolCycleStart','poolCycleEnd','poolSize'];
  if (metadata.some(key => v[key] !== undefined)) {
    if (!metadata.every(key => v[key] !== undefined) || !Number.isSafeInteger(v.poolCycleStart) || v.poolCycleStart < 1 || !Number.isSafeInteger(v.poolCycleEnd) || v.poolCycleEnd < v.poolCycleStart || v.poolCycleEnd > v.poolCycleStart + 1 || !Number.isSafeInteger(v.poolSize) || v.poolSize < v.questions.length) return false;
    if (!Array.isArray(v.questionCycles) || v.questionCycles.length !== v.questions.length || v.questionCycles.some((cycle,i) => !Number.isSafeInteger(cycle) || cycle < v.poolCycleStart || cycle > v.poolCycleEnd || (i > 0 && cycle < v.questionCycles[i-1])) || v.questionCycles.at(-1) !== v.poolCycleEnd) return false;
  }
  return true;
}
function reservedInPool(active, pool) {
  const used = new Set(pool.usedIds), remaining = new Set(pool.remainingIds);
  // Legacy ten-question sessions acquire a reservation during migration but
  // retain their original snapshot, without invented cycle metadata.
  if (active.questionCycles === undefined) return active.questions.every(q => used.has(q.id));
  if (active.poolCycleEnd !== pool.cycle) return false;
  return active.questions.every((q,i) => active.questionCycles[i] === pool.cycle ? used.has(q.id) : active.questionCycles[i] === pool.cycle - 1 && remaining.has(q.id));
}
export function validProgress(v) {
  if (!object(v) || v.schemaVersion !== 1 || !object(v.units) || !object(v.tasks) || !object(v.settings)) return false;
  if (v.settings.zhuyin !== undefined && typeof v.settings.zhuyin !== 'boolean') return false;
  if (v.settings.roundCount !== undefined && ![3,5,10].includes(v.settings.roundCount)) return false;
  for (const [id,u] of Object.entries(v.units)) {
    if (!object(u) || !Array.isArray(u.attempts) || !strings(u.seen)) return false;
    if (u.questionPool !== undefined && !validQuestionPool(u.questionPool)) return false;
    if (u.active !== undefined && (!run(u.active) || u.active.unitId !== id)) return false;
    if (u.active?.questionCycles !== undefined && u.questionPool === undefined) return false;
    if (u.active !== undefined && u.questionPool !== undefined && !reservedInPool(u.active,u.questionPool)) return false;
    if (u.interrupted !== undefined && (!Array.isArray(u.interrupted) || !u.interrupted.every(r => run(r) && r.unitId === id))) return false;
    if (!u.attempts.every(a => object(a) && typeof a.id === 'string' && Array.isArray(a.answers) && a.answers.every(answer) && Number.isInteger(a.total) && a.total === a.answers.length && Number.isInteger(a.correct) && a.correct >= 0 && a.correct <= a.total)) return false;
  }
  for (const t of Object.values(v.tasks)) {
    if (!object(t) || typeof t.note !== 'string' || !Array.isArray(t.checks) || !t.checks.every(c => c == null || typeof c === 'boolean')) return false;
    if (t.assessmentSignature != null && typeof t.assessmentSignature !== 'string') return false;
    if (t.curriculumVersion != null && typeof t.curriculumVersion !== 'string') return false;
    if (t.priorAssessments !== undefined && (!Array.isArray(t.priorAssessments) || !t.priorAssessments.every(a => object(a) && Array.isArray(a.checks) && a.checks.every(c => c == null || typeof c === 'boolean') && (a.assessmentSignature == null || typeof a.assessmentSignature === 'string') && (a.curriculumVersion == null || typeof a.curriculumVersion === 'string') && Number.isFinite(a.archivedAt)))) return false;
    if (t.observations !== undefined && (!Array.isArray(t.observations) || !t.observations.every(o => object(o) && typeof o.id === 'string' && typeof o.date === 'string' && typeof o.note === 'string' && Number.isFinite(o.recordedAt)))) return false;
  }
  return true;
}
export function createProgressStore(storage, learnerId = 'preview', { canWrite = () => true } = {}) {
  const key = PREFIX + encodeURIComponent(String(learnerId));
  let error = null, readonly = false, lastRaw = null, state = { schemaVersion: 1, units: {}, tasks: {}, settings: {} };
  try {
    const raw = storage.getItem(key);
    lastRaw = raw;
    if (raw) {
      const parsed = JSON.parse(raw);
      if (!validProgress(parsed)) throw Error('不支援的紀錄格式');
      state = parsed;
    }
  } catch (_) { error = '無法讀取本機練習紀錄。原資料保留，這次不會覆寫。'; readonly = true; }
  return {
    key,
    read: () => structuredClone(state),
    error: () => error,
    readonly: () => readonly,
    update(fn) {
      if (readonly || !canWrite()) return false;
      try {
        if (storage.getItem(key) !== lastRaw) { readonly = true; error = '另一個分頁已更改紀錄。為保留新資料，這頁已停止寫入；請關閉後重新開啟。'; return false; }
      } catch (_) { readonly = true; error = '無法確認最新紀錄。原資料保留，請重新開啟後再試。'; return false; }
      const next = structuredClone(state); fn(next);
      if (!validProgress(next)) { error = '紀錄格式不完整，這次不會覆寫原資料。'; return false; }
      try { const raw = JSON.stringify(next); storage.setItem(key, raw); lastRaw = raw; state = structuredClone(next); error = null; return true; }
      catch (_) { error = '這次紀錄未能保存，請勿把畫面結果當成已儲存。'; return false; }
    },
  };
}
