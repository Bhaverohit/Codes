
// Expression Function
// In this the variable name is treated as function name only
const VariableName = function () {
    console.log("Hello World");
}

// Calling Expression Function 
VariableName();



// Declaring Parameterized Expression Function
const multiPlacation = function (num1, num2) {
    return (num1 * num2);
}

// Calling Parameterized Expression Function
let ans = multiPlacation(2, 5);
console.log(ans);