//IMPORTANT FOR LATER WORLD TWO DONT FUCK WITH THIS
// class WorldTwo extends PlayScene {
//   constructor() {
//     super();
//     this.backgroundColor = color(255, 190, 190);
// //information related to wall and player collision for this world. Includes an index and an array of words.
//     this.phrasesIndex = 0;
//     this.phrases = [
//       "once i am dead",
//       "to the left and right",
//       "this illusionary duplication",
//       "sinks abysmally and soars",
//       "fathomless air; my body"
//     ];
//
// //information related to Word objects including: 3 arrays, the number of words to display, and a for loop to set up the word array that determins position, velocity, radius, color, and declration of a new word
// // adapted from https://github.com/pippinbarr/cart253-2019/blob/master/modules/core-arrays/core-arrays.md
//     // this.catchWordsIndex = 0;
//     this.catchWords = [
//       "life",
//       "is",
//       "like",
//       "a",
//       "box",
//       "of",
//       "chocolates"
//     ];
//     this.numWords = 50;
//     this.wordsArray = [];
//     for (let i = 0; i < this.numWords; i++) {
//       let x = random(-5, width);
//       let y = random(5, height);
//       let speed = random(-1, 1);
//       let colorWord = color(random(255), random(255), random(255));
//       let radius = random(1, 4);
//       let wordText = this.catchWords[Math.floor(random(this.catchWords.length))];
//       this.wordsArray.push(new Word(x, y, speed, colorWord, radius, wordText));
//     }
//
// //information related to Wall objects including properties for building a wall maze, an array, and a for loop
//     this.wallProperties = [{
//         x: 400,
//         y: 100 + 30,
//         width: 20,
//         height: 30,
//       },
//       {
//         x: 200,
//         y: 200,
//         width: 200,
//         height: 30
//       },
//       {
//         x: 400,
//         y: 100 + 30,
//         width: 20,
//         height: 30,
//       },
//       {
//         x: 200,
//         y: 200,
//         width: 200,
//         height: 30
//       },
//     ];
//     this.wallArray = [];
//     for (let i = 0; i < this.wallProperties.length; i++) {
//       let wall = new Wall(this.wallProperties[i].x + 50, this.wallProperties[i].y + 60, this.wallProperties[i].width, this.wallProperties[i].height);
//       this.wallArray.push(wall);
//     }
//     this.angle = 0;
//   }
//
//
// //draw function for this world, includes all the action oriented details related to words, the player, the walls
//   draw() {
//     background(this.backgroundColor);
//     for (let i = 0; i < this.wordsArray.length; i++) {
//       this.wordsArray[i].display();
//       this.wordsArray[i].move();
//       this.wordsArray[i].handleWrapping();
//       // this.wordsArray[i].handleCollision(this.player);
//     }
//
// //setting the player functions
//     this.player.handleInput();
//     this.player.move();
// //setting the portalProperties to change position and states
//     portalArray[0].x = 150;
//     portalArray[0].y = 50;
//     portalArray[0].nextState = worldOne;
//     portalArray[1].x = 150;
//     portalArray[1].y = 200;
//     portalArray[1].nextState = worldThree;
//     this.handlePortalPosition();
// //setting the specific key location for this world
// push();
//     key.x = 100;
//     key.y = 250;
//     key.size = 50;
// pop();
// //information for the text that appears when the player touches the walls
//     textSize(30);
//     text(this.phrases[this.phrasesIndex], 40, height / 2)
// //handle the collision between the wall and the player + check for collision and IF true then move through phraseIndex array
//     for (let i = 0; i < this.wallArray.length; i++) {
//       let isColliding = this.wallArray[i].handleCollisionPortalOne(this.player);
//       if (isColliding == true) {
//         if (this.phrasesIndex < this.phrases.length - 1) {
//           this.phrasesIndex += 1;
//         } else {
//           this.phrasesIndex = 0;
//         }
//       }
//       this.wallArray[i].handleCollision(this.player);
//       this.wallArray[i].display();
//     }
//       this.player.display();
//   }
//
// // a function that handles which portal we're entering
//   handlePortalPosition() {
//     super.handlePortalPosition();
//   }
//IMPORTANT FOR LATER WORLD TWO CODE DONT FUCK W THIS


