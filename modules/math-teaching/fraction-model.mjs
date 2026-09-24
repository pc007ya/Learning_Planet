export function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b)[a,b]=[b,a%b];return a||1;}
export function fractionLesson(a,d,b,e,op){
  if(![a,d,b,e].every(Number.isInteger)||d<1||d>10||e<1||e>10||a<0||a>d||b<0||b>e||!['add','sub','compare'].includes(op))throw Error('分母請填 1～10；分子請填 0～分母的整數。');
  const denominator=d/gcd(d,e)*e,left=a*denominator/d,right=b*denominator/e,numerator=op==='add'?left+right:left-right,divisor=gcd(numerator,denominator);
  return {a,d,b,e,op,denominator,left,right,numerator,divisor,reducedNumerator:numerator/divisor,reducedDenominator:denominator/divisor};
}
export function fractionSteps(s){if(s.op==='compare')return [
  `兩個整體一樣大，才能比較。藍色取 ${s.a}/${s.d}，橘色取 ${s.b}/${s.e}。`,
  `切成相同大小：${s.a}/${s.d}＝${s.left}/${s.denominator}；${s.b}/${s.e}＝${s.right}/${s.denominator}。切得更細，總量不變。`,
  `每片都是 1/${s.denominator}，比較份數：${s.left} ${s.left===s.right?'＝':s.left>s.right?'＞':'＜'} ${s.right}。`,
  `${s.a}/${s.d} ${s.left===s.right?'＝':s.left>s.right?'＞':'＜'} ${s.b}/${s.e}。分母不同時，不能只看分子的大小。`
];return [
  `每個圓盤同樣大。左邊分成 ${s.d} 等份，取 ${s.a} 份；右邊分成 ${s.e} 等份，取 ${s.b} 份。`,
  `先讓每片一樣大：公分母是 ${s.denominator}。${s.a}/${s.d}＝${s.left}/${s.denominator}；${s.b}/${s.e}＝${s.right}/${s.denominator}。`,
  `分母不相加減，只計算分子：${s.left} ${s.op==='add'?'＋':'−'} ${s.right}＝${s.numerator}，結果是 ${s.numerator}/${s.denominator}。${s.numerator<0?'負號表示右邊比左邊多；圓盤呈現差的大小。':''}`,
  s.divisor>1?`分子和分母同除以 ${s.divisor}：${s.numerator}/${s.denominator}＝${s.reducedNumerator}/${s.reducedDenominator}。每片變大，總量不變。`:`${s.numerator}/${s.denominator} 已經是最簡分數，不用再約分。`
];}
