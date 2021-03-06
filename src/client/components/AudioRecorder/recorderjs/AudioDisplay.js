export function drawBuffer( width, height, context, data ) {
  const step = Math.ceil( data.length / width );
  const amp = height / 2;
  context.fillStyle = "silver";
  context.clearRect(0,0,width,height);
  for(let i=0; i < width; i++){
    let min = 1.0;
    let max = -1.0;
    for (let j=0; j<step; j++) {
      const datum = data[(i*step)+j];
      if (datum < min)
        min = datum;
      if (datum > max)
        max = datum;
    }
    context.fillRect(i,(1+min)*amp,1,Math.max(1,(max-min)*amp));
  }
}