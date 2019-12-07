 class PlayScene extends Scene {
   constructor(image) {
     super();
     this.windowWidth = windowWidth;
     this.windowHeight = windowHeight;
     // this.backgroundColor = 200;dfgdg
     this.image = image;
     // this.tint = tint;
     //the player
     this.player = new Player(800, 100, 6, color(255, 195, 195), 20);
     //the key
     // key = new Key(width/2 - 50, height/2);
     //array containing the portals
     //array containing the informations of the walls
     this.wallProperties = [{
         x: 280,
         y: 65,
         width: 440,
         height: 5
       },
       {
         x: 55,
         y: 270,
         width: 5,
         height: 420
       },
       {
         x: 85,
         y: 475,
         width: 70,
         height: 5
       },
       {
         x: 125,
         y: 425,
         width: 5,
         height: 110
       },
       {
         x: 125,
         y: 270,
         width: 5,
         height: 120
       },
       {
         x: 90,
         y: 215,
         width: 60,
         height: 5
       },
       {
         x: 115,
         y: 165,
         width: 110,
         height: 5
       },
       {
         x: 115,
         y: 115,
         width: 110,
         height: 5
       },
       {
         x: 215,
         y: 130,
         width: 5,
         height: 40
       },
       {
         x: 235,
         y: 115,
         width: 50,
         height: 5
       },
       {
         x: 265,
         y: 170,
         width: 5,
         height: 100
       },
       {
         x: 210,
         y: 215,
         width: 100,
         height: 5
       },
       {
         x: 165,
         y: 275,
         width: 5,
         height: 110
       },
       {
         x: 220,
         y: 325,
         width: 100,
         height: 5
       },
       {
         x: 265,
         y: 295,
         width: 5,
         height: 50
       },
       {
         x: 240,
         y: 265,
         width: 60,
         height: 5
       },
       {
         x: 315,
         y: 95,
         width: 5,
         height: 50
       },
       {
         x: 395,
         y: 115,
         width: 150,
         height: 5
       },
       {
         x: 465,
         y: 170,
         width: 5,
         height: 100
       },
       {
         x: 485,
         y: 215,
         width: 30,
         height: 5
       },
       {
         x: 375,
         y: 165,
         width: 90,
         height: 5
       },
       {
         x: 415,
         y: 195,
         width: 5,
         height: 50
       },
       {
         x: 360,
         y: 215,
         width: 100,
         height: 10
       },
       {
         x: 365,
         y: 300,
         width: 10,
         height: 60
       },
       {
         x: 335,
         y: 275,
         width: 50,
         height: 10
       },
       {
         x: 315,
         y: 325,
         width: 10,
         height: 90
       },
       {
         x: 480,
         y: 265,
         width: 40,
         height: 10
       },
       {
         x: 415,
         y: 320,
         width: 10,
         height: 100
       },
       {
         x: 460,
         y: 325,
         width: 80,
         height: 10
       },
       {
         x: 315,
         y: 375,
         width: 210,
         height: 10
       },
       {
         x: 165,
         y: 435,
         width: 10,
         height: 130
       },
       {
         x: 215,
         y: 405,
         width: 10,
         height: 50
       },
       {
         x: 245,
         y: 425,
         width: 50,
         height: 10
       },
       {
         x: 365,
         y: 405,
         width: 10,
         height: 50
       },
       {
         x: 335,
         y: 425,
         width: 50,
         height: 10
       },
       {
         x: 315,
         y: 465,
         width: 10,
         height: 70
       },
       {
         x: 285,
         y: 475,
         width: 50,
         height: 10
       },
       {
         x: 215,
         y: 485,
         width: 10,
         height: 30
       }

       // {x:	215	, y:	485	, width:	10	, height:	30},
       // {x:	55	, y:	15	, width:	90	, height:	10	},
       // {x:	30	, y:	45	, width:	40	, height:	10	},
       // {x:	90	, y:	45	, width:	40	, height:	10	},
       // {x:	45	, y:	90	, width:	10	, height:	80	},
       // {x:	75	, y:	75	, width:	10	, height:	50	},
       // {x:	105	, y:	25	, width:	10	, height:	30	},
       // {x:	105	, y:	95	, width:	50	, height:	10	},
       // {x:	165	, y:	95	, width:	30	, height:	10	},
       // {x:	165	, y:	55	, width:	90	, height:	10	},
       // {x:	125	, y:	75	, width:	10	, height:	30	},
       // {x:	205	, y:	80	, width:	10	, height:	40	},
       // {x:	155	, y:	110	, width:	10	, height:	20	},
       // {x:	175	, y:	115	, width:	10	, height:	30	},
       // {x:	230	, y:	95	, width:	40	, height:	10	},
       // {x:	250	, y:	125	, width:	140	, height:	10	},
       // {x:	245	, y:	55	, width:	10	, height:	70	},
       // {x:	275	, y:	70	, width:	10	, height:	40	},
       // {x:	300	, y:	85	, width:	40	, height:	10	},
       // {x:	300	, y:	55	, width:	40	, height:	10	},
       // {x:	315	, y:	105	, width:	10	, height:	30	},
       // {x:	345	, y:	25	, width:	190	, height:	10	},
       // {x:	345	, y:	65	, width:	10	, height:	70	},
       // {x:	355	, y:	125	, width:	70	, height:	10	}
     ];
     //array containing the walls
     this.wallArray = [];
     //the wall array
     for (let i = 0; i < this.wallProperties.length; i++) {
       // let wall = new Wall(this.wallProperties[i].x, this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
       let wallNW = new Wall(this.wallProperties[i].y - 10, this.wallProperties[i].x + 10, this.wallProperties[i].height, this.wallProperties[i].width);
       let wallNE = new Wall(this.windowWidth / 2 + this.wallProperties[i].x - 30, this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
       let wallSW = new Wall(this.wallProperties[i].x + 300, this.windowHeight - this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);
       let wallSE = new Wall(this.windowWidth - this.wallProperties[i].y, this.windowHeight - this.wallProperties[i].x, this.wallProperties[i].height, this.wallProperties[i].width);
       // let wallText= new Wall(this.windowWidth/2 + this.wallProperties[i].x-30,this.wallProperties[i].y, this.wallProperties[i].width, this.wallProperties[i].height);

       this.wallArray.push(wallNW);
       this.wallArray.push(wallNE);
       this.wallArray.push(wallSW);
       this.wallArray.push(wallSE);
       // this.wallArray.push(wallText);
     }
   }

   //a function that handles the global variables related to portals. if health = the totoal number of portals visited, "game" is over
   handlePortalPosition() {
     console.log("health : " + health);
     if (health === NUMBER_PORTALS) {
       currentScene = gameOverScene;
     }
     //handling if the key is found
     key.handleFound(this.player);
     // Here we would draw the game on the screen
     for (let i = 0; i < portalArray.length; i++) {
       portalArray[i].handleExit(this.player, key);
       portalArray[i].display();
     }
     //display the key from a global variable
     key.display();
   }

   draw() {

     background(this.image);
     // tint(this.tint);
     this.player.handleInput();
     // Move all the player
     this.player.move();
     this.handlePortalPosition();
     //the walls
     //handling the Collision characteristics of a wall object
     //in relationship to the characters
     for (let i = 0; i < this.wallArray.length; i++) {
       this.wallArray[i].handleCollision(this.player);
       this.wallArray[i].display();
     }
     this.player.display();
   }
   mousePressed() {
     // This will be called by the main program when it detects a mouse press
   }
 }
