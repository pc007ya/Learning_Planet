/** Keep each sentence intact so names share the English narrator and word offsets. */
export function speechParts(text:string):{text:string;lang:'en-US';start:number}[]{
 return text.trim()?[{text,lang:'en-US',start:0}]:[];
}
