//
//
//
//

"use strict";

// Ping
// by christale terris
//
// A "simple" implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Up and down keys control the right hand paddle, W and S keys control
// the left hand paddle

//Adding a font
let myFont;

//Adding speed changes and time
//let speedChange;
//let maxSpeed;
let tx =0;
let ty =0;

// Whether the game has started
let playing = false;

// Game colors (using hexadecimal)
//let bgColor = 0;
//let fgColor = 255;

let scoreLeft =0;
let scoreRight =0;

// BALL

// A ball object with the properties of
// position, size, velocity, and speed
let ball = {
  x: 0,
  y: 0,
  size: 20,
  vx: 0,
  vy: 0,
  speed:5,
  maxSpeed:10
}

// PADDLES

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
let leftPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5,
  upKey: 87,
  downKey: 83,
  paddleColourR: 40,
  paddleColourG: 40,
  paddleColourB: 40
}

// RIGHT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
let rightPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5,
  upKey: 38,
  downKey: 40,
  paddleColourR: 99,
  paddleColourG: 99,
  paddleColourB: 99
}

// A variable to hold the beep sound we will play on bouncing
let beepSFX;

//a variable to make the background change
let noiseScale = 0.02;

// preload()
//
// Loads the beep audio for the sound of bouncing
function preload() {
  beepSFX = new Audio("assets/sounds/beep.wav");
  myFont = loadFont ("assets/font/spaceage.ttf");
}

// setup()
//
// Creates the canvas, sets up the drawing modes,
// Sets initial values for paddle and ball positions
// and velocities.
function setup() {
  // Create canvas and set drawing modes
  createCanvas(640, 480);
  rectMode(CENTER);
  noStroke();
  setupPaddles();
  resetBall();
}

// setupPaddles()
//
// Sets the starting positions of the two paddles
function setupPaddles() {
  // Initialise the left paddle position
  leftPaddle.x = 0 + leftPaddle.w;
  leftPaddle.y = height / 2;

  // Initialise the right paddle position
  rightPaddle.x = width - rightPaddle.w;
  rightPaddle.y = height / 2;
}

// draw()
//
// Calls the appropriate functions to run the game
// See how tidy it looks?!
function draw() {
  // Fill the backgrColor
//transparency added to abckground so you can see the objects in motion
//noiseScale from p5.js used to make the game more interesting
//changed to follow the ball instead of the mouse
  background(255,193,170,10);
  for (let n=0; n < width; n++) {
    let noiseVal= noise((ball.x+n)*noiseScale,ball.y*noiseScale);
    stroke(noiseVal*30);
    line(n, ball.y+noiseVal*100,n,height);
  }

  if (playing) {
    // If the game is in play, we handle input and move the elements around
    handleInput(leftPaddle);
    handleInput(rightPaddle);
    updatePaddle(leftPaddle);
    updatePaddle(rightPaddle);
    updateBall();
    //
    checkBallWallCollision();
    checkBallPaddleCollision(leftPaddle);
    checkBallPaddleCollision(rightPaddle);
    //
    // Check if the ball went out of bounds and respond if so
   // (Note how we can use a function that returns a truth value
     // inside a conditional!)
     let result = ballIsOutOfBounds();
    if (result ===true) {
       // If it went off either side, reset ball in game play
    resetBallInGamePlay();
     }
     else{

//display the score
   displayScore();
     }
  }
  // end if playing
  else {
    // Otherwise we display the message to start the game
    displayStartMessage();
  }

//always display the paddles
  displayPaddle(leftPaddle);
  displayPaddle(rightPaddle);
  displayBall();

}

// handleInput()
//
// Checks the mouse and keyboard input to set the velocities of the
// left and right paddles respectively.
function handleInput(paddle) {
  // Move the paddle based on its up and down keys
  // If the up key is being pressed
  if (keyIsDown(paddle.upKey)) {
    // Move up
    paddle.vy = -paddle.speed;
  }
  // Otherwise if the down key is being pressed
  else if (keyIsDown(paddle.downKey)) {
    // Move down
    paddle.vy = paddle.speed;
  }
  else {
    // Otherwise stop moving
    paddle.vy = 0;
  }
}

// updatePositions()
//
// Sets the positions of the paddles and ball based on their velocities
function updatePaddle(paddle) {
  // Update the paddle position based on its velocity
  //paddle.y += paddle.vy;
  paddle.y = paddle.y+paddle.vy;
}

// updateBall()
//
// Sets the position of the ball based on its velocity
function updateBall() {
  // Update the ball's position based on velocity
  ball.x += ball.vx;
  ball.y += ball.vy;
}

// ballIsOutOfBounds()
//
// Checks if the ball has gone off the left or right
// Returns true if so, false otherwise

