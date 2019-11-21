class PortalOne extends PlayScene {
  constructor() {
    super();
    this.backgroundColor = color(255, 190, 190);
    this.phrasesIndex = 0;
    this.phrases = [
      "once i am dead",
      "to the left and right",
      "this illusionary duplication",
      "sinks abysmally and soars",
      "fathomless air; my body"
    ];
    // this.words = [
    //   "hexagons",
    //   "incessant",
    //   "inaccessibile"
    // ]

    // this.textProperties = [{}]
    //the wall array
    this.wallProperties = [{
        x: 400,
        y: 100 + 30,
        width: 20,
        height: 30,
      },
      {
        x: 200,
        y: 200,
        width: 200,
        height: 30
      },
    ];

    this.wallArray = [];
    for (let i = 0; i < this.wallProperties.length; i++) {
      let wall = new TestWall(this.wallProperties[i].x + 50, this.wallProperties[i].y + 60, this.wallProperties[i].width, this.wallProperties[i].height);
      this.wallArray.push(wall);
    }
  }

  draw() {
    background(this.backgroundColor);
    this.player.handleInput();
    // Move all the player
    this.player.move();
    this.handlePortalPosition();

    // this.phraseGenerator = random(this.phrases[this.phrasesIndex]);
    textSize(30);
    text(random(this.phrases[this.phrasesIndex]), 40, height/2)
    //the walls
    //handling the Collision this.playeristics of a wall object
    //in relationship to the this.players
    for (let i = 0; i < this.wallArray.length; i++) {
      this.wallArray[i].handleCollision(this.player);
      this.wallArray[i].display();
    }
      // this.wallArray[i].handleCollisionDisplay()
      this.phrasesIndex += 1;
      if (this.player.x + this.player.size / 2 > this.wallArray.x - this.wallArray.width / 2 && this.player.x - this.player.size / 2 <
          this.wallArray.x + this.wallArray.width / 2 && this.player.y + this.player.size / 2 > this.wallArray.y - this.wallArray.height / 2 && this.player.y -
          this.player.size / 2 < this.wallArray.y + this.wallArray.height / 2) {
          this.phrasesIndex +=1;
      }

    this.player.display();
  }

  // a function that handles which portal we're entering
  handlePortalPosition() {
    super.handlePortalPosition();
  }
}
