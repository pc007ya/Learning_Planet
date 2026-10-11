import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
type Track={prompt:string;choices:[string,string,string,string];explanation:string};
/** Existing ABC story and images are unchanged. Evidence refers to their original page order.
 * First stored choice is correct; each public answer position is balanced deterministically. */
export const cloudQuizRows:{id:string;image:string;pages:number[];tracks:Record<ReadingLevel,Track>}[]=[
  {
    "id": "cloud-0",
    "image": "lid.png",
    "pages": [
      1,
      2
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail lift to find the bell?",
        "choices": [
          "The lid",
          "The bell",
          "A leaf",
          "The pinwheel"
        ],
        "explanation": "Page 1: Gail lifts the lid. A bell is inside the chest."
      },
      "B": {
        "prompt": "In this story, what does Gail find when she opens the little chest?",
        "choices": [
          "A brass bell",
          "An orange leaf",
          "A paper pinwheel",
          "A finished spiral"
        ],
        "explanation": "On page 1, Gail lifts the wooden chest’s lid and finds a brass bell. She has not reached Cloud’s hill yet."
      },
      "C": {
        "prompt": "In this story, which sequence starts Gail’s visit to the hill?",
        "choices": [
          "She opens the chest, finds the bell, and gently shakes it.",
          "She meets Cloud, makes a spiral, and then first opens the chest.",
          "She shakes the pinwheel, follows its sound, and finds a bell.",
          "She follows scattered leaves into her room and then opens the chest."
        ],
        "explanation": "Page 1 places finding the bell before the gentle shake on page 2. The chime and mist then open the way to the hill; meeting Cloud and the leaf spiral come afterward."
      }
    }
  },
  {
    "id": "cloud-1",
    "image": "bell.png",
    "pages": [
      2
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what makes the soft chime?",
        "choices": [
          "The bell",
          "A leaf",
          "The pinwheel",
          "The chest lid"
        ],
        "explanation": "Page 2: The bell makes a soft chime. Then mist comes out."
      },
      "B": {
        "prompt": "In this story, what happens right after Gail gently shakes the bell?",
        "choices": [
          "A chime rings and silver mist rises.",
          "The leaves scatter across the grass.",
          "Cloud makes a loud rumble.",
          "A soft shower falls on the spiral."
        ],
        "explanation": "On page 2, Gail gently shakes the bell. Its chime is followed by silver mist that opens a way to the grassy hill."
      },
      "C": {
        "prompt": "In this story, how does the bell help Gail enter Cloud’s setting?",
        "choices": [
          "Its chime is followed by mist that opens a way to the hill.",
          "Its chime signals that Cloud has finished the new spiral.",
          "Its chime helps Gail name Cloud’s feelings before rebuilding.",
          "Its chime reminds Gail to pause after she is back home."
        ],
        "explanation": "Page 2 links the bell’s clear chime with rising silver mist and an opening to the hill. The scattered work and sheltered rebuilding are later events, not the bell’s entrance role."
      }
    }
  },
  {
    "id": "cloud-2",
    "image": "leaf.png",
    "pages": [
      4,
      5
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what scatters across the grass?",
        "choices": [
          "The leaves",
          "The bell",
          "The pinwheel",
          "The chest lid"
        ],
        "explanation": "Page 5: The wind scatters the leaves. The spiral is gone."
      },
      "B": {
        "prompt": "In this story, what happens when the breeze becomes a stronger gust?",
        "choices": [
          "The leaf spiral comes apart.",
          "The brass bell falls out of the chest.",
          "The new spiral stays by the wall.",
          "The pinwheel is put beside Gail’s bed."
        ],
        "explanation": "The leaf edges lift on page 4. A stronger gust scatters them on page 5, taking apart the pattern Cloud worked on."
      },
      "C": {
        "prompt": "In this story, what changes from the first breeze to the stronger gust?",
        "choices": [
          "The leaf edges first lift, and then the whole pattern comes apart.",
          "The spiral first comes apart, and then Cloud finishes the sheltered new one.",
          "The bell first chimes, and then its sound scatters every leaf.",
          "The finished new spiral first stays in place, and then Gail opens the chest."
        ],
        "explanation": "Pages 4–5 show a change in the wind’s effect: lifted leaf edges are followed by scattered leaves and a broken pattern. The sheltered new spiral belongs to pages 17–18, after Gail listens and helps."
      }
    }
  },
  {
    "id": "cloud-3",
    "image": "cloud-angry.png",
    "pages": [
      7,
      8,
      9
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what loud sound rolls across the hill?",
        "choices": [
          "Thunder",
          "A bell chime",
          "Gail’s song",
          "A pinwheel click"
        ],
        "explanation": "Pages 7–8: Cloud makes thunder and a loud rumble."
      },
      "B": {
        "prompt": "In this story, what does Gail do while the loud rumble continues?",
        "choices": [
          "She stays nearby and waits.",
          "She begins the new leaf spiral at once.",
          "She shakes the bell to go home at once.",
          "She asks Cloud to race after the leaves."
        ],
        "explanation": "Page 8 has Gail stay nearby without shouting over the rumble. She waits until Cloud can hear her."
      },
      "C": {
        "prompt": "In this story, why does Gail wait instead of shouting over the rumble?",
        "choices": [
          "She waits until Cloud can hear her.",
          "She waits for Cloud to catch every leaf before they speak.",
          "She waits to finish a new spiral before hearing Cloud’s feelings.",
          "She waits for the entrance chime to begin another visit."
        ],
        "explanation": "Page 8 explicitly gives Gail’s reason: she waits until Cloud can hear her. On page 9, the rumble fades and Cloud can say it is angry. Rebuilding comes later, after the conversation."
      }
    }
  },
  {
    "id": "cloud-4",
    "image": "pattern.png",
    "pages": [
      5,
      10
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why does Cloud say it is upset?",
        "choices": [
          "Its work blew away.",
          "Its work is not started.",
          "Its bell is gone.",
          "Its pinwheel is broken."
        ],
        "explanation": "Page 10: Cloud says its work blew away. It worked hard on the spiral."
      },
      "B": {
        "prompt": "In this story, what reason does Cloud give Gail for feeling upset?",
        "choices": [
          "The pattern it worked on blew away.",
          "Gail has not begun the first pattern yet.",
          "The mist has closed before Gail arrives.",
          "The paper pinwheel has lost a wing."
        ],
        "explanation": "On page 10, Cloud explains that its work blew away. Page 5 shows why that matters: the gust breaks apart a pattern it worked hard to make."
      },
      "C": {
        "prompt": "In this story, why is the scattered spiral more than just moving leaves to Cloud?",
        "choices": [
          "It is work Cloud made carefully and cares about.",
          "It is a new pattern Gail has not started making yet.",
          "It is the doorway that Cloud needs to reach Gail’s room.",
          "It is a pinwheel that Cloud needs to repair before breathing."
        ],
        "explanation": "Page 3 describes a careful leaf spiral, and page 5 says Cloud worked hard on it. Its explanation on page 10 connects feeling upset with losing that work; Gail listens to what the pattern meant to Cloud."
      }
    }
  },
  {
    "id": "cloud-5",
    "image": "cloud-upset.png",
    "pages": [
      9,
      10,
      11
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail do when Cloud says it is upset?",
        "choices": [
          "She stays and listens.",
          "She starts a new spiral.",
          "She shakes the bell.",
          "She chases the leaves."
        ],
        "explanation": "Pages 9–10: Gail stays. She listens to Cloud talk about its work."
      },
      "B": {
        "prompt": "In this story, how does Gail respond to Cloud explaining its feelings?",
        "choices": [
          "She sits down and listens.",
          "She starts breathing before Cloud can speak.",
          "She rebuilds alone before hearing Cloud.",
          "She returns home before Cloud finishes."
        ],
        "explanation": "On page 10, Gail sits down to hear what the pattern meant to Cloud. Page 11 has her help name the feelings without judging them."
      },
      "C": {
        "prompt": "In this story, what connects Gail’s listening with helping Cloud name its feelings?",
        "choices": [
          "She first hears why the pattern matters, then helps name anger and upset.",
          "She first finishes the new pattern, then learns that the old one blew away.",
          "She first takes the bell home, then asks Cloud to explain the rumble.",
          "She first makes Cloud feel completely better, then asks what happened."
        ],
        "explanation": "Pages 10–11 put listening to Cloud’s explanation before naming the feelings. Page 9 also says Gail does not ask Cloud to smile or pretend nothing happened. Feeling completely better is not a condition for being heard."
      }
    }
  },
  {
    "id": "cloud-6",
    "image": "rotor.png",
    "pages": [
      12,
      13,
      14,
      15
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do they do right after taking a pause?",
        "choices": [
          "Breathe in and out",
          "Chase every leaf",
          "Make a new spiral",
          "Go back to Gail’s room"
        ],
        "explanation": "Pages 12–13: They pause. Then they breathe in and out together."
      },
      "B": {
        "prompt": "In this story, what do Gail and Cloud try before they begin rebuilding?",
        "choices": [
          "An easy breath together",
          "A race to gather all the leaves",
          "A new spiral without a pause",
          "Another trip through the silver mist"
        ],
        "explanation": "Page 12 has them stop chasing leaves. On page 13, Gail takes an easy breath and Cloud tries with her. Rebuilding begins on page 17."
      },
      "C": {
        "prompt": "In this story, what do the breathing and resting scenes show?",
        "choices": [
          "They take an easy breath and rest without racing to feel better.",
          "They finish the new spiral before they take their first breath.",
          "They chase every loose leaf between breaths to work faster.",
          "They return to Gail’s room before the pinwheel makes its first turn."
        ],
        "explanation": "Pages 13–14 describe an easy breath, a slow pinwheel turn, and rest. Page 14 says there is no race to feel better; page 15 still has Cloud care about the broken pattern. Breathing does not instantly remove every feeling."
      }
    }
  },
  {
    "id": "cloud-7",
    "image": "cloud-upset.png",
    "pages": [
      15,
      16,
      17
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what help does Cloud ask Gail for?",
        "choices": [
          "Stay and help begin again",
          "Make the new spiral alone",
          "Chase all the leaves first",
          "Take the bell back home"
        ],
        "explanation": "Page 16: Cloud asks Gail to stay and help it begin again."
      },
      "B": {
        "prompt": "In this story, what does Cloud ask after its calmer moment?",
        "choices": [
          "Please stay and help me begin again.",
          "Please finish the new spiral while I leave.",
          "Please chase every leaf before we pause.",
          "Please take the bell home before we rebuild."
        ],
        "explanation": "On page 16, Cloud tells Gail what it needs: staying and helping it begin again. The shared rebuilding follows on page 17."
      },
      "C": {
        "prompt": "In this story, how does Cloud’s request change its approach to the broken pattern?",
        "choices": [
          "It asks for company and help instead of trying to manage alone.",
          "It asks Gail to do all the work while it leaves the hill.",
          "It goes back to rushing after every leaf before naming its feelings.",
          "It waits until the pattern is identical before accepting Gail’s help."
        ],
        "explanation": "Page 16 says Cloud names its need instead of trying to manage alone. It asks Gail to stay and help. Page 17 answers that request with a shared new beginning, not a demand for a perfect copy."
      }
    }
  },
  {
    "id": "cloud-8",
    "image": "pattern.png",
    "pages": [
      17,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do Gail and Cloud make again?",
        "choices": [
          "A leaf spiral",
          "A brass bell",
          "A paper pinwheel",
          "A wooden chest"
        ],
        "explanation": "Page 17: They begin a new leaf spiral together."
      },
      "B": {
        "prompt": "In this story, must the new spiral match the old one exactly?",
        "choices": [
          "No, the new pattern can be different.",
          "Yes, each leaf must return to its old place.",
          "They leave the pattern unfinished instead.",
          "They keep the leaves scattered instead."
        ],
        "explanation": "Page 17 says the new spiral does not need to match the old one exactly. They use nearby leaves and begin again together."
      },
      "C": {
        "prompt": "In this story, why can the friends begin again without recovering the exact old spiral?",
        "choices": [
          "They can use nearby leaves for a new pattern that may differ.",
          "They must find every leaf and copy every old position first.",
          "They must make a new pinwheel before arranging any leaves.",
          "They must wait for another gust to put each old leaf back."
        ],
        "explanation": "Page 17 allows a different new spiral using leaves that landed nearby. Beginning again does not depend on finding every old position. Page 18 then places the new work in a sheltered patch."
      }
    }
  },
  {
    "id": "cloud-9",
    "image": "cloud-calm.png",
    "pages": [
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, if upset again, what can Cloud do?",
        "choices": [
          "Pause and ask for help",
          "Start chasing leaves again",
          "Build alone right away",
          "Shake Gail’s bell again"
        ],
        "explanation": "Page 19: Cloud can pause and ask for help again."
      },
      "B": {
        "prompt": "In this story, what can Cloud do if strong feelings return?",
        "choices": [
          "Pause, name them, and ask for help.",
          "Chase every leaf before taking any pause.",
          "Rebuild the pattern alone before naming them.",
          "Return Gail’s bell before asking for help."
        ],
        "explanation": "Page 19 says strong feelings may return. Cloud can use the steps again: pause, name the feelings, and ask for help."
      },
      "C": {
        "prompt": "In this story, what does the ending say about future strong feelings?",
        "choices": [
          "They may return, and Cloud can pause, name them, and seek help again.",
          "They cannot return once the friends have finished one new spiral.",
          "They are solved only by copying the old spiral exactly without help.",
          "They must be ignored until every scattered leaf has been recovered."
        ],
        "explanation": "Page 19 explicitly allows strong feelings to return and gives reusable steps. The earlier calm moment on page 15 does not promise that breathing or rebuilding permanently removes them."
      }
    }
  },
  {
    "id": "cloud-picture-0",
    "image": "quiz/scene-1.jpg",
    "pages": [
      1,
      2,
      20
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail open in this picture?",
        "choices": [
          "The little chest",
          "The brass bell",
          "The paper pinwheel",
          "The leaf spiral"
        ],
        "explanation": "Page 1: Gail opens the little chest and finds the bell."
      },
      "B": {
        "prompt": "In this story, which opening event does this room picture recall?",
        "choices": [
          "Gail lifts the lid and finds the bell.",
          "Gail sits on the hill and listens to Cloud.",
          "Gail arranges the last leaf by the wall.",
          "Gail puts the bell beside the closed chest at the end."
        ],
        "explanation": "The open chest and bell recall page 1, before Gail reaches the hill. Page 20 is the later return, with the bell set beside the chest."
      },
      "C": {
        "prompt": "In this story, how does this open-chest scene differ from the last room scene?",
        "choices": [
          "Here Gail finds the bell inside; later she sets it beside the chest.",
          "Here Gail returns from the hill; later she first finds the bell inside.",
          "Here Gail finishes a leaf spiral; later Cloud scatters it in her room.",
          "Here Gail has already taken a breath with Cloud; later she first meets it."
        ],
        "explanation": "Page 1 has Gail find the bell inside the opened chest. Page 20 brings her home and places it beside the chest. The two room scenes frame the visit rather than taking place at the same moment."
      }
    }
  },
  {
    "id": "cloud-picture-1",
    "image": "quiz/scene-2.jpg",
    "pages": [
      4,
      5,
      17,
      18,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what happens to the leaves in this picture?",
        "choices": [
          "They scatter.",
          "They stay in a spiral.",
          "They turn into mist.",
          "They fill Gail’s chest."
        ],
        "explanation": "Pages 4–5: Wind lifts the leaves. Then they scatter across the grass."
      },
      "B": {
        "prompt": "In this story, which event does this scattered-leaf picture recall?",
        "choices": [
          "The gust takes apart Cloud’s spiral.",
          "The friends finish a sheltered new spiral.",
          "A soft shower settles dust around their finished work.",
          "Gail finds a bell inside the wooden chest."
        ],
        "explanation": "Pages 4–5 show leaf edges lifting and then a stronger gust scattering the pattern. The finished new spiral belongs to the later rebuilding."
      },
      "C": {
        "prompt": "In this story, what comes before the leaf-scattering event recalled here?",
        "choices": [
          "Cloud has a carefully arranged spiral, and a breeze lifts its edges.",
          "Gail and Cloud have already finished the new spiral beside the wall.",
          "Cloud has already asked Gail to help it begin again.",
          "Gail has already returned home and set down the bell."
        ],
        "explanation": "Pages 3–5 place the careful spiral before the breeze and stronger gust that break it apart. Asking for help and making a sheltered new pattern follow later, after Cloud explains its feelings."
      }
    }
  },
  {
    "id": "cloud-picture-2",
    "image": "quiz/scene-3.jpg",
    "pages": [
      10,
      11,
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why is Cloud upset while Gail listens here?",
        "choices": [
          "Its work blew away.",
          "Its new spiral is finished.",
          "Its bell has broken.",
          "Its pinwheel has vanished."
        ],
        "explanation": "Page 10: Cloud says its work blew away. Gail listens."
      },
      "B": {
        "prompt": "In this story, which conversation does this picture recall?",
        "choices": [
          "Cloud explains being upset about its lost work.",
          "Cloud asks Gail to take the bell home at once.",
          "Cloud says the new spiral is already finished.",
          "Cloud says it has not made any pattern yet."
        ],
        "explanation": "Page 10 has Cloud explain that its work blew away, while Gail sits down to hear why it matters. Requesting help to rebuild comes on page 16."
      },
      "C": {
        "prompt": "In this story, why does Gail listen to Cloud at this point instead of starting a new spiral immediately?",
        "choices": [
          "Cloud is explaining what the lost pattern meant to it.",
          "Cloud has already said that the new sheltered pattern is finished.",
          "Cloud is telling Gail that it only needs a different bell.",
          "Cloud is teaching Gail to copy each old leaf position exactly."
        ],
        "explanation": "On page 10, Gail sits down to hear what the pattern meant to her friend. Naming the feelings, pausing, and asking for help follow; the shared new spiral begins on page 17."
      }
    }
  },
  {
    "id": "cloud-picture-3",
    "image": "quiz/scene-4.jpg",
    "pages": [
      12,
      13,
      14,
      15
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do they try with the pinwheel here?",
        "choices": [
          "An easy breath",
          "A race for leaves",
          "A new spiral",
          "A bell chime"
        ],
        "explanation": "Pages 13–14: They breathe together. The pinwheel turns slowly."
      },
      "B": {
        "prompt": "In this story, which event does this pinwheel picture recall?",
        "choices": [
          "They breathe together and watch a slow turn.",
          "They chase every leaf as quickly as possible.",
          "They rebuild the spiral beside the wall.",
          "They return the bell to Gail’s room."
        ],
        "explanation": "Pages 13–14 connect an easy breath with a little puff and a slow pinwheel turn. They also rest; this is not a race or the later rebuilding."
      },
      "C": {
        "prompt": "In this story, what follows the breathing practice recalled by this pinwheel picture?",
        "choices": [
          "Cloud has a calmer moment but still cares about the broken pattern.",
          "Cloud has already finished a perfect copy of the old pattern.",
          "Cloud no longer needs time to decide what to do next.",
          "Cloud has already gone home with Gail and the bell."
        ],
        "explanation": "Page 15 follows the breathing and resting with a calmer moment. Cloud still cares about its work but now has room to choose its next step. Asking Gail to help and rebuilding come afterward."
      }
    }
  },
  {
    "id": "cloud-picture-4",
    "image": "quiz/scene-5.jpg",
    "pages": [
      17,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what are the friends making again here?",
        "choices": [
          "A leaf spiral",
          "A paper pinwheel",
          "A wooden chest",
          "A brass bell"
        ],
        "explanation": "Pages 17–18: They make a new leaf spiral together."
      },
      "B": {
        "prompt": "In this story, which event does this new-spiral picture recall?",
        "choices": [
          "They begin again with leaves that landed nearby.",
          "Cloud rushes after loose leaves before the thunder.",
          "Gail finds the bell beside her bed for the first time.",
          "They only watch the pinwheel and have not begun rebuilding."
        ],
        "explanation": "Page 17 starts their shared new spiral with nearby leaves. Page 18 has Gail set down the last leaf near the sheltered wall."
      },
      "C": {
        "prompt": "In this story, why do the friends choose a sheltered patch near the wall for the new spiral?",
        "choices": [
          "It helps their new work stay in place in the breeze.",
          "It lets the bell open another doorway before they rebuild.",
          "It makes them recover each old leaf position exactly.",
          "It lets Cloud chase every loose leaf faster than before."
        ],
        "explanation": "Page 18 explicitly links the sheltered patch with letting their new work stay in place. The earlier gust broke the old spiral; this location supports their new attempt without requiring an exact copy."
      }
    }
  },
  {
    "id": "cloud-picture-5",
    "image": "quiz/scene-6.jpg",
    "pages": [
      1,
      20
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, where is Gail again in this last picture?",
        "choices": [
          "Her room",
          "Cloud’s hill",
          "Beside the spiral",
          "Under the trees"
        ],
        "explanation": "Page 20: Gail is back in her familiar room."
      },
      "B": {
        "prompt": "In this story, which final event does this room picture recall?",
        "choices": [
          "Gail sets the bell beside the chest at home.",
          "Gail first finds the bell inside the opened chest.",
          "Gail sits down to hear Cloud’s feelings.",
          "Gail sets the last leaf in a new spiral."
        ],
        "explanation": "Page 20 brings Gail home and places the bell beside the chest. The bell’s quiet chime reminds her to pause."
      },
      "C": {
        "prompt": "In this story, what does the bell’s quiet chime mean to Gail after she returns home?",
        "choices": [
          "It reminds her that a pause can make room for a small next choice.",
          "It tells her to return every leaf to its exact old position.",
          "It tells her that strong feelings cannot return after one breath.",
          "It tells her to rebuild alone before asking anyone for help."
        ],
        "explanation": "On page 20, the quiet chime reminds Gail that pausing creates room for the next small choice. Page 19 has already shown that feelings may return and that asking for help remains available."
      }
    }
  }
];
const positions:Record<ReadingLevel,number[]>={"A": [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3, 3, 1, 2, 0], "B": [2, 0, 1, 3, 1, 3, 2, 0, 3, 1, 0, 2, 0, 2, 3, 1], "C": [0, 2, 3, 1, 3, 1, 0, 2, 1, 3, 2, 0, 2, 0, 1, 3]};
export function cloudQuestions(level:ReadingLevel):StoryQuestion[]{return cloudQuizRows.map((row,i)=>{
 const track=row.tracks[level],answer=positions[level][i],choices=[...track.choices.slice(1)];
 choices.splice(answer,0,track.choices[0]);
 return {id:row.id,kind:'choice',prompt:track.prompt,image:'images/story/cloud-v1/'+row.image,imageAlt:'故事回顧插圖',options:choices.map(text=>({text})),answer:[answer],explanation:track.explanation};
});}
