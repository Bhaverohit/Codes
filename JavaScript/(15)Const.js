// If you declare a primitive type data as const then you can't update the data in future
const pi = 3.14;
// pi = 1.5; // will throw an error
console.log(pi);


// If you declare a reference type data as count then you can update the data in future

const arr = ["A", "B"];
arr.push("D");
console.log(arr);