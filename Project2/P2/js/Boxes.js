// StorySquares
// //
// //a class that contains the object for the story squares
// //story squares are non-traditional prey.
// //they display stories when the hedgehog or the fox overlap them
// //they don't move, they don't have health
//
class Boxes {

  // constructor
  //
  // Sets the initial values for the Story Squares's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, fillColor, radius) {
    // Position
    this.x = x;
    this.y = y;
    // this.size = size;
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    // Display properties
    this.fillColor = fillColor;
    this.radius = this.health;
  }

  // display
  //
  // Draw the prey as an ellipse on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    noStroke();
    fill(this.fillColor);
    this.radius = this.health;
    ellipse(this.x, this.y, this.radius);
    pop();
  }

  // reset
  //
  // Set the position to a random location and reset health
  // and radius back to default
  reset() {
    // Random position
    this.x = this.x
    this.y = this.y
    // Default health
    this.health = this.maxHealth;
    // Default radius
    this.radius = this.health;
  }
}
