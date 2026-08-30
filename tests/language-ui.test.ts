import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import vm from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

function loadHandwritingEvaluator() {
  const start = html.indexOf('function evaluateHandwritingTrace');
  const end = html.indexOf('function hasSignedToday', start);
  const context: Record<string, unknown> = { Uint8Array, Math, Number };
  vm.runInNewContext(`${html.slice(start, end)}; result = evaluateHandwritingTrace;`, context);
  return context.result as (ink: Uint8ClampedArray, mask: Uint8ClampedArray, width: number, height: number, motion: Record<string, number>) => { good: boolean; reason: string };
}

function alphaRaster(width: number, height: number, fill: (x: number, y: number) => boolean) {
  const data = new Uint8ClampedArray(width * height * 4);
  for (let y = 0; y < height; y += 1) for (let x = 0; x < width; x += 1) {
    if (fill(x, y)) data[(y * width + x) * 4 + 3] = 255;
  }
  return data;
}

describe('Language submodule visual system', () => {
  it('uses the latest cosmic shell for English and Chinese learning screens', () => {
    expect(html).toContain('language-quiz-focus');
    expect(html).toContain('useModernQuizControls');
    expect(html).toContain('images/home/planets/chinese-planet-v1.png');
    expect(html).toContain('images/home/planets/english-planet-v1.png');
  });

  it('routes English word cards to shared or dedicated concept art', () => {
    expect(html).toContain('ENGLISH_REAL_ART');
    expect(html).toContain('ENGLISH_DIRECT_SHARED_ART');
    expect(html).toContain('ENGLISH_GENERATED_V3_ART');
    expect(html).toContain('ENGLISH_CATEGORY_ART');
    for (const name of ['food', 'animals', 'people', 'school', 'abstract']) {
      expect(existsSync(new URL(`../images/english-category-v1/${name}-v1.png`, import.meta.url))).toBe(true);
    }
  });

  it('keeps the corrected English word art complete and uncropped', () => {
    const generatedDir = new URL('../images/english-generated-v3/', import.meta.url);
    const files = readdirSync(generatedDir).filter((name) => name.endsWith('-v1.webp'));
    expect(files.length).toBeGreaterThanOrEqual(96);
    for (const word of ['brown', 'five', 'cold', 'cook', 'father', 'sister', 'spoon', 'close', 'because']) {
      expect(files).toContain(`${word}-v1.webp`);
    }
    expect(html).toContain('.english-word-card img { width:100%;height:128px;object-fit:contain;object-position:center;padding:7px;box-sizing:border-box;display:block; }');
  });

  it('does not reveal a Chinese quiz answer through an emoji picture hint', () => {
    expect(html).toContain('picture: chineseHintPictureForWord(w)');
    expect(html).not.toContain('figData: { z: w.z, word: w.w.split(w.c).join("◯"), picture: "images/home/planets/chinese-planet-v1.png" }');
    expect(html).not.toContain('picture: w.i || "🖼️"');
  });

  it('maps Chinese and English prompts to one canonical shared picture bank', () => {
    const mapStart = html.indexOf('const CHINESE_SHARED_CONCEPT_BY_CHAR');
    const mapEnd = html.indexOf('});', mapStart);
    const mappings = [...html.slice(mapStart, mapEnd).matchAll(/([\p{Script=Han}]):"([a-z-]+)"/gu)];
    expect(mappings.length).toBeGreaterThanOrEqual(160);
    for (const [, , key] of mappings) expect(existsSync(new URL(`../images/language-shared-v1/${key}.webp`, import.meta.url))).toBe(true);
    expect(html).toContain('花:"flower"');
    expect(html).toContain('車:"car"');
    expect(html).toContain('雪:"snowflake"');
    expect(html).toContain('店:"shop"');
    expect(html).toContain('走:"walk"');
    expect(html).toContain('return sharedKey ? languageSharedAsset(sharedKey)');
  });

  it('keeps the complete shared visual bank and its source atlases in the project', () => {
    const sharedDir = new URL('../images/language-shared-v1/', import.meta.url);
    const sharedFiles = readFileSync(new URL('../index.html', import.meta.url), 'utf8').match(/LANGUAGE_SHARED_ASSET_DIR/g) || [];
    expect(sharedFiles.length).toBeGreaterThan(1);
    expect(readdirSync(sharedDir).filter((name) => name.endsWith('.webp')).length).toBeGreaterThanOrEqual(220);
    for (const atlas of ['nature', 'people', 'school', 'daily', 'actions', 'emotions', 'foundations']) {
      expect(existsSync(new URL(`atlases/atlas-${atlas}-v1.png`, sharedDir))).toBe(true);
    }
    for (const file of ['sun.webp', 'car.webp', 'flower.webp', 'family.webp', 'bamboo.webp', 'square.webp', 'walk.webp']) {
      expect(existsSync(new URL(file, sharedDir))).toBe(true);
    }
  });

  it('omits the picture region when an abstract Chinese word has no honest visual clue', () => {
    expect(html).toContain('if (!picture) return null;');
    expect(html).toContain('zhuyinHasPicture: !!(q && q.fig === "zhuyin" && q.figData.picture)');
    expect(html).toContain('value="{{ zhuyinHasPicture }}"');
  });

  it('uses translucent cosmic glass styling for the English grammar builder', () => {
    expect(html).toContain('class="english-grammar-hint"');
    expect(html).toContain('class="english-grammar-instruction"');
    expect(html).toContain('backdrop-filter:blur(22px) saturate(1.25)');
    expect(html).toContain('.module-focus .english-grammar-slot:nth-child(2) { --grammar-accent:144,113,255; }');
    expect(html).toContain('.module-focus .english-grammar-slot:nth-child(3) { --grammar-accent:255,107,202; }');
    expect(html).toContain('background:linear-gradient(145deg,rgba(52,199,242,.24),rgba(115,72,213,.34))');
  });

  it('applies the cosmic glass system across every English activity family', () => {
    for (const selector of [
      '.english-word-card',
      '.english-answer-grid',
      '.english-picture-question',
      '.english-pair-target',
      '.english-missing-layout',
      '.english-association-card',
    ]) expect(html).toContain(selector);
    expect(html).toContain('.english-cosmic-panel,.english-association-card');
    expect(html).toContain('section:has(.english-answer-grid)');
    expect(html).toContain('section:has(.english-picture-question)');
    expect(html).toContain('section:has(.english-missing-layout)');
    expect(html).toContain('background:transparent url("images/math-master/v1/back-arrow-v1.svg")');
  });

  it('keeps English prompt controls icon-only while preserving accessible names', () => {
    for (const handler of [
      'englishGrammarSpeak',
      'englishAssociationSpeak',
      'englishSpeakCurrent',
      'englishMatchSpeakQuestion',
      'englishMissingSpeak',
    ]) {
      expect(html).toMatch(new RegExp(`aria-label="聽(?:題目|單字)"[^>]*onClick="\\{\\{ ${handler} \\}\\}"[^>]*><img[^>]+alt=""></button>`));
    }
  });

  it('rejects a dense scribble that only touches one small part of the handwriting guide', () => {
    const evaluate = loadHandwritingEvaluator();
    const width = 100, height = 100;
    const guide = alphaRaster(width, height, (x, y) =>
      (x >= 18 && x <= 28 && y >= 12 && y <= 88)
      || (x >= 70 && x <= 80 && y >= 12 && y <= 88)
      || (y >= 45 && y <= 56 && x >= 18 && x <= 80));
    const scribble = alphaRaster(width, height, (x, y) => x >= 18 && x <= 34 && y >= 12 && y <= 42);
    const result = evaluate(scribble, guide, width, height, { points: 80, strokes: 4, pathLength: 500 });
    expect(result.good).toBe(false);
    expect(['too-short', 'position', 'incomplete', 'off-guide']).toContain(result.reason);
  });

  it('accepts a complete child-sized trace with small deviations around the guide', () => {
    const evaluate = loadHandwritingEvaluator();
    const width = 100, height = 100;
    const shape = (x: number, y: number) =>
      (x >= 18 && x <= 28 && y >= 12 && y <= 88)
      || (x >= 70 && x <= 80 && y >= 12 && y <= 88)
      || (y >= 45 && y <= 56 && x >= 18 && x <= 80);
    const guide = alphaRaster(width, height, shape);
    const trace = alphaRaster(width, height, (x, y) => shape(x - 1, y + 1));
    const result = evaluate(trace, guide, width, height, { points: 120, strokes: 3, pathLength: 260 });
    expect(result.good).toBe(true);
    expect(result.reason).toBe('matched');
  });
});
