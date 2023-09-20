let button = document.querySelector("#searchButton")
let textInput = document.querySelector("#inputBar")
let pokemonName = document.querySelector("#pokemon-description1")
let pokemonDesc = document.querySelector("#pokemon-description")
let pokemonImage = document.querySelector("#pokemon-img")
let pokemonAb = document.querySelector('#ab')
let pokemonFo = document.querySelector('#fo')
let pokemonMo = document.querySelector('#mo')
let pokemonIt = document.querySelector('#it')
let pokemonEx = document.querySelector('#ex')
let pokemonHe = document.querySelector('#he')
let pokemonWe = document.querySelector('#we')
let pokemonBe = document.querySelector('#be')
let pokemonSt = document.querySelector('#st')
let pokemonGa = document.querySelector('#ga')
let pokemonSta = document.querySelector('#sta')


button.addEventListener('click', async () => {
    let pokeInput = textInput.value
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`) 
    console.log(response)

    //pokemon name
    let pokeName = response.data.name.toUpperCase() 
    pokemonName.innerText = pokeName

    //pokemon image
    let pokemonImage = response.data.sprites.front_default
    document.getElementById("pokemon-img").src=`${pokemonImage}`
    
    //pokemon abilities
    pokemonAb.addEventListener('click', async () => {
        let pokeAbility = response.data.abilities[0].ability.name
        let pokeAbility1 = response.data.abilities[1].ability.name
        pokemonDesc.innerText = `${pokeAbility}, ${pokeAbility1} `
    })

    //pokemon forms
    pokemonFo.addEventListener('click', async () => { 
        let pokeForm = response.data.forms[0].name
        pokemonDesc.innerText = pokeForm
    })

    //pokemon moves
    pokemonMo.addEventListener('click', async () => {
        let pokeMoves = response.data.moves[0].move.name
        pokemonDesc.innerText = pokeMoves
    })
    //pokemon items
    pokemonIt.addEventListener('click', async () => {
        let pokeItems = response.data.held_items[0].item.name
        pokemonDesc.innerText = pokeItems
    })
    //pokemon experience
    pokemonEx.addEventListener('click', async () => {
        let pokeExperience = response.data.base_experience
        pokemonDesc.innerText = pokeExperience
    })
    //pokemon height
    pokemonHe.addEventListener('click', async () => {
        let pokeHeight = response.data.height
        pokemonDesc.innerText = pokeHeight
    })
    //pokemon weight
    pokemonWe.addEventListener('click', async () => {
        let pokeWeight = response.data.weight
        pokemonDesc.innerText = pokeWeight
    })
    //pokemon base experience
    pokemonBe.addEventListener('click', async () => {
        let pokeBaseExperience = response.data.base_experience
        pokemonDesc.innerText = pokeBaseExperience
    })
    //pokemon stats
    pokemonSt.addEventListener('click', async () => {
        let pokeStats = response.data.stats[0].base_stat
        pokemonDesc.innerText = pokeStats
    })
    //pokemon games
    pokemonGa.addEventListener('click', async () => {
        let pokeGames = response.data.game_indices.length
        pokemonDesc.innerText = pokeGames
    })
    //pokemon status
    pokemonSta.addEventListener('click', async () => {
        let pokeStatus = response.status
        pokemonDesc.innerText = pokeStatus
    })
})

