

class PlayScene extends Scene {
  constructor(){
    super();

    this.backgroundColor = 200;

    //the player
this.player = new TestPlayer(100, 30, 6, color(255, 195, 195), 50);

//the portal and its properties
//// let portalX;
// let portalY;
//the key
this.key = new TestKey(100, 700);



//array containing the portals



//array containing the informations of the walls
this.wallProperties = [{
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
this.wallArray = [];


//the wall array
  for (let i = 0; i < this.wallProperties.length; i++) {
    let wall = new TestWall(this.wallProperties[i].x, this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
    this.wallArray.push(wall);
  }



  }

  handlePortalPosition(){

    // if(this.health== NUMBER_PORTALS){
    //    currentScene = gameOverScene;
    // }
    console.log("health : "+health);
    if(health === NUMBER_PORTALS ){
      currentScene = gameOverScene;
    }
    //handling if the key is found
    this.key.handleFound(this.player);
     // Here we would draw the game on the screen
     for (let i = 0; i < portalArray.length; i++) {
     portalArray[i].handleExit(this.player,this.key);
     portalArray[i].display();
   }


   // portal.handleExit(player);
   // portal.display();
   //
   this.key.display();

   // for (let i = 0; i < this.portalArray.length; i++) {
   //
   //   if (this.portalArray[i].state === "portalState1") {
   //     currentScene = portalOne;
   //     this.health++;
   //     break;
   //     //Shows the game over screen and resets all values to starting values
   //   //  this.displayPortal(i);
   //
   //     //this.player.reset();
   //     //this.key.isFound = false;
   //   }
   //   else if (this.portalArray[i].state === "portalState2") {
   //    // currentScene = portalOne;
   //     console.log("go to second portal");
   //      this.health++;
   //     break;
   //   }
   // }

  }



  draw() {
      background(this.backgroundColor);
      this.player.handleInput();
      // Move all the player
      this.player.move();

      this.handlePortalPosition();


  //the walls
  //handling the solid characteristics of a wall object
  //in relationship to the characters
  for (let i = 0; i < this.wallArray.length; i++) {
    this.wallArray[i].handleSolid(this.player);
    this.wallArray[i].display();
  }
  this.player.display();


  }

  mousePressed() {
  //  currentScene = gameOverScene;
  //  console.log("go into game over")
  }

//  displayPortal(portalIndex){
//   switch (portalIndex) {
//       case 0:
//       this.displayPortal0()
//       break;
//
//       case 1:
//       this.displayPortal1()
//       break;
//
//       case 2:
//       this.displayPortal2();
//       break;
//       }
// }
//
// displayPortal0() {
// this.backgroundColor = 0;
// }
//
//  displayPortal1() {
// this.backgroundColor = 255;
// }
//
// displayPortal2() {
// this.backgroundColor = 50;
// }
}
