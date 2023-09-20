let abilitiesTitle = document.querySelector('#abilitiestitle')
let abilities = document.querySelector('#abilities')
let button = document.querySelector("#searchButton")
let pokemonName = document.querySelector("#pokemonName")
let pokemonImage = document.querySelector("#pic")
//where does this need to be scoped?
let textInput = document.querySelector("#inputBar")
let moves = document.querySelector('#moves')
let movesTitle = document.querySelector('#movestitle')
let typeTitle = document.querySelector('#typetitle')
let typeD = document.querySelector('#type')



button.addEventListener('click', async () => {
    //gets input bar for pokename
    textI = textInput.value
    console.log(textI)

    //get request from API
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textI}`)

    //gets .png file front_default
    let pokePic = response.data.sprites.front_default
    //logs url
    console.log(pokePic)
    //sets the div to hold the picture
    pokemonImage.innerHTML = `<img src=${pokePic}>`

    //grabs the first ability, no longer used
    // let pokeAbilities = response.data.abilities[0].ability.name
    // console.log(pokeAbilities)


    //   // creates a div and saves it to a variable
    //   const abilitiesReadOut = document.createElement('div')
    //   //sets the abilitiesReadOut variable to be the child of pokemonImage element 
    //   pokemonImage.append(abilitiesReadOut)
    //   //sets the inner text of abilitiesReadOut
    //   abilitiesReadOut.innerText = "Abilities"

      

    abilitiesTitle.innerHTML = "Abilities:"
    //creates variable that maps all pokeabilities by using the map function 
    const abilityNames = response.data.abilities.map((abilityData) => abilityData.ability.name);
    //this should format the output to give each abilitiy its own line '\n' by using the newline operator
    let formattedAbilities = abilityNames.join(',  ')
    //sets the global variable to hold the return from above
    abilities.innerHTML = formattedAbilities

    console.log(abilityNames);

    //maps all moves 
    const moveNames = response.data.moves.map((moveData) => moveData.move.name);
    //injects moves into the innerhtml
    movesTitle.innerHTML = "Moves:"
    //injects the array into the moves element
    moves.innerHTML = moveNames.join(', ')


    //getting type
    const type = response.data.types[0].type.name
    //setting title element
    typeTitle.innerHTML = "Type:"
    typeD.innerHTML = type

    


  

    
    

    

    
    



  


    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here

}
)
