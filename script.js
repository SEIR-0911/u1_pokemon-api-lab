let button = document.querySelector("#searchButton")
let button2 = document.querySelector("#searchButton2")
button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    let textInput2 = document.querySelector("#inputBar2").value
    let pokemonImage = document.querySelector("#pokemonImage")
    let pokeNum = document.querySelector("#number")
    let pokeMove = document.querySelector("#moves")

    let pokemonTwo = document.querySelector("#poke2")
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    let response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput2}`)

    let pokePic = response.data.sprites.front_default
    let identifier =  response.data['id']
    let moveSet = response.data.abilities['0'].ability['name']
 

    let opponent = response2.data.sprites.back_default



    // let randomOpponent = Math.floor(Math.random() * response.data.sprites['back_default'].length)
    // console.log(opponent)
    // console.log(randomOpponent)
    // let x = response.data.sprites[randomOpponent]
    // console.log(x)
    pokemonImage.setAttribute('src', pokePic)
    pokeNum.innerHTML = `ID: ${identifier}`
    pokeMove.innerHTML = `Move: ${moveSet}`
    console.log(pokemonTwo.setAttribute('src', opponent))
 



}
)