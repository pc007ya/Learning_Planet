(async function () {
  'use strict';
  // Real folder entrypoints work on Firebase and Pages, including a direct reload.
  // The root index holds common login/learner code; staff/profile fragments stay deferred.
  const script = document.currentScript;
  const root = new URL('./', script.src);
  const status = document.getElementById('route-status');
  try {
    const response = await fetch(new URL('index.html', root));
    if (!response.ok) throw new Error('Entry unavailable');
    const html = await response.text();
    const base = document.createElement('base');
    base.href = root.href;
    const source = html.replace('<base href="./">', base.outerHTML);
    window.__resources = {};
    document.open(); document.write(source); document.close();
  } catch (_) {
    status.textContent = '暫時無法載入，請重新整理後重試。';
  }
})();
