//Exersize 1 - Movement
//by Christale Terris
//a wave of corgis forever chasing bones and a moving ball

//image variables
let corgi;
let bone;

//text variables
let goodDog = "whose a good corgi?";
let goodDogX = 500;
let goodDogY = 390;
let dream = "dream the dream."
let dreamX = 0
let dreamY = 50

//sinewave variables
let xspacing = 4; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 8; // Start angle at 0
let amplitude = 110.0; // Height of wave
let period = 85.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave



// preload()
//
//images to be used for sinewave

function preload(){
corgi = loadImage ("assets/images/corgipic.jpg");
bone = loadImage ("assets/images/dogbone.png");
}

//set up for canvas, sine wave, text

function setup(){
  //canvas setup
  createCanvas (700,400);

  //sine wave setup
  w = width + 0;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));

  //text setup
  textSize(24);

}

//drawing
function draw() {
  background (200,50,100)
fill(0,200,100)

//draw the mouse as a ball that moves
    ellipse(mouseX,mouseY,15,15)

//draw the sine wave
  calcWave();
  renderWave();

//draw the text to move from right to left from bottom of canvas, from left to right at the top

fill(255);
text(goodDog,goodDogX,goodDogY);
goodDogX = goodDogX - 1;
text(dream,dreamX,dreamY);
dreamX =dreamX + 1;
}

//sine wave calculation from p5.js
function calcWave() {

//angular velocity
  theta += 0.001;

// For every x value, calculate a y value with sine function from p5.js
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);

  // two sinewaves one a corgi and one a bone
  for (let x = 0; x < yvalues.length; x++) {
  image(bone, x * xspacing, height / 3 + yvalues[x], 20, 20);
  image(corgi, x * xspacing, height / 2 + yvalues[x], 50, 50);


  }
}
