const { onCall, HttpsError } = require('firebase-functions/v2/https');
const { setGlobalOptions } = require('firebase-functions/v2');
const admin = require('firebase-admin');
const { OAuth2Client } = require('google-auth-library');

admin.initializeApp();
setGlobalOptions({ region: 'asia-east1', maxInstances: 10 });

const db = admin.firestore();
const TEACHER_DOMAIN = 'teacher.learning-planet.invalid';
const ADMIN_DOMAIN = 'admin.learning-planet.invalid';
const STUDENT_DOMAIN = 'student.learning-planet.invalid';
const GOOGLE_WEB_CLIENT_ID = '1068189320501-qq48mqdioqeltl3qfed6eqis3ha5k68a.apps.googleusercontent.com';
const googleOAuthClient = new OAuth2Client(GOOGLE_WEB_CLIENT_ID);

function requireAdmin(request) {
  if (!request.auth || request.auth.token.role !== 'admin') {
    throw new HttpsError('permission-denied', 'Only administrators can perform this action.');
  }
}

function requireAppUser(request) {
  if (!request.auth || !['admin', 'teacher', 'student'].includes(request.auth.token.role)) {
    throw new HttpsError('permission-denied', 'A Learning Planet login is required.');
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
  if (password.length < 6) {
    throw new HttpsError('invalid-argument', 'Password must contain at least 6 characters.');
  }
  return password;
}

function authEmail(username, role) {
  const domain = role === 'admin' ? ADMIN_DOMAIN : role === 'student' ? STUDENT_DOMAIN : TEACHER_DOMAIN;
  return `${username}@${domain}`;
}

async function setCredential(uid, role, username, password) {
  const updates = {};
  if (username) updates.email = authEmail(username, role);
  if (password) updates.password = requirePassword(password);
  if (Object.keys(updates).length) await admin.auth().updateUser(uid, updates);
}

exports.createTeacher = onCall(async (request) => {
  requireAdmin(request);
  const data = request.data || {};
  const username = normalizeUsername(data.username);
  const password = requirePassword(data.password);
  const displayName = String(data.displayName || '').trim();
  if (!displayName) throw new HttpsError('invalid-argument', 'displayName is required.');

  const email = authEmail(username, 'teacher');
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
      face: typeof data.face === 'string' ? data.face : '',
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
  const { uid, displayName, assignedClassIds, assignedCourseIds, username, password, face } = request.data || {};
  if (!uid) throw new HttpsError('invalid-argument', 'uid is required.');
  const patch = { updatedAt: admin.firestore.FieldValue.serverTimestamp() };
  if (typeof displayName === 'string' && displayName.trim()) patch.displayName = displayName.trim();
  if (username) {
    patch.username = normalizeUsername(username);
    patch.authEmail = authEmail(patch.username, 'teacher');
  }
  if (typeof face === 'string') patch.face = face;
  if (Array.isArray(assignedClassIds)) patch.assignedClassIds = assignedClassIds;
  if (Array.isArray(assignedCourseIds)) patch.assignedCourseIds = assignedCourseIds;
  if (patch.username || password) await setCredential(uid, 'teacher', patch.username || null, password || null);
  await db.collection('teachers').doc(uid).set(patch, { merge: true });
  if (patch.displayName) await admin.auth().updateUser(uid, { displayName: patch.displayName });
  return { ok: true };
});

exports.deleteTeacher = onCall(async (request) => {
  requireAdmin(request);
  const uid = String(request.data?.uid || '').trim();
  if (!uid) throw new HttpsError('invalid-argument', 'uid is required.');
  if (uid === request.auth.uid) throw new HttpsError('failed-precondition', 'The current administrator cannot be deleted.');

  const adminDoc = await db.collection('admins').doc(uid).get();
  if (adminDoc.exists) throw new HttpsError('permission-denied', 'Administrator accounts cannot be deleted here.');

  let userRecord = null;
  try {
    userRecord = await admin.auth().getUser(uid);
  } catch (error) {
    if (error.code !== 'auth/user-not-found') throw error;
  }
  if (userRecord?.customClaims?.role === 'admin') {
    throw new HttpsError('permission-denied', 'Administrator accounts cannot be deleted here.');
  }

  await db.collection('teachers').doc(uid).delete();
  if (userRecord) await admin.auth().deleteUser(uid);
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

exports.updateOwnTeacherSettings = onCall(async (request) => {
  if (!request.auth || !['admin', 'teacher'].includes(request.auth.token.role)) {
    throw new HttpsError('permission-denied', 'Teacher login required.');
  }
  const data = request.data || {};
  const role = request.auth.token.role;
  const collectionName = role === 'admin' ? 'admins' : 'teachers';
  const current = await db.collection(collectionName).doc(request.auth.uid).get();
  if (!current.exists || !current.data().googleLinked) {
    throw new HttpsError('permission-denied', 'Google account must be linked before editing credentials.');
  }
  const displayName = String(data.displayName || '').trim();
  const username = data.username ? normalizeUsername(data.username) : null;
  const password = data.password ? requirePassword(data.password) : null;
  if (!displayName) throw new HttpsError('invalid-argument', 'displayName is required.');
  const authPatch = { displayName };
  if (username) authPatch.email = authEmail(username, role);
  if (password) authPatch.password = password;
  try {
    await admin.auth().updateUser(request.auth.uid, authPatch);
  } catch (error) {
    if (error.code === 'auth/email-already-exists') throw new HttpsError('already-exists', 'This login account is already in use.');
    throw error;
  }
  await db.collection(collectionName).doc(request.auth.uid).set({
    displayName,
    username: username || current.data().username,
    authEmail: username ? authEmail(username, role) : (current.data().authEmail || authEmail(current.data().username, role)),
    face: typeof data.face === 'string' ? data.face : current.data().face || '',
    updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  return { ok: true };
});

exports.createStudent = onCall(async (request) => {
  requireAdmin(request);
  const data = request.data || {};
  const username = normalizeUsername(data.username);
  const password = requirePassword(data.password);
  const displayName = String(data.displayName || '').trim();
  if (!displayName) throw new HttpsError('invalid-argument', 'displayName is required.');
  const email = authEmail(username, 'student');
  try {
    let user;
    try {
      user = await admin.auth().createUser({ email, password, displayName, disabled: false });
    } catch (error) {
      if (error.code !== 'auth/email-already-exists') throw error;
      // Roster migration is deliberately idempotent: an existing account is
      // upgraded instead of creating a second student identity.
      user = await admin.auth().getUserByEmail(email);
      await admin.auth().updateUser(user.uid, { password, displayName, disabled: false });
    }
    await admin.auth().setCustomUserClaims(user.uid, { role: 'student' });
    await db.collection('students').doc(user.uid).set({
      username, displayName, role: 'student', authEmail: email,
      classId: String(data.classId || ''), seat: String(data.seat || ''),
      avatar: String(data.avatar || ''), googleLinked: false, googleEmail: null,
      firstLoginCompleted: false, enabled: true,
      createdBy: request.auth.uid,
      createdAt: admin.firestore.FieldValue.serverTimestamp(), updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    return { uid: user.uid, username, displayName };
  } catch (error) {
    throw new HttpsError('internal', error.message || 'Unable to create student.');
  }
});

exports.updateStudent = onCall(async (request) => {
  requireAdmin(request);
  const data = request.data || {};
  if (!data.uid) throw new HttpsError('invalid-argument', 'uid is required.');
  const patch = { updatedAt: admin.firestore.FieldValue.serverTimestamp() };
  ['displayName', 'classId', 'seat', 'avatar'].forEach((key) => {
    if (typeof data[key] === 'string') patch[key] = data[key].trim();
  });
  if (data.username) {
    patch.username = normalizeUsername(data.username);
    patch.authEmail = authEmail(patch.username, 'student');
  }
  if (patch.username) await setCredential(data.uid, 'student', patch.username, data.password || null);
  else if (data.password) await setCredential(data.uid, 'student', null, data.password);
  if (patch.displayName) await admin.auth().updateUser(data.uid, { displayName: patch.displayName });
  await db.collection('students').doc(data.uid).set(patch, { merge: true });
  return { ok: true };
});

exports.changeMyStudentUsername = onCall(async (request) => {
  if (!request.auth || request.auth.token.role !== 'student') {
    throw new HttpsError('permission-denied', 'Student login required.');
  }
  const uid = request.auth.uid;
  const username = normalizeUsername(request.data?.username);
  const studentRef = db.collection('students').doc(uid);
  const current = await studentRef.get();
  if (!current.exists) throw new HttpsError('not-found', 'Student profile not found.');
  const currentData = current.data() || {};
  if (currentData.usernameChangeUsed === true) {
    throw new HttpsError('failed-precondition', 'The student username has already been changed once.');
  }
  const previousUsername = normalizeUsername(currentData.username);
  if (username === previousUsername) {
    throw new HttpsError('invalid-argument', 'The new username must be different.');
  }
  const nextEmail = authEmail(username, 'student');
  const previousEmail = currentData.authEmail || authEmail(previousUsername, 'student');
  try {
    await admin.auth().updateUser(uid, { email: nextEmail });
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      throw new HttpsError('already-exists', 'This student username is already in use.');
    }
    throw new HttpsError('internal', error.message || 'Unable to update the student username.');
  }
  try {
    await studentRef.set({
      username,
      authEmail: nextEmail,
      usernameChangeUsed: true,
      usernameChangedAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  } catch (error) {
    await admin.auth().updateUser(uid, { email: previousEmail }).catch(() => {});
    throw new HttpsError('internal', 'The username was not saved. Please try again.');
  }
  return { ok: true, username, usernameChangeUsed: true };
});

exports.resetStudentPassword = onCall(async (request) => {
  requireAdmin(request);
  const { uid, password } = request.data || {};
  if (!uid) throw new HttpsError('invalid-argument', 'uid is required.');
  await setCredential(uid, 'student', null, password);
  return { ok: true };
});

exports.setStudentEnabled = onCall(async (request) => {
  requireAdmin(request);
  const { uid, enabled } = request.data || {};
  if (!uid || typeof enabled !== 'boolean') throw new HttpsError('invalid-argument', 'uid and enabled are required.');
  await admin.auth().updateUser(uid, { disabled: !enabled });
  await db.collection('students').doc(uid).set({ enabled, updatedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
  return { ok: true };
});

exports.reconcileStudentGoogleLinks = onCall(async (request) => {
  requireAdmin(request);
  const studentsSnap = await db.collection('students').get();
  const references = studentsSnap.docs.map((snap) => ({ uid: snap.id }));
  const usersByUid = new Map();
  for (let offset = 0; offset < references.length; offset += 100) {
    const result = await admin.auth().getUsers(references.slice(offset, offset + 100));
    result.users.forEach((user) => usersByUid.set(user.uid, user));
  }

  const repairs = [];
  studentsSnap.docs.forEach((snap) => {
    const current = snap.data() || {};
    const user = usersByUid.get(snap.id);
    if (!user) return;
    const googleProvider = user && user.providerData.find((provider) => provider.providerId === 'google.com');
    const googleLinked = !!googleProvider;
    const googleEmail = googleProvider?.email || null;
    if (!!current.googleLinked !== googleLinked || (current.googleEmail || null) !== googleEmail) {
      repairs.push({ ref: snap.ref, patch: {
        googleLinked,
        googleEmail,
        googleLinkCheckedAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      } });
    }
  });
  for (let offset = 0; offset < repairs.length; offset += 400) {
    const batch = db.batch();
    repairs.slice(offset, offset + 400).forEach((repair) => batch.set(repair.ref, repair.patch, { merge: true }));
    await batch.commit();
  }
  return { checked: studentsSnap.size, repaired: repairs.length };
});

exports.resolveGoogleLinkConflict = onCall(async (request) => {
  requireAppUser(request);
  const googleIdToken = String(request.data?.googleIdToken || '');
  if (!googleIdToken) throw new HttpsError('invalid-argument', 'Google identity token is required.');

  let payload;
  try {
    const ticket = await googleOAuthClient.verifyIdToken({ idToken: googleIdToken, audience: GOOGLE_WEB_CLIENT_ID });
    payload = ticket.getPayload();
  } catch (_) {
    throw new HttpsError('unauthenticated', 'Google identity verification failed.');
  }
  if (!payload?.sub || !payload?.email || payload.email_verified !== true) {
    throw new HttpsError('unauthenticated', 'A verified Google account is required.');
  }

  let conflict = null;
  try { conflict = await admin.auth().getUserByProviderUid('google.com', payload.sub); }
  catch (error) { if (error.code !== 'auth/user-not-found') throw error; }

  if (conflict && conflict.uid !== request.auth.uid) {
    const role = conflict.customClaims?.role || null;
    const docs = await Promise.all(['admins', 'teachers', 'students'].map((name) => db.collection(name).doc(conflict.uid).get()));
    if (role || docs.some((snap) => snap.exists)) {
      throw new HttpsError('already-exists', 'This Google account is already linked to another Learning Planet account.');
    }
    await admin.auth().deleteUser(conflict.uid);
  }

  const providerToLink = { uid: payload.sub, providerId: 'google.com', email: payload.email };
  if (payload.name) providerToLink.displayName = payload.name;
  if (payload.picture) providerToLink.photoURL = payload.picture;
  await admin.auth().updateUser(request.auth.uid, { providerToLink });

  const role = request.auth.token.role;
  const collectionName = role === 'admin' ? 'admins' : role === 'teacher' ? 'teachers' : 'students';
  await db.collection(collectionName).doc(request.auth.uid).set({
    googleEmail: payload.email,
    googleLinked: true,
    firstLoginCompleted: true,
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    lastLoginAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  return { ok: true, email: payload.email };
});

// One-time initialization endpoint. It is intentionally disabled after the
// first admin exists, so a public browser can never create an administrator.
exports.bootstrapFirstAdmin = onCall(async (request) => {
  const existing = await db.collection('admins').limit(1).get();
  if (!existing.empty) throw new HttpsError('failed-precondition', 'An administrator already exists.');
  const data = request.data || {};
  // The only browser-side first-run credential is the documented default.
  // All other administrator creation happens after an authenticated admin
  // signs in, through createTeacher. This prevents a visitor from choosing
  // their own administrator account during an uninitialized deployment.
  if ((data.username && String(data.username).trim().toLowerCase() !== 'admin') || (data.password && String(data.password) !== 'admin123')) {
    throw new HttpsError('permission-denied', 'Initial administrator uses the documented default credentials only.');
  }
  const username = normalizeUsername(data.username || 'admin');
  const password = requirePassword(data.password || 'admin123');
  const displayName = String(data.displayName || '系統管理者').trim();
  const email = authEmail(username, 'admin');
  let user;
  try {
    user = await admin.auth().createUser({ email, password, displayName, disabled: false });
  } catch (error) {
    if (error.code !== 'auth/email-already-exists') throw new HttpsError('internal', error.message || 'Unable to create administrator.');
    user = await admin.auth().getUserByEmail(email);
    await admin.auth().updateUser(user.uid, { password, displayName, disabled: false });
  }
  await admin.auth().setCustomUserClaims(user.uid, { role: 'admin' });
  await db.collection('admins').doc(user.uid).set({
    username, displayName, role: 'admin', authEmail: email,
    googleEmail: null, googleLinked: false, firstLoginCompleted: false,
    face: typeof data.face === 'string' ? data.face : '', enabled: true,
    createdAt: admin.firestore.FieldValue.serverTimestamp(), updatedAt: admin.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  return { uid: user.uid, username };
});
