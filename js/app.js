function saludar(){
    alert("Hola Mundo");
}
/*variable con scope global*/ 
let resultado = 0;
/*String, int, bool, undefine, array, object, null */
console.log(suma());
console.log(resultado);

function suma(){
    resultado = 10;
    return resultado;
}

let nombre = "Lucas";
let apellido = "Bermudez";
let edad = 48;
let llueve = true;
let participantes = ["Lucas", "Junior", "Luis", "Ivana", "Martin", "Sheila"];

console.log(participantes);

for(participante of participantes){
    console.log(participante);
}

console.log("FOREACH");

participantes.forEach(part => {
    console.log(part);
});

function render(){
    let contenedor = document.getElementById("root");
    
    participantes.forEach(part => {
    contenedor.innerHTML+=
        `<div class="card col-4" >
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${part}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
    });    
}

render();
