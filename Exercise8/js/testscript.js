"use strict"


let currentScene; // To store the current scene;
let titleScene;
let instructionsScene;
let playScene;
let gameOverScene;
let portalOne;
let portalTwo;
let portalThree;
const NUMBER_PORTALS = 3;
let health = 0;
let portalArray = [];



function setup() {
 createCanvas(windowWidth,windowHeight);
  // Create the four scenes
  titleScene = new TitleScene();
  instructionsScene = new InstructionsScene();
  portalOne = new PortalOne();
  portalTwo = new PortalTwo();
  portalThree = new PortalThree();
  playScene = new PlayScene();
  gameOverScene = new GameOverScene();


  currentScene = titleScene; // Because we start on the title
  setUpPortals();
}

function draw() {
  // In draw we just tell the current scene to draw
  // and whichever scene it is will display as per its class
  currentScene.draw();
  // imageMode(CENTER);
  // image(milky,100,100);
}
// function milkyLoad(){
//   milky.loop();
//   milky.volume(3);
// }
function mousePressed() {
  // In mousePressed we call the mousePressed of the current scene
  // so it knows the mouse was pressed
  currentScene.mousePressed();
}

// function keyPressed() {
//   milky.loop();
//   milky.volume(3);
// }


function setUpPortals(){

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
        let portal = new TestPortal(portalProperties[0].x, portalProperties[0].y, portalProperties[0].width, portalProperties[0].height,portalOne);
        portalArray.push(portal);
        let portal1 = new TestPortal(portalProperties[1].x, portalProperties[1].y, portalProperties[1].width, portalProperties[1].height,portalTwo);
        portalArray.push(portal1);
        let portal2 = new TestPortal(portalProperties[2].x, portalProperties[2].y, portalProperties[2].width, portalProperties[2].height,portalThree);
        portalArray.push(portal2);
}

// function setUpVideos() {

  // let videoProperties = [
      //   {
      //   x : 40,
      //   y : 50,
      //   width : 100,
      //   height : 100,
      //   image : milky
      //   },
      //   { x : 100,
      //     y : 100,
      //     width : 40,
      //     height : 50,
      //     image : milky
      //   },
      // ];
      // let videoArray = [];
      // //the video array
      //   let video1 = new Video(videoProperties[0].x, videoProperties[0].y, videoProperties[0].width, videoProperties[0].height,videoProperties[0].image);
      //   videoArray.push(video1);
      //   let video2 = new Video(videoProperties[1].x, videoProperties[1].y, videoProperties[1].width, videoProperties[1].height,videoProperties[1].image);
      //   videoArray.push(video2);
// }
