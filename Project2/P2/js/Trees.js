class Trees {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, w, h) {
    // Position
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // this.fillColor = fillColor;
    console.log("nofill")
    // this.units = units;
    // this.numTree = units;

  }

  display() {
    push();
    fill(100,255,60);
    rect(this.x,this.y,this.w,this.h);
    pop();
  }
}

//
// rect(10, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 60, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 100, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 150, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 200, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 250, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 300, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 350, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 400, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 450, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 500, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 550, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 600, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 650, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 700, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 750, i * 40 + 40, trees[2],trees[3])
// rect(i * .05 + 800, i * 40 + 40, trees[2],trees[3])
// // rect(i * .05 + 850, i * 40 + 40, trees[2],trees[3])

// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.


// //states
//
// let state ="START";
// let gameOver = false;
//
// // let skyFall;
// // let skyFallImage;
// //
// // //the superPrey
// //
// // let tommy1;
// // let tommyImage1;
// //
// // //the prey
// //
// // let cake1;
// // let cake2;
// // let cakeImage;
// //
// // //the Predator
// //
// // let corgi1;
// // let corgiImage;
//
// //players
// let hedgehog;
// //let fox;
//
// //arrays
// //story screen array
// let storyTelling = [
//   "the fox knows",
//   "many things",
//   "but the hedgehog",
//   "knows one big thing.",
//   "--archilochus"];
// let currentStoryIndex = 0;
// //storytelling array 2
// let storyTelling2 = [
//   "who would you",
//   "rather be?",
//   "better yet",
//   "who are you?"
// ]
// let currentStoryIndex2 = 0;
// //tree array
// //
// // let units = 10;
// // let numTree = 80
// let trees = [100,25,6,20];
// // let trees2 = [];
// // let trees3 = [];
// // let trees4 = [];
// // let trees5 = [];
// // let trees6 = [];
//
//
// // //
// function preload () {
//   hedgehog = loadImage("assets/images/hedgehog.png");
// }
// // setup()
// //
// // Sets up a canvas
// // Creates objects for the predator and three prey
// function setup() {
//   createCanvas(windowWidth, windowHeight);
// //set up trees for play state, make them start 20 pixels in and be spaced 100 apart
// //adapted from p5.js video by daniel shiffman
//   for (let i = 0; i < 10; i++) {
//     x = i * 0.5 + 50;
//     y = i * 40 + 40;
//     rect(x, y, trees[2],trees[3])
//    trees[i] = new Trees (x, y, 20, color(0,20,20));
//    // trees2[i] = new Trees (10, 45 + 25 * i, 4,20,color(0,20,20));
//    // trees2[i] = new Trees (10, 45 + 25 * i, 4,20,color(0,20,20));
//    // trees3[i] = new Trees (60, 45 + 25 * i ,4,20,color(0,20,20));
//    // trees4[i] = new Trees (70 + 10 * i, 90,4,20,color(0,20,20));
//    // trees5[i] = new Trees (70 + 10 * i, 90,4,20);
//    // trees6[i] = new Trees (70 + 10 * i, 90,4,20);
//    // trees2[i] = new Trees (x,y,30,30);
//   }
// }
//
// // draw()
// //
// // Handles input, movement, eating, and displaying for the system's objects
// function draw() {
//   // Clear the background to black
//   background(0);
//
//   // if (state === "START") {
//   //   displayStartScreen();
//   // }
//   // else if (state === "STORY") {
//   //   displayStoryScreen();
//   // }
//   // else if (state === "PLAY") {
//   // background(150,255,190);
//   for (let i = 0; i < 10; i++) {
//   // for (let i = 0; i < trees.length; i++) {
//   //   // And for each one, move it and display it
//     // trees[i].display();
//     // trees2[i].display();
//     // trees3[i].display();
//     // trees4[i].display();
//     // displayPlayScreen();
//   }
// }
//   // else if (state === "GAMEOVER") {
//   //     showGameOver();
//   // }
// // }
// // }
// //
// function mousePressed() {
//   //click rectangle to start game and sound
//   if (state === "START") {
//     if (mouseX > width/2 && mouseX < width*2 && mouseY > height/2 && mouseY < height*2) {
//       state = "STORY"
//     }
//    }
//   else if (state === "STORY") {
//     if (mouseX > width/2 && mouseX < width*2 && mouseY > height/2 && mouseY < height*2) {
//       state = "PLAY";
//
//   }
//   }
// }
//
// function displayStoryScreen() {
//   background(153, 255, 153)
//   rectMode(CENTER, CENTER);
//   fill(255);
//   rect(width/5, height/3, 250, 150);
//   fill(0);
//   let phrases = storyTelling[currentStoryIndex];
//     textSize(20);
//     textAlign(CENTER,CENTER);
//     text(phrases, width/5,height/3);
//     textSize(20);
//     textAlign(CENTER,CENTER);
//   let phrase2 = storyTelling2[currentStoryIndex2];
//       textSize(20);
//       textAlign(CENTER,CENTER);
//       text(phrase2, width/1.2,height/1.2);
// }
//
//
// //start state
// function displayStartScreen() {
//   background(180)
//   // image(hedgehog, width/2, height/2)
//   textAlign(CENTER, CENTER);
//   textStyle(BOLD);
//   fill(255, 105, 180);
//   textSize(30);
//   text("HEDGEHOG AND FOX", width/2, height/5); // Title
//   fill(20);
//   textSize(17);
//   textStyle(BOLD);
//   text("//once upon a time...click anywhere", width/2, height/4); // easy button
//   console.log("are we here");
// }
//
// function displayPlayScreen() {
//
// }
// function keyPressed() {
//   currentStoryIndex +=1;
//   currentStoryIndex2 +=1;
//   if (currentStoryIndex >= storyTelling.length){
//     currentStoryIndex = 0;
//     if (currentStoryIndex2 >= storyTelling2.length){
//       currentStoryIndex2 = 0;
//   }
// }
// }
//
