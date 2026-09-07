/** Reusable low-load scene recorder: background and live object canvas remain independent. */
export class SceneRecorder {
  private recorder?:MediaRecorder;private stream?:MediaStream;private frame=0;
  private chunks:Blob[]=[];private result?:Promise<Blob>;private stopped=false;
  async start(source:HTMLCanvasElement,background:string,caption:()=>string,draw:()=>void){
    if(typeof MediaRecorder==='undefined'||!HTMLCanvasElement.prototype.captureStream)throw new Error('此裝置不支援錄製，可使用分鏡與 PNG。');
    const bg=new Image();bg.src=background;await bg.decode();
    const canvas=document.createElement('canvas');canvas.width=960;canvas.height=640;const ctx=canvas.getContext('2d')!;
    this.stream=canvas.captureStream(20);const mime=['video/webm;codecs=vp8','video/mp4','video/webm'].find(t=>MediaRecorder.isTypeSupported(t));
    this.recorder=new MediaRecorder(this.stream,mime?{mimeType:mime,videoBitsPerSecond:2200000}:undefined);
    this.result=new Promise((resolve,reject)=>{this.recorder!.ondataavailable=e=>{if(e.data.size)this.chunks.push(e.data);};this.recorder!.onstop=()=>resolve(new Blob(this.chunks,{type:this.recorder!.mimeType}));this.recorder!.onerror=()=>reject(new Error('錄製未完成，請改用 PNG 與分鏡。'));});
    let last=0;const paint=(now:number)=>{if(this.stopped)return;if(now-last>=50){last=now;ctx.clearRect(0,0,960,640);const ratio=Math.max(960/bg.width,640/bg.height);ctx.drawImage(bg,(960-bg.width*ratio)/2,(640-bg.height*ratio)/2,bg.width*ratio,bg.height*ratio);draw();const scale=Math.min(960/source.width,640/source.height);ctx.drawImage(source,(960-source.width*scale)/2,(640-source.height*scale)/2,source.width*scale,source.height*scale);ctx.fillStyle='#08172dd9';ctx.fillRect(200,18,560,52);ctx.fillStyle='white';ctx.font='bold 25px sans-serif';ctx.textAlign='center';ctx.fillText(caption(),480,53);}this.frame=requestAnimationFrame(paint);};
    this.recorder.start();this.frame=requestAnimationFrame(paint);
  }
  async finish(){this.stopped=true;cancelAnimationFrame(this.frame);if(this.recorder?.state==='recording')this.recorder.stop();this.stream?.getTracks().forEach(t=>t.stop());return this.result;}
  destroy(){void this.finish();}
}
