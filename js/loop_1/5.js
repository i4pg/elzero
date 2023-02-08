let friends = [
  "Ahmed",
  "Sayed",
  "Eman",
  "Mahmoud",
  "Ameer",
  "Osama",
  "Sameh",
];
let letter = "a";
let nameCount = letter.length;
for (let index = letter.length; index < friends.length; index++) {
  if (friends[index].startsWith(letter.toUpperCase()) === true) {
    continue;
  }
  console.log(`${nameCount} => ${friends[index]}`);
  nameCount++;
}