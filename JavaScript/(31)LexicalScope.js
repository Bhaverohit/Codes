// Note:- Javascript first finds variables and functions inside lexical environment (in below example inside newFunc). But if it is not available then JS will look for them where newFunc is declared (in below example inside MyAppi) and if it is unable find even there then at last fn or variable's data is tried to find at global level

// Note:- Try to comment down variable number at different levels and see the output

let number = 39;

function MyAppi() {

    let number = 59;

    const newFunc = () => {

        let number = 69;

        console.log("Inside newFunc", number); // here number = 69 but if you don't initialize number inside newFunc and initizlize it inside MyAppi then number = 59 but if you don't initialize number neither inside newFunc nor in MyAppi but out of MyAppi (Global declaration) then number = 49
    }
    console.log("Inside MyAppi");
    newFunc();
}

MyAppi();