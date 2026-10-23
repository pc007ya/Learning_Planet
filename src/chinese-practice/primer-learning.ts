import data from './primer-learning.json';
import { PRIMER } from './primer';
export const PRIMER_PACKAGE = data;
export const PRIMER_LEARNING = data.lessons.map(lesson => ({...lesson,
  id: PRIMER.entries.find(entry => entry.kind === '課文' && entry.number === lesson.number)!.id,
  audio: {src:`audio/chinese-primer/lesson-${String(lesson.number).padStart(2,'0')}-slow30.mp3`,
    text:lesson.text.ttsChinese,voice:'zh-TW-HsiaoChenNeural',rate:'-30%',pitch:'+0Hz',verified:false},
}));
export type PrimerLesson = typeof PRIMER_LEARNING[number];
export type PrimerSection = 'text' | 'practice' | 'review';
export function reviewOptions(lesson:PrimerLesson,index:number) {
 const question=lesson.review.questions[index];
 const shift=(lesson.number+index)%question.options.length;
 return question.options.map((_,i)=>{const original=(i+shift)%question.options.length;
  return {text:question.options[original],correct:original===question.correctIndex};});
}
