let button = document.querySelector("#searchButton");

button.addEventListener("click", async () => {
  let pokemonName = document.querySelector("#name-screen");
  let pokemonImage = document.querySelector("#picture");
  let pokemonDescription = document.querySelector("#screen-description");
  let pokemonHeight = document.querySelector("#extra-info-screen-1");
  let pokemonWeight = document.querySelector("#extra-info-screen-2");

  //where does this need to be scoped?
  let textInput = document.querySelector("#inputBar").value;

  // let breed = breedInput.value
  let response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${textInput}`
  );
  //drilling our data response
  let pokemonPic = response.data.sprites.front_default;
  let pokemonId = response.data.id;
  pokemonHeight.innerHTML = response.data.height;
  pokemonWeight.innerHTML = response.data.weight;

  //setting our DOM image
  pokemonName.innerHTML = response.data.name;
  pokemonImage.src = `${pokemonPic}`;

  let responseTwo = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
  );
  pokemonDescription.innerHTML =
    responseTwo.data.flavor_text_entries[0].flavor_text;

  //Axios call goes here
  //remember to use Async and Await!
  //DOM Setters go here
});
