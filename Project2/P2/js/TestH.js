"use strict";
// // hedgohog
// //
// // A class that represents a simple fox
// // controlled by the arrow keys. It can move around
// // the screen and consume boxes objects to maintain its health.
//
class TestH {

  // constructor
  //
  // Sets the initial values for the fox's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, w, h,fillColor, speed, upKey, downKey, rightKey, leftKey) {
    // Position
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fillColor = fillColor;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    // Display properties
    // Input properties
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
  }

  // handleInput
  //
  // Checks if an arrow key is pressed and sets the fox's
  // velocity appropriately.
  handleInput() {
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }
    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    }
    else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    }
    else {
      this.vy = 0;
    }
  }

  // move
  //
  // Updates the position according to velocity
  // Lowers health (as a cost of living)
  // Handles wrapping
  move() {
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // Checks if the fox has gone off the canvas and
  // wraps it to the other side if so
  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
    }
    else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }

//check for hedgehog and box collision

checkBoxCollision() {
  let boxTop = boxes.y - boxes.size / 2
  let boxBottom = boxes.y + boxes.size / 2
  let boxLeft = boxes.x - boxes.size / 2
  let boxRight = boxes.x - boxes.size / 2

  let hedgehogTop = this.y - this.h /2
  let hedgehogBottom = this.y + this.h / 2
  let hedgehogLeft = this.x + this.w / 2
  let hedgehogRight = this.x - this.w / 2

// First check the ball is in the vertical range of the paddle
  if (hedgehogTop > boxBottom && hedgehogBottom < boxTop) {
    console.log("collision");
    // Then check if it is touching the paddle horizontally
    // if (hedgehogLeft < boxRight && hedgehogRight > boxLeft) {
    //   this.fillColor = 255
  //if they are touching display poem array
      // hedgehogIndex += 1;
      // if (hedgehogIndex >= hedgehogBoxes.length) {
      //   hedgehogIndex = 0;
        //increase size
    // }
   }
 }
  // display
  //
  // Draw the fox as an ellipse on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    this.radius = this.health;
    noStroke();
    fill(this.fillColor);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
