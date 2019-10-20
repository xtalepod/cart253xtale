"use strict";

/******************************************************************************
WHERE IS DOG?
modified by christale terris

a wheres waldo style game with a corgi as the target

Animal images from:
google image search
******************************************************************************/

// Position and image of the dog we're searching for and winning
//variables in two dimensions
let targetX;
let targetY;
let tx;
let ty;
let targetImage;

//Font for winning text
let myFont;

//Difficulty variables
//target size decrease and decoy increases

let size = 0;

// The ten decoy images
let decoyImage1;
let decoyImage2;
let decoyImage3;
let decoyImage4;
let decoyImage5;
let decoyImage6;
let decoyImage7;
let decoyImage8;
let decoyImage9;
let decoyImage10;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
let numDecoys = 100;

// Keep track of whether they've won
let gameOver = false;

// preload()
//
// Loads the target and decoy images before the program starts
function preload() {
  targetImage = loadImage("assets/wowtarget.png");
  decoyImage1 = loadImage("assets/wowdog1.png");
  decoyImage2 = loadImage("assets/wowsnail2.png");
  decoyImage3 = loadImage("assets/wowsquirl3.png");
  decoyImage4 = loadImage("assets/wowsquid4.png");
  decoyImage5 = loadImage("assets/wowkitten5.png");
  decoyImage6 = loadImage("assets/wowcorgi6.png");
  decoyImage7 = loadImage("assets/wowfrog7.png");
  decoyImage8 = loadImage("assets/wowmoth8.png");
  decoyImage9 = loadImage("assets/wowhotdog9.png");
  decoyImage10 = loadImage("assets/wowbird10.png");
  myFont = loadFont("assets/spaceage.ttf");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(900, 500);
  background(255, 192, 203);
  imageMode(CENTER);

  // Use a for loop to draw as many decoys as we need
  for (let i = 0; i < numDecoys; i++) {
    // Choose a random location on the canvas for this decoy
    let x = random(0, width);
    let y = random(0, height);
    // Generate a random number we can use for probability
    let r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough.
    // But basically each "if" and "else if" has a 10% chance of being
true
    if (r < 0.1) {
      image(decoyImage1, x, y);
    } else if (r < 0.2) {
      image(decoyImage2, x, y);
    } else if (r < 0.3) {
      image(decoyImage3, x, y);
    } else if (r < 0.4) {
      image(decoyImage4, x, y);
    } else if (r < 0.5) {
      image(decoyImage5, x, y);
    } else if (r < 0.6) {
      image(decoyImage6, x, y);
    } else if (r < 0.7) {
      image(decoyImage7, x, y);
    } else if (r < 0.8) {
      image(decoyImage8, x, y);
    } else if (r < 0.9) {
      image(decoyImage9, x, y);
    } else if (r < 1.0) {
      image(decoyImage10, x, y);
    }
  }

  // Once we've displayed all decoys, we choose a random location for
the target
  targetX = random(0, width);
  targetY = random(0, height);

  // And draw it (because it's the last thing drawn, it will always be
on top)
  image(targetImage, targetX, targetY);
}

// draw()
//
// Displays the game over screen if the player has won,
// otherwise nothing (all the gameplay stuff is in mousePressed())
function draw() {
  colorMode(HSB, 100);
  //rectangle with rounded edges and slightly lighter pink background
push();
  rectMode(RIGHT, CENTER);
  rect(650, 20, 200, 150, 25);
  fill(255, 192, 210,0);
  strokeWeight(10);
  pop();
  //display for instructions
  //text to go inside the rectangle
  push();
  textFont("Helvetica");
  textSize(18);
  textAlign(RIGHT, CENTER);
  noStroke();
  fill(0);
  text("WHERE'S CORGI?", 838, 155)
  pop();
  //image that goes inside the rectangle
  push();
  image(targetImage, 748, 90);
  pop();
  if (gameOver) {
    // Prepare our typography
    push();
    textFont(myFont);
    textSize(128);
    textAlign(CENTER, CENTER);
    noStroke();
    fill(0);

    // Tell them they won!
    text("YOU WIN!", width / 2, height / 2);
    pop();

    // Draw a circle around the target to show where it is (even though
    // they already know because they found it!)
    //random embedded in stroke changes colors
    push();
    tx = random(0,100);
    ty = random(0,300);
    noFill();
    stroke(random(0, 200), 10, 100);
    strokeWeight(10);
    targetX = width *noise(tx);
    targetY = height *noise(ty);
    tx = +0.01
    ty = +0.01
    ellipse(targetX, targetY, targetImage.width, targetImage.height);
    //move the target
    image(targetImage, targetX, targetY);
    pop();
  }
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they
won
function mousePressed() {
  // The mouse was clicked!
  // Check if the cursor is in the x range of the target
  // (We're subtracting the image's width/2 because we're using
imageMode(CENTER) -
  // the key is we want to determine the left and right edges of the
image.)
  if (mouseX > targetX - targetImage.width / 2 && mouseX < targetX +
targetImage.width / 2) {
    // Check if the cursor is also in the y range of the target
    // i.e. check if it's within the top and bottom of the image
    if (mouseY > targetY - targetImage.height / 2 && mouseY < targetY +
targetImage.height / 2) {
      gameOver = true;
    }
  }
}