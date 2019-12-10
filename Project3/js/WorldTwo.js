"use strict"

class WorldTwo extends WorldOne {
  constructor(image, sound) {
    super();
    //set the initial values for this world
    //information related to the noise scale comes from cart 253 fall 2019 class
    this.noiseScale = 0.01;
    this.angle = 0;
    this.radius = 20;
    this.player = new Player(width / 2, height/2 - 400, 6, color(155, 255, 155), 50)
    this.image = image;
    this.sound = sound;
    this.sound.play();
    // this.player = new Player(100, 100, 6, color(0, 153, 153), 20)

    //information related to Word objects including: 3 arrays, the number of words to display, and a for loop to set up the word array that determins position, velocity, radius, color, and declration of a new word
    // adapted from https://github.com/pippinbarr/cart253-2019/blob/master/modules/core-arrays/core-arrays.md
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
      let colorWord = color(random(255), random(193), random(193));
      let radius = 5;
      let wordText = this.catchWords[Math.floor(random(this.catchWords.length))];
      let wordSize = random(10, 50);
      this.wordsArray.push(new Word(x, y, speed, colorWord, radius, wordText, wordSize));
    }
    //an array containing all the information related to the wallProperties
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
    //the array for the wallProperties index
    this.wallArray = [];
    //
    for (let i = 0; i < this.wallProperties.length; i++) {
      let wall = new Wall(this.wallProperties[i].x + 50, this.wallProperties[i].y + 60, this.wallProperties[i].width, this.wallProperties[i].height);
      this.wallArray.push(wall);
    }
  }

  //a function to draw everything on this level
  draw() {

    //draw the background
    background(this.image);
    //a for loop to handle the functions of the wordsArray (display,move,handle wrapping)
    for (let i = 0; i < this.wordsArray.length; i++) {
      this.wordsArray[i].display();
      this.wordsArray[i].move();
      this.wordsArray[i].handleWrapping();
    }
    //a cool way to make the color of the sun/moon shape ossilcate in color. the fill is mapped to a range and changes speed with the angle adjusted
    //adapted from https://github.com/pippinbarr/cart253-2019/blob/master/modules/graphics-transformations/graphics-transformations.md
    push();
    noStroke();
    this.fillColor = color(map(sin(this.angle), -10, 1, 0, 255), map(cos(this.angle), -5, 1, 0, 255, 0), 280);
    fill(this.fillColor);
    ellipse(width / 2, height / 2, 400);
    this.angle += 0.2;
    pop();
    //setting the portalProperties for both portals to change position, size, color, and states
    push();
    portalArray[0].x = width/2 + 350;
    portalArray[0].y = height/2 - 275;
    portalArray[0].radius = 60;
    portalArray[0].fillColor = color(255, 217, 179);
    portalArray[0].nextState = worldGameOver;
    pop();
    push();
    portalArray[1].x = width/2 + 450;
    portalArray[1].y = height/2 - 350;
    portalArray[1].radius = 40;
    portalArray[1].fillColor = color(255, 204, 153);
    pop();
    //information to set up the key location and size on start
    key.x = width/2;
    key.y = height/2 + 140;
    key.size = 80;
    key.fillColor = color(255, 230, 204);
    key.display();
    //information
    this.player.handleInput();
    this.player.move();
    this.player.display();
    //a variable that handles changing portals after the key is found and player overlaps
    this.handlePortalPosition();
    //a for loop for the noise that follows the movement of the player, here it has been used to create a mountain and ocean type imagery by
    //playing with the noiseScale and adjusting the strokeWeight and line information
    //adapted from https://p5js.org/reference/#/p5/noise
    for (let n = 0; n < width; n++) {
      let noiseVal = noise((this.player.x + n) * this.noiseScale, this.player.x * this.noiseScale);
      push();
      strokeWeight(1.2)
      stroke(noiseVal * 500, 153, 200);
      line(n + 400, this.player.y + noiseVal * 1000, n + 40, 850);
      pop();
    }
    //text to encourage the user to click the screen a lot to play the audio
    fill(255);
    textSize(40);
    text("click intuitively until your computer crashes to compose", width / 2,height/2 + 250);
  }

  //a function that handles the portal position by calling back to the original function in the WorldOne
  handlePortalPosition() {
    super.handlePortalPosition();
  }

  //a function to play and stop the audio when the mouse is pressed
  mousePressed() {
    // This will be called by the main program when it detects a mouse press
    push();
    this.sound.play();
    pop();
  }
}
