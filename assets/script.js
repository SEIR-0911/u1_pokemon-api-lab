// app.js
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector("#searchButton");
    const pokemonName = document.querySelector("#pokemonName");
    const pokemonImage = document.querySelector("#pokemonImage");
    const pokemonStats = document.querySelector("#pokemonStats");
    const inputBar = document.querySelector("#inputBar");

    searchButton.addEventListener('click', async () => {
        const pokemonNameValue = inputBar.value.trim().toLowerCase();

        if (pokemonNameValue) {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameValue}`);
                const data = response.data;

                pokemonName.textContent = data.name;
                pokemonImage.src = data.sprites.front_default;

                const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`);
                pokemonStats.innerHTML = `<h3>Stats:</h3><ul><li>${stats.join("</li><li>")}</li></ul>`;
            } catch (error) {
                console.error("Error fetching data:", error);
                clearPokemonData();
            }
        }
    });

    function clearPokemonData() {
        pokemonName.textContent = "";
        pokemonImage.src = "";
        pokemonStats.innerHTML = "";
    }
});
