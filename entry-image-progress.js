(function () {
  'use strict';

  const registration = 'serviceWorker' in navigator
    ? navigator.serviceWorker.register('./entry-image-cache-sw.js', { scope: './' }).catch(() => null)
    : Promise.resolve(null);
  const boundStatuses = new WeakSet();
  const allowedUrls = new Set(Object.keys(self.LP_ENTRY_IMAGE_MANIFEST?.assets || {})
    .map((path) => new URL(path, document.baseURI).href));
  const pendingSeedPaths = new Set();
  const seededPaths = new Set();
  let seedTimer = 0;

  function seedResource(path) {
    if (!path) return;
    const url = new URL(path, document.baseURI).href;
    if (!allowedUrls.has(url) || seededPaths.has(url)) return;
    seededPaths.add(url);
    pendingSeedPaths.add(url);
    seedLoadedImages();
  }

  function seedLoadedImages() {
    clearTimeout(seedTimer);
    seedTimer = setTimeout(async () => {
      const paths = [...pendingSeedPaths];
      pendingSeedPaths.clear();
      if (!paths.length) return;
      const ready = await registration;
      if (!ready) return;
      try {
        const active = (await navigator.serviceWorker.ready).active;
        active?.postMessage({ type: 'cache-loaded-entry-images', paths });
      } catch (_) {
        // Image loading works normally when local storage is unavailable.
      }
    }, 1000);
  }

  function bindLoginProgress(screen) {
    const status = screen.querySelector('[data-entry-image-progress]');
    const images = [...screen.querySelectorAll('img[data-entry-image]')];
    if (!status || !images.length || boundStatuses.has(status)) return;
    boundStatuses.add(status);

    const finished = new Set();
    const loaded = new Set();
    const total = images.length;
    const update = () => {
      const percent = Math.round(loaded.size / total * 100);
      status.textContent = finished.size === total && loaded.size === total
        ? '圖片已載入 100%'
        : `圖片載入 ${loaded.size}/${total}（${percent}%）${finished.size === total ? '；部分圖片無法載入' : ''}`;
    };

    for (const image of images) {
      const settle = () => {
        if (finished.has(image)) return;
        finished.add(image);
        if (image.naturalWidth > 0) {
          loaded.add(image);
          seedResource(image.getAttribute('src'));
        }
        update();
      };
      if (image.complete) settle();
      else {
        image.addEventListener('load', settle, { once: true });
        image.addEventListener('error', settle, { once: true });
      }
    }
    update();
  }

  function discover(root) {
    const parentLogin = root.closest?.('.login-space');
    if (parentLogin) bindLoginProgress(parentLogin);
    if (root.matches?.('.login-space')) bindLoginProgress(root);
    root.querySelectorAll?.('.login-space').forEach(bindLoginProgress);
  }

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) discover(node);
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  discover(document.body);
  // Resource timing includes CSS backgrounds as well as images. It never prefetches unseen pages.
  performance.getEntriesByType('resource').forEach((entry) => seedResource(entry.name));
  if ('PerformanceObserver' in window) {
    try {
      new PerformanceObserver((list) => list.getEntries().forEach((entry) => seedResource(entry.name)))
        .observe({ type: 'resource', buffered: true });
    } catch (_) { /* Older browsers still use image load events below. */ }
  }
  document.addEventListener('load', (event) => {
    if (event.target instanceof HTMLImageElement && event.target.naturalWidth) seedResource(event.target.currentSrc);
  }, true);
  document.querySelectorAll('img').forEach((image) => {
    if (image.complete && image.naturalWidth) seedResource(image.currentSrc);
  });
})();
