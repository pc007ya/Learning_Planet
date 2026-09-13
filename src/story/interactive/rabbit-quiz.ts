import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
export function rabbitQuestions(level:ReadingLevel):StoryQuestion[]{
 const a=level==='A';
 const rows:[string,string,string[],number,string][]=[
 ['Who hops in?','Who appears after the green light?', ['Rabbit','Bear','Fox','Wolf'],0,'Rabbit hops into Gail’s room after the light appears.'],
 ['What do they bury?','What do Gail and Rabbit bury in the soil?',['a ruler','a seed','a shoe','a notebook'],1,'They bury a seed beneath a little soil.'],
 ['What is a scoop for?','How do they use the scoop?',['to ring a bell','to draw a face','to dig a small hole','to measure height'],2,'The scoop helps them dig a small hole.'],
 ['Damp or muddy?','How should the soil be after a little sprinkle?',['very muddy','full of ice','completely dry','damp'],3,'A little water makes it damp, not muddy.'],
 ['What grows below?','Which part can grow below before a shoot appears?',['a root','a ruler','a notebook','a bell'],0,'The root can begin below the surface.'],
 ['Why not dig again?','Why does Gail ask Rabbit not to dig up the seed?',['It is too loud.','It needs to stay undisturbed.','The scoop is missing.','It has turned to stone.'],1,'Repeated digging disturbs the growing seed.'],
 ['What shows each day?','What helps Rabbit remember the small changes?',['his slippers','a bell','a daily record','a hidden box'],2,'Rabbit adds observations to his daily record.'],
 ['What measures height?','What do they place upright to measure the sprout?',['a spoon','a rope','a pencil case','a ruler'],3,'They measure from the soil surface with a ruler.'],
 ['What does patient mean?','Which action shows that Rabbit is learning to be patient?',['He checks daily without digging it up.','He keeps pulling it out.','He gives up at once.','He demands an instant bloom.'],0,'He keeps caring and noticing changes over time.'],
 ['One day or many days?','How does the story show that growing takes time?',['It happens in one sprinkle.','Their record shows many days passing.','A spell makes it instant.','Rabbit pulls it taller.'],1,'Daily records and the passage of weeks show gradual growth.']];
 const pictures=['rabbit.png','seed.png','scoop.png','can.png','root.png','rabbit-worried.png','record.png','sprout.png','rabbit-pencil.png','sunflower.png'];
 const result:StoryQuestion[]=rows.map((r,i)=>({id:'rabbit-'+i,kind:'choice',prompt:a?r[0]:r[1],image:'images/story/rabbit-v1/'+pictures[i],imageAlt:'本題相關角色或物件',options:r[2].map(text=>({text})),answer:[r[3]],explanation:r[4]}));
 result[6]={id:'rabbit-bigger',kind:'choice',prompt:a?'Which seed is bigger?':'Look at both seeds. Which one is bigger?',image:'images/story/rabbit-v1/quiz/bigger.jpg',imageAlt:'左右兩顆不同大小的種子',options:['The left seed','The right seed','They are the same size','Neither seed'].map(text=>({text})),answer:[1],explanation:'The seed on the right is bigger.'};
 result[9]={id:'rabbit-taller',kind:'choice',prompt:a?'Is it taller now?':'Compare the plant with the old height mark. What changed?',image:'images/story/rabbit-v1/quiz/taller.jpg',imageAlt:'植物與先前高度標記比較',options:['It is shorter now.','It is the same height.','It is taller now.','It is gone.'].map(text=>({text})),answer:[2],explanation:'The plant reaches above the old mark. It is taller now.'};
 const choices=[['A glowing pot leads to a garden.','They sail away.','A cup breaks.','They eat lunch.'],['Rabbit is flying.','Rabbit plants a seed.','Rabbit repairs a cup.','Rabbit wears a crown.'],['Gail closes a box.','Rabbit sleeps.','Rabbit wants to dig again.','They row a boat.'],['Gail hides a seed.','Rabbit bakes bread.','They open a door.','Gail sprinkles gently.'],['A sprout appears after several days.','Rabbit makes ice.','They paint a bridge.','The seed becomes a boat.'],['They leave without looking.','They see the result of steady care.','They break the ruler.','They dig everything up.']];
 choices.forEach((options,i)=>result.push({id:'rabbit-scene-'+i,kind:'choice',prompt:a?'Look. What happens?':'Which event matches this picture?',image:`images/story/rabbit-v1/quiz/scene-${String(i+1).padStart(2,'0')}-v2.png`,imageAlt:'小兔故事劇情分鏡 '+(i+1),options:options.map(text=>({text})),answer:[i%4],explanation:options[i%4]}));return result;
}
