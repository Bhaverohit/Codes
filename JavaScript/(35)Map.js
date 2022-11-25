// The map method takes one by one element and send them  as parameters
const numbers = [2, 3, 4, 5];

// const square = function (num) {
//     return num * num;
// }

// const squareNumbers = numbers.map(square); // Map function creates a new array which can be stored in another variable

// OR

const squareNumbers = numbers.map((num) => {
    return num * num;
});

console.log(squareNumbers);