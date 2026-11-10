import { toWorld } from '../v11/nav.mjs';
import { V11_WORLD_VERSION, restoreV11Exploration } from './state.mjs';

// Keep graph and terrain imports grade-local. Never request all three in a mount.
const graphs = {
  1: () => import('../../math-knowledge/grade1.mjs'),
  2: () => import('../../math-knowledge/grade2.mjs'),
  3: () => import('../../math-knowledge/grade3.mjs'),
};
export function v11RegionURLs(grade) {
  if (!graphs[grade]) throw new Error('Unsupported v11 grade');
  const assetBaseUrl = new URL(/* @vite-ignore */ '../v11/assets/', import.meta.url).href;
  return {assetBaseUrl, metadataURL: new URL(`grade${grade}-scene.json`, assetBaseUrl).href,
    terrainURL: new URL(`grade${grade}-terrain.glb`, assetBaseUrl).href};
}
const point3 = p => Array.isArray(p) && p.length === 3 && p.every(Number.isFinite);
export function buildV11Region(grade, graph, metadata) {
  if (metadata?.grade !== grade || metadata.layoutVersion !== 'reference-streets-v11' || !Array.isArray(metadata.stationsData)) throw Error('V11 region grade/version mismatch');
  const courseIds = [...graph.courseOrder], stations = new Map(metadata.stationsData.map(s => [s.id, s]));
  if (stations.size !== metadata.stationsData.length || stations.size !== courseIds.length || courseIds.some(id => !stations.has(id))) throw Error('V11 course coverage mismatch');
  if (!point3(metadata.spawn) || !Array.isArray(metadata.nodes) || !Array.isArray(metadata.edges)) throw Error('Invalid V11 navigation');
  const navIds = new Set(metadata.nodes.map(n => n.id));
  const landmarks = courseIds.map(id => {
    const station = stations.get(id);
    if (!point3(station.entry) || !point3(station.p) || !navIds.has(station.navNode)) throw Error('Invalid course destination: ' + id);
    // UI arrival distance and runtime navigation MUST use the same doorway.
    const [x,y,z] = toWorld(station.entry), topics = graph.nodes.filter(n => n.units.includes(id));
    const group = graph.groups.find(g => g.id === station.primaryGroup) || graph.groups.find(g => g.id === topics[0]?.group);
    return {id,x,y,z,group:group?.id,groupLabel:group?.label,color:group?.color || '#bdb0ff',
      extension:topics.length > 0 && topics.every(n => n.scope === 'extension')};
  });
  const nodes = new Map(graph.nodes.map(n => [n.id,n]));
  function related(id, allowed = courseIds) {
    const valid = new Set(allowed), links = new Map();
    for (const edge of graph.edges) for (const a of nodes.get(edge.from)?.units || []) for (const b of nodes.get(edge.to)?.units || []) {
      const other = a === id ? b : b === id ? a : null;
      if (!other || other === id || !valid.has(other)) continue;
      if (!links.has(other)) links.set(other, {id:other,reasons:[]});
      if (!links.get(other).reasons.includes(edge.reason)) links.get(other).reasons.push(edge.reason);
    }
    return [...links.values()];
  }
  const spawn3 = toWorld(metadata.spawn);
  const region = {grade,courseIds,landmarks,metadata,spawn:[spawn3[0],spawn3[2]],related,
    worldVersion:V11_WORLD_VERSION,...v11RegionURLs(grade)};
  region.restoreExploration = value => restoreV11Exploration(value, region);
  return region;
}
export async function loadV11Region(grade, {signal,fetcher=globalThis.fetch,loadGraph=graphs[grade]} = {}) {
  const urls = v11RegionURLs(grade);
  if (signal?.aborted) throw new DOMException('Aborted','AbortError');
  const [graph,metadata] = await Promise.all([loadGraph(), (async () => {
    const response = await fetcher(urls.metadataURL, {signal,cache:'no-cache'});
    if (!response.ok) throw Error('V11 scene data unavailable');
    if (Number(response.headers?.get?.('content-length')) > 2000000) throw Error('V11 scene data too large');
    const text = await response.text();
    if (new TextEncoder().encode(text).length > 2000000) throw Error('V11 scene data too large');
    return JSON.parse(text);
  })()]);
  if (signal?.aborted) throw new DOMException('Aborted','AbortError');
  return buildV11Region(grade,graph,metadata);
}
