

const Array1 = [1, 2, 3];
const Array2 = [5, 7, 9];

// // It'll copy all the elements of the Array1 into NewArray
// const NewArray = [...Array1];

// // It'll pass whole Array2 as an element in NewArray
// const NewArray = [...Array1, Array2];

// // It will merge both Array1 and Array2 in NewArray
// const NewArray = [...Array1, ...Array2];

// // To insert more elements
// const NewArray = [...Array1, ...Array2, 12, 14, 66, "Done"];

// console.log(NewArray);


// // It'll spread all the string charcters into individual elements
// const ArrOfString = [..."abcdefg"];
// const ArrOfNumber = [..."1234567"];
// console.log([ArrOfString]);
// console.log([ArrOfNumber]);


// Spread Operator In Objects
const obj1 = {
    Key1: "5 Star",
    Key2: "KitKat"
}
const obj2 = {
    Key1: "Dairy Milk", // Overwriting Key1
    Key3: "Perk",
    Key4: "MilkyWay"

}


const NewObj = { ...obj1, ...obj2, KeyNew: "69" };
console.log(NewObj);



const ObjOfString = { ..."abcdefg" };
const ObjOfNumber = { ..."1234567" };
console.log([ObjOfString]);
console.log([ObjOfNumber]);
