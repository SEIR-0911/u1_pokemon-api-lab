// const button = document.querySelector('#searchButton')
// const textInput = document.querySelector('#inputBar')

// const nameScreen = document.getElementById("name")









// THIS IS PULLING URL PROPERLY
let button = document.querySelector('#searchButton')

button.addEventListener('click', async () => {
   
   let pokemonImage = document.querySelector('#pokemonImage')
   

   let pokemonName = document.querySelector('#pokemonName')
   

   let textInput = document.querySelector('#inputBar')
   let input = textInput.value
   let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)


   let getPokemon = async () => {
   
   console.log(response)
   

   }
   pokemonName.innerHTML = response.data.species.name
   pokemonImage.src = response.data.sprites.front_default
   
   getPokemon()
})






// This will make sure that the info gets reset to null or blank to make sure there will be no mix ups with new information coming as the response. 
// const resetScreens = () => {
//    pokemonName.innerHTML = "";
// }

// const getPokemon = (num) => {
//    resetScreens();


   // this creates a promise.
// fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)

// // 'then' takes the promise from 'fetch' and (res) answers with another promise of 'res.json()'.
//    .then((res) => res.json())

//    // the second 'then' answers the promise from 'res.json()' and turns it into (data).
//    .then((data) => {
//       pokemonImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
//       pokemonName.innerHTML = data.name;
//    });
// };


// button.addEventListener("click", () => getPokemon(textInput.value));



// // This is suppose to make it so you can just press "Enter" after typing the name and continue to search.
// textInput.addEventListener("keydown", (event) => {
//    if (event.key === "Enter") {
//       button.click();
//    }
// });










// button.addEventListener('click', async () => getPokemon(num.value)) 
// let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)

// console.log('working')

//    pokemonImage.src = response.data.sprites.front_default
//    console.log(pokemonImage)

//    for(let i = 0; i < response.data.abilities.length; i++);



   // pokemonMoves.map = `Moves`





















































