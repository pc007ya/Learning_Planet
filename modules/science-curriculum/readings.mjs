// Subject-specific readings. Does not mutate the math reading registry.
let lexicon=null,pending=null,byFirst=new Map(),contextPhrases={};
export async function load({fetcher=fetch}={}) {
 if(lexicon)return;
 if(!pending)pending=(async()=>{
  const r=await fetcher(new URL('./readings/lexicon.json',import.meta.url));
  if(!r.ok)throw Error('生活自然注音資料無法讀取');
  const data=await r.json();
  if(data.version!==1||!data.lexicon||typeof data.lexicon!=='object')throw Error('生活自然注音格式不符');
  const index=new Map();
  for(const [word,readings] of Object.entries(data.lexicon)){
   if(!Array.isArray(readings)||[...word].length!==readings.length||readings.some(r=>typeof r!=='string'||!/[ㄅ-ㄩ]/u.test(r)))throw Error('生活自然注音詞條不符');
   const c=[...word][0];if(!index.has(c))index.set(c,[]);index.get(c).push(word);
  }
  for(const words of index.values())words.sort((a,b)=>b.length-a.length);
  lexicon=data.lexicon;byFirst=index;contextPhrases=data.contextPhrases||{};
 })().finally(()=>{pending=null;});
 return pending;
}
export function tokens(text){
 const value=String(text),out=[];
 for(let i=0;i<value.length;){
  const char=String.fromCodePoint(value.codePointAt(i));
  const word=byFirst.get(char)?.find(w=>value.startsWith(w,i));
  if(word){[...word].forEach((c,n)=>out.push({char:c,reading:lexicon[word][n]}));i+=word.length;}
  else{out.push({char,reading:''});i+=char.length;}
 }
 // Context words may start inside a generic dictionary match (e.g. 有成 + 長).
 // Overlay longest reviewed context phrases without changing the source text.
 const priorities=Object.keys(contextPhrases).sort((a,b)=>b.length-a.length);
 for(let i=0;i<out.length;){
  const rest=out.slice(i).map(t=>t.char).join('');
  const phrase=priorities.find(p=>rest.startsWith(p));
  if(phrase){const chars=[...phrase];chars.forEach((_,n)=>out[i+n].reading=contextPhrases[phrase][n]);i+=chars.length;}
  else i++;
 }
 for(let i=1;i<out.length;i++)if(out[i].char==='種'&&/[0-9０-９]/u.test(out[i-1].char))out[i].reading='ㄓㄨㄥˇ';
 return out;
}
