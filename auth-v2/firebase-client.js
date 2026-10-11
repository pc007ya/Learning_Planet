import { initializeApp, getApps, getApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  linkWithPopup,
  signOut,
  onAuthStateChanged,
  getIdTokenResult,
  updatePassword
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  runTransaction,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-functions.js';

const TEACHER_DOMAIN = 'teacher.learning-planet.invalid';
const ADMIN_DOMAIN = 'admin.learning-planet.invalid';
const STUDENT_DOMAIN = 'student.learning-planet.invalid';

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCVXHP1mgnD3WOtxGBnHW3dHa1PH3F8g-k",
  authDomain: "learnplanet-cce52.firebaseapp.com",
  projectId: "learnplanet-cce52",
  storageBucket: "learnplanet-cce52.firebasestorage.app",
  messagingSenderId: "1068189320501",
  appId: "1:1068189320501:web:ed64ec200f6eb853cbf87c",
  measurementId: "G-TNCBCHSRMW"
};

async function resolveFirebaseConfig() {
  if (window.LEARNING_PLANET_FIREBASE_CONFIG) return window.LEARNING_PLANET_FIREBASE_CONFIG;

  try {
    const saved = localStorage.getItem("LEARNING_PLANET_FIREBASE_CONFIG");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.apiKey) return parsed;
    }
  } catch (_) {}

  try {
    const response = await fetch('/__/firebase/init.json', { cache: 'no-store' });
    if (response.ok) return await response.json();
  } catch (_) {
    // GitHub Pages does not provide Firebase Hosting's reserved init endpoint.
  }

  return DEFAULT_FIREBASE_CONFIG;
}

const firebaseConfig = await resolveFirebaseConfig();
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app, 'asia-east1');
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

function normalizedUsername(username) {
  return String(username || '').trim().toLowerCase().replace(/[^a-z0-9._-]/g, '');
}

export function loginEmailFor(username, role) {
  const safe = normalizedUsername(username);
  if (!safe) throw new Error('帳號格式不正確');
  const domain = role === 'admin' ? ADMIN_DOMAIN : role === 'student' ? STUDENT_DOMAIN : TEACHER_DOMAIN;
  return `${safe}@${domain}`;
}

export async function passwordLogin(username, password, role) {
  const credential = await signInWithEmailAndPassword(auth, loginEmailFor(username, role), password);
  const token = await getIdTokenResult(credential.user, true);
  const actualRole = token.claims.role || null;
  if (actualRole !== role) {
    await signOut(auth);
    const label = role === 'admin' ? '管理員' : role === 'teacher' ? '教師' : '學員';
    throw new Error(`此帳號不是 ${label} 權限`);
  }
  return credential.user;
}

export async function recoverPasswordWithGoogle(username, role, newPassword) {
  const safeUsername = normalizedUsername(username);
  if (!safeUsername) throw new Error('請輸入要恢復的帳號');
  if (!['staff', 'student'].includes(role)) throw new Error('帳號類型不正確');
  if (!newPassword || newPassword.length < 6) throw new Error('新密碼至少需要 6 碼');

  const credential = await signInWithPopup(auth, googleProvider);
  const token = await getIdTokenResult(credential.user, true);
  const actualRole = token.claims.role || null;
  const roleMatches = role === 'staff' ? ['admin', 'teacher'].includes(actualRole) : actualRole === 'student';
  if (!roleMatches) {
    await signOut(auth);
    throw new Error('這個 Google 帳號不屬於所選的帳號類型');
  }

  const collectionName = actualRole === 'admin' ? 'admins' : actualRole === 'teacher' ? 'teachers' : 'students';
  const snap = await getDoc(doc(db, collectionName, credential.user.uid));
  const profile = snap.exists() ? snap.data() : null;
  if (!profile || normalizedUsername(profile.username) !== safeUsername || !profile.googleLinked) {
    await signOut(auth);
    throw new Error('Google 帳號與輸入的學習星球帳號不相符');
  }

  await updatePassword(credential.user, newPassword);
  await setDoc(doc(db, collectionName, credential.user.uid), {
    passwordRecoveredAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  }, { merge: true }).catch(() => {});
  await signOut(auth);
  return { ok: true };
}

