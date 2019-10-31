class Circle extends Shape {
  constructor(x,y,size,color) {
    super(x,y,size);
    this.color = color;
    console.log("he?");
  }


  update () {
    super.update();
    this.size += random (-5,5);
  }
  display() {
    push();
    fill(this.color);
    stroke(0);
    strokeWeight(10);
    ellipse(this.x,this.y,this.size,this.size);
    pop();
  }
}
