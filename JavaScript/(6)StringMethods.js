// Declaring string 
var firstName = "Rohit";
var Choco = "      DairyMilk     ";

console.log(firstName);

// Indexing start from 0

// 1. Length method --> Will give the length of the string
// Note:- whitespaces will also be counted

console.log(Choco.length);

// 2. Trim method --> If there are spaces in the string then they will be deleted but to see the effects you need to assign the string to another variable

var newString = Choco.trim();
console.log(newString.length);

// 3. charAt method --> Will give character at index provided

console.log(Choco.charAt(10));

// 4. concat method --> It will add two strings
console.log(Choco.concat(firstName));

// 5. slice method --> It will give string between an intervel
// Syntax --> variableName.slice(startingIndex, endingIndex);
// Note:- ending index is excluded
// Note:- If ending index is not given then whole string will be printed from staring index
// Note:- 

console.log(Choco.slice(6,12));
console.log(Choco.slice(6,));
console.log(Choco.slice(6));


//Other methods...
Choco.match();
Choco.normalize();
Choco.repeat();
Choco.search();
Choco.split();
Choco.startsWith();
Choco.toLowerCase();
Choco.toUpperCase();
Choco.trimEnd();
Choco.trimStart();
Choco.valueOf();
Choco.endsWith();
Choco.includes();
Choco.indexOf();
Choco.lastIndexOf();
Choco.localeCompare();
Choco.match();
Choco.matchAll();
Choco.substring();
Choco.replace();
Choco.toString();