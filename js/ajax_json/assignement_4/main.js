let req = new XMLHttpRequest();
req.open("GET", "https://api.npoint.io/cd80e157ee21c29e4744")
req.send()
req.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(req.response)
    let container = document.createElement("div")
    container.id = "data"
    mainData.forEach(article => {
      console.log(article)
      let div = document.createElement("div")
      let tit = document.createElement("h2")
      let bd = document.createElement("p")
      let ath = document.createElement("p")
      let ctg = document.createElement("p")

      tit.append(document.createTextNode(article['Title']))
      bd.append(document.createTextNode(article['Body']))
      ath.append(document.createTextNode(article['Author']))
      ctg.append(document.createTextNode(article['Categorey']))
      div.append(tit)
      div.append(bd)
      div.append(ath)
      div.append(ctg)
      container.append(div)
    });
    document.body.append(container)
  }
}
