// Fail closed before credentials are loaded for a runtime-only deployment.
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const base = process.argv[2];
assert.match(base || '', /^[a-f0-9]{40}$/, 'A verified full base commit is required.');
const git = (...args) => execFileSync('git', args, { encoding: 'utf8' });
const allowed = new Set([
  '.github/workflows/firebase-backend-deploy.yml', 'firebase.json',
  'functions/package.json', 'functions/package-lock.json',
  'functions/scripts/verify-runtime-scope.cjs', 'functions/scripts/verify-deployed-runtime.cjs',
  'functions/test/runtime-compat.test.cjs', 'functions/test/emulator-compat.test.cjs'
]);
const paths = git('diff', '--name-only', base, 'HEAD').trim().split('\n').filter(Boolean);
assert.ok(paths.length, 'Runtime-only deployment must have an auditable diff.');
for (const path of paths) assert.ok(allowed.has(path), `Unexpected runtime-only change: ${path}`);
for (const path of ['firebase.json', 'functions/package.json', 'functions/package-lock.json']) {
  const before = JSON.parse(git('show', `${base}:${path}`));
  const after = JSON.parse(fs.readFileSync(path, 'utf8'));
  if (path === 'firebase.json') {
    assert.equal(after.functions.runtime, 'nodejs22');
    delete before.functions.runtime; delete after.functions.runtime;
  } else if (path.endsWith('package-lock.json')) {
    assert.equal(after.packages[''].engines.node, '22');
    delete before.packages[''].engines.node; delete after.packages[''].engines.node;
  } else {
    assert.equal(after.engines.node, '22');
    delete before.engines.node; delete after.engines.node;
  }
  assert.deepEqual(after, before, `${path}: only the Node runtime may change.`);
}
console.log(`Runtime-only scope verified: ${paths.length} paths, no function logic, dependencies, rules, or data migration changes.`);
