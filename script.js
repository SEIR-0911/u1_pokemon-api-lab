let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImageFront = document.querySelector("#pokemonImageFront")
    let pokemonImageBack = document.querySelector("#pokemonImageBack")
    let pokemonHP = document.querySelector('#hpStat')
    let pokemonATT = document.querySelector('#attStat')
    let pokemonDEF = document.querySelector('#defStat')
    let pokemonASP = document.querySelector('#aspStat')
    let pokemonDSP = document.querySelector('#dspStat')
    let pokemonSPD = document.querySelector('#spdStat')











    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    //Axios call goes here
    textInput = textInput.toLowerCase()
    let response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${textInput}/`
    )
    //console.log(response)
    
    pName = response.data.name
    pImageFront = response.data.sprites.front_default
    pImageBack = response.data.sprites.back_default
    pstats = response.data.stats

    //console.log(pImageFront)
    //console.log(pImageBack)
    pokemonName.innerHTML = `${pName}`
    pokemonImageFront.src = pImageFront
    pokemonImageBack.src = pImageBack
    
    pokemonHP.innerHTML = `HP: ${pstats[0].base_stat}`
    pokemonATT.innerHTML = `Atk: ${pstats[1].base_stat}`
    pokemonDEF.innerHTML = `Def: ${pstats[2].base_stat}`
    pokemonASP.innerHTML = `Sp Atk: ${pstats[3].base_stat}`
    pokemonDSP.innerHTML = `Sp Def: ${pstats[4].base_stat}`
    pokemonSPD.innerHTML = `Spd: ${pstats[5].base_stat}`
    


    let responseLoc = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${textInput}/encounters`
    )

    console.log(responseLoc)




})

   