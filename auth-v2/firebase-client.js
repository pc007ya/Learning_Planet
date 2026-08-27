import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  linkWithPopup,
  signOut,
  onAuthStateChanged,
  getIdTokenResult
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-functions.js';

const TEACHER_DOMAIN = 'teacher.learning-planet.invalid';
const ADMIN_DOMAIN = 'admin.learning-planet.invalid';

async function resolveFirebaseConfig() {
  if (window.LEARNING_PLANET_FIREBASE_CONFIG) return window.LEARNING_PLANET_FIREBASE_CONFIG;

  try {
    const response = await fetch('/__/firebase/init.json', { cache: 'no-store' });
    if (response.ok) return await response.json();
  } catch (_) {
    // GitHub Pages does not provide Firebase Hosting's reserved init endpoint.
  }

  throw new Error(
    '找不到 Firebase Web 設定。Firebase Hosting 可自動讀取 /__/firebase/init.json；GitHub Pages 請先設定 window.LEARNING_PLANET_FIREBASE_CONFIG。'
  );
}

const firebaseConfig = await resolveFirebaseConfig();
const app = initializeApp(firebaseConfig);
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
  const domain = role === 'admin' ? ADMIN_DOMAIN : TEACHER_DOMAIN;
  return `${safe}@${domain}`;
}

export async function passwordLogin(username, password, role) {
  const credential = await signInWithEmailAndPassword(auth, loginEmailFor(username, role), password);
  const token = await getIdTokenResult(credential.user, true);
  const actualRole = token.claims.role || null;
  if (actualRole !== role) {
    await signOut(auth);
    throw new Error(`此帳號不是 ${role} 權限`);
  }
  return credential.user;
}

export async function currentRole(forceRefresh = false) {
  if (!auth.currentUser) return null;
  const token = await getIdTokenResult(auth.currentUser, forceRefresh);
  return token.claims.role || null;
}

export async function linkCurrentUserWithGoogle() {
  if (!auth.currentUser) throw new Error('尚未登入');
  const result = await linkWithPopup(auth.currentUser, googleProvider);
  const role = await currentRole(true);
  const email = result.user.providerData.find((p) => p.providerId === 'google.com')?.email || result.user.email || null;
  const collectionName = role === 'admin' ? 'admins' : 'teachers';

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
  if (!['admin', 'teacher'].includes(role)) return;
  const collectionName = role === 'admin' ? 'admins' : 'teachers';
  await setDoc(doc(db, collectionName, auth.currentUser.uid), {
    lastLoginAt: serverTimestamp()
  }, { merge: true });
}

export async function loadMyProfile() {
  if (!auth.currentUser) return null;
  const role = await currentRole();
  if (!['admin', 'teacher'].includes(role)) return null;
  const collectionName = role === 'admin' ? 'admins' : 'teachers';
  const snap = await getDoc(doc(db, collectionName, auth.currentUser.uid));
  return snap.exists() ? { id: snap.id, ...snap.data(), role } : { id: auth.currentUser.uid, role };
}

export const createTeacher = httpsCallable(functions, 'createTeacher');
export const updateTeacher = httpsCallable(functions, 'updateTeacher');
export const resetTeacherPassword = httpsCallable(functions, 'resetTeacherPassword');
export const setTeacherEnabled = httpsCallable(functions, 'setTeacherEnabled');

export { onAuthStateChanged, signOut };
