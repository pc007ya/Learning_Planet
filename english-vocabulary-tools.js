(function(root){
  'use strict';
  const female=/\b(Samantha|Ava|Allison|Susan|Victoria|Karen|Moira|Tessa|Serena|Fiona|Zira|Hazel|Aria|Jenny|Sonia|Libby|Natasha|Clara|Michelle|Emily|Emma|Salli|Joanna)\b|\bfemale\b/i;
  const novelty=/Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Deranged|Good News|Jester|Organ|Trinoids|Whisper|Zarvox/i;
  const storageKey='lp-english-reading-voice-v1';
  let pref={};try{pref=JSON.parse(root.localStorage?.getItem(storageKey)||'{}');}catch{}
  function rank(v){return (female.test(v.name)?100:0)+(/enhanced|premium|natural|neural/i.test(v.name)?40:0)+(/^en[-_]US$/i.test(v.lang)?20:0)+(/Samantha|Ava|Jenny|Aria/i.test(v.name)?10:0);}
  function voices(){return (root.speechSynthesis?.getVoices()||[]).filter(v=>/^en(?:[-_]|$)/i.test(v.lang)&&!novelty.test(v.name)).sort((a,b)=>rank(b)-rank(a)||a.name.localeCompare(b.name));}
  function choose(list){return list.find(v=>v.voiceURI===pref.uri&&v.lang===pref.lang)||list[0];}
  function select(v){pref={uri:v.voiceURI,lang:v.lang};try{root.localStorage?.setItem(storageKey,JSON.stringify(pref));}catch{}root.dispatchEvent(new Event('lp-english-voices'));}
  function cancel(){root.speechSynthesis?.cancel();}
  function speak(text){
    if(!text||!root.speechSynthesis||!root.SpeechSynthesisUtterance)return false;
    cancel();const u=new root.SpeechSynthesisUtterance(text),voice=choose(voices());u.lang=voice?.lang||'en-US';if(voice)u.voice=voice;u.rate=.9;u.pitch=1;
    u.onerror=e=>{if(!['canceled','interrupted'].includes(e.error))root.dispatchEvent(new Event('lp-english-speech-error'));};root.speechSynthesis.speak(u);return true;
  }
  function filterCards(cards,{book=0,sort='story',query=''}={}){
    const q=query.trim().toLocaleLowerCase();
    return cards.filter(c=>(!Number(book)||c.book===Number(book))&&(!q||[c.word,c.meaning,c.bookTitle,String(c.book)].some(t=>t.toLocaleLowerCase().includes(q))))
      .slice().sort((a,b)=>(sort==='abc'?a.word.localeCompare(b.word,'en',{sensitivity:'base'}):0)||a.book-b.book||a.order-b.order);
  }
  root.LPEnglishVocabulary={voices,choose,select,speak,cancel,filterCards};
  root.speechSynthesis?.addEventListener('voiceschanged',()=>root.dispatchEvent(new Event('lp-english-voices')));
  root.addEventListener('pagehide',cancel);root.document?.addEventListener('visibilitychange',()=>{if(root.document.hidden)cancel();});
})(window);