function ballIsOutOfBounds() {
  // Check for ball going off the sides, if it goes off the left side player right scores
  //and the paddle colour changes
  if (ball.x < 0 ) {
    scoreRight ++;
    rightPaddle.paddleColourR=rightPaddle.paddleColourR+5;
    return true;
  }
  // Check for ball going off the sides, if it goes off the right side player left scores
  //and the paddle colour changes
  else if(ball.x > width){
      scoreLeft ++;
      leftPaddle.paddleColourB=leftPaddle.paddleColourB+5;
      return true;
  }
  else {
    return false;
  }
}

// checkBallWallCollision()
//
// Check if the ball has hit the top or bottom of the canvas
// Bounce off if it has by reversing velocity
// Play a sound
function checkBallWallCollision() {
  // Check for collisions with top or bottom...
  if (ball.y < 0 ) {
    // It hit so reverse velocity
    ball.vy = ball.speed;
    // Play our bouncing sound effect by rewinding and then playing
    beepSFX.currentTime = 0;
    beepSFX.play();
  }
  else if (ball.y > height){
    // It hit so reverse velocity
    ball.vy = -ball.speed;
    // Play our bouncing sound effect by rewinding and then playing
    beepSFX.currentTime = 0;
    beepSFX.play();

  }
}

// checkBallPaddleCollision(paddle)
//
// Checks for collisions between the ball and the specified paddle
function checkBallPaddleCollision(paddle) {
  // VARIABLES FOR CHECKING COLLISIONS

  // We will calculate the top, bottom, left, and right of the
  // paddle and the ball to make our conditionals easier to read...
  let ballTop = ball.y - ball.size / 2;
  let ballBottom = ball.y + ball.size / 2;
  let ballLeft = ball.x - ball.size / 2;
  let ballRight = ball.x + ball.size / 2;

  let paddleTop = paddle.y - paddle.h / 2;
  let paddleBottom = paddle.y + paddle.h / 2;
  let paddleLeft = paddle.x - leftPaddle.w / 2;
  let paddleRight = paddle.x + paddle.w / 2;

  // First check the ball is in the vertical range of the paddle
  if (ballBottom > paddleTop && ballTop < paddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < paddleRight && ballRight > paddleLeft) {
      // Then the ball is touching the paddle
      // Reverse its vx so it starts travelling in the opposite direction
      ball.vx = -ball.vx;
    //  ball.x = paddle.x +(paddle.w+ball.size/2)
      //ball.y = paddle.y
      // Play our bouncing sound effect by rewinding and then playing
      beepSFX.currentTime = 0;
      beepSFX.play();
    }
  }
}

// displayPaddle(paddle)
//
// Draws the specified paddle
function displayPaddle(paddle) {
  // Draw the paddles
  push();
  fill(paddle.paddleColourR,paddle.paddleColourG,paddle.paddleColourB);
  rect(paddle.x, paddle.y, paddle.w, paddle.h);
  pop();
}

// displayBall()
//
// Draws the ball on screen as a square
function displayBall() {
  // Draw the ball
  rect(ball.x, ball.y, ball.size, ball.size);
}

// resetBall()
//
// Sets the starting position and velocity of the ball
function resetBall() {
  // Initialise the ball's position and velocity
  //make where the ball resets at inital game start random
  ball.x = random(30,600);
  ball.y = random(20,400);
  //ball always starts moving towards the left
  //wanted to make it go left or right but couldn't figure it out
  ball.vx = -ball.speed;
  //set the velocity to random
  ball.vy = random(20,50);
}

//added a fuction to reset the ball based on game play
function resetBallInGamePlay(){
//if right player scores a point the ball respawns at their paddle and changes direction
  if (ball.x < 0 ){
    // - means we want it to move to left
      ball.vx = -ball.speed;
      ball.x = rightPaddle.x - (rightPaddle.w/2+ball.size/2);
      ball.y = rightPaddle.y;
      //makes it so the ball velocity is random
      ball.vy = random(20,50);
  }

//if left player scores a point the ball respawns at their paddle and changes direction
  if(ball.x > width ){
    //should there be no minus
      ball.vx = ball.speed;
      ball.x = leftPaddle.x + (leftPaddle.w/2+ball.size/2);
      ball.y = leftPaddle.y;
      //makes it so the ball velocity is random
      ball.vy = random(0,50);
  }

}

// displayStartMessage()
//
// Shows a message about how to start the game
function displayStartMessage() {
 push();
  textAlign(CENTER, CENTER);
  textFont(myFont);
  textSize(80);
  fill(255,190,192)
  text("PING", width / 2, height / 1.15);
  pop();
}

function displayScore() {
push();
  textAlign(CENTER, TOP);
  textFont(myFont);
  textSize(20);
  fill(255,190,192)
  text(scoreLeft, width/3, 20);
  text(scoreRight, 2*width/3, 20);
pop();
}
// mousePressed()
//
// Here to require a click to start playing the game
// Which will help us be allowed to play audio in the browser
function mousePressed() {
  playing = true;
}
