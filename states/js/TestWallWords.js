// Wall
//adapted from https://fredlabbe.github.io/C253/Projects/Project2/
// A class that represents wall objects that can't be passed
// through by the character.
//

class TestWallWords extends TestWall {

  // constructor
  //
  // Sets the initial values for the Wall's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, width, height) {
    super(x,y,width,height)
    this.fillColor = color(50,40,100);
    // Position
    this.x = x;
    this.y = y;

    //size
    this.width = width;
    this.height = height;
    this.phrases = [
      "once i am dead",
      "to the left and right",
      "this illusionary duplication",
      "sinks abysmally and soars",
      "fathomless air; my body"
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
      text(phrases,50,height/2)
      textSize(20);
      return;
    }
  }
}


//WHY DOESNT THIS WORK
// handleCollisionDisplay() {
    // this.phrasesIndex += 1;
    // if (this.player.x + this.player.size / 2 > this.wallArray.x - this.wallArray.width / 2 && this.player.x - this.player.size / 2 < this.wallArray.x + this.wallArray.width / 2 && this.player.y + this.player.size / 2 > this.wallArray.y - this.wallArray.height / 2 && this.player.y - this.player.size / 2 < this.wallArray.y + this.wallArray.height / 2) {
    //   this.phrasesIndex +=1;
  // }
// //   if (this.wallArray[i].handleCollision(this.player) === true){
// //     // let phraseGenerator = random(this.phrases[this.phrasesIndex])
// //     this.phrasesIndex += 1; // Go to the next phrase
// //     fill(30);
// //     textAlign(CENTER,CENTER);
// //     textSize(30);
// //     text(this.phrases,width/2,height/2);
//
// // if (this.player.x + this.player.size / 2 > this.wallArray.x - this.wallArray.width / 2 && this.player.x - this.player.size / 2 < this.wallArray.x + this.wallArray.width / 2 && this.player.y + this.player.size / 2 > this.wallArray.y - this.wallArray.height / 2 && this.player.y - this.player.size / 2 < this.wallArray.y + this.wallArray.height / 2) {
// //   if (this.phrasesIndex.handleCollision >= this.phrases.length) {
// //     this.phrasesIndex = 0;
// //     console.log(this.phrasesIndex)
// //     // let playerOverLapping = false;
// //
// //     // for (let i = 0; i < this.wallArray.length; i++){
// //     //   this.wallArray[i].handleCollisionDisplay();
// //     //   if (this.wallArray[i].handleCollision(player)) {
// //     //     playerOverLapping = true;
// //     //   }
// //     // }
//   // }
// // }
