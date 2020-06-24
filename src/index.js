const monstersURL = `http://localhost:3000/monsters`
const fiftyMonstersURL = `http://localhost:3000/monsters/?_limit=50&_page=1`
const monsterContainer = document.querySelector("#monster-container")

fetch(fiftyMonstersURL)
.then(r => r.json())
.then((monsters) => {
  monsters.forEach((monster) => {
    renderMonster(monster)
  })
})

function renderMonster(monster) {
  let name = document.createElement("h2")
  name.innerText = monster.name 

  let age = document.createElement("p")
  age.innerText = monster.age

  let description = document.createElement("p")
  description.innerText = monster.description

  monsterContainer.append(name, age, description)
}