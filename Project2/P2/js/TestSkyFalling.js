//an object that moves on x and y axis coming from top to bottom
//will be used another time but NOT during hedgehog and fox

//class TestSkyFalling {

  // constructor
  //
  //something that falls from the sky and changes things somehow
  constructor(x, y, speed, radius, image) {
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
    this.maxHealth = radius;
    this.health = this.maxHealth;
    this.healthGainPerEat = 1;
    // Display properties
    this.radius = radius; //this.health;
    this.image = image;
  }
  move() {
    this.x = this.x + 0.2
    this.y = this.y + 1
    this.handleWrapping();
 }
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

 handleEating(testPrey) {
   // Calculate distance from this skyFalling to the prey
   let d = dist(this.x, this.y, testPrey.x, testPrey.y);
   // Check if the distance is less than their two radii (an overlap)
   if (d < this.radius + testPrey.radius) {
     // Increase prey health and constrain it to its possible range
     this.health += this.healthGainPerEat;
     this.health = constrain(this.health, 0, this.maxHealth);
     // Increase prey health by the same amount
     testPrey.health += this.healthGainPerEat;
     }
   }

  display() {
    // this.radius = this.health;
    image(this.image,this.x, this.y);
    // if(this.body === this.maxBody){
    this.image.resize(50,40);
 }
}
