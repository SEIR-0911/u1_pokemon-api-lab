const axios = require('axios')

let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {
    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let textInput = document.querySelector("#inputBar").value
    
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameInput}`)

    let placeholderTypeArray = pokeName.data.types[i].type.name

      // Drilling our data response

      let pokemonPic = response.data.message
      
      // Setting our DOM image

      imageDiv.innerHTML = `<img src=${pokemonPic}>`

      console.log(result)
})





