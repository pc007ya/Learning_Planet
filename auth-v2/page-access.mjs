import { createPageAccess } from './page-access-core.mjs';

const script = document.querySelector('script[data-page-access]');
const content = document.querySelector('[data-auth-content]');
const status = document.getElementById('page-auth-status');
const login = new URL(script?.dataset.login || '../', import.meta.url);
let started = false;
function lock() {
  if (content) { content.hidden = true; content.inert = true; }
}
function fail() {
  lock();
  if (status) {
    status.hidden = false;
    status.textContent = '無法驗證登入狀態。請重新整理，或返回登入後再試。';
    const link = document.createElement('a');
    link.href = login.href; link.textContent = ' 返回登入'; status.append(link);
  }
}
const update = createPageAccess({
  authorize: user => user.getIdTokenResult(true),
  lock,
  redirect: () => {
    lock();
    if (content) content.replaceChildren();
    window.location.replace(login.href);
  },
  fail,
  unlock: async () => {
    // Authentication is already verified. Reveal before initialization so canvas
    // and Three.js code can measure the real layout instead of a zero-size box.
    if (content) { content.hidden = false; content.inert = false; }
    if (!started && script?.dataset.entry) {
      // Resolve against this document, not the shared guard's directory.
      await import(new URL(script.dataset.entry, document.baseURI).href);
    }
    started = true;
    if (status) status.hidden = true;
  }
});
lock();
// A cached page must not reappear after a logout in another tab.
window.addEventListener('pagehide', lock);
window.addEventListener('pageshow', event => { if (event.persisted) window.location.reload(); });
try {
  const { auth, onAuthStateChanged } = await import('./firebase-client.js');
  onAuthStateChanged(auth, update, fail);
} catch { fail(); }
