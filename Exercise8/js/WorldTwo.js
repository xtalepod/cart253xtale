class WorldTwo extends PlayScene {
  constructor() {
    super();
    this.backgroundColor = color(255, 190, 190);
    this.phrasesIndex = 0;
    this.phrases = [
      "once i am dead",
      "to the left and right",
      "this illusionary duplication",
      "sinks abysmally and soars",
      "fathomless air; my body"
    ];
    // this.words = [
    //   "hexagons",
    //   "incessant",
    //   "inaccessibile"
    // ]

    // let angleX = 0.0;
    // let angleY = 0.0;
    
    // this.textProperties = [{}]
    //the wall array
    this.wallProperties = [{
        x: 400,
        y: 100 + 30,
        width: 20,
        height: 30,
      },
      {
        x: 200,
        y: 200,
        width: 200,
        height: 30
      },
      {
      x: 400,
      y: 100 + 30,
      width: 20,
      height: 30,
    },
    {
      x: 200,
      y: 200,
      width: 200,
      height: 30
    },
    ];

    this.wallArray = [];
    for (let i = 0; i < this.wallProperties.length; i++) {
      let wall = new Wall(this.wallProperties[i].x + 50, this.wallProperties[i].y + 60, this.wallProperties[i].width, this.wallProperties[i].height);
      this.wallArray.push(wall);
    }
  }

  draw() {
    background(this.backgroundColor);

    //   push();
    // rotateY(angleY);
    // box(60);
    // translate(50,0,50); // Translation in 3D!
    // rotateX(angleX);
    // rect(0,0,30,40);
    // angleX += 0.01;
    // angleY -= 0.01;
    // pop();



//setting the portalProperties to change position and states
    portalArray[0].x = 150;
    portalArray[0].y = 50;
    portalArray[0].nextState = worldOne;

    portalArray[1].x = 150;
    portalArray[1].y = 200;
    portalArray[1].nextState = worldThree;

    key.x = 100;
    key.y = 250;

    this.player.handleInput();
    // Move all the player
    this.player.move();
    this.handlePortalPosition();

    // this.phraseGenerator = random(this.phrases[this.phrasesIndex]);
    textSize(30);
    text(this.phrases[this.phrasesIndex], 40, height/2)
    //the walls
    //handling the Collision this.playeristics of a wall object
    //in relationship to the this.players
    for (let i = 0; i < this.wallArray.length; i++) {

      let isColliding = this.wallArray[i].handleCollisionPortalOne(this.player);
      console.log(isColliding)
      if(isColliding ==true){

        if(this.phrasesIndex <this.phrases.length-1){
             this.phrasesIndex +=1;
         }
         else{
           this.phrasesIndex=0;
         }

      }//if collid
        this.wallArray[i].handleCollision(this.player);
      this.wallArray[i].display();
    }



    this.player.display();
  }

  // a function that handles which portal we're entering
  handlePortalPosition() {
    super.handlePortalPosition();
  }
}
