class WorldTwo extends PlayScene {
  constructor() {
    super();
    this.backgroundColor = color(255, 190, 190);

//information related to wall and player collision for this world. Includes an index and an array of words.
    this.phrasesIndex = 0;
    this.phrases = [
      "once i am dead",
      "to the left and right",
      "this illusionary duplication",
      "sinks abysmally and soars",
      "fathomless air; my body"
    ];

//information related to Word objects including 3 arrays, the number of words to display, and a for loop to set up the word array that determins position, velocity, radius, color, and declration of a new word
// adapted from https://github.com/pippinbarr/cart253-2019/blob/master/modules/core-arrays/core-arrays.md
    this.catchWordsIndex = 0;
    this.catchWords = [
      "life",
      "is",
      "like",
      "a",
      "box",
      "of",
      "chocolates"
    ];
    this.numWords = 50;
    this.wordsArray = [];
    for (let i = 0; i < this.numWords; i++) {
      let x = random(-5, width);
      let y = random(5, height);
      let speed = random(-1, 1);
      let colorWord = color(random(255), random(255), random(255));
      let radius = random(1, 4);
      let wordText = this.catchWords[Math.floor(random(this.catchWords.length))];
      this.wordsArray.push(new Word(x, y, speed, colorWord, radius, wordText));
    }

//information related to Wall objects including properties for building a wall maze, an array, and a for loop
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
      {
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
      let wall = new Wall(this.wallProperties[i].x + 50, this.wallProperties[i].y + 60, this.wallProperties[i].width, this.wallProperties[i].height);
      this.wallArray.push(wall);
    }
  }


//draw function for this world, includes all the action oriented details related to words, the player, the walls
  draw() {
    background(this.backgroundColor);
    for (let i = 0; i < this.wordsArray.length; i++) {
      this.wordsArray[i].draw();
      this.wordsArray[i].move();
      this.wordsArray[i].handleWrapping();
      // this.wordsArray[i].handleCollision(this.player);
    }

//setting the portalProperties to change position and states
    portalArray[0].x = 150;
    portalArray[0].y = 50;
    portalArray[0].nextState = worldOne;
    portalArray[1].x = 150;
    portalArray[1].y = 200;
    portalArray[1].nextState = worldThree;
    this.handlePortalPosition();
//setting the specific key location for this world
    key.x = 100;
    key.y = 250;
//setting the player functions
    this.player.handleInput();
    this.player.move();
//information for the text that appears when the player touches the walls
    textSize(30);
    text(this.phrases[this.phrasesIndex], 40, height / 2)
//handle the collision between the wall and the player + check for collision and IF true then move through phraseIndex array
    for (let i = 0; i < this.wallArray.length; i++) {
      let isColliding = this.wallArray[i].handleCollisionPortalOne(this.player);
      if (isColliding == true) {
        if (this.phrasesIndex < this.phrases.length - 1) {
          this.phrasesIndex += 1;
        } else {
          this.phrasesIndex = 0;
        }
      }
      this.wallArray[i].handleCollision(this.player);
      this.wallArray[i].display();
    }
      this.player.display();
  }

// a function that handles which portal we're entering
  handlePortalPosition() {
    super.handlePortalPosition();
  }
}
