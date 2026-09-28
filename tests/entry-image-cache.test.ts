import { describe, expect, it, vi } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createContext, runInContext } from 'node:vm';
import { IDBFactory } from 'fake-indexeddb';

const source = readFileSync('entry-image-cache-sw.js', 'utf8');
const origin = 'https://cache-test.example/';
function worker(options: { database?: IDBFactory; assets?: Record<string, string>; maxBytes?: number; unavailable?: boolean } = {}) {
  const database = options.database || new IDBFactory();
  const handlers: Record<string, (event: any) => void> = {};
  const network = vi.fn(async () => new Response(new Blob(['1234'], { type: 'image/png' })));
  let now = 100000;
  const self: any = {
    registration: { scope: origin }, indexedDB: database,
    LP_ENTRY_IMAGE_MANIFEST: { assets: options.assets || { 'a.png': 'a1', 'b.png': 'b1', 'c.png': 'c1' }, maxBytes: options.maxBytes ?? 100 },
    addEventListener: (type: string, handler: any) => { handlers[type] = handler; },
    skipWaiting: async () => {}, clients: { claim: async () => {} },
  };
  const context = createContext({ self, indexedDB: options.unavailable ? { open: () => { throw Error('denied'); } } : database,
    importScripts: () => {}, Blob, Response, URL, setTimeout, Date: { now: () => now }, fetch: network });
  runInContext(source, context);
  async function dispatch(type: string, event: any) {
    const tasks: Promise<any>[] = [];
    let result: Promise<Response> | undefined;
    handlers[type]({ ...event, waitUntil: (p: Promise<any>) => tasks.push(p), respondWith: (p: Promise<Response>) => { result = p; } });
    const response = await result;
    await Promise.all(tasks);
    return response;
  }
  return { database, network, advance: () => { now += 61000; }, activate: () => dispatch('activate', {}),
    get: (path: string) => dispatch('fetch', { request: new Request(new URL(path, origin)) }),
    seed: (paths: string[]) => dispatch('message', { data: { type: 'cache-loaded-entry-images', paths } }) };
}

describe('entry image IndexedDB cache', () => {
  it('serves the persisted image without network even after worker restart', async () => {
    const first = worker();
    expect((await first.get('a.png'))?.headers.get('X-LP-Image-Cache')).toBeNull();
    const next = worker({ database: first.database });
    next.network.mockRejectedValue(Error('offline'));
    const cached = await next.get('a.png');
    expect(cached?.headers.get('X-LP-Image-Cache')).toBe('indexeddb');
    expect(await cached?.text()).toBe('1234');
    expect(next.network).not.toHaveBeenCalled();
  });

  it('replaces changed revisions and removes obsolete paths on activation', async () => {
    const first = worker();
    await first.get('a.png'); await first.get('b.png');
    const next = worker({ database: first.database, assets: { 'a.png': 'a2' } });
    await next.activate();
    expect((await next.get('a.png'))?.headers.get('X-LP-Image-Cache')).toBeNull();
    expect(next.network).toHaveBeenCalledTimes(1);
    // Reintroducing a removed URL must fetch it, not resurrect the old blob.
    const later = worker({ database: first.database });
    expect((await later.get('b.png'))?.headers.get('X-LP-Image-Cache')).toBeNull();
  });

  it('evicts the least recently used image when the byte budget is reached', async () => {
    const w = worker({ maxBytes: 8 });
    await w.get('a.png'); w.advance(); await w.get('b.png');
    w.advance(); await w.get('a.png'); w.advance(); await w.get('c.png');
    expect((await w.get('a.png'))?.headers.get('X-LP-Image-Cache')).toBe('indexeddb');
    expect((await w.get('b.png'))?.headers.get('X-LP-Image-Cache')).toBeNull();
  });

  it('falls back to the network when IndexedDB is denied', async () => {
    const w = worker({ unavailable: true });
    expect(await (await w.get('a.png'))?.text()).toBe('1234');
    expect(await (await w.get('a.png'))?.text()).toBe('1234');
    expect(w.network).toHaveBeenCalledTimes(2);
  });

  it('does not intercept unrelated or query-versioned requests or seed unseen assets', async () => {
    const w = worker();
    expect(await w.get('private.json')).toBeUndefined();
    expect(await w.get('a.png?v=changed')).toBeUndefined();
    expect(w.network).not.toHaveBeenCalled();
    await w.seed(['a.png', 'a.png', 'private.json']);
    expect(w.network).toHaveBeenCalledTimes(1);
    expect((await w.get('b.png'))?.headers.get('X-LP-Image-Cache')).toBeNull();
  });

  it('does not save failed HTTP responses', async () => {
    const w = worker();
    w.network.mockResolvedValue(new Response('missing', { status: 404 }));
    expect((await w.get('a.png'))?.status).toBe(404);
    expect((await w.get('a.png'))?.status).toBe(404);
    expect(w.network).toHaveBeenCalledTimes(2);
  });

  it('keeps manifest revisions aligned with the committed assets', () => {
    const context = createContext({ self: {} });
    runInContext(readFileSync('entry-image-manifest.js', 'utf8'), context);
    for (const [path, revision] of Object.entries(context.self.LP_ENTRY_IMAGE_MANIFEST.assets)) {
      expect(existsSync(path), path).toBe(true);
      expect(createHash('sha256').update(readFileSync(path)).digest('hex').slice(0, 16), path).toBe(revision);
    }
  });
});
