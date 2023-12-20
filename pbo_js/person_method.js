let person1 = {
    firstName:"John",
    lastName:"Doe",
    id:5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person1.fullName());

console.