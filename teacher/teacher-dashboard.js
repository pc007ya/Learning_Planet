// teacher/teacher-dashboard.js
import { db, doc, getDoc, changeMyPassword } from '../auth-v2/firebase-client.js';

export async function loadTeacherProfile(uid) {
  if (!uid) throw new Error('缺少教師識別碼');
  const snap = await getDoc(doc(db, 'teachers', uid));
  if (!snap.exists()) {
    throw new Error('找不到該教師資料');
  }
  return { id: snap.id, ...snap.data() };
}

export function filterTeacherClasses(classesList, assignedClassIds = []) {
  if (!Array.isArray(assignedClassIds) || assignedClassIds.length === 0) return [];
  return classesList.filter((c) => assignedClassIds.includes(c.id));
}

export function filterTeacherStudents(studentsList, assignedClassIds = []) {
  if (!Array.isArray(assignedClassIds) || assignedClassIds.length === 0) return [];
  return studentsList
    .filter((st) => assignedClassIds.includes(st.classId))
    .map((st) => ({
      id: st.id,
      name: st.name,
      seat: st.seat,
      face: st.face,
      tint: st.tint,
      classId: st.classId,
      profile: {
        xp: st.profile?.xp || 0,
        coins: st.profile?.coins || 0,
        streak: st.profile?.streak || 0,
        todayCount: st.profile?.todayCount || 0,
        correctTotal: st.profile?.correctTotal || 0,
        cardAvatarIndex: st.profile?.cardAvatarIndex || 0,
        lastLoginAt: st.profile?.lastLoginAt || null
      }
      // Note: Plain passwords, accounts, and auth credentials are intentionally NOT included.
    }));
}

export async function updateOwnPassword(newPassword) {
  return await changeMyPassword(newPassword);
}

window.LearningPlanetTeacherWorkspace = {
  loadTeacherProfile,
  filterTeacherClasses,
  filterTeacherStudents,
  updateOwnPassword
};
