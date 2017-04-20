var petCount = document.getElementById("petCount")
var catStatus =
  document.getElementById("catStatus")
var counter = 0
var catButton =document.getElementById("catButton")
var catPic = document.getElementById("catPic")
function petCat() {
  counter++
  petCount.innerHTML = counter
  if (counter > 5) {
catStatus.innerHTML= "rawrrr"
  }
  if (counter == 9 ){
    catStatus.innerHTML= "hhhisss"
  }
  if (counter == 10){
    catStatus.innerHTML ="The kitty ditch you!"
    catButton.disable=true
    catPic.src=""

  }

}
function kittyBack() {
  counter=0
  petCount.innerHTML=counter
  catButton.disable = false
  catStatus.innerHMTL="Purrrr"
  catPic.src="https://static.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg"
}
