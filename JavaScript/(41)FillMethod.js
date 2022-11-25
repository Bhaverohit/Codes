// This method is used to fill the indices of an array with some values

// Syntax
// fill(value, startIndex, endIndex) where endIndex is excluded

// Here new keyword is used for creating a new array 
// Here 10 inside Array() is the length of new array
// Here -1 inside fill() is the value which will replace all the values present at all indices in the new Array (You can write any value inside fill)

const myArray = new Array(10).fill(-1);
console.log(myArray);


const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr = newArray.fill(0, 3, 6);
console.log(arr);