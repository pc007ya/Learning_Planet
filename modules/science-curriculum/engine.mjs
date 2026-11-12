import { drawQuestionIds, reconcileQuestionPool } from './rotation.mjs';
// Non-destructive corrections and core exclusions preserve original question rows
// and all saved answer snapshots. They affect only newly prepared practice.
function resolveQuestionPolicy(content, errors = []) {
  const rows = content.questions || [], policy = content.question_policy;
  if (policy === undefined) return { questions: rows, excluded: new Set() };
  if (!policy || typeof policy !== 'object' || Array.isArray(policy)) { errors.push('Invalid question policy'); return { questions: rows, excluded: new Set() }; }
  const known = new Set(rows.map(q => q.id)), excluded = new Set(), corrections = new Map();
  for (const field of ['excluded_from_core','corrections']) {
    if (!Array.isArray(policy[field])) { errors.push('Invalid question policy '+field); continue; }
    const seen = new Set();
    for (const item of policy[field]) {
      const id = item?.question_id;
      if (!known.has(id) || seen.has(id) || typeof item?.reason !== 'string' || !item.reason.trim()) { errors.push('Invalid question policy reference '+id); continue; }
      seen.add(id);
      if (field === 'excluded_from_core') { excluded.add(id); continue; }
      const patch = item.fields;
      if (!patch || typeof patch !== 'object' || Array.isArray(patch) || !Object.keys(patch).length || Object.keys(patch).some(k => !['stem','options','answer_index','explanation'].includes(k))) { errors.push('Invalid correction fields '+id); continue; }
      corrections.set(id, patch);
    }
  }
  return { questions: rows.map(q => corrections.has(q.id) ? { ...q, ...structuredClone(corrections.get(q.id)) } : q), excluded };
}
/** Isolated curriculum candidate engine. Not imported into the live app. */
export function validateCandidateData(catalog, content) {
  const errors = [];
  const units = new Map();
  const activities = new Map();
  const legacy = catalog.kind === 'legacy_topic_catalog';
  const legacyIds = new Set(['s1','s2','s3','s4','s5','s9','s10','s11','s12','s13','s14','s15','s16','s17','s18','s19','s22','s23']);
  for (const u of catalog.units || []) {
    if (!u.id || units.has(u.id)) errors.push(`Duplicate/missing unit: ${u.id}`);
    units.set(u.id, u);
    if (!Number.isInteger(u.grade) || u.grade < (legacy ? 3 : 1) || u.grade > 6) errors.push(`Invalid grade: ${u.id}`);
    if (legacy ? u.semester !== 0 : ![1,2].includes(u.semester)) errors.push(`Invalid semester: ${u.id}`);
    if (legacy ? u.publisher !== '原主題' : !['康軒','南一'].includes(u.publisher)) errors.push(`Invalid publisher: ${u.id}`);
    if (u.subject !== (u.grade <= 2 ? '生活' : '自然科學')) errors.push(`Subject/stage mismatch: ${u.id}`);
    if (legacy && (!legacyIds.has(u.id) || u.school_year !== null || u.source_id !== 'legacy-topic-' + u.id)) errors.push(`Invalid legacy topic: ${u.id}`);
    for (const a of u.activities || []) {
      if (!a.id || activities.has(a.id)) errors.push(`Duplicate/missing activity: ${a.id}`);
      activities.set(a.id, { ...a, unit_id: u.id });
      if (legacy && a.scope !== 'legacy_topic') errors.push(`Invalid legacy activity: ${a.id}`);
    }
  }
  const ids = new Set();
  const resolved = resolveQuestionPolicy(content, errors);
  for (const q of resolved.questions) {
    if (!q.id || ids.has(q.id)) errors.push(`Duplicate/missing question: ${q.id}`);
    ids.add(q.id);
    if (!units.has(q.unit_id)) errors.push(`Unknown question unit: ${q.id}`);
    if (activities.get(q.activity_id)?.unit_id !== q.unit_id) errors.push(`Question activity mismatch: ${q.id}`);
    if (!q.stem?.trim() || !q.explanation?.trim()) errors.push(`Missing question text: ${q.id}`);
    if (!Array.isArray(q.options) || q.options.length !== 4 || q.options.some(v => typeof v !== 'string' || !v.trim()) || new Set(q.options.map(v => v.trim())).size !== 4) errors.push(`Invalid options: ${q.id}`);
    if (!Number.isInteger(q.answer_index) || q.answer_index < 0 || q.answer_index > 3) errors.push(`Invalid answer index: ${q.id}`);
    if (!['observe','predict','apply','evidence','safety','classify'].includes(q.skill)) errors.push(`Invalid skill: ${q.id}`);
    if (![1,2,3].includes(q.difficulty)) errors.push(`Invalid difficulty: ${q.id}`);
    if (q.original !== true) errors.push(`Missing original-authoring flag: ${q.id}`);
    if (!['candidate','reviewed'].includes(q.review_status)) errors.push(`Missing review status: ${q.id}`);
  }
  const taskIds = new Set();
  for (const task of content.tasks || []) {
    if (!task.id || taskIds.has(task.id)) errors.push(`Duplicate/missing task: ${task.id}`);
    taskIds.add(task.id);
    if (!units.has(task.unit_id)) errors.push(`Unknown task unit: ${task.id}`);
    if (task.applicable_unit_ids !== undefined && (!Array.isArray(task.applicable_unit_ids) || !task.applicable_unit_ids.length || !task.applicable_unit_ids.includes(task.unit_id) || new Set(task.applicable_unit_ids).size !== task.applicable_unit_ids.length || task.applicable_unit_ids.some(id => !units.has(id) || units.get(id)?.subject !== units.get(task.unit_id)?.subject))) errors.push(`Invalid shared task units: ${task.id}`);
    if (!task.prompt?.trim() || !Array.isArray(task.rubric) || task.rubric.length < 2 || task.rubric.some(v => !v?.trim())) errors.push(`Incomplete inquiry task: ${task.id}`);
    if (task.instruction_steps !== undefined && (!Array.isArray(task.instruction_steps) || !task.instruction_steps.length || task.instruction_steps.some(s => typeof s?.label !== 'string' || !s.label.trim() || typeof s.text !== 'string' || !s.text.trim()) || task.instruction_steps.map(s => s.text).join('') !== task.prompt)) errors.push(`Task steps must preserve every instruction: ${task.id}`);
    if (typeof task.adult_supervision !== 'boolean') errors.push(`Missing supervision value: ${task.id}`);
    if (!['candidate','reviewed'].includes(task.review_status)) errors.push(`Missing task review status: ${task.id}`);
  }
  const questionActivities = new Set((content.questions || []).map(q => q.activity_id));
  const taskMap = new Map((content.tasks || []).map(t => [t.id,t]));
  for (const task of content.tasks || []) if (task.dependencies !== undefined && (!Array.isArray(task.dependencies) || new Set(task.dependencies).size !== task.dependencies.length || task.dependencies.some(id => { const dep = taskMap.get(id); return id === task.id || !dep || (task.applicable_unit_ids || [task.unit_id]).some(unitId => !(dep.applicable_unit_ids || [dep.unit_id]).includes(unitId)); }))) errors.push(`Unknown, self or unreachable task dependency: ${task.id}`);
  const taskUnits = new Set((content.tasks || []).flatMap(t => t.applicable_unit_ids || [t.unit_id]));
  return { valid: errors.length === 0, errors,
    units: units.size, activities: activities.size, questions: (content.questions || []).length, tasks: (content.tasks || []).length,
    activitiesWithoutCandidate: [...activities.keys()].filter(id => !questionActivities.has(id)),
    unitsWithoutInquiryTask: [...units.keys()].filter(id => !taskUnits.has(id)),
    note: 'Structural validation is not scientific, pedagogical, visual or full learning-standard certification.' };
}

