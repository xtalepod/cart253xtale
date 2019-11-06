//from testscript

//arrays
//story screen array
let storyTelling = [
  "the fox knows",
  "many things",
  "but the hedgehog",
  "knows one big thing.",
  "--archilochus"];
let currentStoryIndex = 0;
//storytelling array 2
let storyTelling2 = [
  "who would you",
  "rather be?",
  "better yet",
  "who are you?"
]

let currentStoryIndex2 = 0;
//tree array
// let units = 10;
// let numTree = 80
let trees = [100,25,6,20];





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

}
// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  corgi1 = new Predator(100, 100, 5, 30, corgiImage, 38,40,39,37);
  cake1 = new Prey(100, 100, 0.1, 100, cakeImage);
  cake2 = new Prey(100, 100, 5, 40, cakeImage);
  tommy1 = new PreySuper(50,50,4,20,tommyImage1);
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
    displayPlayScreen();

    tommy1.move();
    tommy1.handleWrapping();
    tommy1.handleEating(corgi1);
    tommy1.display();

    corgi1.move();
    corgi1.handleInput();
    corgi1.handleEating(tommy1);
    corgi1.display();

    // cake1.move();
    // cake2.move();
    // cake1.handleWrapping();
    // cake2.handleWrapping();
    // cake1.display();
    // cake2.display();
    // cake1.reset();
    // cake2.reset();

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
  let phrases = storyTelling[currentStoryIndex];
    textSize(20);
    textAlign(CENTER,CENTER);
    text(phrases, width/5,height/3);
    textSize(20);
    textAlign(CENTER,CENTER);
  let phrase2 = storyTelling2[currentStoryIndex2];
      textSize(20);
      textAlign(CENTER,CENTER);
      text(phrase2, width/1.2,height/1.2);
      // corgi1.move();
      // corgi1.handleInput();
      // corgi1.handleEating(cake1);
      // corgi1.handleEating(cake2);
      // corgi1.display();
      // cake1.move();
      // cake1.display();
}

//start state
function displayStartScreen() {
  background(180)
  // image(hedgehog, width/2, height/2)
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(255, 105, 180);
  textSize(30);
  text("HEDGEHOG AND FOX", width/2, height/5); // Title
  fill(20);
  textSize(17);
  textStyle(BOLD);
  text("//once upon a time...click anywhere", width/2, height/4); // easy button
  console.log("are we here");
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
  currentStoryIndex +=1;
  currentStoryIndex2 +=1;
  if (currentStoryIndex >= storyTelling.length){
    currentStoryIndex = 0;
    if (currentStoryIndex2 >= storyTelling2.length){
      currentStoryIndex2 = 0;
  }
}
}
