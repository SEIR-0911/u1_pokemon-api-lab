
//https://pokeapi.co/

let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    //where does this need to be scoped?
    let textInput = "ditto"
    //= document.querySelector("#inputBar").value
    //Axios call goes here
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${textInput.toLowerCase()}/`
    )
    console.log(response.data)

    let pokemonTable = document.getElementById("pokemon-table");
    let displayContent = `
    <table >
        <tr >
            <th>Name</th>
            <th>Type</th>
            <th>Regon</th>
            <th>Image</th>
            <th>Abilities</th>       
        </tr>
        <tr>
            <td>${response.data.name}</td>
            <td></td>
            <td></td>
            <td><img src="${response.data.sprites.back_default}"/></td>
            <td>`
    response.data.abilities.forEach(element => displayContent += `${element.ability.name}<br/>`)
    displayContent += `</td>`;//closing abilites cell
    displayContent += //closing data table
        `</tr>
    </table>`
    pokemonTable.innerHTML = displayContent;



});


/*
button.addEventListener("click", async () => {
    let pokemonName = document.querySelector("#pokemonName");
    let pokemonImage = document.querySelector("#pokemonImage");
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value;
    //Axios call goes here
    // textInput = textInput;
    // console.log(textInput)
    let response1 = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${textInput.toLowerCase()}/`
    );
    let myID = response1.data.id;
    let response2 = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${myID}/encounters/`
    );
    // console.log(response1.data);
    response2.data.forEach((element, index) => {
        console.log(element.version_details[index])
    });

});
*/
