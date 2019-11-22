"use strict"

class PortalThree extends PlayScene {
  constructor(){
    super();

    this.milky = createVideo('assets/milky3.mp4'); //, milkyLoad
  //  this.milky.size(5,5);
    this.milky.hide();



    //this.milkyVideo = new Video(windowWidth/2,windowHeight/2,5,5,this.milky);

    this.backgroundColor = color(0,0,255);
    // the wall array
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
    // this.videoArray = [];
    // //the video array
    // for (let i = 0; i < this.videoProperties.length; i++) {
    //   let movingPicture = new Video(this.videoProperties[i].x, this.videoProperties[i].y, this.videoProperties[i].width, this.videoProperties[i].height); //this.videoProperties[i].image
    //   this.videoArray.push(movingPicture);
    // }
  }

  draw() {
      background(this.backgroundColor);
      image(this.milky, 15, 15,150,150); // draw a second copy to canvas
          image(this.milky, 200, 200,150,150); // draw a second copy to canvas
      // this.milky.resize(50,50)

      //  image(this.milkyVideo, 0,0);
    //  console.log(this.milkyVideo);

      // for (let i = 0; i < this.videoProperties.length; i++){
      //   this.videoArray[i].display();
      //   this.videoArray[i].mousePressed();
      // }
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
  mousePressed() {
    // This will be called by the main program when it detects a mouse press
        this.milky.loop();
  }
}
