// Small, exact visual explorations for curriculum concepts without a standalone unit.
// State is local to this open map; these demos never write learner progress.
const states = new Map();
const stateFor = id => { if (!states.has(id)) states.set(id, { step:0, counts:[1,0,0] }); return states.get(id); };
const colors = ['#a6cfff','#b7ebd5','#f2d59e','#d5b6f5','#f2b5cb','#a5e1e8'];
const svg = (body, label, height = 150) => `<svg viewBox="0 0 300 ${height}" role="img" aria-label="${label}">${body}</svg>`;
const text = (x,y,value,size=16,color='#e8e8fa') => `<text x="${x}" y="${y}" fill="${color}" text-anchor="middle" font-size="${size}" font-family="sans-serif">${value}</text>`;
const button = (action,label) => `<button data-lab-action="${action}">${label}</button>`;
const controls = content => `<div class="lab-controls">${content}</div>`;
const dots = (count,x,y,gap=18,color=colors[1],row=6) => Array.from({length:count},(_,i)=>`<circle cx="${x+i%row*gap}" cy="${y+Math.floor(i/row)*gap}" r="6" fill="${color}"/>`).join('');
const cube = (x=110,y=33) => `<path d="M${x} ${y}l40 -23 40 23 -40 23Z" fill="${colors[2]}"/><path d="M${x} ${y}l40 23v55l-40 -23Z" fill="${colors[0]}"/><path d="M${x+40} ${y+23}l40 -23v55l-40 23Z" fill="${colors[1]}"/>`;

