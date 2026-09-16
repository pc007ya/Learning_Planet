export const lessons = {
  ten: {title:'湊十',subtitle:'先裝滿十格，再數剩下的',sign:'＋',examples:[[8,5],[9,4],[7,6]]},
  add: {title:'兩位數加法',subtitle:'個位合起來，滿十換一根',sign:'＋',examples:[[28,15],[36,27],[24,13]]},
  sub: {title:'兩位數減法',subtitle:'不夠拿，拆一個十來幫忙',sign:'−',examples:[[32,17],[41,16],[46,23]]}
};
export function createState(kind,a,b){
  if(!lessons[kind]||![a,b].every(Number.isInteger)||a<1||b<1||a>99||b>99||(kind==='sub'&&a<b)||(kind==='ten'&&(a>9||b>9||a+b<=10)))throw Error('不支援的教材數值');
  return {kind,a,b,t:Math.floor(a/10),u:a%10,rt:Math.floor(b/10),ru:b%10,removedU:0,removedT:0,exchanged:false,events:[]};
}
export function currentStep(s){
  if(s.kind==='ten')return s.u<10?{action:'unit',title:'先湊成十',instruction:`點右邊的積木，移 ${10-s.u} 個到左邊。`,hint:`左邊有 ${s.u} 個，十格框還空 ${10-s.u} 格。`,count:10-s.u}:null;
  if(s.kind==='add'){
    if(s.ru)return {action:'unit',title:'合併個位',instruction:'點右邊的「一」，移到左邊個位區。',hint:`右邊還有 ${s.ru} 個一，先把個位放在一起。`,count:s.ru};
    if(s.u>=10)return {action:'exchange',title:'滿十換一',instruction:'點「換成一個十」，把 10 個一換成 1 個十。',hint:`${s.u} 個一可以分成 10 和 ${s.u-10}，數量沒有改變。`,count:1};
    if(s.rt)return {action:'rod',title:'合併十位',instruction:'點右邊的十位棒，移到左邊十位區。',hint:`一根有 10 格，右邊還有 ${s.rt} 根。`,count:s.rt};
  } else {
    if(s.u<s.b%10-s.removedU)return {action:'exchange',title:'拆十成一',instruction:'個位不夠拿，點「拆開一個十」。',hint:`要拿 ${s.b%10} 個一，現在只有 ${s.u} 個；拆一根可多出 10 個一。`,count:1};
    if(s.removedU<s.b%10)return {action:'unit',title:'拿走個位',instruction:`點左邊的「一」，還要拿走 ${s.b%10-s.removedU} 個。`,hint:`減去 ${s.b}，先拿走 ${s.b%10} 個一。已拿 ${s.removedU} 個。`,count:s.b%10-s.removedU};
    if(s.removedT<Math.floor(s.b/10))return {action:'rod',title:'拿走十位',instruction:`點左邊的十位棒，還要拿走 ${Math.floor(s.b/10)-s.removedT} 根。`,hint:`${s.b} 裡有 ${Math.floor(s.b/10)} 個十；不是拿走 ${s.b} 根。`,count:Math.floor(s.b/10)-s.removedT};
  }
  return null;
}
export function act(s,action){
  const step=currentStep(s);if(!step||step.action!==action)return s;
  const n={...s,events:[...s.events]};
  if(action==='exchange'){
    if(s.kind==='add'){n.u-=10;n.t++;}else{n.u+=10;n.t--;}
    n.exchanged=true;
  }else if(action==='unit'){
    if(s.kind==='sub'){n.u--;n.removedU++;}else{n.u++;n.ru--;}
  }else if(s.kind==='sub'){n.t--;n.removedT++;}else{n.t++;n.rt--;}
  n.events.push({action,title:step.title,t:n.t,u:n.u,rt:n.rt,ru:n.ru});return n;
}
export function value(s){return s.t*10+s.u+(s.kind==='sub'?s.removedT*10+s.removedU:s.rt*10+s.ru);}
export function answer(s){return s.kind==='sub'?s.a-s.b:s.a+s.b;}
export function recap(s){
  if(s.kind==='ten'){const need=10-s.a;return [`${s.a} 還差 ${need} 就是 10。`,`把 ${s.b} 分成 ${need} 和 ${s.b-need}。`,`${s.a}＋${s.b}＝10＋${s.b-need}＝${answer(s)}。`];}
  if(s.kind==='add')return [`先合併個位：${s.a%10}＋${s.b%10}＝${s.a%10+s.b%10}。`,s.a%10+s.b%10>=10?'把 10 個一換成 1 個十；不是多出 10。':'個位不到 10，不用換成十。',`合併十位後，${s.a}＋${s.b}＝${answer(s)}。`];
  return [s.a%10<s.b%10?`把 1 個十拆成 10 個一：${s.a}＝${Math.floor(s.a/10)-1} 個十和 ${s.a%10+10} 個一。`:'個位夠拿，這題不用拆十。',`拿走 ${s.b%10} 個一，再拿走 ${Math.floor(s.b/10)} 個十。`,`${s.a}−${s.b}＝${answer(s)}。`];
}
