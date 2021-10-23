let myString = "EElllzzzzzzzeroo";

let rm = myString.split("").filter(function (ele, index) {
    return ele !== myString[++index]
}).join("")

console.log(rm);