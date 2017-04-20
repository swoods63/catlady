
var cats = [{
  id: 247,
  name: "Mr. Fluffy",
  imgUrl: "https://static.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg",
  happyStatus: "Purrrrr",
  grumpystatus: "rawrrr",
  feralStatus: "hhhisss!",
  goneStatus: "Mr Fluffy has left for a meeting",
  petCount: 0
}, {
  id: 1,
  name: "Whiskers",
  imgUrl: "https://unsplash.it/200/200",
  happyStatus: "meow?",
  grumpystatus: "GRRRRR",
  feralStatus: "bark",
  goneStatus: "Whiskers left the room",
  petCount: 0
}]


function petCat(catId) {
  var petCount = document.getElementById("petCount" + catId)
  var catStatus = document.getElementById("catStatus" + catId)
  var catButton = document.getElementById("catButton" + catId)
  var catPic = document.getElementById("catPic" + catId)

  var targetCat = getCatById(catId)




  targetCat.petCount++
  petCount.innerHTML = targetCat.petCount
  if (targetCat.petCount > 5) {
    catStatus.innerHTML = targetCat.grumpystatus
  }
  if (targetCat.petCount == 9) {
    catStatus.innerHTML = targetCat.feralStatus
  }
  if (targetCat.petCount == 10) {
    catStatus.innerHTML = targetCat.goneStatus
    catButton.disable = true
    catPic.src = ""

  }

}

function getCatById(catId) {

  for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];

    if (cat.id == catId) {
      return cat
    }
  }
}
function kittyBack(catId) {


  var petCount = document.getElementById("petCount" + catId)
  var catStatus = document.getElementById("catStatus" + catId)
  var catButton = document.getElementById("catButton" + catId)
  var catPic = document.getElementById("catPic" + catId)
  var targetCat = getCatById(catId)

  targetCat.petCount = 0
  petCount.innerHTML = targetCat.petCount
  catButton.disable = false
  catStatus.innerHMTL = targetCat.happyStatus
  catPic.src = targetCat.imgUrl
}

function drawCats(listOfCats) {
  var template = ""
  for (var i = 0; i < listOfCats.length; i++) {
    var cat = listOfCats[i]
    template += `
    <div>
    <img id="catPic${cat.id}" src=${cat.imgUrl} alt="meow">

    <button type="button" id="catButton${cat.id}" onclick="petCat(${cat.id})">pet</button>
    <button type="button" onclick="kittyBack(${cat.id})">Kitty! Comeback!!</button>
    <h1 id="petCount${cat.id}">${cat.petCount}
    </h1>
    <h2 id="catStatus${cat.id}">${cat.happyStatus}</h2>
  </div>`

  }
  document.getElementById("catList").innerHTML = template  
}
drawCats(cats)
