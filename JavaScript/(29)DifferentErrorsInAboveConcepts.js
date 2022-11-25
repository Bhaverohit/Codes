
// // If you use const in expression funtion and then try hoisting then it'll give Uncaught ReferenceError

// VariableName();
// const VariableName = function () {
//     console.log("Hello World");
// }


// // If you use let in expression funtion and then try hoisting then it'll give Uncaught ReferenceError

// VariableName();
// let VariableName = function () {
//     console.log("Hello World");
// }


// // If you use var in expression funtion and then try hoisting then it'll give Uncaught TypeError

// VariableName();
// var VariableName = function () {
//     console.log("Hello World");
// }



// // If you use const with a variable and then try to print variable's data before intializing it then it'll give Uncaught ReferenceError

// console.log(Name);

// const Name = "something";



// // If you use let with a variable and then try to print variable's data before intializing it then it'll give Uncaught ReferenceError

// console.log(Name);

// let Name = "something";




// // If you use var with a variable and then try to print variable's data before intializing it then it'll return undefined

// console.log(Name);

// var Name = "something";
