let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flatten = myArray
    .reduce((acc, curr) => acc.concat(curr), [])
    .reduce((acc, curr) => acc + curr);

console.log(flatten);