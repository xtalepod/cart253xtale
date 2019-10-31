// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger;

// The three prey
let antelope;
let zebra;
let bee;

//the superPrey

let tommy;
let tommyImage1;
// let tommyImage2;


//
function preload () {
  tommyImage1 = loadImage("assets/images/tommyboy3.png");
  tommyImage2 =loadImage("assets/images/tommy4.png");
  console.log('preload done');
}
// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 100);
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
  tommy1 = new PreySuper(50,50,4,20,tommyImage1);
  tommy2 = new PreySuper(10,100,10,10,tommyImage1);
  console.log('setup done');

}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(200);

  // Handle input for the tiger
  tiger.handleInput();
  // console.log('wtfishappening');
  // Move all the "animals"
  tiger.move();
  antelope.move();
  zebra.move();
  bee.move();
  tommy1.move();
  tommy2.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);
  tiger.handleEating(tommy1);

  //handle the tommy eating
  tommy1.handleEating(tiger);

  //tiger.handleSuperEating(tommy);
  tommy1.display();
  tommy2.display();
  // Display all the "animals"
  //predator
  tiger.display();

  //prey
  antelope.display();
  zebra.display();
  bee.display();


}
