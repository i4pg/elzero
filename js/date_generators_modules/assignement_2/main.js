const zoneDiffer = 1000 * 60 * 60 * 4 // Dubai
const millis = 1000 * 60 * 60 * 24 * 365 * 10 // 10 years in milliseconds
const offset = 1000 * 60 * 60 * 24 * 2 // two days extra needed to reach 1980
const second = 1000 // 00:00:01

let tenYears = new Date(millis + second - zoneDiffer + offset)

console.log(tenYears.toString())

// Needed Output
"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
