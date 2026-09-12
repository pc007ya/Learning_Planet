import { pages as firstPages, objects as firstObjects, scenes as firstScenes, parseProgress, migrateV1Progress, dropMatches, type ObjectSpec } from "./book";
import { redPages, redObjects, redScenes, redChoreography } from "./red-hood";
import { cakePages, cakeObjects, cakeScenes, cakeChoreography } from "./birthday";
import { dragonPages, dragonObjects, dragonScenes, dragonChoreography, levelNames, type ReadingLevel } from "./dragon";
import { dragonQuestions } from "./dragon-quiz";
import { princessPages, princessObjects, princessScenes, princessChoreography } from "./princess";
import { princessQuestions } from "./princess-quiz";
import { moonlightPages, moonlightObjects, moonlightScenes, moonlightChoreography } from "./moonlight";
import { moonlightQuestions } from "./moonlight-quiz";
import { mountMoonlight3D } from "./moonlight-3d";
import { mountStoryQuiz, freshQuiz } from "./story-quiz";
import "./style.css";
import { speechParts } from "./speech";
import { choreography as firstChoreography, motionDuration } from "./choreography";
const app = document.querySelector<HTMLElement>("#little-star")!;
const isRed = location.pathname.endsWith("red-hood-storybook.html") || new URLSearchParams(location.search).get("book") === "red-hood";
const isCake = location.pathname.endsWith("birthday-storybook.html");
const isDragon = location.pathname.endsWith("dragon-storybook.html");
const isPrincess = location.pathname.endsWith("princess-storybook.html");
const isMoonlight = location.pathname.endsWith("moonlight-garden-storybook.html") || new URLSearchParams(location.search).get("book") === "moonlight-garden";
const graded = isDragon || isPrincess || isMoonlight;
let level: ReadingLevel = "B";
try {
  const saved = localStorage.getItem("gms-reading-level");
  if (saved === "A" || saved === "B" || saved === "C") level = saved;
} catch {}
const quizStates = { A: freshQuiz(), B: freshQuiz(), C: freshQuiz() };
const illustrated = isRed || isCake || graded;
let pages = isMoonlight ? moonlightPages(level) : isPrincess ? princessPages(level) : isDragon ? dragonPages(level) : isCake ? cakePages : isRed ? redPages : firstPages,
  objects = isMoonlight ? moonlightObjects : isPrincess ? princessObjects : isDragon ? dragonObjects : isCake ? cakeObjects : isRed ? redObjects : firstObjects,
  scenes = isMoonlight ? moonlightScenes : isPrincess ? princessScenes : isDragon ? dragonScenes : isCake ? cakeScenes : isRed ? redScenes : firstScenes,
  choreography = isMoonlight ? moonlightChoreography(level) : isPrincess ? princessChoreography(level) : isDragon ? dragonChoreography(level) : isCake ? cakeChoreography : isRed ? redChoreography : firstChoreography;
const KEY = isMoonlight ? "learning-planet-moonlight-garden-v1" : isPrincess ? "learning-planet-princess-v1" : isDragon ? "learning-planet-dragon-v1" : isCake ? "learning-planet-birthday-v1" : isRed ? "learning-planet-red-hood-v1" : "learning-planet-little-star-v2";
const title = isMoonlight ? "Gail and the Moonlight Garden" : isPrincess ? "Gail and the Princess Who Forgot to Smile" : isDragon ? "Gail and the Little Dragon Who Forgot to Fly" : isCake ? "Gail’s Birthday Cake" : isRed ? "Gail and the Big Bad Wolf" : "Where Is My Star?";
app.classList.toggle("red-hood-book", illustrated);
app.classList.toggle("cake-book", isCake);
app.classList.toggle("dragon-book", graded);
app.classList.toggle("princess-book", isPrincess);
app.classList.toggle("moonlight-book", isMoonlight);
app.dataset.level = level;
document.title = title + " · 學習星球英文繪本";
let progress = parseProgress(null);
try {
  const current = localStorage.getItem(KEY);
  progress = current === null && !illustrated ? migrateV1Progress(localStorage.getItem("learning-planet-little-star-v1")) : parseProgress(current, pages.length);
} catch {
  /* Storage is optional. */
}
let page = progress.page,
  screen: "cover" | "story" | "complete" | "quiz" = "cover",
  mode: "listen" | "self" = "listen";
let autoBook = false,
  immersive = false;
let dreamMotion = true;
try {
  dreamMotion = localStorage.getItem("moonlight-motion") !== "off";
} catch {}
let disposeDream = () => {};
let playbackRate = 1;
try {
  const saved = Number(localStorage.getItem("gms-playback-multiplier-v2"));
  if ([1.2, 1, 0.9, 0.8, 0.7, 0.6].includes(saved)) playbackRate = saved;
} catch {}
let epoch = 0,
  reading = false,
  paused = false,
  muted = false,
  hints = false,
  zoom = false,
  selected = "",
  step = 0;
