"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

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
// preload()
//
// Description of preload

function preload() {
backgroundImage = loadImage ("assets/images/background.png")
beePreyImage = loadImage ("assets/images/bee.png");
purpleFlowerImage = loadImage ("assets/images/purpleflower.png");
pinkFlowerImage = loadImage ("assets/images/pinkflower.png");
blueFlowerImage = loadImage ("assets/images/blueflower.png");
specialHealthImage =loadImage ("assets/images/rainbowflowers.png");

console.log('preload done');

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth,windowHeight);

//setup for predators
//(x, y, speed, image, radius, upKey, downKey, leftKey, rightKey, sprintKey, sprintHealthPenalty,healthLossNormal, sprintSpeed,normalSpeed)
// preyPinkFlower = new Predator(0, 0, 5, color(255, 20, 0), 25,UP_ARROW,DOWN_ARROW,LEFT_ARROW,RIGHT_ARROW,16,0.1,0.031,10,5); //,20,1,10,5
predatorPurpleFlower = new Predator(100, 100, 10, purpleFlowerImage, 50,87,83,65,68,32,0.2,0.03,20,10);
console.log("why dont you work");

bee1 = new BeePredator(100,300,10,beePreyImage,100,87,83,65,68,32,0.2,0.03,20,10);
//set up for preys
preyBlueFlower = new Prey (30,30,10,blueFlowerImage, 15);
preyPinkFlower = new Prey (5,10,5,pinkFlowerImage,20);
}

// draw()
//
// Description of draw()

function draw() {
  background(backgroundImage);

//the purple flower preys on the bee because it is covered in pesticides
  predatorPurpleFlower.handleInput();
  predatorPurpleFlower.move();
    console.log("where did everybody go?");
  predatorPurpleFlower.handleEating(bee1);
  predatorPurpleFlower.display();
    console.log("hello new predaaator?");

//the bee "preys" on flowers to collect pollen
bee1.handleInput();
bee1.move();
//handle the bee eating each flower prey
bee1.handleEating(preyBlueFlower);
bee1.handleEating(preyPinkFlower);
bee1.display();

//the flowers are "prey" to the bee
preyBlueFlower.move();
preyBlueFlower.display();

preyPinkFlower.move();
preyPinkFlower.display();

}
