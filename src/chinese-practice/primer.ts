import contents from './primer-kangxuan-115-upper.json';
import type { Filters } from './model';
export const PRIMER = contents;
export const hasPrimer = (filters: Filters) => filters.year === PRIMER.year && filters.semester === PRIMER.semester && filters.grade === PRIMER.grade && filters.publisher === PRIMER.publisher;
export const textbookBookLabel = (filters: Filters) => `第${(filters.grade - 1) * 2 + (filters.semester === '下' ? 2 : 1)}冊（國字課文）`;
