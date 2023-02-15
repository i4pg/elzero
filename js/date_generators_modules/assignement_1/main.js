const birthday = new Date("Nov 23 1996")
let today = Date.now()
let milliseconds = today - birthday
let seconds = milliseconds / 1000
let minutes = seconds / 60
let hours = minutes / 60
let days = hours / 24
let months = days / 30
let years = months / 12

console.log(`${seconds.toFixed()} Seconds`)
console.log(`${minutes.toFixed()} Minutes`)
console.log(`${hours.toFixed()} Hours`)
console.log(`${days.toFixed()} Days`)
console.log(`${months.toFixed()} Months`)
console.log(`${years.toFixed()} Years`)
