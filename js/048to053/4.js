let index = 10;
let jump = 2;
let end = 0;

for (; ;) {
  if (index < ++end) break;
  console.log(index);
  index -= jump;
}