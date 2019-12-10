"use strict"

class WorldOne extends PlayScene {
  constructor(x , y, r, image){
    super();

    this.backgroundColor = color(0,255,128);
    this.milky = createVideo('assets/milky3.mp4');
    this.milky.hide();
    this.player = new Player (100,100, 6, color(0,153,153), 20)
    this.image = image;
    // this.shelfPropertities = [
    //   {
    //   x:20,
    //   y:200,
    //   width:20,
    //   height:20,
    // }];

    this.shelfProperties = [
    {x:	width/2	, y:	height/3 + 150	, width: 500	, height:	20, fillColor: 255	},
    {x:	width/2 + 60	, y: height/3 + 225	, width: 500	, height:	20, fillColor: 125	},
    {x:	width/2 + 120	, y: height/3 + 300, width:	500	, height:	20,fillColor: 0	},
    {x:width/2 + 180, y: height/3 + 375, width:	500	, height:	20, fillColor: 45	},
    {x:width/2 + 260, y: height/3 + 450, width:	500	, height:	20, fillColor: 50	},
  ];
    this.shelfArray = [];
    // //the wall array which looks like a cube of sorts in this level
    for (let i = 0; i < this.shelfProperties.length; i++) {
        let shelf = new Wall(this.shelfProperties[i].x, this.shelfProperties[i].y, this.shelfProperties[i].width, this.shelfProperties[i].height, this.shelfProperties[i].fillColor);
        // let shelf = new Wall(this.shelfProperties[i].x, this.shelfProperties[i].y, this.shelfProperties[i].width, this.shelfProperties[i].height, this.shelfProperties[i].color);
        // shelf.fillColor = color(255;
        // let cube3 = new Wall(this.shelfProperties[i].y + this.cube3x, this.wallProperties2[i].x + this.cube3y, this.wallProperties2[i].height, this.wallProperties2[i].width);
        this.shelfArray.push(shelf);
        // this.wallArray.push(cube3);

        // push();
        // rectMode(CENTER);
        // fill(153, 255, 153);
        // rect(width/2, height/3 + 150, 500, 20);
        // rect(width/2 + 60, height/3 + 225, 500, 20);
        // rect(width/2 + 120, height/3 + 300, 500, 20);
        // rect(width/2 + 180, height/3 + 375, 500, 20);
        // rect(width/2 + 260, height/3 + 450, 500, 20);
        // pop();

        this.angle = 0;
  }
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
      // push();
      // rectMode(CENTER);
      // fill(153, 255, 153);
      // rect(width/2, height/3 + 150, 500, 20);
      // rect(width/2 + 60, height/3 + 225, 500, 20);
      // rect(width/2 + 120, height/3 + 300, 500, 20);
      // rect(width/2 + 180, height/3 + 375, 500, 20);
      // rect(width/2 + 260, height/3 + 450, 500, 20);
      // pop();

      for (let i = 0; i < this.shelfArray.length; i++) {
        this.shelfArray[i].handleCollision(this.player);
        this.shelfArray[i].display();
      }
        this.player.display();
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