function shuffle(items, rng) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const n = rng();
    if (!Number.isFinite(n) || n < 0 || n >= 1) throw new RangeError('rng must return a number in [0,1)');
    const j = Math.floor(n * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function createCurriculumEngine(catalog, content) {
  const validation = validateCandidateData(catalog, content);
  if (!validation.valid) throw new Error(validation.errors.join('\n'));
  const units = new Map(catalog.units.map(u => [u.id,u]));
  const activityScope = new Map(catalog.units.flatMap(u => u.activities.map(a => [a.id,a.scope])));
  const { questions, excluded } = resolveQuestionPolicy(content);
  const questionById = new Map(questions.map(q => [q.id, q]));
  const core = q => !excluded.has(q.id) && q.core_practice_eligible !== false && activityScope.get(q.activity_id) !== 'extension_from_114_school_plan';
  const tasksFor = (unitId, allowCandidate) => content.tasks.filter(t => (t.applicable_unit_ids || [t.unit_id]).includes(unitId) && (allowCandidate || t.review_status === 'reviewed')).map(t => structuredClone(t));
  return {
    validation,
    getQuestion(id) { const q = questionById.get(id); return q ? structuredClone(q) : null; },
    isCoreQuestion(id) { const q = questionById.get(id); return !!q && core(q); },
    getTasks(unitId, { allowCandidate = false } = {}) {
      if (!units.has(unitId)) throw new RangeError(`Unknown curriculum unit: ${unitId}`);
      return tasksFor(unitId, allowCandidate);
    },
    listUnits({ grade, publisher, semester } = {}) {
      return catalog.units.filter(u => (grade == null || u.grade === grade) && (publisher == null || u.publisher === publisher) && (semester == null || u.semester === semester)).map(u => ({
        ...structuredClone(u),
        candidateQuestionCount: questions.filter(q => q.unit_id === u.id && core(q)).length,
        extensionQuestionCount: questions.filter(q => q.unit_id === u.id && !core(q) && !excluded.has(q.id)).length,
        retainedQuestionCount: questions.filter(q => q.unit_id === u.id && excluded.has(q.id)).length,
        reviewedQuestionCount: questions.filter(q => q.unit_id === u.id && q.review_status === 'reviewed').length,
      }));
    },
    reconcilePool(unitId, previous = null, { legacySeen = [], allowCandidate = false, rng = Math.random } = {}) {
      if (!units.has(unitId)) throw new RangeError(`Unknown curriculum unit: ${unitId}`);
      const ids = questions.filter(q => q.unit_id === unitId && core(q) && (allowCandidate || q.review_status === 'reviewed')).map(q => q.id);
      return reconcileQuestionPool(ids, previous, { legacySeen, rng });
    },
    createCycleRound(unitId, { pool = null, legacySeen = [], allowCandidate = false, rng = Math.random } = {}) {
      const unit = units.get(unitId);
      if (!unit) throw new RangeError(`Unknown curriculum unit: ${unitId}`);
      const bank = questions.filter(q => q.unit_id === unitId && core(q) && (allowCandidate || q.review_status === 'reviewed'));
      if (bank.length < 30) throw new Error('這個單元尚未備妥至少30題核心題，暫不開始新回合。');
      const byId = new Map(bank.map(q => [q.id, q]));
      const allocation = drawQuestionIds(bank.map(q => q.id), pool, { count: 10, legacySeen, rng, activityById: Object.fromEntries(bank.map(q => [q.id, q.activity_id])) });
      const warnings = [allocation.reset ? '本單元題池已抽完，已開始下一輪；同一回合仍不重複。' : '同一學生同一單元會先抽完本輪題池，才開始下一輪。'];
      if (allowCandidate) warnings.push('候選練習：尚未完成正式教學驗收。');
      return { unitId, title: unit.title, publisher: unit.publisher, grade: unit.grade, semester: unit.semester,
        requestedCount: 10, actualCount: 10, warnings, pool: allocation.pool, questionCycles: allocation.questionCycles,
        poolCycleStart: allocation.startCycle, poolCycleEnd: allocation.endCycle, poolSize: bank.length,
        questions: allocation.ids.map(id => { const q = byId.get(id); return { id:q.id, activityId:q.activity_id, unitId,
          stem:q.stem, ans:q.options[q.answer_index], opts:shuffle(q.options,rng), explain:q.explanation,
          difficulty:q.difficulty, reviewStatus:q.review_status, curriculumSubject:unit.subject, activityScope:activityScope.get(q.activity_id)||'current_publisher_activity',
          sourceId:unit.source_id, sourceSchoolYear:unit.school_year }; }),
        tasks: tasksFor(unitId, allowCandidate) };
    },
    createRound(unitId, { count = 10, allowCandidate = false, seenQuestionIds = [], includeExtensions = false, rng = Math.random } = {}) {
      const unit = units.get(unitId);
      if (!unit) throw new RangeError(`Unknown curriculum unit: ${unitId}`);
      if (!Number.isInteger(count) || count < 1 || count > 50) throw new RangeError('count must be an integer from 1 to 50');
      const bank = questions.filter(q => q.unit_id === unitId && !excluded.has(q.id) && (includeExtensions || core(q)) && (allowCandidate || q.review_status === 'reviewed'));
      if (!bank.length) throw new Error(`No ${allowCandidate ? 'candidate' : 'reviewed'} questions for ${unitId}`);
      const seen = new Set(seenQuestionIds);
      const chooseBalanced = (pool, limit) => {
        const selected = [], usedActivities = new Set(), usedIds = new Set();
        for (const q of pool) if (selected.length < limit && !usedActivities.has(q.activity_id)) {
          selected.push(q); usedActivities.add(q.activity_id); usedIds.add(q.id);
        }
        for (const q of pool) if (selected.length < limit && !usedIds.has(q.id)) { selected.push(q); usedIds.add(q.id); }
        return selected;
      };
      const selected = chooseBalanced(shuffle(bank.filter(q => !seen.has(q.id)),rng),count);
      selected.push(...chooseBalanced(shuffle(bank.filter(q => seen.has(q.id)),rng),count-selected.length));
      const warnings = [];
      if (selected.length < count) warnings.push(`題庫目前只有 ${selected.length} 題，本回合不重複出題。`);
      if (selected.some(q => seen.has(q.id))) warnings.push('本回合含先前做過的題目，沒有在同一回合重複。');
      if (selected.some(q => q.review_status === 'candidate')) warnings.push('候選審查模式：題目尚未完成科學與教學驗收。');
      return { unitId, title: unit.title, publisher: unit.publisher, grade: unit.grade, semester: unit.semester,
        requestedCount: count, actualCount: selected.length, warnings,
        questions: selected.map(q => ({ id:q.id, activityId:q.activity_id, unitId,
          stem:q.stem, ans:q.options[q.answer_index], opts:shuffle(q.options,rng), explain:q.explanation,
          difficulty:q.difficulty, reviewStatus:q.review_status, curriculumSubject:unit.subject, activityScope:activityScope.get(q.activity_id)||'current_publisher_activity',
          sourceId:unit.source_id, sourceSchoolYear:unit.school_year })),
        tasks: tasksFor(unitId, allowCandidate),
      };
    },
  };
}
