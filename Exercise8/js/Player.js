// //
//adapted from https://fredlabbe.github.io/C253/Projects/Project2/



// Prey
//
// A class that represents a simple prey that moves
// on screen based on a noise() function. It can move around
// the screen and be consumed by Predator objects.

class Player {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, speed, fillColor, size) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;

    // // Health properties
    // this.maxHealth = size;
    // this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    // Display properties
    this.fillColor = fillColor;
    this.size = size;
    // Input properties
    this.upKey = 87; //W
    this.downKey = 83; //S
    this.leftKey = 65; //A
    this.rightKey = 68; //D
    this.phrases = [
      "once i am dead",
      "to the left and right",
      "this illusionary duplication",
      "sinks abysmally and soars",
      "fathomless air; my body"
    ];
  }

  // handleInput
  //
  // Checks if an arrow key is pressed and sets the predator's
  // velocity appropriately.
  handleInput() {
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
      // this.isMovingSideways = true;
    } else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
      // this.isMovingSideways = true;
    } else {
      this.vx = 0;
      // this.isMovingSideways = false;
    }
    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
      // this.isMoving = true;
    } else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
      // this.isMoving = true;
    } else {
      this.vy = 0;
      this.isMoving = false;
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
  //  console.log(this.vx);
    this.handleBoundaries();
  }

  // handleBoundaries()
  //
  // Checks if the player has gone off the canvas and
  // prevents it from going off, as a wall would do
  handleBoundaries() {
    this.x = constrain(this.x, 0 + this.size / 2, width - this.size);
    this.y = constrain(this.y, 0 + this.size / 2, height - this.size);
  }

  // display
  //
  // draw the play as an ellipse on the canvas
  display() {
    push();
      stroke(255);
      strokeWeight(4)
      fill(this.fillColor);
      ellipse(this.x, this.y, this.size);
    pop();
  }
// reset
  //
  // Set the position to a specific location and reassign size
  reset() {
    // Random position
    this.x = 1000;
    this.y = 50;
    this.size = this.size;
  }
}
