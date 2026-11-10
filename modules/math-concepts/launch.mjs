import { ensureGrade } from '../math-grade-resources.mjs';
const root = document.querySelector('#app');
const id = new URLSearchParams(location.search).get('unit') || 'u118';
const number = Number(id.slice(1));
const grade = number >= 171 ? 6 : number >= 147 ? 5 : number >= 124 ? 4 : number >= 119 ? 3 : 2;
let attempt = 0;
async function launch() {
  root.textContent = '正在準備這一課…';
  try {
    await ensureGrade(grade);
    if (!globalThis.MathConcepts.byId(id)) throw new Error('Unknown unit');
    await import('./desk.mjs?v=20261106-grades456' + (attempt ? '&retry=' + attempt : ''));
  } catch (_) {
    root.textContent = '這一課暫時無法載入。 ';
    const retry = document.createElement('button');
    retry.textContent = '重試';
    retry.onclick = () => { attempt++; launch(); };
    const back = document.createElement('button');
    back.textContent = '返回數學';
    back.onclick = () => window.parent !== window ? window.parent.postMessage({type:'math-teaching-close'}, location.origin) : location.assign('./math/');
    root.append(retry, back);
  }
}
launch();
