//this is a super class for shapes

class Shape {
  constructor(x,y,size,color) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  //UPDATE IS A GENERIC FUNCTION USED TO UPDATE WHAT AN OBJECT IS DOING EVERY FRAME
  update() {
    this.x += random(-1,1);
    this.y += random(-1,1);
  }

  //THIS IS A METHOD THAT DOESN'T HAVE TO DO ANTYHING JUST REMIND YOU IS NEEDS TO BE
  //IN THE CHILD CLASS
  display() {
    // A generic shape cannot be displayed
    // But it makes sense to tell anyone extending this class to include one!
  }
}
