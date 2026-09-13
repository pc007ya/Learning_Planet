const Ba = {
  kneeling: { image: "../shared-gail-v1/kneeling.png", label: "跪坐、伸手", facing: "right" },
  "seated-lifejacket": { image: "../shared-gail-v1/seated-lifejacket.png", label: "坐姿、穿救生衣指路", facing: "right" },
  surprised: { image: "../shared-gail-v1/surprised.png", label: "驚訝", facing: "right" },
  reaching: { image: "../shared-gail-v1/reaching.png", label: "伸手、轉紙", facing: "right" },
  "raised-hand": { image: "../shared-gail-v1/raised-hand.png", label: "抬手、掛畫", facing: "right" },
  standing: { image: "../shared-gail-v1/standing.png", label: "站立、招呼", facing: "right" },
  seated: { image: "../shared-gail-v1/seated.png", label: "坐著、傾聽", facing: "right" }
};
function j(t) {
  return Ba[t].image;
}
const xt = [
  ["Under the lid", "A little chest.|Gail lifts the lid.", "Gail finds a little chest.|She lifts the lid.|What is inside?", "A small wooden chest waits beside Gail’s bed.|She carefully lifts the lid and finds a brass bell tucked inside.", "一個小寶箱。|瑜瑜掀起箱蓋。", "瑜瑜找到小寶箱。|她掀起箱蓋。|裡面有什麼？", "床旁放著一個小木寶箱。|瑜瑜小心掀開箱蓋，發現裡面藏著一個黃銅鈴鐺。"],
  ["A chime in the mist", "A soft chime.|Mist comes out.", "Gail lifts the bell.|It makes a soft chime.|Mist rolls out of the chest.", "Gail lifts the bell and gives it a gentle shake.|A clear chime rings out, and silver mist rises around it, opening a way to a grassy hill.", "一聲輕響。|霧冒出來。", "瑜瑜拿起鈴鐺。|鈴鐺輕輕響。|霧從寶箱湧出。", "瑜瑜拿起鈴鐺，輕輕搖一下。|清亮的鈴聲響起，銀霧圍著鈴鐺升起，打開通往草地山丘的路。"],
  ["A floating friend", "A little cloud.|It can float.", "Gail sees a little cloud.|It can float above the grass.", "On the hill, Gail meets a small cloud floating above the grass.|Below it lies a careful spiral of orange and green leaves.", "一朵小雲。|牠會飄浮。", "瑜瑜看見小雲朵。|牠能飄浮在草地上。", "山丘上，瑜瑜遇見一朵飄浮在草地上方的小雲。|牠下面是用橘色和綠色葉片細心排好的螺旋。"],
  ["A breeze arrives", "A breeze comes.|The leaves move.", "A breeze crosses the hill.|The leaves begin to move.", "A breeze slips through the trees and across the hill.|The edges of the leaf spiral begin to lift from the ground.", "微風吹來。|葉片動了。", "微風吹過山丘。|葉片開始移動。", "微風吹過樹間，越過山丘。|葉片螺旋的邊緣開始離開地面。"],
  ["Scattered work", "The leaves scatter.|Oh, no!", "The leaves scatter across the grass.|The spiral is gone.", "A stronger gust scatters the leaves across the grass.|Cloud watches the pattern it worked so hard to make come apart.", "葉片散開了。|哎呀！", "葉片散落在草地上。|螺旋不見了。", "一陣較強的風吹得葉片散落草地。|小雲朵看著自己辛苦排好的圖案散掉了。"],
  ["Round and round", "Spin, spin!|The leaves spin.", "The leaves spin in the air.|Cloud tries to catch them.", "The loose leaves spin beyond Cloud’s reach.|The faster Cloud rushes after them, the harder it becomes to arrange anything.", "轉呀，轉呀！|葉片在旋轉。", "葉片在空中旋轉。|小雲朵試著接住。", "散開的葉片旋轉著，飄到小雲朵搆不到的地方。|牠越急著追趕，就越難把任何葉片排好。"],
  ["A clap of thunder", "Thunder!|Cloud is dark.", "Cloud turns dark.|A clap of thunder shakes the air.", "Cloud grows darker, and a clap of thunder rolls across the hill.|Gail steps back and gives her new friend some space.", "打雷了！|小雲朵變暗。", "小雲朵變暗。|一聲雷響震動空氣。", "小雲朵越來越暗，一聲雷響滾過山丘。|瑜瑜退後，留一點空間給新朋友。"],
  ["A loud rumble", "A rumble.|It is loud.", "The rumble is loud.|Gail waits nearby.", "Another loud rumble follows the first.|Gail stays nearby without shouting over it, waiting until Cloud can hear her.", "一陣隆隆聲。|聲音很大。", "隆隆聲很大。|瑜瑜在附近等。", "第一聲雷後又傳來響亮的隆隆聲。|瑜瑜留在附近，沒有提高聲音蓋過雷聲，而是等小雲朵能聽見她。"],
  ["Angry inside", "“I am angry!”|Gail stays.", "“I am angry!” says Cloud.|Gail stays with her friend.", "“I am angry!” Cloud says when the rumble fades.|Gail does not ask it to smile or pretend nothing happened.", "「我很生氣！」|瑜瑜留下來。", "「我很生氣！」小雲朵說。|瑜瑜陪著朋友。", "隆隆聲漸弱後，小雲朵說：「我很生氣！」|瑜瑜沒有要牠笑，也沒有要牠假裝沒事。"],
  ["Upset about the work", "“I am upset.”|“My work is gone.”", "“I am upset,” says Cloud.|“I worked hard on that spiral.”", "“I am upset because my work blew away,” Cloud explains.|Gail sits down to hear what the pattern meant to her friend.", "「我很難受。」|「我的作品不見了。」", "「我很難受，」小雲朵說。|「那個螺旋是我辛苦排的。」", "「我的作品被吹走，所以我很難受，」小雲朵解釋。|瑜瑜坐下，聽朋友說這個圖案對牠有什麼意義。"],
  ["Name the feeling", "Name it.|“Angry and upset.”", "Gail helps Cloud name it.|“Angry and upset,” says Cloud.", "Gail helps Cloud name the feelings without judging them.|“Angry about the wind, and upset about my work,” Cloud says.", "說出感受。|「生氣，也難受。」", "瑜瑜幫小雲朵說出感受。|「生氣，也難受，」小雲朵說。", "瑜瑜幫小雲朵說出感受，不去批評。|小雲朵說：「我對風很生氣，也為作品感到難受。」"],
  ["A small pause", "Take a pause.|We can wait.", "“Let’s take a pause,” says Gail.|The leaves can wait.", "Gail suggests a short pause before they do anything else.|They let the leaves rest where they landed and stop trying to chase every one.", "停一小下。|我們可以等。", "「我們停一小下，」瑜瑜說。|葉片可以等。", "瑜瑜提議，先停一小下，再做其他事。|她們讓葉片留在落下的位置，不再試著追趕每一片。"],
  ["Breathe together", "Breathe in.|Breathe out.", "Gail and Cloud breathe in.|Then they breathe out together.", "Gail takes an easy breath in and slowly lets it out.|Cloud tries with her, making a little puff that turns the pinwheel.", "吸氣。|吐氣。", "瑜瑜和小雲朵吸氣。|接著一起吐氣。", "瑜瑜輕鬆吸一口氣，再慢慢吐出。|小雲朵跟著試，輕輕吹出的氣讓紙風車轉動。"],
  ["A slow turn", "A slow turn.|In and out.", "The pinwheel makes a slow turn.|They try one more breath.", "They watch the pinwheel make a slow turn, then rest.|There is no race to feel better; they can take another easy breath when they are ready.", "慢慢轉一圈。|吸氣，吐氣。", "紙風車慢慢轉一圈。|她們再試著呼吸一次。", "她們看紙風車慢慢轉一圈，然後停下。|感覺好一點不是比賽；準備好時，再輕鬆呼吸一次就好。"],
  ["A little calmer", "A calm moment.|Not all better yet.", "Cloud has a calm moment.|It is still upset about the work.", "The rumble eases, and Cloud has a calm moment.|It still cares about the broken pattern, but now it has room to choose what to do.", "平靜的一刻。|還沒有完全好。", "小雲朵有了平靜的一刻。|牠仍為作品感到難受。", "隆隆聲減弱，小雲朵有了平靜的一刻。|牠仍在意散掉的圖案，但現在能想一想接下來要做什麼。"],
  ["Say what you need", "“I need help.”|“Please stay.”", "“I need help,” says Cloud.|“Will you stay with me?”", "Cloud tells Gail what it needs instead of trying to manage alone.|“Please stay and help me begin again,” it asks.", "「我需要幫忙。」|「請留下來。」", "「我需要幫忙，」小雲朵說。|「妳願意陪我嗎？」", "小雲朵把需要的幫助告訴瑜瑜，不再獨自硬撐。|牠問：「請留下來，幫我重新開始，好嗎？」"],
  ["Begin again", "We can try again.|One leaf, then two.", "They begin again.|Gail puts one leaf beside another.", "Together, they begin again with the leaves that landed nearby.|The new spiral does not have to match the old one exactly.", "我們可以再試一次。|一片，再一片。", "她們重新開始。|瑜瑜把一片葉子放在另一片旁。", "她們用落在附近的葉片，一起重新開始。|新的螺旋不必和舊的一模一樣。"],
  ["A gentle breeze", "A gentle breeze.|The spiral stays.", "Cloud makes a gentle breeze.|This time the spiral stays in place.", "Cloud tries a gentle breeze while Gail sets down the last leaf.|They choose a sheltered patch near the wall, so their new work can stay in place.", "一陣柔和的風。|螺旋留住了。", "小雲朵吹出柔和的風。|這次，螺旋留在原位。", "瑜瑜放下最後一片葉子時，小雲朵試著吹出柔和的風。|她們選了牆旁避風的位置，讓新作品能好好留著。"],
  ["Room for every feeling", "A soft shower.|We can begin again.", "A soft shower falls on the grass.|Cloud knows it can pause and ask for help.", "A soft shower settles the dust around their finished spiral.|Cloud knows strong feelings may return, and it can pause, name them, and ask for help again.", "一場輕柔的雨。|我們可以重新開始。", "輕柔的雨落在草地上。|小雲朵知道，自己可以停一下，再請人幫忙。", "輕柔的雨讓完成的螺旋旁揚塵沉下。|小雲朵知道，強烈的感受可能再來，而自己可以停一下、說出感受，再次請人幫忙。"],
  ["The quiet chime", "A quiet chime.|Gail is home.", "Gail is home again.|The quiet chime reminds her to pause.", "Back in her familiar room, Gail sets the bell beside the chest.|Its quiet chime reminds her that a pause can make space for the next small choice.", "一聲輕響。|瑜瑜回家了。", "瑜瑜又回到家。|輕輕的鈴聲提醒她停一下。", "回到熟悉的房間，瑜瑜把鈴鐺放在寶箱旁。|輕輕的鈴聲提醒她：停一下，能留出空間，做下一個小選擇。"]
], Sa = xt.map((t) => t[0]), Ea = xt.map((t) => ({ A: t[1].split("|"), B: t[2].split("|"), C: t[3].split("|") }));
function La(t, a) {
  return xt[t][{ A: 4, B: 5, C: 6 }[a]].split("|");
}
const Wa = "lid chime mist float breeze scatter spin thunder rumble loud angry upset name pause breathe slow calm gentle need again".split(" "), Ft = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: j("standing"), x: 24, y: 69, w: 25, h: 56 },
  cloud: { id: "cloud", word: "cloud", image: "cloud-calm.png", x: 75, y: 45, w: 35, h: 35 },
  chest: { id: "chest", word: "chest", image: "chest-clean.png", x: 56, y: 82, w: 25, h: 25 },
  lid: { id: "lid", word: "lid", image: "lid.png", x: 56, y: 70, w: 25, h: 16 },
  bell: { id: "bell", word: "chime", image: "bell.png", x: 56, y: 73, w: 10, h: 17 },
  pattern: { id: "pattern", word: "again", image: "pattern.png", x: 54, y: 85, w: 32, h: 19 },
  rotor: { id: "rotor", word: "spin", image: "rotor.png", x: 52, y: 66, w: 15, h: 22 }
};
for (let t = 0; t < 6; t++) Ft["leaf" + t] = { id: "leaf" + t, word: "leaf", image: "leaf.png", x: 40 + t * 7, y: 80 + t % 2 * 9, w: 8, h: 10 };
const Ia = { bedroom: { name: "瑜瑜的固定房間", caption: "A LITTLE SPACE TO BREATHE", alt: "熟悉的星空房間" }, hill: { name: "雲朵山丘", caption: "PAUSE. BREATHE. BEGIN AGAIN.", alt: "微風吹過石牆與柔和草地的山丘" } }, Ha = [["lid"], ["chime", "mist"], ["float"], ["breeze"], ["scatter"], ["spin"], ["thunder"], ["rumble", "loud"], ["angry"], ["upset"], ["name"], ["pause"], ["breathe"], ["slow"], ["calm"], ["need"], ["again"], ["gentle"], ["calm"], ["chime"]];
function At(t) {
  return Ea.map((a, e) => {
    let s = ["gail", "cloud", "pattern"];
    const o = {};
    (e < 2 || e === 19) && (s = ["gail", "chest", "lid", "bell"], o.gail = { image: j("kneeling"), x: 28, y: 78, w: 30, h: 37 }, e === 19 && (o.bell = { x: 76, y: 86, w: 10, h: 17 })), e >= 4 && e <= 16 && (s = ["gail", "cloud", ...Array.from({ length: 6 }, (i, n) => "leaf" + n)], (e === 4 || e === 16) && s.push("pattern")), e >= 6 && e <= 8 && (o.cloud = { image: "cloud-angry.png" }), e >= 9 && e <= 15 && (o.cloud = { image: "cloud-upset.png" }), e >= 9 && e <= 15 && (o.gail = { image: j("seated"), h: 36, y: 78, w: 29 }), (e === 6 || e === 7) && (o.gail = { image: j("surprised"), x: 18 }), (e === 12 || e === 13) && s.push("rotor"), e === 16 && (o.gail = { image: j("reaching"), x: 29, y: 76, w: 30, h: 41 });
    const r = e === 0 ? "lid" : e === 1 || e === 19 ? "bell" : e === 3 || e === 4 || e === 16 || e === 17 ? "pattern" : e === 5 ? "leaf0" : e === 12 || e === 13 ? "rotor" : "cloud";
    return { title: Sa[e], scene: e < 2 || e === 19 ? "bedroom" : "hill", lines: a[t], objects: s, placements: o, words: Ha[e], mission: { type: "tap", answer: r, prompt: ["Lift the lid.", "Listen to the chime.", "Find the floating friend.", "Watch the breeze.", "Watch the leaves scatter.", "Watch a leaf spin.", "Hear the thunder.", "Hear the rumble.", "Notice Cloud’s face.", "Stay and listen.", "Name the feeling.", "Take a pause.", "Breathe with the pinwheel.", "Watch a slow turn.", "Notice the quieter moment.", "Ask for what you need.", "Begin again together.", "Try a gentle breeze.", "Remember: you can ask for help.", "Remember the quiet chime."][e], hint: "點小星星，探索這一幕。" }, action: "explore" };
  });
}
function Nt(t) {
  return Object.fromEntries(At(t).map((a, e) => [e, { 0: a.objects.includes("cloud") ? [{ actor: "cloud", x: 75, y: 45, rotate: 0 }] : [] }]));
}
function ja(t) {
  const a = t === "A", s = [
    ["What does Gail lift?", "What does Gail lift to find the bell?", "lid", ["The lid", "The wall", "A tree", "A boat"], 0, "She lifts the lid of the chest."],
    ["What makes a chime?", "What makes the clear chime before the mist appears?", "bell", ["A leaf", "The bell", "A book", "A shoe"], 1, "The bell makes the chime."],
    ["What blows away?", "What does the breeze scatter across the hill?", "leaf", ["The cottage", "The wall", "The leaves", "Gail’s bed"], 2, "The breeze scatters the leaves."],
    ["What is loud?", "What grows loud when Cloud becomes angry?", "cloud-angry", ["The flowers", "The stones", "The book", "The thunder"], 3, "Cloud makes loud thunder."],
    ["Why is Cloud upset?", "Why is Cloud upset about the scattered leaves?", "pattern", ["Its work blew away.", "It wants a cake.", "Gail took its shoes.", "It lost a boat."], 0, "Cloud worked hard on its pattern."],
    ["What does Gail do?", "How does Gail respond when Cloud explains its feelings?", "cloud-upset", ["She laughs.", "She stays and listens.", "She tells it to smile.", "She leaves at once."], 1, "Gail stays without judging the feelings."],
    ["What can they try?", "What do they try after taking a pause?", "rotor", ["Shout louder", "Chase every leaf", "Breathe slowly", "Hide the bell"], 2, "They try an easy breath together."],
    ["What does Cloud need?", "What does Cloud ask Gail for?", "cloud-upset", ["A race", "A louder voice", "A bigger storm", "Help to begin again"], 3, "Cloud asks for help instead of managing alone."],
    ["Must it be the same?", "Must the new spiral match the old one exactly?", "pattern", ["No, it can be different.", "Yes, every leaf must match.", "They cannot try again.", "They must throw it away."], 0, "The new pattern may be different."],
    ["Can feelings come back?", "What can Cloud do if strong feelings return?", "cloud-calm", ["Pretend nothing happened", "Pause, name them, and ask for help", "Blame Gail", "Never speak again"], 1, "Feelings can return, and Cloud can use these steps again."]
  ].map((r, i) => ({ id: "cloud-" + i, kind: "choice", prompt: a ? r[0] : r[1], image: `images/story/cloud-v1/${r[2]}.png`, imageAlt: "小雲朵故事相關圖像", options: r[3].map((n) => ({ text: n })), answer: [r[4]], explanation: r[5] }));
  return ["Gail opens the chest.", "The leaves scatter in the breeze.", "Cloud is upset about its work.", "They breathe with the pinwheel.", "They make a new spiral.", "Gail is back in her room."].forEach((r, i) => {
    const n = ["They sail a boat.", "They bake a cake.", "They build a tower.", "They play in the snow."];
    n[i % 4] = r, s.push({ id: "cloud-picture-" + i, kind: "choice", prompt: a ? "Look. What happens?" : "Which event matches this picture?", image: `images/story/cloud-v1/quiz/scene-${i + 1}.jpg`, imageAlt: "小雲朵故事分鏡 " + (i + 1), options: n.map((l) => ({ text: l })), answer: [i % 4], explanation: r });
  }), s;
}
function qa(t, a, e) {
  let s = !1, o = !1, r;
  const i = /* @__PURE__ */ new Set(), n = [], l = /* @__PURE__ */ new Set(), d = matchMedia("(prefers-reduced-motion: reduce)").matches, c = (g) => t.querySelector(`[data-object="${g}"]`), w = Array.from({ length: 6 }, (g, v) => c("leaf" + v)).filter(Boolean), T = c("pattern"), L = c("bell"), H = c("lid");
  function B(g, v) {
    g && (g.style.visibility = v ? "visible" : "hidden", g.setAttribute("aria-hidden", String(!v)), g instanceof HTMLButtonElement && (g.disabled = !v));
  }
  function m(g, v, E, he = 0) {
    const te = g.animate(v, { duration: d ? 100 : E, delay: d ? 0 : he, fill: "forwards", easing: "ease-in-out" });
    return i.add(te), te;
  }
  function A(g, v, E) {
    const he = g.animate([{}, {}], { duration: v });
    i.add(he), he.onfinish = () => {
      s || E();
    };
  }
  function p() {
    l.forEach((g) => {
      try {
        g.stop();
      } catch {
      }
    }), l.clear(), i.forEach((g) => {
      g.onfinish = null, g.cancel();
    }), i.clear(), n.splice(0).forEach((g) => g.remove()), o = !1;
  }
  function y() {
    if (!(!e || s))
      return r ??= new AudioContext(), r.resume(), r;
  }
  function b() {
    const g = y();
    if (!g) return;
    const v = g.currentTime;
    for (const [E, he] of [[880, 0.035], [1320, 0.014], [1760, 8e-3]]) {
      const te = g.createOscillator(), Pe = g.createGain();
      te.type = "sine", te.frequency.value = E, Pe.gain.setValueAtTime(he, v), Pe.gain.exponentialRampToValueAtTime(1e-4, v + 1.3), te.connect(Pe).connect(g.destination), l.add(te), te.onended = () => l.delete(te), te.start(v), te.stop(v + 1.4);
    }
  }
  function C(g, v = !1) {
    const E = y();
    if (!E) return;
    const he = g === "wind" ? 2.2 : 1.4, te = E.createBuffer(1, E.sampleRate * he, E.sampleRate), Pe = te.getChannelData(0);
    for (let pt = 0; pt < Pe.length; pt++) Pe[pt] = Math.random() * 2 - 1;
    const He = E.createBufferSource(), dt = E.createBiquadFilter(), _e = E.createGain();
    He.buffer = te, dt.type = "lowpass", dt.frequency.value = g === "thunder" ? 190 : 650;
    const Xe = E.currentTime;
    _e.gain.setValueAtTime(0, Xe), _e.gain.linearRampToValueAtTime(v ? 0.012 : g === "thunder" ? 0.09 : 0.035, Xe + 0.16), _e.gain.exponentialRampToValueAtTime(1e-4, Xe + he), He.connect(dt).connect(_e).connect(E.destination), l.add(He), He.onended = () => l.delete(He), He.start(), He.stop(Xe + he);
  }
  function U() {
    if (L) {
      b(), m(L, [{ rotate: "-12deg" }, { rotate: "12deg", offset: 0.3 }, { rotate: "-8deg", offset: 0.6 }, { rotate: "0deg" }], 650);
      for (let g = 0; g < 3; g++) {
        const v = document.createElement("i");
        v.className = "cloud-chime-ring", L.append(v), n.push(v), m(v, [{ opacity: 0.8, scale: ".3" }, { opacity: 0, scale: "2.8" }], 1e3, g * 180);
      }
    }
  }
  function M() {
    if (!L) return;
    for (let v = 0; v < 10; v++) {
      const E = document.createElement("i");
      E.className = "cloud-mist", L.append(E), n.push(E), m(E, [{ opacity: 0, scale: ".2", translate: "0 0" }, { opacity: 0.85, offset: 0.35 }, { opacity: 0, scale: "5", translate: `${(v % 5 - 2) * 50}px ${-70 - Math.floor(v / 5) * 40}px` }], 2300, v * 90);
    }
    const g = document.createElement("img");
    g.src = "images/story/cloud-v1/hill.png", g.alt = "霧後的雲朵山丘", g.className = "cloud-arrival", t.append(g), n.push(g), m(g, [{ opacity: 0 }, { opacity: 1 }], 1e3, 1800);
  }
  function le() {
    if (o || !H || !L) return;
    p(), o = !0, B(L, !1);
    const g = m(H, [{ translate: "0 0", rotate: "0deg" }, { translate: "0 -65%", rotate: "-28deg" }], 650);
    g.onfinish = () => {
      if (s) return;
      B(L, !0);
      const v = m(L, [{ translate: "0 0" }, { translate: "0 -90%" }], 600);
      v.onfinish = () => {
        s || (a === 1 && (U(), M()), o = !1);
      };
    };
  }
  function ct() {
    const g = c("cloud");
    g && m(g, [{ translate: "0 0" }, { translate: "0 -7px", offset: 0.5 }, { translate: "0 0" }], 2400);
  }
  function x(g = !1) {
    o || (C("wind", g), a === 4 && T ? (B(T, !1), w.forEach((v) => B(v, !1)), A(T, 200, () => {
      w.forEach((v) => B(v, !0)), W(g);
    })) : W(g));
  }
  function W(g) {
    w.forEach((v, E) => {
      m(v, [{ translate: "0 0", rotate: "0deg" }, { translate: `${g ? 8 : 30 + E * 4}px ${g ? -3 : -35 - E * 4}px`, rotate: `${g ? 8 : 90 + E * 20}deg`, offset: 0.5 }, { translate: g ? "0 0" : `${14 + E * 4}px 0`, rotate: g ? "0deg" : `${20 + E * 15}deg` }], g ? 2700 : 1500, E * 55);
    }), !w.length && T && m(T, [{ rotate: "0deg" }, { rotate: g ? ".4deg" : "1deg", offset: 0.5 }, { rotate: "0deg" }], 1700);
  }
  function P() {
    if (o) return;
    o = !0, C("thunder");
    const g = c("cloud");
    if (g) {
      const v = m(g, [{ filter: "brightness(1)", translate: "0 0" }, { filter: "brightness(.8)", translate: "3px 0", offset: 0.3 }, { filter: "brightness(1)", translate: "0 0" }], 900);
      v.onfinish = () => {
        o = !1;
      };
    }
  }
  function ae() {
    if (o) return;
    o = !0;
    const g = c("cloud"), v = c("rotor")?.querySelector("img");
    if (g && m(g, [{ scale: "1" }, { scale: "1.05", offset: 0.45 }, { scale: "1" }], 3500), v) {
      const E = m(v, [{ rotate: "0deg" }, { rotate: "0deg", offset: 0.45 }, { rotate: "180deg" }], 3500);
      E.onfinish = () => {
        o = !1;
      };
    } else g && A(g, 3500, () => {
      o = !1;
    });
  }
  function Ke() {
    o || !T || (p(), o = !0, B(T, !1), w.forEach((g) => B(g, !0)), w.forEach((g, v) => {
      const E = T.offsetLeft - g.offsetLeft, he = T.offsetTop - g.offsetTop;
      m(g, [{ translate: "0 0" }, { translate: `${E + (v - 2) * 8}px ${he}px`, rotate: `${v * 40}deg` }], 850, v * 120);
    }), A(T, d ? 100 : 1600, () => {
      w.forEach((g) => B(g, !1)), A(T, 200, () => {
        B(T, !0), o = !1;
      });
    }));
  }
  function Ga() {
    C("wind", !0);
    const g = c("cloud");
    if (g)
      for (let v = 0; v < 18; v++) {
        const E = document.createElement("i");
        E.className = "cloud-drop", E.style.left = 12 + v * 17 % 76 + "%", g.append(E), n.push(E), m(E, [{ opacity: 0, translate: "0 0" }, { opacity: 0.7, offset: 0.2 }, { opacity: 0, translate: "0 100px" }], 1300, v * 65);
      }
  }
  a < 2 && B(L, !1), a === 4 && w.forEach((g) => B(g, !1)), a === 16 && B(T, !1);
  function Ht() {
    o || (p(), a < 2 ? le() : a === 19 ? U() : a === 3 || a === 4 || a === 5 ? x() : a === 6 || a === 7 ? P() : a === 12 || a === 13 ? ae() : a === 16 ? Ke() : a === 17 ? x(!0) : a === 18 ? Ga() : ct());
  }
  return { interact(g) {
    s || Ht();
  }, sentence(g, v) {
    g === (a === 0 ? 1 : 0) && !s && Ht();
  }, playback(g, v) {
    i.forEach((E) => {
      v || !g ? E.pause() : E.play();
    }), r && (v || !g ? r.suspend() : r.resume());
  }, sound(g) {
    e = g, !g && r && r.suspend();
  }, dispose() {
    s = !0, p(), r?.close();
  } };
}
const vt = [
  ["A quiet tile", "A tile is by the bed.|Gail looks closely.", "Gail finds a blue tile by her bed.|It is not shining yet.", "Beside her bed, Gail notices a small blue tile.|She bends closer to look at its smooth surface.", "床旁有一片磁磚。|瑜瑜仔細看。", "瑜瑜在床旁發現藍磁磚。|它還沒有發光。", "床旁，瑜瑜注意到一片藍色小磁磚。|她彎身靠近，看它光滑的表面。"],
  ["A doorway of light", "The tile shines!|A new way opens.", "The tile begins to shine.|Blue squares make a doorway.", "Only after Gail looks closely does the tile begin to glow.|Small blue squares rise from it and form a doorway to a pottery cottage.", "磁磚發光了！|一條新路打開了。", "磁磚開始發光。|藍色方塊排成一道門。", "瑜瑜靠近仔細看後，磁磚才開始發光。|藍色小方塊從磁磚升起，拼出通往陶藝小屋的門。"],
  ["Meet Bear", "Here is Bear.|An adult works here.", "Gail meets Bear in a pottery room.|An adult makes things from clay.", "Inside the cottage, Gail meets a young bear and an adult potter.|The potter shapes clay into useful things, then fires them in a kiln.", "這是小熊。|一位大人在這裡工作。", "瑜瑜在陶藝屋遇見小熊。|一位大人用陶土做東西。", "屋內，瑜瑜遇見小熊和一位成年陶藝師。|陶藝師把陶土捏成有用的物品，再送進窯裡燒製。"],
  ["On the shelf", "Look at the shelf.|Bear likes this one.", "A blue pot sits on the shelf.|Bear wants a closer look.", "A finished pot with a blue band rests on a low shelf.|Bear likes its pattern and wants to see the other side.", "看看架子。|小熊喜歡這一個。", "藍色陶盆放在架子上。|小熊想靠近看。", "低矮架子上放著一個有藍色飾帶的陶盆。|小熊喜歡它的花紋，想看看另一面。"],
  ["A little reach", "Bear starts to reach.|His arm is close.", "Bear reaches across the shelf.|His elbow comes close to the pot.", "Bear reaches across the low shelf for a small tool.|He does not notice how close his elbow is to the finished pot.", "小熊伸出手。|手臂靠得很近。", "小熊伸手越過架子。|手肘靠近陶盆。", "小熊伸手越過低架子拿小工具。|牠沒注意到手肘已經很靠近做好的陶盆。"],
  ["Bump and crack", "Bump!|Crack! It is broken.", "Bear bumps the pot.|It falls with a crack.|Now it is broken.", "Bear bumps the pot with his elbow, and it tips over the edge.|It hits the floor with a sharp crack and breaks into several pieces.", "碰！|喀啦！它破了。", "小熊碰倒陶盆。|它落下，喀啦一聲。|現在它破了。", "小熊的手肘碰到陶盆，它翻過架子邊緣。|陶盆落地，發出清脆的碎裂聲，裂成好幾片。"],
  ["Stand back", "A broken piece.|Stand back, Bear.", "A piece has a sharp edge.|Gail asks Bear to stand back.", "Gail sees that a broken piece has a sharp edge.|She asks Bear to step back and leave the fragments where they are.", "一塊碎片。|小熊，退後。", "一塊碎片邊緣很尖。|瑜瑜請小熊退後。", "瑜瑜看見一塊碎片的邊緣很尖。|她請小熊退後，把碎片留在原地。"],
  ["Hidden from view", "Bear wants to hide it.|He pulls a curtain.", "Bear pulls a low curtain across the mess.|He does not touch the pieces.", "While the potter is in the next room, Bear pulls a low curtain across the fallen pieces.|He does not pick them up, but he hopes hiding them will make the problem disappear.", "小熊想藏起來。|牠拉上簾子。", "小熊拉上低簾子，遮住凌亂的地方。|牠沒有碰碎片。", "陶藝師在隔壁時，小熊拉上低簾子，遮住掉落的碎片。|牠沒有撿起來，卻希望藏起來就能讓問題消失。"],
  ["A worried face", "Bear is worried.|He looks away.", "Bear looks worried.|He cannot enjoy the clay now.", "Bear keeps glancing at the curtain with a worried face.|Even the soft clay on the bench cannot hold his attention.", "小熊很擔心。|牠把頭轉開。", "小熊看起來很擔心。|牠現在無心玩陶土。", "小熊滿臉擔心，不停看向簾子。|連工作檯上柔軟的陶土都無法吸引牠的注意。"],
  ["Time to tell", "Gail sits nearby.|You can tell me.", "Gail sits beside Bear.|“You can tell me what happened.”", "Gail sits near Bear without pulling the curtain aside.|“You can tell me what happened,” she says, and gives him time to answer.", "瑜瑜坐在附近。|你可以告訴我。", "瑜瑜坐在小熊旁。|「你可以告訴我發生什麼事。」", "瑜瑜坐在小熊附近，沒有拉開簾子。|「你可以告訴我發生什麼事。」她說，留時間讓牠回答。"],
  ["The truth", "I bumped it.|That is the truth.", "“I bumped it,” says Bear.|He tells Gail the truth.", "Bear takes a breath and tells Gail the truth.|“I bumped the pot, and then I hid the pieces because I was frightened.”", "是我碰倒的。|這是事實。", "「是我碰倒的。」小熊說。|牠告訴瑜瑜實話。", "小熊吸口氣，告訴瑜瑜實話。|「我碰倒陶盆，然後因為害怕，把碎片藏了起來。」"],
  ["Tell the potter", "Tell the adult.|Gail comes too.", "Bear goes to tell the adult.|Gail walks beside him.", "Gail offers to stand beside Bear while he speaks to the potter.|Bear agrees; telling the person whose work was broken is the next step.", "告訴大人。|瑜瑜也一起去。", "小熊去告訴大人。|瑜瑜走在牠旁邊。", "瑜瑜願意陪小熊站在一起，向陶藝師說明。|小熊同意了；下一步，是告訴作品被弄壞的人。"],
  ["An honest answer", "I did it.|I will be honest.", "Bear gives an honest answer.|He says how the pot broke.", "The potter asks what happened, and Bear gives an honest answer.|He explains both the accident and his choice to hide it, without blaming anyone else.", "是我做的。|我要誠實。", "小熊誠實回答。|牠說出陶盆怎麼破的。", "陶藝師問發生什麼事，小熊誠實回答。|牠說明意外，也承認自己選擇藏起來，沒有怪別人。"],
  ["More than sorry", "I am sorry.|What can I do?", "“I am sorry,” says Bear.|“What can I do now?”", "“I am sorry I broke your work and hid it,” Bear says.|He asks what he can do next, knowing that an apology does not put the pot back together.", "對不起。|我能做什麼？", "「對不起。」小熊說。|「現在我能做什麼？」", "「對不起，我弄壞你的作品，還藏起來。」小熊說。|牠問接下來能做什麼，也知道道歉不會讓陶盆自動復原。"],
  ["Gloves first", "The adult has gloves.|We stay back.", "The potter puts on thick gloves.|The children stay back.", "The potter thanks Bear for telling her and puts on protective gloves.|She asks both children to keep clear while she handles the sharp pieces.", "大人戴著手套。|我們退後。", "陶藝師戴上厚手套。|孩子們站遠一點。", "陶藝師謝謝小熊願意說實話，並戴上防護手套。|她處理尖銳碎片時，請兩個孩子都站遠一點。"],
  ["Sweep it safely", "The adult will sweep.|Bear watches.", "The potter sweeps the small bits into a pan.|Bear waits at a safe distance.", "Using a brush and dustpan, the potter sweeps up the small bits.|Bear waits at a safe distance instead of trying to collect sharp pieces with his paws.", "大人來清掃。|小熊看著。", "陶藝師把小碎片掃進畚箕。|小熊在安全距離等待。", "陶藝師用刷子和畚箕掃起小碎屑。|小熊在安全距離等待，不用小手去撿尖銳碎片。"],
  ["A different repair", "Can we repair it?|A new plan!", "The potter cannot repair this pot for use.|She has a new plan for the smooth pieces.", "The potter explains that the cracked pot cannot safely be used as before.|After making selected edges smooth, she proposes a different kind of repair: a decorative picture.", "能修補嗎？|有新計畫了！", "陶藝師無法把陶盆修到能再使用。|她有個利用光滑碎片的新計畫。", "陶藝師解釋，破裂的陶盆無法像以前一樣安全使用。|她把選好的碎片邊緣磨平後，提議換一種修補方式：做裝飾圖畫。"],
  ["Piece by piece", "One smooth piece.|A mosaic!", "They arrange smooth pieces in a mosaic.|The adult adds the glue.", "With the edges already made safe, Bear and Gail arrange the pieces into a heart mosaic.|The potter applies the glue and helps them press each piece into place.", "一塊光滑碎片。|拼貼畫！", "他們把光滑碎片排成拼貼。|大人來上膠。", "邊緣已處理安全後，小熊和瑜瑜把碎片排成愛心拼貼。|陶藝師上膠，幫他們把每片壓在正確的位置。"],
  ["Keep the promise", "The mosaic is ready.|Bear tells the truth.", "The mosaic goes on the shelf.|Bear promises to tell the truth next time.", "When the glue is dry, they display the mosaic on the shelf.|Bear understands that being honest means telling what happened and helping with what comes next.", "拼貼做好了。|小熊說實話。", "拼貼放上架子。|小熊答應下次說實話。", "膠乾後，他們把拼貼展示在架上。|小熊明白，誠實就是說出發生的事，並幫忙處理接下來的事情。"],
  ["Home with a tile", "Gail is home.|The tile is quiet.", "Gail comes home with the blue tile.|She remembers Bear’s honest words.", "Back in her familiar room, Gail sets the blue tile beside her bed.|It reminds her that hiding a mistake cannot repair it, but an honest first word can begin the work.", "瑜瑜回家了。|磁磚安靜了。", "瑜瑜帶著藍磁磚回家。|她記得小熊誠實的話。", "回到熟悉的房間，瑜瑜把藍磁磚放在床旁。|它提醒她，隱藏錯誤無法修補，但誠實的第一句話能開啟改變。"]
], Oa = vt.map((t) => t[0]), Ra = vt.map((t) => Object.fromEntries(["A", "B", "C"].map((a, e) => [a, t[e + 1].split("|")])));
function Ma(t, a) {
  return vt[t][4 + { A: 0, B: 1, C: 2 }[a]].split("|");
}
const Pa = "bear tile clay shelf reach bump crack broken piece hide worried truth tell sorry honest adult gloves sweep repair mosaic".split(" "), za = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: j("standing"), x: 22, y: 69, w: 25, h: 57 },
  bear: { id: "bear", word: "bear", image: "bear-reaching.png", x: 77, y: 71, w: 27, h: 50 },
  adult: { id: "adult", word: "adult", image: "adult.png", x: 86, y: 56, w: 27, h: 73 },
  tile: { id: "tile", word: "tile", image: "tile.png", x: 52, y: 83, w: 16, h: 14 },
  shelf: { id: "shelf", word: "shelf", image: "shelf-clean.png", x: 50, y: 80, w: 34, h: 23 },
  pot: { id: "pot", word: "pot", image: "pot.png", x: 50, y: 59, w: 20, h: 22 },
  piece: { id: "piece", word: "piece", image: "pieces.png", x: 50, y: 89, w: 28, h: 17 },
  curtain: { id: "curtain", word: "hide", image: "curtain.png", x: 50, y: 81, w: 36, h: 33 },
  gloves: { id: "gloves", word: "gloves", image: "gloves.png", x: 52, y: 79, w: 19, h: 16 },
  clay: { id: "clay", word: "clay", image: "clay.png", x: 51, y: 80, w: 15, h: 13 },
  sweep: { id: "sweep", word: "sweep", image: "sweep.png", x: 57, y: 84, w: 25, h: 20 },
  repair: { id: "repair", word: "repair", image: "smooth.png", x: 48, y: 82, w: 26, h: 18 },
  mosaic: { id: "mosaic", word: "mosaic", image: "mosaic.png", x: 51, y: 55, w: 23, h: 27 }
}, Fa = { bedroom: { name: "瑜瑜的固定房間", caption: "AN HONEST BEGINNING", alt: "熟悉的星空房間" }, workshop: { name: "陶藝小屋", caption: "TELL THE TRUTH. TAKE THE NEXT STEP.", alt: "溫暖陶藝工作室與木地板" }, courtyard: { name: "陶藝屋庭院", caption: "PIECE BY PIECE", alt: "陶藝小屋外的石頭庭院" } }, Na = [["tile"], ["tile"], ["bear", "adult", "clay"], ["shelf"], ["reach"], ["bump", "crack", "broken"], ["piece"], ["hide"], ["worried"], ["tell"], ["truth"], ["adult", "tell"], ["honest"], ["sorry"], ["gloves"], ["sweep"], ["repair"], ["mosaic", "piece"], ["honest"], ["tile"]];
function Tt(t) {
  return Ra.map((a, e) => {
    let s = ["gail", "bear", "shelf", "pot"];
    const o = {};
    (e < 2 || e === 19) && (s = ["gail", "tile"], o.gail = { image: j("kneeling"), x: 30, y: 77, w: 30, h: 38 }), e === 2 && (s = ["gail", "bear", "adult", "clay"]), e === 5 && s.push("piece"), e >= 6 && e <= 13 && (s = ["gail", "bear", "piece"], o.bear = { image: "bear-worried.png" }, e >= 7 && e <= 10 && s.push("curtain"), e >= 11 && s.push("adult")), (e === 9 || e === 10) && (o.gail = { image: j("seated"), h: 39, y: 77, w: 30 }), e === 14 && (s = ["gail", "bear", "adult", "piece", "gloves"]), e === 15 && (s = ["gail", "bear", "adult", "piece", "sweep"]), e === 16 && (s = ["gail", "bear", "adult", "repair"]), e === 17 && (s = ["gail", "bear", "adult", "shelf", "repair", "mosaic"]), e === 18 && (s = ["gail", "bear", "adult", "shelf", "mosaic"]), s.includes("adult") && (o.bear = { ...o.bear, x: 65, y: 77, w: 23, h: 42 });
    const r = ["tile", "tile", "clay", "shelf", "bear", "pot", "piece", "curtain", "bear", "bear", "bear", "adult", "bear", "bear", "gloves", "sweep", "repair", "mosaic", "mosaic", "tile"][e];
    return { title: Oa[e], scene: e < 2 || e === 19 ? "bedroom" : e >= 16 ? "courtyard" : "workshop", lines: a[t], objects: s, placements: o, words: Na[e], mission: { type: "tap", answer: r, prompt: ["Look closely at the tile.", "Follow the blue light.", "Find the clay.", "Find the shelf.", "Watch Bear reach.", "Watch what happens.", "Stay back from the pieces.", "See what Bear hides.", "Notice Bear’s face.", "Give Bear time to tell.", "Listen to the truth.", "Tell the adult.", "Give an honest answer.", "Say sorry, then act.", "Find the protective gloves.", "Let the adult sweep.", "Look at the smooth edges.", "Build a mosaic.", "Remember the next step.", "Take the lesson home."][e], hint: "點小星星聽發音，探索故事。" }, action: "explore" };
  });
}
function $t(t) {
  return Object.fromEntries(Tt(t).map((a, e) => [e, { 0: a.objects.includes("bear") ? [{ actor: "bear", x: a.placements?.bear?.x || 77, y: a.placements?.bear?.y || 71, rotate: -1 }] : [] }]));
}
function $a(t) {
  const a = t === "A", s = [
    ["What shines?", "What begins to glow after Gail looks closely?", "tile", ["A tile", "A spoon", "A shoe", "A leaf"], 0, "The blue tile lights the way."],
    ["What does Bear bump?", "What does Bear accidentally knock from the shelf?", "pot", ["A chair", "A clay pot", "A pillow", "A bell"], 1, "His elbow bumps the clay pot."],
    ["What is broken?", "What happens when the pot hits the floor?", "pieces", ["It flies away.", "It grows.", "It breaks into pieces.", "It turns to gold."], 2, "The pot cracks on the floor."],
    ["Why does Bear hide it?", "Why does Bear pull the curtain across the pieces?", "bear-worried", ["He is decorating.", "He wants to sleep.", "He is cold.", "He is frightened to tell."], 3, "Bear is frightened about the accident."],
    ["What does Gail do?", "How does Gail help Bear begin to speak?", "bear-reaching", ["She waits and listens.", "She laughs at him.", "She hides the pieces too.", "She blames someone else."], 0, "Gail gives Bear time to tell what happened."],
    ["Who should Bear tell?", "Who needs to hear how the work was broken?", "adult", ["Nobody", "The potter", "A bird", "Only a toy"], 1, "Bear tells the potter whose work was broken."],
    ["What is honest?", "Which answer tells the truth about the accident?", "bear-worried", ["Nothing happened.", "Someone else did it.", "I bumped it and hid it.", "It vanished."], 2, "Bear explains his own actions."],
    ["Who handles sharp pieces?", "Who handles the sharp pieces with protection?", "gloves", ["Gail with bare hands", "Bear with bare paws", "Nobody ever", "The adult with gloves"], 3, "The adult uses protective gloves and tools."],
    ["What do they make?", "What do they make from the pieces after the edges are smooth?", "mosaic", ["A mosaic", "A new bird", "A cake", "A boat"], 0, "They arrange safe pieces into a heart mosaic."],
    ["What comes after sorry?", "What action follows Bear’s apology?", "smooth", ["Hide again", "Help with the next safe step", "Blame Gail", "Pretend it never happened"], 1, "Bear helps with safe repair after telling the truth."]
  ].map((r, i) => ({ id: "bear-" + i, kind: "choice", prompt: a ? r[0] : r[1], image: `images/story/bear-v1/${r[2]}.png`, imageAlt: "故事相關物件或角色", options: r[3].map((n) => ({ text: n })), answer: [r[4]], explanation: r[5] }));
  return ["Gail finds the blue tile.", "Bear admires the pot.", "The pot breaks on the floor.", "Bear hides the pieces.", "Bear tells the potter the truth.", "They display the mosaic."].forEach((r, i) => {
    const n = ["They sail away.", "They bake a cake.", "They chase a butterfly.", "They plant a seed."];
    n[i % 4] = r, s.push({ id: "bear-picture-" + i, kind: "choice", prompt: a ? "Look. What happens?" : "Which event matches this picture?", image: `images/story/bear-v1/quiz/scene-${i + 1}.jpg`, imageAlt: "小熊故事分鏡 " + (i + 1), options: n.map((l) => ({ text: l })), answer: [i % 4], explanation: r });
  }), s;
}
function Ya(t, a, e) {
  let s = !1;
  const o = /* @__PURE__ */ new Set(), r = [];
  let i, n = !1, l = !1;
  const d = matchMedia("(prefers-reduced-motion: reduce)").matches, c = (x) => t.querySelector(`[data-object="${x}"]`);
  function w(x, W, P, ae = 0) {
    const Ke = x.animate(W, { duration: d ? 100 : P, delay: d ? 0 : ae, fill: "forwards", easing: "ease-in-out" });
    return o.add(Ke), Ke;
  }
  function T() {
    o.forEach((x) => x.cancel()), o.clear(), r.splice(0).forEach((x) => x.remove());
  }
  function L() {
    if (!e || s) return;
    i ??= new AudioContext(), i.resume();
    const x = i.currentTime;
    for (const W of [940, 1530, 2280]) {
      const P = i.createOscillator(), ae = i.createGain();
      P.type = "triangle", P.frequency.setValueAtTime(W, x), P.frequency.exponentialRampToValueAtTime(W * 0.62, x + 0.16), ae.gain.setValueAtTime(0.035, x), ae.gain.exponentialRampToValueAtTime(1e-3, x + 0.22), P.connect(ae).connect(i.destination), P.start(x), P.stop(x + 0.25);
    }
  }
  function H() {
    T();
    const x = c("tile");
    if (x) {
      w(x, [{ filter: "none" }, { filter: "drop-shadow(0 0 22px #8be6e3)" }], 1e3, 700);
      for (let W = 0; W < 16; W++) {
        const P = document.createElement("i");
        P.className = "bear-light-tile", x.append(P), r.push(P), w(P, [{ opacity: 0, translate: "0 0" }, { opacity: 1, offset: 0.3 }, { opacity: 0, translate: `${(W % 4 - 1.5) * 45}px ${-80 - Math.floor(W / 4) * 38}px`, rotate: `${W * 15}deg` }], 2200, 1e3 + W * 45);
      }
      if (a === 1) {
        const W = document.createElement("img");
        W.className = "bear-arrival", W.src = "images/story/bear-v1/workshop.png", W.alt = "藍光連向陶藝屋", t.append(W), r.push(W), w(W, [{ opacity: 0 }, { opacity: 1 }], 1400, 2600);
      }
    }
  }
  function B(x, W) {
    x.style.visibility = W ? "visible" : "hidden", x.setAttribute("aria-hidden", String(!W)), x instanceof HTMLButtonElement && (x.disabled = !W);
  }
  function m(x, W, P) {
    B(x, !1), B(W, !1);
    const ae = x.animate([{}, {}], { duration: 200 });
    o.add(ae), ae.onfinish = () => {
      s || (B(W, !0), P());
    };
  }
  const A = c("piece"), p = c("repair"), y = c("mosaic");
  a === 5 && A && B(A, !1), a === 17 && y && B(y, !1);
  function b() {
    if (n) return;
    const x = c("pot");
    if (!x || !A) return;
    T(), n = !0, B(A, !1), B(x, !0);
    const W = A.offsetTop - x.offsetTop, P = w(x, [{ translate: "0 0", rotate: "0deg" }, { translate: "25px 0", rotate: "24deg", offset: 0.3 }, { translate: `35px ${W}px`, rotate: "90deg" }], 1200);
    P.onfinish = () => {
      if (s) return;
      L(), m(x, A, () => {
        n = !1;
      });
      const ae = c("bear")?.querySelector("img");
      ae && (ae.src = "images/story/bear-v1/bear-worried.png");
    };
  }
  function C() {
    const x = c("bear");
    x && w(x, [{ translate: "0 0" }, { translate: "-24px 0", offset: 0.5 }, { translate: "0 0" }], 1500);
  }
  function U() {
    const x = c("curtain");
    x && w(x, [{ translate: "30% 0", opacity: 0.25 }, { translate: "0 0", opacity: 1 }], 1100);
  }
  function M() {
    const x = c("sweep");
    x && w(x, [{ translate: "0 0", rotate: "0deg" }, { translate: "-50px 0", rotate: "-12deg", offset: 0.5 }, { translate: "0 0", rotate: "0deg" }], 1500), A && w(A, [{ opacity: 1 }, { opacity: 0 }], 700, 1200);
  }
  function le() {
    if (!y || l) return;
    if (!p) {
      w(y, [{ scale: ".95" }, { scale: "1" }], 500);
      return;
    }
    T(), l = !0, B(y, !1), B(p, !0);
    const x = w(p, [{ rotate: "0deg" }, { rotate: "-3deg", offset: 0.5 }, { rotate: "0deg" }], 700);
    x.onfinish = () => {
      s || m(p, y, () => {
        l = !1;
      });
    };
  }
  function ct(x) {
    if (!s) {
      if (a < 2) {
        H();
        return;
      }
      a === 4 && (x === "bear" || x === "reach") && C(), a === 5 && ["pot", "bump", "crack", "broken"].includes(x) && b(), (a === 7 || a === 8) && U(), x === "sweep" && M(), a >= 17 && ["mosaic", "piece", "repair"].includes(x) && le();
    }
  }
  return { interact: ct, sentence(x, W) {
    x === 0 && (a < 2 ? H() : a === 4 ? C() : a === 5 ? b() : a === 7 ? U() : a === 15 ? M() : a === 17 && le());
  }, playback(x, W) {
    o.forEach((P) => {
      W || !x ? P.pause() : P.play();
    }), i && (W || !x ? i.suspend() : i.resume());
  }, sound(x) {
    e = x, !x && i && i.suspend();
  }, dispose() {
    s = !0, T(), i?.close();
  } };
}
const Da = { star: [{ A: "瑜瑜睡不著。她望向窗外。她的小星星在哪裡？", B: "瑜瑜睡不著。她望向窗外。她的小星星在哪裡？", C: "瑜瑜睡不著。她望向窗外。她的小星星在哪裡？" }, { A: "一顆小星星飛進房間，落在床上。「小星星，你好！」瑜瑜說。", B: "一顆小星星飛進房間，落在床上。「小星星，你好！」瑜瑜說。", C: "一顆小星星飛進房間，落在床上。「小星星，你好！」瑜瑜說。" }, { A: "星星往上飛，飛出窗外。「等等我！」瑜瑜說。", B: "星星往上飛，飛出窗外。「等等我！」瑜瑜說。", C: "星星往上飛，飛出窗外。「等等我！」瑜瑜說。" }, { A: "瑜瑜走進花園。她看見一朵粉紅色的花。草地很柔軟。", B: "瑜瑜走進花園。她看見一朵粉紅色的花。草地很柔軟。", C: "瑜瑜走進花園。她看見一朵粉紅色的花。草地很柔軟。" }, { A: "一隻小貓坐在樹下。「你能幫我嗎？」瑜瑜問。小貓抬起頭。", B: "一隻小貓坐在樹下。「你能幫我嗎？」瑜瑜問。小貓抬起頭。", C: "一隻小貓坐在樹下。「你能幫我嗎？」瑜瑜問。小貓抬起頭。" }, { A: "瑜瑜看見一座橋。河水從橋下流過。她走過橋。", B: "瑜瑜看見一座橋。河水從橋下流過。她走過橋。", C: "瑜瑜看見一座橋。河水從橋下流過。她走過橋。" }, { A: "星星在高高的樹上。「幫幫我！」星星說。瑜瑜想到一個辦法。", B: "星星在高高的樹上。「幫幫我！」星星說。瑜瑜想到一個辦法。", C: "星星在高高的樹上。「幫幫我！」星星說。瑜瑜想到一個辦法。" }, { A: "瑜瑜找到一把梯子，放在樹旁。小貓爬上去幫忙。", B: "瑜瑜找到一把梯子，放在樹旁。小貓爬上去幫忙。", C: "瑜瑜找到一把梯子，放在樹旁。小貓爬上去幫忙。" }, { A: "小星星自由了！它飛回天空。「謝謝你們，我的朋友！」", B: "小星星自由了！它飛回天空。「謝謝你們，我的朋友！」", C: "小星星自由了！它飛回天空。「謝謝你們，我的朋友！」" }, { A: "瑜瑜穿過森林回家。螢火蟲照亮小路。她看見一塊路牌和一朵蘑菇。", B: "瑜瑜穿過森林回家。螢火蟲照亮小路。她看見一塊路牌和一朵蘑菇。", C: "瑜瑜穿過森林回家。螢火蟲照亮小路。她看見一塊路牌和一朵蘑菇。" }, { A: "瑜瑜在池塘邊停下。一隻黃色小鴨在水上游泳，旁邊漂著一朵粉紅色睡蓮。", B: "瑜瑜在池塘邊停下。一隻黃色小鴨在水上游泳，旁邊漂著一朵粉紅色睡蓮。", C: "瑜瑜在池塘邊停下。一隻黃色小鴨在水上游泳，旁邊漂著一朵粉紅色睡蓮。" }, { A: "瑜瑜走進果園。紅蘋果掛在樹上，樹下放著一個籃子。", B: "瑜瑜走進果園。紅蘋果掛在樹上，樹下放著一個籃子。", C: "瑜瑜走進果園。紅蘋果掛在樹上，樹下放著一個籃子。" }, { A: "瑜瑜看見一座高高的風車，有一扇藍色小門。路旁長著白花。", B: "瑜瑜看見一座高高的風車，有一扇藍色小門。路旁長著白花。", C: "瑜瑜看見一座高高的風車，有一扇藍色小門。路旁長著白花。" }, { A: "瑜瑜透過望遠鏡，看見月亮和她的小星星。星星在山丘上方閃耀。", B: "瑜瑜透過望遠鏡，看見月亮和她的小星星。星星在山丘上方閃耀。", C: "瑜瑜透過望遠鏡，看見月亮和她的小星星。星星在山丘上方閃耀。" }, { A: "瑜瑜回到家，把書放在桌上，爬上床。「晚安，小星星。」", B: "瑜瑜回到家，把書放在桌上，爬上床。「晚安，小星星。」", C: "瑜瑜回到家，把書放在桌上，爬上床。「晚安，小星星。」" }], red: [{ A: "瑜瑜有一件紅斗篷。她穿上它。今天她要去看奶奶。", B: "瑜瑜有一件紅斗篷。她穿上它。今天她要去看奶奶。", C: "瑜瑜有一件紅斗篷。她穿上它。今天她要去看奶奶。" }, { A: "媽媽煮了湯。瑜瑜把麵包放進袋子。這份午餐是要給奶奶的。", B: "媽媽煮了湯。瑜瑜把麵包放進袋子。這份午餐是要給奶奶的。", C: "媽媽煮了湯。瑜瑜把麵包放進袋子。這份午餐是要給奶奶的。" }, { A: "瑜瑜帶上手機。媽媽指給她看路線。「要走主要道路。」媽媽說。", B: "瑜瑜帶上手機。媽媽指給她看路線。「要走主要道路。」媽媽說。", C: "瑜瑜帶上手機。媽媽指給她看路線。「要走主要道路。」媽媽說。" }, { A: "瑜瑜在人行穿越道前停下，看看兩邊。現在可以過馬路了。", B: "瑜瑜在人行穿越道前停下，看看兩邊。現在可以過馬路了。", C: "瑜瑜在人行穿越道前停下，看看兩邊。現在可以過馬路了。" }, { A: "瑜瑜走進公園。小路旁長著高大的樹，鳥兒在她上方唱歌。", B: "瑜瑜走進公園。小路旁長著高大的樹，鳥兒在她上方唱歌。", C: "瑜瑜走進公園。小路旁長著高大的樹，鳥兒在她上方唱歌。" }, { A: "一隻狼坐在長椅上。牠的肚子發出很大的聲音。牠聞到了熱湯的香味。", B: "一隻狼坐在長椅上。牠的肚子發出很大的聲音。牠聞到了熱湯的香味。", C: "一隻狼坐在長椅上。牠的肚子發出很大的聲音。牠聞到了熱湯的香味。" }, { A: "「你好！你要去哪裡？」狼問。「去看我奶奶。」瑜瑜說。她繼續往前走。", B: "「你好！你要去哪裡？」狼問。「去看我奶奶。」瑜瑜說。她繼續往前走。", C: "「你好！你要去哪裡？」狼問。「去看我奶奶。」瑜瑜說。她繼續往前走。" }, { A: "狼指向一條小路。「走這邊吧！」牠說。瑜瑜看了看地圖。", B: "狼指向一條小路。「走這邊吧！」牠說。瑜瑜看了看地圖。", C: "狼指向一條小路。「走這邊吧！」牠說。瑜瑜看了看地圖。" }, { A: "「不用了，謝謝。」瑜瑜說。她繼續走主要道路。狼跑走了。", B: "「不用了，謝謝。」瑜瑜說。她繼續走主要道路。狼跑走了。", C: "「不用了，謝謝。」瑜瑜說。她繼續走主要道路。狼跑走了。" }, { A: "奶奶穿上外套，下樓拿信。她的門喀噠一聲關上了。", B: "奶奶穿上外套，下樓拿信。她的門喀噠一聲關上了。", C: "奶奶穿上外套，下樓拿信。她的門喀噠一聲關上了。" }, { A: "狼來到門前。門沒有完全關緊，牠悄悄溜了進去。", B: "狼來到門前。門沒有完全關緊，牠悄悄溜了進去。", C: "狼來到門前。門沒有完全關緊，牠悄悄溜了進去。" }, { A: "狼找到一頂帽子，戴上奶奶的眼鏡，然後躲進毯子裡。", B: "狼找到一頂帽子，戴上奶奶的眼鏡，然後躲進毯子裡。", C: "狼找到一頂帽子，戴上奶奶的眼鏡，然後躲進毯子裡。" }, { A: "瑜瑜來到奶奶住的大樓，查看門牌號碼。沒錯，就是這裡。", B: "瑜瑜來到奶奶住的大樓，查看門牌號碼。沒錯，就是這裡。", C: "瑜瑜來到奶奶住的大樓，查看門牌號碼。沒錯，就是這裡。" }, { A: "瑜瑜按了門鈴。「進來！」一個低沉的聲音喊道。瑜瑜留在敞開的門旁。", B: "瑜瑜按了門鈴。「進來！」一個低沉的聲音喊道。瑜瑜留在敞開的門旁。", C: "瑜瑜按了門鈴。「進來！」一個低沉的聲音喊道。瑜瑜留在敞開的門旁。" }, { A: "「奶奶，妳的耳朵好大！」瑜瑜說。「這樣才能聽得更清楚。」狼說。一隻耳朵露了出來。", B: "「奶奶，妳的耳朵好大！」瑜瑜說。「這樣才能聽得更清楚。」狼說。一隻耳朵露了出來。", C: "「奶奶，妳的耳朵好大！」瑜瑜說。「這樣才能聽得更清楚。」狼說。一隻耳朵露了出來。" }, { A: "「妳的眼睛好大！」瑜瑜說。「這樣才能看得更清楚。」狼說。牠的眼鏡滑了下來。", B: "「妳的眼睛好大！」瑜瑜說。「這樣才能看得更清楚。」狼說。牠的眼鏡滑了下來。", C: "「妳的眼睛好大！」瑜瑜說。「這樣才能看得更清楚。」狼說。牠的眼鏡滑了下來。" }, { A: "「妳的牙齒好大！」瑜瑜說。狼咧嘴一笑。瑜瑜往後退了一步。", B: "「妳的牙齒好大！」瑜瑜說。狼咧嘴一笑。瑜瑜往後退了一步。", C: "「妳的牙齒好大！」瑜瑜說。狼咧嘴一笑。瑜瑜往後退了一步。" }, { A: "瑜瑜看見一條毛茸茸的尾巴。奶奶沒有尾巴！瑜瑜離開門口。", B: "瑜瑜看見一條毛茸茸的尾巴。奶奶沒有尾巴！瑜瑜離開門口。", C: "瑜瑜看見一條毛茸茸的尾巴。奶奶沒有尾巴！瑜瑜離開門口。" }, { A: "瑜瑜打電話給奶奶。「妳在床上嗎？」她問。「沒有，我在樓下！」奶奶說。", B: "瑜瑜打電話給奶奶。「妳在床上嗎？」她問。「沒有，我在樓下！」奶奶說。", C: "瑜瑜打電話給奶奶。「妳在床上嗎？」她問。「沒有，我在樓下！」奶奶說。" }, { A: "瑜瑜在樓下找到奶奶。她們告訴大樓管理員，三個人一起上樓。", B: "瑜瑜在樓下找到奶奶。她們告訴大樓管理員，三個人一起上樓。", C: "瑜瑜在樓下找到奶奶。她們告訴大樓管理員，三個人一起上樓。" }, { A: "「狼，出來吧。」奶奶說。狼放下毯子，帽子掉到地上。", B: "「狼，出來吧。」奶奶說。狼放下毯子，帽子掉到地上。", C: "「狼，出來吧。」奶奶說。狼放下毯子，帽子掉到地上。" }, { A: "「我想吃妳的午餐。」狼說。「你必須先問。」瑜瑜說。狼把麵包還回來。", B: "「我想吃妳的午餐。」狼說。「你必須先問。」瑜瑜說。狼把麵包還回來。", C: "「我想吃妳的午餐。」狼說。「你必須先問。」瑜瑜說。狼把麵包還回來。" }, { A: "「對不起。」狼說。「我可以喝一點湯嗎？」奶奶多拿來一個碗。", B: "「對不起。」狼說。「我可以喝一點湯嗎？」奶奶多拿來一個碗。", C: "「對不起。」狼說。「我可以喝一點湯嗎？」奶奶多拿來一個碗。" }, { A: "瑜瑜、奶奶和狼一起吃午餐。瑜瑜打電話給媽媽。「我和奶奶在一起，我們都很好！」", B: "瑜瑜、奶奶和狼一起吃午餐。瑜瑜打電話給媽媽。「我和奶奶在一起，我們都很好！」", C: "瑜瑜、奶奶和狼一起吃午餐。瑜瑜打電話給媽媽。「我和奶奶在一起，我們都很好！」" }], cake: [{ A: "瑜瑜今天滿七歲了。「我的生日禮物是什麼？」她問。媽媽笑著說：「跟我來！」", B: "瑜瑜今天滿七歲了。「我的生日禮物是什麼？」她問。媽媽笑著說：「跟我來！」", C: "瑜瑜今天滿七歲了。「我的生日禮物是什麼？」她問。媽媽笑著說：「跟我來！」" }, { A: "「是玩具嗎？」瑜瑜問。「先等等！我們還有事要做。」媽媽說。瑜瑜拿起籃子。", B: "「是玩具嗎？」瑜瑜問。「先等等！我們還有事要做。」媽媽說。瑜瑜拿起籃子。", C: "「是玩具嗎？」瑜瑜問。「先等等！我們還有事要做。」媽媽說。瑜瑜拿起籃子。" }, { A: "瑜瑜和媽媽走到市場。攤位上五顏六色，瑜瑜用雙手提著籃子。", B: "瑜瑜和媽媽走到市場。攤位上五顏六色，瑜瑜用雙手提著籃子。", C: "瑜瑜和媽媽走到市場。攤位上五顏六色，瑜瑜用雙手提著籃子。" }, { A: "「首先，我們需要麵粉。」媽媽說。麵粉又白又細，瑜瑜放了一袋進籃子。", B: "「首先，我們需要麵粉。」媽媽說。麵粉又白又細，瑜瑜放了一袋進籃子。", C: "「首先，我們需要麵粉。」媽媽說。麵粉又白又細，瑜瑜放了一袋進籃子。" }, { A: "瑜瑜看見鮮紅的草莓。「聞起來好甜！」她說。她挑了一碗成熟的草莓。", B: "瑜瑜看見鮮紅的草莓。「聞起來好甜！」她說。她挑了一碗成熟的草莓。", C: "瑜瑜看見鮮紅的草莓。「聞起來好甜！」她說。她挑了一碗成熟的草莓。" }, { A: "接著，她們買牛奶和雞蛋。瑜瑜小心地拿著雞蛋。「我會保護好它們。」她說。", B: "接著，她們買牛奶和雞蛋。瑜瑜小心地拿著雞蛋。「我會保護好它們。」她說。", C: "接著，她們買牛奶和雞蛋。瑜瑜小心地拿著雞蛋。「我會保護好它們。」她說。" }, { A: "媽媽又拿了奶油、糖和鮮奶油。瑜瑜看看籃子。「我們要做什麼好吃的嗎？」", B: "媽媽又拿了奶油、糖和鮮奶油。瑜瑜看看籃子。「我們要做什麼好吃的嗎？」", C: "媽媽又拿了奶油、糖和鮮奶油。瑜瑜看看籃子。「我們要做什麼好吃的嗎？」" }, { A: "籃子變重了。媽媽和瑜瑜一起提。回到家，她們把東西一一放好。", B: "籃子變重了。媽媽和瑜瑜一起提。回到家，她們把東西一一放好。", C: "籃子變重了。媽媽和瑜瑜一起提。回到家，她們把東西一一放好。" }, { A: "「我們要做妳的生日蛋糕！」媽媽說。瑜瑜洗好手、繫上圍裙。「我可以幫忙！」她說。", B: "「我們要做妳的生日蛋糕！」媽媽說。瑜瑜洗好手、繫上圍裙。「我可以幫忙！」她說。", C: "「我們要做妳的生日蛋糕！」媽媽說。瑜瑜洗好手、繫上圍裙。「我可以幫忙！」她說。" }, { A: "媽媽拿量杯給瑜瑜看。瑜瑜裝滿麵粉，把杯口刮平。", B: "媽媽拿量杯給瑜瑜看。瑜瑜裝滿麵粉，把杯口刮平。", C: "媽媽拿量杯給瑜瑜看。瑜瑜裝滿麵粉，把杯口刮平。" }, { A: "噗！一些麵粉灑在桌上。瑜瑜有點擔心。「沒關係，我們可以清乾淨。」", B: "噗！一些麵粉灑在桌上。瑜瑜有點擔心。「沒關係，我們可以清乾淨。」", C: "噗！一些麵粉灑在桌上。瑜瑜有點擔心。「沒關係，我們可以清乾淨。」" }, { A: "瑜瑜把奶油和糖放進碗裡，攪拌到變得柔軟。「一圈又一圈。」媽媽說。", B: "瑜瑜把奶油和糖放進碗裡，攪拌到變得柔軟。「一圈又一圈。」媽媽說。", C: "瑜瑜把奶油和糖放進碗裡，攪拌到變得柔軟。「一圈又一圈。」媽媽說。" }, { A: "媽媽幫瑜瑜敲開雞蛋，一次加入一顆。蛋殼都沒有掉進碗裡！", B: "媽媽幫瑜瑜敲開雞蛋，一次加入一顆。蛋殼都沒有掉進碗裡！", C: "媽媽幫瑜瑜敲開雞蛋，一次加入一顆。蛋殼都沒有掉進碗裡！" }, { A: "瑜瑜倒入一點牛奶，媽媽加入量好的麵粉。混合物變得滑順綿密。", B: "瑜瑜倒入一點牛奶，媽媽加入量好的麵粉。混合物變得滑順綿密。", C: "瑜瑜倒入一點牛奶，媽媽加入量好的麵粉。混合物變得滑順綿密。" }, { A: "瑜瑜慢慢攪拌麵糊。「我的手臂好痠。」她說。媽媽幫了忙，瑜瑜又繼續試。", B: "瑜瑜慢慢攪拌麵糊。「我的手臂好痠。」她說。媽媽幫了忙，瑜瑜又繼續試。", C: "瑜瑜慢慢攪拌麵糊。「我的手臂好痠。」她說。媽媽幫了忙，瑜瑜又繼續試。" }, { A: "她們把麵糊倒進蛋糕模。瑜瑜用湯匙刮乾淨碗。「一點也不浪費！」她說。", B: "她們把麵糊倒進蛋糕模。瑜瑜用湯匙刮乾淨碗。「一點也不浪費！」她說。", C: "她們把麵糊倒進蛋糕模。瑜瑜用湯匙刮乾淨碗。「一點也不浪費！」她說。" }, { A: "媽媽把蛋糕模放進熱烤箱。瑜瑜站遠一點看。她們設定計時器，開始等待。", B: "媽媽把蛋糕模放進熱烤箱。瑜瑜站遠一點看。她們設定計時器，開始等待。", C: "媽媽把蛋糕模放進熱烤箱。瑜瑜站遠一點看。她們設定計時器，開始等待。" }, { A: "瑜瑜洗好草莓，用乾淨的布擦乾。媽媽把草莓切成小塊。", B: "瑜瑜洗好草莓，用乾淨的布擦乾。媽媽把草莓切成小塊。", C: "瑜瑜洗好草莓，用乾淨的布擦乾。媽媽把草莓切成小塊。" }, { A: "叮！廚房裡好香。媽媽拿出金黃色的蛋糕，放在架子上冷卻。", B: "叮！廚房裡好香。媽媽拿出金黃色的蛋糕，放在架子上冷卻。", C: "叮！廚房裡好香。媽媽拿出金黃色的蛋糕，放在架子上冷卻。" }, { A: "蛋糕涼了。瑜瑜在上面抹上柔軟的白色鮮奶油。「慢慢來，繞完整圈。」媽媽說。", B: "蛋糕涼了。瑜瑜在上面抹上柔軟的白色鮮奶油。「慢慢來，繞完整圈。」媽媽說。", C: "蛋糕涼了。瑜瑜在上面抹上柔軟的白色鮮奶油。「慢慢來，繞完整圈。」媽媽說。" }, { A: "瑜瑜把草莓放上鮮奶油。這裡一顆、那裡一顆，圍成一圈！她的蛋糕像一頂小皇冠。", B: "瑜瑜把草莓放上鮮奶油。這裡一顆、那裡一顆，圍成一圈！她的蛋糕像一頂小皇冠。", C: "瑜瑜把草莓放上鮮奶油。這裡一顆、那裡一顆，圍成一圈！她的蛋糕像一頂小皇冠。" }, { A: "瑜瑜把蛋糕放在桌上。媽媽給她一根數字七蠟燭，瑜瑜把它插在蛋糕上。", B: "瑜瑜把蛋糕放在桌上。媽媽給她一根數字七蠟燭，瑜瑜把它插在蛋糕上。", C: "瑜瑜把蛋糕放在桌上。媽媽給她一根數字七蠟燭，瑜瑜把它插在蛋糕上。" }, { A: "爸爸進來抱住瑜瑜，媽媽點亮蠟燭。大家一起唱：「生日快樂，瑜瑜！妳七歲了！」", B: "爸爸進來抱住瑜瑜，媽媽點亮蠟燭。大家一起唱：「生日快樂，瑜瑜！妳七歲了！」", C: "爸爸進來抱住瑜瑜，媽媽點亮蠟燭。大家一起唱：「生日快樂，瑜瑜！妳七歲了！」" }, { A: "瑜瑜許願，吹熄蠟燭。爸爸幫她切蛋糕。她和爸爸媽媽各分享一片。", B: "瑜瑜許願，吹熄蠟燭。爸爸幫她切蛋糕。她和爸爸媽媽各分享一片。", C: "瑜瑜許願，吹熄蠟燭。爸爸幫她切蛋糕。她和爸爸媽媽各分享一片。" }, { A: "「這是我最喜歡的禮物。」瑜瑜說。「我和你們一起做，我會珍惜每一口。」蛋糕裡滿是努力、用心和愛。", B: "「這是我最喜歡的禮物。」瑜瑜說。「我和你們一起做，我會珍惜每一口。」蛋糕裡滿是努力、用心和愛。", C: "「這是我最喜歡的禮物。」瑜瑜說。「我和你們一起做，我會珍惜每一口。」蛋糕裡滿是努力、用心和愛。" }], dragon: [{ A: "瑜瑜走進森林。森林明亮又安靜。", B: "瑜瑜沿著小路走進星光森林。小小的光點在樹間閃耀。", C: "一天下午，瑜瑜沿著陌生的小路，走進星光森林深處。金色的小光點在樹間閃爍，像一顆顆小星星。" }, { A: "瑜瑜聽見聲音。「誰在哭？」", B: "突然，瑜瑜聽見有人在哭。聲音從山谷傳來。", C: "突然，輕輕的哭聲從樹間飄來。瑜瑜停下來仔細聽，聲音似乎來自前方山谷。" }, { A: "洞穴裡有一隻小龍。牠叫皮普。", B: "瑜瑜在小洞穴裡找到一隻叫皮普的小龍。牠看起來很難過。", C: "在山崖下的小洞穴裡，瑜瑜發現一隻叫皮普的小龍。牠的翅膀緊緊收在背上。" }, { A: "「怎麼了？」瑜瑜問。「我不會飛。」皮普說。", B: "「發生什麼事？」瑜瑜問。皮普看著翅膀。「我再也不會飛了。」", C: "瑜瑜溫柔地問怎麼了。皮普低下頭，盯著自己的翅膀。「我再也不會飛了。」牠小聲說。" }, { A: "皮普以前會飛。牠喜歡天空。", B: "皮普以前常在山谷上方高飛。飛翔是牠最喜歡的事。", C: "皮普說，牠曾經很喜歡在山谷上方飛翔。牠會追著雲，在暖風中滑翔好幾個小時。" }, { A: "強風把皮普吹落。皮普害怕了。", B: "有一天，強風吹落了皮普。牠平安無事，卻開始害怕飛翔。", C: "一個風大的下午，一陣強風吹得皮普失去平衡。牠安全降落在草地上，但那次可怕的墜落一直留在心裡。" }, { A: "「我做不到。」皮普說。", B: "「我會再摔下來。」皮普說。「我做不到。」", C: "皮普搖搖頭。「如果再試，我可能會摔下來。我太害怕了。」" }, { A: "「張開翅膀。」瑜瑜說。「只要一點點。」", B: "瑜瑜沒有叫皮普飛。「我們先張開翅膀就好。」", C: "瑜瑜沒有叫皮普直接飛，而是提出更小的一步。「先從張開翅膀開始吧。」" }, { A: "皮普張開翅膀。翅膀微微發抖。", B: "皮普猶豫了一下，然後慢慢張開翅膀。", C: "皮普猶豫片刻。翅膀微微顫抖，但牠一點一點把它們張開。" }, { A: "皮普站在小石頭上。牠還是害怕。", B: "接著，皮普站在一塊小石頭上。石頭並不高。", C: "下一步，皮普爬上一塊低矮的石頭。它只比草地高一點，牠的心卻仍跳得很快。" }, { A: "皮普跳下來。牠安全落地。", B: "皮普從石頭上跳下來。翅膀張開，牠安全落地。", C: "皮普輕輕一跳。還沒多想，翅膀就張開了。片刻後，牠安全降落在柔軟的草地上。" }, { A: "「我做到了！」皮普說。", B: "皮普笑了。「我做到了！」「你完成第一步了。」瑜瑜說。", C: "皮普驚訝地看著翅膀。「我做到了！」瑜瑜笑著說：「對呀，而且這只是你的第一步。」" }, { A: "山丘更高。皮普又害怕了。", B: "牠們試一座更高的山丘。皮普又害怕了。", C: "不久，牠們來到稍高的山丘。皮普往下看，感覺熟悉的恐懼又回來了。" }, { A: "皮普摔倒了。「我做不到。」", B: "皮普試了，卻摔在草地上。「我就知道做不到。」", C: "皮普又試了一次，這回卻跌進草地。牠又尷尬又失望地說：「看吧？我就知道自己不會飛。」" }, { A: "「再試一次。」瑜瑜說。", B: "「摔一次，不代表你失敗了。」瑜瑜說。「我們再試一次。」", C: "瑜瑜坐在牠旁邊。「一次跌倒，不會決定整個故事。」她說。「我們可以再試一次。」" }, { A: "皮普再跳一次。風托起牠。", B: "皮普再試一次。柔和的風托起翅膀。牠滑翔了！", C: "皮普張開翅膀，再跳一次。柔和的風滑進翅膀下方。自從那次墜落後，牠第一次掠過草地滑翔。" }, { A: "一隻小鳥有危險。", B: "突然，一隻小鳥滑向鳥巢邊緣。牠需要幫忙。", C: "突然，一陣強風吹動最高的樹。一隻小鳥滑向巢邊，哭喊著求救。" }, { A: "「我很害怕。」皮普說。「但我可以試試。」", B: "皮普仍然害怕。「但我可以試試。」牠說。", C: "皮普的雙腿發抖。牠還是害怕，但這次沒有轉身離開。「我很害怕，」牠說，「但我可以試試。」" }, { A: "皮普飛起來了！牠救了小鳥。", B: "皮普跑起來、跳起來、張開翅膀。牠飛到鳥巢，幫助小鳥。", C: "皮普往前跑，跳向空中，張開翅膀。風托住了牠。牠飛向樹頂，輕輕把小鳥送回巢裡。" }, { A: "害怕嗎？沒關係。試試，再試試。張開翅膀，再次飛翔！", B: "你可以害怕，也仍然可以嘗試。張開翅膀，飛向天空！", C: "勇敢不代表恐懼消失。感受害怕，再試一次。張開翅膀，迎向天空。" }], princess: [{ A: "瑜瑜看見城堡。她聽見嘆氣聲。", B: "瑜瑜走向安靜的城堡，聽見輕輕的嘆氣聲。裡面是誰呢？", C: "瑜瑜沿著小路走向安靜的城堡。一聲輕嘆從敞開的窗戶傳來，她停下來聽。" }, { A: "艾拉是公主。她坐在窗旁。", B: "艾拉公主坐在窗旁，看孩子們在外面玩。瑜瑜走進房間。", C: "艾拉公主坐在高高的窗旁。外面的孩子一起玩耍。瑜瑜走進去，想知道艾拉為什麼看起來這麼安靜。" }, { A: "艾拉有禮物，但她很孤單。", B: "艾拉有很多禮物，有積木和玩具，但她覺得孤單。", C: "房間裡滿是禮物、積木和玩具，艾拉身旁卻沒有朋友。即使房間裝滿東西，仍可能覺得孤單。" }, { A: "瑜瑜想讓艾拉微笑。給艾拉一個驚喜！", B: "瑜瑜想讓艾拉微笑。「我有個驚喜！」她說，伸手拿積木。", C: "瑜瑜想幫忙，於是計畫一個驚喜。也許漂亮的高塔能讓艾拉微笑。她伸手拿起一盒積木。" }, { A: "瑜瑜堆積木。艾拉想幫忙。", B: "瑜瑜搭了一座高塔。「我能幫忙嗎？」艾拉問。「等一下！這是驚喜。」瑜瑜說。", C: "瑜瑜小心地用積木搭高塔。艾拉伸手問能不能幫忙。「等完成再看！」瑜瑜說，想保守驚喜的祕密。" }, { A: "積木倒了。艾拉撿起一塊。", B: "糟了！高塔倒了。瑜瑜低頭看積木。艾拉撿起一塊想幫忙。", C: "高塔搖晃著倒在地毯上。瑜瑜很失望。艾拉撿起一塊積木，希望能一起重新搭好。" }, { A: "瑜瑜吹泡泡。她試戴滑稽的帽子。", B: "瑜瑜又試了更多驚喜。她吹泡泡、放音樂，還戴上滑稽的帽子。", C: "瑜瑜試了泡泡、音樂和滑稽的紙帽。她忙著製造驚喜，忘了問艾拉的想法。房間變得吵鬧。" }, { A: "「請停下來。」艾拉說。瑜瑜停下來聽。", B: "艾拉摀住耳朵。「請停下來。」她說。瑜瑜停下，放下帽子。", C: "艾拉摀住耳朵，輕聲請瑜瑜停下。瑜瑜放下紙帽。房間終於安靜到可以好好聆聽。" }, { A: "瑜瑜坐在艾拉身旁。她聽朋友說話。", B: "瑜瑜坐在艾拉旁邊。「妳想做什麼？」她問。這次，她認真聽。", C: "瑜瑜坐到艾拉身旁，不再準備另一個驚喜。「妳想做什麼？」她問，然後耐心聽朋友說話。" }, { A: "「陪我玩。」艾拉說。「我們一起玩！」", B: "「我想要一個朋友。」艾拉說。「妳願意陪我玩嗎？」「好！我們一起玩。」瑜瑜說。", C: "艾拉指著窗外的孩子。「我不需要另一份禮物，我想要一個一起玩的朋友。」瑜瑜笑了。「我們一起選要做什麼吧。」" }, { A: "她們拿起籃子，走到市場。", B: "她們請艾拉的照顧者同行，帶著籃子去市場。三個人一起出門。", C: "得到照顧者同意後，艾拉選擇去市場。瑜瑜帶上籃子，照顧者陪她們一起走出城堡大門。" }, { A: "一顆柳橙滾走了。艾拉跑去幫忙。", B: "一顆柳橙從攤位滾走。艾拉跑去追，瑜瑜跟上去幫忙。", C: "市場裡，一顆柳橙從水果攤滾走。艾拉看見，跑了幾步去幫忙。瑜瑜跟上去，照顧者在附近等候。" }, { A: "她們撿起柳橙，放進籃子。", B: "她們一起撿柳橙。瑜瑜替艾拉拿著籃子。「謝謝！」攤販說。", C: "艾拉撿柳橙，瑜瑜拿籃子。她們把水果還給感激的攤販。一起做事，比只看驚喜更開心。" }, { A: "瑜瑜有紙風車。她們一起分享。", B: "瑜瑜給艾拉看紙風車。她們在空曠廣場輪流玩。分享真好玩。", C: "在空曠廣場，瑜瑜拿出紙風車。照顧者看著她們輪流奔跑。朋友分享時，紙翅膀也跟著旋轉。" }, { A: "下雨了。紙風車濕了。", B: "雨滴落下。她們趕快躲到遮雨棚下。濕紙風車不轉了。", C: "突然，雨點落在廣場。朋友和照顧者趕到遮雨棚下。濕透的紙風車再也轉不動。" }, { A: "「我能幫忙。」艾拉說。她們修好紙風車。", B: "「我們來修好它。」艾拉說。瑜瑜幫她拿著紙。她們讓紙風車又轉起來。", C: "艾拉想到修紙風車的辦法。瑜瑜扶住紙，艾拉小心地摺。她們一起把翅膀弄平，直到風車再次轉動。" }, { A: "艾拉做紙帽。帽子滑到瑜瑜鼻子上！", B: "艾拉替瑜瑜做滑稽的紙帽。帽子有點太大，滑下來蓋住鼻子。", C: "艾拉用多的一張紙替瑜瑜摺了一頂滑稽的帽子。瑜瑜戴上後，一個角滑下來，弄得鼻尖癢癢的。" }, { A: "「哈啾！」瑜瑜說。朋友一起笑了。", B: "「哈啾！」瑜瑜打了個小噴嚏。艾拉笑了，很快兩個人都笑了。", C: "瑜瑜打了個小噴嚏，歪帽子跳動了一下。艾拉笑了，瑜瑜也笑了。沒人計畫這個微笑，它來自一起玩的樂趣。" }, { A: "朋友玩積木。她們一起搭。", B: "回到城堡，更多朋友加入。大家分享積木，這次每個人都幫忙搭。", C: "回到城堡，兩個孩子加入地毯上的瑜瑜和艾拉。她們分享積木，一起搭小城堡。這次艾拉也放上一塊自己的積木。" }, { A: "艾拉替瑜瑜留位子。「朋友，來玩吧！」", B: "艾拉替瑜瑜拉開椅子。「明天還會來玩嗎？」肩並肩，笑著玩，小小友情照亮一天。", C: "艾拉拉開椅子，在身旁留一個位子。「妳明天還會來嗎？」她問新朋友。肩並肩，笑著玩，小小友情照亮一天。" }], wizard: [{ A: "瑜瑜遇見魔法師。他在門口揮手。", B: "瑜瑜拜訪一間小石屋。魔法師在門口揮手。「進來吧！」他說。", C: "瑜瑜沿著彎曲小路來到小石屋。友善的魔法師打開圓門，迎她進屋時，高帽子也跟著歪了一下。" }, { A: "「我等一下再做。」他說。瑜瑜看見一片凌亂。", B: "書和工具堆滿房間。「等一下再整理。」魔法師說，坐進椅子裡。", C: "書和工具散落工作室地板。「等一下再整理。」魔法師揮揮手說。似乎總有更開心的事可以做。" }, { A: "藥水冒泡。該攪拌了。", B: "鍋裡的藥水冒泡。瑜瑜指著湯匙。「該攪拌了嗎？」", C: "魔法師的小魔法鍋裡，藥水冒著泡。瑜瑜注意到旁邊的湯匙。「藥水需要攪拌嗎？」她問。" }, { A: "「等一下。」魔法師說。藥水開始燒焦。", B: "「等一下再攪拌。」魔法師說。藥水變成棕色，冒出一縷煙。", C: "魔法師看著圖畫書，遲遲不攪拌。藥水很快變成棕色，聞起來焦焦的。鍋裡升起一縷煙。" }, { A: "「停！」瑜瑜說。魔法師關掉火。", B: "「請關火！」瑜瑜喊。魔法師用魔杖關火。鍋子冷卻時，瑜瑜站遠一點。", C: "「請關火！」瑜瑜從安全距離喊。魔法師用魔杖停止加熱。他們不碰熱鍋，等它冷卻。" }, { A: "掃帚自己掃地。魔法師說：「等一下。」", B: "魔法掃帚掃地。它需要停止咒語。「等一下再停。」魔法師說。", C: "房間另一頭，魔法掃帚不停掃地。魔法師知道要唸停止咒語。「等一下。」他說，又轉頭看書。" }, { A: "掃帚太快了。好亂喔！", B: "掃帚在房裡飛快繞圈，紙張飛上天。現在更亂了！", C: "掃帚越掃越快，追著紙張轉圈。它沒有打掃，反而把紙撒滿地板。掃帚呼嘯而過，瑜瑜趕緊讓開。" }, { A: "魔法師說：「停！」掃帚不動了。", B: "「停！」魔法師揮著魔杖說。掃帚停下，他把它安全放在牆旁。", C: "魔法師終於指著魔杖唸停止咒語。掃帚輕輕落地。他把它靠牆放好，免得有人絆倒。" }, { A: "他們去花園。一朵花需要水。", B: "瑜瑜往花園看，花朵垂著頭。「它們需要水。」她說。", C: "瑜瑜和魔法師走進花園。乾土裡的花垂下頭。澆水壺就在附近，卻沒人用過。" }, { A: "他又說：「等一下。」「現在幫忙好嗎？」瑜瑜問。", B: "「等一下再澆。」他說。瑜瑜跪在垂頭的花旁。「現在幫它好嗎？」", C: "魔法師又想說等一下再澆花。瑜瑜指著身旁垂頭的花，輕聲問：「現在先幫這一朵，好嗎？」" }, { A: "「事情太多了！」瑜瑜有張清單。", B: "魔法師看著所有工作。「事情太多了！」他嘆氣。瑜瑜找紙做小清單。", C: "魔法師想著藥水、紙張和花。未完成的工作太多，不知道先選哪個。瑜瑜拿來一張紙。" }, { A: "「一小步。」瑜瑜說。「先裝滿水壺。」", B: "「我們可以先做一小步。」瑜瑜說。他們在清單畫水壺。「先把澆水壺裝滿。」", C: "「不用一次做完所有事。」瑜瑜解釋。他們在清單畫了三張簡單小圖。第一小步是裝滿澆水壺。" }, { A: "他們現在開始。水流進壺裡。", B: "魔法師拿起水壺，瑜瑜幫忙裝水。他們開始了！", C: "魔法師拿起空壺，不再說等一下。瑜瑜在花園水龍頭旁幫他裝水。工作開始了，第一步已經感覺做得來。" }, { A: "接著澆一朵花。他們完成一件小事。", B: "接著，他們先澆一朵花，再澆其他花。做完後在清單上畫記號。", C: "接著，他們輕輕澆一朵，再澆下一朵。很快，整個小花圃都有足夠的水。他們在清單勾掉第一項工作。" }, { A: "一本書放上架。瑜瑜幫忙放下一本。", B: "他們回到凌亂的房間。魔法師把一本書放上架，瑜瑜幫忙放下一本。", C: "回到屋內，他們只選房間的一個角落整理。魔法師把書放上架，瑜瑜拿來下一本。一個小行動讓下一個行動更容易。" }, { A: "冷卻的鍋乾淨了。魔法師現在就攪拌。", B: "魔法師洗好冷鍋，做新藥水並攪拌。這次他守在旁邊。", C: "鍋子冷卻後，魔法師洗乾淨，重新做藥水。他守在鍋旁，仔細攪拌觀察。瑜瑜在安全距離看著藥水變成漂亮的綠色。" }, { A: "掃帚慢慢動。魔法師準時讓它停下。", B: "魔法師讓掃帚掃一個角落，然後唸停止咒語。地板乾淨又平靜。", C: "魔法師只讓掃帚掃一個小角落。一掃完就唸停止咒語。這回紙張整齊留在架上。" }, { A: "花園很明亮。魔法師很自豪。", B: "那天下午，花朵亮麗，工作室也整齊了。魔法師為自己的努力自豪。", C: "當天下午，澆過水的花抬起頭。工作室整齊，新藥水也好了。魔法師很自豪，因為他一步一步做到了。" }, { A: "他又看見一本書。「我現在就做！」", B: "魔法師注意到地上的一本書。「我現在就收好。」他說。看他自己開始，瑜瑜笑了。", C: "瑜瑜要離開時，魔法師又看見地上一本書。這次不用別人提醒。「我現在就收好。」他說，立刻動手。" }, { A: "「先開始一小步。」瑜瑜揮手再見。", B: "「先開始一小步。」魔法師說。瑜瑜在門口揮手再見。小小開始能走很遠。", C: "魔法師在門口謝謝瑜瑜。他學會了：開始比等待完美時機更重要。今天的一小步，能讓明天更輕鬆。" }], giant: [{ A: "雨落在村莊。瑜瑜看見巨人。", B: "雨滴落在村莊小路。瑜瑜看見屋旁的巨人，他害羞地揮手。", C: "瑜瑜抵達村莊廣場時開始下雨。小屋旁站著溫柔的巨人。他用巨大的手，害羞地向她揮手。" }, { A: "他的傘很小。肩膀濕了。", B: "巨人拿著黃色小傘。它遮住頭髮，卻遮不到肩膀。滴答！袖子濕了。", C: "巨人把黃色小傘舉到頭上。它保護頭髮，雨卻滴在雙肩。適合瑜瑜的傘，對他太小了。" }, { A: "「來我傘下！」瑜瑜想幫忙。", B: "「來我傘下！」瑜瑜說，把紅傘舉得高高的，還是遮不住巨人。", C: "瑜瑜提議分享紅傘。她伸高手臂，卻搆不到巨人的頭。她得想別的辦法幫新朋友。" }, { A: "他們找到屋頂，不會淋濕了。", B: "瑜瑜指向高高的工作坊屋頂。他們躲到下面。「在這裡想辦法吧。」她說。", C: "瑜瑜看見一間屋頂高得能容下巨人的工作坊。他們先躲進去再計畫。不淋雨，就能安心想辦法。" }, { A: "瑜瑜有主意了。「一起合作！」", B: "瑜瑜看著小傘。「把很多傘接起來呢？」巨人對她的主意笑了。", C: "瑜瑜注意到門邊兩把傘互相重疊。「能把很多小傘接成大傘棚嗎？」巨人笑了，準備試試。" }, { A: "朋友帶來雨傘。他們願意分享。", B: "瑜瑜請朋友幫忙。男孩帶來藍傘。「我可以分享！」他說。", C: "瑜瑜向村裡孩子解釋問題。男孩拿出藍傘，呼喚朋友。很快，更多人帶著願意分享的東西來了。" }, { A: "他們數顏色。紅、黃、藍！", B: "他們數著鮮豔的傘。紅黃藍排成快樂的一列。需要夠多傘才能遮住寬肩膀。", C: "他們數傘，按顏色分類。紅黃藍能組成彩虹圖案。瑜瑜確認數量足夠做寬大的遮棚。" }, { A: "巨人扶木桿。瑜瑜綁繩子。", B: "巨人扶長木桿。瑜瑜和朋友準備繩子。每人都有工作。", C: "巨人能穩穩扶住重木桿。瑜瑜和朋友能碰到小零件，把它們綁好。他們分配適合各自能力的工作。" }, { A: "他們接兩把傘，綁個結。", B: "瑜瑜用繩子連傘柄，朋友幫忙綁牢。巨人扶住木桿。", C: "在屋頂下，瑜瑜和朋友綁起兩個傘柄。他們輕拉確認繩結牢固。巨人扶穩木桿，讓大家作業。" }, { A: "他們舉起傘。有個縫隙。", B: "他們舉起第一個小棚，傘間仍有縫。「雨會進來。」瑜瑜說。", C: "幫手舉起接好的傘檢查。瑜瑜發現傘緣沒接上的縫隙。如果不補好，雨會漏進來。" }, { A: "他們補好縫。一邊疊上另一邊。", B: "他們把傘靠近，一邊疊住下一邊。縫隙消失了。", C: "他們把傘緣重疊，不只是並排。瑜瑜檢查中間，朋友檢查兩側。傘與傘之間不再有空隙。" }, { A: "風吹來。他們放低木桿。", B: "一陣風吹動新棚。「慢慢放低！」瑜瑜喊。大家一起放下木桿。", C: "舉傘時，一陣風吹來。瑜瑜請大家一起慢慢放低木桿，回到屋頂下加固骨架。" }, { A: "他們做牢固的骨架。巨人幫忙。", B: "他們在木桿加上橫木。巨人扶著，其他人綁好。骨架變牢固。", C: "他們加上木橫桿，支撐寬傘棚。巨人緊緊扶住，幫手綁牢繩子。更強的骨架能分散傘的重量。" }, { A: "他們拉繩，檢查每個結。", B: "瑜瑜一個接一個檢查繩結。朋友輕輕拉繩，這回沒有滑動。", C: "再次舉起前，他們檢查每個繩結和連接處。瑜瑜扶一端，朋友輕拉。繩子很牢，骨架不再搖晃。" }, { A: "「一、二、三！」一起舉！", B: "大家準備好。「一、二、三！」瑜瑜數著，大家一起舉起彩虹傘。", C: "幫手等所有人準備好。瑜瑜數到時，大家同時舉起。接好的雨傘平穩升到巨人頭上。" }, { A: "巨人乾爽了！他在傘下微笑。", B: "彩虹傘遮住雙肩。巨人抬頭微笑，今天第一次不再淋濕。", C: "巨人走到寬彩虹傘下。這次肩膀和頭都遮住了。雨沿傘緣流走，他開心微笑。" }, { A: "「來這裡！」有地方一起躲。", B: "巨人看到雨裡的朋友。「來這裡！」他喊。傘下有空間分享。", C: "一位晚到的幫手袖子濕了。巨人邀她到寬傘下。原本為一個人想的辦法，現在保護了好幾位朋友。" }, { A: "他們慢慢走，一起走。", B: "他們慢慢走過村莊草地。巨人肩扛骨架，朋友靠近躲在棚下。", C: "巨人把橫木扛在肩上，穿過頭後方。他小步慢走，讓大家跟得上。他們留意小路，一起走在棚下。" }, { A: "太陽出來了。大家很自豪。", B: "雨停、太陽出來。他們安全放下傘，大家為成果自豪。", C: "雨停後，陽光照亮村莊。他們一起放下傘，欣賞成果。每位幫手都為自己的付出自豪。" }, { A: "小東西能變成大東西。一起就能幫忙！", B: "「我的小傘自己做不到。」瑜瑜說。「但一起就做成了大東西！」巨人謝謝每個幫手。", C: "巨人謝謝每個人，包括扶繩與分享雨傘的人。沒人能獨自做出大傘棚。透過聆聽與合作，他們為所有人騰出空間。" }], fox: [{ A: "瑜瑜看見一滴顏料。它是金色的。", B: "瑜瑜打開書，一滴金色顏料在旁邊發光。", C: "睡前，瑜瑜在床邊打開畫冊。地板上，一滴金色顏料發亮，好像要她跟著走。" }, { A: "看！一道門！瑜瑜走進去。", B: "顏料畫出一道門。瑜瑜走了進去。", C: "金色顏料爬上牆，畫出發光的門。瑜瑜穿著星星睡衣，跨進去看看另一邊。" }, { A: "這裡有樹，也有狐狸。", B: "瑜瑜走向大樹。狐狸在樹裡有個房間。", C: "彎曲小路帶瑜瑜來到空心樹。小狐狸的房間裡裝滿紙、顏料和畫筆。" }, { A: "狐狸拿畫筆。紙是空白的。", B: "狐狸拿著畫筆，看著白紙，遲遲不開始。", C: "狐狸把畫筆停在白紙上方。牠想畫漂亮的東西，卻怕出錯。畫筆一直停在半空。" }, { A: "派對快到了。狐狸要畫畫。", B: "快有派對了，狐狸要畫大圖。牠想畫得剛剛好。", C: "森林朋友要辦派對，狐狸答應畫海報。牠看著桌上方彩旗。要是畫得不夠好呢？" }, { A: "狐狸畫一條線，然後停下。", B: "狐狸畫了一小條線，停下來看。「畫錯了嗎？」牠問。", C: "狐狸終於畫了一條短藍線。末端有點彎，牠停下來。「這不是我想要的樣子。」牠說。" }, { A: "狐狸很難過。牠不畫了。", B: "狐狸擦掉線，把紙揉成球。牠很難過。", C: "狐狸擦掉線，把紙揉皺。桌邊越來越多紙球，海報卻仍沒完成。牠嘆氣，放下畫筆。" }, { A: "瑜瑜坐下。「試一個點。」", B: "瑜瑜坐在狐狸旁。「試一個點就好。」她說。「一個小點。」", C: "瑜瑜安靜坐在新朋友旁。「不用一次畫完整張。」她說。「先試一個小點，好嗎？」" }, { A: "啊！杯子倒了！藍顏料灑出來。", B: "狐狸移動手臂，碰倒杯子。藍顏料灑在紙上。", C: "狐狸伸手拿畫筆時，不小心碰到顏料杯。杯子傾倒，藍顏料在紙上散開。兩位朋友驚訝地退開。" }, { A: "「畫錯了！」狐狸說，低下頭。", B: "「畫錯了！」狐狸看著藍顏料說。「我的畫很糟。」", C: "狐狸盯著大片藍色。「現在毀了。」牠低聲說，又想丟掉這張紙。派對海報似乎更難完成了。" }, { A: "瑜瑜等著。狐狸抬頭。", B: "瑜瑜陪狐狸等。「再看一次吧。」她說。狐狸抬頭。", C: "瑜瑜不催狐狸，也不叫牠別難過。她陪牠等到抬頭，輕聲問：「再看一次，好嗎？」" }, { A: "瑜瑜轉動紙。「一條河！」", B: "瑜瑜轉動紙。藍色痕跡像河流。狐狸看一看。", C: "瑜瑜小心轉紙，讓他們從另一側看。長長的藍色痕跡像彎曲的河。狐狸湊近，以前沒注意到呢。" }, { A: "瑜瑜加上黃色。圓點變成花。", B: "瑜瑜加上黃點。「河邊的花。」她說，然後換狐狸畫。", C: "瑜瑜在藍河旁畫黃點。「它們可以是花。」她說，然後移開手，留地方讓狐狸加自己的想法。" }, { A: "狐狸畫花莖。牠笑了。", B: "狐狸加上綠花莖，再畫更多。現在花能長大了。", C: "狐狸沾綠顏料，在黃花下加花莖，再加一根。牠微笑了，今天第一次想繼續畫。" }, { A: "一條線彎了。狐狸加片葉子。", B: "一條綠線彎了。狐狸加片葉。「可以變藤蔓！」", C: "一條綠線比狐狸原先計畫更彎。這次牠不擦掉，而是在彎曲處加葉，變成攀爬藤蔓。" }, { A: "「蝴蝶！」狐狸說，畫出翅膀。", B: "狐狸看到小顏料印。「蝴蝶！」牠說，畫了兩片翅膀。", C: "狐狸注意到花邊的小橘點。「我知道能變什麼！」牠加兩片亮翅膀。自己的主意變成蝴蝶，牠又畫了兩隻。" }, { A: "朋友進來。「一起用我的顏料！」", B: "兔子和熊進來。狐狸分享顏料，大家幫忙畫。", C: "兔子和熊來看海報進度。狐狸沒有藏畫，而是邀請他們分享顏料。大家加小細節，也為彼此留空間。" }, { A: "他們掛起畫。狐狸很自豪。", B: "大家把畫掛外面，都笑了。狐狸為成果自豪。", C: "朋友一起把完成的海報掛在樹屋外。狐狸仍看得到藍色潑痕，但現在它是漂亮的河。大家堅持並一起完成，讓牠自豪。" }, { A: "新紙，新線。狐狸要開始。", B: "狐狸拿新紙，畫一條線，準備再開始。", C: "回到桌旁，狐狸拿起新紙。牠不等完美點子才畫第一條線。牠知道可以邊開始、邊看、邊試別的方法。" }, { A: "瑜瑜回家，畫一條線。", B: "瑜瑜回到床上，書裡有小花。她畫線，笑了。", C: "回到臥室，瑜瑜在畫冊找到一朵小花。她在旁邊畫彎線，想它會變什麼。一幅新畫，能從一次小嘗試開始。" }], pirate: [{ A: "瑜瑜看見船。它是金色的。", B: "金紙船在床邊發光。瑜瑜伸手碰它。", C: "床旁，瑜瑜找到金紙摺的小船。柔和的光讓她好奇，伸手想看清楚。" }, { A: "金煙升起。瑜瑜走進去。", B: "金煙從小船升起，打開通往海邊的路。瑜瑜走進光裡。", C: "金煙從小紙船捲起，在房間飄散。透過亮霧，瑜瑜看見陽光海港。她穿星星睡衣，走進光裡。" }, { A: "這裡是碼頭。海鷗叫著。", B: "瑜瑜站在木碼頭。海鷗在柱上叫，大海明亮湛藍。", C: "瑜瑜來到湛藍海水上的木碼頭。附近柱子的海鷗叫著，像歡迎她。小浪拍著腳下木頭。" }, { A: "這裡有海盜。他有寶箱。", B: "小海盜打開寶箱。裡面有繩子和望遠鏡，旁邊放著槳。", C: "小海盜自豪地打開木寶箱。裡面有一捲繩和黃銅望遠鏡，箱蓋旁放著槳。他自認已有冒險需要的一切。" }, { A: "「我的！」海盜說。他全抱著。", B: "「我的！」海盜說。他抱住所有工具，不肯分享。", C: "「我的！全是我的！」海盜把工具抱進懷裡。他擔心分享後拿不回來，便緊抱繩、槳和望遠鏡。" }, { A: "兩位朋友來了。「能幫忙嗎？」", B: "兩位朋友來碼頭想幫忙。海盜搖頭。", C: "兩位朋友提議一起航向閃亮海灣。他們願意幫拿工具，海盜卻搖頭。「我自己就能做。」他說。" }, { A: "槳滑了，繩掉了。", B: "海盜拿太多。槳滑、繩掉。他需要幫忙。", C: "海盜一邊腋下夾望遠鏡，一邊想舉槳。繩滑落碼頭，他差點抓不住。瑜瑜在旁等，準備幫他放下東西。" }, { A: "船得等。一個人做不了全部。", B: "船還綁在碼頭。海盜無法做每件事。「怎麼辦呢？」瑜瑜問。", C: "船仍安全綁在碼頭，海盜看著所有工作。他無法同時划船、看路和控帆。「能讓大家一起幫忙嗎？」瑜瑜問。" }, { A: "「可以分享。」「可以輪流。」", B: "「我們能分享工具。」瑜瑜說。「你也能輪流用。」海盜想一想。", C: "「分享不代表把東西永遠送走。」瑜瑜解釋。「我們可以小心用、輪流用。」海盜看朋友，決定試試。" }, { A: "他分享槳。朋友笑了。", B: "海盜把槳給朋友。她雙手拿好。「我會划。」她說。", C: "海盜把木槳遞給穿水手服的女孩。她雙手小心拿著，向他道謝。他的手臂已經輕鬆一點。" }, { A: "他分享繩。「我能幫忙！」", B: "另一位朋友拿繩。「我能幫忙控帆。」海盜對他微笑。", C: "接著，海盜讓另一位朋友拿控帆繩。男孩檢查繩尾沒有卡住。每個人都有工作，工具不再堆一團。" }, { A: "瑜瑜給他望遠鏡。「你可以看。」", B: "瑜瑜把望遠鏡給海盜。「你可以找海灣，然後換我！」", C: "瑜瑜把望遠鏡放進海盜手裡。「你先找海灣。」她說。「看完後換我，好嗎？」海盜點頭。" }, { A: "穿救生衣！準備好了。", B: "大家穿上救生衣，坐進船。現在可以出發。", C: "離碼頭前，大家穿救生衣、檢查扣帶。坐進船後保持低重心，腳留船內。所有人都準備好才出發。" }, { A: "槳動了，浪花飛濺。", B: "朋友拉動槳。船邊小浪飛濺，他們離開碼頭。", C: "女孩慢而穩地划槳。小浪從木船身旁捲開。大家幫忙，船終於朝海灣前進。" }, { A: "風吹滿帆。船動了。", B: "男孩拉繩，風吹滿帆。船滑過海浪。", C: "微風吹滿奶油色的帆，男孩穩穩拉繩。帆布在上方擺動，船滑過水面。海盜看朋友合作，漸漸明白了。" }, { A: "「看！海灣！」瑜瑜指著。", B: "海盜用望遠鏡看。「看到海灣了！」他說。瑜瑜指向發亮的岸邊。", C: "透過望遠鏡，海盜發現岬角後避風的海灣。「在那裡！」他喊，指路給瑜瑜。她指向岸邊的藍色閃光。" }, { A: "「換妳，瑜瑜。」他分享望遠鏡。", B: "「換妳。」海盜把望遠鏡給瑜瑜。她看完就還回來。", C: "沒人提醒，海盜就把望遠鏡遞給瑜瑜。她看閃亮海水，道謝，用完歸還。心愛工具仍是他的，兩人卻多了快樂回憶。" }, { A: "他們到海灘，互相幫忙。", B: "他們到安靜海灘，上岸脫救生衣。大家一起搬野餐用品。", C: "在避風海灘，大家踩上乾沙，脫下救生衣。工具小心放好，一起搬野餐物品。沒人需要獨自拿全部。" }, { A: "大家一起吃。「分你一些！」", B: "寶箱裝著野餐食物。海盜分蘋果給瑜瑜，大家很快樂。", C: "寶箱現在裝著麵包、水果和海灘貝殼。海盜先給瑜瑜蘋果，才拿自己的。寶藏最棒之處，就是一起享用。" }, { A: "瑜瑜回家。她也要分享。", B: "瑜瑜回房間，小船在床旁。「你一次，我一次。」", C: "回到房間，瑜瑜看見床旁的小紙船。她想起海盜學會了：分享後，物品會帶著故事回來。「你一次，我一次。」她微笑輕聲說。" }] };
function Va(t, a, e) {
  return Da[t][a][e].split(new RegExp("(?<=[。！？])(?=[^」])")).filter(Boolean);
}
const Ua = "above=在上方|afraid=害怕的|apple=蘋果|apron=圍裙|away=離開|bag=袋子|basket=籃子|beach=海灘|bed=床|believe=相信|bell=鈴；門鈴|bird=鳥|birthday=生日|blanket=毯子|blocks=積木|boat=船|book=書|bowl=碗|brave=勇敢的|bread=麵包|bridge=橋|broom=掃帚|brush=畫筆|burn=燒焦|butter=奶油|butterfly=蝴蝶|cake=蛋糕|calendar=日曆|candle=蠟燭|cap=帽子|care=照顧；用心|castle=城堡|cat=貓|cave=洞穴|chest=寶箱|climb=爬|cloth=布|coat=外套|count=數數|cream=鮮奶油|cup=杯子|dock=碼頭|door=門|dragon=龍|draw=畫畫|drop=一滴；掉落|dry=乾的|duck=鴨子|ears=耳朵|eggs=雞蛋|eyes=眼睛|fall=跌倒；掉落|finish=完成|firefly=螢火蟲|first=首先|flour=麵粉|flower=花|fly=飛|forest=森林|fox=狐狸|friend=朋友|gail=瑜瑜|gap=縫隙|garden=花園|giant=巨人|gift=禮物|glasses=眼鏡|glide=滑翔|grandma=奶奶|grass=草地|hear=聽見|help=幫忙|high=高的|hill=山丘|hold=握住；扶住|home=家|hood=連帽斗篷|idea=主意|join=連接；加入|jump=跳|knot=繩結|ladder=梯子|lamp=燈|later=等一下；稍後|laugh=笑|leaf=葉子|left=左邊|lifejacket=救生衣|lift=舉起|lily=睡蓮|line=線條|list=清單|listen=聆聽|little=小的|lonely=孤單的|look=看|love=愛|mail=信件|manager=管理員|map=地圖|market=市場|mess=凌亂|milk=牛奶|mine=我的|mistake=錯誤|moon=月亮|mushroom=蘑菇|nest=鳥巢|next=接著|now=現在|number=數字|oar=船槳|open=打開|orange=柳橙|out=出去|oven=烤箱|over=越過；在上方|pan=烤模|paper=紙|path=小路|phone=電話|pinwheel=紙風車|pirate=海盜|plate=盤子|play=玩|pole=桿子|potion=藥水|practice=練習|princess=公主|proud=自豪的|quiet=安靜的|rack=冷卻架|rain=雨|right=右邊|river=河流|rock=石頭|roof=屋頂|room=房間|rope=繩子|sad=難過的|safe=安全的|sail=船帆；航行|seagull=海鷗|seven=七|share=分享|sink=水槽|sky=天空|sleep=睡覺|slice=一片|smile=微笑|smoke=煙|spatula=刮刀|spill=灑出|spoon=湯匙|stall=攤位|star=星星|start=開始|stem=莖|step=一步；步驟|stir=攪拌|stop=停止|strawberries=草莓|strong=強壯；牢固的|sugar=糖|surprise=驚喜|table=桌子|tail=尾巴|teeth=牙齒|telescope=望遠鏡|timer=計時器|tiny=很小的|together=一起|tree=樹|try=嘗試|turn=輪流；轉動|umbrella=雨傘|under=在下方|up=向上|valley=山谷|wait=等待|walk=走路|water=水；澆水|wave=揮手；波浪|wet=濕的|whisk=打蛋器|white=白色|wind=風|windmill=風車|window=窗戶|wing=翅膀|wizard=魔法師|wolf=狼|yellow=黃色", Ct = Object.fromEntries(Ua.split("|").map((t) => t.split("="))), Ka = {
  "above high over up": "⬆️",
  under: "⬇️",
  left: "⬅️",
  "right next": "➡️",
  "away out": "🚶",
  afraid: "😟",
  "believe brave try practice": "💪",
  "birthday cake slice": "🎂",
  "care love": "❤️",
  "count number seven": "🔢",
  finish: "✅",
  "first step start now": "▶️",
  "friend share together join": "🤝",
  gap: "↔️",
  "glide fly wing": "🪽",
  "hear listen ears": "👂",
  "help hold lift": "🙌",
  idea: "💡",
  "jump climb": "🧗",
  "later wait timer": "⏳",
  "laugh smile": "😄",
  "line draw brush": "🖌️",
  list: "📋",
  "little tiny": "🤏",
  "lonely sad": "😔",
  "look eyes": "👀",
  "mess mistake": "😵",
  mine: "🙋",
  "open door": "🚪",
  "play turn": "🎲",
  proud: "😊",
  quiet: "🤫",
  safe: "🛟",
  "sleep bed": "🛏️",
  strong: "💪",
  surprise: "🎁",
  walk: "🚶",
  white: "⚪",
  yellow: "🟡",
  wind: "💨",
  "rain wet water drop spill": "💧",
  dry: "☀️",
  burn: "🔥",
  "stir whisk spoon spatula": "🥄",
  "flour sugar": "🥣",
  milk: "🥛",
  "butter cream": "🧈",
  eggs: "🥚",
  bread: "🍞",
  "bowl cup plate": "🍽️",
  "oven pan rack": "🥘",
  "apron coat hood cloth": "👕",
  phone: "📱",
  "map path": "🗺️",
  "forest tree grass garden leaf stem": "🌿",
  castle: "🏰",
  "cave rock hill valley": "⛰️",
  river: "🏞️",
  "sky moon star": "🌙",
  "market stall": "🏪",
  "home room roof": "🏠",
  lamp: "💡",
  table: "🪑",
  window: "🪟",
  "book paper": "📖",
  calendar: "📅",
  mail: "✉️",
  manager: "🧑‍🔧",
  "gail princess grandma": "👧",
  dragon: "🐉",
  cat: "🐈",
  wolf: "🐺",
  fox: "🦊",
  giant: "🧍",
  wizard: "🧙",
  pirate: "🏴‍☠️",
  "bird seagull wing": "🐦",
  duck: "🦆",
  nest: "🪺",
  firefly: "✨",
  "flower lily": "🌸",
  "apple strawberries orange": "🍎",
  mushroom: "🍄",
  butterfly: "🦋",
  "bag basket": "🧺",
  blanket: "🛌",
  blocks: "🧱",
  "boat dock sail oar beach": "⛵",
  bridge: "🌉",
  broom: "🧹",
  bell: "🔔",
  candle: "🕯️",
  cap: "🧢",
  "chest gift": "🎁",
  glasses: "👓",
  "knot rope": "🪢",
  ladder: "🪜",
  lifejacket: "🛟",
  "pinwheel windmill": "🌀",
  pole: "🪵",
  potion: "🧪",
  sink: "🚰",
  smoke: "💨",
  tail: "🐾",
  teeth: "🦷",
  telescope: "🔭",
  wave: "🌊"
}, Gt = {};
for (const [t, a] of Object.entries(Ka)) for (const e of t.split(" ")) Gt[e] = a;
Gt.turn = "🔄";
Object.assign(Ct, { bear: "熊", tile: "磁磚", clay: "黏土", shelf: "架子", reach: "伸手", bump: "碰撞", crack: "裂開", broken: "破碎的", piece: "碎片；一片", hide: "藏起來", worried: "擔心的", truth: "事實；真相", tell: "告訴", sorry: "抱歉", honest: "誠實的", adult: "大人", gloves: "手套", sweep: "清掃", repair: "修補", mosaic: "馬賽克拼貼" });
Object.assign(Ct, { lid: "蓋子", chime: "清脆的鈴聲", mist: "霧", float: "飄浮", breeze: "微風", scatter: "散開", spin: "旋轉", thunder: "雷聲", rumble: "隆隆聲", loud: "大聲的", angry: "生氣的", upset: "難受的", name: "說出名稱；說出感受", pause: "暫停", breathe: "呼吸", slow: "慢的", calm: "平靜的", gentle: "柔和的", need: "需要", again: "再一次" });
const _a = [
  ["一個花盆滑了進來。|它開始發光。", "一個花盆滑進瑜瑜的房間。|它停下來，開始發光。", "有個東西從瑜瑜房間的右側滑了進來。|那是一個小花盆，周圍開始散發柔和的綠光。"],
  ["蹦！一隻兔兔！|跟我來！", "一隻兔兔跳進綠光裡。|牠邀請瑜瑜到牠的育苗園。", "綠光出現後，一隻兔兔跳進房間。|牠邀請瑜瑜穿過發光的門，前往牠的育苗園。"],
  ["一顆種子。好小喔！|兔兔想開始了。", "兔兔給瑜瑜看一顆小小的種子。|牠想今天就看到它長大。", "兔兔有一顆小小的種子，還有一個很大的計畫。|牠希望今天結束前，就能看到一株高高的向日葵。"],
  ["鬆軟的土。|用小鏟子。", "瑜瑜用小鏟子把土鬆開。|兔兔看著她的手。", "瑜瑜用小鏟子把土鬆開。|她騰出空間，讓新長出的根有地方伸展。"],
  ["挖個洞。|別太深！", "兔兔用小鏟子挖了一個小洞。|瑜瑜告訴牠挖到哪裡就好。", "兔兔開始挖洞，卻挖得比需要的深多了。|瑜瑜指向較淺的位置，牠便小心地調整。"],
  ["把種子埋起來。|輕輕蓋好。", "牠們用一點土把種子埋起來。|兔兔輕輕拍了拍土面。", "牠們把種子埋在薄薄的一層土下。|兔兔輕輕拍好，沒有用力往下壓。"],
  ["灑一點水。|土微微濕了。", "瑜瑜在土上灑了一點水。|土微微濕潤，沒有變成泥漿。", "瑜瑜傾斜澆水壺，在土面灑上一點水。|兔兔確認土是微濕的，而不是濕透了。"],
  ["溫暖的陽光。|好地方！", "兔兔選了一個有陽光的地方。|牠在旁邊留了一些空間。", "兔兔把種子帶到有溫暖陽光的地方。|牠留下足夠的空間，讓它不會太擁擠，可以好好生長。"],
  ["還沒動靜嗎？|兔兔，要有耐心。", "隔天早上，兔兔沒看到變化。|要有耐心，對牠來說很難。", "隔天早上，兔兔彎下身子，想找找有沒有變化。|土面上什麼也沒出現，牠覺得很難耐心等待。"],
  ["兔兔想挖土。|讓種子好好休息。", "兔兔又伸手去拿小鏟子。|瑜瑜請牠讓種子留在原處。", "兔兔想把種子挖出來，看看有沒有發生什麼變化。|瑜瑜解釋，每天打擾它，會讓它更難生長。"],
  ["一條根向下生長。|我們還看不到它。", "根可以先在土裡開始生長。|不是每個變化都容易看見。", "瑜瑜給兔兔看一張圖片，上面是一顆長出新根的種子。|這幫助牠明白：嫩芽出現前，土底下就可能已經有變化。"],
  ["每天做記錄。|每天畫一個記號。", "牠們在筆記本裡做每日記錄。|兔兔每次查看後，都加上一個記號。", "牠們開始做每日記錄，不再把種子挖出來。|兔兔記下每次查看的情況，並畫出從上面看到的樣子。"],
  ["一株嫩芽！|終於出現了！", "幾天後，一株嫩芽冒了出來。|兔兔湊近看，沒有碰它。", "經過幾天持續的照顧，一株綠色嫩芽冒了出來。|兔兔彎下身子仔細看，小手避開柔嫩的芽尖。"],
  ["一把尺。|從土面開始量。", "瑜瑜把尺放在嫩芽旁。|牠們從土面量到芽尖。", "瑜瑜把尺直立在嫩芽旁邊。|牠們從土面量到芽尖，每次都從相同的位置開始。"],
  ["高。更高！|它現在更高了。", "植物現在更高了。|舊記號顯示它先前的高度。", "幾天後，植物長得比之前更高了。|兔兔把它的頂端和尺上先前的記號比一比。"],
  ["大。更大！|這一顆更大。", "這兩顆種子，一顆大，一顆更大。|兔兔指向更大的那顆。", "瑜瑜擺出兩顆大小不同的種子。|兔兔指向較大的那顆，把牠們並排比較。"],
  ["每天查看。|繼續做記錄。", "兔兔每天查看土壤。|牠在記錄裡加上一幅圖畫。", "即使變化很小，兔兔仍維持每天的照顧習慣。|記錄幫助牠看見進展，不再急著催它長大。"],
  ["又過了幾天。|它長得更高了。", "又過了幾天，它長得更高了。|頂端開出一朵黃色的花。", "接下來幾週，植物長得更高，也長出了花苞。|一天早上，花苞開了，露出兔兔期待的黃色花朵。"],
  ["你很有耐心！|看看你的記錄。", "瑜瑜看著兔兔的記錄。|牠已經學會耐心等待。", "瑜瑜和兔兔一起翻看先前的記錄。|每天的小變化讓牠看見，耐心與持續照顧帶來了不同。"],
  ["瑜瑜回家了。|一顆種子。一個開始。", "瑜瑜帶著一顆種子回家。|她準備好耐心地開始了。", "回到房間，瑜瑜把一顆種子放在自己的筆記本旁。|她知道，今天就能開始，不必急著在今天完成。"]
];
function Xa(t, a) {
  return _a[t][{ A: 0, B: 1, C: 2 }[a]].split("|");
}
const Qa = [
  ["rabbit", "兔子", "rabbit.png"],
  ["seed", "種子", "seed.png"],
  ["soil", "土壤", "pot.png"],
  ["root", "根", "root.png"],
  ["sprout", "嫩芽", "sprout.png"],
  ["dig", "挖土", "scoop.png"],
  ["bury", "埋入", "seed.png"],
  ["scoop", "小鏟子", "scoop.png"],
  ["sprinkle", "灑水", "can.png"],
  ["sunshine", "陽光", "☀️"],
  ["damp", "微濕的", "pot.png"],
  ["measure", "測量", "📏"],
  ["ruler", "尺", "📏"],
  ["record", "記錄", "record.png"],
  ["patient", "有耐心的", "rabbit-pencil.png"],
  ["daily", "每天的", "record.png"],
  ["tall", "高的", "plant.png"],
  ["taller", "更高的", "sunflower.png"],
  ["big", "大的", "seed.png"],
  ["bigger", "更大的", "seed.png"]
], Ja = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M12 5v15M12 5C9 3 5 3 2 4v15c4-1 7-1 10 1 3-2 6-2 10-1V4c-3-1-7-1-10 1Z"/></svg>';
function jt(t, a, e) {
  if (document.querySelector(".vocabulary-dialog")) return;
  const s = document.activeElement;
  a();
  const o = document.createElement("dialog");
  o.className = "vocabulary-dialog", o.setAttribute("aria-label", e ? e.title + " · 單字小書" : "小兔園丁的單字小書");
  const r = e?.entries || Qa;
  o.innerHTML = '<header><div><small>MY LITTLE WORD BOOK · 20 WORDS</small><h2>小兔園丁的單字小書</h2><p>點圖片或英文，聽聽怎麼唸。</p></div><button class="vocab-close" aria-label="關閉單字小書">×</button></header><label class="vocab-toggle"><input type="checkbox" checked> 顯示中文</label><div class="vocab-grid"></div>', o.querySelector("h2").textContent = e ? e.title + " · 單字小書" : "小兔園丁的單字小書", o.querySelector("small").textContent = "MY LITTLE WORD BOOK · " + r.length + " WORDS";
  const i = o.querySelector(".vocab-grid");
  r.forEach(([n, l, d]) => {
    const c = document.createElement("button");
    c.className = "vocab-card", c.setAttribute("aria-label", `朗讀 ${n}，${l}`);
    const w = d.endsWith(".png") ? `<img src="images/story/rabbit-v1/${d}" alt="">` : `<span class="vocab-symbol">${d}</span>`;
    c.innerHTML = `<span class="vocab-picture ${n}">${w}</span><strong>${n} <span aria-hidden="true">♬</span></strong><span class="vocab-chinese">${l}</span>`;
    const T = e?.visual?.(n);
    T && c.querySelector(".vocab-picture").replaceChildren(T), c.onclick = () => {
      i.querySelectorAll(".speaking").forEach((L) => L.classList.remove("speaking")), c.classList.add("speaking"), t(n);
    }, i.append(c);
  }), o.querySelector("input").onchange = (n) => o.classList.toggle("hide-chinese", !n.target.checked), o.querySelector(".vocab-close").onclick = () => o.close(), o.onclick = (n) => {
    if (n.target === o) {
      const l = o.getBoundingClientRect();
      (n.clientX < l.left || n.clientX > l.right || n.clientY < l.top || n.clientY > l.bottom) && o.close();
    }
  }, o.onclose = () => {
    a(), o.remove(), s?.focus();
  }, document.body.append(o), o.showModal();
}
const Za = [
  {
    A: [
      "A pot slides in.",
      "It begins to shine."
    ],
    B: [
      "A pot slides into Gail’s room.",
      "It stops and begins to shine."
    ],
    C: [
      "Something slides in from the right side of Gail’s room.",
      "It is a small pot, and a soft green light begins to shine around it."
    ]
  },
  {
    A: [
      "Hop! A rabbit!",
      "Come with me!"
    ],
    B: [
      "A rabbit hops into the green light.",
      "He invites Gail to his nursery."
    ],
    C: [
      "After the green light appears, a rabbit hops into the room.",
      "He invites Gail through the glowing doorway to his nursery."
    ]
  },
  {
    A: [
      "A seed. So small!",
      "Rabbit wants to begin."
    ],
    B: [
      "Rabbit shows Gail a tiny seed.",
      "He wants to see it grow today."
    ],
    C: [
      "Rabbit has a tiny seed and a very big plan.",
      "He hopes to see a tall sunflower before the day is over."
    ]
  },
  {
    A: [
      "Soft soil.",
      "Use the scoop."
    ],
    B: [
      "Gail uses a scoop to loosen the soil.",
      "Rabbit watches her hands."
    ],
    C: [
      "Gail loosens the soil with a small scoop.",
      "She makes space so that new roots will have room to spread."
    ]
  },
  {
    A: [
      "Dig a hole.",
      "Not too deep!"
    ],
    B: [
      "Rabbit uses the scoop to dig a little hole.",
      "Gail shows him where to stop."
    ],
    C: [
      "Rabbit begins to dig a hole much deeper than he needs.",
      "Gail points to a shallower spot and he carefully adjusts it."
    ]
  },
  {
    A: [
      "Bury the seed.",
      "Cover it gently."
    ],
    B: [
      "They bury the seed under a little soil.",
      "Rabbit pats the surface gently."
    ],
    C: [
      "They bury the seed beneath a thin layer of soil.",
      "Rabbit pats it gently instead of pressing it down hard."
    ]
  },
  {
    A: [
      "Sprinkle a little.",
      "The soil is damp."
    ],
    B: [
      "Gail sprinkles a little water over the soil.",
      "It is damp, but not muddy."
    ],
    C: [
      "Gail tips the can and sprinkles a little water over the surface.",
      "Rabbit checks that the soil is damp rather than soaked."
    ]
  },
  {
    A: [
      "Warm sunshine.",
      "A good spot!"
    ],
    B: [
      "Rabbit chooses a place in the sunshine.",
      "He leaves space beside it."
    ],
    C: [
      "Rabbit carries his seed to a place with warm sunshine.",
      "He leaves enough space for it to develop without being crowded."
    ]
  },
  {
    A: [
      "Nothing yet?",
      "Be patient, Rabbit."
    ],
    B: [
      "The next morning, Rabbit sees no change.",
      "Being patient is hard for him."
    ],
    C: [
      "The next morning, Rabbit leans over to look for a change.",
      "When nothing appears above the surface, he finds it hard to be patient."
    ]
  },
  {
    A: [
      "Rabbit wants to dig.",
      "Let the seed rest."
    ],
    B: [
      "Rabbit reaches for the scoop again.",
      "Gail asks him to leave the seed in place."
    ],
    C: [
      "Rabbit wants to dig it up to check whether anything is happening.",
      "Gail explains that disturbing it each day will make growing harder."
    ]
  },
  {
    A: [
      "A root grows down.",
      "We cannot see it yet."
    ],
    B: [
      "A root can begin below the soil.",
      "Not every change is easy to see."
    ],
    C: [
      "Gail shows Rabbit a picture of a seed with a new root.",
      "It helps him understand that changes can happen underneath before a shoot appears."
    ]
  },
  {
    A: [
      "A daily record.",
      "One mark each day."
    ],
    B: [
      "They make a daily record in a notebook.",
      "Rabbit adds one mark after each check."
    ],
    C: [
      "They begin a daily record instead of digging the seed up.",
      "Rabbit records each check and draws what he can see from above."
    ]
  },
  {
    A: [
      "A sprout!",
      "At last!"
    ],
    B: [
      "Several days later, a sprout appears.",
      "Rabbit bends closer without touching it."
    ],
    C: [
      "After several days of steady attention, a green sprout appears.",
      "Rabbit bends closer to inspect it, keeping his paws away from the tender tip."
    ]
  },
  {
    A: [
      "A ruler.",
      "Measure from the soil."
    ],
    B: [
      "Gail places a ruler beside the sprout.",
      "They measure from the soil to its tip."
    ],
    C: [
      "Gail places a ruler upright beside the sprout.",
      "They measure from the soil surface to the tip, using the same starting point each time."
    ]
  },
  {
    A: [
      "Tall. Taller!",
      "It is taller now."
    ],
    B: [
      "The plant is taller now.",
      "The old mark shows its earlier height."
    ],
    C: [
      "A few days later, the plant is taller than it was before.",
      "Rabbit compares its tip with the earlier mark on the ruler."
    ]
  },
  {
    A: [
      "Big. Bigger!",
      "This one is bigger."
    ],
    B: [
      "These two seeds are big and bigger.",
      "Rabbit points to the bigger one."
    ],
    C: [
      "Gail sets out two seeds of different sizes.",
      "Rabbit points to the bigger one and compares them side by side."
    ]
  },
  {
    A: [
      "Check it daily.",
      "Keep a record."
    ],
    B: [
      "Rabbit checks the soil daily.",
      "He adds a drawing to his record."
    ],
    C: [
      "Rabbit keeps his daily routine even when the change is small.",
      "His record helps him notice progress without rushing it."
    ]
  },
  {
    A: [
      "More days pass.",
      "It grows taller."
    ],
    B: [
      "More days pass, and it grows taller.",
      "A yellow bloom opens at the top."
    ],
    C: [
      "Over the following weeks, the plant grows taller and develops a bud.",
      "One morning the bud opens, revealing the yellow bloom Rabbit hoped for."
    ]
  },
  {
    A: [
      "You were patient!",
      "Look at your record."
    ],
    B: [
      "Gail looks at Rabbit’s record.",
      "He has learned to be patient."
    ],
    C: [
      "Gail and Rabbit look back through the record together.",
      "The small daily changes show him how patience and steady attention made a difference."
    ]
  },
  {
    A: [
      "Gail is home.",
      "A seed. A beginning."
    ],
    B: [
      "Gail returns home with a seed.",
      "She is ready for a patient beginning."
    ],
    C: [
      "Back in her room, Gail sets a seed beside her own notebook.",
      "She knows that she can begin today without needing to finish today."
    ]
  }
], es = ["A visitor slides in", "A little hop", "A tiny seed", "Soft soil", "Dig a little hole", "Bury the seed", "Sprinkle gently", "A sunny spot", "The next morning", "Do not dig again", "Hidden roots", "Our daily record", "A sprout appears", "Measure with a ruler", "Tall and taller", "Big and bigger", "Keep the routine", "Growing takes time", "Patient and proud", "A small beginning"], ts = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: j("standing"), x: 23, y: 65, w: 24, h: 59 },
  rabbit: { id: "rabbit", word: "rabbit", image: "rabbit.png", x: 78, y: 69, w: 23, h: 51 },
  pot: { id: "pot", word: "soil", image: "pot.png", x: 52, y: 85, w: 23, h: 25 },
  seed: { id: "seed", word: "seed", image: "seed.png", x: 52, y: 68, w: 7, h: 8 },
  scoop: { id: "scoop", word: "scoop", image: "scoop.png", x: 39, y: 83, w: 15, h: 12 },
  can: { id: "can", word: "sprinkle", image: "can.png", x: 40, y: 63, w: 20, h: 24 },
  sprout: { id: "sprout", word: "sprout", image: "sprout.png", x: 52, y: 62, w: 17, h: 26 },
  root: { id: "root", word: "root", image: "root.png", x: 51, y: 50, w: 25, h: 40 },
  record: { id: "record", word: "record", image: "record.png", x: 52, y: 77, w: 28, h: 24 },
  sunshine: { id: "sunshine", word: "sunshine", x: 60, y: 15, w: 23, h: 22 },
  bigger: { id: "bigger", word: "bigger", image: "seed.png", x: 59, y: 70, w: 13, h: 16 }
}, as = { bedroom: { name: "瑜瑜的房間", caption: "A SMALL BEGINNING", alt: "星空臥室與留空木地板" }, garden: { name: "小兔的育苗園", caption: "A LITTLE EVERY DAY", alt: "陽光中的育苗園" }, shed: { name: "園藝小屋", caption: "NOTICE THE SMALL CHANGES", alt: "通往花園的園藝小屋" }, evening: { name: "午後育苗園", caption: "PATIENCE TAKES PRACTICE", alt: "午後溫暖的育苗園" } }, ss = [["soil"], ["rabbit"], ["seed", "big"], ["soil", "scoop"], ["dig"], ["bury"], ["sprinkle", "damp"], ["sunshine"], ["patient"], ["dig"], ["root"], ["daily", "record"], ["sprout"], ["measure", "ruler"], ["tall", "taller"], ["big", "bigger"], ["daily", "record"], ["taller"], ["patient"], ["seed"]];
function Yt(t) {
  return Za.map((a, e) => {
    const s = e < 2 || e === 19 ? "bedroom" : e === 10 || e === 11 || e === 15 ? "shed" : e >= 17 ? "evening" : "garden", o = {};
    let r = ["gail", "rabbit", "pot"];
    e === 0 && (r = ["gail", "pot"]), e === 19 && (r = ["gail", "seed", "record"]), [2, 5].includes(e) && r.push("seed"), [3, 4, 9].includes(e) && r.push("scoop"), e === 6 && r.push("can"), e === 7 && r.push("sunshine"), e === 10 && (r = ["gail", "rabbit", "root"]), [11, 16, 18].includes(e) && r.push("record"), e >= 12 && e !== 15 && e !== 19 && r.push("sprout"), e === 15 && (r = ["gail", "rabbit", "seed", "bigger"], o.seed = { x: 44, y: 70 }), [8, 9].includes(e) && (o.rabbit = { image: "rabbit-worried.png", h: 42, y: 74 }), [11, 16, 18].includes(e) && (o.rabbit = { image: "rabbit-pencil.png" }), e >= 14 && e !== 15 && e !== 19 && (o.sprout = { image: e >= 17 ? "sunflower.png" : "plant.png", h: e >= 17 ? 48 : 38, x: e >= 17 ? 55 : 52, y: (e >= 17, 54), w: e >= 17 ? 24 : 21 }), [0, 10, 11, 19].includes(e) && (o.gail = { image: j("kneeling"), h: 39, w: 31, y: 75 }), [11, 16, 18].includes(e) && (o.record = { x: 69, y: 88, w: 24, h: 18 });
    const i = ["pot", "rabbit", "seed", "scoop", "scoop", "seed", "can", "sunshine", "rabbit", "rabbit", "root", "record", "sprout", "sprout", "sprout", "bigger", "record", "sprout", "rabbit", "seed"], n = ["Tap to begin.", "Watch Rabbit hop in.", "Find the seed.", "Find the scoop.", "Dig a small hole.", "Bury the seed.", "Sprinkle gently.", "Find the sunshine.", "Give Rabbit time.", "Let the seed rest.", "Find the root.", "Make a daily record.", "Find the sprout.", "Measure the sprout.", "See how much taller it is.", "Choose the bigger seed.", "Check the record.", "Watch the growth over weeks.", "Celebrate being patient.", "A new beginning."];
    return { title: es[e], scene: s, lines: a[t], words: ss[e], objects: r, placements: o, mission: { type: "tap", answer: i[e], prompt: n[e], hint: "點物件聽發音與探索。" }, action: "explore" };
  });
}
function Dt(t) {
  const a = {};
  for (let e = 2; e < 20; e++) a[e] = { 0: [{ actor: e === 19 ? "gail" : "rabbit", x: e === 19 ? 23 : 78, y: e === 19 ? 75 : [8, 9].includes(e) ? 74 : 69, rotate: e % 2 ? 2 : -2 }] };
  return a;
}
function os(t) {
  const a = t === "A", e = [
    ["Who hops in?", "Who appears after the green light?", ["Rabbit", "Bear", "Fox", "Wolf"], 0, "Rabbit hops into Gail’s room after the light appears."],
    ["What do they bury?", "What do Gail and Rabbit bury in the soil?", ["a ruler", "a seed", "a shoe", "a notebook"], 1, "They bury a seed beneath a little soil."],
    ["What is a scoop for?", "How do they use the scoop?", ["to ring a bell", "to draw a face", "to dig a small hole", "to measure height"], 2, "The scoop helps them dig a small hole."],
    ["Damp or muddy?", "How should the soil be after a little sprinkle?", ["very muddy", "full of ice", "completely dry", "damp"], 3, "A little water makes it damp, not muddy."],
    ["What grows below?", "Which part can grow below before a shoot appears?", ["a root", "a ruler", "a notebook", "a bell"], 0, "The root can begin below the surface."],
    ["Why not dig again?", "Why does Gail ask Rabbit not to dig up the seed?", ["It is too loud.", "It needs to stay undisturbed.", "The scoop is missing.", "It has turned to stone."], 1, "Repeated digging disturbs the growing seed."],
    ["What shows each day?", "What helps Rabbit remember the small changes?", ["his slippers", "a bell", "a daily record", "a hidden box"], 2, "Rabbit adds observations to his daily record."],
    ["What measures height?", "What do they place upright to measure the sprout?", ["a spoon", "a rope", "a pencil case", "a ruler"], 3, "They measure from the soil surface with a ruler."],
    ["What does patient mean?", "Which action shows that Rabbit is learning to be patient?", ["He checks daily without digging it up.", "He keeps pulling it out.", "He gives up at once.", "He demands an instant bloom."], 0, "He keeps caring and noticing changes over time."],
    ["One day or many days?", "How does the story show that growing takes time?", ["It happens in one sprinkle.", "Their record shows many days passing.", "A spell makes it instant.", "Rabbit pulls it taller."], 1, "Daily records and the passage of weeks show gradual growth."]
  ], s = ["rabbit.png", "seed.png", "scoop.png", "can.png", "root.png", "rabbit-worried.png", "record.png", "sprout.png", "rabbit-pencil.png", "sunflower.png"], o = e.map((i, n) => ({ id: "rabbit-" + n, kind: "choice", prompt: a ? i[0] : i[1], image: "images/story/rabbit-v1/" + s[n], imageAlt: "本題相關角色或物件", options: i[2].map((l) => ({ text: l })), answer: [i[3]], explanation: i[4] }));
  return o[6] = { id: "rabbit-bigger", kind: "choice", prompt: a ? "Which seed is bigger?" : "Look at both seeds. Which one is bigger?", image: "images/story/rabbit-v1/quiz/bigger.jpg", imageAlt: "左右兩顆不同大小的種子", options: ["The left seed", "The right seed", "They are the same size", "Neither seed"].map((i) => ({ text: i })), answer: [1], explanation: "The seed on the right is bigger." }, o[9] = { id: "rabbit-taller", kind: "choice", prompt: a ? "Is it taller now?" : "Compare the plant with the old height mark. What changed?", image: "images/story/rabbit-v1/quiz/taller.jpg", imageAlt: "植物與先前高度標記比較", options: ["It is shorter now.", "It is the same height.", "It is taller now.", "It is gone."].map((i) => ({ text: i })), answer: [2], explanation: "The plant reaches above the old mark. It is taller now." }, [["A glowing pot leads to a garden.", "They sail away.", "A cup breaks.", "They eat lunch."], ["Rabbit is flying.", "Rabbit plants a seed.", "Rabbit repairs a cup.", "Rabbit wears a crown."], ["Gail closes a box.", "Rabbit sleeps.", "Rabbit wants to dig again.", "They row a boat."], ["Gail hides a seed.", "Rabbit bakes bread.", "They open a door.", "Gail sprinkles gently."], ["A sprout appears after several days.", "Rabbit makes ice.", "They paint a bridge.", "The seed becomes a boat."], ["They leave without looking.", "They see the result of steady care.", "They break the ruler.", "They dig everything up."]].forEach((i, n) => o.push({ id: "rabbit-scene-" + n, kind: "choice", prompt: a ? "Look. What happens?" : "Which event matches this picture?", image: `images/story/rabbit-v1/quiz/scene-${String(n + 1).padStart(2, "0")}-v2.png`, imageAlt: "小兔故事劇情分鏡 " + (n + 1), options: i.map((l) => ({ text: l })), answer: [n % 4], explanation: i[n % 4] })), o;
}
function rs(t, a, e) {
  const s = matchMedia("(prefers-reduced-motion: reduce)").matches, o = /* @__PURE__ */ new Set(), r = [];
  let i = !1, n = 0;
  const l = (m) => t.querySelector(`[data-object="${m}"]`);
  function d(m, A, p, y = 0) {
    const b = m.animate(A, { duration: s ? 150 : p, delay: s ? 0 : y, fill: "forwards", easing: "ease-in-out" });
    return o.add(b), b;
  }
  function c() {
    o.forEach((m) => m.cancel()), o.clear(), r.splice(0).forEach((m) => m.remove());
  }
  if (a < 2) {
    const m = l("pot");
    m && (m.style.translate = "55vw 0");
    const A = l("rabbit");
    A && (A.style.opacity = "0");
  }
  function w() {
    c();
    const m = l("pot");
    if (!m) return;
    d(m, [{ translate: "55vw 0" }, { translate: "0 0" }], 1100), d(m, [{ filter: "drop-shadow(0 0 0px transparent)" }, { filter: "drop-shadow(0 0 23px #bce681)" }], 1100, 1100);
    const A = l("rabbit");
    A && d(A, [{ opacity: 0, translate: "35vw 0" }, { opacity: 1, translate: "15vw -70px", offset: 0.5 }, { opacity: 1, translate: "0 0" }], 1e3, 2200);
    for (let p = 0; p < 12; p++) {
      const y = document.createElement("i");
      y.className = "rabbit-mote", y.style.left = "50%", y.style.top = "12%", y.setAttribute("aria-hidden", "true"), m.append(y), r.push(y), d(y, [{ opacity: 0, translate: "0 0" }, { opacity: 0.9, offset: 0.2 }, { opacity: 0, translate: `${(p % 2 ? 1 : -1) * (50 + p * 12)}px ${-90 - p * 12}px` }], 2200, 1200 + p * 40);
    }
    if (a === 1) {
      const p = document.createElement("img");
      p.className = "rabbit-arrival", p.src = "images/story/rabbit-v1/garden.png", p.alt = "綠光帶領瑜瑜進入育苗園", t.append(p), r.push(p), d(p, [{ opacity: 0 }, { opacity: 1 }], 1400, 3100);
    }
  }
  function T() {
    const m = l("sprout")?.querySelector("img");
    m && (m.style.transformOrigin = "50% 100%", d(m, [{ scale: a >= 17 ? ".65 .6" : ".8 .55" }, { scale: "1 1" }], 2500));
  }
  if (a === 13 || a === 14) {
    const m = document.createElement("div");
    m.className = "rabbit-ruler";
    for (let A = 0; A <= 10; A += 2) {
      const p = document.createElement("span");
      p.textContent = String(A) + " ─", p.style.bottom = A * 9 + "%", m.append(p);
    }
    if (m.setAttribute("aria-label", "從土面開始的高度尺"), t.append(m), r.push(m), a === 14) {
      const A = document.createElement("div");
      A.className = "rabbit-old-height", A.textContent = "Before", t.append(A), r.push(A);
    }
  }
  if ([11, 16, 18, 19].includes(a)) {
    const m = l("record");
    if (m) {
      const A = document.createElement("span");
      A.className = "rabbit-record-marks", A.textContent = a === 11 ? "1 · ✓" : a === 16 ? "1 ✓  2 ✓  3 ✓" : "1 ✓  2 ✓  3 ✓  4 ✓", A.setAttribute("aria-label", "每日觀察紀錄"), m.append(A);
    }
  }
  function L() {
    const m = l("scoop"), A = l("pot");
    if (!m || !A) return;
    const p = A.offsetLeft - m.offsetLeft + m.offsetWidth * 0.2, y = A.offsetTop - A.offsetHeight * 0.45 - m.offsetTop - m.offsetHeight * 0.2;
    d(m, [{ rotate: "0deg", translate: "0 0" }, { rotate: "-30deg", translate: `${p}px ${y - 8}px`, offset: 0.35 }, { rotate: "-10deg", translate: `${p}px ${y + 6}px`, offset: 0.55 }, { rotate: "-40deg", translate: `${p - 8}px ${y - 16}px`, offset: 0.75 }, { rotate: "0deg", translate: "0 0" }], 2200);
  }
  function H() {
    const m = l("can");
    if (m) {
      d(m, [{ rotate: "0deg" }, { rotate: "15deg", offset: 0.3 }, { rotate: "0deg" }], 1600);
      for (let A = 0; A < 9; A++) {
        const p = document.createElement("i");
        p.className = "rabbit-drop", p.style.left = "49%", p.style.top = "68%", t.append(p), r.push(p), d(p, [{ opacity: 0, translate: "0 0" }, { opacity: 1, offset: 0.2 }, { opacity: 0, translate: `${A % 3 * 4}px 40px` }], 650, A * 100);
      }
    }
  }
  function B(m) {
    if (!i) {
      if (a < 2) {
        w();
        return;
      }
      if ((m === "scoop" || m === "dig") && L(), (m === "can" || m === "sprinkle") && H(), ["sprout", "taller", "measure"].includes(m) && T(), a === 5 && m === "seed") {
        const A = l("seed");
        A && d(A, [{ translate: "0 0", opacity: 1 }, { translate: "0 32px", opacity: 0 }], 900);
      }
    }
  }
  return a < 2 && (n = requestAnimationFrame(() => {
    i || w();
  })), { interact: B, sentence(m, A) {
    m === 0 && (a < 2 ? w() : a === 4 || a === 9 ? L() : a === 6 ? H() : [12, 14, 17].includes(a) && T());
  }, playback(m, A) {
    o.forEach((p) => {
      A || !m ? p.pause() : p.play();
    });
  }, sound(m) {
  }, dispose() {
    i = !0, cancelAnimationFrame(n), c();
  } };
}
const Vt = [
  { A: ["Gail sees a boat.", "It is gold."], B: ["A gold paper boat shines by the bed.", "Gail reaches for it."], C: ["Beside her bed, Gail finds a tiny boat folded from gold paper.", "Its soft light makes her curious, and she reaches out to take a closer look."] },
  { A: ["Gold smoke rises.", "Gail goes in."], B: ["Gold smoke rises from the boat.", "It opens a path to the sea.", "Gail steps into the light."], C: ["Golden smoke curls out of the little paper boat and drifts across the room.", "Through the glowing mist, Gail can see a sunny harbor.", "Still in her star pajamas, she steps into the light."] },
  { A: ["Here is a dock.", "A seagull calls."], B: ["Gail stands on a wooden dock.", "A seagull calls from a post.", "The sea is bright and blue."], C: ["Gail arrives on a wooden dock above the bright blue water.", "A seagull calls from a nearby post, as if it is welcoming her.", "Small waves lap against the wood below her feet."] },
  { A: ["Here is a pirate.", "He has a chest."], B: ["A little pirate opens his chest.", "There is a rope and a telescope.", "An oar rests beside it."], C: ["A young pirate opens a wooden chest with a proud smile.", "Inside are a coil of rope and a brass telescope, with an oar beside the lid.", "He has everything he needs for a little adventure—or so he thinks."] },
  { A: ["“Mine!” says the pirate.", "He holds it all."], B: ["“Mine!” says the pirate.", "He holds all the tools.", "He will not share them."], C: ["“Mine! All mine!” says the pirate, gathering the tools into his arms.", "He worries that sharing means he will never get them back.", "So he keeps the rope, the oar, and the telescope close."] },
  { A: ["Two friends come.", "“Can we help?”"], B: ["Two friends come to the dock.", "They want to help.", "The pirate shakes his head."], C: ["Two friends arrive with an idea: they could sail to the shining bay together.", "They offer to help carry the tools, but the pirate shakes his head.", "“I can do it myself,” he says."] },
  { A: ["The oar slips.", "The rope drops."], B: ["The pirate holds too much.", "The oar slips and the rope drops.", "He needs help."], C: ["The pirate tries to lift the oar while keeping the telescope under one arm.", "The rope slips to the dock, and he nearly loses his grip.", "Gail waits nearby, ready to help him put things down."] },
  { A: ["The boat must wait.", "One person cannot do it all."], B: ["The boat is still tied to the dock.", "The pirate cannot do every job.", "“What can we do?” asks Gail."], C: ["Their boat stays tied safely to the dock while the pirate looks at all the jobs.", "He cannot row, watch the way, and handle the sail at the same time.", "“Could we find a way for everyone to help?” Gail asks."] },
  { A: ["“We can share.”", "“We can take a turn.”"], B: ["“We can share the tools,” says Gail.", "“You can have a turn too.”", "The pirate thinks about it."], C: ["“Sharing does not mean giving your things away forever,” Gail explains.", "“We can use them carefully and take turns.”", "The pirate looks at his friends and decides to try."] },
  { A: ["He shares the oar.", "His friend smiles."], B: ["The pirate gives the oar to his friend.", "She holds it with both hands.", "“I can row,” she says."], C: ["The pirate passes the wooden oar to the girl in the sailor shirt.", "She holds it carefully with both hands and thanks him.", "His arms already feel a little lighter."] },
  { A: ["He shares the rope.", "“I can help!”"], B: ["The other friend takes the rope.", "“I can help with the sail.”", "The pirate smiles at him."], C: ["Next, the pirate lets his other friend hold the rope for the sail.", "The boy checks that the loose end is clear.", "Now each friend has a useful job, and the tools are no longer in a heap."] },
  { A: ["Gail gives him the telescope.", "“You can look.”"], B: ["Gail gives the pirate his telescope.", "“You can look for the bay.”", "“Then it is my turn!”"], C: ["Gail places the telescope in the pirate’s hands.", "“You can watch for the bay first,” she says.", "“When you are done, may I have a turn?” The pirate nods."] },
  { A: ["Life jackets on!", "Now they are ready."], B: ["They all put on life jackets.", "They sit down in the boat.", "Now they are ready to go."], C: ["Before leaving the dock, everyone puts on a life jacket and checks the straps.", "They settle into the boat, keeping their weight low and their feet inside.", "Only when everyone is ready do they set off."] },
  { A: ["The oar moves.", "Waves splash."], B: ["Their friend pulls the oar.", "Little waves splash by the boat.", "They move away from the dock."], C: ["The girl pulls the oar through the water in a slow, steady stroke.", "Little waves curl away from the wooden hull.", "With everyone helping, the boat finally moves toward the bay."] },
  { A: ["Wind fills the sail.", "The boat moves."], B: ["The boy holds the rope.", "The wind fills the sail.", "The boat glides over the waves."], C: ["A gentle breeze fills the cream sail, and the boy holds its rope steady.", "The cloth sways above them while the boat glides across the water.", "The pirate watches his friends work and begins to understand."] },
  { A: ["“Look! The bay!”", "Gail points."], B: ["The pirate looks through the telescope.", "“I see the bay!” he says.", "Gail points to the shining shore."], C: ["Through the telescope, the pirate spots a sheltered bay beyond the headland.", "“There it is!” he calls, showing Gail the way.", "She points toward the blue sparkles along the shore."] },
  { A: ["“Your turn, Gail.”", "He shares the telescope."], B: ["“Your turn,” says the pirate.", "He gives Gail the telescope.", "She looks, then gives it back."], C: ["Without being reminded, the pirate offers Gail the telescope.", "She looks at the shining water, thanks him, and returns it when she is done.", "His favorite tool is still his, and now they both have a happy memory."] },
  { A: ["They reach the beach.", "They help each other."], B: ["They reach the quiet beach.", "They take off their life jackets on land.", "Everyone helps carry the picnic."], C: ["At the sheltered beach, they step onto dry sand and take off their life jackets.", "The tools are set down carefully, and everyone helps unload the picnic.", "No one has to carry everything alone."] },
  { A: ["They eat together.", "“Some for you!”"], B: ["The chest holds their picnic.", "The pirate shares an apple with Gail.", "They are happy together."], C: ["Their treasure chest now holds bread, fruit, and shells from the beach.", "The pirate offers Gail an apple before taking one for himself.", "The best part of this treasure is enjoying it together."] },
  { A: ["Gail is home.", "She will share too."], B: ["Gail is back in her room.", "The little boat rests by her bed.", "“A turn for you, a turn for me.”"], C: ["Back in her room, Gail finds the little paper boat resting beside her bed.", "She thinks about the pirate, who learned that sharing could bring his things back with a story.", "“A turn for you, a turn for me,” she whispers with a smile."] }
], is = ["boat", "smoke", "dock", "seagull", "pirate", "chest", "mine", "friend", "oar", "rope", "share", "turn", "telescope", "sail", "wave", "look", "help", "beach", "together", "lifejacket"], ft = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: j("standing"), x: 21, y: 67, w: 23, h: 55 },
  pirate: { id: "pirate", word: "pirate", image: "pirate.png", x: 47, y: 64, w: 25, h: 60 },
  sailor: { id: "sailor", word: "friend", image: "sailor.png", x: 73, y: 70, w: 19, h: 50 },
  friend: { id: "friend", word: "friend", image: "friend.png", x: 89, y: 71, w: 17, h: 48 },
  paperboat: { id: "paperboat", word: "boat", image: "paperboat.png", x: 60, y: 82, w: 17, h: 16 },
  seagull: { id: "seagull", word: "seagull", image: "seagull.png", x: 6, y: 35, w: 10, h: 16 },
  chest: { id: "chest", word: "chest", image: "chest.png", x: 49, y: 84, w: 27, h: 27 },
  telescope: { id: "telescope", word: "telescope", image: "telescope.png", x: 41, y: 59, w: 18, h: 9 },
  rope: { id: "rope", word: "rope", image: "rope.png", x: 48, y: 73, w: 13, h: 19 },
  oar: { id: "oar", word: "oar", image: "oar.png", x: 54, y: 63, w: 28, h: 9 },
  hull: { id: "hull", word: "boat", image: "hull.png", x: 50, y: 82, w: 90, h: 28 },
  sail: { id: "sail", word: "sail", image: "sail.png", x: 52, y: 37, w: 46, h: 68 },
  wave: { id: "wave", word: "wave", x: 22, y: 92, w: 30, h: 13 },
  dock: { id: "dock", word: "dock", x: 47, y: 93, w: 30, h: 12 },
  beach: { id: "beach", word: "beach", x: 82, y: 32, w: 22, h: 20 },
  picnic: { id: "picnic", word: "picnic", image: "picnic.png", x: 54, y: 87, w: 46, h: 23 },
  apple: { id: "apple", word: "apple", image: "apple.png", x: 47, y: 66, w: 7, h: 11 },
  lifejacket: { id: "lifejacket", word: "lifejacket", x: 66, y: 65, w: 10, h: 13 }
}, ns = {
  bedroom: { name: "Gail的星光房間", caption: "A LITTLE GOLDEN BOAT", alt: "星光臥室與床邊空地" },
  dock: { name: "陽光碼頭", caption: "A TURN FOR YOU, A TURN FOR ME", alt: "木造碼頭、海港與遠方村屋" },
  bay: { name: "航向發光海灣", caption: "MANY HANDS, ONE ADVENTURE", alt: "藍色海灣，獨立船身、帆、人物與浪花" },
  beach: { name: "共享海灣野餐", caption: "OUR BEST TREASURE", alt: "夕陽下的沙灘與閃亮海面" }
}, ls = ["A little paper boat", "Golden smoke", "A call at the dock", "The pirate’s chest", "Mine!", "Two willing friends", "Too much to hold", "The boat must wait", "A turn for everyone", "Share the oar", "Share the rope", "A job for the pirate", "Ready to go", "Splash, splash", "Wind in the sail", "The shining bay", "Your turn, Gail", "On dry land", "Our best treasure", "A little boat at home"], hs = [["boat"], ["smoke"], ["dock", "seagull"], ["pirate", "chest"], ["mine"], ["friend", "help"], ["oar", "rope"], ["boat", "help"], ["share", "turn"], ["oar"], ["rope"], ["telescope"], ["lifejacket"], ["wave"], ["sail"], ["look", "beach"], ["turn", "share"], ["beach"], ["together"], ["share"]];
function Ut(t) {
  return Vt.map((a, e) => {
    const s = e < 2 || e === 19, o = e >= 12 && e <= 16, r = e >= 17 && e <= 18, i = s ? "bedroom" : o ? "bay" : r ? "beach" : "dock", n = {};
    let l = s ? ["gail", "paperboat"] : ["gail", "pirate", "seagull", "chest", "telescope", "rope", "oar"];
    s && (n.gail = { image: j("kneeling"), x: 33, y: 76, w: 32, h: 37 }), e === 2 && (l = ["gail", "seagull", "dock"]), e >= 5 && !s && l.push("sailor", "friend"), e === 3 && (n.telescope = { x: 48, y: 75 }, n.rope = { x: 57, y: 80 }), e >= 10 && (n.oar = { x: 74, y: 67 }), e >= 11 && (n.rope = { x: 87, y: 70 }), e === 11 && (n.telescope = { x: 28, y: 59 }, n.gail = { image: j("reaching"), w: 27 }), o && (l = ["sail", "sailor", "pirate", "gail", "friend", "hull", "oar", "telescope", "rope", "wave", "beach"], n.gail = { image: j("seated-lifejacket"), x: 65, y: 65, w: 27, h: 34 }, n.pirate = { image: "pirate-seated.png", x: 45, y: 62, w: 22, h: 40 }, n.sailor = { image: "sailor-seated.png", x: 26, y: 65, w: 22, h: 36 }, n.friend = { image: "friend-seated.png", x: 81, y: 65, w: 19, h: 34 }, n.oar = { x: 20, y: 78, w: 36, h: 12 }, n.telescope = { x: 58, y: 52, w: 17, h: 9 }, n.rope = { x: 83, y: 70, w: 9, h: 13 }, e === 12 && l.push("lifejacket"), e === 16 && (n.telescope = { x: 51, y: 52, w: 17, h: 9 })), r && (l = ["gail", "pirate", "sailor", "friend", "picnic", "chest", "apple", "telescope"], n.gail = { image: j("seated"), x: 28, y: 77, w: 27, h: 36 }, n.pirate = { x: 53, y: 60, w: 22, h: 56 }, n.sailor = { x: 75, y: 65, w: 19, h: 49 }, n.friend = { x: 90, y: 66, w: 16, h: 47 }, n.chest = { image: "chest-picnic.png", x: 52, y: 85, w: 25, h: 27 }, n.picnic = { x: 54, y: 91, w: 64, h: 18 }, n.telescope = { x: 15, y: 92, w: 16, h: 9 });
    const d = ["paperboat", "paperboat", "seagull", "chest", "pirate", "sailor", "rope", "pirate", "gail", "oar", "rope", "telescope", "lifejacket", "oar", "sail", "telescope", "telescope", "picnic", "apple", "paperboat"];
    let c = { type: "find", answer: d[e], prompt: `Find ${d[e] === "gail" ? "Gail" : "the " + ft[d[e]].word}.`, hint: "點物件聽發音，看看故事中的動作。" };
    if (e < 2 && (c = { type: "tap", answer: "paperboat", prompt: "Tap the golden boat.", hint: "點金紙船，讓金色煙霧飄出來。" }), [9, 10, 11, 16, 18].includes(e)) {
      const w = e === 9 ? "sailor" : e === 10 ? "friend" : e === 11 ? "pirate" : "gail";
      c = { type: "drag", answer: d[e], target: w, prompt: e === 16 ? "Give Gail a turn." : e === 18 ? "Share the apple with Gail." : `Share the ${ft[d[e]].word}.`, hint: "先點工具再點朋友，也可以拖曳交給他。" };
    }
    return e === 13 && (c = { type: "tap", answer: "oar", prompt: "Pull the oar. Make a splash!", hint: "點船槳，看船前進和浪花。" }), e === 14 && (c = { type: "sequence", answer: "sail", steps: ["rope", "sail"], prompt: "Tap the rope, then the sail.", hint: "先點繩子，再點船帆。" }), { title: ls[e], scene: i, lines: [...a[t]], words: hs[e], objects: l, placements: n, mission: c, action: "explore" };
  });
}
function Kt(t) {
  const a = {}, e = (s, o, r) => {
    (a[s] ??= {})[Math.min(o, Vt[s][t].length - 1)] = r;
  };
  return e(0, 0, [{ actor: "paperboat", x: 59, y: 78, rotate: 3 }]), e(1, 1, [{ actor: "gail", x: 43, y: 70, rotate: 2 }]), e(2, 0, [{ actor: "gail", x: 28, y: 67, walk: !0 }]), e(3, 0, [{ actor: "pirate", x: 45, y: 64, rotate: -2 }]), e(4, 0, [{ actor: "rope", x: 44, y: 70 }, { actor: "telescope", x: 43, y: 58 }]), e(5, 0, [{ actor: "sailor", x: 69, y: 70, walk: !0 }, { actor: "friend", x: 85, y: 71, walk: !0 }]), e(6, 1, [{ actor: "rope", x: 51, y: 90, rotate: 15 }]), e(7, 0, [{ actor: "pirate", x: 46, y: 66, rotate: -4 }]), e(8, 0, [{ actor: "gail", x: 25, y: 67, walk: !0 }]), e(9, 0, [{ actor: "oar", x: 66, y: 67, rotate: -75 }]), e(10, 0, [{ actor: "rope", x: 80, y: 70 }]), e(11, 0, [{ actor: "telescope", x: 35, y: 59 }]), e(12, 0, [{ actor: "gail", x: 65, y: 65, rotate: 1 }]), e(13, 0, [{ actor: "oar", x: 20, y: 78, rotate: -35 }]), e(14, 0, [{ actor: "rope", x: 82, y: 70, rotate: 3 }]), e(15, 0, [{ actor: "telescope", x: 58, y: 52 }]), e(16, 0, [{ actor: "telescope", x: 55, y: 53 }]), e(17, 0, [{ actor: "pirate", x: 51, y: 60, walk: !0 }]), e(18, 1, [{ actor: "apple", x: 34, y: 70 }]), e(19, 0, [{ actor: "paperboat", x: 58, y: 80, rotate: -3 }]), a;
}
const cs = ["Gail在房間發現金紙船", "海盜抱著望遠鏡繩子和船槳", "海盜在碼頭拿太多工具，繩子滑下", "朋友們分享船槳繩子與望遠鏡", "穿救生衣的朋友分工航行", "朋友們在沙灘分享野餐"], me = (t, a, e, s, o, r) => ({ id: t, kind: "choice", prompt: a, image: `images/story/pirate-v1/quiz/scene-${String(e).padStart(2, "0")}.png`, imageAlt: cs[e - 1], options: s.map((i) => ({ text: i })), answer: [o], explanation: r });
function ds(t) {
  const a = t === "A", e = t === "C", s = [
    me("boat", a ? "What does Gail find?" : "What brings Gail into this story?", 1, ["a gold paper boat", "a red kite", "a green cup", "a blue shoe"], 0, "A golden paper boat leads Gail to the harbor."),
    me("mine", a ? "What does the pirate say?" : "What does the pirate say about all the tools?", 2, ["Good night!", "Mine!", "Go to bed!", "Happy birthday!"], 1, "At first, the pirate wants to keep every tool for himself."),
    me("problem", a ? "Can he hold it all?" : e ? "Why does the pirate struggle before leaving the dock?" : "Why do the tools slip?", 3, ["He has no tools.", "The sea is frozen.", "He tries to hold too much.", "His friends take everything."], 2, "He tries to hold the oar, rope, and telescope at once."),
    me("oar", a ? "What can move through the water?" : "Which tool does the sailor girl use to row?", 5, ["a shell", "a chest", "an apple", "an oar"], 3, "She pulls the oar through the water."),
    me("rope", a ? "What helps hold the sail?" : "What does the boy use to control the sail?", 5, ["a rope", "a spoon", "a leaf", "a hat"], 0, "The boy holds the sail rope steady."),
    me("look", a ? "What helps them look far away?" : "How does the pirate spot the shining bay?", 5, ["with an apple", "with a telescope", "with a pillow", "with a basket"], 1, "The telescope helps him look toward the bay."),
    me("ready", a ? "What do they wear in the boat?" : "What do they put on before leaving the dock?", 5, ["winter coats", "paper hats", "life jackets", "blankets"], 2, "Everyone puts on a life jacket and checks the straps."),
    me("turn", a ? "Who gets a turn next?" : "Who does the pirate give the telescope to next?", 5, ["a seagull", "a fox", "a giant", "Gail"], 3, "He offers Gail a turn with the telescope."),
    me("picnic", a ? "What do they share on the beach?" : "What is in the chest at the end of the adventure?", 6, ["picnic food and shells", "all the sea water", "broken boats", "snowballs"], 0, "The chest holds food and shells for their shared picnic."),
    me("meaning", a ? "What can friends do?" : e ? "What does the pirate learn about sharing his things?" : "What does taking turns mean?", 4, ["Never use your things again.", "Use things carefully and let others have a turn.", "Hide all your tools.", "Make one person do every job."], 1, "Sharing can mean taking turns, then returning things with care.")
  ];
  return [
    ["Gail finds a paper boat.", "Gail eats an apple.", "Gail rows a boat.", "Gail holds a rope."],
    ["The pirate is asleep.", "The pirate holds all the tools.", "The pirate is swimming.", "The pirate opens a window."],
    ["The friends bake a cake.", "The pirate plants a tree.", "The pirate holds too much.", "The seagull takes the chest."],
    ["The friends hide the tools.", "Gail loses the boat.", "The pirate runs away.", "The friends share the tools."],
    ["The friends work together in the boat.", "The friends sit in a bedroom.", "The boat is on a mountain.", "The friends build a snowman."],
    ["The pirate eats alone.", "The friends share a picnic.", "The friends close the harbor.", "Gail folds a hat."]
  ].forEach((r, i) => s.push(me("scene-" + (i + 1), a ? "Look. What happens?" : e ? "Which event matches this picture?" : "Which sentence matches the picture?", i + 1, r, i % 4, r[i % 4]))), s;
}
function ps(t, a, e) {
  const s = "images/story/pirate-v1/", o = matchMedia("(prefers-reduced-motion: reduce)").matches, r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map();
  let l = !1, d;
  const c = a >= 12 && a <= 16;
  t.dataset.piratePage = String(a);
  function w(p, y) {
    const b = document.createElement(p);
    return b.className = y, b.setAttribute("aria-hidden", "true"), i.add(b), b;
  }
  function T(p, y, b, C = 1, U = 0) {
    const M = p.animate(y, { duration: o ? 250 : b, iterations: o ? 1 : C, delay: o ? 0 : U, easing: "ease-in-out", fill: "forwards" });
    return r.add(M), M;
  }
  function L(p) {
    if (!e || l) return;
    let y = n.get(p);
    y || (y = new Audio(s + p + ".wav"), y.volume = p === "waves" ? 0.12 : 0.2, y.hidden = !0, y.setAttribute("aria-hidden", "true"), t.append(y), n.set(p, y)), y.currentTime = 0, y.play().catch(() => {
    });
  }
  function H(p) {
    t.classList.toggle("pirate-active", p);
  }
  if (c) {
    const p = w("div", "pirate-vessel");
    p.removeAttribute("aria-hidden");
    for (const M of ["sail", "sailor", "pirate", "gail", "friend", "hull", "oar", "telescope", "rope", "lifejacket"]) {
      const le = t.querySelector(`[data-object=${M}]`);
      le && p.append(le);
    }
    t.append(p);
    const y = t.querySelector("[data-object=oar]");
    y && (y.style.transform = "translate(-50%,-50%) rotate(-35deg)");
    const b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    b.setAttribute("viewBox", "0 0 1000 1000"), b.setAttribute("preserveAspectRatio", "none"), b.setAttribute("aria-hidden", "true"), b.classList.add("pirate-rigging");
    const C = document.createElementNS(b.namespaceURI, "path");
    C.setAttribute("d", "M 385 550 Q 610 570 830 690"), C.setAttribute("fill", "none"), C.setAttribute("stroke", "#b38b53"), C.setAttribute("stroke-width", "3"), b.append(C), p.prepend(b);
    const U = w("div", "pirate-foam");
    for (let M = 0; M < 18; M++) {
      const le = w("i", "foam-drop");
      le.style.setProperty("--x", 8 + M * 4.9 + "%"), le.style.setProperty("--delay", -M * 0.17 + "s"), le.style.setProperty("--size", 7 + M % 4 * 4 + "px"), U.append(le);
    }
    t.append(U);
  }
  if (a >= 3 && a <= 11) {
    const p = t.querySelector("[data-object=oar]");
    p && (p.style.transform = "translate(-50%,-50%) rotate(-75deg)");
  }
  function B() {
    for (const b of [...r])
      b.effect?.target?.closest(".pirate-magic,.pirate-arrival") && (b.cancel(), r.delete(b));
    for (const b of [...i]) (b.classList.contains("pirate-magic") || b.classList.contains("pirate-arrival")) && (b.remove(), i.delete(b));
    const p = t.querySelector("[data-object=paperboat]");
    if (!p) return;
    H(!0), t.classList.remove("pirate-paused");
    const y = w("div", "pirate-magic");
    y.style.left = p.style.left, y.style.top = p.style.top, t.append(y);
    for (let b = 0; b < 22; b++) {
      const C = w("i", b % 3 === 0 ? "gold-spark" : "gold-smoke");
      y.append(C);
      const U = (b % 2 ? -1 : 1) * (35 + b * 29 % 250), M = -60 - b * 37 % 300;
      T(C, [{ opacity: 0, transform: "translate(-50%,-50%) scale(.15)" }, { opacity: b % 3 === 0 ? 1 : 0.6, offset: 0.25 }, { opacity: 0, transform: `translate(${U}px,${M}px) scale(${b % 3 === 0 ? 1 : 3.5})` }], 3500, 1, b * 60);
    }
    if (a === 1) {
      const b = w("img", "pirate-arrival");
      b.src = s + "dock.png", b.alt = "", t.prepend(b), T(b, [{ opacity: 0 }, { opacity: 0, offset: 0.45 }, { opacity: 1 }], 4200).finished.then(() => {
        if (l) return;
        const U = t.querySelector("[data-object=gail]"), M = U?.querySelector("img");
        U && M && (M.src = "images/story/shared-gail-v1/standing.png", U.style.height = "55%", U.style.width = "23%", U.style.top = "67%");
      }).catch(() => {
      });
    }
  }
  function m(p) {
    const y = t.querySelector(`[data-object=${p}] img`);
    y && T(y, [{ rotate: "0deg" }, { rotate: "-4deg", offset: 0.3 }, { rotate: "3deg", offset: 0.65 }, { rotate: "0deg" }], 1e3);
  }
  function A(p) {
    (p === "paperboat" || p === "boat" || p === "smoke") && a < 2 && B(), p === "seagull" && (L("seagull"), m("seagull")), c && ["oar", "wave", "sail", "rope"].includes(p) && (H(!0), t.classList.remove("pirate-paused"), L("waves"), m(p), d && clearTimeout(d), d = setTimeout(() => H(!1), 5e3));
  }
  return {
    interact: A,
    sentence(p, y) {
      a < 2 && p === 0 && B(), a === 2 && /seagull/i.test(y) && (L("seagull"), m("seagull")), c && p === 0 && (H(!0), L("waves"));
    },
    playback(p, y) {
      const b = p && !y;
      H(b), t.classList.toggle("pirate-paused", !b), r.forEach((C) => {
        C.playState !== "finished" && (b ? C.play() : C.pause());
      }), n.forEach((C) => {
        b ? C.currentTime > 0 && C.currentTime < C.duration && C.play().catch(() => {
        }) : C.pause();
      });
    },
    sound(p) {
      e = p, p || n.forEach((y) => y.pause());
    },
    dispose() {
      l = !0, d && clearTimeout(d), r.forEach((p) => p.cancel()), n.forEach((p) => {
        p.pause(), p.removeAttribute("src"), p.load(), p.remove();
      }), i.forEach((p) => p.remove()), r.clear(), n.clear(), i.clear();
    }
  };
}
const _t = [
  { A: ["Gail sees a drop.", "It is gold."], B: ["Gail opens her book.", "A gold drop shines by it."], C: ["At bedtime, Gail opens her sketchbook beside the bed.", "A tiny gold drop shines on the floor, as if it wants her to follow."] },
  { A: ["Look! A door!", "Gail goes in."], B: ["The drop makes a door.", "Gail steps through it."], C: ["The gold drop moves up the wall and paints a glowing door.", "Still in her star pajamas, Gail steps through to see what is beyond it."] },
  { A: ["Here is a tree.", "Here is a fox."], B: ["Gail walks to a big tree.", "A fox has a room inside."], C: ["A winding path leads Gail to a hollow tree.", "Inside, a little fox has a room filled with paper, paint, and brushes."] },
  { A: ["Fox has a brush.", "The paper is blank."], B: ["Fox holds a brush.", "He looks at the blank paper.", "He does not start."], C: ["Fox holds his brush above a clean sheet of paper.", "He wants to draw something lovely, but he is afraid of making a mistake.", "His brush stays in the air."] },
  { A: ["A party is coming.", "Fox will draw."], B: ["There is a party soon.", "Fox must draw a big picture.", "He wants it to be just right."], C: ["The forest friends are having a party, and Fox has promised to make the poster.", "He looks at the colorful flags above his table.", "What if his picture is not good enough?"] },
  { A: ["Fox makes a line.", "Then he stops."], B: ["Fox makes one small line.", "He stops and looks at it.", "“Is it wrong?” he asks."], C: ["At last, Fox draws a short blue line.", "It bends a little at the end, so he stops.", "“That is not how I wanted it to look,” he says."] },
  { A: ["Fox feels sad.", "He does not draw."], B: ["Fox rubs out the line.", "He makes the paper into a ball.", "Now he feels sad."], C: ["Fox rubs out the line and crumples the paper.", "More paper balls gather beside the table, but there is still no poster.", "He puts down his brush with a sigh."] },
  { A: ["Gail sits down.", "“Try one dot.”"], B: ["Gail sits by Fox.", "“We can try one dot,” she says.", "“Just one small dot.”"], C: ["Gail sits quietly beside her new friend.", "“You do not need to draw the whole picture at once,” she says.", "“Could we try one little dot?”"] },
  { A: ["Oh! The cup tips!", "Blue paint spills."], B: ["Fox moves his arm.", "He bumps the cup.", "Blue paint spills on the paper."], C: ["As Fox reaches for his brush, his arm catches the paint cup by accident.", "The cup tips over, and blue paint spreads across the paper.", "Both friends pull back in surprise."] },
  { A: ["“A mistake!” says Fox.", "He looks down."], B: ["“It is a mistake!” says Fox.", "He looks at the blue paint.", "“My picture is bad.”"], C: ["Fox stares at the wide blue mark.", "“Now I have ruined it,” he whispers, ready to throw this sheet away too.", "The party poster seems further away than ever."] },
  { A: ["Gail waits.", "Fox looks up."], B: ["Gail waits with Fox.", "“We can look again,” she says.", "Fox looks up."], C: ["Gail does not hurry Fox or tell him to stop feeling sad.", "She waits beside him until he looks up.", "“Shall we look at it one more time?” she asks gently."] },
  { A: ["Gail turns the paper.", "“A river!”"], B: ["Gail turns the paper.", "The blue mark looks like a river.", "Fox takes a look."], C: ["Gail carefully turns the paper so they can see it from another side.", "The long blue mark now looks like a winding river.", "Fox leans closer; he had not noticed that before."] },
  { A: ["Gail adds yellow.", "The dots are flowers."], B: ["Gail adds yellow dots.", "“Flowers by the river,” she says.", "Then she gives Fox a turn."], C: ["Gail paints a few yellow dots beside the blue river.", "“These could be flowers,” she says, then moves her hand away.", "She leaves space for Fox to add an idea of his own."] },
  { A: ["Fox paints a stem.", "Fox smiles."], B: ["Fox adds a green stem.", "He adds more stems.", "Now the flowers can grow."], C: ["Fox dips his brush in green paint and adds a stem beneath a yellow flower.", "Then he adds another, and a small smile appears.", "For the first time today, he wants to keep drawing."] },
  { A: ["A line bends.", "Fox adds a leaf."], B: ["One green line bends.", "Fox adds a leaf to it.", "“It can be a vine!”"], C: ["One green line bends more than Fox planned.", "This time, he does not rub it out.", "He adds leaves along the curve and turns it into a climbing vine."] },
  { A: ["“A butterfly!” says Fox.", "He paints wings."], B: ["Fox sees a small paint mark.", "“A butterfly!” he says.", "He paints two wings."], C: ["Fox notices a small orange mark near the flowers.", "“I know what this can be!” he says, adding two bright wings.", "His own idea has made a butterfly, and now he paints two more."] },
  { A: ["Friends come in.", "“Share my paint!”"], B: ["Rabbit and Bear come in.", "Fox will share his paint.", "They help with the picture."], C: ["Rabbit and Bear arrive to see how the poster is going.", "Instead of hiding the picture, Fox invites them to share his paint.", "They add small details while leaving room for each other."] },
  { A: ["They hang the picture.", "Fox feels proud."], B: ["They hang the picture outside.", "The friends all smile.", "Fox feels proud of his work."], C: ["Together, the friends hang the finished poster outside the tree studio.", "Fox can still see the blue spill, but now it belongs to a beautiful river.", "He feels proud because they kept going and made something together."] },
  { A: ["New paper. New line.", "Fox will begin."], B: ["Fox takes new paper.", "He makes a line.", "He is ready to begin again."], C: ["Back at the table, Fox takes a fresh sheet of paper.", "He does not wait for the perfect idea before making his first line.", "He knows he can begin, look, and try another way as he goes."] },
  { A: ["Gail is home.", "She draws a line."], B: ["Gail is back in bed.", "A little flower is in her book.", "She draws a line and smiles."], C: ["Back in her bedroom, Gail finds a tiny painted flower in her sketchbook.", "She makes a curved line beside it and wonders what it might become.", "A new picture can begin with one little try."] }
], gs = ["drop", "door", "fox", "brush", "paper", "draw", "line", "sad", "try", "spill", "mistake", "wait", "turn", "river", "yellow", "stem", "leaf", "butterfly", "share", "proud"], Xt = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: j("standing"), x: 23, y: 65, w: 25, h: 58 },
  fox: { id: "fox", word: "fox", image: "fox-worried.png", x: 79, y: 65, w: 28, h: 48 },
  table: { id: "table", word: "table", image: "table.png", x: 54, y: 81, w: 50, h: 35 },
  paper: { id: "paper", word: "paper", image: "paper-blank.png", x: 53, y: 72, w: 36, h: 14 },
  cup: { id: "cup", word: "paint", image: "cup.png", x: 66, y: 67, w: 6, h: 9 },
  brush: { id: "brush", word: "brush", image: "brush.png", x: 42, y: 72, w: 10, h: 14 },
  crumpled: { id: "crumpled", word: "paper", image: "crumpled.png", x: 65, y: 93, w: 17, h: 13 },
  drop: { id: "drop", word: "drop", image: "drop.png", x: 60, y: 80, w: 10, h: 17 },
  sketchbook: { id: "sketchbook", word: "book", image: "sketchbook.png", x: 56, y: 85, w: 30, h: 22 },
  door: { id: "door", word: "door", x: 66, y: 42, w: 22, h: 60 },
  flags: { id: "flags", word: "party", x: 47, y: 15, w: 48, h: 18 },
  rabbit: { id: "rabbit", word: "rabbit", image: "rabbit.png", x: 12, y: 84, w: 12, h: 27 },
  bear: { id: "bear", word: "bear", image: "bear.png", x: 91, y: 77, w: 17, h: 38 }
}, us = {
  bedroom: { name: "Gail的星光臥室", caption: "ONE LITTLE TRY", alt: "靛藍色星光臥室，床邊留有寬敞地板" },
  path: { name: "森林畫室小徑", caption: "A DOOR INTO A STORY", alt: "苔綠色森林小徑通往樹洞畫室" },
  studio: { name: "小狐狸的畫室", caption: "LOOK AGAIN, TRY AGAIN", alt: "溫暖樹洞畫室，獨立畫桌、人物與畫紙" },
  outside: { name: "森林畫展", caption: "ROOM FOR EVERY IDEA", alt: "樹洞畫室外的掛畫繩與花草" }
}, ms = ["A golden drop", "A painted door", "The tree studio", "A blank page", "A party picture", "One little line", "Not good enough?", "One small try", "Oops!", "A blue mistake", "Wait with a friend", "Look again", "Yellow flowers", "A little green stem", "A winding vine", "My own idea", "Room for friends", "Our picture", "Ready to begin", "A line at home"], ys = [["drop"], ["door"], ["fox"], ["brush", "paper"], ["draw"], ["line"], ["sad"], ["try"], ["spill"], ["mistake"], ["wait"], ["turn", "river"], ["yellow"], ["stem"], ["leaf"], ["butterfly"], ["share"], ["proud"], ["draw", "line"], ["try"]];
function Qt(t) {
  return _t.map((a, e) => {
    const s = e < 2 || e === 19, o = s ? "bedroom" : e === 2 ? "path" : e === 17 ? "outside" : "studio", r = {};
    let i = s ? ["gail", "sketchbook", "drop"] : e === 2 ? ["gail", "fox", "door"] : ["gail", "fox", "table", "paper", "cup"];
    s && (r.gail = { x: 30, y: 72, w: 27, h: 47, image: j("seated") }), e === 1 && (i.push("door"), r.drop = { x: 66, y: 30 }), e === 4 && i.push("flags"), e === 6 && i.push("crumpled"), (e === 7 || e === 10) && (r.gail = { image: j("seated"), y: 77, h: 35, w: 25 }), (e === 8 || e === 9) && (r.gail = { image: j("surprised") }, r.fox = { image: "fox-surprised.png" }), e === 11 && (r.gail = { image: j("reaching"), w: 30 }), e >= 13 && (r.fox = { image: e === 17 ? "fox-happy.png" : "fox-painting.png" }), e >= 9 && e <= 11 && (r.paper = { image: "paper-spill.png" }), e === 12 && (r.paper = { image: "paper-spill.png" }), e === 13 && (r.paper = { image: "paper-dots.png" }), e === 14 && (r.paper = { image: "paper-stems.png" }), e === 15 && (r.paper = { image: "paper-vine.png" }), (e === 16 || e === 17) && (r.paper = { image: "paper-finished.png" }), [5, 12, 13, 14, 15, 18, 19].includes(e) && i.push("brush"), (e === 16 || e === 17) && (i.push("rabbit", "bear"), r.gail = { x: 24, w: 20, h: 51 }, r.fox = { x: 75, w: 22, h: 43, image: "fox-happy.png" }), e === 17 && (i = i.filter((d) => !["table", "cup"].includes(d)), r.paper = { image: "paper-finished.png", x: 51, y: 62, w: 36, h: 39 }, r.gail = { image: j("raised-hand"), x: 25, y: 68, w: 23, h: 58 }), e === 19 && (r.paper = { image: "paper-dots.png", x: 56, y: 83, w: 21, h: 13 }, i.push("paper"), r.brush = { x: 70, y: 83 });
    const n = ["drop", "door", "door", "brush", "flags", "brush", "crumpled", "gail", "cup", "paper", "gail", "paper", "brush", "brush", "brush", "brush", "rabbit", "paper", "brush", "brush"];
    e === 3 && i.push("brush");
    let l = { type: "find", answer: n[e], prompt: `Find ${n[e] === "gail" ? "Gail" : "the " + Xt[n[e]].word}.`, hint: "點選場景中的物件，可以聽發音。" };
    return [5, 12, 13, 14, 15, 18, 19].includes(e) && (l = { type: "drag", answer: "brush", target: "paper", prompt: e === 13 ? "Add a green stem." : e === 14 ? "Add a leaf." : e === 15 ? "Add butterfly wings." : "Bring the brush to the paper.", hint: "把畫筆拖到畫紙；也可以先點畫筆，再點畫紙。" }), e === 11 && (l = { type: "tap", answer: "paper", prompt: "Turn the paper. Find a river.", hint: "點畫紙，換個方向看看。" }), e === 16 && (l = { type: "sequence", answer: "bear", steps: ["rabbit", "bear"], prompt: "Share with Rabbit, then Bear.", hint: "先點兔子，再點小熊，一起畫畫。" }), e === 17 && (l = { type: "tap", answer: "paper", prompt: "Hang our picture.", hint: "點畫作，一起掛到繩子上。" }), { title: ms[e], scene: o, lines: [...a[t]], words: ys[e], objects: i, placements: r, mission: l, action: "explore" };
  });
}
function Jt(t) {
  const a = {}, e = (s, o, r) => {
    (a[s] ??= {})[Math.min(o, _t[s][t].length - 1)] = r;
  };
  e(0, 0, [{ actor: "drop", x: 58, y: 75, rotate: 8 }]), e(1, 0, [{ actor: "drop", x: 66, y: 26 }]), e(1, 1, [{ actor: "gail", x: 51, y: 70, walk: !0 }]), e(2, 0, [{ actor: "gail", x: 36, y: 65, walk: !0 }]), e(3, 0, [{ actor: "brush", x: 63, y: 59, rotate: 15 }]), e(4, 0, [{ actor: "fox", x: 78, y: 64, rotate: -3 }]), e(5, 0, [{ actor: "brush", x: 53, y: 72, rotate: -12 }]), e(6, 0, [{ actor: "fox", x: 79, y: 67, rotate: -5 }]), e(6, 1, [{ actor: "crumpled", x: 69, y: 92, rotate: 25 }]), e(7, 0, [{ actor: "gail", x: 30, y: 77, rotate: 2 }]), e(8, 0, [{ actor: "fox", x: 81, y: 64, rotate: 4 }]), e(9, 0, [{ actor: "fox", x: 79, y: 68, rotate: -5 }]), e(10, 0, [{ actor: "gail", x: 31, y: 77, rotate: 2 }]), e(11, 0, [{ actor: "gail", x: 29, y: 65, rotate: 3 }]), e(11, 1, [{ actor: "fox", x: 77, y: 65, rotate: -3 }]);
  for (const s of [12, 13, 14, 15])
    e(s, 0, [{ actor: "brush", x: 51, y: 71, rotate: -18 }]), e(s, 1, [{ actor: "brush", x: 57, y: 72, rotate: 12 }, { actor: "fox", x: 78, y: 64, rotate: -2 }]);
  return e(16, 0, [{ actor: "rabbit", x: 16, y: 84, walk: !0 }, { actor: "bear", x: 88, y: 77, walk: !0 }]), e(17, 0, [{ actor: "paper", x: 51, y: 29 }]), e(17, 1, [{ actor: "fox", x: 75, y: 63, rotate: 3 }]), e(18, 0, [{ actor: "brush", x: 49, y: 72, rotate: -12 }]), e(18, 1, [{ actor: "brush", x: 57, y: 72, rotate: 8 }]), e(19, 1, [{ actor: "brush", x: 57, y: 82, rotate: -10 }]), a;
}
const ws = ["Gail在床邊發現金色顏料滴", "狐狸拿著畫筆望著空白紙", "杯子意外倒在桌上，藍色顏料流到紙上", "Gail轉動畫紙，狐狸看見藍色河流", "狐狸畫花莖，Gail在旁陪伴", "朋友們掛起河流、花朵與蝴蝶的畫作"], ye = (t, a, e, s, o, r) => ({ id: t, kind: "choice", prompt: a, image: `images/story/fox-v1/quiz/scene-${String(e).padStart(2, "0")}.png`, imageAlt: ws[e - 1], options: s.map((i) => ({ text: i })), answer: [o], explanation: r });
function fs(t) {
  const a = t === "A", e = t === "C", s = [
    ye("drop", a ? "What shines?" : "What leads Gail into the story?", 1, ["a gold drop", "a red shoe", "a blue cup", "a green leaf"], 0, "A gold drop leads Gail to the painted door."),
    ye("fox", a ? "Who has a brush?" : "Who is trying to draw the party poster?", 2, ["Bear", "Fox", "Rabbit", "a giant"], 1, "Fox has promised to draw the poster."),
    ye("worry", a ? "How does Fox feel?" : e ? "Why does Fox hesitate before making the first mark?" : "Why does Fox not start?", 2, ["He is hungry.", "He has no paper.", "He is afraid of a mistake.", "He wants to sleep."], 2, "Fox worries that his picture will not be good enough."),
    ye("spill", a ? "What spills?" : "What spills when Fox bumps the cup?", 3, ["milk", "yellow sand", "green leaves", "blue paint"], 3, "The cup tips by accident and blue paint spills."),
    ye("help", a ? "What does Gail do?" : e ? "How does Gail first respond to Fox’s sadness?" : "How does Gail help her sad friend?", 4, ["She waits beside him.", "She laughs at him.", "She hides his brush.", "She tears the paper."], 0, "Gail waits with Fox before suggesting another look."),
    ye("river", a ? "What can the blue mark be?" : "What does Gail see when she turns the paper?", 4, ["a tree", "a river", "a cake", "a shoe"], 1, "From another side, the blue mark looks like a river."),
    ye("stem", a ? "What does Fox add?" : "What does Fox add under the yellow flowers?", 5, ["red hats", "white clouds", "green stems", "purple doors"], 2, "Fox adds green stems to the flowers."),
    ye("idea", a ? "What has wings?" : e ? "Which detail grows from Fox’s own new idea?" : "What does Fox turn an orange mark into?", 6, ["a cup", "a vine", "a river", "a butterfly"], 3, "Fox thinks of adding wings to make a butterfly."),
    ye("proud", a ? "How does Fox feel now?" : "How does Fox feel about the finished picture?", 6, ["proud", "angry", "lonely", "sleepy"], 0, "Fox is proud that they kept going and made a picture together."),
    ye("message", a ? "What can we do after a mistake?" : e ? "Which idea best explains how the mistake helped the story?" : "What does this story teach us?", 6, ["Never draw again.", "Look again and try another way.", "Hide every picture.", "Only draw perfect lines."], 1, "A mistake can become the start of a new idea.")
  ];
  return [
    ["Gail finds a gold drop.", "Gail eats a cake.", "Fox hangs a picture.", "Bear makes a door."],
    ["Fox is running.", "Fox looks at blank paper.", "Fox is swimming.", "Fox is sleeping."],
    ["Gail waters a flower.", "Fox puts a cup away.", "A cup tips and paint spills.", "Bear paints a wall."],
    ["Gail hides the picture.", "Fox folds a hat.", "Rabbit opens a door.", "Gail turns the paper."],
    ["Fox paints green stems.", "Gail breaks a brush.", "Fox washes a cup.", "Bear goes to bed."],
    ["They throw the picture away.", "Friends hang their picture.", "They close the studio.", "They look for a cup."]
  ].forEach((r, i) => s.push(ye("scene-" + (i + 1), a ? "Look. What happens?" : e ? "Which event from the story matches this picture?" : "Which sentence matches this picture?", i + 1, r, i % 4, r[i % 4]))), s;
}
function bs(t, a = "en-US") {
  const e = t.filter((i) => /^en(?:[-_]|$)/i.test(i.lang)), s = /\b(Samantha|Ava|Allison|Susan|Victoria|Karen|Moira|Tessa|Serena|Fiona|Zira|Hazel|Aria|Jenny|Sonia|Libby|Natasha|Clara|Michelle|Emily|Emma)\b|\bfemale\b/i, o = e.filter((i) => s.test(i.name)), r = (i) => i.toLowerCase().replace("_", "-");
  return o.find((i) => r(i.lang) === r(a)) || o[0] || e.find((i) => r(i.lang) === r(a)) || e[0];
}
const Zt = [
  { A: ["Rain falls on the village.", "Gail sees a giant."], B: ["Rain patters on the village path.", "Gail sees a giant beside a cottage.", "He gives her a shy wave."], C: ["Rain begins as Gail reaches the village square.", "Beside a cottage stands a gentle giant.", "He gives Gail a shy wave with his enormous hand."] },
  { A: ["His umbrella is tiny.", "His shoulders are wet."], B: ["The giant holds a tiny yellow umbrella.", "It covers his hair, but not his shoulders.", "Drip, drip! His sleeves are wet."], C: ["The giant lifts a tiny yellow umbrella above his head.", "It protects his hair, but rain drips onto both shoulders.", "An umbrella that fits Gail is much too small for him."] },
  { A: ["“Come under my umbrella!”", "Gail tries to help."], B: ["“Come under mine!” Gail offers.", "She lifts her red umbrella as high as she can.", "It still cannot cover the giant."], C: ["Gail offers to share her red umbrella.", "She stretches her arm up, but it cannot reach his head.", "She needs another way to help her new friend."] },
  { A: ["They find a roof.", "They stay dry."], B: ["Gail points to a tall workshop roof.", "They step beneath it to stay dry.", "“Let us think here,” she says."], C: ["Gail spots a workshop with a roof high enough for the giant.", "They move underneath it before making a plan.", "Out of the rain, they can think without getting wetter."] },
  { A: ["Gail has an idea.", "“Let us work together!”"], B: ["Gail looks at her small umbrella.", "“What if we join many umbrellas together?”", "The giant smiles at her idea."], C: ["Gail notices how two umbrellas overlap beside the door.", "“Could we join lots of little umbrellas into one big cover?”", "The giant smiles, ready to try her idea."] },
  { A: ["Their friends bring umbrellas.", "They want to share."], B: ["Gail asks their friends for help.", "A boy brings a blue umbrella.", "“I can share mine!” he says."], C: ["Gail explains the problem to the village children.", "A boy offers his blue umbrella and calls to his friends.", "Soon more people arrive with something to share."] },
  { A: ["They count the colors.", "Red, yellow, and blue!"], B: ["They count the bright umbrellas.", "Red, yellow, and blue make a cheerful row.", "They need enough to cover two wide shoulders."], C: ["They count the umbrellas and sort them by color.", "Red, yellow, and blue can become a rainbow pattern.", "Gail checks that they have enough for a wide cover."] },
  { A: ["The giant can hold the pole.", "Gail can tie the rope."], B: ["The giant holds a long wooden pole.", "Gail and a friend prepare the rope.", "Each helper has a job."], C: ["The giant can hold the heavy pole steady.", "Gail and her friend can reach the smaller parts and tie them.", "They choose jobs that suit what each person can do."] },
  { A: ["They join two umbrellas.", "They tie a knot."], B: ["Gail joins two umbrella handles with rope.", "Her friend helps her tie a firm knot.", "The giant holds the pole still."], C: ["Under the roof, Gail and her friend tie two handles together.", "They pull gently to check that the knot holds.", "The giant keeps the pole steady while they work."] },
  { A: ["They lift the umbrellas.", "There is a gap."], B: ["They lift their first little roof.", "A gap remains between the umbrellas.", "“Rain could come through,” says Gail."], C: ["The helpers lift the joined umbrellas to inspect their work.", "Gail notices a gap where the edges do not meet.", "If they leave it open, rain will drip through."] },
  { A: ["They close the gap.", "One edge goes over another."], B: ["They move the umbrellas closer.", "One edge overlaps the next.", "Now the gap is gone."], C: ["Instead of leaving the edges side by side, they overlap them.", "Gail checks the middle while her friend checks the sides.", "Their cover now has no open gap between the umbrellas."] },
  { A: ["The wind blows.", "They lower the pole."], B: ["A gust of wind shakes their new roof.", "“Lower it slowly!” calls Gail.", "They bring the pole down together."], C: ["A gust catches the joined umbrellas as they lift them.", "Gail asks everyone to lower the pole slowly together.", "They return beneath the roof to make the frame stronger."] },
  { A: ["They make a strong frame.", "The giant helps."], B: ["They add a crosspiece to the pole.", "The giant holds it while the others tie it.", "The frame becomes strong."], C: ["They add a wooden crosspiece to support the wide canopy.", "The giant holds it firmly while the helpers secure the rope.", "A stronger frame will spread the weight of the umbrellas."] },
  { A: ["They pull the rope.", "They check each knot."], B: ["Gail checks one knot, then the next.", "Her friend pulls the rope gently.", "Nothing slips this time."], C: ["Before lifting again, they check every knot and connection.", "Gail holds one end while her friend gives a gentle pull.", "The rope stays firm, and the frame no longer wobbles."] },
  { A: ["“One, two, three!”", "They lift together."], B: ["Everyone gets ready to lift.", "“One, two, three!” counts Gail.", "They raise the rainbow umbrella together."], C: ["The helpers wait until everyone is ready.", "On Gail’s count, they lift at the same time.", "The joined umbrellas rise smoothly above the giant’s head."] },
  { A: ["The giant is dry!", "He smiles under the umbrella."], B: ["The rainbow umbrella covers both shoulders.", "The giant looks up and smiles.", "For the first time today, he is dry."], C: ["The giant steps beneath the wide rainbow canopy.", "This time it covers his shoulders as well as his head.", "He smiles as the rain rolls safely off the edges."] },
  { A: ["“Come under here!”", "There is room to share."], B: ["The giant sees a friend in the rain.", "“Come under here!” he calls.", "Their umbrella has room to share."], C: ["A late helper arrives with wet sleeves.", "The giant invites her beneath the wide canopy.", "What began as help for one person now shelters several friends."] },
  { A: ["They walk slowly.", "They stay together."], B: ["They walk slowly across the village green.", "The giant carries the frame on his shoulders.", "His friends stay close beneath the cover."], C: ["The giant rests the wooden beam across his shoulders, behind his head.", "He takes small, slow steps so everyone can keep up.", "They watch the path and stay together beneath their roof."] },
  { A: ["The sun comes out.", "They feel proud."], B: ["The rain stops, and the sun comes out.", "They set the umbrella down safely.", "Everyone feels proud of their work."], C: ["When the rain ends, sunlight brightens the village.", "They help set the umbrella down and admire their work.", "Each helper feels proud of the part they played."] },
  { A: ["Small things can make something big.", "Together, we can help!"], B: ["“My little umbrella could not do it alone,” says Gail.", "“But together, we made something big!”", "The giant thanks every helper."], C: ["The giant thanks everyone, from the rope holders to the umbrella sharers.", "No single helper could have built the wide cover alone.", "By listening and working together, they made room for everyone."] }
], ea = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: j("standing"), x: 24, y: 76, w: 16, h: 38 },
  giant: { id: "giant", word: "giant", image: "giant.png", x: 75, y: 52, w: 38, h: 86 },
  yellow: { id: "yellow", word: "umbrella", image: "yellow.png", x: 64, y: 32, w: 22, h: 33 },
  red: { id: "red", word: "red", image: "red.png", x: 25, y: 48, w: 24, h: 36 },
  blue: { id: "blue", word: "blue", image: "blue.png", x: 44, y: 56, w: 23, h: 34.5 },
  rope: { id: "rope", word: "rope", image: "rope.png", x: 47, y: 84, w: 21, h: 31.5 },
  frame: { id: "frame", word: "pole", image: "frame.png", x: 50, y: 65, w: 32, h: 48 },
  canopy: { id: "canopy", word: "rainbow", image: "canopy.png", x: 54, y: 35, w: 83, h: 64 },
  boy: { id: "boy", word: "friend", image: "boy.png", x: 38, y: 77, w: 15, h: 36 },
  friend: { id: "friend", word: "share", image: "friend.png", x: 13, y: 77, w: 15, h: 36 },
  roof: { id: "roof", word: "roof", x: 49, y: 12, w: 55, h: 20 },
  rain: { id: "rain", word: "rain", x: 35, y: 20, w: 24, h: 30 },
  gap: { id: "gap", word: "gap", x: 45, y: 52, w: 12, h: 14 },
  sun: { id: "sun", word: "sun", x: 30, y: 17, w: 25, h: 20 }
}, ks = {
  village: { name: "雨中的村莊", caption: "A TINY UMBRELLA", alt: "雨中的石板廣場與溫暖村屋" },
  workshop: { name: "屋簷下的工作坊", caption: "MANY SMALL HELPERS", alt: "有高屋頂遮雨的木造工作坊" },
  green: { name: "村莊草地", caption: "LIFT TOGETHER", alt: "細雨中的寬敞村莊草地" },
  sunshine: { name: "雨後的彩虹", caption: "ROOM FOR EVERYONE", alt: "雨停後的草地與天空彩虹" }
}, xs = ["rain", "giant", "umbrella", "tiny", "wet", "roof", "dry", "idea", "together", "share", "count", "hold", "pole", "rope", "join", "knot", "gap", "wind", "strong", "lift"], As = ["A rainy hello", "A tiny umbrella", "Can I help?", "Under a roof", "A bright idea", "Many little helpers", "Count the colors", "A job for everyone", "Join the handles", "A little gap", "Close the gap", "A gust of wind", "A stronger frame", "Check the knots", "One, two, three!", "Dry at last", "Room to share", "Step together", "After the rain", "Small things, big help"], vs = ["village", "village", "village", "workshop", "workshop", "workshop", "workshop", "workshop", "workshop", "workshop", "workshop", "green", "workshop", "workshop", "green", "green", "green", "green", "sunshine", "sunshine"], Ts = [["rain", "giant"], ["umbrella", "tiny", "wet"], ["umbrella"], ["roof", "dry"], ["idea", "together"], ["share"], ["count"], ["hold", "pole", "rope"], ["join", "knot"], ["gap", "lift"], ["gap"], ["wind"], ["strong"], ["rope", "knot"], ["lift", "together"], ["dry"], ["share"], ["together"], ["dry"], ["together", "share"]], Cs = [["yellow", "rain"], ["yellow", "rain"], ["yellow", "red"], ["roof", "yellow"], ["red", "blue"], ["red", "blue", "boy"], ["red", "yellow", "blue", "boy"], ["frame", "rope", "boy"], ["red", "blue", "rope", "frame", "boy"], ["red", "blue", "gap", "boy"], ["red", "blue", "gap", "boy"], ["canopy", "boy"], ["frame", "rope", "boy"], ["frame", "rope", "boy"], ["canopy", "boy", "friend"], ["canopy"], ["canopy", "boy", "friend"], ["canopy", "boy", "friend"], ["canopy", "boy", "friend", "sun"], ["canopy", "boy", "friend"]], gt = ["rain", "yellow", "red", "roof", "red", "boy", "yellow", "frame", "rope", "gap", "blue", "canopy", "frame", "rope", "canopy", "giant", "friend", "gail", "sun", "boy"];
function ta(t) {
  return Zt.map((a, e) => {
    const s = {};
    e >= 3 && (s.giant = { x: 80, w: 34, h: 77, y: 56 }), e >= 4 && e <= 10 && (s.red = { x: 35, y: 56, w: 24, h: 36 }, s.blue = { x: 58, y: 56, w: 24, h: 36 }, s.yellow = { x: 47, y: 37, w: 22, h: 33 }, s.boy = { x: 12 }), e >= 14 && (s.giant = { x: 66, w: 30, h: 68, y: 60 }, s.gail = { x: 43 }, s.boy = { x: 26 }, s.friend = { x: 82 }, s.canopy = { x: 54, y: 38, w: 85, h: 72 });
    let o = { type: "find", prompt: gt[e] === "gail" ? "Find Gail." : `Find the ${ea[gt[e]].word}.`, hint: "點圖片找單字，也可以先聽提示。", answer: gt[e] };
    return e === 6 && (o = { type: "sequence", prompt: "Tap red, yellow, then blue.", hint: "依序點紅、黃、藍雨傘。", answer: "blue", steps: ["red", "yellow", "blue"] }), (e === 8 || e === 12) && (o = { type: "drag", prompt: "Bring the rope to the pole.", hint: "把繩子拖到支架；也可以先點繩子，再點支架。", answer: "rope", target: "frame" }), e === 10 && (o = { type: "drag", prompt: "Close the gap.", hint: "把藍傘移向紅傘，讓傘緣重疊。", answer: "blue", target: "red" }), e === 13 && (o = { type: "sequence", prompt: "Check the rope, then the pole.", hint: "先點繩結，再點支架。", answer: "frame", steps: ["rope", "frame"] }), e === 14 && (o = { type: "sequence", prompt: "Tap Gail, the friend, then the giant.", hint: "依序點 Gail、小男孩、巨人，一起抬高傘。", answer: "giant", steps: ["gail", "boy", "giant"] }), e >= 15 && (s.giant = { image: "giant-canopy.png", x: 57, y: 50, w: 59, h: 91 }, s.canopy = { image: void 0, x: 57, y: 15, w: 58, h: 20 }, s.gail = { x: 40, y: 76 }, s.boy = { x: 51, y: 77 }, s.friend = { x: 70, y: 77 }), { title: As[e], scene: vs[e], lines: [...a[t]], words: Ts[e], objects: ["gail", "giant", ...Cs[e]], placements: s, mission: o, action: "explore" };
  });
}
function aa(t) {
  const a = {}, e = (s, o, r) => {
    a[s] = { [Math.max(0, Zt[s][t].findIndex((i) => o.test(i)))]: r };
  };
  return e(0, /Gail|wave/i, [{ actor: "gail", x: 35, y: 76, walk: !0 }]), e(2, /lift|stretches|tries/i, [{ actor: "red", x: 35, y: 40 }]), e(3, /step|move|stay/i, [{ actor: "gail", x: 35, y: 76, walk: !0 }]), e(5, /bring|offers|share/i, [{ actor: "boy", x: 32, y: 77, walk: !0 }, { actor: "blue", x: 42, y: 51 }]), e(8, /tie|pull/i, [{ actor: "rope", x: 50, y: 56, rotate: 12 }]), e(10, /closer|overlap|edge/i, [{ actor: "blue", x: 48, y: 56 }]), e(11, /wind|gust/i, [{ actor: "canopy", x: 52, y: 35, rotate: 8 }]), e(13, /pull|check/i, [{ actor: "rope", x: 49, y: 58, rotate: -8 }]), e(14, /lift|raise/i, [{ actor: "canopy", x: 54, y: 31 }]), e(16, /under|invites|come/i, [{ actor: "friend", x: 70, y: 77, walk: !0 }]), e(17, /walk|steps/i, [{ actor: "giant", x: 61, y: 50, walk: !0 }, { actor: "gail", x: 44, y: 76, walk: !0 }, { actor: "boy", x: 55, y: 77, walk: !0 }, { actor: "friend", x: 74, y: 77, walk: !0 }]), a;
}
const Gs = ["巨人在雨中拿著太小的黃傘", "朋友分享不同顏色的雨傘", "Gail 和朋友綁繩子，巨人扶著支架", "朋友合攏雨傘之間的空隙", "大家一起抬起彩虹傘", "巨人與朋友在寬傘下分享空間"], we = (t, a, e, s, o, r) => ({ id: t, kind: "choice", prompt: a, image: `images/story/giant-v1/quiz/scene-${String(e).padStart(2, "0")}.png`, imageAlt: Gs[e - 1], options: s.map((i) => ({ text: i })), answer: [o], explanation: r });
function Bs(t) {
  const a = t === "A", e = t === "C", s = [
    we("who", "Who does Gail meet?", 1, ["a giant", "a wizard", "a sailor", "a princess"], 0, "Gail meets a gentle giant."),
    we("tiny", a ? "Is his umbrella big or tiny?" : "Why are the giant’s shoulders wet?", 1, ["He has no umbrella.", "His umbrella is too tiny.", "He swims in a river.", "He spills a bucket."], 1, "The tiny umbrella cannot cover his shoulders."),
    we("roof", a ? "Where do they stay dry?" : "Where do they plan their work out of the rain?", 2, ["in a puddle", "under a tree branch", "under a roof", "on a boat"], 2, "They use the tall workshop roof to stay dry."),
    we("share", a ? "What do friends share?" : "What do the villagers bring to help?", 2, ["books", "flowers", "cakes", "umbrellas"], 3, "They share their small umbrellas."),
    we("rope", a ? "What ties the handles?" : "What connects the umbrella handles to the frame?", 3, ["rope", "paper", "water", "leaves"], 0, "They use rope to tie the parts together."),
    we("gap", a ? "What must they close?" : "Why do they overlap the umbrella edges?", 4, ["to change the colors", "to close a gap", "to make more rain", "to hide the pole"], 1, "Overlapping the edges closes the gap where rain could enter."),
    we("wind", a ? "The wind blows. What do they do?" : e ? "What is their careful response when the gust shakes the canopy?" : "How do they respond to the wind?", 5, ["Run in different directions.", "Let go at once.", "Lower the pole together.", "Climb onto the umbrella."], 2, "They lower it slowly together before strengthening the frame."),
    we("check", a ? "What do they check?" : "What do they check before lifting again?", 3, ["the flowers", "the books", "the clouds", "the knots"], 3, "They check every knot and connection."),
    we("lift", a ? "How do they lift?" : "What helps the helpers lift smoothly?", 5, ["Lift at the same time.", "Lift without looking.", "Let one child do it.", "Pull in opposite directions."], 0, "They wait until everyone is ready and lift together."),
    we("message", a ? "What helps them make a big umbrella?" : e ? "Which idea best explains their success?" : "What does this story teach?", 6, ["Keep everything for yourself.", "Share and work together.", "The tallest person does every job.", "Stop after one problem."], 1, "Sharing small things and working together makes a big difference.")
  ], o = [
    ["The giant holds a tiny umbrella.", "The giant eats a cake.", "Gail reads a book.", "The sun shines on a picnic."],
    ["Friends put books away.", "Friends share their umbrellas.", "Friends hide under a bed.", "Friends plant a tree."],
    ["They paint a door.", "They jump over a puddle.", "They tie the handles together.", "They wash their boots."],
    ["They open a window.", "They carry a cake.", "They drop all the umbrellas.", "They close the gap."],
    ["They lift the canopy together.", "They run away alone.", "They put the pole in a river.", "They fold a paper hat."],
    ["The giant stands alone in the rain.", "Everyone has room under the canopy.", "Gail looks for a lost book.", "The children make a bigger gap."]
  ], r = [["A tiny umbrella", "Eat a cake", "Read a book", "A sunny picnic"], ["Put books away", "Share umbrellas", "Hide under a bed", "Plant a tree"], ["Paint a door", "Jump a puddle", "Tie handles", "Wash boots"], ["Open a window", "Carry a cake", "Drop umbrellas", "Close the gap"], ["Lift together", "Run away", "Drop the pole", "Fold a hat"], ["Stand alone", "Room for everyone", "Find a book", "Make a gap"]];
  return [...s, ...o.map((i, n) => we("scene-" + n, a ? "Look. What happens?" : e ? "Which description matches this part of the story?" : "Which sentence matches the picture?", n + 1, a ? r[n] : i, n % 4, i[n % 4]))];
}
const sa = [
  { A: ["Gail meets a wizard.", "He waves from his door."], B: ["Gail visits a little stone house.", "A wizard waves from the door.", "“Come in!” he says."], C: ["Gail follows a winding path to a little stone house.", "A friendly wizard opens the round door.", "His tall hat tips as he welcomes her inside."] },
  { A: ["“I will do it later,” he says.", "Gail sees a big mess."], B: ["Books and tools fill the room.", "“I will tidy up later,” says the wizard.", "He settles into his chair."], C: ["Books and tools lie all over the workshop floor.", "“I will tidy up later,” says the wizard with a wave.", "There always seems to be something more pleasant to do."] },
  { A: ["A potion bubbles.", "It is time to stir."], B: ["A potion bubbles in a pot.", "Gail points to the spoon.", "“Is it time to stir?”"], C: ["A potion bubbles inside the wizard’s little magic pot.", "Gail notices the spoon waiting beside it.", "“Does your potion need stirring?” she asks."] },
  { A: ["“Later,” says the wizard.", "The potion starts to burn."], B: ["“I will stir it later,” says the wizard.", "The potion turns brown.", "A curl of smoke rises."], C: ["The wizard puts off stirring while he looks at a picture book.", "Soon the potion turns brown and smells burnt.", "A curl of smoke rises from the pot."] },
  { A: ["“Stop!” says Gail.", "The wizard turns off the heat."], B: ["“Please stop the heat!” calls Gail.", "The wizard turns the heat off with his wand.", "Gail stays back while the pot cools."], C: ["“Please turn off the heat!” Gail calls from a safe distance.", "The wizard uses his wand to stop the heat.", "They leave the hot pot alone until it has cooled."] },
  { A: ["A broom sweeps by itself.", "The wizard says, “Later.”"], B: ["The magic broom sweeps the floor.", "It needs a stop spell.", "“I will stop it later,” says the wizard."], C: ["Across the room, a magic broom keeps sweeping.", "The wizard knows it needs a stop spell.", "“In a moment,” he says, turning back to his book."] },
  { A: ["The broom goes too fast.", "What a mess!"], B: ["The broom races around the room.", "Papers fly into the air.", "Now the mess is even bigger!"], C: ["The broom speeds up and chases papers in circles.", "Instead of cleaning, it scatters them across the floor.", "Gail steps aside as the broom whizzes past."] },
  { A: ["The wizard says, “Stop!”", "The broom is still."], B: ["“Stop!” says the wizard with his wand.", "The broom becomes still.", "He puts it safely by the wall."], C: ["At last, the wizard points his wand and says the stop spell.", "The broom settles gently onto the floor.", "He puts it by the wall before anyone trips over it."] },
  { A: ["They go to the garden.", "A flower needs water."], B: ["Gail looks into the garden.", "The flowers hang their heads.", "“They need water,” she says."], C: ["Gail and the wizard step outside into the garden.", "The flowers droop in the dry soil.", "The watering can is nearby, but nobody has used it."] },
  { A: ["“Later,” he says again.", "“Can we help now?” asks Gail."], B: ["“I will water them later,” he says.", "Gail kneels by a drooping flower.", "“Can we help it now?”"], C: ["The wizard starts to say that he will water the flowers later.", "Gail points to a drooping flower beside her.", "“Could we help this one now?” she asks gently."] },
  { A: ["“There is too much to do!”", "Gail has a list."], B: ["The wizard looks at all the jobs.", "“There is too much to do!” he sighs.", "Gail finds paper for a little list."], C: ["The wizard thinks about the potion, the papers, and the flowers.", "So many unfinished jobs make it hard to choose one.", "Gail brings him a sheet of paper."] },
  { A: ["“One small step,” says Gail.", "“First, fill the can.”"], B: ["“We can take one small step,” says Gail.", "They draw a can on their list.", "“First, fill the watering can.”"], C: ["“We do not have to do everything at once,” Gail explains.", "They draw three simple pictures on their list.", "The first small step is to fill the watering can."] },
  { A: ["They start now.", "Water goes into the can."], B: ["The wizard picks up the can.", "Gail helps him fill it with water.", "They have made a start!"], C: ["The wizard picks up the empty can instead of saying later.", "Gail helps him fill it at the garden tap.", "The job has begun, and the first step already feels manageable."] },
  { A: ["Next, they water one flower.", "They finish one small job."], B: ["Next, they water one flower.", "Then they water the others.", "They finish and mark their list."], C: ["Next, they gently water one flower, then move to the next.", "Soon the whole little flowerbed has enough water.", "They mark the first job as finished on their list."] },
  { A: ["One book goes on the shelf.", "Gail helps with the next."], B: ["They go back to the messy room.", "The wizard puts one book on the shelf.", "Gail helps with the next book."], C: ["Back inside, they choose just one corner of the messy room.", "The wizard puts a book on the shelf, and Gail gathers the next.", "One small action makes the following action easier."] },
  { A: ["The cool pot is clean.", "The wizard will stir now."], B: ["The wizard cleans the cool pot.", "He makes a new potion and stirs it.", "This time, he stays beside it."], C: ["Once the pot is cool, the wizard cleans it and starts a fresh potion.", "He stays by the pot, stirring and watching carefully.", "Gail watches from a safe distance as it turns a lovely green."] },
  { A: ["The broom moves slowly.", "The wizard stops it on time."], B: ["The wizard lets the broom sweep one corner.", "Then he says the stop spell.", "The floor is clean and calm."], C: ["The wizard gives the broom one small corner to sweep.", "As soon as it finishes, he uses the stop spell.", "This time, papers stay neatly on the shelf."] },
  { A: ["The garden looks bright.", "The wizard feels proud."], B: ["Later that afternoon, the flowers look bright.", "The workshop is tidy too.", "The wizard feels proud of his work."], C: ["Later that afternoon, the watered flowers have lifted their heads.", "The workshop is tidy, and the fresh potion is ready.", "The wizard feels proud because he followed each small step."] },
  { A: ["He sees one more book.", "“I will do it now!”"], B: ["The wizard notices one book on the floor.", "“I will put it away now,” he says.", "Gail smiles as he starts by himself."], C: ["Just as Gail is leaving, the wizard spots one more book on the floor.", "This time, nobody needs to remind him.", "“I will put it away now,” he says, and begins straight away."] },
  { A: ["“Start with one small step.”", "Gail waves goodbye."], B: ["“Start with one small step,” says the wizard.", "Gail waves goodbye at the door.", "A little start can go a long way."], C: ["At the door, the wizard thanks Gail for her help.", "He has learned that starting matters more than waiting for a perfect moment.", "One little step today can make tomorrow easier."] }
], Ae = (t) => `prop-${t}.png`, Ze = (t) => ({ sheet: "wizard.png", cell: t, columns: 2 }), oa = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: j("standing"), x: 23, y: 64, w: 23, h: 55.2 },
  wizard: { id: "wizard", word: "wizard", sprite: Ze(0), x: 77, y: 60, w: 40, h: 60 },
  potion: { id: "potion", word: "potion", image: Ae(0), x: 51, y: 72, w: 25, h: 37.5 },
  broom: { id: "broom", word: "broom", image: Ae(1), x: 50, y: 62, w: 20, h: 40 },
  can: { id: "can", word: "water", image: Ae(2), x: 46, y: 76, w: 20, h: 30 },
  flower: { id: "flower", word: "flower", image: Ae(3), x: 57, y: 76, w: 24, h: 36 },
  bloom: { id: "bloom", word: "flower", image: Ae(4), x: 55, y: 76, w: 24, h: 36 },
  list: { id: "list", word: "list", image: Ae(5), x: 48, y: 66, w: 24, h: 36 },
  spoon: { id: "spoon", word: "stir", image: Ae(6), x: 38, y: 82, w: 14, h: 21 },
  books: { id: "books", word: "book", image: Ae(7), x: 47, y: 80, w: 22, h: 33 },
  wand: { id: "wand", word: "stop", image: Ae(8), x: 45, y: 79, w: 18, h: 27 },
  shelf: { id: "shelf", word: "shelf", x: 53, y: 30, w: 24, h: 22 },
  door: { id: "door", word: "door", x: 76, y: 37, w: 27, h: 35 },
  stove: { id: "stove", word: "heat", x: 24, y: 43, w: 19, h: 22 }
}, Ss = {
  cottage: { name: "魔法師的小屋", caption: "A LITTLE VISIT", alt: "圓門石屋與留白石板路" },
  workshop: { name: "藥水工作室", caption: "ONE THING AT A TIME", alt: "暖色魔法工作室，後方有爐子和瓶罐" },
  storeroom: { name: "掃帚儲藏室", caption: "A SMALL STEP", alt: "書架與寬敞木地板的魔法儲藏室" },
  garden: { name: "魔法花園", caption: "START WITH ONE FLOWER", alt: "石牆環繞的陽光花園與草地" }
}, Es = ["A little visit", "Always later", "A bubbling potion", "A burnt surprise", "Turn off the heat", "The magic broom", "A bigger mess", "The stop spell", "Thirsty flowers", "Why not now?", "Too many jobs", "One small step", "Make a start", "One flower at a time", "One book at a time", "Watch and stir", "Stop on time", "A proud wizard", "I will do it now", "A little start"], Ls = ["cottage", "storeroom", "workshop", "workshop", "workshop", "storeroom", "storeroom", "storeroom", "garden", "garden", "storeroom", "garden", "garden", "garden", "storeroom", "workshop", "storeroom", "garden", "storeroom", "cottage"], Ws = [["wizard"], ["later", "mess"], ["potion", "stir"], ["later", "burn"], ["stop"], ["broom", "later"], ["mess", "broom"], ["stop"], ["garden", "water", "flower"], ["now", "help"], ["list"], ["step", "first"], ["start", "now"], ["next", "finish"], ["help", "next"], ["stir", "potion"], ["broom", "stop"], ["proud", "garden"], ["now", "start"], ["step", "start"]], Is = [["door"], ["books", "shelf"], ["potion", "spoon", "stove"], ["potion", "spoon", "stove"], ["potion", "wand"], ["broom", "books"], ["broom", "books"], ["broom", "wand"], ["flower", "can"], ["flower", "can"], ["list", "books"], ["list", "can"], ["can", "list"], ["can", "flower"], ["books", "shelf"], ["potion", "spoon", "stove"], ["broom", "wand"], ["bloom", "can"], ["books", "shelf"], ["door"]], qt = ["wizard", "books", "spoon", "potion", "wand", "broom", "broom", "wand", "flower", "can", "list", "list", "can", "can", "books", "spoon", "wand", "bloom", "books", "wizard"];
function ra(t) {
  return sa.map((a, e) => {
    const s = {};
    [1, 3, 5, 9].includes(e) && (s.wizard = { sprite: Ze(1) }), [4, 6, 10].includes(e) && (s.wizard = { sprite: Ze(2) }), [11, 12, 13].includes(e) && (s.wizard = { sprite: Ze(3), w: 35, h: 52.5, y: 65 }), [9, 11, 13].includes(e) && (s.gail = { image: j("seated"), w: 24, h: 38.7, y: 70 }), [2, 3, 4, 15].includes(e) && (s.gail = { x: 20 }), e === 13 && (s.can = { x: 38, y: 77 }, s.flower = { x: 56, y: 77 });
    let o = { type: "find", prompt: `Find the ${oa[qt[e]].word}.`, hint: "點場景中的物件，聽聽英文。", answer: qt[e] };
    return (e === 7 || e === 16) && (o = { type: "sequence", prompt: "Tap the wand, then the broom.", hint: "先點魔杖，再點掃帚，用停止咒語。", answer: "broom", steps: ["wand", "broom"] }), e === 11 && (o = { type: "sequence", prompt: "Tap the list, then the can.", hint: "先看清單，再準備水壺，一次一步。", answer: "can", steps: ["list", "can"] }), e === 13 && (o = { type: "drag", prompt: "Water one flower.", hint: "把水壺拖到花朵；也可先點水壺，再點花朵。", answer: "can", target: "flower" }), (e === 14 || e === 18) && (o = { type: "drag", prompt: "Put one book on the shelf.", hint: "把書拖上書架；也可先點書，再點書架。", answer: "books", target: "shelf" }), e === 15 && (o = { type: "sequence", prompt: "Tap the spoon, then the potion.", hint: "先点湯匙，再點藥水，陪魔法師注意攪拌。", answer: "potion", steps: ["spoon", "potion"] }), { title: Es[e], scene: Ls[e], lines: [...a[t]], words: Ws[e], objects: ["gail", "wizard", ...Is[e]], placements: s, mission: o, action: "explore" };
  });
}
function ia(t) {
  const a = {}, e = (s, o, r) => {
    const i = Math.max(0, sa[s][t].findIndex((n) => o.test(n)));
    a[s] = { ...a[s], [i]: r };
  };
  return e(0, /meets|visits|follows/i, [{ actor: "gail", x: 36, y: 64, walk: !0 }]), e(3, /burn|brown/i, [{ actor: "potion", x: 51, y: 72, rotate: 4 }]), e(5, /broom/i, [{ actor: "broom", x: 58, y: 67, rotate: -18 }]), e(6, /broom|races/i, [{ actor: "broom", x: 42, y: 45, rotate: 36 }, { actor: "books", x: 56, y: 54, rotate: -18 }]), e(7, /stop/i, [{ actor: "broom", x: 59, y: 69, rotate: 0 }]), e(8, /garden|outside/i, [{ actor: "gail", x: 34, y: 64, walk: !0 }]), e(12, /fill|water/i, [{ actor: "can", x: 47, y: 70, rotate: -8 }]), e(13, /water/i, [{ actor: "can", x: 65, y: 63, rotate: -18 }]), e(14, /shelf/i, [{ actor: "books", x: 53, y: 30 }]), e(15, /stir/i, [{ actor: "spoon", x: 50, y: 61, rotate: 25 }]), e(16, /broom/i, [{ actor: "broom", x: 52, y: 69, rotate: -12 }]), e(18, /away|shelf/i, [{ actor: "books", x: 53, y: 30 }]), e(19, /goodbye|door/i, [{ actor: "gail", x: 34, y: 64, walk: !0 }]), a;
}
const Hs = (t) => `images/story/wizard-v1/quiz/scene-${String(t).padStart(2, "0")}.png`, fe = (t, a, e, s, o, r) => ({ id: t, kind: "choice", prompt: a, image: Hs(e), imageAlt: ["魔法師拖延攪拌，藥水冒煙", "掃帚吹亂地上的紙張", "Gail 指向小步驟圖畫清單", "兩人替一朵花澆水", "魔法師收一本書上架", "魔法師與 Gail 在整理好的花園"][e - 1], options: s.map((i) => ({ text: i })), answer: [o], explanation: r });
function js(t) {
  const a = t === "A", e = t === "C", s = [
    fe("wizard", "Who does Gail visit?", 1, ["a giant", "a wizard", "a princess", "a sailor"], 1, "Gail visits a wizard."),
    fe("later", a ? "What does he keep saying?" : "Which word does the wizard repeat before Gail helps him?", 1, ["Now", "Please", "Later", "Hello"], 2, "He keeps saying later instead of starting."),
    fe("potion", a ? "What is in the pot?" : "What does the wizard forget to stir?", 1, ["a potion", "a flower", "a book", "a broom"], 0, "The potion needs stirring."),
    fe("heat", e ? "What is the safest response when the potion starts to burn?" : "What does the wizard do when the potion burns?", 1, ["He touches the pot.", "He runs away.", "He waits longer.", "He turns off the heat."], 3, "The wizard turns off the heat. Gail stays back while the pot cools."),
    fe("broom", a ? "What makes a mess?" : "What scatters the papers across the room?", 2, ["the watering can", "the magic broom", "the flower", "the list"], 1, "The magic broom keeps sweeping too fast."),
    fe("stop", a ? "What stops the broom?" : "How does the wizard stop the runaway broom?", 2, ["a new book", "more water", "a stop spell", "a flower"], 2, "The wizard uses a stop spell."),
    fe("list", a ? "What does Gail make?" : "What helps them break a big job into small steps?", 3, ["a picture list", "a bigger mess", "a new hat", "a cake"], 0, "Gail makes a small picture list."),
    fe("first", a ? "What comes first?" : "What is the first step before watering the flowers?", 3, ["Put away every book.", "Make a potion.", "Say later again.", "Fill the watering can."], 3, "First, they fill the watering can."),
    fe("proud", a ? "How does the wizard feel at the end?" : "How does finishing the little jobs make the wizard feel?", 6, ["lonely", "proud", "angry", "afraid"], 1, "He feels proud because he has started and finished his jobs."),
    fe("message", a ? "What helps you begin?" : e ? "Which idea best explains the change in the wizard?" : "What does Gail teach the wizard?", 6, ["Wait for the perfect time.", "Do everything at once.", "Start with one small step.", "Let the mess grow."], 2, "Starting with one small step makes a big job easier.")
  ], o = [
    ["Gail waters a flower.", "The potion begins to burn.", "They put books away.", "The wizard takes a walk."],
    ["Gail fills a watering can.", "The flowers grow tall.", "The broom scatters papers.", "The wizard writes a letter."],
    ["Gail shows a picture list.", "Gail hides the books.", "The broom runs outside.", "The wizard burns the list."],
    ["They wash a hat.", "They stir the potion.", "They sweep the floor.", "They water one flower."],
    ["He says later again.", "He puts one book away.", "He waters the path.", "He opens the door."],
    ["The wizard runs away.", "The workshop burns.", "They enjoy the tidy garden.", "The broom makes a mess."]
  ], r = [["Water a flower", "A burnt potion", "Put books away", "Take a walk"], ["Fill the can", "Tall flowers", "A runaway broom", "Write a letter"], ["Show a list", "Hide the books", "Run outside", "Burn a list"], ["Wash a hat", "Stir a potion", "Sweep the floor", "Water a flower"], ["Say later", "Put a book away", "Water the path", "Open the door"], ["Run away", "A burning room", "A tidy garden", "A bigger mess"]], i = [
    ["Gail waters a flower in the garden.", "The forgotten potion starts to burn while the wizard waits.", "They return books to their shelf.", "The wizard walks away from his house."],
    ["Gail fills the can before watering.", "The flowers bloom after a rainy night.", "The uncontrolled broom sends papers flying around the room.", "The wizard writes a long letter at a desk."],
    ["Gail shows a picture list to make the jobs feel smaller.", "Gail hides the books instead of putting them away.", "The broom leaves through the open door.", "The wizard throws the list into the stove."],
    ["They wash the wizard’s pointed hat.", "They stir a fresh green potion.", "They sweep every room at the same time.", "They begin by gently watering one flower."],
    ["The wizard delays the job again.", "The wizard starts by returning one book to the shelf.", "The wizard pours water over the path.", "The wizard opens the door for a visitor."],
    ["The wizard escapes from the unfinished jobs.", "The entire workshop catches fire.", "The friends enjoy the garden after taking small useful steps.", "The broom keeps scattering all the books."]
  ];
  return [...s, ...o.map((n, l) => fe("scene-" + l, a ? "Look. What happens?" : e ? "Which description best matches the picture?" : "Which sentence matches this scene?", l + 1, a ? r[l] : e ? i[l] : n, [1, 2, 0, 3, 1, 2][l], n[[1, 2, 0, 3, 1, 2][l]]))];
}
const qs = {
  room: { name: "Gail的房間", caption: "GAIL’S BEDROOM", alt: "星空窗戶、床和溫暖的檯燈" },
  garden: { name: "月光花園", caption: "THE MOONLIT GARDEN", alt: "月光下的花園，有樹、花、橋和河流" },
  forest: { name: "螢火蟲森林", caption: "THE FIREFLY FOREST", alt: "發光的螢火蟲、木路牌、紅色蘑菇與森林小徑" },
  pond: { name: "睡蓮池塘", caption: "THE LILY POND", alt: "月光池塘裡的小鴨、粉紅睡蓮、荷葉與岸邊石頭" },
  orchard: { name: "月光果園", caption: "THE APPLE ORCHARD", alt: "紅蘋果掛在樹上，樹下有藤編籃子和燈籠" },
  windmill: { name: "風車草地", caption: "THE WINDMILL MEADOW", alt: "有藍色門的石造風車、白色雛菊與草地圍欄" },
  hill: { name: "星空山丘", caption: "THE STARLIGHT HILL", alt: "山丘上的黃銅望遠鏡、野餐毯與星空月亮" }
}, Os = {
  bed: { id: "bed", word: "bed", x: 28, y: 59, w: 43, h: 37 },
  window: { id: "window", word: "window", x: 53, y: 24, w: 25, h: 32 },
  lamp: { id: "lamp", word: "lamp", x: 75, y: 37, w: 9, h: 17 },
  table: { id: "table", word: "table", x: 77, y: 53, w: 13, h: 20 },
  book: { id: "book", word: "book", x: 49, y: 77, w: 13, h: 10 },
  star: { id: "star", word: "star", x: 52, y: 30, w: 10, h: 15, kind: "star" },
  gail: { id: "gail", word: "Gail", x: 90, y: 72, w: 19, h: 46, kind: "girl" },
  flower: { id: "flower", word: "flower", x: 13, y: 78, w: 21, h: 19 },
  tree: { id: "tree", word: "tree", x: 83, y: 34, w: 22, h: 42 },
  grass: { id: "grass", word: "grass", x: 52, y: 81, w: 23, h: 12 },
  bridge: { id: "bridge", word: "bridge", x: 27, y: 51, w: 22, h: 17 },
  river: { id: "river", word: "river", x: 15, y: 62, w: 20, h: 12 },
  moon: { id: "moon", word: "moon", x: 19, y: 12, w: 12, h: 19 },
  home: { id: "home", word: "home", x: 46, y: 32, w: 15, h: 20 },
  cat: { id: "cat", word: "cat", x: 74, y: 68, w: 12, h: 20, kind: "cat" },
  ladder: { id: "ladder", word: "ladder", x: 38, y: 73, w: 13, h: 29, kind: "ladder" },
  sky: { id: "sky", word: "sky", x: 48, y: 12, w: 20, h: 18 },
  firefly: { id: "firefly", word: "firefly", x: 49, y: 18, w: 12, h: 16 },
  sign: { id: "sign", word: "sign", x: 25, y: 41, w: 22, h: 14 },
  mushroom: { id: "mushroom", word: "mushroom", x: 25, y: 73, w: 22, h: 24 },
  path: { id: "path", word: "path", x: 42, y: 91, w: 21, h: 12 },
  duck: { id: "duck", word: "duck", x: 33, y: 45, w: 11, h: 13 },
  lily: { id: "lily", word: "lily", x: 60, y: 55, w: 17, h: 16 },
  rock: { id: "rock", word: "rock", x: 28, y: 72, w: 14, h: 11 },
  water: { id: "water", word: "water", x: 51, y: 35, w: 15, h: 10 },
  apple: { id: "apple", word: "apple", x: 29, y: 33, w: 10, h: 13 },
  basket: { id: "basket", word: "basket", x: 48, y: 68, w: 19, h: 25 },
  lantern: { id: "lantern", word: "lantern", x: 74, y: 40, w: 8, h: 15 },
  windmill: { id: "windmill", word: "windmill", x: 33, y: 25, w: 29, h: 39 },
  door: { id: "door", word: "door", x: 33, y: 52, w: 9, h: 15 },
  daisy: { id: "daisy", word: "daisy", x: 7, y: 76, w: 9, h: 11 },
  fence: { id: "fence", word: "fence", x: 61, y: 56, w: 19, h: 9 },
  telescope: { id: "telescope", word: "telescope", x: 27, y: 40, w: 24, h: 17 },
  blanket: { id: "blanket", word: "blanket", x: 47, y: 80, w: 28, h: 16 },
  hillMoon: { id: "hillMoon", word: "moon", x: 25, y: 16, w: 17, h: 23 }
}, st = [
  { title: "The dark window", scene: "room", lines: ["Gail cannot sleep.", "She looks out of the window.", "Where is her little star?"], words: ["bed", "window", "lamp"], objects: ["bed", "window", "lamp", "table", "book", "gail"], mission: { type: "find", prompt: "Can you find the window?", hint: "找找看，Gail從哪裡看天空？", answer: "window" }, action: "window" },
  { title: "A little visitor", scene: "room", lines: ["A little star flies into the room.", "It lands on the bed.", "“Hello, little star!” says Gail."], words: ["star", "bed", "room"], objects: ["bed", "window", "lamp", "star", "gail"], star: [36, 46], mission: { type: "tap", prompt: "Tap the star on the bed.", hint: "點點床上的小星星。", answer: "star" }, action: "shine" },
  { title: "Follow the light", scene: "room", lines: ["The star flies up.", "It flies out of the window.", "“Wait for me!” says Gail."], words: ["up", "out", "window"], objects: ["bed", "window", "star", "gail"], star: [37, 49], mission: { type: "follow", prompt: "Follow the star. Tap it three times.", hint: "點小星星三次，跟著它往窗外飛。", answer: "star" }, action: "fly" },
  { title: "The moonlit garden", scene: "garden", lines: ["Gail walks into the garden.", "She sees a pink flower.", "The grass is soft."], words: ["flower", "grass", "walk"], objects: ["flower", "grass", "tree", "moon", "gail"], mission: { type: "find", prompt: "Find the pink flower.", hint: "找出粉紅色的花。", answer: "flower" }, action: "flower" },
  { title: "A new friend", scene: "garden", lines: ["A little cat sits under the tree.", "“Can you help me?” asks Gail.", "The cat looks up."], words: ["cat", "under", "tree"], objects: ["tree", "cat", "flower", "gail"], mission: { type: "find", prompt: "Who is under the tree?", hint: "誰在樹下呢？直接點牠。", answer: "cat" }, action: "cat" },
  { title: "Over the bridge", scene: "garden", lines: ["Gail sees a bridge.", "The river runs under it.", "She walks over the bridge."], words: ["bridge", "river", "over"], objects: ["bridge", "river", "tree", "moon", "gail"], mission: { type: "find", prompt: "Find the bridge over the river.", hint: "找找河流上面的橋。", answer: "bridge" }, action: "cross" },
  { title: "High in the tree", scene: "garden", lines: ["The star is high in the tree.", "“Help me!” says the star.", "Gail has an idea."], words: ["high", "help", "star"], objects: ["star", "tree", "cat", "gail"], star: [81, 22], mission: { type: "tap", prompt: "Find the star high in the tree.", hint: "往高處看，小星星在樹上。", answer: "star" }, action: "shine" },
  { title: "A little help", scene: "garden", lines: ["Gail finds a ladder.", "She puts it next to the tree.", "The cat climbs up to help."], words: ["ladder", "climb", "help"], objects: ["ladder", "tree", "cat", "star", "gail"], star: [81, 22], mission: { type: "drag", prompt: "Put the ladder next to the tree.", hint: "拖梯子到樹旁；也可以先點梯子，再點樹。", answer: "ladder", target: "tree" }, action: "climb" },
  { title: "Back to the sky", scene: "garden", lines: ["The little star is free!", "It flies back into the sky.", "“Thank you, my friends!”"], words: ["sky", "fly", "friend"], objects: ["star", "sky", "tree", "cat", "gail"], star: [64, 52], mission: { type: "drag", prompt: "Help the star fly into the sky.", hint: "把小星星拖回天空；或先點星星，再點天空。", answer: "star", target: "sky" }, action: "sky" },
  { title: "Lights in the forest", scene: "forest", lines: ["Gail walks home through the forest.", "A firefly lights the path.", "She sees a sign and a mushroom."], words: ["firefly", "path", "mushroom"], objects: ["firefly", "sign", "mushroom", "path", "gail"], mission: { type: "sequence", prompt: "Tap the sign, then the firefly.", hint: "先點木路牌，再點發光的螢火蟲。", answer: "firefly", steps: ["sign", "firefly"] }, action: "firefly" },
  { title: "A duck on the pond", scene: "pond", lines: ["Gail stops by a pond.", "A yellow duck swims on the water.", "A pink lily floats nearby."], words: ["duck", "water", "lily"], objects: ["duck", "water", "lily", "rock", "gail"], mission: { type: "find", prompt: "Find the yellow duck on the water.", hint: "找出水面上的黃色小鴨。", answer: "duck" }, action: "duck" },
  { title: "Apples in the moonlight", scene: "orchard", lines: ["Gail walks into an orchard.", "Red apples hang in a tree.", "A basket sits under the tree."], words: ["apple", "basket", "under"], objects: ["apple", "basket", "lantern", "gail"], mission: { type: "sequence", prompt: "Tap the apple, then the basket.", hint: "先點樹上的紅蘋果，再點樹下的籃子。", answer: "basket", steps: ["apple", "basket"] }, action: "basket" },
  { title: "The blue door", scene: "windmill", lines: ["Gail sees a tall windmill.", "It has a little blue door.", "White flowers grow by the path."], words: ["windmill", "door", "white"], objects: ["windmill", "door", "daisy", "fence", "gail"], mission: { type: "find", prompt: "Can you find the blue door?", hint: "找出風車下面的藍色小門。", answer: "door" }, action: "door" },
  { title: "One last look", scene: "hill", lines: ["Gail looks through a telescope.", "She sees the moon and her little star.", "The star shines above the hill."], words: ["telescope", "moon", "above"], objects: ["telescope", "hillMoon", "blanket", "star", "gail"], star: [65, 23], mission: { type: "sequence", prompt: "Tap the telescope, the moon, then the star.", hint: "依序點望遠鏡、月亮、小星星。", answer: "star", steps: ["telescope", "hillMoon", "star"] }, action: "shine" },
  { title: "Good night, little star", scene: "room", lines: ["Gail is home.", "She puts her book on the table.", "She gets into bed.", "“Good night, little star.”"], words: ["home", "book", "table", "sleep"], objects: ["book", "table", "bed", "window", "lamp", "gail"], mission: { type: "sequence", prompt: "Tap the book, the table, then the bed.", hint: "依序點書、桌子、床，陪Gail說晚安。", answer: "bed", steps: ["book", "table", "bed"] }, action: "sleep" }
];
function Bt(t, a = st.length) {
  try {
    const e = JSON.parse(t || "{}");
    return { page: Number.isInteger(e.page) ? Math.max(0, Math.min(a - 1, e.page)) : 0, stars: Array.isArray(e.stars) ? [...new Set(e.stars.filter((s) => typeof s == "number" && Number.isInteger(s) && s >= 0 && s < a))] : [], words: Array.isArray(e.words) ? [...new Set(e.words.filter((s) => typeof s == "string" && s.length < 30).map((s) => /^yuyu$/i.test(s) ? "Gail" : s))] : [] };
  } catch {
    return { page: 0, stars: [], words: [] };
  }
}
function Rs(t, a, e) {
  return Math.abs(t - e.x) <= e.w / 2 + 5 && Math.abs(a - e.y) <= e.h / 2 + 5;
}
function Ms(t) {
  const a = Bt(t);
  return { ...a, page: a.page === 9 ? st.length - 1 : Math.min(a.page, 8), stars: a.stars.filter((e) => e < 10).map((e) => e === 9 ? st.length - 1 : e) };
}
const Qe = (t, a, e, s) => ({ id: t, word: a, x: s, y: 69, w: 22, h: 54, sprite: { sheet: "cast.png", cell: e, columns: 2, clip: e < 2 ? "inset(0 0 3% 0)" : void 0 } }), ve = (t, a, e, s, o = 14, r = 21) => ({ id: t, word: t, x: e, y: s, w: o, h: r, sprite: { sheet: "props.png", cell: a, columns: 3 } }), O = (t, a, e, s, o, r) => ({ id: t, word: a, x: e, y: s, w: o, h: r }), na = {
  gail: { id: "gail", word: "Gail", x: 82, y: 72, w: 21, h: 52, image: "gail-clean-v2.png", kind: "girl" },
  wolf: Qe("wolf", "wolf", 0, 29),
  grandma: Qe("grandma", "Grandma", 1, 27),
  mom: Qe("mom", "Mom", 2, 25),
  manager: Qe("manager", "manager", 3, 52),
  bread: ve("bread", 0, 50, 76),
  bag: ve("bag", 1, 68, 80, 18, 25),
  soup: ve("soup", 2, 38, 74),
  phone: ve("phone", 3, 74, 69, 11, 18),
  cap: ve("cap", 4, 54, 47),
  glasses: ve("glasses", 5, 65, 65, 15, 12),
  blanket: ve("blanket", 6, 45, 76, 23, 27),
  bowl: ve("bowl", 7, 55, 76),
  map: ve("map", 8, 57, 78, 20, 27),
  hood: O("hood", "hood", 83, 53, 19, 18),
  door: O("door", "door", 11, 39, 18, 66),
  window: O("window", "window", 74, 22, 25, 35),
  left: O("left", "left", 20, 65, 18, 15),
  right: O("right", "right", 73, 65, 18, 15),
  crossing: O("crossing", "crossing", 47, 65, 50, 15),
  bird: O("bird", "bird", 17, 10, 12, 12),
  tree: O("tree", "tree", 48, 22, 24, 34),
  bench: O("bench", "bench", 24, 57, 29, 24),
  path: O("path", "path", 71, 65, 25, 22),
  trail: O("trail", "trail", 21, 63, 23, 24),
  sign: O("sign", "sign", 47, 25, 25, 21),
  mail: O("mail", "mail", 13, 31, 23, 36),
  stairs: O("stairs", "stairs", 76, 50, 25, 37),
  number: O("number", "number", 33, 24, 14, 12),
  bell: O("bell", "bell", 52, 30, 9, 14),
  bed: O("bed", "bed", 25, 44, 43, 31),
  ears: O("ears", "ears", 30, 26, 15, 10),
  eyes: O("eyes", "eyes", 30, 36, 12, 9),
  teeth: O("teeth", "teeth", 30, 43, 11, 8),
  tail: O("tail", "tail", 19, 64, 12, 19),
  away: O("away", "away", 90, 83, 15, 20),
  coat: O("coat", "coat", 28, 51, 18, 18),
  floor: O("floor", "floor", 55, 91, 20, 9)
}, la = {
  home: { name: "Gail 的家", caption: "A LITTLE RED HOOD", alt: "陽光下的紫色玄關與紅色大門", sheet: "interiors.png", cell: 0 },
  kitchen: { name: "溫暖廚房", caption: "LUNCH FOR GRANDMA", alt: "奶油色廚房、木桌和明亮窗戶", sheet: "interiors.png", cell: 1 },
  bedroom: { name: "外婆的房間", caption: "GRANDMA’S ROOM", alt: "外婆的床、拼布棉被、窗戶與門", sheet: "interiors.png", cell: 2 },
  lobby: { name: "公寓大廳", caption: "TOGETHER IS BETTER", alt: "有信箱、電梯與樓梯的公寓大廳", sheet: "interiors.png", cell: 3 },
  street: { name: "街角", caption: "STOP · LOOK · CROSS", alt: "安靜街道上的斑馬線與彩色房屋", sheet: "outdoors.png", cell: 0 },
  park: { name: "城市公園", caption: "THROUGH THE PARK", alt: "林蔭公園步道、長椅與樹上的鳥", sheet: "outdoors.png", cell: 1 },
  fork: { name: "公園岔路", caption: "STAY ON THE MAIN PATH", alt: "寬闊主步道、狹窄土路與木製指標", sheet: "outdoors.png", cell: 2 },
  entrance: { name: "外婆家門口", caption: "DING-DONG!", alt: "綠色公寓大門、門牌、門鈴與盆栽", sheet: "outdoors.png", cell: 3 }
}, Ie = [
  {
    title: "The red hood",
    scene: "home",
    lines: [
      "Gail has a red hood.",
      "She puts it on.",
      "Today she will visit Grandma."
    ],
    words: [
      "hood",
      "gail"
    ],
    objects: [
      "gail",
      "hood",
      "door",
      "mom"
    ],
    mission: {
      type: "find",
      answer: "hood",
      prompt: "Find the hood.",
      hint: "依序點選：hood"
    },
    action: "red",
    placements: {}
  },
  {
    title: "A warm lunch",
    scene: "kitchen",
    lines: [
      "Mom makes some soup.",
      "Gail puts bread in a bag.",
      "The lunch is for Grandma."
    ],
    words: [
      "bread",
      "bag",
      "gail"
    ],
    objects: [
      "gail",
      "mom",
      "soup",
      "bread",
      "bag"
    ],
    mission: {
      type: "drag",
      answer: "bread",
      target: "bag",
      prompt: "Put the bread in the bag.",
      hint: "把麵包拖進袋子，或先點麵包再點袋子。"
    },
    action: "red",
    placements: {}
  },
  {
    title: "Ready to go",
    scene: "home",
    lines: [
      "Gail takes her phone.",
      "Mom shows her the way.",
      "“Stay on the main path,” says Mom."
    ],
    words: [
      "phone",
      "map",
      "gail"
    ],
    objects: [
      "gail",
      "mom",
      "phone",
      "map",
      "door"
    ],
    mission: {
      type: "sequence",
      answer: "map",
      prompt: "Tap phone, then map.",
      hint: "依序點選：phone → map",
      steps: [
        "phone",
        "map"
      ]
    },
    action: "red",
    placements: {}
  },
  {
    title: "Stop and look",
    scene: "street",
    lines: [
      "Gail stops at the crossing.",
      "She looks both ways.",
      "Now she can cross."
    ],
    words: [
      "left",
      "right",
      "gail"
    ],
    objects: [
      "gail",
      "left",
      "right",
      "crossing"
    ],
    mission: {
      type: "sequence",
      answer: "right",
      prompt: "Tap left, then right.",
      hint: "依序點選：left → right",
      steps: [
        "left",
        "right"
      ]
    },
    action: "red",
    placements: {}
  },
  {
    title: "Into the park",
    scene: "park",
    lines: [
      "Gail walks into the park.",
      "Tall trees grow by the path.",
      "Birds sing above her."
    ],
    words: [
      "bird",
      "gail"
    ],
    objects: [
      "gail",
      "tree",
      "bird",
      "path"
    ],
    mission: {
      type: "find",
      answer: "bird",
      prompt: "Find the bird.",
      hint: "依序點選：bird"
    },
    action: "red",
    placements: {}
  },
  {
    title: "A hungry wolf",
    scene: "park",
    lines: [
      "A wolf sits on a bench.",
      "His tummy makes a loud noise.",
      "He smells the warm soup."
    ],
    words: [
      "wolf",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "bench",
      "soup"
    ],
    mission: {
      type: "find",
      answer: "wolf",
      prompt: "Find the wolf.",
      hint: "依序點選：wolf"
    },
    action: "red",
    placements: {
      wolf: {
        x: 26,
        y: 56,
        w: 20,
        h: 47
      }
    }
  },
  {
    title: "Hello, Gail",
    scene: "park",
    lines: [
      "“Hello! Where are you going?” asks the wolf.",
      "“To see my grandma,” says Gail.",
      "She keeps walking."
    ],
    words: [
      "path",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "path"
    ],
    mission: {
      type: "find",
      answer: "path",
      prompt: "Find the path.",
      hint: "依序點選：path"
    },
    action: "red",
    placements: {}
  },
  {
    title: "The long way",
    scene: "fork",
    lines: [
      "The wolf points to a small path.",
      "“Try this way!” he says.",
      "Gail looks at her map."
    ],
    words: [
      "map",
      "path",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "map",
      "sign",
      "path",
      "trail"
    ],
    mission: {
      type: "sequence",
      answer: "path",
      prompt: "Tap map, then path.",
      hint: "依序點選：map → path",
      steps: [
        "map",
        "path"
      ]
    },
    action: "red",
    placements: {}
  },
  {
    title: "The right path",
    scene: "fork",
    lines: [
      "“No, thank you,” says Gail.",
      "She stays on the main path.",
      "The wolf runs away."
    ],
    words: [
      "path",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "path",
      "trail"
    ],
    mission: {
      type: "find",
      answer: "path",
      prompt: "Find the path.",
      hint: "依序點選：path"
    },
    action: "red",
    placements: {}
  },
  {
    title: "Grandma goes out",
    scene: "lobby",
    lines: [
      "Grandma puts on her coat.",
      "She goes downstairs to get her mail.",
      "Her door clicks shut."
    ],
    words: [
      "coat",
      "mail",
      "gail"
    ],
    objects: [
      "grandma",
      "coat",
      "mail",
      "stairs"
    ],
    mission: {
      type: "sequence",
      answer: "mail",
      prompt: "Tap coat, then mail.",
      hint: "依序點選：coat → mail",
      steps: [
        "coat",
        "mail"
      ]
    },
    action: "red",
    placements: {
      grandma: {
        x: 41,
        y: 71
      },
      coat: {
        x: 41,
        y: 56
      }
    }
  },
  {
    title: "A sneaky visitor",
    scene: "entrance",
    lines: [
      "The wolf reaches the door.",
      "It is not quite closed.",
      "He slips inside."
    ],
    words: [
      "door",
      "gail"
    ],
    objects: [
      "wolf",
      "door",
      "bell"
    ],
    mission: {
      type: "find",
      answer: "door",
      prompt: "Find the door.",
      hint: "依序點選：door"
    },
    action: "red",
    placements: {
      door: {
        x: 33,
        y: 38,
        w: 25,
        h: 56
      }
    }
  },
  {
    title: "A silly plan",
    scene: "bedroom",
    lines: [
      "The wolf finds a cap.",
      "He puts on Grandma’s glasses.",
      "Then he hides under a blanket."
    ],
    words: [
      "cap",
      "glasses",
      "blanket"
    ],
    objects: [
      "wolf",
      "cap",
      "glasses",
      "blanket",
      "bed"
    ],
    mission: {
      type: "sequence",
      answer: "blanket",
      prompt: "Tap cap, then glasses, then blanket.",
      hint: "依序點選：cap → glasses → blanket",
      steps: [
        "cap",
        "glasses",
        "blanket"
      ]
    },
    action: "red",
    placements: {
      wolf: {
        x: 29,
        y: 60
      }
    }
  },
  {
    title: "Here at last",
    scene: "entrance",
    lines: [
      "Gail comes to Grandma’s building.",
      "She checks the number.",
      "Yes, this is the right place."
    ],
    words: [
      "number",
      "gail"
    ],
    objects: [
      "gail",
      "number",
      "map",
      "door"
    ],
    mission: {
      type: "find",
      answer: "number",
      prompt: "Find the number.",
      hint: "依序點選：number"
    },
    action: "red",
    placements: {
      door: {
        x: 33,
        y: 38,
        w: 25,
        h: 56
      }
    }
  },
  {
    title: "Ding-dong!",
    scene: "entrance",
    lines: [
      "Gail rings the bell.",
      "“Come in!” calls a deep voice.",
      "Gail stays by the open door."
    ],
    words: [
      "bell",
      "gail"
    ],
    objects: [
      "gail",
      "bell",
      "door"
    ],
    mission: {
      type: "find",
      answer: "bell",
      prompt: "Find the bell.",
      hint: "依序點選：bell"
    },
    action: "red",
    placements: {
      door: {
        x: 33,
        y: 38,
        w: 25,
        h: 56
      }
    }
  },
  {
    title: "What big ears!",
    scene: "bedroom",
    lines: [
      "“Grandma, what big ears you have!” says Gail.",
      "“To hear you better,” says the wolf.",
      "One ear pops out."
    ],
    words: [
      "ears",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "ears",
      "cap",
      "glasses",
      "blanket"
    ],
    mission: {
      type: "find",
      answer: "ears",
      prompt: "Find the ears.",
      hint: "依序點選：ears"
    },
    action: "red",
    placements: {
      wolf: {
        x: 30,
        y: 57,
        w: 24,
        h: 63
      },
      cap: {
        x: 30,
        y: 23,
        w: 18,
        h: 13
      },
      glasses: {
        x: 30,
        y: 37,
        w: 14,
        h: 10
      },
      blanket: {
        x: 30,
        y: 72,
        w: 28,
        h: 36
      }
    }
  },
  {
    title: "What big eyes!",
    scene: "bedroom",
    lines: [
      "“What big eyes you have!” says Gail.",
      "“To see you better,” says the wolf.",
      "His glasses slide down."
    ],
    words: [
      "eyes",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "eyes",
      "cap",
      "glasses",
      "blanket"
    ],
    mission: {
      type: "find",
      answer: "eyes",
      prompt: "Find the eyes.",
      hint: "依序點選：eyes"
    },
    action: "red",
    placements: {
      wolf: {
        x: 30,
        y: 57,
        w: 24,
        h: 63
      },
      cap: {
        x: 30,
        y: 23,
        w: 18,
        h: 13
      },
      glasses: {
        x: 30,
        y: 37,
        w: 14,
        h: 10
      },
      blanket: {
        x: 30,
        y: 72,
        w: 28,
        h: 36
      }
    }
  },
  {
    title: "What big teeth!",
    scene: "bedroom",
    lines: [
      "“What big teeth you have!” says Gail.",
      "The wolf gives a wide smile.",
      "Gail takes a step back."
    ],
    words: [
      "teeth",
      "away",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "teeth",
      "cap",
      "glasses",
      "blanket",
      "away"
    ],
    mission: {
      type: "sequence",
      answer: "away",
      prompt: "Tap teeth, then away.",
      hint: "依序點選：teeth → away",
      steps: [
        "teeth",
        "away"
      ]
    },
    action: "red",
    placements: {
      wolf: {
        x: 30,
        y: 57,
        w: 24,
        h: 63
      },
      cap: {
        x: 30,
        y: 23,
        w: 18,
        h: 13
      },
      glasses: {
        x: 30,
        y: 37,
        w: 14,
        h: 10
      },
      blanket: {
        x: 30,
        y: 72,
        w: 28,
        h: 36
      }
    }
  },
  {
    title: "That is not Grandma",
    scene: "bedroom",
    lines: [
      "Gail sees a furry tail.",
      "Grandma does not have a tail!",
      "Gail walks away from the door."
    ],
    words: [
      "tail",
      "away",
      "gail"
    ],
    objects: [
      "gail",
      "wolf",
      "tail",
      "blanket",
      "away"
    ],
    mission: {
      type: "sequence",
      answer: "away",
      prompt: "Tap tail, then away.",
      hint: "依序點選：tail → away",
      steps: [
        "tail",
        "away"
      ]
    },
    action: "red",
    placements: {
      wolf: {
        x: 30,
        y: 57,
        w: 24,
        h: 63
      },
      cap: {
        x: 30,
        y: 23,
        w: 18,
        h: 13
      },
      glasses: {
        x: 30,
        y: 37,
        w: 14,
        h: 10
      },
      blanket: {
        x: 30,
        y: 72,
        w: 28,
        h: 36
      }
    }
  },
  {
    title: "A quick call",
    scene: "entrance",
    lines: [
      "Gail calls Grandma.",
      "“Are you in bed?” she asks.",
      "“No, I am downstairs!” says Grandma."
    ],
    words: [
      "phone",
      "gail"
    ],
    objects: [
      "gail",
      "phone",
      "door"
    ],
    mission: {
      type: "find",
      answer: "phone",
      prompt: "Find the phone.",
      hint: "依序點選：phone"
    },
    action: "red",
    placements: {
      door: {
        x: 33,
        y: 38,
        w: 25,
        h: 56
      }
    }
  },
  {
    title: "Help is here",
    scene: "lobby",
    lines: [
      "Gail meets Grandma downstairs.",
      "They tell the building manager.",
      "The three go upstairs together."
    ],
    words: [
      "grandma",
      "manager",
      "gail"
    ],
    objects: [
      "gail",
      "grandma",
      "manager",
      "stairs"
    ],
    mission: {
      type: "sequence",
      answer: "manager",
      prompt: "Tap grandma, then manager.",
      hint: "依序點選：grandma → manager",
      steps: [
        "grandma",
        "manager"
      ]
    },
    action: "red",
    placements: {}
  },
  {
    title: "We can see you",
    scene: "bedroom",
    lines: [
      "“Come out, Wolf,” says Grandma.",
      "The wolf drops the blanket.",
      "His cap falls to the floor."
    ],
    words: [
      "cap",
      "gail"
    ],
    objects: [
      "gail",
      "grandma",
      "wolf",
      "cap",
      "blanket",
      "floor"
    ],
    mission: {
      type: "find",
      answer: "cap",
      prompt: "Find the cap.",
      hint: "依序點選：cap"
    },
    action: "red",
    placements: {
      grandma: {
        x: 51,
        y: 61,
        w: 19,
        h: 45
      },
      wolf: {
        x: 25,
        y: 64,
        w: 20,
        h: 49
      },
      gail: {
        x: 80,
        y: 72,
        w: 19,
        h: 48
      },
      bread: {
        x: 39,
        y: 77
      },
      bowl: {
        x: 64,
        y: 83
      },
      soup: {
        x: 43,
        y: 84
      },
      bag: {
        x: 67,
        y: 85
      }
    }
  },
  {
    title: "Ask first",
    scene: "kitchen",
    lines: [
      "“I wanted your lunch,” says the wolf.",
      "“You must ask first,” says Gail.",
      "The wolf gives back the bread."
    ],
    words: [
      "bread",
      "bag",
      "gail"
    ],
    objects: [
      "gail",
      "grandma",
      "wolf",
      "bread",
      "bag"
    ],
    mission: {
      type: "drag",
      answer: "bread",
      target: "bag",
      prompt: "Put the bread in the bag.",
      hint: "把麵包拖進袋子，或先點麵包再點袋子。"
    },
    action: "red",
    placements: {
      grandma: {
        x: 51,
        y: 61,
        w: 19,
        h: 45
      },
      wolf: {
        x: 25,
        y: 64,
        w: 20,
        h: 49
      },
      gail: {
        x: 80,
        y: 72,
        w: 19,
        h: 48
      },
      bread: {
        x: 39,
        y: 77
      },
      bowl: {
        x: 64,
        y: 83
      },
      soup: {
        x: 43,
        y: 84
      },
      bag: {
        x: 67,
        y: 85
      }
    }
  },
  {
    title: "May I have some?",
    scene: "kitchen",
    lines: [
      "“I am sorry,” says the wolf.",
      "“May I have some soup?”",
      "Grandma brings one more bowl."
    ],
    words: [
      "bowl",
      "gail"
    ],
    objects: [
      "gail",
      "grandma",
      "wolf",
      "soup",
      "bowl"
    ],
    mission: {
      type: "find",
      answer: "bowl",
      prompt: "Find the bowl.",
      hint: "依序點選：bowl"
    },
    action: "red",
    placements: {
      grandma: {
        x: 51,
        y: 61,
        w: 19,
        h: 45
      },
      wolf: {
        x: 25,
        y: 64,
        w: 20,
        h: 49
      },
      gail: {
        x: 80,
        y: 72,
        w: 19,
        h: 48
      },
      bread: {
        x: 39,
        y: 77
      },
      bowl: {
        x: 64,
        y: 83
      },
      soup: {
        x: 43,
        y: 84
      },
      bag: {
        x: 67,
        y: 85
      }
    }
  },
  {
    title: "A better ending",
    scene: "kitchen",
    lines: [
      "Gail, Grandma, and the wolf share lunch.",
      "Gail calls Mom.",
      "“I am here with Grandma. We are all fine!”"
    ],
    words: [
      "gail",
      "grandma",
      "wolf"
    ],
    objects: [
      "gail",
      "grandma",
      "wolf",
      "soup",
      "bowl",
      "phone"
    ],
    mission: {
      type: "sequence",
      answer: "wolf",
      prompt: "Tap gail, then grandma, then wolf.",
      hint: "依序點選：gail → grandma → wolf",
      steps: [
        "gail",
        "grandma",
        "wolf"
      ]
    },
    action: "red",
    placements: {
      grandma: {
        x: 51,
        y: 61,
        w: 19,
        h: 45
      },
      wolf: {
        x: 25,
        y: 64,
        w: 20,
        h: 49
      },
      gail: {
        x: 80,
        y: 72,
        w: 19,
        h: 48
      },
      bread: {
        x: 39,
        y: 77
      },
      bowl: {
        x: 64,
        y: 83
      },
      soup: {
        x: 43,
        y: 84
      },
      bag: {
        x: 67,
        y: 85
      }
    }
  }
], St = {
  0: {
    1: [
      {
        actor: "gail",
        x: 77,
        y: 72,
        walk: !0
      }
    ],
    2: [
      {
        actor: "gail",
        x: 61,
        y: 72,
        walk: !0
      }
    ]
  },
  1: {
    0: [
      {
        actor: "soup",
        x: 64,
        y: 77,
        walk: !1
      }
    ],
    1: [
      {
        actor: "bread",
        x: 68,
        y: 80,
        walk: !1
      }
    ]
  },
  2: {
    0: [
      {
        actor: "phone",
        x: 77,
        y: 65,
        walk: !1
      }
    ],
    1: [
      {
        actor: "map",
        x: 58,
        y: 63,
        walk: !1
      }
    ]
  },
  3: {
    1: [
      {
        actor: "gail",
        x: 76,
        y: 73,
        walk: !1
      }
    ],
    2: [
      {
        actor: "gail",
        x: 29,
        y: 71,
        walk: !0
      }
    ]
  },
  4: {
    0: [
      {
        actor: "gail",
        x: 52,
        y: 70,
        walk: !0
      }
    ]
  },
  5: {
    0: [
      {
        actor: "wolf",
        x: 26,
        y: 54,
        walk: !1
      }
    ],
    2: [
      {
        actor: "wolf",
        x: 36,
        y: 61,
        walk: !0
      }
    ]
  },
  6: {
    2: [
      {
        actor: "gail",
        x: 60,
        y: 70,
        walk: !0
      }
    ]
  },
  7: {
    0: [
      {
        actor: "wolf",
        x: 35,
        y: 65,
        walk: !0
      }
    ],
    2: [
      {
        actor: "map",
        x: 74,
        y: 64,
        walk: !1
      }
    ]
  },
  8: {
    1: [
      {
        actor: "gail",
        x: 66,
        y: 62,
        walk: !0
      }
    ],
    2: [
      {
        actor: "wolf",
        x: 12,
        y: 60,
        walk: !0
      }
    ]
  },
  9: {
    1: [
      {
        actor: "grandma",
        x: 28,
        y: 73,
        walk: !0
      }
    ]
  },
  10: {
    0: [
      {
        actor: "wolf",
        x: 43,
        y: 69,
        walk: !0
      }
    ],
    2: [
      {
        actor: "wolf",
        x: 33,
        y: 53,
        walk: !0
      }
    ]
  },
  11: {
    0: [
      {
        actor: "cap",
        x: 29,
        y: 31,
        walk: !1
      }
    ],
    1: [
      {
        actor: "glasses",
        x: 29,
        y: 42,
        walk: !1
      }
    ],
    2: [
      {
        actor: "blanket",
        x: 29,
        y: 70,
        walk: !1
      }
    ]
  },
  12: {
    0: [
      {
        actor: "gail",
        x: 63,
        y: 71,
        walk: !0
      }
    ]
  },
  13: {
    0: [
      {
        actor: "gail",
        x: 62,
        y: 69,
        walk: !0
      }
    ]
  },
  14: {
    2: [
      {
        actor: "cap",
        x: 33,
        y: 25,
        walk: !1
      }
    ]
  },
  15: {
    2: [
      {
        actor: "glasses",
        x: 30,
        y: 44,
        walk: !1
      }
    ]
  },
  16: {
    2: [
      {
        actor: "gail",
        x: 91,
        y: 75,
        walk: !0
      }
    ]
  },
  17: {
    2: [
      {
        actor: "gail",
        x: 93,
        y: 76,
        walk: !0
      }
    ]
  },
  18: {
    0: [
      {
        actor: "phone",
        x: 75,
        y: 57,
        walk: !1
      }
    ]
  },
  19: {
    0: [
      {
        actor: "gail",
        x: 73,
        y: 73,
        walk: !0
      }
    ],
    2: [
      {
        actor: "grandma",
        x: 65,
        y: 56,
        walk: !0
      },
      {
        actor: "manager",
        x: 76,
        y: 61,
        walk: !0
      },
      {
        actor: "gail",
        x: 84,
        y: 67,
        walk: !0
      }
    ]
  },
  20: {
    1: [
      {
        actor: "blanket",
        x: 43,
        y: 89,
        walk: !1
      }
    ],
    2: [
      {
        actor: "cap",
        x: 56,
        y: 91,
        walk: !1
      }
    ]
  },
  21: {
    2: [
      {
        actor: "bread",
        x: 67,
        y: 85,
        walk: !1
      }
    ]
  },
  22: {
    2: [
      {
        actor: "bowl",
        x: 64,
        y: 83,
        walk: !1
      }
    ]
  },
  23: {
    1: [
      {
        actor: "phone",
        x: 78,
        y: 61,
        walk: !1
      }
    ]
  }
};
la.dining = { name: "外婆的餐桌", caption: "A BETTER ENDING", alt: "陽光下的木餐桌、椅子與外婆家窗戶" };
for (const t of [21, 22, 23]) Ie[t].scene = "dining";
for (const t of [21, 22, 23])
  Object.assign(Ie[t].placements, { grandma: { x: 51, y: 42, w: 21, h: 50 }, wolf: { x: 22, y: 51, w: 23, h: 56 }, gail: { x: 80, y: 57, w: 22, h: 54 }, soup: { x: 44, y: 60, w: 14, h: 21 }, bowl: { x: 62, y: 62, w: 14, h: 21 }, phone: { x: 82, y: 57, w: 10, h: 17 } });
St[22][2] = [{ actor: "bowl", x: 62, y: 62 }];
for (const t of Ie) t.words = t.words.map((a) => a === "gail" ? "Gail" : a === "grandma" ? "Grandma" : a);
Ie[0].placements = { ...Ie[0].placements, gail: { image: j("standing") }, hood: { image: "cape.png", x: 63, y: 62, w: 19, h: 22 } };
St[0][1] = [{ actor: "hood", x: 82, y: 61 }];
for (const t of [14, 15, 16, 17])
  Ie[t].placements = { ...Ie[t].placements, ears: { x: 30, y: 35, w: 13, h: 10 }, eyes: { x: 31, y: 41, w: 11, h: 8 }, teeth: { x: 32, y: 46, w: 10, h: 8 }, tail: { x: 22, y: 64, w: 10, h: 19 } };
const Et = {
  gail: {
    id: "gail",
    word: "Gail",
    x: 82,
    y: 69,
    w: 21,
    h: 52,
    kind: "girl",
    image: j("standing")
  },
  mom: {
    id: "mom",
    word: "Mom",
    x: 20,
    y: 66,
    w: 22,
    h: 56,
    sprite: {
      sheet: "../red-hood-v1/cast.png",
      cell: 2,
      columns: 2
    }
  },
  dad: {
    id: "dad",
    word: "Dad",
    x: 48,
    y: 63,
    w: 24,
    h: 62,
    image: "dad.png"
  },
  flour: {
    id: "flour",
    word: "flour",
    x: 36,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 0,
      columns: 3
    }
  },
  milk: {
    id: "milk",
    word: "milk",
    x: 53,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 1,
      columns: 3
    }
  },
  eggs: {
    id: "eggs",
    word: "eggs",
    x: 70,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 2,
      columns: 3
    }
  },
  strawberries: {
    id: "strawberries",
    word: "strawberries",
    x: 36,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 3,
      columns: 3
    }
  },
  butter: {
    id: "butter",
    word: "butter",
    x: 53,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 4,
      columns: 3
    }
  },
  sugar: {
    id: "sugar",
    word: "sugar",
    x: 70,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 5,
      columns: 3
    }
  },
  bowl: {
    id: "bowl",
    word: "bowl",
    x: 52,
    y: 76,
    w: 19,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 6,
      columns: 3
    }
  },
  whisk: {
    id: "whisk",
    word: "whisk",
    x: 68,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 7,
      columns: 3
    }
  },
  basket: {
    id: "basket",
    word: "basket",
    x: 58,
    y: 76,
    w: 16,
    h: 26,
    sprite: {
      sheet: "ingredients.png",
      cell: 8,
      columns: 3
    }
  },
  plain: {
    id: "plain",
    word: "plain",
    x: 53,
    y: 74,
    w: 33,
    h: 36,
    sprite: {
      sheet: "cakes.png",
      cell: 0,
      columns: 2
    }
  },
  frosted: {
    id: "frosted",
    word: "frosted",
    x: 53,
    y: 74,
    w: 33,
    h: 36,
    sprite: {
      sheet: "cakes.png",
      cell: 1,
      columns: 2
    }
  },
  decorated: {
    id: "decorated",
    word: "decorated",
    x: 53,
    y: 74,
    w: 33,
    h: 36,
    sprite: {
      sheet: "cakes.png",
      cell: 2,
      columns: 2
    }
  },
  finished: {
    id: "finished",
    word: "finished",
    x: 53,
    y: 74,
    w: 33,
    h: 36,
    sprite: {
      sheet: "cakes.png",
      cell: 3,
      columns: 2
    }
  },
  calendar: {
    id: "calendar",
    word: "calendar",
    x: 54,
    y: 35,
    w: 14,
    h: 22,
    image: "calendar.svg"
  },
  stall: {
    id: "stall",
    word: "stall",
    x: 50,
    y: 28,
    w: 30,
    h: 30,
    image: "stall.svg"
  },
  door: {
    id: "door",
    word: "door",
    x: 9,
    y: 40,
    w: 16,
    h: 60,
    image: "door.svg"
  },
  sink: {
    id: "sink",
    word: "sink",
    x: 83,
    y: 30,
    w: 20,
    h: 18,
    image: "sink.svg"
  },
  apron: {
    id: "apron",
    word: "apron",
    x: 53,
    y: 62,
    w: 15,
    h: 30,
    image: "apron.svg"
  },
  cup: {
    id: "cup",
    word: "cup",
    x: 69,
    y: 76,
    w: 14,
    h: 21,
    image: "cup.svg"
  },
  cloth: {
    id: "cloth",
    word: "cloth",
    x: 65,
    y: 77,
    w: 16,
    h: 16,
    image: "cloth.svg"
  },
  pan: {
    id: "pan",
    word: "pan",
    x: 54,
    y: 78,
    w: 24,
    h: 20,
    image: "pan.svg"
  },
  spoon: {
    id: "spoon",
    word: "spoon",
    x: 70,
    y: 74,
    w: 12,
    h: 28,
    image: "spoon.svg"
  },
  oven: {
    id: "oven",
    word: "oven",
    x: 18,
    y: 39,
    w: 24,
    h: 32,
    image: "oven.svg"
  },
  timer: {
    id: "timer",
    word: "timer",
    x: 67,
    y: 65,
    w: 13,
    h: 18,
    image: "timer.svg"
  },
  rack: {
    id: "rack",
    word: "rack",
    x: 55,
    y: 83,
    w: 29,
    h: 12,
    image: "rack.svg"
  },
  cream: {
    id: "cream",
    word: "cream",
    x: 34,
    y: 76,
    w: 16,
    h: 22,
    image: "cream.svg"
  },
  spatula: {
    id: "spatula",
    word: "spatula",
    x: 70,
    y: 72,
    w: 12,
    h: 28,
    image: "spatula.svg"
  },
  candle: {
    id: "candle",
    word: "candle",
    x: 73,
    y: 61,
    w: 11,
    h: 26,
    image: "candle.svg"
  },
  slice: {
    id: "slice",
    word: "slice",
    x: 40,
    y: 76,
    w: 18,
    h: 24,
    image: "slice.svg"
  },
  plate: {
    id: "plate",
    word: "plate",
    x: 67,
    y: 82,
    w: 24,
    h: 15,
    image: "plate.svg"
  },
  heart: {
    id: "heart",
    word: "heart",
    x: 53,
    y: 43,
    w: 16,
    h: 22,
    image: "heart.svg"
  }
}, Ps = {
  home: {
    name: "Gail 的家",
    caption: "A LITTLE BIRTHDAY SECRET",
    alt: "溫暖客廳與彩色生日布旗",
    sheet: "scenes.png",
    cell: 0
  },
  market: {
    name: "街角市場",
    caption: "A BASKET FULL OF POSSIBILITIES",
    alt: "蔬果攤、雜貨店和石板街道",
    sheet: "scenes.png",
    cell: 1
  },
  kitchen: {
    name: "親子烘焙廚房",
    caption: "A LITTLE FLOUR. A LOT OF LOVE.",
    alt: "薄荷綠廚房和乾淨木製料理桌",
    sheet: "scenes.png",
    cell: 2
  },
  party: {
    name: "生日餐桌",
    caption: "SEVEN CANDLES IN MY HEART",
    alt: "溫暖生日餐廳、彩旗和慶生桌",
    sheet: "scenes.png",
    cell: 3
  }
}, ee = [
  {
    title: "Seven soon",
    scene: "home",
    lines: [
      "Gail will be seven tomorrow.",
      "“What is my birthday gift?” she asks.",
      "Mom smiles. “Come with me!”"
    ],
    words: [
      "calendar"
    ],
    objects: [
      "gail",
      "mom",
      "calendar"
    ],
    mission: {
      type: "find",
      answer: "calendar",
      prompt: "Find the calendar.",
      hint: "點選 calendar"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "A little surprise",
    scene: "home",
    lines: [
      "“Is it a toy?” asks Gail.",
      "“Not yet! We have something to do,” says Mom.",
      "Gail picks up a basket."
    ],
    words: [
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "basket"
    ],
    mission: {
      type: "find",
      answer: "basket",
      prompt: "Find the basket.",
      hint: "點選 basket"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Off to the market",
    scene: "market",
    lines: [
      "Gail and Mom walk to the market.",
      "The stalls are full of colors.",
      "Gail holds the basket with both hands."
    ],
    words: [
      "basket",
      "stall"
    ],
    objects: [
      "gail",
      "mom",
      "basket",
      "stall"
    ],
    mission: {
      type: "find",
      answer: "stall",
      prompt: "Find the stall.",
      hint: "點選 stall"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "A bag of flour",
    scene: "market",
    lines: [
      "“First, we need flour,” says Mom.",
      "The flour is soft and white.",
      "Gail puts one bag in the basket."
    ],
    words: [
      "flour",
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "flour",
      "basket"
    ],
    mission: {
      type: "drag",
      answer: "flour",
      prompt: "Move the flour to the basket.",
      hint: "把 flour 放到 basket",
      target: "basket"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Red strawberries",
    scene: "market",
    lines: [
      "Gail sees bright red strawberries.",
      "“These smell sweet!” she says.",
      "She picks a bowl of ripe strawberries."
    ],
    words: [
      "strawberries",
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "strawberries",
      "basket"
    ],
    mission: {
      type: "drag",
      answer: "strawberries",
      prompt: "Move the strawberries to the basket.",
      hint: "把 strawberries 放到 basket",
      target: "basket"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Milk and eggs",
    scene: "market",
    lines: [
      "Next, they buy milk and eggs.",
      "Gail carries the eggs gently.",
      "“I will keep them safe,” she says."
    ],
    words: [
      "milk",
      "eggs",
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "milk",
      "eggs",
      "basket"
    ],
    mission: {
      type: "sequence",
      answer: "milk",
      prompt: "Tap milk, then eggs.",
      hint: "依序點選 milk, eggs",
      steps: [
        "milk",
        "eggs"
      ]
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Two more things",
    scene: "market",
    lines: [
      "Mom adds butter and sugar.",
      "Gail looks inside the basket.",
      "“Are we making something yummy?”"
    ],
    words: [
      "butter",
      "sugar",
      "basket"
    ],
    objects: [
      "gail",
      "mom",
      "butter",
      "sugar",
      "basket"
    ],
    mission: {
      type: "sequence",
      answer: "butter",
      prompt: "Tap butter, then sugar.",
      hint: "依序點選 butter, sugar",
      steps: [
        "butter",
        "sugar"
      ]
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Home with our basket",
    scene: "home",
    lines: [
      "The basket is heavy now.",
      "Mom and Gail carry it together.",
      "At home, they put everything away."
    ],
    words: [
      "basket",
      "door"
    ],
    objects: [
      "gail",
      "mom",
      "basket",
      "door"
    ],
    mission: {
      type: "find",
      answer: "basket",
      prompt: "Find the basket.",
      hint: "點選 basket"
    },
    action: "bake",
    placements: {}
  },
  {
    title: "Ready to bake",
    scene: "kitchen",
    lines: [
      "“We will make your birthday cake!” says Mom.",
      "Gail washes her hands and ties her apron.",
      "“I can help!” she says."
    ],
    words: [
      "sink",
      "apron"
    ],
    objects: [
      "gail",
      "mom",
      "sink",
      "apron"
    ],
    mission: {
      type: "sequence",
      answer: "sink",
      prompt: "Tap sink, then apron.",
      hint: "依序點選 sink, apron",
      steps: [
        "sink",
        "apron"
      ]
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Measure the flour",
    scene: "kitchen",
    lines: [
      "Mom shows Gail a measuring cup.",
      "Gail fills it with flour.",
      "She tips the flour into the bowl."
    ],
    words: [
      "flour",
      "bowl",
      "cup"
    ],
    objects: [
      "gail",
      "mom",
      "flour",
      "bowl",
      "cup"
    ],
    mission: {
      type: "drag",
      answer: "flour",
      prompt: "Move the flour to the bowl.",
      hint: "把 flour 放到 bowl",
      target: "bowl"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Oops, a little cloud",
    scene: "kitchen",
    lines: [
      "Poof! Some flour lands on the table.",
      "Gail looks worried.",
      "“It is all right. We can clean it up.”"
    ],
    words: [
      "flour",
      "cloth",
      "bowl"
    ],
    objects: [
      "gail",
      "mom",
      "flour",
      "cloth",
      "bowl"
    ],
    mission: {
      type: "find",
      answer: "cloth",
      prompt: "Find the cloth.",
      hint: "點選 cloth"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Butter and sugar",
    scene: "kitchen",
    lines: [
      "Gail puts butter and sugar in the bowl.",
      "She stirs until the mixture is soft.",
      "“Round and round,” says Mom."
    ],
    words: [
      "butter",
      "sugar",
      "bowl"
    ],
    objects: [
      "gail",
      "mom",
      "butter",
      "sugar",
      "bowl",
      "whisk"
    ],
    mission: {
      type: "sequence",
      answer: "butter",
      prompt: "Tap butter, then sugar, then whisk.",
      hint: "依序點選 butter, sugar, whisk",
      steps: [
        "butter",
        "sugar",
        "whisk"
      ]
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Crack the eggs",
    scene: "kitchen",
    lines: [
      "Mom helps Gail crack the eggs.",
      "They add them one at a time.",
      "No shells go into the bowl!"
    ],
    words: [
      "eggs",
      "bowl"
    ],
    objects: [
      "gail",
      "mom",
      "eggs",
      "bowl"
    ],
    mission: {
      type: "drag",
      answer: "eggs",
      prompt: "Move the eggs to the bowl.",
      hint: "把 eggs 放到 bowl",
      target: "bowl"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Pour the milk",
    scene: "kitchen",
    lines: [
      "Gail pours in a little milk.",
      "Mom adds the measured flour.",
      "The mixture turns smooth and creamy."
    ],
    words: [
      "milk",
      "flour",
      "bowl"
    ],
    objects: [
      "gail",
      "mom",
      "milk",
      "flour",
      "bowl"
    ],
    mission: {
      type: "drag",
      answer: "milk",
      prompt: "Move the milk to the bowl.",
      hint: "把 milk 放到 bowl",
      target: "bowl"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "My arms are tired",
    scene: "kitchen",
    lines: [
      "Gail stirs the batter slowly.",
      "“My arms are tired,” she says.",
      "Mom helps, and Gail tries again."
    ],
    words: [
      "bowl",
      "whisk"
    ],
    objects: [
      "gail",
      "mom",
      "bowl",
      "whisk"
    ],
    mission: {
      type: "tap",
      answer: "whisk",
      prompt: "Tap the whisk three times.",
      hint: "點攪拌器三次"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Into the cake pan",
    scene: "kitchen",
    lines: [
      "They pour the batter into a cake pan.",
      "Gail scrapes the bowl with a spoon.",
      "“Every little bit!” she says."
    ],
    words: [
      "bowl",
      "pan",
      "spoon"
    ],
    objects: [
      "gail",
      "mom",
      "bowl",
      "pan",
      "spoon"
    ],
    mission: {
      type: "drag",
      answer: "bowl",
      prompt: "Move the bowl to the pan.",
      hint: "把 bowl 放到 pan",
      target: "pan"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Mom uses the oven",
    scene: "kitchen",
    lines: [
      "Mom puts the pan in the hot oven.",
      "Gail stands back and watches.",
      "They set a timer and wait."
    ],
    words: [
      "pan",
      "oven",
      "timer"
    ],
    objects: [
      "gail",
      "mom",
      "pan",
      "oven",
      "timer"
    ],
    mission: {
      type: "sequence",
      answer: "oven",
      prompt: "Tap oven, then timer.",
      hint: "依序點選 oven, timer",
      steps: [
        "oven",
        "timer"
      ]
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "While we wait",
    scene: "kitchen",
    lines: [
      "Gail washes the strawberries.",
      "She dries them with a clean cloth.",
      "Mom cuts them into little pieces."
    ],
    words: [
      "strawberries",
      "sink",
      "cloth"
    ],
    objects: [
      "gail",
      "mom",
      "strawberries",
      "sink",
      "cloth"
    ],
    mission: {
      type: "drag",
      answer: "strawberries",
      prompt: "Move the strawberries to the sink.",
      hint: "把 strawberries 放到 sink",
      target: "sink"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Ding! A golden cake",
    scene: "kitchen",
    lines: [
      "Ding! The kitchen smells wonderful.",
      "Mom takes out the golden cake.",
      "They let it cool on a rack."
    ],
    words: [
      "plain",
      "rack",
      "timer"
    ],
    objects: [
      "gail",
      "mom",
      "plain",
      "rack",
      "timer"
    ],
    mission: {
      type: "drag",
      answer: "plain",
      prompt: "Move the plain to the rack.",
      hint: "把 plain 放到 rack",
      target: "rack"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "Soft white cream",
    scene: "kitchen",
    lines: [
      "The cake is cool now.",
      "Gail spreads soft white cream on top.",
      "“Slowly, all the way around,” says Mom."
    ],
    words: [
      "plain",
      "cream",
      "spatula"
    ],
    objects: [
      "gail",
      "mom",
      "plain",
      "cream",
      "spatula"
    ],
    mission: {
      type: "drag",
      answer: "spatula",
      prompt: "Move the spatula to the plain.",
      hint: "把 spatula 放到 plain",
      target: "plain"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "A strawberry crown",
    scene: "kitchen",
    lines: [
      "Gail places strawberries on the cream.",
      "One here, one there, all around!",
      "Her cake looks like a little crown."
    ],
    words: [
      "frosted",
      "strawberries"
    ],
    objects: [
      "gail",
      "mom",
      "frosted",
      "strawberries"
    ],
    mission: {
      type: "drag",
      answer: "strawberries",
      prompt: "Move the strawberries to the frosted.",
      hint: "把 strawberries 放到 frosted",
      target: "frosted"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      }
    }
  },
  {
    title: "One special candle",
    scene: "party",
    lines: [
      "Gail puts the cake on the table.",
      "Mom gives her a number-seven candle.",
      "Gail places it on top of the cake."
    ],
    words: [
      "decorated",
      "candle"
    ],
    objects: [
      "gail",
      "mom",
      "decorated",
      "candle"
    ],
    mission: {
      type: "drag",
      answer: "candle",
      prompt: "Move the candle to the decorated.",
      hint: "把 candle 放到 decorated",
      target: "decorated"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      },
      dad: {
        x: 47,
        y: 43,
        w: 23,
        h: 60
      }
    }
  },
  {
    title: "Happy birthday, Gail!",
    scene: "party",
    lines: [
      "Dad comes in and hugs Gail.",
      "Mom lights the candle. They sing together.",
      "“Happy birthday, Gail! You are seven!”"
    ],
    words: [
      "finished"
    ],
    objects: [
      "gail",
      "mom",
      "dad",
      "finished"
    ],
    mission: {
      type: "sequence",
      answer: "dad",
      prompt: "Tap mom, then dad.",
      hint: "依序點選 mom, dad",
      steps: [
        "mom",
        "dad"
      ]
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      },
      dad: {
        x: 47,
        y: 43,
        w: 23,
        h: 60
      }
    }
  },
  {
    title: "A wish and a slice",
    scene: "party",
    lines: [
      "Gail makes a wish and blows out the candle.",
      "Dad helps her cut the cake.",
      "She shares a slice with Mom and Dad."
    ],
    words: [
      "finished",
      "slice",
      "plate"
    ],
    objects: [
      "gail",
      "mom",
      "dad",
      "finished",
      "slice",
      "plate"
    ],
    mission: {
      type: "drag",
      answer: "slice",
      prompt: "Move the slice to the plate.",
      hint: "把 slice 放到 plate",
      target: "plate"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      },
      dad: {
        x: 47,
        y: 43,
        w: 23,
        h: 60
      }
    }
  },
  {
    title: "Made with love",
    scene: "party",
    lines: [
      "“This is my favorite gift,” says Gail.",
      "“I made it with you, and I will enjoy every bite.”",
      "Her cake is full of work, care, and love."
    ],
    words: [
      "slice",
      "heart"
    ],
    objects: [
      "gail",
      "mom",
      "dad",
      "slice",
      "heart"
    ],
    mission: {
      type: "find",
      answer: "heart",
      prompt: "Find the heart.",
      hint: "點選 heart"
    },
    action: "bake",
    placements: {
      gail: {
        x: 82,
        y: 51,
        w: 21,
        h: 49
      },
      mom: {
        x: 20,
        y: 46,
        w: 22,
        h: 56
      },
      dad: {
        x: 47,
        y: 43,
        w: 23,
        h: 60
      }
    }
  }
], lt = {
  0: {
    1: [
      {
        actor: "calendar",
        x: 54,
        y: 32,
        rotate: 5
      }
    ]
  },
  1: {
    1: [
      {
        actor: "basket",
        x: 58,
        y: 73,
        rotate: 5
      }
    ]
  },
  2: {
    0: [
      {
        actor: "gail",
        x: 63,
        y: 69,
        walk: !0
      },
      {
        actor: "mom",
        x: 30,
        y: 66,
        walk: !0
      }
    ]
  },
  3: {
    2: [
      {
        actor: "flour",
        x: 58,
        y: 76
      }
    ]
  },
  4: {
    2: [
      {
        actor: "strawberries",
        x: 58,
        y: 76
      }
    ]
  },
  5: {
    1: [
      {
        actor: "milk",
        x: 53,
        y: 73,
        rotate: 5
      }
    ]
  },
  6: {
    1: [
      {
        actor: "butter",
        x: 53,
        y: 73,
        rotate: 5
      }
    ]
  },
  7: {
    0: [
      {
        actor: "basket",
        x: 52,
        y: 73
      }
    ],
    1: [
      {
        actor: "gail",
        x: 64,
        y: 69,
        walk: !0
      }
    ]
  },
  8: {
    1: [
      {
        actor: "sink",
        x: 83,
        y: 27,
        rotate: 5
      }
    ]
  },
  9: {
    2: [
      {
        actor: "flour",
        x: 52,
        y: 76
      }
    ]
  },
  10: {
    1: [
      {
        actor: "cloth",
        x: 65,
        y: 74,
        rotate: 5
      }
    ]
  },
  11: {
    0: [
      {
        actor: "butter",
        x: 52,
        y: 73
      },
      {
        actor: "sugar",
        x: 54,
        y: 72
      }
    ],
    1: [
      {
        actor: "whisk",
        x: 53,
        y: 69,
        rotate: 25
      }
    ]
  },
  12: {
    2: [
      {
        actor: "eggs",
        x: 52,
        y: 76
      }
    ]
  },
  13: {
    2: [
      {
        actor: "milk",
        x: 52,
        y: 76
      }
    ]
  },
  14: {
    0: [
      {
        actor: "whisk",
        x: 50,
        y: 70,
        rotate: -25
      }
    ],
    2: [
      {
        actor: "whisk",
        x: 55,
        y: 70,
        rotate: 25
      }
    ]
  },
  15: {
    2: [
      {
        actor: "bowl",
        x: 54,
        y: 78
      }
    ]
  },
  16: {
    0: [
      {
        actor: "pan",
        x: 18,
        y: 39,
        scale: 0.65
      }
    ],
    2: [
      {
        actor: "timer",
        x: 67,
        y: 63,
        rotate: 6
      }
    ]
  },
  17: {
    2: [
      {
        actor: "strawberries",
        x: 83,
        y: 30
      }
    ]
  },
  18: {
    2: [
      {
        actor: "plain",
        x: 55,
        y: 83
      }
    ]
  },
  19: {
    1: [
      {
        actor: "spatula",
        x: 51,
        y: 63,
        rotate: -25
      }
    ]
  },
  20: {
    1: [
      {
        actor: "strawberries",
        x: 53,
        y: 64
      }
    ]
  },
  21: {
    2: [
      {
        actor: "candle",
        x: 53,
        y: 55
      }
    ]
  },
  22: {
    0: [
      {
        actor: "dad",
        x: 56,
        y: 43,
        walk: !0
      }
    ]
  },
  23: {
    2: [
      {
        actor: "slice",
        x: 67,
        y: 82
      }
    ]
  },
  24: {
    1: [
      {
        actor: "heart",
        x: 53,
        y: 40,
        rotate: 5
      }
    ]
  }
};
ee[0].lines[0] = "Gail is turning seven today.";
ee[6].lines[0] = "Mom adds butter, sugar, and cream.";
ee[6].objects.push("cream");
ee[9].lines[2] = "She levels the top of the cup.";
ee[9].mission = { type: "drag", answer: "flour", target: "cup", prompt: "Move the flour to the cup.", hint: "把麵粉放到量杯" };
lt[9] = { 2: [{ actor: "flour", x: 69, y: 76, rotate: 20 }] };
ee.forEach((t) => {
  ["kitchen", "party"].includes(t.scene) && (t.placements = { ...t.placements, gail: { x: 82, y: 43, w: 21, h: 52 }, mom: { x: 20, y: 40, w: 22, h: 56 } });
});
for (const t of ["plain", "frosted", "decorated", "finished"]) Et[t].word = "cake";
for (const t of ee) t.words = t.words.map((a) => ["plain", "frosted", "decorated", "finished"].includes(a) ? "cake" : a);
ee[22].words = ["birthday", "candle", "seven"];
ee[24].words = ["gift", "care", "love"];
for (const t of ee)
  t.scene === "party" && (t.placements.dad = { x: 47, y: 39, w: 32, h: 68 });
lt[22][0] = [{ actor: "dad", x: 58, y: 39, walk: !0 }];
for (const t of ee) {
  const a = t.mission, e = (s) => Et[s].word;
  a.type === "drag" && (a.prompt = `Move the ${e(a.answer)} to the ${e(a.target)}.`), a.type === "sequence" && (a.prompt = `Tap ${a.steps.map(e).join(", then ")}.`);
}
Object.assign(ee[11].placements, { butter: { x: 32, y: 76 }, sugar: { x: 70, y: 76 }, whisk: { x: 84, y: 74 } });
Object.assign(ee[13].placements, { milk: { x: 32, y: 76 }, flour: { x: 72, y: 76 } });
Object.assign(ee[15].placements, { bowl: { x: 34, y: 76 }, pan: { x: 62, y: 78 }, spoon: { x: 82, y: 74 } });
lt[15] = { 0: [{ actor: "bowl", x: 62, y: 70, rotate: 22 }] };
const et = [
  {
    A: [
      "Gail walks into the forest.",
      "The forest is bright and quiet."
    ],
    B: [
      "Gail follows a little path into the Starry Forest.",
      "Tiny lights shine between the trees."
    ],
    C: [
      "One afternoon, Gail follows an unfamiliar path deep into the Starry Forest.",
      "Tiny golden lights flicker between the trees like little stars."
    ]
  },
  {
    A: [
      "Gail hears a sound.",
      "“Who is crying?”"
    ],
    B: [
      "Suddenly, Gail hears someone crying.",
      "The sound comes from the valley."
    ],
    C: [
      "Suddenly, a soft crying sound drifts through the trees.",
      "Gail stops and listens carefully.",
      "It seems to come from the valley ahead."
    ]
  },
  {
    A: [
      "A little dragon is in the cave.",
      "His name is Pip."
    ],
    B: [
      "Inside a small cave, Gail finds a little dragon named Pip.",
      "He looks very sad."
    ],
    C: [
      "Inside a small cave beneath the cliffs, Gail discovers a little dragon named Pip.",
      "His wings are folded tightly against his back."
    ]
  },
  {
    A: [
      "“What’s wrong?” asks Gail.",
      "“I can’t fly,” says Pip."
    ],
    B: [
      "“What happened?” Gail asks.",
      "Pip looks at his wings.",
      "“I can’t fly anymore.”"
    ],
    C: [
      "Gail gently asks what is wrong.",
      "Pip lowers his head and stares at his wings.",
      "“I can’t fly anymore,” he whispers."
    ]
  },
  {
    A: [
      "Pip could fly before.",
      "He loved the sky."
    ],
    B: [
      "Pip used to fly high above the valley.",
      "Flying was his favorite thing."
    ],
    C: [
      "Pip explains that he once loved flying above the valley.",
      "He would chase clouds and glide through the warm wind for hours."
    ]
  },
  {
    A: [
      "A strong wind blew Pip down.",
      "Pip became afraid."
    ],
    B: [
      "One day, a strong wind pushed Pip from the sky.",
      "He was safe, but he became afraid of flying."
    ],
    C: [
      "One windy afternoon, a powerful gust knocked Pip off balance.",
      "He landed safely in the grass, but the frightening fall stayed in his mind."
    ]
  },
  {
    A: [
      "“I can’t do it,” says Pip."
    ],
    B: [
      "“I will fall again,” says Pip.",
      "“I can’t do it.”"
    ],
    C: [
      "Pip shakes his head.",
      "“If I try again, I might fall.",
      "I’m too afraid.”"
    ]
  },
  {
    A: [
      "“Open your wings,” says Gail.",
      "“Just a little.”"
    ],
    B: [
      "Gail does not ask Pip to fly.",
      "“Let’s just open your wings first.”"
    ],
    C: [
      "Instead of telling Pip to fly, Gail suggests something much smaller.",
      "“Let’s begin by opening your wings.”"
    ]
  },
  {
    A: [
      "Pip opens his wings.",
      "They shake a little."
    ],
    B: [
      "Pip hesitates.",
      "Then he slowly opens his wings."
    ],
    C: [
      "Pip hesitates for a moment.",
      "His wings tremble, but little by little, he stretches them wide."
    ]
  },
  {
    A: [
      "Pip stands on a small rock.",
      "He is still afraid."
    ],
    B: [
      "Next, Pip stands on a small rock.",
      "It is not very high."
    ],
    C: [
      "For the next step, Pip climbs onto a low rock.",
      "It is only a little higher than the grass, but his heart still beats quickly."
    ]
  },
  {
    A: [
      "Pip jumps.",
      "He lands safely."
    ],
    B: [
      "Pip jumps from the rock.",
      "His wings open, and he lands safely."
    ],
    C: [
      "Pip takes a tiny jump.",
      "Without thinking, his wings spread open.",
      "A moment later, he lands safely on the soft grass."
    ]
  },
  {
    A: [
      "“I did it!” says Pip."
    ],
    B: [
      "Pip smiles.",
      "“I did it!”",
      "“You did the first step,” says Gail."
    ],
    C: [
      "Pip stares at his wings in surprise.",
      "“I did it!” Gail smiles.",
      "“Yes.",
      "And that was only your first step.”"
    ]
  },
  {
    A: [
      "The hill is higher.",
      "Pip feels afraid again."
    ],
    B: [
      "They try a higher hill.",
      "Pip becomes afraid again."
    ],
    C: [
      "Soon they reach a slightly higher hill.",
      "Pip looks down and feels the old fear return."
    ]
  },
  {
    A: [
      "Pip falls.",
      "“I can’t do it.”"
    ],
    B: [
      "Pip tries, but he falls onto the grass.",
      "“I knew I couldn’t do it.”"
    ],
    C: [
      "Pip tries again, but this time he tumbles into the grass.",
      "Embarrassed and disappointed, he says, “See?",
      "I knew I couldn’t fly.”"
    ]
  },
  {
    A: [
      "“Try one more time,” says Gail."
    ],
    B: [
      "“One fall does not mean you have failed,” says Gail.",
      "“Let’s try one more time.”"
    ],
    C: [
      "Gail sits beside him.",
      "“One fall does not decide the whole story,” she says.",
      "“We can try one more time.”"
    ]
  },
  {
    A: [
      "Pip jumps again.",
      "The wind lifts him."
    ],
    B: [
      "Pip tries again.",
      "A gentle wind lifts his wings.",
      "He glides!"
    ],
    C: [
      "Pip spreads his wings and jumps again.",
      "A gentle wind slides beneath them.",
      "For the first time since his fall, he glides across the grass."
    ]
  },
  {
    A: [
      "A baby bird is in danger."
    ],
    B: [
      "Suddenly, a baby bird slips toward the edge of its nest.",
      "It needs help."
    ],
    C: [
      "Suddenly, a strong gust shakes the tallest tree.",
      "A baby bird slips toward the edge of its nest and cries for help."
    ]
  },
  {
    A: [
      "“I am afraid,” says Pip.",
      "“But I can try.”"
    ],
    B: [
      "Pip is still afraid.",
      "“But I can try,” he says."
    ],
    C: [
      "Pip’s legs tremble.",
      "He is still afraid, but this time he does not turn away.",
      "“I’m afraid,” he says, “but I can try.”"
    ]
  },
  {
    A: [
      "Pip flies!",
      "He saves the little bird."
    ],
    B: [
      "Pip runs, jumps, and opens his wings.",
      "He flies to the nest and helps the baby bird."
    ],
    C: [
      "Pip runs forward, leaps into the air, and spreads his wings.",
      "The wind catches him.",
      "He rises toward the treetop and gently returns the baby bird to its nest."
    ]
  },
  {
    A: [
      "Afraid? That’s okay.",
      "Try, try, try again.",
      "Open your wings—",
      "and fly again!"
    ],
    B: [
      "You can feel afraid.",
      "You can still try.",
      "Spread your wings,",
      "and reach the sky!"
    ],
    C: [
      "Being brave does not mean fear is gone.",
      "Feel the fear.",
      "Take one more try.",
      "Spread your wings—and meet the sky."
    ]
  }
], qe = { A: "跟讀 · Read Along", B: "初階 · Early Reader", C: "進階 · Independent Reader" }, zs = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: j("standing"), x: 78, y: 70, w: 20, h: 49 },
  pip: { id: "pip", word: "Pip", x: 39, y: 70, w: 33, h: 49, sprite: { sheet: "cast.png", cell: 0, columns: 2 } },
  bird: { id: "bird", word: "bird", x: 65, y: 26, w: 14, h: 21, sprite: { sheet: "cast.png", cell: 3, columns: 2, clip: "inset(0 0 0 20%)" } },
  forest: { id: "forest", word: "forest", x: 20, y: 33, w: 23, h: 35 },
  cave: { id: "cave", word: "cave", x: 25, y: 44, w: 25, h: 32 },
  rock: { id: "rock", word: "rock", x: 23, y: 49, w: 27, h: 14 },
  nest: { id: "nest", word: "nest", x: 76, y: 25, w: 17, h: 15 },
  sky: { id: "sky", word: "sky", x: 51, y: 15, w: 29, h: 21 },
  wing: { id: "wing", word: "wing", x: 27, y: 59, w: 12, h: 20 }
}, Fs = Object.fromEntries([
  ["forest", "星光森林", "THE STARRY FOREST", "金色光點照亮森林小徑", 0],
  ["cave", "山谷洞穴", "PIP’S LITTLE CAVE", "綠色山谷中的小洞穴", 1],
  ["hill", "練習的小山坡", "ONE SMALL STEP", "柔軟草地、低矮石頭與山坡", 2],
  ["nest", "小鳥的家", "A LITTLE COURAGE", "大樹枝上的鳥巢與山谷", 3]
].map(([t, a, e, s, o]) => [t, { name: a, caption: e, alt: s, sheet: "scenes.png", cell: o }])), Ns = ["The Starry Forest", "A crying sound", "Meet Pip", "What is wrong?", "Above the clouds", "The windy day", "I can’t do it", "One small step", "Open your wings", "A little rock", "A tiny jump", "I did it!", "A higher hill", "A little tumble", "One more time", "A gentle wind", "A baby bird", "Afraid, but ready", "Pip takes flight", "Brave little wings"], ut = ["forest", "forest", "cave", "cave", "hill", "hill", "cave", "hill", "hill", "hill", "hill", "hill", "hill", "hill", "hill", "hill", "nest", "nest", "nest", "hill"], $s = [["forest", "quiet"], ["hear", "valley"], ["dragon", "cave"], ["wing", "sad"], ["fly", "sky"], ["wind", "afraid"], ["afraid", "try"], ["wing", "little"], ["open", "wing"], ["rock", "high"], ["jump", "safe"], ["proud", "try"], ["hill", "afraid"], ["fall", "try"], ["practice", "try"], ["wind", "glide"], ["bird", "nest"], ["afraid", "brave"], ["fly", "help"], ["brave", "believe"]], mt = ["forest", "forest", "cave", "pip", "sky", "pip", "pip", "pip", "wing", "rock", "pip", "pip", "rock", "pip", "pip", "sky", "bird", "pip", "nest", "pip"];
function ha(t) {
  return et.map((a, e) => {
    const s = ["gail", ...e >= 2 ? ["pip"] : [], ...e < 2 ? ["forest"] : ut[e] === "cave" ? ["cave"] : ut[e] === "nest" ? ["bird", "nest"] : ["rock", "sky"], ...e === 8 ? ["wing"] : []], o = {};
    return (e === 4 || e === 5 || e === 15 || e === 18) && (o.pip = { x: e === 18 ? 38 : 46, y: e === 18 ? 64 : 39, sprite: { sheet: "cast.png", cell: 2, columns: 2 }, w: 39, h: 58 }), [8, 9, 10, 11, 12, 17, 19].includes(e) && (o.pip = { sprite: { sheet: "cast.png", cell: 1, columns: 2 }, w: 38, h: 57 }), (e === 9 || e === 10) && (o.pip = { ...o.pip, x: 23, y: 28 }), e === 18 && (o.bird = { x: 69, y: 28 }), { title: Ns[e], scene: ut[e], lines: [...a[t]], words: $s[e], objects: s, placements: o, action: "explore", mission: e === 18 ? { type: "drag", prompt: "Help the bird reach its nest.", hint: "把小鳥帶回鳥巢；也可以先點小鳥，再點巢。", answer: "bird", target: "nest" } : { type: "find", prompt: `Find ${mt[e] === "pip" ? "Pip" : `the ${mt[e]}`}.`, hint: "點場景中的物件，聽聽英文。", answer: mt[e] } };
  });
}
function ca(t) {
  const a = {}, e = (o, r, i) => {
    const n = et[o][t], l = Math.max(0, n.findIndex((d) => r.test(d)));
    a[o] = { ...a[o] || {}, [l]: i };
  };
  e(0, /walk|follow/i, [{ actor: "gail", x: 54, y: 70, walk: !0 }]), e(1, /hear|stops/i, [{ actor: "gail", x: 61, y: 70, rotate: -5 }]), e(2, /find|discover|dragon/i, [{ actor: "gail", x: 61, y: 70, walk: !0 }]), e(3, /ask/i, [{ actor: "gail", x: 63, y: 72, rotate: -5 }]), e(4, /fly|flying/i, [{ actor: "pip", x: 65, y: 28 }]), e(5, /wind|gust/i, [{ actor: "pip", x: 46, y: 72, rotate: -12 }]), e(6, /afraid|can’t/i, [{ actor: "pip", x: 36, y: 72, rotate: -5 }]), e(7, /open/i, [{ actor: "gail", x: 64, y: 70, walk: !0 }]), e(8, /open|stretches/i, [{ actor: "pip", x: 39, y: 67, scale: 1.04 }]), e(9, /stand|climbs/i, [{ actor: "gail", x: 52, y: 70, walk: !0 }]), e(10, /jump/i, [{ actor: "pip", x: 40, y: 42 }]);
  const s = et[10][t].length - 1;
  return a[10][s] = [{ actor: "pip", x: 48, y: 68 }], e(11, /smile|did|surprise/i, [{ actor: "pip", x: 48, y: 65, rotate: 5 }]), e(12, /hill/i, [{ actor: "gail", x: 54, y: 59, walk: !0 }, { actor: "pip", x: 28, y: 44, walk: !0 }]), e(13, /fall|tumble/i, [{ actor: "pip", x: 42, y: 72, rotate: -15 }]), e(14, /try|sits/i, [{ actor: "gail", x: 61, y: 72, walk: !0 }]), e(15, /lifts|glide/i, [{ actor: "pip", x: 65, y: 42 }]), e(16, /bird|gust/i, [{ actor: "bird", x: 69, y: 29, rotate: -10 }]), e(17, /try/i, [{ actor: "pip", x: 49, y: 65, walk: !0 }]), e(18, /flies|runs/i, [{ actor: "pip", x: 66, y: 30 }]), a[18][et[18][t].length - 1] = [{ actor: "pip", x: 66, y: 30 }, { actor: "bird", x: 76, y: 24 }], e(19, /wings|sky|fly/i, [{ actor: "pip", x: 52, y: 43 }]), a;
}
const je = (...t) => t.map((a) => ({ text: a }));
function Ys(t) {
  const a = t === "A", e = t === "C";
  return [
    { id: "dragon", kind: "choice", prompt: "Listen. Find the dragon.", audio: "dragon", options: [{ text: "", art: "bird" }, { text: "", art: "pip" }, { text: "", art: "cave" }, { text: "", art: "nest" }], answer: [1], explanation: "Pip is a little dragon." },
    { id: "wing", kind: "choice", prompt: "Listen. Find the wing.", audio: "wing", options: [{ text: "", art: "rock" }, { text: "", art: "nest" }, { text: "", art: "wing" }, { text: "", art: "bird" }], answer: [2], explanation: "Pip opens his wings to fly." },
    { id: "feeling", kind: "choice", prompt: a ? "How does Pip feel?" : "Pip remembers his fall. How does he feel?", art: "pip", options: je("hungry", "afraid", "sleepy", "angry"), answer: [1], explanation: "Pip is afraid of falling again." },
    { id: "action", kind: "choice", prompt: "What is Pip doing?", art: "jump", options: je("sleeping", "eating", "reading", "trying"), answer: [3], explanation: "Pip is trying a little jump." },
    { id: "sentence", kind: "choice", prompt: e ? "Pip is afraid, but he decides to ____." : "I am afraid, but I can ____.", art: "pip", options: je("try", "cave", "cloud", "sandwich"), answer: [0], explanation: "I am afraid, but I can try." },
    { id: "wings", kind: "choice", prompt: "Pip opens his ____.", art: "wing", options: je("books", "shoes", "wings", "doors"), answer: [2], explanation: "Pip opens his wings." },
    { id: "order", kind: "sequence", prompt: a ? "What happens first? Tap in order." : "Put Pip’s three steps in story order.", options: [{ text: a ? "Help the bird" : "Fly to help the bird", art: "bird" }, { text: "Open his wings", art: "wing" }, { text: "Try a little jump", art: "jump" }], answer: [1, 2, 0], explanation: "First, open the wings. Next, try a little jump. Last, fly to help the bird." },
    { id: "cause", kind: "choice", prompt: a ? "Why is Pip afraid?" : e ? "What made Pip stop flying after his windy flight?" : "Why did Pip stop flying?", art: "pip", options: je(...a ? ["He fell.", "He is hungry.", "He has no wings.", "He is tired."] : ["He fell and became afraid.", "He wanted to swim.", "He did not have wings.", "Gail told him to stop."]), answer: [0], explanation: "A strong wind knocked Pip down. He was safe, but the fall frightened him." },
    { id: "courage", kind: "choice", prompt: a ? "Pip helps the bird. Is he still afraid?" : "How does Pip feel before helping the bird?", art: "bird", options: je(...a ? ["No. Never afraid.", "Yes, but he can try.", "He is angry.", "He wants to sleep."] : ["He is angry with Gail.", "He is afraid but willing to try.", "He wants to sleep.", "He does not care."]), answer: [1], explanation: "Pip still feels afraid. He chooses to try and help." },
    { id: "meaning", kind: "choice", prompt: a ? "What can we do when we feel afraid?" : e ? "What does this story tell us about courage?" : "What does Pip learn?", art: "wing", options: je(...a ? ["Never try.", "Laugh at friends.", "Try one small step.", "Always hide."] : ["Only big dragons can be brave.", "Flying is always easy.", "We can try even when we are afraid.", "Dragons should never fly."]), answer: [2], explanation: "Being brave means trying even when you feel afraid. One small step can help." }
  ];
}
function da(t, a) {
  return t.length === a.length && t.every((e, s) => e === a[s]);
}
const pa = [
  { A: ["Gail sees a castle.", "She hears a sigh."], B: ["Gail walks to a quiet castle.", "She hears a little sigh.", "Who is inside?"], C: ["Gail follows a path to a quiet castle.", "A little sigh comes through an open window.", "She stops to listen."] },
  { A: ["Ella is a princess.", "She sits by the window."], B: ["Princess Ella sits by the window.", "She watches children play outside.", "Gail comes into the room."], C: ["Princess Ella sits beside a tall window.", "Outside, children are playing together.", "Gail steps inside and wonders why Ella looks so quiet."] },
  { A: ["Ella has a gift.", "But she feels lonely."], B: ["Ella has many gifts.", "She has blocks and toys.", "But she feels lonely."], C: ["The room is full of gifts, blocks, and toys.", "Yet Ella has no friend beside her.", "A room full of things can still feel lonely."] },
  { A: ["Gail wants to help Ella smile.", "A surprise for Ella!"], B: ["Gail wants to help Ella smile.", "“I have a surprise!” she says.", "She reaches for the blocks."], C: ["Gail wants to help, so she plans a surprise.", "Perhaps a wonderful tower will make Ella smile.", "She reaches for a box of blocks."] },
  { A: ["Gail builds with blocks.", "Ella wants to help."], B: ["Gail builds a tall tower.", "“Can I help?” asks Ella.", "“Wait! It is a surprise,” says Gail."], C: ["Gail carefully builds a tall tower with the blocks.", "Ella reaches out and asks to help.", "“Wait until it is finished!” says Gail, keeping her surprise a secret."] },
  { A: ["The blocks fall.", "Ella picks one up."], B: ["Oh no! The tower falls.", "Gail looks down at the blocks.", "Ella picks up a block to help."], C: ["The tall tower wobbles and falls across the rug.", "Gail looks disappointed.", "Ella picks up a block, hoping they can rebuild it together."] },
  { A: ["Gail makes bubbles.", "She tries a funny hat."], B: ["Gail tries more surprises.", "She makes bubbles and plays music.", "Then she puts on a funny hat."], C: ["Gail tries bubbles, music, and a funny paper hat.", "She is so busy making surprises that she forgets to ask Ella.", "The room becomes noisy."] },
  { A: ["“Please stop,” says Ella.", "Gail stops to listen."], B: ["Ella covers her ears.", "“Please stop,” she says.", "Gail stops and puts the hat down."], C: ["Ella covers her ears and quietly asks Gail to stop.", "Gail puts down the paper hat.", "At last, the room is quiet enough to listen."] },
  { A: ["Gail sits with Ella.", "She listens to her friend."], B: ["Gail sits beside Ella.", "“What would you like?” she asks.", "This time, she listens."], C: ["Gail sits down at Ella’s side instead of making another surprise.", "“What would you like to do?” she asks.", "Then she waits and listens to her friend."] },
  { A: ["“Play with me,” says Ella.", "“Let us play together!”"], B: ["“I want a friend,” says Ella.", "“Will you play with me?”", "“Yes! Let us play together,” says Gail."], C: ["Ella points to the children beyond the window.", "“I do not need another gift. I want a friend to play with.”", "Gail smiles. “Let us choose something together.”"] },
  { A: ["They take a basket.", "They walk to the market."], B: ["They ask Ella’s caregiver to come.", "They take a basket to the market.", "The three walk out together."], C: ["With her caregiver’s permission, Ella chooses a trip to the market.", "Gail brings a basket, and the caregiver comes with them.", "Together, they walk out through the castle gate."] },
  { A: ["An orange rolls away.", "Ella runs to help."], B: ["An orange rolls from a market stall.", "Ella runs after it.", "Gail follows her to help."], C: ["At the market, an orange rolls away from a fruit stall.", "Ella spots it and runs a few steps to help.", "Gail follows while their caregiver waits nearby."] },
  { A: ["They pick up oranges.", "The oranges go in the basket."], B: ["They pick up the oranges together.", "Gail holds the basket for Ella.", "“Thank you!” says the seller."], C: ["Ella picks up the oranges while Gail holds the basket.", "They return the fruit to the grateful seller.", "Working together feels better than watching a surprise."] },
  { A: ["Gail has a pinwheel.", "They share it."], B: ["Gail shows Ella a paper pinwheel.", "They take turns in the open square.", "It is fun to share."], C: ["In the open square, Gail takes out a paper pinwheel.", "She and Ella take turns running while their caregiver watches.", "The little paper wings spin as the friends share."] },
  { A: ["Here comes the rain.", "The pinwheel is wet."], B: ["Drops of rain begin to fall.", "They hurry under an awning.", "The wet pinwheel stops turning."], C: ["Suddenly, rain patters across the square.", "The friends and their caregiver hurry under an awning.", "Their soggy paper pinwheel will no longer turn."] },
  { A: ["“I can help,” says Ella.", "They fix the pinwheel."], B: ["“Let us fix it,” says Ella.", "Gail holds the paper for her.", "They make the pinwheel turn again."], C: ["Ella has an idea for repairing the pinwheel.", "Gail holds the paper while Ella folds it carefully.", "They straighten the wings together until it turns again."] },
  { A: ["Ella makes a paper hat.", "It slips over Gail’s nose!"], B: ["Ella makes Gail a funny paper hat.", "The hat is a little too big.", "It slips down over Gail’s nose."], C: ["With a spare piece of paper, Ella folds a funny hat for Gail.", "Gail puts it on, but one corner slips down.", "It tickles the tip of her nose."] },
  { A: ["“Achoo!” says Gail.", "The friends laugh together."], B: ["“Achoo!” Gail gives a tiny sneeze.", "Ella begins to laugh.", "Soon both friends are laughing."], C: ["Gail gives a tiny sneeze, and the crooked hat bounces.", "Ella begins to laugh, and Gail laughs too.", "Nobody planned this smile; it grew from their shared fun."] },
  { A: ["The friends play with blocks.", "They build together."], B: ["Back at the castle, more friends join them.", "They share the blocks.", "This time, everyone helps to build."], C: ["Back at the castle, two children join Gail and Ella on the rug.", "They share the blocks and build a little castle together.", "Ella adds a piece of her own this time."] },
  { A: ["Ella saves a place for Gail.", "“Come and play, my friend!”"], B: ["Ella pulls out a chair for Gail.", "“Will you come and play tomorrow?”", "Side by side, we laugh and play. A little friendship lights the day."], C: ["Ella pulls out a chair and saves a place beside her.", "“Will you come back tomorrow?” she asks her new friend.", "Side by side, we laugh and play. A little friendship lights the day."] }
], Ge = (t) => {
  const a = { 1: [418, 65, 418, 379], 2: [835, 45, 419, 399], 5: [842, 463, 412, 379], 6: [65, 829, 330, 425], 7: [445, 855, 390, 399], 8: [845, 853, 405, 401] };
  if (a[t]) return { sheet: "support-cast.png", cell: t, columns: 3, rect: a[t], size: 1254 };
  const e = { 0: 0, 2: 3, 3: 1, 4: 2 }[t] || 0;
  return { sheet: "ella-final.png", cell: e, columns: 2, rect: [e % 2 * 611, e < 2 ? 0 : 651, 611, e < 2 ? 651 : 636], size: [1222, 1287] };
}, Te = (t) => ({ sheet: "props.png", cell: t, columns: 3 }), ga = {
  gail: { id: "gail", word: "Gail", kind: "girl", image: j("standing"), x: 27, y: 62, w: 23, h: 55.2 },
  ella: { id: "ella", word: "princess", sprite: Ge(0), x: 73, y: 64, w: 35, h: 52.5 },
  caregiver: { id: "caregiver", word: "caregiver", sprite: Ge(6), x: 87, y: 50, w: 25, h: 37.5 },
  boy: { id: "boy", word: "friend", sprite: Ge(7), x: 15, y: 69, w: 26, h: 39 },
  friend: { id: "friend", word: "friend", sprite: Ge(8), x: 86, y: 69, w: 26, h: 39 },
  gift: { id: "gift", word: "gift", sprite: Te(0), x: 47, y: 72, w: 20, h: 30 },
  block: { id: "block", word: "block", sprite: Te(1), x: 50, y: 79, w: 12, h: 18 },
  tower: { id: "tower", word: "tower", sprite: Te(2), x: 50, y: 68, w: 27, h: 40.5 },
  blocks: { id: "blocks", word: "blocks", sprite: Te(3), x: 50, y: 79, w: 30, h: 30 },
  pinwheel: { id: "pinwheel", word: "pinwheel", sprite: Te(4), x: 50, y: 62, w: 20, h: 30 },
  hat: { id: "hat", word: "hat", sprite: Te(5), x: 47, y: 68, w: 19, h: 28.5 },
  basket: { id: "basket", word: "basket", sprite: Te(6), x: 51, y: 79, w: 22, h: 33 },
  orange: { id: "orange", word: "orange", sprite: Te(7), x: 55, y: 84, w: 11, h: 16.5 },
  chair: { id: "chair", word: "chair", sprite: Te(8), x: 52, y: 73, w: 22, h: 33 },
  castle: { id: "castle", word: "castle", x: 28, y: 29, w: 34, h: 44 },
  window: { id: "window", word: "window", x: 72, y: 25, w: 30, h: 36 },
  market: { id: "market", word: "market", x: 26, y: 32, w: 36, h: 28 },
  rain: { id: "rain", word: "rain", x: 70, y: 23, w: 30, h: 26 }
}, Ds = {
  courtyard: { name: "城堡庭院", caption: "A QUIET CASTLE", alt: "象牙白城堡與花園，前方是寬闊石板路", sheet: "environments.png", cell: 0 },
  room: { name: "城堡遊戲室", caption: "A PLACE FOR A FRIEND", alt: "粉色窗簾、拱窗與寬闊遊戲地毯", sheet: "environments.png", cell: 1 },
  market: { name: "市集廣場", caption: "BETTER TOGETHER", alt: "陽光下的水果攤與寬闊市集廣場", sheet: "environments.png", cell: 2 },
  awning: { name: "雨棚下", caption: "A LITTLE SHARED JOY", alt: "雨中的市集，棚下有乾燥空地與小桌子", sheet: "environments.png", cell: 3 }
}, Vs = ["A quiet castle", "The princess at the window", "So many gifts", "A surprise", "Can I help?", "Down come the blocks", "More surprises", "Please stop", "Time to listen", "A friend to play with", "Out together", "A rolling orange", "Helping hands", "A little pinwheel", "Here comes the rain", "Let us fix it", "A funny paper hat", "A little laugh", "Everyone can help", "A place beside me"], Us = ["courtyard", ...Array(9).fill("room"), "courtyard", "market", "market", "market", "awning", "awning", "awning", "awning", "room", "room"], Ks = [["castle", "listen"], ["princess", "window"], ["gift", "lonely"], ["surprise", "smile"], ["blocks", "help"], ["blocks", "help"], ["surprise", "play"], ["listen"], ["listen", "friend"], ["play", "together"], ["basket", "market"], ["orange", "help"], ["orange", "basket", "together"], ["pinwheel", "share"], ["rain", "pinwheel"], ["help", "together"], ["surprise", "play"], ["laugh", "smile"], ["friend", "share", "blocks"], ["friend", "smile", "together"]], _s = [["castle"], ["window"], ["gift", "blocks"], ["gift", "blocks"], ["tower", "block"], ["blocks", "block"], ["hat", "pinwheel"], ["hat"], ["window"], ["window"], ["basket", "castle", "caregiver"], ["orange", "market", "caregiver"], ["orange", "basket", "caregiver"], ["pinwheel", "caregiver"], ["rain", "pinwheel", "caregiver"], ["pinwheel", "caregiver"], ["hat", "pinwheel", "caregiver"], ["hat", "caregiver"], ["blocks", "block", "boy", "friend"], ["chair", "blocks"]], Ot = ["castle", "window", "gift", "gift", "block", "block", "hat", "ella", "ella", "ella", "basket", "orange", "orange", "pinwheel", "rain", "pinwheel", "hat", "ella", "block", "chair"];
function ua(t) {
  return pa.map((a, e) => {
    const s = {};
    [1, 2, 3].includes(e) && (s.ella = { sprite: Ge(1), y: 66 }), [4, 5, 12, 15].includes(e) && (s.ella = { sprite: Ge(2), w: 27, h: 38.6, y: 69 }), e === 7 && (s.ella = { sprite: Ge(3) }), e >= 17 && (s.ella = { sprite: Ge(4) }), [8, 9, 15, 18].includes(e) && (s.gail = { image: j("seated"), sprite: void 0, w: 24, h: 38.7, y: 69 }), e === 0 && (s.gail = { x: 76 }), [10, 11, 12, 13, 14, 15, 16, 17].includes(e) && (s.ella = { ...s.ella, x: 62 }, s.gail = { ...s.gail, x: 24 }), e === 11 && (s.orange = { x: 44, y: 82 }), e === 12 && (s.orange = { x: 37, y: 86 }), (e === 4 || e === 5) && (s.block = { x: 34, y: 84 }), e === 14 && (s.pinwheel = { x: 45, y: 69 }), e === 15 && (s.pinwheel = { x: 45, y: 72 }), e === 18 && (s.ella = { sprite: Ge(5), w: 26, h: 35.9, y: 70 }, s.gail = { ...s.gail, x: 36 }, s.ella = { ...s.ella, x: 65 }, s.blocks = { x: 50, y: 86, w: 24, h: 24 }, s.block = { x: 51, y: 74 });
    let o = { type: "find", prompt: `Find the ${ga[Ot[e]].word}.`, hint: "點場景中的物件，聽聽英文。", answer: Ot[e] };
    return [4, 5, 18].includes(e) && (o = { type: "drag", prompt: "Add a block. Help build together.", hint: "將小積木拖到積木堆；也可以先點小積木，再點積木堆。", answer: "block", target: e === 4 ? "tower" : "blocks" }), e === 12 && (o = { type: "drag", prompt: "Put the orange in the basket.", hint: "把橘子拖進籃子；也可以先點橘子，再點籃子。", answer: "orange", target: "basket" }), e === 13 && (o = { type: "drag", prompt: "Share the pinwheel with Ella.", hint: "把風車拖給 Ella，或依序點風車、Ella。", answer: "pinwheel", target: "ella" }), e === 15 && (o = { type: "sequence", prompt: "Tap Ella, then the pinwheel.", hint: "先點 Ella，再點風車，一起修好。", answer: "pinwheel", steps: ["ella", "pinwheel"] }), { title: Vs[e], scene: Us[e], lines: [...a[t]], words: Ks[e], objects: [.../* @__PURE__ */ new Set(["gail", ...e === 0 ? [] : ["ella"], ..._s[e]])], placements: s, mission: o, action: "explore" };
  });
}
function ma(t) {
  const a = {}, e = (s, o, r) => {
    const i = Math.max(0, pa[s][t].findIndex((n) => o.test(n)));
    a[s] = { ...a[s], [i]: r };
  };
  return e(0, /castle/i, [{ actor: "gail", x: 47, y: 65, walk: !0 }]), e(1, /Gail/i, [{ actor: "gail", x: 43, y: 65, walk: !0 }]), e(3, /blocks|idea/i, [{ actor: "gail", x: 37, y: 65, walk: !0 }]), e(4, /build/i, [{ actor: "block", x: 50, y: 49 }]), e(5, /picks|picks up/i, [{ actor: "block", x: 64, y: 71 }]), e(6, /hat/i, [{ actor: "hat", x: 27, y: 43, rotate: -12 }]), e(7, /puts|stops/i, [{ actor: "hat", x: 46, y: 80, rotate: 12 }]), e(8, /sits/i, [{ actor: "gail", x: 39, y: 68 }]), e(9, /together/i, [{ actor: "gail", x: 43, y: 68 }]), e(10, /walk/i, [{ actor: "gail", x: 41, y: 65, walk: !0 }, { actor: "ella", x: 67, y: 64, walk: !0 }, { actor: "caregiver", x: 85, y: 50, walk: !0 }]), e(11, /roll/i, [{ actor: "orange", x: 35, y: 83, rotate: 100 }]), e(11, /runs/i, [{ actor: "ella", x: 47, y: 65, walk: !0 }]), e(12, /basket/i, [{ actor: "orange", x: 51, y: 77 }]), e(13, /turns|share/i, [{ actor: "pinwheel", x: 60, y: 62, rotate: 20 }]), e(14, /hurry|wet/i, [{ actor: "gail", x: 31, y: 65, walk: !0 }, { actor: "ella", x: 61, y: 65, walk: !0 }, { actor: "pinwheel", x: 46, y: 72, rotate: 35 }]), e(15, /fix|folds/i, [{ actor: "pinwheel", x: 45, y: 72, rotate: 0 }]), e(16, /hat/i, [{ actor: "hat", x: 24, y: 42, rotate: -13 }]), e(16, /slips|tickles/i, [{ actor: "hat", x: 24, y: 48, rotate: -18 }]), e(17, /sneeze|Achoo/i, [{ actor: "hat", x: 33, y: 51, rotate: 25 }]), e(18, /build|adds/i, [{ actor: "block", x: 50, y: 78 }]), e(19, /chair|place/i, [{ actor: "chair", x: 56, y: 73 }]), a;
}
const Xs = (t) => `images/story/princess-v1/quiz/scene-${String(t).padStart(2, "0")}.png`, be = (t, a, e, s, o, r) => ({ id: t, kind: "choice", prompt: a, image: Xs(e), imageAlt: "故事插圖：" + ["Ella 坐在窗邊", "Ella 撿起積木", "Gail 傾聽 Ella", "兩人收橘子", "兩人修風車", "朋友一起玩積木"][e - 1], options: s.map((i) => ({ text: i })), answer: [o], explanation: r });
function Qs(t) {
  const a = t === "A", e = t === "C", s = [
    be("princess", "Who is Ella?", 1, ["a seller", "a princess", "a dragon", "a teacher"], 1, "Ella is a princess."),
    be("lonely", a ? "How does Ella feel at first?" : "Ella has many gifts. How does she feel at first?", 1, ["hungry", "angry", "lonely", "sleepy"], 2, "Ella feels lonely because she wants a friend to play with."),
    be("blocks", "What is on the rug?", 2, ["blocks", "oranges", "baskets", "pinwheels"], 0, "There are blocks on the rug."),
    be("listen", a ? "What does Gail do?" : "What does Gail do after Ella asks her to stop?", 3, ["She runs away.", "She makes more noise.", "She buys a gift.", "She listens."], 3, "Gail stops and listens to Ella."),
    be("orange", "What are they putting in the basket?", 4, ["gifts", "oranges", "blocks", "hats"], 1, "They put oranges in the basket."),
    be("pinwheel", "What are they fixing?", 5, ["a chair", "a window", "a pinwheel", "a basket"], 2, "They fix the wet pinwheel together."),
    be("wish", a ? "What does Ella want?" : "What does Ella want more than another gift?", 3, ["a friend to play with", "a bigger castle", "more surprises", "a new crown"], 0, "Ella wants a friend to play with."),
    be("rain", a ? "Why is the pinwheel wet?" : "Why does the pinwheel stop turning?", 5, ["It is too sunny.", "A block falls on it.", "Gail paints it.", "Rain makes the paper wet."], 3, "The rain makes the paper wet, so they repair it together."),
    be("laugh", e ? "Why does Ella laugh naturally in the story?" : "Why does Ella begin to laugh?", 6, ["She receives a crown.", "Gail sneezes under a funny hat.", "Someone tells her to smile.", "The castle is empty."], 1, "Gail’s funny hat slips onto her nose. She sneezes, and they laugh together."),
    be("meaning", a ? "What helps a friend?" : e ? "What does Gail learn about friendship?" : "What does Gail learn?", 6, ["Always choosing for them.", "Buying more and more gifts.", "Listening and playing together.", "Making them smile."], 2, "Friends listen, share, and choose things together.")
  ], o = [
    [["Ella runs in the rain.", "Ella sits by the window.", "Ella buys an orange.", "Ella builds a tower."], 1, "Ella sits by the window at the beginning."],
    [["Ella opens a gift.", "Ella holds a pinwheel.", "Ella picks up a block.", "Ella puts on a hat."], 2, "The tower falls, and Ella picks up a block."],
    [["Gail listens to Ella.", "Gail runs to the market.", "Gail collects oranges.", "Gail opens a gift."], 0, "Gail sits down and listens to her friend."],
    [["They build a castle.", "They repair a pinwheel.", "They put on paper hats.", "They put oranges in a basket."], 3, "The friends help collect the oranges."],
    [["They pick up blocks.", "They fix the pinwheel.", "They buy oranges.", "They open gifts."], 1, "Under the awning, they fix the wet pinwheel."],
    [["Ella sits alone.", "They run in the rain.", "The friends play together.", "They collect oranges."], 2, "Back at the castle, everyone joins in."]
  ], r = [["Run in the rain", "Sit by the window", "Buy an orange", "Build a tower"], ["Open a gift", "Hold a pinwheel", "Pick up a block", "Put on a hat"], ["Listen to a friend", "Run to the market", "Collect oranges", "Open a gift"], ["Build a castle", "Fix a pinwheel", "Put on hats", "Collect oranges"], ["Pick up blocks", "Fix a pinwheel", "Buy oranges", "Open gifts"], ["Sit alone", "Run in the rain", "Play together", "Collect oranges"]], i = [
    ["Ella runs through the rain outside.", "Ella sits quietly beside the castle window.", "Ella buys fruit from the seller.", "Ella adds a block to the tower."],
    ["Ella opens another wrapped gift.", "Ella holds the spinning pinwheel.", "Ella picks up a block after the tower falls.", "Ella wears the new paper hat."],
    ["Gail listens while Ella shares her wish.", "Gail hurries alone to the market.", "Gail gathers fruit from the ground.", "Gail opens a surprise for Ella."],
    ["They build a castle out of blocks.", "They fold the wet pinwheel back into shape.", "They try on their paper hats.", "They collect oranges together in a basket."],
    ["They rebuild the fallen block tower.", "They work together to repair the wet pinwheel.", "They buy fruit for a picnic.", "They open the gifts in Ella’s room."],
    ["Ella sits alone among her many gifts.", "The friends hurry through the rain.", "The friends laugh and build with blocks together.", "They return oranges to the market seller."]
  ];
  return [...s, ...o.map(([n, l, d], c) => be("picture-" + (c + 1), a ? "Look. What happens?" : e ? "Which sentence best matches this scene?" : "Which sentence matches the picture?", c + 1, a ? r[c] : e ? i[c] : n, l, d))];
}
function De() {
  return { index: 0, answers: [], attempted: [], complete: !1 };
}
function Rt(t, a) {
  return a.filter((e, s) => t.attempted[s] && da(t.answers[s] || [], e.answer)).length;
}
const ya = { pip: "小龍", bird: "小鳥", wing: "翅膀", gail: "Gail", cave: "洞穴", sky: "天空", rock: "石頭", nest: "鳥巢", jump: "小龍練習跳躍" };
function yt(t) {
  const a = document.createElement("span");
  a.className = "quiz-art art-" + t, a.setAttribute("role", "img"), a.setAttribute("aria-label", ya[t]);
  const e = document.createElement("span");
  e.className = "quiz-art-image", a.append(e);
  const s = { pip: 0, wing: 1, jump: 1, bird: 3 }[t];
  if (s !== void 0)
    e.style.backgroundImage = "url('images/story/dragon-v1/cast.png')", e.style.backgroundSize = "200% 200%", e.style.backgroundPosition = `${s % 2 * 100}% ${Math.floor(s / 2) * 100}%`;
  else if (t === "gail") {
    const o = document.createElement("img");
    o.src = "images/story/little-star-v1/gail-paper-clean.png", o.className = "paper-girl", o.alt = "", e.append(o);
  } else
    e.style.backgroundImage = "url('images/story/dragon-v1/scenes.png')", e.style.backgroundSize = t === "nest" ? "500% 500%" : "200% 200%", e.style.backgroundPosition = t === "cave" ? "100% 0" : t === "nest" ? "94% 66%" : "0 100%";
  return a;
}
function Js(t, a, e, s) {
  const o = (l, d = "", c = "") => {
    const w = document.createElement(l);
    return w.className = d, w.textContent = c, w;
  }, r = (l, d, c) => {
    const w = document.createElement("button");
    return w.className = "wood-button", w.textContent = l, w.setAttribute("aria-label", d), w.onclick = c, w;
  }, i = o("section", "story-quiz");
  i.setAttribute("aria-label", "書末小測驗"), t.append(i);
  function n() {
    if (i.replaceChildren(), i.append(o("span", "eyebrow", `STORY CHALLENGE · LEVEL ${s.level}`)), e.complete) {
      const y = Rt(e, a);
      if (s.ending) {
        const C = document.createElement("img");
        C.className = "quiz-ending-image", C.src = s.ending.image, C.alt = s.ending.alt || "Gail 與 Ella 分享風車", i.append(C);
      } else i.append(yt("wing"));
      i.append(o("h1", "", s.ending?.title || "Brave Little Dragon"), o("p", "", `完成了！答對 ${y} / ${a.length} 題`), o("p", "", s.ending?.line || "Try once. Try twice. Spread your wings—and touch the sky!"));
      const b = o("div", "quiz-actions");
      b.append(r("再試一次", "重新測驗", () => {
        Object.assign(e, De()), n();
      }), r("回故事", "回到故事", s.back)), i.append(b);
      return;
    }
    const l = a[e.index];
    let d = [...e.answers[e.index] || []], c = !!e.attempted[e.index];
    i.append(o("div", "quiz-count", `${e.index + 1} / ${a.length}`));
    const w = o("h1", "", l.prompt);
    i.append(w);
    const T = r("♫", "朗讀題目", () => s.say(l.audio || l.prompt));
    if (T.classList.add("quiz-listen"), i.append(T), i.classList.toggle("scene-question", !!l.image), l.image) {
      const y = document.createElement("img");
      y.className = "quiz-scene-image", y.src = l.image, y.alt = l.imageAlt || "故事場景", i.append(y);
    } else l.art && i.append(yt(l.art));
    const L = o("div", "quiz-options" + (l.options.every((y) => y.art) ? " picture-options" : ""));
    l.kind === "sequence" && (L.style.gridTemplateColumns = `repeat(${l.options.length},minmax(0,1fr))`);
    const H = o("p", "quiz-feedback");
    H.setAttribute("role", "status");
    const B = r("提交答案", "提交答案", () => {
      if (!c) {
        d.length === l.answer.length && A();
        return;
      }
      e.index === a.length - 1 ? (e.complete = !0, s.save(Rt(e, a))) : e.index++, n();
    });
    function m() {
      B.textContent = c ? e.index === a.length - 1 ? "完成 →" : "下一題 →" : "提交答案", B.setAttribute("aria-label", c ? "下一題" : "提交答案"), B.disabled = !c && d.length !== l.answer.length, Array.from(L.children).forEach((y, b) => {
        const C = y;
        C.setAttribute("aria-pressed", String(d.includes(b))), C.classList.toggle("selected-answer", !c && d.includes(b)), C.classList.toggle("correct", c && l.kind === "choice" && l.answer.includes(b)), C.classList.toggle("incorrect", c && l.kind === "choice" && d.includes(b) && !l.answer.includes(b)), l.kind === "sequence" && d.includes(b) ? C.dataset.order = String(d.indexOf(b) + 1) : delete C.dataset.order;
      });
    }
    function A() {
      e.answers[e.index] = [...d], e.attempted[e.index] = !0, c = !0;
      const y = da(d, l.answer);
      H.textContent = (y ? "✓ Great! " : "再看看：") + l.explanation, s.say(H.textContent.replace("再看看：", "Let’s learn. ")), m();
    }
    l.options.forEach((y, b) => {
      const C = r(y.text, y.text || `選擇${y.art ? ya[y.art] : b + 1}`, () => {
        const U = y.text || (y.art === "pip" ? "dragon" : y.art === "jump" ? "jump" : y.art === "gail" ? "Gail" : y.art) || "";
        s.say(U), !c && (l.kind === "sequence" ? d = d.includes(b) ? d.filter((M) => M !== b) : [...d, b] : d = [b], e.answers[e.index] = [...d], H.textContent = l.kind === "sequence" ? "依序選圖，再提交；再點已選圖卡可取消。" : "已選取，按「提交答案」確認。", m());
      });
      C.className = "quiz-option", y.art && C.prepend(yt(y.art)), L.append(C);
    }), m(), i.append(L, H), c && (H.textContent = l.explanation);
    const p = o("div", "quiz-actions");
    p.append(r("← 故事", "回到故事", s.back), B), i.append(p);
  }
  n();
}
function Zs(t) {
  return t.trim() ? [{ text: t, lang: "en-US", start: 0 }] : [];
}
const eo = {
  0: { 1: [{ actor: "gail", x: 62, y: 52, walk: !0 }] },
  1: { 0: [{ actor: "star", x: 53, y: 29 }], 1: [{ actor: "star", x: 36, y: 46 }] },
  2: { 0: [{ actor: "star", x: 42, y: 22 }], 1: [{ actor: "star", x: 54, y: 12 }], 2: [{ actor: "gail", x: 62, y: 52, walk: !0 }] },
  3: { 0: [{ actor: "gail", x: 34, y: 73, walk: !0 }], 1: [{ actor: "gail", x: 24, y: 74, rotate: -7 }] },
  4: { 1: [{ actor: "gail", x: 63, y: 68, walk: !0 }], 2: [{ actor: "cat", x: 74, y: 66, rotate: -8 }] },
  5: { 2: [{ actor: "gail", x: 29, y: 48, walk: !0, scale: 0.72 }] },
  6: { 2: [{ actor: "gail", x: 64, y: 68, walk: !0 }] },
  7: { 0: [{ actor: "gail", x: 47, y: 73, walk: !0 }], 1: [{ actor: "ladder", x: 77, y: 51, rotate: 12 }], 2: [{ actor: "cat", x: 80, y: 36 }] },
  8: { 1: [{ actor: "star", x: 48, y: 12 }] },
  9: { 0: [{ actor: "gail", x: 51, y: 72, walk: !0, scale: 0.88 }], 2: [{ actor: "gail", x: 38, y: 68, walk: !0, scale: 0.82 }] },
  10: { 0: [{ actor: "gail", x: 69, y: 75, walk: !0 }] },
  11: { 0: [{ actor: "gail", x: 61, y: 72, walk: !0 }], 1: [{ actor: "gail", x: 55, y: 70, rotate: -6 }] },
  12: { 0: [{ actor: "gail", x: 52, y: 70, walk: !0 }], 1: [{ actor: "gail", x: 44, y: 69, walk: !0 }] },
  13: { 0: [{ actor: "gail", x: 39, y: 56, walk: !0, scale: 0.85 }], 1: [{ actor: "gail", x: 39, y: 56, rotate: -10, scale: 0.85 }] },
  14: { 0: [{ actor: "gail", x: 70, y: 70, walk: !0 }], 1: [{ actor: "gail", x: 67, y: 64, walk: !0 }], 2: [{ actor: "gail", x: 36, y: 54, walk: !0, rotate: -65, scale: 0.7 }] }
};
function to(t, a) {
  return Math.max(3200, Math.min(6500, t.trim().split(/\s+/).length * 460)) * 1;
}
const S = document.querySelector("#little-star"), N = location.pathname.endsWith("red-hood-storybook.html") || new URLSearchParams(location.search).get("book") === "red-hood", D = location.pathname.endsWith("birthday-storybook.html"), ne = location.pathname.endsWith("dragon-storybook.html"), J = location.pathname.endsWith("princess-storybook.html"), Q = location.pathname.endsWith("wizard-storybook.html"), _ = location.pathname.endsWith("giant-storybook.html"), z = location.pathname.endsWith("fox-storybook.html"), $ = location.pathname.endsWith("cloud-storybook.html"), F = location.pathname.endsWith("bear-storybook.html"), K = location.pathname.endsWith("rabbit-storybook.html"), Y = location.pathname.endsWith("pirate-storybook.html");
let oe, ce = !0;
try {
  ce = localStorage.getItem("gms-story-effects") !== "off";
} catch {
}
const ke = $ || F || K || Y || z || ne || J || Q || _;
let k = "B";
try {
  const t = localStorage.getItem("gms-reading-level");
  (t === "A" || t === "B" || t === "C") && (k = t);
} catch {
}
const wa = { A: De(), B: De(), C: De() }, We = N || D || ke;
let G = $ ? At(k) : F ? Tt(k) : K ? Yt(k) : Y ? Ut(k) : z ? Qt(k) : _ ? ta(k) : Q ? ra(k) : J ? ua(k) : ne ? ha(k) : D ? ee : N ? Ie : st, Oe = $ ? Ft : F ? za : K ? ts : Y ? ft : z ? Xt : _ ? ea : Q ? oa : J ? ga : ne ? zs : D ? Et : N ? na : Os, Se = $ ? Ia : F ? Fa : K ? as : Y ? ns : z ? us : _ ? ks : Q ? Ss : J ? Ds : ne ? Fs : D ? Ps : N ? la : qs, Lt = $ ? Nt(k) : F ? $t(k) : K ? Dt() : Y ? Kt(k) : z ? Jt(k) : _ ? aa(k) : Q ? ia(k) : J ? ma(k) : ne ? ca(k) : D ? lt : N ? St : eo;
const Ne = $ ? "learning-planet-cloud-v1" : F ? "learning-planet-bear-v1" : K ? "learning-planet-rabbit-v1" : Y ? "learning-planet-pirate-v1" : z ? "learning-planet-fox-v1" : _ ? "learning-planet-giant-v1" : Q ? "learning-planet-wizard-v1" : J ? "learning-planet-princess-v1" : ne ? "learning-planet-dragon-v1" : D ? "learning-planet-birthday-v1" : N ? "learning-planet-red-hood-v1" : "learning-planet-little-star-v2", fa = $ ? "Gail and the Cloud That Could Not Stop Thundering" : F ? "Gail and the Bear Who Hid the Pieces" : K ? "Gail and the Rabbit Who Could Not Wait" : Y ? "Gail and the Pirate Who Said Mine" : z ? "Gail and the Fox Who Was Afraid to Draw" : _ ? "Gail and the Giant’s Tiny Umbrella" : Q ? "Gail and the Wizard Who Always Said Later" : J ? "Gail and the Princess Who Forgot to Smile" : ne ? "Gail and the Little Dragon Who Forgot to Fly" : D ? "Gail’s Birthday Cake" : N ? "Gail and the Big Bad Wolf" : "Where Is My Star?";
S.classList.toggle("red-hood-book", We);
S.classList.toggle("cake-book", D);
S.classList.toggle("dragon-book", ke);
S.classList.toggle("princess-book", $ || F || K || Y || z || J || Q || _);
S.classList.toggle("wizard-book", $ || F || K || Y || z || Q || _);
S.classList.toggle("fox-book", z);
S.classList.toggle("pirate-book", Y);
S.classList.toggle("rabbit-book", K);
S.classList.toggle("bear-book", F);
S.classList.toggle("cloud-book", $);
S.dataset.level = k;
document.title = fa + " · 學習星球英文繪本";
let V = Bt(null);
try {
  const t = localStorage.getItem(Ne);
  V = t === null && !We ? Ms(localStorage.getItem("learning-planet-little-star-v1")) : Bt(t, G.length);
} catch {
}
let h = V.page, X = "cover", Le = "listen", pe = !1, ze = !1, $e = 0.9;
try {
  const t = Number(localStorage.getItem("gms-playback-multiplier-v3"));
  [1.2, 1, 0.9, 0.8, 0.7, 0.6].includes(t) && ($e = t);
} catch {
}
let ue = 0, ge = !1, re = !1, Wt = !1, ao = !1, ba = !1, ot = "", se = 0, q, Je, f, Ce, Ve, tt;
const rt = /* @__PURE__ */ new Set(), I = $ ? "images/story/cloud-v1/" : F ? "images/story/bear-v1/" : K ? "images/story/rabbit-v1/" : Y ? "images/story/pirate-v1/" : z ? "images/story/fox-v1/" : _ ? "images/story/giant-v1/" : Q ? "images/story/wizard-v1/" : J ? "images/story/princess-v1/" : ne ? "images/story/dragon-v1/" : D ? "images/story/birthday-v1/" : N ? "images/story/red-hood-v1/" : "images/story/little-star-v1/";
function Re(t, a) {
  const e = setTimeout(() => {
    rt.delete(e), t();
  }, a);
  rt.add(e);
}
function ht() {
  V.page = h;
  try {
    localStorage.setItem(Ne, JSON.stringify(V));
  } catch {
  }
}
function u(t, a = "", e = "") {
  const s = document.createElement(t);
  return s.className = a, s.textContent = e, s;
}
function R(t, a, e, s = "wood-button") {
  const o = u("button", s, t);
  return o.type = "button", o.setAttribute("aria-label", a), o.title = a, o.onclick = e, o;
}
const Me = /* @__PURE__ */ new Set(), bt = /* @__PURE__ */ new Set();
function It() {
  bt.forEach((t) => {
    t.cancel(), Me.delete(t);
  }), bt.clear();
}
function ka() {
  It(), Me.forEach((t) => t.cancel()), Me.clear();
}
function so(t) {
  const a = ue;
  if (yo(t), oe?.sentence(t, G[h].lines[t]), z && mo(t), ne) {
    const r = f.querySelector("[data-object=pip] .sprite-art"), i = G[h].lines[t];
    r && /open.*wing|stretches.*wide|spread.*wing/i.test(i) && (r.style.backgroundPosition = "100% 0%", r.style.backgroundSize = "200% 200%"), r && (h === 18 || /glides|flies|take.*sky|reach.*sky|meet.*sky|fly again/i.test(i)) && (r.style.backgroundPosition = "0% 100%", r.style.backgroundSize = "180% 200%");
  }
  const e = Lt[h]?.[t] || [];
  N && h === 20 && t === 1 && Mt(!1);
  const s = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : to(G[h].lines[t]) / (0.9 * $e), o = [];
  for (const r of e) {
    const i = f.querySelector(`[data-object="${r.actor}"]`);
    if (!i) continue;
    const n = getComputedStyle(i), l = i.animate([{ left: n.left, top: n.top, transform: n.transform }, { left: r.x + "%", top: r.y + "%", transform: `translate(-50%,-50%) rotate(${r.rotate || 0}deg) scale(${r.scale || 1})` }], { duration: s, easing: "ease-in-out", fill: "forwards" });
    Me.add(l), o.push(l.finished.catch(() => {
    }));
    const d = i.querySelector("img,.sprite-art");
    if (r.walk && d) {
      const c = parseFloat(n.left) / f.clientWidth * 100;
      Math.abs(r.x - c) > 0.5 && (d.style.scale = "", d.style.transform = `scaleX(${r.x < c ? -1 : 1})`);
    }
    if (r.walk && d && s) {
      const c = Math.max(4, Math.round(s / 520)), w = d.animate([{ transform: "translateY(0) rotate(-2deg)" }, { transform: "translateY(-4px) rotate(2deg)", offset: 0.5 }, { transform: "translateY(0) rotate(-2deg)" }], { duration: s / c, iterations: c, easing: "ease-in-out" });
      Me.add(w), o.push(w.finished.catch(() => {
      }));
    }
  }
  return Promise.all(o).then(() => {
    if (a === ue) {
      if (D) {
        Aa(t);
        return;
      }
      if (N) {
        if (h === 0 && t === 1) {
          const r = f.querySelector("[data-object=gail] img");
          r && (r.src = I + "gail-clean-v2.png", r.classList.remove("paper-girl"));
          const i = f.querySelector("[data-object=hood]");
          i.querySelector("img").style.opacity = "0", i.style.left = "82%", i.style.top = "61%";
        }
        if (h === 0 && t === 2) {
          const r = f.querySelector("[data-object=hood]");
          r.style.left = "61%";
        }
        h === 11 && t === 2 && Mt(!0);
      }
    }
  });
}
function Mt(t) {
  const a = f.querySelector("[data-object=wolf]");
  if (!a) return;
  const e = a.querySelector("img,.sprite-art"), s = e?.style.scale || "1 1";
  if (e?.remove(), t) {
    const o = u("img");
    o.src = I + "wolf-dressed.png", o.alt = "", o.style.scale = s, a.prepend(o), a.classList.add("wardrobe-wolf");
  } else {
    const r = Ue({ ...na.wolf, ...G[h].placements?.wolf }).querySelector(".sprite-art");
    r.style.scale = s, a.prepend(r), a.classList.remove("wardrobe-wolf");
  }
  for (const o of ["cap", "glasses", "blanket"]) f.querySelector(`[data-object=${o}]`)?.classList.toggle("costume-hidden", t);
}
function oo() {
  if (h === 0 || h === 11 || h === 20)
    for (const t of G[h].objects)
      f.querySelector(`[data-object=${t}]`)?.replaceWith(Ue(de(t)));
}
function xa(t) {
  if (t.querySelector(".gail-apron")) return;
  const a = u("img", "gail-apron");
  a.src = I + "apron.svg", a.alt = "", t.append(a);
}
function ro() {
  for (const t of G[h].objects)
    f.querySelector(`[data-object=${t}]`)?.replaceWith(Ue(de(t)));
  f.querySelector(".candle-flame")?.remove();
}
function Aa(t) {
  if (h === 8 && t >= 1) {
    const s = f.querySelector("[data-object=gail]");
    s && xa(s), f.querySelector("[data-object=apron]")?.classList.add("applied-ingredient");
  }
  h === 11 && t >= 1 && f.querySelector("[data-object=bowl]")?.classList.add("has-batter");
  const e = { 19: ["plain", 1], 20: ["frosted", 2], 21: ["decorated", 3] }[h];
  if (e && t >= (h === 21 ? 2 : 1)) {
    const s = f.querySelector(`[data-object=${e[0]}] .sprite-art`);
    if (s) {
      const i = e[1];
      s.style.backgroundPosition = `${i % 2 * 100}% ${Math.floor(i / 2) * 100}%`, s.style.backgroundSize = `200% ${i > 1 ? 188 : 200}%`;
    }
    const o = h === 19 ? "spatula" : h === 20 ? "strawberries" : "candle", r = f.querySelector(`[data-object=${o}]`);
    r && r.classList.add("applied-ingredient");
  }
  h === 22 && t >= 1 && !f.querySelector(".candle-flame") && f.querySelector("[data-object=finished]")?.append(u("span", "candle-flame")), h === 23 && t === 0 && f.querySelector(".candle-flame")?.remove();
}
function ie() {
  pe = !1, ue++, ka(), window.speechSynthesis?.cancel(), ge = !1, re = !1, S.querySelectorAll(".spoken,.current-line").forEach((t) => t.classList.remove("spoken", "current-line")), Ee();
}
function Ee() {
  oe?.playback(ge, re);
  const t = S.querySelector("[data-whole-book]");
  t && (t.textContent = pe ? re ? "▶" : "Ⅱ" : "▶", t.setAttribute("aria-label", pe ? re ? "繼續整本朗讀" : "暫停整本朗讀" : ke ? "依目前難度朗讀整本" : "自動朗讀整本"), t.setAttribute("aria-pressed", String(pe))), Ve && (Ve.textContent = ge ? re ? "▶ Continue" : "Ⅱ Pause" : Le === "self" ? "✓ Done · 聽示範" : "▶ Read to me", Ve.setAttribute("aria-label", ge ? re ? "繼續朗讀" : "暫停朗讀" : Le === "self" ? "讀好了，聽示範" : "開始英文朗讀"));
}
function va(t, a, e, s, o) {
  const r = Zs(t);
  let i = 0;
  const n = () => {
    if (a !== ue) return;
    const l = r[i++];
    if (!l) {
      e();
      return;
    }
    const d = new SpeechSynthesisUtterance(l.text);
    d.lang = l.lang, d.rate = 0.9 * $e;
    const c = speechSynthesis.getVoices(), w = bs(c, l.lang);
    w && (d.voice = w), d.onstart = () => {
      a === ue && o?.(l.start);
    }, d.onboundary = (T) => {
      a === ue && T.name === "word" && o?.(l.start + T.charIndex);
    }, d.onend = n, d.onerror = () => {
      a === ue && s();
    }, speechSynthesis.speak(d);
  };
  if (speechSynthesis.getVoices().length) n();
  else {
    let l = !1;
    const d = () => {
      l || (l = !0, speechSynthesis.removeEventListener("voiceschanged", d), n());
    };
    speechSynthesis.addEventListener("voiceschanged", d), Re(d, 600);
  }
}
function Be(t, a) {
  if (ie(), Wt) {
    a?.();
    return;
  }
  if (!("speechSynthesis" in window)) {
    q.textContent = "此裝置不支援語音，可以點字閱讀。", a?.();
    return;
  }
  va(t, ue, () => a?.(), () => {
    q.textContent = "語音暫時無法播放，仍可閱讀與探索。", a?.();
  });
}
function Ye(t = !1) {
  if (ge) {
    re = !re, re ? speechSynthesis.pause() : speechSynthesis.resume(), Me.forEach((o) => {
      re && o.playState === "running" ? o.pause() : !re && o.playState === "paused" && o.play();
    }), Ee();
    return;
  }
  if (ie(), pe = t, Wt) {
    q.textContent = "請開啟右上角聲音，再聽故事。";
    return;
  }
  if (!("speechSynthesis" in window)) {
    q.textContent = "此裝置不支援語音，可使用自己讀模式。";
    return;
  }
  N && oo(), (D || ke) && ro(), z && Ca(), ge = !0, Ee();
  const a = ue;
  let e = 0;
  const s = () => {
    if (a !== ue) return;
    if (e >= G[h].lines.length) {
      if (It(), ge = !1, Ee(), S.querySelectorAll(".spoken,.current-line").forEach((i) => i.classList.remove("spoken", "current-line")), pe)
        if (h < G.length - 1) {
          ge = !0, Ee();
          const i = () => {
            if (!(a !== ue || !pe)) {
              if (re) {
                Re(i, 100);
                return;
              }
              h++, Z(), Ye(!0);
            }
          };
          Re(i, 1500);
        } else
          pe = !1, Ee(), q.textContent = ke ? "The end! 整本讀完了，可以點右上角鉛筆做小測驗。" : "The end! 整本讀完了。";
      else q.textContent = "Now explore! 點場景，發現單字。";
      return;
    }
    const o = tt.children[e];
    S.querySelectorAll(".spoken,.current-line").forEach((i) => i.classList.remove("spoken", "current-line")), o.classList.add("current-line");
    const r = so(e);
    va(G[h].lines[e], a, () => {
      (r || Promise.resolve()).then(() => {
        a === ue && (e++, s());
      });
    }, () => {
      ka(), pe = !1, ge = !1, Ee(), q.textContent = "語音暫時無法播放，試試點單字或自己讀。";
    }, (i) => {
      o.querySelectorAll("[data-start]").forEach((n) => {
        const l = Number(n.dataset.start), d = i >= l && i < l + (n.textContent?.length || 0);
        n.classList.toggle("spoken", d), d && xe(n.textContent?.replace(/[^a-z]/gi, "").toLowerCase() || "");
      });
    });
  };
  s();
}
function xe(t) {
  t = G[h].objects.find((e) => e === t || Oe[e].word.toLowerCase() === t.toLowerCase()) || t;
  const a = f?.querySelector(`[data-object="${t}"]`);
  a && (a.classList.add("glow"), Re(() => a.classList.remove("glow"), 1300));
}
function de(t) {
  const a = { ...Oe[t], ...G[h].placements?.[t] };
  return D || ke ? a : N ? (t === "wolf" && [14, 15, 16, 17, 20].includes(h) && (a.image = "wolf-dressed.png", a.sprite = void 0), a) : (t === "star" && G[h].star && ([a.x, a.y] = G[h].star), t === "gail" && G[h].scene === "garden" ? (a.x = 55, a.y = 73) : t === "gail" && G[h].scene !== "room" && (a.x = 85, a.y = 79, a.w = 16, a.h = 38), a);
}
function wt(t, a) {
  t.style.left = a.x + "%", t.style.top = a.y + "%", t.style.width = a.w + "%", t.style.height = a.h + "%";
}
function io() {
  if (!_ || X !== "story" || !f) return;
  f.querySelector(".word-rain")?.remove();
  const t = u("div", "word-rain");
  t.setAttribute("aria-hidden", "true");
  for (let a = 0; a < 42; a++) {
    const e = u("i");
    e.style.left = a * 37 % 100 + "%", e.style.animationDelay = -(a % 13) * 0.11 + "s", e.style.animationDuration = 0.65 + a % 5 * 0.12 + "s", t.append(e);
  }
  f.append(t), Re(() => t.remove(), 3600);
}
function it(t) {
  t.toLowerCase() === "rain" && io(), t = t.toLowerCase() === "gail" ? "Gail" : t.toLowerCase() === "grandma" ? "Grandma" : t, t.toLowerCase() === "star" && f?.querySelector("[data-object=star]")?.classList.add("found-star"), V.words.includes(t) || (V.words.push(t), ht());
}
function Ta(t) {
  const a = Oe[t];
  if (!a) return;
  it(a.word), xe(t);
  const e = f.querySelector(`[data-object="${t}"]`);
  e && (e.classList.add("show-label"), Re(() => e.classList.remove("show-label"), 2200), f.style.transformOrigin = `${e.style.left} ${e.style.top}`, f.classList.add("peek"), Re(() => f.classList.remove("peek"), 1400)), q.textContent = a.word, Be(a.word), oe?.interact(t);
}
function at() {
  if (!V.stars.includes(h)) {
    V.stars.push(h);
    for (const t of G[h].words) it(t);
  }
  ht(), ot = "", Ce.classList.add("solved"), Ce.replaceChildren(u("span", "mission-star", "★"), u("div", "", "Lovely! 任務完成")), S.querySelectorAll("[data-page]").forEach((t) => {
    Number(t.dataset.page) === h && t.classList.add("earned");
  }), q.textContent = "Great! 你幫故事往前走了一步。", Be("Great!"), no();
}
function no() {
  if (Y) {
    wo();
    return;
  }
  if (z) {
    Fe();
    return;
  }
  if (_ && [8, 10, 12, 14].includes(h)) {
    const r = h === 10 ? "blue" : h === 14 ? "canopy" : "rope", i = f.querySelector(`[data-object=${r}]`);
    i && (i.style.left = (h === 10 ? 48 : h === 14 ? 54 : 50) + "%", i.style.top = (h === 10 ? 56 : h === 14 ? 31 : 48) + "%");
    return;
  }
  if (Q && h === 13) {
    const r = f.querySelector("[data-object=can]");
    r.style.left = "65%", r.style.top = "63%", r.style.transform = "translate(-50%,-50%) rotate(-18deg)", f.querySelector(".wizard-water") || f.append(u("span", "wizard-water"));
    return;
  }
  if (We) {
    D && Aa(2);
    const r = G[h].mission;
    if (xe(r.answer), r.type === "drag") {
      const i = f.querySelector(`[data-object="${r.answer}"]`);
      if (i) {
        const n = de(r.target);
        i.style.left = n.x + "%", i.style.top = n.y + "%";
      }
    }
    return;
  }
  const t = G[h].action;
  f.classList.add("action-" + t);
  const a = f.querySelector('[data-object="star"]'), e = f.querySelector('[data-object="gail"]'), s = f.querySelector('[data-object="cat"]'), o = f.querySelector('[data-object="ladder"]');
  t === "sky" && a && (a.style.left = "48%", a.style.top = "12%"), t === "climb" && (o && (o.style.left = "77%", o.style.top = "51%", o.style.transform = "translate(-50%,-50%) rotate(12deg)"), s && (s.style.left = "80%", s.style.top = "36%")), t === "cross" && e && (e.style.left = "29%", e.style.top = "48%", e.style.width = "12%", e.style.height = "30%"), t === "sleep" && e && (e.style.left = "36%", e.style.top = "54%", e.style.transform = "translate(-50%,-50%) rotate(-65deg) scale(.7)"), t === "window" && xe("window"), t === "flower" && xe("flower"), t === "cat" && xe("cat"), ["firefly", "duck", "basket", "door"].includes(t) && xe(t);
}
function Pt(t) {
  Ta(t);
  const a = G[h].mission;
  if (!V.stars.includes(h)) {
    if (a.type === "drag") {
      t === a.answer ? (ot = t, Ce.classList.add("holding"), q.textContent = `現在點 ${Oe[a.target].word}，或把物件拖過去。`, xe(a.target)) : ot === a.answer && t === a.target ? at() : q.textContent = a.hint;
      return;
    }
    if (a.type === "sequence") {
      t === a.steps[se] ? (se++, se === a.steps.length ? at() : q.textContent = `Good! 接著點 ${Oe[a.steps[se]].word}。`) : q.textContent = "Try again! " + a.hint;
      return;
    }
    if (t !== a.answer) {
      q.textContent = "Try again! " + a.hint;
      return;
    }
    if (D && a.type === "tap" && (se++, f.querySelector("[data-object=whisk] .sprite-art")?.animate([{ transform: "rotate(-20deg)" }, { transform: "rotate(20deg)" }, { transform: "rotate(-20deg)" }], { duration: 600 }), se < 3)) {
      q.textContent = `Stir, stir · ${se} / 3`;
      return;
    }
    if (a.type === "follow") {
      se++;
      const e = f.querySelector('[data-object="star"]');
      if (e.style.left = [45, 53, 60][se - 1] + "%", e.style.top = [34, 22, 12][se - 1] + "%", se < 3) {
        q.textContent = `Follow the star · ${se} / 3`;
        return;
      }
    }
    at();
  }
}
function Ue(t) {
  const a = R("", `探索 ${t.word}`, () => Pt(t.id), "scene-object " + (t.kind || "hotspot"));
  a.dataset.object = t.id, We && [G[h].mission.answer, G[h].mission.target, ...G[h].mission.steps || []].includes(t.id) && (a.style.zIndex = "10"), wt(a, t), N && G[h].scene === "dining" && ["gail", "grandma", "wolf"].includes(t.id) && (a.style.clipPath = "inset(0 0 35% 0)"), N && [14, 15, 16, 17, 20].includes(h) && ["cap", "glasses", "blanket"].includes(t.id) && a.classList.add("costume-hidden");
  const e = u("span", "object-label", t.word);
  if (t.sprite) {
    const o = u("span", "sprite-art"), { sheet: r, cell: i, columns: n, clip: l, rect: d, size: c } = t.sprite;
    if (o.style.backgroundImage = `url(${I + r})`, o.style.backgroundSize = `${ne && i === 2 ? 180 : r === "ingredients.png" && t.id === "bowl" ? 285 : n * 100}% ${r.endsWith("cast.png") && t.id === "mom" ? 195 : r === "cakes.png" && i > 1 ? 188 : n * 100}%`, o.style.backgroundPosition = `${i % n / (n - 1) * 100}% ${Math.floor(i / n) / (n - 1) * 100}%`, d && c) {
      const [w, T, L, H] = d, [B, m] = Array.isArray(c) ? c : [c, c];
      o.style.backgroundSize = `${B / L * 100}% ${m / H * 100}%`, o.style.backgroundPosition = `${w / (B - L) * 100}% ${T / (m - H) * 100}%`;
    }
    l && (o.style.clipPath = l), a.classList.add(r.endsWith("cast.png") ? "puppet" : "prop"), a.append(o);
  } else if (t.image || t.kind === "girl" || t.kind === "cat") {
    const o = u("img", t.kind === "girl" ? We ? "red-gail" : "paper-girl" : "");
    o.src = t.image ? I + t.image : t.kind === "girl" ? I + "gail-paper-clean.png" : "images/math-master/v1/objects/cat-v1.png", o.alt = "", t.image?.includes("gail-paper") && o.classList.add("paper-girl"), a.append(o), (t.id === "wolf" || t.id === "dad") && a.classList.add("wardrobe-wolf");
  } else if (t.kind === "star") a.append(u("span", "star-shape", "★"), u("span", "star-face", "•ᴗ•"));
  else if (t.kind === "ladder") {
    const o = u("span", "ladder-art");
    for (let r = 0; r < 6; r++) o.append(u("i"));
    a.append(o);
  } else N && t.id === "number" ? a.append(u("span", "door-number", "24")) : N && ["left", "right", "away"].includes(t.id) ? a.append(u("span", "direction-cue", t.id === "left" ? "←" : "→")) : a.append(u("span", "hotspot-spark", "✦"));
  if (We) {
    const o = ["gail", "wolf", "mom", "grandma", "manager", "dad", "pip", "ella", "caregiver", "boy", "friend", "wizard", "giant", "fox", "rabbit", "bear", "pirate", "sailor"];
    if (!a.querySelector(".hotspot-spark")) {
      const n = u("span", "hotspot-spark", "✦");
      n.setAttribute("aria-hidden", "true"), a.append(n);
    }
    const r = a.querySelector("img,.sprite-art"), i = G[h].objects.filter((n) => o.includes(n) && n !== t.id);
    if (r && o.includes(t.id) && i.length) {
      const n = i.reduce((l, d) => l + de(d).x, 0) / i.length;
      r.style.scale = n < t.x ? "-1 1" : "1 1";
    }
    if (K && r && t.id === "rabbit") {
      const n = G[h].objects.includes("pot") ? de("pot").x : de("gail").x, l = t.image !== "rabbit-worried.png";
      r.style.scale = "", r.style.transform = `scaleX(${n < t.x === l ? 1 : -1})`;
    }
    if (F && r && ["bear", "adult"].includes(t.id) && (r.style.scale = "", r.style.transform = t.id === "bear" && h >= 11 && h <= 13 ? "scaleX(-1)" : "scaleX(1)"), J && r && ["ella", "friend"].includes(t.id)) {
      const n = G[h].objects.includes("tower") ? de("tower").x : G[h].objects.includes("blocks") ? de("blocks").x : de("gail").x;
      r.style.scale = "";
      const l = t.sprite?.sheet === "support-cast.png";
      r.style.transform = `scaleX(${n < t.x === l ? 1 : -1})`;
    }
    (Q && t.id === "wizard" || _ && ["giant", "boy", "friend"].includes(t.id)) && r && (r.style.scale = "", r.style.transform = "scaleX(1)"), r && t.id === "hood" && h === 0 && (r.style.scale = "-1 1");
  }
  D && t.id === "gail" && h >= 9 && xa(a), D && t.id === "bowl" && h >= 12 && a.classList.add("has-batter"), D && t.id === "finished" && h === 23 && a.append(u("span", "candle-flame")), a.append(e);
  const s = G[h].mission;
  if (s.type === "drag" && t.id === s.answer) {
    a.classList.add("draggable");
    let o = 0, r = 0, i = !1, n = !1;
    a.onclick = () => {
      if (n) {
        n = !1;
        return;
      }
      Pt(t.id);
    }, a.onpointerdown = (l) => {
      V.stars.includes(h) || (o = l.clientX, r = l.clientY, i = !1, a.setPointerCapture(l.pointerId));
    }, a.onpointermove = (l) => {
      if (!a.hasPointerCapture(l.pointerId) || (Math.hypot(l.clientX - o, l.clientY - r) > 6 && (i = !0), !i)) return;
      ge && ie();
      const d = f.getBoundingClientRect();
      a.style.left = (l.clientX - d.left) / d.width * 100 + "%", a.style.top = (l.clientY - d.top) / d.height * 100 + "%", a.classList.add("dragging");
    }, a.onpointerup = (l) => {
      if (!a.hasPointerCapture(l.pointerId) || (a.releasePointerCapture(l.pointerId), a.classList.remove("dragging"), !i)) return;
      n = !0;
      const d = f.getBoundingClientRect();
      Rs((l.clientX - d.left) / d.width * 100, (l.clientY - d.top) / d.height * 100, de(s.target)) ? at() : (wt(a, t), q.textContent = "再試一次：" + s.hint);
    }, a.onpointercancel = () => {
      wt(a, t), a.classList.remove("dragging");
    };
  }
  return a;
}
function lo() {
  if (K) {
    jt(Be, ie);
    return;
  }
  const t = $ ? Wa : F ? Pa : Y ? is : z ? gs : _ ? xs : [...new Set(G.flatMap((a) => a.words).map((a) => a.toLowerCase()))];
  jt(Be, ie, { title: fa, entries: t.map((a) => [a, Ct[a] || a, Gt[a] || "📖"]), visual(a) {
    if (Se[a] && !Se[a].sheet) {
      const s = document.createElement("img");
      return s.src = I + a + ".png", s.alt = "", s;
    }
    if ($) {
      const s = { mist: "bell", float: "cloud-calm", breeze: "leaf", scatter: "leaf", thunder: "cloud-angry", rumble: "cloud-angry", loud: "cloud-angry", angry: "cloud-angry", upset: "cloud-upset", name: "cloud-upset", pause: "cloud-upset", breathe: "cloud-calm", slow: "rotor", calm: "cloud-calm", gentle: "cloud-calm", need: "cloud-upset" };
      if (s[a]) {
        const o = document.createElement("img");
        return o.src = I + s[a] + ".png", o.alt = "", o;
      }
    }
    if (F) {
      const s = { reach: "bear-reaching", bump: "pot", crack: "pieces", broken: "pieces", worried: "bear-worried", truth: "bear-reaching", tell: "bear-reaching", sorry: "bear-worried", honest: "bear-reaching" };
      if (s[a]) {
        const o = document.createElement("img");
        return o.src = I + s[a] + ".png", o.alt = "", o;
      }
    }
    const e = Object.values(Oe).find((s) => s.word.toLowerCase() === a);
    if (e) {
      if (e.sprite) {
        const s = Ue(e).querySelector(".sprite-art");
        return s.className = "vocab-sprite", s;
      }
      if (e.kind === "girl" && !e.image) {
        const s = document.createElement("img");
        return s.src = I + "gail-paper-clean.png", s.alt = "", s;
      }
      if (e.image) {
        const s = document.createElement("img");
        return s.src = e.image.startsWith("images/") ? e.image : I + e.image, s.alt = "", s;
      }
    }
  } });
}
function ho() {
  const t = u("header", "topbar"), a = u("a", "brand");
  a.href = "story-planet.html", a.innerHTML = '<img class="official-brand" src="images/brand/learning-planet-brand-v1.png" alt="Learning Planet 學習星球"><span class="brand-subtitle">英文魔法繪本</span>', a.setAttribute("aria-label", "Learning Planet 學習星球，回故事星球"), t.append(a);
  const e = u("nav", "progress");
  e.setAttribute("aria-label", "故事頁數與星星");
  for (let o = 0; o < G.length; o++) {
    const r = R("★", `第 ${o + 1} 頁${V.stars.includes(o) ? "，已完成" : ""}`, () => {
      h = o, X = "story", Z();
    }, "progress-star" + (V.stars.includes(o) ? " earned" : "") + (o === h && X === "story" ? " active" : ""));
    r.dataset.page = String(o), r.setAttribute("aria-current", String(o === h && X === "story")), e.append(r);
  }
  t.append(e);
  const s = u("div", "tools");
  {
    const o = R("▶", ke ? "依目前難度朗讀整本" : "自動朗讀整本", () => {
      if (pe && ge) {
        Ye(!0);
        return;
      }
      ie(), Wt = !1, Le = "listen", h = 0, X = "story", Z(), Ye(!0);
    }, "round");
    o.dataset.wholeBook = "true", o.setAttribute("aria-pressed", "false"), s.append(o);
  }
  s.append(R("⚙", "閱讀設定", po, "round")), ke && (s.prepend(co()), s.append(R("✎", "書末小測驗", () => {
    X = "quiz", Z();
  }, "round")));
  {
    const o = R("", "單字小書", lo, "round");
    o.innerHTML = Ja, s.append(o);
  }
  return t.append(s), t;
}
function co() {
  const t = u("div", "level-switch");
  t.setAttribute("role", "group"), t.setAttribute("aria-label", "閱讀難度");
  for (const a of ["A", "B", "C"]) {
    const e = R(a, `Level ${a} ${qe[a]}`, () => {
      if (k === a) return;
      const s = pe && !re;
      ie(), k = a, G = $ ? At(k) : F ? Tt(k) : K ? Yt(k) : Y ? Ut(k) : z ? Qt(k) : _ ? ta(k) : Q ? ra(k) : J ? ua(k) : ha(k), Lt = $ ? Nt(k) : F ? $t(k) : K ? Dt() : Y ? Kt(k) : z ? Jt(k) : _ ? aa(k) : Q ? ia(k) : J ? ma(k) : ca(k), S.dataset.level = k;
      try {
        localStorage.setItem("gms-reading-level", k);
      } catch {
      }
      Z(), s && Ye(!0);
    }, "level-button");
    e.setAttribute("aria-pressed", String(k === a)), t.append(e);
  }
  return t;
}
function po() {
  if (S.querySelector(".settings")) {
    S.querySelector(".settings").remove();
    return;
  }
  const t = u("section", "settings");
  t.setAttribute("aria-label", "閱讀設定");
  const a = u("div", "settings-heading");
  a.append(u("h2", "", "閱讀設定"), R("✓", "關閉設定", () => t.remove(), "round settings-done")), t.append(a);
  const e = u("div", "speed-options");
  e.setAttribute("role", "group"), e.setAttribute("aria-label", "播放速度");
  for (const s of [1.2, 1, 0.9, 0.8, 0.7, 0.6]) {
    const o = R(s + "x", `播放速度 ${s}x`, () => {
      const r = ge, i = pe;
      ie(), $e = s;
      try {
        localStorage.setItem("gms-playback-multiplier-v3", String(s));
      } catch {
      }
      e.querySelectorAll("button").forEach((n) => n.setAttribute("aria-pressed", String(n === o))), r && Ye(i);
    }, "speed-choice");
    o.setAttribute("aria-pressed", String(s === $e)), e.append(o);
  }
  if (t.append(e), Y || F || $) {
    const s = R(ce ? "場景音效 · 開" : "場景音效 · 關", "切換場景音效", () => {
      ce = !ce, s.textContent = ce ? "場景音效 · 開" : "場景音效 · 關", s.setAttribute("aria-pressed", String(ce)), oe?.sound(ce);
      try {
        localStorage.setItem("gms-story-effects", ce ? "on" : "off");
      } catch {
      }
    });
    s.setAttribute("aria-pressed", String(ce)), t.append(s);
  }
  S.append(t);
}
function go() {
  const t = u("section", "cover-stage");
  t.innerHTML = `<div class="cover-copy"><span class="eyebrow">A LITTLE LIGHT. A BIG ADVENTURE.</span><h1>Where Is<br>My <em>Star?</em></h1><p>跟著Gail，找回夜空裡的小星星。</p><div class="cover-meta">${G.length} 頁故事 <i>✦</i> 聽、讀、探索</div></div><div class="closed-book"><div class="cover-border"><span class="cover-small">LEARNING PLANET · STORY NO. 01</span><div class="cover-moon">☾</div><h2>Where Is<br>My Star?</h2><img class="cover-girl paper-girl" src="${I}${N ? "gail-clean-v2.png" : "gail-paper-clean.png"}" alt="穿星星睡衣的Gail"><span class="cover-star">★</span><span class="cover-author">Gail的星光冒險</span></div></div>`;
  const a = u("div", "cover-actions");
  if (a.append(R(V.stars.length || h ? "繼續故事 →" : "翻開故事 →", "翻開故事", () => {
    X = "story", Z();
  }, "wood-button primary")), (V.stars.length || h) && a.append(R("重新探索", "重新探索，重設本書星星", () => {
    if (V = { page: 0, stars: [], words: [] }, ke)
      for (const e of ["A", "B", "C"]) {
        wa[e] = De();
        try {
          localStorage.removeItem(Ne + "-quiz-" + e);
        } catch {
        }
      }
    h = 0, ht(), X = "story", Z();
  }, "text-button")), N) {
    t.querySelector(".cover-copy>.eyebrow").textContent = "A RED HOOD. A SMART LITTLE HERO.", t.querySelector("h1").innerHTML = "Gail and the<br><em>Big Bad Wolf</em>", t.querySelector("h2").innerHTML = "Gail and the<br>Big Bad Wolf", t.querySelector(".cover-copy p").textContent = "跟著 Gail，展開現代小紅帽的暖心冒險。", t.querySelector(".cover-small").textContent = "LEARNING PLANET · STORY NO. 02";
    const e = t.querySelector(".cover-girl");
    e.src = I + "gail-clean-v2.png", e.classList.remove("paper-girl"), e.classList.add("red-gail"), e.alt = "穿紅色連帽短斗篷、戴星星髮夾的 Gail", t.querySelector(".closed-book").classList.add("red-illustrated-cover"), t.querySelector(".cover-border").innerHTML = `<img class="red-cover-art" src="${I}cover-v2.png" alt="穿紅斗篷的瑜瑜與狼在公園面對面"><span class="cover-small">LEARNING PLANET · STORY NO. 02</span><h2>Gail and the<br>Big Bad Wolf</h2>`;
  }
  if (D) {
    t.querySelector(".cover-copy>.eyebrow").textContent = "STORY NO. 03 · MADE WITH LOVE", t.querySelector("h1").innerHTML = "Gail’s<br><em>Birthday Cake</em>", t.querySelector(".cover-copy p").textContent = "七歲的驚喜，藏在一起動手的每一步。";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover.png)`, e.innerHTML = '<span class="cake-cover-series">LEARNING PLANET · 03</span><h2>Gail’s<br>Birthday Cake</h2><p>Made with love</p>';
  }
  if (ne) {
    t.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 01", t.querySelector("h1").innerHTML = "Little Dragon,<br><em>Brave Wings</em>", t.querySelector(".cover-copy p").textContent = "瑜瑜與忘記飛翔的小龍", t.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 10 題故事挑戰";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover.png)`, e.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 01</span><h2>Gail and the<br>Little Dragon<br><small>Who Forgot to Fly</small></h2>';
    const s = u("p", "level-note", qe[k]);
    t.querySelector(".cover-copy").append(s);
    try {
      const o = JSON.parse(localStorage.getItem(Ne + "-quiz-" + k) || "null");
      o && Number.isInteger(o.score) && o.score >= 0 && o.score <= 10 && t.querySelector(".cover-copy").append(u("p", "level-note", `上次挑戰 · ${o.score} / 10`));
    } catch {
    }
  }
  if (J) {
    t.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 02", t.querySelector("h1").innerHTML = "A Princess,<br><em>A Little Smile</em>", t.querySelector(".cover-copy p").textContent = "瑜瑜與不會笑的公主", t.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover-composition-v1.png)`, e.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 02</span><h2>Gail and the Princess<br><small>Who Forgot to Smile</small></h2>', t.querySelector(".cover-copy").append(u("p", "level-note", qe[k]));
    try {
      const s = JSON.parse(localStorage.getItem(Ne + "-quiz-" + k) || "null");
      s && Number.isInteger(s.score) && s.score >= 0 && s.score <= 16 && t.querySelector(".cover-copy").append(u("p", "level-note", `上次挑戰 · ${s.score} / 16`));
    } catch {
    }
  }
  if (Q) {
    t.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 03", t.querySelector("h1").innerHTML = "A Little Step,<br><em>Right Now</em>", t.querySelector(".cover-copy p").textContent = "瑜瑜與愛說等一下的魔法師", t.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover-v2.png)`, e.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 03</span><h2>Gail and the Wizard<br><small>Who Always Said “Later”</small></h2>', t.querySelector(".cover-copy").append(u("p", "level-note", qe[k]));
  }
  if (_) {
    t.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 04", t.querySelector("h1").innerHTML = "Small Umbrellas,<br><em>Big Help</em>", t.querySelector(".cover-copy p").textContent = "瑜瑜與巨人的小雨傘", t.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover-v3.png)`, e.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 04</span><h2>Gail and the Giant’s<br><small>Tiny Umbrella</small></h2>', t.querySelector(".cover-copy").append(u("p", "level-note", qe[k]));
  }
  if (z) {
    t.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 05", t.querySelector("h1").innerHTML = "One Little Mark,<br><em>A New Idea</em>", t.querySelector(".cover-copy p").textContent = "瑜瑜與不敢落筆的小狐狸", t.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover.png)`, e.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 05</span><h2>Gail and the Fox<br><small>Who Was Afraid to Draw</small></h2>', t.querySelector(".cover-copy").append(u("p", "level-note", qe[k]));
  }
  if (Y) {
    t.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 06", t.querySelector("h1").innerHTML = "A Turn for You,<br><em>A Turn for Me</em>", t.querySelector(".cover-copy p").textContent = "瑜瑜與總說「我的！」的小海盜", t.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover.png)`, e.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 06</span><h2>Gail and the Pirate<br><small>Who Said “Mine!”</small></h2>', t.querySelector(".cover-copy").append(u("p", "level-note", qe[k]));
  }
  if ($) {
    t.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 09", t.querySelector("h1").innerHTML = "A Little Space<br><em>to Breathe</em>", t.querySelector(".cover-copy p").textContent = "瑜瑜與一直打雷的小雲朵", t.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover.png)`, e.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 09</span><h2>Gail and the Cloud<br><small>That Could Not Stop<br>Thundering</small></h2>';
  }
  if (F) {
    t.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 08", t.querySelector("h1").innerHTML = "An Honest<br><em>Beginning</em>", t.querySelector(".cover-copy p").textContent = "瑜瑜與藏起碎片的小熊", t.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover.png)`, e.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 08</span><h2>Gail and the Bear<br><small>Who Hid the Pieces</small></h2>';
  }
  if (K) {
    t.querySelector(".eyebrow").textContent = "GAIL’S MAGICAL STORYBOOK · 07", t.querySelector("h1").innerHTML = "A Little<br><em>Every Day</em>", t.querySelector(".cover-copy p").textContent = "瑜瑜與等不及的小兔園丁", t.querySelector(".cover-meta").textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const e = t.querySelector(".cover-border");
    e.style.backgroundImage = `url(${I}cover.png)`, e.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 07</span><h2>Gail and the Rabbit<br><small>Who Could Not Wait</small></h2>';
  }
  t.querySelector(".cover-copy").append(a), S.append(t);
}
function kt(t) {
  ze = t, S.classList.toggle("immersive", t && X === "story");
  const a = S.querySelector(".reader-footer"), e = S.querySelector(".story-paper");
  a && e && (t ? e : S).append(a);
  const s = S.querySelector(".immersive-toggle");
  s && (s.textContent = t ? "⤢" : "⛶", s.setAttribute("aria-label", t ? "離開全景閱讀" : "全景閱讀"), s.setAttribute("aria-pressed", String(t)));
}
function Z() {
  if (oe?.dispose(), oe = void 0, ie(), rt.forEach(clearTimeout), rt.clear(), ot = "", se = 0, S.replaceChildren(ho()), S.classList.toggle("show-hints", ao), S.classList.toggle("zoomed", ba), S.dataset.screen = X, S.classList.toggle("immersive", ze && X === "story"), q = u("div", "feedback"), q.setAttribute("role", "status"), q.setAttribute("aria-live", "polite"), X === "cover") {
    go();
    return;
  }
  if (X === "quiz") {
    const c = $ ? ja(k) : F ? $a(k) : K ? os(k) : Y ? ds(k) : z ? fs(k) : _ ? Bs(k) : Q ? js(k) : J ? Qs(k) : Ys(k);
    Js(S, c, wa[k], { level: k, say: Be, ending: $ ? { title: "A little space to breathe", line: "Pause. Name it. Ask for help.", image: I + "cover.png", alt: "瑜瑜與小雲朵重新開始" } : F ? { title: "An honest beginning", line: "Tell the truth. Take the next step.", image: I + "cover.png", alt: "瑜瑜與小熊一起完成拼貼" } : K ? { title: "A little every day", line: "Small changes grow with steady care.", image: I + "cover.png", alt: "瑜瑜與兔兔看見耐心照顧的成果" } : Y ? { title: "A turn for you, a turn for me", line: "Our best treasure is the time we share.", image: I + "cover.png", alt: "Gail與小海盜分享工具" } : z ? { title: "One little try", line: "Look again. A mistake can begin a new idea.", image: I + "cover.png", alt: "Gail和小狐狸一起畫畫" } : _ ? { title: "Room for everyone", line: "Small things become something big when we work together.", image: I + "cover-v3.png", alt: "Gail 和巨人的小雨傘" } : Q ? { title: "One small step", line: "A little start today makes tomorrow easier.", image: I + "cover-v2.png", alt: "Gail 與魔法師開始做一小步" } : J ? { title: "A place for a friend", line: "Side by side, we laugh and play. A little friendship lights the day.", image: I + "cover-composition-v1.png" } : void 0, back: () => {
      X = "story", Z();
    }, save: (w) => {
      try {
        localStorage.setItem(Ne + "-quiz-" + k, JSON.stringify({ score: w, total: c.length, completedAt: Date.now() }));
      } catch {
      }
    } }), S.append(q);
    return;
  }
  if (X === "complete") {
    uo();
    return;
  }
  ht();
  const t = G[h], a = u("section", "open-book"), e = u("article", "story-paper");
  e.append(u("div", "eyebrow", `CHAPTER ${String(h + 1).padStart(2, "0")} / ${G.length}`), u("h1", "", t.title)), tt = u("div", "story-lines"), t.lines.forEach((c) => {
    const w = u("p");
    let T = 0;
    c.split(/(\s+)/).forEach((L) => {
      if (!L.trim()) {
        w.append(document.createTextNode(L)), T += L.length;
        return;
      }
      const H = L.replace(/[^a-z]/gi, "").toLowerCase(), B = u("button", "word", L);
      B.dataset.start = String(T), B.setAttribute("aria-label", `朗讀 ${H}`), t.words.some((m) => m.toLowerCase() === H) && B.classList.add("target-word"), B.onclick = () => {
        it(H), Oe[H] && t.objects.includes(H) ? Ta(H) : (Be(H), oe?.interact(H));
      }, w.append(B), T += L.length;
    }), tt.append(w);
  }), ne && [4, 5].includes(h) && e.append(u("span", "memory-label", "Pip remembers…"));
  const s = u("div", "rabbit-text-area");
  s.append(tt);
  {
    e.append(s);
    const c = u("div", "story-lines chinese-lines");
    c.lang = "zh-Hant", c.hidden = !0, c.id = "rabbit-chinese", ($ ? La(h, k) : F ? Ma(h, k) : K ? Xa(h, k) : Va(Y ? "pirate" : z ? "fox" : _ ? "giant" : Q ? "wizard" : J ? "princess" : ne ? "dragon" : D ? "cake" : N ? "red" : "star", h, k)).forEach((T) => c.append(u("p", "", T)));
    const w = R("中", "顯示中文課文", () => {
      c.hidden = !c.hidden, w.setAttribute("aria-pressed", String(!c.hidden)), w.setAttribute("aria-expanded", String(!c.hidden)), w.setAttribute("aria-label", c.hidden ? "顯示中文課文" : "隱藏中文課文");
    }, "word-chip translation-toggle");
    w.setAttribute("aria-expanded", "false"), w.setAttribute("aria-pressed", "false"), w.setAttribute("aria-controls", c.id), s.append(c), e.append(w);
  }
  const o = u("div", "word-chips");
  t.words.forEach((c) => o.append(R(c, `學習 ${c}`, () => {
    it(c), Be(c), xe(c), oe?.interact(c);
  }, "word-chip"))), e.append(o, R("⛶", "全景閱讀", () => kt(!ze), "immersive-toggle"), u("div", "paper-number", String(h * 2 + 1)));
  {
    const c = u("div", "paper-bottom-controls");
    c.append(e.querySelector(".immersive-toggle"), e.querySelector(".translation-toggle")), e.insertBefore(c, e.querySelector(".paper-number"));
  }
  Je = u("section", "scene"), Je.setAttribute("aria-label", Se[t.scene].name + "互動場景"), f = u("div", "scene-world");
  const r = u("img", "scene-bg");
  if (r.src = t.scene === "bedroom" ? "images/story/shared-gail-v1/bedroom.png" : I + (Se[t.scene].sheet || t.scene + ".png"), r.alt = Se[t.scene].alt, We && Se[t.scene].sheet) {
    const c = Se[t.scene].cell || 0, w = u("div", "scene-atlas");
    r.style.width = "200%", r.style.height = "200%", r.style.maxWidth = "none", r.style.position = "absolute", r.style.left = -(c % 2) * 100 + "%", r.style.top = -Math.floor(c / 2) * 100 + "%", w.append(r), f.append(w);
  } else f.append(r);
  for (const c of t.objects) f.append(Ue(de(c)));
  if (V.words.includes("star") && f.querySelector("[data-object=star]")?.classList.add("found-star"), D && ["kitchen", "party"].includes(t.scene)) {
    f.classList.add("baking-table");
    const c = f.querySelector(".scene-atlas").cloneNode(!0);
    c.classList.add("table-front"), c.setAttribute("aria-hidden", "true"), f.append(c);
  }
  if (J && h === 6) {
    const c = u("div", "princess-bubbles");
    c.setAttribute("aria-hidden", "true");
    for (let w = 0; w < 7; w++) {
      const T = u("i");
      T.style.left = 20 + w * 9 + "%", T.style.top = 13 + w % 3 * 10 + "%", T.style.animationDelay = w * 0.25 + "s", c.append(T);
    }
    f.append(c);
  }
  if (Q) {
    if (f.dataset.wizardPage = String(h), h === 3) {
      const c = u("span", "wizard-smoke");
      c.setAttribute("aria-hidden", "true"), f.querySelector("[data-object=potion]")?.append(c);
    }
    h === 6 && f.querySelector("[data-object=broom]")?.classList.add("restless-broom");
  }
  z && Ca(), Y && (oe = ps(f, h, ce)), K && (oe = rs(f, h)), F && (oe = Ya(f, h, ce)), $ && (f.dataset.cloudPage = String(h), oe = qa(f, h, ce)), Je.append(f, u("div", "scene-caption", Se[t.scene].caption)), a.append(e, Je), S.append(a);
  const i = u("footer", "reader-footer"), n = R("←", "上一頁", () => nt(-1), "round page-arrow");
  n.disabled = h === 0, Ve = R("", "開始英文朗讀", () => Ye(ze), "wood-button read-main"), Ee();
  const l = u("div", "mode-switch");
  l.append(R("Read to me", "系統朗讀模式", () => {
    Le = "listen", ie(), Z();
  }, Le === "listen" ? "selected" : ""), R("I’ll read", "自己讀模式", () => {
    Le = "self", ie(), Z(), q.textContent = "自己讀讀看，讀完按 Done 聽示範。";
  }, Le === "self" ? "selected" : ""));
  const d = u("div", "read-controls");
  if (d.append(Ve, l), i.append(n, d, R(h === G.length - 1 ? "✓" : "→", h === G.length - 1 ? ke ? "開始書末測驗" : "故事完成" : "下一頁", () => nt(1), "round page-arrow")), S.append(i), Ce = u("aside", "mission"), Ce.setAttribute("aria-label", "故事任務"), V.stars.includes(h))
    Ce.classList.add("solved"), Ce.append(u("span", "mission-star", "★"), u("div", "", "Lovely! 任務完成"));
  else {
    const c = u("div");
    c.append(u("small", "", "YOUR LITTLE MISSION"), u("p", "", t.mission.prompt)), Ce.append(R("✦", "聽任務提示", () => {
      Be(t.mission.prompt), q.textContent = t.mission.hint;
    }, "mission-star"), c);
  }
  S.append(Ce, q), kt(ze), requestAnimationFrame(() => S.querySelector(".progress-star.active")?.scrollIntoView({ block: "nearest", inline: "nearest" })), q.textContent = Le === "self" ? "自己讀讀看，讀完按 Done 聽示範。" : "點 Read to me 聽故事，也可以自由探索。";
}
function nt(t) {
  if (t > 0 && h === G.length - 1) {
    X = ke ? "quiz" : "complete", Z();
    return;
  }
  h = Math.max(0, Math.min(G.length - 1, h + t)), Z();
}
function uo() {
  const t = u("section", "completion");
  t.append(u("div", "completion-stars", "✦ ★ ✦"), u("span", "eyebrow", "THE END · A NEW BEGINNING"), u("h1", "", D ? "Made with love. Shared with joy." : N ? "A happy lunch. A better ending." : "Good night, little star."), u("p", "", `你和Gail一起走完了故事！完成 ${V.stars.length} / ${G.length} 個任務。`));
  const a = u("div", "discovered");
  V.words.forEach((o) => a.append(R(o, `重聽 ${o}`, () => Be(o), "word-chip"))), t.append(u("h2", "", "Words you discovered"), a);
  const e = u("div", "completion-actions");
  e.append(R("再讀一次", "再讀一次", () => {
    h = 0, X = "story", Z();
  }), R("找回未完成的星星", "繼續未完成任務", () => {
    h = G.findIndex((o, r) => !V.stars.includes(r)), h < 0 && (h = 0), X = "story", Z();
  }));
  const s = u("a", "text-button", "回故事星球");
  if (s.href = "story-planet.html", e.append(s), N) {
    const o = u("a", "wood-button", "下一本：Gail’s Birthday Cake");
    o.href = "birthday-storybook.html", e.append(o);
  }
  if (!We) {
    const o = u("a", "wood-button", "下一本：Gail and the Big Bad Wolf");
    o.href = "red-hood-storybook.html", e.append(o);
  }
  t.append(e), S.append(t, q);
}
window.addEventListener("keydown", (t) => {
  t.key === "Escape" && (ze && kt(!1), S.querySelector(".settings")?.remove(), ba = !1, S.classList.remove("zoomed")), !(X !== "story" || S.querySelector(".settings")) && (t.key === "ArrowRight" && (t.preventDefault(), nt(1)), t.key === "ArrowLeft" && (t.preventDefault(), nt(-1)));
});
document.addEventListener("visibilitychange", () => {
  document.hidden && ie();
});
window.addEventListener("pagehide", ie);
Z();
function zt(t, a) {
  const e = f?.querySelector(`[data-object=${t}] img`);
  e && (e.src = I + a);
}
function Ca() {
  if (f.dataset.foxPage = String(h), h === 1) {
    const t = u("span", "fox-portal");
    t.setAttribute("aria-hidden", "true"), f.append(t);
  }
  if ([9, 10].includes(h)) {
    const t = f.querySelector("[data-object=cup]");
    t && (t.style.transform = "translate(-50%,-50%) rotate(-75deg)");
  }
  h === 11 && (f.querySelector("[data-object=paper]").style.rotate = "-12deg"), (h === 5 || h === 18) && f.querySelector("[data-object=paper]")?.classList.add("fox-first-line"), V.stars.includes(h) && Fe();
}
function Fe() {
  const t = f.querySelector("[data-object=paper]");
  if (h === 8) {
    zt("paper", "paper-spill.png");
    const e = f.querySelector("[data-object=cup]");
    e && (e.style.transform = "translate(-50%,-50%) rotate(-75deg)");
  }
  const a = { 12: "dots", 13: "stems", 14: "vine", 15: "finished" };
  a[h] && zt("paper", "paper-" + a[h] + ".png"), h === 11 && t && (t.style.transition = "rotate 900ms ease", t.style.rotate = "0deg"), h === 17 && t && (t.style.top = "29%"), [5, 18, 19].includes(h) && t?.classList.add("has-first-line"), xe(G[h].mission.answer);
}
function mo(t) {
  const a = G[h].lines[t];
  h === 8 && /spills?|tips?/i.test(a) && Fe(), [12, 13, 14, 15].includes(h) && /adds?|paints?|wings|stem|leaf|leaves/i.test(a) && Fe(), h === 11 && /turns?/i.test(a) && Fe(), [5, 18, 19].includes(h) && /line/i.test(a) && Fe();
}
function yo(t) {
  if (It(), matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const a = new Set((Lt[h]?.[t] || []).filter((s) => s.walk).map((s) => s.actor)), e = ["gail", "fox", "rabbit", "bear", "wizard", "giant", "pip", "ella", "wolf", "mom", "grandma", "manager", "dad", "boy", "friend", "pirate", "sailor"];
  for (const [s, o] of G[h].objects.filter((r) => e.includes(r) && !a.has(r)).entries()) {
    const r = f.querySelector(`[data-object=${o}] img,[data-object=${o}] .sprite-art`);
    if (!r) continue;
    r.style.transformOrigin = "50% 95%";
    const i = s % 2 ? -1 : 1, n = r.animate([{ rotate: "0deg", translate: "0 0" }, { rotate: `${i * 1.2}deg`, translate: "0 -2px", offset: 0.35 }, { rotate: `${-i * 0.7}deg`, translate: "0 -1px", offset: 0.7 }, { rotate: "0deg", translate: "0 0" }], { duration: 3400 / (0.9 * $e), easing: "ease-in-out", iterations: 1 / 0 });
    bt.add(n), Me.add(n);
  }
}
function wo() {
  const t = G[h].mission;
  if (t.type === "drag") {
    const a = f.querySelector(`[data-object=${t.answer}]`), e = de(t.target);
    a && (a.style.transition = "left 900ms ease, top 900ms ease", a.style.left = e.x + "%", a.style.top = e.y - 5 + "%");
  }
  oe?.interact(t.answer);
}
