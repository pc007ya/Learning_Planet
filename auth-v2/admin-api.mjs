import { auth, db, functions, currentRole } from './firebase-client.js';
import {doc,getDoc,setDoc,collection,getDocs,query,onSnapshot,serverTimestamp} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import {httpsCallable} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-functions.js';
async function requireRole() { const uid = auth.currentUser?.uid; if (!uid || await currentRole(true) !== 'admin' || uid !== auth.currentUser?.uid) throw new Error('Role refused'); }
export async function fetchTeachersList() {
  await requireRole();
  const q = query(collection(db, 'teachers'));
  const snap = await getDocs(q);
  const teachers = [];
  snap.forEach((d) => {
    teachers.push({ id: d.id, ...d.data() });
  });
  return teachers;
}
export async function fetchStudentsList() {
  await requireRole();
  if (await currentRole() === 'admin') {
    await reconcileStudentGoogleLinks().catch((error) => console.warn('Student Google-link reconciliation failed:', error));
  }
  const snap = await getDocs(query(collection(db, 'students')));
  const students = [];
  snap.forEach((item) => students.push({ id: item.id, ...item.data() }));
  return students;
}
export async function saveStudentPasswordMetadata(uid, passwordCustomized) {
  await requireRole();
  if (!uid || typeof passwordCustomized !== 'boolean') throw new Error('密碼狀態不完整');
  await setDoc(doc(db, 'students', uid), {
    passwordCustomized,
    updatedAt: serverTimestamp()
  }, { merge: true });
  return { saved: true };
}
export function subscribeStudentsList(callback) {
  let cancelled = false, stop;
  const uid = auth.currentUser?.uid;
  requireRole().then(() => { if (!cancelled && uid === auth.currentUser?.uid) stop = onSnapshot(query(collection(db, 'students')), (snap) => {
    const students = [];
    snap.forEach((item) => students.push({ id: item.id, ...item.data() }));
    if (!cancelled && uid === auth.currentUser?.uid) callback(students);
  }, (error) => console.warn('Cloud student directory subscription failed:', error)); }).catch(error => console.warn('Subscription refused:', error));
  return () => { cancelled = true; stop?.(); };
}
export async function saveRosterSnapshot(roster = {}) {
  await requireRole();
  await setDoc(doc(db, 'system', 'roster'), {
    ...roster,
    schemaVersion: 4,
    updatedAt: serverTimestamp()
  });
}
export async function loadRosterSnapshot() {
  await requireRole();
  const snap = await getDoc(doc(db, 'system', 'roster'));
  return snap.exists() ? snap.data() : null;
}
export function subscribeRosterSnapshot(callback) {
  let cancelled = false, stop;
  const uid = auth.currentUser?.uid;
  requireRole().then(() => { if (!cancelled && uid === auth.currentUser?.uid) stop = onSnapshot(doc(db, 'system', 'roster'), (snap) => {
    if (!cancelled && uid === auth.currentUser?.uid) callback(snap.exists() ? snap.data() : null);
  }, (error) => console.warn('Cloud roster subscription failed:', error)); }).catch(error => console.warn('Subscription refused:', error));
  return () => { cancelled = true; stop?.(); };
}
export async function createTeacher(data) { await requireRole(); return httpsCallable(functions, 'createTeacher')(data); }
export async function updateTeacher(data) { await requireRole(); return httpsCallable(functions, 'updateTeacher')(data); }
export async function deleteTeacher(data) { await requireRole(); return httpsCallable(functions, 'deleteTeacher')(data); }
export async function resetTeacherPassword(data) { await requireRole(); return httpsCallable(functions, 'resetTeacherPassword')(data); }
export async function setTeacherEnabled(data) { await requireRole(); return httpsCallable(functions, 'setTeacherEnabled')(data); }
export async function createStudent(data) { await requireRole(); return httpsCallable(functions, 'createStudent')(data); }
export async function updateStudent(data) { await requireRole(); return httpsCallable(functions, 'updateStudent')(data); }
export async function resetStudentPassword(data) { await requireRole(); return httpsCallable(functions, 'resetStudentPassword')(data); }
export async function setStudentEnabled(data) { await requireRole(); return httpsCallable(functions, 'setStudentEnabled')(data); }
export async function reconcileStudentGoogleLinks(data) { await requireRole(); return httpsCallable(functions, 'reconcileStudentGoogleLinks')(data); }
export async function updateOwnTeacherSettings(data) { await requireRole(); return httpsCallable(functions, 'updateOwnTeacherSettings')(data); }
