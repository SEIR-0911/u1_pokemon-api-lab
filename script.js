//console.log("working") 



//pulls all breeds and logs to the console
// const getPokemon = async () => {
//     const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
//     // gives list in Console on webpage
//     console.log(pokemon)
//   }

// getPokemon()

let searchButton = document.querySelector('#searchButton')
//reads our Input value and makes the interactive API call
searchButton.addEventListener('click', async ()=> {

    let chosenPokemon = document.querySelector('#inputBar').value.toLowerCase()
    let imageDiv = document.querySelector('#pokemonImage')
    let pokemonName = document.querySelector('#pokemonName')
    let pokeHeight = document.querySelector('#pokemon-height')
    let pokeWeight = document.querySelector('#pokemon-weight')
    let pokemonAbilities = document.querySelector('#pokemon-abilities')

    //console.log(choice)
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${chosenPokemon}`
      )
    pokemonName.innerHTML = chosenPokemon
    imageDiv.src = response.data.sprites.front_default
    pokeHeight.innerHTML = `Height: ${response.data.height}`
    pokeWeight.innerHTML = `Weight: ${response.data.weight}`
    pokemonAbilities.innerHTML = `Main Ability: ${response.data.abilities[0].ability.name}`
    
    // let abilities = response.data.abilities.ability
    // for (const [key, value] of Object.entries(abilities)) {
    //     pokemonAbilities.innerHTML = `Moves: ${name.value}`
    // }
     
})

// let placeholderTypeArray = pokeName.data.types[i].type.name

