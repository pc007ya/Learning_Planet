import lessonData from './lessons-115-upper.json';
import upperGradeLessonData from './lessons-115-upper-grades45.json';
import singleSounds from './sounds-single.json';
import upperGradeSingleSounds from './sounds-single-grades45.json';
export type Category = '生字' | '認讀字' | '語詞' | '自訂字';
export interface Lesson {
  id: string; curriculum: string | null; year: number; semester: '上' | '下'; grade: number;
  publisher: string; number: number; title: string; sourceTitle?: string; displayTitle?: string; edition: string | null;
  volume: number; volumeDerived: boolean; sourceUrl: string; indexUrl?: string; checkedAt: string; status: '已核'; sourceNote?: string;
  vocabulary: { text: string; category: Category; sounds: string[]; soundNote?: string; soundSources?: string[]; soundMethod?: string }[];
}
// This is the latest catalog audit, not a claim that older lesson audits were rerun.
export const CHECKED_AT = '2026-10-22';
export const DICTIONARY = 'https://pedia.cloud.edu.tw/Entry/Detail?title=';
export const STROKE_SEARCH = 'https://stroke-order.learningweb.moe.edu.tw/searchW.jsp?ID2=1';
// IDs are copied from official search results and every destination heading was checked.
// No numeric/Unicode ID calculation. Unmapped characters must use STROKE_SEARCH.
export const STROKE_PAGES: Record<string, string> = {
  小: '23567', 上: '19978', 走: '36208', 左: '24038', 右: '21491', 向: '21521',
  魚: '39770', 也: '20063', 來: '20358', 加: '21152', 船: '33337', 前: '21069',
  油: '27833', 開: '38283', 出: '20986', 招: '25307', 車: '36554', 子: '23376', 地: '22320', 花: '33457',
};
const LEGACY_SOUNDS: Record<string, string> = {
  小:'ㄒㄧㄠˇ', 上:'ㄕㄤˋ', 走:'ㄗㄡˇ', 左:'ㄗㄨㄛˇ', 右:'ㄧㄡˋ', 向:'ㄒㄧㄤˋ',
  魚:'ㄩˊ', 也:'ㄧㄝˇ', 來:'ㄌㄞˊ', 加:'ㄐㄧㄚ', 船:'ㄔㄨㄢˊ', 前:'ㄑㄧㄢˊ', 油:'ㄧㄡˊ',
  開:'ㄎㄞ', 出:'ㄔㄨ', 招:'ㄓㄠ', 車:'ㄔㄜ', 子:'ㄗˇ', 地:'ㄉㄧˋ', 花:'ㄏㄨㄚ',
  朵:'ㄉㄨㄛˇ', 在:'ㄗㄞˋ', 笑:'ㄒㄧㄠˋ', 印:'ㄧㄣˋ', 張:'ㄓㄤ', 臉:'ㄌㄧㄢˇ', 手:'ㄕㄡˇ',
};
// Existing custom-character readings retain their precedence; new facts only extend the set.
export const SOUNDS: Record<string,string> = {...upperGradeSingleSounds, ...singleSounds, ...LEGACY_SOUNDS};
export const LESSONS: Lesson[] = [...lessonData, ...upperGradeLessonData] as unknown as Lesson[];
export const COVERED_GRADES = [...new Set(LESSONS.map(lesson => lesson.grade))].sort((a,b) => a-b);
const consecutiveGrades = COVERED_GRADES.every((grade,index) => grade === COVERED_GRADES[0]+index);
export const GRADE_COVERAGE = consecutiveGrades && COVERED_GRADES.length > 1
  ? `${COVERED_GRADES[0]}～${COVERED_GRADES.at(-1)}` : COVERED_GRADES.join('、');
export const CATALOG_SUMMARY = `115 上 · 三出版社 ${GRADE_COVERAGE} 年級 · ${LESSONS.filter(lesson=>lesson.number>0).length} 課${LESSONS.some(lesson=>lesson.number===0)?'＋前導單元':''}`;
// Preserve the imported source title even when the publisher confirms a different display title.
export const lessonDisplayTitle = (lesson: Lesson) => lesson.displayTitle ?? lesson.title;
export const lessonLabel = (lesson: Lesson) => `${lesson.year}${lesson.semester}・${lesson.grade}年級・${lesson.publisher}・${lesson.number === 0 ? '前導單元' : `第${lesson.number}課`} ${lessonDisplayTitle(lesson)}`;
export const soundSource = (char: string) => STROKE_PAGES[char]
  ? `https://stroke-order.learningweb.moe.edu.tw/dictMean.jsp?ID=${STROKE_PAGES[char]}`
  : DICTIONARY + encodeURIComponent(char);
