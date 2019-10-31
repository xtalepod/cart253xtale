"use strict";

// note that this is repetitive and becoming inefficient
//this is why we use polymorphism
// let mySquare1;
// let mySquare2;
// let myCircle1;
// let myCircle2;

//polymorphism
let shape = [];

//or also with the for loop in setup

let square;
let circle;

function setup() {
  createCanvas(windowWidth,windowHeight);

  // note that this is repetitive and becoming inefficient
  //this is why we use polymorphism
  // mySquare1 = new Square(random(0,width),random(0,height),100,color(255, 192, 80));
  // mySquare2 = new Square(random(0,width),random(0,height),100,color(200, 170, 200));
  //RANDOM COLOR!!!!!!!!!!!
  // myCircle1 = new Circle (random(20,width), random(20,height),200,color(random(20),random(100),random(255)));;
  //!!!!!!!!!!!!
  // myCircle2 = new Circle (random(20,width), random(20,height),200,color(180, 20, 150));

//or also with the for loop in setup
for (let i = 0; i < 100; i++){
  square = new Square(random(0,width),random(0,height),10, color(20,30,105));
  shape.push(square);
}
  for (let i = 0; i < 100; i++){
    circle = new Circle(random(0,width),random(0,height),20,color(random(20),random(100),random(255)));
    shape.push(circle);

}
//polymorphism
  // let mySquare1 = new Square(random(0,width),random(0,height),100);
  // shape.push(mySquare1);
  // let mySquare2 = new Square(random(0,width),random(0,height),200);
  // shape.push(mySquare2);
  // let myCircle1 = new Circle(random(0,width),random(0,height),200,color(0,0,255));
  // shape.push(myCircle1);
  // let myCircle2 = new Circle(random(0,width),random(0,height),200,color(255,255,0));
  // shape.push(myCircle2);
}
function draw() {
  background(255);

  // note that this is repetitive and becoming inefficient
  //this is why we use polymorphism
  // mySquare1.update();
  // mySquare2.update();
  //
  // mySquare1.display();
  // mySquare2.display();
  //
  // myCircle1.update();
  // myCircle1.display();
  //
  // myCircle2.update();
  // myCircle2.display();
//polymorphism uses arrays, this is the classic array for

  for (let i = 0; i < shape.length; i++) {
    shape[i].update();
    shape[i].display();
  }

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
