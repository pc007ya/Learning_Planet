'use strict';

// Run with the deployment Node version:
//   node --test test/runtime-compat.test.cjs
// These tests load the real, locked Firebase SDKs, not replacement SDK mocks.
// They deliberately exercise only paths that must reject before any I/O.
const assert = require('node:assert/strict');
const { test, after } = require('node:test');
const path = require('node:path');
const net = require('node:net');
const tls = require('node:tls');

// Discard inherited project configuration and credentials. Even an accidental
// SDK operation cannot target a real project or make a network connection.
const projectId = 'demo-learning-planet-runtime-unit';
for (const key of ['GOOGLE_APPLICATION_CREDENTIALS', 'FIREBASE_CONFIG', 'GOOGLE_CLOUD_PROJECT', 'GCLOUD_PROJECT', 'GCP_PROJECT']) {
  delete process.env[key];
}
process.env.GCLOUD_PROJECT = projectId;
process.env.GOOGLE_CLOUD_PROJECT = projectId;
process.env.FIREBASE_CONFIG = JSON.stringify({ projectId });
process.env.FIREBASE_AUTH_EMULATOR_HOST = '127.0.0.1:9';
process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:9';
process.env.GCE_METADATA_DISABLED = 'true';
const networkAttempts = [];
const originalSocketConnect = net.Socket.prototype.connect;
const originalTlsConnect = tls.connect;
function rejectNetwork() {
  networkAttempts.push('unexpected network connection');
  throw new Error('Offline runtime tests forbid all network connections.');
}
net.Socket.prototype.connect = rejectNetwork;
tls.connect = rejectNetwork;

const functions = require('../index.js');
const admin = require('firebase-admin');
const { HttpsError } = require('firebase-functions/v2/https');
const expectedNames = [
  'bootstrapFirstAdmin', 'changeMyStudentUsername', 'createStudent',
  'createTeacher', 'deleteTeacher', 'reconcileStudentGoogleLinks',
  'resetStudentPassword', 'resetTeacherPassword', 'resolveGoogleLinkConflict',
  'setStudentEnabled', 'setTeacherEnabled', 'updateOwnTeacherSettings',
  'updateStudent', 'updateTeacher'
];
const adminOnlyNames = [
  'createTeacher', 'updateTeacher', 'deleteTeacher', 'resetTeacherPassword',
  'setTeacherEnabled', 'createStudent', 'updateStudent', 'resetStudentPassword',
  'setStudentEnabled', 'reconcileStudentGoogleLinks'
];
function request(role, data = {}) {
  return { data, auth: role === null ? undefined : { uid: 'synthetic-test-user', token: role === undefined ? {} : { role } } };
}
async function rejectsCode(name, input, code) {
  await assert.rejects(async () => functions[name].run(input), (error) => {
    assert.ok(error instanceof HttpsError, `${name} must throw the real Firebase HttpsError`);
    assert.equal(error.code, code, `${name} error code`);
    return true;
  });
  assert.deepEqual(networkAttempts, [], `${name} must reject before network I/O`);
}

test('real SDK discovers exactly the fourteen callable v2 deployment endpoints', async () => {
  assert.deepEqual(Object.keys(functions).sort(), expectedNames);
  for (const [name, callable] of Object.entries(functions)) {
    assert.equal(typeof callable, 'function', name);
    assert.equal(typeof callable.run, 'function', `${name}.run`);
    assert.equal(callable.__endpoint.platform, 'gcfv2', name);
    assert.deepEqual(callable.__endpoint.region, ['asia-east1'], name);
    assert.equal(callable.__endpoint.maxInstances, 10, name);
    assert.deepEqual(callable.__endpoint.callableTrigger, {}, name);
    assert.doesNotThrow(() => JSON.stringify(callable.__endpoint), `${name} manifest is serializable`);
  }
  // Exercise the same loader used by the installed SDK's deployment discovery.
  // Resolve its private entry point relative to its public module rather than
  // assuming a node_modules layout. Dependencies are intentionally lockfile-pinned.
  const { loadStack } = require(path.join(path.dirname(require.resolve('firebase-functions')), '../runtime/loader.js'));
  const manifest = await loadStack(path.resolve(__dirname, '..'));
  assert.equal(manifest.specVersion, 'v1alpha1');
  assert.deepEqual(Object.keys(manifest.endpoints).sort(), expectedNames);
  assert.deepEqual(manifest.extensions, {});
  for (const [name, endpoint] of Object.entries(manifest.endpoints)) {
    assert.equal(endpoint.entryPoint, name);
    assert.equal(endpoint.platform, 'gcfv2');
    assert.deepEqual(endpoint.region, ['asia-east1']);
    assert.equal(endpoint.maxInstances, 10);
    assert.deepEqual(endpoint.callableTrigger, {});
  }
  assert.doesNotThrow(() => JSON.stringify(manifest));
  assert.deepEqual(networkAttempts, []);
});

