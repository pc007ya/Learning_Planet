export function neighbors(id, edges) {
  return new Set([id, ...edges.filter(e => e.from === id || e.to === id).flatMap(e => [e.from, e.to])]);
}
export function practiceStatus(topic, records = {}) {
  const practiced = topic.units.filter(id => records[id]?.practiced);
  return { practiced: practiced.length > 0, count: practiced.length, total: topic.units.length };
}
