// After editing the image allowlist or its files, refresh their content revisions.
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
const path = new URL('../entry-image-manifest.js', import.meta.url);
const source = readFileSync(path, 'utf8');
const manifest = JSON.parse(source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1));
for (const asset of Object.keys(manifest.assets)) {
  const bytes = readFileSync(new URL(`../${asset}`, import.meta.url));
  manifest.assets[asset] = createHash('sha256').update(bytes).digest('hex').slice(0, 16);
}
writeFileSync(path, '/* Public entry artwork only; revisions are SHA-256 prefixes of the committed files. */\nself.LP_ENTRY_IMAGE_MANIFEST = ' + JSON.stringify(manifest, null, 2) + ';\n');
console.log(`Updated ${Object.keys(manifest.assets).length} image revisions.`);
