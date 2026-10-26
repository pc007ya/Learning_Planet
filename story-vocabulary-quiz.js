(function(root){
'use strict';
const key=c=>c.word.trim().toLowerCase().replace(/\s+/g,' ');
function pool(cards,books){const seen=new Set();return cards.filter(c=>books.includes(c.book)&&!seen.has(key(c))&&seen.add(key(c)));}
function shuffle(items,random=Math.random){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function questions(cards,books,count,random=Math.random,targets){const p=pool(cards,books);if(p.length<4)return [];return shuffle(targets||p,random).slice(0,count||p.length).map(answer=>({answer,options:shuffle([answer,...shuffle(p.filter(c=>key(c)!==key(answer)),random).slice(0,3)],random)}));}
root.LPStoryQuiz={pool,questions};
root.createStoryQuiz=function(React){
 const h=React.createElement;
 return class extends React.Component{
  constructor(props){super(props);this.state={mode:'browse',books:[],count:10,queue:[],index:0,answers:[],selected:null,done:false,error:''};}
  componentDidMount(){this.props.onActive(false);}
  componentWillUnmount(){root.LPEnglishVocabulary.cancel();}
  switchMode(mode){root.LPEnglishVocabulary.cancel();this.setState({mode,queue:[],answers:[],selected:null,done:false,error:''});this.props.onActive(mode!=='browse');}
  speak(word){if(!root.LPEnglishVocabulary.speak(word))this.setState({error:'此瀏覽器無法播放語音，請使用 Safari 或 Chrome 再試一次。'});}
  start(targets){const s=this.state,queue=questions(this.props.cards,s.books,s.count,Math.random,targets);if(!queue.length)return;this.setState({queue,index:0,answers:[],selected:null,done:false,error:''});this.speak(queue[0].answer.word);}
  answer(card){const s=this.state;if(s.selected!==null)return;this.setState({selected:card.id,answers:[...s.answers,{question:s.queue[s.index],choice:card,correct:key(card)===key(s.queue[s.index].answer)}]});}
  next(){const s=this.state;root.LPEnglishVocabulary.cancel();if(s.index+1===s.queue.length){this.setState({done:true});return;}this.setState({index:s.index+1,selected:null,error:''});this.speak(s.queue[s.index+1].answer.word);}
  picture(card,masked,label){return h('div',{className:'svq-picture'},h('img',{src:card.image,alt:label,style:{aspectRatio:card.width+'/'+card.height},onError:()=>this.setState({error:'圖片未能載入，請確認連線後重新整理。'})}),masked&&h('div',{className:'svq-mask','aria-label':'單字文字已遮住'},'？'));}
  render(){const s=this.state,p=pool(this.props.cards,s.books),q=s.queue[s.index],answered=s.selected!==null;
   const button=(text,fn,props={})=>h('button',{type:'button',onClick:fn,...props},text);
   const tabs=h('div',{className:'svq-tabs',role:'group','aria-label':'學習方式'},...['browse','listen','picture'].map((m,i)=>button(['單字瀏覽','聽聲音選字卡','看圖聽音選單字'][i],()=>this.switchMode(m),{key:m,'aria-pressed':s.mode===m})));
   if(s.mode==='browse')return h('section',{className:'svq'},tabs);
   let body;
   if(s.done){const wrong=s.answers.filter(a=>!a.correct);body=h('div',{className:'svq-result'},h('h3',{tabIndex:0},'完成！答對 '+(s.answers.length-wrong.length)+' / '+s.answers.length+' 題'),h('p',null,wrong.length?'一起再聽聽這些單字。':'全部答對，太棒了！'),...wrong.map(a=>h('div',{key:a.question.answer.id,className:'svq-review'},this.picture(a.question.answer,false,a.question.answer.word),h('div',null,h('strong',null,a.question.answer.word+' · '+a.question.answer.meaning),h('p',null,'你的答案：'+a.choice.word),button('🔊 再聽一次',()=>this.speak(a.question.answer.word))))),wrong.length>0&&button('練習錯題',()=>this.start(wrong.map(a=>a.question.answer))),button('再玩一次',()=>this.start()),button('重新選擇範圍',()=>this.setState({queue:[],done:false})));}
   else if(q){body=h('div',{className:'svq-play'},h('p',null,'第 '+(s.index+1)+' / '+s.queue.length+' 題'),button('🔊 再聽一次',()=>this.speak(q.answer.word),{className:'svq-replay'}),s.mode==='picture'&&this.picture(q.answer,!answered,answered?q.answer.word:'題目圖片，文字已遮住'),h('p',null,s.mode==='listen'?'聽一聽，選出對應字卡。':'看圖片、聽聲音，選出正確單字。'),h('div',{className:'svq-options '+(s.mode==='listen'?'svq-card-options':'')},...q.options.map((c,i)=>button(s.mode==='listen'?h(React.Fragment,null,this.picture(c,false,'選項 '+(i+1)),h('span',null,c.word)):c.word,()=>this.answer(c),{key:c.id,disabled:answered,className:answered?(c.id===q.answer.id?'correct':c.id===s.selected?'wrong':''):'','aria-label':s.mode==='listen'?'選項 '+(i+1)+' '+c.word:c.word}))),answered&&h('div',{role:'status',className:'svq-feedback'},s.selected===q.answer.id?'答對了！':'再記住一次：',h('strong',null,' '+q.answer.word+' · '+q.answer.meaning),h('p',null,'#'+q.answer.book+' '+q.answer.bookTitle),button(s.index+1===s.queue.length?'查看成績':'下一題',()=>this.next())),button('結束並重選範圍',()=>{root.LPEnglishVocabulary.cancel();this.setState({queue:[],selected:null});}));}
   else body=h('div',{className:'svq-setup'},h('h3',null,'選擇故事書範圍'),h('p',null,'可選一本、多本或全部；題目與四個選項都來自所選故事。同一單字只出一題。'),h('div',{className:'svq-tabs'},button('全部故事',()=>this.setState({books:this.props.books.map(b=>b.number)})),button('清除選擇',()=>this.setState({books:[]}))),h('details',null,h('summary',null,'已選 '+s.books.length+' 本 · 展開選擇故事'),h('div',{className:'svq-books'},...this.props.books.map(b=>h('label',{key:b.number},h('input',{type:'checkbox',checked:s.books.includes(b.number),onChange:e=>this.setState({books:e.target.checked?[...s.books,b.number]:s.books.filter(n=>n!==b.number)})}),'#'+b.number+' '+b.title)))),h('p',{role:'status'},p.length+' 個不同單字'+(p.length<4?' · 請選至少有 4 個單字的範圍':'')),h('div',{className:'svq-tabs',role:'group','aria-label':'題數'},...[10,20,0].map(n=>button(n?n+' 題':'全部單字',()=>this.setState({count:n}),{key:n,'aria-pressed':s.count===n}))),h('p',null,'本回合 '+Math.min(s.count||p.length,p.length)+' 題'),button('開始測驗',()=>this.start(),{disabled:p.length<4,className:'svq-start'}));
   return h('section',{className:'svq'},tabs,s.error&&h('p',{role:'alert'},s.error),body);
  }
 };
};
})(window);
