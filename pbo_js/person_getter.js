const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",

    get lang() {
        return this.language;
    }
}

//print
console.log(person.lang);