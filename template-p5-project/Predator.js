class Predator { // A Predator class describes what a Predator is and does
  constructor(x, y, speed, fillColor,radius) {
    // Sets up the Predator when it is created or "constructed",
    //this. replaces let in variable naming
    //to personalize this i.e make multiple predators, we can set constructor(parameters)
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.maxHealth = radius; //maximum health is the starting radius
    this.health = 100; // Must be AFTER defining this.maxHealth otherwise it will be undefined
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 1;
    this.speed = 5;
    this.fillColor = color(255,255,0);
    this.radius = this.health; //radius is matched to health
    this.upKey = UP_ARROW;
    this.downKey = DOWN_ARROW;
    this.leftKey = LEFT_ARROW;
    this.rightKey = RIGHT_ARROW;
  }

  handleInput() {
    // Check for player input and react appropriately
      handleInput() {
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    }
    else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    }
    else {
      this.vx = 0;
    }
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
  }

  move() {
    // Move the predator based on velocity
    // Lose health from movement
    // Wrap at the canvas edges
    move() {
  this.x += this.vx;
  this.y += this.vy;
  this.health = this.health - this.healthLossPerMove;
  this.health = constrain(this.health,0,this.maxHealth);
this.handleWrapping();
 //the wrapping code!
 //would be nicer to create its own wrapping function to add this.handleWrapping to move()
 

handleWrapping() {
  if (this.x < 0) {
    this.x += width;
  }
  else if (this.x > width) {
    this.x -= width;
  }
  if (this.y < 0) {
    this.y += height;
  }
  else if (this.y > height) {
    this.y -= height;
  }
}


  }

  handleEating(prey) {
    // Check for an overlap with this prey
    // And reduce its health if there is one
    // Also increase the predator's health
  }

  display() {
    // Draw the predator on the canvas
  }

}
