// function declaring

function MyName() {
    console.log("Rohit Bhave");
}

// Passing parameters to the function
function sumOfNumbers(num1, num2) {
    console.log(num1 + num2);
}


//  function calling

// Note:- Run, Call, Invoke all there has same meaning

MyName();
MyName();

// Passing argument to the function
sumOfNumbers(10, 12);
sumOfNumbers(); // It'll return NaN (Not a Number) because {(Undefinded + Undefinded = NaN)} 

// Note:- Any arithmatic operation of numbers with undefined will return NaN only
console.log(undefined + undefined);
console.log(2 + 3 + undefined);
console.log(2 - undefined);
console.log(3 * undefined);



// Default Parameters
// In old JS there wasn't any concept like default parameters so we used to solve it in another way explained below

// Note:- If you don't pass argument to the function then by default variable's value will become undefined

function FullName(Fname, Lname) {
    if (Lname === undefined) {
        Lname = "using if statement as default parameter";
    }
    return (Fname + Lname);
}

let Name = FullName("Honey ");
console.log(Name);


// In new JS you can use same method as other programmming languages for default parameters

function AboutYou(Class, Section = "C section") {
    return (Class + Section);
}

let student = AboutYou("12th class ");
console.log(student);


// Rest parameters
// In this case all the passed arguments can be stored in a single variable

function AddSumOfN(...numbers) {
    let num = 0;
    console.log(Array.isArray(numbers)); // This line will print true is numbers variable is an array
    for (let number of numbers) {
        num += number;
    }
    return num;
}

let ans = AddSumOfN(1, 2, 3, 4, 5);
console.log(ans);



// Callback Functions
// In this we pass a function as parameter

function MyFunc() {
    console.log("Inside MyFunc");
}


function b() {
    MyFunc();
}

b(MyFunc);


// Function Returning Function

function Chocolate() {
    function Hello() {
        console.log("hello world");
    }
    return Hello;
}

const anss = Chocolate(); // Here anss variable receieved Chocolate function as value that's why now anss variable has become a function itself and we can call it as well

console.log(anss); // If you print anss it'll give code of function it consist
anss(); // If you call anss function then it'll return whatever it is returning


