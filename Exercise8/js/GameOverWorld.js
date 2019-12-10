"use strict"


//world one is actually the game over state!
class GameOverWorld extends WorldOne {
  constructor(x, y, r, image) {
    super();

    this.backgroundColor = color(0, 255, 128);
    this.milky = createVideo('assets/milky3.mp4');
    this.milky.hide();
    this.player = new Player(100, 100, 6, color(0), 20)
    this.image = image;

    this.shelfProperties = [{
        x: width / 2,
        y: height / 3 + 150,
        width: 500,
        height: 20,
        fillColor: color(155, 255, 155)
      },
      {
        x: width / 2 + 60,
        y: height / 3 + 225,
        width: 500,
        height: 20,
        fillColor: color(255, 204, 153)
      },
      {
        x: width / 2 + 120,
        y: height / 3 + 300,
        width: 500,
        height: 20,
        fillColor: color(255, 217, 179)
      },
      {
        x: width / 2 + 180,
        y: height / 3 + 375,
        width: 500,
        height: 20,
        fillColor: color(255, 230, 204)
      },
      {
        x: width / 2 + 260,
        y: height / 3 + 450,
        width: 500,
        height: 20,
        fillColor: color(255, 243, 230)
      },
    ];

    this.shelfArray = [];
    // //the shelf array which looks like layered shelves in this level
    for (let i = 0; i < this.shelfProperties.length; i++) {
      let shelf = new Wall(this.shelfProperties[i].x, this.shelfProperties[i].y, this.shelfProperties[i].width, this.shelfProperties[i].height, this.shelfProperties[i].fillColor);;
      this.shelfArray.push(shelf);

      //end of game index?
      this.phrasesIndex = 0;
      //the poetry found here was written by jorges luis borges in his short story LIBRARY OF BABLE
      //https://maskofreason.files.wordpress.com/2011/02/the-library-of-babel-by-jorge-luis-borges.pdf
      this.phrases = [
        "game is over",
        "so long",
        "start over",
        "click to play video",
        "over"
      ];

    }

    this.angle = 0;
  }

  draw() {
    background(155, 290, 155);
    push();
    imageMode(CENTER);
    image(this.milky, width / 2, height / 3, width / 2, height / 2); // draw a second copy to canvas
    pop();
    //setting the portalProperties to change position and states

    portalArray[0].x = width / 4 - 50;
    portalArray[0].y = height / 2 + 200;
    portalArray[0].fillColor = color(255, 217, 179);
    portalArray[0].radius = 60;
    // portalArray[0].nextState = worldTwo;

    portalArray[1].x = width / 2 + 450;
    portalArray[1].y = height / 2;
    portalArray[1].fillColor = color(255, 217, 179);
    portalArray[1].radius = 100;
    portalArray[1].nextState = titleScene;
    this.handlePortalPosition();

    push();
    key.x = width / 2 + 240
    key.y = height / 1.5 - 49;
    key.size = 30;
    key.fillColor = color(0);
    key.display();
    pop();

    // for (let i = 0; i < this.shelfArray.length; i++) {
    //   this.shelfArray[i].handleCollision(this.player);
    //   this.shelfArray[i].display();
    // }

    //text information to go with the phraseIndex and display when this.player2 collides with the wallArray
    textSize(50);
    text(this.phrases[this.phrasesIndex], width / 2 + 300, height / 2)
    //for loop and boolean to handle the collision between the wall and the player2 + check for collision and IF true then move through phraseIndex array
    for (let i = 0; i < this.shelfArray.length; i++) {
      let isColliding = this.shelfArray[i].handleCollision(this.player);
      // console.log(isColliding);
      if (isColliding == true) {
        if (this.phrasesIndex < this.phrases.length - 1) {
          this.phrasesIndex += 1;
        } else {
          this.phrasesIndex = 0;
        }
      }
      this.shelfArray[i].handleCollision(this.player);
      this.shelfArray[i].display();
    }

    //handling the input, movement, and display of the player
    this.player.handleInput();
    this.player.move();
    this.player.display();
    console.log(this.player + this.player.x + this.player.y);
  }


  handlePortalPosition() {
    super.handlePortalPosition();
  }
  mousePressed() {
    // This will be called by the main program when it detects a mouse press
    this.milky.play();
  }
}
