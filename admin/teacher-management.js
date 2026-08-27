// admin/teacher-management.js
import {
  fetchTeachersList,
  createTeacher,
  updateTeacher,
  resetTeacherPassword,
  setTeacherEnabled
} from '../auth-v2/firebase-client.js';

export async function loadAllTeachers() {
  try {
    return await fetchTeachersList();
  } catch (error) {
    console.error('[Admin] Failed to load teachers:', error);
    throw error;
  }
}

export async function handleCreateTeacher({ username, password, displayName, assignedClassIds = [], assignedCourseIds = [] }) {
  if (!username || !password || !displayName) {
    throw new Error('請填寫完整教師名稱、帳號與初始密碼');
  }
  if (password.length < 8) {
    throw new Error('密碼長度至少需要 8 碼');
  }
  const result = await createTeacher({
    username,
    password,
    displayName,
    assignedClassIds,
    assignedCourseIds
  });
  return result.data;
}

export async function handleUpdateTeacher({ uid, displayName, assignedClassIds, assignedCourseIds }) {
  if (!uid) throw new Error('缺少教師 UID');
  const result = await updateTeacher({
    uid,
    displayName,
    assignedClassIds,
    assignedCourseIds
  });
  return result.data;
}

export async function handleResetTeacherPassword({ uid, password }) {
  if (!uid || !password) throw new Error('請輸入新密碼');
  if (password.length < 8) throw new Error('密碼長度至少需要 8 碼');
  const result = await resetTeacherPassword({ uid, password });
  return result.data;
}

export async function handleToggleTeacherEnabled({ uid, enabled }) {
  if (!uid) throw new Error('缺少教師 UID');
  const result = await setTeacherEnabled({ uid, enabled });
  return result.data;
}

window.LearningPlanetTeacherManagement = {
  loadAllTeachers,
  handleCreateTeacher,
  handleUpdateTeacher,
  handleResetTeacherPassword,
  handleToggleTeacherEnabled
};
