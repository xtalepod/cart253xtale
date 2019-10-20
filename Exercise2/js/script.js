/******************************************************

Game - The Artful Dodger
Christale Terris

A simple dodging game with keyboard controls

******************************************************/

//Image variables for avatar, enemy, and backgrounds
let bone;
let corgi;
//background images
let grass;
let shiny;
let land1;
let land2;
let land3;

//text variables
//font only counts to 9 then starts over...
let myFont;

//loser variables
let lost = 0;
let showLost;

//winning variables
let winning = "you win :D"
let showWin;

// The position and size of our avatar bone
let avaBoneX;
let avaBoneY;
let avaBoneSize = 90;

// The speed and velocity of our avatar bone
let avaBoneSpeed = 10;
let avaBoneVX = 0;
let avaBoneVY = 0;

// The position and size of the enemy corgi
let eneCorgiX;
let eneCorgiY;
let eneCorgiSize = 40;

// The speed and velocity of our enemy corgi
let eneCorgiSpeed = 5;
let eneCorgiVX = 10;

// How many dodges the player has made
let dodges = 0;

// preload()
//
//images to be used for avatars

function preload() {
  corgi = loadImage("assets/images/corgipic.jpg");
  bone = loadImage("assets/images/dogbone.png");
  grass = loadImage("assets/images/grass.png");
  shiny = loadImage("assets/images/shiny.jpg");
  land1 = loadImage("assets/images/land1.png");
  land2 = loadImage("assets/images/land2.jpg");
  land3 = loadImage("assets/images/land3.jpg");
  myFont = loadFont("assets/spaceage.ttf");


}

// setup()
//
// Make the canvas, position the avatar and anemy
function setup() {
  // Create our playing area
  createCanvas(560, 500);


  // Put the bone avatar in the centre
  avaBoneX = width / 2;
  avaBoneY = height / 2;

  // Put the enemy corgi to the left at a random y coordinate within the canvas
  eneCorgiX = 0;
  eneCorgiY = random(0, height);

  // No stroke so it looks cleaner
  noStroke();
}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {

  //initial background images plus background levels

  imageMode(CENTER); // set center to compare the distance betweens images
  image(shiny, 250, 250);
  image(grass, 250, 250);

  // This is where the background changes when you get points
  if (dodges >= 5) {
    image(land1, 0, 0);
    if (dodges >= 10) {
      image(land2, 0, 0);
      if (dodges >= 15) {
        image(land3, 0, 0);
      }
    }
  }

  //text counter to keep score of unsuccesful attempts to get the bone
  textFont(myFont);
  textSize(90);
  fill(250);
  text(dodges, 40, 480);

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avaBoneVX = 0;
  avaBoneVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avaBoneVX = -avaBoneSpeed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    avaBoneVX = avaBoneSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avaBoneVY = -avaBoneSpeed;
  } else if (keyIsDown(DOWN_ARROW)) {
    avaBoneVY = avaBoneSpeed;
  }

  // Move the avatar bone according to its calculated velocity
  avaBoneX = avaBoneX + avaBoneVX;
  avaBoneY = avaBoneY + avaBoneVY;


  // Update the enemy's position based on its velocity
  eneCorgiX = eneCorgiX + eneCorgiVX;
  //This is where the enemy corgi has a speed change
  eneCorgiSpeedVX = eneCorgiSpeed + 1.1 * dodges;

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  //this equation describes two axis smaller than avatar and enemy sizes/2
  if (dist(eneCorgiX, eneCorgiY, avaBoneX, avaBoneY) < eneCorgiSize / 2 + avaBoneSize / 2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    lost = lost + 1; //count how many times lost bone
    // Reset the enemy's position
    eneCorgiX = 0;
    eneCorgiY = random(0, height);
    // Reset the avatar's position
    avaBoneX = width / 2;
    avaBoneY = height / 2;
    // Reset the dodge counter
    dodges = 0;
    //increases corgi size with hits bone but if it gooes to a certain number of pixels it will stop
    eneCorgiSize = 100 + lost * lost * 2
    if (eneCorgiSize > 400) {
      eneCorgiSize = 401
    }
    if (eneCorgiSize > 400) {
      let showLost = "YOU LOSE!"
      fill(0) //black
      textAlign(CENTER, CENTER) //what does this do?
      textSize(70) //text size
      text(showLost, 250, 250);
      noLoop()
    }
  }
  // Check if the avatar has gone off the screen (cheating!)
  //you can declare variables to make equations more legible if you don't math well
  let boneWentOffLeft = avaBoneX < 0;
  if (boneWentOffLeft || avaBoneX > width || avaBoneY < 0 || avaBoneY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    eneCorgiX = 0;
    eneCorgiY = random(0, height);
    avaBoneX = width / 2;
    avaBoneY = height / 2;
    dodges = 0;
  }

  // Check if the enemy has moved all the way across the screen
  if (eneCorgiX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    eneCorgiX = 0;
    eneCorgiY = random(0, height);
    //decrease size of bone
    avaBoneSize = 90 - dodges * 10;
    //If the player succesfully dodges they get a point by decreasing in size and making it easier to dodge
    if (avaBoneSize < 30) {
      avaBoneSize = 30
      fill(250) //black
      textAlign(CENTER, CENTER) //what does this do?
      textSize(70) //text size
      //Show text YOU WIN after succesfully doding a number of times
      text(winning, 250, 250);
      noLoop()
    }
    console.log(avaBoneSize)
  }
  // Display the number of successful dodges in the console
  console.log(dodges);
  // Draw the player as a bone
  image(bone, avaBoneX, avaBoneY, avaBoneSize, avaBoneSize);
  // Draw the enemy as a corgi
  image(corgi, eneCorgiX, eneCorgiY, eneCorgiSize, eneCorgiSize);
}
