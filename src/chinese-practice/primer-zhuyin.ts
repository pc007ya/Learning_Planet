const esc=(v:string)=>v.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
export function splitSyllables(value:string) {
 if(!/^[ㄅ-ㄩ˙ˊˇˋˉ\s]+$/u.test(value)) return null;
 const syllables=value.trim().split(/\s+/u);
 if(!syllables.every(s=>/^(?:˙)?[ㄅ-ㄩ]{1,3}[˙ˊˇˋˉ]?$/u.test(s)))return null;
 return syllables.map(s=>({original:s,symbols:Array.from(s.replace(/[˙ˊˇˋˉ]/gu,'')),tone:(s.match(/[˙ˊˇˋˉ]/u)||[''])[0]}));
}
function syllable(s:NonNullable<ReturnType<typeof splitSyllables>>[number]) {
 // Same separated symbols/tone structure as the existing Chinese word-card renderer.
 return `<span class="primer-syllable" aria-hidden="true"><span class="primer-phonetics">${s.symbols.map(x=>`<span>${x}</span>`).join('')}</span>${s.tone&&s.tone!=='ˉ'?`<span class="${s.tone==='˙'?'primer-neutral':'primer-tone'}">${s.tone}</span>`:''}</span>`;
}
export function verticalZhuyin(value:string) {
 const sounds=splitSyllables(value);if(!sounds)return esc(value);
 return `<span class="primer-syllable-row" role="text" aria-label="${esc(value)}">${sounds.map(syllable).join('')}</span>`;
}
export function annotatedHanzi(hanzi:string,zhuyin:string) {
 const sounds=splitSyllables(zhuyin),chars=Array.from(hanzi);
 if(!sounds||sounds.length!==chars.length)return `${esc(hanzi)} ${verticalZhuyin(zhuyin)}`;
 return `<span class="primer-annotated" role="text" aria-label="${esc(hanzi+'，'+zhuyin)}">${chars.map((c,i)=>`<span class="primer-character-reading" aria-hidden="true"><span class="primer-hanzi">${esc(c)}</span>${syllable(sounds[i])}</span>`).join('')}</span>`;
}
