// fox
//
// A class that represents a simple fox
// controlled by the arrow keys. It can move around
// the screen and consume storySquares objects to maintain its health.

class Fox {

  // constructor
  //
  // Sets the initial values for the fox's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, speed, radius, upKey, downKey, rightKey, leftKey) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 1;
    //this.storySquaresEaten = 0;

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
    // this.health = constrain(this.health, 0, this.maxHealth);
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
  // Takes a storySquares object as an argument and checks if the fox
  // overlaps it. If so, reduces the storySquares's health and increases
  // the fox's. If the storySquares dies, it gets reset.
  handleEating(storySquares) {
    // Calculate distance from this fox to the storySquares
    let d = dist(this.x, this.y, storySquares.x, storySquares.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < this.radius + storySquares.radius) {
      // Increase fox health and constrain it to its possible range
      this.health += this.healthGainPerEat;
      this.health = constrain(this.health, 0, this.maxHealth);
      // Decrease storySquares health by the same amount
      storySquares.health -= this.healthGainPerEat;
      // Check if the storySquares died and reset it if so
      if (storySquares.health < 0) {
        storySquares.reset();
        console.log("count fox and story overlaps")
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

    this.radius = this.health;
    noStroke();
    fill(255,158,77);
    rect(this.x, this.y, 80, 80);
    noStroke();
    fill(250);
    rect(this.x + 20, this.y + 7.5, 70,10);
    console.log("rect");

    pop();
  }
}
