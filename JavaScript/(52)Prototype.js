// Functions are both fns and objects

function Hello() {
    console.log("Hello World");
}

// name property
console.log(Hello.name); // It'll return the name of fn

/// We can add our own properties to a fn from outside
Hello.myProperty = "Chocolate";

console.log(Hello.myProperty); // Using fn like objects

console.log(Hello.prototype); // It'll return an empty object which can be used by us to store data

Hello.prototype.Property1 = "It is first prop";  // Adding new peoperties to the prototype object
Hello.prototype.Property2 = "It is second prop";
Hello.prototype.Property3 = "It is third prop";

console.log(Hello.prototype);

// NOTE:- Only fns provide prototype property