let feedback: HTMLElement, scene: HTMLElement, world: HTMLElement, mission: HTMLElement, readButton: HTMLButtonElement, lines: HTMLElement;
const cleanupTimers = new Set<ReturnType<typeof setTimeout>>();
const asset = isMoonlight ? "images/story/moonlight-garden-v1/" : isPrincess ? "images/story/princess-v1/" : isDragon ? "images/story/dragon-v1/" : isCake ? "images/story/birthday-v1/" : isRed ? "images/story/red-hood-v1/" : "images/story/little-star-v1/";
function later(fn: () => void, ms: number) {
  const t = setTimeout(() => {
    cleanupTimers.delete(t);
    fn();
  }, ms);
  cleanupTimers.add(t);
}
function save() {
  progress.page = page;
  try {
    localStorage.setItem(KEY, JSON.stringify(progress));
  } catch {
    /* Continue offline without persistence. */
  }
}
function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls = "", text = "") {
  const n = document.createElement(tag);
  n.className = cls;
  n.textContent = text;
  return n;
}
function btn(text: string, label: string, fn: () => void, cls = "wood-button") {
  const n = el("button", cls, text);
  n.type = "button";
  n.setAttribute("aria-label", label);
  n.title = label;
  n.onclick = fn;
  return n;
}
const storyAnimations = new Set<Animation>();
function stopMotion() {
  storyAnimations.forEach((a) => a.cancel());
  storyAnimations.clear();
}
function moveWithSentence(lineIndex: number): Promise<void> {
  const token = epoch;
  if (isDragon) {
    const pip = world.querySelector<HTMLElement>("[data-object=pip] .sprite-art");
    const text = pages[page].lines[lineIndex];
    if (pip && /open.*wing|stretches.*wide|spread.*wing/i.test(text)) {
      pip.style.backgroundPosition = "100% 0%";
      pip.style.backgroundSize = "200% 200%";
    }
    if (pip && (page === 18 || /glides|flies|take.*sky|reach.*sky|meet.*sky|fly again/i.test(text))) {
      pip.style.backgroundPosition = "0% 100%";
      pip.style.backgroundSize = "180% 200%";
    }
  }
  const cues = choreography[page]?.[lineIndex] || [];
  if (isRed && page === 20 && lineIndex === 1) setWolfCostume(false);
  const duration = matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : motionDuration(pages[page].lines[lineIndex], false) / (0.9 * playbackRate);
  const pending: Promise<unknown>[] = [];
  for (const cue of cues) {
    const actor = world.querySelector<HTMLElement>(`[data-object="${cue.actor}"]`);
    if (!actor) continue;
    const style = getComputedStyle(actor);
    const animation = actor.animate(
      [
        { left: style.left, top: style.top, transform: style.transform },
        {
          left: cue.x + "%",
          top: cue.y + "%",
          transform: `translate(-50%,-50%) rotate(${cue.rotate || 0}deg) scale(${cue.scale || 1})`,
        },
      ],
      { duration, easing: "ease-in-out", fill: "forwards" },
    );
    storyAnimations.add(animation);
    pending.push(animation.finished.catch(() => {}));
    const paper = actor.querySelector<HTMLElement>("img,.sprite-art");
    if (cue.walk && paper) {
      const from = (parseFloat(style.left) / world.clientWidth) * 100;
      if (Math.abs(cue.x - from) > 0.5) {
        paper.style.scale = "";
        paper.style.transform = `scaleX(${cue.x < from ? -1 : 1})`;
      }
    }
    if (cue.walk && paper && duration) {
      const steps = Math.max(4, Math.round(duration / 520));
      const bob = paper.animate([{ transform: "translateY(0) rotate(-2deg)" }, { transform: "translateY(-4px) rotate(2deg)", offset: 0.5 }, { transform: "translateY(0) rotate(-2deg)" }], {
        duration: duration / steps,
        iterations: steps,
        easing: "ease-in-out",
      });
      storyAnimations.add(bob);
      pending.push(bob.finished.catch(() => {}));
    }
  }
  return Promise.all(pending).then(() => {
    if (token !== epoch) return;
    if (isCake) {
      bakeStep(lineIndex);
      return;
    }
    if (!isRed) return;
    if (page === 0 && lineIndex === 1) {
      const img = world.querySelector<HTMLImageElement>("[data-object=gail] img");
      if (img) {
        img.src = asset + "gail.png";
        img.classList.remove("paper-girl");
      }
      const hood = world.querySelector<HTMLElement>("[data-object=hood]")!;
      hood.querySelector("img")!.style.opacity = "0";
      hood.style.left = "82%";
      hood.style.top = "61%";
    }
    if (page === 0 && lineIndex === 2) {
      const hood = world.querySelector<HTMLElement>("[data-object=hood]")!;
      hood.style.left = "61%";
    }
    if (page === 11 && lineIndex === 2) setWolfCostume(true);
  });
}
function setWolfCostume(dressed: boolean) {
  const actor = world.querySelector<HTMLElement>("[data-object=wolf]");
  if (!actor) return;
  const old = actor.querySelector<HTMLElement>("img,.sprite-art");
  const facing = old?.style.scale || "1 1";
  old?.remove();
  if (dressed) {
    const img = el("img");
    img.src = asset + "wolf-dressed.png";
    img.alt = "";
    img.style.scale = facing;
    actor.prepend(img);
    actor.classList.add("wardrobe-wolf");
  } else {
    const original = makeObject({
      ...redObjects.wolf,
      ...pages[page].placements?.wolf,
    });
    const art = original.querySelector<HTMLElement>(".sprite-art")!;
    art.style.scale = facing;
    actor.prepend(art);
    actor.classList.remove("wardrobe-wolf");
  }
  for (const id of ["cap", "glasses", "blanket"]) world.querySelector(`[data-object=${id}]`)?.classList.toggle("costume-hidden", dressed);
}
function resetWardrobe() {
  if (page === 0 || page === 11 || page === 20) {
    for (const id of pages[page].objects) {
      const old = world.querySelector(`[data-object=${id}]`);
      old?.replaceWith(makeObject(currentObject(id)));
    }
  }
}
function addApron(actor: HTMLElement) {
  if (actor.querySelector(".gail-apron")) return;
  const apron = el("img", "gail-apron");
  apron.src = asset + "apron.svg";
  apron.alt = "";
  actor.append(apron);
}
function resetCake() {
  for (const id of pages[page].objects) {
    world.querySelector(`[data-object=${id}]`)?.replaceWith(makeObject(currentObject(id)));
  }
  world.querySelector(".candle-flame")?.remove();
}
function bakeStep(line: number) {
  if (page === 8 && line >= 1) {
    const girl = world.querySelector<HTMLElement>("[data-object=gail]");
    if (girl) addApron(girl);
    world.querySelector("[data-object=apron]")?.classList.add("applied-ingredient");
  }
  if (page === 11 && line >= 1) world.querySelector("[data-object=bowl]")?.classList.add("has-batter");
  const transitions: Record<number, [string, number]> = {
    19: ["plain", 1],
    20: ["frosted", 2],
    21: ["decorated", 3],
  };
  const change = transitions[page];
  if (change && line >= (page === 21 ? 2 : 1)) {
    const art = world.querySelector<HTMLElement>(`[data-object=${change[0]}] .sprite-art`);
    if (art) {
      const cell = change[1];
      art.style.backgroundPosition = `${(cell % 2) * 100}% ${Math.floor(cell / 2) * 100}%`;
      art.style.backgroundSize = `200% ${cell > 1 ? 188 : 200}%`;
    }
    const applied = page === 19 ? "spatula" : page === 20 ? "strawberries" : "candle";
    const tool = world.querySelector<HTMLElement>(`[data-object=${applied}]`);
    if (tool) tool.classList.add("applied-ingredient");
  }
  if (page === 22 && line >= 1 && !world.querySelector(".candle-flame")) world.querySelector("[data-object=finished]")?.append(el("span", "candle-flame"));
  if (page === 23 && line === 0) world.querySelector(".candle-flame")?.remove();
}
function clearVoice() {
  autoBook = false;
  epoch++;
  stopMotion();
  window.speechSynthesis?.cancel();
  reading = false;
  paused = false;
  app.querySelectorAll(".spoken,.current-line").forEach((e) => e.classList.remove("spoken", "current-line"));
  syncRead();
}
function syncRead() {
  const whole = app.querySelector<HTMLButtonElement>("[data-whole-book]");
  if (whole) {
    whole.textContent = autoBook ? (paused ? "▶" : "Ⅱ") : "▶";
    whole.setAttribute("aria-label", autoBook ? (paused ? "繼續整本朗讀" : "暫停整本朗讀") : graded ? "依目前難度朗讀整本" : "自動朗讀整本");
    whole.setAttribute("aria-pressed", String(autoBook));
  }
  if (readButton) {
    readButton.textContent = reading ? (paused ? "▶ Continue" : "Ⅱ Pause") : mode === "self" ? "✓ Done · 聽示範" : "▶ Read to me";
    readButton.setAttribute("aria-label", reading ? (paused ? "繼續朗讀" : "暫停朗讀") : mode === "self" ? "讀好了，聽示範" : "開始英文朗讀");
  }
}
function speakText(text: string, token: number, done: () => void, error: () => void, onWord?: (index: number) => void) {
  const parts = speechParts(text);
  let partIndex = 0;
  const next = () => {
    if (token !== epoch) return;
    const part = parts[partIndex++];
    if (!part) {
      done();
      return;
    }
    const u = new SpeechSynthesisUtterance(part.text);
    u.lang = part.lang;
    u.rate = 0.9 * playbackRate;
    const voices = speechSynthesis.getVoices();
    const voice = voices.find((v) => v.lang === part.lang) || voices.find((v) => /^en[-_]/i.test(v.lang));
    if (voice) u.voice = voice;
    u.onstart = () => {
      if (token === epoch) onWord?.(part.start);
    };
    u.onboundary = (e) => {
      if (token === epoch && e.name === "word") onWord?.(part.start + e.charIndex);
    };
    u.onend = next;
    u.onerror = () => {
      if (token === epoch) error();
    };
    speechSynthesis.speak(u);
  };
  next();
}
function say(text: string, done?: () => void) {
  clearVoice();
  if (muted) {
    done?.();
    return;
  }
  if (!("speechSynthesis" in window)) {
    feedback.textContent = "此裝置不支援語音，可以點字閱讀。";
    done?.();
    return;
  }
  speakText(
    text,
    epoch,
    () => done?.(),
    () => {
      feedback.textContent = "語音暫時無法播放，仍可閱讀與探索。";
      done?.();
    },
  );
}
function read(continuous = false) {
  if (reading) {
    paused = !paused;
    paused ? speechSynthesis.pause() : speechSynthesis.resume();
    storyAnimations.forEach((a) => {
      if (paused && a.playState === "running") a.pause();
      else if (!paused && a.playState === "paused") a.play();
    });
    syncRead();
    return;
  }
  clearVoice();
  autoBook = continuous;
  if (muted) {
    feedback.textContent = "請開啟右上角聲音，再聽故事。";
    return;
  }
  if (!("speechSynthesis" in window)) {
    feedback.textContent = "此裝置不支援語音，可使用自己讀模式。";
    return;
  }
  if (isRed) resetWardrobe();
  if (isCake || graded) resetCake();
  reading = true;
  syncRead();
  const token = epoch;
  let index = 0;
  const next = () => {
    if (token !== epoch) return;
    if (index >= pages[page].lines.length) {
      reading = false;
      syncRead();
      app.querySelectorAll(".spoken,.current-line").forEach((e) => e.classList.remove("spoken", "current-line"));
      if (autoBook) {
        if (page < pages.length - 1) {
          reading = true;
          syncRead();
          const advance = () => {
            if (token !== epoch || !autoBook) return;
            if (paused) {
              later(advance, 100);
              return;
            }
            page++;
            render();
            read(true);
          };
          later(advance, 1500);
        } else {
          autoBook = false;
          syncRead();
          feedback.textContent = graded ? "The end! 整本讀完了，可以點右上角鉛筆做小測驗。" : "The end! 整本讀完了。";
        }
      } else feedback.textContent = "Now explore! 點場景，發現單字。";
      return;
    }
    const line = lines.children[index] as HTMLElement;
    app.querySelectorAll(".spoken,.current-line").forEach((e) => e.classList.remove("spoken", "current-line"));
    line.classList.add("current-line");
    let motion: Promise<void> | undefined;
    speakText(
      pages[page].lines[index],
      token,
      () => {
        (motion || Promise.resolve()).then(() => {
          if (token !== epoch) return;
          index++;
          next();
        });
      },
      () => {
        stopMotion();
        autoBook = false;
        reading = false;
        syncRead();
        feedback.textContent = "語音暫時無法播放，試試點單字或自己讀。";
      },
      (charIndex) => {
        if (!motion) motion = moveWithSentence(index);
        line.querySelectorAll<HTMLElement>("[data-start]").forEach((w) => {
          const start = Number(w.dataset.start);
          const on = charIndex >= start && charIndex < start + (w.textContent?.length || 0);
          w.classList.toggle("spoken", on);
          if (on) glow(w.textContent?.replace(/[^a-z]/gi, "").toLowerCase() || "");
        });
      },
    );
  };
  next();
}
function glow(id: string) {
  id = pages[page].objects.find((key) => key === id || objects[key].word.toLowerCase() === id.toLowerCase()) || id;
  const target = world?.querySelector<HTMLElement>(`[data-object="${id}"]`);
  if (!target) return;
  target.classList.add("glow");
  later(() => target.classList.remove("glow"), 1300);
}
function currentObject(id: string): ObjectSpec {
  const o = { ...objects[id], ...pages[page].placements?.[id] };
  if (isCake || graded) return o;
  if (isRed) {
    if (id === "wolf" && [14, 15, 16, 17, 20].includes(page)) {
      o.image = "wolf-dressed.png";
      o.sprite = undefined;
    }
    return o;
  }
  if (id === "star" && pages[page].star) [o.x, o.y] = pages[page].star!;
  if (id === "gail" && pages[page].scene === "garden") {
    o.x = 55;
    o.y = 73;
  } else if (id === "gail" && pages[page].scene !== "room") {
    o.x = 85;
    o.y = 79;
    o.w = 16;
    o.h = 38;
  }
  return o;
}
function position(n: HTMLElement, o: ObjectSpec) {
  n.style.left = o.x + "%";
  n.style.top = o.y + "%";
  n.style.width = o.w + "%";
  n.style.height = o.h + "%";
}
function discover(word: string) {
  word = word.toLowerCase() === "gail" ? "Gail" : word.toLowerCase() === "grandma" ? "Grandma" : word;
  if (word.toLowerCase() === "star") world?.querySelector("[data-object=star]")?.classList.add("found-star");
  if (!progress.words.includes(word)) {
    progress.words.push(word);
    save();
  }
}
function explore(id: string) {
  const o = objects[id];
  if (!o) return;
  discover(o.word);
  glow(id);
  const target = world.querySelector<HTMLElement>(`[data-object="${id}"]`);
  if (target) {
    target.classList.add("show-label");
    later(() => target.classList.remove("show-label"), 2200);
    world.style.transformOrigin = `${target.style.left} ${target.style.top}`;
    world.classList.add("peek");
    later(() => world.classList.remove("peek"), 1400);
  }
  feedback.textContent = o.word;
  say(o.word);
}
function success() {
  if (!progress.stars.includes(page)) {
    progress.stars.push(page);
    for (const word of pages[page].words) discover(word);
  }
  save();
  selected = "";
  mission.classList.add("solved");
  mission.replaceChildren(el("span", "mission-star", "★"), el("div", "", "Lovely! 任務完成"));
  app.querySelectorAll<HTMLElement>("[data-page]").forEach((n) => {
    if (Number(n.dataset.page) === page) n.classList.add("earned");
  });
  feedback.textContent = "Great! 你幫故事往前走了一步。";
  say("Great!");
  animateStory();
}
function animateStory() {
  if (illustrated) {
    if (isCake) bakeStep(2);
    const m = pages[page].mission;
    glow(m.answer);
    if (m.type === "drag") {
      const n = world.querySelector<HTMLElement>(`[data-object="${m.answer}"]`);
      if (n) {
        const target = currentObject(m.target!);
        n.style.left = target.x + "%";
        n.style.top = target.y + "%";
      }
    }
    return;
  }
  const action = pages[page].action;
  world.classList.add("action-" + action);
  const star = world.querySelector<HTMLElement>('[data-object="star"]');
  const girl = world.querySelector<HTMLElement>('[data-object="gail"]');
  const cat = world.querySelector<HTMLElement>('[data-object="cat"]');
  const ladder = world.querySelector<HTMLElement>('[data-object="ladder"]');
  if (action === "sky" && star) {
    star.style.left = "48%";
    star.style.top = "12%";
  }
  if (action === "climb") {
    if (ladder) {
      ladder.style.left = "77%";
      ladder.style.top = "51%";
      ladder.style.transform = "translate(-50%,-50%) rotate(12deg)";
    }
    if (cat) {
      cat.style.left = "80%";
      cat.style.top = "36%";
    }
  }
  if (action === "cross" && girl) {
    girl.style.left = "29%";
    girl.style.top = "48%";
    girl.style.width = "12%";
    girl.style.height = "30%";
  }
  if (action === "sleep" && girl) {
    girl.style.left = "36%";
    girl.style.top = "54%";
    girl.style.transform = "translate(-50%,-50%) rotate(-65deg) scale(.7)";
  }
  if (action === "window") glow("window");
  if (action === "flower") glow("flower");
  if (action === "cat") glow("cat");
  if (["firefly", "duck", "basket", "door"].includes(action)) glow(action);
}
function interact(id: string) {
  explore(id);
  const m = pages[page].mission;
  if (progress.stars.includes(page)) return;
  if (m.type === "drag") {
    if (id === m.answer) {
      selected = id;
      mission.classList.add("holding");
      feedback.textContent = `現在點 ${objects[m.target!].word}，或把物件拖過去。`;
      glow(m.target!);
    } else if (selected === m.answer && id === m.target) success();
    else {
      feedback.textContent = m.hint;
    }
    return;
  }
  if (m.type === "sequence") {
    if (id === m.steps![step]) {
      step++;
      if (step === m.steps!.length) success();
      else feedback.textContent = `Good! 接著點 ${objects[m.steps![step]].word}。`;
    } else {
      feedback.textContent = "Try again! " + m.hint;
    }
    return;
  }
  if (id !== m.answer) {
    feedback.textContent = "Try again! " + m.hint;
    return;
  }
  if (isCake && m.type === "tap") {
    step++;
    const whisk = world.querySelector("[data-object=whisk] .sprite-art");
    whisk?.animate([{ transform: "rotate(-20deg)" }, { transform: "rotate(20deg)" }, { transform: "rotate(-20deg)" }], { duration: 600 });
    if (step < 3) {
      feedback.textContent = `Stir, stir · ${step} / 3`;
      return;
    }
  }
  if (m.type === "follow") {
    step++;
    const star = world.querySelector<HTMLElement>('[data-object="star"]')!;
    star.style.left = [45, 53, 60][step - 1] + "%";
    star.style.top = [34, 22, 12][step - 1] + "%";
    if (step < 3) {
      feedback.textContent = `Follow the star · ${step} / 3`;
      return;
    }
  }
  success();
}
function makeObject(o: ObjectSpec) {
  const n = btn("", `探索 ${o.word}`, () => interact(o.id), "scene-object " + (o.kind || "hotspot"));
  n.dataset.object = o.id;
  if (illustrated && [pages[page].mission.answer, pages[page].mission.target, ...(pages[page].mission.steps || [])].includes(o.id)) n.style.zIndex = "10";
  position(n, o);
  if (isRed && pages[page].scene === "dining" && ["gail", "grandma", "wolf"].includes(o.id)) n.style.clipPath = "inset(0 0 35% 0)";
  if (isRed && [14, 15, 16, 17, 20].includes(page) && ["cap", "glasses", "blanket"].includes(o.id)) n.classList.add("costume-hidden");
  const label = el("span", "object-label", o.word);
  if (o.sprite) {
    const art = el("span", "sprite-art");
    const { sheet, cell, columns, clip, rect, size } = o.sprite;
    art.style.backgroundImage = `url(${asset + sheet})`;
    art.style.backgroundSize = `${isDragon && cell === 2 ? 180 : sheet === "ingredients.png" && o.id === "bowl" ? 285 : columns * 100}% ${sheet.endsWith("cast.png") && o.id === "mom" ? 195 : sheet === "cakes.png" && cell > 1 ? 188 : columns * 100}%`;
    art.style.backgroundPosition = `${((cell % columns) / (columns - 1)) * 100}% ${(Math.floor(cell / columns) / (columns - 1)) * 100}%`;
    if (rect && size) {
      const [x, y, w, h] = rect;
      const [sw, sh] = Array.isArray(size) ? size : [size, size];
      art.style.backgroundSize = `${(sw / w) * 100}% ${(sh / h) * 100}%`;
      art.style.backgroundPosition = `${(x / (sw - w)) * 100}% ${(y / (sh - h)) * 100}%`;
    }
    if (clip) art.style.clipPath = clip;
    n.classList.add(sheet.endsWith("cast.png") ? "puppet" : "prop");
    n.append(art);
  } else if (o.image || o.kind === "girl" || o.kind === "cat") {
    const img = el("img", o.kind === "girl" ? (illustrated ? "red-gail" : "paper-girl") : "");
    img.src = o.image ? asset + o.image : o.kind === "girl" ? asset + "gail-paper.png" : "images/math-master/v1/objects/cat-v1.png";
    img.alt = "";
    if (o.image?.includes("gail-paper")) img.classList.add("paper-girl");
    n.append(img);
    if (o.id === "wolf" || o.id === "dad") n.classList.add("wardrobe-wolf");
  } else if (o.kind === "star") n.append(el("span", "star-shape", "★"), el("span", "star-face", "•ᴗ•"));
  else if (o.kind === "ladder") {
    const l = el("span", "ladder-art");
    for (let i = 0; i < 6; i++) l.append(el("i"));
    n.append(l);
  } else if (isRed && o.id === "number") n.append(el("span", "door-number", "24"));
  else if (isRed && ["left", "right", "away"].includes(o.id)) n.append(el("span", "direction-cue", o.id === "left" ? "←" : "→"));
  else n.append(el("span", "hotspot-spark", "✦"));
  if (illustrated) {
    const cast = ["gail", "wolf", "mom", "grandma", "manager", "dad", "pip", "ella", "caregiver", "boy", "friend"];
    const art = n.querySelector<HTMLElement>("img,.sprite-art");
    const peers = pages[page].objects.filter((id) => cast.includes(id) && id !== o.id);
    if (art && cast.includes(o.id) && peers.length) {
      const target = peers.reduce((sum, id) => sum + currentObject(id).x, 0) / peers.length;
      art.style.scale = target < o.x ? "-1 1" : "1 1";
    }
    if (isPrincess && art && ["ella", "friend"].includes(o.id)) {
      const focus = pages[page].objects.includes("tower") ? currentObject("tower").x : pages[page].objects.includes("blocks") ? currentObject("blocks").x : currentObject("gail").x;
      art.style.scale = "";
      const nativeLeft = o.sprite?.sheet === "support-cast.png";
      art.style.transform = `scaleX(${focus < o.x === nativeLeft ? 1 : -1})`;
    }
    if (art && o.id === "hood" && page === 0) art.style.scale = "-1 1";
  }
  if (isCake && o.id === "gail" && page >= 9) addApron(n);
  if (isCake && o.id === "bowl" && page >= 12) n.classList.add("has-batter");
  if (isCake && o.id === "finished" && page === 23) n.append(el("span", "candle-flame"));
  n.append(label);
  const m = pages[page].mission;
  if (m.type === "drag" && o.id === m.answer) {
    n.classList.add("draggable");
    let startX = 0,
      startY = 0,
      moved = false;
    let clickSuppressed = false;
    n.onclick = () => {
      if (clickSuppressed) {
        clickSuppressed = false;
        return;
      }
      interact(o.id);
    };
    n.onpointerdown = (e) => {
      if (progress.stars.includes(page)) return;
      startX = e.clientX;
      startY = e.clientY;
      moved = false;
      n.setPointerCapture(e.pointerId);
    };
    n.onpointermove = (e) => {
      if (!n.hasPointerCapture(e.pointerId)) return;
      if (Math.hypot(e.clientX - startX, e.clientY - startY) > 6) moved = true;
      if (!moved) return;
      if (reading) clearVoice();
      const r = world.getBoundingClientRect();
      n.style.left = ((e.clientX - r.left) / r.width) * 100 + "%";
      n.style.top = ((e.clientY - r.top) / r.height) * 100 + "%";
      n.classList.add("dragging");
    };
    n.onpointerup = (e) => {
      if (!n.hasPointerCapture(e.pointerId)) return;
      n.releasePointerCapture(e.pointerId);
      n.classList.remove("dragging");
      if (!moved) return;
      clickSuppressed = true;
      const r = world.getBoundingClientRect();
      if (dropMatches(((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100, currentObject(m.target!))) success();
      else {
        position(n, o);
        feedback.textContent = "再試一次：" + m.hint;
      }
    };
    n.onpointercancel = () => {
      position(n, o);
      n.classList.remove("dragging");
    };
  }
  return n;
}
function toolbar() {
  const top = el("header", "topbar");
  const home = el("a", "brand");
  home.href = "story-planet.html";
  home.innerHTML = '<img class="official-brand" src="images/brand/learning-planet-brand-v1.png" alt="Learning Planet 學習星球"><span class="brand-subtitle">英文魔法繪本</span>';
  home.setAttribute("aria-label", "Learning Planet 學習星球，回故事星球");
  top.append(home);
  const track = el("nav", "progress");
  track.setAttribute("aria-label", "故事頁數與星星");
  for (let i = 0; i < pages.length; i++) {
    const b = btn(
      "★",
      `第 ${i + 1} 頁${progress.stars.includes(i) ? "，已完成" : ""}`,
      () => {
        page = i;
        screen = "story";
        render();
      },
      "progress-star" + (progress.stars.includes(i) ? " earned" : "") + (i === page && screen === "story" ? " active" : ""),
    );
    b.dataset.page = String(i);
    b.setAttribute("aria-current", String(i === page && screen === "story"));
    track.append(b);
  }
  top.append(track);
  const right = el("div", "tools");
  {
    const whole = btn(
      "▶",
      graded ? "依目前難度朗讀整本" : "自動朗讀整本",
      () => {
        if (autoBook && reading) {
          read(true);
          return;
        }
        clearVoice();
        muted = false;
        mode = "listen";
        page = 0;
        screen = "story";
        render();
        read(true);
      },
      "round",
    );
    whole.dataset.wholeBook = "true";
    whole.setAttribute("aria-pressed", "false");
    right.append(whole);
  }
  right.append(btn("⚙", "閱讀設定", settings, "round"));
  if (graded) {
    right.prepend(levelControl());
    right.append(
      btn(
        "✎",
        "書末小測驗",
        () => {
          screen = "quiz";
          render();
        },
        "round",
      ),
    );
  }
  top.append(right);
  return top;
}
function levelControl() {
  const group = el("div", "level-switch");
  group.setAttribute("role", "group");
  group.setAttribute("aria-label", "閱讀難度");
  for (const l of ["A", "B", "C"] as ReadingLevel[]) {
    const b = btn(
      l,
      `Level ${l} ${levelNames[l]}`,
      () => {
        if (level === l) return;
        const keepReading = autoBook && !paused;
        clearVoice();
        level = l;
        pages = isMoonlight ? moonlightPages(level) : isPrincess ? princessPages(level) : dragonPages(level);
        choreography = isMoonlight ? moonlightChoreography(level) : isPrincess ? princessChoreography(level) : dragonChoreography(level);
        app.dataset.level = level;
        try {
          localStorage.setItem("gms-reading-level", level);
        } catch {}
        render();
        if (keepReading) read(true);
      },
      "level-button",
    );
    b.setAttribute("aria-pressed", String(level === l));
    group.append(b);
  }
  return group;
}
function settings() {
  if (app.querySelector(".settings")) {
    app.querySelector(".settings")!.remove();
    return;
  }
  const panel = el("section", "settings");
  panel.setAttribute("aria-label", "閱讀設定");
  panel.append(el("h2", "", "閱讀設定"));
  const speed = el("div", "speed-options");
  speed.setAttribute("role", "group");
  speed.setAttribute("aria-label", "播放速度");
  for (const rate of [1.2, 1, 0.9, 0.8, 0.7, 0.6]) {
    const b = btn(
      rate + "x",
      `播放速度 ${rate}x`,
      () => {
        const resume = reading,
          continuous = autoBook;
        clearVoice();
        playbackRate = rate;
        try {
          localStorage.setItem("gms-playback-multiplier-v2", String(rate));
        } catch {}
        speed.querySelectorAll("button").forEach((n) => n.setAttribute("aria-pressed", String(n === b)));
        if (resume) read(continuous);
      },
      "speed-choice",
    );
    b.setAttribute("aria-pressed", String(rate === playbackRate));
    speed.append(b);
  }
  const labels = btn(hints ? "物件提示 · 開" : "物件提示 · 關", "切換物件提示", () => {
    hints = !hints;
    app.classList.toggle("show-hints", hints);
    labels.textContent = hints ? "物件提示 · 開" : "物件提示 · 關";
  });
  panel.append(speed, labels);
  if (isMoonlight) {
    panel.append(
      btn(dreamMotion ? "2.5D 動態 · 開" : "2.5D 動態 · 關", "切換月光花園 2.5D 動態", () => {
        dreamMotion = !dreamMotion;
        try {
          localStorage.setItem("moonlight-motion", dreamMotion ? "on" : "off");
        } catch {}
        render();
      }),
    );
  }
  panel.append(
    el("p", "", "進度儲存在這台裝置。自己讀模式不錄音、不評分。"),
    btn("完成", "關閉設定", () => panel.remove()),
  );
  app.append(panel);
}
function cover() {
  const cover = el("section", "cover-stage");
  cover.innerHTML = `<div class="cover-copy"><span class="eyebrow">A LITTLE LIGHT. A BIG ADVENTURE.</span><h1>Where Is<br>My <em>Star?</em></h1><p>跟著Gail，找回夜空裡的小星星。</p><div class="cover-meta">${pages.length} 頁故事 <i>✦</i> 聽、讀、探索</div></div><div class="closed-book"><div class="cover-border"><span class="cover-small">LEARNING PLANET · STORY NO. 01</span><div class="cover-moon">☾</div><h2>Where Is<br>My Star?</h2><img class="cover-girl paper-girl" src="${asset}${isRed ? "gail.png" : "gail-paper.png"}" alt="穿星星睡衣的Gail"><span class="cover-star">★</span><span class="cover-author">Gail的星光冒險</span></div></div>`;
  const buttons = el("div", "cover-actions");
  buttons.append(
    btn(
      progress.stars.length || page ? "繼續故事 →" : "翻開故事 →",
      "翻開故事",
      () => {
        screen = "story";
        render();
      },
      "wood-button primary",
    ),
  );
  if (progress.stars.length || page)
    buttons.append(
      btn(
        "重新探索",
        "重新探索，重設本書星星",
        () => {
          progress = { page: 0, stars: [], words: [] };
          if (graded) {
            for (const l of ["A", "B", "C"] as ReadingLevel[]) {
              quizStates[l] = freshQuiz();
              try {
                localStorage.removeItem(KEY + "-quiz-" + l);
              } catch {}
            }
          }
          page = 0;
          save();
          screen = "story";
          render();
        },
        "text-button",
      ),
    );
  if (isRed) {
    cover.querySelector(".cover-copy>.eyebrow")!.textContent = "A RED HOOD. A SMART LITTLE HERO.";
    cover.querySelector("h1")!.innerHTML = "Gail and the<br><em>Big Bad Wolf</em>";
    cover.querySelector("h2")!.innerHTML = "Gail and the<br>Big Bad Wolf";
    cover.querySelector(".cover-copy p")!.textContent = "跟著 Gail，展開現代小紅帽的暖心冒險。";
    cover.querySelector(".cover-small")!.textContent = "LEARNING PLANET · STORY NO. 02";
    const girl = cover.querySelector<HTMLImageElement>(".cover-girl")!;
    girl.src = asset + "gail.png";
    girl.classList.remove("paper-girl");
    girl.classList.add("red-gail");
    girl.alt = "穿紅色連帽短斗篷、戴星星髮夾的 Gail";
    cover.querySelector(".cover-author")!.textContent = "Gail 的紅斗篷冒險";
  }
  if (isCake) {
    cover.querySelector(".cover-copy>.eyebrow")!.textContent = "STORY NO. 03 · MADE WITH LOVE";
    cover.querySelector("h1")!.innerHTML = "Gail’s<br><em>Birthday Cake</em>";
    cover.querySelector(".cover-copy p")!.textContent = "七歲的驚喜，藏在一起動手的每一步。";
    const front = cover.querySelector<HTMLElement>(".cover-border")!;
    front.style.backgroundImage = `url(${asset}cover.png)`;
    front.innerHTML = '<span class="cake-cover-series">LEARNING PLANET · 03</span><h2>Gail’s<br>Birthday Cake</h2><p>Made with love</p>';
  }
  if (isDragon) {
    cover.querySelector(".eyebrow")!.textContent = "GAIL’S MAGICAL STORYBOOK · 01";
    cover.querySelector("h1")!.innerHTML = "Little Dragon,<br><em>Brave Wings</em>";
    cover.querySelector(".cover-copy p")!.textContent = "瑜瑜與忘記飛翔的小龍";
    cover.querySelector(".cover-meta")!.textContent = "20 場景 · A / B / C · 10 題故事挑戰";
    const front = cover.querySelector<HTMLElement>(".cover-border")!;
    front.style.backgroundImage = `url(${asset}cover.png)`;
    front.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 01</span><h2>Gail and the<br>Little Dragon<br><small>Who Forgot to Fly</small></h2>';
    const note = el("p", "level-note", levelNames[level]);
    cover.querySelector(".cover-copy")!.append(note);
    try {
      const result = JSON.parse(localStorage.getItem(KEY + "-quiz-" + level) || "null");
      if (result && Number.isInteger(result.score) && result.score >= 0 && result.score <= 10) cover.querySelector(".cover-copy")!.append(el("p", "level-note", `上次挑戰 · ${result.score} / 10`));
    } catch {}
  }
  if (isPrincess) {
    cover.querySelector(".eyebrow")!.textContent = "GAIL’S MAGICAL STORYBOOK · 02";
    cover.querySelector("h1")!.innerHTML = "A Princess,<br><em>A Little Smile</em>";
    cover.querySelector(".cover-copy p")!.textContent = "瑜瑜與不會笑的公主";
    cover.querySelector(".cover-meta")!.textContent = "20 場景 · A / B / C · 20 單字 · 16 題";
    const front = cover.querySelector<HTMLElement>(".cover-border")!;
    front.style.backgroundImage = `url(${asset}cover-composition-v1.png)`;
    front.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 02</span><h2>Gail and the Princess<br><small>Who Forgot to Smile</small></h2>';
    cover.querySelector(".cover-copy")!.append(el("p", "level-note", levelNames[level]));
    try {
      const r = JSON.parse(localStorage.getItem(KEY + "-quiz-" + level) || "null");
      if (r && Number.isInteger(r.score) && r.score >= 0 && r.score <= 16) cover.querySelector(".cover-copy")!.append(el("p", "level-note", `上次挑戰 · ${r.score} / 16`));
    } catch {}
  }
  if (isMoonlight) {
    cover.querySelector(".eyebrow")!.textContent = "GAIL’S MAGICAL STORYBOOK · 03";
    cover.querySelector("h1")!.innerHTML = "Gail and the<br><em>Moonlight Garden</em>";
    cover.querySelector(".cover-copy p")!.textContent = "跟著微光，喚醒沉睡的月光花園。";
    cover.querySelector(".cover-meta")!.textContent = "20 場景 · A / B / C · 5 個 Checkpoint · 10 題挑戰";
    const front = cover.querySelector<HTMLElement>(".cover-border")!;
    front.style.backgroundImage = `url(${asset}scenes-01-04.webp)`;
    front.style.backgroundSize = "200% 200%";
    front.style.backgroundPosition = "100% 100%";
    front.innerHTML = '<span class="dragon-series">GAIL’S MAGICAL STORYBOOK · 03</span><h2>Gail and the<br>Moonlight Garden</h2><span class="moonlight-cover-mark">✦</span>';
    cover.querySelector(".cover-copy")!.append(el("p", "level-note", levelNames[level]));
  }
  cover.querySelector(".cover-copy")!.append(buttons);
  app.append(cover);
}
function setImmersive(on: boolean) {
  immersive = on;
  app.classList.toggle("immersive", on && screen === "story");
  const footer = app.querySelector(".reader-footer");
  const paper = app.querySelector(".story-paper");
  if (footer && paper) (on ? paper : app).append(footer);
  const toggle = app.querySelector<HTMLButtonElement>(".immersive-toggle");
  if (toggle) {
    toggle.textContent = on ? "⤢" : "⛶";
    toggle.setAttribute("aria-label", on ? "離開全景閱讀" : "全景閱讀");
    toggle.setAttribute("aria-pressed", String(on));
  }
}
function render() {
  disposeDream();
  disposeDream = () => {};
  clearVoice();
  cleanupTimers.forEach(clearTimeout);
  cleanupTimers.clear();
  selected = "";
  step = 0;
  app.replaceChildren(toolbar());
  app.classList.toggle("show-hints", hints);
  app.classList.toggle("zoomed", zoom);
  app.dataset.screen = screen;
  app.classList.toggle("immersive", immersive && screen === "story");
  feedback = el("div", "feedback");
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  if (screen === "cover") {
    cover();
    return;
  }
  if (screen === "quiz") {
    const questions = isMoonlight ? moonlightQuestions(level) : isPrincess ? princessQuestions(level) : dragonQuestions(level);
    mountStoryQuiz(app, questions, quizStates[level], {
      level,
      say,
      ending: isMoonlight
        ? {
            title: "The garden is awake!",
            line: "Follow the light. Help a friend. We can do it together.",
            image: asset + "scenes-17-20.webp",
          }
        : isPrincess
          ? {
              title: "A place for a friend",
              line: "Side by side, we laugh and play. A little friendship lights the day.",
              image: asset + "cover-composition-v1.png",
            }
          : undefined,
      back: () => {
        screen = "story";
        render();
      },
      save: (score) => {
        try {
          localStorage.setItem(
            KEY + "-quiz-" + level,
            JSON.stringify({
              score,
              total: questions.length,
              completedAt: Date.now(),
            }),
          );
        } catch {}
      },
    });
    app.append(feedback);
    return;
  }
  if (screen === "complete") {
    complete();
    return;
  }
  save();
  const p = pages[page];
  const book = el("section", "open-book");
  const paper = el("article", "story-paper");
  paper.append(el("div", "eyebrow", `CHAPTER ${String(page + 1).padStart(2, "0")} / ${pages.length}`), el("h1", "", p.title));
  lines = el("div", "story-lines");
  p.lines.forEach((text) => {
    const line = el("p");
    let offset = 0;
    text.split(/(\s+)/).forEach((part) => {
      if (!part.trim()) {
        line.append(document.createTextNode(part));
        offset += part.length;
        return;
      }
      const word = part.replace(/[^a-z]/gi, "").toLowerCase();
      const span = el("button", "word", part);
      span.dataset.start = String(offset);
      span.setAttribute("aria-label", `朗讀 ${word}`);
      if (p.words.some((w) => w.toLowerCase() === word)) span.classList.add("target-word");
      span.onclick = () => {
        discover(word);
        if (objects[word] && p.objects.includes(word)) explore(word);
        else say(word);
      };
      line.append(span);
      offset += part.length;
    });
    lines.append(line);
  });
  if (isDragon && [4, 5].includes(page)) paper.append(el("span", "memory-label", "Pip remembers…"));
  paper.append(lines);
  if (p.translation) paper.append(el("p", "story-translation", p.translation));
  paper.append(el("div", "paper-note", "點英文聽發音 · 點場景找單字"));
  const words = el("div", "word-chips");
  p.words.forEach((w) =>
    words.append(
      btn(
        w,
        `學習 ${w}`,
        () => {
          discover(w);
          say(w);
          glow(w);
        },
        "word-chip",
      ),
    ),
  );
  paper.append(
    words,
    btn("⛶", "全景閱讀", () => setImmersive(!immersive), "immersive-toggle"),
    el("div", "paper-number", String(page * 2 + 1)),
  );
  scene = el("section", "scene");
  scene.setAttribute("aria-label", scenes[p.scene].name + "互動場景");
  world = el("div", "scene-world");
  const bg = el("img", "scene-bg");
  bg.src = asset + (scenes[p.scene].sheet || p.scene + ".png");
  bg.alt = scenes[p.scene].alt;
  if (illustrated && scenes[p.scene].sheet) {
    const cell = scenes[p.scene].cell || 0;
    const frame = el("div", "scene-atlas");
    bg.style.width = "200%";
    bg.style.height = "200%";
    bg.style.maxWidth = "none";
    bg.style.position = "absolute";
    bg.style.left = -(cell % 2) * 100 + "%";
    bg.style.top = -Math.floor(cell / 2) * 100 + "%";
    frame.append(bg);
    world.append(frame);
  } else world.append(bg);
  for (const id of p.objects) world.append(makeObject(currentObject(id)));
  if (progress.words.includes("star")) world.querySelector("[data-object=star]")?.classList.add("found-star");
  if (isCake && ["kitchen", "party"].includes(p.scene)) {
    world.classList.add("baking-table");
    const front = world.querySelector(".scene-atlas")!.cloneNode(true) as HTMLElement;
    front.classList.add("table-front");
    front.setAttribute("aria-hidden", "true");
    world.append(front);
  }
  if (isPrincess && page === 6) {
    const bubbles = el("div", "princess-bubbles");
    bubbles.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 7; i++) {
      const b = el("i");
      b.style.left = 20 + i * 9 + "%";
      b.style.top = 13 + (i % 3) * 10 + "%";
      b.style.animationDelay = i * 0.25 + "s";
      bubbles.append(b);
    }
    world.append(bubbles);
  }
  if (isMoonlight && dreamMotion && scenes[p.scene].sheet) {
    try {
      world.classList.add("is-dream-3d");
      disposeDream = mountMoonlight3D(world, asset + scenes[p.scene].sheet, scenes[p.scene].cell || 0);
    } catch {
      world.classList.remove("is-dream-3d");
    }
  }
  scene.append(world, el("div", "scene-caption", scenes[p.scene].caption));
  book.append(paper, scene);
  app.append(book);
  const footer = el("footer", "reader-footer");
  const prev = btn("←", "上一頁", () => turn(-1), "round page-arrow");
  prev.disabled = page === 0;
  readButton = btn("", "開始英文朗讀", () => read(immersive), "wood-button read-main");
  syncRead();
  const modeBar = el("div", "mode-switch");
  modeBar.append(
    btn(
      "Read to me",
      "系統朗讀模式",
      () => {
        mode = "listen";
        clearVoice();
        render();
      },
      mode === "listen" ? "selected" : "",
    ),
    btn(
      "I’ll read",
      "自己讀模式",
      () => {
        mode = "self";
        clearVoice();
        render();
        feedback.textContent = "自己讀讀看，讀完按 Done 聽示範。";
      },
      mode === "self" ? "selected" : "",
    ),
  );
  const center = el("div", "read-controls");
  center.append(readButton, modeBar);
  footer.append(
    prev,
    center,
    btn(page === pages.length - 1 ? "✓" : "→", page === pages.length - 1 ? (graded ? "開始書末測驗" : "故事完成") : "下一頁", () => turn(1), "round page-arrow"),
  );
  app.append(footer);
  mission = el("aside", "mission");
  mission.setAttribute("aria-label", "故事任務");
  if (progress.stars.includes(page)) {
    mission.classList.add("solved");
    mission.append(el("span", "mission-star", "★"), el("div", "", "Lovely! 任務完成"));
  } else {
    const copy = el("div");
    copy.append(el("small", "", p.checkpoint ? "STORY CHECKPOINT" : "YOUR LITTLE MISSION"), el("p", "", p.mission.prompt));
    if (p.checkpoint) mission.classList.add("checkpoint");
    mission.append(
      btn(
        "✦",
        "聽任務提示",
        () => {
          say(p.mission.prompt);
          feedback.textContent = p.mission.hint;
        },
        "mission-star",
      ),
      copy,
    );
  }
  app.append(mission, feedback);
  setImmersive(immersive);
  requestAnimationFrame(() => app.querySelector(".progress-star.active")?.scrollIntoView({ block: "nearest", inline: "nearest" }));
  feedback.textContent = mode === "self" ? "自己讀讀看，讀完按 Done 聽示範。" : "點 Read to me 聽故事，也可以自由探索。";
}
function turn(delta: number) {
  if (delta > 0 && page === pages.length - 1) {
    screen = graded ? "quiz" : "complete";
    render();
    return;
  }
  page = Math.max(0, Math.min(pages.length - 1, page + delta));
  render();
}
function complete() {
  const card = el("section", "completion");
  card.append(el("div", "completion-stars", "✦ ★ ✦"), el("span", "eyebrow", "THE END · A NEW BEGINNING"), el("h1", "", isCake ? "Made with love. Shared with joy." : isRed ? "A happy lunch. A better ending." : "Good night, little star."), el("p", "", `你和Gail一起走完了故事！完成 ${progress.stars.length} / ${pages.length} 個任務。`));
  const discovered = el("div", "discovered");
  progress.words.forEach((w) => discovered.append(btn(w, `重聽 ${w}`, () => say(w), "word-chip")));
  card.append(el("h2", "", "Words you discovered"), discovered);
  const actions = el("div", "completion-actions");
  actions.append(
    btn("再讀一次", "再讀一次", () => {
      page = 0;
      screen = "story";
      render();
    }),
    btn("找回未完成的星星", "繼續未完成任務", () => {
      page = pages.findIndex((_, i) => !progress.stars.includes(i));
      if (page < 0) page = 0;
      screen = "story";
      render();
    }),
  );
  const back = el("a", "text-button", "回故事星球");
  back.href = "story-planet.html";
  actions.append(back);
  if (isRed) {
    const nextBook = el("a", "wood-button", "下一本：Gail’s Birthday Cake");
    nextBook.href = "birthday-storybook.html";
    actions.append(nextBook);
  }
  if (isPrincess) {
    const nextBook = el("a", "wood-button", "下一本：Moonlight Garden");
    nextBook.href = "moonlight-garden-storybook.html";
    actions.append(nextBook);
  }
  if (!illustrated) {
    const nextBook = el("a", "wood-button", "下一本：Gail and the Big Bad Wolf");
    nextBook.href = "red-hood-storybook.html";
    actions.append(nextBook);
  }
  card.append(actions);
  app.append(card, feedback);
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (immersive) setImmersive(false);
    app.querySelector(".settings")?.remove();
    zoom = false;
    app.classList.remove("zoomed");
  }
  if (screen !== "story" || app.querySelector(".settings")) return;
  if (e.key === "ArrowRight") {
    e.preventDefault();
    turn(1);
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault();
    turn(-1);
  }
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) clearVoice();
});
window.addEventListener("pagehide", clearVoice);
render();
