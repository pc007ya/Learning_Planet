(function () {
  'use strict';
  const mounted = new Map();
  const pending = new Map();
  const scripts = new Map();
  const styles = new Map();
  const moduleFailures = new Map();
  function importResource(path) {
    const attempt = moduleFailures.get(path) || 0;
    const url = attempt ? path + (path.includes('?') ? '&' : '?') + 'lp-retry=' + attempt : path;
    return import(url).catch(error => { moduleFailures.set(path, attempt + 1); throw error; });
  }
  function loadStyle(path) {
    if (!styles.has(path)) styles.set(path, new Promise((resolve,reject) => {
      const link = document.createElement("link"); link.rel = "stylesheet"; link.href = path;
      link.onload = resolve; link.onerror = () => { styles.delete(path); link.remove(); reject(new Error("Style unavailable")); };
      document.head.append(link);
    }));
    return styles.get(path);
  }
  const decorations = new WeakSet();
  const mockHosts = new WeakSet();
  let decorationFrame = 0;
  let owner = null;
  let mathPending = false;
  function loadScript(path) {
    if (!scripts.has(path)) scripts.set(path, new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = path;
      script.onload = resolve;
      script.onerror = () => { script.remove(); scripts.delete(path); reject(new Error('Resource unavailable')); };
      document.head.append(script);
    }));
    return scripts.get(path);
  }
  function isCurrent(host, ticket) { return host.isConnected && pending.get(host) === ticket; }
  function showError(host, retry) {
    let message = host.querySelector('[data-resource-error]');
    if (!message) {
      message = document.createElement('div');
      message.dataset.resourceError = '';
      message.style.cssText = 'position:relative;z-index:20;padding:16px;color:#fff;background:#172447;border-radius:16px;';
      message.setAttribute('role', 'alert');
      host.append(message);
    }
    message.replaceChildren(document.createTextNode('載入失敗，請重試。 '));
    const button = document.createElement('button');
    button.textContent = '重試';
    button.style.cssText = 'min-width:60px;min-height:44px;border-radius:12px;';
    button.onclick = () => { message.remove(); retry(); };
    message.append(button);
  }
  function mount(host, loader) {
    if (mounted.has(host) || pending.has(host)) return;
    const ticket = {};
    pending.set(host, ticket);
    host.setAttribute('aria-busy', 'true');
    const status = document.createElement('p');
    status.dataset.resourceLoading = '';
    status.textContent = '正在準備互動畫面…';
    status.setAttribute('role', 'status');
    if (!host.querySelector('[data-orbit-loading]')) host.append(status);
    const fail = () => {
      if (!host.isConnected) return;
      mounted.get(host)?.destroy();
      mounted.delete(host);
      showError(host, () => mount(host, loader));
    };
    host.addEventListener('lp-module-error', fail, { once: true });
    ticket.cancel = () => host.removeEventListener('lp-module-error', fail);
    Promise.resolve().then(loader).then(async module => {
      if (!isCurrent(host, ticket)) return null;
      return module.mountEarthOrbit ? module.mountEarthOrbit(host) : module.mountInteractiveLab(host);
    }).then(scene => {
      if (scene && isCurrent(host, ticket)) mounted.set(host, { destroy() { ticket.cancel(); scene.destroy(); } });
      else { scene?.destroy(); ticket.cancel(); }
    }).catch(() => { ticket.cancel(); if (isCurrent(host, ticket)) fail(); }).finally(() => {
      if (pending.get(host) === ticket) pending.delete(host);
      status.remove();
      host.setAttribute('aria-busy', 'false');
    });
  }
  function sync(component) {
    owner = component;
    for (const [host, scene] of mounted) if (!host.isConnected) { scene.destroy(); mounted.delete(host); }
    for (const [host, ticket] of pending) if (!host.isConnected) { ticket.cancel(); pending.delete(host); }
    const state = component.state;
    // Subject metadata remains small; the 813 KB embedded math pictures arrive only on math entry.
    if (!state.teacher && ['map','quiz','divLesson','vertLesson','geoLesson','weekly','weeklyQuiz'].includes(state.screen) && (state.subject === 'math' || state.screen.startsWith('weekly')) && !window.MathConceptObjects && !mathPending) {
      const root = document.querySelector('.subject-world') || document.querySelector('#dc-root');
      mathPending = true;
      ensureMathObjects().then(() => {
        if (owner === component) component.setState({ resourceRevision: (component.state.resourceRevision || 0) + 1 });
      }).catch(() => { if (root?.isConnected) showError(root, () => sync(component)); }).finally(() => { mathPending = false; });
    }
    document.querySelectorAll('#dc-root lp-mock-exam').forEach(host => {
      if (mockHosts.has(host) || customElements.get('lp-mock-exam')) return;
      mockHosts.add(host); host.style.minHeight = '240px'; host.textContent = '正在準備模擬考…';
      importResource('./modules/gifted-exam/app.mjs?v=auto-reasoning-1').then(() => {host.textContent = '';}).catch(() => {
        mockHosts.delete(host); if (host.isConnected) showError(host, () => sync(component));
      });
    });
    // Only hosts mounted by the current conditional screen can cross the import boundary.
    document.querySelectorAll('#dc-root [data-earth-orbit-v01]').forEach(host => mount(host, () => importResource('./modules/earth-orbit/earth-orbit-v01.js')));
    document.querySelectorAll('#dc-root [data-interactive-lab]').forEach(host => mount(host, () => Promise.all([loadStyle(host.dataset.interactiveLab === 'phonics' ? './styles/english-phonics.css' : './styles/interactive-labs.css'),host.dataset.interactiveLab === 'mini4wd' ? loadStyle('./styles/mini4wd.css') : Promise.resolve()]).then(() => importResource('./modules/interactive-labs/interactive-labs.js'))));
    if (!decorationFrame) decorationFrame = requestAnimationFrame(() => {
      decorationFrame = requestAnimationFrame(() => {
        decorationFrame = 0;
        document.querySelectorAll('#dc-root [data-decoration-src]').forEach(img => {
          if (decorations.has(img)) return;
          if (matchMedia('(prefers-reduced-motion: reduce)').matches && /login-(cat|dog)-flyby/.test(img.className)) return;
          decorations.add(img);
          img.src = img.dataset.decorationSrc;
          img.decode().then(() => { if (img.isConnected) img.dataset.decorationReady = ''; }).catch(() => { decorations.delete(img); });
        });
      });
    });
  }
  function destroy() {
    owner = null;
    cancelAnimationFrame(decorationFrame); decorationFrame = 0;
    for (const scene of mounted.values()) scene.destroy();
    for (const ticket of pending.values()) ticket.cancel();
    mounted.clear(); pending.clear();
  }
  function ensureMathObjects() { return window.MathConceptObjects ? Promise.resolve() : loadScript('./modules/math-concepts/objects.js'); }
  window.LPHomeResources = { sync, destroy, ensureMathObjects };
})();
