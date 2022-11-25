const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue,) => {
    return accumulator + currentValue;
}, 100) // This is the manual initital value (OPTIONAL));

console.log(sum);

// WORKING
//  Iteration   Accumulator          currentValue            returningValue
//   1   ->       1               +       2                       3
// in the second iteration the returning value becomes the value of Accumulator and currentValue becomes previousIndex + 1
//   2   ->     3               +         3                      6
//   3   ->     6               +         4                      10
//   4   ->     10              +         5                      15


const userCart = [
    { productID: 1, productName: "Android", productPrice: 1200 },
    { productID: 2, productName: "Apple", productPrice: 1400 },
    { productID: 3, productName: "Windows", productPrice: 1600 }
];

const totalAmount = userCart.reduce((totalPrice, currentPrice) => {
    return totalPrice + currentPrice.productPrice;
}, 0);

console.log(totalAmount);

