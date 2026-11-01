// Fit the actual grade's constellation inside the controls and label margins.
export function constellationFrame(topics, width, height, zoom = 1) {
  const stretch = width / height < .8 ? 1.65 : 1;
  const xs = topics.map(n => n.position[0]), ys = topics.map(n => n.position[1] * stretch);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const viewHeight = Math.max(70, (maxX-minX)*height/Math.max(100,width-84), (maxY-minY)*height/Math.max(100,height-170)) / zoom;
  return { stretch, viewHeight, centerX:(minX+maxX)/2, centerY:(minY+maxY)/2-15*viewHeight/height };
}
