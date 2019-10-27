"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/
//predators
let snowLeopard;
let tiger;
let bee1;
let beePreyImage;

//preys
let preyCat;

// preload()
//
// Description of preload

function preload() {

beePreyImage = loadImage ("assets/images/bee.png");
console.log('preload done');

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth,windowHeight);
//setup for predators
//(x, y, speed, fillColor, radius, upKey, downKey, leftKey, rightKey, sprintKey, sprintHealthPenalty,healthLossNormal, sprintSpeed,normalSpeed)
snowLeopard = new Predator(0, 0, 5, color(255, 20, 0), 25,UP_ARROW,DOWN_ARROW,LEFT_ARROW,RIGHT_ARROW,16,0.1,0.031,10,5); //,20,1,10,5
tiger = new Predator(100, 100, 10, color(200, 100, 190), 50,87,83,65,68,32,0.2,0.03,20,10); //20,1,20,10
bee1 = new BeePredator(100,300,10,beePreyImage,100,87,83,65,68,32,0.2,0.03,20,10);
// console.log('you broken?');
//set up for preys
preyCat = new Prey (30,30,10,color(255,190,198), 15);

}


// draw()
//
// Description of draw()

function draw() {
background(200);

//console.log(where are predators);

snowLeopard.handleInput();
snowLeopard.move();
snowLeopard.handleEating(preyCat);
snowLeopard.display();

tiger.handleInput();
tiger.move();
tiger.handleEating(preyCat);
tiger.display();

bee1.handleInput();
bee1.move();
bee1.handleEating(preyCat);
bee1.display();

preyCat.move();
preyCat.display();
}
