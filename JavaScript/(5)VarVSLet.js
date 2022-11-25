// var will let you declare same variable twice without any errors but are overwritable

var firstName = "Rohit";
var firstName = "Bhave";

console.log(firstName);
console.log(firstName);

// let won't let you declare same variable twice (It will give error) but are overwritable

let secondName = "Abhay";
let secondName = "Sharma";
console.log(secondName);
console.log(secondName);