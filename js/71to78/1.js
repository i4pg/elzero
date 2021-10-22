let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let word = mix.map(function(ele){
    return isNaN(parseInt(ele)) ? ele : "";
}).reduce(function(acc, current){
    return acc + current;
})

console.log(word);