const button = document.querySelector("#searchButton")

const pokemonAbilities = document.querySelector('#abilities')

button.addEventListener('click', async () => {
    const pokemonName = document.querySelector("#pokemonName")
    const pokemonImage = document.querySelector("#pokemonImage")
    const textInput = document.querySelector("#inputBar").value
    const abilitieHeader = document.querySelector("#abilitiesHeader")

    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${textInput}`
    )
    //console.log(response)

    abilitiesHeader.innerHTML = "Abilities:"

    response.data.abilities.map(ability => {
        const li = document.createElement("li")
        li.innerText= ability.ability.name
        pokemonAbilities.appendChild(li)
    })

    pokemonName.innerHTML = response.data.name

    const pokemonPic = response.data.sprites.front_default
    pokemonImage.innerHTML = `<img src = "${pokemonPic}">`
}
)