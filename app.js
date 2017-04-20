var petCount = document.getElementById("petCount")
var catStatus =
  document.getElementById("catStatus")
var catButton = document.getElementById("catButton")
var catPic = document.getElementById("catPic")


var mrFluffy ={
  name: "Mr. Fluffy",
  imgUrl: "https://static.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg",
  happyStatus: "purrrrr",
  grumpystatus: "rawrrr",
  felalStatus: "hiss",
  goneStatus:"Mr Fluffy has left for a meeting",
  petCount: 0
}

var whiskers ={
  name: "Whiskers",
  imgUrl: "https://static.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg",
  happyStatus: "meow?",
  grumpystatus: "GRRRRR",
  felalStatus: "bark",
  goneStatus:"Whiskers left the room",
  petCount: 0
}


function petCat(targetCat) {
  targetCat.petCount++
  petCount.innerHTML = targetCat.petCount
  if (targetCat.petCount > 5) {
    catStatus.innerHTML = targetCat.grumpystatus
  }
  if (targetCat.petCount == 9) {
    catStatus.innerHTML = targetCat.felalStatus
  }
  if (targetCat.petCount == 10) {
    catStatus.innerHTML = targetCat.goneStatus
    catButton.disable = true
    catPic.src = ""

  }

}
function kittyBack(targetCat) {
  targetCat.petCount = 0
  petCount.innerHTML =targetCat.petCount
  catButton.disable = false
  catStatus.innerHMTL =targetCat.happyStatus
  catPic.src = "https://static.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg"
}
