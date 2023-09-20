let button = document.querySelector("#searchButton")
button.addEventListener('click', async () => {
    // let pokemonName = document.querySelector("#pokemonName")
    // let pokemonImage = document.querySelector("#pokemonImage")
    // let pokemonHeight = document.querySelector("#pokemonHeight")
    // let pokemonWeight = document.querySelector("#pokemonWeight")
    // let pokemonType = document.querySelector("#pokemonType")
    // let pokemonNum = document.querySelector("#pokemonNum")
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    

    // Axios call goes here

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    const data = response.data
    console.log(response)
    let picURL = data.sprites.front_default
    let pokeName = data.name
    let pokeHeight = data.height
    let pokeWeight = data.weight
    let pokeType = data.types[0].type.name
    let pokeNum = data.id    

    let pImage = document.querySelector("#image")
    pImage.src = picURL
    let pName = document.querySelector("#name")
    pName.innerHTML = pokeName
    let pHeight = document.querySelector("#height-weight")
    pHeight.innerHTML = `Height: ${pokeHeight}0cm     Weight: ${pokeWeight}00g`
    let pType = document.querySelector("#type")
    pType.innerHTML = pokeType
    let pNum = document.querySelector("#number")
    pNum.innerHTML = `#${pokeNum}`
    //remember to use Async and Await!
    //DOM Setters go here

})
