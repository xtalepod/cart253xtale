"use strict"

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
    this.size = 40;
    // Display properties
    this.fillColor = fillColor;
    //variables for counting and displaying collisions


  }

  //check if the hedgehog had come into contact with the box and if so display story


  // display
  //
  // Draw the hedgehog as an ellipse on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    noStroke();
    fill(this.fillColor);
    ellipse(this.x, this.y, this.size, this.size);
    pop();
  }
  //This code is adapted from cart253-2019/games/game-oop-pong/js/Ball.js
  handleCollision(hedgehog) {
    // check if the box overlaps the hedgehog on x axi
    if (this.x + this.size > hedgehog.x && this.x < hedgehog.x + hedgehog.w) {
      // check if the box overlaps the hedgehog on y axis
      if (this.y + this.size > hedgehog.y && this.y < hedgehog.y + hedgehog.h) {
        this.fillColor = 255;
        hedgehog.collisions ++
        console.log("hedhoge.collisions")
        return true;
      }
    } else {
      this.fillColor = color(255, 153, 153);
    }
  }

  handleFoxCollision(fox) {
    //check if the box overlaps the fox on x axi
    if (this.x + this.size > fox.x && this.x < fox.x + fox.w) {
      //check if the box overlaps the fox on y axis
      if (this.y + this.size > fox.y && this.y < fox.y + fox.h) {
        this.fillColor = color(random(255,30,20));
        return true;
      }
    } else {
      this.fillColor = color(255, 153, 153);
    }
  }
}
