(function(root){'use strict';
function create({synth,Utterance,isActive=()=>true,onStatus=()=>{}}={}){let generation=0,closed=false;
 const active=()=>{try{return !closed&&isActive()===true;}catch(_){return false;}};
 const status=(text,g)=>{if(g===generation&&active())onStatus(text);};
 function stop(inform=false){if(closed)return;generation++;try{synth?.cancel();}catch(_){}if(inform)status('已停止朗讀。',generation);}
 function speak(text){if(!active()||typeof text!=='string'||!text.trim())return false;stop();const g=generation;
  if(!synth||typeof synth.speak!=='function'||typeof Utterance!=='function'){status('此瀏覽器不支援朗讀，請直接閱讀文字。',g);return false;}
  try{const u=new Utterance(text);u.lang='en-US';u.rate=.8;const voices=typeof synth.getVoices==='function'?synth.getVoices():[];const voice=voices.find(v=>/^en(?:-|_)/i.test(v.lang));if(voice)u.voice=voice;
   u.onstart=()=>status('朗讀中；使用裝置英文語音，非口說評分。',g);u.onend=()=>status('朗讀完成；可再聽一次或自己說。',g);u.onerror=e=>{if(e?.error==='canceled'||e?.error==='interrupted')return;status('語音無法播放，文字仍可閱讀。',g);};
   status('正在準備裝置英文語音；非口說評分。',g);synth.speak(u);return true;
  }catch(_){status('語音無法播放，文字仍可閱讀。',g);return false;}
 }
 return{speak,stop,dispose(){if(closed)return;stop();closed=true;}};
}
const api={create};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.LPEnglishSpeech=api;
})(typeof globalThis!=='undefined'?globalThis:this);
