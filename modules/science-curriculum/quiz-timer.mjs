// Wall-clock deadlines continue in the background; callers defer writes while hidden.
export const QUESTION_SECONDS = 30;
export function secondsRemaining(deadline, now = Date.now()) {
  return Math.max(0, Math.min(QUESTION_SECONDS, Math.ceil((deadline - now) / 1000)));
}
export function timeoutAnswer(questionId, time = Date.now()) {
  return {questionId, selected:null, correct:false, timedOut:true, time};
}
export function isSavedAnswer(v) {
  return !!v && typeof v === 'object' && typeof v.questionId === 'string' && typeof v.correct === 'boolean' && Number.isFinite(v.time) &&
    (v.timedOut === true ? v.selected === null && v.correct === false : (v.timedOut === undefined || v.timedOut === false) && typeof v.selected === 'string');
}

export function localDay(now = Date.now()) {
  const d = new Date(now);
  return [d.getFullYear(), String(d.getMonth()+1).padStart(2,'0'), String(d.getDate()).padStart(2,'0')].join('-');
}
export function dailyQuestionSeconds(attempts = [], now = Date.now()) {
  const today = localDay(now), ids = new Set();
  for (const a of attempts) if (Number.isFinite(a.completed) && localDay(a.completed) === today && a.total > 0 && a.correct === a.total && a.answers?.length === a.total && a.answers.every(v => v.correct === true && v.timedOut !== true)) ids.add(a.id);
  return 30 - Math.min(2, ids.size) * 5;
}
export function startQuestionClock(run, attempts, now = Date.now()) {
  run.questionSeconds = dailyQuestionSeconds(attempts, now);
  run.timerDay = localDay(now);
  run.questionDeadline = now + run.questionSeconds * 1000;
  delete run.pausedQuestionMs;
}
export function resumeQuestionClock(run, attempts, now = Date.now()) {
  if (run.finished || run.answers[run.questions[run.index].id]) return;
  // Explicit entry only: never called by rerender or background visibility.
  if (Number.isFinite(run.questionDeadline) && run.questionDeadline <= now) run.timerResumeRepair = {previousDeadline:run.questionDeadline,at:now};
  startQuestionClock(run, attempts, now);
}
