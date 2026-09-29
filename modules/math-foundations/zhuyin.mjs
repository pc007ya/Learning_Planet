// Reviewed readings for the foundation lessons; longest phrases resolve polyphones.
const entries=`
完 ㄨㄢˊ
加 ㄐㄧㄚ 去 ㄑㄩˋ 變 ㄅㄧㄢˋ 些 ㄒㄧㄝ 規 ㄍㄨㄟ 律 ㄌㄩˋ 鄰 ㄌㄧㄣˊ 都 ㄉㄡ 符 ㄈㄨˊ 項 ㄒㄧㄤˋ 著 ㄓㄜ˙ 斤 ㄐㄧㄣ 克 ㄎㄜˋ 圓 ㄩㄢˊ 識 ㄕˋ 半 ㄅㄢˋ 徑 ㄐㄧㄥˋ 直 ㄓˊ 由 ㄧㄡˊ 心 ㄒㄧㄣ 周 ㄓㄡ 線 ㄒㄧㄢˋ 段 ㄉㄨㄢˋ 叫 ㄐㄧㄠˋ 通 ㄊㄨㄥ 中 ㄓㄨㄥ 間 ㄐㄧㄢ 發 ㄈㄚ 分 ㄈㄣ 鐘 ㄓㄨㄥ 針 ㄓㄣ 圈 ㄑㄩㄢ 整 ㄓㄥˇ 統 ㄊㄨㄥˇ 橘 ㄐㄩˊ 子 ㄗ˙ 票 ㄆㄧㄠˋ 類 ㄌㄟˋ 別 ㄅㄧㄝˊ 橫 ㄏㄥˊ 縱 ㄗㄨㄥ 列 ㄌㄧㄝˋ 香 ㄒㄧㄤ 蕉 ㄐㄧㄠ 葡 ㄆㄨˊ 萄 ㄊㄠˊ 種 ㄓㄨㄥˇ 和 ㄏㄜˊ 億 ㄧˋ 萬 ㄨㄢˋ 移 ㄧˊ 補 ㄅㄨˇ 除 ㄔㄨˊ 把 ㄅㄚˇ 部 ㄅㄨˋ 餘 ㄩˊ 夠 ㄍㄡˋ 繼 ㄐㄧˋ 續 ㄒㄩˋ 為 ㄨㄟˊ 商 ㄕㄤ 必 ㄅㄧˋ 須 ㄒㄩ 怎 ㄗㄣˇ 等 ㄉㄥˇ 被 ㄅㄟˋ 里 ㄌㄧˇ 距 ㄐㄩˋ 離 ㄌㄧˊ 角 ㄐㄧㄠˇ 按 ㄢˋ 式 ㄕˋ 正 ㄓㄥˋ 腰 ㄧㄠ 銳 ㄖㄨㄟˋ 鈍 ㄉㄨㄣˋ 右 ㄧㄡˋ 之 ㄓ 依 ㄧ 序 ㄒㄩˋ 則 ㄗㄜˊ 括 ㄍㄨㄚ 號 ㄏㄠˋ 級 ㄐㄧˊ 刻 ㄎㄜˋ 軸 ㄓㄡˊ 代 ㄉㄞˋ 週 ㄓㄡ 投 ㄊㄡˊ 概 ㄍㄞˋ 捨 ㄕㄜˇ 約 ㄩㄝ 取 ㄑㄩˇ 尚 ㄕㄤˋ 未 ㄨㄟˋ 達 ㄉㄚˊ 或 ㄏㄨㄛˋ 超 ㄔㄠ 增 ㄗㄥ 固 ㄍㄨˋ 定 ㄉㄧㄥˋ 根 ㄍㄣ 火 ㄏㄨㄛˇ 柴 ㄔㄞˊ 桌 ㄓㄨㄛ 側 ㄘㄜˋ 各 ㄍㄜˋ 張 ㄓㄤ 可 ㄎㄜˇ 坐 ㄗㄨㄛˋ 人 ㄖㄣˊ 座 ㄗㄨㄛˋ 份 ㄈㄣˋ 精 ㄐㄧㄥ 名 ㄇㄧㄥˊ 稱 ㄔㄥ 否 ㄈㄡˇ 終 ㄓㄨㄥ 保 ㄅㄠˇ 持 ㄔˊ 靠 ㄎㄠˋ 擺 ㄅㄞˇ 判 ㄆㄢˋ 斷 ㄉㄨㄢˋ 屬 ㄕㄨˇ 菱 ㄌㄧㄥˊ 裡 ㄌㄧˇ 選 ㄒㄩㄢˇ 行 ㄒㄧㄥˊ 梯 ㄊㄧ 切 ㄑㄧㄝ 更 ㄍㄥˋ 細 ㄒㄧˋ 母 ㄇㄨˇ 改 ㄍㄞˇ 簡 ㄐㄧㄢˇ 化 ㄏㄨㄚˋ 配 ㄆㄟˋ 結 ㄐㄧㄝˊ 湊 ㄘㄡˋ 好 ㄏㄠˇ 秒 ㄇㄧㄠˇ

蘋 ㄆㄧㄥˊ 果 ㄍㄨㄛˇ
兩 ㄌㄧㄤˇ 驟 ㄓㄡˋ 生 ㄕㄥ 活 ㄏㄨㄛˊ 應 ㄧㄥˋ 糖 ㄊㄤˊ 顆 ㄎㄜ 送 ㄙㄨㄥˋ 還 ㄏㄞˊ 盒 ㄏㄜˊ 原 ㄩㄢˊ 記 ㄐㄧˋ 住 ㄓㄨˋ 乘 ㄔㄥˊ
範 ㄈㄢˋ 這 ㄓㄜˋ 元 ㄩㄢˊ 倒 ㄉㄠˋ 候 ㄏㄡˋ
值 ㄓˊ 在 ㄗㄞˋ 上 ㄕㄤˋ 方 ㄈㄤ 時 ㄕˊ 能 ㄋㄥˊ 於 ㄩˊ 新 ㄒㄧㄣ
一 ㄧ 二 ㄦˋ 三 ㄙㄢ 四 ㄙˋ 五 ㄨˇ 六 ㄌㄧㄡˋ 七 ㄑㄧ 八 ㄅㄚ 九 ㄐㄧㄡˇ 十 ㄕˊ 百 ㄅㄞˇ 千 ㄑㄧㄢ
以 ㄧˇ 內 ㄋㄟˋ 的 ㄉㄜ˙ 數 ㄕㄨˋ 與 ㄩˇ 位 ㄨㄟˋ 個 ㄍㄜ˙ 減 ㄐㄧㄢˇ 法 ㄈㄚˇ 非 ㄈㄟ 標 ㄅㄧㄠ 準 ㄓㄨㄣˇ 單 ㄉㄢ 量 ㄌㄧㄤˋ 長 ㄔㄤˊ 度 ㄉㄨˋ 月 ㄩㄝˋ 曆 ㄌㄧˋ 日 ㄖˋ 期 ㄑㄧˊ 星 ㄒㄧㄥ 年 ㄋㄧㄢˊ 面 ㄇㄧㄢˋ 積 ㄐㄧ 大 ㄉㄚˋ 小 ㄒㄧㄠˇ 比 ㄅㄧˇ 較 ㄐㄧㄠˋ 容 ㄖㄨㄥˊ 重 ㄓㄨㄥˋ 公 ㄍㄨㄥ 升 ㄕㄥ 毫 ㄏㄠˊ
盤 ㄆㄢˊ 表 ㄅㄧㄠˇ 示 ㄕˋ 多 ㄉㄨㄛ 少 ㄕㄠˇ 字 ㄗˋ 是 ㄕˋ 合 ㄏㄜˊ 起 ㄑㄧˇ 來 ㄌㄞˊ 每 ㄇㄟˇ 往 ㄨㄤˇ 左 ㄗㄨㄛˇ 格 ㄍㄜˊ 倍 ㄅㄟˋ 空 ㄎㄨㄥ 位 ㄨㄟˋ 要 ㄧㄠˋ 用 ㄩㄥˋ 表 ㄅㄧㄠˇ 安 ㄢ 有 ㄧㄡˇ 文 ㄨㄣˊ 相 ㄒㄧㄤ 差 ㄔㄚ 幾 ㄐㄧˇ 拿 ㄋㄚˊ 走 ㄗㄡˇ 剩 ㄕㄥˋ 先 ㄒㄧㄢ 點 ㄉㄧㄢˇ 掉 ㄉㄧㄠˋ 再 ㄗㄞˋ 留 ㄌㄧㄡˊ 下 ㄒㄧㄚˋ
物 ㄨˋ 件 ㄐㄧㄢˋ 相 ㄒㄧㄤ 同 ㄊㄨㄥˊ 短 ㄉㄨㄢˇ 紙 ㄓˇ 條 ㄊㄧㄠˊ 木 ㄇㄨˋ 從 ㄘㄨㄥˊ 端 ㄉㄨㄢ 開 ㄎㄞ 始 ㄕˇ 首 ㄕㄡˇ 尾 ㄨㄟˇ 接 ㄐㄧㄝ 沒 ㄇㄟˊ 隙 ㄒㄧˋ 也 ㄧㄝˇ 不 ㄅㄨˋ 疊 ㄉㄧㄝˊ 排 ㄆㄞˊ 找 ㄓㄠˇ 到 ㄉㄠˋ 對 ㄉㄨㄟˋ 齊 ㄑㄧˊ 欄 ㄌㄢˊ 就 ㄐㄧㄡˋ 天 ㄊㄧㄢ 最 ㄗㄨㄟˋ 後 ㄏㄡˋ 所 ㄙㄨㄛˇ 二 ㄦˋ 留 ㄌㄧㄡˊ 意 ㄧˋ 平 ㄆㄧㄥˊ 閏 ㄖㄨㄣˋ 隔 ㄍㄜˊ 才 ㄘㄞˊ 算 ㄙㄨㄢˋ 第 ㄉㄧˋ 向 ㄒㄧㄤˋ 跨 ㄎㄨㄚˋ 底 ㄉㄧˇ 得 ㄉㄜˊ 進 ㄐㄧㄣˋ 入 ㄖㄨˋ 共 ㄍㄨㄥˋ 經 ㄐㄧㄥ 過 ㄍㄨㄛˋ
哪 ㄋㄚˇ 圖 ㄊㄨˊ 形 ㄒㄧㄥˊ 覆 ㄈㄨˋ 蓋 ㄍㄞˋ 樣 ㄧㄤˋ 外 ㄨㄞˋ 框 ㄎㄨㄤ 裝 ㄓㄨㄤ 滿 ㄇㄢˇ 器 ㄑㄧˋ 當 ㄉㄤ 砝 ㄈㄚˇ 碼 ㄇㄚˇ 低 ㄉㄧ 看 ㄎㄢˋ 只 ㄓˇ 杯 ㄅㄟ 需 ㄒㄩ 何 ㄏㄜˊ 水 ㄕㄨㄟˇ 高 ㄍㄠ 邊 ㄅㄧㄢ 觀 ㄍㄨㄢ 成 ㄔㄥˊ
組 ㄗㄨˇ 出 ㄔㄨ 操 ㄘㄠ 作 ㄗㄨㄛˋ 練 ㄌㄧㄢˋ 習 ㄒㄧˊ 答 ㄉㄚˊ 次 ㄘˋ 題 ㄊㄧˊ 確 ㄑㄩㄝˋ 認 ㄖㄣˋ 試 ㄕˋ 了 ㄌㄜ˙ 關 ㄍㄨㄢ 聲 ㄕㄥ 音 ㄧㄣ 回 ㄏㄨㄟˊ 顧 ㄍㄨˋ 提 ㄊㄧˊ 示 ㄕˋ 學 ㄒㄩㄝˊ 換 ㄏㄨㄢˋ 播 ㄅㄛ 放 ㄈㄤˋ 暫 ㄓㄢˋ 停 ㄊㄧㄥˊ 步 ㄅㄨˋ 復 ㄈㄨˋ 計 ㄐㄧˋ 讀 ㄉㄨˊ 寫 ㄒㄧㄝˇ 零 ㄌㄧㄥˊ
`.trim().split(/\s+/);
const readings={};for(let i=0;i<entries.length;i+=2)readings[entries[i]]=entries[i+1];
const phrases={'分子':['ㄈㄣ','ㄗˇ'],'分母':['ㄈㄣ','ㄇㄨˇ'],'等分':['ㄉㄥˇ','ㄈㄣ'],'部分':['ㄅㄨˋ','ㄈㄣˋ'],'成為':['ㄔㄥˊ','ㄨㄟˊ'],'因為':['ㄧㄣ','ㄨㄟˋ'],'數一數':['ㄕㄨˇ','ㄧ','ㄕㄨˇ'],'再數':['ㄗㄞˋ','ㄕㄨˇ'],'數留下':['ㄕㄨˇ','ㄌㄧㄡˊ','ㄒㄧㄚˋ'],'數覆蓋':['ㄕㄨˇ','ㄈㄨˋ','ㄍㄞˋ'],'量長度':['ㄌㄧㄤˊ','ㄔㄤˊ','ㄉㄨˋ'],'重疊':['ㄔㄨㄥˊ','ㄉㄧㄝˊ'],'重新':['ㄔㄨㄥˊ','ㄒㄧㄣ'],'重來':['ㄔㄨㄥˊ','ㄌㄞˊ'],'相同':['ㄒㄧㄤ','ㄊㄨㄥˊ'],'長大':['ㄓㄤˇ','ㄉㄚˋ']};
const phraseKeys=Object.keys(phrases).sort((a,b)=>b.length-a.length);
export function readingTokens(text){const out=[];for(let i=0;i<text.length;){const phrase=phraseKeys.find(p=>text.startsWith(p,i));if(phrase){[...phrase].forEach((char,n)=>out.push({char,reading:phrases[phrase][n]}));i+=phrase.length;}else{const char=text[i++];out.push({char,reading:readings[char]||''});}}return out;}
export function annotate(root){
 annotateSvg(root);
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode()){const node=walker.currentNode,p=node.parentElement;if(!p||p.closest('svg,ruby,script,style,[data-action],.progress,small')||!node.textContent.trim())continue;nodes.push(node);}
 for(const node of nodes){const fragment=document.createDocumentFragment();for(const {char,reading} of readingTokens(node.textContent)){if(!reading){fragment.append(document.createTextNode(char));continue;}const ruby=document.createElement('ruby'),rt=document.createElement('rt'),base=document.createElement('span');ruby.className='zhuyin-side';base.className='zhuyin-base';base.textContent=char;ruby.append(base);const tone=reading.match(/[ˊˇˋ˙]/)?.[0]||'';const sounds=document.createElement('span');sounds.className='zhuyin-sounds';for(const sound of reading.replace(/[ˊˇˋ˙]/g,'')){const glyph=document.createElement('span');glyph.textContent=sound;sounds.append(glyph);}rt.append(sounds);if(tone){const mark=document.createElement('span');mark.className=tone==='˙'?'zhuyin-tone neutral':'zhuyin-tone';mark.textContent=tone;rt.append(mark);}rt.setAttribute('aria-hidden','true');ruby.append(rt);fragment.append(ruby);}node.replaceWith(fragment);}
}

