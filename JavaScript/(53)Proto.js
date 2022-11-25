// Prototype is an object
// Proto is a simple reference of what you are calling


function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
}
createUser.prototype.is18 = function () {
    return this.age >= 18;
}
createUser.prototype.alphabet = function () {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}


const user1 = createUser("Rohit", "Bhave", "rohitrkade@gmail.com", 18, "Sitapura, Jaipur");
const user2 = createUser("Mohit", "Sharma", "mohitsharma@gmail.com", 20, "Sitapura, Jaipur");

console.log(user1);
console.log(user1.is18());