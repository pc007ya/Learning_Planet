(function(root){
'use strict';
const definitions=[
[118,2,'兩步驟生活應用題','story','plan-2-05'],[119,3,'找規律','pattern','plan-3-02'],[120,3,'公斤與公克','mass','plan-3-03'],[121,3,'圓的認識','circle','plan-3-04'],[122,3,'時間的計算','clock','plan-3-05'],[123,3,'統計表','table','plan-3-06'],[124,4,'一億以內的數','large','plan-4-01'],[125,4,'多位數乘除','arithmetic','plan-4-02'],[126,4,'公里與距離','distance','plan-4-03'],[127,4,'三角形分類','triangle','plan-4-04'],[128,4,'多位小數','decimal','plan-4-05'],[129,4,'整數四則與括號','order','plan-4-06'],[130,4,'統計圖','chart','plan-4-07'],[131,4,'概數與四捨五入','round','plan-4-08'],[132,4,'數量規律','relation','plan-4-09'],[133,4,'小數乘整數','decimalMul','plan-4-10'],[134,4,'四邊形分類','quad','plan-4-11'],[135,4,'等值分數','equivalent','plan-4-12'],[136,4,'簡化計算','simplify','plan-4-13'],[137,4,'時間單位換算與計算','duration','plan-4-14']
];
const units=definitions.map(([n,grade,title,kind,plan])=>({id:'u'+n,grade,title,kind,plan,batch:2}));
const byId=id=>units.find(u=>u.id===id);
const shuffle=(a,rng)=>{a=[...a];for(let i=a.length-1;i;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const fixed=(n,p=2)=>p===0?String(n):(n/10**p).toFixed(p).replace(/\.?0+$/,'')||'0';
const time=n=>`${n>=1440?'次日 ':''}${String(Math.floor(n/60)%24).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;
const duration=(n,unit='分')=>`${Math.floor(n/60)} ${unit==='分'?'時':'分'} ${n%60} ${unit}`;
const alternatives=a=>typeof a==='number'?[a,Math.max(0,a-1),a+1,a+10,a+100]:[a];
function question(id,index=0,rng=Math.random){
 const u=byId(id);if(!u)throw Error('Unknown concept unit');const r=(a,b)=>a+Math.floor(rng()*(b-a+1)),v=((index%3)+3)%3;
 const q={unitId:id,kind:u.kind,title:u.title,variant:v,stages:[],fig:'foundation',figData:{}};
 const stage=(prompt,answer,choices,explain)=>q.stages.push({prompt,answer,choices:[...new Set([answer,...(choices||alternatives(answer))])].slice(0,4),explain});
 const finish=(stem,ans,choices)=>{q.stem=stem;q.ans=ans;q.opts=shuffle([...new Set([ans,...(choices||alternatives(ans))])].slice(0,4),rng);};
 if(u.kind==='story'){
  const a=v===2?r(3,9):r(12,40),b=v===2?r(2,5):r(3,9),c=r(2,Math.min(8,a*b));Object.assign(q,{a,b,c,object:v===1?'star':'apple',objectName:v===1?'星星':'蘋果'});
  const mul=v===2,mid=mul?a*b:a+b;q.mid=mid;q.labels=mul?[`${b} 盒`, `每盒 ${a} 顆`,`送出 ${c} 顆`]:[`原有 ${a} 顆`,`再得 ${b} 顆`,`送出 ${c} 顆`];
  finish(mul?`有 ${b} 盒${q.objectName}，每盒 ${a} 顆，送出 ${c} 顆，還有幾顆？`:`有 ${a} 顆${q.objectName}，再得到 ${b} 顆，送出 ${c} 顆，還有幾顆？`,mid-c);
  stage('先算原來共有多少，要用？',mul?'×':'＋',['＋','−','×','÷'],mul?'每盒一樣多，用乘法合起來。':'再得到的，要加上去。');
  stage(mul?`${a} × ${b} ＝ ？`:`${a} ＋ ${b} ＝ ？`,mid,null,'先記住共有多少顆。');
  stage('送出一些，要用？','−',['＋','−','×','÷'],'送出後變少，用減法。');stage(`${mid} − ${c} ＝ ？`,mid-c,null,`最後剩 ${mid-c} 顆。`);
 }else if(u.kind==='pattern'){
  const a=r(1,20),d=r(2,8);q.d=d;q.rule=v===2?'倍增':v===1?'遞減':'遞增';q.values=Array.from({length:5},(_,i)=>v===2?a*2**i:v===1?a+d*(5-i):a+d*i);
  finish(`${q.values.slice(0,4).join('、')}、？`,q.values[4]);
  stage('相鄰兩項的規律是？',v===2?'× 2':`${v===1?'−':'＋'} ${d}`,[`＋ ${d}`,`− ${d}`,'× 2','不變'],'每一組相鄰的數都要符合規律。');stage('接著一項是多少？',q.ans,null,`${q.values[3]} ${v===2?'× 2':v===1?'− '+d:'＋ '+d} ＝ ${q.ans}`);
 }else if(['mass','distance'].includes(u.kind)){
  q.major=r(1,9);q.minor=r(1,99)*10;q.n=q.major*1000+q.minor;q.big=u.kind==='mass'?'kg':'km';q.small=u.kind==='mass'?'g':'m';
  const mixed=`${q.major} ${q.big} ${q.minor} ${q.small}`;
  finish(v===1?`${q.n} ${q.small} ＝ ？`:`${mixed} ＝ 幾 ${q.small}？`,v===1?mixed:q.n,v===1?[mixed,`${q.major+1} ${q.big} ${q.minor} ${q.small}`,`${q.major} ${q.big} ${q.minor/10} ${q.small}`,`${q.major} ${q.big} ${q.minor+100} ${q.small}`]:[q.n,q.major*100+q.minor,q.n+1000,q.n+10]);
  stage(`1 ${q.big} ＝ 幾 ${q.small}？`,1000,[10,100,1000,10000],'大單位換小單位，要乘 1000。');stage(`${q.major} × 1000 ＝ ？`,q.major*1000,null,`${q.major} ${q.big} ＝ ${q.major*1000} ${q.small}`);stage(q.stem,q.ans,q.opts,`${q.major*1000} ＋ ${q.minor} ＝ ${q.n} ${q.small}`);
 }else if(u.kind==='circle'){
  q.radius=r(2,25);q.angle=r(0,11)*30;q.feature=['半徑','直徑','圓心'][v];
  if(v===2)finish(`半徑 ${q.radius} cm 的圓，圖中 O 是？`,'圓心',['圓心','半徑','直徑','圓周']);
  else finish(v===0?`半徑 ${q.radius} cm，直徑是幾 cm？`:`直徑 ${q.radius*2} cm，半徑是幾 cm？`,v===0?q.radius*2:q.radius);
  stage('從圓心到圓周的線段叫？','半徑',['半徑','直徑','圓心','圓周'],'同一圓內，所有半徑一樣長。');stage('通過圓心、兩端都在圓周的是？','直徑',['半徑','直徑','圓心','圓周'],'直徑由兩條半徑接成。');stage(q.stem,q.ans,q.opts,'直徑 ＝ 半徑 × 2。');
 }else if(u.kind==='clock'){
  q.start=r(6,23)*60+r(0,11)*5;q.elapsed=r(2,24)*5;q.end=q.start+q.elapsed;
  finish(v===1?`從 ${time(q.start)} 到 ${time(q.end)}，經過幾分鐘？`:`${time(q.start)} 出發，${q.elapsed} 分鐘後是？`,v===1?q.elapsed:time(q.end),v===1?null:[time(q.end),time(q.end+60),time(q.end-5),time(q.end+5)]);
  const toHour=60-q.start%60;stage('1 小時有幾分鐘？',60,[10,30,60,100],'分針走一圈是 60 分鐘。');stage(`從 ${time(q.start)} 到下一個整點，要幾分鐘？`,toHour,null,`60 − ${q.start%60} ＝ ${toHour}`);stage(q.stem,q.ans,q.opts,`${time(q.start)} ＋ ${q.elapsed} 分 ＝ ${time(q.end)}`);
 }else if(u.kind==='table'||u.kind==='chart'){
  q.labels=['蘋果','香蕉','葡萄','橘子'];q.scale=u.kind==='chart'?r(1,4)*2:1;q.counts=Array.from({length:4},()=>r(2,9)*q.scale);q.pick=r(0,3);q.other=(q.pick+1)%4;q.total=q.counts.reduce((a,b)=>a+b,0);q.chart=v===2?'line':'bar';if(u.kind==='chart'&&v===2)q.labels=['週一','週二','週三','週四'];
  if(v===0)finish(`圖${u.kind==='table'?'表':''}中${q.labels[q.pick]}有幾票？`,q.counts[q.pick]);
  else if(v===1)finish('四種水果共有幾票？',q.total);
  else finish(`${q.labels[q.pick]}和${q.labels[q.other]}的票數相差多少？`,Math.abs(q.counts[q.pick]-q.counts[q.other]));
  stage(u.kind==='chart'?'縱軸一格代表幾票？':`${q.labels[q.pick]}這一列有幾票？`,u.kind==='chart'?q.scale:q.counts[q.pick],null,u.kind==='chart'?'先讀刻度，再讀高度。':'先對齊類別，再讀數量。');stage(`${q.labels[q.other]}有幾票？`,q.counts[q.other],null,'橫向找類別，縱向找數量。');stage(q.stem,q.ans,q.opts,v===1?q.counts.join(' ＋ ')+` ＝ ${q.total}`:v===2?`較多的減較少的，相差 ${q.ans} 票。`:`${q.labels[q.pick]}對應 ${q.ans} 票。`);
 }else if(u.kind==='large'){
  q.n=v===2?100000000:r(1000,9999)*10000+r(0,9999);q.power=r(0,7);q.digits=String(q.n).padStart(9,'0').split('').map(Number);q.labels=['億','千萬','百萬','十萬','萬','千','百','十','個'];const label=q.labels[8-q.power],digit=Math.floor(q.n/10**q.power)%10;
  finish(v===0?`${q.n} 的${label}位數字是？`:v===1?`${q.n} 中，${label}位的 ${digit} 表示多少？`:`${r(1,9)} 千萬再補到一億，一億寫成數字是？`,v===0?digit:v===1?digit*10**q.power:100000000);
  stage('每往左移一個數位，單位變成幾倍？',10,[10,100,1000,10000],'四位分一組：個、萬、億。');stage(`${label}位的單位是多少？`,10**q.power,null,`1 個${label} ＝ ${10**q.power}`);stage(q.stem,q.ans,q.opts,`${q.n} ＝ ${q.digits.map((n,i)=>n?`${n} × ${10**(8-i)}`:'').filter(Boolean).join(' ＋ ')}`);
 }else if(u.kind==='arithmetic'){
  q.op=v===1?'÷':'×';q.a=r(101,999);q.b=r(12,89);
  if(q.op==='×'){q.part1=q.a*(q.b%10);q.part2=q.a*Math.floor(q.b/10)*10;finish(`${q.a} × ${q.b} ＝ ？`,q.a*q.b);stage(`${q.a} × ${q.b%10} ＝ ？`,q.part1,null,'先乘個位。');stage(`${q.a} × ${Math.floor(q.b/10)*10} ＝ ？`,q.part2,null,'再乘十位，積要對齊十位。');stage('把兩個部分積相加',q.ans,q.opts,`${q.part1} ＋ ${q.part2} ＝ ${q.ans}`);}
  else{q.quotient=r(11,99);q.remainder=r(0,q.b-1);q.a=q.b*q.quotient+q.remainder;const ans=`${q.quotient} 餘 ${q.remainder}`;finish(`${q.a} ÷ ${q.b} ＝ ？`,ans,[ans,`${q.quotient+1} 餘 ${q.remainder}`,`${q.quotient} 餘 ${q.remainder+q.b}`,`${q.quotient-1} 餘 ${q.remainder}`]);stage('餘數必須怎樣？','小於除數',['小於除數','等於除數','大於除數'],'餘數夠分一組，就要繼續分。');stage(`先分 ${Math.floor(q.quotient/10)*10} 組，還剩多少？`,q.a-q.b*Math.floor(q.quotient/10)*10,null,'先用十組為單位試商，再分剩下的。');stage(q.stem,ans,q.opts,`${q.b} × ${q.quotient} ＋ ${q.remainder} ＝ ${q.a}`);}
 }else if(u.kind==='triangle'){
  if(v===0){const k=r(2,15),type=r(0,2);q.sides=type===0?[k,k,k]:type===1?[k,k,k+1]:[3*k,4*k,5*k];q.classification=['正三角形','等腰三角形','不等邊三角形'][type];finish(`邊長 ${q.sides.join('、')} cm，按邊分類是？`,q.classification,['正三角形','等腰三角形','不等邊三角形']);stage('有幾條一樣長的邊？',type===0?3:type===1?2:0,[0,2,3],'按邊長分類，先比較三條邊。');}
  else {const a=r(20,40),b=r(20,40),type=r(0,2);q.angles=type===0?[a,90-a,90]:type===1?[a,b,180-a-b]:[a+25,60,95-a];q.classification=['直角三角形','鈍角三角形','銳角三角形'][type];finish(`三個角 ${q.angles.join('°、')}°，按角分類是？`,q.classification,['直角三角形','鈍角三角形','銳角三角形']);stage('最大的角是多少度？',Math.max(...q.angles),null,'找最大角，再與 90° 比較。');}
  stage(q.stem,q.ans,q.opts,'按邊長與按角度是兩種不同的分類方式。');
 }else if(u.kind==='decimal'){
  q.n=r(1,9999);q.m=r(1,9999);q.power=r(1,3);q.digits=String(q.n).padStart(4,'0').split('').map(Number);q.labels=['個','十分','百分','千分'];const val=(q.n/1000).toFixed(3);
  if(v===1)finish(`${val} 和 ${(q.m/1000).toFixed(3)}，哪個較大？`,q.n===q.m?'一樣大':q.n>q.m?val:(q.m/1000).toFixed(3),[val,(q.m/1000).toFixed(3),'一樣大']);
  else finish(`${val} 的${q.labels[q.power]}位數字是？`,q.digits[q.power]);
  stage('小數點右邊第三位是？','千分位',['十分位','百分位','千分位'],'由左到右：十分、百分、千分。');stage(`${val} 有幾個千分之一？`,q.n,null,`${val} ＝ ${q.n} / 1000`);stage(q.stem,q.ans,q.opts,v===1?'先比整數，再依序比十分、百分、千分位。':`${q.labels[q.power]}位是 ${q.digits[q.power]}。`);
 }else if(u.kind==='order'){
  q.a=r(3,25);q.b=r(2,15);q.c=r(2,9);q.expression=v===0?`(${q.a} ＋ ${q.b}) × ${q.c}`:v===1?`${q.a} ＋ ${q.b} × ${q.c}`:`${q.a*q.c} ÷ (${q.b+q.c} − ${q.b})`;q.first=v===0?q.a+q.b:v===1?q.b*q.c:q.c;q.firstExpression=v===0?`${q.a} ＋ ${q.b}`:v===1?`${q.b} × ${q.c}`:`${q.b+q.c} − ${q.b}`;
  finish(`${q.expression} ＝ ？`,v===0?(q.a+q.b)*q.c:v===1?q.a+q.b*q.c:q.a);stage('先算哪一段？',q.firstExpression,[q.firstExpression,`${q.a} ＋ ${q.c}`,`${q.b} ＋ ${q.c}`],'先括號，再乘除，最後加減；同級由左到右。');stage(`${q.firstExpression} ＝ ？`,q.first,null,'先把這一段換成算出的數。');stage(q.stem,q.ans,q.opts,`${q.expression} ＝ ${q.ans}`);
 }else if(u.kind==='round'){
  q.place=10**(v+1);q.n=r(1,89)*q.place+r(0,q.place-1);q.low=Math.floor(q.n/q.place)*q.place;q.high=q.low+q.place;q.mid=q.low+q.place/2;
  finish(`${q.n} 四捨五入到${['十','百','千'][v]}位，約是多少？`,Math.round(q.n/q.place)*q.place,[Math.round(q.n/q.place)*q.place,q.low,q.high,q.high+q.place,q.low-q.place].filter(x=>x>=0));stage('要看哪個數位？',['個位','十位','百位'][v],['個位','十位','百位','千位'],'看取概數的下一位；0～4 捨去，5～9 進一。');stage('兩端概數的中點是多少？',q.mid,null,`(${q.low} ＋ ${q.high}) ÷ 2 ＝ ${q.mid}`);stage(q.stem,q.ans,q.opts,q.n>=q.mid?`${q.n} 到達或超過中點，進到 ${q.high}。`:`${q.n} 尚未到中點，取 ${q.low}。`);
 }else if(u.kind==='relation'){
  q.n=r(3,20);q.rate=v===0?r(2,9):v===1?3:2;q.offset=v===0?0:v===1?1:2;q.labels=v===0?['盒數','顆數']:v===1?['正方形數','火柴數']:['桌數','座位數'];q.values=Array.from({length:4},(_,i)=>q.rate*(i+1)+q.offset);const ans=q.rate*q.n+q.offset;
  finish(v===0?`每盒 ${q.rate} 顆，${q.n} 盒共有幾顆？`:v===1?`${q.n} 個正方形排成一列，共用相鄰邊，要幾根火柴？`:`一列桌子，兩側各每桌 1 位、兩端各 1 位。${q.n} 張桌可坐幾人？`,ans);stage(`每多 1 ${v===0?'盒':v===1?'個正方形':'張桌'}，增加多少？`,q.rate,null,'找出每增加一組時，增加的固定數量。');stage('規律算式是？',`${q.rate} × ${q.n} ＋ ${q.offset}`,[`${q.rate} × ${q.n} ＋ ${q.offset}`,`${q.rate+1} × ${q.n}`,`${q.rate} ＋ ${q.n}`],'固定增加的部分乘組數，再加兩端或起始部分。');stage(q.stem,ans,q.opts,`${q.rate} × ${q.n} ＋ ${q.offset} ＝ ${ans}`);
 }else if(u.kind==='decimalMul'){
  q.base=r(11,299);q.factor=r(2,9);q.n=q.base*q.factor;q.precision=v===0?1:2;const val=fixed(q.base,q.precision);finish(`${val} × ${q.factor} ＝ ？`,Number(fixed(q.n,q.precision)),[Number(fixed(q.n,q.precision)),Number(fixed(q.n,q.precision+1)),Number(fixed(q.n,q.precision-1)),Number(fixed(q.n+1,q.precision))]);stage(`先算 ${q.base} × ${q.factor}`,q.n,null,'先用整數算乘積。');stage('原來每一份用了幾位小數？',q.precision,[0,1,2,3],'乘整數後，小數單位不變。');stage(q.stem,q.ans,q.opts,`${q.n} 個${q.precision===1?'十分之一':'百分之一'} ＝ ${q.ans}`);
 }else if(u.kind==='quad'){
  q.type=r(0,4);q.a=r(3,18);q.b=r(2,q.a-1);q.classification=['正方形','長方形','平行四邊形','菱形','梯形'][q.type];q.properties=['四邊等長、四個直角','對邊等長、四個直角、鄰邊不等長','兩組對邊平行、鄰邊不等長、沒有直角','四邊等長、沒有直角','只有一組對邊平行'][q.type];finish(`圖形標示 ${q.a} cm；${q.properties}。最精確的名稱是？`,q.classification,shuffle(['正方形','長方形','平行四邊形','菱形','梯形'].filter(x=>x!==q.classification),rng).slice(0,3));stage('有幾組對邊平行？',q.type===4?1:2,[0,1,2],'看對邊是否始終保持相同距離。');stage('有沒有直角？',q.type<=1?'有':'沒有',['有','沒有'],'不能只靠圖形擺放方向判斷。');stage(q.stem,q.ans,q.opts,'正方形也屬於長方形和菱形；這裡選最精確的名稱。');
 }else if(u.kind==='equivalent'){
  q.d=r(2,9);q.n=r(1,q.d-1);q.k=r(2,5);q.d2=q.d*q.k;q.n2=q.n*q.k;
  finish(v===1?`${q.n2}/${q.d2} ＝ ？/${q.d}`:`${q.n}/${q.d} ＝ ？/${q.d2}`,v===1?q.n:q.n2);stage('分母變成幾倍？',q.k,null,`${q.d2} ÷ ${q.d} ＝ ${q.k}`);stage('要保持一樣大，分子與分母要？','同乘或同除一個非零數',['同乘或同除一個非零數','只改分母','分子分母都加 1'],'切得更細，份數也等倍增加。');stage(q.stem,q.ans,q.opts,`${q.n}/${q.d} ＝ ${q.n2}/${q.d2}`);
 }else if(u.kind==='simplify'){
  q.a=r(12,89);q.b=v===0?99:v===1?101:25;q.c=v===2?r(2,15)*4:r(2,9);q.expression=v===2?`${q.a} × 25 × ${q.c}`:`${q.a} × ${q.b}`;const strategy=v===0?`${q.a} × (100 − 1)`:v===1?`${q.a} × (100 ＋ 1)`:`${q.a} × (25 × ${q.c})`;q.first=v===2?25*q.c:q.a*100;
  finish(`${q.expression} ＝ ？`,v===2?q.a*25*q.c:q.a*q.b);stage('哪個改寫保持原來的值？',strategy,[strategy,`${q.a} ＋ ${q.b}`,`${q.a} × 100`],'用分配律或結合律，保留原來的數量。');stage(v===2?`25 × ${q.c} ＝ ？`:`${q.a} × 100 ＝ ？`,q.first,null,'先湊成好算的整百數。');stage(q.stem,q.ans,q.opts,v===2?`${q.a} × ${q.first} ＝ ${q.ans}`:`${q.first} ${v===0?'−':'＋'} ${q.a} ＝ ${q.ans}`);
 }else if(u.kind==='duration'){
  q.a=r(1,8);q.b=r(1,59);q.c=r(1,4);q.d=r(1,59);q.unit=v===2?'秒':'分';q.base=q.a*60+q.b;q.extra=q.c*60+q.d;q.n=v===1?q.base+q.extra:q.base;
  finish(v===1?`${duration(q.base)} ＋ ${duration(q.extra)} ＝ ？`:`${duration(q.base,q.unit)} ＝ 幾${q.unit}？`,v===1?duration(q.n):q.n,v===1?[duration(q.n),duration(q.n+60),duration(q.n-60),duration(q.n+1)]:null);stage(`1 ${q.unit==='秒'?'分':'時'} ＝ 幾${q.unit}？`,60,[10,60,100],'時間的時、分、秒用 60 進位。');stage(`${q.a} × 60 ＋ ${q.b} ＝ ？`,q.base,null,`先換成 ${q.base} ${q.unit}。`);stage(q.stem,q.ans,q.opts,v===1?`${q.base} ＋ ${q.extra} ＝ ${q.n} 分 ＝ ${duration(q.n)}`:`${q.a} × 60 ＋ ${q.b} ＝ ${q.n} ${q.unit}`);
 }
 q.stages.forEach(s=>s.choices=shuffle(s.choices,rng));q.steps=q.stages.length;q.hint=q.stages[0].explain;q.explain=q.stages.map(s=>s.explain).join(' ');return q;
}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text=(x,y,s,size=22,fill='#193b4a')=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" fill="${fill}">${esc(s)}</text>`;
const rect=(x,y,w,h,fill='#6ad6ca')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${fill}" stroke="#31546a"/>`;
const art=(key,x,y,w,h)=>`<image href="${root.MathConceptObjects?.[key]||''}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid meet"/>`;
const line=(x,y,a,b,color='#31546a',width=3)=>`<path d="M${x} ${y}L${a} ${b}" fill="none" stroke="${color}" stroke-width="${width}"/>`;
function picture(q,step=0){
 let b='',reveal=step>=q.steps;
 const boxes=items=>items.map((s,i)=>rect(30+i*600/items.length,120,580/items.length,95,i<step?'#b6f2e4':'#fffaf0')+text(30+(i+.48)*600/items.length,175,s,22)).join('');
 if(q.kind==='story'){
  const asset=root.MathConceptObjects?.[q.object]||`images/math-master/v1/objects/${q.object==='star'?'star-v1':'apple-red-object-v1'}.png`;
  b=`<defs><image id="story-object" href="${asset}" width="32" height="32"/></defs>`;
  const item=(x,y,opacity=1)=>`<use href="#story-object" x="${x}" y="${y}" opacity="${opacity}"/>`;
  b+=rect(20,45,420,280,'#fffaf0')+rect(465,45,175,125,'#e1f6eb')+rect(465,195,175,130,'#f9e3df');
  b+=text(230,35,step>=2?'合起來':'原有',20)+text(550,35,q.variant===2?'每盒':'再得到',20)+text(550,185,'送出',20);
  if(q.variant===2&&step<2){for(let g=0;g<q.b;g++){const x=28+g%3*136,y=54+Math.floor(g/3)*133;b+=rect(x,y,128,126,'#eef5ec');for(let i=0;i<q.a;i++)b+=item(x+12+i%3*34,y+10+Math.floor(i/3)*34);}b+=text(550,120,`${q.a} × ${q.b}`,26);}
  else {const n=reveal?q.ans:step>=2?q.mid:q.a;for(let i=0;i<n;i++){const x=30+i%10*40,y=55+Math.floor(i/10)*50;b+=item(x,y);if(step===3&&i>=q.mid-q.c)b+=`<rect x="${x-2}" y="${y-2}" width="36" height="36" rx="6" fill="none" stroke="#c35f4c" stroke-dasharray="4 3" stroke-width="2"/>`;}
   if(q.variant!==2&&step<2)for(let i=0;i<q.b;i++)b+=item(492+i%3*43,55+Math.floor(i/3)*36);else b+=text(550,115,'✓',32);
  }
  for(let i=0;i<q.c;i++)b+=item(492+i%3*43,207+Math.floor(i/3)*36,reveal?1:.22);
  b+=text(330,365,`${q.a} ${q.variant===2?'×':'＋'} ${q.b} − ${q.c} ＝ ${reveal?q.ans:'？'}`,30);
 }
 else if(q.kind==='pattern'){b=boxes([...q.values.slice(0,4),reveal?q.ans:'？']);b+=text(330,285,step?q.stages[0].answer:'→　→　→　→',30);}
 else if(q.kind==='mass'){
  b=text(330,35,'1 kg ＝ 1000 g',26);
  for(let i=0;i<q.major;i++){const x=35+i*65;b+=`<defs><clipPath id="mass-crop-${i}"><rect x="${x}" y="92" width="60" height="75"/></clipPath></defs><image href="${root.MathConceptObjects?.weight||''}" x="${x}" y="65" width="60" height="100" preserveAspectRatio="none" clip-path="url(#mass-crop-${i})"/>`+text(x+30,185,'1 kg',16);}
  b+=rect(90,210,480,92,'#dbe6e8')+rect(160,220,340,70,'#fffaf0')+text(330,264,`${q.minor} g`,32)+text(330,335,`${q.major} kg ＋ ${q.minor} g`,27);
 }else if(q.kind==='distance'){
  const w=550/(q.major+1),end=55+(q.major+q.minor/1000)*w;
  b=line(55,220,605,220,'#7e989f',18)+line(55,220,end,220,'#22a9a0',8);
  for(let i=0;i<=q.major+1;i++){const x=55+i*w;b+=line(x,198,x,242)+text(x,275,`${i}`,17);}
  b+=art('walker',end-30,115,60,95)+text(330,310,'公里',22)+text(330,55,`${q.major} km ＋ ${q.minor} m`,27)+line(55+q.major*w,100,end,100,'#e2a13d',5)+text((55+q.major*w+end)/2,85,`${q.minor} m`,19);
 }else if(q.kind==='circle'){
  const angle=(q.angle||0)*Math.PI/180,x=330+115*Math.cos(angle),y=185+115*Math.sin(angle),x2=660-x,y2=370-y;b=`<circle cx="330" cy="185" r="115" fill="#d5f3ee" stroke="#31546a" stroke-width="3"/>`+line(x2,y2,x,y,'#b28adb',5)+line(330,185,x,y,'#ec9d31',6)+`<circle cx="330" cy="185" r="5" fill="#173b50"/>`+text(318,176,'O')+text(330,345,step>=2?'直徑 ＝ 2 × 半徑':'圓心 O · 圓周',24)+text(330, 30,q.variant===1?`直徑 ${q.radius*2} cm`:`半徑 ${q.radius} cm`,24);
 }else if(q.kind==='clock'){
  const clock=(cx,n)=>{let s=`<circle cx="${cx}" cy="175" r="95" fill="#fffaf0" stroke="#31546a" stroke-width="3"/>`;for(let i=1;i<=12;i++){const a=i*Math.PI/6;s+=text(cx+77*Math.sin(a),182-77*Math.cos(a),i,16);}const minute=n%60*Math.PI/30,hour=(n%720)*Math.PI/360;s+=line(cx,175,cx+65*Math.sin(minute),175-65*Math.cos(minute),'#247c91',4)+line(cx,175,cx+43*Math.sin(hour),175-43*Math.cos(hour),'#193b4a',6);return s;};b=clock(170,q.start)+text(170,310,time(q.start),25)+text(330,175,`＋${q.elapsed}分`,20);b+=q.variant===1||reveal?clock(490,q.end)+text(490,310,time(q.end),25):rect(395,80,190,190,'#fffaf0')+text(490,185,'？',50);
 }else if(q.kind==='table'||q.kind==='chart'){
  if(q.kind==='table'){b=text(210,50,'水果')+text(450,50,'票數');q.counts.forEach((n,i)=>{b+=rect(90,75+i*65,480,60,i===q.pick?'#b6f2e4':'#fffaf0')+art(['apple','banana','grape','orange'][i],105,82+i*65,42,42)+text(235,114+i*65,q.labels[i])+text(450,114+i*65,n);});}
  else {for(let i=0;i<=10;i++){b+=line(70,300-i*24,610,300-i*24,'#ccdadc',1)+text( 40,307-i*24,i*q.scale,14);}b+=line(70,60,70,300)+line(70,300,610,300);q.counts.forEach((n,i)=>{const x=135+i*135,y=300-n/q.scale*24;if(q.chart==='bar')b+=rect(x-30,y,60,300-y);else {b+=`<circle cx="${x}" cy="${y}" r="6" fill="#247c91"/>`;if(i)b+=line(x-135,300-q.counts[i-1]/q.scale*24,x,y,'#247c91',4);}b+=text(x,330,q.labels[i],18);if(q.chart==='bar')b+=art(['apple','banana','grape','orange'][i],x-17,337,34,34);});b+=text(330,30,q.chart==='line'?'每日投票數':'水果票數',18);}
 }else if(q.kind==='large'||q.kind==='decimal'){
  const ds=q.digits,ls=q.labels,w=600/ds.length;ds.forEach((n,i)=>{b+=rect(30+i*w,90,w-4,165,'#fffaf0')+text(30+(i+.46)*w,135,ls[i],ds.length>5?17:24)+text(30+(i+.46)*w,215,n,34);if(q.kind==='decimal'&&i===0)b+=text(30+w-2,215,'．',28);});if(q.kind==='decimal'&&q.variant===1)b+=text(330,325,`${(q.n/1000).toFixed(3)}　？　${(q.m/1000).toFixed(3)}`,30);else b+=text(330,325,q.kind==='large'?'個 → 萬 → 億':'1 → 0.1 → 0.01 → 0.001',24);
 }else if(q.kind==='arithmetic'){
  if(q.op==='×'){const tens=Math.floor(q.b/10)*10,w=450*tens/q.b,ones=450-w,cx=100+w/2,ox=q.b%10?100+w+ones/2:580;b=rect(100,85,w,150)+rect(100+w,85,ones,150,'#ffd070')+text(cx,60,tens)+text(ox,60,q.b%10)+text(65,170,q.a)+text(cx,170,step>=2?q.part2:'？',28)+text(ox,170,step>=1?q.part1:'？',Math.min(22,Math.max(12,ones/3)))+text(330,310,`${q.a} × (${tens} ＋ ${q.b%10})`,28);}
  else {b=boxes([`${q.a}`,`÷ ${q.b}`,reveal?`${q.quotient} 餘 ${q.remainder}`:'？']);b+=text(330,280,'被除數 ＝ 除數 × 商 ＋ 餘數',24)+text(330,325,'餘數 ＜ 除數',24);}
 }else if(q.kind==='triangle'){
  let sides=q.sides;if(!sides)sides=q.angles.map(a=>Math.sin(a*Math.PI/180)*100);const [a,c,base]=sides,px=(a*a+base*base-c*c)/(2*base),py=Math.sqrt(Math.max(0,a*a-px*px)),scale=250/Math.max(base,py),x0=205,y0=285,x2=x0+base*scale,xt=x0+px*scale,yt=y0-py*scale;b=`<polygon points="${x0},${y0} ${x2},${y0} ${xt},${yt}" fill="#b6f2e4" stroke="#31546a" stroke-width="3"/>`;
  b+=q.sides?text((x0+x2)/2,320,`${base} cm`)+text((x0+xt)/2-35,(y0+yt)/2,`${a} cm`,18)+text((x2+xt)/2+35,(y0+yt)/2,`${c} cm`,18):text(330, 40,q.angles.map(a=>a+'°').join('　'),28);b+=text(330,365,reveal?q.ans:'按邊長／按角度分類',22);
 }else if(q.kind==='quad'){
  const points=['220,80 420,80 420,280 220,280','150,100 490,100 490,260 150,260','230,100 550,100 430,270 110,270','330,60 510,180 330,300 150,180','230,100 420,100 520,280 120,280'][q.type];b=`<polygon points="${points}" fill="#b6f2e4" stroke="#31546a" stroke-width="3"/>`+text(330, 40,`${q.a} cm`,25)+text(330,350,reveal?q.ans:q.type<=1?'∟　∟　∟　∟':q.type===4?'一組對邊平行':'兩組對邊平行',24);if(q.type===1)b+=text(540,190,`${q.b} cm`);if(q.type===0)b+=text(470,190,`${q.a} cm`);
 }else if(q.kind==='round'){
  b=line(80,190,580,190);for(const [n,label] of [[q.low,q.low],[q.mid,q.mid],[q.high,q.high]]){const x=80+(n-q.low)/q.place*500;b+=line(x,175,x,205)+text(x,245,label,22);}const x=80+(q.n-q.low)/q.place*500;b+=`<circle cx="${x}" cy="190" r="9" fill="#e69631"/>`+text(x,150,q.n,26)+text(330,325,reveal?`≈ ${q.ans}`:'0～4 ↓　5～9 ↑',28);
 }else if(q.kind==='relation'){
  if(q.variant===1){for(let i=0;i<4;i++){b+=line(210+i*60,10,270+i*60,10,'#bd7735',5)+line(210+i*60,70,270+i*60,70,'#bd7735',5)+line(210+i*60,10,210+i*60,70,'#bd7735',5);}b+=line(450,10,450,70,'#bd7735',5);}else if(q.variant===2){for(let i=0;i<4;i++)b+=rect(175+i*65,20,65,40,'#e0be88')+rect(197+i*65,5,20,10)+rect(197+i*65,65,20,10);b+=rect(153,33,12,20)+rect(445,33,12,20);}else{for(let i=0;i<q.rate;i++)b+=art('apple',180+i*30,20,28,28);}
  b+=text(100,110,q.labels[0],18)+text(100,195,q.labels[1],18);q.values.forEach((n,i)=>{b+=rect(170+i*110,85,100,55,'#fffaf0')+text(220+i*110,120,i+1)+rect(170+i*110,155,100,65)+text(220+i*110,198,n);});b+=text(330,295,step>=2?`${q.rate} × ${q.n} ＋ ${q.offset}`:`${q.n} → ？`,30);
 }else if(q.kind==='equivalent'){
  [[q.n,q.d],[q.n2,q.d2]].forEach(([n,d],i)=>{for(let j=0;j<d;j++)b+=rect(50+j*560/d,70+i*145,560/d,75,j<n?'#6ad6ca':'#fffaf0');b+=text(330,175+i*145,i===0?(q.variant===1&&!reveal?`？/${q.d}`:`${q.n}/${q.d}`):(q.variant===1||reveal?`${q.n2}/${q.d2}`:`？/${q.d2}`),24);});
 }else if(q.kind==='decimalMul'){
  b=boxes(Array(q.factor).fill(fixed(q.base,q.precision)))+text(330,280,step?`${q.base} × ${q.factor} ＝ ${q.n}`:'每一份一樣多',28)+text(330,330,reveal?`＝ ${q.ans}`:`${q.precision} 位小數`,25);
 }else if(q.kind==='order'||q.kind==='simplify'){
  b=text(330,100,q.expression,32)+rect(60,145,540,85,'#b6f2e4')+text(330,198,step?q.stages[0].answer:'先選要算的部分',26)+text(330,310,reveal?`＝ ${q.ans}`:'↓　？',32);
 }else if(q.kind==='duration'){
  b=boxes([`${q.a} ${q.unit==='秒'?'分':'時'}`,`${q.b} ${q.unit}`])+text(330,275,`1 ${q.unit==='秒'?'分':'時'} ＝ 60 ${q.unit}`,28)+text(330,330,reveal?String(q.ans):q.variant===1?`再加 ${duration(q.extra)}`:'↓　？',26);
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 380" role="img" aria-label="${esc(q.stem)}"><rect width="660" height="380" rx="16" fill="#f5edda"/>${b}</svg>`;
}

function session(id,count=10,rng=Math.random){const out=[],seen=new Set();for(let i=0;out.length<count&&i<count*200;i++){const q=question(id,i,rng),key=JSON.stringify([q.stem,q.counts,q.sides,q.angles]);if(seen.has(key))continue;seen.add(key);q.picture='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(picture(q,0));out.push(q);}return out;}
const api={units,byId,question,picture,session,time,duration};root.MathConcepts=api;
// Use the existing normal-quiz engine, records and rewards without changing IDs.
if(root.MathFoundations){const old={...root.MathFoundations};root.MathFoundations={...old,units:[...old.units,...units],byId:id=>byId(id)||old.byId(id),question:(id,...args)=>(byId(id)?question:old.question)(id,...args),session:(id,...args)=>(byId(id)?session:old.session)(id,...args),picture:(q,...args)=>(byId(q.unitId)?picture:old.picture)(q,...args)};}
})(typeof window==='undefined'?globalThis:window);
