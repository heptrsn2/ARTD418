let pos = 25;

function draw() {
  background(237, 34, 93);
  fill(0);
  rect(25, pos, 50, 50);
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  pos += event.delta;
  //uncomment to block page scrolling
  //return false;
}
