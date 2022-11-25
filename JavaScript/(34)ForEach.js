

const arr = [2, 4, 6, 8];

function myFunc(num, index) {
    console.log(`Value is ${num} and index is ${index}`);
}

// Now to print it using for loop

// for (let i = 0; i < arr.length; i++) {
//     myFunc(arr[i], i);
// }


// Now to print it using forEach loop

// arr.forEach(myFunc);

// OR

arr.forEach(function (num, index) {
    console.log(`Value is ${num} and index is ${index}`)
});