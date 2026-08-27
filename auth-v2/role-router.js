// auth-v2/role-router.js
import { currentRole, auth } from './firebase-client.js';
import { getAuthState, authLogout } from './auth-state.js';

export async function resolveCurrentRole(forceRefresh = false) {
  return await currentRole(forceRefresh);
}

export async function requireAdmin() {
  const role = await resolveCurrentRole(true);
  if (role !== 'admin') {
    throw new Error('存取受限：需要管理員權限');
  }
  return true;
}

export async function requireTeacher() {
  const role = await resolveCurrentRole(true);
  if (role !== 'teacher') {
    throw new Error('存取受限：需要教師權限');
  }
  return true;
}

export async function requireStudent() {
  const role = await resolveCurrentRole(false);
  if (role === 'admin' || role === 'teacher') {
    throw new Error('此為學生學習專屬區域');
  }
  return true;
}

export function getRecommendedScreen(role, isFirstLogin = false) {
  if (role === 'admin') return 'admin';
  if (role === 'teacher') {
    return isFirstLogin ? 'teacher-binding' : 'teacher-dashboard';
  }
  return 'home';
}

window.LearningPlanetRoleRouter = {
  resolveCurrentRole,
  requireAdmin,
  requireTeacher,
  requireStudent,
  getRecommendedScreen
};
