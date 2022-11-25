
// Call
// Guess you need to borrow some function of object1 for object2

const person = {
    firstName: "Rohit",
    age: 18,
    about: function Info() {
        console.log(`My name is ${this.firstName} and I'm ${this.age} years old`);
    }
}

const person1 = {
    firstName: "Mohit",
    age: 1,
}

// person.about.call(person1);

// OR

function Info(favMusic, singer) {
    console.log(`My name is ${this.firstName} and I'm ${this.age} years old also I love ${favMusic} of singer ${singer}`);
}

const per = {
    firstName: "Rohit",
    age: 18,

}

const per1 = {
    firstName: "Mohit",
    age: 1,
}

Info.call(per); // If you don't provide favMusic then it'll be undefined
Info.call(per1, "Sanam re");


// Bind
// It returns a value in the form of function

const fun = Info.bind(per, "Raabta", "Arijit Singh");
fun();