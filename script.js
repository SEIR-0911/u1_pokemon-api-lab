document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector("#searchButton");

  async function searchPokemon() {
    const pokemonName = document.querySelector("#pokemonName");
    const pokemonTypes = document.querySelector("#pokemonTypes");
    const pokemonImage = document.querySelector("#pokemonImage");
    const textInput = document.querySelector("#inputBar").value.toLowerCase();

    if (textInput.trim() === '') {
      alert('Please enter a Pokemon name or ID.');
      return;
    }

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${textInput}`;

    try {
      const response = await axios.get(apiUrl);
      const { name, types, sprites } = response.data;

      displayPokemonInfo(capitalizeFirstLetter(name), capitalizeFirstLetter(types), sprites.front_default);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Pokemon not found. Please check the name or ID.');
    }
  }

  button.addEventListener('click', searchPokemon);

  function displayPokemonInfo(name, types, imageUrl) {
    const nameElement = document.getElementById('pokemonName');
    const typesElement = document.getElementById('pokemonTypes');
    const imageElement = document.getElementById('pokemonImage');
  
    if (nameElement && typesElement && imageElement) {
      nameElement.textContent = name;
      const typeNames = types.map(type => capitalizeFirstLetter(type.type.name)).join(', ');
      typesElement.textContent = `Type(s): ${typeNames}`;
      imageElement.src = imageUrl;
    } else {
      console.error('Error: One or more elements not found.');
    }
  }
  

  function capitalizeFirstLetter(string) {
    if (typeof string === 'string' && string.length > 0) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}
});

  