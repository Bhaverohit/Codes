// New keywork will create an empty object of name this
// New keyword wll return object (name of object : this)
// New keyword will do chaining that if one variable is not found in createUser fn then JS will look for it in prototype of the fn

function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function () {
    console.log(this.firstName, this.age);
}

const user = new createUser("Rohit", 18);

user.about();