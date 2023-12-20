class Car {
    constructor(name, year) {
        this.name= name;
        this.year= year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar1 = new Car("Ford",2014);

console.log("My Car is " + myCar1.age() + " years old.");