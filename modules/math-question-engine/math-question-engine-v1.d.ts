export type MathEngineQuestion = {
  conceptId: string;
  templateId: string;
  questionKey: string;
  operands: number[];
  stem: string;
  ans: number;
  opts: number[];
  misconceptionMap: Record<string, string>;
  fig: string;
  figData: { a: number; b: number; makeTen: { take: number; rest: number } };
  explain: string;
  hint: string;
  speakText: string;
  adaptiveRetry?: boolean;
  retryOf?: string;
};

export type MathHistorySession = { id?: string; at?: string; keys: string[] } | string[];

export const CONCEPTS: Readonly<Record<string, {
  conceptId: string;
  unitId: string;
  title: string;
  commutative: boolean;
  rules: Readonly<Record<string, number | boolean>>;
  templates: readonly string[];
}>>;

export function canonicalQuestionKey(question: Partial<MathEngineQuestion> & { conceptId: string; operands?: number[] }): string;

export function generateSession(options?: {
  conceptId?: string;
  count?: number;
  history?: MathHistorySession[];
  mode?: "practice" | "exam";
  random?: () => number;
}): MathEngineQuestion[];

export function generateRelatedQuestion(
  question: MathEngineQuestion,
  options?: { excludeKeys?: string[]; mode?: "practice" | "exam"; random?: () => number },
): MathEngineQuestion | null;

export function misconceptionChoices(a: number, b: number, answer: number, random: () => number): {
  options: number[];
  misconceptions: Record<string, string>;
};
