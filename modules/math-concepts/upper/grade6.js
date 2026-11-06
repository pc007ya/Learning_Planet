(function (M) {
  'use strict';
  const {define, exercise, step, cards, gridTable, strip, sector, plot, label, line, rect, polygon, colors, gcd, fraction, fixed, roundRatio, sum} = M;
  const add = (id, title, make) => define(id, 6, title, make);
  const primes=[2,3,5,7,11,13,17,19];
  function primeFactors(n) {
    const factors=[];
    for(const p of primes) while(n%p===0) { factors.push(p); n/=p; }
    return factors;
  }
  add(171, '質數與質因數分解', (r,i) => {
    const a=r(0,2), b=r(0,7), c=r(0,2), n=primes[a]*primes[b]*primes[c];
    if(i%4===1) {
      const x=r(1,19), isPrime=primes.includes(x), answer=x===1?'兩者皆非':isPrime?'質數':'合數';
      return exercise(`${x} 是質數、合數，還是兩者皆非？`,answer,['質數','合數','兩者皆非'],[
        step('質數有幾個正因數？',2,[1,3,4],'質數恰有兩個正因數，就是 1 和它本身。')
      ],cards([['要檢查的數',x],['觀察','因數個數']]),x===1?'1 只有一個正因數。':isPrime?`${x} 只有 1 和 ${x} 兩個正因數。`:`${x} 除了 1 和自己之外，還有其他正因數。`);
    }
    const pf=primeFactors(n), answer=pf.join(' × '), remaining=[n,...pf.map((_,j)=>n/pf.slice(0,j+1).reduce((a,b)=>a*b,1))];
    return exercise(`${n} 的質因數分解是哪一個？`,answer,[`${pf[0]} × ${n/pf[0]}`,`${answer} × 2`,`${answer} × 3`,`${pf[0]} ＋ ${pf[1]} ＋ ${pf[2]}`],[
      step('短除時可先試哪個最小質因數？',pf[0],primes.filter(p=>p!==pf[0]),'偶數可被 2 整除，數字和可被 3 整除時原數也可以，末位 0 或 5 可被 5 整除。')
    ],[cards([['待分解',n],['方法','短除到 1']]),gridTable([['除數',...pf,''],['剩下',...remaining]])],`每次除以一個質因數直到 1，所以 ${n} ＝ ${answer}。`);
  });
  add(172, '最大公因數、最小公倍數與互質', (r,i) => {
    const a=r(8,82), b=r(9,80), g=gcd(a,b), l=a*b/g, v=i%4;
    const title=['最大公因數','最小公倍數','最簡分數','是否互質'][v];
    const answer=[g,l,fraction(a,b),g===1?'互質':'不互質'][v];
    const question=v===2?`${a}/${b} 化為最簡分數是多少？`:v===3?`${a} 和 ${b} 互質嗎？`:`${a} 和 ${b} 的${title}是多少？`;
    let x=a,y=b,divisor=g,rows=[];
    for(const p of primes) while(divisor%p===0) { rows.push([p,x,y]); x/=p; y/=p; divisor/=p; }
    if(divisor>1) { rows.push([divisor,x,y]); x/=divisor; y/=divisor; }
    rows.push(['—',x,y]);
    return exercise(question,answer,v===3?['互質','不互質','只看奇偶即可']:v===2?[`${a}/${b+1}`,`${a+1}/${b}`,fraction(b,a)]:[g,l,a*b],[
      step('兩數互質時，最大公因數是多少？',1,[0,2,10],'公因數只剩 1 時，兩數互質。')
    ],[cards([['第一數',a],['第二數',b],['目標',title]]),gridTable([['共同除數','第一數','第二數'],...rows])],`共同除數的乘積為 ${g}，最小公倍數為 ${g}×${x}×${y}＝${l}。本題得到 ${answer}。`);
  });
  add(173, '分數除法', (r,i) => {
    const a=r(2,8), b=r(2,8), n=i%2===0?a*r(1,5):r(1,a-1), m=r(1,b-1), x=fraction(n,a), answer=fraction(n*b,a*m);
    return exercise(`${x} ÷ ${m}/${b} ＝ ？`,answer,[fraction(n*m,a*b),fraction(n*m,a),fraction(n*b,a*(m+1))],[
      step(`除以 ${m}/${b}，相當於乘哪一個數？`,fraction(b,m),[fraction(m,b),`1/${b}`,`1/${m}`],'先看有幾個同樣大的分數單位，再連到乘倒數。')
    ],cards([['總量',x],['每份',`${m}/${b}`],['有幾份','？']]),`${x} × ${fraction(b,m)} ＝ ${answer}。`);
  });
  add(174, '小數除法', (r,i) => {
    const places=i%2+1, d=r(2,9), q=r(5,85), x=i%3===0?q*d:fixed(q*d,places), y=fixed(d,places), answer=i%3===0?q*10**places:q;
    return exercise(`${x} ÷ ${y} ＝ ？`,answer,[answer/10,answer*10,q*d],[
      step('除數變成整數時，被除數要怎麼改？','同乘一樣的倍數',['維持不變','除以同一倍數','同加一樣的數'],'被除數與除數乘同一倍數，商不變。')
    ],[cards([['被除數',x],['除數',y],['商','？']]),cards([['被除數',Math.round(x*10**places)],['除數',d],['商','？']])],`兩數同乘 ${10**places}，改算 ${Math.round(x*10**places)} ÷ ${d} ＝ ${answer}。`);
  });
  add(175, '數量關係與關係式', (r,i) => {
    const start=r(2,9), diff=r(2,6), n=r(6,16), answer=start+(n-1)*diff;
    const expression=`${start} ＋（n−1）× ${diff}`;
    return exercise(`第 1 排有 ${start} 個座位，往後每排多 ${diff} 個。第 ${n} 排有幾個？`,answer,[start+n*diff,n*diff,answer+diff],[
      step('用 n 表示第幾排，哪個關係式符合表格？',expression,[`${start} ＋ n×${diff}`,`${start} × n`,`${diff} ＋ n×${start}`],'第一排尚未增加，從第一排到第 n 排共增加 n−1 次。')
    ],gridTable([['第幾排',1,2,3,n],['座位',start,start+diff,start+2*diff,'？']]),`從第一排到第 ${n} 排增加 ${n-1} 次，${start} ＋ ${n-1}×${diff} ＝ ${answer}。`);
  });
  add(176, '比、比值與等比', (r,i) => {
    const a=r(2,9), b=r(3,12), scale=r(2,6), v=i%3;
    const answer=v===0?fraction(a,b):v===1?a*scale:`${a/gcd(a,b)}：${b/gcd(a,b)}`;
    const stem=v===0?`果汁 ${a} 杯與水 ${b} 杯的比是 ${a}：${b}，比值是多少？`:v===1?`果汁：水＝${a}：${b}。用 ${b*scale} 杯水，需要幾杯果汁？`:`把 ${a*scale}：${b*scale} 化成最簡整數比。`;
    return exercise(stem,answer,v===0?[fraction(b,a),a+b,`${a}：${b}`]:v===1?[b*scale,a+scale,a*b]:[`${b/gcd(a,b)}：${a/gcd(a,b)}`,`${a+scale}：${b+scale}`,`${a}：${b+1}`],[
      step('要保持味道一樣，兩個量怎麼變？','同乘一個倍數',['只增加水','兩個量都加 1','分別乘不同倍數'],'比的前項和後項同乘一個非零數，比值不變。')
    ],gridTable([['果汁',a,v===1?'？':a*scale],['水',b,b*scale]]),v===0?`${a} ÷ ${b} ＝ ${answer}。`:v===1?`水變成 ${scale} 倍，果汁也變成 ${scale} 倍，得到 ${answer} 杯。`:`前項與後項同除 ${gcd(a,b)*scale}，得到 ${answer}。`);
  });
  add(177, '扇形弧長與面積', (r,i) => {
    const r0=r(3,16), d=[2,3,4,5,6,8,9,10,12][i%9], n=r(1,d-1), angle=n*360/d, area=i%2===0;
    const wholeCents=area?314*r0*r0:628*r0, whole=wholeCents/100, answer=roundRatio(wholeCents*n,100*d,2);
    return exercise(`半徑 ${r0} 公分、圓心角 ${angle}° 的扇形，${area?'面積（平方公分）':'弧長（公分）'}約是多少？（π 取 3.14，答案取到百分位）`,answer,[Number(whole.toFixed(2)),Number((whole/d).toFixed(2)),Number((whole*(d-n)/d).toFixed(2))],[
      step('扇形占整圓多少？',fraction(n,d),[fraction(d-n,d),fraction(1,d),fraction(n,d+1)],'圓心角除以 360°，就是扇形占整圓的比例。')
    ],sector(330,153,103,360,-90,'#fffaf0')+sector(330,153,103,angle)+label(330,280,`r = ${r0} cm · ${angle}°`,20),`整圓的${area?'面積':'周長'}約 ${Number(whole.toFixed(2))}，乘 ${n}/${d} 後約 ${answer}。`);
  });
  add(178, '速率、時間與距離', (r,i) => {
    const s=r(12,95), t=r(2,5), v=i%4, s2=s+r(3,29), t2=r(1,4), d=s*t, distance=d+s2*t2;
    const answer=v===0?d:v===1?s:v===2?roundRatio(distance,t+t2,1):s*1000;
    const stem=v===0?`車子每小時走 ${s} 公里，等速行駛 ${t} 小時，走幾公里？`:v===1?`等速走 ${d} 公里，用 ${t} 小時，平均時速是多少公里？`:v===2?`先以時速 ${s} 行駛 ${t} 小時，再以時速 ${s2} 行駛 ${t2} 小時。全程平均時速幾公里？（取到十分位）`:`時速 ${s} 公里等於每小時幾公尺？`;
    return exercise(stem,answer,[v===2?(s+s2)/2:s,t,d,answer+1],[
      step(v===3?'1 公里是幾公尺？':v===2?'全程花了幾小時？':'距離可以怎麼算？',v===3?1000:v===2?t+t2:'速率×時間',v===3?[100,10,10000]:v===2?[t,t2,t*t2]:['速率＋時間','速率÷時間'],'用相同的距離和時間單位，再把各段距離和時間加總。')
    ],cards(v===2?[['第一段',`${s} km/h × ${t} h`],['第二段',`${s2} km/h × ${t2} h`],['平均時速','？']]:[['速率',v===1?'？':`${s} km/h`],['時間',v===3?'1 h':`${t} h`],['距離',v===1?`${d} km`:'？']]),v===2?`全程 ${distance} 公里、${t+t2} 小時，${distance} ÷ ${t+t2} ≈ ${answer}。`:`按公式與單位換算，結果為 ${answer}。`);
  });
  add(179, '放大與縮小', (r,i) => {
    const w=r(3,12), h=r(2,9), k=r(2,4), shrink=i%2===1, a=shrink?w*k:w, b=shrink?w:w*k, height=shrink?h*k:h, targetHeight=shrink?h:h*k;
    const scale=Math.min(170/Math.max(a,b),157/Math.max(height,targetHeight));
    const triangle=(x,w,h,fill)=>polygon(`${x},235 ${x+w*scale},235 ${x},${235-h*scale}`,fill);
    return exercise(`原圖一邊是 ${a} 公分，${shrink?`縮小成 1/${k} 倍`:`放大成 ${k} 倍`}後，對應邊是幾公分？`,b,[a,a*k,a/k,b+1],[
      step('放大或縮小時，對應角會怎樣？','角度相同',['角度跟著放大','角度減半'],'圖形同倍縮放時，只改變長度，角度保持相同。')
    ],triangle(110,a,height,colors[0])+triangle(375,b,targetHeight,colors[1])+label(330,148,'→',32),`${a} ${shrink?'÷':'×'} ${k} ＝ ${b} 公分。`);
  });
  add(180, '地圖比例尺', (r,i) => {
    const a=r(2,9), k=r(1,9), scale=k*100000, answer=i%2===0?a*k:a;
    const stem=i%2===0?`地圖比例尺 1：${scale}，圖上量到 ${a} 公分，實際幾公里？`:`地圖比例尺 1：${scale}，實際 ${a*k} 公里，圖上幾公分？`;
    return exercise(stem,answer,[a*k*10,a*k*100000,k,a*k+1],[
      step('1 公里等於幾公分？',100000,[1000,10000,1000000],'比例尺兩邊要先換成相同單位。')
    ],gridTable([['位置','圖上','實際'],['比例', '1 cm',`${k} km`],['本題',i%2===0?`${a} cm`:'？',i%2===0?'？':`${a*k} km`]]),`這張圖上 1 公分對應 ${k} 公里，答案是 ${answer} ${i%2===0?'公里':'公分'}。`);
  });
  add(181, '整數分數小數混合應用', (r,i) => {
    const a=r(3,15), b=r(2,9), m=r(2,5), p=i%3;
    const half=2*a+b, answer=p===0?half/2*m:p===1?half/2/m:half/2-b/2;
    const start=p===2?`有 ${half/2} 公升，倒出 ${b}/2 公升`:`每批把 ${a} 公升與 ${b}/2 公升合起來`;
    const stem=p===0?`${start}，${m} 批共有幾公升？`:p===1?`${start}，再平分給 ${m} 人，每人幾公升？（四捨五入到百分位）`:`${start}，剩下幾公升？`;
    const value=p===1?roundRatio(half,2*m,2):answer;
    return exercise(stem,value,[a+b,p===2?half:half/2,answer*m,value+1],[
      step(`${b}/2 公升寫成小數是？`,b/2,[b*2,b/10,b],'先統一用分數或小數，再依故事中的先後順序算。')
    ],cards([['整數量',`${a} L`],['分數量',`${b}/2 L`],['小數量',p===2?`${half/2} L`:'？']]),p===2?`${half/2} − ${b/2} ＝ ${value} 公升。`:`先合成 ${half/2} 公升，再${p===0?'乘':'除以'} ${m}，得到 ${value} 公升。`);
  });
  add(182, '柱體體積與表面積', (r,i) => {
    const a=r(3,8), b=r(2,7), h=r(4,11), mode=i%5, round=mode<2, tri=mode===2, composite=mode===4;
    const base=round?3.14*a*a:tri?a*b/2:a*b;
    const answer=Number((mode===1?2*base+2*3.14*a*h:mode===3?2*(base+a*h+b*h):composite?base*h+b*b*h:base*h).toFixed(2));
    const figure=round?`半徑 ${a} 公分的圓柱`:`底面${tri?'直角三角形的兩股':'長方形兩邊'}長 ${a}、${b} 公分的${tri?'三角柱':'四角柱'}`;
    const stem=composite?`底面分別為 ${a}×${b} 與 ${b}×${b} 平方公分的兩個四角柱，高均 ${h} 公分，合起來體積是幾立方公分？`:`${figure}高 ${h} 公分，${mode===1||mode===3?'表面積（平方公分）':'體積（立方公分）'}是多少？${round?'（π 取 3.14）':''}`;
    const baseArt=round?sector(155,160,73,360):tri?polygon('85,230 225,230 85,80'):rect(75,100,160,120,colors[0]);
    const side=rect(305,90,245,145,colors[1],0)+label(428,169,mode===1?'側面展開：長方形':'每一層底面都相同',20)+label(428,270,`高 ${h} cm`,21);
    return exercise(stem,answer,[Number((base*h).toFixed(2)),Number((2*base).toFixed(2)),Number(base.toFixed(2)),answer+h],[
      step('一個底面的面積是多少？',Number(base.toFixed(2)),[a*b,a+b,2*base],'先找底面的形狀，用對應的面積方法。')
    ],baseArt+side,mode===1||mode===3?`兩個底面與所有側面相加，共 ${answer} 平方公分。`:`底面積乘高${composite?'後，再加另一柱體的體積':''}，得到 ${answer} 立方公分。`);
  });
  add(183, '基準量與比較量', (r,i) => {
    const b=r(3,9), a=r(2,b-1), k=r(4,23), base=b*k, comp=a*k, reverse=i%2===1, answer=reverse?fraction(b,a):fraction(a,b);
    return exercise(`甲長 ${base} 公分，乙長 ${comp} 公分。${reverse?'甲是乙':'乙是甲'}的幾倍？`,answer,[fraction(a,b),fraction(b,a),fraction(b-a,b),fraction(a,b-a)],[
      step('這題要以誰當作 1？',reverse?'乙':'甲',['甲','乙','兩者都要'],'看「誰的幾倍」，誰就是基準量。')
    ],strip(b,b,90,76,490,48)+strip(a,b,90,163,490,48,colors[1])+label(70,105,'甲',20)+label(70,193,'乙',20),`比較量 ÷ 基準量＝${reverse?base:comp} ÷ ${reverse?comp:base}＝${answer}。`);
  });
  add(184, '列式解題與搭配計數', (r,i) => {
    const a=r(2,7), b=r(2,7), c=r(2,5), v=i%3;
    if(v===2) {
      const chickens=a+c, rabbits=b+c, heads=chickens+rabbits, legs=chickens*2+rabbits*4;
      return exercise(`雞和兔共有 ${heads} 隻、${legs} 隻腳。兔有幾隻？`,rabbits,[chickens,heads,legs-heads*2],[
        step('假設全部都是雞，共有幾隻腳？',heads*2,[heads*4,legs],'先用全部只有兩隻腳的情況當基準。')
      ],cards([['每隻雞',2],['每隻兔',4],['總腳數',legs]]),`每換成一隻兔多 2 隻腳，(${legs} − ${heads*2}) ÷ 2 ＝ ${rabbits}。`);
    }
    const total=v===0?a*b:a*b+c;
    return exercise(v===0?`${a} 件上衣與 ${b} 件裙子，每套各選一件，共幾種？`:`可選一套由 ${a} 件上衣和 ${b} 件裙子搭成的服裝，也可從 ${c} 件洋裝選一件。共幾種？`,total,[a+b,a*b,a+b+c,a*b*c],[
      step('上衣配裙子共有幾種？',a*b,[a+b,a,b],'每一件上衣都能配所有裙子，用乘法計數。')
    ],cards([['上衣',a],['裙子',b],...(v===1?[['洋裝',c]]:[])]),v===0?`${a} × ${b} ＝ ${total}。`:`兩種互不重複的選法相加，${a} × ${b} ＋ ${c} ＝ ${total}。`);
  });
  add(185, '讀與製作圓形圖', (r,i) => {
    const a=r(15,43), b=r(11,29), c=r(8,17), parts=[a,b,c,100-a-b-c], k=r(0,3), names=['步行','自行車','公車','其他'], n=r(2,9)*100, mode=i%3;
    const answer=mode===0?parts[k]:mode===1?parts[k]*n/100:parts[k];
    const tickMarks = Array.from({length:100}, (_,j) => {
      const rad = j*Math.PI/50;
      return line(233+104*Math.sin(rad),153-104*Math.cos(rad),233+(j%5===0?96:100)*Math.sin(rad),153-(j%5===0?96:100)*Math.cos(rad),'#526a84',1);
    }).join('');
    const emptyPie=sector(233,153,104,360,-90,'#fffaf0')+tickMarks+label(470,157,'每格 1%',25);
    let from=-90;
    const pie=parts.map((p,j)=>{const art=sector(233,153,104,p*3.6,from,colors[j]);from+=p*3.6;return art;}).join('')+parts.map((p,j)=>rect(405,65+j*48,18,18,colors[j],3)+label(494,80+j*48,`${names[j]} ${p}%`,19)).join('');
    return exercise(mode===0?`圓形圖中，${names[k]}占百分之幾？（第 ${r(1,9)} 組）`:mode===1?`${n} 位學生的通學調查如圖。${names[k]}共有幾人？`:`用百格圓形圖畫交通調查，${names[k]}占 ${parts[k]}%，應分給它幾格？`,answer,[100-parts[k],parts[(k+1)%4],parts[k]+5],[
      step('完整圓形圖代表百分之幾？',100,[10,50,360],'圓形圖比較每一部分占全體的比例。')
    ],mode===2?[gridTable([names,parts.map(p=>`${p}%`)]),emptyPie,pie+tickMarks]:pie,mode===1?`${n} × ${parts[k]}% ＝ ${answer} 人。`:`每格代表 1%，所以 ${names[k]}占 ${parts[k]} 格。`);
  });
  add(186, '從資料判斷可能性', (r,i) => {
    const values=[r(24,36),r(2,7),r(9,12),r(2,5)], names=['晴天','雨天','陰天','霧天'];
    const likely=i%2===0, first=likely?0:1, second=likely?1:0;
    const answer=likely?'比較可能':'比較不可能';
    return exercise(`最近 ${sum(values)} 天的天氣如圖。依這批資料，${names[first]}比${names[second]}更可能出現嗎？`,answer,['比較可能','比較不可能','一樣可能'],[
      step(`過去有幾天是${names[first]}？`,values[first],[values[second],sum(values)],'先比較資料次數，多很多的事件在這批資料裡比較常見。')
    ],plot(values,names,5,'bar'),`${names[first]}有 ${values[first]} 天，${names[second]}有 ${values[second]} 天，依資料判斷${answer}。`);
  });
})(globalThis.MathUpper);
