//add parameter to hedhoge for word
//random word thing in testscript paramter



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

//set anything that needs to be preloaded
function preload() {
}
// setup()
//
// Sets up a canvas
// Creates objects for the fox, the hedgehog, and the boxes
function setup() {
  createCanvas(windowWidth, windowHeight);
  //creating the hedgohog(x, y, w, h,fillColor, speed, upKey, downKey, rightKey, leftKey) {
  hedgehog = new TestH(60, 300, 40, 40, color(26, 255, 140), 5, UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW);
  //creating the fox(x, y,w,h,fillColor, speed, upKey, downKey, rightKey, leftKey) {
  fox = new TestF(100, 40, 70, 70, color(153, 255, 204), 1, 87, 83, 65, 68, 70);
  //for loops to create the box objects (which are shaped like circles)
  push();
  for (let i = 0; i < 3; i++) {
    let x = 50 + 100 * i
    let y = 100 + 100 * i
    boxes.push(new TestB(x, y, 40, color(255, 153, 153)));
  }
  for (let i = 0; i < 3; i++) {
    let x = 850 - 100 * i
    let y = 100 + 100 * i
    boxes.push(new TestB(x, y, 40, color(255, 153, 153)));
    pop();
  }
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  //set the background to a nice grey
  background(200);
  //if its start state displayStartScreen else if displayStoryScreen
  //else if displayPlayScreen else if showGameOver
  if (state === "START") {
    displayStartScreen();
  } else if (state === "STORY") {
    displayStoryScreen();
  } else if (state === "PLAY") {
    displayPlayScreen();
    //set variables for return true statement so the hedgehog and fox go back to their start stae after overlapping
    let hedgehogOverLapping = false;
    let foxOverLapping = false;
    //for loop to display the total number of boxes and handleCollision w the hedgehog
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].display();
      if (boxes[i].handleCollision(hedgehog)) {
        hedgehogOverLapping = true;
      }
    }
    //for loop to display the total number of boxes and handleCollision w the fox
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].display();
      if (boxes[i].handleFoxCollision(fox)) {
        foxOverLapping = true;
      }
    }

    //handle the input, movement, and display for the hedgehog
    hedgehog.handleInput();
    hedgehog.move();
    hedgehog.display(hedgehogOverLapping);
    // hedgehog.reset();
    //handle the input, movement, and display for the fox
    fox.handleInput();
    fox.move();
    fox.display(foxOverLapping);
  }
}
// else if (state === "GAMEOVER") {
//     showGameOver();
// }
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
  //set the background
  background(204, 153, 255)
  //set the rectangle which will go behind phrase0
  rectMode(CENTER, CENTER);
  fill(200);
  ellipse(width / 2, height / 2, 100);
  //set the font color for all text
  //declare a variable for story0 and its index
  let phrase0 = story0[storyIndex0];
  //set the text variables for phrase0
  fill(20);
  textSize(30);
  textAlign(CENTER, CENTER);
  text(phrase0, width / 2, height / 2);
  //declare a variable for story1 and its index
  let phrase1 = story1[storyIndex1];
  //set the text variables for phrase0

  fill(0);
  textSize(10);
  text(phrase1, width / 2, 80);
  //set the text variables and text for button of the screen instructions
  push();
  fill(20);
  textFont('Courier New', [20]);
  textStyle(BOLD);
  text("press any key to start", width / 2, height / 1.1);
  text("click the mouse to begin game play", width / 2, height / 1.06);
  pop();

  //a little hedgehog avatar for the story screen to better prepare the player
  //includes key instructions
  noStroke();
  fill(26, 255, 140);
  rect(width / 2 + 300, 110, 40, 40);
  textFont('Courier New', [20]);
  fill(5);
  text("hedgehog", width / 2 + 300, 150);
  text("UP, DOWN, LEFT, RIGHT", width / 2 + 300, 175);
  //a little fox avatar for the story screen to better prepare the player
  //includes key instructions
  noStroke();
  fill(153, 255, 204);
  rect(width / 2 - 300, 100, 70, 70);
  fill(5);
  textFont('Courier New', [20]);
  text("fox", width / 2 - 300, 150);
  text("W,A,S,D + F", width / 2 - 300, 175);

  //set the text variables instructions
  fill(20);
  textSize(10);
  textStyle(BOLD);
  text("instructions: get a pen and paper, explore the board", width / 2, height / 1.25);
  text("write down what you read, do you understand now?", width / 2, height / 1.2)


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
  text("hedgehog and fox", width / 2, height / 2); // Title
  pop();

  push();
  // textAlign(RIGHT, RIGHT);
  fill(20);
  textFont('Courier New', [20]);
  textStyle(BOLD);
  text("start", width / 1.1, height / 1.1);
  pop();
  //a little hedgehog avatar for the start screen to better prepare the player
  noStroke();
  fill(26, 255, 140);
  rect(width / 2 - 50, height / 2 + 60, 40, 40);
  //a little fox avatar for the start screen to better prepare the player
  noStroke();
  fill(153, 255, 204);
  rect(width / 2, height / 2 + 30, 70, 70);

}


function displayPlayScreen() {
  push();
  for (let i = 0; i < 10; i++) {
    x = i * 0.5 + 50
    y = i * 40 + 40
    // rect(10, i * 40 + 40, trees[2], trees[3])
    for (let j = 0; j < 20; j++) {
      fill(color(100, 100, 50));
      rect(j * .05 + 60 + j * 50, i * 40 + 40, trees[2], trees[3])
    }
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
