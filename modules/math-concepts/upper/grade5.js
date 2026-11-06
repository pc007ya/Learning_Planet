(function (M) {
  'use strict';
  const {define, exercise, step, cards, gridTable, strip, sector, plot, label, line, rect, polygon, colors, gcd, fraction, fixed, roundRatio, sum} = M;
  const add = (id, title, make) => define(id, 5, title, make);
  const factors = n => Array.from({length:n}, (_,i)=>i+1).filter(k=>n%k===0);
  add(147, '十進位位值與多位小數', (r,i) => {
    const n=r(1205,9800), k=r(11,192), v=i%4;
    if(v===0) {
      const power=[4,8,12][Math.floor(i/4)%3], value=k*10**power, unit={4:'萬',8:'億',12:'兆'}[power];
      return exercise(`${k} ${unit}寫成數字是多少？`,value,[value*10,value/10,k],[
        step(`1 ${unit}等於幾個一？`,10**power,[10**(power-1),10**(power+1)],'每四個數位分成一組，從個、萬、億到兆。')
      ],gridTable([['兆','億','萬','個'],...[Array.from({length:4},(_,j)=>j===3-power/4?k:0)]]),`${k} × ${10**power} ＝ ${value}。`);
    }
    const x=fixed(n,3), y=fixed(k,3), answer=v===1?fixed(n+k,3):v===2?fixed(n-k,3):fixed(n,2);
    const stem=v===3?`${x} × 10 ＝ ？`:`${x} ${v===1?'＋':'−'} ${y} ＝ ？`;
    return exercise(stem,answer,[fixed(n+k,2),fixed(n-k,2),fixed(n,4)],[
      step(`${x} 有幾個千分之一？`,n,[n*10,Math.floor(n/10)],'先對齊小數點，千分之一是 0.001。')
    ],cards([['原數',x],[v===3?'乘數':'另一個數',v===3?10:y],['結果','？']]),v===3?`每個位值變成十倍，結果是 ${answer}。`:`先用千分之一計數，換回小數得到 ${answer}。`);
  });
  add(148, '因數與公因數', (r,i) => {
    const k=r(2,9), a=k*r(2,8), b=k*r(2,9), common=factors(gcd(a,b)), answer=common.at(-1);
    return exercise(`${a} 枝紅筆和 ${b} 枝藍筆各自平均分成相同組數，最多能分幾組？`,answer,[a,b,answer+1],[
      step(`下面哪個數一定是 ${a} 的因數？`,k,[a+1,a+2],`能把 ${a} 平分且沒有剩餘的組數，就是它的因數。`)
    ],cards([['紅筆',a],['藍筆',b],['共同組數','？']]),`共同因數有 ${common.join('、')}，最大的是 ${answer}。`);
  });
  add(149, '倍數與公倍數', (r,i) => {
    const a=r(2,12), b=r(2,12), answer=a*b/gcd(a,b);
    return exercise(`兩個提醒分別每 ${a} 分鐘與 ${b} 分鐘響一次。現在同時響，下次相隔幾分鐘？`,answer,[a+b,a*b,answer*2],[
      step(`哪個數是 ${a} 的倍數？`,a*3,[a*3-1,a*3+1],'從同一個起點，每次增加相同的間隔。')
    ],gridTable([[`${a} 分一響`,a,2*a,3*a,'…'],[`${b} 分一響`,b,2*b,3*b,'…']]),`${answer} 是兩個間隔共同的最小正倍數。`);
  });
  add(150, '擴分、約分與通分', (r,i) => {
    const d=r(3,9), n=r(1,d-1), k=r(2,5), v=i%3;
    if(v===1) return exercise(`把 ${n*k}/${d*k} 約成最簡分數。`,fraction(n,d),[`${n+1}/${d}`,`${n}/${d+1}`,`${n*k}/${d*k+1}`],[
      step('分子與分母要怎麼改？','同除一個公因數',['只除分母','同加一個數'],'分子與分母同除一個公因數，分數的大小不變。')
    ],[strip(n*k,d*k),strip(n,d)],`${n*k} 與 ${d*k} 同除最大公因數 ${gcd(n*k,d*k)}，得 ${fraction(n,d)}。`);
    if(v===2) {
      const candidate=r(2,8), b=candidate>=d?candidate+1:candidate, l=d*b/gcd(d,b), second=r(1,b-1), x=n*l/d, y=second*l/b, answer=x===y?'一樣大':x>y?`${n}/${d}`:`${second}/${b}`;
      return exercise(`${n}/${d} 和 ${second}/${b}，哪個比較大？`,answer,[`${n}/${d}`,`${second}/${b}`,'一樣大'],[
        step('最小的共同分母是多少？',l,[d,b,d*b],'可以從分母的倍數找最小公倍數。')
      ],[strip(n,d)+strip(second,b,58,175,544,40,colors[1]),strip(x,l)+strip(y,l,58,175,544,40,colors[1])],`通分後比較 ${x}/${l} 和 ${y}/${l}，結果是 ${answer}。`);
    }
    return exercise(`${n}/${d} 擴分成分母 ${d*k}，分子是多少？`,n*k,[n,d*k,n+k],[
      step(`分母 ${d} 變成 ${d*k}，乘了多少？`,k,[k+1,k-1],'分母和分子要乘上同一個數。')
    ],[strip(n,d),strip(n*k,d*k)],`${n} × ${k} ＝ ${n*k}。`);
  });
  add(151, '異分母分數加減', (r,i) => {
    const a=r(2,9), candidate=r(2,8), b=candidate>=a?candidate+1:candidate;
    const d=a*b/gcd(a,b), n=r(1,a-1), m=r(1,b-1), subtract=i%2===1;
    const x=n*d/a, y=m*d/b, first=subtract&&x<y?`${m}/${b}`:`${n}/${a}`, second=subtract&&x<y?`${n}/${a}`:`${m}/${b}`;
    const answer=fraction(subtract?Math.abs(x-y):x+y,d);
    return exercise(`${first} ${subtract?'−':'＋'} ${second} ＝ ？`,answer,[fraction(n+m,a+b),fraction(Math.abs(x-y)+1,d),fraction(x+y+1,d)],[
      step('共同分母最小是多少？',d,[a,b,a*b],'先通分，讓每一小份大小一樣，再數份數。')
    ],[strip(n,a)+strip(m,b,58,175,544,40,colors[1]),strip(x,d)+strip(y,d,58,175,544,40,colors[1])],`改成 ${x}/${d} 和 ${y}/${d} 後計算，最後化簡成 ${answer}。`);
  });
  add(152, '三角形與四邊形的性質', (r,i) => {
    const a=r(25,65), b=r(30,65), v=i%4;
    if(v===3) return exercise(`平行四邊形一個角是 ${a}°，它的對角是多少度？`,a,[180-a,90,360-a],[
      step('平行四邊形的對角有什麼關係？','相等',['互補','都是直角'],'把兩組對邊與對角對照觀察。')
    ],polygon('180,65 530,65 455,245 105,245')+label(168,221,`${a}°`)+label(474,101,'？'),`平行四邊形的對角相等，所以是 ${a}°。`);
    if(v===2) {
      const x=r(3,10), y=r(3,10), z=x+y-r(-2,3), ok=x+y>z;
      return exercise(`長 ${x}、${y}、${z} 公分的三根棒子，能圍成三角形嗎？`,ok?'能':'不能',['能','不能','須三邊等長'],[
        step('較短兩邊合計幾公分？',x+y,[z,x*y],'較短的兩邊合起來必須比最長邊長，才圍得起來。')
      ],[x,y,z].map((v,j)=>line(90,85+j*67,90+v*20,85+j*67,colors[j],10)+label(535,93+j*67,`${v} cm`)).join(''),`${x}＋${y} ${ok?'＞':'≤'} ${z}，所以${ok?'能':'不能'}圍成。`);
    }
    const quad=v===1, c=r(80,105), total=quad?360:180, answer=total-a-b-(quad?c:0);
    return exercise(`${quad?'四邊形':'三角形'}的已知內角為 ${a}°、${b}°${quad?`、${c}°`:''}，剩下一個內角幾度？`,answer,[180-a-b,a+b,total-a],[
      step('這種圖形的內角和是多少？',total,[90,180,360],quad?'沿一條對角線分成兩個三角形。':'三個內角拼起來形成一個平角。')
    ],cards([['角 A',`${a}°`],['角 B',`${b}°`],...(quad?[['角 C',`${c}°`]]:[]),['剩下','？']]),`${total} − ${a} − ${b}${quad?` − ${c}`:''} ＝ ${answer}°。`);
  });
  add(153, '扇形與圓心角', (r,i) => {
    const d=[3,4,5,6,8,10,12][i%7], n=r(1,d-1), angle=n*360/d, rad=r(3,12), answer=i%2?fraction(n,d):angle;
    return exercise(i%2?`半徑 ${rad} 公分、圓心角 ${angle}° 的扇形占整圓多少？`:`半徑 ${rad} 公分，畫出 ${n}/${d} 圓的扇形，圓心角應取幾度？`,answer,i%2?[fraction(d-n,d),fraction(n+1,d),fraction(n,d+1)]:[360-angle,angle/2,90],[
      step('一整圓的圓心角是幾度？',360,[90,180,270],'扇形由兩條半徑與一段圓弧圍成。')
    ],sector(330,158,108,360,-90,'#fffaf0')+sector(330,158,108,angle)+label(330,288,`半徑 ${rad} cm`,18),`圓心角 ${angle}° 占整圈 ${n}/${d}，化簡後是 ${fraction(n,d)} 圓。`);
  });
  add(154, '線對稱', (r,i) => {
    const x=r(1,9), y=r(1,8), d=r(2,Math.floor((20-x)/2)), axis=i%2===0, answer=axis?x+2*d:y+2*d;
    const w=22, X=n=>110+n*w, Y=n=>260-n*w;
    let art='';
    for(let j=0;j<=20;j++) art+=line(X(j),40,X(j),260,'#bbc9c6',1);
    for(let j=0;j<=10;j++) art+=line(110,Y(j),550,Y(j),'#bbc9c6',1);
    if(axis) art+=line(X(x+d),40,X(x+d),260,colors[1],4);
    else art+=line(110,Y(5),550,Y(5),colors[1],4);
    const py=axis?y:5-Math.min(d,5), distance=axis?d:Math.min(d,5), result=axis?answer:5+distance;
    art+=`<circle cx="${X(x)}" cy="${Y(py)}" r="7" fill="#287e73"/>`+label(X(x)-12,Y(py)-12,'A',16);
    const resultArt=art+`<circle cx="${X(axis?result:x)}" cy="${Y(axis?y:result)}" r="7" fill="#925cb8"/>`;
    return exercise(`圖 ${x}-${y} 的 A 點離對稱軸 ${distance} 格，對稱點在軸另一側幾格？`,distance,[2*distance,distance+1,0],[
      step('連接兩個對稱點的線段，與對稱軸成幾度？',90,[0,45,180],'對折後，對應點會疊合。')
    ],[art,resultArt,resultArt],`兩點到軸的距離相等，對稱點在另一側 ${distance} 格。`);
  });
  add(155, '三步驟併式、分配律與平均', (r,i) => {
    const a=r(3,9), b=r(3,12), c=r(2,7), d=r(2,5), average=i%4===0;
    if(i%4===3) return exercise(`${a*b*c} ÷ ${b} ÷ ${c} ＝ ？`,a,[a*b,a*c,a+b+c],[
      step('把兩個除數合起來，可以除以多少？',b*c,[b+c,b,c],'先分成幾大組，每大組再等分，總組數是兩個組數相乘。')
    ],cards([['全部',a*b*c],['第一次分',b],['第二次分',c]]),`${a*b*c} ÷ (${b} × ${c}) ＝ ${a}。`);
    const values=[a*b,a*b+c,a*b+2*c], answer=average?a*b+c:a*(b+c)-d;
    const expression=average?`(${values.join(' ＋ ')}) ÷ 3`:`${a} × (${b} ＋ ${c}) − ${d}`;
    const stem=average?`三天各讀 ${values.join('、')} 頁，平均每天讀幾頁？`:`${a} 組各有 ${b} 張紅卡與 ${c} 張藍卡，總共拿走 ${d} 張。還剩幾張？`;
    return exercise(stem,answer,[average?sum(values):a*b+c-d,answer+d,answer-1],[
      step('哪個併式符合題意？',expression,[average?`${values[0]} ＋ ${values[1]} ＋ ${values[2]} ÷ 3`:`${a} × ${b} ＋ ${c} − ${d}`,`${a} ＋ ${b} × ${c}`],average?'先加總，再除以天數。':'先算一組，再乘組數，最後減去拿走的張數。'),
      step(average?'三天總頁數是多少？':'也可用分配律改寫總量，哪一式正確？',average?sum(values):`${a}×${b}＋${a}×${c}`,average?[values[0],answer]:[`${a}×${b}＋${c}`,`${a}＋${b}×${c}`],average?'平均是把總量等分。':'每組的兩種卡片都各有同樣多組。')
    ],cards(average?values.map((n,j)=>[`第 ${j+1} 天`,n]):[['紅卡／組',b],['藍卡／組',c],['組數',a],['拿走',d]]),`${expression} ＝ ${answer}。`);
  });
  add(156, '平行四邊形與梯形面積', (r,i) => {
    const b=r(4,14), h=r(2,9), t=r(2,b-1), trapezoid=i%2===1, s=Math.min(320/b,160/h), w=b*s, y=h*s;
    const art=polygon(`160,240 ${160+w},240 ${205+(trapezoid?t*s:w)},${240-y} 205,${240-y}`)+line(205,240-y,205,240,'#865baa',3)+label(170,244-y/2,`${h} cm`,17)+label(160+w/2,270,`${b} cm`,20)+(trapezoid?label(205+t*s/2,229-y,`${t} cm`,20):'');
    const answer=(trapezoid?(b+t)/2:b)*h, formula=trapezoid?'（上底＋下底）×高÷2':'底×高';
    const symbolic=trapezoid?'A＝（a＋b）×h÷2':'A＝b×h';
    return exercise(trapezoid?`梯形上底 ${t}、下底 ${b}、高 ${h} 公分，面積是幾平方公分？`:`平行四邊形底 ${b}、高 ${h} 公分，面積是幾平方公分？`,answer,[b*h,(b+t)*h,b*h/2],[
      step('可以用哪個公式？',formula,['底×高','底×高÷2','（上底＋下底）×高÷2'],trapezoid?'兩個相同梯形可拼成一個平行四邊形。':'將側邊剪下移到另一側，拼成同底、同高的長方形。'),
      step('用 A 表面積、a 表上底、b 表底、h 表高，怎麼寫？',symbolic,['A＝b×h','A＝b×h÷2','A＝（a＋b）×h÷2'],'字母代表相應的量，可以代入實際量到的數。')
    ],art,`${trapezoid?`(${t}＋${b}) × ${h} ÷ 2`:`${b} × ${h}`} ＝ ${answer} 平方公分。`);
  });
  add(157, '球、柱體與錐體', (r,i) => {
    const v=i%8;
    if(v>=5) {
      const n=r(2,19), which=v-5, answers=['圓柱','圓錐','三角柱'];
      const cylinder=rect(229,104,64*Math.PI,92,colors[1],0)+sector(282,72,32,360,-90,colors[0])+sector(377,228,32,360,-90,colors[0]);
      const cone=sector(242,140,110,144,-72,colors[1])+sector(396,140,44,360,-90,colors[0]);
      const prism=rect(190,108,60,104,colors[1],0)+rect(250,108,80,104,colors[2],0)+rect(330,108,100,104,colors[3],0)
        +polygon('250,108 330,108 250,48',colors[0])+polygon('250,212 330,212 250,272',colors[0]);
      return exercise(`第 ${n} 張展開圖能折成哪個形體？`,answers[which],answers,[
        step('這張展開圖有幾個底面？',which===1?1:2,[0,1,2,3],'先找底面，再看側面如何包住底面。')
      ],[cylinder,cone,prism][which],`把側面折起來，與底面接合，得到${answers[which]}。`);
    }
    const names=['角柱','角錐','圓柱','圓錐','球'], feature=['兩個相同多邊形底面','一個多邊形底面和一個尖頂','兩個相同圓形底面','一個圓形底面和一個尖頂','從球心到球面一樣遠'][v];
    const ellipse=(cy,fill)=>`<ellipse cx="330" cy="${cy}" rx="100" ry="26" fill="${fill}" stroke="#233750" stroke-width="2"/>`;
    const base=polygon('230,214 278,252 420,231 381,198',colors[0]);
    const shapes=[base+polygon('230,214 230,83 278,121 278,252',colors[1])+polygon('278,252 278,121 420,100 420,231',colors[3])+polygon('230,83 278,121 420,100 381,67'),base+polygon('230,214 278,252 327,48',colors[1])+polygon('278,252 420,231 327,48',colors[3]),rect(230,81,200,145,colors[3],0)+ellipse(226,colors[3])+ellipse(81,colors[0]),polygon('230,226 430,226 330,47',colors[1])+ellipse(226,colors[0]),sector(330,157,107,360)+ellipse(157,'#a5e0d3')+line(330,157,430,157,colors[1],4)];
    return exercise(`第 ${r(1,9)} 個模型有${feature}。它是哪種形體？`,names[v],names.filter((_,j)=>j!==v),[
      step('辨認形體時，先看什麼？','底面和頂點',['顏色','大小','材質'],'柱體、錐體的底面形狀與數量提供辨認線索。')
    ],shapes[v],`${names[v]}的特徵是${feature}。`);
  });
  add(158, '分數乘法', (r,i) => {
    const a=r(2,8), b=r(2,8), n=i%3===0?a*r(1,3):r(1,a-1), m=r(1,b-1), answer=fraction(n*m,a*b);
    const width=480/Math.ceil(n/a);
    let art='';
    for(let k=0;k<Math.ceil(n/a);k++) for(let row=0;row<b;row++) for(let col=0;col<a;col++) {
      const filled=k*a+col<n;
      art+=rect(85+k*(width+6)+col*width/a,66+row*168/b,width/a,168/b,filled?(row<m?colors[1]:colors[0]):'#fffaf0',0);
    }
    return exercise(`${fraction(n,a)} × ${m}/${b} ＝ ？`,answer,[fraction(n+m,a+b),fraction(n*m,a),fraction(n*m,a*b+1)],[
      step('每一整塊分成幾個一樣大的小格？',a*b,[a+b,a,b],'橫向與縱向各分一次，小格數量是兩個分母相乘。')
    ],art,`重疊處共有 ${n*m} 格，每格是 1/${a*b}，所以得到 ${answer}。`);
  });
  add(159, '小數乘法', (r,i) => {
    const a=r(12,95), b=r(2,89), p=i%3===0?0:1, q=i%2?2:1, x=(a/10**p).toFixed(p), y=(b/10**q).toFixed(q), answer=fixed(a*b,p+q);
    return exercise(`${x} × ${y} ＝ ？`,answer,[fixed(a*b,p+q+1),fixed(a*b,p+q-1),x+y],[
      step('先視為整數，乘積是多少？',a*b,[a+b,a*b*10],'先用整數乘法求出所有小單位的個數。'),
      step('兩個因數的小數位數合計最多是幾位？',p+q,[p,q,0],'十分之一乘百分之一，得到千分之一。')
    ],cards([['被乘數',x],['乘數',y],['位值',`${p}＋${q} 位`]]),`整數積 ${a*b} 換回小數單位，得到 ${answer}。`);
  });
  add(160, '製作折線圖', (r,i) => {
    const values=Array.from({length:5},()=>r(2,9)*2), names=['一','二','三','四','五'].map(x=>'週'+x), k=r(1,4);
    const chart = hide => gridTable([names,values],90,12,480,61)+`<g transform="translate(16 67) scale(.95 .81)">${plot(values,names,2,'line',hide)}</g>`;
    return exercise(`把表中的每日溫度畫成折線圖。${names[k]}的點在幾度？`,values[k],[values[k-1],values[k]/2,values[k]+2],[
      step('用哪種圖看每天的變化？','折線圖',['圓形圖','按大小排序的圖'],'有順序的時間資料可以用折線表示變化。'),
      step('縱軸每一格代表幾度？',2,[1,4,10],'先定尺度，再依日期標上資料點。')
    ],[gridTable([names,values]),chart(k),chart(k),chart(-1)],`把點標在 ${names[k]}、${values[k]}°C 的交會處，再依序連線。`);
  });
  add(161, '整數與小數除以整數', (r,i) => {
    const d=[2,4,5,8][i%4], n=r(1,94), decimal=i%2===1, dividend=decimal?fixed(n,1):n, answer=roundRatio(n,d*(decimal?10:1),3);
    return exercise(`${dividend} ÷ ${d} ＝ ？${decimal?'（商取到千分位）':''}`,answer,[answer*10,answer/10,n%d],[
      step('個位不夠分時，1 個一能換成幾個十分之一？',10,[1,100,1000],'整數或小數的每一位都可換成 10 個右一位的單位。')
    ],cards([['平均分',dividend],['份數',d],['每份','？']]),`${dividend} ÷ ${d} ${(n*1000)%(d*(decimal?10:1))===0?'＝':'≈'} ${answer}。`);
  });
  add(162, '正方體與長方體表面積', (r,i) => {
    const a=r(3,10), b=i%3===0?a:r(2,7), c=i%3===0?a:r(2,6), area=2*(a*b+a*c+b*c);
    const s=Math.min(460/(2*a+2*c),196/(b+2*c)), x=85, y=52, faces=[[c,0,a,c],[0,c,c,b],[c,c,a,b],[c+a,c,c,b],[2*c+a,c,a,b],[c,c+b,a,c]];
    const art=faces.map(([dx,dy,w,h],j)=>rect(x+dx*s,y+dy*s,w*s,h*s,colors[j%3],0)+label(x+(dx+w/2)*s,y+(dy+h/2)*s+5,`${w}×${h}`,15)).join('');
    return exercise(`長 ${a}、寬 ${b}、高 ${c} 公分的長方體，六個面的面積共幾平方公分？`,area,[a*b*c,area/2,2*a*b],[
      step('展開後有幾個面？',6,[3,4,8],'分別找三組相對的面，各組有兩個相同長方形。')
    ],art,`兩個 ${a}×${b}、兩個 ${a}×${c}、兩個 ${b}×${c} 相加，共 ${area} 平方公分。`);
  });
  add(163, '比率、百分率與折扣', (r,i) => {
    const v=i%3, p=v===0?r(12,88):r(5,9)*10, base=r(2,19)*100, answer=v===0?p:base*p/100;
    const stem=v===0?`共有 ${base} 張票，售出 ${base*p/100} 張。售出了百分之幾？`:`原價 ${base} 元，${v===1?`打 ${p/10} 折`:`付原價的 ${p/10} 成`}，要付幾元？`;
    const cells=Array.from({length:100},(_,j)=>rect(217+j%10*22,36+Math.floor(j/10)*22,22,22,j<p?colors[0]:'#fffaf0',0)).join('');
    return exercise(stem,answer,[v===0?100-p:base-answer,v===0?p/100:base,v===0?p+5:answer+10],[
      step('用哪個量當作全部？',base,[base*p/100,100,p],'用部分除以全部，再改寫成百分率。')
    ],cells,v===0?`${base*p/100} ÷ ${base} ＝ ${p}/100，所以是 ${p}%。`:`${p/10} ${v===1?'折':'成'}是 ${p}%，${base} × ${p}/100 ＝ ${answer} 元。`);
  });
  add(164, '時間的乘除', (r,i) => {
    const d=[2,3,4,5,6][i%5], m=r(2,59), v=i%3;
    const answer=v===0?m*d:v===1?m:60/d;
    const stem=v===0?`每次練琴 ${m} 分鐘，練 ${d} 次，共幾分鐘？`:v===1?`把 ${m*d} 分鐘平均分給 ${d} 次活動，每次幾分鐘？`:`${r(2,15)} 號的活動用了 1/${d} 小時，是幾分鐘？`;
    return exercise(stem,answer,[m,60*d,answer+5],[
      step('1 小時有幾分鐘？',60,[10,24,100],'先統一時間單位，再做乘法或除法。')
    ],cards([['時間',v===0?`${m} 分`:v===1?`${m*d} 分`:'60 分'],['份數',d],['結果','？']]),`${v===0?`${m} × ${d}`:v===1?`${m*d} ÷ ${d}`:`60 ÷ ${d}`} ＝ ${answer} 分。`);
  });
  add(165, '公畝、公頃、公噸與立方公尺', (r,i) => {
    const v=i%5, k=r(2,18), a=r(2,10), b=r(2,8), c=r(2,7);
    if(v===4) return exercise(`倉庫長 ${a}、寬 ${b}、高 ${c} 公尺，容納的空間是幾立方公尺？`,a*b*c,[a*b,a*b+c,a+b+c],[
      step('邊長 1 公尺的正方體，體積是？','1 立方公尺',['1 平方公尺','1 立方公分'],'立方公尺用來量較大的空間。')
    ],cards([['長',`${a} m`],['寬',`${b} m`],['高',`${c} m`]]),`${a} × ${b} × ${c} ＝ ${a*b*c} 立方公尺。`);
    const [unit,target,factor]=[['公畝','平方公尺',100],['公頃','平方公尺',10000],['平方公里','公頃',100],['公噸','公斤',1000]][v];
    return exercise(`${k} ${unit}等於多少${target}？`,k*factor,[k*10,k*factor/10,k+factor],[
      step(`1 ${unit}等於幾${target}？`,factor,[10,100,1000,10000].filter(n=>n!==factor),`先認出兩個單位的換算倍數。`)
    ],cards([['大單位',`${k} ${unit}`],['每 1 單位',`${factor} ${target}`],['換算','？']]),`${k} × ${factor} ＝ ${k*factor} ${target}。`);
  });
  add(166, '整數相除的分數表示', (r,i) => {
    const d=r(2,10), n=r(1,3*d-1), answer=fraction(n,d), divided=i%2===0;
    const w=520/Math.ceil(n/d), art=Array.from({length:Math.min(n,10)},(_,j)=>strip(0,d,55+j%5*112,65+Math.floor(j/5)*75,104,42)).join('');
    return exercise(divided?`${n} 條同樣大的蛋糕平分給 ${d} 人，每人得到幾條？`:`${n} 公升果汁，每 ${d} 公升算一桶。相當於幾桶？`,answer,[fraction(d,n),Math.floor(n/d),fraction(n+1,d)],[
      step(`把 1 等分成 ${d} 份，其中一份是？`,`1/${d}`,[`1/${d+1}`,`${d}/1`],'每一個整數單位可再等分成更小的份。')
    ],divided&&n<=10?art:Array.from({length:Math.ceil(n/d)},(_,j)=>strip(Math.min(d,n-j*d),d,58+j*w,100,w-8,60)).join(''),`${n} ÷ ${d} ＝ ${n}/${d} ＝ ${answer}。`);
  });
  add(167, '分數除以整數', (r,i) => {
    const d=r(3,9), n=r(1,d-1), k=r(2,6), answer=fraction(n,d*k);
    return exercise(`${n}/${d} 公升果汁平分給 ${k} 人，每人得到幾公升？`,answer,[fraction(n*k,d),fraction(n,d+k),fraction(n+1,d*k)],[
      step(`平分成 ${k} 份，取其中一份，相當於乘多少？`,`1/${k}`,[`${k}/1`,`1/${k+1}`],'除以整數，可以看成取原來的幾分之一。')
    ],[strip(n,d),strip(n,d*k)],`${n}/${d} × 1/${k} ＝ ${answer} 公升。`);
  });
  add(168, '小數取概數', (r,i) => {
    const n=r(1520,9800), d=[2,4,5,8,3,6,7][i%7], p=i%2+1, a=fixed(n,3), v=i%3===0, value=v?r(1,19)/d:a;
    const answer=v?roundRatio(Math.round(value*d),d,p):roundRatio(n,1000,p);
    return exercise(v?`${Math.round(value*d)} ÷ ${d}，商四捨五入到${p===1?'十分':'百分'}位是多少？`:`${a} 四捨五入到${p===1?'十分':'百分'}位是多少？`,answer,[Math.floor(value*10**p)/10**p,Math.ceil(value*10**p)/10**p,value],[
      step('保留的最後一位要看哪一位決定進位？',p===1?'百分位':'千分位',['十分位','百分位','千分位'],'看保留位數的下一位，滿 5 進一。')
    ],cards([['原數',v?`${Math.round(value*d)}÷${d}`:a],['取到',p===1?'十分位':'百分位'],['概數','≈？']]),`${v?`${Math.round(value*d)} ÷ ${d}`:a} ≈ ${answer}。`);
  });
  add(169, '立體的面與面', (r) => {
    const faces = ['頂面','底面','前面','後面','左面','右面'];
    const pairs = [[0,1],[0,2],[1,2],[2,3],[0,3],[1,3],[4,5],[0,4],
      [0,5],[1,4],[1,5],[2,4],[2,5],[3,4],[3,5]];
    const i = r(0,pairs.length*4-1);
    const [a,b] = pairs[Math.floor(i / 4)];
    const cube = i % 4 >= 2;
    const solid = cube ? '正方體' : '長方體';
    const pair = `${faces[a]}和${faces[b]}`;
    const parallel = (a ^ 1) === b;
    const askEdge = i % 2 === 1;
    const stem = askEdge ? `${solid}的${pair}共用幾條邊？` : `${solid}的${pair}是什麼關係？`;
    const answer = askEdge ? (parallel ? 0 : 1) : (parallel ? '平行' : '垂直');
    const choices = askEdge ? [0,1,2,4] : ['平行','垂直','相交但不垂直'];
    const right = cube ? 390 : 485;
    const top = polygon(`185,85 ${right-85},85 ${right},144 270,144`,colors[0]);
    const front = polygon(`270,144 ${right},144 ${right},264 270,264`,colors[1]);
    const side = polygon('185,85 270,144 270,264 185,205',colors[3]);
    const center = (270+right)/2;
    const diagram = top+front+side+label(center-32,115,'頂面',18)+label(center,205,'前面',18)+label(228,180,'左面',18)
      +label(330,285,'圖中看不到底面、後面和右面',16);
    return exercise(stem,answer,choices,[
      step(`${pair}的位置是？`,parallel?'相對':'相鄰',['相對','相鄰'],'找找這兩個面是否分處兩側，還是沿一條邊接在一起。')
    ],diagram,parallel?`${pair}相對，彼此平行，共用 0 條邊。`:`${pair}相鄰，彼此垂直，共用 1 條邊。`);
  });
  add(170, '液體體積與排水', (r,i) => {
    const w=r(3,9), l=r(4,10), h=r(1,5), before=r(2,6), after=before+h, answer=w*l*h;
    const tank=(x,level)=>rect(x,65,160,176,'#fffaf0',8)+rect(x+2,239-level*13,156,level*13,colors[3],0)+label(x+80,268,`${level} cm`,21);
    return exercise(`長 ${l}、寬 ${w} 公分的直壁水槽，石頭完全沒入後水位從 ${before} 升到 ${after} 公分。石頭體積幾立方公分？`,answer,[w*l*after,w*l,h],[
      step('水位上升幾公分？',h,[before,after],'用放入後的水位減去原本的水位。')
    ],tank(115,before)+tank(385,after)+label(330,156,'→',30),`排開的水和石頭體積一樣，${l} × ${w} × ${h} ＝ ${answer} 立方公分。`);
  });
})(globalThis.MathUpper);
