class TitleScene extends Scene {
  constructor(image) {
    super();
    // this.x = x;
    // this.y = y;
    this.image = image;
    // this.milky;
    // this.backgroundImage = loadImage("assets/images/textures/image4.JPG");
  }

// videoPreload(){
//   this.video = createVideo ('assets/video.mp4')
//   this.video.hide();
  draw() {
    // Here we would draw the title on the screen
    background(255,190,190);
    // image(this.backgroundImage,width/2,250,900,500);
    // image(this.backgroundImage,width/4,250,400,200);
    textSize(20);
    fill(0);
    textSize(20);
    text("click to continue", 100,600);
    // imageMode(CENTER);

  }

  display() {
  //   tint(0,255,,190);
    imageMode(CENTER);
    image(this.image,500,200,width,height);
    // console.log(this.image);;
  //
  }

  mousePressed() {
    // state and instructionsScene are global variables defined in the main script
    // and we use them to change the current state of the program
    // so this will switch the state to the instructions
    currentScene = instructionsScene;
    console.log("go into intructions")

  }
  //
  // keyPressed(){
  //   this.image.loop();
  // }
}
