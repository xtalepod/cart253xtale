

class InstructionsScene extends Scene {
  constructor(){
    super();
  }

  draw() {
    background(200);
    // Here we would draw the instructions on the screen
    // text("There is nothing to do because this is just an example!",200,200);
    // text("Click to play",200,20);

  }

  mousePressed() {
    currentScene = playScene;
    console.log("go into play")

  }
  // keyPressed() {
  //   video.loop();
  // }
}
