"use strict"

class WorldOne extends PlayScene {
  constructor(x , y, r, image){
    super();

    this.backgroundColor = color(0,255,128);
    this.milky = createVideo('assets/milky3.mp4');
    this.milky.hide();
    this.player = new Player (100,100, 6, color(0,153,153), 20)
    this.image = image;

    this.shelfProperties = [
    {x:	width/2	, y:	height/3 + 150	, width: 500	, height:	20, fillColor: color(155,255,155)},
    {x:	width/2 + 60	, y: height/3 + 225	, width: 500	, height:	20, fillColor: color(155,255,155)},
    {x:	width/2 + 120	, y: height/3 + 300, width:	500	, height:	20,fillColor: color(155,255,155)},
    {x:width/2 + 180, y: height/3 + 375, width:	500	, height:	20, fillColor: color(155,255,155)	},
    {x:width/2 + 260, y: height/3 + 450, width:	500	, height:	20, fillColor: color(155,255,155)	},
  ];

  this.shelfArray = [];
  // //the shelf array which looks like layered shelves in this level
  for (let i = 0; i < this.shelfProperties.length; i++) {
      let shelf = new Wall(this.shelfProperties[i].x, this.shelfProperties[i].y, this.shelfProperties[i].width, this.shelfProperties[i].height, this.shelfProperties[i].fillColor);;
      this.shelfArray.push(shelf);

      // this.angle = 0;
}

  this.angle = 0;
  //
  //   this.mazeProperties = [
  //     { x: 280,
  //       y: 65,
  //       width: 440,
  //       height: 10
  //     },
  //     {
  //       x: 55,
  //       y: 270,
  //       width: 10,
  //       height: 420
  //     },
  //     {
  //       x: 85,
  //       y: 475,
  //       width: 70,
  //       height: 10
  //     },
  //     {
  //       x: 125,
  //       y: 425,
  //       width: 10,
  //       height: 110
  //     },
  //     {
  //       x: 125,
  //       y: 270,
  //       width: 10,
  //       height: 120
  //     },
  //     {
  //       x: 90,
  //       y: 215,
  //       width: 60,
  //       height: 10
  //     },
  //     {
  //       x: 115,
  //       y: 165,
  //       width: 110,
  //       height: 10
  //     },
  //     {
  //       x: 115,
  //       y: 115,
  //       width: 110,
  //       height: 10
  //     },
  //     {
  //       x: 215,
  //       y: 130,
  //       width: 10,
  //       height: 40
  //     },
  //     {
  //       x: 235,
  //       y: 115,
  //       width: 50,
  //       height: 10
  //     },
  //     {
  //       x: 265,
  //       y: 170,
  //       width: 10,
  //       height: 100
  //     },
  //     {
  //       x: 210,
  //       y: 215,
  //       width: 100,
  //       height: 10
  //     },
  //     {
  //       x: 165,
  //       y: 275,
  //       width: 10,
  //       height: 110
  //     },
  //     {
  //       x: 220,
  //       y: 325,
  //       width: 100,
  //       height: 10
  //     },
  //     {
  //       x: 265,
  //       y: 295,
  //       width: 10,
  //       height: 50
  //     },
  //     {
  //       x: 240,
  //       y: 265,
  //       width: 60,
  //       height: 10
  //     },
  //     {
  //       x: 315,
  //       y: 95,
  //       width: 10,
  //       height: 50
  //     },
  //     {
  //       x: 395,
  //       y: 115,
  //       width: 150,
  //       height: 10
  //     },
  //     {
  //       x: 465,
  //       y: 170,
  //       width: 10,
  //       height: 100
  //     },
  //     {
  //       x: 485,
  //       y: 215,
  //       width: 30,
  //       height: 10
  //     },
  //     {
  //       x: 375,
  //       y: 165,
  //       width: 90,
  //       height: 10
  //     },
  //     {
  //       x: 415,
  //       y: 195,
  //       width: 10,
  //       height: 50
  //     },
  //     {
  //       x: 360,
  //       y: 215,
  //       width: 100,
  //       height: 10
  //     },
  //     {
  //       x: 365,
  //       y: 300,
  //       width: 10,
  //       height: 60
  //     },
  //     {
  //       x: 335,
  //       y: 275,
  //       width: 50,
  //       height: 10
  //     },
  //     {
  //       x: 315,
  //       y: 325,
  //       width: 10,
  //       height: 90
  //     },
  //     {
  //       x: 480,
  //       y: 265,
  //       width: 40,
  //       height: 10,
  //     },
  //     {
  //       x: 415,
  //       y: 320,
  //       width: 10,
  //       height: 100
  //     },
  //     {
  //       x: 460,
  //       y: 325,
  //       width: 80,
  //       height: 10
  //     },
  //     {
  //       x: 315,
  //       y: 375,
  //       width: 210,
  //       height: 10
  //     },
  //     {
  //       x: 165,
  //       y: 435,
  //       width: 10,
  //       height: 130
  //     },
  //     {
  //       x: 215,
  //       y: 405,
  //       width: 10,
  //       height: 50
  //     },
  //     {
  //       x: 245,
  //       y: 425,
  //       width: 50,
  //       height: 10
  //     },
  //     {
  //       x: 365,
  //       y: 405,
  //       width: 10,
  //       height: 50
  //     },
  //     {
  //       x: 335,
  //       y: 425,
  //       width: 50,
  //       height: 10
  //     },
  //     {
  //       x: 315,
  //       y: 465,
  //       width: 10,
  //       height: 70
  //     },
  //     {
  //       x: 285,
  //       y: 475,
  //       width: 50,
  //       height: 10
  //     },
  //     {
  //       x: 215,
  //       y: 485,
  //       width: 10,
  //       height: 30
  //     }
  // ];
  //
  // this.mazeArray = [];
  // // //the maze array
  // for (let i = 0; i < this.mazeProperties.length; i++) {
  //   let wall = new Wall(this.mazeProperties[i].x, this.mazeProperties[i].y, this.mazeProperties[i].width, this.mazeProperties[i].height, 0);
  //   // let wallNW = new Wall(this.mazeProperties[i].y - 10, this.mazeProperties[i].x + 10, this.mazeProperties[i].height, this.mazeProperties[i].width);
  //   // let wallNE = new Wall(this.windowWidth / 2 + this.mazeProperties[i].x - 30, this.mazeProperties[i].y, this.mazeProperties[i].width, this.mazeProperties[i].height);
  //   // let wallSW = new Wall(this.mazeProperties[i].x + 300, this.windowHeight - this.mazeProperties[i].y, this.mazeProperties[i].width, this.mazeProperties[i].height);
  //   // let wallSE = new Wall(this.windowWidth - this.mazeProperties[i].y, this.windowHeight - this.mazeProperties[i].x, this.mazeProperties[i].height, this.mazeProperties[i].width);
  //   this.mazeArray.push(wall);
  //   // this.wallArray.push(wallNE);
  //   // this.wallArray.push(wallSW);
  //   // this.wallArray.push(wallSE);
  //  }
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
    portalArray[0].fillColor = 0;
    // portalArray[0].nextState = worldTwo;

    portalArray[1].x = width/2 + 450;
    portalArray[1].y = height/2;
    portalArray[1].fillColor = 0;
    portalArray[1].nextState = worldThree;
    this.handlePortalPosition();

push();
    key.x = width/2;
    key.y = height/3 + 400;
    key.size = 40;
pop();

      for (let i = 0; i < this.shelfArray.length; i++) {
        this.shelfArray[i].handleCollision(this.player);
        this.shelfArray[i].display();
      }

      for (let i = 0; i < this.mazeArray.length; i++) {
        this.mazeArray[i].handleCollision(this.player);
        this.mazeArray[i].display();
      }


        // this.player.display();
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
