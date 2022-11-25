const band = {
    bandName: "Sanam",
    Song: "Ek Ladki Ko Dekha Toh",
    AnotherSong: "Teri Galiyon Mein Mohabbat",
    Year: 2018,
};

// let { bandName, Song, AnotherSong } = band;
// // Now you can access the value of variables
// console.log(bandName);
// console.log(AnotherSong);


let { bandName: Variable1, Song: Variable2, ...Variable3 } = band;
console.log(Variable1); // This is how you can change the previous variable name (bandName) to the new variable name (Variable1)
console.log(Variable2);
console.log(Variable3); // This will print an object which has all the values stored
