import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
const alts=['Gail在床邊發現金色顏料滴','狐狸拿著畫筆望著空白紙','杯子意外倒在桌上，藍色顏料流到紙上','Gail轉動畫紙，狐狸看見藍色河流','狐狸畫花莖，Gail在旁陪伴','朋友們掛起河流、花朵與蝴蝶的畫作'];
const item=(id:string,prompt:string,pic:number,options:string[],answer:number,explanation:string):StoryQuestion=>({id,kind:'choice',prompt,image:`images/story/fox-v1/quiz/scene-${String(pic).padStart(2,'0')}.png`,imageAlt:alts[pic-1],options:options.map(text=>({text})),answer:[answer],explanation});
export function foxQuestions(level:ReadingLevel):StoryQuestion[]{
 const a=level==='A',c=level==='C';
 const questions=[
 item('drop',a?'What shines?':'What leads Gail into the story?',1,['a gold drop','a red shoe','a blue cup','a green leaf'],0,'A gold drop leads Gail to the painted door.'),
 item('fox',a?'Who has a brush?':'Who is trying to draw the party poster?',2,['Bear','Fox','Rabbit','a giant'],1,'Fox has promised to draw the poster.'),
 item('worry',a?'How does Fox feel?':c?'Why does Fox hesitate before making the first mark?':'Why does Fox not start?',2,['He is hungry.','He has no paper.','He is afraid of a mistake.','He wants to sleep.'],2,'Fox worries that his picture will not be good enough.'),
 item('spill',a?'What spills?':'What spills when Fox bumps the cup?',3,['milk','yellow sand','green leaves','blue paint'],3,'The cup tips by accident and blue paint spills.'),
 item('help',a?'What does Gail do?':c?'How does Gail first respond to Fox’s sadness?':'How does Gail help her sad friend?',4,['She waits beside him.','She laughs at him.','She hides his brush.','She tears the paper.'],0,'Gail waits with Fox before suggesting another look.'),
 item('river',a?'What can the blue mark be?':'What does Gail see when she turns the paper?',4,['a tree','a river','a cake','a shoe'],1,'From another side, the blue mark looks like a river.'),
 item('stem',a?'What does Fox add?':'What does Fox add under the yellow flowers?',5,['red hats','white clouds','green stems','purple doors'],2,'Fox adds green stems to the flowers.'),
 item('idea',a?'What has wings?':c?'Which detail grows from Fox’s own new idea?':'What does Fox turn an orange mark into?',6,['a cup','a vine','a river','a butterfly'],3,'Fox thinks of adding wings to make a butterfly.'),
 item('proud',a?'How does Fox feel now?':'How does Fox feel about the finished picture?',6,['proud','angry','lonely','sleepy'],0,'Fox is proud that they kept going and made a picture together.'),
 item('message',a?'What can we do after a mistake?':c?'Which idea best explains how the mistake helped the story?':'What does this story teach us?',6,['Never draw again.','Look again and try another way.','Hide every picture.','Only draw perfect lines.'],1,'A mistake can become the start of a new idea.')
 ];
 const scenes=[
 ['Gail finds a gold drop.','Gail eats a cake.','Fox hangs a picture.','Bear makes a door.'],
 ['Fox is running.','Fox looks at blank paper.','Fox is swimming.','Fox is sleeping.'],
 ['Gail waters a flower.','Fox puts a cup away.','A cup tips and paint spills.','Bear paints a wall.'],
 ['Gail hides the picture.','Fox folds a hat.','Rabbit opens a door.','Gail turns the paper.'],
 ['Fox paints green stems.','Gail breaks a brush.','Fox washes a cup.','Bear goes to bed.'],
 ['They throw the picture away.','Friends hang their picture.','They close the studio.','They look for a cup.']
 ];
 scenes.forEach((choices,i)=>questions.push(item('scene-'+(i+1),a?'Look. What happens?':c?'Which event from the story matches this picture?':'Which sentence matches this picture?',i+1,choices,i%4,choices[i%4])));
 return questions;
}
