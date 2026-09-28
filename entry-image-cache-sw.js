/* Only public image URLs from the manifest are intercepted. */
importScripts('./entry-image-manifest.js');
const DB_NAME = 'learning-planet-entry-images';
const STORE_NAME = 'images';
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const RECHECK_AFTER_MS = 24 * 60 * 60 * 1000;
const MAX_CACHE_BYTES = self.LP_ENTRY_IMAGE_MANIFEST.maxBytes;
const allowedUrls = new Map(Object.entries(self.LP_ENTRY_IMAGE_MANIFEST.assets)
  .map(([path, revision]) => [new URL(path, self.registration.scope).href, revision]));
let databasePromise;
let writes = Promise.resolve();
const queueWrite = (task) => (writes = writes.then(task).catch(() => {}));

function openDatabase() {
  if (!('indexedDB' in self)) return Promise.resolve(null);
  if (!databasePromise) databasePromise = new Promise((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME);
      request.onsuccess = () => {
        request.result.onversionchange = () => { request.result.close(); databasePromise = null; };
        resolve(request.result);
      };
      request.onerror = request.onblocked = () => resolve(null);
    } catch (_) { resolve(null); }
  });
  return databasePromise;
}

async function readImage(url) {
  const db = await openDatabase();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const request = tx.objectStore(STORE_NAME).get(url);
      request.onsuccess = () => {
        const entry = request.result;
        resolve(entry?.revision === allowedUrls.get(url) && entry.blob instanceof Blob ? entry : null);
      };
      request.onerror = tx.onabort = () => resolve(null);
    } catch (_) { resolve(null); }
  });
}

// Delete removed/replaced assets, then evict the least recently used until within budget.
async function pruneAndStore(url, blob) {
  const db = await openDatabase();
  if (!db) return;
  await new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      if (url) store.put({ revision: allowedUrls.get(url), blob, savedAt: Date.now(), lastUsed: Date.now() }, url);
      let total = 0;
      const entries = [];
      const cursor = store.openCursor();
      cursor.onsuccess = () => {
        const current = cursor.result;
        if (current) {
          const entry = current.value;
          if (!allowedUrls.has(current.key) || entry.revision !== allowedUrls.get(current.key) || !(entry.blob instanceof Blob)) current.delete();
          else {
            total += entry.blob.size;
            entries.push({ key: current.key, size: entry.blob.size, lastUsed: entry.lastUsed || 0 });
          }
          current.continue();
        } else {
          entries.sort((a, b) => a.lastUsed - b.lastUsed);
          for (const entry of entries) {
            if (total <= MAX_CACHE_BYTES) break;
            store.delete(entry.key);
            total -= entry.size;
          }
        }
      };
      tx.oncomplete = tx.onerror = tx.onabort = resolve;
    } catch (_) { resolve(); }
  });
}

async function touchImage(url) {
  const db = await openDatabase();
  if (!db) return;
  await new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.get(url);
      request.onsuccess = () => {
        if (request.result) store.put({ ...request.result, lastUsed: Date.now() }, url);
      };
      tx.oncomplete = tx.onerror = tx.onabort = resolve;
    } catch (_) { resolve(); }
  });
}

async function writeImage(url, response) {
  try {
    if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) return;
    const blob = await response.blob();
    if (blob.size && blob.size <= MAX_IMAGE_BYTES) await queueWrite(() => pruneAndStore(url, blob));
  } catch (_) { /* Storage failure must not prevent the network image from displaying. */ }
}

async function refreshImage(url) {
  try { await writeImage(url, await fetch(url, { cache: 'reload' })); } catch (_) { /* Keep the offline copy. */ }
}

function cachedResponse(entry) {
  return new Response(entry.blob, { headers: {
    'content-type': entry.blob.type || 'application/octet-stream',
    'X-LP-Image-Cache': 'indexeddb',
  } });
}
const boundedRead = (promise, milliseconds) => Promise.race([
  promise, new Promise((resolve) => setTimeout(() => resolve(null), milliseconds)),
]);

self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil((async () => {
  await self.clients.claim();
  await queueWrite(() => pruneAndStore());
})()));

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET' || request.headers.has('range') || !allowedUrls.has(request.url)) return;
  const background = [];
  const response = (async () => {
    const cacheRead = readImage(request.url);
    const cached = await boundedRead(cacheRead, 700);
    if (cached) {
      if (Date.now() - cached.lastUsed > 60000) background.push(queueWrite(() => touchImage(request.url)));
      if (Date.now() - cached.savedAt > RECHECK_AFTER_MS) background.push(refreshImage(request.url));
      return cachedResponse(cached);
    }
    try {
      const result = await fetch(request);
      background.push(writeImage(request.url, result.clone()));
      return result;
    } catch (error) {
      const lateCache = await boundedRead(cacheRead, 1500);
      if (lateCache) return cachedResponse(lateCache);
      throw error;
    }
  })();
  event.respondWith(response);
  event.waitUntil(response.then(() => Promise.allSettled(background)).catch(() => {}));
});

// Seed only resources already requested by the page before this worker took control.
self.addEventListener('message', (event) => {
  if (event.data?.type !== 'cache-loaded-entry-images' || !Array.isArray(event.data.paths)) return;
  event.waitUntil((async () => {
    for (const path of new Set(event.data.paths)) {
      if (typeof path !== 'string') continue;
      try {
        const url = new URL(path, self.registration.scope).href;
        if (!allowedUrls.has(url) || await readImage(url)) continue;
        await writeImage(url, await fetch(url, { cache: 'force-cache' }));
      } catch (_) { /* Offline or unavailable storage: let the next visit retry. */ }
    }
  })());
});
