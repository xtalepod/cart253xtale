class Scene {
  
  constructor(x, y, width, height) {
    // Position
    this.x = x;
    this.y = y;
    //size
    this.width = width;
    this.height = height;
    // this.fillColor;
    //the state of the game
    // this.state = state;
  }
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
  handleExit(player) {
    if (key.isFound === true) {
      //console.log(this.x, this.y, player.x, player.y, this.width, player.size);
      let d = dist(this.x, this.y, player.x, player.y);
      // Check if the distance is less than their two radii (an overlap)
      //and changes the level depending on what level it currently is
      if (d < this.width / 2 + player.size / 2) {
        this.state = "portalState1";
      }
    }
  }
  mousePressed() {
    // This will be called by the main program when it detects a mouse press
  }
}

  // We could define more methods, depending on what we want our scenes to be able to do
  // including more input events that could be called from the main script
