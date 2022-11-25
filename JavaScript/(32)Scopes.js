// There are two types of scopes in JS 
// 1. Block Scope :- let and const are block scopes means that if any variable is declared let or const then they will be accessible only in the brackets where they are declared.

// 2. Function Scope :- any variable declared as var will be assessible in the whole program

{
    const Name = "Rohit";
    let age = 10;
}

//console.log(Name);// // Will throw error
//console.log(age);// // Will throw error

{
    var Choco = "Dairy Milk";
}

console.log(Choco);

