let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"]
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"]

myAdmins = myAdmins.slice(0, myAdmins.indexOf("Stop"))

document.write(`<div>We Have ${myAdmins.length} Admins</div>`)

for (let i = 0; i < myAdmins.length; i++) {
  const admin = myAdmins[i]
  const id = i + 1
  document.write(`<hr>`)
  document.write(`The Admin For Team ${id} is ${admin}`)
  document.write(`<h2>Team Member:</h2>`)
  document.write(`</ul>`)
  let employeeId = 0
  for (let j = 0; j < myEmployees.length; j++) {
    const employee = myEmployees[j];
    if (!(employee.startsWith(admin[0]))) {
      continue;
    }
    employeeId++;
    document.write(`<li>- ${employeeId} ${employee}</li><br>`)
  }
  document.write(`</ul>`)
}
