import { installBotanicalPilot } from './botanical-pilot-v2.mjs';
import { disposeTree } from './lifecycle.mjs';

const assetBase = new URL('../../../assets/models/nature-botanical-pilot/', import.meta.url);
export async function verifyBotanicalBytes(bytes, expected, label) {
  const actual = Array.from(new Uint8Array(await globalThis.crypto.subtle.digest('SHA-256', bytes)), b => b.toString(16).padStart(2, '0')).join('');
  if (actual !== expected) throw Error(`${label} SHA-256 mismatch; rebuild and verify instead of applying`);
}

// No animation loop or terrain ownership here. The mount owns the returned disposer.
export async function loadBotanicalPilot({THREE, GLTFLoader, terrain, data, sourceBuffer, fetcher, signal, disposed, assetVersion}) {
  const url = name => { const u = new URL(name, assetBase); if (assetVersion) u.searchParams.set('v', assetVersion); return u; };
  const response = await fetcher(url('grade3-botanical-slope-v2.json'), {signal});
  if (!response.ok) throw Error(`Botanical metadata HTTP ${response.status}`);
  const manifest = await response.json();
  if (disposed() || signal.aborted) return null;
  await verifyBotanicalBytes(sourceBuffer, manifest.baseTerrainSha256, 'Source terrain');
  if (disposed() || signal.aborted) return null;
  const model = await fetcher(url('grade3-botanical-slope-v2.glb'), {signal});
  if (!model.ok) throw Error(`Botanical model HTTP ${model.status}`);
  const buffer = await model.arrayBuffer();
  if (buffer.byteLength !== manifest.bytes) throw Error('Botanical model byte size mismatch');
  await verifyBotanicalBytes(buffer, manifest.sha256, 'Botanical model');
  if (disposed() || signal.aborted) return null;
  const {scene: patch} = await new GLTFLoader().parseAsync(buffer, assetBase.href);
  if (disposed() || signal.aborted) { disposeTree(patch); return null; }
  let pilot;
  try { pilot = installBotanicalPilot(THREE, terrain, patch, data, manifest); }
  catch (error) { disposeTree(patch); throw error; }
  let dead = false;
  return {...pilot, dispose() { if (dead) return; dead = true; pilot.dispose(); disposeTree(patch); }};
}
