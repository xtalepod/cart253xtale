



"use strict";
// A ball object with the properties of
// position, size, velocity, and speed
let ball = {
  x: 2,
  y: 20,
  size: 20,
  vx: 10,
  vy: 10,
  speed: 5,
  maxSpeed: 20,
  tx: 0,
  ty: 0
}

function setup() {
  createCanvas(500,500);
  ball.tx = random(0,1000);
  ball.ty = random(0,1000);
  ball.x = width/2;
  ball.y = height/2;
  ball.vx = ball.speed;
  ball.vy = -ball.speed;
}

// Sets the position of the ball based on its velocity
// function updateBall() {
//   // Update the ball's position based on velocity
//   ball.x += ball.vx;
//   ball.y += ball.vy;
// }


function displayBall() {
  // Draw the ball
  rect(ball.x, ball.y, ball.size, ball.size);
}

function draw() {
  background(255);
  displayBall();
  //
  ball.vx = map(random(ball.tx),0,1,-ball.maxSpeed,ball.maxSpeed);
  ball.vy = map(random(ball.ty),0,1,-ball.maxSpeed,ball.maxSpeed);
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.x < 0) {
    ball.x += width;
  }
  else if (ball.x > width) {
    ball.x -= width;
  }
  if (ball.y < 0) {
    ball.y += height;
  }
  else if (ball.y > height) {
    ball.y -= height;
  }
  ball.tx += 0.01;
  ball.ty += 0.01;
  // ball(ball.x,ball.y,10,10);
}
// //
//
// //
// // }
// // function draw(){
// //   background(255,0,0);
// //
// //   console.log(ball.x);
// //   if(ball.x>width/2){
// //     fill(0);
// //    rect(width-50,height/2,40,40);
// //   }
// //   else{
// //   fill(255);
// //   ellipse(width/4,height/2,40,40);
// //  }
// //
// // }
