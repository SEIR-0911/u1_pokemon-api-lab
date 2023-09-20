
//https://pokeapi.co/

let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {
    let textInput = document.querySelector("#inputBar").value
    let response = await axios.get(     //Axios call
        `https://pokeapi.co/api/v2/pokemon/${textInput.toLowerCase()}/`
    )
    console.log(response.data);//just to see the response

    let pokemonTable = document.getElementById("pokemon-table");
    let displayContent = `
    <div id="pokemon-table-style">
    <table >
        <tr >
            <th>Name</th>
            <th>Type</th>
            <th>Weight</th>
            <th>Image</th>
            <th>Abilities</th>       
        </tr>
        <tr>
            <td>${response.data.name}</td>
            <td>`

    response.data.types.forEach(item => displayContent += `${item.type.name}<br/>`);
    displayContent += `</td>
    <td>${response.data.weight}</td>
            <td><img src="${response.data.sprites.back_default}"/></td>
            <td>`
    response.data.abilities.forEach(element => displayContent += `${element.ability.name}<br/>`)
    displayContent += `</td>`;//closing abilites cell
    displayContent += //closing data table
        `</tr>
    </table></div>`
    pokemonTable.innerHTML = displayContent;



});