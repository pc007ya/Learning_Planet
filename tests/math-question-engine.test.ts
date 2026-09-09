import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  canonicalQuestionKey,
  generateRelatedQuestion,
  generateSession,
} from "../modules/math-question-engine/math-question-engine-v1.js";

function seededRandom(seed = 20260908) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 0x100000000;
  };
}

describe("concept-based math question engine", () => {
  it("generates a unique ten-question make-ten session", () => {
    const questions = generateSession({
      conceptId: "g1-add-make-ten",
      count: 10,
      random: seededRandom(),
    });

    expect(questions).toHaveLength(10);
    expect(new Set(questions.map(canonicalQuestionKey)).size).toBe(10);
    questions.forEach((question) => {
      const [a, b] = question.operands;
      expect(a + b).toBe(question.ans);
      expect(question.ans).toBeGreaterThan(10);
      expect(question.ans).toBeLessThanOrEqual(20);
      expect(question.opts).toHaveLength(4);
      expect(new Set(question.opts).size).toBe(4);
      expect(question.opts).toContain(question.ans);
      expect(question.explain).toContain("湊成 10");
    });
  });

  it("treats commutative operand pairs as the same question", () => {
    const first = { conceptId: "g1-add-make-ten", operands: [7, 5] };
    const swapped = { conceptId: "g1-add-make-ten", operands: [5, 7] };
    expect(canonicalQuestionKey(first)).toBe(canonicalQuestionKey(swapped));
  });

  it("builds choices from misconception rules instead of fixed options", () => {
    const [question] = generateSession({ conceptId: "g1-add-make-ten", count: 1, random: seededRandom(7) });
    const wrongOptions = question.opts.filter((option) => option !== question.ans);
    expect(Object.keys(question.misconceptionMap).sort()).toEqual(wrongOptions.map(String).sort());
    expect(new Set(Object.values(question.misconceptionMap)).size).toBeGreaterThan(1);
  });

  it("suppresses hints in weekly-exam mode", () => {
    const [question] = generateSession({ conceptId: "g1-add-make-ten", count: 1, mode: "exam", random: seededRandom(9) });
    expect(question.hint).toBe("");
  });

  it("reduces the chance of repeating questions from recent sessions", () => {
    const previous = generateSession({ conceptId: "g1-add-make-ten", count: 10, random: seededRandom(123) });
    const recentKeys = new Set(previous.map(canonicalQuestionKey));
    const plain = generateSession({ conceptId: "g1-add-make-ten", count: 10, random: seededRandom(456) });
    const weighted = generateSession({
      conceptId: "g1-add-make-ten",
      count: 10,
      history: [{ id: "previous", keys: [...recentKeys] }],
      random: seededRandom(456),
    });
    const overlap = (questions: typeof plain) => questions.filter((question) => recentKeys.has(canonicalQuestionKey(question))).length;
    expect(overlap(weighted)).toBeLessThan(overlap(plain));
  });

  it("creates a delayed same-concept variant without repeating the failed pair", () => {
    const session = generateSession({ conceptId: "g1-add-make-ten", count: 10, random: seededRandom(11) });
    const failed = session[0];
    const replacementIndex = 3;
    const related = generateRelatedQuestion(failed, {
      excludeKeys: session.filter((_, index) => index !== replacementIndex).map(canonicalQuestionKey),
      random: seededRandom(12),
    });
    expect(related).not.toBeNull();
    if (!related) throw new Error("expected a related question");
    expect(related?.conceptId).toBe(failed.conceptId);
    expect(related?.adaptiveRetry).toBe(true);
    expect(canonicalQuestionKey(related)).not.toBe(canonicalQuestionKey(failed));
  });
});

describe("Learning Planet integration", () => {
  const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

  it("shares the engine between practice and weekly exams and stores six recent sessions", () => {
    expect(html).toContain('id: "u108"');
    expect(html).toContain('conceptId: "g1-add-make-ten"');
    expect(html).toContain('{ mode: "exam" }');
    expect(html).toContain("mathQuestionHistory");
    expect(html).toContain(".slice(-6)");
    expect(html).toContain("s.qi + 3 < s.qs.length");
  });
});
