export function geometryValues(l,w,h){
  if(![l,w,h].every(v=>Number.isInteger(v)&&v>=1&&v<=20))throw Error('長、寬、高請輸入 1～20 的整數。');
  return {l,w,h,perimeter:2*(l+w),area:l*w,volume:l*w*h,surface:2*(l*w+l*h+w*h),faces:[l*w,l*w,l*h,l*h,w*h,w*h]};
}
