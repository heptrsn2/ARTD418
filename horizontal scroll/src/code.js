var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750,
  direction: 'alternate',
  loop: true
});


tl
.add({
  targets: '.circle1',
  keyframes: [
    {translateY: 400},
    {translateX: 250, scale: 2},
    {translateY: 600, scale: 1},
    {translateX: 600, translateY: 100, scale: 2},
    {translateY: 400, scale: 1},
    {translateX: 1000, translateY: 300, scale: 3},
    {translateY: 1000, translateY: 800, scale: 1}
  ],
  duration: 3000,
  easing: 'linear',
  direction: 'alternate',
})
.add({
  targets: '.circle2',
  keyframes: [
    {translateY: 400},
    {translateX: 250, scale: 2},
    {translateY: 600, scale: 1},
    {translateX: 600, translateY: 100, scale: 2},
    {translateY: 400, scale: 1},
    {translateX: 1000, translateY: 300, scale: 3},
    {translateY: 1000, translateY: 800, scale: 1}
  ],
  duration: 3000,
  easing: 'linear',
}, 600);

$(function() {
  $love = $('.circle');
  for( var i = 0; i < 4; i++) {
    $('.wrapper').append($love.clone());
  }
});

let numBalls = 30;
let spring = 0.2;
let gravity = 0;
let friction = -0.9;
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(239, 62, 75);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(50, 200),
      i,
      balls
    );
  }
  fill(198, 24, 20);
  noStroke();
}

function draw() {
  background(239, 62, 75);
  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });
}


class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(239, 62, 75);

}

let pos = 25;

function draw() {
  noFill();
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
