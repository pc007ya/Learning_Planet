import '../../science-rollout.js';

export const SCIENCE_CURRICULUM_RELEASED = globalThis.LPScienceRollout.enabled === true;
export function isScienceCurriculumEnabled() { return SCIENCE_CURRICULUM_RELEASED; }
