"use strict"
// // fox
// //
// // a class that represents a simple fox
// // controlled by the arrow keys. it can move around
// // the screen and overlap boxes to generate poetry and change states.
// //ideally the fox does more things/different things than the hedgehog
class TestF {

  // constructor
  //
  // Sets the initial values for the fox's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, w, h, fillColor, speed, upKey, downKey, rightKey, leftKey, sprintKey) {
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
    this.normalSpeed = speed;
    this.sprintSpeed = 20
    // Display properties
    //collision properties
    this.top = this.y - this.h / 2
    this.bottom = this.y + this.h / 2
    this.left = this.x - this.w / 2
    this.right = this.x + this.w / 2
    // Input properties
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
    this.sprintKey = sprintKey;

  //variables for counting and displaying collisions
    this.foxCollisions = 0;
    this.showFoxCollision = [];
  }

  // handleInput
  //
  // Checks if an arrow key is pressed and sets the fox's
  // velocity appropriately.
  handleInput() {
    // // check if the fox is sprinting and if so display this text
    if (keyIsDown(this.sprintKey)) {
      this.speed = this.sprintSpeed;
      text("swift movement", width / 2, height / 1.1);

    }
    //to make it reset when shift is no longer pressed
    else {
      this.speed = this.normalSpeed;
    }
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    } else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }
    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    } else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
  }

  // move
  //
  // Updates the position according to velocity
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
    } else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    } else if (this.y > height) {
      this.y -= height;
    }
  }

  // display
  //
  // Draw the fox as an square on the canvas
  //add parameters if fox overlaps with a box change its size and fillColor
  //else put it back to its starting parameters, show text when overlap happens
  display(isFoxOverBox) {
    if (isFoxOverBox) {
      this.fillColor = 0;
      fill(0);
      textFont('Courier New', [20]);
      textStyle(BOLD);
      text("survival", width / 2 - 350, height/ 1.09);
      pop();
      push();
      this.foxCollisions++;
      this.showFoxCollision = [
        "lord help, me i do my best",
      ]
      textAlign(CENTER, CENTER)
      fill(255);
      textSize(50)
      text(random(this.showFoxCollision), width/2, height/1.4);
      console.log("this.foxCollisions counter")
      pop();
    }

    else {
      this.fillColor = color(153, 255, 204);
      this.w = 70;
      this.h = 70;

    }
    push();
    noStroke();
    fill(this.fillColor);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
