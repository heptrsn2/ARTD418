function setup() {
  createCanvas(windowWidth, windowHeight);
}

let pos = 25;

function draw() {
  background(239, 62, 75);
  fill(198, 24, 20);
  stroke(198, 24, 20);
  ellipse(200, 200, pos, pos);
  ellipse(600, 600, pos, pos);
  ellipse(800, 200, pos, pos);
  ellipse(1000, 700, pos, pos);
  ellipse(1300, 400, pos, pos);
  scale(pos);
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false;
}
