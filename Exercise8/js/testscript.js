"use strict"


let currentScene; // To store the current scene;
let titleScene;
let playScene;
let gameOverScene;
let worldOne;
let worldTwo;
let worldThree;
const NUMBER_PORTALS = 2;
let health = 0;

//an array for the portals
let portalArray = [];

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

  let r = floor(random(0,worldOneImages.length));
  titleScene = new TitleScene(worldOneImages[r]);

  //the three worlds come before playScene and gameOverScene
  worldOne = new WorldOne(50,70,80,worldOneImages[3]);
  worldTwo = new WorldTwo();
  worldThree = new WorldThree();

  playScene = new PlayScene(playSceneBackground);
  gameOverScene = new GameOverScene();

  currentScene = titleScene; // Because we start on the title
  setUpPortals();
}

function draw() {
  // In draw we just tell the current scene to draw
  // and whichever scene it is will display as per its class
  currentScene.draw();

}

function mousePressed() {
  // In mousePressed we call the mousePressed of the current scene
  // so it knows the mouse was pressed
  currentScene.mousePressed();
}

function setUpPortals(){
//   //array containing the informations of the portals
let portalProperties = [{
      x: windowWidth/2,
      y: windowHeight/2,
      width: 60,
      height: 60,
    },
    {
      x: windowWidth/1.5,
      y: windowHeight/2,
      width: 60,
      height: 60,
    }
  ];
        let portal = new Portal(portalProperties[0].x, portalProperties[0].y, portalProperties[0].width, portalProperties[0].height,worldOne);
        portalArray.push(portal);
        let portal1 = new Portal(portalProperties[1].x, portalProperties[1].y, portalProperties[1].width, portalProperties[1].height,worldTwo);
        portalArray.push(portal1);

}
