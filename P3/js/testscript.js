//the player
let player;

//the portal
let portal;
//array containing the portals
let portalArray = [];
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

//the key
let key;

//the wall
let wall;
//array containing the walls
let wallArray = [];
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

//scene  stuff
// //state variable containing the state of the game
// let state = "Menu";

let currentScene; // To store the current scene;
let titleScene;
let instructionsScene;
let playScene;
let gameOverScene;


//preloads the images and sounds
function preload() {}


// Sets up a canvas
// Creates objects for the predator, the player, the potions and the walls
function setup() {
  createCanvas(1000, 800);


//scene stuff
    titleScene = new TitleScene(30,40,500,600);
    instructionsScene = new InstructionsScene();
    playScene = new PlayScene();
    gameOverScene = new GameOverScene();
    currentScene = titleScene; // Because we start on the title

//setting up the player
    player = new TestPlayer(100, 30, 6, color(255, 195, 195), 50);

//setting up the wall array
  for (let i = 0; i < wallProperties.length; i++) {
    wall = new TestWall(wallProperties[i].x, wallProperties[i].y, wallProperties[i].width, wallProperties[i].height);
    wallArray.push(wall);
  }
//the portal array
  for (let i = 0; i < portalProperties.length; i++) {
    portal = new TestPortal(portalProperties[i].x, portalProperties[i].y, portalProperties[i].width, portalProperties[i].height, "portalState0");
    portalArray.push(portal);
  }
  key = new TestKey(100, 700);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
    background(200);
    currentScene.draw();

    // player.handleInput();
    // // Move all the player
    // player.move();
    // //handling if the key is found
    // key.handleFound(player);

//eventually create a Screen class so that portal and wall arrays belong there
// e.g. currentScreen = screen1;
// for(i=0; ...)
//      currentScreen.portalArray[i].handleExit(player);
//      currentScreen.key.handleFound(player);
// ...
// }

//the walls
//handling the solid characteristics of a wall object
//in relationship to the characters
// for (let i = 0; i < portalArray.length; i++) {
//     portalArray[i].handleExit(player);
//     portalArray[i].display();
//   }
//
//   for (let i = 0; i < wallArray.length; i++) {
//     wallArray[i].handleSolid(player);
//     wallArray[i].display();
//   }

  key.display();

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

// mousePressed()

function mousePressed() {
  // In mousePressed we call the mousePressed of the current scene
  // so it knows the mouse was pressed
  currentScene.mousePressed();
}
