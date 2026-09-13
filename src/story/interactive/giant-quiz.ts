import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
const alts=['巨人在雨中拿著太小的黃傘','朋友分享不同顏色的雨傘','Gail 和朋友綁繩子，巨人扶著支架','朋友合攏雨傘之間的空隙','大家一起抬起彩虹傘','巨人與朋友在寬傘下分享空間'];
const item=(id:string,prompt:string,pic:number,options:string[],answer:number,explanation:string):StoryQuestion=>({id,kind:'choice',prompt,image:`images/story/giant-v1/quiz/scene-${String(pic).padStart(2,'0')}.png`,imageAlt:alts[pic-1],options:options.map(text=>({text})),answer:[answer],explanation});
export function giantQuestions(level:ReadingLevel):StoryQuestion[]{
 const a=level==='A',c=level==='C';
 const q=[
 item('who','Who does Gail meet?',1,['a giant','a wizard','a sailor','a princess'],0,'Gail meets a gentle giant.'),
 item('tiny',a?'Is his umbrella big or tiny?':'Why are the giant’s shoulders wet?',1,['He has no umbrella.','His umbrella is too tiny.','He swims in a river.','He spills a bucket.'],1,'The tiny umbrella cannot cover his shoulders.'),
 item('roof',a?'Where do they stay dry?':'Where do they plan their work out of the rain?',2,['in a puddle','under a tree branch','under a roof','on a boat'],2,'They use the tall workshop roof to stay dry.'),
 item('share',a?'What do friends share?':'What do the villagers bring to help?',2,['books','flowers','cakes','umbrellas'],3,'They share their small umbrellas.'),
 item('rope',a?'What ties the handles?':'What connects the umbrella handles to the frame?',3,['rope','paper','water','leaves'],0,'They use rope to tie the parts together.'),
 item('gap',a?'What must they close?':'Why do they overlap the umbrella edges?',4,['to change the colors','to close a gap','to make more rain','to hide the pole'],1,'Overlapping the edges closes the gap where rain could enter.'),
 item('wind',a?'The wind blows. What do they do?':c?'What is their careful response when the gust shakes the canopy?':'How do they respond to the wind?',5,['Run in different directions.','Let go at once.','Lower the pole together.','Climb onto the umbrella.'],2,'They lower it slowly together before strengthening the frame.'),
 item('check',a?'What do they check?':'What do they check before lifting again?',3,['the flowers','the books','the clouds','the knots'],3,'They check every knot and connection.'),
 item('lift',a?'How do they lift?':'What helps the helpers lift smoothly?',5,['Lift at the same time.','Lift without looking.','Let one child do it.','Pull in opposite directions.'],0,'They wait until everyone is ready and lift together.'),
 item('message',a?'What helps them make a big umbrella?':c?'Which idea best explains their success?':'What does this story teach?',6,['Keep everything for yourself.','Share and work together.','The tallest person does every job.','Stop after one problem.'],1,'Sharing small things and working together makes a big difference.')
 ];
 const scenes=[
 ['The giant holds a tiny umbrella.','The giant eats a cake.','Gail reads a book.','The sun shines on a picnic.'],
 ['Friends put books away.','Friends share their umbrellas.','Friends hide under a bed.','Friends plant a tree.'],
 ['They paint a door.','They jump over a puddle.','They tie the handles together.','They wash their boots.'],
 ['They open a window.','They carry a cake.','They drop all the umbrellas.','They close the gap.'],
 ['They lift the canopy together.','They run away alone.','They put the pole in a river.','They fold a paper hat.'],
 ['The giant stands alone in the rain.','Everyone has room under the canopy.','Gail looks for a lost book.','The children make a bigger gap.']
 ];
 const short=[['A tiny umbrella','Eat a cake','Read a book','A sunny picnic'],['Put books away','Share umbrellas','Hide under a bed','Plant a tree'],['Paint a door','Jump a puddle','Tie handles','Wash boots'],['Open a window','Carry a cake','Drop umbrellas','Close the gap'],['Lift together','Run away','Drop the pole','Fold a hat'],['Stand alone','Room for everyone','Find a book','Make a gap']];
 return [...q,...scenes.map((options,i)=>item('scene-'+i,a?'Look. What happens?':c?'Which description matches this part of the story?':'Which sentence matches the picture?',i+1,a?short[i]:options,i%4,options[i%4]))];
}
