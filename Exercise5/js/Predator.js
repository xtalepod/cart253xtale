class Predator { // A Predator class describes what a Predator is and does
  constructor(x, y, speed, fillColor, radius, upKey, downKey, leftKey, rightKey) {
    // Sets up the Predator when it is created or "constructed"
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.maxHealth = 100;
    this.health = 100; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0.1;
    this.healthGainPerEat = 1;
    this.preyEaten = 0;
    this.speed = speed;
    this.fillColor = fillColor;
    this.radius = radius;
    this.upKey = upKey; //UP_ARROW;
    this.downKey = downKey; //DOWN_ARROW;
    this.leftKey = leftKey; //LEFT_ARROW;
    this.rightKey = rightKey; //RIGHT_ARROW;
  }
  handleInput() {
    // Check for player input and react appropriately
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

  move(){
  this.x += this.vx;
this.y += this.vy;
this.health = this.health - this.healthLossPerMove;
this.health = constrain(this.health,0,this.maxHealth);
this.handleWrapping(); // Calls the handleWrapping method, note the use of "this"
}


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


  handleEating(prey) {
    // Check for an overlap with this prey
    // And reduce its health if there is one
    // Also increase the predator's health
    let d = dist(this.x,this.y,prey.x,prey.y);
  if (d < this.radius + prey.radius) {
    this.health += this.healthGainPerEat;
    this.health = constrain(this.health,0,this.maxHealth);
    prey.health -= this.healthGainPerEat;
  //this.preyEaten ++;
    if (prey.health < 0) {
      prey.reset();
    }
  }
  }
  display() {
    // Draw the predator on the canvas
    push();
noStroke();
fill(this.fillColor,this.health);
this.radius = this.health;
ellipse(this.x,this.y,this.radius * 2);
pop();
  }
}
