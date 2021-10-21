function specialMix(...data) {
    // - First we declare a zero value so can add any number given to its value.

    // - array "extra" to push any "parseInt" thats not equal to it self, look at this concept:
    // Otherwise, Can't split between "number" and "NaN" => NaN is actually a number =) 
    // var a = NaN;
    // a !== a; // true 
    // var b = "foo";
    // b !== b; // false
    
    // for loop to check each arguments
    let result = 0;
    let extra = [];
    for (i = 0; i < data.length; i++) {
        if (parseInt(data[i])) { // parseInt(data[i]) === parseInt(data[i])
            result += parseInt(data[i]); // add one more
        } else if (!(parseInt(data[i]))) { // parseInt(data[i]) !== parseInt(data[i]) 
            extra.push(data[i]); // add all falsy to special array
            if (extra.length == data.length) {
                result = "All Is Strings"; 
                // we use this special array to check falsy arguments length,
                // equal to arguments length will print "all is strings"
                // not equal will ignore. 
            }
        }
    }
    return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings