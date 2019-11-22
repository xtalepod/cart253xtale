// Wall
//adapted from https://fredlabbe.github.io/C253/Projects/Project2/
// A class that represents wall objects that can't be passed
// through by the character.
//

class TestWall {

  // constructor
  //
  // Sets the initial values for the Wall's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, width, height) {
    // Position
    this.x = x;
    this.y = y;

    //size
    this.width = width;
    this.height = height;
  }
  //display()
  //
  //Displays the wall on the screen as a rectangle
  display() {
    push();
    rectMode(CENTER);
    fill(0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
  //handleCollision()
  //
  //Checks if the character is inside the wall so it can move it
  //and act as a Collision wall, preventing the character from going
  //through. Receives the character as an argument
  handleCollision(character) {
    if (character.x + character.size / 2 > this.x - this.width / 2 && character.x - character.size / 2 < this.x + this.width / 2 && character.y + character.size / 2 > this.y - this.height / 2 && character.y - character.size / 2 < this.y + this.height / 2) {
      // We have an overlap - just like in pong with the ball and the paddle
      // set velocity to 0
      character.x -= character.vx;
      character.y -= character.vy;
      character.vx = 0;
      character.vy = 0;
      return;
    }
  }
}
