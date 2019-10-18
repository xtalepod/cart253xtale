//is this working properly

"use strict";
function setup() {
  // Create canvas and set drawing modes
  createCanvas(640, 480);
  rectMode(CENTER);
  noStroke();
  fill(255,0,0);

}
function draw(){
  background(255,0,0);

  console.log(mouseX);
  if(mouseX>width/2){
    fill(0);
   rect(width-50,height/2,40,40);
  }
  else{
  fill(255);
  ellipse(width/4,height/2,40,40);
 }

}
