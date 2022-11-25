const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
}

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    return user;
}

const user1 = createUser("Rohit", "Bhave", "rohitrkade@gmail.com", 18, "Sitapura, Jaipur");
const user2 = createUser("Mohit", "Sharma", "mohitsharma@gmail.com", 20, "Sitapura, Jaipur");

console.log(user1);
console.log(user1.about());