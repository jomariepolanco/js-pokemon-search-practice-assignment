document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE

  const pokeCont = document.querySelector("div#pokemon-container")
  const searchForm = document.querySelector("#pokemon-search-form")


    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(json => renderPokemon(json))
  
  
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault()
    // console.log(pokeCont.children)
    const children = Array.from(pokeCont.children)
    children.forEach(child => {
      // debugger
      if (!child.textContent.includes(event.target["pokemon-search-input"].value)) {
        child.style.display = "none"
      } else {
        child.styledisplay = ""
      }
    })

  })

  pokeCont.addEventListener("mouseover", event => {
    if (event.target.tagName === "IMG") {
      // debugger
      event.target.parentElement.children[1].style.display = ""
      event.target.parentElement.children[0].style.display = "none"
      event.target.parentElement.children[2].style.display = ""
      event.target.parentElement.children[3].style.display = ""
      event.target.parentElement.children[4].style.display = ""
    }
  })



  
  function renderPokemon(pokemons) {
    // console.log(pokemons[0])
    for (pokemon of pokemons) {
      const pokeCard = document.createElement("div")
      pokeCard.className = "pokemon-card"
      const pokeFrame = document.createElement("div")
      pokeFrame.className = "pokemon-frame"
      const h1 = document.createElement("h1")
      h1.className = "center-text"
      h1.textContent = pokemon.name 
      const pokeImageDiv = document.createElement("div")
      pokeImageDiv.className = "pokemon-image"
      const pokeImage = document.createElement("img")
      pokeImage.dataset.id = pokemon.id 
      pokeImage.dataset.action = "flip"
      pokeImage.className = "toggle-sprite"
      pokeImage.src = pokemon.sprites.front
      const pokeBackImg = document.createElement("img")
      pokeBackImg.src = pokemon.sprites.back 
      pokeBackImg.style.display = "none"
      const ulAttributes = document.createElement("ul")
      const liMoves = document.createElement("li")
      const liAbilities = document.createElement("li")
      // const liStats = document.createElement("li")
      liMoves.textContent = pokemon.moves
      liMoves.style.display = "none"
      liAbilities.textContent = pokemon.abilities 
      liAbilities.style.display = "none"
      // liStats.textContent = pokemon.stats 
      // liStats.style.display = "none"
      pokeImageDiv.append(pokeImage, pokeBackImg, liMoves, liAbilities)
      pokeFrame.append(h1, pokeImageDiv)
      pokeCard.append(pokeFrame)
      pokeCont.append(pokeCard)
    } 
  }

  

}) //DOMContentLoaded
