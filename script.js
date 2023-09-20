
const button = document.querySelector('#searchButton')
const textInput = document.querySelector('#inputBar')
const pokemonName = document.querySelector('#pokemonName')
const pokemonImage = document.querySelector('#pokemonImage')
const pokemonAbout = document.querySelector('#pokemonAbout')
// const pokemonWeight = document.querySelector('#pokemonWeight')
// const pokemonExp = document.querySelector('#pokemonExp')
// const textInputUpper = document.querySelector('#inputBar').toUpperCase()

button.addEventListener('click', async () => {
    let toRemove = document.querySelectorAll('.abilities')
    if(toRemove) {
        toRemove.forEach((el) => el.remove())
    }
    console.log(textInput)
    let pokeInput = textInput.value.toLowerCase()
    console.log(pokeInput)
    
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`)
    console.log(response)
    
    let pokePic = response.data.sprites.front_default
    pokemonImage.innerHTML = `<img src=${pokePic}>`
    
    let pokeName = response.data.name
    pokemonName.innerHTML = `${pokeName}`
    
    let pokeAbout = ''
    pokemonAbout.innerHTML = `About:`
        let newDiv2 = document.createElement('div2')
    newDiv2.setAttribute('class', 'abilities about')
    newDiv2.append(pokeAbout)
    document.body.append(newDiv2)
    console.log(pokeAbout)
    
    let pokeExp = response.data.base_experience
    // pokemonExp.innerHTML = `${pokeExp}`
        let newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'abilities exp')
    newDiv.append(`Exp: ${pokeExp}`)
    document.body.append(newDiv)
    
    let pokeWeight = response.data.weight
        let newDiv1 = document.createElement('div1')
    newDiv1.setAttribute('class', 'abilities weight')
    newDiv1.append(`Weight: ${pokeWeight}`)
    document.body.append(newDiv1)
    // pokemonWeight.innerHTML =`${pokeWeight}`
    
    let pokeAbilities = response.data.abilities
        if (pokeAbilities.length > 0) {
            let newHeader = document.createElement('h3')
        newHeader.setAttribute('class', 'abilities about')
        newHeader.append(`${pokeName}'s abilities:`)
        document.body.append(newHeader)
        }
        pokeAbilities.forEach((ab) => {
            let abilityName = ab.ability.name
            let newDiv =  document.createElement('div')
            newDiv.setAttribute('class','abilities blue')
            newDiv.append(abilityName)
            document.body.append(newDiv)
    })
    let pokeItems = response.data.held_items
        if (pokeItems.length > 0) {
            let newHeader = document.createElement('h3')
        newHeader.setAttribute('class', 'abilities about')
        newHeader.append(`${pokeName}'s items:`)
        document.body.append(newHeader)
    }
        pokeItems.forEach((hi) => {
            let heldItem = hi.item.name
            let newDiv = document.createElement('div')
            newDiv.setAttribute('class', 'heldItem abilities')
            newDiv.append(heldItem)
            document.body.append(newDiv)
    })
})