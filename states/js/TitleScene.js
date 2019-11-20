class TitleScene extends Scene {
  constructor() {
    super();
  }

  draw() {
    // Here we would draw the title on the screen
    text("My amazing game",300,30);
    text("Click for instructions",500,20);

  }

  mousePressed() {
    // state and instructionsScene are global variables defined in the main script
    // and we use them to change the current state of the program
    // so this will switch the state to the instructions
    currentScene = instructionsScene;
    console.log("go into intructions")

  }
}
