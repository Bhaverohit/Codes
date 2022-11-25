// Every method works only when all the inputs are true as every returns only in boolean

const numbers = [2, 4, 6, 8, 10];

// const ans = numbers.every((number) => number % 2 === 0);

// OR

const ans = numbers.every((number) => {
    return (number % 2 === 0);
});

console.log(ans);