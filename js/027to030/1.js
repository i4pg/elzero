let userName = "Elzero";
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(-3, -2)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.substring(userName.length - 3, userName.length - 2)); // e
console.log(userName.substr(3, 1).repeat(3)); // eee