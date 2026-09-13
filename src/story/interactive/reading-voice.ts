/** Web Speech has no gender field; prefer identifiable English female voices. */
export function chooseReadingVoice<T extends {name:string;lang:string}>(voices:T[],lang='en-US'):T|undefined{
 const english=voices.filter(v=>/^en(?:[-_]|$)/i.test(v.lang));
 const preferred=/\b(Samantha|Ava|Allison|Susan|Victoria|Karen|Moira|Tessa|Serena|Fiona|Zira|Hazel|Aria|Jenny|Sonia|Libby|Natasha|Clara|Michelle|Emily|Emma)\b|\bfemale\b/i;
 const female=english.filter(v=>preferred.test(v.name));
 const norm=(s:string)=>s.toLowerCase().replace('_','-');
 return female.find(v=>norm(v.lang)===norm(lang))||female[0]||english.find(v=>norm(v.lang)===norm(lang))||english[0];
}
