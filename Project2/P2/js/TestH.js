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
  constructor(x, y, w, h, fillColor, speed, upKey, downKey, rightKey, leftKey, words) {
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
    this.words = [
      "survive",
      "exist",
      "hed"]
  //variables for counting and displaying collisions
    this.collisions = 0;
    this.showHedgehogCollision = [];
    this.health;
    this.maxHealth = 100;
    this.overLappingCount = 0;
  }

  // handleInput
  //
  // Checks if an arrow key is pressed and sets the fox's
  // velocity appropriately.
setup(){
  this.health = this.maxHealth;

}

  handleInput() {
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
  // Checks if the hedgehog has gone off the canvas and
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

//a function to check the number of collisions, it isn't really health but calling it that
checkHealth(){
  if (boxes.x + boxes.size > this.x && boxes.x < this.x + this.w) {
    // check if the box overlaps the hedgehog on y axis
    if (boxes.y + boxes.size > this.y && this.y < this.y + this.h) {
      this.health = this.maxHealth - 10
      this.collisions += 1;
      if (this.health === 0) {
        state = "GAMEOVER"
                console.log("health");
      }
    }
  }
}
  // display
  //
  // Draw the hedgehog as an square on the canvas
  display(isOverBox) {
    if (isOverBox) {
      this.fillColor = color(random(255), random(25), random(51))
      this.w = 50;
      this.h = 50;
      fill(0);
      textFont('Courier New', [20]);
      textStyle(BOLD);
      text("survive", width / 2 + 350, height/1.09);

      push();
      this.showHedgehogCollision = [
        "are you writing poetry yet?",
        "",
        "",
        "",
        "",
        "no"
      ]
      textAlign(CENTER, CENTER)
      fill(0);
      textSize(50)
      text(random(this.showHedgehogCollision), width/2, height/1.2);
      pop();

    } else {
      this.fillColor = color(26, 255, 140);
      this.w = 40;
      this.h = 40;
    }
    push();
    noStroke();
    fill(this.fillColor);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
