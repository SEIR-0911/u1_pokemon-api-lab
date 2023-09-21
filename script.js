//console.log('working')

let button = document.querySelector("#searchButton")

   

   
   
button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let textInput = document.querySelector("#inputBar").value
   
    let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)

    let pokePic = result.data.sprites.front_default
    let pokeId = result.data.held_items.id
    let pokeExperience = result.data.abilities.base_experience
    let pokeStatus = result.data.status


//cool trick to add pics
pokemonImage.src = pokePic


// console.log(result)
}
)


