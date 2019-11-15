"use strict";

/*****************

EXERCISE 7
FINAL PROJECT PROTOTYPE

a minimalist DIY poetry generator
******************/
// let word1;
// let word2;
let words = [];
let specialWord;
function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 5; i++){
    let x = random(width);
    let y = random(height);
    let r = random(40,100);
    words[i] = new Words (x, y, r);
  }
specialWord = new Words (400,400,100)
// word1 = new French(200,200,50);
// word2 = new French (300, 300,100);

}

function draw() {
  background(255,90,183);
///for (b of words) is the same as what is commented out below
// for (let i = 0; i < words.length; i++) {
//   words[i].move();
//   words[i].show();
specialWord.x=mouseX;
specialWord.y=mouseY
specialWord.show();
specialWord.move();


//a nested loop!!!
for (let b of words) {
  b.show();
  b.move();
  let overlapping = false;
  for (let other of words) {
    if (b !== other && b.intersects(other)) {
overlapping = true;
}
}
if (overlapping) {
  b.changeColor(255);
}
  else {
    b.changeColor(0,190,190)
  }
}


  // if (word1.intersects(word2)){
  //   background(200,0,100);
  // }

  // word1.show();
  // word2.show();
  // word1.move();
  // // word2.move();
  // word2.x =mouseX;
  // word2.y = mouseY;
  }
