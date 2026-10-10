import { DICTIONARY, LESSONS, SOUNDS, STROKE_PAGES, STROKE_SEARCH, lessonLabel, type Category, type Lesson } from './catalog';
export interface Selection { id: string; text: string; category: Category; sounds: string[]; source: string; sourceUrl: string; lessonId?: string; soundNote?: string; omitted?: string[] }
export interface PracticeRow { char: string; sound: string; sounds: string[]; origins: Selection[] }
export type Filters = { year: number; semester: string; grade: number; publisher: string };
export const keyOf = (lesson: Lesson, index: number) => `${lesson.id}:${index}`;
export const selectionOf = (lesson: Lesson, index: number): Selection => ({ ...lesson.vocabulary[index],
  id: keyOf(lesson,index), source:lessonLabel(lesson), sourceUrl:lesson.sourceUrl, lessonId:lesson.id });
export const matchingLessons = (filters: Filters) => LESSONS.filter(lesson => lesson.year === filters.year
  && lesson.semester === filters.semester && lesson.grade === filters.grade && lesson.publisher === filters.publisher);
export function practiceRows(selections: Selection[], overrides: Record<string,string> = {}): PracticeRow[] {
  const result = new Map<string, PracticeRow>();
  const unresolved = new Set<string>();
  for (const entry of selections) Array.from(entry.text).forEach((char,index) => {
    if (entry.omitted?.includes(char)) return;
    const row = result.get(char) ?? { char, sound:'', sounds:[], origins:[] };
    const sound = entry.sounds[index] ?? '';
    if (!sound) unresolved.add(char);
    if (sound && !row.sounds.includes(sound)) row.sounds.push(sound);
    if (!row.origins.some(origin => origin.id === entry.id)) row.origins.push(entry);
    row.sound = overrides[char] ?? (!unresolved.has(char) && row.sounds.length === 1 ? row.sounds[0] : '');
    result.set(char,row);
  });
  return [...result.values()];
}
export function customSelections(input: string): Selection[] {
  const characters = Array.from(input.replace(/[\s,，、;；]+/gu, '').normalize('NFC'));
  if (!characters.length) throw new Error('請先輸入要練習的國字。');
  if (characters.some(char => !/^\p{Script=Han}$/u.test(char))) throw new Error('自訂字只接受國字；數字、注音與符號請先移除。');
  if (characters.length > 100) throw new Error('一次最多加入 100 個字。');
  return [...new Set(characters)].map(char => ({id:`custom:${char}`,text:char,category:'自訂字',sounds:[SOUNDS[char] ?? ''], source:'自訂字',sourceUrl:DICTIONARY+encodeURIComponent(char)}));
}
export function setSelections(current: Selection[], entries: Selection[], checked: boolean): Selection[] {
  const ids = new Set(entries.map(entry => entry.id));
  const retained = current.filter(entry => !ids.has(entry.id));
  return checked ? [...retained, ...entries] : retained;
}
export function removeCharacter(current:Selection[], char:string):Selection[] {
  return current.flatMap(entry=>{
    if (!entry.text.includes(char)) return [entry];
    const omitted=[...new Set([...(entry.omitted ?? []),char])];
    return Array.from(entry.text).some(item=>!omitted.includes(item))?[{...entry,omitted}]:[];
  });
}
export const dictionaryUrl = (text: string) => DICTIONARY + encodeURIComponent(text);
export function strokeLink(char: string) {
  const id = Object.hasOwn(STROKE_PAGES,char) ? STROKE_PAGES[char] : undefined;
  return { url:id ? `https://stroke-order.learningweb.moe.edu.tw/dictView.jsp?ID=${id}` : STROKE_SEARCH,
    label:id ? '看筆順 ↗' : `官方查詢「${char}」↗`, fallback:!id };
}
export function paginate<T>(rows: T[], layout: string): T[][] {
  const size = layout === 'low' ? 6 : 8;
  return Array.from({length:Math.ceil(rows.length/size)}, (_,index)=>rows.slice(index*size,(index+1)*size));
}
export const validSound = (sound:string) => /^(?:˙[ㄅ-ㄩ]{1,3}|[ㄅ-ㄩ]{1,3}[ˊˇˋ]?)$/u.test(sound);
