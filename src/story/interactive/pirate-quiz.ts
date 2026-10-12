import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
type Track={prompt:string;choices:[string,string,string,string];explanation:string};
/** Existing ABC story and images are unchanged. Evidence refers to their original page order.
 * First stored choice is correct; each public answer position is balanced deterministically. */
export const pirateQuizRows:{id:string;image:string;pages:number[];tracks:Record<ReadingLevel,Track>}[]=[
  {
    "id": "boat",
    "image": "quiz/scene-01.png",
    "pages": [
      1,
      2
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail find by her bed?",
        "choices": [
          "A gold boat",
          "A brass telescope",
          "A wooden oar",
          "A rope"
        ],
        "explanation": "Page 1: Gail sees a little gold boat by her bed."
      },
      "B": {
        "prompt": "In this story, what rises from the paper boat?",
        "choices": [
          "Gold smoke.",
          "Sea water.",
          "White sand.",
          "Little waves."
        ],
        "explanation": "Page 2: Gold smoke rises from the boat. Gail steps into the light."
      },
      "C": {
        "prompt": "In this story, which sequence takes Gail to the harbor?",
        "choices": [
          "She finds the gold paper boat, sees golden smoke, and steps into the light.",
          "She receives the telescope, sees the bay, and then finds the paper boat.",
          "She unloads the picnic before the boat first gives off smoke.",
          "She reaches the dock before she notices the boat beside her bed."
        ],
        "explanation": "Pages 1–3: The paper boat begins the visit. Its golden smoke reveals the harbor, and Gail steps through the light to the dock."
      }
    }
  },
  {
    "id": "mine",
    "image": "quiz/scene-02.png",
    "pages": [
      5
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does the pirate say while holding all the tools?",
        "choices": [
          "“Mine!”",
          "“Your turn!”",
          "“I see the bay!”",
          "“Can we help?”"
        ],
        "explanation": "Page 5: The pirate says, “Mine!” He holds all the tools."
      },
      "B": {
        "prompt": "In this story, what does the pirate do before agreeing to share?",
        "choices": [
          "He holds all the tools close.",
          "He gives Gail the telescope.",
          "He offers Gail an apple.",
          "He gives his friend the oar."
        ],
        "explanation": "Page 5: He says the tools are his and holds them all. He does not share them then."
      },
      "C": {
        "prompt": "In this story, why does the pirate first keep all three tools to himself?",
        "choices": [
          "He fears that sharing means he will not get them back.",
          "He is waiting for Gail to return the telescope after her turn.",
          "He has already given the friends their jobs in the boat.",
          "He wants the friends to unload the picnic on dry sand."
        ],
        "explanation": "Page 5: The pirate worries that sharing means losing his things forever. That worry explains why he holds the tools close."
      }
    }
  },
  {
    "id": "problem",
    "image": "quiz/scene-03.png",
    "pages": [
      7,
      8
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why does the rope drop at the dock?",
        "choices": [
          "He holds too much",
          "He has no rope",
          "The boat is moving",
          "His friends pull it"
        ],
        "explanation": "Page 7: The pirate tries to hold too much. The rope drops."
      },
      "B": {
        "prompt": "In this story, what causes the pirate’s trouble with the tools?",
        "choices": [
          "He tries to hold them all at once.",
          "The friends have already taken them.",
          "The boat has already left the dock.",
          "The tools are all in the picnic chest."
        ],
        "explanation": "Pages 7–8: He holds too much, and the tools slip. The boat must wait because he cannot do every job alone."
      },
      "C": {
        "prompt": "In this story, why does the boat remain tied to the dock after the tools slip?",
        "choices": [
          "One person cannot row, watch the way, and handle the sail at the same time.",
          "The friends have completed the trip and are unloading the picnic.",
          "Gail is still looking through the telescope at the shining bay.",
          "The girl is already rowing while the boy holds the sail rope."
        ],
        "explanation": "Pages 7–8: Trying to hold the tools makes the rope slip. The boat waits safely while they work out how different people can do its jobs."
      }
    }
  },
  {
    "id": "oar",
    "image": "quiz/scene-05.png",
    "pages": [
      10,
      14
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does the girl use to row?",
        "choices": [
          "An oar",
          "A telescope",
          "A rope",
          "A chest"
        ],
        "explanation": "Pages 10 and 14: The pirate shares the oar. His friend uses it to row."
      },
      "B": {
        "prompt": "In this story, which job does the girl do with her tool?",
        "choices": [
          "She pulls the oar through the water.",
          "She holds the rope for the sail.",
          "She looks for the bay through the telescope.",
          "She carries all the tools by herself."
        ],
        "explanation": "Pages 10 and 14: The girl receives the oar. She pulls it through the water, helping the boat move."
      },
      "C": {
        "prompt": "In this story, how does giving the girl the oar help the group?",
        "choices": [
          "She rows, so the pirate does not have to do that job as well as watching the way.",
          "She uses it to hold the sail while the boy watches for the bay.",
          "She uses it to see the sheltered bay beyond the headland.",
          "She keeps all three tools together while the pirate rows alone."
        ],
        "explanation": "Pages 10–16: The girl rows with the oar, the boy holds the sail rope, and the pirate watches for the bay. Sharing creates separate useful jobs."
      }
    }
  },
  {
    "id": "rope",
    "image": "quiz/scene-05.png",
    "pages": [
      11,
      15
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does the boy hold for the sail?",
        "choices": [
          "A rope",
          "An oar",
          "A telescope",
          "An apple"
        ],
        "explanation": "Pages 11 and 15: The pirate shares the rope. The boy holds it for the sail."
      },
      "B": {
        "prompt": "In this story, what does the boy do when the wind fills the sail?",
        "choices": [
          "He holds its rope steady.",
          "He pulls the oar through water.",
          "He looks through the telescope.",
          "He opens the picnic chest."
        ],
        "explanation": "Page 15: The boy holds the rope while the wind fills the sail. The boat glides over the waves."
      },
      "C": {
        "prompt": "In this story, which tool-and-job pair belongs to the boy?",
        "choices": [
          "The rope, to hold the sail steady as the breeze fills it.",
          "The oar, to pull through the water in steady strokes.",
          "The telescope, to find the sheltered bay beyond the headland.",
          "The chest, to carry the entire group’s tools while they sail."
        ],
        "explanation": "Pages 11 and 15: The boy receives the sail rope and holds it steady. Rowing belongs to the girl, and the pirate first looks for the bay."
      }
    }
  },
  {
    "id": "look",
    "image": "quiz/scene-05.png",
    "pages": [
      12,
      16,
      17
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, which tool helps the pirate see the bay?",
        "choices": [
          "A telescope",
          "An oar",
          "A rope",
          "A paper boat"
        ],
        "explanation": "Page 16: The pirate looks through the telescope and sees the bay."
      },
      "B": {
        "prompt": "In this story, who uses the telescope to look for the bay first?",
        "choices": [
          "The pirate.",
          "Gail.",
          "The sailor girl.",
          "The boy with the rope."
        ],
        "explanation": "Pages 12 and 16: Gail gives the pirate the telescope. He looks for the bay before her turn."
      },
      "C": {
        "prompt": "In this story, what is the order of the pirate’s and Gail’s telescope turns?",
        "choices": [
          "The pirate first spots the bay; later he offers Gail a turn.",
          "Gail first finds the bay; then the pirate gives the telescope to the boy.",
          "The girl finds the bay through it before receiving the oar.",
          "The pirate gives it to Gail only after they unload the beach picnic."
        ],
        "explanation": "Pages 12, 16, and 17: Gail suggests that the pirate watch first. He spots the bay, then offers her the telescope before they reach dry land."
      }
    }
  },
  {
    "id": "ready",
    "image": "quiz/scene-05.png",
    "pages": [
      13,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do they put on before the boat leaves?",
        "choices": [
          "Life jackets",
          "Winter coats",
          "Paper hats",
          "Blankets"
        ],
        "explanation": "Page 13: They put on life jackets. Now they are ready to go."
      },
      "B": {
        "prompt": "In this story, when do the friends put on their life jackets?",
        "choices": [
          "Before leaving the dock.",
          "After reaching the quiet beach.",
          "After sharing the picnic.",
          "Before Gail finds the paper boat."
        ],
        "explanation": "Page 13: Everyone puts on a life jacket before the boat leaves. They sit down, ready to go."
      },
      "C": {
        "prompt": "In this story, which preparation comes before the boat sets off?",
        "choices": [
          "Everyone wears a life jacket, checks the straps, and settles low with feet inside.",
          "Everyone removes a life jacket and unloads the picnic on dry sand.",
          "Gail returns the telescope after looking at the shining water.",
          "The pirate opens the picnic chest and offers Gail an apple."
        ],
        "explanation": "Pages 13 and 18: They put on life jackets and check their seated positions before leaving. They remove the jackets only after stepping onto dry land."
      }
    }
  },
  {
    "id": "turn",
    "image": "quiz/scene-05.png",
    "pages": [
      16,
      17
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who gets the telescope after the pirate sees the bay?",
        "choices": [
          "Gail",
          "The sailor girl",
          "The boy",
          "The seagull"
        ],
        "explanation": "Page 17: The pirate says, “Your turn, Gail.” He shares the telescope with her."
      },
      "B": {
        "prompt": "In this story, whom does the pirate offer the next telescope turn?",
        "choices": [
          "Gail, after his own turn.",
          "The girl who rows.",
          "The boy who holds the rope.",
          "The seagull at the dock."
        ],
        "explanation": "Pages 16–17: The pirate sees the bay. Then he offers Gail the telescope."
      },
      "C": {
        "prompt": "In this story, what shows the pirate is beginning to take turns willingly?",
        "choices": [
          "He offers Gail the telescope without being reminded.",
          "He hugs every tool and says that they are all his.",
          "He refuses the friends’ offer to help carry the tools.",
          "He tries to lift the oar while keeping the telescope under his arm."
        ],
        "explanation": "Page 17: After looking through the telescope, the pirate offers it to Gail on his own. This differs from his earlier refusal to share."
      }
    }
  },
  {
    "id": "picnic",
    "image": "quiz/scene-06.png",
    "pages": [
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what do they share as they eat on the beach?",
        "choices": [
          "Food",
          "Tools",
          "Life jackets",
          "The chest"
        ],
        "explanation": "Page 19: They eat together. The pirate shares food with Gail."
      },
      "B": {
        "prompt": "In this story, what does the pirate share with Gail at the picnic?",
        "choices": [
          "An apple.",
          "The sail rope.",
          "A life jacket.",
          "A beach shell."
        ],
        "explanation": "Page 19: The chest holds their picnic. The pirate shares an apple with Gail."
      },
      "C": {
        "prompt": "In this story, which statement separates the chest’s contents from the sharing action described?",
        "choices": [
          "The chest holds bread, fruit, and shells; the pirate offers Gail an apple before taking one.",
          "The chest holds bread, fruit, and shells; the pirate gives each friend a shell before eating.",
          "The chest holds only tools; the pirate gives Gail the telescope instead of food.",
          "The chest holds only shells; Gail offers the pirate an apple from her room."
        ],
        "explanation": "Page 19: Shells are listed among the chest’s contents, but the explicit sharing action is the pirate offering Gail an apple before taking his own. The story does not say that he shares the shells."
      }
    }
  },
  {
    "id": "meaning",
    "image": "quiz/scene-04.png",
    "pages": [
      5,
      9,
      17
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, where does the telescope go after Gail’s turn?",
        "choices": [
          "Back to the pirate",
          "To the sailor girl",
          "Into Gail’s room",
          "Into the sea"
        ],
        "explanation": "Page 17: Gail looks through the telescope, then gives it back to the pirate."
      },
      "B": {
        "prompt": "In this story, what does Gail do when she finishes using the telescope?",
        "choices": [
          "She gives it back to the pirate.",
          "She gives it to the boy to keep.",
          "She puts it beside her bed.",
          "She trades it for the oar."
        ],
        "explanation": "Page 17: Gail looks, then gives the telescope back. Taking a turn does not mean keeping his tool."
      },
      "C": {
        "prompt": "In this story, which event answers the pirate’s earlier worry about sharing?",
        "choices": [
          "Gail returns his telescope after her turn, so the tool is still his.",
          "Gail takes the telescope home with the gold paper boat.",
          "The friends put all the tools in a heap for him to carry again.",
          "The pirate leaves the telescope at the dock before the trip."
        ],
        "explanation": "Pages 5, 9, and 17: He fears never getting his things back. Gail’s careful use and return show what taking turns can mean: the tool remains his."
      }
    }
  },
  {
    "id": "scene-1",
    "image": "quiz/scene-01.png",
    "pages": [
      1,
      2
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what happens in this bedroom picture?",
        "choices": [
          "Gail finds a paper boat",
          "Gail shares an apple",
          "Gail holds a telescope",
          "Gail helps with the picnic"
        ],
        "explanation": "Pages 1–2: Gail finds the little paper boat at home. Its smoke comes next."
      },
      "B": {
        "prompt": "In this story, which event happens just after Gail finds the paper boat?",
        "choices": [
          "Gold smoke rises from it.",
          "The pirate gives her a telescope.",
          "The friends unload the picnic.",
          "The girl begins to row."
        ],
        "explanation": "Pages 1–2: Gail finds the gold boat, then gold smoke rises. The dock and boat trip happen later."
      },
      "C": {
        "prompt": "In this story, how does the pictured paper boat connect the beginning and ending?",
        "choices": [
          "It starts the harbor visit and later rests beside Gail’s bed again.",
          "It becomes the wooden oar that the girl uses for rowing.",
          "It replaces the telescope when Gail looks for the shining bay.",
          "It stays in the picnic chest beside the shells at the beach."
        ],
        "explanation": "Pages 1–2 and 20: The little paper boat begins the magical visit. Back at home, it rests beside the bed while Gail remembers taking turns."
      }
    }
  },
  {
    "id": "scene-2",
    "image": "quiz/scene-02.png",
    "pages": [
      4,
      5,
      9
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what is the pirate doing in this picture?",
        "choices": [
          "Holding all the tools",
          "Giving Gail an apple",
          "Giving his friend an oar",
          "Looking from the boat"
        ],
        "explanation": "Page 5: The pirate says “Mine!” and holds all the tools close."
      },
      "B": {
        "prompt": "In this story, what has the pirate not agreed to do at this pictured stage?",
        "choices": [
          "Share the tools with his friends.",
          "Open his wooden chest.",
          "Keep the telescope close.",
          "Say that the tools are his."
        ],
        "explanation": "Pages 4–5: He opens the chest, then holds the tools and says “Mine!” He has not agreed to share them."
      },
      "C": {
        "prompt": "In this story, what belief explains the pirate holding everything in this picture?",
        "choices": [
          "He thinks sharing could mean giving his belongings away forever.",
          "He already knows Gail will return the telescope after her turn.",
          "He has decided that each friend should have a useful job.",
          "He is offering the others turns before he uses a tool himself."
        ],
        "explanation": "Pages 5 and 9: He first fears that shared things will not come back. Gail later explains careful use and taking turns, changing that belief."
      }
    }
  },
  {
    "id": "scene-3",
    "image": "quiz/scene-03.png",
    "pages": [
      7,
      8
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why do the tools slip in this dock picture?",
        "choices": [
          "He holds too much",
          "The friends have them all",
          "The boat is far away",
          "The chest is empty"
        ],
        "explanation": "Pages 7–8: The pirate holds too much. The boat must wait."
      },
      "B": {
        "prompt": "In this story, which event matches this crowded-arms picture?",
        "choices": [
          "The rope drops while he holds too much.",
          "The boy holds the sail rope steady.",
          "The girl rows away from the dock.",
          "Gail returns the telescope after her turn."
        ],
        "explanation": "Page 7: The pirate tries to hold the tools at once. The rope drops at the dock."
      },
      "C": {
        "prompt": "In this story, how does this difficulty lead to Gail’s question about everyone helping?",
        "choices": [
          "The tools slip, and he cannot do all the boat’s jobs at once.",
          "The friends have already finished their jobs and reached dry land.",
          "The pirate has already seen the bay through the telescope.",
          "Gail has already received an apple at the beach picnic."
        ],
        "explanation": "Pages 7–8: His crowded arms lead to slipping tools. The boat waits while Gail asks how everyone can help with the different jobs."
      }
    }
  },
  {
    "id": "scene-4",
    "image": "quiz/scene-04.png",
    "pages": [
      9,
      10,
      11,
      12
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what are they doing with the tools in this picture?",
        "choices": [
          "Sharing them",
          "Packing the picnic",
          "Using them all alone",
          "Taking them home"
        ],
        "explanation": "Pages 9–12: They share the tools. Each friend has a job."
      },
      "B": {
        "prompt": "In this story, which division of tools lets the friends help?",
        "choices": [
          "Girl: oar; boy: rope; pirate: telescope.",
          "Girl: telescope; boy: oar; pirate: rope.",
          "Girl: rope; boy: telescope; pirate: oar.",
          "Pirate: all tools; friends: no tools."
        ],
        "explanation": "Pages 10–12: The girl gets the oar, the boy gets the rope, and the pirate uses the telescope first."
      },
      "C": {
        "prompt": "In this story, how is this sharing scene different from the earlier crowded-arms scene?",
        "choices": [
          "The tools have separate users and useful jobs instead of being held by one person.",
          "The pirate holds every tool more tightly while his friends watch.",
          "The friends have finished the trip and put the tools down on sand.",
          "Gail has already returned the telescope after viewing the bay."
        ],
        "explanation": "Pages 7–12: One person first struggles with all the tools. After Gail explains taking turns, each tool has a user who can help the group."
      }
    }
  },
  {
    "id": "scene-5",
    "image": "quiz/scene-05.png",
    "pages": [
      13,
      14,
      15,
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what happens in this sailing picture?",
        "choices": [
          "They help in the boat",
          "They open the home doorway",
          "They eat on the beach",
          "They hold all tools alone"
        ],
        "explanation": "Pages 13–16: They wear life jackets and help one another in the boat."
      },
      "B": {
        "prompt": "In this story, what do the friends do after putting on life jackets?",
        "choices": [
          "Row, hold the rope, and look for the bay.",
          "Remove the jackets while still at sea.",
          "Carry all the tools in one person’s arms.",
          "Unload the picnic before leaving the dock."
        ],
        "explanation": "Pages 13–16: After getting ready, they do their jobs. The girl rows, the boy holds the rope, and the pirate looks for the bay."
      },
      "C": {
        "prompt": "In this story, which earlier decision makes the pictured journey possible?",
        "choices": [
          "Sharing the tools gives each person a job before they set off safely.",
          "Keeping every tool in the pirate’s arms leaves the friends free to watch.",
          "Giving the telescope away forever solves the pirate’s worry.",
          "Removing life jackets before boarding makes room for the tools."
        ],
        "explanation": "Pages 8–16: The boat first waits because one person cannot do everything. Sharing jobs, then putting on life jackets and settling safely, allows the group to leave."
      }
    }
  },
  {
    "id": "scene-6",
    "image": "quiz/scene-06.png",
    "pages": [
      18,
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what are the friends doing in this beach picture?",
        "choices": [
          "Eating together",
          "Holding all tools alone",
          "Rowing from the dock",
          "Looking from Gail’s room"
        ],
        "explanation": "Pages 18–19: They reach the beach, help with the picnic, and eat together."
      },
      "B": {
        "prompt": "In this story, which action belongs to the beach picnic after landing?",
        "choices": [
          "The pirate shares an apple with Gail.",
          "Gail first gives the pirate the telescope.",
          "The girl first receives the oar.",
          "The boy first takes the sail rope."
        ],
        "explanation": "Pages 18–19: They reach dry land and carry the picnic. Then the pirate shares an apple with Gail."
      },
      "C": {
        "prompt": "In this story, how does the pirate’s apple offer fit the change shown across the adventure?",
        "choices": [
          "He offers Gail food before taking his own, after learning to share tools and take turns.",
          "He keeps every item to himself because the telescope did not return.",
          "He distributes the beach shells as the story’s stated sharing example.",
          "He gives Gail a life jacket only after she finishes eating."
        ],
        "explanation": "Pages 5, 9, 17, and 19: He moves from holding everything to sharing turns and getting his telescope back. At the picnic, he offers Gail an apple before taking his own; shells are contents, not an explicit gift."
      }
    }
  }
];
const positions:Record<ReadingLevel,number[]>={"A": [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3, 3, 1, 2, 0], "B": [2, 0, 1, 3, 1, 3, 2, 0, 3, 1, 0, 2, 0, 2, 3, 1], "C": [0, 2, 3, 1, 3, 1, 0, 2, 1, 3, 2, 0, 2, 0, 1, 3]};
export function pirateQuestions(level:ReadingLevel):StoryQuestion[]{return pirateQuizRows.map((row,i)=>{
 const track=row.tracks[level],answer=positions[level][i],choices=[...track.choices.slice(1)];
 choices.splice(answer,0,track.choices[0]);
 return {id:row.id,kind:'choice',prompt:track.prompt,image:'images/story/pirate-v1/'+row.image,imageAlt:'故事回顧插圖',options:choices.map(text=>({text})),answer:[answer],explanation:track.explanation};
});}
