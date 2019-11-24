class TitleScene extends Scene {
  constructor(image) {
    super();
    this.image = image;
    this.a = height/1.5;
  }

  draw() {
    // Here we would draw the title on the screen
    background(255,190,190);
//https://p5js.org/examples/motion-linear.html
    image(this.image,50,100,width/2,this.a);
    this.a = this.a - 0.2;
    if (this.a < 0){
      this.a = height;
    }

    image(this.image,width/2,250,900,500);
    image(this.image,width/4,250,400,200);
    textSize(20);
    fill(0);
    textSize(20);
    text("click to continue", 100,600);

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
