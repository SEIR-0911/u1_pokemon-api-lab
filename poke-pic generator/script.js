const button = document.querySelector(`#generate`)
const pokeName = document.querySelector(`#pokeName`)
//let uInput = document.querySelector(`#uInput`).value you must put this inside the event listener, because there is no value and it will throw an error until there's user input.
const pokeImg = document.querySelector(`#pokeImg`)
const ableHeader = document.querySelector(`#ableHeader`)
const ableList = document.querySelector(`#ableList`)

function reset(){
    ableList.innerHTML = ''
}//the ability list kept stacking even after getting a new pokemon, so adding this in and calling it at the very beginning of the button click

button.addEventListener(`click`, async () => {
    reset()
    let uInput = document.querySelector(`#uInput`).value.toLowerCase()
    let apiReturn = await axios.get(`https://pokeapi.co/api/v2/pokemon/${uInput}`)
    //console.log(apiReturn) //data.sprites.front_default is where the picture I want is stored.
    let dbImg = apiReturn.data.sprites.front_default
    let abilities = apiReturn.data.abilities
    //console.log(abilities) //so this is an array of objects, which includes the key value pairs name: (ability name). But wait! there's an extra layer! thank god for Kyndal, Robert, and Logan in the debugging channel 
    for (let i = 0 ; i<abilities.length ; i++){
        let newAbility = abilities[i].ability.name
        //https://www.javascripttutorial.net/javascript-dom/javascript-append/ to figure out how to actually append an li
        let makeLi = document.createElement(`li`)//declare an easy-to-read variable that will create an li
        makeLi.innerHTML = newAbility //this will set the part between the tags to the new ability returned in that newAbility variable we declared
        ableList.append(makeLi)//add the new li that we first created, then added meat to.
    }
    pokeImg.innerHTML = `<img id="dbImg" src = ${dbImg}>`
    pokeName.innerHTML = uInput.toUpperCase()
    ableHeader.innerHTML = `Abilities:`
    pokeData.setAttribute(`class`, `border`)
})