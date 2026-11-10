/** Only v11 world coordinates may be restored into the approved v11 terrain. */
export const V11_WORLD_VERSION = 'planet-v11-world-v1';
const point = p => Array.isArray(p) && p.length === 2 && p.every(Number.isFinite);
export function restoreV11Exploration(value, region) {
  const valid = value?.worldVersion === V11_WORLD_VERSION && value?.grade === region.grade && point(value.position);
  const resumeSurface = valid && value.resumeSurface === true && value.mode === 'surface';
  return {
    worldVersion: V11_WORLD_VERSION, grade: region.grade,
    position: [...(valid ? value.position : region.spawn)],
    selectedId: region.courseIds.includes(value?.selectedId) ? value.selectedId : region.courseIds[0] || null,
    view: value?.view === 'overview' ? 'overview' : 'near',
    mode: resumeSurface ? 'surface' : 'orbit', resumeSurface,
  };
}
export function runtimeState(exploration, region) {
  const state = restoreV11Exploration(exploration, region);
  return {worldVersion: V11_WORLD_VERSION, grade: state.grade,
    position: [state.position[0], 0, state.position[1]], landed: state.resumeSurface,
    mode: state.view === 'overview' ? 'overview' : 'follow'};
}