//INFORMATION REGARDING THE MAZE QYNN AND I BUILT PLUS ARRAYS

     //
     // this.mazeProperties = [{
     //     x: 280,
     //     y: 65,
     //     width: 440,
     //     height: 10
     //   },
     //   {
     //     x: 55,
     //     y: 270,
     //     width: 10,
     //     height: 420
     //   },
     //   {
     //     x: 85,
     //     y: 475,
     //     width: 70,
     //     height: 10
     //   },
     //   {
     //     x: 125,
     //     y: 425,
     //     width: 10,
     //     height: 110
     //   },
     //   {
     //     x: 125,
     //     y: 270,
     //     width: 10,
     //     height: 120
     //   },
     //   {
     //     x: 90,
     //     y: 215,
     //     width: 60,
     //     height: 10
     //   },
     //   {
     //     x: 115,
     //     y: 165,
     //     width: 110,
     //     height: 10
     //   },
     //   {
     //     x: 115,
     //     y: 115,
     //     width: 110,
     //     height: 10
     //   },
     //   {
     //     x: 215,
     //     y: 130,
     //     width: 10,
     //     height: 40
     //   },
     //   {
     //     x: 235,
     //     y: 115,
     //     width: 50,
     //     height: 10
     //   },
     //   {
     //     x: 265,
     //     y: 170,
     //     width: 10,
     //     height: 100
     //   },
     //   {
     //     x: 210,
     //     y: 215,
     //     width: 100,
     //     height: 10
     //   },
     //   {
     //     x: 165,
     //     y: 275,
     //     width: 10,
     //     height: 110
     //   },
     //   {
     //     x: 220,
     //     y: 325,
     //     width: 100,
     //     height: 10
     //   },
     //   {
     //     x: 265,
     //     y: 295,
     //     width: 10,
     //     height: 50
     //   },
     //   {
     //     x: 240,
     //     y: 265,
     //     width: 60,
     //     height: 10
     //   },
     //   {
     //     x: 315,
     //     y: 95,
     //     width: 10,
     //     height: 50
     //   },
     //   {
     //     x: 395,
     //     y: 115,
     //     width: 150,
     //     height: 10
     //   },
     //   {
     //     x: 465,
     //     y: 170,
     //     width: 10,
     //     height: 100
     //   },
     //   {
     //     x: 485,
     //     y: 215,
     //     width: 30,
     //     height: 10
     //   },
     //   {
     //     x: 375,
     //     y: 165,
     //     width: 90,
     //     height: 10
     //   },
     //   {
     //     x: 415,
     //     y: 195,
     //     width: 10,
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
     //     height: 10,
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
   //   }
   // }
   // //INFORMATION REGARDING THE MAZE QYNN AND I BUILT PLUS ARRAYS


// this.catchShape = [];
// this.numShapes = 5;
// this.shapeArray = [];
// for (let i = 0; i < this.numShapes; i ++) {
//   let x = random(width + 100, height + 100);
//   let y = random(width,height);
//   // let speed = random(-2,20);
//   let radius = random(5,10);
//   let shapeDisplay = this.catchShape[Math.floor(random(this.catchShape.length))];
//   this.shapeArray.push(new Shape(x, y, radius, npoints);
// }


//   function setUpShapes() {
//     //   //array containing the informations of the portals
//     let shapeProperties = [{
//         x: windowWidth / 2,
//         y: windowHeight / 2,
//         radius: 20,
//         npoints: 6,
//       },
//       {
//         x: windowWidth / 1.5,
//         y: windowHeight / 2,
//         radius: 20,
//         npoints: 6,
//       },
//     ];
//
//     //a for loop for the portals
//     for (let i = 0; i < shapeProperties.length; i++) {
//       let shape = new Portal(shapeProperties[i].x, shapeProperties[i].y, shapeProperties[i].radius, shapeProperties[i].npoints, worldArray[i]);
//       shapeArray.push(portal);
//     }
// }


  // portalArray[0].fillColor = color(0);
  //
  // FROM TITLE SCENE MOVING IMAGES WITH SEB
  // image(this.titleSceneImages[2],400,400,400,400)
  // image(this.titleSceneImages[this.random1],250,250,250,250);
  // image(this.titleSceneImages[this.random2],width/5,height/2,100,500);


  // let r = floor(random(0,this.titleSceneImages.length));
  // image( this.titleSceneImages[r],width/4,250,400,200);
  // r = floor(random(0,this.titleSceneImages.length));
  // image( this.titleSceneImages[r],width/4,25,40,500);
