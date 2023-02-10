let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
function friend() {
  const [a, b, c] = myFriends

  switch (chosen) {
    case 1:
      return a
    case 2:
      return b
    case 3:
      return c
  }
}

const { title, age, available, skills: [, skill] } = friend()

console.log(title)
console.log(age)
console.log(available ? "Available" : "Not Available")
console.log(skill)

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"
