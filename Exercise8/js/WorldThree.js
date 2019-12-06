class WorldThree extends PlayScene {
  constructor(){
    super();
    // this.backgroundColor = color(255);
    this.noiseScale = 0.01;
    this.angle = 0;
    this.radius = 20;
    // this.width;
    // this.height;
    this.imageTest = loadImage ("assets/images/textures/image4.JPG");
    // this.fill = color(255,10,10);
    // this.planets = [];
    // this.planet = {
    //   x:200,
    //   y:399,
    //   display:ellipse(x,y,24,24),
    //   move: x = x + random(-1,1) y =this.y + random(-1,1),
    //   },
    // }

    //the wall array
    // this.wallArray =[];
    //   for (let i = 0; i < this.wallProperties.length; i++) {
    //     let wall = new Wall(this.wallProperties[i].x+50, this.wallProperties[i].y+60, this.wallProperties[i].width, this.wallProperties[i].height);
    //     this.wallArray.push(wall);
    //   }
  }

  draw() {
      background(255,255,190);
      push();
      this.fillColor = color(map(sin(this.angle),-5,1,0,255),map(cos(this.angle),-8,1,0,255,0),100);
      fill(this.fillColor);
      ellipse(width/2, height/2,400);
      this.angle += 0.03;
      pop();


//setting the portalProperties to change position and states
      portalArray[0].x = 150;
      portalArray[0].y = 50;
      portalArray[0].nextState = worldOne;

      portalArray[1].x = 300;
      portalArray[1].y = 200;
      portalArray[1].nextState = worldTwo;

      key.x = width/2;
      key.y = 250;
      // this.planet.move();
      // this.planet.display();
// // https://github.com/pippinbarr/cart253-2019/blob/master/modules/graphics-transformations/graphics-transformations.md
//
//       // tint(this.fillColor);
//       // image(this.imageTest,width/2,height/2,this.radius*2)

      // background(255, 193, 170, 10);

//a four loop for the noise that follows the movement of the player
  //adapted from https://p5js.org/reference/#/p5/noise
  // push();
  for (let n = 0; n < width; n++) {
    let noiseVal = noise((this.player.x + n) * this.noiseScale, this.player.y * this.noiseScale);
    push();
    stroke(noiseVal / 50);
    fill(this.fillColor);
    line(n, this.player.x + noiseVal * 200, n, height);
    // pop();
    // push();
    // noStroke();
    // fill(this.fillColor);
    // console.log(this.fillColor);
    line(10, this.player.x + noiseVal * 500, n, height);//THIS LOOKS BEAUTIFUL
    // line(n, this.player.x + noiseVal * 500, n, height);//THIS LOOKS BEAUTIFU
  }
  // pop();

  //varibales for the play to move, display, and deal with keys used and velocity
      this.player.handleInput();
      this.player.move();
      this.player.display();

      this.handlePortalPosition();


  //the walls
  //handling the Collision characteristics of a wall object
  //in relationship to the characters
  // for (let i = 0; i < this.wallArray.length; i++) {
  //   this.wallArray[i].handleCollision(this.player);
  //   this.wallArray[i].display();
  // }
  }


  handlePortalPosition(){
    super.handlePortalPosition();
  }


}
