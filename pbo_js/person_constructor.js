function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

let myFather = new Person("John", "Doe", 50, "blue");
let myMother = new Person("Sally", "Rally", 48, "green");


console.log("My father is " + myFather.firstName + ". My mother is " + myMother.lastName + ".");