import { catalog, gradeNames, shortNames } from './catalog.mjs';
import { neighbors as adjacent, practiceStatus } from './shared.mjs';
export { practiceStatus };

const requestedGrade = Number(globalThis.document?.body?.dataset.grade);
export const grade = catalog[requestedGrade] ? requestedGrade : 1;
const data = catalog[grade];
export const { curriculum, groups, nodes, edges, courseOrder, routeVisuals } = data;
export const visuals = data.visuals || Object.fromEntries(nodes.map(n => [n.id, n.visual]));
export const gradeName = gradeNames[grade];
export const shortName = shortNames[grade];
export const neighbors = id => adjacent(id, edges);
