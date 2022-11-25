// Diffrences in Arrays of JS
// Array == Reference Type == Object
// Arrays are immutable in the JS (real array can be overwritten)

// 1. Arrays in JS can have multiple types of data in a single array

// 2. To initialize array we write values in [] brackets

// 3. var ArrayName  = []; // //is an empty array

var fruits = ["Mango", "Banana", "Graps"];

var evenNumber = [2, 4, 6, 8, 10];

var mixed = [2, 1, 1.10, "Hello", undefined, null];

var Nested = [1, 2, 3, ["Rohit", "Bhave"]]

console.log(fruits);
console.log(evenNumber);
console.log(mixed);
console.log(Nested);

// Printing of array element
console.log(fruits[1]);

// Array Methods
fruits.concat();
fruits.copyWithin();
fruits.entries();
fruits.every();
fruits.fill();
fruits.filter();
fruits.find();
fruits.findIndex();
fruits.flat();
fruits.flatMap();
fruits.forEach();
fruits.includes();
fruits.indexOf();
fruits.join();
fruits.keys();
fruits.lastIndexOf();
fruits.length();
fruits.map();
fruits.pop(); // Used to remove last element
fruits.push(); // Used to insert at last index
fruits.reduce();
fruits.reduceRight();
fruits.reverse();
fruits.shift(); // Used to remove first index element
fruits.slice();
fruits.some();
fruits.sort();
fruits.splice();
fruits.toLocaleString();
fruits.toString();
fruits.unshift(); // Used to insert at first index
fruits.values();

// NOTE:- Push & Pop are faster than shift and unshift

// // There are three ways to clone an array
// var arrayNew1 = ["Hello", "Namaste"];
// var arrayNew2 = [...arrayNew1]; //  using Spread operator
// var arrayNew2 = arrayNew1.slice(0);
// var arrayNew2 = [].concat(arrayNew1);

// console.log(arrayNew2);
