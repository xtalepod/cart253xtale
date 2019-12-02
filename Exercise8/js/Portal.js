// Door
//
// A class that represents door objects that can be found
// by the player. When a player steps through them, it changes
// the level to the next level.

class Portal {
  // constructor
  //
  // Sets the initial values for the Door's properties
  // Either sets default values or uses the arguments provided
  // ...state

  //original constructor code!!!
  constructor(x, y, width, height,nextState) {
    // Position
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.nextState = nextState;
    console.log("STATE:: "+this.nextState);

  }

  // constructor(x,y,radius,npoints)


  //display()
  //
  //Displays the door on the screen as an image
  display() {
    push();
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
  //
  //Checks if the player found the door by taking the distance
  //between the two objects. If yes, it changes the scenes.
  handleExit(player,key) {

    if (key.isFound === true) {
      //console.log(this.x, this.y, player.x, player.y, this.width, player.size);
      let d = dist(this.x, this.y, player.x, player.y);
      // Check if the distance is less than their two radii (an overlap)
      //and changes the level depending on what level it currently is
      if (d < this.width / 2 + player.size / 2) {
        //this.state = this.nextState;
        health++;
        //console.log("STATE:: "+this.nextState);
        currentScene = this.nextState;
        key.isFound = false;

      }
    }
  }
}
