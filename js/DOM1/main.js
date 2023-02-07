let myForm = document.getElementsByTagName("form")[0]
let myElements = document.querySelector("[name='elements']")
let myText = document.querySelector("[name='texts']")
let mySelection = document.getElementsByTagName("select")[0]
let myResult = document.getElementsByClassName("results")[0]

myForm.onsubmit = (e) => {
  e.preventDefault()
  myResult.innerHTML = ""

  let numOfEle = myElements.value
  let text = myText.value
  let tag = mySelection.value.toLowerCase();

  for (let index = 0; index <= numOfEle; index++) {

    const id = `id-${index + 1}`

    let element = document.createElement(tag)
    let textNode = document.createTextNode(text)

    element.id = id
    element.className = "has-text-white has-text-centered has-background-danger box column"
    element.style = "margin: 0.5rem;"

    element.setAttribute("title", "Element")
    element.appendChild(textNode)
    myResult.appendChild(element)
  }
}
