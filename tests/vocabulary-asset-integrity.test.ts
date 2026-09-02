import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

function gradeWords(grade: number) {
  return JSON.parse(readFileSync(new URL(`../data/english-words-grade${grade}-v2.json`, import.meta.url), 'utf8')).words as Array<{ word: string; image: string }>;
}

describe('Vocabulary visual integrity', () => {
  it('keeps every declared English vocabulary source available for all grades', () => {
    for (const grade of [1, 2, 3]) {
      for (const word of gradeWords(grade)) {
        expect(existsSync(new URL(word.image, root)), `grade ${grade}: ${word.word}`).toBe(true);
      }
    }
  });

  it('uses each available grade-two English illustration before any category fallback', () => {
    const words = gradeWords(2);
    const generated = words.filter((word) => word.image.startsWith('images/english-generated-v4/'));
    expect(generated).toHaveLength(433);
    generated.forEach((word) => expect(existsSync(new URL(word.image, root))).toBe(true));
    expect(html).toContain('if (existing.indexOf("images/english-cards/words-v2/") === 0 || existing.indexOf("images/english-generated-v1/") === 0) return existing;');
  });

  it('keeps grade-one fallback visuals word-specific instead of category-shared', () => {
    const words = gradeWords(1);
    const sourceCards = words.filter((word) => word.image.startsWith('images/english-cards/words-v2/'));
    expect(sourceCards.length).toBeGreaterThanOrEqual(400);
    sourceCards.forEach((word) => expect(existsSync(new URL(word.image, root))).toBe(true));
  });

  it('uses only existing semantic picture hints for Chinese vocabulary', () => {
    const words = JSON.parse(readFileSync(new URL('../chinese-words.json', import.meta.url), 'utf8')) as Array<{ c: string }>;
    const mappingBody = html.match(/const CHINESE_SHARED_CONCEPT_BY_CHAR = Object\.freeze\(\{([\s\S]*?)\n\}\);/)?.[1] || '';
    const mappings = [...mappingBody.matchAll(/([\u3400-\u9fff]):"([^"]+)"/g)].map((match) => [match[1], match[2]] as const);
    const concepts = new Map(mappings);
    expect(concepts.size).toBeGreaterThanOrEqual(160);
    words.filter((word) => concepts.has(word.c)).forEach((word) => {
      const concept = concepts.get(word.c)!;
      const v2 = new URL(`../images/language-shared-v2/${concept}-v1.webp`, import.meta.url);
      const v1 = new URL(`../images/language-shared-v1/${concept}.webp`, import.meta.url);
      expect(existsSync(v2) || existsSync(v1), word.c).toBe(true);
    });
  });

  it('gives every Chinese grade-two, English grade-two, and experiment unit its own icon', () => {
    const unitRows = [
      ['c3', 'chinese-grade2-library-v2.png'], ['c4', 'chinese-grade2-quiz-v2.png'], ['c6', 'chinese-grade2-writing-v2.png'],
      ['e5', 'english-grade2-library-v2.png'], ['e6', 'english-grade2-scramble-v2.png'], ['e7', 'english-grade2-match-v2.png'], ['e8', 'english-grade2-chain-v2.png'], ['e10', 'english-grade2-grammar-v2.png'], ['e17', 'english-grade2-association-v2.png'],
      ['exp-dissolve', 'experiment-dissolve-v2.png'], ['exp-magnet', 'experiment-magnet-v2.png'], ['exp-magnet-ii', 'experiment-magnet-ii-v2.png'], ['exp-plant-water', 'experiment-plant-water-v2.png'], ['exp-day-night', 'experiment-day-night-v2.png'], ['exp-earth-orbit', 'experiment-earth-orbit-v2.png'],
    ];
    for (const [id, filename] of unitRows) {
      const row = html.match(new RegExp(`\\{ id: "${id}",[^\\n]+`))?.[0] || '';
      const path = `images/subject-unit-icons/v2/${filename}`;
      expect(row).toContain(`art: "${path}"`);
      expect(existsSync(new URL(`../${path}`, import.meta.url))).toBe(true);
    }
  });
});
