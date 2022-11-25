// The below code will return undefined undefined because we can't copy like this

const per1 = {
    firstName: "Mohit",
    age: 1,
    about: function () {
        console.log(this.firstName, this.age);
    }
}

// const myFunc = per1.about;
// myFunc();

// Solution

const myFunc = per1.about.bind(per1);
myFunc();
