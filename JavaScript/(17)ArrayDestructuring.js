// const Array = ["Value1", "Value2"];

//let [newArray1, newArray2] = Array; // It will create two new arrays newArray1 and newArray2 repectively and initialize them with indices 0 and 1 of Array array respectively
// Note:- If there are more values in Array (array name in above example) than newArrays then there will be no problem
// Note 2:- If there are more newArrays(Variable Name) than Array(array name in above example) then newArrays will be initialized with undefined
// Note 3:- using let [Variable1, Variable2, ...Variable3] = RemainArray; You can easily get all the remaining part of Array(array name in above example)

// It'll get all the remaining values in MyNewArray
const Array = ["Value1", "Value2", "Value3", "Value4"];

let [newArray1, newArray2, ...MyNewArray] = Array;
console.log(MyNewArray);