jsObj = []
for (let index = 0; index <= 5; index++) {
  jsObj[index] = {}
  jsObj[index]['ID'] = index + 1
  jsObj[index]['Author'] = 'i4pg'
  jsObj[index]['Categorey'] = 'web'
  jsObj[index]['Title'] = `Article ${index + 1}`
  jsObj[index][`Body`] = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
}

console.log(JSON.stringify(jsObj))
