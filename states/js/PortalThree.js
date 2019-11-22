class PortalThree extends PlayScene {
  constructor(){
    super();
    this.backgroundColor = color(0,0,255);
    //the wall array
    // this.wallArray =[];
    //   for (let i = 0; i < this.wallProperties.length; i++) {
    //     let wall = new TestWall(this.wallProperties[i].x+50, this.wallProperties[i].y+60, this.wallProperties[i].width, this.wallProperties[i].height);
    //     this.wallArray.push(wall);
    //   }
    this.videoProperties = [
      {
      x : 40,
      y : 50,
      width : 100,
      height : 100,
      // image : milkyVideo
      },
      { x : 100,
        y : 100,
        width : 40,
        height : 50,
        // image : milkyVideo
      },
    ];
    this.videoArray = [];
    //the video array
    for (let i = 0; i < this.videoProperties.length; i++) {
      let movingPicture = new Video(this.videoProperties[i].x, this.videoProperties[i].y, this.videoProperties[i].width, this.videoProperties[i].height,this.videoProperties[i].image);
      this.videoArray.push(movingPicture);
  }
}

  draw() {
      background(this.backgroundColor);

      for (let i = 0; i < this.videoProperties.length; i++){
        this.videoArray[i].display();
        this.videoArray[i].mousePressed();
      }
      this.player.handleInput();
      // Move all the player
      this.player.move();
      this.handlePortalPosition();


  // //the walls
  // //handling the Collision characteristics of a wall object
  // //in relationship to the characters
  // for (let i = 0; i < this.wallArray.length; i++) {
  //   this.wallArray[i].handleCollision(this.player);
  //   this.wallArray[i].display();
  // }
  this.player.display();
  }


  handlePortalPosition(){
    super.handlePortalPosition();
  }
}
