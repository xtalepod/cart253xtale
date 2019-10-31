class BeePredator { // A Predator class describes what a Predator is and does
  constructor(x, y, speed, image, radius, upKey, downKey, leftKey, rightKey, sprintKey, sprintHealthPenalty, normalHealthPenalty, sprintSpeed, normalSpeed) {
    // Sets up the Predator when it is created or "constructed"
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.maxHealth = 100;
    this.health = 50; // Must be AFTER defining this.maxHealth
    this.healthLossNormal = normalHealthPenalty; //Per move
    this.healthGainPerEat = 1;
    this.preyEaten = 0;
    this.speed = speed;
    this.radius = radius;
    this.upKey = upKey; //UP_ARROW;
    this.downKey = downKey; //DOWN_ARROW;
    this.leftKey = leftKey; //LEFT_ARROW;
    this.rightKey = rightKey; //RIGHT_ARROW;
    //sprinting properties
    this.sprintHealthPenalty = sprintHealthPenalty;
    this.sprintKey = sprintKey;
    this.sprintSpeed = sprintSpeed;
    this.normalSpeed = normalSpeed;
    this.normalHealthPenalty = normalHealthPenalty;
    //images
    this.image = image;
  }
  handleInput() {

    // // check if the predator is sprinting
    if (keyIsDown(this.sprintKey)) {
      this.speed = this.sprintSpeed;
      this.healthLossNormal = this.sprintHealthPenalty;
    }
    //to make it reset when shift is no longer pressed
    else {
      this.speed = this.normalSpeed;
      this.healthLossNormal = this.normalHealthPenalty;
    }
    // Check for player input and react appropriately
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    } else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
      //console.log('i want these to work');
    }
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    } else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    this.health = this.health - this.healthLossNormal;
    this.health = constrain(this.health, 0, this.maxHealth);
    this.handleWrapping();
  }


  handleWrapping() {
    if (this.x < 0) {
      this.x += width;
    } else if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    } else if (this.y > height) {
      this.y -= height;
    }
  }

  handleEating(prey) {
    // Check for an overlap with this prey
    // And reduce its health if there is one
    // Also increase the predator's health
    let d = dist(this.x, this.y, prey.x, prey.y);
    if (d < this.radius + prey.radius) {
      this.health += this.healthGainPerEat;
      this.health = constrain(this.health, 0, this.maxHealth);
      prey.health -= this.healthGainPerEat;
      this.preyEaten++;
      //this.preyEaten = this.preyEaten + 1;
      if (prey.health < 0) {
        prey.reset();
      }
    }
  }
  display() {
    // Draw the predator on the canvas
    push();
    image(this.image, this.x, this.y, this.radius);
    this.radius = this.health;
    pop();
  }

displayScore() {
    push();
    // textAlign(CENTER, TOP);
    // textFont(myFont);
    textSize(100);
    fill(255, 190, 192)
    text(preyEaten, width / 3, 20);
    // text(scoreRight, 2 * width / 3, 20);
    console.log(score);
    pop();
}
  reset() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.health = this.maxHealth;
    this.radius = this.health;
  }
}
