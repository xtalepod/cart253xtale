"use strict"

class PortalThree extends PlayScene {
  constructor(){
    super();

    this.milky = createVideo('assets/milky3.mp4');
    this.milky.hide();

    this.backgroundColor = color(0,0,255);
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
  }

  draw() {
      background(this.backgroundColor);
      image(this.milky, 15, 15,150,150); // draw a second copy to canvas
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
