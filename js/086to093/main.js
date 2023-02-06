let myImages = document.querySelectorAll('img')

myImages.forEach((img) => {
  if (img.hasAttribute("alt")) {
    img.alt = "Old"
  } else {
    img.setAttribute("alt", "Elzero New")
  }
})
