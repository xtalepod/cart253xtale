"use strict"

class WorldOne extends PlayScene {
  constructor(x , y, r, image){
    super();

    this.backgroundColor = color(0,255,128);
    this.milky = createVideo('assets/milky3.mp4');
    this.milky.hide();
    this.player = new Player (100,100, 6, color(0,153,153), 20)
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

//setting the portalProperties to change position and states
    portalArray[0].x = width/4 - 50 ;
    portalArray[0].y = height/2;
    portalArray[0].nextState = worldTwo;

    portalArray[1].x = width/2 + 450;
    portalArray[1].y = height/2;
    portalArray[1].nextState = worldThree;

    key.x = width/2;
    key.y = height/3 + 400;

      background(this.backgroundColor);

      // image(this.image,0,this.a, width,this.a);
      // this.image.resize(50,100);
      // this.a = this.a - 0.5;
      // if (this.a < 0){
      //   this.a = height;
      // }
      imageMode(CENTER);
      image(this.milky, width/2, height/2,windowWidth,windowHeight); // draw a second copy to canvas
      image(this.milky, width/2, height/3,width/2,height/2); // draw a second copy to canvas

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
