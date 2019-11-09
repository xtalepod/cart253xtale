"use strict";
// // hedgohog
// //
// // A class that represents a simple hedgehog
// // controlled by the arrow keys. It can move around
// // the screen and overlap with boxes to generate poetry
////*******related to gameOver state and and conviction: all health variables, setup(), checkHealth(), and check collision are attempting to visbily track 'health'(overlaps) and change to gameOver state
class Hedgehog {
  // console.log("new Hedgehog");
  // constructor
  //
  // Sets the initial values for the hedgehog's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, w, h, fillColor, speed, upKey, downKey, rightKey, leftKey) {
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
      ]

//variables for counting and displaying collisions (theoretically)
    this.collisions = 0;
    this.showHedgehogCollision = [];
//variables for tracking "health" (overlaps)
    this.health;
    this.maxHealth = 100;
    this.healthPenalty = 0.3
  //overlapCounter is like "number of prey eaten" from P1 to count the "score"
    this.overlapCounter = 0;
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
       console.log("health");
  if (boxes.x + boxes.size > this.x && boxes.x < this.x + this.w) {
    // check if the box overlaps the hedgehog on y axis
    if (boxes.y + boxes.size > this.y && this.y < this.y + this.h) {
      this.health = this.maxHealth - 10
      hedgehog.collisions ++
      console.log("hedhoge.collisions")

      // this.collisions += 1;
      // if (this.health === 0) {
      //   state = "GAMEOVER"
      //           console.log("health");
      }
    }
  }
  // display
  //
  // Draw the hedgehog as an square on the canvas, make text appear with it overlaps with the boxes and its colour change randomly
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
        "are you writing poetry yet?"
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
