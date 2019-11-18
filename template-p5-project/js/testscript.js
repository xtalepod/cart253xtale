//the player
let player;

//the portal and its properties
let portal;
// let portalX;
// let portalY;

//array containing the informations of the portals
let portalProperties = [{
    x: 400,
    y: 500,
    width: 20,
    height: 40,
  },
  {
    x: 700,
    y: 100,
    width: 60,
    height: 50,
  },
  {
    x: 400,
    y: 100,
    width: 20,
    height: 90,
  }
];

//array containing the portals

let portalArray = [];

//the key
let key;


//state variable containing the state of the game
let state = "Menu";


//array containing the informations of the walls
let wallProperties = [{
    x: 400,
    y: 100 + 30,
    width: 200,
    height: 30,
  },
  {
    x: 200,
    y: 200,
    width: 200,
    height: 30
  },
  {
    x: 600,
    y: 535,
    width: 200,
    height: 30
  },
  {
    x: 600,
    y: 285,
    width: 30,
    height: 200
  },
  {
    x: 900,
    y: 500,
    width: 250,
    height: 30
  },
];
//array containing the walls
let wallArray = [];

//preload()
//
//preloads the images and sounds
function preload() {}
// setup()
//
// Sets up a canvas
// Creates objects for the predator, the player, the potions and the walls
function setup() {
  createCanvas(1000, 800);
  //setting up the portal properties
  portalX = width - 150;
  portalY = height - 150;

  player = new TestPlayer(100, 30, 6, color(255, 195, 195), 50);

  //the wall array
  for (let i = 0; i < wallProperties.length; i++) {
    wall = new TestWall(wallProperties[i].x, wallProperties[i].y, wallProperties[i].width, wallProperties[i].height);
    wallArray.push(wall);
  }
//the portal array
  for (let i = 0; i < portalProperties.length; i++) {
    portal = new TestPortal(portalProperties[i].x, portalProperties[i].y, portalProperties[i].width, portalProperties[i].height, "portalState0");
    portalArray.push(portal);
  }
  //The objects of level 1... , "Level 1"
  // portal = new TestPortal(portalX, portalY, 100, 200);
  key = new TestKey(100, 700);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  background(200);
  //putting the dungeon backgound under everything on the canvas
  // image(backgroundImg, 0, 0, width, height);
  // if (state === "Menu") {
  //   //the menu image only for the menu
  //   image(menuImg, 0, 0, width, height);
  // }
  // if (state === "Narrative") {
  //   image(narrativeImg, 0, 0, width, height);
  // }
  // if (state === "Level 1") {

  player.handleInput();
  // Move all the player
  player.move();
  //handling if the key is found
  key.handleFound(player);
  //handling the exit of the player
  for (let i = 0; i < portalArray.length; i++) {
    portalArray[i].handleExit(player);
    portalArray[i].display();
  }
  // portal.handleExit(player);
  // portal.display();
  //
  key.display();

  //the walls
  //handling the solid characteristics of a wall object
  //in relationship to the characters
  for (let i = 0; i < wallArray.length; i++) {
    wallArray[i].handleSolid(player);
    wallArray[i].display();
  }
  player.display();
//can you create a for loop to check
  for (let i = 0; i < portalArray.length; i++) {

      if (portalArray[i].state === "portalState1") {
        //Shows the game over screen and resets all values to starting values
        displayPortal(i);
        player.reset();
        key.isFound = false;
      }
    }
}

function displayPortal(portalIndex){
  switch (portalIndex) {
      case 0:
      displayPortal0()
      break;

      case 1:
      displayPortal1()
      break;

      case 2:
      displayPortal2();
      break;
      }
}

function displayPortal0() {
  background(0)
}

function displayPortal1() {
  background(255)
}

function displayPortal2() {
  background(50)
}
// function displayPortal2() {
//   background(255)
// }
// mousePressed()
//
// //switches the state of the game, the screeens
// function mousePressed() {
//
//   if (state === "Menu") {
//     state = "Narrative";
//   } else if (state === "Narrative") {
//     state = "Level 1";
//   } else if (state === "GameOver") {
//     //Should reset all the values to beginning values
//     state = "Menu";
//   }
// }
