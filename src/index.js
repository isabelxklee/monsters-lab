const monstersURL = `http://localhost:3000/monsters`
const monsterContainer = document.querySelector("#monster-container")
let pageNumber = 1

fetchFiftyMonsters()

function fetchFiftyMonsters() {
  fetch(`${monstersURL}/?_limit=50&_page=${pageNumber}`)
  .then(r => r.json())
  .then((monsters) => {
    monsters.forEach((monster) => {
      renderMonster(monster)
    })
    nextPage()
  })
}

function renderMonster(monster) {
  let name = document.createElement("h2")
  name.innerText = monster.name 

  let age = document.createElement("p")
  age.innerText = monster.age

  let description = document.createElement("p")
  description.innerText = monster.description

  let idNumber = document.createElement("p")
  idNumber.innerText = `ID #${monster.id}`

  monsterContainer.append(idNumber, name, age, description)
}

function nextPage() {
  let nextButton = document.querySelector("#forward")
  nextButton.addEventListener("click", (event) => {

    pageNumber = pageNumber + 1
    monsterContainer.innerHTML = ""

    fetch(`${monstersURL}/?_limit=50&_page=${pageNumber}`)
    .then(r => r.json())
    .then((monsters) => {
      monsters.forEach((monster) => {
        renderMonster(monster)
      })
      nextPage()
    })
  })
}