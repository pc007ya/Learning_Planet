(function (root) {
  'use strict';
  const units = [];
  const generators = new Map();
  const ink = '#233750';
  const colors = ['#70cbb8', '#bca1e9', '#efbb69', '#7cb5ec'];
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  const label = (x, y, value, size = 24) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" fill="${ink}">${escape(value)}</text>`;
  const line = (x, y, a, b, color = ink, width = 3) => `<path d="M${x} ${y}L${a} ${b}" fill="none" stroke="${color}" stroke-width="${width}"/>`;
  const rect = (x, y, w, h, fill = '#fffaf0', radius = 4) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="#577486" stroke-width="1.5"/>`;
  const polygon = (points, fill = colors[0]) => `<polygon points="${points}" fill="${fill}" stroke="${ink}" stroke-width="2"/>`;
  const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
  const fraction = (n, d) => {
    const k = gcd(n, d);
    return d / k === 1 ? n / k : `${n / k}/${d / k}`;
  };
  const fixed = (n, places = 2) => Number((n / 10 ** places).toFixed(places));
  const roundRatio = (n, d, places) => fixed(Math.floor((2*n*10**places+d)/(2*d)), places);
  const sum = values => values.reduce((total, n) => total + n, 0);
  function cards(values) {
    const width = 570 / values.length;
    return values.map(([name, value], i) => {
      const x = 45 + width * i;
      return rect(x, 93, width - 8, 144, '#fffaf0', 12)
        + label(x + (width - 8) / 2, 138, name, 18)
        + label(x + (width - 8) / 2, 196, value, String(value).length > 12 ? 18 : 27);
    }).join('');
  }
  function gridTable(rows, x = 56, y = 55, width = 548, height = 220) {
    const w = width / rows[0].length;
    const h = height / rows.length;
    return rows.map((row, r) => row.map((value, c) => rect(x + c*w, y + r*h, w, h, r === 0 || c === 0 ? '#d8ebe9' : '#fffaf0', 0)
      + label(x + (c+.5)*w, y + (r+.61)*h, value, row.length > 7 ? 17 : 21)).join('')).join('');
  }
  function strip(n, d, x = 58, y = 85, w = 544, h = 40, color = colors[0]) {
    return Array.from({length:d}, (_, i) => rect(x + i*w/d, y, w/d, h, i < n ? color : '#fffaf0', 0)).join('');
  }
  function numberLine(parts, marked, labels = []) {
    const start = 70, width = 520;
    let svg = line(start,155,start+width,155) + label(start-12,205,0,20) + label(start+width,205,1,20);
    for (let i = 0; i <= parts; i++) {
      const x = start + i*width/parts;
      svg += line(x,143,x,167);
      if (labels[i]) svg += label(x, 240, labels[i], 18);
    }
    const x = start + marked*width/parts;
    return svg + `<circle cx="${x}" cy="155" r="9" fill="#a465d0"/>` + label(x,120,'▲',22);
  }
  function sector(cx, cy, radius, angle, start = -90, fill = colors[0]) {
    if (angle === 360) return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="${fill}" stroke="${ink}" stroke-width="2"/>`;
    const point = degrees => [cx + radius*Math.cos(degrees*Math.PI/180), cy + radius*Math.sin(degrees*Math.PI/180)].join(' ');
    return `<path d="M${cx} ${cy}L${point(start)}A${radius} ${radius} 0 ${angle>180?1:0} 1 ${point(start+angle)}Z" fill="${fill}" stroke="${ink}" stroke-width="2"/>`;
  }
  function plot(values, names, tick, mode = 'line', hide = -1) {
    const top = Math.ceil(Math.max(...values)/tick)*tick + tick;
    const y = n => 242 - 190*n/top;
    const x = i => 105 + i*450/(values.length-1);
    let svg = line(70,42,70,242) + line(70,242,590,242);
    for (let n=0; n<=top; n+=tick) svg += line(70,y(n),590,y(n),'#b8c9c6',1) + label(46,y(n)+5,n,15);
    for (let i=0; i<values.length; i++) {
      svg += label(x(i),275,names[i],17);
      if (i===hide) continue;
      if (mode==='bar') svg += rect(x(i)-24,y(values[i]),48,242-y(values[i]),colors[i%4],0);
      else {
        if (i && i-1!==hide) svg += line(x(i-1),y(values[i-1]),x(i),y(values[i]),'#7561ad',4);
        svg += `<circle cx="${x(i)}" cy="${y(values[i])}" r="6" fill="#7561ad"/>`;
      }
    }
    return svg;
  }
  function shuffle(items, rng) {
    const result = [...items];
    for (let i = result.length-1; i > 0; i--) {
      const j = Math.floor(rng()*(i+1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  function options(answer, wrong = []) {
    const values = [answer, ...wrong];
    if (typeof answer === 'number') values.push(answer+1, answer+2, answer+5);
    return [...new Map(values.map(value => [String(value), value])).values()].slice(0,4);
  }
  function step(prompt, answer, wrong, explain) {
    return { prompt, answer, choices: options(answer, wrong), explain };
  }
  function exercise(stem, answer, wrong, steps, art, solution) {
    const final = step(stem, answer, wrong, solution);
    return { stem, ans: answer, opts: final.choices, stages: [...steps, final], art };
  }
  function define(id, grade, title, make) {
    const unit = {id:`u${id}`, grade, title, kind:'upper'};
    units.push(unit);
    generators.set(unit.id, make);
  }
  function question(id, index, rng) {
    const random = (min,max) => min + Math.floor(rng()*(max-min+1));
    const unit = units.find(u => u.id === id);
    const q = generators.get(id)(random, index);
    q.opts = shuffle(q.opts, rng);
    q.stages.forEach(stage => { stage.choices = shuffle(stage.choices, rng); });
    return {...q, unitId:id, title:unit.title, kind:'upper', steps:q.stages.length,
      hint:q.stages[0].explain, explain:q.stages.map(s=>s.explain).join(' ')};
  }
  function picture(q, shown) {
    const previous = shown > 0 ? q.stages[Math.min(shown, q.steps)-1] : null;
    const art = Array.isArray(q.art) ? q.art[Math.min(shown,q.art.length-1)] : q.art;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 380" role="img" aria-label="${escape(q.stem)}"><rect width="660" height="380" rx="16" fill="#f5edda"/>${art}${previous ? rect(55,304,550,53,'#e3f1e9',12)+label(330,338,previous.answer,25) : ''}</svg>`;
  }
  root.MathUpper = {units, define, question, picture, step, exercise, cards, gridTable, strip, numberLine, sector, plot, label, line, rect, polygon, colors, gcd, fraction, fixed, roundRatio, sum};
})(globalThis);
