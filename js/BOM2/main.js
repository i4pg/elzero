let message = document.querySelector(".message")
let colors = document.querySelectorAll(".button")
let sizes = document.querySelector("#font-size")
let famlies = document.querySelector("#font-family")

colors = Array.from(colors)
sizes = Array.from(sizes.children)
famlies = Array.from(famlies.children)
let groups = [colors, sizes, famlies]

let removeAllActive = (target) => {
  arr = Array.from(target.parentElement.children)
  arr.forEach(element => {
    element.classList.remove("is-active")
  });
}

let toggleActive = (target) => {
  target.classList.add("is-active")
}

let setColor = (target) => {
  message.className = `message ${target.value}`
  window.localStorage.color = target.value
}

let setFont = (target) => {
  message.style.fontFamily = target.getAttribute("value")
  window.localStorage.fontFamily = target.getAttribute("value")
}

let setSize = (target) => {
  message.style.fontSize = `${target.getAttribute("value")}px`
  window.localStorage.fontSize = `${target.getAttribute("value")}px`

}

let assignValues = (target) => {
  switch (target.title) {
    case "color":
      setColor(target)
      break
    case "size":
      setSize(target)
      break
    case "font":
      setFont(target)
      break
  }
}

groups.forEach(group => {
  group.forEach(tag => {
    tag.addEventListener("click", (e) => {
      removeAllActive(e.target)
      toggleActive(e.target)
      assignValues(e.target)
    })
  });
});

if (localStorage.length) {
  let color = document.querySelector(`.${localStorage.color}`)
  let size = document.querySelector(`[value="${parseInt(localStorage.fontSize)}"]`)
  let font = document.querySelector(`[value="${localStorage.fontFamily}"]`)
  let arr = [color, size, font]

  arr.forEach(target => {
    toggleActive(target)
    assignValues(target)
  });
}
