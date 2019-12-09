


class WorldThree extends PlayScene {
  constructor(image, sound) {
    super();

    this.noiseScale = 0.01;
    this.angle = 0;
    this.radius = 20;
    this.player = new Player(width/2 + 500, height/2, 6, color(102, 255, 102), 50)
    this.image = image;
    this.sound = sound;
    this.sound.play();
    // this.player = new Player(100, 100, 6, color(0, 153, 153), 20)

    // this.phrasesIndex = 0;
    // this.phrases = [
    //   "once i am dead",
    //   "to the left and right",
    //   "this illusionary duplication",
    //   "sinks abysmally and soars",
    //   "fathomless air; my body"
    // ];

    //information related to Word objects including: 3 arrays, the number of words to display, and a for loop to set up the word array that determins position, velocity, radius, color, and declration of a new word
    // adapted from https://github.com/pippinbarr/cart253-2019/blob/master/modules/core-arrays/core-arrays.md
        // this.catchWordsIndex = 0;
        this.catchWords = [
          "i am",
          "endlessly",
          "through universe",
          "floating",
          "not the ocean",
        ];
        this.numWords = 30;
        this.wordsArray = [];
        for (let i = 0; i < this.numWords; i++) {
          let x = random(-5, width);
          let y = random(5, height);
          let speed = random(-1, 1);
          let colorWord = color(random(255), random(255), random(255));
          let radius = 5;
          let wordText = this.catchWords[Math.floor(random(this.catchWords.length))];
          let wordSize = random(10,50);
          this.wordsArray.push(new Word(x, y, speed, colorWord, radius, wordText,wordSize));
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

  draw() {
    background(this.image);

    for (let i = 0; i < this.wordsArray.length; i++) {
      this.wordsArray[i].display();
      this.wordsArray[i].move();
      this.wordsArray[i].handleWrapping();
    }

    push();
    noStroke();
    this.fillColor = color(map(sin(this.angle), -10, 1, 0, 255), map(cos(this.angle), -5, 1, 0, 255, 0), 280);
    fill(this.fillColor);
    ellipse(width / 2, height / 2, 400);
    this.angle += 0.2;
    pop();


    //varibales for the play to move, display, and deal with keys used and velocity
    this.player.handleInput();
    this.player.move();
    this.player.display();

    this.handlePortalPosition();

    //setting the portalProperties to change position and states
push();
    portalArray[0].x = 200;
    portalArray[0].y = 30;
    portalArray[0].radius = 50;
    portalArray[0].nextState = worldOne;
pop();
push();
    portalArray[1].x = 300;
    portalArray[1].y = 200;
    portalArray[1].radius = 40;
    // portalArray[1].fillColor = color(0);
    // portalArray[1].nextState = worldTwo;
pop();

    key.x = width / 2;
    key.y = height/2;
    key.size = 10;

    // // https://github.com/pippinbarr/cart253-2019/blob/master/modules/graphics-transformations/graphics-transformations.md
    // image(this.imageTest,width/2,height/2,this.radius*2)

    //a four loop for the noise that follows the movement of the player
    //adapted from https://p5js.org/reference/#/p5/noise

    for (let n = 0; n < width; n++) {
      let noiseVal = noise((this.player.x + n) * this.noiseScale, this.player.x* this.noiseScale);

//mountains and ocean
      push();
      strokeWeight(1.2)
      stroke(noiseVal * 500, 153, 200);
      line(n + 400, this.player.y + noiseVal * 1000, n + 40, 850);
      pop();
    }

    //information for the text that appears when the player touches the walls
    //     push();
    //     textSize(34);
    //     fill(0);
    //     text(this.phrases[this.phrasesIndex], 40, height / 2)
    //     pop();
    // //handle the collision between the wall and the player + check for collision and IF true then move through phraseIndex array
    //     for (let i = 0; i < this.wallArray.length; i++) {
    //       let isColliding = this.wallArray[i].handleCollisionPortalOne(this.player);
    //       if (isColliding == true) {
    //         if (this.phrasesIndex < this.phrases.length - 1) {
    //           this.phrasesIndex += 1;
    //         } else {
    //           this.phrasesIndex = 0;
    //         }
    //       }
    //       this.wallArray[i].handleCollision(this.player);
    //       this.wallArray[i].display();
    //     }


    //the walls
    //handling the Collision characteristics of a wall object
    //in relationship to the characters
    // for (let i = 0; i < this.wallArray.length; i++) {
    //   this.wallArray[i].handleCollision(this.player);
    //   this.wallArray[i].display();
    // }
        fill(0);
        textSize(50);
        text("electroaccoustic music click to compose", width/2.5,700);

  }


  handlePortalPosition() {
    super.handlePortalPosition();
  }

  mousePressed() {
    // This will be called by the main program when it detects a mouse press
        this.sound.play();
  }
}
