let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let isOne = (str) => str.length > 1 ? false : true;
let removeChar = (str) => isOne(str) ? str : str[0]
let swapUnder = (str) => str === "_" ? " " : str

let solution = myString
  .split(",")
  .filter(isNaN)
  .map(removeChar)
  .map(swapUnder)
  .join("")
  .slice(0, -1)

console.log(solution)
