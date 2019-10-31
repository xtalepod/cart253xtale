class Square extends Shape {
  constructor(x,y,size,color) {
    super(x,y,size);
    this.color = color;
    console.log("hello color");
  }
  display() {
    push();
    rectMode(CENTER);
    fill(this.color);
    stroke(0);
    strokeWeight(40);
    rect(this.x,this.y,this.size,this.size);
    pop();
  }
}
