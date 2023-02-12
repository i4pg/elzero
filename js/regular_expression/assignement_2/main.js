let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/Os\d*O/g))
// Output
// ['Os10O', 'OsO', 'Os100O']
