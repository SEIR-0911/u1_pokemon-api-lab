/*
    Make a request to servers through an API
    pull image through axios
    add event listener for when the value is typed and searched
    run conditionals for properties of the pokemon (abilities(name), forms(name), versions etc)


*/
//set global variables
const button = document.querySelector('#searchButton')
const pokemonContainer = document.getElementById('pokemonContainer')
//where does this need to be scoped?

//Axios call goes here
//remember to use Async and Await!
button.addEventListener('click', async () => {
	let pokemonName = document.querySelector('#pokemonName')
	let pokemonImage = document.querySelector('#pokemonImage')
	let pokemonHeight = document.querySelector('#pokemonHeight')
	let pokemonTypes = document.querySelector('#pokemonTypes')
	let textInput = document.querySelector('#inputBar').value
	console.log(textInput)

	//Axios call goes here
	//remember to use Async and Await!
	let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
	console.log(result.data)
	pokemonContainer.style.display = 'block'
	//DOM Setters go here
	if (
		result &&
		result.data.sprites &&
		result.data.sprites.other &&
		result.data.sprites.other.showdown &&
		result.data.sprites.other.showdown.front_default
	) {
		pokemonName.textContent =
			result.data.name.charAt(0).toUpperCase() + //Will make first letter of name Upper case
			result.data.name.slice(1).toLowerCase() //Rest of the name will be lower case
		pokemonImage.setAttribute(
			'src',
			result.data.sprites.other.showdown.front_default
		)
	} else {
		console.log('Pokemon not found')
		pokemonName.textContent = 'Pokemon not found'
		pokemonImage.setAttribute('src', '')
	}

	if (result.data.game_indices) {
		pokemonHeight.textContent = 'Height: ' + result.data.height + `'0"`
		console.log(result.data.height)
	}

	if (result.data.types && result.data.types.length > 0) {
		let numTypes = 'Type(s): '
		for (let i = 0; i < result.data.types.length; i++) {
			numTypes += result.data.types[i].type.name
			if (i < result.data.types.length - 1) {
				numTypes += ',  '
			}
		}
		pokemonTypes.textContent = numTypes
	} else {
		pokemonTypes.textContent = 'Type(s): Not Available'
	}
})
