"use strict"

class WorldThree extends PlayScene {
  constructor(x , y, r, image){
    super();

    this.backgroundColor = color(0,255,128);
    this.milky = createVideo('assets/milky3.mp4');
    this.milky.hide();

    this.videoProperties = [
          {
          x : 40,
          y : 50,
          width : 100,
          height : 100,
          },
          { x : 100,
            y : 100,
            width : 40,
            height : 50,
          },
        ];
    this.image = image;
    this.a = 0;
  }

  draw() {
      background(this.backgroundColor);

      image(this.image,0,this.a, width,this.a);
      // this.image.resize(50,100);
      // this.a = this.a - 0.5;
      // if (this.a < 0){
      //   this.a = height;
      // }

      image(this.milky, 600, 100,500,300); // draw a second copy to canvas
      image(this.milky, 200, 200,150,150); // draw a second copy to canvas

      this.player.handleInput();
      // Move all the player
      this.player.move();
      this.handlePortalPosition();
      this.player.display();
  }


  handlePortalPosition(){
    super.handlePortalPosition();
  }
  mousePressed() {
    // This will be called by the main program when it detects a mouse press
        this.milky.loop();
  }
}
