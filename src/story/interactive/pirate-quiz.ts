import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
const alts=['Gail在房間發現金紙船','海盜抱著望遠鏡繩子和船槳','海盜在碼頭拿太多工具，繩子滑下','朋友們分享船槳繩子與望遠鏡','穿救生衣的朋友分工航行','朋友們在沙灘分享野餐'];
const q=(id:string,prompt:string,pic:number,options:string[],answer:number,explanation:string):StoryQuestion=>({id,kind:'choice',prompt,image:`images/story/pirate-v1/quiz/scene-${String(pic).padStart(2,'0')}.png`,imageAlt:alts[pic-1],options:options.map(text=>({text})),answer:[answer],explanation});
export function pirateQuestions(level:ReadingLevel):StoryQuestion[]{const a=level==='A',c=level==='C';const items=[
 q('boat',a?'What does Gail find?':'What brings Gail into this story?',1,['a gold paper boat','a red kite','a green cup','a blue shoe'],0,'A golden paper boat leads Gail to the harbor.'),
 q('mine',a?'What does the pirate say?':'What does the pirate say about all the tools?',2,['Good night!','Mine!','Go to bed!','Happy birthday!'],1,'At first, the pirate wants to keep every tool for himself.'),
 q('problem',a?'Can he hold it all?':c?'Why does the pirate struggle before leaving the dock?':'Why do the tools slip?',3,['He has no tools.','The sea is frozen.','He tries to hold too much.','His friends take everything.'],2,'He tries to hold the oar, rope, and telescope at once.'),
 q('oar',a?'What can move through the water?':'Which tool does the sailor girl use to row?',5,['a shell','a chest','an apple','an oar'],3,'She pulls the oar through the water.'),
 q('rope',a?'What helps hold the sail?':'What does the boy use to control the sail?',5,['a rope','a spoon','a leaf','a hat'],0,'The boy holds the sail rope steady.'),
 q('look',a?'What helps them look far away?':'How does the pirate spot the shining bay?',5,['with an apple','with a telescope','with a pillow','with a basket'],1,'The telescope helps him look toward the bay.'),
 q('ready',a?'What do they wear in the boat?':'What do they put on before leaving the dock?',5,['winter coats','paper hats','life jackets','blankets'],2,'Everyone puts on a life jacket and checks the straps.'),
 q('turn',a?'Who gets a turn next?':'Who does the pirate give the telescope to next?',5,['a seagull','a fox','a giant','Gail'],3,'He offers Gail a turn with the telescope.'),
 q('picnic',a?'What do they share on the beach?':'What is in the chest at the end of the adventure?',6,['picnic food and shells','all the sea water','broken boats','snowballs'],0,'The chest holds food and shells for their shared picnic.'),
 q('meaning',a?'What can friends do?':c?'What does the pirate learn about sharing his things?':'What does taking turns mean?',4,['Never use your things again.','Use things carefully and let others have a turn.','Hide all your tools.','Make one person do every job.'],1,'Sharing can mean taking turns, then returning things with care.')
];const choices=[
 ['Gail finds a paper boat.','Gail eats an apple.','Gail rows a boat.','Gail holds a rope.'],
 ['The pirate is asleep.','The pirate holds all the tools.','The pirate is swimming.','The pirate opens a window.'],
 ['The friends bake a cake.','The pirate plants a tree.','The pirate holds too much.','The seagull takes the chest.'],
 ['The friends hide the tools.','Gail loses the boat.','The pirate runs away.','The friends share the tools.'],
 ['The friends work together in the boat.','The friends sit in a bedroom.','The boat is on a mountain.','The friends build a snowman.'],
 ['The pirate eats alone.','The friends share a picnic.','The friends close the harbor.','Gail folds a hat.']
];choices.forEach((options,i)=>items.push(q('scene-'+(i+1),a?'Look. What happens?':c?'Which event matches this picture?':'Which sentence matches the picture?',i+1,options,i%4,options[i%4])));return items;}
