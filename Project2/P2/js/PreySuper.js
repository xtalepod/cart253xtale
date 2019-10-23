// Prey
//
// A class that represents a simple prey that moves
// on screen based on a noise() function. It can move around
// the screen and be consumed by Predator objects.
//consider: constructing 3 images in the super (x ,y, speed, radius, image)
//preload 3 images from script tommyImage1-3

class PreySuper {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  //radius
  constructor(x, y, speed, radius, image1, image2, image3) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    // Time properties for noise() function
    this.tx = random(0, 1000); // To make x and y noise different
    this.ty = random(0, 1000); // we use random starting values
    // Health properties
    //this.maxHealth = radius;
    this.state = 1; //this.maxHealth; // Must be AFTER defining this.maxHealth
    // Display properties
    this.radius = radius; //this.health;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;

    //console.log(PreySuper);
  }

  // move
  //
  // Sets velocity based on the noise() function and the Prey's speed
  // Moves based on the resulting velocity and handles wrapping
  move() {
    // Set velocity via noise()
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Update time properties
    this.tx += 0.01;
    this.ty += 0.01;
    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // Checks if the prey has gone off the canvas and
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


  handleEating(predator) {
    // Calculate distance from this predator to the prey
    let d = dist(this.x, this.y, predator.x, predator.y);
    // Check if the distance is less than their two radii (an overlap)
    if (d < this.radius + predator.radius) {
//this means the picture will change
      if (this.state < 3) {
        this.state ++;
      }
    }
  }
  // display
  //
  // Draw the prey as an ellipse on the canvas
  // with a radius the same radius as its current health.
  display() {
    // this.radius = this.health;
    if(this.state === 1){
      image(this.image1,this.x, this.y);
    }
    else if(this.state === 2){
      image(this.image2,this.x, this.y);
    }
    else{
      image(this.image1,this.x,this.y);
    }
    // pop();
    // image(superPreyImage, preyX, preyY, preyHealth);
    // preyImage.resize(100, 100);
    console.log('tommydisplay');
  }

  // reset
  //
  // Set the position to a random location and reset health
  // and radius back to default
  reset() {
    // Random position
    this.x = random(0, width);
    this.y = random(0, height);
    // Default health
    // this.health = this.maxHealth;
    // // Default radius
    // this.radius = this.health;
  }
}
