
// Note:- If there is only one parameter then parenthesis are opitional but if there is zero or more than one parameters then parenthesis are compulsory

// Arrow Functions don't have thier own "this", ye apne ek level upper se this lete hai

// Declaring Arrow Function
const Name = () => {
    console.log("Rohit Bhave");
}

// Calling arrow function
Name();



// Declaring Parameterized Arrow Function
const Sum = (n1, n2) => {
    return (n1 + n2);
}

// Calling Parameterized Arrow Function
let ans = Sum(5, 4);
console.log(ans);

// Note:- You can declare only one type of function (Normal fn, Expression fn or Arrow fn) with same name


// If there is only one line of code in Arrow Funtion

const Division = (n1, n2) => (n1 / n2);

let answer = Division(20, 3);
console.log(answer);