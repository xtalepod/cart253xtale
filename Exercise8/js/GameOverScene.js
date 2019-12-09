class GameOverScene extends Scene {
  constructor(){
    super();
  }
  draw() {
    background(200);
    // Here we would draw the game over on the screen
    text("GAME OVER!",500,500);
  }

  mousePressed() {
    // Nothing, because the game is over
  }
}
