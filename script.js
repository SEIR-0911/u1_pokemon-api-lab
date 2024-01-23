/*
    Make a request to servers through an API
    pull image through axios
    add event listener for when the value is typed and searched
    run conditionals for properties of the pokemon (abilities(name), forms(name), versions etc)


*/
//set global variables
let button = document.querySelector('#searchButton')
//where does this need to be scoped?

//Axios call goes here
//remember to use Async and Await!

button.addEventListener('click', async () => {
	let pokemonName = document.querySelector('#pokemonName')
	let pokemonImage = document.querySelector('#pokemonImage')
	let textInput = document.querySelector('#inputBar').value
	console.log(textInput)

	//Axios call goes here
	//remember to use Async and Await!
	let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
	console.log(result.data)

	//DOM Setters go here
	if (result && result.data.sprites && result.data.sprites.front_default) {
		pokemonName.textContent = result.data.name
		pokemonImage.src = result.data.sprites.front_default
	} else {
		console.log('Data not available')
		pokemonName.textContent = 'Image not available'
		pokemonImage.src = ''
	}
})
