// Fetched only after the matching Firebase custom claim is verified.
(class Backend {
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
      this.flash("✅ 教師設定已成功更新！");
    });
  }
renderBackendVals(s,allUnits,className){return {adminTabs: [{label:"我的帳號設定", go:()=>this.setState({adminTab:"settings"}),bg:"#2b1f57",fg:"#fff",border:"#ece7ff"}],
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
      })};}
})
