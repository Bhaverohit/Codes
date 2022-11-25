
// By printing window or this will give all the objects present in JS

// console.log(window);
//console.log(this);


// Sometimes this will create problems for us that's why we use "use strict" so that we get undefined instead of windows objects

"use strict"
function myFunc() {
    console.log(this);
}

myFunc();