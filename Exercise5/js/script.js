"use strict";

/*****************

Urban Beehaviour
xtalepod

Help this urban bee find pollen to bring back to the hive but bee careful
because one of the flowers is covered in pesticides!

Two player game

Bee takes keys UP_ARROW, DOWN_ARROW,LEFT_ARROW,RIGHT_ARROW, and 16 (sprint mode)
Purple Flower (Predator/Pesticide) takes keys W,A,S,D, and 32 (sprint mode)

Pixel Art:
"bee pixel art" by xenlith on devianart.com
"pixeled purple cactus flower" by artist unknown on clipartmax.com
"happy valentines day <3 flowers pixel" by artist unknown on pinclipart.com
"beautiful" maybe by oaken moor on pixilart.com
"untitled" by anrir3 on weheartit.com (edited to remove gif layers)

Sounds:
"bees and birds" by junqey on freesound.org
******************/
//predators

let bee1;
let beePreyImage;

let purpleFlowerImage;
let predatorPurpleFlower;

//preys
let preyBlueFlower;
let blueFlowerImage;
let pinkFlowerImage;
let preyPinkFlower;

//special health
let specialHealthImage;
let specialHealth;

//background image
let backgroundImage;
//background sound
let backgroundSound;
// preload()
//
// Description of preload

function preload() {
    backgroundImage = loadImage("assets/images/background.png")
    backgroundSound = loadSound("assets/sounds/bees.wav")
    beePreyImage = loadImage("assets/images/bee.png");
    purpleFlowerImage = loadImage("assets/images/purpleflower.png");
    pinkFlowerImage = loadImage("assets/images/pinkflower.png");
    blueFlowerImage = loadImage("assets/images/blueflower.png");
    specialHealthImage = loadImage("assets/images/rainbowflowers.png");

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundSound.loop();
  console.log("buzz?")
    //setup for player 1 and 2
    predatorPurpleFlower = new Predator(100, 100, 10, purpleFlowerImage, 50, 87, 83, 65, 68, 32, 0.2, 0.03, 20, 10);
    bee1 = new BeePredator(100, 300, 10, beePreyImage, 100, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, 16, 0.2, 0.03, 20, 10);
    //set up for prey
    preyBlueFlower = new Prey(30, 30, 10, blueFlowerImage, 15);
    preyPinkFlower = new Prey(5, 10, 5, pinkFlowerImage, 20);
}

// draw()
//
// Description of draw()

function draw() {
  background(backgroundImage);

    //the purple flower preys on the bee because it is covered in pesticides
    predatorPurpleFlower.handleInput();
    predatorPurpleFlower.move();
    //handle the eating (contamination) of the bee and other flowers
    predatorPurpleFlower.handleEating(bee1);
    predatorPurpleFlower.handleEating(preyBlueFlower)
    predatorPurpleFlower.handleEating(preyPinkFlower)
    //displayer the predator
    predatorPurpleFlower.display();

    //the bee "preys" on flowers to collect pollen
    bee1.handleInput();
    bee1.move();
    //handle the bee eating each flower prey
    bee1.handleEating(preyBlueFlower);
    bee1.handleEating(preyPinkFlower);
    //display the bee
    bee1.display();

    //the flowers are "prey" to the bee
    preyBlueFlower.move();
    preyBlueFlower.display();
    preyPinkFlower.move();
    preyPinkFlower.display();

  }
