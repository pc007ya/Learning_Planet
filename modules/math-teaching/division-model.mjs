export function divisionLesson(dividend,divisor){
  if(!Number.isInteger(dividend)||dividend<10||dividend>9999||!Number.isInteger(divisor)||divisor<1||divisor>99)throw Error('被除數請填 10～9999，除數請填 1～99 的整數。');
  const digits=String(dividend).split('').map(Number),steps=[];let remainder=0,started=false;
  for(let index=0;index<digits.length;index++){
    const partial=remainder*10+digits[index],digit=Math.floor(partial/divisor),product=digit*divisor,nextRemainder=partial-product,leading=!started&&digit===0&&index<digits.length-1;
    if(!leading)started=true;
    steps.push({index,brought:digits[index],partial,digit,product,remainder:nextRemainder,leading});
    remainder=nextRemainder;
  }
  return {dividend,divisor,digits,steps,quotient:Math.floor(dividend/divisor),remainder,exact:remainder===0};
}
export function divisionHint(lesson,index,phase){
  const step=lesson.steps[index],{partial,digit,product,remainder,brought,leading}=step,d=lesson.divisor;
  if(phase==='quotient')return leading?`先取下 ${brought}，${partial} 比除數 ${d} 小；最高位不寫商 0，把下一位取下來。`:`目前取下 ${partial}，找最大的整數，乘以 ${d} 後不超過 ${partial}。這一位的商是 ${digit}。`;
  if(phase==='product')return `用這一位的商 ${digit} 乘除數 ${d}，乘積是 ${product}，要對齊現在處理的數位。`;
  return `${partial} 減 ${product} 剩 ${remainder}。餘數必須小於除數 ${d}；有下一位時，再把它取下來。`;
}
export function divisionPrompt(lesson,index,phase){
  const step=lesson.steps[index],d=lesson.divisor;
  if(phase==='quotient')return `目前取下 ${step.partial}，想一想 ${d} 可以放進去幾次；寫下 0～9 的一位數。`;
  if(phase==='product')return `用剛寫的商乘除數 ${d}，把乘積寫在目前處理的數位下方。`;
  return `從 ${step.partial} 減去這一步的乘積。餘數要小於 ${d}，才能取下下一位。`;
}
