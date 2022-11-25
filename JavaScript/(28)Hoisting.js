// In Javascript you can call a normal function before declaring it but funtion must be declared in the program anywhere 
// Note :- Hoisting is only available in normal functions, It is not valid in Expression and Arrow functions

Choco();

console.log("What's Your Name?");
console.log("Dunno");

function Choco() {
    console.log("Rohit");
}