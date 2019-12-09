"use strict"

class Word {
  constructor(x, y, speed, color, radius, wordText,wordSize) {
    // console.log("this.catchWords");
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.radius = radius;
    this.wordText = wordText;
    this.wordSize = wordSize;
  }


  move() {

    this.x = this.x - this.speed;
    this.y = this.y - this.speed;
  }

  //terris P2 TestSkyFalling
  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
    } else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    } else if (this.y > height) {
      this.y -= height;
    }
  }
  display() {
    textSize(this.wordSize);
    textAlign(CENTER, CENTER);
    fill(this.color);
    text(this.wordText, this.x, this.y);
  }
}
