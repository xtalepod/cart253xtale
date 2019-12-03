class TitleScene extends Scene {
  constructor(image) {
    super();
    this.image = image;
    this.titleSceneImages = [];
    this.titleSceneImages[0] = loadImage ("assets/images/textures/image4.JPG")
    this.titleSceneImages[1] = loadImage("assets/images/textures/image5.JPG")
    this.titleSceneImages[2] = loadImage("assets/images/textures/image6.JPG")
    //
    //   this.pictureProperties = [{
    //     x:50,
    //     y:50,
    //     width:100,
    //     height:100
    //     },
    //     {
    //     x:100,
    //     y:100,
    //     width:100,
    //     height:100
    //   }
    //   ];
    //
    //   this.pictureArray = [];
    //
    //   for (let i = 0; i < this.pictureProperties.length; i++) {
    //     let pictureTop = new Pictures (this.pictureProperties[i].y-10, this.pictureProperties[i].x+10, this.pictureProperties[i].height, this.pictureProperties[i].width);
    //     this.pictureArray.push(pictureTop);

    // this.a = height/1.5;
  }

  draw() {
    // Here we would draw the title on the screen
    background(255,190,190);
          // console.log(this.pictureArray[i].display);
//
// floor(random() * images.length)
//           image(random(this.image,width/2,250,900,500));


    let r = floor(random(0,this.titleSceneImages.length));
    image( this.titleSceneImages[r],width/4,250,400,200);
    r = floor(random(0,this.titleSceneImages.length));
    image( this.titleSceneImages[r],width/4,25,40,500);

    // for (let i = 0; i < this.pictureArray.length; i++) {
    //   this.pictureArray[i].display();
    // }

    textSize(20);
    fill(0);
    textSize(20);
    text("click to continue", 100,600);
  }
  mousePressed() {
    // state and instructionsScene are global variables defined in the main script
    // and we use them to change the current state of the program
    // so this will switch the state to the instructions
    currentScene = playScene;
    console.log("go into playScene")
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
