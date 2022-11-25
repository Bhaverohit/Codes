// This method is used for insertion and deletion of an element

// Syntax
// splice(statIndex, deleteIndex, insertIndex)  where deleteIndex, insertIndex indices are included

const myArray = [1, 2, 3, 4, 5];
myArray.splice(0, 2);
console.log(myArray);

const Array = [1, 2, 3, 4, 5];
Array.splice(1, 1);
console.log(Array);

const Aray = [1, 2, 3, 4, 5];
Aray.splice(1, 0);
console.log(Aray);

const Ary = [1, 2, 3, 4, 5];
Ary.splice(0, 1);
console.log(Ary);


// Insertion

const InsArray = [1, 2, 3, 4, 5];
InsArray.splice(5, 0, 10);
console.log(InsArray);

// Insertion Deletion Both

const IDArray = [1, 2, 3, 4, 5];
IDArray.splice(2, 1, 100, 200, 300);
console.log(IDArray);

