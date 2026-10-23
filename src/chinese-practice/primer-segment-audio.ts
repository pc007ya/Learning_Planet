import data from './primer-segments.json';
export const PRIMER_SEGMENTS=data;
export function segmentFor(zhuyin:string,allowSingleSymbol=false){
 if(!allowSingleSymbol&&/^[ㄅ-ㄩ]$/u.test(zhuyin.trim()))return undefined;
 return data.entries.find(e=>e.zhuyin===zhuyin.trim());
}
