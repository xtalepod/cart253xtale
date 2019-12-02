// Door
//
// A class that represents door objects that can be found
// by the player. When a player steps through them, it changes
// the level to the next level.

class TestPolyPortal {

  // constructor
  //
  // Sets the initial values for the Door's properties
  // Either sets default values or uses the arguments provided
  // ...state

  //original constructor code!!!
  constructor(x, y, radius, width, height,nextState) {
    // Position
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.width = width;
    this.height = height;
    // this.npoints = npoints;

    this.nextState = nextState;
    // console.log("STATE:: "+this.nextState);

  }


  //display()
  //
  //Displays the door on the screen as an image
  display() {
    push();
    translate(this.width, this.height);
    rotate(frameCount / 20);
    polygon(this.x, this.y, 20, 5);
    pop();
     console.log("are we here");
    // push();
    // translate(this.width * 0.5, this.height * 0.5);
    // rotate(frameCount / 50.0);
    // polygon(0, 0, 80, 20);
    // pop();
    //
    // push();
    // translate(this.width * 0.8, this.height * 0.5);
    // rotate(frameCount / -100.0);
    // polygon(0, 0, 70, 7);
    // pop();


    // push();
    // rectMode(CENTER);
    // fill(255);
    // rect(this.x, this.y, this.width, this.height);
    // pop();
  }

  polygon(x, y, radius, npoints) {
   let angle = TWO_PI / npoints;
   beginShape();
   for (let a = 0; a < TWO_PI; a += angle) {
     let sx = x + cos(a) * radius;
     let sy = y + sin(a) * radius;
     vertex(sx, sy);
   }
   endShape(CLOSE);
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
