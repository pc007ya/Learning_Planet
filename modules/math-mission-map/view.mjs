export const usesV11Planet = grade => [1,2,3].includes(grade);
const STATIONS_PER_ROUTE = 8;
const GRADE_NAMES = ["", "一年級", "二年級", "三年級", "四年級", "五年級", "六年級"];
const STATION_LAYOUT = [
  [.15, .64], [.37, .72], [.61, .73], [.84, .62],
  [.83, .31], [.61, .23], [.38, .24], [.16, .34],
];

function stationLayout(count) {
  if (count === 1) return [[.5, .47]];
  if (count === 2) return [[.29, .58], [.71, .39]];
  return Array.from({ length: count }, (_, i) =>
    STATION_LAYOUT[Math.round(i * (STATION_LAYOUT.length - 1) / (count - 1))]);
}

export function createMissionMapView(React) {
  const h = React.createElement;

  function UnitArt({ unit }) {
    return unit.art
      ? h("img", { src: unit.art, alt: "", draggable: false })
      : h("span", { "aria-hidden": true }, unit.icon || "✦");
  }

  function MissionDetails({ unit, move, index, count }) {
    const complete = unit.showProgress && unit.atLimit;
    const level = "★".repeat(unit.difficulty) + "☆".repeat(3 - unit.difficulty);
    return h("aside", { className: "math-mission-detail", "aria-label": "所選子單元" },
      h("div", { className: "math-mission-cover", style: { "--mission-tint": unit.tint || "#dcd6ff" } },
        h("span", { className: "math-mission-orbit", "aria-hidden": true }),
        h("span", { className: "math-mission-code" }, unit.displayCode),
        h(UnitArt, { unit })),
      h("div", { className: "math-mission-info", "aria-live": "polite" },
        h("h3", null, unit.title),
        h("p", null, unit.sub),
        unit.showProgress && h("div", { className: "math-mission-status" },
          h("span", { className: "math-mission-difficulty", "aria-label": "難度 " + unit.difficulty + " 星" }, level),
          h("span", null, unit.stateLabel)),
        unit.showProgress && h("div", {
          className: "math-mission-progress", role: "progressbar", "aria-label": "今日完成輪數",
          "aria-valuemin": 0, "aria-valuemax": 3, "aria-valuenow": unit.round,
        }, h("span", { style: { width: unit.pct + "%" } }))),
      h("div", { className: "math-mission-actions" },
        unit.showStart && h("button", {
          type: "button", className: "math-mission-primary", onClick: unit.start, disabled: complete,
        }, unit.btnLabel),
        unit.teachingLinks.map(({ lesson, max, label }, i) => h("button", {
          key: lesson, type: "button", className: !unit.showStart && !i ? "math-mission-primary" : undefined,
          "data-math-teaching-open": lesson, "data-math-teaching-max": max,
        }, label)),
        unit.hasVideo && h("button", { type: "button", onClick: unit.watchVideo }, "看教學影片"),
        unit.hasLesson && h("button", { type: "button", onClick: unit.lesson }, "老師示範")),
      h("div", { className: "math-mission-step" },
        h("button", { type: "button", onClick: () => move(-1), disabled: index === 0 }, "← 前一站"),
        h("button", { type: "button", onClick: () => move(1), disabled: index === count - 1 }, "下一站 →")));
  }

  function MissionMapView({ grade, units, initialUnit, onSelect }) {
    const [selectedId, setSelected] = React.useState(initialUnit);
    const [projected, setProjected] = React.useState(null);
    const stage = React.useRef(null);
    const scene = React.useRef(null);
    const selectedIndex = Math.max(0, units.findIndex(unit => unit.id === selectedId));
    const selected = units[selectedIndex];
    const route = Math.floor(selectedIndex / STATIONS_PER_ROUTE);
    const first = route * STATIONS_PER_ROUTE;
    const visible = units.slice(first, first + STATIONS_PER_ROUTE);
    const count = visible.length;
    const selectedOnRoute = selectedIndex - first;
    const points = React.useMemo(() => stationLayout(count), [count]);
    const selection = React.useRef(selectedOnRoute);
    selection.current = selectedOnRoute;
    const key = route + ":" + count;
    const is3D = projected?.key === key;
    const anchors = is3D ? projected.anchors : points;

    React.useEffect(() => {
      if (!count) return;
      let active = true;
      const element = stage.current;
      import("./scene.mjs?v=20261107").then(({ createMissionScene }) => {
        if (!active) return;
        scene.current = createMissionScene(element, points, {
          route,
          selected: selection.current,
          onProject: (anchors) => { if (active) setProjected({ key, anchors }); },
          onUnavailable: () => { if (active) setProjected(null); },
        });
      }).catch(() => { if (active) setProjected(null); });
      return () => {
        active = false;
        scene.current?.dispose();
        scene.current = null;
      };
    }, [key, count, points, route]);

    React.useEffect(() => { scene.current?.select(selectedOnRoute); }, [selectedOnRoute, key]);

    function choose(index) {
      const unit = units[index];
      if (!unit) return;
      if (Math.floor(index / STATIONS_PER_ROUTE) !== route) setProjected(null);
      setSelected(unit.id);
      onSelect(unit.id);
    }

    if (!selected) return h("p", { className: "math-mission-loading" }, "這個年級目前沒有子單元。");

    const routes = Array.from({ length: Math.ceil(units.length / STATIONS_PER_ROUTE) }, (_, i) => {
      const start = i * STATIONS_PER_ROUTE;
      const end = Math.min(start + STATIONS_PER_ROUTE, units.length) - 1;
      const range = start === end ? units[start].displayCode : units[start].displayCode + "–" + units[end].displayCode;
      return h("button", {
        type: "button", key: start, "aria-pressed": i === route, onClick: () => { if (i !== route) choose(start); },
      }, h("b", null, "航線 " + (i + 1)), h("small", null, range));
    });

    const track = points.map(([x, y]) => [x * 1000, y * 1000]);
    return h("section", { className: "math-mission-map", "aria-label": "數學子單元探索地圖" },
      h("div", { className: "math-mission-heading" },
        h("div", null,
          h("p", null, "數學星球 · " + GRADE_NAMES[grade]),
          h("h2", null, "任務群島")),
        h("span", { className: "math-mission-count" }, units.length + " 個子單元")),
      h("div", { className: "math-mission-routes", role: "group", "aria-label": "選擇子單元航線" }, routes),
      h("div", { className: "math-mission-layout" },
        h("div", { className: "math-mission-chart" },
          h("div", { className: "math-mission-stage", ref: stage, "data-renderer": is3D ? "webgl" : "flat" },
            h("div", { className: "math-mission-sky", "aria-hidden": true }),
            h("div", { className: "math-mission-surface", "aria-hidden": true }),
            !is3D && h("svg", {
              className: "math-mission-flat", viewBox: "0 0 1000 1000", preserveAspectRatio: "none", "aria-hidden": true,
            },
            h("polyline", { points: track.map(pair => pair.join(",")).join(" "), className: "math-mission-trail" }),
            track.map(([x, y], i) => h("g", { key: i, transform: "translate(" + x + " " + y + ")" },
              h("path", { d: "M-86 17 -53 80 7 114 57 77 86 17Z", className: "math-mission-rock" }),
              h("ellipse", { cy: 16, rx: 88, ry: 44, className: "math-mission-isle" })))),
            h("div", { className: "math-mission-pins", role: "group", "aria-label": "本航線子單元" },
              visible.map((unit, i) => {
                const [x, y] = anchors[i];
                const active = i === selectedOnRoute;
                const label = [unit.displayCode, unit.title, unit.showProgress ? unit.stateLabel : ""].filter(Boolean).join("，");
                return h("button", {
                  type: "button", className: "math-mission-pin", key: unit.id,
                  "aria-label": label, "aria-pressed": active, "data-progress": unit.round > 0,
                  style: { left: x * 100 + "%", top: y * 100 + "%", "--mission-tint": unit.tint || "#dcd6ff" },
                  onClick: () => choose(first + i),
                },
                h("span", { className: "math-mission-pin-art" }, h(UnitArt, { unit })),
                h("span", { className: "math-mission-pin-code", "aria-hidden": true }, unit.displayCode),
                h("span", { className: "math-mission-pin-title", "aria-hidden": true }, unit.title));
              }))),
          h("div", { className: "math-mission-chart-footer" },
            h("span", null, is3D ? "拖曳轉動 · 點站點選任務" : "點站點選任務 · 平面地圖"),
            is3D && h("div", { className: "math-mission-orbit-controls", role: "group", "aria-label": "調整地圖視角" },
              h("button", { type: "button", "aria-label": "向左轉動地圖", onClick: () => scene.current?.rotate(-.22) }, "↶"),
              h("button", { type: "button", onClick: () => scene.current?.reset() }, "全景"),
              h("button", { type: "button", "aria-label": "向右轉動地圖", onClick: () => scene.current?.rotate(.22) }, "↷")))),
        h(MissionDetails, { unit: selected, move: (delta) => choose(selectedIndex + delta), index: selectedIndex, count: units.length })));
  }
  // art-v2 remains a review URL alias, using the same transferred v11 assets.
  // Grades four through six retain their existing mission map.

  function GradeOneMap(props) {
    const [View, setView] = React.useState(null);
    const [failed, setFailed] = React.useState(false);
    const [attempt, setAttempt] = React.useState(0);
    React.useEffect(() => {
      let active = true;
      setFailed(false);
      const path = './v11-host/view.mjs?v=20261110-v11-release1';
      import(path + (attempt ? '&retry=' + attempt : '')).then(module => {
        if (active) setView(() => module.createV11PlanetView(React));
      }).catch(() => { if (active) setFailed(true); });
      return () => { active = false; };
    }, [attempt]);
    if (View) return h(View, {...props,key:props.grade});
    return h('p', {className:'math-mission-loading',role:'status'},
      failed ? '探索地圖載入失敗。' : '正在準備'+GRADE_NAMES[props.grade]+'星球…',
      failed && h('button', {type:'button',onClick:()=>setAttempt(value=>value+1)}, '重試'),
      failed && h('button', {type:'button',onClick:props.onClassic}, '切回傳統'));
  }
  return props => h(usesV11Planet(props.grade) ? GradeOneMap : MissionMapView, props);
}
