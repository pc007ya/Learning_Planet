import { auth, db, functions, currentRole } from './firebase-client.js';
import {doc,getDoc,setDoc,collection,getDocs,query,onSnapshot,serverTimestamp} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import {httpsCallable} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-functions.js';
async function requireRole() { const uid = auth.currentUser?.uid; if (!uid || await currentRole(true) !== 'teacher' || uid !== auth.currentUser?.uid) throw new Error('Role refused'); }
export async function updateOwnTeacherSettings(data) { await requireRole(); return httpsCallable(functions, 'updateOwnTeacherSettings')(data); }
