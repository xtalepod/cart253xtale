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
let storySquares;

//the stories are non-traditional prey
//they appear on the screen as squares with text that appears when the hedgehog of the fox overlap
//the story squares teach us about the hedgehog and the fox
//you are encouraged to collect stories by writing them down on paper
//its like a diy poem generator!

let storyIndex = [];
let storySquaresFox = ["survival",
"survival",
"survival"
];

let foxStoryIndex = 0;

let storySquaresHedgehog = ["survive",
"survive",
"survive"
];

let hedgehogStoryIndex = 0;


//**
//this game has 4 state screens: start, story telling, role playing//diy poetry,game over or reference
//****
//start state stuff

let state ="START";//there is another way to do this

//****
//storytelling stuff

//an array to make rectangles which are the background and simulate a forest
//story arrays
//***
//0 story
let storyTelling0 = [
  "the fox knows",
  "many things",
  "but the hedgehog",
  "knows one big thing.",
  "--archilochus"
];

//0 index
let storyIndex0 = 0;

//1 story
let storyTelling1 = [
  "who would you",
  "rather be?",
  "better yet",
  "who are you?"
];

//1 index
let storyIndex1 = 0;

let trees = [100,25,6,20];

//roleplaying//diy poetry stuff


//gameover or references state
let gameOver = false;

// let skyFall;
// let skyFallImage;
//
// //the superPrey
//
// let tommy;
// let tommyImage1;
//
// //the prey
//
// let cake1;
// let cake2;
// let cakeImage;
//
// //the Predator
//
// let corgi;
// let corgiImage;
//
// //background image
// let startImage;

//
function preload () {
  // tommyImage1 = loadImage("assets/images/tommyboy3.png");
  // cakeImage = loadImage("assets/images/cake2.png");
  // corgiImage = loadImage("assets/images/corgipic.jpg");
  // startImage = loadImage("assets/images/cloud.png");
  // skyFallImage = loadImage("assets/images/cone.png");

}
// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);

fox = new Fox ();

// constructor(x, y, speed, radius, upKey, downKey, rightKey, leftKey) {
hedgehog = new Hedgehog (25, 250, 2, 30, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW);
// constructor(x, y, speed, radius, upKey, downKey, rightKey, leftKey) {
fox = new Fox (50, 50, 2, 40, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW)
//x y fillColor radius
storySquares = new StorySquares (80,40,color(255, 100, 10),10);
  // corgi = new Predator(100, 100, 5, 30, corgiImage, 38,40,39,37);
  // cake1 = new Prey(100, 100, 0.1, 100, cakeImage);
  // cake2 = new Prey(100, 100, 5, 40, cakeImage);
  // tommy = new PreySuper(50,50,4,20,tommyImage1);
  // cone1 = new TestSkyFalling(100,100,5,30,skyFallImage);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(200);

  if (state === "START") {
    displayStartScreen();
  }
  else if (state === "STORY") {
    displayStoryScreen();
    // cone1.display();
    // cone1.move();
  }
  else if (state === "PLAY") {
    displayPlayScreen();

    //handle the display for the storySquares
    storySquares.display();

    //handle the input, movement, eating, and display for the hedgehog
      hedgehog.handleInput();
      hedgehog.move();
      hedgehog.handleEating(storySquares);
      hedgehog.display();
    //handle the input, movement, eating, and display for the fox
      fox.handleInput();
      fox.move();
      fox.handleEating(storySquares);
      fox.display();
    // tommy.move();
    // tommy.handleWrapping();
    // tommy.handleEating(corgi);
    // tommy.display();
    //
    // corgi.move();
    // corgi.handleInput();
    // corgi.handleEating(tommy);
    // corgi.handleEating(cake1);
    // corgi.handleEating(cake2);
    // corgi.display();

    // cake1.move();
    // cake1.handleWrapping();
    // cake1.display();
    // cake1.reset();


  }
  else if (state === "GAMEOVER") {
      showGameOver();
  }
}
//
function mousePressed() {
  //click rectangle to start game and sound
  if (state === "START") {
    if (mouseX > width/2 && mouseX < width*2 && mouseY > height/2 && mouseY < height*2) {
      state = "STORY"
    }
   }
  else if (state === "STORY") {
    if (mouseX > width/2 && mouseX < width*2 && mouseY > height/2 && mouseY < height*2) {
      state = "PLAY";

  }
  }
}


//story state
function displayStoryScreen() {
  background(153, 255, 153)
  rectMode(CENTER, CENTER);
  fill(255);
  rect(width/5, height/3, 250, 150);
  fill(0);
  let phrase0 = storyTelling0[storyIndex0];
    textSize(20);
    textAlign(CENTER,CENTER);
    text(phrase0, width/5,height/3);
    textSize(20);
    textAlign(CENTER,CENTER);
  let phrase1 = storyTelling1[storyIndex1];
      textSize(20);
      textAlign(CENTER,CENTER);
      text(phrase1, width/1.2,height/1.2);
  push();
        // textAlign(RIGHT, RIGHT);
      fill(20);
      textFont('Courier New',[20]);
      textStyle(BOLD);
      text("click any key", width/2, height/1.1);
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
  background(250,198,180)

push();
  textAlign(CENTER, CENTER);
  // textStyle(BOLD);
  fill(0);
  textFont('Courier New',[50]);
  text("THE HEDGEHOG AND THE FOX", width/2, height/2); // Title
pop();

push();
  // textAlign(RIGHT, RIGHT);
  fill(20);
  textFont('Courier New',[20]);
  textStyle(BOLD);
  text("start", width/1.1, height/1.1); //**COULD BE A BUTTON
pop();
}


function displayPlayScreen() {
  for (let i = 0; i < 10; i++) {
    x = i * 0.5 + 50
    y= i * 40 + 40
  rect(10, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 60, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 100, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 150, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 200, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 250, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 300, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 350, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 400, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 450, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 500, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 550, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 600, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 650, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 700, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 750, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 800, i * 40 + 40, trees[2],trees[3])
  rect(i * .05 + 850, i * 40 + 40, trees[2],trees[3])
  }
}
function keyPressed() {
  storyIndex0 +=1;
  storyIndex1 +=1;
  if (storyIndex0 >= storyTelling0.length){
    storyIndex0 = 0;
    if (storyIndex1 >= storyTelling1.length){
      storyIndex1 = 0;
  }
}
}
