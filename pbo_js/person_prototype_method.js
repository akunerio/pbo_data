function Person(first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}


Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

let myFather = new Person("John", "Doe", 50, "blue");

console.log("My father Name is " + myFather.name());