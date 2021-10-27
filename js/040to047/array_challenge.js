let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

console.log(my.reverse().slice(--counter)); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(++counter, --zero)); // ["Elham", "Mazero"]
console.log(my[3].slice(++zero, --counter) + my[4].slice(counter)); // "Elzero"
console.log(my[4][4] + my[4][5].toUpperCase()); // "rO"