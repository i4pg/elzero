// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

let str = []
let int = []
chars.forEach(char => isNaN(char) ? str.push(char) : int.push(char));
const result = [...int, ...str].copyWithin(0, int.length, int.length * 2)
console.log(result)
