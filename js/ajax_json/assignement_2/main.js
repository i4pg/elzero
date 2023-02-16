let req = new XMLHttpRequest();
req.open("GET", "https://api.npoint.io/cd80e157ee21c29e4744")
req.send()
req.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    console.log("JSON Object Content Here")
    console.log(JSON.parse(this.response))
    console.log("Data Loaded")
  }
}
