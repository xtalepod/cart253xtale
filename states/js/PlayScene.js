class PlayScene extends Scene {
  constructor() {
    super();

    this.backgroundColor = 200;

    //the player
    this.player = new TestPlayer(100, 30, 6, color(255, 195, 195), 50);
    //the key
    this.key = new TestKey(100, 700);
    //array containing the portals
    //array containing the informations of the walls
    this.wallProperties = [{
        x: 600,
        y: 40,
        width: 500,
        height: 20,
      },
      {
        x: 600,
        y: 40 + 100,
        width: 500,
        height: 20,
      },
      {
        x: 600 - 50,
        y: 40 + 245,
        width: 520,
        height: 10,
      },
      {
        x: 200,
        y: 540,
        width: 20,
        height: 500
      },
      {
        x: 700 + 100,
        y: 540,
        width: 20,
        height: 500
      },
      {
        x: 200 + 100,
        y: 540,
        width: 20,
        height: 300
      },
      {
        x: 700,
        y: 540 + 40,
        width: 20,
        height: 420
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

  //a function that handles the global variables related to portals
  handlePortalPosition() {
    console.log("health : " + health);
    if (health === NUMBER_PORTALS) {
      currentScene = gameOverScene;
    }
    //handling if the key is found
    this.key.handleFound(this.player);
    // Here we would draw the game on the screen
    for (let i = 0; i < portalArray.length; i++) {
      portalArray[i].handleExit(this.player, this.key);
      portalArray[i].display();
    }
    this.key.display();
  }

  draw() {
    background(this.backgroundColor);
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
}
