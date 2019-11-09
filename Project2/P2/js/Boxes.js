"use strict"

//Boxes with poetry
// //
// //a class that contains the object for the poetry boxes
// //poetry are non-traditional prey.
// //they display stories and change colour when the hedgehog or the fox overlap them
// //they don't move, they don't have health
//
class Boxes {

  // constructor
  //
  // Sets the initial values for the Boxes properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, size, fillColor) {
    // Position
    this.x = x;
    this.y = y;
    this.size = 40;
    // Display properties
    this.fillColor = fillColor;
  }


  // display
  //
  // Draw the boxes as ellipse on the canvas and set the fillColor
  display() {
    push();
    noStroke();
    fill(this.fillColor);
    ellipse(this.x, this.y, this.size);
    pop();
  }
  //This code is adapted from cart253-2019/games/game-oop-pong/js/Ball.js
  //check if the hedgehog comes into contact with any side of the boxes and if so change their fill colour and chage hedgehog display variables otherwise back to normal
  handleCollision(hedgehog) {
    // check if the box overlaps the hedgehog on x axi
    if (this.x + this.size > hedgehog.x && this.x < hedgehog.x + hedgehog.w) {
      // check if the box overlaps the hedgehog on y axis
      if (this.y + this.size > hedgehog.y && this.y < hedgehog.y + hedgehog.h) {
        this.fillColor = 255;
        return true;
      }
    } else {
      this.fillColor = color(255, 153, 153);
    }
  }
  //This code is adapted from cart253-2019/games/game-oop-pong/js/Ball.js
  //check if the fox comes into contact with any side of the boxes and if so change their fill colour and chage fox display variables otherwise back to normal
  handleFoxCollision(fox) {
    //check if the box overlaps the fox on x axi
    if (this.x + this.size > fox.x && this.x < fox.x + fox.w) {
      //check if the box overlaps the fox on y axis
      if (this.y + this.size > fox.y && this.y < fox.y + fox.h) {
        this.fillColor = color(random(255, 30, 20));
        return true;
      }
    } else {
      this.fillColor = color(255, 153, 153);
    }
  }
}
