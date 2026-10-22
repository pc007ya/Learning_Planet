'use strict';

// Integration tests deliberately require an explicit opt-in, a demo-* project,
// and loopback Auth/Firestore endpoints. NEVER run against a real project.
// Example (from functions/, with Firebase emulators already running):
// RUN_FIREBASE_EMULATOR_TESTS=1 GCLOUD_PROJECT=demo-learning-planet-node22 \
// FIREBASE_AUTH_EMULATOR_HOST=127.0.0.1:9099 FIRESTORE_EMULATOR_HOST=127.0.0.1:8080 \
// node --test test/emulator-compat.node.cjs
// Optional: FUNCTIONS_EMULATOR_HOST=127.0.0.1:5001 tests HTTP callable transport.
// Use a clean, disposable demo project. Only records created by this suite are
// cleaned up; the suite never flushes an emulator or touches real credentials.
const assert = require('node:assert/strict');
const { test } = require('node:test');
const net = require('node:net');
const tls = require('node:tls');

function loopbackEndpoint(value, name) {
  assert.ok(typeof value === 'string' && /^(127\.0\.0\.1|localhost|\[::1\]):[0-9]+$/.test(value), `${name} must explicitly specify a loopback host:port`);
  const url = new URL(`http://${value}`);
  assert.ok(Number(url.port) >= 1 && Number(url.port) <= 65535, `${name} must specify a valid port`);
  return url.origin;
}

