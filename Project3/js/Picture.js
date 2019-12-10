"use strict"
class Picture {
  // constructor
  //
  // Sets the initial values for the Potion's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, speed, radius, pictureDisplay) {
    //Position
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.pictureDisplay = pictureDisplay;
    this.radius = radius;
    this.vx = 0;
    this.vy = 0;
    this.tx = random(0,1000);
    this.ty = random(0,1000);
   }

   move() {
    this.x = this.x - 0.2;
    this.y = this.y - 1;
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


  display(){
    push();
    imageMode(CENTER);
    image(this.pictureDisplay,this.x,this.y,this.r,this.r);
    pop();
    }
  }
