"use strict"


//world one is actually the game over state!
class GameOverWorld extends WorldOne {
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
}

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
    portalArray[0].fillColor = 0;
    // portalArray[0].nextState = worldTwo;

    portalArray[1].x = width/2 + 450;
    portalArray[1].y = height/2;
    portalArray[1].fillColor = 0;
    portalArray[1].nextState = titleScene;
    this.handlePortalPosition();

push();
key.x = 370;
key.y = 761
key.display();
pop();

      for (let i = 0; i < this.shelfArray.length; i++) {
        this.shelfArray[i].handleCollision(this.player);
        this.shelfArray[i].display();
      }

      // for (let i = 0; i < this.mazeArray.length; i++) {
      //   this.mazeArray[i].handleCollision(this.player);
      //   this.mazeArray[i].display();
      // }


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
