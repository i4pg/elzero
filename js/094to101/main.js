let current = document.querySelector("[title='Current']")
let adder = document.querySelector(".classes-to-add")
let remover = document.querySelector(".classes-to-remove")
let classContainer = document.querySelector(".classes-list div")

let classesManager = () => {
  classContainer.innerHTML = ""

  if (current.classList.length) {
    showClasses()
  } else {
    classContainer.textContent = "No Classes To Show"
  }
}

let toArray = (unArray) => {
  arr = []

  unArray.forEach(element => {
    arr.push(element)
  });

  return arr
}

let showClasses = () => {
  classes = toArray(current.classList)
    .sort()

  classes.forEach(klass => {
    appendClass(klass)
  });
}

let appendClass = (klass) => {
  const span = document.createElement("span")
  const text = document.createTextNode(klass)

  span.append(text)
  classContainer.append(span)
}

[adder, remover].forEach(tag => {
  tag.addEventListener("blur", () => {
    if (tag.value) {
      const classes = tag.value.split(" ")

      classes.forEach(element => {
        tagManager(tag, element)
      });

      tag.value = ""
      classesManager()
    }
  })
});

let tagManager = (tag, ele) => {
  tag == remover ? current.classList.remove(ele.toLowerCase()) : current.classList.add(ele.toLowerCase())
}

onload = () => classesManager();
