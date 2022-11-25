// Sets are iterable
// There are no duplicates allowed in set
// If there is duplicates then they'll be ignored when accessed
// Sets have their own methods
// Sets doesn't allow index based access
// If you try to access set elements using index then it'll return undefined
// In sets order is not guarnteed
// Indexing starts from zero
// new keyword is must for creating a set
// Different type of data can be stored inside sets
// Length function doesn't work on Sets


const array = new Set([1, 2, 3]);
console.log(array);

const arr = new Set("Green");
console.log(arr);


const ar = new Set();
ar.add(1);
ar.add("A");
ar.add(3);
ar.add(array); // A set as an element can also be stored
ar.add(array); // Duplicates are not allowed
ar.add([1, 2, 3]); // This is a new array (Every time we create a new array as [] inside parenthesis of a function then new array is created inside memory {It doesn't matter if same elements are present inside another array})
ar.add([1, 2, 3]); // Will be printed as well, for JS it's like storing two different arrays with different elements

console.log(ar);

// real-life example
const Arry = [1, 2, 2, 4, 5, 6, 6, 8, 9, 9];
const newSet = new Set(Arry);
console.log(newSet);


// Finding length of a set
let len = 0;
for (let i of newSet) {
    len++;
}
console.log(len);