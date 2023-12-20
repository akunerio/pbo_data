function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "English";

let myFather = new Person("John", "Doe", 50, "blue");

console.log("My father nationality is " + myFather.nationality);