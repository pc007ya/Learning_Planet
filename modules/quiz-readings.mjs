import { readingTokens } from './math-foundations/zhuyin.mjs?quiz-readings-v1';

// Load the existing audited, unambiguous character readings only on first use.
// The public copy is byte-identical to src/chinese-practice/sounds-single.json;
// site staging excludes src/, so the runtime must use the modules/ path.
let singleReadings;
let pending;
export function load() {
  if (singleReadings) return Promise.resolve();
  if (!pending) pending = fetch(new URL('./quiz-readings/sounds-single.json', import.meta.url))
    .then(response => { if (!response.ok) throw new Error('Readings unavailable'); return response.json(); })
    .then(data => { singleReadings = data; })
    .finally(() => { pending = null; });
  return pending;
}

export function tokens(text) {
  // Exact reviewed phrases resolve polyphones; other characters need an
  // unambiguous audited reading. Missing/context-dependent readings stay blank.
  return readingTokens(String(text), { singleReadings: singleReadings || {} });
}

function renderText(text, React) {
  return tokens(text).map(({ char, reading }, index) => {
    if (!reading) return char;
    const tone = reading.match(/[ˊˇˋ˙]/)?.[0] || '';
    return React.createElement('ruby', { key: index, className: 'quiz-reading', 'aria-label': char },
      char,
      React.createElement('rt', { 'aria-hidden': true },
        React.createElement('span', { className: 'quiz-reading-sounds' },
          Array.from(reading.replace(/[ˊˇˋ˙]/g, '')).map((sound, i) => React.createElement('span', { key: i }, sound))),
        tone ? React.createElement('span', { className: 'quiz-reading-tone' + (tone === '˙' ? ' neutral' : '') }, tone) : null));
  });
}

export function render(content, React) {
  if (typeof content === 'string') return renderText(content, React);
  if (Array.isArray(content)) return content.map(item => render(item, React));
  if (!React.isValidElement(content) || ['svg', 'ruby', 'canvas', 'img'].includes(content.type)) return content;
  if (content.props.children === undefined) return content;
  return React.cloneElement(content, {}, render(content.props.children, React));
}
