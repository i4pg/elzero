/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
    .split(" ")
    .filter(function (ele) {
        return ele.length <= 4;
    })
    .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
    .split("")
    .filter(function (ele) {
        return isNaN(parseInt(ele));
    })
    .join("");

console.log(ign);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
    .split("")
    .filter(function (ele) {
        return !isNaN(parseInt(ele));
    })
    .map(function (ele) {
        return ele * ele;
    })
    .join("");

console.log(mixedContent);

// mine
2
let mix = "A13BS2ZX";

let fmix = mix.split("").filter(function (el) {
    return !(isNaN(parseInt(el)));
}).join("")

let mmix = fmix.split("").map(function (el) {
    return el * el;
})

console.log(fmix);
console.log(mmix);


