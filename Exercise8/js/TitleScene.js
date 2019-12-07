class TitleScene extends Scene {
  constructor(image) {
    super();
    this.image = image;

    this.titleSceneImages = [];
    this.titleSceneImages[0] = loadImage ("assets/images/textures/image4.JPG");
    this.titleSceneImages[1] = loadImage("assets/images/textures/image5.JPG");
    this.titleSceneImages[2] = loadImage("assets/images/textures/image6.JPG");
    this.random1 = floor(random(0,this.titleSceneImages.length));
    this.random2 = floor(random(0,this.titleSceneImages.length));

    // this.sandPatterns = [];
    //
    // for (let i = 0; i < 10; i++) {
    //    this.x = random(width);
    //    this.y = random(height);
    //    this.r = random(20, 60);
    //    this.b = new Pictures(this.x,this.y,this.r);
    //    this.pictures.sandPatterns.push(this.b);
    //  }


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

    this.a = height/1.5;
    this.c = height/2;
  }

  draw() {
    // Here we would draw the title on the screen
    background(this.titleSceneImages[2]);


    // for (let i = 0; i < sandPatterns.length; i++) {
    //    this.sandPatterns.[i].move();
    //    this.sandPatterns[i].display();
    //  }

     //
     //***should have an if statement here that if scenechanges images stop moving
     push();
         image(this.titleSceneImages[2],50,100,width/2,this.a);
         image(this.titleSceneImages[2],this.a,250,this.a,250);
         image(this.titleSceneImages[2],this.a,30,this.a,500);
         this.a = this.a + 2;
         if (this.a < 0){
           this.a = height + 10;
         }
      pop();

      push();
          image(this.titleSceneImages[2],100,10,width/2,this.c);
            image(this.titleSceneImages[2],this.c,250,this.c,250);
          image(this.titleSceneImages[2],this.c + 800, 600,this.c - 200,250);
          image(this.titleSceneImages[2],this.c,30,1000,200);
          this.c = this.c -2;
          if (this.c < 0){
            this.c = height - 10;
          }
       pop();

    // image(this.titleSceneImages[2],400,400,400,400)
    // image(this.titleSceneImages[this.random1],250,250,250,250);
    // image(this.titleSceneImages[this.random2],width/5,height/2,100,500);


    // let r = floor(random(0,this.titleSceneImages.length));
    // image( this.titleSceneImages[r],width/4,250,400,200);
    // r = floor(random(0,this.titleSceneImages.length));
    // image( this.titleSceneImages[r],width/4,25,40,500);
// push();
//     textSize(50);
//     fill(0);
//     textSize(20);
//     text("click to continue", 100,600);
  // pop();

    fill(0);
    textSize(50);
    text("...click anywhere to continue", 100,600);


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
