let start = 0;
let swappedName = "elZerO";
let finalName = [];
for (caseToggle = start; caseToggle < swappedName.length; caseToggle++) {
  if (swappedName[caseToggle] == swappedName[caseToggle].toLowerCase()) {
    finalName[caseToggle] = swappedName[caseToggle].toUpperCase();
  } else {
    finalName[caseToggle] = swappedName[caseToggle].toLowerCase();
  }
}
console.log(finalName.join(""));