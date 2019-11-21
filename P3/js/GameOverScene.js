
class GameOverScene extends Scene {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }
  draw() {
    // Here we would draw the game over on the screen
    text("GAME OVER!",1000,1000);
  }

  mousePressed() {
    // Nothing, because the game is over
  }
}
