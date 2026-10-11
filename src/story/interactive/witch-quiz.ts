import type {ReadingLevel} from './dragon-text';
import type {StoryQuestion} from './dragon-quiz';
type Track={prompt:string;choices:[string,string,string,string];explanation:string};
/** Graded quiz only. Shared layered renderer attaches the original sceneImage unchanged. */
export const witchQuizRows:{id:string;pages:number[];tracks:Record<ReadingLevel,Track>}[]=[
  {
    "id": "witch-0",
    "pages": [
      1,
      2
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what slides to Gail?",
        "choices": [
          "A little broom",
          "A practice card",
          "A soft cushion",
          "A low hoop"
        ],
        "explanation": "Page 1: A little broom slides to Gail. It stops before it glows."
      },
      "B": {
        "prompt": "In this story, where does the tiny broom stop?",
        "choices": [
          "Beside Gail on the floor.",
          "Beside Mira at a low hoop.",
          "Beside the teacher’s cards.",
          "Beside a new pupil."
        ],
        "explanation": "Pages 1–2: The tiny broom stops by Gail on the floor. After it stops, it begins to glow."
      },
      "C": {
        "prompt": "In this story, which sequence opens the doorway?",
        "choices": [
          "The charm slides to Gail, stops, and then gives off a sparkle.",
          "The charm sparkles before it slides toward Gail.",
          "Gail reaches the school before the charm stops by her slippers.",
          "The charm fades beside Gail’s book before the doorway appears."
        ],
        "explanation": "Pages 1–2: The charm first slides across the bedroom and stops beside Gail’s slippers. Only then does a sparkle rise and the lights form a doorway."
      }
    }
  },
  {
    "id": "witch-1",
    "pages": [
      2,
      3
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, where is Mira’s school?",
        "choices": [
          "On a castle roof",
          "In Gail’s room",
          "In a garden",
          "By a river"
        ],
        "explanation": "Pages 2–3: Gail goes to the school on a castle roof. There she meets Mira."
      },
      "B": {
        "prompt": "In this story, where does Gail go through the doorway?",
        "choices": [
          "To a school on a roof.",
          "Back to her bedroom.",
          "To a room for reading.",
          "To a path beside water."
        ],
        "explanation": "Pages 2–3: The glowing broom shows Gail a new place. She goes to the flying school and meets Mira there."
      },
      "C": {
        "prompt": "In this story, which destination appears after the charm sparkles?",
        "choices": [
          "A flying school on a castle roof.",
          "Gail’s bedroom, with the charm beside her book.",
          "The cushion where Mira lands after her first attempt.",
          "The low hoop where Mira later practices a turn."
        ],
        "explanation": "Pages 2–3: The lights form a doorway to the school on a castle roof. The cushion and hoops belong to later lessons at that school."
      }
    }
  },
  {
    "id": "witch-2",
    "pages": [
      3
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who is Mira?",
        "choices": [
          "A little witch",
          "A new teacher",
          "Gail’s sister",
          "A sailor"
        ],
        "explanation": "Page 3: Mira is a little witch. Gail meets her at the school."
      },
      "B": {
        "prompt": "In this story, what does Mira do when Gail first meets her?",
        "choices": [
          "She watches other pupils fly.",
          "She gives cards to a pupil.",
          "She guides a pupil to land.",
          "She puts a charm by a book."
        ],
        "explanation": "Page 3: Mira is a little witch. At first, she watches the other pupils fly."
      },
      "C": {
        "prompt": "In this story, how is Mira different from the flying pupils at their first meeting?",
        "choices": [
          "She keeps both feet on the ground while they fly.",
          "She is already completing the low loop they will practice.",
          "She is showing the new beginner how to use the cards.",
          "She is giving the teacher a signal to land."
        ],
        "explanation": "Page 3: Mira watches the other pupils fly while keeping both feet on the ground. Her own small lift and later loop come after this meeting."
      }
    }
  },
  {
    "id": "witch-3",
    "pages": [
      4
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why does Mira say “I can’t” at first?",
        "choices": [
          "The pupils fly high",
          "Her broom is gone",
          "Her lesson is over",
          "The teacher is away"
        ],
        "explanation": "Page 4: Mira sees the pupils fly high. She says, “I can’t.”"
      },
      "B": {
        "prompt": "In this story, what makes Mira unsure at the start?",
        "choices": [
          "The other pupils fly high.",
          "Her broom has gone missing.",
          "The teacher ends the lesson.",
          "The other pupils need cards."
        ],
        "explanation": "Page 4: The pupils fly high, and Mira feels unsure. She says, “I can’t do that.”"
      },
      "C": {
        "prompt": "In this story, why does Mira whisper “I can’t do that” before her first lesson?",
        "choices": [
          "The other pupils fly higher than she wants to go.",
          "She has already finished her first low loop.",
          "She cannot remember where she left her broom.",
          "The teacher has asked her to teach a new beginner."
        ],
        "explanation": "Page 4: Mira watches pupils flying higher than she wants to go. She whispers “I can’t do that” and pulls her broom close."
      }
    }
  },
  {
    "id": "witch-4",
    "pages": [
      6,
      7
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, where does Mira land after the first wobble?",
        "choices": [
          "On a soft cushion",
          "On a practice card",
          "On the broom handle",
          "On a hoop"
        ],
        "explanation": "Pages 6–7: The broom wobbles. Mira comes down on a soft cushion."
      },
      "B": {
        "prompt": "In this story, what is under Mira when she first comes down?",
        "choices": [
          "A soft cushion for landing.",
          "A card showing a small step.",
          "A hoop for turning through.",
          "A book beside the charm."
        ],
        "explanation": "Pages 6–7: Mira lifts up, but the broom wobbles. She lands on a soft cushion."
      },
      "C": {
        "prompt": "In this story, how does the teacher respond to Mira’s first unsteady flight?",
        "choices": [
          "She guides Mira down onto a thick cushion.",
          "She puts out the cards before Mira has lifted at all.",
          "She sends Mira through the second hoop immediately.",
          "She asks Mira to pass the cards to the new beginner."
        ],
        "explanation": "Pages 6–7: After Mira’s broom wobbles, the teacher guides her onto a thick cushion. Mira is safe, although she pushes the broom away after this attempt."
      }
    }
  },
  {
    "id": "witch-5",
    "pages": [
      6,
      8
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Gail say Mira did?",
        "choices": [
          "Went up a little",
          "Flew a whole loop",
          "Went through a hoop",
          "Held out the cards"
        ],
        "explanation": "Page 8: Gail says, “You went up!” Mira made a little lift."
      },
      "B": {
        "prompt": "In this story, what small success does Gail point out after the first try?",
        "choices": [
          "Mira went up a little.",
          "Mira finished the whole course.",
          "Mira taught the new pupil.",
          "Mira went through both hoops."
        ],
        "explanation": "Pages 6 and 8: Mira lifted up before the wobble. Gail helps her notice that small success."
      },
      "C": {
        "prompt": "In this story, why does Gail call the first small lift progress?",
        "choices": [
          "Mira really left the ground, even though she did not finish the flight.",
          "Mira completed the low loop before she started using the cards.",
          "Mira flew higher than all the pupils she had watched.",
          "Mira had already learned to guide the next beginner."
        ],
        "explanation": "Pages 6 and 8: The lift was real, even though the flight was unfinished. Gail points to that achieved step rather than treating the entire attempt as a failure."
      }
    }
  },
  {
    "id": "witch-6",
    "pages": [
      9
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, how many practice cards does the teacher put out?",
        "choices": [
          "Four",
          "Two",
          "Three",
          "Five"
        ],
        "explanation": "Page 9: There are four little cards. Mira can try one step at a time."
      },
      "B": {
        "prompt": "In this story, why does the teacher use four cards?",
        "choices": [
          "Mira can try one small step first.",
          "Mira can count the flying pupils.",
          "Mira can choose the highest hoop.",
          "Mira can measure the castle roof."
        ],
        "explanation": "Page 9: The teacher puts out four cards. They help Mira begin with one small step."
      },
      "C": {
        "prompt": "In this story, how do the cards change the task of learning to fly?",
        "choices": [
          "They separate holding, hovering, turning, and landing into individual skills.",
          "They show how to perform the entire course in a single attempt.",
          "They sort the pupils by how high each one can fly.",
          "They set a faster time for completing the next loop."
        ],
        "explanation": "Page 9: Each of the four picture cards shows one skill. Mira can work on a part instead of trying to learn every part at once."
      }
    }
  },
  {
    "id": "witch-7",
    "pages": [
      5,
      6,
      14
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, where does the teacher tell Mira to look?",
        "choices": [
          "Ahead",
          "Behind her",
          "At her feet",
          "At Gail’s book"
        ],
        "explanation": "Page 5: The teacher says to hold on and look ahead."
      },
      "B": {
        "prompt": "In this story, what does the teacher teach along with holding the broom?",
        "choices": [
          "Look ahead while holding it.",
          "Look behind while turning it.",
          "Look down at the practice cards.",
          "Look at the highest pupil."
        ],
        "explanation": "Page 5: The teacher shows Mira how to hold the broom and tells her to look ahead."
      },
      "C": {
        "prompt": "In this story, which change from the first wobble helps Mira pass the low hoop?",
        "choices": [
          "She looks ahead, as she was taught before her first try.",
          "She focuses on giving the practice cards to the beginner.",
          "She stops at the hoop to count a three-count hover.",
          "She waits for the later breeze and landing signal."
        ],
        "explanation": "Pages 5–6 and 14: The teacher teaches looking ahead, but Mira forgets it during her first wobble. At the low hoop, she looks ahead and uses the skill she practiced."
      }
    }
  },
  {
    "id": "witch-8",
    "pages": [
      13
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Mira say after “I can’t yet”?",
        "choices": [
          "“I can try.”",
          "“I am done.”",
          "“It is too late.”",
          "“Give me the book.”"
        ],
        "explanation": "Page 13: Mira says, “I can’t yet.” Then she says, “I can try.”"
      },
      "B": {
        "prompt": "In this story, what does Mira do after saying she cannot do it yet?",
        "choices": [
          "She picks up her broom again.",
          "She puts the charm by a book.",
          "She gives the cards away.",
          "She watches without trying."
        ],
        "explanation": "Page 13: Mira says she cannot do it yet. She picks up her broom again for another try."
      },
      "C": {
        "prompt": "In this story, what does adding “yet” show about Mira’s view of the whole course?",
        "choices": [
          "She has not learned it all, but another try is still possible.",
          "She has already completed the course without further practice.",
          "She only needs to increase her speed to finish the course.",
          "She must start again at the highest part of the course."
        ],
        "explanation": "Page 13: Mira says she cannot fly the whole course yet, then picks up her broom. The new word leaves room to learn rather than claiming she has already succeeded."
      }
    }
  },
  {
    "id": "witch-9",
    "pages": [
      11,
      14
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, when Mira counts to three, what does she do?",
        "choices": [
          "Stay up a little",
          "Go through a hoop",
          "Give out the cards",
          "Finish a whole loop"
        ],
        "explanation": "Page 11: Mira goes up a little and counts, “One, two, three.” The low hoop comes later."
      },
      "B": {
        "prompt": "In this story, which flying skill does Mira practice near the ground before the hoops?",
        "choices": [
          "Hovering and counting to three.",
          "Turning through the next hoop.",
          "Completing one small loop.",
          "Flying high with the pupils."
        ],
        "explanation": "Pages 11 and 14: Mira first hovers near the ground and counts to three. Later she goes through a low hoop."
      },
      "C": {
        "prompt": "In this story, what happens during the three-count practice before the hoops?",
        "choices": [
          "Mira hovers close to the ground, then makes a gentle landing.",
          "Mira stays on the ground and only copies the teacher’s grip.",
          "Mira passes through the low hoop and turns through the next one.",
          "Mira finishes the low loop and gives her cards to a beginner."
        ],
        "explanation": "Pages 10–11 and 14: Grip practice stays on the ground. The next practice is a low, three-count hover followed by landing; the hoops come later."
      }
    }
  },
  {
    "id": "witch-10",
    "pages": [
      16
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Mira do when the wind comes?",
        "choices": [
          "She lands",
          "She goes higher",
          "She gives out cards",
          "She starts a loop"
        ],
        "explanation": "Page 16: Wind comes, and it is time to land. Mira comes down."
      },
      "B": {
        "prompt": "In this story, what happens when a breeze moves Mira’s broom?",
        "choices": [
          "The teacher helps her land.",
          "Mira finishes the loop at once.",
          "The teacher puts the cards away.",
          "Mira begins teaching a pupil."
        ],
        "explanation": "Page 16: A breeze moves the broom. The teacher helps Mira land before she tries again."
      },
      "C": {
        "prompt": "In this story, what happens between the breeze and Mira’s next attempt at the turn?",
        "choices": [
          "She follows the teacher’s landing signal and comes down.",
          "She completes the low loop before responding to the breeze.",
          "She hands the four cards to the beginner beside the hoops.",
          "She stays in the air and starts the next turn immediately."
        ],
        "explanation": "Pages 16–17: The breeze makes the broom wobble. Mira lands at the teacher’s signal before taking a breath and trying the turn again."
      }
    }
  },
  {
    "id": "witch-11",
    "pages": [
      15,
      17
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, why does Mira go slowly on the next try?",
        "choices": [
          "To look and turn",
          "To count the pupils",
          "To give out cards",
          "To find Gail’s book"
        ],
        "explanation": "Pages 15 and 17: Mira keeps looking ahead as she turns. On the next try, she goes slowly."
      },
      "B": {
        "prompt": "In this story, how does Mira try the turn again?",
        "choices": [
          "She goes slowly and looks ahead.",
          "She flies faster and looks back.",
          "She watches the pupils from below.",
          "She holds the broom on the ground."
        ],
        "explanation": "Page 17: Mira tries the turn again. This time she goes slowly and looks ahead."
      },
      "C": {
        "prompt": "In this story, why does Mira allow more time for the turn after landing?",
        "choices": [
          "She needs time to notice and adjust her movements.",
          "She needs time to count how many pupils are watching.",
          "She needs time to choose which practice card to give away.",
          "She needs time to copy the teacher’s grip while standing still."
        ],
        "explanation": "Pages 16–17: Mira lands after the breeze, then tries the turn again. The story says she needs time to notice and adjust, rather than more speed."
      }
    }
  },
  {
    "id": "witch-12",
    "pages": [
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what does Mira finish near the end?",
        "choices": [
          "A small loop and landing",
          "A high flight over towers",
          "A lesson giving out cards",
          "A three-count first hover"
        ],
        "explanation": "Page 18: Mira goes around in a small loop, then comes down safely."
      },
      "B": {
        "prompt": "In this story, what does Mira do after the practice turns?",
        "choices": [
          "She flies a small loop and lands safely.",
          "She makes her very first little lift.",
          "She begins copying the grip on the ground.",
          "She watches the other pupils fly high."
        ],
        "explanation": "Page 18: After practicing, Mira flies one small loop. She lands safely and has done it."
      },
      "C": {
        "prompt": "In this story, which achievement makes Mira feel capable near the end?",
        "choices": [
          "Completing a low loop and landing safely on the cushion.",
          "Rising a little before her first unsteady landing.",
          "Copying the teacher’s grip while staying on the ground.",
          "Watching the flying pupils before she begins the lesson."
        ],
        "explanation": "Page 18: Mira completes her own low loop and lands safely. She feels capable because she knows the small steps that led to this achievement."
      }
    }
  },
  {
    "id": "witch-13",
    "pages": [
      19
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, who gets Mira’s help near the end?",
        "choices": [
          "A new friend",
          "Her teacher",
          "Gail at home",
          "A pupil flying high"
        ],
        "explanation": "Page 19: A new friend comes. Mira says, “Try one step.”"
      },
      "B": {
        "prompt": "In this story, what does Mira give to the new pupil?",
        "choices": [
          "The practice cards.",
          "The tiny broom charm.",
          "The soft landing cushion.",
          "The teacher’s low hoop."
        ],
        "explanation": "Page 19: Mira gives the cards to a new pupil. She tells the pupil to try one step."
      },
      "C": {
        "prompt": "In this story, how does Mira help the unsure beginner?",
        "choices": [
          "She shares the practice cards and suggests beginning with one step.",
          "She points out the highest pupils and asks the beginner to follow them.",
          "She gives the beginner the charm to place beside Gail’s book.",
          "She has the beginner complete the entire low loop before using the cards."
        ],
        "explanation": "Page 19: Mira passes on the cards and says that the beginner can start with just one step. She shares the approach that helped her own progress."
      }
    }
  },
  {
    "id": "witch-14",
    "pages": [
      9,
      10,
      11,
      12,
      14,
      15,
      17,
      18
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what helps Mira learn to fly?",
        "choices": [
          "Small steps and practice",
          "Only watching the pupils",
          "Only saying the chant",
          "Starting with a high hoop"
        ],
        "explanation": "Pages 9–18: Mira tries small steps. She practices, then finishes her little loop."
      },
      "B": {
        "prompt": "In this story, which way of learning leads to Mira’s small loop?",
        "choices": [
          "Try small skills and practice again.",
          "Watch the high pupils without trying.",
          "Say the chant without holding steady.",
          "Start with the whole flight course."
        ],
        "explanation": "Pages 9–18: Mira begins with small steps, such as holding and hovering. She practices again before she flies the loop."
      },
      "C": {
        "prompt": "In this story, which plan best explains Mira’s progress from her first wobble to a safe loop?",
        "choices": [
          "Separate the skills, practice them, and adjust after each attempt.",
          "Repeat the chant alone and skip holding, hovering, and turning practice.",
          "Watch higher pupils until she can copy their whole flight at once.",
          "Practice the entire course faster instead of working on its separate parts."
        ],
        "explanation": "Pages 5–6 and 9–18: A simple spell is part of the first lesson, but success also requires grip, hover, turn, and landing practice. Mira succeeds through small skills and adjusted attempts, not the chant alone."
      }
    }
  },
  {
    "id": "witch-15",
    "pages": [
      1,
      20
    ],
    "tracks": {
      "A": {
        "prompt": "In this story, what is with Gail back at home?",
        "choices": [
          "The little broom",
          "The four cards",
          "The soft cushion",
          "The low hoop"
        ],
        "explanation": "Page 20: Gail is home with the little broom. Its light rests."
      },
      "B": {
        "prompt": "In this story, where does Gail put the tiny broom after coming home?",
        "choices": [
          "Beside her book.",
          "Beside the low hoop.",
          "On the teacher’s cards.",
          "On the landing cushion."
        ],
        "explanation": "Page 20: Gail is back in her room. She puts the tiny broom by her book."
      },
      "C": {
        "prompt": "In this story, which closing detail links the invitation to what Gail has learned?",
        "choices": [
          "The broom charm rests by her book as she remembers small steps and “yet.”",
          "The four cards stay at home to replace the teacher’s next lesson.",
          "The low hoop is moved into Gail’s room for a faster flight.",
          "The cushion arrives before the charm first slides across her floor."
        ],
        "explanation": "Pages 1 and 20: The broom charm begins the visit and returns to rest beside Gail’s book. As its light fades, Gail remembers small steps and the hopeful word “yet.”"
      }
    }
  }
];
const positions:Record<ReadingLevel,number[]>={"A": [1, 3, 0, 2, 2, 0, 3, 1, 0, 2, 1, 3, 3, 1, 2, 0], "B": [2, 0, 1, 3, 1, 3, 2, 0, 3, 1, 0, 2, 0, 2, 3, 1], "C": [0, 2, 3, 1, 3, 1, 0, 2, 1, 3, 2, 0, 2, 0, 1, 3]};
export function witchQuestions(level:ReadingLevel):StoryQuestion[]{return witchQuizRows.map((row,i)=>{
 const track=row.tracks[level],answer=positions[level][i],choices=[...track.choices.slice(1)];
 choices.splice(answer,0,track.choices[0]);
 return {id:row.id,kind:'choice',prompt:track.prompt,imageAlt:'故事回顧插圖',options:choices.map(text=>({text})),answer:[answer],explanation:track.explanation};
});}
