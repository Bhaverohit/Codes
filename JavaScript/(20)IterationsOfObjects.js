const Person = {
    name: "Rohit",
    class: 12,
    Address: "Pta Nhi",
    Sex: "Mann toh nhi hai par kar lenge"
};

// // Print the name of the Keys

// for (let key in Person) {
//     console.log(key); 
// }


// // Wrong way to print the values of Keys (It'll give error)
// for (let key in Person) {
//     console.log(Person.key);
// }


// // Print the values of Keys
// for (let key in Person) {
//     console.log(Person[key]);
// }


// Print the key-value pair
for (let key in Person) {
    console.log(`${key} : ${Person[key]}`);
}
