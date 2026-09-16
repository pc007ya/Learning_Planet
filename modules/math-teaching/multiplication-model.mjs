export function createMultiplication(a,b){
  if(![a,b].every(n=>Number.isInteger(n)&&n>=1&&n<=9))throw Error('每組數量與組數都請填 1～9 的整數。');
  return {a,b,placed:0};
}
export function placeOne(s,group){
  if(s.placed>=s.a*s.b||group!==Math.floor(s.placed/s.a))return s;
  return {...s,placed:s.placed+1};
}
export function multiplicationHint(s){
  return s.placed===s.a*s.b?'每一組都放好了，算算總共有多少個。':`第 ${Math.floor(s.placed/s.a)+1} 組還差 ${s.a-s.placed%s.a} 個；每組都要有 ${s.a} 個。`;
}
export function multiplicationRecap(s){return [`每組 ${s.a} 個，共 ${s.b} 組。`,`${Array(s.b).fill(s.a).join('＋')}＝${s.a*s.b}`,`${s.a} × ${s.b}＝${s.a*s.b}。`, `交換後每組 ${s.b} 個、共 ${s.a} 組，分組方式不同，總數仍是 ${s.a*s.b}。`];}
