import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
export function cloudQuestions(level:ReadingLevel):StoryQuestion[]{const a=level==='A';const rows:[string,string,string,string[],number,string][]=[
 ['What does Gail lift?','What does Gail lift to find the bell?','lid',['The lid','The wall','A tree','A boat'],0,'She lifts the lid of the chest.'],
 ['What makes a chime?','What makes the clear chime before the mist appears?','bell',['A leaf','The bell','A book','A shoe'],1,'The bell makes the chime.'],
 ['What blows away?','What does the breeze scatter across the hill?','leaf',['The cottage','The wall','The leaves','Gail’s bed'],2,'The breeze scatters the leaves.'],
 ['What is loud?','What grows loud when Cloud becomes angry?','cloud-angry',['The flowers','The stones','The book','The thunder'],3,'Cloud makes loud thunder.'],
 ['Why is Cloud upset?','Why is Cloud upset about the scattered leaves?','pattern',['Its work blew away.','It wants a cake.','Gail took its shoes.','It lost a boat.'],0,'Cloud worked hard on its pattern.'],
 ['What does Gail do?','How does Gail respond when Cloud explains its feelings?','cloud-upset',['She laughs.','She stays and listens.','She tells it to smile.','She leaves at once.'],1,'Gail stays without judging the feelings.'],
 ['What can they try?','What do they try after taking a pause?','rotor',['Shout louder','Chase every leaf','Breathe slowly','Hide the bell'],2,'They try an easy breath together.'],
 ['What does Cloud need?','What does Cloud ask Gail for?','cloud-upset',['A race','A louder voice','A bigger storm','Help to begin again'],3,'Cloud asks for help instead of managing alone.'],
 ['Must it be the same?','Must the new spiral match the old one exactly?','pattern',['No, it can be different.','Yes, every leaf must match.','They cannot try again.','They must throw it away.'],0,'The new pattern may be different.'],
 ['Can feelings come back?','What can Cloud do if strong feelings return?','cloud-calm',['Pretend nothing happened','Pause, name them, and ask for help','Blame Gail','Never speak again'],1,'Feelings can return, and Cloud can use these steps again.']];
const q:StoryQuestion[]=rows.map((r,i)=>({id:'cloud-'+i,kind:'choice',prompt:a?r[0]:r[1],image:`images/story/cloud-v1/${r[2]}.png`,imageAlt:'小雲朵故事相關圖像',options:r[3].map(text=>({text})),answer:[r[4]],explanation:r[5]}));
const answers=['Gail opens the chest.','The leaves scatter in the breeze.','Cloud is upset about its work.','They breathe with the pinwheel.','They make a new spiral.','Gail is back in her room.'];
answers.forEach((correct,i)=>{const options=['They sail a boat.','They bake a cake.','They build a tower.','They play in the snow.'];options[i%4]=correct;q.push({id:'cloud-picture-'+i,kind:'choice',prompt:a?'Look. What happens?':'Which event matches this picture?',image:`images/story/cloud-v1/quiz/scene-${i+1}.jpg`,imageAlt:'小雲朵故事分鏡 '+(i+1),options:options.map(text=>({text})),answer:[i%4],explanation:correct});});return q;}
