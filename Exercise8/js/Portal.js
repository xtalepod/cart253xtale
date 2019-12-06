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
  constructor(x, y,radius,npoints,nextState) {
    // Position
    this.x = x;
    this.y = y;
    this.width = radius*2;
    this.height = radius*2;
    this.radius = radius,
    this.npoints = npoints;
    this.nextState = nextState;
    // this.theScale = 2;

    console.log("STATE:: "+this.nextState);

  }

  // constructor(x,y,radius,npoints)


  //display()
  //
  //Displays the door on the screen as an image
  //adapted from https://p5js.org/examples/form-regular-polygon.html

  display() {
    // rectMode(CENTER);
    fill(255);
    push();
    translate(this.x, this.y);
    rotate(frameCount / 10)
    // scale(this.theScale);
    this.polygon(0, 0, this.radius,this.npoints)
    pop();

    // this.theScale += 0.1
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
//adapted from https://p5js.org/examples/form-regular-polygon.html
  polygon (x, y, radius, npoints) {

  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
    console.log("polygon");
  }
}
