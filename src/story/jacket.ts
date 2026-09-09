/** Printed jackets: restrained colour blocking, paper grain and a series colophon. */
export function jacketPalette(title:string):[string,string,string]{return /Princess/i.test(title)?['#648573','#f5e8ce','#cfa3a0']:/Dragon/i.test(title)?['#28686c','#f2dfb8','#a7b99b']:/Birthday/i.test(title)?['#df694e','#f9e7b5','#9bb7a0']:/Wolf/i.test(title)?['#ad4544','#f6e5c6','#91a995']:/Star/i.test(title)?['#27495d','#f4dc9f','#9fafbd']:['#725268','#f3dfb8','#abbbb0'];}
export function drawSpine(ctx:CanvasRenderingContext2D,title:string,english:boolean,index:number){
 const [main,paper,accent]=jacketPalette(title);ctx.fillStyle=main;ctx.fillRect(0,0,256,1024);
 ctx.fillStyle=accent;ctx.fillRect(0,188,256,213);ctx.fillStyle=paper;ctx.fillRect(0,401,256,491);
 ctx.fillStyle=paper;ctx.textAlign='center';ctx.font='22px Georgia';ctx.fillText('LEARNING',128,57);ctx.fillText('PLANET',128,85);ctx.font='italic 28px Georgia';ctx.fillText('story collection',128,140);
 ctx.strokeStyle=paper;ctx.lineWidth=3;ctx.beginPath();ctx.arc(128,294,70,0,Math.PI*2);ctx.stroke();
 ctx.fillStyle=paper;
 if(/Birthday/i.test(title)){ctx.fillRect(82,280,92,52);ctx.beginPath();ctx.ellipse(128,280,46,14,0,0,Math.PI*2);ctx.fill();ctx.fillStyle=main;ctx.font='bold 65px Georgia';ctx.fillText('7',128,281);}
 else if(/Princess/i.test(title)){ctx.save();ctx.translate(128,290);for(let i=0;i<4;i++){ctx.rotate(Math.PI/2);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(56,-52);ctx.lineTo(48,12);ctx.closePath();ctx.fill();}ctx.restore();}else{ctx.font='76px Georgia';ctx.fillText(/Wolf/i.test(title)?'❧':'✦',128,318);}
 ctx.fillStyle=main;
 if(english){ctx.save();ctx.translate(128,647);ctx.rotate(Math.PI/2);ctx.font='bold 49px Georgia';ctx.fillText(/Princess/i.test(title)?'Princess & a Smile':/Dragon/i.test(title)?'Little Dragon · Brave Wings':title,0,16,433);ctx.restore();}
 else{const chars=[...title.replace(/[：:《》\s]/g,'')];const step=Math.min(52,420/chars.length);ctx.font=`bold ${step*.82}px serif`;chars.forEach((v,i)=>ctx.fillText(v,128,450+i*step));}
 ctx.fillStyle=paper;ctx.font='18px sans-serif';ctx.fillText(english?'ENGLISH PICTURE BOOK':'故事星球',128,949);ctx.font='32px Georgia';ctx.fillText(String(index+1).padStart(2,'0'),128,996);
 // Small deterministic speckles make the printed surface tactile, not glossy plastic.
 for(let i=0;i<2100;i++){const x=(i*73)%256,y=(i*197)%1024;ctx.fillStyle=i%2?'#ffffff0a':'#3c302909';ctx.fillRect(x,y,1,2);}
 const shade=ctx.createLinearGradient(0,0,256,0);shade.addColorStop(0,'#301c2444');shade.addColorStop(.14,'#ffffff20');shade.addColorStop(.4,'#ffffff00');shade.addColorStop(.94,'#0000000a');shade.addColorStop(1,'#24161f38');ctx.fillStyle=shade;ctx.fillRect(0,0,256,1024);
}
export function drawCover(ctx:CanvasRenderingContext2D,image:HTMLImageElement,title:string){
 const [main,paper]=jacketPalette(title);const w=768,h=1024;ctx.drawImage(image,0,0,w,h);ctx.textAlign='center';
 if(/Princess/.test(title)){ctx.fillStyle=main;ctx.font='20px Georgia';ctx.fillText('GAIL’S MAGICAL STORYBOOK · 02',w/2,70);ctx.font='bold 52px Georgia';ctx.fillText('Gail and the Princess',w/2,164);ctx.font='italic 36px Georgia';ctx.fillText('Who Forgot to Smile',w/2,219);}else if(/Dragon/.test(title)){ctx.fillStyle=paper;ctx.font='22px Georgia';ctx.fillText('GAIL’S MAGICAL STORYBOOK · 01',w/2,65);ctx.font='bold 60px Georgia';['Gail and the','Little Dragon'].forEach((line,i)=>ctx.fillText(line,w/2,160+i*68));ctx.font='italic 36px Georgia';ctx.fillText('Who Forgot to Fly',w/2,289);}
 else if(/Birthday/.test(title)){ctx.fillStyle=main;ctx.font='bold 65px Georgia';ctx.fillText('Gail’s',w/2,255);ctx.fillText('Birthday Cake',w/2,330);ctx.font='italic 28px Georgia';ctx.fillText('Made with love',w/2,378);}
 else{ctx.fillStyle='#1f3447d9';ctx.fillRect(42,40,w-84,305);ctx.fillStyle=paper;ctx.font='24px Georgia';ctx.fillText('LEARNING PLANET',w/2,100);ctx.font='bold 57px Georgia';const words=/Wolf/.test(title)?['Gail and the','Big Bad Wolf']:['Where Is','My Star?'];words.forEach((line,i)=>ctx.fillText(line,w/2,205+i*75));}
}
