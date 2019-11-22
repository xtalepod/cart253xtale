class TitleScene extends Scene {
  constructor() {
    super();
    // this.x = x;
    // this.y = y;
    // this.image = image;
    // this.milky;
  }

// videoPreload(){
//   this.video = createVideo ('assets/video.mp4')
//   this.video.hide();
  draw() {
    // Here we would draw the title on the screen
    background(255,190,190);
    textSize(20);
    fill(0)
    text("click to continue")
    // imageMode(CENTER);

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
