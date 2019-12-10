class TitleScene extends Scene {
  constructor(image) {
    super();
    this.image = image;

    this.titleSceneImages = [];
    this.titleSceneImages[0] = loadImage("assets/images/textures/image4.JPG");
    this.titleSceneImages[1] = loadImage("assets/images/textures/image5.JPG");
    this.titleSceneImages[2] = loadImage("assets/images/textures/image6.JPG");
    this.random1 = floor(random(0, this.titleSceneImages.length));
    this.random2 = floor(random(0, this.titleSceneImages.length));

    this.a = height / 1.5;
    this.c = height / 2;
  }

  draw() {
    // Here we would draw the title on the screen
    background(255, 217, 179);

    push();
    image(this.titleSceneImages[2], 50, 100, width / 2, this.a);
    image(this.titleSceneImages[2], this.a, 250, this.a, 250);
    image(this.titleSceneImages[2], this.a, 30, this.a, 500);
    this.a = this.a + 0.2;
    if (this.a < 0) {
      this.a = height + 10;
    }
    pop();

    push();
    image(this.titleSceneImages[2], 100, 10, width / 2, this.c);
    image(this.titleSceneImages[2], this.c, 250, this.c, 250);
    image(this.titleSceneImages[2], this.c + 800, 600, this.c - 200, 250);
    image(this.titleSceneImages[2], this.c, 30, 1000, 200);
    this.c = this.c - 0.1;
    if (this.c < 0) {
      this.c = height - 10;
    }
    pop();

    fill(0);
    textSize(50);
    text("...click anywhere to continue", 100, height/2 + 300);
    fill(0);
    textSize(50);
    text("find the key enter the portal", 100, height/2 + 350);
    text("WSAD to move", 100, height/2 + 400);


  }
  mousePressed() {
    // state and instructionsScene are global variables defined in the main script
    // and we use them to change the current state of the program
    // so this will switch the state to the instructions
    currentScene = worldOne;
    console.log("go into worldOne")
  }
}
//
// keyPressed(){
//   this.image.loop();
// }

//https://p5js.org/examples/motion-linear.html

// push();
// image(this.image,50,100,width/2,this.a);
// this.a = this.a - 0.2;
// if (this.a < 0){
//   this.a = height;
// }
// pop();
// image(this.image,width/2,250,900,500);
// image(this.image,width/4,250,400,200);
// image(this.image,width/4,25,40,500);

//   this.titleSceneImages;
//
//   for (let i = 0; i < 3; i++){
//   titleSceneImages[0] = loadImage ("assets/images/textures/image4.JPG")
//   titleSceneImages[1] = loadImage("assets/images/textures/image5.JPG")
//   titleSceneImages[2] = loadImage("assets/images/textures/image6.JPG")
//   titleSceneImages.push()
// };
//
//   // this.sand = loadImage("assets/images/textures/image4.JPG");
//   // this.water = loadImage("assets/images/textures/image1.JPG");
