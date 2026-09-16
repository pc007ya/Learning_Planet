// Boundaries are fractions of one whole disk, not fractions of the answer.
export function resultColorBands(s){
  if(s.op==='add')return [{start:0,end:s.a/s.d,color:0},{start:s.a/s.d,end:s.a/s.d+s.b/s.e,color:1}];
  return [{start:0,end:Math.abs(s.numerator/s.denominator),color:s.numerator<0?1:0}];
}
