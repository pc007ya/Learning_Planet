import {generatedQuestions} from './generated.mjs';
import {reasoningQuestions} from './reasoning-generated.mjs';
export function startAttempt(form, now = Date.now(), id = `mock-${now}`, seed = now >>> 0) {
 return { version: 1, id, formId: form.id, ...(form.source==='generated'?{seed:seed>>>0,generatedVersion:1}:{}), startedAt: now, deadline: now + form.minutes * 60000, lastEnteredAt: now, index: 0, answers: form.questionIds.map(() => null), flags: form.questionIds.map(() => false), seconds: form.questionIds.map(() => 0), finishedAt: null };
}
export function attemptQuestions(attempt,bank){
 const form=bank.forms.find(f=>f.id===attempt.formId);
 if(form?.source==='generated'&&attempt.generatedVersion===1)return form.generator==='reasoning'?reasoningQuestions(attempt.seed,form.id):generatedQuestions(attempt.seed);
 // Pre-generator A/B/C attempts retain their original fixed questions and keys.
 const byId=new Map(bank.questions.map(q=>[q.id,q]));return form.questionIds.map(id=>byId.get(id));
}
export function remaining(attempt, now = Date.now()) { return Math.max(0, Math.ceil((attempt.deadline - now) / 1000)); }
export function touch(attempt, now = Date.now()) {
 const end = Math.min(now, attempt.deadline); const elapsed = Math.max(0, (end - attempt.lastEnteredAt) / 1000);
 attempt.seconds[attempt.index] += elapsed; attempt.lastEnteredAt = end;
}
export function choose(attempt, option, now = Date.now()) {
 if (attempt.finishedAt !== null || remaining(attempt, now) === 0 || !Number.isInteger(option) || option < 0 || option > 3) return false;
 touch(attempt, now); attempt.answers[attempt.index] = option; return true;
}
export function navigate(attempt, index, now = Date.now()) {
 if (attempt.finishedAt !== null || !Number.isInteger(index) || index < 0 || index >= attempt.answers.length) return false;
 touch(attempt, now); attempt.index = index; return true;
}
export function finish(attempt, now = Date.now()) {
 if (attempt.finishedAt !== null) return attempt;
 touch(attempt, now); attempt.finishedAt = Math.min(now, attempt.deadline); return attempt;
}
export function validAttempt(value, bank) {
 const form = bank.forms.find(f => f.id === value?.formId); const n = form?.questionIds.length;
 const legacyReasoning=form?.generator==='reasoning'&&!Object.hasOwn(value,'seed')&&!Object.hasOwn(value,'generatedVersion');
 if(form?.source==='generated'&&!legacyReasoning&&(!Number.isInteger(value.seed)||value.seed<0||value.seed>4294967295||value.generatedVersion!==1))return false;
 return !!(form && value.version === bank.version && typeof value.id === 'string' && value.id.length < 100 && Number.isFinite(value.startedAt) && value.startedAt > 0 && value.deadline === value.startedAt + form.minutes * 60000 && Number.isFinite(value.lastEnteredAt) && value.lastEnteredAt >= value.startedAt && value.lastEnteredAt <= value.deadline && (value.finishedAt === null || (Number.isFinite(value.finishedAt) && value.finishedAt >= value.startedAt && value.finishedAt <= value.deadline)) && Number.isInteger(value.index) && value.index >= 0 && value.index < n && Array.isArray(value.answers) && value.answers.length === n && value.answers.every(x => x === null || Number.isInteger(x) && x >= 0 && x < 4) && Array.isArray(value.flags) && value.flags.length === n && value.flags.every(x => typeof x === 'boolean') && Array.isArray(value.seconds) && value.seconds.length === n && value.seconds.every(x => Number.isFinite(x) && x >= 0 && x <= form.minutes * 60));
}
export function analyze(attempt, bank) {
 if (attempt.finishedAt === null) throw new Error('交卷後才可分析');
 const questions=attemptQuestions(attempt,bank);
 const groups = {};
 const rows = questions.map((question, i) => {
  const picked = attempt.answers[i]; const status = picked === null ? 'skipped' : picked === question.correct ? 'correct' : 'wrong';
  const group = groups[question.category] ||= { category: question.category, total: 0, correct: 0, wrong: 0, skipped: 0, seconds: 0 };
  group.total++; group[status]++; group.seconds += attempt.seconds[i];
  return { number: i + 1, question, picked, status, seconds: Math.round(attempt.seconds[i]) };
 });
 const correct = rows.filter(r => r.status === 'correct').length, skipped = rows.filter(r => r.status === 'skipped').length;
 return { rows, categories: Object.values(groups).map(g => ({ ...g, accuracy: Math.round(g.correct / g.total * 100) })).sort((a,b) => a.accuracy - b.accuracy || b.total - a.total), correct, wrong: rows.length - correct - skipped, skipped, total: rows.length, score: Math.round(correct / rows.length * 100), seconds: Math.round((attempt.finishedAt - attempt.startedAt) / 1000) };
}
export function storageKey(learnerId) { return `learning-planet.mock-exams.v1:${encodeURIComponent(learnerId)}`; }
export function readHistory(storage, learnerId, bank) {
 if (!learnerId) return { active: null, history: [] };
 try { const data = JSON.parse(storage.getItem(storageKey(learnerId)) || '{}'); return { active: validAttempt(data.active, bank) && data.active.finishedAt === null ? data.active : null, history: Array.isArray(data.history) ? data.history.filter(a => validAttempt(a, bank) && a.finishedAt !== null).slice(0,30) : [] }; } catch { return { active: null, history: [] }; }
}
export function writeHistory(storage, learnerId, data) {
 if (!learnerId) return false;
 try { storage.setItem(storageKey(learnerId), JSON.stringify({active: data.active, history: data.history.slice(0,30)})); return true; } catch { return false; }
}
