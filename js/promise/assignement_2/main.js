function buildArticle(article) {
  document.write(
    `<div>
      <h3>${article.title}</h3>
      <p>${article.description}</p>
    </div>`
  )
}

function buildPage(articles) {
  for (let i = 0; i < 5; i++) {
    buildArticle(articles[i])
  }
}

fetch('https://api.npoint.io/f6ce94be63bfcb3caeaf')
  .then(result => {
    return result.json()
  })
  .then(articles => {
    buildPage(articles)
  })
