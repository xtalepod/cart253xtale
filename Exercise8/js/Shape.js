// Door
//
// A class that represents door objects that can be found
// by the player. When a player steps through them, it changes
// the level to the next level.

class Shape {
  // constructor
  //
  // Sets the initial values for the Door's properties
  // Either sets default values or uses the arguments provided
  // ...state
  constructor(x, y, radius, npoints) {
    // Position
    this.x = x;
    this.y = y;
    this.width = radius * 2;
    this.height = radius * 2;
    this.radius = radius,
    this.npoints = npoints;
    // this.theScale = 2;

  }


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
    this.polygon(0, 0, this.radius, this.npoints)
    pop();

    // this.theScale += 0.1
  }
  //adapted from https://p5js.org/examples/form-regular-polygon.html
  polygon(x, y, radius, npoints) {

    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    // console.log("polygon");
  }
}
