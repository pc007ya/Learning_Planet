import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

describe('Result summary', () => {
  it('keeps reward values on one consistently styled line', () => {
    expect(html).toContain('<strong>＋{{ animatedXp }} XP</strong>');
    expect(html).toContain('<strong>＋{{ animatedCoins }} 星星幣</strong>');
    expect(html).toContain('.reward-counter strong>.sc-interp{display:inline!important');
    expect(html).toContain('font:inherit!important;line-height:inherit!important');
    expect(html).toContain('.reward-counter.xp strong>.sc-interp{color:#6effc4!important}');
    expect(html).toContain('.reward-counter.coin strong>.sc-interp{color:#ffd96f!important}');
  });

  it('removes the redundant standard-result bonus row', () => {
    expect(html).not.toContain('<p class="result-bonus">{{ resultBonusLabel }}</p>');
  });

  it('matches weekly preflight rewards to the space-glass result style', () => {
    expect(html).toContain('class="weekly-preflight-stats"');
    expect(html).toContain('class="weekly-preflight-stat xp"');
    expect(html).toContain('class="weekly-preflight-stat coin"');
    expect(html).toContain('class="weekly-preflight-coin"');
    expect(html).toContain('.weekly-preflight-stat{position:relative;overflow:hidden');
    expect(html).toContain('--weekly-stat-value:#6effc4');
    expect(html).toContain('--weekly-stat-value:#ffd96f');
  });

  it('keeps weekly result review readable and return actions always available', () => {
    expect(html).toContain('class="weekly-review-card {{ row.className }}"');
    expect(html).toContain('className: row.correct ? "is-correct" : "is-wrong"');
    expect(html).toContain('class="weekly-review-answer"');
    expect(html).toContain('class="weekly-review-explain"');
    expect(html).toContain('class="weekly-result-footer"');
    expect(html).toContain('<span>返回學習星球</span>');
    expect(html).toContain('<p class="result-bonus">基礎獎勵 ＋{{ weeklyBaseXp }} XP　·　高分加成 ＋{{ weeklyBonusXp }} XP</p>\n          <div class="result-actions">');
  });

  it('slows the complete result sequence by thirty percent', () => {
    expect(html).toContain('animation:resultCardIn .715s');
    expect(html).toContain('animation:resultStarPop .546s');
    expect(html).toContain('animation:resultItemIn .585s 1.04s');
    expect(html).toContain('animation:coinDrop 1.56s 1.755s');
    expect(html).toContain('const ready = elapsed >= 3120;');
    expect(html).toContain('(elapsed - 1170) / 806');
    expect(html).toContain('(elapsed - 1690) / 676');
  });
});
