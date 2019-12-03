class WorldTwo extends PlayScene {
  constructor(){
    super();
    this.backgroundColor = color(0,255,0);
    this.noiseScale = 0.5;
    //the wall array
    this.wallArray =[];
      for (let i = 0; i < this.wallProperties.length; i++) {
        let wall = new Wall(this.wallProperties[i].x+50, this.wallProperties[i].y+60, this.wallProperties[i].width, this.wallProperties[i].height);
        this.wallArray.push(wall);
      }
  }

  draw() {
      background(this.backgroundColor);
      background(255, 193, 170, 10);
  for (let n = 0; n < width; n++) {
    let noiseVal = noise((this.player.x + n) * this.noiseScale, this.player.y * this.noiseScale);
    stroke(noiseVal * 30);
    line(n, this.player.y + noiseVal * 100, n, height);
  }
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


  handlePortalPosition(){
    super.handlePortalPosition();
  }


}
