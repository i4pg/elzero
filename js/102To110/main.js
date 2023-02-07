let counter = document.querySelector("p")

let timer = setInterval(() => {
  counter.textContent -= 1
  if (counter.textContent == "0") {
    window.open("https://elzero.org", "_blank", "width: 400, height: 400, top:0, right: 40")
    clearInterval(timer)
  }
}, 1000)

