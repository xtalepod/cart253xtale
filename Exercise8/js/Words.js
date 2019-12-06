class Word {
  constructor(x, y, speed, color, radius, wordText) {
    console.log("this.catchWords");
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
    this.radius = radius;
    this.wordText = wordText
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

  // handleCollision() {
  //   if (character.x + character.size / 2 > this.x - this.width / 2 && character.x - character.size / 2 < this.x + this.width / 2 && character.y + character.size / 2 > this.y - this.height / 2 && character.y - character.size / 2 < this.y + this.height / 2) {
  //     // We have an overlap - just like in pong with the ball and the paddle
  //     // set velocity to 0
  //     character.x -= character.vx;
  //     character.y -= this.vy;
  //     character.vx = 0;
  //     character.vy = 0;
  //     return;
  //   }
  // }


  draw() {
    textSize(50);
    textAlign(CENTER, CENTER);
    fill(this.color);
    text(this.wordText, this.x, this.y);
  }
}
