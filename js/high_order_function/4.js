let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let r = numsAndStrings.filter((a) => !isNaN(a)).map((a) => -a);
console.log(r);