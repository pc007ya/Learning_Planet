import { readFileSync } from 'node:fs';
import vm from 'node:vm';

// Deliberately synthetic data for runtime contracts, never authored-content QA.
export const hostSource = readFileSync(new URL('../../index.html', import.meta.url), 'utf8');
export const scienceUnits = Array.from(vm.runInNewContext(hostSource.match(/const SCI_UNITS = \[[\s\S]*?\n\];/)[0] + ';SCI_UNITS'), u => ({ ...u }));
export const quizUnits = scienceUnits.filter(u => !u.kind);
export function syntheticContent(catalog, prefix = 'runtime-only') {
  return { version: 'synthetic-runtime-fixture-not-content-validation', tasks: [], questions: catalog.units.flatMap(u => Array.from({ length: 30 }, (_, i) => ({
    id: `${prefix}-${u.id}-q${i + 1}`, unit_id: u.id, activity_id: u.activities[i % u.activities.length].id,
    stem: `流程測試 ${u.id} 第 ${i + 1} 題`, options: ['測試甲', '測試乙', '測試丙', '測試丁'], answer_index: i % 4,
    explanation: '這是測試介面與題池的合成資料，並非教學內容。', skill: 'observe', difficulty: 1,
    original: true, review_status: 'candidate', core_practice_eligible: true,
  }))) };
}
export function legacyFixture() {
  const catalog = { kind: 'legacy_topic_catalog', sources: {}, units: quizUnits.map(u => ({
    id: u.id, title: u.title, grade: u.grade, subject: '自然科學', publisher: '原主題', semester: 0,
    school_year: null, source_id: 'legacy-topic-' + u.id,
    activities: [{ id: u.id + '-legacy-a01', title: '原主題流程測試', scope: 'legacy_topic' }],
  })) };
  return { catalog, content: syntheticContent(catalog, 'legacy-runtime-only') };
}
