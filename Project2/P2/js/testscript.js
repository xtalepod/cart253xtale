//from testscript

//the fox and hedge hog are are non-traditional predators
//they appear on the screen as squares
//the hedgehog is very good at 1 thing: survival.
//the fox is good at many things to survive.
//the hedgehog and the fox move independantly of each other (allowing for 2 players)
//and interact differently with objects on the storyboard (playing field)
//get to know the hedgehog and the fox by visiting these objects

let hedgehog;
let fox;
let boxes = [];
let boxes1 = [];

//the stories are non-traditional prey
//they appear on the screen as squares with text that appears when the hedgehog of the fox overlap
//the story squares teach us about the hedgehog and the fox
//you are encouraged to collect stories by writing them down on paper
//its like a diy poem generator!

// the text
let storyIndex = [];

let foxBoxes = ["survival",
  "survival",
  "survival"
];

//for the text
let foxIndex = 0;

//the text
let hedgehogBoxes = ["survive",
  "survive",
  "survive"
];
//for the text
let hedgehogIndex = 0;


//**
//this game has 4 state screens: start, story telling, role playing//diy poetry,game over or reference
//****
//start state stuff

let state = "START"; //there is another way to do this

//****
//storytelling stuff

//an array to make rectangles which are the background and simulate a forest
//story arrays
//***
//0 story
let story0 = [
  "the fox knows",
  "many things",
  "but the hedgehog",
  "knows one big thing.",
  "--archilochus"
];

//0 index
let storyIndex0 = 0;

//1 story
let story1 = [
  "who would you",
  "rather be?",
  "better yet",
  "who are you?"
];

//1 index
let storyIndex1 = 0;

let trees = [100, 25, 6, 20];

//roleplaying//diy poetry stuff


//gameover or references state
let gameOver = false;

// let skyFall;
// let skyFallImage;
//
function preload() {
  // skyFallImage = loadImage("assets/images/cone.png");

}
// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
// constructor(x, y, w, h,fillColor, speed, upKey, downKey, rightKey, leftKey) {
  hedgehog = new TestH(60, 300, 40, 40, color(26, 255, 140), 2, UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW);
  // constructor(x, y,w,h, speed, radius, upKey, downKey, rightKey, leftKey) {
  fox = new TestF(100, 40, 70, 70, color(153, 255, 204), 2, 16, UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW);
  // (x, y, size, fillColor) {
push();
  for (let i = 0; i < 3; i++) {
    let x = 50 + 100 * i
    let y = 100 + 100 * i
    boxes[i] = new TestB(x, y, 40, color(255, 153, 153));

    for (let i = 0; i < 5; i++) {
      let x = 850 - 100 * i
      let y = 100 + 100 * i
      boxes1[i] = new TestB(x, y, 40, color(255, 153, 153));
    //   // cone1 = new TestSkyFalling(100,100,5,30,skyFallImage);
pop();
    }
  }
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(200);
  //
  // if (state === "START") {
  //   displayStartScreen();
  // }
  // else if (state === "STORY") {
  //   displayStoryScreen();
  //   // cone1.display();
  //   // cone1.move();
  // }
  // else if (state === "PLAY") {
  displayPlayScreen();
  for (let i = 0; i < 3; i++) {
    boxes[i].display();
    boxes[i].handleCollision(hedgehog);
    boxes[i].handleCollision(fox);
    // boxes[i].reset();
    }
  for (let i = 0; i < 2; i++) {
    boxes1[i].display();
    boxes1[i].handleCollision(hedgehog)
    boxes1[i].handleCollision(fox);
    // boxes1[i].reset();
    }

  //handle the input, movement, eating, and display for the hedgehog
    hedgehog.handleInput();
    hedgehog.move();
    hedgehog.display();
    // hedgehog.reset();
  //handle the input, movement, eating, and display for the fox
    fox.handleInput();
    fox.move();
    fox.display();
  // }
  // else if (state === "GAMEOVER") {
  //     showGameOver();
  // }
}
//
function mousePressed() {
  //click rectangle to start game and sound
  if (state === "START") {
    if (mouseX > width / 2 && mouseX < width * 2 && mouseY > height / 2 && mouseY < height * 2) {
      state = "STORY"
    }
  } else if (state === "STORY") {
    if (mouseX > width / 2 && mouseX < width * 2 && mouseY > height / 2 && mouseY < height * 2) {
      state = "PLAY";

    }
  }
}

//story state
function displayStoryScreen() {
  background(153, 255, 153)
  rectMode(CENTER, CENTER);
  fill(255);
  rect(width / 5, height / 3, 250, 150);
  fill(0);
  let phrase0 = story0[storyIndex0];
  textSize(20);
  textAlign(CENTER, CENTER);
  text(phrase0, width / 5, height / 3);
  textSize(20);
  textAlign(CENTER, CENTER);
  let phrase1 = story1[storyIndex1];
  textSize(20);
  textAlign(CENTER, CENTER);
  text(phrase1, width / 1.2, height / 1.2);
  push();
  // textAlign(RIGHT, RIGHT);
  fill(20);
  textFont('Courier New', [20]);
  textStyle(BOLD);
  text("click any key", width / 2, height / 1.1);
  pop();
  // corgi.move();
  // corgi.handleInput();
  // corgi.handleEating(cake1);
  // corgi.handleEating(cake2);
  // corgi.display();
  // cake1.move();
  // cake1.display();
}

//start state
function displayStartScreen() {
  background(250, 198, 180)

  push();
  textAlign(CENTER, CENTER);
  // textStyle(BOLD);
  fill(0);
  textFont('Courier New', [50]);
  text("THE HEDGEHOG AND THE FOX", width / 2, height / 2); // Title
  pop();

  push();
  // textAlign(RIGHT, RIGHT);
  fill(20);
  textFont('Courier New', [20]);
  textStyle(BOLD);
  text("start", width / 1.1, height / 1.1); //**COULD BE A BUTTON
  pop();
}


function displayPlayScreen() {
push();
  for (let i = 0; i < 10; i++) {
    x = i * 0.5 + 50
    y = i * 40 + 40
    rect(10, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 60, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 100, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 150, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 200, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 250, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 300, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 350, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 400, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 450, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 500, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 550, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 600, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 650, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 700, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 750, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 800, i * 40 + 40, trees[2], trees[3])
    rect(i * .05 + 850, i * 40 + 40, trees[2], trees[3])
  }
pop();
}

function keyPressed() {
  storyIndex0 += 1;
  storyIndex1 += 1;
  if (storyIndex0 >= story0.length) {
    storyIndex0 = 0;
    if (storyIndex1 >= story1.length) {
      storyIndex1 = 0;
    }
  }
}
