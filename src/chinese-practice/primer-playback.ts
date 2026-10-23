export class PrimerPlayback {
 private audio:HTMLAudioElement|null=null;
 private key:string|null=null;
 constructor(private changed:(key:string|null)=>void=()=>{}){}
 stop(){const old=this.audio;this.audio=null;this.key=null;old?.pause();if(old)old.currentTime=0;this.changed(null);}
 adopt(audio:HTMLAudioElement,key:string){if(this.audio!==audio)this.stop();this.audio=audio;this.key=key;audio.onended=()=>{if(this.audio===audio)this.stop();};audio.onerror=()=>{if(this.audio===audio)this.stop();};this.changed(key);}
 async toggle(audio:HTMLAudioElement,key:string){if(this.key===key&&this.audio&&!this.audio.paused){this.stop();return;}this.adopt(audio,key);try{await audio.play();}catch(error){if(this.audio===audio)this.stop();throw error;}}
}