export function changeLab(id,action) {
  const state=stateFor(id);
  if (/^[pm][012]$/.test(action)) { const i=Number(action[1]); state.counts[i]=Math.max(0,Math.min(5,state.counts[i]+(action[0]==='p'?1:-1))); }
  else if(action==='fold') state.folded=!state.folded;
  else { state.step++; state.folded=false; }
}
export function labMarkup(id) {
  const s=stateFor(id);
  let picture='',tools='',caption='';
  if(id==='banknotes') {
    const denominations=[100,500,1000];
    picture=svg(denominations.map((n,i)=>`<rect x="${8+i*97}" y="18" width="89" height="58" rx="8" fill="${colors[i]}"/>${text(52+i*97,54,n,20,'#26364d')}${text(52+i*97,99,`× ${s.counts[i]}`)}`).join('')+text(150,136,`${s.counts.reduce((a,n,i)=>a+n*denominations[i],0)} 元`,23),'不同面額的示意錢卡與合計金額');
    tools=denominations.map((n,i)=>`<div aria-label="${n}元張數">${button('m'+i,`−<span class="sr-only">一張${n}元</span>`)}${button('p'+i,`＋<span class="sr-only">一張${n}元</span>`)}</div>`).join('');
    caption='點 ＋、−，換換看。';
  } else if(id==='estimate2'||id==='estimate3') {
    const examples=id==='estimate2'?[[198,'＋',303,200,300,500],[502,'−',198,500,200,300]]:[[398,'＋',205,400,200,600],[802,'−',297,800,300,500],[198,'×',3,200,3,600],[602,'÷',3,600,3,200]];
    const [a,op,b,aa,bb,total]=examples[s.step%examples.length];
    picture=svg(text(150,37,`${a} ${op} ${b}`,25)+text(150,73,'↓',25,colors[1])+text(150,108,`大約 ${aa} ${op} ${bb}`,24)+text(150,143,`大約 ${total}`,22,colors[2]),'用接近的數估計結果',160);
    tools=button('next','換一個');caption='用接近的數，先估一估。';
  } else if(id==='array') {
    const rotated=s.step%2,cols=rotated?3:4,rows=rotated?4:3;
    picture=svg(Array.from({length:rows},(_,r)=>dots(cols,150-(cols-1)*14,28+r*28,28,colors[r],cols)).join('')+text(150,145,`${rows} × ${cols} ＝ 12`,22),'同樣十二個物件旋轉行列方向',160);
    tools=button('next','↻ 轉一轉');caption='方向變了，總數一樣。';
  } else if(id==='inverse') {
    picture=svg(dots(8,42,35,30,colors[0],8)+text(150,118,s.step%2?'5 ＋ 3 ＝ 8':'8 − 3 ＝ 5',23),'用加法檢查減法',145);
    // The initial row shows the five kept objects and three removed ones in different colors.
    picture=picture.replace(dots(8,42,35,30,colors[0],8),dots(5,42,35,30,colors[0],5)+dots(3,192,35,30,s.step%2?colors[0]:colors[3],3));
    tools=button('next',s.step%2?'再拿走':'把 3 個加回來');caption='拿走的加回來，回到原來。';
  } else if(id==='threeAdd') {
    const values=s.step%2?[4,2,3]:[2,3,4];
    picture=svg(values.map((n,i)=>`<rect x="${10+i*97}" y="18" width="87" height="76" rx="10" fill="#ffffff08"/>${dots(n,32+i*97,42,20,colors[n%3],3)}`).join('')+text(150,130,`${values.join(' ＋ ')} ＝ 9`,23),'交換三群物件的合併順序');
    tools=button('next','↔ 換順序');caption='換順序，還是九個。';
  } else if(id==='sharing') {
    const groups=s.step%2?4:3,each=12/groups;
    picture=svg(Array.from({length:groups},(_,i)=>`<rect x="${8+i*292/groups}" y="18" width="${280/groups}" height="76" rx="12" fill="#ffffff09" stroke="${colors[i]}"/>${dots(each,8+i*292/groups+20,42,18,colors[i],2)}`).join('')+text(150,132,`${groups} 份，每份 ${each} 個`,22),'十二個物件分成相同數量的幾份');
    tools=button('next','換個分法');caption='十二個，分得一樣多。';
  } else if(id==='fraction') {
    const parts=[2,4,8][s.step%3];
    picture=svg(Array.from({length:parts},(_,i)=>`<rect x="${20+i*260/parts}" y="24" width="${260/parts}" height="74" fill="${i===0?colors[3]:'#ffffff0d'}" stroke="#c0c7e7" stroke-width="1.5"/>`).join('')+text(150,135,`其中一份：1/${parts}`,22),'同一長方形等分，取其中一份');
    tools=button('next',parts===8?'換一張紙':'再對半分');caption='每一份，都一樣大。';
  } else if(id==='shapes'||id==='rectangle') {
    if(id==='rectangle') {
      const square=s.step%2===0;
      picture=svg(`<g transform="translate(150 73) rotate(25)"><rect x="${square?-42:-65}" y="-42" width="${square?84:130}" height="84" rx="1" fill="#a6cfff25" stroke="${colors[0]}" stroke-width="3"/>${[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,y])=>`<path d="M${x*(square?42:65)-x*10} ${y*42}v${-y*10}h${x*10}" fill="none" stroke="${colors[2]}" stroke-width="2"/>`).join('')}</g>`+text(150,145,square?'正方形：四邊一樣長':'長方形：對邊一樣長',18),'斜放的正方形或長方形，標出四個直角',160);
      tools=button('next','換個圖形');caption='轉個方向，仍有四個直角。';
    } else {
      const selected=s.step%4;
      const figures=[`<path d="M150 20 210 112H90Z" fill="${colors[0]}"/>`,`<rect x="104" y="24" width="92" height="92" fill="${colors[1]}"/>`,cube(),`<circle cx="150" cy="68" r="48" fill="${colors[3]}"/><ellipse cx="138" cy="50" rx="20" ry="12" fill="#ffffff22"/>`];
      const captions=['三個角，三條邊','四個角，四條邊','六個平平的面','圓圓的，沒有平平的面'];
      picture=svg(figures[selected]+text(150,145,captions[selected],18),'觀察形體的角、邊或平面',160);tools=button('next','換個形體');caption='找找角、邊和平平的面。';
    }
  } else if(id==='perimeter') {
    const [w,h]=[[3,2],[4,2],[4,3]][s.step%3],x=150-w*23,y=74-h*18;
    picture=svg(`<rect x="${x}" y="${y}" width="${w*46}" height="${h*36}" fill="#a6cfff10" stroke="${colors[0]}" stroke-width="3"/>`+text(150,y-9,`${w} 公分`,16)+text(150,y+h*36+24,`${w} 公分`,16)+text(x-24,78,h,16)+text(x+w*46+24,78,h,16)+text(150,170,`${w}＋${h}＋${w}＋${h}＝${2*(w+h)} 公分`,20),'量每一邊再加總周界',190);
    tools=button('next','換個大小');caption='四條邊，合起來多長？';
  } else if(id==='classify') {
    const byShape=s.step%2;
    const shapes=[0,1,0,1,0,1], shades=[0,0,1,1,0,1];
    const order=byShape?[0,2,4,1,3,5]:[0,1,4,2,3,5];
    picture=svg(`<rect x="8" y="15" width="135" height="95" rx="12" fill="#ffffff08"/><rect x="157" y="15" width="135" height="95" rx="12" fill="#ffffff08"/>`+order.map((n,i)=>{const x=31+(i%3)*41+(i>=3?149:0),y=62;return shapes[n]?`<rect x="${x-10}" y="${y-10}" width="20" height="20" fill="${colors[shades[n]]}"/>`:`<circle cx="${x}" cy="${y}" r="11" fill="${colors[shades[n]]}"/>`;}).join('')+text(150,139,byShape?'依形狀分':'依顏色分',22),'同一組物件依顏色或形狀分類');
    tools=button('next','換個分法');caption='同一堆，還能怎麼分？';
  } else if(id==='numberline') {
    const subtract=s.step%2===1,start=subtract?8:3,end=subtract?5:7;
    picture=svg(`<path d="M20 80H283l-8 -5m8 5 -8 5" fill="none" stroke="#b4bdd9" stroke-width="2"/>`+Array.from({length:11},(_,i)=>`<path d="M${24+i*24} 75v10" stroke="#b4bdd9"/>${text(24+i*24,104,i,11)}`).join('')+`<path d="M${24+start*24} 69Q${24+(start+end)*12} 9 ${24+end*24} 69" stroke="${colors[1]}" stroke-width="3" fill="none"/><circle cx="${24+start*24}" cy="80" r="5" fill="${colors[0]}"/><circle cx="${24+end*24}" cy="80" r="6" fill="${colors[2]}"/>`+text(150,140,subtract?'8 − 3 ＝ 5':'3 ＋ 4 ＝ 7',23),'從零開始的數線，表示向前加或向後減',160);
    tools=button('next','換個方向');caption=subtract?'從八往回走三格。':'從三往前走四格。';
  } else if(id==='twoSteps3') {
    const step=s.step%3;
    picture=svg(Array.from({length:2},(_,i)=>`<rect x="${14+i*143}" y="14" width="129" height="65" rx="10" fill="#ffffff08"/>${dots(6,43+i*143,36,32,colors[i],3)}`).join('')+(step>=1?text(150,112,'6 ＋ 6 ＝ 12',23):'')+(step===2?text(150,148,'12 ÷ 3 ＝ 4',23,colors[2]):''),'兩袋各六個，相加後平分給三人',166);
    tools=button('next',step===0?'① 合起來多少？':step===1?'② 平分給三人':'↶ 再看一次');caption='六個加六個，平分給三人。';
  } else if(id==='nets') {
    const second=s.step%2;
    const cells=second?[[0,2,3],[1,2,0],[2,2,1],[1,1,2],[1,0,4],[1,3,5]]:[[0,1,3],[1,1,0],[2,1,1],[3,1,4],[1,0,2],[1,2,5]];
    const net=cells.map(([x,y,c])=>`<rect x="${second?78+x*34:52+x*40}" y="${12+y*(second?34:40)}" width="${second?34:40}" height="${second?34:40}" fill="${colors[c]}" stroke="#15203c" stroke-width="1.5"/>`).join('');
    picture=svg(s.folded?cube(110,42):net,s.folded?'同樣六個面摺成正方體':'可摺成正方體的六面展開圖',158);
    tools=button('fold',s.folded?'攤開來':'摺起來')+button('next','換個展開圖');caption='不同展開圖，也能摺成同一形體。';
  }
  return `<div class="lab-title">✦ 看圖動手做</div>${picture}<p>${caption}</p>${controls(tools)}`;
}
