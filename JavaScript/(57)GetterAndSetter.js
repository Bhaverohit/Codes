class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName
    }

    firstName() {
        return this.fName;
    }

    lastName() {
        return this.lName;
    }

    get fullName() {
        return `${this.fName} ${this.lName}`;
    }

    setName(fName, lName) {
        this.fName = fName;
        this.lName = lName
    }
}


const person = new Person("Rohit", "Bhave"); // Making object or instance
console.log(person.fName);
console.log(person.lName);
// console.log(person.fullName()); // After adding get before fn name you cannot use parenthesis after fn name

console.log(person.fullName); // It'll return function instead of value, so to receive value from this fn we have to add "get" before fn name

person.setName("Dairy", "Milk");
console.log(person.fullName);