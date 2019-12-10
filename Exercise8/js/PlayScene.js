 class PlayScene extends Scene {
   constructor(image) {
     super();
     this.windowWidth = width;
     // this.windowWidth = windowWidth;
     this.windowHeight = height;
     // this.windowHeight = windowHeight;
     this.image = image;
     this.mussleImage = loadImage("assets/images/textures/shells.png");

//an index and an array for the phrases that will appear when the player touches the walls
this.phrasesIndex = 0;
this.phrases = [
  "once i am dead",
  "to the left and right",
  "this illusionary duplication",
  "sinks abysmally and soars",
  "fathomless air; my body"
];

//information related to Picture objects including: 3 arrays, the number of pictures to display, and a for loop to set up the word array that determins position, velocity, radius, color, and declration of a new word
// adapted from https://github.com/pippinbarr/cart253-2019/blob/master/modules/core-arrays/core-arrays.md

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
     this.player = new Player(820, 666, 6, color(255, 195, 195), 35);
     this.player2 = new Player(165, 300, 6, color(221, 153, 255), 25)
     //array containing the informations for the walls in this level

     this.cube1x = 30
     this.cube1y = 30

     this.cube0x = 90
     this.cube0y = 60

     this.wallProperties = [
     {x:	180	, y:	35	, width:	300	, height:	10, fillColor: 0},
     {x:	180	, y:	295	, width:	300	, height:	10, fillColor: 0},
     {x:	35	, y:	165	, width:	10	, height:	250, fillColor: 0},
     {x:	325	, y:	165	, width:	10	, height:	250, fillColor: 0},
   ];

     this.wallArray = [];
  // //the wall arrays and their properties which looks cube-ish in this level
     for (let i = 0; i < this.wallProperties.length; i++) {
         let cube1 = new Wall(this.wallProperties[i].x + this.cube1x, this.wallProperties[i].y + this.cube1y, this.wallProperties[i].width, this.wallProperties[i].height,this.wallProperties[i].fillColor);
         this.wallArray.push(cube1);
         let cube0 = new Wall(this.wallProperties[i].y + this.cube0x, this.wallProperties[i].x + this.cube0y, this.wallProperties[i].height, this.wallProperties[i].width,this.wallProperties[i].fillColor);
         this.wallArray.push(cube0);
     }

this.cube2x = 560;
this.cube2y = 400;

this.cube3x = 100;
this.cube3y = 500;

     this.wallProperties2 = [
     {x:	180	, y:	35	, width:	250	, height:	10, fillColor: 0	},
     {x:	180	, y:	295	, width:	250	, height:	10,fillColor: 0	},
     {x:	230	, y:	200	, width:	10	, height:	200, fillColor: 0	},
     {x:	300	, y:	165	, width:	10	, height:	250, fillColor: 0	}
   ];
     this.wallArray2 = [];
     // //the wall array which looks like a cube of sorts in this level
     for (let i = 0; i < this.wallProperties2.length; i++) {
         let cube2 = new Wall(this.wallProperties2[i].x + this.cube2x, this.wallProperties2[i].y + this.cube2y, this.wallProperties2[i].width, this.wallProperties2[i].height,this.wallProperties2[i].fillColor);
         let cube3 = new Wall(this.wallProperties2[i].y + this.cube3x, this.wallProperties2[i].x + this.cube3y, this.wallProperties2[i].height, this.wallProperties2[i].width, this.wallProperties2[i].fillColor);
         this.wallArray2.push(cube2);
         this.wallArray2.push(cube3);
     }


         this.mazeProperties = [
           { x: 280,
             y: 65,
             width: 440,
             height: 10
           },
           {
             x: 55,
             y: 270,
             width: 10,
             height: 420
           },
           {
             x: 85,
             y: 475,
             width: 70,
             height: 10
           },
           {
             x: 125,
             y: 425,
             width: 10,
             height: 110
           },
           {
             x: 125,
             y: 270,
             width: 10,
             height: 120
           },
           {
             x: 90,
             y: 215,
             width: 60,
             height: 10
           },
           {
             x: 115,
             y: 165,
             width: 110,
             height: 10
           },
           {
             x: 115,
             y: 115,
             width: 110,
             height: 10
           },
           {
             x: 215,
             y: 130,
             width: 10,
             height: 40
           },
           {
             x: 235,
             y: 115,
             width: 50,
             height: 10
           },
           {
             x: 265,
             y: 170,
             width: 10,
             height: 100
           },
           {
             x: 210,
             y: 215,
             width: 100,
             height: 10
           },
           {
             x: 165,
             y: 275,
             width: 10,
             height: 110
           },
           {
             x: 220,
             y: 325,
             width: 100,
             height: 10
           },
           {
             x: 265,
             y: 295,
             width: 10,
             height: 50
           },
           {
             x: 240,
             y: 265,
             width: 60,
             height: 10
           },
           {
             x: 315,
             y: 95,
             width: 10,
             height: 50
           },
           {
             x: 395,
             y: 115,
             width: 150,
             height: 10
           },
           {
             x: 465,
             y: 170,
             width: 10,
             height: 100
           },
           {
             x: 485,
             y: 215,
             width: 30,
             height: 10
           },
           {
             x: 375,
             y: 165,
             width: 90,
             height: 10
           },
           {
             x: 415,
             y: 195,
             width: 10,
             height: 50
           },
           {
             x: 360,
             y: 215,
             width: 100,
             height: 10
           },
           {
             x: 365,
             y: 300,
             width: 10,
             height: 60
           },
           {
             x: 335,
             y: 275,
             width: 50,
             height: 10
           },
           {
             x: 315,
             y: 325,
             width: 10,
             height: 90
           },
           {
             x: 480,
             y: 265,
             width: 40,
             height: 10,
           },
           {
             x: 415,
             y: 320,
             width: 10,
             height: 100
           },
           {
             x: 460,
             y: 325,
             width: 80,
             height: 10
           },
           {
             x: 315,
             y: 375,
             width: 210,
             height: 10
           },
           {
             x: 165,
             y: 435,
             width: 10,
             height: 130
           },
           {
             x: 215,
             y: 405,
             width: 10,
             height: 50
           },
           {
             x: 245,
             y: 425,
             width: 50,
             height: 10
           },
           {
             x: 365,
             y: 405,
             width: 10,
             height: 50
           },
           {
             x: 335,
             y: 425,
             width: 50,
             height: 10
           },
           {
             x: 315,
             y: 465,
             width: 10,
             height: 70
           },
           {
             x: 285,
             y: 475,
             width: 50,
             height: 10
           },
           {
             x: 215,
             y: 485,
             width: 10,
             height: 30
           }
       ];

       this.mazeArray = [];
       // //the maze array
       for (let i = 0; i < this.mazeProperties.length; i++) {
         let wall = new Wall(this.mazeProperties[i].x, this.mazeProperties[i].y, this.mazeProperties[i].width, this.mazeProperties[i].height, 0);
         // let wallNW = new Wall(this.mazeProperties[i].y - 10, this.mazeProperties[i].x + 10, this.mazeProperties[i].height, this.mazeProperties[i].width);
         // let wallNE = new Wall(this.windowWidth / 2 + this.mazeProperties[i].x - 30, this.mazeProperties[i].y, this.mazeProperties[i].width, this.mazeProperties[i].height);
         // let wallSW = new Wall(this.mazeProperties[i].x + 300, this.windowHeight - this.mazeProperties[i].y, this.mazeProperties[i].width, this.mazeProperties[i].height);
         // let wallSE = new Wall(this.windowWidth - this.mazeProperties[i].y, this.windowHeight - this.mazeProperties[i].x, this.mazeProperties[i].height, this.mazeProperties[i].width);
         this.mazeArray.push(wall);
         // this.wallArray.push(wallNE);
         // this.wallArray.push(wallSW);
         // this.wallArray.push(wallSE);
        }
   }

   draw() {

     background(this.image);

     portalArray[0].x = 180 + this.cube1x ;
     portalArray[0].y = 35 + 250/2 + this.cube1y;
     // portalArray[0].nextState = worldThree;
     portalArray[0].radius = 70;

     portalArray[1].x = 250/2 + this.cube2x;
     // portalArray[1].x = 560
     portalArray[1].y = 35 + 270/2 + this.cube2y;
     // portalArray[1].y = 545
     portalArray[1].nextState = worldThree;
     portalArray[1].radius = 60;

     key.x = 370;
     key.y = 761
  //display the key from a global variable
          key.display();

push();
     for (let i = 0; i < this.pictureArray.length; i++) {
       this.pictureArray[i].move();
       this.pictureArray[i].handleWrapping();
       this.pictureArray[i].display();
     }
pop();

   // Move all the players and handle their input
      this.player.handleInput();
      this.player.move();
      // console.log("this.player.move" + this.player.x + this.player.y);

      this.player2.handleInput();
      this.player2.move();
     this.handlePortalPosition();
     //the walls
     //handling the Collision characteristics of a wall object
     //in relationship to the characters
     for (let i = 0; i < this.wallArray.length; i++) {
       this.wallArray[i].handleCollision(this.player);
       this.wallArray[i].display();
     }
     //handle collision for the player stuck in the box
     // for (let i = 0; i < this.wallArray.length; i++) {
     //   this.wallArray[i].handleCollision(this.player2);
     // }

     for (let i = 0; i < this.wallArray2.length; i++) {
       this.wallArray2[i].handleCollision(this.player);
       this.wallArray2[i].display();
     }

     textSize(50);
     text(this.phrases[this.phrasesIndex], width/2, height / 2)
 //handle the collision between the wall and the player + check for collision and IF true then move through phraseIndex array
     for (let i = 0; i < this.wallArray.length; i++) {
       let isColliding = this.wallArray[i].handleCollision(this.player2);
        console.log(isColliding);
       if (isColliding == true) {
         // console.log("are we here");
         if (this.phrasesIndex < this.phrases.length - 1) {
           this.phrasesIndex += 1;
         } else {
           this.phrasesIndex = 0;
         }
       }
       this.wallArray[i].handleCollision(this.player);
       this.wallArray[i].display();
     }

      this.player.display();
      this.player2.display();
 }

//a function that handles the global variables related to portals. if health = the total number of portals visited the performance is over
   handlePortalPosition() {
     // console.log("health : " + health);
     if (health === NUMBER_PORTALS) {
       currentScene = worldOne;
     }
//handling if the key is found
     key.handleFound(this.player);
// Here we would draw the game on the screen
     for (let i = 0; i < portalArray.length; i++) {
       portalArray[i].handleExit(this.player, key);
       portalArray[i].display();
     }
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
