const users = [
    { userId: 1, name: "Choco", gender: "Unknown" },
    { userId: 2, name: "Rohit", gender: "male" },
    { userId: 3, name: "Kavita", gender: "female" },
]

// // It'll get all the elements of userId 1 into variable user1
// const [user1, user2] = users;
// console.log(user1);

// By putting curly braces we can do destructing from the object
const [{ userId }, , { name: Naam, userId: KavitaId }] = users;
console.log(userId);
console.log(Naam);
console.log(KavitaId); 