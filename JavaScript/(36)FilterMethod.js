
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(nums) {
    return nums % 2 == 0;
}

const evenNumbers = arr.filter(isEven); // Here filter method is passsing every index of arr array one by one to the isEven function
console.log(evenNumbers);