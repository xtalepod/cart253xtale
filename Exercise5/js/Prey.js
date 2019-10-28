class Prey {
  constructor(x, y, speed, image, radius) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.tx = random(0, 1000); // To make x and y noise different
    this.ty = random(0, 1000); // we use random starting values
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.speed = speed;
    //this.fillColor = color(255,190,198);
    this.radius = this.health;
    this.image = image;
  }
  move() {
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
    this.x += this.vx;
    this.y += this.vy;
    this.tx += 0.01;
    this.ty += 0.01;
    this.handleWrapping();
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
  display() {
    push();
    // noStroke();
    // fill(this.fillColor);
    this.radius = this.health;
    image(this.image,this.x, this.y);
    pop();
  }
  reset() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.health = this.maxHealth;
    this.radius = this.health;
  }
}
