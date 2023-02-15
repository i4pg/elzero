let req = new XMLHttpRequest();
req.open("GET", "https://api.npoint.io/cd80e157ee21c29e4744")
req.send()
req.onreadystatechange = () => {
  if (req.readyState === 4 && req.status === 200) {
    console.log("JSON Object Content Here")
    console.log(JSON.parse(req.response))
    console.log("Data Loaded")
  }
}
