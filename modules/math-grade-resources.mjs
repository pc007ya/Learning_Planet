// No work runs at import time: course engines are requested only by the active course/grade.
const ROOT = new URL(/* @vite-ignore */ '../', import.meta.url);
export function createGradeResources(loadScript, runtime = globalThis) {
  const pending = new Map();
  const attempts = new Map();
  const hasAPI = api => api && Array.isArray(api.units)
    && ['byId', 'question', 'picture', 'session'].every(key => typeof api[key] === 'function');
  const range = (first, last) => Array.from({length:last-first+1}, (_, i) => first+i);
  const upperIds = {4:[125,128,130,131,132,136,137,...range(138,146)],5:range(147,170),6:range(171,186)};
  const load = (path, validate, rollback = () => {}) => {
    if (!pending.has(path)) pending.set(path, Promise.resolve().then(() => {
      const attempt = attempts.get(path) || 0;
      return loadScript(path + (attempt ? (path.includes('?') ? '&' : '?') + 'lp-retry=' + attempt : ''));
    }).then(() => {
      // HTTP 200 / script.onload does not mean a script parsed or exported its API.
      if (!validate()) throw new Error('Math resource did not initialize: ' + path);
    }).catch(error => {
      rollback();
      attempts.set(path, (attempts.get(path) || 0) + 1);
      pending.delete(path); // A failed request must not poison the next user retry.
      throw error;
    }));
    return pending.get(path);
  };
  async function ensureGrade(grade) {
    if (!Number.isInteger(grade) || grade < 1 || grade > 6) throw new Error('Invalid math grade');
    await load('modules/math-foundations/model.js', () => hasAPI(runtime.MathFoundations) && range(109,117).every(id => runtime.MathFoundations.byId('u'+id)));
    if (grade === 1) return;
    await load('modules/math-concepts/upper/core.js?v=20261106-grades456', () => Array.isArray(runtime.MathUpper?.units) && ['define','question','picture'].every(key => typeof runtime.MathUpper[key] === 'function'));
    await load('modules/math-concepts/model.js?v=20261108-grade-on-demand', () => hasAPI(runtime.MathConcepts) && typeof runtime.MathConcepts.registerUpperUnits === 'function' && range(118,137).every(id => runtime.MathConcepts.byId('u'+id) && runtime.MathFoundations.byId('u'+id)));
    if (grade >= 4) {
      const versions = {4:'20261106-grades456-2',5:'20261106-quiz-pool50',6:'20261106-grades456'};
      await load(`modules/math-concepts/upper/grade${grade}.js?v=${versions[grade]}`, () => {
        if (!upperIds[grade].every(id => runtime.MathUpper.units.some(unit => unit.id === 'u'+id && unit.grade === grade))) return false;
        runtime.MathConcepts.registerUpperUnits();
        return upperIds[grade].every(id => runtime.MathConcepts.byId('u'+id)?.kind === 'upper' && runtime.MathFoundations.byId('u'+id)?.kind === 'upper');
      }, () => {
        // A script can execute partly before throwing. Remove partial registrations
        // so its next network retry cannot duplicate the grade's unit metadata.
        const units = runtime.MathUpper.units;
        for (let i=units.length-1;i>=0;i--) if (units[i].grade === grade) units.splice(i,1);
      });
    }
  }
  return { ensureGrade };
}
function loadBrowserScript(path) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = new URL(path, ROOT).href;
    script.onload = resolve;
    script.onerror = () => { script.remove(); reject(new Error('Math resource unavailable')); };
    document.head.append(script);
  });
}
export const { ensureGrade } = createGradeResources(loadBrowserScript);
