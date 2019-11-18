

class PlayScene extends Scene {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }

  draw() {
    // Here we would draw the game on the screen
    text("THE GAME IS ON!",500,250);
    text("IF YOU CLICK THE GAME IS OVER!",500,500);
  }

  mousePressed() {
    currentScene = gameOverScene;
    console.log("go into game over")
  }
}
