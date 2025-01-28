// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigo = [];

function agregarAmigo() {
    let elemento = document.querySelector("#amigo").value;
    listaAmigo.push(elemento)
    limpiarCaja();
    console.log(listaAmigo);
}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}