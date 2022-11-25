

// In JS the sorting method sorts the data according to string
// When you sort something according to the string then ASCII values are compared of left most digit
// The sort method changes actual array unlike ForEach, Map or Filter methods
// In ASCII values capital letters has lower ranks that's why words with capital letters comes first than small letters when sorted in ascending order

// sorting numbers as string
const array = [5, 10, 47, 16];
array.sort();
console.log(array);

// sorting strings
const words = ["A", "a", "b", "d", "D", "B", "AA", "bb", "aAR", "AAR", "AaR"];
words.sort();
console.log(words);

// sorting numbers in ascending order
const nums = [5, 15, 79, 35, 14, 11];
nums.sort((a, b) => {
    return a - b; // Here a is the initial value of array and b is the second value of array, if a-b comes negative then both numbers stay as it is otherwise result of a-b comes positive then a and b are swapped
});
console.log(nums);


// sorting numbers in descending order
const nums2 = [5, 15, 79, 35, 14, 11];
nums2.sort((a, b) => {
    return b - a;
});
console.log(nums2);


// Example

const cart = [
    { productID: 1, productName: "Android", productPrice: 1200 },
    { productID: 2, productName: "Apple", productPrice: 1400 },
    { productID: 3, productName: "Windows", productPrice: 1600 }
];


// lowToHigh
const lowToHigh = cart.slice(0).sort((a, b) => {
    return a.productPrice - b.productPrice;
});
console.log(lowToHigh);

// highToLow
const highToLow = cart.slice(0).sort((a, b) => {
    return b.productPrice - a.productPrice;
});
console.log(highToLow);