"use strict"
class Pictures {
  // constructor
  //
  // Sets the initial values for the Potion's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, r, image) {
    //Position
    this.x = x;
    this.y = y;
    this.r = r;
    // a variable for the image for the background array
    this.sandPatterns = [];
    this.sandPattern = this.sandPatterns;
   }

   move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  display(){
    imageMode(CENTER);
    image(this.sandPattern,this.x,this.y,this.r,this.r);
    }
  }
