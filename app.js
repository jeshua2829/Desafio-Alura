// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let elemento = document.querySelector("#amigo").value;
    if (elemento == "") {
        alert("Ingresa un Nombre por favor");
    }else{
        listaAmigos.push(elemento)
        limpiarCaja();
        mostrarLista();
        console.log(listaAmigos);
    }
}
function mostrarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "<h2><u>Mis amigos</u></h2>";
    // Recorrer la lista y agregar los elementos al contenedor
    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement("li"); // Crear un elemento <li>
        item.textContent = listaAmigos[i]; // Asignar el valor de la lista al <li>
        lista.appendChild(item); //Agregar el <li> al contenedor <ul>
    }
}
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}