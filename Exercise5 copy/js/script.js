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

//preys
let preyCat;

// preload()
//
// Description of preload

function preload() {

}


// setup()
//
// Description of setup

function setup() {
  createCanvas(windowWidth,windowHeight);
//setup for predators
//(x, y, speed, fillColor, radius, upKey, downKey, leftKey, rightKey, sprintKey, sprintHealthPenalty,normalHealthPenalty, sprintSpeed,normalSpeed)
snowLeopard = new Predator(0, 0, 5, color(255, 20, 0), 25,UP_ARROW,DOWN_ARROW,LEFT_ARROW,RIGHT_ARROW,16);
tiger = new Predator(100, 100, 10, color(200, 100, 190), 50,87,83,65,68,32);
console.log('you broken?');
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
tiger.handleInput();

snowLeopard.move();
tiger.move();
preyCat.move();

tiger.handleEating(preyCat);
snowLeopard.handleEating(preyCat);

snowLeopard.display();
tiger.display();
preyCat.display();
}