test('all administrator-only callables reject every non-admin role before I/O', async (t) => {
  for (const name of adminOnlyNames) {
    for (const role of [null, undefined, 'teacher', 'student', 'guest', 'Admin', '']) {
      await t.test(`${name}: ${role === null ? 'signed out' : String(role)}`, async () => {
        await rejectsCode(name, request(role), 'permission-denied');
      });
    }
  }
});

test('self-service teacher settings reject student, missing, and unknown roles', async () => {
  for (const role of [null, undefined, 'student', 'guest', 'Admin', '']) {
    await rejectsCode('updateOwnTeacherSettings', request(role), 'permission-denied');
  }
});

test('student self-service username changes reject every non-student role', async () => {
  for (const role of [null, undefined, 'admin', 'teacher', 'guest', 'Student', '']) {
    await rejectsCode('changeMyStudentUsername', request(role), 'permission-denied');
  }
  for (const username of ['', 'ab', 'invalid user', '中文帳號', 'a'.repeat(33)]) {
    await rejectsCode('changeMyStudentUsername', request('student', { username }), 'invalid-argument');
  }
});

test('Google linking rejects unauthorized roles and all allowed roles reject a missing token locally', async () => {
  for (const role of [null, undefined, 'guest', 'Admin', '']) {
    await rejectsCode('resolveGoogleLinkConflict', request(role), 'permission-denied');
  }
  for (const role of ['admin', 'teacher', 'student']) {
    await rejectsCode('resolveGoogleLinkConflict', request(role), 'invalid-argument');
  }
});

test('administrator create validation rejects invalid usernames, short passwords, and missing names', async () => {
  for (const name of ['createTeacher', 'createStudent']) {
    for (const username of ['', 'ab', 'has spaces', 'a@b', '中文帳號', 'a'.repeat(33)]) {
      await rejectsCode(name, request('admin', { username, password: 'valid-test-password', displayName: 'Synthetic User' }), 'invalid-argument');
    }
    await rejectsCode(name, request('admin', { username: 'synthetic-user', password: '12345', displayName: 'Synthetic User' }), 'invalid-argument');
    await rejectsCode(name, request('admin', { username: 'synthetic-user', password: 'valid-test-password', displayName: '  ' }), 'invalid-argument');
  }
});

test('administrator update and password operations validate required data before I/O', async () => {
  for (const name of ['updateTeacher', 'deleteTeacher', 'resetTeacherPassword', 'setTeacherEnabled', 'updateStudent', 'resetStudentPassword', 'setStudentEnabled']) {
    await rejectsCode(name, request('admin'), 'invalid-argument');
  }
  for (const name of ['updateTeacher', 'updateStudent']) {
    await rejectsCode(name, request('admin', { uid: 'synthetic-user', username: 'not valid' }), 'invalid-argument');
    await rejectsCode(name, request('admin', { uid: 'synthetic-user', password: 'short' }), 'invalid-argument');
  }
  for (const name of ['resetTeacherPassword', 'resetStudentPassword']) {
    await rejectsCode(name, request('admin', { uid: 'synthetic-user', password: 'short' }), 'invalid-argument');
  }
  for (const name of ['setTeacherEnabled', 'setStudentEnabled']) {
    for (const enabled of [undefined, 'true', 1, null]) {
      await rejectsCode(name, request('admin', { uid: 'synthetic-user', enabled }), 'invalid-argument');
    }
  }
  await rejectsCode('deleteTeacher', request('admin', { uid: 'synthetic-test-user' }), 'failed-precondition');
});

after(async () => {
  try {
    await Promise.all(admin.apps.map((app) => app.delete()));
    assert.deepEqual(networkAttempts, [], 'No network connection is allowed, including SDK initialization/cleanup.');
  } finally {
    net.Socket.prototype.connect = originalSocketConnect;
    tls.connect = originalTlsConnect;
  }
});
