const users = [
    { userId: 1, name: "Choco", gender: "Unknown" },
    { userId: 2, name: "Rohit", gender: "male" },
    { userId: 3, name: "Kavita", gender: "female" },
]

// //To print complete array
// console.log(users);


// // To print array using loops
// for (let i of users) {
//     console.log(i);
// }


// To print single element using loops
for (let i of users) {
    console.log(i.userId, i.gender);
}