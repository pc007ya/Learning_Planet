import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source = await readFile(new URL('../../route-shell.js', import.meta.url), 'utf8');

async function run({ok = true, throws = false} = {}) {
  const calls = [], status = {}, writes = [];
  const window = {__resources: {stale: true}};
  const document = {
    currentScript: {src: 'https://example.test/planet/route-shell.js'},
    getElementById: () => status,
    createElement: () => ({href: '', get outerHTML(){return `<base href="${this.href}">`;}}),
    open: () => writes.push('open'), write: text => writes.push(text), close: () => writes.push('close'),
  };
  const fetch = async (url, options) => {
    calls.push({url: url.href, cache: options?.cache});
    if (throws) throw Error('offline');
    return {ok, text: async () => '<base href="./"><main>current release</main>'};
  };
  await vm.runInNewContext(source, {document, window, fetch, URL});
  return {calls, status, writes, window};
}

test('deep-link shared HTML is revalidated without cache-busting assets or losing base path', async () => {
  const r = await run();
  assert.deepEqual(r.calls, [{url: 'https://example.test/planet/index.html', cache: 'no-cache'}]);
  assert.deepEqual(r.writes, ['open', '<base href="https://example.test/planet/"><main>current release</main>', 'close']);
  assert.equal(Object.keys(r.window.__resources).length, 0);
});

for (const options of [{ok: false}, {throws: true}]) {
  test(`failed entry remains recoverable: ${JSON.stringify(options)}`, async () => {
    const r = await run(options);
    assert.equal(r.writes.length, 0);
    assert.match(r.status.textContent, /重新整理/);
  });
}
