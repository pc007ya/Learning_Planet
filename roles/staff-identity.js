// Shared staff identity helpers; loaded after staff authentication only.
(function(){
const TEACHER_FACE_IMAGES = Array.from({ length: 24 }, (_, index) => `images/teacher/teacher_${String(index + 1).padStart(2, "0")}.png`);
function normalizeTeacherFace(face, fallbackIndex = 0) {
  const normalizedIndex = Math.max(0, Math.min(TEACHER_FACE_IMAGES.length - 1, Number(fallbackIndex) || 0));
  return typeof face === "string" && face.indexOf("images/teacher/") === 0
    ? face
    : TEACHER_FACE_IMAGES[normalizedIndex];
}

const TEACHER_CONFIG_STORE_KEY = "learning_planet_teacher_config_v1";
function defaultTeacherRecord(data = {}) {
  return Object.assign({
    id: "", role: "teacher", name: "王老師", account: "teacher01", password: "",
    face: TEACHER_FACE_IMAGES[1], tint: "#dff5ff", googleUid: "", email: "", lastLoginAt: ""
  }, data);
}
function defaultTeacherConfig() {
  return {
    version: 2,
    teachers: [
      defaultTeacherRecord({ id: "admin-chen", role: "admin", name: "陳老師", account: "admin", password: "", face: TEACHER_FACE_IMAGES[0], tint: "#ffe0e6" }),
      defaultTeacherRecord({ id: "teacher-wang", role: "teacher" })
    ]
  };
}
function normalizeTeacherConfig(saved) {
  const fallback = defaultTeacherConfig();
  if (!saved || typeof saved !== "object") return fallback;
  if (Array.isArray(saved.teachers)) {
    const teachers = saved.teachers.map((teacher, index) => { const record = defaultTeacherRecord(Object.assign({ id: index === 0 ? "admin-chen" : "teacher-" + index }, teacher)); record.face = normalizeTeacherFace(record.face, index); return record; });
    const adminCandidates = teachers.filter((teacher) => teacher.role === "admin");
    const admin = (adminCandidates.length ? adminCandidates : [fallback.teachers[0]]).slice().sort((left, right) => {
      const leftTime = Date.parse(left.lastLoginAt || "") || 0;
      const rightTime = Date.parse(right.lastLoginAt || "") || 0;
      const leftScore = (String(left.id || "").length > 20 ? 4 : 0) + (left.googleUid ? 2 : 0) + (String(left.id || "") !== "admin-chen" ? 1 : 0);
      const rightScore = (String(right.id || "").length > 20 ? 4 : 0) + (right.googleUid ? 2 : 0) + (String(right.id || "") !== "admin-chen" ? 1 : 0);
      return rightTime - leftTime || rightScore - leftScore;
    })[0];
    const seenIds = new Set();
    const seenAccounts = new Set();
    const regularTeachers = teachers.filter((teacher) => teacher.role !== "admin").filter((teacher) => {
      const id = String(teacher.id || "");
      const account = String(teacher.account || "").trim().toLowerCase();
      if ((id && seenIds.has(id)) || (account && seenAccounts.has(account))) return false;
      if (id) seenIds.add(id);
      if (account) seenAccounts.add(account);
      return true;
    });
    return { version: 2, teachers: [defaultTeacherRecord(Object.assign({}, admin, { role: "admin" }))].concat(regularTeachers) };
  }
  return {
    version: 2,
    teachers: [
      defaultTeacherRecord({ id: "admin-chen", role: "admin", name: saved.name || "陳老師", account: saved.account || "admin", password: "", face: normalizeTeacherFace(saved.face, 0), tint: saved.tint || "#ffe0e6", googleUid: saved.googleUid || "", email: saved.email || "", lastLoginAt: saved.lastLoginAt || "" }),
      fallback.teachers[1]
    ]
  };
}
function readTeacherConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(TEACHER_CONFIG_STORE_KEY + ":" + window.LearningPlanetAuthV2.auth.currentUser.uid) || "null");
    if (saved && typeof saved === "object") {
      const normalized = normalizeTeacherConfig(saved);
      localStorage.setItem(TEACHER_CONFIG_STORE_KEY + ":" + window.LearningPlanetAuthV2.auth.currentUser.uid, JSON.stringify(normalized));
      return normalized;
    }
  } catch (_) {}
  return defaultTeacherConfig();
}
function saveTeacherConfig(value) {
  try { localStorage.setItem(TEACHER_CONFIG_STORE_KEY + ":" + window.LearningPlanetAuthV2.auth.currentUser.uid, JSON.stringify(normalizeTeacherConfig(value))); } catch (_) {}
}
function teacherById(config, id) {
  const teachers = (config && config.teachers) || [];
  return teachers.find((teacher) => teacher.id === id) || teachers[0] || defaultTeacherConfig().teachers[0];
}


return {TEACHER_FACE_IMAGES,normalizeTeacherFace,defaultTeacherRecord,normalizeTeacherConfig,readTeacherConfig,saveTeacherConfig};
})()