function installLoopbackOnlyGuard() {
  const originalSocketConnect = net.Socket.prototype.connect;
  const originalTlsConnect = tls.connect;
  const blocked = [];
  function verify(args) {
    const first = Array.isArray(args[0]) ? args[0][0] : args[0];
    const host = first && typeof first === 'object' ? first.host : typeof args[1] === 'string' ? args[1] : undefined;
    if (!['localhost', '127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(host)) {
      blocked.push(String(host));
      throw new Error(`Emulator tests forbid non-loopback network access (${host}).`);
    }
  }
  net.Socket.prototype.connect = function (...args) {
    verify(args);
    return originalSocketConnect.apply(this, args);
  };
  tls.connect = function (...args) {
    verify(args);
    return originalTlsConnect.apply(this, args);
  };
  return {
    blocked,
    restore() {
      net.Socket.prototype.connect = originalSocketConnect;
      tls.connect = originalTlsConnect;
    }
  };
}

test('Node runtime compatibility against disposable Firebase emulators', {
  skip: process.env.RUN_FIREBASE_EMULATOR_TESTS !== '1' && 'Set RUN_FIREBASE_EMULATOR_TESTS=1 with demo-project loopback emulators.',
  timeout: 120000
}, async (t) => {
  // All validation precedes SDK loading, authentication, and network access.
  const projectId = process.env.GCLOUD_PROJECT || process.env.GOOGLE_CLOUD_PROJECT;
  assert.match(projectId || '', /^demo-[a-z0-9-]+$/, 'Only an explicit demo-* project is allowed.');
  for (const key of ['GCLOUD_PROJECT', 'GOOGLE_CLOUD_PROJECT', 'GCP_PROJECT']) {
    if (process.env[key]) assert.equal(process.env[key], projectId, `Conflicting ${key}`);
  }
  const authOrigin = loopbackEndpoint(process.env.FIREBASE_AUTH_EMULATOR_HOST, 'FIREBASE_AUTH_EMULATOR_HOST');
  loopbackEndpoint(process.env.FIRESTORE_EMULATOR_HOST, 'FIRESTORE_EMULATOR_HOST');
  const functionsOrigin = process.env.FUNCTIONS_EMULATOR_HOST
    ? loopbackEndpoint(process.env.FUNCTIONS_EMULATOR_HOST, 'FUNCTIONS_EMULATOR_HOST') : null;
  if (process.env.FIREBASE_CONFIG) {
    assert.equal(JSON.parse(process.env.FIREBASE_CONFIG).projectId, projectId, 'FIREBASE_CONFIG must identify the same demo project.');
  }
  delete process.env.GOOGLE_APPLICATION_CREDENTIALS;
  process.env.GCLOUD_PROJECT = projectId;
  process.env.GOOGLE_CLOUD_PROJECT = projectId;
  process.env.FIREBASE_CONFIG = JSON.stringify({ projectId });
  process.env.GCE_METADATA_DISABLED = 'true';
  // Do not route localhost fetches through an inherited HTTP proxy.
  process.env.NO_PROXY = 'localhost,127.0.0.1,::1';
  process.env.no_proxy = process.env.NO_PROXY;
  const network = installLoopbackOnlyGuard();
  const functions = require('../index.js');
  const admin = require('firebase-admin');
  const auth = admin.auth();
  const db = admin.firestore();
  const ownedUsers = new Set();
  const ownedDocuments = new Set();
  const password = 'Synthetic-password-22';
  const suffix = `${Date.now().toString(36)}${process.pid}`;
  let administrator, teacher, student, adminRequest, teacherRequest, studentRequest;
  let teacherUsername = `teacher-${suffix}`;
  let studentUsername = `student-${suffix}`;

  t.after(async () => {
    try {
      // Cleanup is scoped to exact synthetic IDs created in this run.
      for (const path of ownedDocuments) await db.doc(path).delete();
      for (const uid of ownedUsers) {
        await auth.deleteUser(uid).catch((error) => {
          if (error.code !== 'auth/user-not-found') throw error;
        });
      }
      await Promise.all(admin.apps.map((app) => app.delete()));
      assert.deepEqual(network.blocked, [], 'No non-loopback connection may be attempted.');
    } finally {
      network.restore();
    }
  });

  function own(user, collection) {
    ownedUsers.add(user.uid);
    ownedDocuments.add(`${collection}/${user.uid}`);
    return user;
  }
  function withData(identity, data = {}) {
    return { data, auth: identity && identity.auth };
  }
  async function call(name, identity, data) {
    return functions[name].run(withData(identity, data));
  }
  async function rejectsCode(name, identity, data, code) {
    await assert.rejects(() => call(name, identity, data), (error) => {
      assert.equal(error.code, code);
      return true;
    });
  }
  async function signIn(email, suppliedPassword = password) {
    const response = await fetch(`${authOrigin}/identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=synthetic-emulator-key`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password: suppliedPassword, returnSecureToken: true }),
      signal: AbortSignal.timeout(10000)
    });
    const body = await response.json();
    if (!response.ok) {
      const error = new Error(body.error?.message || `Auth emulator HTTP ${response.status}`);
      error.code = body.error?.message;
      throw error;
    }
    const token = await auth.verifyIdToken(body.idToken);
    assert.equal(token.aud, projectId);
    return { idToken: body.idToken, auth: { uid: token.uid, token } };
  }
  async function profile(collection, uid) {
    const snap = await db.collection(collection).doc(uid).get();
    assert.equal(snap.exists, true);
    return snap.data();
  }
  function email(username, role) {
    return `${username}@${role}.learning-planet.invalid`;
  }

  // Fail the suite immediately if a shared sandbox cannot reach the emulators;
  // do not let later dependent cases appear to pass with missing identities.
  assert.equal((await auth.listUsers(1)).users.length, 0, 'Use a clean disposable Auth emulator project.');
  assert.equal((await db.collection('admins').limit(1).get()).empty, true, 'Use a clean disposable Firestore emulator project.');

  await t.test('fresh demo project and first-admin bootstrap work exactly once', async () => {
    await rejectsCode('bootstrapFirstAdmin', null, { username: 'unexpected-admin' }, 'permission-denied');
    administrator = own(await call('bootstrapFirstAdmin', null, {}), 'admins');
    assert.equal(administrator.username, 'admin');
    adminRequest = await signIn(email('admin', 'admin'), 'admin123');
    assert.equal(adminRequest.auth.token.role, 'admin');
    assert.equal(adminRequest.auth.uid, administrator.uid);
    await rejectsCode('bootstrapFirstAdmin', null, {}, 'failed-precondition');
  });
  assert.ok(adminRequest, 'Cannot continue without a verified synthetic administrator.');

  await t.test('administrator creates teacher and student, with Auth claims and Firestore profiles', async () => {
    teacher = own(await call('createTeacher', adminRequest, {
      username: ` ${teacherUsername.toUpperCase()} `, password, displayName: ' Synthetic Teacher ',
      assignedClassIds: ['demo-class'], assignedCourseIds: ['demo-course'], face: 'demo-face'
    }), 'teachers');
    assert.equal(teacher.username, teacherUsername);
    assert.equal(teacher.displayName, 'Synthetic Teacher');
    student = own(await call('createStudent', adminRequest, {
      username: studentUsername, password, displayName: 'Synthetic Student', classId: 'demo-class', seat: '7', avatar: 'demo-avatar'
    }), 'students');
    teacherRequest = await signIn(email(teacherUsername, 'teacher'));
    studentRequest = await signIn(email(studentUsername, 'student'));
    assert.equal(teacherRequest.auth.token.role, 'teacher');
    assert.equal(studentRequest.auth.token.role, 'student');
    for (const [collection, record, role] of [['teachers', teacher, 'teacher'], ['students', student, 'student']]) {
      const data = await profile(collection, record.uid);
      assert.equal(data.role, role);
      assert.equal(data.enabled, true);
      assert.equal(data.createdBy, administrator.uid);
      assert.equal(data.googleLinked, false);
      assert.equal(data.firstLoginCompleted, false);
      assert.ok(data.createdAt.toMillis() > 0);
      assert.ok(data.updatedAt.toMillis() > 0);
      assert.equal((await auth.getUser(record.uid)).customClaims.role, role);
    }
    assert.deepEqual((await profile('teachers', teacher.uid)).assignedClassIds, ['demo-class']);
  });
  assert.ok(teacherRequest && studentRequest, 'Cannot continue without verified synthetic teacher and student identities.');

  await t.test('verified teacher/student identities cannot invoke any administrator-only callable', async () => {
    const names = ['createTeacher', 'updateTeacher', 'deleteTeacher', 'resetTeacherPassword', 'setTeacherEnabled', 'createStudent', 'updateStudent', 'resetStudentPassword', 'setStudentEnabled', 'reconcileStudentGoogleLinks'];
    for (const identity of [null, teacherRequest, studentRequest]) {
      for (const name of names) await rejectsCode(name, identity, {}, 'permission-denied');
    }
    await rejectsCode('changeMyStudentUsername', teacherRequest, { username: 'unused-name' }, 'permission-denied');
    await rejectsCode('changeMyStudentUsername', adminRequest, { username: 'unused-name' }, 'permission-denied');
    await rejectsCode('updateOwnTeacherSettings', studentRequest, {}, 'permission-denied');
    for (const identity of [adminRequest, teacherRequest]) {
      await rejectsCode('updateOwnTeacherSettings', identity, { displayName: 'Synthetic Name' }, 'permission-denied');
    }
  });

  await t.test('teacher duplicate names reject, student roster creation is idempotent', async () => {
    await rejectsCode('createTeacher', adminRequest, { username: teacherUsername, password, displayName: 'Duplicate Teacher' }, 'already-exists');
    const repeated = await call('createStudent', adminRequest, { username: studentUsername, password, displayName: 'Repeated Student' });
    assert.equal(repeated.uid, student.uid);
    assert.equal((await profile('students', student.uid)).displayName, 'Repeated Student');
    assert.equal((await auth.getUser(student.uid)).customClaims.role, 'student');
  });

  await t.test('administrator updates teacher and student credentials and profile fields', async () => {
    teacherUsername = `teacher2-${suffix}`;
    studentUsername = `student2-${suffix}`;
    await call('updateTeacher', adminRequest, {
      uid: teacher.uid, username: teacherUsername, password: 'Updated-teacher-22', displayName: 'Updated Teacher',
      assignedClassIds: ['demo-class-2'], assignedCourseIds: ['demo-course-2'], face: 'updated-face'
    });
    await call('updateStudent', adminRequest, {
      uid: student.uid, username: studentUsername, password: 'Updated-student-22', displayName: 'Updated Student',
      classId: ' demo-class-2 ', seat: ' 8 ', avatar: ' updated-avatar '
    });
    const teacherData = await profile('teachers', teacher.uid);
    const studentData = await profile('students', student.uid);
    assert.equal(teacherData.authEmail, email(teacherUsername, 'teacher'));
    assert.deepEqual(teacherData.assignedCourseIds, ['demo-course-2']);
    assert.equal(teacherData.face, 'updated-face');
    assert.equal(studentData.authEmail, email(studentUsername, 'student'));
    assert.equal(studentData.classId, 'demo-class-2');
    assert.equal(studentData.seat, '8');
    assert.equal(studentData.avatar, 'updated-avatar');
    assert.equal((await auth.getUser(teacher.uid)).displayName, 'Updated Teacher');
    assert.equal((await auth.getUser(student.uid)).displayName, 'Updated Student');
    teacherRequest = await signIn(email(teacherUsername, 'teacher'), 'Updated-teacher-22');
    studentRequest = await signIn(email(studentUsername, 'student'), 'Updated-student-22');
  });

  await t.test('password reset invalidates the previous password for both roles', async () => {
    for (const [role, user, username, oldPassword] of [
      ['Teacher', teacher, teacherUsername, 'Updated-teacher-22'],
      ['Student', student, studentUsername, 'Updated-student-22']
    ]) {
      await call(`reset${role}Password`, adminRequest, { uid: user.uid, password });
      await assert.rejects(() => signIn(email(username, role.toLowerCase()), oldPassword));
      const identity = await signIn(email(username, role.toLowerCase()));
      assert.equal(identity.auth.uid, user.uid);
      if (role === 'Teacher') teacherRequest = identity;
      else studentRequest = identity;
    }
  });

  await t.test('disabling and re-enabling teacher and student accounts synchronizes Auth and Firestore', async () => {
    for (const [role, collection, user, username] of [
      ['Teacher', 'teachers', teacher, teacherUsername], ['Student', 'students', student, studentUsername]
    ]) {
      await call(`set${role}Enabled`, adminRequest, { uid: user.uid, enabled: false });
      assert.equal((await auth.getUser(user.uid)).disabled, true);
      assert.equal((await profile(collection, user.uid)).enabled, false);
      await assert.rejects(() => signIn(email(username, role.toLowerCase())), /USER_DISABLED/);
      await call(`set${role}Enabled`, adminRequest, { uid: user.uid, enabled: true });
      assert.equal((await auth.getUser(user.uid)).disabled, false);
      assert.equal((await profile(collection, user.uid)).enabled, true);
      assert.equal((await signIn(email(username, role.toLowerCase()))).auth.uid, user.uid);
    }
  });

  await t.test('linked teacher and admin can update their own settings without changing role', async () => {
    // This fixture sets only a synthetic local flag. It does not simulate or
    // claim to test Google's real OAuth token verification or provider linking.
    for (const [collection, identity, username, displayName] of [
      ['teachers', teacherRequest, teacherUsername, 'Teacher Self Service'],
      ['admins', adminRequest, 'admin', 'Admin Self Service']
    ]) {
      await db.collection(collection).doc(identity.auth.uid).update({ googleLinked: true });
      await call('updateOwnTeacherSettings', identity, { username, displayName, face: 'self-service-face' });
      const data = await profile(collection, identity.auth.uid);
      assert.equal(data.displayName, displayName);
      assert.equal(data.face, 'self-service-face');
      assert.equal((await auth.getUser(identity.auth.uid)).customClaims.role, identity.auth.token.role);
    }
  });

  await t.test('student username collision leaves Auth and Firestore unchanged', async () => {
    const occupied = own(await call('createStudent', adminRequest, {
      username: `occupied-${suffix}`, password, displayName: 'Synthetic Occupied Student'
    }), 'students');
    await rejectsCode('changeMyStudentUsername', studentRequest, { username: occupied.username }, 'already-exists');
    assert.equal((await auth.getUser(student.uid)).email, email(studentUsername, 'student'));
    assert.equal((await profile('students', student.uid)).username, studentUsername);
    assert.notEqual((await profile('students', student.uid)).usernameChangeUsed, true);
  });

  await t.test('Firestore save failure rolls the student Auth email back without consuming the one-time change', async () => {
    const ref = db.collection('students').doc(student.uid);
    const proto = Object.getPrototypeOf(ref);
    const originalSet = proto.set;
    let injected = 0;
    const mock = t.mock.method(proto, 'set', function (data, ...args) {
      if (this.path === ref.path && data.usernameChangeUsed === true) {
        injected += 1;
        return Promise.reject(new Error('Synthetic emulator-only write failure'));
      }
      return originalSet.call(this, data, ...args);
    });
    try {
      await rejectsCode('changeMyStudentUsername', studentRequest, { username: `rollback-${suffix}` }, 'internal');
    } finally {
      mock.mock.restore();
    }
    assert.equal(injected, 1, 'The failure must occur after the real Auth email change.');
    assert.equal((await auth.getUser(student.uid)).email, email(studentUsername, 'student'));
    const data = await profile('students', student.uid);
    assert.equal(data.username, studentUsername);
    assert.notEqual(data.usernameChangeUsed, true);
    assert.equal((await signIn(email(studentUsername, 'student'))).auth.uid, student.uid);
  });

  await t.test('student can change their username once, but cannot reuse or change it twice', async () => {
    await rejectsCode('changeMyStudentUsername', studentRequest, { username: studentUsername }, 'invalid-argument');
    studentUsername = `renamed-${suffix}`;
    const result = await call('changeMyStudentUsername', studentRequest, { username: ` ${studentUsername.toUpperCase()} ` });
    assert.deepEqual(result, { ok: true, username: studentUsername, usernameChangeUsed: true });
    assert.equal((await auth.getUser(student.uid)).email, email(studentUsername, 'student'));
    const data = await profile('students', student.uid);
    assert.equal(data.usernameChangeUsed, true);
    assert.ok(data.usernameChangedAt.toMillis() > 0);
    await rejectsCode('changeMyStudentUsername', studentRequest, { username: `twice-${suffix}` }, 'failed-precondition');
    studentRequest = await signIn(email(studentUsername, 'student'));
  });

  await t.test('Google-link reconciliation handles unlinked synthetic students without external OAuth', async () => {
    const result = await call('reconcileStudentGoogleLinks', adminRequest, {});
    assert.equal(result.checked, 2);
    assert.equal(result.repaired, 0);
    assert.equal(result.migrated, 0);
    for (const identity of [adminRequest, teacherRequest, studentRequest]) {
      await rejectsCode('resolveGoogleLinkConflict', identity, {}, 'invalid-argument');
    }
  });

  await t.test('callable HTTP transport verifies emulator ID tokens and role guards', { skip: !functionsOrigin && 'Set FUNCTIONS_EMULATOR_HOST to test the HTTP transport.' }, async () => {
    async function httpCall(identity, data) {
      const response = await fetch(`${functionsOrigin}/${projectId}/asia-east1/setTeacherEnabled`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', ...(identity ? { Authorization: `Bearer ${identity.idToken}` } : {}) },
        body: JSON.stringify({ data }), signal: AbortSignal.timeout(30000)
      });
      return { status: response.status, body: await response.json() };
    }
    for (const identity of [null, teacherRequest, studentRequest]) {
      const denied = await httpCall(identity, { uid: teacher.uid, enabled: true });
      assert.equal(denied.status, 403);
      assert.equal(denied.body.error.status, 'PERMISSION_DENIED');
    }
    const allowed = await httpCall(adminRequest, { uid: teacher.uid, enabled: true });
    assert.equal(allowed.status, 200);
    assert.deepEqual(allowed.body.result, { ok: true });
  });

  await t.test('teacher deletion protects administrators and removes only the synthetic teacher', async () => {
    await rejectsCode('deleteTeacher', adminRequest, { uid: administrator.uid }, 'failed-precondition');
    await call('deleteTeacher', adminRequest, { uid: teacher.uid });
    assert.equal((await db.collection('teachers').doc(teacher.uid).get()).exists, false);
    await assert.rejects(() => auth.getUser(teacher.uid), (error) => error.code === 'auth/user-not-found');
    await call('deleteTeacher', adminRequest, { uid: teacher.uid });
    assert.equal((await auth.getUser(administrator.uid)).customClaims.role, 'admin');
  });
});
