let theName = "Elzero";
console.log(theName.split(""))
console.log(Array.from(theName))
console.log([...theName])
console.log(Object.assign([], theName))
console.log(Array.prototype.slice.call(theName))

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
