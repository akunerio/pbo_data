class Car {
    constructor(brand) {
        this.carname= brand
    }

    get cnam() {
        return this.carname
    }

    set cnam(x) {
        this.carname = x
    }
}

let myCar = new Car("Ford")
myCar.cnam = "Volvo"

console.log(myCar.cnam)
