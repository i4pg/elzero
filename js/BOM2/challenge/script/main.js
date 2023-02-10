let input = document.getElementById("new-task")
let btn = document.getElementById("add-task")
let tasks = document.getElementById("tasks")

function removeTask(task) {
  text = task.previousElementSibling.textContent
  parsed = JSON.parse(localStorage.tasks)

  parsed.splice(parsed.indexOf(text), 1)
  stringfied = JSON.stringify(parsed)
  localStorage.tasks = stringfied

  task.parentElement.remove()
}

function appendTasks(task) {
  box = document.createElement('div')
  levelLeft = document.createElement('p')
  levelRight = document.createElement('a')

  text = document.createTextNode(task)
  deleteBtn = document.createTextNode('delete')

  box.className = 'box level'
  levelLeft.className = 'level-left'
  levelRight.className = 'button is-danger level-right is-rounded'

  levelLeft.append(text)
  levelRight.append(deleteBtn)

  levelRight.addEventListener("click", (e) => {
    removeTask(e.target)
  })

  box.append(levelLeft)
  box.append(levelRight)
  tasks.append(box)
}

btn.addEventListener("click", () => {
  parsed = JSON.parse(localStorage.tasks)
  parsed.push(input.value)
  stringfied = JSON.stringify(parsed)
  localStorage.tasks = stringfied
  appendTasks(input.value)
})

if (localStorage.tasks) {
  parsed = JSON.parse(localStorage.tasks)
  parsed.forEach(task => {
    appendTasks(task)
  });
} else {
  localStorage.setItem("tasks", "[]")
}
