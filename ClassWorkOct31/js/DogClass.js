class Dog extends Animal {
  constructor(age, size, name) {
//super tells the constructor of the parent to give it the age it was given
    super(age, size, name);
  }

//adding a funtion to a class that is also in the super class means it OVERRIDES
//the parent class. BUT you can also do super.whatever(); so it DOES both
  eat() {
  super.eat();
    console.log("**makes a huge mess**");
  }
  bark() {
    console.log("Woof!");
  }
}