// SVG text cannot contain HTML ruby. Draw the same upright side readings as tspans.
export function svgReadingLayout(value,size=22){
 let cursor=0;const tokens=readingTokens(value).map(({char,reading})=>{
  const width=reading?size*1.62:/[\u3400-\u9fff]/.test(char)?size:/\s/.test(char)?size*.35:size*.64;
  const token={char,reading,x:cursor,width};cursor+=width;return token;
 });return {tokens,width:cursor};
}
function annotateSvg(root){
 const ns='http://www.w3.org/2000/svg';
 for(const label of root.querySelectorAll('svg text:not([data-zhuyin-original])')){
  const value=label.textContent,size=Number(label.getAttribute('font-size'))||22,{tokens,width}=svgReadingLayout(value,size);
  if(!tokens.some(t=>t.reading))continue;
  const x=Number(label.getAttribute('x'))||0,y=Number(label.getAttribute('y'))||0,anchor=label.getAttribute('text-anchor')||'start',left=x-(anchor==='middle'?width/2:anchor==='end'?width:0);
  label.dataset.zhuyinOriginal=value;label.setAttribute('aria-label',value);label.setAttribute('text-anchor','start');label.textContent='';
  const span=(text,x,y,font)=>{const el=document.createElementNS(ns,'tspan');el.setAttribute('x',x);el.setAttribute('y',y);el.setAttribute('font-size',font);el.textContent=text;label.append(el);return el;};
  for(const t of tokens){span(t.char,left+t.x,y,size);if(!t.reading)continue;
   const sounds=[...t.reading.replace(/[ˊˇˋ˙]/g,'')],tone=t.reading.match(/[ˊˇˋ˙]/)?.[0],small=size*.32,rx=left+t.x+size*1.02,top=y-size*.36-(sounds.length-1)*small*.52;
   sounds.forEach((s,i)=>span(s,rx,top+i*small*1.04,small).setAttribute('aria-hidden','true'));
   if(tone)span(tone,tone==='˙'?rx:rx+small*.95,tone==='˙'?top-small*.8:y-size*.29,small).setAttribute('aria-hidden','true');
  }
 }
}
