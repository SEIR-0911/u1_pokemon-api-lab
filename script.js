// draw.io link: "https://drive.google.com/file/d/1E89ggA7VBz6C4aK3X6EAdyAnJc9Fjn19/view?usp=sharing"

searchButton.addEventListener("click", async () => {
    // general
    const searchButton = document.querySelector("#searchButton")
    const pokemonInput = document.querySelector("#inputBar")
    // info
    const nameDiv = document.querySelector("#name") // added
    const numberDiv = document.querySelector("#number") // added
    const typeDiv = document.querySelector('#typeDiv') // added
    const abilityDiv = document.querySelector('#abilityDiv') // added
    const imageDiv = document.querySelector("#pokemonImage") // added
    // const shinyDiv = document.querySelector("#shinyImage") // added & combined
    const errorMessage = document.querySelector("#errorMessage")

    // clear previous results
    errorMessage.textContent = "" ;
    numberDiv.innerHTML = ''
    nameDiv.innerHTML = ''
    abilityDiv.innerHTML = ''
    imageDiv.innerHTML = ''
    typeDiv.innerHTML = ''

    // START HERE //
    let pokemon = pokemonInput.value.toLowerCase()
    // console.log(pokemon)
    try {
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        // NUMBER --done
        let pokemonNumber = response.data.id
        numberDiv.innerHTML = `(No. ${pokemonNumber})`

        // NAME --done
        let pokemonName = response.data.species.name
        nameDiv.innerHTML = `${pokemonName}`

        // TYPES --done
        for (let i = 0; i < response.data.types.length; i++) {
            let pokemonType = response.data.types[i].type.name
            let typeElement = document.createElement("div")
            typeElement.textContent = pokemonType
            typeDiv.appendChild(typeElement)
        }

        // ABILITIES --done
        for (let i = 0; i < response.data.abilities.length; i++) {
            let pokemonAbility = response.data.abilities[i].ability.name
            let abilityElement = document.createElement("div")
            abilityElement.textContent = pokemonAbility
            abilityDiv.appendChild(abilityElement)
        }

        // IMAGE && SHINY --done
        let pokemonImage = response.data.sprites.front_default;
        let shinyImage = response.data.sprites.front_shiny;
        imageDiv.innerHTML = `<img src=${pokemonImage}> <img src=${shinyImage}>`;
    } catch (error) {
        // errors --done
        errorMessage.interHTML = `"Pokemon not found. Enter a valid Pokemon name!"`;
    }
});
    
// ARCHIVED CODE //
    // const searchButton = document.querySelector("#searchButton")
    // const pokemonInput = document.querySelector("#inputBar")

    // const nameDiv = document.querySelector("#name") // added
    // const numberDiv = document.querySelector("#number") // added
    // const typeDiv = document.querySelector('#typeDiv')
    // const abilityDiv = document.querySelector('#abilityDiv')
    // const imageDiv = document.querySelector("#pokemonImage") // added
    // const shinyDiv = document.querySelector("#shinyImage") // added & combined
    // // IMAGE
    // let pokemonImage = response.data.sprites.front_default
    // imageDiv.innerHTML = `<img src=${pokemonImage}>`
    // console.log(pokemonImage)
    // let shinyImage = response.data.sprites.front_shiny
    // shinyDiv.innerHTML = `<img src=${shinyImage}>`
    // // console.log(shinyImage)
    // // SHINY

    // // ABILITY 1
    // let pokemonAbility1 = response.data.abilities[0].ability.name
    // ability1Div.innerHTML = `${pokemonAbility1}`
    // console.log(pokemonAbility1)
    // // ABILITY 2
    // let pokemonAbility2 = response.data.abilities[1].ability.name
    // if (pokemonAbility2) {
    // ability2Div.innerHTML =`${pokemonAbility2}`
    // console.log(pokemonAbility2) 
    // } else {
    //     ability2Div.innerHTML =`This Pokemon Only Has 1 Regular Ability`
    // }
    // // HIDDEN ABILITY
    // let hiddenAbility = response.data.abilities[2].ability.name
    // hiddenDiv.innerHTML = `${hiddenAbility}`