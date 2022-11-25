// Any function inside objects is called method


// This will give error saying undefined firstName and age

// const person = {
//     firstName: "Rohit",
//     age: 18,
//     about: function () {
//         console.log(`My name is ${firstName} and I'm ${age} years old`);
//     }
// }
// console.log(person.about());

const person = {
    firstName: "Rohit",
    age: 18,
    about: function () {
        console.log(`My name is ${this.firstName} and I'm ${this.age} years old`);
    }
}
person.about();



// Second Example

function personInfo() {
    console.log(`My name is ${this.firstName} and I'm ${this.age} years old`);
}

const person1 = {
    firstName: "Rohit",
    age: 18,
    about: personInfo
}
const person2 = {
    firstName: "Mohit",
    age: 10,
    about: personInfo
}
const person3 = {
    firstName: "Sohit",
    age: 8,
    about: personInfo
}

person1.about();
person2.about();
person3.about();


