import loadImage from './loadImage'

let addImg = (src) => {
  let imgElement = document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

let logError = (msg) => {
    let ulElement = document.createElement("ul")
    let liElement = document.createElement("li")
    liElement.innerHTML = msg
    ulElement.appendChild(liElement)
    document.body.appendChild(ulElement)
}

Promise.all([
  loadImage('images/car1.jpg'),
  loadImage('images/car2.jpg'),
  loadImage('images/car3.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch((error) => {
  logError(error)
})
