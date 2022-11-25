// Atleast one element satisfy the condition then some method returns true else false


// Finding odd number
const OneOddNumber = [2, 4, 6, 10, 11];
const MoreOddNumbers = [3, 4, 6, 10, 11];

const ans = OneOddNumber.some((number) => number % 2 === 0);
console.log(ans);

const ans2 = MoreOddNumbers.some((num) => num % 2 === 0);
console.log(ans2);

