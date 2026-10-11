// Fetched only after the matching Firebase custom claim is verified.
(class Backend {
cloudRosterPayload() {
    return {
      schemaVersion: 4,
      classes: (this.state.classes || []).map((item) => Object.assign({}, item)),
      // Student identity is canonical in students/{uid}. Keeping another
      // student array here caused stale browser data to erase whole classes.
      teachers: (this.state.teacherConfig.teachers || []).map((teacher) => ({ id: teacher.id, role: teacher.role, name: teacher.name, account: teacher.account, face: normalizeTeacherFace(teacher.face), tint: teacher.tint, googleUid: teacher.googleUid || "", email: teacher.email || "", lastLoginAt: teacher.lastLoginAt || "" }))
    };
  }
queueCloudRosterSync() {
    const authV2 = window.LearningPlanetAuthV2;
    const current = teacherById(this.state.teacherConfig, this.state.currentTeacherId);
    if (this.cloudAdminBootstrapPending || this.applyingCloudRoster || !authV2 || !authV2.saveRosterSnapshot || !this.state.teacher || !current || current.role !== "admin") return;
    clearTimeout(this.cloudRosterTimer);
    this.cloudRosterTimer = setTimeout(() => {
      authV2.saveRosterSnapshot(this.cloudRosterPayload()).catch((error) => console.warn("Cloud roster save failed:", error));
    }, 550);
  }
finishCloudAdminBootstrap() {
    if (!this.cloudAdminBootstrapPending || !this.cloudRosterLoaded || !this.cloudStudentDirectoryLoaded) return;
    this.cloudAdminBootstrapPending = false;
    this.queueCloudRosterSync();
  }
applyCloudRoster(remote) {
    if (this.applyingCloudRoster) return;
    if (!remote) {
      this.cloudRosterLoaded = true;
      this.finishCloudAdminBootstrap();
      return;
    }
    this.applyingCloudRoster = true;
    this.setState((state) => {
      const classById = new Map(STANDARD_SCHOOL_CLASSES.concat(Array.isArray(remote.classes) ? remote.classes : []).map((item) => [item.id, item]));
      const localTeachers = new Map((state.teacherConfig.teachers || []).map((teacher) => [teacher.id, teacher]));
      const teachers = Array.isArray(remote.teachers) ? remote.teachers.map((entry, index) => {
        const local = localTeachers.get(entry.id) || {};
        return defaultTeacherRecord(Object.assign({}, local, entry, { password: "", face: normalizeTeacherFace(entry.face, index) }));
      }) : state.teacherConfig.teachers;
      return { classes: Array.from(classById.values()), teacherConfig: normalizeTeacherConfig(Object.assign({}, state.teacherConfig, { teachers })) };
    }, () => {
      this.applyingCloudRoster = false;
      this.cloudRosterLoaded = true;
      saveTeacherConfig(this.state.teacherConfig);
      this.finishCloudAdminBootstrap();
    });
  }
enableCloudRosterSync() {
    const authV2 = window.LearningPlanetAuthV2;
    if (this.cloudRosterUnsubscribe || !authV2 || !authV2.subscribeRosterSnapshot) return;
    authV2.currentRole().then((role) => {
      if (role !== "admin" || this.cloudRosterUnsubscribe) return;
      this.cloudAdminBootstrapPending = true;
      this.cloudRosterLoaded = false;
      this.cloudStudentDirectoryLoaded = false;
      this.cloudRosterUnsubscribe = authV2.subscribeRosterSnapshot((remote) => this.applyCloudRoster(remote));
      if (!this.cloudStudentUnsubscribe && authV2.subscribeStudentsList) {
        this.cloudStudentUnsubscribe = authV2.subscribeStudentsList((students) => this.applyCloudStudentDirectory(students));
      }
    }).catch(() => {});
  }
applyCloudStudentDirectory(remoteStudents) {
    if (!Array.isArray(remoteStudents)) return;
    this.setState((state) => {
      const localByUid = new Map((state.students || []).map((student) => [String(student.profile && student.profile.cloudUid || ""), student]));
      const localByUsername = new Map((state.students || []).map((student) => [studentLoginAccount(student).toLowerCase(), student]));
      const activeRemote = remoteStudents.filter((remote) => remote && remote.enabled !== false && remote.id);
      const students = activeRemote.map((remote, index) => {
        const username = String(remote.username || "").trim().toLowerCase();
        const local = localByUid.get(String(remote.id)) || localByUsername.get(username) || {};
        const localProfile = Object.assign(makeProfile(), local.profile || {});
        const avatarMatch = String(remote.avatar || "").match(/avatar_(\d+)\.png/i);
        const avatarIndex = avatarMatch ? Math.max(0, Math.min(23, Number(avatarMatch[1]) - 1)) : Math.max(0, Math.min(23, Number(localProfile.cardAvatarIndex) || 0));
        const linked = !!remote.googleLinked;
        const googleUid = linked ? String(remote.id) : "";
        const email = linked ? String(remote.googleEmail || "") : "";
        const lastLoginAt = remote.lastLoginAt && typeof remote.lastLoginAt.toDate === "function" ? remote.lastLoginAt.toDate().toISOString() : (remote.lastLoginAt || localProfile.lastLoginAt || "");
        return Object.assign({}, local, {
          id: local.id || ("cloud-" + remote.id),
          name: remote.displayName || local.name || username || "學員",
          seat: remote.seat || local.seat || "",
          classId: remote.classId || local.classId || "",
          face: remote.avatar || local.face || studentAvatarImage(avatarIndex),
          tint: local.tint || TINTS[index % TINTS.length],
          googleUid,
          email,
          profile: Object.assign({}, localProfile, {
            cloudUid: String(remote.id),
            loginAccount: username || localProfile.loginAccount || "",
            cardAvatarIndex: avatarIndex,
            passwordCustomized: typeof remote.passwordCustomized === "boolean" ? remote.passwordCustomized : null,
            googleUid,
            email,
            lastLoginAt
          })
        });
      });
      return { students };
    }, () => {
      this.cloudStudentDirectoryLoaded = true;
      this.finishCloudAdminBootstrap();
    });
  }
async syncCloudRosterAccounts() {
    const authV2 = window.LearningPlanetAuthV2;
    const current = teacherById(this.state.teacherConfig, this.state.currentTeacherId);
    if (!authV2 || !current || current.role !== "admin") return;
    try {
      const cloudStudents = await authV2.fetchStudentsList();
      const byUsername = new Map(cloudStudents.map((item) => [String(item.username || "").toLowerCase(), item]));
      const updates = [];
      for (const student of this.state.students) {
        const username = studentLoginAccount(student).toLowerCase();
        let remote = byUsername.get(username);
        const payload = { displayName: student.name, username, classId: student.classId, seat: student.seat, avatar: studentAvatarImage(student.profile && student.profile.cardAvatarIndex) };
        if (remote) {
          const needsUpdate = String(remote.displayName || "") !== payload.displayName
            || String(remote.username || "").toLowerCase() !== payload.username
            || String(remote.classId || "") !== payload.classId
            || String(remote.seat || "") !== payload.seat
            || String(remote.avatar || "") !== payload.avatar;
          if (needsUpdate) await authV2.updateStudent(Object.assign({ uid: remote.id }, payload));
        }
        else {
          // New records receive a safe one-time default. The manager can set a
          // different password in 學員維護 before handing the account out.
          const created = await authV2.createStudent(Object.assign({ password: "LP2026" }, payload));
          remote = { id: created.data.uid };
        }
        updates.push({ localId: student.id, uid: remote.id });
      }
      this.setState((state) => ({ students: state.students.map((student) => {
        const linked = updates.find((item) => item.localId === student.id);
        const remote = linked && cloudStudents.find((item) => item.id === linked.uid);
        return linked ? Object.assign({}, student, {
          googleUid: remote && remote.googleLinked ? linked.uid : "",
          email: remote && remote.googleLinked ? (remote.googleEmail || "") : "",
          profile: Object.assign({}, student.profile, {
            cloudUid: linked.uid,
            googleUid: remote && remote.googleLinked ? linked.uid : "",
            email: remote && remote.googleLinked ? (remote.googleEmail || "") : "",
            lastLoginAt: remote && remote.lastLoginAt && typeof remote.lastLoginAt.toDate === "function" ? remote.lastLoginAt.toDate().toISOString() : (student.profile.lastLoginAt || "")
          })
        }) : student;
      }) }));
      this.flash("☁️ 名冊與 Firebase Authentication 已同步");
    } catch (error) { this.flash("雲端名冊同步失敗：" + (error.message || "請稍後再試")); }
  }
async bindTeacherGoogleAccount() {
    const authV2 = window.LearningPlanetAuthV2;
    if (!authV2) {
      this.flash("Firebase 模組載入中，請稍候重試");
      return;
    }
    try {
      const linked = await authV2.linkCurrentUserWithGoogle();
      const email = (linked.email || "").toLowerCase(), googleUid = linked.user.uid;
      
      const cfg = Object.assign({}, this.state.teacherConfig, { teachers: this.state.teacherConfig.teachers.map((teacher) => teacher.id === this.state.currentTeacherId ? Object.assign({}, teacher, { googleUid, email }) : teacher) });
      saveTeacherConfig(cfg);
      this.setState({ teacherConfig: cfg }, () => {
        const current = teacherById(cfg, this.state.currentTeacherId);
        if (current.role === "admin") {
          this.enableCloudRosterSync();
          this.syncCloudRosterAccounts();
        }
        this.flash("✅ 老師 Google 帳號綁定成功！(" + (email || googleUid.slice(0, 8)) + ")");
      });
    } catch (err) {
      console.error("Teacher binding error:", err);
      this.flash("綁定失敗：" + firebaseGoogleLinkErrorMessage(err));
    }
  }
unbindTeacherGoogleAccount() {
    this.flash("Google 綁定請在 Google 帳號設定中管理；平台不會在本機偽造解除綁定。 ");
  }
async saveTeacherSettings() {
    const name = String(this.state.editTeacherName || "").trim();
    const account = String(this.state.editTeacherAccount || "").trim().toLowerCase();
    const password = String(this.state.editTeacherPassword || "").trim();
    const face = normalizeTeacherFace(this.state.editTeacherFace, 0);
    if (!name) { this.flash("請輸入老師顯示名稱"); return; }
    if (!account) { this.flash("老師帳號不可為空"); return; }
    if (password && password.length < 6) { this.flash("新密碼至少需要 6 碼"); return; }
    const current = teacherById(this.state.teacherConfig, this.state.currentTeacherId);
    const editing = teacherById(this.state.teacherConfig, this.state.editingTeacherId);
    if (!current.googleUid) { this.flash("請先綁定 Google 帳號，才可以修改教師資料。"); return; }
    if (current.role !== "admin" && editing.id !== current.id) { this.flash("一般教師只能修改自己的資料。"); return; }
    if ((this.state.teacherConfig.teachers || []).some((teacher) => teacher.id !== editing.id && String(teacher.account).toLowerCase() === account)) { this.flash("此教師帳號已被使用。"); return; }
    const authV2 = window.LearningPlanetAuthV2;
    try {
      if (current.role === "admin" && editing.id !== current.id) await authV2.updateTeacher({ uid: editing.cloudUid || editing.id, displayName: name, username: account, password: password || undefined, face });
      else await authV2.updateOwnTeacherSettings({ displayName: name, username: account, password: password || undefined, face });
    } catch (error) { this.flash("更新失敗：" + (error.message || "請確認雲端權限")); return; }
    const cfg = normalizeTeacherConfig(Object.assign({}, this.state.teacherConfig, { teachers: this.state.teacherConfig.teachers.map((teacher) => teacher.id === editing.id ? Object.assign({}, teacher, { name, account, password: "", face }) : teacher) }));
    saveTeacherConfig(cfg);
    this.setState({
      teacherConfig: cfg
    }, () => {
      this.queueCloudRosterSync();
      this.flash("✅ 教師設定已成功更新！");
    });
  }
selectTeacherForSettings(id) {
    const teacher = teacherById(this.state.teacherConfig, id);
    this.setState({ editingTeacherId: teacher.id, editTeacherName: teacher.name, editTeacherAccount: teacher.account, editTeacherPassword: "", editTeacherFace: normalizeTeacherFace(teacher.face, 0) });
  }
async addTeacherAccount() {
    const current = teacherById(this.state.teacherConfig, this.state.currentTeacherId);
    const name = String(this.state.newTeacherName || "").trim();
    const account = String(this.state.newTeacherAccount || "").trim().toLowerCase();
    const password = String(this.state.newTeacherPassword || "").trim();
    if (current.role !== "admin" || !current.googleUid) { this.flash("管理者完成 Google 綁定後，才可新增教師。"); return; }
    if (!name || !account || !password) { this.flash("請填寫教師名稱、帳號與預設密碼。"); return; }
    if (password.length < 6) { this.flash("預設密碼至少需要 6 碼。"); return; }
    if (this.state.teacherConfig.teachers.some((teacher) => String(teacher.account).toLowerCase() === account)) { this.flash("此教師帳號已被使用。"); return; }
    let cloud;
    try { cloud = await window.LearningPlanetAuthV2.createTeacher({ displayName: name, username: account, password, face: TEACHER_FACE_IMAGES[0], assignedClassIds: this.state.classes.map((item) => item.id) }); }
    catch (error) { this.flash("新增失敗：" + (error.message || "請確認雲端權限")); return; }
    const teacher = defaultTeacherRecord({ id: cloud.data.uid, name, account, password: "", face: TEACHER_FACE_IMAGES[0] });
    const cfg = Object.assign({}, this.state.teacherConfig, { teachers: this.state.teacherConfig.teachers.concat(teacher) });
    saveTeacherConfig(cfg);
    this.setState({ teacherConfig: cfg, newTeacherName: "", newTeacherAccount: "", newTeacherPassword: "" }, () => {
      this.queueCloudRosterSync();
      this.flash("✅ 已新增一般教師帳號。");
    });
  }
async deleteTeacherAccount(id) {
    const current = teacherById(this.state.teacherConfig, this.state.currentTeacherId);
    const target = (this.state.teacherConfig.teachers || []).find((teacher) => teacher.id === id);
    if (current.role !== "admin") { this.flash("只有管理者可以刪除教師帳號。"); return; }
    if (!target) { this.flash("找不到這個教師帳號。"); return; }
    if (target.role === "admin" || target.id === current.id) { this.flash("管理者帳號受保護，不能刪除。"); return; }
    if (!window.confirm("確定刪除一般教師「" + target.name + "」？此操作會刪除登入帳號，無法復原。")) return;
    const authV2 = window.LearningPlanetAuthV2;
    if (!authV2 || !authV2.deleteTeacher) { this.flash("刪除服務正在載入，請稍候再試。"); return; }
    try { await authV2.deleteTeacher({ uid: target.cloudUid || target.id }); }
    catch (error) { this.flash("刪除失敗：" + (error.message || "請確認雲端權限")); return; }
    const cfg = normalizeTeacherConfig(Object.assign({}, this.state.teacherConfig, { teachers: this.state.teacherConfig.teachers.filter((teacher) => teacher.id !== target.id) }));
    const selected = cfg.teachers.find((teacher) => teacher.id === current.id) || cfg.teachers[0];
    saveTeacherConfig(cfg);
    this.setState({
      teacherConfig: cfg,
      editingTeacherId: selected.id,
      editTeacherName: selected.name,
      editTeacherAccount: selected.account,
      editTeacherPassword: "",
      editTeacherFace: normalizeTeacherFace(selected.face, 0)
    }, () => {
      this.queueCloudRosterSync();
      this.flash("✅ 已刪除一般教師帳號。");
    });
  }
updateWeeklyModule(unitId, field, value) {
    const parsed = Math.max(field === "count" ? 0 : 1, Math.min(field === "count" ? 10 : 3, Number(value) || 0));
    this.setState((s) => {
      const modules = Object.assign({}, s.weeklyConfig.modules);
      modules[unitId] = Object.assign({ count: 0, difficulty: 1 }, modules[unitId] || {}, { [field]: parsed });
      const weeklyConfig = Object.assign({}, s.weeklyConfig, { modules });
      saveWeeklyConfig(weeklyConfig);
      return { weeklyConfig };
    });
  }
updateWeeklyTime(value) {
    const timeSeconds = Math.max(10, Math.min(120, Number(value) || 45));
    this.setState((s) => {
      const weeklyConfig = Object.assign({}, s.weeklyConfig, { timeSeconds });
      saveWeeklyConfig(weeklyConfig); return { weeklyConfig };
    });
  }
async addStudent() {
    const s = this.state;
    const name = s.newName.trim();
    const raw = s.newSeat.replace(/[^0-9]/g, "");
    if (!name) { this.flash("請先輸入學生姓名"); return; }
    if (!raw) { this.flash("座號請輸入 1～99 的數字"); return; }
    const num = parseInt(raw, 10);
    if (num < 1 || num > 99) { this.flash("座號只能是 1～99"); return; }
    const seat = String(num).padStart(2, "0") + " 號";
    if (s.students.some((st) => st.classId === s.newClass && st.seat === seat)) { this.flash("這個班級已經有 " + seat); return; }
    if (s.students.some((st) => st.classId === s.newClass && st.name === name)) { this.flash("這個班級已經有同名學生：" + name); return; }
    const username = (String(this.state.newAccount || "").trim().toLowerCase() || (String(s.newClass || "").replace(/\D/g, "") + String(num).padStart(2, "0")));
    const password = String(this.state.newPassword || "LP2026");
    if (password.length < 6) { this.flash("學員密碼至少需要 6 碼"); return; }
    let cloud;
    const avatarIndex = Math.max(0, Math.min(23, Number(s.newAvatarIndex) || 0));
    const avatarImage = studentAvatarImage(avatarIndex);
    try {
      cloud = await window.LearningPlanetAuthV2.createStudent({ displayName: name, username, password, classId: s.newClass, seat, avatar: avatarImage });
      await window.LearningPlanetAuthV2.saveStudentPasswordMetadata(cloud.data.uid, password !== "LP2026");
    }
    catch (error) { this.flash("新增雲端帳號失敗：" + (error.message || "請確認管理者權限")); return; }
    this.setState((st) => ({
      students: st.students.concat({
        id: "s" + Date.now(), name, seat, classId: st.newClass,
        face: avatarImage,
        tint: TINTS[st.students.length % TINTS.length],
        profile: Object.assign(makeProfile(), { loginAccount: username, passwordCustomized: password !== "LP2026", cloudUid: cloud.data.uid, cardAvatarIndex: avatarIndex }),
      }),
      newName: "", newSeat: "", newAvatarIndex: 0, studentClassFilter: st.newClass,
    }));
    this.flash("已新增學員 " + seat + " " + name);
  }
async saveEdit() {
    const s = this.state;
    const name = s.editName.trim();
    const raw = s.editSeat.replace(/[^0-9]/g, "");
    if (!name) { this.flash("請輸入姓名"); return; }
    if (!raw) { this.flash("座號請輸入 1～99 的數字"); return; }
    const num = parseInt(raw, 10);
    if (num < 1 || num > 99) { this.flash("座號只能是 1～99"); return; }
    const seat = String(num).padStart(2, "0") + " 號";
    if (s.students.some((st) => st.id !== s.editId && st.classId === s.editClass && st.seat === seat)) { this.flash("該班級已經有 " + seat); return; }
    if (s.students.some((st) => st.id !== s.editId && st.classId === s.editClass && st.name === name)) { this.flash("該班級已經有同名學生：" + name); return; }
    const loginAccount = String(s.editAccount || "").trim();
    const loginPassword = String(s.editPassword || "");
    if (!loginAccount) { this.flash("帳號不可空白"); return; }
    if (loginPassword && loginPassword.length < 6) { this.flash("新密碼至少需要 6 碼"); return; }
    if (s.students.some((st) => st.id !== s.editId && studentLoginAccount(st).toLowerCase() === loginAccount.toLowerCase())) { this.flash("這個學員帳號已被使用"); return; }
    const existing = s.students.find((item) => item.id === s.editId);
    const cloudUid = existing && existing.profile && existing.profile.cloudUid;
    if (!cloudUid) { this.flash("此學員尚未建立雲端帳號；請先以管理者重新同步名冊。"); return; }
    try {
      await window.LearningPlanetAuthV2.updateStudent({ uid: cloudUid, displayName: name, username: loginAccount, password: loginPassword || undefined, classId: s.editClass, seat, avatar: studentAvatarImage(existing.profile && existing.profile.cardAvatarIndex) });
      if (loginPassword) await window.LearningPlanetAuthV2.saveStudentPasswordMetadata(cloudUid, loginPassword !== "LP2026");
    }
    catch (error) { this.flash("雲端更新失敗：" + (error.message || "請確認管理者權限")); return; }
    this.setState((st) => ({
      students: st.students.map((x) => x.id === st.editId ? Object.assign({}, x, { name, seat, classId: st.editClass, profile: Object.assign({}, x.profile, { loginAccount, passwordCustomized: loginPassword ? loginPassword !== "LP2026" : x.profile.passwordCustomized }) }) : x),
      studentClassFilter: st.editClass,
      editId: null, editName: "", editSeat: "", editAccount: "", editPassword: "",
    }));
    this.flash("已更新 " + seat + " " + name);
  }
async removeStudent(id, name) {
    const existing = this.state.students.find((student) => student.id === id);
    const cloudUid = existing && existing.profile && existing.profile.cloudUid;
    if (cloudUid && window.LearningPlanetAuthV2 && window.LearningPlanetAuthV2.setStudentEnabled) {
      try { await window.LearningPlanetAuthV2.setStudentEnabled({ uid: cloudUid, enabled: false }); }
      catch (error) { this.flash("雲端停用失敗：" + (error.message || "請確認管理者權限")); return; }
    }
    this.setState((s) => ({ students: s.students.filter((st) => st.id !== id), currentId: s.currentId === id ? null : s.currentId }), () => this.queueCloudRosterSync());
    this.flash("已移除 " + name + (cloudUid ? "，雲端登入已停用。" : ""));
  }
addClass() {
    const name = this.state.newClassName.trim();
    if (!name) { this.flash("請輸入班級名稱"); return; }
    if (this.state.classes.some((c) => c.name === name)) { this.flash("已經有同名班級"); return; }
    this.setState((s) => ({ classes: s.classes.concat({ id: "cls" + Date.now(), name }), newClassName: "" }));
    this.flash("已新增班級 " + name);
  }
saveClass() {
    const name = this.state.classEditName.trim();
    if (!name) { this.flash("請輸入班級名稱"); return; }
    if (this.state.classes.some((c) => c.id !== this.state.classEditId && c.name === name)) { this.flash("已經有同名班級"); return; }
    this.setState((s) => ({ classes: s.classes.map((c) => c.id === s.classEditId ? Object.assign({}, c, { name }) : c), classEditId: null, classEditName: "" }));
    this.flash("班級名稱已更新");
  }
removeClass(id, name) {
    const s = this.state;
    if (s.classes.length <= 1) { this.flash("至少要保留一個班級"); return; }
    if (s.students.some((st) => st.classId === id)) { this.flash("「" + name + "」還有學生，請先把他們分配到別班"); return; }
    this.setState({ classes: s.classes.filter((c) => c.id !== id), loginClass: s.loginClass === id ? s.classes.filter((c) => c.id !== id)[0].id : s.loginClass });
    this.flash("已刪除班級 " + name);
  }
addVocab() {
    const s = this.state;
    const ch = s.vChar.trim(), z = s.vZhuyin.trim(), w = s.vWord.trim();
    if (!ch || !z || !w) { this.setState({ vocabHint: "字、注音、語詞都要填寫", vocabHintColor: "#ff5c8a" }); return; }
    if (this.allWords().some((x) => x.c === ch)) { this.setState({ vocabHint: "「" + ch + "」已經在字庫裡了", vocabHintColor: "#ff5c8a" }); return; }
    this.setState((st) => ({
      customWords: st.customWords.concat({ c: ch, z, w, r: st.vRadical.trim() || ch, u: st.vUnit || (st.words[0] ? st.words[0].u : "自訂"), i: st.vPic.trim() || "📘", custom: true }),
      vChar: "", vZhuyin: "", vWord: "", vRadical: "", vPic: "",
      vocabHint: "已新增「" + ch + "」到字庫", vocabHintColor: "#35c98a",
    }));
    this.flash("已新增字彙「" + ch + "」");
  }
renderBackendVals(s,allUnits,className){return {      adminTabs: ((teacherById(s.teacherConfig, s.currentTeacherId).role === "admin") ? [
        { key: "weekly", label: "每週考卷" },
        { key: "students", label: "學員維護" },
        { key: "classes", label: "班級管理" },
        { key: "vocab", label: "字彙維護" },
        { key: "assign", label: "指派與獎勵" },
        { key: "settings", label: "教師設定" },
      ] : [
        { key: "settings", label: "我的帳號設定" },
      ]).map((t) => ({
        label: t.label,
        go: () => this.setState({ adminTab: t.key }),
        bg: s.adminTab === t.key ? "#2b1f57" : "#fff",
        fg: s.adminTab === t.key ? "#fff" : "#7c74a8",
        border: s.adminTab === t.key ? "#2b1f57" : "#ece7ff",
      })),
      adminStudents: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" && s.adminTab === "students",
      adminWeekly: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" && s.adminTab === "weekly",
      adminClasses: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" && s.adminTab === "classes",
      adminVocab: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" && s.adminTab === "vocab",
      adminAssign: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" && s.adminTab === "assign",
      adminSettings: s.adminTab === "settings",

      editTeacherName: s.editTeacherName,
      onEditTeacherName: (e) => this.setState({ editTeacherName: e.target.value }),
      editTeacherAccount: s.editTeacherAccount,
      onEditTeacherAccount: (e) => this.setState({ editTeacherAccount: e.target.value }),
      editTeacherPassword: s.editTeacherPassword,
      onEditTeacherPassword: (e) => this.setState({ editTeacherPassword: e.target.value }),
      editTeacherPasswordType: s.showEditTeacherPassword ? "text" : "password",
      editTeacherPasswordEye: s.showEditTeacherPassword ? "🙈" : "👁️",
      editTeacherPasswordToggleTitle: s.showEditTeacherPassword ? "隱藏新密碼" : "顯示新密碼",
      toggleEditTeacherPassword: () => this.setState({ showEditTeacherPassword: !s.showEditTeacherPassword }),
      teacherFaceOptions: TEACHER_FACE_IMAGES.map((face) => ({
        image: face,
        border: s.editTeacherFace === face ? "#58eaff" : "rgba(121,209,255,.34)",
        bg: "#102552",
        pick: () => this.setState({ editTeacherFace: face })
      })),
      teacherSettingsTitle: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" ? "教師帳號與權限中心" : "我的教師帳號與安全性設定",
      teacherSettingsDescription: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" ? "管理者可維護教師帳號與班級名冊；所有密碼都只由 Firebase Authentication 保存。" : "一般教師只能管理自己的帳號；完成 Google 綁定後，才可變更名稱、帳號與密碼。",
      teacherSettingsTarget: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" ? "管理者 · 正在管理「" + teacherById(s.teacherConfig, s.editingTeacherId).name + "」" : "一般教師 · 僅能管理本人",
      teacherProfileCardTitle: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" && s.editingTeacherId !== s.currentTeacherId ? "受管理教師基本資料" : "我的教師基本資料",
      teacherCredentialCardTitle: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" && s.editingTeacherId !== s.currentTeacherId ? "受管理教師登入帳密" : "我的登入帳密",
      isTeacherGoogleBound: !!teacherById(s.teacherConfig, s.editingTeacherId).googleUid,
      isTeacherNotGoogleBound: !teacherById(s.teacherConfig, s.editingTeacherId).googleUid,
      canBindOwnTeacherGoogle: s.editingTeacherId === s.currentTeacherId && !teacherById(s.teacherConfig, s.currentTeacherId).googleUid,
      teacherGoogleStatusLabel: teacherById(s.teacherConfig, s.editingTeacherId).googleUid ? "已綁定 Google 帳號" : (s.editingTeacherId === s.currentTeacherId ? "尚未綁定 Google 帳號" : teacherById(s.teacherConfig, s.editingTeacherId).name + " 尚未綁定 Google 帳號"),
      teacherGoogleDetailLabel: teacherById(s.teacherConfig, s.editingTeacherId).email || (teacherById(s.teacherConfig, s.editingTeacherId).googleUid ? "UID: " + teacherById(s.teacherConfig, s.editingTeacherId).googleUid : (s.editingTeacherId === s.currentTeacherId ? "綁定後才能修改帳號、密碼與顯示名稱。" : "此帳號需由該教師本人登入後綁定 Google。")),
      teacherGoogleBoundBorder: teacherById(s.teacherConfig, s.editingTeacherId).googleUid ? "rgba(52,168,83,.45)" : "#ece7ff",
      teacherGoogleBoundBg: teacherById(s.teacherConfig, s.editingTeacherId).googleUid ? "rgba(52,168,83,.08)" : "#fbfaff",
      teacherGoogleBoundColor: teacherById(s.teacherConfig, s.editingTeacherId).googleUid ? "#1d7a55" : "#2b1f57",
      bindTeacherGoogle: () => this.bindTeacherGoogleAccount(),
      unbindTeacherGoogle: () => this.unbindTeacherGoogleAccount(),
      saveTeacherSettings: () => this.saveTeacherSettings(),
      isTeacherManager: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin",
      isNotTeacherManager: teacherById(s.teacherConfig, s.currentTeacherId).role !== "admin",
      teacherSettingsLocked: !teacherById(s.teacherConfig, s.currentTeacherId).googleUid,
      teacherRoleLabel: teacherById(s.teacherConfig, s.currentTeacherId).role === "admin" ? "管理者" : "一般教師",
      teacherDirectory: (s.teacherConfig.teachers || []).map((teacher) => ({ id: teacher.id, name: teacher.name, roleLabel: teacher.role === "admin" ? "管理者" : "一般教師", account: teacher.account, google: teacher.googleUid ? ("已綁定 · " + (teacher.email || "UID: " + teacher.googleUid.slice(0, 10) + "…")) : "未綁定 · 無 Email", lastLogin: teacher.lastLoginAt ? new Date(teacher.lastLoginAt).toLocaleString("zh-TW", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }) : "尚未登入", editing: s.editingTeacherId === teacher.id, canDelete: teacher.role !== "admin" && teacher.id !== s.currentTeacherId, select: () => this.selectTeacherForSettings(teacher.id), remove: () => this.deleteTeacherAccount(teacher.id) })),
      newTeacherName: s.newTeacherName,
      newTeacherAccount: s.newTeacherAccount,
      newTeacherPassword: s.newTeacherPassword,
      changeNewTeacherName: (e) => this.setState({ newTeacherName: e.target.value }),
      changeNewTeacherAccount: (e) => this.setState({ newTeacherAccount: e.target.value }),
      changeNewTeacherPassword: (e) => this.setState({ newTeacherPassword: e.target.value }),
      newTeacherPasswordType: s.showNewTeacherPassword ? "text" : "password",
      newTeacherPasswordEye: s.showNewTeacherPassword ? "🙈" : "👁️",
      newTeacherPasswordToggleTitle: s.showNewTeacherPassword ? "隱藏預設密碼" : "顯示預設密碼",
      toggleNewTeacherPassword: () => this.setState({ showNewTeacherPassword: !s.showNewTeacherPassword }),
      addTeacherAccount: () => this.addTeacherAccount(),

      weeklyTeacherTime: s.weeklyConfig.timeSeconds,
      weeklyTimeOptions: [15, 20, 30, 45, 60, 90, 120].map((value) => ({ value, label: value + " 秒" })),
      changeWeeklyTime: (e) => this.updateWeeklyTime(e.target.value),
      weeklyTeacherGrades: [1, 2, 3].map((grade) => ({ label: ["", "一年級", "二年級", "三年級"][grade], go: () => this.setState({ weeklyTeacherGrade: grade }), bg: s.weeklyTeacherGrade === grade ? "#7c5cff" : "#fff", fg: s.weeklyTeacherGrade === grade ? "#fff" : "#7c74a8", border: s.weeklyTeacherGrade === grade ? "#7c5cff" : "#ddd5ff" })),
      weeklyModuleRows: allUnits.filter((candidate) => candidate.grade === s.weeklyTeacherGrade && candidate.kind !== "library" && candidate.kind !== "writing").map((candidate) => {
        const setup = s.weeklyConfig.modules[candidate.id] || { count: 0, difficulty: candidate.difficulty || 1 };
        return { icon: candidate.icon, title: candidate.title, subject: candidate.id.charAt(0) === "c" ? "國文" : "數學", count: setup.count || 0, difficulty: setup.difficulty || candidate.difficulty || 1,
          countOptions: Array.from({ length: 11 }, (_, value) => ({ value, label: value + " 題" })), difficultyOptions: [1, 2, 3].map((value) => ({ value, label: "⭐".repeat(value) })),
          changeCount: (e) => this.updateWeeklyModule(candidate.id, "count", e.target.value), changeDifficulty: (e) => this.updateWeeklyModule(candidate.id, "difficulty", e.target.value) };
      }),
      weeklyTeacherTotal: allUnits.filter((candidate) => candidate.grade === s.weeklyTeacherGrade).reduce((sum, candidate) => sum + Number((s.weeklyConfig.modules[candidate.id] || {}).count || 0), 0),

      studentCount: s.students.filter((st) => st.classId === s.studentClassFilter).length,
      loggedIn: s.students.filter((st) => st.classId === s.studentClassFilter && hasSignedToday(st.profile)).length,
      classOptions: s.classes.map((c) => ({ id: c.id, name: c.name })),
      studentClassFilter: s.studentClassFilter,
      onStudentClassFilter: (e) => {
        const classId = e.target.value;
        this.setState({ studentClassFilter: classId, newClass: classId, editId: null });
      },
      teacherRows: s.students.filter((st) => st.classId === s.studentClassFilter).slice().sort((a, b) => a.seat.localeCompare(b.seat, "en", { numeric: true })).map((st) => {
        const googleUid = (st.profile && st.profile.googleUid) || st.googleUid || "";
        const googleEmail = (st.profile && st.profile.email) || st.email || "";
        return {
          seat: st.seat.replace(" 號", ""),
          face: st.face, tint: st.tint, name: st.name,
          avatarImage: studentAvatarImage(st.profile && st.profile.cardAvatarIndex),
          className: className(st.classId),
          account: studentLoginAccount(st),
          password: st.profile && st.profile.passwordCustomized === true ? "已自訂" : st.profile && st.profile.passwordCustomized === false ? "LP2026" : "未確認",
          lastLogin: formatLastLogin(st.profile && st.profile.lastLoginAt),
          googleBound: !!googleUid,
          googleNotBound: !googleUid,
          googleUidFull: googleUid,
          googleUidShort: googleUid ? (googleUid.length > 10 ? googleUid.slice(0, 8) + "..." : googleUid) : "無",
          googleEmail: googleEmail || "無信箱",
          bg: hasSignedToday(st.profile) ? "#fbfaff" : "#fff6f8",
          viewing: s.editId !== st.id,
          editing: s.editId === st.id,
          edit: () => this.setState({ editId: st.id, editName: st.name, editSeat: st.seat.replace(/[^0-9]/g, ""), editClass: st.classId, editAccount: studentLoginAccount(st), editPassword: "" }),
          remove: () => this.removeStudent(st.id, st.name),
        };
      }),
      newName: s.newName, newSeat: s.newSeat, newClass: s.newClass,
      onNewName: (e) => this.setState({ newName: e.target.value }),
      onNewSeat: (e) => this.setState({ newSeat: e.target.value.replace(/[^0-9]/g, "").slice(0, 2) }),
      onNewClass: (e) => this.setState({ newClass: e.target.value }),
      newStudentAvatarOptions: Array.from({ length: 24 }, (_, index) => ({
        image: studentAvatarImage(index),
        label: "選擇第 " + (index + 1) + " 個學員頭像",
        border: s.newAvatarIndex === index ? "#56e8ff" : "rgba(115,190,235,.36)",
        bg: s.newAvatarIndex === index ? "rgba(86,232,255,.18)" : "rgba(5,22,63,.7)",
        pick: () => this.setState({ newAvatarIndex: index })
      })),
      addStudent: () => this.addStudent(),
      editName: s.editName, editSeat: s.editSeat, editClass: s.editClass, editAccount: s.editAccount, editPassword: s.editPassword,
      onEditName: (e) => this.setState({ editName: e.target.value }),
      onEditSeat: (e) => this.setState({ editSeat: e.target.value.replace(/[^0-9]/g, "").slice(0, 2) }),
      onEditClass: (e) => this.setState({ editClass: e.target.value }),
      onEditAccount: (e) => this.setState({ editAccount: e.target.value }),
      onEditPassword: (e) => this.setState({ editPassword: e.target.value }),
      cancelEdit: () => this.setState({ editId: null, editName: "", editSeat: "", editAccount: "", editPassword: "" }),
      saveEdit: () => this.saveEdit(),
      seatHint: (() => {
        const raw = s.newSeat.replace(/[^0-9]/g, "");
        if (!raw) return "座號請填 1～99";
        const seat = String(parseInt(raw, 10)).padStart(2, "0") + " 號";
        if (s.students.some((st) => st.classId === s.newClass && st.seat === seat)) return "⚠️ " + seat + " 已被使用";
        if (s.newName.trim() && s.students.some((st) => st.classId === s.newClass && st.name === s.newName.trim())) return "⚠️ 姓名重複";
        return "✓ 可使用 " + seat;
      })(),
      seatHintColor: (() => {
        const raw = s.newSeat.replace(/[^0-9]/g, "");
        if (!raw) return "#b3a9d8";
        const seat = String(parseInt(raw, 10)).padStart(2, "0") + " 號";
        const dupe = s.students.some((st) => st.classId === s.newClass && (st.seat === seat || (s.newName.trim() && st.name === s.newName.trim())));
        return dupe ? "#ff5c8a" : "#35c98a";
      })(),
      editHint: (() => {
        const name = s.editName.trim();
        const raw = s.editSeat.replace(/[^0-9]/g, "");
        if (!name) return "請輸入姓名";
        if (!raw) return "座號請填 1～99";
        const seat = String(parseInt(raw, 10)).padStart(2, "0") + " 號";
        if (s.students.some((st) => st.id !== s.editId && st.classId === s.editClass && st.seat === seat)) return "⚠️ " + seat + " 已被使用";
        if (s.students.some((st) => st.id !== s.editId && st.classId === s.editClass && st.name === name)) return "⚠️ 姓名重複";
        return "✓ 可儲存";
      })(),
      editHintColor: (() => {
        const name = s.editName.trim();
        const raw = s.editSeat.replace(/[^0-9]/g, "");
        if (!name || !raw) return "#b3a9d8";
        const seat = String(parseInt(raw, 10)).padStart(2, "0") + " 號";
        const dupe = s.students.some((st) => st.id !== s.editId && st.classId === s.editClass && (st.seat === seat || st.name === name));
        return dupe ? "#ff5c8a" : "#35c98a";
      })(),
      editGoogleUidInfo: (() => {
        const editingStudent = s.students.find((st) => st.id === s.editId);
        if (!editingStudent) return "";
        const uid = (editingStudent.profile && editingStudent.profile.googleUid) || editingStudent.googleUid;
        const email = (editingStudent.profile && editingStudent.profile.email) || editingStudent.email;
        if (uid) return "Google: " + (email || uid.slice(0, 10) + "...");
        return "Google: 未綁定";
      })(),

      newClassName: s.newClassName,
      onNewClassName: (e) => this.setState({ newClassName: e.target.value }),
      addClass: () => this.addClass(),
      classEditName: s.classEditName,
      onClassEditName: (e) => this.setState({ classEditName: e.target.value }),
      classRows: s.classes.map((c) => {
        const mates = s.students.filter((st) => st.classId === c.id);
        const editing = s.classEditId === c.id;
        return {
          name: c.name, count: mates.length,
          avgLevel: mates.length ? Math.round(mates.reduce((a, st) => a + Math.floor(st.profile.xp / 100) + 1, 0) / mates.length) : 1,
          viewing: !editing, editing,
          bg: editing ? "#f6f2ff" : "#fbfaff",
          border: editing ? "#7c5cff" : "#f0ecff",
          primaryLabel: editing ? "儲存" : "改名稱",
          primaryBg: editing ? "linear-gradient(90deg,#7c5cff,#22c8d8)" : "#fff",
          primaryFg: editing ? "#fff" : "#5b3fe0",
          primaryBorder: editing ? "0" : "1px solid #ddd5ff",
          primary: editing ? () => this.saveClass() : () => this.setState({ classEditId: c.id, classEditName: c.name }),
          secondaryLabel: editing ? "取消" : "刪除",
          secondary: editing ? () => this.setState({ classEditId: null, classEditName: "" }) : () => this.removeClass(c.id, c.name),
        };
      }),
      assignRows: s.students.slice().sort((a, b) => (a.classId + a.seat).localeCompare(b.classId + b.seat, "en", { numeric: true })).map((st) => ({
        name: st.name, seat: className(st.classId) + " " + st.seat, avatarImage: studentAvatarImage(st.profile && st.profile.cardAvatarIndex),
        classId: st.classId,
        move: (e) => {
          const target = e.target.value;
          this.setState((prev) => ({ students: prev.students.map((x) => x.id === st.id ? Object.assign({}, x, { classId: target }) : x) }));
          this.flash(st.name + " 已移到 " + className(target));
        },
      })),

      vocabTotal: this.allWords().length,
      vocabCustom: s.customWords.length,
      vocabUnits: this.unitNames(),
      vChar: s.vChar, vZhuyin: s.vZhuyin, vWord: s.vWord, vRadical: s.vRadical, vPic: s.vPic, vUnit: s.vUnit,
      onVChar: (e) => this.setState({ vChar: e.target.value }),
      onVZhuyin: (e) => this.setState({ vZhuyin: e.target.value }),
      onVWord: (e) => this.setState({ vWord: e.target.value }),
      onVRadical: (e) => this.setState({ vRadical: e.target.value }),
      onVPic: (e) => this.setState({ vPic: e.target.value }),
      onVUnit: (e) => this.setState({ vUnit: e.target.value }),
      addVocab: () => this.addVocab(),
      vocabHint: s.vocabHint || "填好之後按新增，字會立刻進入國文學習庫。",
      vocabHintColor: s.vocabHintColor,
      customWords: s.customWords.map((w) => ({
        char: w.c, zhuyin: w.z, word: w.w,
        remove: () => { this.setState((st) => ({ customWords: st.customWords.filter((x) => x.c !== w.c) })); this.flash("已刪除「" + w.c + "」"); },
      })),
      noCustom: s.customWords.length === 0,

      assignChoices: allUnits.filter((u) => u.kind !== "library").map((u) => ({
        icon: u.icon, tint: u.tint, title: u.title, sub: u.sub,
        state: s.assigned === u.id ? "指派中" : "指派",
        pick: () => { this.setState({ assigned: u.id }); this.flash("已指派「" + u.title + "」"); },
        bg: s.assigned === u.id ? "#f1e6ff" : "#fbfaff",
        border: s.assigned === u.id ? "#7c5cff" : "#f0ecff",
        fg: s.assigned === u.id ? "#5b3fe0" : "#b3a9d8",
      })),
      rewardRules: [
        { title: "每答對 1 題", note: "數學與國文相同，立即入帳", value: "+8 XP / +3 ⭐" },
        { title: "全對加碼", note: "一關全部答對", value: "+10 ⭐" },
        { title: "學習海簽到", note: "依海圖前進，第 8 站是連續獎勵", value: "5～40 ⭐" },
        { title: "等級里程碑", note: "每 100 XP 升一級，解鎖裝備", value: "免費領取" },
      ]};}
})
