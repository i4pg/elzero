let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
    .split("")
    .filter(
        (ele, index) =>
            isNaN(ele) &&
            ele !== "," &&
            ele !== myString[++index] &&
            ele !== myString[--myString.length]
    )
    .map((ele) => (ele === "_" ? (ele = " ") : ele))
    .reduce((arr, curr, index) => arr + curr);

console.log(solution);