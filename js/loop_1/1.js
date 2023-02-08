let start = 10;
let end = 100;
let exclude = 40;

for (i = start; i < end++; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}