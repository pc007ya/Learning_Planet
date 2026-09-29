(function(root){
'use strict';
const units=[
 ['u109',1,'50／100 以內的數與十位個位','place',100,'plan-1-01','u106'],
 ['u110',1,'20 以內減法','subtract',20,'plan-1-02','u108'],
 ['u111',1,'非標準單位量長度','length',10,'plan-1-03','u33'],
 ['u112',1,'月曆、日期與星期','calendar',0,'plan-1-04','u21'],
 ['u113',2,'200／1000 以內的數','place',1000,'plan-2-01','before:u5'],
 ['u114',2,'面積大小比較','area',0,'plan-2-02','u8'],
 ['u115',2,'容量與重量比較','compare',0,'plan-2-03','u7'],
 ['u116',2,'年、月、日','dates',0,'plan-2-04','u48'],
 ['u117',3,'公升與毫升','litres',0,'plan-3-01','u40']
].map(([id,grade,title,kind,max,plan,after])=>({id,grade,title,kind,max,plan,after}));
const byId=id=>units.find(u=>u.id===id);
const days=(y,m)=>new Date(Date.UTC(y,m,0)).getUTCDate();
const dateLabel=d=>`${d.getUTCFullYear()}/${d.getUTCMonth()+1}/${d.getUTCDate()}`;
const addDays=(y,m,d,n)=>new Date(Date.UTC(y,m-1,d+n));
function shuffle(a,rng){for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function question(id,index=0,rng=Math.random){
 const u=byId(id);if(!u)throw Error('Unknown foundation unit');const r=(a,b)=>a+Math.floor(rng()*(b-a+1)),variant=index%3;
 let q={unitId:id,kind:u.kind,variant,title:u.title},choices;
 if(u.kind==='place'){
  const cap=u.max===100?(variant===0?50:100):(variant===0?200:1000),n=r(0,cap);q.n=n;q.cap=cap;q.digits=[Math.floor(n/1000),Math.floor(n/100)%10,Math.floor(n/10)%10,n%10];
  const labels=['千','百','十','個'];q.slot=u.max===100?2:r(1,3);
  q.ans=variant===1?q.digits[q.slot]:n;q.stem=variant===1?`${n} 的${labels[q.slot]}位數字是？`:'位值盤表示多少？';q.explain=q.digits.map((v,i)=>`${v} 個${labels[i]==='個'?'一':labels[i]}`).join('、')+`，合起來是 ${n}。`;q.hint='每往左一格，單位大 10 倍；空位要用 0 表示。';q.steps=4;
 }else if(u.kind==='subtract'){
  q.a=r(10,20);q.b=r(1,q.a);q.ans=q.a-q.b;q.stem=variant===1?`小安有 ${q.a} 個，小文有 ${q.b} 個，相差幾個？`:`${q.a} − ${q.b} ＝ ？`;q.explain=`${q.a} 拿走 ${q.b}，剩 ${q.ans}；${q.b} ＋ ${q.ans} ＝ ${q.a}。`;q.hint='先點掉要拿走的積木，再數留下的。';q.steps=q.b;
 }else if(u.kind==='length'){
  q.n=r(3,9);q.size=variant+1;q.ans=q.n;q.stem=`物件長度是幾個相同的${['小積木','短紙條','長紙條'][variant]}？`;q.explain=`從同一端開始，${q.n} 個相同單位首尾相接，沒有空隙也不重疊。`;q.hint='單位要一樣長，從物件左端排起。';q.steps=q.n;
 }else if(u.kind==='calendar'||u.kind==='dates'){
  q.y=[2024,2026,2027,2028][r(0,3)];q.m=r(1,12);q.d=r(Math.max(1,days(q.y,q.m)-5),days(q.y,q.m));q.delta=r(1,9);q.target=addDays(q.y,q.m,q.d,q.delta);q.iso=dateLabel(q.target);
  if(u.kind==='calendar'&&variant===0){q.ans='星期'+'日一二三四五六'[new Date(Date.UTC(q.y,q.m-1,q.d)).getUTCDay()];q.stem=`${q.y}/${q.m}/${q.d} 是星期幾？`;choices=Array.from({length:7},(_,i)=>'星期'+'日一二三四五六'[i]);q.steps=1;q.explain=`在月曆找到 ${q.d} 日，往上對齊星期欄，就是${q.ans}。`;}
  else if(u.kind==='dates'&&variant===0){q.ans=days(q.y,q.m);q.stem=`${q.y} 年 ${q.m} 月有幾天？`;choices=[28,29,30,31];q.steps=1;q.explain=`月曆最後一天是 ${q.ans} 日，所以有 ${q.ans} 天。${q.m===2?'二月要留意平年與閏年。':''}`;}
  else if(u.kind==='dates'&&variant===2){q.ans=q.delta;q.stem=`從 ${q.y}/${q.m}/${q.d} 到 ${q.iso}，相隔幾天？`;q.steps=q.delta;q.explain=`起點不算一天，隔天算第 1 天，共經過 ${q.delta} 天。`;}
  else {q.ans=q.iso;q.stem=`${q.y}/${q.m}/${q.d} 的 ${q.delta} 天後是？`;choices=[-1,0,1,2].map(x=>dateLabel(addDays(q.y,q.m,q.d,q.delta+x)));q.steps=q.delta;q.explain=`隔天才算第 1 天；向後走 ${q.delta} 格，跨月底接下個月，得到 ${q.iso}。`;}
  q.hint='先找到起點；跨過月底就進入下一個月。';
 }else if(u.kind==='area'){
  q.a=r(5,12);q.b=r(5,12);q.ans=q.a===q.b?'一樣大':q.a>q.b?'A':'B';choices=['A','B','一樣大'];q.stem='哪個圖形覆蓋的面積較大？';q.explain=`用同樣大的方格比較：A 有 ${q.a} 格，B 有 ${q.b} 格，${q.ans==='一樣大'?'面積一樣大':q.ans+' 較大'}。`;q.hint='每格一樣大；數覆蓋的格數，不比外框長短。';q.steps=Math.max(q.a,q.b);
 }else if(u.kind==='compare'){
  q.a=r(2,8);q.b=r(2,8);q.measure=variant===1?'weight':'capacity';q.ans=q.a===q.b?'一樣多':q.a>q.b?'A':'B';choices=['A','B','一樣多'];if(q.measure==='weight')choices=['A','B','一樣重'];if(q.measure==='weight'&&q.ans==='一樣多')q.ans='一樣重';
  q.stem=q.measure==='weight'?'哪個物件比較重？':'裝滿時，哪個容器容量較大？';q.explain=q.measure==='weight'?`A 相當於 ${q.a} 個同樣的砝碼，B 是 ${q.b} 個；天平較低的一端較重。`:`用同一個小量杯裝滿：A 要 ${q.a} 杯，B 要 ${q.b} 杯。需要較多杯的容器，容量較大。`;q.hint=q.measure==='weight'?'看天平往哪一邊低；不要只看物件外觀。':'用同樣的小杯裝滿比較，不能只看水位高低。';q.steps=Math.max(q.a,q.b);
 }else if(u.kind==='litres'){
  q.l=r(0,3);q.ml=r(1,9)*100;q.n=q.l*1000+q.ml;q.ans=q.n;q.stem=`${q.l} L ${q.ml} mL ＝ 幾 mL？`;q.explain=`1 L ＝ 1000 mL；${q.l} × 1000 ＋ ${q.ml} ＝ ${q.n} mL。`;q.hint='每 10 杯 100 mL 合成 1 L。';q.steps=q.n/100;if(variant===1){q.ans=`${q.l} L ${q.ml} mL`;q.stem=`${q.n} mL ＝ ？`;choices=[q.ans,`${q.l+1} L ${q.ml} mL`,`${q.l} L ${q.ml/10} mL`,`${q.l} L ${q.ml+100} mL`];}
 }
 if(!choices){const a=Number(q.ans);choices=[a];for(const delta of shuffle([-10,-2,-1,1,2,10,100],rng)){const v=a+delta;if(v>=0&&!choices.includes(v))choices.push(v);if(choices.length===4)break;}}
 if(choices.length>4)choices=[q.ans,...shuffle(choices.filter(x=>x!==q.ans),rng).slice(0,3)];
 q.opts=shuffle(choices,rng);q.fig='foundation';q.figData={};return q;
}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const text=(x,y,s,size=22)=>`<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" fill="#173b50">${esc(s)}</text>`;
const rect=(x,y,w,h,fill='#6ad6ca')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${fill}" stroke="#31546a"/>`;
function picture(q,step=q.steps){
 step=Math.max(0,Math.min(q.steps,step));let b='';
 if(q.kind==='place'){
  const labels=['千','百','十','個'];q.digits.forEach((n,i)=>{if(q.unitId==='u109'&&i===0)return;b+=rect(40+i*145,35,135,290,'#fffaf0')+text(108+i*145,70,labels[i]);for(let k=0;k<n;k++)if(i<step)b+=rect(58+i*145+(k%3)*35,105+Math.floor(k/3)*48,28,34,['#bfa8ee','#79b5f5','#6ad6ca','#ffd070'][i]);});b+=`<path d="M55 353H610" stroke="#31546a" stroke-width="3"/><circle cx="${55+555*q.n/q.cap}" cy="353" r="6" fill="#e69631"/>`+text(55,375,'0',16)+text(610,375,q.cap,16);
 }else if(q.kind==='subtract'){for(let i=0;i<q.a;i++){const x=55+i%10*58,y=100+Math.floor(i/10)*95;b+=rect(x,y,42,42,i<step?'#e1e5e8':'#ffd070');if(i<step)b+=`<path d="M${x} ${y}l42 42m0-42-42 42" stroke="#bf5b61" stroke-width="3"/>`;}}
 else if(q.kind==='length'){const w=50;b+=rect(55,100,q.n*w,45,'#ffd070');for(let i=0;i<q.n;i++)b+=rect(55+i*w,175,w,35,i<step?'#6ad6ca':'#eef2f4');b+=text(320,260,'相同單位 · 首尾相接');}
 else if(q.kind==='calendar'||q.kind==='dates'){
  const dates=[new Date(Date.UTC(q.y,q.m-1,1)),new Date(Date.UTC(q.y,q.m,1))],selected=q.steps===1?(q.kind==='dates'?days(q.y,q.m):q.d):addDays(q.y,q.m,q.d,step).getUTCDate(),selMonth=q.steps===1?q.m:addDays(q.y,q.m,q.d,step).getUTCMonth()+1;
  dates.forEach((dt,p)=>{const x0=20+p*325,m=dt.getUTCMonth()+1,y=dt.getUTCFullYear(),offset=dt.getUTCDay();b+=text(x0+145,35,`${y} / ${m}`);for(let c=0;c<7;c++)b+=text(x0+c*42+20,68,'日一二三四五六'[c],15);for(let d=1;d<=days(y,m);d++){const k=offset+d-1,x=x0+k%7*42,y0=85+Math.floor(k/7)*40;b+=rect(x,y0,38,35,step>0&&d===selected&&m===selMonth?'#ffd070':m===q.m&&d===q.d?'#b9eee8':'#fff')+text(x+19,y0+24,d,16);}});
 }else if(q.kind==='area'){
  [q.a,q.b].forEach((n,p)=>{b+=text(165+p*330,50,p?'B':'A');for(let i=0;i<n;i++)b+=rect(60+p*330+i%4*43,90+Math.floor(i/4)*43,43,43,i<step?'#6ad6ca':'#edf3f7');});
 }else if(q.kind==='compare'){
  if(q.measure==='capacity'){[q.a,q.b].forEach((n,p)=>{const x=80+p*330,w=p?115:155,h=n*24*155/w;b+=text(x+80,35,p?'B':'A')+rect(x,315-h,w,h,'#fff');b+=rect(x,315-Math.min(step,n)*24*155/w,w,Math.min(step,n)*24*155/w,'#6ecbf1');b+=text(x+80,350,`${Math.min(step,n)} 杯`,18);});}
  else {const diff=step===q.steps?(q.a-q.b)*8:0;b+=`<path d="M320 290V95M90 ${130+diff}L550 ${130-diff}M90 ${130+diff}v70m460 ${-70-2*diff}v70" stroke="#31546a" stroke-width="7"/>`;[q.a,q.b].forEach((n,p)=>{const y=200+(p?-diff:diff);b+=rect(45+p*460,y,90,15,'#b2c8d9')+text(90+p*460,y+42,p?'B':'A');for(let i=0;i<Math.min(step,n);i++)b+=rect(55+p*460+i%3*23,y-22-Math.floor(i/3)*22,20,20,'#ffd070');});}
 }else if(q.kind==='litres'){
  for(let i=0;i<4;i++){const n=Math.max(0,Math.min(10,step-i*10));b+=rect(50+i*155,60,110,250,'#fff')+rect(50+i*155,310-n*25,110,n*25,'#6ecbf1');for(let k=0;k<=10;k++)b+=`<path d="M${50+i*155} ${310-k*25}h15" stroke="#31546a"/>`;b+=text(105+i*155,340,`${n*100} mL`,18);}b+=text(320,30,'每格 100 mL；滿杯 1 L',18);
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 380" role="img" aria-label="${esc(q.stem)}"><rect width="660" height="380" rx="16" fill="#f5edda"/>${b}</svg>`;
}
function session(id,count=10,rng=Math.random){const out=[],seen=new Set();for(let i=0;out.length<count&&i<count*100;i++){const q=question(id,i,rng),key=q.stem+JSON.stringify([q.n,q.a,q.b,q.y,q.m,q.d]);if(seen.has(key))continue;seen.add(key);q.picture='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(picture(q,['calendar','dates'].includes(q.kind)?0:q.steps));out.push(q);}return out;}
root.MathFoundations={units,byId,question,picture,session,days,addDays};
})(typeof window==='undefined'?globalThis:window);
