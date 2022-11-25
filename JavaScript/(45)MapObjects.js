
// In map objects we can take key in any data type
const person = new Map();
console.log(person);

person.set('Name', 'Rohit');
person.set('age', 18);
person.set(1, 'integer');
person.set([1, 2], 'array');
console.log(person);


// Data accessing
console.log(person.age); // It'll return undefined
console.log(person["age"]); // It'll also return undefined

// Right way to get data from object map
console.log(person.get('Name'));
console.log(person.get(1));

// Accessing all the keys
console.log("Printing keys");
console.log("------------------------------------------");
for (let key of person.keys()) {
    console.log(key, typeof (key));
}


// Accessing values of keys
console.log("Printing keys");
console.log("------------------------------------------");
for (let value of person.values()) {
    console.log(value, typeof (value));
}