//trees as a very simple array that helps display the trees in the play displayPlayScreen
//even though its simple i'm keeping it for reference

class Trees {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, w, h) {
    // Position
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // this.fillColor = fillColor;
    console.log("nofill")
    // this.units = units;
    // this.numTree = units;

  }

  display() {
    push();
    fill(100,255,60);
    rect(this.x,this.y,this.w,this.h);
    pop();
  }
}
