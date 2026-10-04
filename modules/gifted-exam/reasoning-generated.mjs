// Keep version 1 stable: saved seeds must reconstruct the original exam.
const permutations=items=>items.length===1?[items]:items.flatMap((item,i)=>permutations(items.filter((_,j)=>i!==j)).map(rest=>[item,...rest]));
const analogies=[
 ['鳥','天空','魚','水中',['翅膀','魚鰭','樹上']],
 ['汽車','陸地','船','水上',['車輪','方向盤','山上']],
 ['手套','手','鞋子','腳',['帽子','衣服','褲子']],
 ['帽子','頭','鞋子','腳',['手','衣服','帽子']],
 ['鳥','翅膀','魚','魚鰭',['天空','水中','樹上']],
 ['眼睛','看','耳朵','聽',['跑','跳','畫']],
 ['鉛筆','寫字','剪刀','剪紙',['紙張','畫筆','寫字']],
 ['太陽','白天','月亮','夜晚',['雲','白天','山上']],
 ['一週','七天','一天','二十四小時',['十二小時','七小時','三十小時']],
 ['正方形','四個邊','三角形','三個邊',['四個邊','五個邊','六個邊']]
];
export function reasoningQuestions(seed,formId){
 const level=['reasoning-a','reasoning-b','reasoning-c'].indexOf(formId);if(level<0)throw new Error('Unknown reasoning form');
 let state=(seed^(level+1)*0x9e3779b9)>>>0;
 const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
 const int=(min,max)=>min+Math.floor(random()*(max-min+1));
 const shuffle=values=>{const a=[...values];for(let i=a.length-1;i>0;i--){const j=int(0,i);[a[i],a[j]]=[a[j],a[i]];}return a;};
 const pick=values=>values[int(0,values.length-1)];
 const questions=[];
 const add=(family,category,stem,answer,wrong,visual,explain,check,parameters)=>{
  const unique=[...new Set([String(answer),...wrong.map(String)])];
  if(unique.length<4)throw new Error(`Insufficient choices: ${family}`);
  const options=shuffle([String(answer),...unique.slice(1,4)]);
  questions.push({id:`rg1-${['A','B','C'][level]}-${questions.length+1}`,source:'generated',generatorVersion:1,family,level:['起點','中段','綜合'][level],category,stem,options,correct:options.indexOf(String(answer)),visual,explain,check,parameters});
 };
 const numeric=(family,category,stem,answer,visual,explain,check,parameters,errors=[])=>add(family,category,stem,answer,[...errors,Math.max(0,answer-1),answer+1,answer+2,answer+int(3,7)],visual,explain,check,parameters);
 // 1. Arithmetic and increasing-difference sequences.
 const start=int(1,9),delta=int(2,5+level),growing=level===2&&int(0,1)===1,values=[start];
 for(let i=0;i<5;i++)values.push(values.at(-1)+delta+(growing?i:0));
 numeric('sequence','patterns',growing?'相鄰兩項增加的數，每次多 1。下一個數是？':'每次增加一樣多，下一個數是？',values[5],{kind:'sequence',values:[...values.slice(0,5),'?']},growing?`相鄰的差是 ${Array.from({length:5},(_,i)=>delta+i).join('、')}。下一個是 ${values[4]} ＋ ${delta+4} ＝ ${values[5]}。`:`每次增加 ${delta}，下一個是 ${values[4]} ＋ ${delta} ＝ ${values[5]}。`,'先看相鄰的差，再檢查每一步都符合規則。',{start,delta,growing,values});
 // 2. Two alternating operations.
 const initial=int(1,5),a=int(1,3),b=int(a+1,a+4),multiply=level===2&&int(0,1)===1,alternating=[initial];
 for(let i=0;i<5;i++)alternating.push(i%2===0?alternating.at(-1)+a:multiply?alternating.at(-1)*b:alternating.at(-1)+b);
 numeric('alternating','patterns',multiply?'加上一個數、乘上一個數，輪流出現。下一個數是？':'兩種增加的數輪流出現，下一個數是？',alternating[5],{kind:'sequence',values:[...alternating.slice(0,5),'?']},`變化依序是 ＋ ${a}、${multiply?'×':'＋'} ${b}，輪流重複。下一步是 ${alternating[4]} ＋ ${a} ＝ ${alternating[5]}。`,'把兩種變化分開看，不要只看最後兩個數。',{initial,a,b,multiply,values:alternating});
 // 3. Equal groups followed by removal, with existing image assets.
 const groups=int(2,4+level),count=int(2,4+level),remove=int(1,Math.min(count+level,groups*count-1)),asset=pick(['star','apple']),object=asset==='star'?'星星':'蘋果';
 numeric('group-remove','patterns',`每盒放 ${count} 顆${object}，共有 ${groups} 盒。再拿走 ${remove} 顆，共剩幾顆？`,groups*count-remove,{kind:'groups',groups,count,asset},`先算 ${count} × ${groups} ＝ ${groups*count}，再減 ${remove}，剩 ${groups*count-remove} 顆。`,'每盒數量乘盒數，再拿走；不要只把兩個數相加。',{groups,count,remove,asset},[groups*count,groups+count,groups*count+remove]);
 // 4. Ceiling in context; always include a nonzero remainder.
 const capacity=int(4,8+level),full=int(2,4+level),extra=int(1,capacity-1),people=capacity*full+extra;
 numeric('transport','patterns',`${people} 人搭車，每車最多 ${capacity} 人。至少需要幾輛車？`,full+1,{kind:'transport',people,capacity},`${people} ÷ ${capacity} ＝ ${full} 餘 ${extra}。剩下 ${extra} 人也要一輛車，至少 ${full+1} 輛。`,'有剩下的人，就要再多一輛車，不能只取整數商。',{people,capacity},[full,full+2,full+3]);
 // 5–6. Single-row irregular stacks and full solids, maximum 5×5×5.
 const heights=Array.from({length:int(2,3+level)},()=>int(1,3+level)),cubes=[];
 heights.forEach((n,x)=>{for(let y=0;y<n;y++)cubes.push({id:`${x}:${y}:0`,x,y,z:0});});
 numeric('columns','space','積木只排一列，沒有懸空。轉動或拆層看一看，共有幾塊？',cubes.length,{kind:'cubes3d',dimensions:{l:heights.length,w:1,h:Math.max(...heights)},cubes},`每柱高度 ${heights.join('、')}，相加共 ${cubes.length} 塊。`,'每一柱從底往上數，每塊只算一次。',{heights});
 const l=int(2,3+level),w=int(1,3+level),h=int(2,3+level),fullCubes=[];
 for(let z=0;z<w;z++)for(let x=0;x<l;x++)for(let y=0;y<h;y++)fullCubes.push({id:`${x}:${y}:${z}`,x,y,z});
 numeric('full-solid','space',`排滿的積木，長 ${l} 塊、寬 ${w} 塊、高 ${h} 塊。一共幾塊？`,l*w*h,{kind:'cubes3d',dimensions:{l,w,h},cubes:fullCubes},`每層 ${l} × ${w} ＝ ${l*w} 塊，共 ${h} 層，所以 ${l*w} × ${h} ＝ ${l*w*h} 塊。`,'先算一層，再乘層數；背後和底層的積木也要算。',{l,w,h},[l*w,l+w+h,l*w*h+h]);
 // 7–8. Rotation and reflection of all four directions.
 const arrows=['↑','→','↓','←'],direction=int(0,1)?1:-1,first=int(0,3),n=int(4,5),directions=Array.from({length:n+1},(_,i)=>arrows[(first+direction*i+12)%4]);
 add('rotation','space',`箭頭每次向${direction===1?'右':'左'}轉四分之一圈，下一個方向是？`,directions[n],arrows.filter(v=>v!==directions[n]),{kind:'sequence',values:[...directions.slice(0,n),'?']},`依序是 ${directions.join('、')}，所以接著是 ${directions[n]}。`,'四分之一圈是轉一個直角；方向要一直相同。',{direction,first,n});
 const diagonals=['↗','↖','↘','↙'],arrow=pick(diagonals),mirror={'↗':'↖','↖':'↗','↘':'↙','↙':'↘'}[arrow];
 add('mirror','space','中間直線是鏡面。左邊箭頭照鏡子，右邊應是哪個？',mirror,diagonals.filter(v=>v!==mirror),{kind:'mirror',arrow},`左右相反，上下不變。${arrow} 照鏡子後是 ${mirror}。`,'鏡射要交換左右，不能當成轉四分之一圈。',{arrow});
 // 9. Strict ordering: three different names with an unambiguous extreme.
 const names=shuffle(['小安','小白','小青','小雨','小禾','小樂','小玉','小文','小月']).slice(0,3),highest=int(0,1)===1;
 add('height-order','logic',`${names[0]}比${names[1]}高，${names[1]}比${names[2]}高。誰最${highest?'高':'矮'}？`,names[highest?0:2],[...names.filter(v=>v!==names[highest?0:2]),'無法知道'],null,`由高到矮是 ${names.join('、')}。最${highest?'高':'矮'}的是${names[highest?0:2]}。`,'把兩句條件串起來，再看題目問最高還是最矮。',{names,highest});
 // 10. Enumerated card constraints; exactly one valid permutation.
 const colors=shuffle(['紅','藍','綠','黃','紫','白']).slice(0,3),[x,y,z]=colors,chain=int(0,1)===1;
 const all=permutations(colors),valid=all.filter(p=>chain?p.indexOf(x)<p.indexOf(y)&&p.indexOf(y)<p.indexOf(z):p.indexOf(x)!==1&&p.indexOf(y)>p.indexOf(x)&&p.indexOf(z)!==2);
 if(valid.length!==1)throw new Error('Ambiguous card constraints');const arrangement=valid[0].join('、');
 add('card-order','logic',chain?`有${colors.join('、')}三張卡。${x}在${y}左邊，${y}在${z}左邊。左到右怎麼排？`:`有${colors.join('、')}三張卡。${x}不在中間，${y}在${x}右邊，${z}不是最右邊。左到右怎麼排？`,arrangement,shuffle(all.filter(p=>p.join('、')!==arrangement).map(p=>p.join('、'))),{kind:'cards',colors},`檢查每個條件，只有 ${arrangement} 全部符合。`,'選項要同時符合所有條件，不能只符合其中一句。',{colors,chain});
 // 11. Equal weight with two to four apples.
 const apples=int(2,2+level),weight=int(2,6+level);
 numeric('balance','logic',`天平平衡：${apples} 顆蘋果和 1 顆星星一樣重。每顆蘋果重 ${weight} 個單位，1 顆星星多重？`,apples*weight,{kind:'equalbalance',count:apples,weight},`${apples} 顆蘋果共 ${apples} × ${weight} ＝ ${apples*weight} 個單位，星星也是 ${apples*weight} 個單位。`,'天平平衡表示兩邊總重量相同。',{apples,weight},[weight,apples+weight,apples*weight+weight]);
 // 12. Pigeonhole guarantee, with sufficient stock explicitly stated.
 const ballColors=shuffle(['紅','藍','綠','黃']).slice(0,int(2,Math.min(4,3+level))),target=level===2?int(2,3):2,guarantee=ballColors.length*(target-1)+1;
 numeric('guarantee','logic',`袋子只有${ballColors.join('、')}這 ${ballColors.length} 種球，每種至少 ${target} 顆。閉眼拿球，至少拿幾顆，才能保證有 ${target} 顆同色？`,guarantee,{kind:'balls',colors:ballColors,target},`最不利時，每種先拿 ${target-1} 顆，共 ${ballColors.length} × ${target-1} ＝ ${guarantee-1} 顆。再拿 1 顆，一定有 ${target} 顆同色，所以要 ${guarantee} 顆。`,'要保證，不是看運氣；先想一直沒有達到同色目標的情況。',{colors:ballColors,target},[guarantee-1,target,guarantee+2]);
 // 13. Curated semantic relationships; shuffle the relation and choices.
 const relationIndex=int(0,analogies.length-1),relation=analogies[relationIndex],[subject,feature,other,answer,wrong]=relation;
 add('analogy','reading',`「${subject}：${feature}」和「${other}：？」表示相同關係。應選哪個？`,answer,wrong,{kind:'analogy',subject,feature,other},`先找關係：${subject}對應${feature}，${other}也要用相同關係對應${answer}。`,'先說出兩個詞的關係，再挑答案。',{relationIndex});
 // 14. Conditional implication: only P and not Q violates the rule.
 const shapes=shuffle(['星星','圓形','三角形','正方形']),ruleColors=shuffle(['紅','藍','綠','黃','紫']),shape=shapes[0],otherShape=shapes[1],color=ruleColors[0],otherColor=ruleColors[1],violation=`${shape}／${otherColor}色`;
 add('rule','reading',`規則是：有${shape}的卡片，背面一定是${color}色。哪張一定違反規則？`,violation,[`${shape}／${color}色`,`${otherShape}／${color}色`,`${otherShape}／${otherColor}色`],{kind:'rule-card',shape,color},`只有「${shape}／${otherColor}色」有${shape}卻不是${color}色，違反規則。其他圖形的背面顏色沒有被規定。`,'如果有這個圖形才有顏色條件；不能把條件倒過來。',{shape,otherShape,color,otherColor});
 // 15. Comparison quantity, changing names, amount, and object.
 const pair=shuffle(['小安','小白','小禾','小月','小玉']).slice(0,2),small=int(8,30+level*15),difference=int(2,8+level*4),large=small+difference,fruit=pick(['蘋果','星星']);
 numeric('comparison','reading',`${pair[0]}有 ${large} 顆${fruit}，比${pair[1]}多 ${difference} 顆。${pair[1]}有幾顆？`,small,{kind:'compare',large,delta:difference},`${pair[0]}比較多，${pair[1]}要減掉差：${large} − ${difference} ＝ ${small} 顆。`,'先判斷誰比較多；問比較少的，要用減法。',{large,difference,pair,fruit},[large+difference,large,small+2]);
 // 16. Two-step quantity with a consistent irrelevant capacity.
 const tables=int(2,3+level),perTable=int(2,3+level),perPerson=int(1,2+level),chairs=tables*perTable+int(1,15);
 numeric('irrelevant','reading',`教室有 ${chairs} 張椅子。今天坐了 ${tables} 桌，每桌 ${perTable} 人，每人領 ${perPerson} 張卡。共領幾張？`,tables*perTable*perPerson,{kind:'classroom',tables,perTable,perPerson},`人數是 ${tables} × ${perTable} ＝ ${tables*perTable} 人。卡片共有 ${tables*perTable} × ${perPerson} ＝ ${tables*perTable*perPerson} 張。椅子數不用算。`,'先找實際人數，再乘每人領的張數；不是每張椅子都坐人。',{tables,perTable,perPerson,chairs},[chairs*perPerson,tables*perTable,tables+perTable+perPerson]);
 return questions;
}
