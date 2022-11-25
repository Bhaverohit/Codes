
// Are those on which we can apply for of loop to iterate
// Array and String are iterable
// Objects are not iterable
// Array like objects are iterable eg:- strings
// Anything on which we can apply length function and use indices, will be iterable
// Set are also iterable

const Name = "Rohit";
for (let char of Name) {
    console.log(char);
}

const array = ["A", "B", "C"];
for (let arr of array) {
    console.log(arr);
}