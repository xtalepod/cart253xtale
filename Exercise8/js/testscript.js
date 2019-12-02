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
// let textures;

//an array for the portals
// let portalArray = [];
let polyPortalArray = [];

//IMAGES
let imageTitleScene;
let imagePlayScene;
let imagePortalThree;
//an array for textures pictures
let portalThreeImages = [];
let polyPortal1;

function preload() {
  imageTitleScene = loadImage("assets/images/textures/image4.JPG");
  imagePlayScene = loadImage("assets/images/textures/image1.JPG");
  imagePortalThree = loadImage("assets/images/textures/image4.JPG")

  for (let i = 0; i < 4; i++){
  portalThreeImages[0] = loadImage ("assets/images/textures/image4.JPG") //(`assets/images/portalThree${i}.jpg`);
  portalThreeImages[1] = loadImage("assets/images/textures/image5.JPG")
  portalThreeImages[2] = loadImage("assets/images/textures/image6.JPG")
  portalThreeImages.push()

  }
}

function setup() {
 createCanvas(windowWidth,windowHeight);
  // Create the four scenes
  titleScene = new TitleScene(imageTitleScene);
  instructionsScene = new InstructionsScene();
  portalOne = new PortalOne();
  portalTwo = new PortalTwo();
  portalThree = new PortalThree(50,70,80,portalThreeImages[1]);
  playScene = new TestPlayScene(imagePlayScene);
  gameOverScene = new GameOverScene();
  // textures = new Textures(50,70,portalThreeImages[i])
  polyPortal1 = new TestPolyPortal(100,200,40,100,80,portalTwo);
  console.log(polyPortal1);

  currentScene = titleScene; // Because we start on the title
  // setUpPolyPortals();
  // setUpPortals();
}

function draw() {
  // In draw we just tell the current scene to draw
  // and whichever scene it is will display as per its class
  currentScene.draw();
  // variableEllipse(mouseX, mouseY, pmouseX, pmouseY);

}

// https://p5js.org/examples/drawing-patterns.html
// function variableEllipse(x, y, px, py) {
//   let speed = abs(x - px) + abs(y - py);
//   stroke(speed);
//   image(imageTitleScene, x, y, speed, speed);
// }
//

function mousePressed() {
  // In mousePressed we call the mousePressed of the current scene
  // so it knows the mouse was pressed
  currentScene.mousePressed();
}


// function setUpPolyPortals() {
//   console.log("setUpPolyPortals")
//
//   //array containing the informations of the portals
// let polyPortalProperties = [{
//       x: 600,
//       y: 300,
//       radius: 20,
//       width: 10,
//       height: 40,
//     },
// //     // {
// //     //   x: 200,
// //     //   y: 600,
// //     //   radius: 20,
// //     //   npoint: 4,
// //     //   width: 10,
// //     //   height: 40,
// //     // },
// //     // {
// //     //   x: 500,
// //     //   y: 700,
// //     //   radius: 20,
// //     //   npoint: 10,
// //     //   width: 10,
// //     //   height: 40,
// //     // }
//   ];
//         let portal = new TestPolyPortal(polyPortalProperties[0].x, polyPortalProperties[0].y, polyPortalProperties[0].radius,  polyPortalProperties[0].npoint, polyPortalProperties[0].width, polyPortalProperties[0].height,portalOne);
//         polyPortalArray.push(portal);
//         // let portal1 = new TestPolyPortal(polyPortalProperties[1].x, polyPortalProperties[1].y, polyPortalProperties[1].radius, polyPortalProperties[1].npoint, polyPortalProperties[1].width, polyPortalProperties[1].height,portalTwo);
//         // polyPortalArray.push(portal1);
//         // let portal2 = new TestPolyPortal(polyPortalProperties[2].x, polyPortalProperties[2].y, polyPortalProperties[2].radius,  polyPortalProperties[2].npoint, polyPortalProperties[2].width, polyPortalProperties[2].height,portalThree);
//         // polyPortalArray.push(portal2);
// }

// function polygon(x, y, radius, npoints) {
//   let angle = TWO_PI / npoints;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sx = x + cos(a) * radius;
//     let sy = y + sin(a) * radius;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }


// DONT FUCKING DELETE OR CHANGE THIS **********
// function setUpPortals(){
//   //array containing the informations of the portals
// let portalProperties = [{
//       x: 400,
//       y: 500,
//       width: 20,
//       height: 40,
//     },
//     {
//       x: 700,
//       y: 100,
//       width: 60,
//       height: 50,
//     },
//     {
//       x: 400,
//       y: 100,
//       width: 20,
//       height: 90,
//     }
//   ];
//         let portal = new Portal(portalProperties[0].x, portalProperties[0].y, portalProperties[0].width, portalProperties[0].height,portalOne);
//         portalArray.push(portal);
//         let portal1 = new Portal(portalProperties[1].x, portalProperties[1].y, portalProperties[1].width, portalProperties[1].height,portalTwo);
//         portalArray.push(portal1);
//         let portal2 = new Portal(portalProperties[2].x, portalProperties[2].y, portalProperties[2].width, portalProperties[2].height,portalThree);
//         portalArray.push(portal2);
// }/ DONT FUCKING DELETE OR CHANGE THIS **********

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
