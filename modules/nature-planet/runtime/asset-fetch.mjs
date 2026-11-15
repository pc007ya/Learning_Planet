import {assetPacks} from './asset-packs.mjs';
const root = new URL('../../../', import.meta.url);
/** Decode only pinned, selected assets. No background downloads or preloading. */
export function createNatureAssetFetch(fetcher, {decompress = globalThis.DecompressionStream, base = root} = {}) {
 return async function assetFetch(input, init = {}) {
  const url = new URL(String(input), base);
  const key = url.origin === base.origin && url.pathname.startsWith(base.pathname) ? url.pathname.slice(base.pathname.length) : null;
  const pack = key && assetPacks[key];
  if (!pack || typeof decompress !== 'function') return fetcher(input, init);
  const packedURL = new URL(url); packedURL.pathname += '.gzip.bin';
  const response = await fetcher(packedURL, init);
  if (!response.ok) throw Error(`Compressed asset HTTP ${response.status}`);
  const packed = await response.arrayBuffer();
  if (init.signal?.aborted) throw new DOMException('Asset loading cancelled', 'AbortError');
  if (packed.byteLength !== pack.packedBytes) throw Error('Compressed asset byte size mismatch');
  const decoded = new Response(new Blob([packed]).stream().pipeThrough(new decompress('gzip')));
  const bytes = await decoded.arrayBuffer();
  if (init.signal?.aborted) throw new DOMException('Asset loading cancelled', 'AbortError');
  if (bytes.byteLength !== pack.bytes) throw Error('Decoded asset byte size mismatch');
  const digest = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', bytes)), b => b.toString(16).padStart(2, '0')).join('');
  if (digest !== pack.sha256) throw Error('Decoded asset SHA-256 mismatch');
  return new Response(bytes, {headers:{'Content-Type':'model/gltf-binary'}});
 };
}
