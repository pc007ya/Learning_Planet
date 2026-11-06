(function (M) {
  'use strict';
  const {define, exercise, step, cards, gridTable, strip, numberLine, plot, sector, label, line, rect, polygon, colors, fixed, fraction} = M;
  const add = (id, title, make) => define(id, 4, title, make);
  add(125, '多位數乘除', (r,i) => {
    const a=r(120,975), b=r(11,260), tens=b-b%10;
    if(i%2===0) {
      return exercise(`${a} × ${b} ＝ ？`,a*b,[a*(b%10),a*tens,a+b],[
        step('乘個位的部分積是多少？',a*(b%10),[a*b],`把 ${b} 拆成 ${tens} 和 ${b%10}，先算個位。`),
        step(`乘 ${tens} 的部分積是多少？`,a*tens,[a*tens/10],'十位、百位的部分積依位值對齊。')
      ],cards([['被乘數',a],['拆乘數',`${tens}＋${b%10}`],['部分積','相加']]),`${a*tens} ＋ ${a*(b%10)} ＝ ${a*b}。`);
    }
    const q=r(10,92), rem=r(0,b-1), n=b*q+rem, answer=`${q} 餘 ${rem}`;
    return exercise(`${n} ÷ ${b} ＝ ？`,answer,[`${q+1} 餘 ${rem}`,`${q-1} 餘 ${rem+b}`,`${q} 餘 ${rem+1}`],[
      step('先估商的十位是多少？',Math.floor(q/10),[q%10,0],`比較 ${b} 的十倍、二十倍……，找不超過被除數的最大整十倍。`),
      step('餘數要比除數怎樣？','小',['大','一樣大'],'餘數夠分一組時，商要再增加。')
    ],cards([['被除數',n],['除數',b],['商與餘數','？']]),`${b} × ${q} ＋ ${rem} ＝ ${n}。`);
  });
  add(128, '二位小數的認識與加減', (r,i) => {
    const a=r(125,990), b=r(12,120), x=(a/100).toFixed(2), y=(b/100).toFixed(2);
    const type=i%4;
    if(type===3) {
      const k=r(100,999), z=(k/100).toFixed(2), answer=a===k?'一樣大':a>k?x:z;
      return exercise(`${x} 和 ${z}，哪個比較大？`,answer,[x,z,'一樣大'],[
        step('小數要從哪一位開始比？','最高位',['百分位','最後一位'],'先比整數部分，再依序比十分位與百分位。')
      ],gridTable([['個','．','十分','百分'],[x[0],'．',x[2],x[3]],[z[0],'．',z[2],z[3]]]),`對齊位值比較，結果是 ${answer}。`);
    }
    const answer=type===0?a%10:fixed(type===1?a+b:a-b);
    return exercise(type===0?`${x} 的百分位數字是多少？`:`${x} ${type===1?'＋':'−'} ${y} ＝ ？`,answer,[a%100,fixed(a+b),fixed(a-b)],[
      step('小數點右邊第二位是？','百分位',['十分位','個位','千分位'],'先對齊小數點，再對齊相同位值。'),
      step(`${x} 有幾個百分之一？`,a,[Math.floor(a/10)],'1 個一可以換成 100 個百分之一。')
    ],gridTable([['個','．','十分','百分'],[x[0],'．',x[2],x[3]],...(type===0?[]:[[y[0],'．',y[2],y[3]]])]),type===0?`${x} 的百分位是 ${answer}。`:`以百分之一為單位計算，結果是 ${answer}。`);
  });
  add(130, '長條圖與折線圖', (r,i) => {
    const values=Array.from({length:4},()=>r(2,9)*2), k=r(0,3), bar=i%3!==2;
    const names=bar?['紅隊','藍隊','綠隊','紫隊']:['週一','週二','週三','週四'];
    const insert=i%3===1;
    const stem=insert?`依表格補上長條圖，${names[k]}的柱頂應對準幾票？`:`圖中${names[k]}有幾票？（第 ${r(1,9)} 組紀錄）`;
    const image=plot(values,names,2,bar?'bar':'line',insert?k:-1);
    return exercise(stem,values[k],[values[(k+1)%4],values[k]/2],[
      step('縱軸一格代表幾票？',2,[1,4,10],'先看縱軸相鄰刻度的差。')
    ],insert?[gridTable([names,values]),image,plot(values,names,2,'bar')]:image,`${names[k]}對應到 ${values[k]} 票。`);
  });
  add(131, '概數與估算', (r,i) => {
    const n=r(115,875), place=10**(i%2+1), mode=i%4;
    if(mode===3) {
      const b=r(105,789), a0=Math.round(n/100)*100, b0=Math.round(b/100)*100, op=Math.floor(i/4)%4;
      const x=op===1?Math.max(a0,b0):a0, y=op===1?Math.min(a0,b0):b0;
      const a=op===1?Math.max(n,b):n, c=op===1?Math.min(n,b):b;
      const signs=['＋','−','×','÷'], values=[x+y,x-y,x*y,Number((x/y).toFixed(2))];
      return exercise(`${a} ${signs[op]} ${c}，兩數先四捨五入到百位，估算是多少？${op===3?'（商取到百分位）':''}`,values[op],values.filter((_,j)=>j!==op),[
        step(`${a} 四捨五入到百位是多少？`,x,[x+100],'看十位決定進位或捨去。')
      ],cards([['原算式',`${a} ${signs[op]} ${c}`],['百位概數','先估兩數'],['估算','≈ ？']]),`${x} ${signs[op]} ${y} ≈ ${values[op]}。`);
    }
    const low=Math.floor(n/place)*place, high=Math.ceil(n/place)*place, answer=[Math.round(n/place)*place,high,low][mode];
    const method=['四捨五入','無條件進入','無條件捨去'][mode], unit=place===10?'十':'百';
    return exercise(`${n} 用${method}法取到${unit}位，約是多少？`,answer,[low,high,high+place],[
      step(`不超過 ${n} 的最大整${unit}數是？`,low,[high,low-place],`先找 ${n} 兩側的整${unit}數。`)
    ],cards([['較小概數',low],['原數',n],['較大概數',high]]),`${n} ≈ ${answer}（${method}）。`);
  });
  add(132, '數表規律與奇偶', (r,i) => {
    const n=r(12,77);
    if(i%3===2) {
      const b=r(5,n), op=Math.floor(i/3)%3, sign=['＋','−','×'][op], total=[n+b,n-b,n*b][op];
      return exercise(`${n} ${sign} ${b} 的結果是奇數還是偶數？`,total%2?'奇數':'偶數',['奇數','偶數','無法判斷'],[
        step(`${n} 是哪一種數？`,n%2?'奇數':'偶數',['奇數','偶數'],'看個位是否能配成兩個一組。')
      ],cards([['第一個數',n],[['加上','減去','乘上'][op],b],['結果','奇或偶？']]),`${n} ${sign} ${b} ＝ ${total}，是${total%2?'奇數':'偶數'}。`);
    }
    const gap=i%2===0?10:7;
    const values=[[n,n+1,n+2],[n+gap,n+gap+1,n+gap+2],[n+2*gap,n+2*gap+1,'？']];
    return exercise(`${gap===7?'月曆式數表':'百數表'}從 ${n} 開始，右下角是多少？`,n+2*gap+2,[n+gap+2,n+2*gap,n+2*gap+3],[
      step('同一欄往下一格，增加多少？',gap,[1,7,10],'對照上下兩列的同一欄。')
    ],gridTable(values),`先向下兩格，再向右兩格，可得到 ${n+2*gap+2}。`);
  });
  add(136, '四則計算規律', (r,i) => {
    const a=r(12,89), b=r(3,9), c=r(2,9);
    if(i%3===2) return exercise(`${a} × 25 × 4 ＝ ？`,a*100,[a*25+4,a*25,a*4],[
      step('先算哪兩個數最方便？','25 × 4',[`${a} × 25`,`${a} × 4`],'三個數相乘，可以先湊整百。')
    ],cards([['第一數',a],['第二數',25],['第三數',4]]),`25 × 4 ＝ 100，所以結果是 ${a*100}。`);
    if(i%3===1) return exercise(`${a*b} × ${c} ÷ ${b} ＝ ？`,a*c,[a*b*c,a,a+b+c],[
      step('可以先把哪個數除以除數？',a*b,[a,c],'先乘後除，可先把能整除的因數除掉。')
    ],cards([['原數',a*b],['乘',c],['除',b]]),`${a*b} ÷ ${b} ＝ ${a}，再乘 ${c} 得 ${a*c}。`);
    return exercise(`${a} ＋ ${b} − ${c} ＝ ？`,a+b-c,[a+b+c,a-b+c,a+b],[
      step('先拿走再補上，哪個算式等值？',`${a} − ${c} ＋ ${b}`,[`${a} ＋ ${c} − ${b}`,`${a} − ${b} − ${c}`],'在總量足夠時，可調整加上與拿走的順序。')
    ],cards([['起點',a],['加入',b],['取出',c]]),`先減 ${c} 再加 ${b}，結果仍是 ${a+b-c}。`);
  });
  add(137, '時間單位換算與計算', (r,i) => {
    const h=[11,23,8][i%3], min=r(32,58), elapsed=r(35,79), start=h*60+min, end=start+elapsed;
    const clock=n=>`${n>=1440?'次日 ':''}${String(Math.floor(n/60)%24).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;
    if(i%4===3) return exercise(`${r(2,9)} 號的活動持續 ${h} 時 ${min} 分，共幾分？`,start,[h*100+min,h+min],[
      step('1 小時等於幾分鐘？',60,[10,100,24],'時與分相差 60 倍。')
    ],cards([['時',h],['每小時分鐘',60],['再加分',min]]),`${h} × 60 ＋ ${min} ＝ ${start} 分。`);
    return exercise(`${clock(start)} 出發，${elapsed} 分鐘後是幾點？`,clock(end),[clock(end+60),clock(end-60),clock(end+1)],[
      step('從出發到下一個整點有幾分鐘？',60-min,[min,60],'先走到下一個整點，滿 24 小時換成次日 00:00。')
    ],cards([['出發',clock(start)],['經過',`${elapsed} 分`],['到達','？']]),`先走 ${60-min} 分到整點，再走 ${elapsed-(60-min)} 分，到 ${clock(end)}。`);
  });
  add(138, '乘除兩步驟應用', (r,i) => {
    const a=r(3,9), b=r(3,12), c=r(2,8), d=r(2,5);
    const divide=i%3===2, equal=i%3===0, total=divide?a*b*c*d:a*b*c;
    const first=divide?total/c:total, answer=divide?first/d:first/b;
    const stem=divide?`${total} 枝筆均分給 ${c} 班，每班再平分給 ${d} 組。每組幾枝？`:equal?`${a*c} 盒筆每盒 ${b} 枝，平分給 ${b} 組。每組幾枝？`:`${a*b} 盒筆每盒 ${c} 枝，每 ${b} 枝裝一袋。能裝幾袋？`;
    const expression=divide?`${total} ÷ ${c} ÷ ${d}`:equal?`${a*c} × ${b} ÷ ${b}`:`${a*b} × ${c} ÷ ${b}`;
    return exercise(stem,answer,[first,total,total-answer],[
      step(divide?'先算每班有幾枝？':'先算一共有幾枝？',first,[answer,a+b+c],'先求第一步的量，再看第二步是平分還是每袋固定枝數。'),
      step('把兩步併成哪個算式？',expression,[`${total} ＋ ${b}`,`${total} − ${b}`],'同級乘除，按從左到右的順序算。')
    ],cards([['第一步',divide?'每班':'全部'],['第二步',divide?'每組':equal?'每組':'袋數'],['答案','？']]),`${expression} ＝ ${answer}。`);
  });
  add(139, '同分母分數的比較與運算', (r,i) => {
    const d=r(3,9), a=r(d+1,3*d-1), b=r(1,d-1), v=i%4, k=r(2,4);
    const n=[a+b,a-b,a*k,a][v];
    const stem=[`${a}/${d} ＋ ${b}/${d} ＝ ？`,`${a}/${d} − ${b}/${d} ＝ ？`,`${a}/${d} 的 ${k} 倍是多少？`,`${a}/${d} 和 ${b}/${d} 哪個較大？`][v];
    const answer=v===3?`${a}/${d}`:fraction(n,d);
    const w=510/Math.ceil(a/d);
    const art=Array.from({length:Math.ceil(a/d)},(_,j)=>strip(Math.min(d,a-j*d),d,65+j*w,80,w-5,46)).join('')+strip(b,d,65,175,w-5,46,colors[1]);
    return exercise(stem,answer,[fraction(b,d),fraction(n+1,d),fraction(n,d+1)],[
      step('每小格是幾分之一？',`1/${d}`,[`1/${d+1}`,`1/${d-1}`],'同分母表示每一小格一樣大。')
    ],art,`數相同大小的 ${d} 分之一，結果是 ${answer}。`);
  });
  add(140, '簡單異分母分數與小數', (r,i) => {
    const d=r(2,5), k=r(2,4), D=d*k, a=r(1,d-1), b=r(1,k), x=a*k, v=i%4;
    if(v===3) {
      const p=[2,5,10,100][Math.floor(i/4)%4], n=r(1,p-1), answer=n/p;
      return exercise(`${n}/${p} 換成小數是多少？`,answer,[answer*10,answer/10,n],[
        step(`把分母 ${p} 改寫為 100 要乘幾？`,100/p,[10,100,1],'分子與分母同乘，大小保持相同。')
      ],cards([['分數',`${n}/${p}`],['改成','百分之幾'],['小數','？']]),`${n}/${p} ＝ ${n*(100/p)}/100 ＝ ${answer}。`);
    }
    const n=v===0?x+b:x-b, answer=v===2?(x===b?'一樣大':x>b?`${a}/${d}`:`${b}/${D}`):fraction(n,D);
    const stem=v===2?`${a}/${d} 和 ${b}/${D} 哪個較大？`:`${a}/${d} ${v===0?'＋':'−'} ${b}/${D} ＝ ？`;
    return exercise(stem,answer,v===2?[`${a}/${d}`,`${b}/${D}`,'一樣大']:[fraction(x+b,D),fraction(x-b,D),fraction(n+1,D)],[
      step(`${a}/${d} 是幾個 ${D} 分之一？`,x,[a,D],'把每一大格再等分，才可以數同樣大小的小格。')
    ],[strip(a,d)+strip(b,D,58,175,544,40,colors[1]),strip(x,D)+strip(b,D,58,175,544,40,colors[1])],`用 ${x}/${D} 和 ${b}/${D} 比較或計算，得到 ${answer}。`);
  });
  add(141, '分數小數數線', (r,i) => {
    const d=[3,4,5,10][i%4], k=r(1,d-1), v=Math.floor(i/4)%3;
    const value=n=>d===10?n/10:fraction(n,d);
    const unit=step('從 0 到 1 的每一格代表多少？',d===10?.1:`1/${d}`,d===10?[.01,1,10]:[`1/${d+1}`,`1/${d-1}`],'同一段數線上的每一小格等長。');
    if(v===1) {
      const advance=r(1,d-k), answer=value(k+advance);
      return exercise(`數線每一單位有 ${d} 格，從第 ${k} 格向右走 ${advance} 格，停在什麼數？`,answer,[value(k),value(k+advance-1),value(advance),value(k+advance+1)],[unit],
        [numberLine(d,k),numberLine(d,k),numberLine(d,k+advance)],`向右走到第 ${k+advance} 格，停在 ${answer}。`);
    }
    if(v===2) {
      const second=k===d-1?k-1:k+1, a=value(k), b=value(second), answer=value(Math.max(k,second));
      return exercise(`在數線上比較 ${a} 和 ${b}，哪個在右邊？`,answer,[a,b,'同一點'],[unit],numberLine(d,k),`比較等長的小格數，${answer} 在右邊。`);
    }
    const answer=value(k);
    return exercise(`從 0 到 1 分成 ${d} 格，標記在第 ${k} 格。這個位置是？`,answer,[value(k+1),value(k-1),value(k+2)],[unit],numberLine(d,k),`從 0 走 ${k} 格，所以是 ${answer}。`);
  });
  add(142, '旋轉角與平角周角', (r,i) => {
    const ticks=r(1,12), sign=i%2===0?1:-1, start=r(1,12), angle=ticks*30, finish=(start-1+sign*ticks+24)%12+1;
    const art=sector(330,158,105,angle,sign===1?start*30-90:finish*30-90);
    const numbers=Array.from({length:12},(_,j)=>label(330+123*Math.sin((j+1)*Math.PI/6),165-123*Math.cos((j+1)*Math.PI/6),j+1,16)).join('');
    return exercise(`從鐘面 ${start} 朝${sign===1?'順':'逆'}時針轉 ${ticks} 格，到 ${finish}。轉了幾度？`,angle,[ticks,360-angle,angle/2],[
      step('鐘面每兩個相鄰數字相隔幾度？',30,[15,60,90],'一整圈 360 度，鐘面分 12 格。')
    ],art+numbers,`${ticks} × 30° ＝ ${angle}°${angle===180?'，是平角':angle===360?'，是周角':''}。`);
  });
  add(143, '平方公尺與複合面積', (r,i) => {
    const w=r(3,12), h=r(3,9), a=r(1,w-1), b=r(1,h-1), composite=i%2===0;
    const s=Math.min(470/w,205/(h+(composite?b:0))), width=w*s, height=h*s, x=330-width/2, y=45;
    const art=rect(x,y,width,height,colors[0],0)+label(330,y+height/2+7,`${w} m × ${h} m`,21)+(composite?rect(x,y+height,a*s,b*s,colors[1],0)+label(x+a*s/2,y+height+b*s/2+5,`${a}×${b}`,16):'');
    return exercise(composite?`地面由 ${w}×${h} 與 ${a}×${b} 兩塊長方形拼成（邊長單位是公尺），共幾平方公尺？`:`房間長 ${w} 公尺、寬 ${h} 公尺，面積是幾平方公尺？`,w*h+(composite?a*b:0),[w*h,a*b,(w+h)*2],[
      step('每邊 1 公尺的正方形面積是多少？','1 平方公尺',['1 平方公分','1 立方公尺'],'平方公尺是計算房間或地面面積的單位。')
    ],art,`${w} × ${h}${composite?` ＋ ${a} × ${b}`:''} ＝ ${w*h+(composite?a*b:0)} 平方公尺。`);
  });
  add(144, '立方公分與數積木', (r,i) => {
    const a=r(2,5), b=r(2,4), layers=r(2,4), top=i%2===0?a*b:r(1,a*b-1), counts=[...Array(layers-1).fill(a*b),top];
    const art=counts.map((n,j)=>{
      const x=50+j*(560/layers), w=112/a;
      return label(x+52,73,`第 ${j+1} 層`,17)+Array.from({length:a*b},(_,k)=>rect(x+k%a*w,92+Math.floor(k/a)*26,w,26,k<n?colors[j%4]:'#fffaf0',0)).join('');
    }).join('');
    const answer=M.sum(counts);
    return exercise(`每小塊是 1 立方公分。底下 ${layers-1} 層各有 ${a} 排、每排 ${b} 塊，頂層有 ${top} 塊。共幾立方公分？`,answer,[a*b,answer+1,layers*a*b],[
      step('一個邊長 1 公分的小正方體占多少空間？','1 立方公分',['1 平方公分','1 公分'],'用相同大小的正方體一塊一塊量體積。')
    ],art,`${counts.join(' ＋ ')} ＝ ${answer} 立方公分。`);
  });
  add(145, '垂直與平行', (r,i) => {
    const d=r(2,19), kind=i%3;
    const art=line(95,215,560,215)+line(205,65,205,260,colors[1],5)+(kind===0?line(440,65,440,260,colors[0],5):kind===1?line(100,106,555,106,colors[0],5):line(155,70,490,240,colors[0],5));
    return exercise(`第 ${d} 張圖的兩條彩色線是什麼關係？`,kind===0?'平行':kind===1?'垂直':'相交但不垂直',['平行','垂直','相交但不垂直'],[
      step('直角是幾度？',90,[45,180,360],'可以用三角板的直角檢查兩線是否垂直。')
    ],art,kind===0?'兩條彩線同時垂直於同一條線，所以互相平行。':kind===1?'兩條線相交成 90°，所以互相垂直。':'兩線相交，交角不是直角。');
  });
  add(146, '圖形全等與疊合', (r,i) => {
    const a=r(3,18), b=r(2,9), same=i%3!==2, angle=i%2?90:180, w=a*5+35, h=b*5+30;
    const shape=polygon(`0,0 ${w},0 0,${h}`,colors[0]);
    const other=polygon(`0,0 ${same?w:w+20},0 0,${h}`,colors[1]);
    const first=`<g transform="translate(150 125)">${shape}</g>`;
    const initial=first+`<g transform="translate(480 164) rotate(${angle})">${other}</g>`;
    const overlay=first+`<g opacity=".55" transform="translate(150 125)">${other}</g>`;
    return exercise(`將右圖旋轉 ${angle}°再移動。兩個三角形（左圖兩直角邊 ${a}、${b} 單位）能完全疊合嗎？`,same?'能':'不能',['能','不能','必須放大才能知道'],[
      step('轉動圖形會改變邊長嗎？','不會',['不會','會','只改變其中一邊'],'轉動和移動只改變方向或位置。')
    ],[initial,overlay,overlay],same?'疊合後對應邊與對應角完全重合。':'對應邊長不同，移動和轉動後仍無法完全疊合。');
  });
})(globalThis.MathUpper);
