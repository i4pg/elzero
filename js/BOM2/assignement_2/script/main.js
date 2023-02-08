let myName = document.querySelector("[title='name']")
let userName = document.querySelector("[title='username']")
let email = document.querySelector("[type='email']")
let language = document.querySelector("[title='language']")

let form = [myName, userName, email, language]

form.forEach(input => {
  if (sessionStorage.getItem(input.title)) {
    input.value = sessionStorage.getItem(input.title)
  }
  input.addEventListener("blur", (e) => {
    input.value = e.target.value
    sessionStorage[input.title] = e.target.value
  })
});

