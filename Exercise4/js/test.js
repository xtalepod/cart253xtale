//is this working properly

"use strict";

// A ball object with the properties of
// position, size, velocity, and speed
let ball = {
  x: 0,
  y: 0,
  size: 20,
  vx: 0,
  vy: 0,
  maxSpeed:20,
  tx: 0,
  ty: 0
}

function setup() {
  createCanvas(500,500);
  ball.tx = random(0,1000);
  ball.ty = random(0,1000);
  ball.x = width/2;
  ball.y = height/2;
}

// Sets the position of the ball based on its velocity
function updateBall() {
  // Update the ball's position based on velocity
  ball.x += ball.vx;
  ball.y += ball.vy;
}

function draw() {
  background(255);
  vx = map(noise(tx),0,1,-maxSpeed,maxSpeed);
  vy = map(noise(ty),0,1,-maxSpeed,maxSpeed);
  x += vx;
  y += vy;
  if (x < 0) {
    x += width;
  }
  else if (x > width) {
    x -= width;
  }
  if (y < 0) {
    y += height;
  }
  else if (y > height) {
    y -= height;
  }
  tx += 0.01;
  ty += 0.01;
  ellipse(x,y,10,10);
}


//
// }
// function draw(){
//   background(255,0,0);
//
//   console.log(mouseX);
//   if(mouseX>width/2){
//     fill(0);
//    rect(width-50,height/2,40,40);
//   }
//   else{
//   fill(255);
//   ellipse(width/4,height/2,40,40);
//  }
//
// }
