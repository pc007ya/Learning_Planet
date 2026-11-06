import * as first from './grade1.mjs';
import * as second from './grade2.mjs';
import * as third from './grade3.mjs';
import { fourth, fifth, sixth } from './upper-grades.mjs';
import { visuals as firstVisuals, routeVisuals as firstRoutes } from './visuals.mjs';

export const gradeNames = ['', '一年級', '二年級', '三年級', '四年級', '五年級', '六年級'];
export const shortNames = ['', '小一', '小二', '小三', '小四', '小五', '小六'];
export const mapVersion = '20261106-grades456';
export const catalog = [null, { ...first, visuals: firstVisuals, routeVisuals: firstRoutes }, second, third, fourth, fifth, sixth];
export function mapPath(grade, node) {
  const params = new URLSearchParams({ v: mapVersion });
  if (node) params.set('node', node);
  return `math-knowledge-grade${grade}.html?${params}`;
}
