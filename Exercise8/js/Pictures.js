"use strict"
class Pictures {
  // constructor
  //
  // Sets the initial values for the Potion's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, width, height, image) {
    //Position
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
   }

  display(){
    imageMode(CENTER);
    image(this.image,this.x,this.y,this.width,this.height);
    }
  }
