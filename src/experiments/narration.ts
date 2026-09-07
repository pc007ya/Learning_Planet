/** Reusable opt-in narration for scene-driven experiments. */
export class SceneNarration {
  enabled=false;
  last='用手轉動方塊，看看六個顏色。點拆解，一起找出裡面的祕密！';
  private utterance?:SpeechSynthesisUtterance;
  say(text:string,explicit=false){
    this.last=text;if(!this.enabled&&!explicit)return;
    if(!('speechSynthesis' in window))return;
    this.stop();const u=new SpeechSynthesisUtterance(text);this.utterance=u;u.lang='zh-TW';u.rate=.88;
    u.voice=speechSynthesis.getVoices().find(v=>/^zh[-_]TW$/i.test(v.lang))||speechSynthesis.getVoices().find(v=>/^zh/i.test(v.lang))||null;
    speechSynthesis.speak(u);
  }
  replay(){this.say(this.last,true);}
  stop(){if(this.utterance&&'speechSynthesis' in window)speechSynthesis.cancel();this.utterance=undefined;}
}
