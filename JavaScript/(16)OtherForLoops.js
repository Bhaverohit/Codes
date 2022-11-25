var Animals = ["Tiger", "Lion", "Dog"];

// For printing values
for (const varName of Animals) {
    console.log(varName);
}

// For printing indices
for (const indexNumber in Animals) {
console.log(indexNumber);// Will print index numbers
// console.log(Animals[indexNumber]); // Will print actual values of array
}