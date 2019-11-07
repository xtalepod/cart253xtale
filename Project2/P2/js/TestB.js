// StorySquares
// //
// //a class that contains the object for the story squares
// //story squares are non-traditional prey.
// //they display stories when the hedgehog or the fox overlap them
// //they don't move, they don't have health
//
class TestB {

  // constructor
  //
  // Sets the initial values for the Story Squares's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, size, fillColor) {
    // Position
    this.x = x;
    this.y = y;
    // this.w = w;
    // this.h = h;
    this.size = 20;
    // Display properties
    this.fillColor = fillColor;
  }

//check if the hedgehog had come into contact with the box and if so display story


  // display
  //
  // Draw the prey as an ellipse on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    noStroke();
    fill(this.fillColor);
    rect(this.x, this.y, this.size, this.size);
    pop();
  }
//This code is adapted from cart253-2019/games/game-oop-pong/js/Ball.js
handleCollision(hedgehog) {
   // Check if the ball overlaps the hedgehog on x axi
     if (this.x + this.size > hedgehog.x && this.x < hedgehog.x + hedgehog.w) {
       // Check if the ball overlaps the hedgehog on y axis
       if (this.y + this.size > hedgehog.y && this.y < hedgehog.y + hedgehog.h) {
         this.fillColor = 255;
         return true;
     //      if (hedgehogIndex >= hedgehogBoxes.length) {
     //          hedgehogIndex = 0;
     // }
   }
 }
 else {
   this.fillColor = 0;
 }
}
   // reset
  // reset() {
  //
  // this.fillcolor = color(255, 153, 153)
  //
  // }
}
