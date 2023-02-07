let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter(isNaN)
  .map((ele) => ele.split("").pop())
  .map((ele, i, arr) => i >= (arr.length - true) ? "" : ele)
  .join("")
  .split("_")
  .join(" ")

console.log(solution)
