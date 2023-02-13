const today = new Date();
const lastMonth = new Date(today.setMonth(today.getMonth() - 1));
const fullMonthName = lastMonth.toLocaleString('default', { month: 'long' });

console.log(lastMonth.toString());
console.log(`Previous Month Is ${fullMonthName} And Last Day Is ${lastMonth.getDate()}`)

// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"
