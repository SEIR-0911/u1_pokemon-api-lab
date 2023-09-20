// const button = document.querySelector('button')
// const breedInput = document.querySelector('input')
// const imageDiv = document.querySelector('div')

//pulls all breeds and logs to the console
// const getBreeds = async () => {
//     const dogbreeds = await axios.get('https://dog.ceo/api/breeds/list/all')
//     console.log(dogbreeds.data.message)
//   }

//   getBreeds()

const userInput = document.querySelector('#inputBar').value
const imageDiv = document.querySelector('#pokemonImage')
const pokemonName = document.querySelector('#pokemonName')

let searchButton = document.querySelector('#searchButton')

searchButton.addEventListener('click', async ()=> {

    let userInput = document.querySelector('#inputBar').value.toLowerCase()
    let imageDiv = document.querySelector('#pokemonImage')
    let pokemonName = document.querySelector('#pokemonName')

    // button.addEventListener('click', async ()=> {
    //   let breed = breedInput.value
    //   let response = await axios.get(
    //       `https://dog.ceo/api/breed/${breed}/images/random`
    //     )


    let pokemonAbilities = document.querySelector('#pokemon-abilities')
    let pokeHeight = document.querySelector('#pokemon-height')
    let pokeWeight = document.querySelector('#pokemon-weight')


    //console.log(choice)
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${userInput}`
      )
    pokemonName.innerHTML = userInput
    imageDiv.src = response.data.sprites.front_default
    pokeHeight.innerHTML = `Height: ${response.data.height}`
    pokemonAbilities.innerHTML = `Special Attack: ${response.data.abilities[0].ability.name}`
    pokeWeight.innerHTML = `Weight: ${response.data.weight}`


   let abilities = response.data.abilities.ability
    for (const [key, value] of Object.entries(abilities)) {
        pokemonAbilities.innerHTML = `Special Attack: ${name.value}`
     }

})

let placeholderTypeArray = pokeName.data.types[i].type.name
