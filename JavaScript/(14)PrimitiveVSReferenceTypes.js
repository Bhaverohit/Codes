// Primitive type

var num1 = 100;
var num2 = num1;

console.log("num1 : " + num1);
console.log("num2 : " + num2);

num1++;

console.log("After change in num1");

console.log("num1 : " + num1);
console.log("num2 : " + num2);


// Reference Type 

var array1 = ["Apple", "Banana"];
var array2 = array1;

console.log("Array1 : " + array1);
console.log("Array2 : " + array2);


array1.push("Grapes");

console.log("After change in array1");

console.log("Array1 : " + array1);
console.log("Array2 : " + array2);