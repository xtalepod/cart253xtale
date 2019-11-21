class TitleScene extends Scene {
  constructor(x,y,width,height) {
    super(x,y,width,height);
  }

  draw() {
    // Here we would draw the title on the screen
    text("title",300,30);


  }

  mousePressed() {
    // state and instructionsScene are global variables defined in the main script
    // and we use them to change the current state of the program
    // so this will switch the state to the instructions
    currentScene = instructionsScene;
    console.log("go into intructions")

  }
}
