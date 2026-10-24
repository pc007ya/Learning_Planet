/** Preserve approved wording while presenting one sentence per reader line. */
export function splitBookSentences(paragraphs:readonly string[]):string[]{
 return paragraphs.flatMap(text=>(text.replace(/\b(Mr|Mrs|Ms|Dr)\./g,'$1∯').match(/[^.!?]+[.!?]+[”’\"]?|[^.!?]+$/g)||[text]).map(line=>line.replaceAll('∯','.').trim()).filter(Boolean));
}
