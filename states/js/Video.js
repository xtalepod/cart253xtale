class Video {
  constructor(x,y,width,height,image) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
    // this.image1 = image1;
    // this.image2 = image2;

  }

mousePressed(){
  let d = dist(mouseX, mouseY, this.x, this.y);
  //distance between the mouse and the edge of the video
  if (d < (this.width - this.width/2)){
      this.playVideo();
      console.log("mousePressed")
    }
}

  playVideo() {
    this.image.loop();
    this.image.hide();
}
  display(){
    push()
    imageMode(CENTER)
    image(this.image, this.x,this.y,this.width,this.height);
    // filter
    pop()
  }
}
