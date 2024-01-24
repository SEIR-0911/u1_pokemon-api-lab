let button = document.querySelector('#searchButton')
let inputBar = document.querySelector('#inputBar')

const getPokemon = async () => {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    console.log(pokemon.data)
}

getPokemon()

button.addEventListener('click', async () => {
    
    let pokemonName = document.querySelector('#pokemonName')
    let pokemonImage = document.querySelector('#pokemonImage')
    let textInput = document.querySelector('#inputBar').value

    //Axios call goes here
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    console.log(response.data)
    console.log(response.data.id)
    //remember to use Async and Await!
    
    //DOM Setters go here
    pokemonName.innerText = response.data.name
    pokemonImage.src = response.data.sprites.front_default
})




