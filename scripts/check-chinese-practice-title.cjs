/*
 * Read-only title/provenance regression checks against source and built JS.
 * Run from anywhere: node scripts/check-chinese-practice-title.cjs
 * This is a minimal mocked DOM, not browser, visual, layout, or PDF-file QA.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const repo = path.resolve(__dirname, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(repo, 'src/chinese-practice/lessons-115-upper.json'), 'utf8'));
const target = catalog.find(lesson => lesson.id === '0101031150105');
const expectedLabel = '115上・3年級・翰林・第5課 為梨花撐傘';

function oldEntry(lesson, index = 0) {
  return {
    ...lesson.vocabulary[index],
    id: `${lesson.id}:${index}`,
    lessonId: lesson.id,
    source: `${lesson.year}${lesson.semester}・${lesson.grade}年級・${lesson.publisher}・${lesson.number === 0 ? '前導單元' : `第${lesson.number}課`} ${lesson.title}`,
    sourceUrl: lesson.sourceUrl,
    omitted: [],
  };
}

function savedState(selections) {
  return {
    filters: { year: 115, semester: '上', grade: 3, publisher: '翰林' },
    categories: ['生字'], selections, overrides: {}, layout: 'low',
    name: '', date: '', allowBlank: false,
  };
}

function runApp(mode, saved) {
  const handlers = {};
  const root = { innerHTML: '', addEventListener: (event, listener) => { handlers[event] = listener; } };
  const storage = new Map([['lp-chinese-practice-v1', JSON.stringify(saved)]]);
  const context = vm.createContext({
    console, URL, URLSearchParams,
    sessionStorage: { getItem: key => storage.get(key), setItem: (key, value) => storage.set(key, value) },
    document: { querySelector: selector => selector === '#practice-app' ? root : null, fonts: { ready: Promise.resolve() } },
    window: { scrollTo() {}, print() {}, close() {} },
    location: { search: '' },
  });
  const cache = new Map();
  function load(file) {
    if (!path.extname(file)) file += '.ts';
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports: {} };
    cache.set(file, module);
    if (file.endsWith('.json')) {
      module.exports = JSON.parse(fs.readFileSync(file, 'utf8'));
      return module.exports;
    }
    const js = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
    }).outputText;
    const wrapper = vm.runInContext(`(function(require,module,exports){${js}\n})`, context, { filename: file });
    wrapper(specifier => load(path.resolve(path.dirname(file), specifier)), module, module.exports);
    return module.exports;
  }
  if (mode === 'source') load(path.join(repo, 'src/chinese-practice/app.ts'));
  else {
    const file = path.join(repo, 'modules/chinese-practice/chinese-practice.js');
    vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
  }
  return { root, handlers, storage };
}

async function check(mode, selections, expectAppendix) {
  const { root, handlers, storage } = runApp(mode, savedState(selections));
  assert(root.innerHTML.includes('第 5 課 為梨花撐傘</h3>'), `${mode}: corrected card heading`);
  assert(root.innerHTML.includes(target.sourceNote), `${mode}: original-source discrepancy note remains available`);
  assert(!root.innerHTML.includes('第 5 課 為梨花撐傘用</h3>'), `${mode}: no stale card heading`);
  const restored = JSON.parse(storage.get('lp-chinese-practice-v1'));
  assert.equal(restored.selections[0].source, expectedLabel, `${mode}: saved selection receives canonical display label`);
  assert.equal(restored.selections[0].sourceUrl, target.sourceUrl, `${mode}: original source URL preserved`);
  assert.deepEqual(restored.selections.map(entry => entry.id), selections.map(entry => entry.id), `${mode}: selection identity/order preserved`);
  await handlers.click({ target: { closest: () => ({ dataset: { action: 'preview' } }) } });
  assert(root.innerHTML.includes(expectedLabel), `${mode}: corrected workbook source label`);
  assert(root.innerHTML.includes(target.sourceUrl), `${mode}: workbook source URL preserved`);
  assert(!root.innerHTML.includes('為梨花撐傘用'), `${mode}: no stale workbook title`);
  assert.equal(root.innerHTML.includes('教材來源與選取詞條'), expectAppendix, `${mode}: correct inline/appendix branch`);
  console.log(`PASS ${mode}: card + legacy-session migration + ${expectAppendix ? 'appendix' : 'inline'} workbook HTML provenance`);
}

(async () => {
  assert.equal(target.title, '為梨花撐傘用');
  assert.equal(target.displayTitle, '為梨花撐傘');
  for (const mode of ['source', 'bundle']) {
    await check(mode, [oldEntry(target)], false);
    await check(mode, [oldEntry(target), oldEntry(catalog[0]), oldEntry(catalog[1])], true);
  }
  console.log('PASS all 4 scenarios. No browser, visual, layout, or generated-PDF validation was performed.');
})().catch(error => { console.error(error); process.exitCode = 1; });
