const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const admin = require('firebase-admin');

admin.initializeApp();
setGlobalOptions({ region: 'asia-east1', maxInstances: 10 });

const db = admin.firestore();
const TEACHER_DOMAIN = 'teacher.learning-planet.invalid';

function requireAdmin(request) {
  if (!request.auth || request.auth.token.role !== 'admin') {
    throw new HttpsError('permission-denied', 'Only administrators can perform this action.');
  }
}

function normalizeUsername(value) {
  const username = String(value || '').trim().toLowerCase();
  if (!/^[a-z0-9._-]{3,32}$/.test(username)) {
    throw new HttpsError('invalid-argument', 'Username must be 3-32 characters using a-z, 0-9, dot, underscore or dash.');
  }
  return username;
}

function requirePassword(value) {
  const password = String(value || '');
  if (password.length < 8) {
    throw new HttpsError('invalid-argument', 'Password must contain at least 8 characters.');
  }
  return password;
}

exports.createTeacher = onCall(async (request) => {
  requireAdmin(request);
  const data = request.data || {};
  const username = normalizeUsername(data.username);
  const password = requirePassword(data.password);
  const displayName = String(data.displayName || '').trim();
  if (!displayName) throw new HttpsError('invalid-argument', 'displayName is required.');

  const email = `${username}@${TEACHER_DOMAIN}`;
  let userRecord;
  try {
    userRecord = await admin.auth().createUser({ email, password, displayName, disabled: false });
    await admin.auth().setCustomUserClaims(userRecord.uid, { role: 'teacher' });
    await db.collection('teachers').doc(userRecord.uid).set({
      username,
      displayName,
      role: 'teacher',
      authEmail: email,
      googleEmail: null,
      googleLinked: false,
      firstLoginCompleted: false,
      enabled: true,
      assignedClassIds: Array.isArray(data.assignedClassIds) ? data.assignedClassIds : [],
      assignedCourseIds: Array.isArray(data.assignedCourseIds) ? data.assignedCourseIds : [],
      createdBy: request.auth.uid,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    return { uid: userRecord.uid, username, displayName };
  } catch (error) {
    if (userRecord?.uid) await admin.auth().deleteUser(userRecord.uid).catch(() => {});
    if (error.code === 'auth/email-already-exists') {
      throw new HttpsError('already-exists', 'This teacher username already exists.');
    }
    throw new HttpsError('internal', error.message || 'Unable to create teacher.');
  }
});

exports.updateTeacher = onCall(async (request) => {
  requireAdmin(request);
  const { uid, displayName, assignedClassIds, assignedCourseIds } = request.data || {};
  if (!uid) throw new HttpsError('invalid-argument', 'uid is required.');
  const patch = { updatedAt: admin.firestore.FieldValue.serverTimestamp() };
  if (typeof displayName === 'string' && displayName.trim()) patch.displayName = displayName.trim();
  if (Array.isArray(assignedClassIds)) patch.assignedClassIds = assignedClassIds;
  if (Array.isArray(assignedCourseIds)) patch.assignedCourseIds = assignedCourseIds;
  await db.collection('teachers').doc(uid).set(patch, { merge: true });
  if (patch.displayName) await admin.auth().updateUser(uid, { displayName: patch.displayName });
  return { ok: true };
});

exports.resetTeacherPassword = onCall(async (request) => {
  requireAdmin(request);
  const { uid, password } = request.data || {};
  if (!uid) throw new HttpsError('invalid-argument', 'uid is required.');
  await admin.auth().updateUser(uid, { password: requirePassword(password) });
  return { ok: true };
});

exports.setTeacherEnabled = onCall(async (request) => {
  requireAdmin(request);
  const { uid, enabled } = request.data || {};
  if (!uid || typeof enabled !== 'boolean') throw new HttpsError('invalid-argument', 'uid and enabled are required.');
  await admin.auth().updateUser(uid, { disabled: !enabled });
  await db.collection('teachers').doc(uid).set({ enabled, updatedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
  return { ok: true };
});
