import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

const app = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

describe('Gacha navigation', () => {
  it('uses the shared brand logo home button on gacha screens', () => {
    const buttons = app.match(/class="gacha-home-link" onClick="\{\{ goHome \}\}"/g) || [];
    expect(buttons).toHaveLength(0);
    expect(app).toContain('class="app-home-btn" onClick="{{ goHome }}"');
    expect(app).toContain('.gacha-focus .app-home-btn{width:54px!important');
  });

  it('keeps the result and newly collected card in the space-glass visual system', () => {
    expect(app).toContain('class="gacha-result-card"');
    expect(app).toContain('backdrop-filter:blur(24px) saturate(1.35)');
    expect(app).toContain('cardClass: (copies > 0 ? "is-unlocked" : "is-locked") + (isLatest ? " is-new" : "")');
    expect(app).toContain('mixBlendMode: "normal"');
    expect(app).toContain('collectionCharacter: latest ? latest.character : this.state.collectionCharacter');
  });
});
