

class InstructionsScene extends Scene {
  constructor(){
    super();
  }

  draw() {
    background(200);
    // Here we would draw the instructions on the screen
    textSize(20);
    fill(0);
    textSize(20);
    text("will explain here for now click again", 50,50);

  }

  mousePressed() {
    currentScene = playScene;
    console.log("go into play")

  }
  // keyPressed() {
  //   video.loop();
  // }
}
