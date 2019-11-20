class PortalTwo extends PlayScene {
  constructor(){
    super();
    this.backgroundColor = color(0,255,0);
    //the wall array
    this.wallArray =[];
      for (let i = 0; i < this.wallProperties.length; i++) {
        let wall = new TestWall(this.wallProperties[i].x+50, this.wallProperties[i].y+60, this.wallProperties[i].width, this.wallProperties[i].height);
        this.wallArray.push(wall);
      }
  }

  draw() {
      background(this.backgroundColor);
      this.player.handleInput();
      // Move all the player
      this.player.move();

      this.handlePortalPosition();


  //the walls
  //handling the solid characteristics of a wall object
  //in relationship to the characters
  for (let i = 0; i < this.wallArray.length; i++) {
    this.wallArray[i].handleSolid(this.player);
    this.wallArray[i].display();
  }
  this.player.display();
  }


  handlePortalPosition(){
    super.handlePortalPosition();
  }


}
