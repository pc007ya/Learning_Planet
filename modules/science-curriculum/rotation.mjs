/** A persisted finite question deck. A new cycle begins only after exhaustion. */
const uniqueStrings = list => Array.isArray(list) && list.every(x => typeof x === 'string' && x.length > 0) && new Set(list).size === list.length;
export function validQuestionPool(pool) {
  if (!pool || typeof pool !== 'object' || Array.isArray(pool) || pool.schemaVersion !== 1 || !Number.isSafeInteger(pool.cycle) || pool.cycle < 1 || !uniqueStrings(pool.bankIds) || !uniqueStrings(pool.remainingIds) || !uniqueStrings(pool.usedIds)) return false;
  const bank = new Set(pool.bankIds), union = [...pool.remainingIds, ...pool.usedIds];
  return new Set(union).size === union.length && union.length === bank.size && union.every(id => bank.has(id));
}
function shuffled(ids, rng) {
  const result = [...ids];
  for (let i = result.length - 1; i > 0; i--) {
    const n = rng();
    if (!Number.isFinite(n) || n < 0 || n >= 1) throw new RangeError('rng must return a number in [0,1)');
    const j = Math.floor(n * (i + 1)); [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function reconcileQuestionPool(bankIds, previous = null, { legacySeen = [], rng = Math.random } = {}) {
  if (!uniqueStrings(bankIds) || !bankIds.length) throw new RangeError('Question bank IDs must be nonempty and unique');
  if (previous != null && !validQuestionPool(previous)) throw new TypeError('Invalid saved question pool; preserve original record');
  const bank = new Set(bankIds);
  if (!previous) {
    const used = new Set(legacySeen.filter(id => bank.has(id)));
    return { schemaVersion: 1, cycle: 1, bankIds: [...bankIds], remainingIds: shuffled(bankIds.filter(id => !used.has(id)), rng), usedIds: [...used] };
  }
  const old = new Set(previous.bankIds);
  return { schemaVersion: 1, cycle: previous.cycle, bankIds: [...bankIds],
    remainingIds: [...previous.remainingIds.filter(id => bank.has(id)), ...shuffled(bankIds.filter(id => !old.has(id)), rng)],
    usedIds: previous.usedIds.filter(id => bank.has(id)) };
}
export function drawQuestionIds(bankIds, previous = null, { count = 10, legacySeen = [], activityById = {}, rng = Math.random } = {}) {
  if (!Number.isInteger(count) || count < 1 || count > bankIds.length) throw new RangeError('A round needs enough unique questions');
  const pool = reconcileQuestionPool(bankIds, previous, { legacySeen, rng });
  const startCycle = pool.cycle, selected = [], cycles = [];
  while (selected.length < count) {
    if (!pool.remainingIds.length) {
      if (pool.cycle === Number.MAX_SAFE_INTEGER) throw new RangeError('Question cycle counter overflow');
      pool.cycle++; pool.usedIds = []; pool.remainingIds = shuffled(bankIds, rng);
    }
    // If a round crosses the boundary, keep its previous-cycle questions in the
    // new deck for later rounds, but never draw them twice in this same round.
    const excluded = new Set(selected), candidates = pool.remainingIds.filter(id => !excluded.has(id));
    const take = [], activities = new Set();
    for (const id of candidates) if (take.length < count - selected.length && !activities.has(activityById[id])) { take.push(id); activities.add(activityById[id]); }
    const chosen = new Set(take);
    for (const id of candidates) if (take.length < count - selected.length && !chosen.has(id)) { take.push(id); chosen.add(id); }
    if (!take.length) throw new Error('Question pool cannot form a unique round');
    for (const id of take) { selected.push(id); cycles.push(pool.cycle); pool.usedIds.push(id); }
    pool.remainingIds = pool.remainingIds.filter(id => !chosen.has(id));
  }
  if (!validQuestionPool(pool)) throw new Error('Question pool invariant failed');
  return { ids: selected, pool, questionCycles: cycles, startCycle, endCycle: pool.cycle, reset: pool.cycle !== startCycle };
}