export async function currentRole(forceRefresh = false) {
  if (!auth.currentUser) return null;
  const token = await getIdTokenResult(auth.currentUser, forceRefresh);
  return token.claims.role || null;
}

export async function linkCurrentUserWithGoogle() {
  if (!auth.currentUser) throw new Error('尚未登入');
  let result;
  let recoveredEmail = null;
  try {
    result = await linkWithPopup(auth.currentUser, googleProvider);
  } catch (error) {
    const conflict = ['auth/credential-already-in-use', 'auth/account-exists-with-different-credential'].includes(error?.code);
    const credential = conflict ? GoogleAuthProvider.credentialFromError(error) : null;
    if (!credential?.idToken) throw error;
    const resolved = await resolveGoogleLinkConflict({ googleIdToken: credential.idToken });
    recoveredEmail = resolved.data?.email || null;
    await auth.currentUser.reload();
    result = { user: auth.currentUser };
  }
  const role = await currentRole(true);
  const email = recoveredEmail || result.user.providerData.find((p) => p.providerId === 'google.com')?.email || result.user.email || null;
  const collectionName = role === 'admin' ? 'admins' : role === 'teacher' ? 'teachers' : 'students';

  await setDoc(doc(db, collectionName, result.user.uid), {
    googleEmail: email,
    googleLinked: true,
    firstLoginCompleted: true,
    updatedAt: serverTimestamp(),
    lastLoginAt: serverTimestamp()
  }, { merge: true });

  return { user: result.user, email, role };
}

export async function touchProfileLogin() {
  if (!auth.currentUser) return;
  const role = await currentRole();
  if (!['admin', 'teacher', 'student'].includes(role)) return;
  const collectionName = role === 'admin' ? 'admins' : role === 'teacher' ? 'teachers' : 'students';
  await setDoc(doc(db, collectionName, auth.currentUser.uid), {
    lastLoginAt: serverTimestamp()
  }, { merge: true });
}

export async function loadMyProfile() {
  if (!auth.currentUser) return null;
  const role = await currentRole();
  if (!['admin', 'teacher', 'student'].includes(role)) return null;
  const collectionName = role === 'admin' ? 'admins' : role === 'teacher' ? 'teachers' : 'students';
  const snap = await getDoc(doc(db, collectionName, auth.currentUser.uid));
  return snap.exists() ? { id: snap.id, ...snap.data(), role } : { id: auth.currentUser.uid, role };
}

export async function changeMyPassword(newPassword) {
  if (!auth.currentUser) throw new Error('尚未登入');
  if (!newPassword || newPassword.length < 6) throw new Error('密碼長度至少需要 6 碼');
  await updatePassword(auth.currentUser, newPassword);
  return { ok: true };
}







// The learner may update only their own cloud save.  Credentials are never
// included here: Firebase Authentication is the sole password store.
export async function saveMyStudentProgress(progress = {}) {
  if (!auth.currentUser || await currentRole() !== 'student') throw new Error('學員登入後才能同步進度');
  // Password login already identifies the learner through Firebase Auth.
  // Google linking is optional and must not gate the learner's cloud save.
  const allowed = ['xp', 'coins', 'inventory', 'profile', 'avatar', 'lastLoginAt'];
  const patch = { updatedAt: serverTimestamp() };
  allowed.forEach((key) => { if (Object.prototype.hasOwnProperty.call(progress, key)) patch[key] = progress[key]; });
  const studentRef = doc(db, 'students', auth.currentUser.uid);
  await runTransaction(db, async (transaction) => {
    const snap = await transaction.get(studentRef);
    const current = snap.exists() ? snap.data() : {};
    const existingXpValues = [current.xp, current.profile?.xp].map(Number).filter((value) => Number.isFinite(value) && value >= 0);
    const requestedXpValues = [patch.xp, patch.profile?.xp].map(Number).filter((value) => Number.isFinite(value) && value >= 0);
    const protectedXp = Math.max(0, ...existingXpValues, ...requestedXpValues);
    if (Object.prototype.hasOwnProperty.call(patch, 'xp') || Object.prototype.hasOwnProperty.call(patch, 'profile')) {
      patch.xp = protectedXp;
      patch.profile = { ...(patch.profile || {}), xp: protectedXp };
    }
    transaction.set(studentRef, patch, { merge: true });
  });
  return { saved: true };
}



