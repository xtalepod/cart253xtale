
// // fox
// //
// // A class that represents a simple fox
// // controlled by the arrow keys. It can move around
// // the screen and consume boxes objects to maintain its health.
//
class TestF {

  // constructor
  //
  // Sets the initial values for the fox's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y,w,h, fillColor, speed, radius, upKey, downKey, rightKey, leftKey) {
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
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 1;
    //this.boxesEaten = 0;

    // Display properties
    this.radius = this.health; // Radius is defined in terms of health
    // Input properties
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
    this.image = image;
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
    // // Update health
    // this.health = this.health - this.healthLossPerMove;
    this.health = constrain(this.health, 0, this.maxHealth);
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

  // handleEating
  //
  // Takes a boxes object as an argument and checks if the fox
  // overlaps it. If so, reduces the boxes's health and increases
  // the fox's. If the boxes dies, it gets reset.
  handleEating(boxes) {

    // Calculate distance from this fox to the boxes
    let d = dist(this.x, this.y, boxes.x, boxes.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < this.radius + boxes.radius) {
      // Increase fox health and constrain it to its possible range

      this.health += this.healthGainPerEat;
      this.health = constrain(this.health, 0, this.maxHealth);
      console.log("count fox and story overlaps")
      // // Decrease boxes x value by the same amount
      boxes.health -= this.healthGainPerEat;
      // Check if the boxes died and reset it if so
      if (boxes.health < 0) {
        boxes.reset();
      }
    }
  }


//
  // display
  //
  // Draw the fox as an ellipse on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    // this.radius = this.health;
    noStroke();
    fill(this.fillColor);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
