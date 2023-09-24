//placeholders for HTML divs
const body = document.getElementsByTagName('body')
//Header
const inputButton = document.querySelector(`#searchButton`)
//Text Input
let pName = document.querySelector("#pokeName")
let pTypes = document.querySelector("#types")
let pHeightWeight = document.querySelector("#height-weight")
let pAbilities = document.querySelector("#abilities")
let pStats = document.querySelector("#stats")
// //male images
let mStdFrt = document.querySelector(`#male-images`).querySelector('#standard-front')
let mStdBck = document.querySelector(`#male-images`).querySelector('#standard-back')
let mShnyFrt = document.querySelector(`#male-images`).querySelector('#shiny-front')
let mShnyBck = document.querySelector(`#male-images`).querySelector('#shiny-back')
// // //female images
// let fStdFrt = document.querySelector(`#female-images`).querySelector('#standard-front')
// let fStdBck = document.querySelector(`#female-images`).querySelector('#standard-back')
// let fShnyFrt = document.querySelector(`#female-images`).querySelector('#shiny-front')
// let fShnyBck = document.querySelector(`#female-images`).querySelector('#shiny-back')


inputButton.addEventListener('click', async () => {
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    const getSinglePokeMon = async () => {
        const pokeName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
     //   let placeholderImage = pokeName.data.sprites.front_default
        console.log(pokeName.data)
        //name
        pName.innerHTML = `Name:<br> ${pokeName.data.name}`
        //type
        if ((pokeName.data.types).length > 1) {
            pTypes.innerHTML = `Types:<br>`
        } else {
            pTypes.innerHTML = `Type:<br>`
        }
        for (let i = 0; i < (pokeName.data.types).length; i++) {
            let placeholderTypeArray = pokeName.data.types[i].type.name
            pTypes.innerHTML += `${placeholderTypeArray} `
        //Height/Weight
        pHeightWeight.innerHTML = `Height: ${pokeName.data.height} <br> Weight: ${pokeName.data.weight}`
        }
        //Abilities
        if ((pokeName.data.abilities).length > 1) {
            pAbilities.innerHTML = `Abilities: `
        } else {
            pAbilities.innerHTML = `Ability: `
        }
        //console.log(pokeName.data.abilities[0].ability.name)
        for (let i = 0; i < (pokeName.data.abilities).length; i++) {
            let placeholderAbilityArray = pokeName.data.abilities[i].ability.name
            pAbilities.innerHTML += `${placeholderAbilityArray}`
        //Height/Weight
        pHeightWeight.innerHTML = `Height: <br>${pokeName.data.height} <br> Weight: ${pokeName.data.weight}`
        }
        //stats
        pStats.innerHTML = `HP: ${pokeName.data.stats[0].base_stat} <br>ATK: ${pokeName.data.stats[1].base_stat} <br>DEF: ${pokeName.data.stats[2].base_stat} <br>SPD: ${pokeName.data.stats[3].base_stat} <br>SpATK: ${pokeName.data.stats[4].base_stat} <br>SpDEF: ${pokeName.data.stats[5].base_stat}`
       
        //male images
        mStdFrt.innerHTML = `<img src=${pokeName.data.sprites.front_default}>`
        mStdBck.innerHTML = `<img src=${pokeName.data.sprites.back_default}>`
        mShnyFrt.innerHTML = `<img src=${pokeName.data.sprites.front_shiny}>`
        mShnyBck.innerHTML = `<img src=${pokeName.data.sprites.back_shiny}>`
        // //female images
        // fStdFrt.innerHTML = `<img src=${pokeName.data.sprites.front_female}>`
        // fStdBck.innerHTML = `<img src=${pokeName.data.sprites.back_female}>`
        // fShnyFrt.innerHTML = `<img src=${pokeName.data.sprites.front_shiny_female}>`
        // fShnyBck.innerHTML = `<img src=${pokeName.data.sprites.back_shiny_female}>`
        //background color
        let firstType = pokeName.data.types[0].type.name
        switch (firstType) {
            case "normal":
                document.body.style.background = "#93938F";
                break;
            case "fighting":
                document.body.style.background = "#E15866";
                break;
            case "flying":
                document.body.style.background = "#7E9EE3";
                break;
            case "poison":
                document.body.style.background = "#C738B4";
                break;
            case "ground":
                document.body.style.background = "#CD8249";
                break;
            case "rock":
                document.body.style.background = "#CFC068";
                break;
            case "bug":
                document.body.style.background = "#75BA0A";
                break;
            case "ghost":
                document.body.style.background = "#9484DB";
                break;
            case "steel":
                document.body.style.background = "#299098";
                break;
            case "fire":
                document.body.style.background = "#FEA92D";
                break;
            case "water":
                document.body.style.background = "#62BCE2";
                break;
            case "grass":
                document.body.style.background = "#48CC77";
                break;
            case "electric":
                document.body.style.background = "rgb(249, 255, 161)";
                break;
            case "psychic":
                document.body.style.background = "#FF8175";
                break;
            case "ice":
                document.body.style.background = "#6FD7CD";
                break;
            case "dragon":
                document.body.style.background = "#0C6ABA";
                break;
            case "dark":
                document.body.style.background = "#525166";
                document.body.style.color = "white";
                break;
            case "fairy":
                document.body.style.background = "#F7A5DC";
                break;
            case "unknown":
                document.body.style.background = "black";
                break;
            case "shadow":
                document.body.style.background = "rgb(91, 91, 91)";
                break;
        }
    }
    getSinglePokeMon()
})