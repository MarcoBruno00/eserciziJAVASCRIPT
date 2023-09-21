const getPokemon = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const dataJSON = await result.json()
   return dataJSON;

}
getPokemon()

function createLoading() {
    const element = document.createElement("div")
    element.innerHTML= "loading"
    element.setAttribute("id","loading")
    element.classList.add("title")
    const body = document.getElementsByTagName("body")
    body[0].prepend(element)
    console.log(body[0]);
}

const renderData = async () =>{
    createLoading();
    try{
        const pokemonName= await getPokemon()
       const selectPokemon= createSelect(pokemonName.results)
        console.log(pokemonName);
        const loading = document.getElementById("loading")
        loading.classList.add("invisibile")
        const body = document.getElementsByTagName("body")
        body[0].prepend(selectPokemon)
    }catch(error){
        console.error(error)
    }
}
renderData()

const createSelect = (arrPokemon) =>{
    const select= document.createElement("select")
    arrPokemon.forEach(element => {
      const option = document.createElement("option")
      option.setAttribute("value", element.name )
      option.textContent= element.name
      select.append(option)
    });
    return select
}



