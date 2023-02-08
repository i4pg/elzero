let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

haystack.includes(needle) ? console.log("Found") : console.log(); // 1

if (haystack.includes(needle)) {
  console.log("Found");
} // 2

switch (haystack.includes(needle)) {
  case true:
    console.log("Found");
    break;
} // 3