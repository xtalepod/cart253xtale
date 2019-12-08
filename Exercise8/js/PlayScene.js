 class PlayScene extends Scene {
   constructor(image) {
     super();
     this.windowWidth = windowWidth;
     this.windowHeight = windowHeight;
     // this.backgroundColor = 200;dfgdg
     this.image = image;
     this.mussleImage = loadImage("assets/images/textures/shells.png");
     // this.otherImage = loadImage("assets/images/textures/image5.JPG")

//information related to Picture objects including: 3 arrays, the number of pictures to display, and a for loop to set up the word array that determins position, velocity, radius, color, and declration of a new word
// adapted from https://github.com/pippinbarr/cart253-2019/blob/master/modules/core-arrays/core-arrays.md
     this.catchPicturesIndex = 0;
     this.catchPictures = [this.mussleImage];
     this.numPictures = 5;

     this.pictureArray = [];
     for (let i = 0; i < this.numPictures; i ++) {
       let x = random(width + 100, height + 100);
       let y = random(width,height);
       let speed = random(-2,20);
       let radius = random(5,10);
       let pictureDisplay = this.catchPictures[Math.floor(random(this.catchPictures.length))];
       this.pictureArray.push(new Picture(x, y, speed, radius, pictureDisplay));
     }

//the player
     this.player = new Player(800, 100, 6, color(255, 195, 195), 20);
     //array containing the informations for the walls in this level
     this.wallProperties = [
     {x:	180	, y:	35	, width:	300	, height:	10	},
     {x:	180	, y:	295	, width:	300	, height:	10	},
     {x:	35	, y:	165	, width:	10	, height:	250	},
     {x:	295	, y:	165	, width:	10	, height:	250	}
   ];
     this.wallArray = [];
     // //the wall array which looks like a cube of sorts in this level
     for (let i = 0; i < this.wallProperties.length; i++) {
         let wallNW = new Wall(this.wallProperties[i].y - 10, this.wallProperties[i].x, this.wallProperties[i].height, this.wallProperties[i].width);
         this.wallArray.push(wallNW);
         let wallNE = new Wall(this.wallProperties[i].y - 10 + 400, this.wallProperties[i].x + 400, this.wallProperties[i].height, this.wallProperties[i].width);
         this.wallArray.push(wallNE);
       // this.wallArray.push(wallSW);
       // this.wallArray.push(wallSE);
     }
   }

   draw() {

     background(this.image);

     portalArray[0].x = width/4 - 50 ;
     portalArray[0].y = height/2;
     portalArray[0].nextState = worldTwo;

     portalArray[1].x = width/2 + 450;
     portalArray[1].y = height/2;
     portalArray[1].nextState = worldThree;

     // image(this.mussleImage,width/2,height/2,300);
push();
     for (let i = 0; i < this.pictureArray.length; i++) {
       this.pictureArray[i].move();
       this.pictureArray[i].handleWrapping();
       this.pictureArray[i].display();
     }
pop();

    this.player.handleInput();
     // Move all the player
     this.player.move();
     this.handlePortalPosition();
     //the walls
     //handling the Collision characteristics of a wall object
     //in relationship to the characters
     for (let i = 0; i < this.wallArray.length; i++) {
       this.wallArray[i].handleCollision(this.player);
       this.wallArray[i].display();
     }
     this.player.display();
   }


//a function that handles the global variables related to portals. if health = the total number of portals visited the performance is over
   handlePortalPosition() {
     console.log("health : " + health);
     if (health === NUMBER_PORTALS) {
       currentScene = gameOverScene;
     }
//handling if the key is found
     key.handleFound(this.player);
// Here we would draw the game on the screen
     for (let i = 0; i < portalArray.length; i++) {
       portalArray[i].handleExit(this.player, key);
       portalArray[i].display();
     }
//display the key from a global variable
     key.display();
   }

   mousePressed() {
     // This will be called by the main program when it detects a mouse press
   }
 }

 //     x: 280,
 //     y: 65,
 //     width: 440,
 //     height: 5
 //   },
 //   {
 //     x: 55,
 //     y: 270,
 //     width: 5,
 //     height: 420
 //   },
 //   {
 //     x: 85,
 //     y: 475,
 //     width: 70,
 //     height: 5
 //   },
 //   {
 //     x: 125,
 //     y: 425,
 //     width: 5,
 //     height: 110
 //   },
 //   {
 //     x: 125,
 //     y: 270,
 //     width: 5,
 //     height: 120
 //   },
 //   {
 //     x: 90,
 //     y: 215,
 //     width: 60,
 //     height: 5
 //   },
 //   {
 //     x: 115,
 //     y: 165,
 //     width: 110,
 //     height: 5
 //   },
 //   {
 //     x: 115,
 //     y: 115,
 //     width: 110,
 //     height: 5
 //   },
 //   {
 //     x: 215,
 //     y: 130,
 //     width: 5,
 //     height: 40
 //   },
 //   {
 //     x: 235,
 //     y: 115,
 //     width: 50,
 //     height: 5
 //   },
 //   {
 //     x: 265,
 //     y: 170,
 //     width: 5,
 //     height: 100
 //   },
 //   {
 //     x: 210,
 //     y: 215,
 //     width: 100,
 //     height: 5
 //   },
 //   {
 //     x: 165,
 //     y: 275,
 //     width: 5,
 //     height: 110
 //   },
 //   {
 //     x: 220,
 //     y: 325,
 //     width: 100,
 //     height: 5
 //   },
 //   {
 //     x: 265,
 //     y: 295,
 //     width: 5,
 //     height: 50
 //   },
 //   {
 //     x: 240,
 //     y: 265,
 //     width: 60,
 //     height: 5
 //   },
 //   {
 //     x: 315,
 //     y: 95,
 //     width: 5,
 //     height: 50
 //   },
 //   {
 //     x: 395,
 //     y: 115,
 //     width: 150,
 //     height: 5
 //   },
 //   {
 //     x: 465,
 //     y: 170,
 //     width: 5,
 //     height: 100
 //   },
 //   {
 //     x: 485,
 //     y: 215,
 //     width: 30,
 //     height: 5
 //   },
 //   {
 //     x: 375,
 //     y: 165,
 //     width: 90,
 //     height: 5
 //   },
 //   {
 //     x: 415,
 //     y: 195,
 //     width: 5,
 //     height: 50
 //   },
 //   {
 //     x: 360,
 //     y: 215,
 //     width: 100,
 //     height: 10
 //   },
 //   {
 //     x: 365,
 //     y: 300,
 //     width: 10,
 //     height: 60
 //   },
 //   {
 //     x: 335,
 //     y: 275,
 //     width: 50,
 //     height: 10
 //   },
 //   {
 //     x: 315,
 //     y: 325,
 //     width: 10,
 //     height: 90
 //   },
 //   {
 //     x: 480,
 //     y: 265,
 //     width: 40,
 //     height: 10
 //   },
 //   {
 //     x: 415,
 //     y: 320,
 //     width: 10,
 //     height: 100
 //   },
 //   {
 //     x: 460,
 //     y: 325,
 //     width: 80,
 //     height: 10
 //   },
 //   {
 //     x: 315,
 //     y: 375,
 //     width: 210,
 //     height: 10
 //   },
 //   {
 //     x: 165,
 //     y: 435,
 //     width: 10,
 //     height: 130
 //   },
 //   {
 //     x: 215,
 //     y: 405,
 //     width: 10,
 //     height: 50
 //   },
 //   {
 //     x: 245,
 //     y: 425,
 //     width: 50,
 //     height: 10
 //   },
 //   {
 //     x: 365,
 //     y: 405,
 //     width: 10,
 //     height: 50
 //   },
 //   {
 //     x: 335,
 //     y: 425,
 //     width: 50,
 //     height: 10
 //   },
 //   {
 //     x: 315,
 //     y: 465,
 //     width: 10,
 //     height: 70
 //   },
 //   {
 //     x: 285,
 //     y: 475,
 //     width: 50,
 //     height: 10
 //   },
 //   {
 //     x: 215,
 //     y: 485,
 //     width: 10,
 //     height: 30
 //   }

 //array containing the walls
 // this.wallArray = [];
 // //the wall array
 // for (let i = 0; i < this.wallProperties.length; i++) {
 //   // let wall = new Wall(this.wallProperties[i].x, this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
 //   let wallNW = new Wall(this.wallProperties[i].y - 10, this.wallProperties[i].x + 10, this.wallProperties[i].height, this.wallProperties[i].width);
 //   let wallNE = new Wall(this.windowWidth / 2 + this.wallProperties[i].x - 30, this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
 //   let wallSW = new Wall(this.wallProperties[i].x + 300, this.windowHeight - this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
 //   let wallSE = new Wall(this.windowWidth - this.wallProperties[i].y, this.windowHeight - this.wallProperties[i].x, this.wallProperties[i].height, this.wallProperties[i].width);
 //   // let wallText= new Wall(this.windowWidth/2 + this.wallProperties[i].x-30,this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
 //
 //   this.wallArray.push(wallNW);
 //   this.wallArray.push(wallNE);
 //   this.wallArray.push(wallSW);
 //   this.wallArray.push(wallSE);
   // this.wallArray.push(wallText);
//   }

// let wallNE = new Wall(this.windowWidth/4 + this.wallProperties[i].x - 30, this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
// let wallSW = new Wall(this.wallProperties[i].x + 300, this.windowHeight - this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
// let wallSE = new Wall(this.windowWidth - this.wallProperties[i].y, this.windowHeight - this.wallProperties[i].x, this.wallProperties[i].height, this.wallProperties[i].width);
// let wallNW = new Wall (this.wallProperties[i].x, this.wallProperties[i].y, this.wallProperties[i].height, this.wallProperties[i].width);
// let wallNE = new Wall (this.wallProperties[i].x, this.wallProperties[i].y, this.wallProperties[i].height, this.wallProperties[i].width);
// let wallSW = new Wall (this.wallProperties[i].x, this.wallProperties[i].y, this.wallProperties[i].height, this.wallProperties[i].width);
// let wallSE = new Wall (this.wallProperties[i].x, this.wallProperties[i].y, this.wallProperties[i].height, this.wallProperties[i].width);
