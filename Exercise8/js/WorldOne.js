"use strict"

class WorldOne extends PlayScene {
  constructor(x , y, r, image){
    super();

    this.backgroundColor = color(0,255,128);
    this.milky = createVideo('assets/milky3.mp4');
    this.milky.hide();
    this.player = new Player (100,100, 6, color(0,153,153), 20)
    this.image = image;
    this.shelfPropertities = [
      {
      x:20,
      y:200,
      width:20,
      height:20,
    }];
this.angle = 0;
  }

  draw() {
    background(155,290,155);
    push();
          imageMode(CENTER);
          // image(this.milky, width/2, height/2,windowWidth,windowHeight); // draw a second copy to canvas
          image(this.milky, width/2, height/3,width/2,height/2); // draw a second copy to canvas
    pop();
//setting the portalProperties to change position and states

    portalArray[0].x = width/4 - 50 ;
    portalArray[0].y = height/2;
    // portalArray[0].nextState = worldTwo;

    portalArray[1].x = width/2 + 450;
    portalArray[1].y = height/2;
    portalArray[1].nextState = worldThree;
    this.handlePortalPosition();

push();
    key.x = width/2;
    key.y = height/3 + 400;
    key.size = 40;
pop();
      push();
      rectMode(CENTER);
      fill(153, 255, 153);
      rect(width/2, height/3 + 150, 500, 20);
      rect(width/2 + 60, height/3 + 225, 500, 20);
      rect(width/2 + 120, height/3 + 300, 500, 20);
      rect(width/2 + 180, height/3 + 375, 500, 20);
      rect(width/2 + 260, height/3 + 450, 500, 20);
      pop();
//handling the input, movement, and display of the player
      this.player.handleInput();
      this.player.move();
      this.player.display();
  }


  handlePortalPosition(){
    super.handlePortalPosition();
  }
  mousePressed() {
    // This will be called by the main program when it detects a mouse press
        this.milky.play();
  }
}
