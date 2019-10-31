"use strict";


let mySquare1;
let mySquare2;

let myCircle1;
let myCircle2;
function setup() {
  createCanvas(windowWidth,windowHeight);
  mySquare1 = new Square(random(0,width),random(0,height),100,color(255, 192, 80));
  mySquare2 = new Square(random(0,width),random(0,height),100,color(200, 170, 200));
  myCircle1 = new Circle (random(20,width), random(20,height),200,color(180, 204, 10));
  myCircle2 = new Circle (random(20,width), random(20,height),200,color(180, 20, 150));
}
function draw() {
  background(255);
  mySquare1.update();
  mySquare2.update();

  mySquare1.display();
  mySquare2.display();

  myCircle1.update();
  myCircle1.display();

  myCircle2.update();
  myCircle2.display();
}


















//BELOW IS THE EXAMPLE NOTES FROM THE ANIMAL EXAMPLE
// /*****************
//
// Title of Project
// Author Name
//
// This is a template. You must fill in the title,
// author, and this description to match your project!
//
// ******************/
//
//
// let genericAnimal;
// let fido;
// let minou;
//
// // preload()
// //
// // Description of preload
//
// function preload() {
//
// }
//
//
// // setup()
// //
// // Description of setup
//
// function setup() {
// createCanvas(windowWidth,windowHeight);
//
// genericAnimal = new Animal (10);
// fido = new Dog(11);
// minou = new Cat(13);
//
// genericAnimal.eat();
// genericAnimal.sleep();
//
// fido.eat();
// fido.sleep();
// fido.bark();
//
// minou.eat();
// minou.sleep();
// minou.meow();
//
// }
//
//
//
// // draw()
// //
// // Description of draw()
//
// function draw() {
//
// }
