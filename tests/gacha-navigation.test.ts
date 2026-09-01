import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const app = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

describe('Gacha navigation', () => {
  it('keeps an explicit home button on both gacha screens', () => {
    const buttons = app.match(/class="gacha-home-link" onClick="\{\{ goHome \}\}"/g) || [];
    expect(buttons).toHaveLength(2);
    expect(app).toContain('aria-label="返回學習星球主頁">← 回主頁</button>');
    expect(app).toContain('.gacha-focus .gacha-home-link{position:fixed');
  });
});
