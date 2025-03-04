// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
let amigoUsuario = document.getElementById('amigo').value;
listadAmigos.push(amigoUsuario);
console.log (listadAmigos);
let mostrarlos = listadAmigos.join(', ');
asignarTextoElemento('ul', mostrarlos);
amigoUsuario++;

return;
}



/*
function listaAmigos(){
let ul = document.getElementById('listaAmigos').value;
ul.innerHTML = amigos;
}*/

//listaAmigos();
//amigos++;

//agregarAmigo();
//f<unction mostrarLista (){

//}
//mostrarLista();

