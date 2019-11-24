"use strict"
class Textures {
  // constructor
  //
  // Sets the initial values for the Potion's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, image) {
    //Position
    this.x = x;
    this.y = y;
    this.textureImages = image;
    // this
    this.textureArray = [];

    for (let i = 0; i++ < 10; i ++) {
   //   this.x = random(width);
     this.y = random (height);
     this.r = random(20,60);
     this.textureImages = random(this.textureArray);
   let t = new Textures(x,y,r,textureImages)
   textureArray.push(t);
   }
  }

  display(){
    image(this.image,0,this.a,width,this.a);
    this.image.resize(50,100);
    this.a = this.a - 0.2;
    if (this.a < 0){
      this.a = height;
    }
  }
 }