// The roster is shared configuration, never a credential store.  Only an
// administrator with a Firebase custom claim can write it (also enforced by
// firestore.rules); teachers may read it for their assigned classes.


export async function saveWeeklyResult(result = {}) {
  if (!auth.currentUser || await currentRole() !== 'student') throw new Error('只有學員可以提交週考成績');
  const testId = String(result.testId || '').trim();
  if (!testId) throw new Error('週考識別碼不可為空');
  const safeTestId = testId.replace(/[^a-zA-Z0-9._-]/g, '-').slice(0, 80);
  const payload = {
    userId: auth.currentUser.uid,
    testId,
    classId: String(result.classId || ''),
    title: String(result.title || ''),
    answers: Array.isArray(result.answers) ? result.answers : [],
    correct: Number(result.correct) || 0,
    total: Number(result.total) || 0,
    score: Number(result.score) || 0,
    subjectScores: result.subjectScores && typeof result.subjectScores === 'object' ? result.subjectScores : {},
    baseXp: Number(result.baseXp) || 0,
    bonusXp: Number(result.bonusXp) || 0,
    earnedXp: Number(result.earnedXp) || 0,
    earnedCoins: Number(result.earnedCoins) || 0,
    duration: Number(result.duration) || 0,
    completedAt: serverTimestamp()
  };
  await setDoc(doc(db, 'weekly_results', `${auth.currentUser.uid}_${safeTestId}`), payload, { merge: true });
}















export const changeMyStudentUsername = httpsCallable(functions, 'changeMyStudentUsername');

export const bootstrapFirstAdmin = httpsCallable(functions, 'bootstrapFirstAdmin');
export const resolveGoogleLinkConflict = httpsCallable(functions, 'resolveGoogleLinkConflict');

export {
  onAuthStateChanged,
  signOut,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
  onSnapshot
};

// Global export for vanilla runtime interoperability

let roleApiNames = [], roleApiGeneration = 0;
export function clearRoleApi() {
  roleApiGeneration++;
  for (const name of roleApiNames) delete window.LearningPlanetAuthV2[name];
  roleApiNames = [];
}
export async function loadRoleApi(role) {
  const generation = roleApiGeneration, uid = auth.currentUser?.uid;
  if (!uid || !['teacher','admin'].includes(role) || await currentRole(true) !== role) throw new Error('Role refused');
  const api = await import('./' + role + '-api.mjs');
  if (generation !== roleApiGeneration || uid !== auth.currentUser?.uid || await currentRole(true) !== role) throw new Error('Session changed');
  for (const name of roleApiNames) delete window.LearningPlanetAuthV2[name];
  roleApiNames = Object.keys(api);
  for (const [name, fn] of Object.entries(api)) {
    window.LearningPlanetAuthV2[name] = (...args) => {
      if (generation !== roleApiGeneration || uid !== auth.currentUser?.uid) throw new Error('Session changed');
      return fn(...args);
    };
  }
}
window.LearningPlanetAuthV2 = {
  loadRoleApi, clearRoleApi,
  auth,
  db,
  functions,
  passwordLogin,
  recoverPasswordWithGoogle,
  currentRole,
  linkCurrentUserWithGoogle,
  touchProfileLogin,
  loadMyProfile,
  changeMyPassword,
  saveMyStudentProgress,
  saveWeeklyResult,
  changeMyStudentUsername,
  bootstrapFirstAdmin,
  resolveGoogleLinkConflict,
  onAuthStateChanged,
  signOut
};
