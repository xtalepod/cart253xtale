//words are daniels bubbles

// class French extends Dictionary {

  class Words {
  	constructor(x, y, r) {
  		this.x = x;
  		this.y = y;
  		this.r = r;
      this.brightness = 0;
  	}

    intersects(other) {

      let d = dist(this.x, this.y, other.x,other.y)

//this return result statement does the same as the next 4 lines
      return (d < this.r + other.r)}
    //   if (d< this.r +other.r){
    //     return true;
    //   }
    //     return false;
    // }

changeColor(bright){
  this.brightness = bright;

}
contains (px, py) {
  let d = dist (px, py, this.x, this.y);
  if (d < this.r) {
    return true;
  } else {
    return false;
  }
}

  	move() {
  		this.x = this.x + random(-5, 5);
  		this.y = this.y + random(-5, 5);
  	}

  	show() {
  		stroke(255);
  		strokeWeight(4);
  	fill(this.brightness, 125);
  		ellipse(this.x, this.y, this.r * 2);
  	}
  }
