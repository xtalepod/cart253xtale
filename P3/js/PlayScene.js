

class PlayScene extends Scene {
  constructor(x, y, width, height){
    super(x,y,width,height);
console.log("go into player movement");
  }
  handleInput() {
    // Horizontal movement
    if (keyIsDown(player.leftKey)) {
      player.vx = -player.speed;
      player.isMovingSideways = true;
    } else if (keyIsDown(player.rightKey)) {
      player.vx = player.speed;
      player.isMovingSideways = true;
    } else {
      player.vx = 0;
      player.isMovingSideways = false;
    }
    // Vertical movement
    if (keyIsDown(player.upKey)) {
      player.vy = -player.speed;
      player.isMoving = true;
    } else if (keyIsDown(player.downKey)) {
      player.vy = player.speed;
      player.isMoving = true;
    } else {
      player.vy = 0;
      player.isMoving = false;
    }
  }

  move(player) {
    // Update position
    player.x += player.vx;
    player.y += player.vy;
    console.log(player.vx);
    player.handleBoundaries();
  }

  // handleBoundaries()
  //
  // Checks if the prey has gone off the canvas and
  // prevents it from it, as a wall would do
  handleBoundaries(player) {
    player.x = constrain(player.x, 0 + player.size / 2, width - player.size);
    player.y = constrain(player.y, 0 + player.size / 2, height - player.size);
  }
  // handleInput(){
  //   player.handleInput();
  //   // Move all the player
  //   player.move();
  //   //handling if the key is found
  //   key.handleFound(player);
  // }

  draw() {

    for (let i = 0; i < portalArray.length; i++) {
        portalArray[i].handleExit(player);
        portalArray[i].display();
      }

      for (let i = 0; i < wallArray.length; i++) {
        wallArray[i].handleSolid(player);
        wallArray[i].display();
      }
    // Here we would draw the game on the screen
    text("THE GAME IS ON!",500,250);
    text("IF YOU CLICK THE GAME IS OVER!",500,500);
  }

  mousePressed() {
    currentScene = gameOverScene;
    console.log("go into game over")
  }
}
