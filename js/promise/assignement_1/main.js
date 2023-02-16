function buildArticle(article) {
  document.write(
    `<div>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
    </div>`
  )
}

function buildPage(obj) {
  articles = JSON.parse(obj.response)
  for (let i = 0; i < 5; i++) {
    buildArticle(articles[i])
  }
}

const getData = (linkAPI) => {
  new Promise((res, rej) => {
    let myReq = new XMLHttpRequest();
    myReq.open('GET', linkAPI)
    myReq.send()
    myReq.onload = function() {
      this.readyState === 4 && this.status === 200
        ? res(buildPage(this))
        : rej(Error("Borken Link"))
    }
  })
}

getData('https://api.npoint.io/f6ce94be63bfcb3caeaf')
