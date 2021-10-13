let elemento = document.getElementById('principal');
let pokemones = [];
const cargarListado = () =>{
    let url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((objetoJson)=>{
        const pokemon = objetoJson.results;
        console.log(pokemon);
        pokemones = pokemon;
        pokemon.forEach((p)=>{
            elemento.innerHTML += `
            <button> ${p.name} </button>
        `;
        })

    })

};
cargarListado();