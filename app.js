// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
let amigoUsuario = document.getElementById('amigo').value;


if (amigoUsuario==""){
    alert("Ingresa solo nombres validos");
    return;
}

const soloNombres = /[123456789áéíóúñÑÁÉÍÓÚ.*+-\\/]/.test(amigoUsuario);
if (soloNombres){
    alert("Ingresa solo nombres validos, letras y espacios");
    limpiar();
    return;
}
    
else{
    listadAmigos.push(amigoUsuario);
    console.log (listadAmigos);
}


limpiar();

let mostrarlos = listadAmigos.join(', ');
asignarTextoElemento('ul', mostrarlos);
amigoUsuario++;

return;
}


function limpiar (){
    document.querySelector('#amigo').value="";
}

function sortearAmigo(){
    let sorteado = Math.floor(Math.random()*listadAmigos.length);
    let nombreSorteado = listadAmigos[sorteado];
    console.log ("El nombre sorteado es: " + nombreSorteado)
    asignarTextoElemento("ul", `El amigo secreto es: ${nombreSorteado}`);

}



