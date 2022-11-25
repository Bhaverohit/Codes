//You can write the Key name between double quotes ("") as well becuase it's valid

const NewObject = {
    name: "Rohit",
    "College Batch": "C1", // 
};

//console.log(NewObject.College Batch); //It'll give error because there is a space in Key name. To resolve this you can use brackets

console.log(NewObject["College Batch"]);


//If you want to set name of Key something then it can be acheived by brackets only

const key = "Email";

const Person = {
    name: "Rohit",
    class: 12
};

Person["key"] = "rohitrkade@gmail.com"; // It'll set Key name as "Key" only instead of "Email". So to correct it you can write variable name (In above example it is key) inside square brackets without double quotes ("")
console.log("Printing with double quotes in key name ");
console.log(Person);

Person[key] = "rohitrkade@gmail.com";
console.log("Printing without double quotes in key name ");
console.log(Person);
