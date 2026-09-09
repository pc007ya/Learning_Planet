const CONCEPTS = Object.freeze({
  "g1-add-make-ten": Object.freeze({
    conceptId: "g1-add-make-ten",
    unitId: "u108",
    title: "20 以內的加法（湊十）",
    commutative: true,
    rules: Object.freeze({ aMin: 6, aMax: 9, bMin: 2, bMax: 9, mustCrossTen: true, maxAnswer: 20 }),
    templates: Object.freeze(["equation", "make-ten", "story"]),
  }),
});

function safeRandom(random) {
  return typeof random === "function" ? random : Math.random;
}

function shuffled(values, random) {
  const result = values.slice();
  for (let index = result.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [result[index], result[target]] = [result[target], result[index]];
  }
  return result;
}

function canonicalKeyForOperands(conceptId, a, b, commutative = true) {
  const operands = commutative ? [a, b].sort((left, right) => left - right) : [a, b];
  return `${conceptId}:${operands[0]}:${operands[1]}`;
}

function canonicalQuestionKey(question) {
  if (!question || !question.conceptId) return "";
  const operands = question.operands || (question.figData ? [question.figData.a, question.figData.b] : []);
  if (operands.length < 2) return String(question.questionKey || "");
  const concept = CONCEPTS[question.conceptId];
  return canonicalKeyForOperands(question.conceptId, Number(operands[0]), Number(operands[1]), !concept || concept.commutative !== false);
}

function enumerateCandidates(concept) {
  const candidates = [];
  const rules = concept.rules;
  for (let a = rules.aMin; a <= rules.aMax; a += 1) {
    for (let b = rules.bMin; b <= rules.bMax; b += 1) {
      const answer = a + b;
      if (rules.mustCrossTen && answer <= 10) continue;
      if (answer > rules.maxAnswer) continue;
      const key = canonicalKeyForOperands(concept.conceptId, a, b, concept.commutative);
      if (candidates.some((candidate) => candidate.key === key)) continue;
      candidates.push({ a, b, answer, key });
    }
  }
  return candidates;
}

function recentPenalty(history, key) {
  const sessions = Array.isArray(history) ? history.slice(-6) : [];
  return sessions.reduce((penalty, session, index) => {
    const keys = Array.isArray(session) ? session : Array.isArray(session && session.keys) ? session.keys : [];
    if (!keys.includes(key)) return penalty;
    return penalty + index + 2;
  }, 0);
}

function weightedPick(candidates, history, random) {
  const weighted = candidates.map((candidate) => ({
    candidate,
    weight: 1 / (1 + recentPenalty(history, candidate.key)),
  }));
  const total = weighted.reduce((sum, row) => sum + row.weight, 0);
  let ticket = random() * total;
  for (const row of weighted) {
    ticket -= row.weight;
    if (ticket <= 0) return row.candidate;
  }
  return weighted[weighted.length - 1].candidate;
}

function misconceptionChoices(a, b, answer, random) {
  const candidates = [
    { value: answer - 1, misconception: "off-by-one-down" },
    { value: answer + 1, misconception: "off-by-one-up" },
    { value: 10, misconception: "stopped-at-ten" },
    { value: answer - 10, misconception: "ones-only" },
    { value: Math.max(a, b), misconception: "kept-one-group" },
  ].filter((row) => row.value >= 0 && row.value <= 20 && row.value !== answer);
  const unique = [];
  for (const row of shuffled(candidates, random)) {
    if (!unique.some((item) => item.value === row.value)) unique.push(row);
  }
  for (let distance = 2; unique.length < 3; distance += 1) {
    for (const value of [answer - distance, answer + distance]) {
      if (value >= 0 && value <= 20 && value !== answer && !unique.some((item) => item.value === value)) {
        unique.push({ value, misconception: "nearby-number" });
      }
      if (unique.length >= 3) break;
    }
  }
  const selected = unique.slice(0, 3);
  return {
    options: shuffled([answer, ...selected.map((row) => row.value)], random),
    misconceptions: Object.fromEntries(selected.map((row) => [String(row.value), row.misconception])),
  };
}

function makeQuestion(concept, candidate, templateId, mode, random) {
  const { a, b, answer, key } = candidate;
  const toTen = 10 - a;
  const rest = b - toTen;
  const choices = misconceptionChoices(a, b, answer, random);
  let stem = `${a} ＋ ${b} ＝ ？`;
  if (templateId === "make-ten") stem = `用湊十法算 ${a} ＋ ${b} ＝ ？`;
  if (templateId === "story") stem = `太空盒裡有 ${a} 顆星星，又放進 ${b} 顆，現在有幾顆？`;
  return {
    conceptId: concept.conceptId,
    templateId,
    questionKey: key,
    operands: [a, b],
    stem,
    ans: answer,
    opts: choices.options,
    misconceptionMap: choices.misconceptions,
    fig: "dots",
    figData: { a, b, makeTen: { take: toTen, rest } },
    explain: `${a} 先和 ${toTen} 湊成 10，${b} 拆成 ${toTen} 和 ${rest}，10 ＋ ${rest} ＝ ${answer}。`,
    hint: mode === "exam" ? "" : `從 ${b} 拿 ${toTen} 個給 ${a}，先湊成 10。`,
    speakText: stem,
  };
}

function generateSession({ conceptId, count = 10, history = [], mode = "practice", random } = {}) {
  const concept = CONCEPTS[conceptId];
  if (!concept) return [];
  const rng = safeRandom(random);
  const available = enumerateCandidates(concept);
  const requested = Math.max(1, Math.min(Number(count) || 10, available.length));
  const selected = [];
  while (selected.length < requested && available.length) {
    const candidate = weightedPick(available, history, rng);
    available.splice(available.indexOf(candidate), 1);
    selected.push(candidate);
  }
  return selected.map((candidate, index) => makeQuestion(concept, candidate, concept.templates[index % concept.templates.length], mode, rng));
}

function generateRelatedQuestion(question, { excludeKeys = [], mode = "practice", random } = {}) {
  const concept = question && CONCEPTS[question.conceptId];
  if (!concept) return null;
  const rng = safeRandom(random);
  const excluded = new Set([canonicalQuestionKey(question), ...excludeKeys]);
  const sourceAnswer = Number(question.ans);
  const candidates = enumerateCandidates(concept)
    .filter((candidate) => !excluded.has(candidate.key))
    .sort((left, right) => Math.abs(left.answer - sourceAnswer) - Math.abs(right.answer - sourceAnswer));
  if (!candidates.length) return null;
  const closestDistance = Math.abs(candidates[0].answer - sourceAnswer);
  const closest = candidates.filter((candidate) => Math.abs(candidate.answer - sourceAnswer) === closestDistance);
  const candidate = closest[Math.floor(rng() * closest.length)];
  const templateIndex = Math.max(0, concept.templates.indexOf(question.templateId));
  const related = makeQuestion(concept, candidate, concept.templates[(templateIndex + 1) % concept.templates.length], mode, rng);
  related.adaptiveRetry = true;
  related.retryOf = canonicalQuestionKey(question);
  return related;
}

const api = Object.freeze({
  concepts: CONCEPTS,
  canonicalQuestionKey,
  generateSession,
  generateRelatedQuestion,
});

if (typeof window !== "undefined") window.LearningPlanetMathEngine = api;

export { CONCEPTS, canonicalQuestionKey, generateRelatedQuestion, generateSession, misconceptionChoices };
