// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.


//states

let state ="START";
let gameOver = false;

let skyFall;
let skyFallImage;

//the superPrey

let tommy1;
let tommyImage1;

//the prey

let cake1;
let cake2;
let cakeImage;

//the Predator

let corgi1;
let corgiImage;

//background image
let startImage;

//
function preload () {
  tommyImage1 = loadImage("assets/images/tommyboy3.png");
  cakeImage = loadImage("assets/images/cake2.png");
  corgiImage = loadImage("assets/images/corgipic.jpg");
  startImage = loadImage("assets/images/cloud.png");
  skyFallImage = loadImage("assets/images/cone.png");
  console.log('preload done');
}
// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  cake1 = new TestPrey(100, 100, 5, 100, cakeImage);
  cake2 = new TestPrey(100, 100, 5, 40, cakeImage);
  corgi1 = new TestPredator(100, 100, 5, 30, corgiImage, 38,40,39,37);
  tommy1 = new PreySuperTest(50,50,4,20,tommyImage1);
  cone1 = new TestSkyFalling(100,100,5,30,skyFallImage);
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
    cone1.display();
    cone1.move();
  }
  else if (state === "PLAY") {

    tommy1.move();
    tommy1.handleWrapping();
    tommy1.handleEating(TestPredator);
    tommy1.display();

    corgi1.move();
    corgi1.handleInput();
    corgi1.handleEating(PreySuperTest);
    corgi1.display();

    cake1.move();
    cake2.move();
    cake1.handleWrapping();
    cake2.handleWrapping();
    cake1.display();
    cake2.display();
    cake1.reset();
    cake2.reset();

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

function displayStoryScreen() {
  image(cakeImage, 0, 0, width, height);
  text("this is the story of a snail", 305, 60);
  textSize(20);
  textStyle(ITALIC, BOLD);
  rectMode(CENTER, CENTER);
  fill(255);
  rect(width/2, height/2, 150, 50);
  fill(0);
  text("NEVER KNOW", width/2, height/2);
  corgi1.move();
  corgi1.handleInput();
  corgi1.handleEating();
  corgi1.display();

  cake1.move();
  cake1.handleInput();
  cake1.display();

}


//start state
function displayStartScreen() {
  image(startImage, 0, 0, width, height);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(255, 105, 180);
  textSize(40);
  text("LIFE IS LIKE", 305, 40); // Title
  fill(20);
  textSize(10);
  textStyle(BOLD);
  text("a box of chocolates you always know what you're going to get", 305, 60); // easy button
  textSize(20);
  textStyle(ITALIC, BOLD);
  rectMode(CENTER, CENTER);
  fill(255);
  rect(width/2, height/2, 150, 50);
  fill(0);
  text("NEVER KNOW", width/2, height/2);
}
