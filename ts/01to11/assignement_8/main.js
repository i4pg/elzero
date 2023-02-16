"use strict";
function printInConsole(...args) {
    args.forEach((arg) => {
        console.log(`The Value Is ${arg} Type Is ${typeof arg}`);
    });
    return "Done";
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
