// Note:- Javascript allows to make functions inside functions
// Note:- You can nest any functions (Normal, Arrow, Expression)
// Note:- The outer most function can be called from anywhere but all the nested functions can only be called from inside the outer most funtion only


function KuchBhi() {

    const myFunc = (num1, num2) => (num1 * num2);

    const Choco = function () {
        console.log("Inside Choco");
    }

    console.log(myFunc(2, 5));
    Choco();
    console.log("Inside KuchBhi");
}

KuchBhi();

