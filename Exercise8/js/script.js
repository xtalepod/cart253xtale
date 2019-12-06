"use strict"


let currentScene; // To store the current scene;
let titleScene;
let playScene;
let gameOverScene;
let worldArray = [];
let worldOne;
let worldTwo;
let worldThree;
const NUMBER_PORTALS = 7;
let health = 0;

//an array for the portals
let portalArray = [];
let key;

//background image for the playScene
let playSceneBackground;

//an array for textures pictures
let worldOneImages = [];
function preload() {

  playSceneBackground = loadImage("assets/images/textures/image4.JPG");

  // for (let i = 0; i < 3; i++){
  worldOneImages[0] = loadImage ("assets/images/textures/image4.JPG")
  worldOneImages[1] = loadImage("assets/images/textures/image5.JPG")
  worldOneImages[2] = loadImage("assets/images/textures/image6.JPG")
  // worldOneImages.push()
  // }
}

function setup() {
 createCanvas(windowWidth, windowHeight);
//create the scenes and worlds

  titleScene = new TitleScene();

  //the three worlds come before playScene and gameOverScene
  worldOne = new WorldOne(50,70,80,worldOneImages[3]);
  worldTwo = new WorldTwo();
  worldThree = new WorldThree();
  worldArray.push(worldOne);
  worldArray.push(worldTwo);
  worldArray.push(worldThree);

  playScene = new PlayScene(playSceneBackground);
  gameOverScene = new GameOverScene();
  key = new Key (50,50);

  currentScene = worldOne
  ; // Because we start on the title
  setUpPortals();
}

function draw() {
  // In draw we just tell the current scene to draw
  // and whichever scene it is will display as per its class
  background(0);
  currentScene.draw();

}

function mousePressed() {
  // In mousePressed we call the mousePressed of the current scene
  // so it knows the mouse was pressed
  currentScene.mousePressed();
}

function setUpPortals(){
//   //array containing the informations of the portals
let portalProperties = [
    {
      x: windowWidth/2,
      y: windowHeight/2,
      radius: 20,
      npoints: 6,
    },
    {
      x: windowWidth/1.5,
      y: windowHeight/2,
      radius: 20,
      npoints: 8,
    },
    // {
    //   x: windowWidth/1.5,
    //   y: windowHeight/2,
    //   radius: 20,
    //   npoints: 10,
    // },
  ];

  //a for loop for the portals
for (let i = 0; i < portalProperties.length; i++) {
        let portal = new Portal(portalProperties[i].x, portalProperties[i].y, portalProperties[i].radius, portalProperties[i].npoints,worldArray[i]);
        portalArray.push(portal);
        // let portal1 = new Portal(portalProperties[1].x, portalProperties[1].y, portalProperties[1].radius, portalProperties[1].npoints,worldTwo);
        // portalArray.push(portal1);
      }

}
