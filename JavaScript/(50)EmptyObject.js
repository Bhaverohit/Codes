// There are two ways to do this

// 1st way
// const person = {};
// console.log(person);

// 2nd way

// const Animal = Object.create(null);
// console.log(Animal);


// Use of 2nd Method :- Suppose you want to find some key-value pair but you don't find them in one object and then you want JS to search in another object itselt

const Obj1 = {
    Name: "Unknown",
    Work: "Engineer",
    Experience: "2 years"
}

// const Obj2 = {
//     Name: "Unknown",
//     Work: "Engineer"
// }

const Obj2 = Object.create(Obj1)
Obj2.key = "True";

console.log(Obj2.Work); // Here it'll search for the key Work in the Obj2 first when not found in the Obj2 it'll check in the Obj1


// Proto or [[prototype]] (Both are same) But only "prototype" is different
console.log(Obj2.__proto__); // Here it'll print the whole first Obj1
// With the help of __proto__ we have set Obj1 into Obj2