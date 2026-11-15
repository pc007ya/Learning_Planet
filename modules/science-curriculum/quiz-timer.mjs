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
