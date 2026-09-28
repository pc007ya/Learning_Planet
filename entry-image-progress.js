(function () {
  'use strict';

  const registration = 'serviceWorker' in navigator
    ? navigator.serviceWorker.register('./entry-image-cache-sw.js', { scope: './' }).catch(() => null)
    : Promise.resolve(null);
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
