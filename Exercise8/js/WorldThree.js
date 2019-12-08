class WorldThree extends PlayScene {
  constructor(image, sound) {
    super();
    this.noiseScale = 0.1;
    this.angle = 0;
    this.radius = 20;
    this.player = new Player(0, 0, 6, color(255, 195, 195), 20)
    this.image = image;
    this.sound = sound;
    this.sound.play();
    this.player = new Player(100, 100, 6, color(0, 153, 153), 20)


    //the wall array
    // this.wallArray =[];
    //   for (let i = 0; i < this.wallProperties.length; i++) {
    //     let wall = new Wall(this.wallProperties[i].x+50, this.wallProperties[i].y+60, this.wallProperties[i].width, this.wallProperties[i].height);
    //     this.wallArray.push(wall);
    //   }
  }

  draw() {
    background(this.image);

    // push();
    //       imageMode(CENTER);
    //       // image(this.milky, width/2, height/2,windowWidth,windowHeight); // draw a second copy to canvas
    //       image(this.image, width/2, height/3,width/2,height/2); // draw a second copy to canvas
    // pop();

    push();
    noStroke();
    this.fillColor = color(map(sin(this.angle), -1, 1, 0, 255), map(cos(this.angle), -5, 1, 0, 255, 0), 150);
    fill(this.fillColor);
    ellipse(width / 2, height / 2, 400);
    this.angle += 0.03;
    pop();


    //varibales for the play to move, display, and deal with keys used and velocity
    this.player.handleInput();
    this.player.move();
    this.player.display();

    this.handlePortalPosition();

    //setting the portalProperties to change position and states

    portalArray[0].x = 150;
    portalArray[0].y = 50;
    portalArray[0].radius = 50;
    // portalArray[0].fillColor = color(0);
    portalArray[0].nextState = worldOne;

    portalArray[1].x = 300;
    portalArray[1].y = 200;
    portalArray[1].radius = 40;
    // portalArray[1].fillColor = color(0);
    portalArray[1].nextState = worldTwo;

    key.x = width / 2;
    key.y = 500;

    // // https://github.com/pippinbarr/cart253-2019/blob/master/modules/graphics-transformations/graphics-transformations.md
    // image(this.imageTest,width/2,height/2,this.radius*2)

    //a four loop for the noise that follows the movement of the player
    //adapted from https://p5js.org/reference/#/p5/noise

    for (let n = 0; n < width; n++) {
      let noiseVal = noise((this.player.y + n) * this.noiseScale, this.player.x * this.noiseScale);

      push();
      strokeWeight(5)
      stroke(noiseVal * 500, 153, 200);
      line(n + 400, this.player.y + noiseVal * 1000, n + 10, 900);
      pop();

      // push();
      // strokeWeight(1)
      // stroke(noiseVal * 500, 153, 200);
      // line(n - 400, this.player.x + noiseVal * 1000, n + 10, 900);
      // pop();

      // push();
      // stroke(noiseVal * 200,40,30);
      // ellipse(n, this.player.x + noiseVal * 1000, n, 30,2);
      // // // line(n, this.player.x + noiseVal * 500, n, height);//THIS LOOKS BEAUTIFU
      // pop();
    }

    //the walls
    //handling the Collision characteristics of a wall object
    //in relationship to the characters
    // for (let i = 0; i < this.wallArray.length; i++) {
    //   this.wallArray[i].handleCollision(this.player);
    //   this.wallArray[i].display();
    // }


        fill(255);
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
//
// mousePressed(){
//   this.sound.loop();
// };
