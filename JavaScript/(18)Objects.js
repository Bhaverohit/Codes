// Array are not sufficient for real world data
// Objects are reference types and in Key-Value Pairs
// Objects don't have indices
// Object Keys are also called as Properties
// By default key is a string
// Keys are mostly in strings (99% times) and symbols also (1% times)
// Objects are also called object-literals
// If you write 1 as key then even it will be a string

//Creating Objects
const Person = { name /*Key*/: "Rohit" /*Value*/, age: 19 };
console.log(Person);
console.log(typeof Person);

// OR

const Human = {
    Name: "Anything",
    Age: 15,
    works: ["Eating", "Sleeping", "Gaming"]
}

console.log(Human);


//Access object's data using dot operator
console.log(Human.Name);
console.log(Human.works);

//Access object's data using square brackets
console.log("Printing object using []: " + Human["Age" /*Key Name */]);
console.log(Human.works);

//Adding more key-value pairs to the current Object using dot operator
Person.gender = "Male";
console.log(Person);

//Adding more key-value pairs to the current Object using square brackets
Person["Shouk"] = "Singing";
console.log(Person);
