// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let elemento = document.querySelector("#amigo").value;
    if (elemento == "") {
        alert("Ingrese un Nombre por favor");
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

function sortearAmigo() {
    let listaGanadora= document.querySelector("#resultado");
    listaGanadora.innerHTML = "";
    if (listaAmigos.length === 0) {
        alert("¡No hay amigos en la lista para sortear!");
        return;
    }else{
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Índice aleatorio
        let ganador = listaAmigos[indiceAleatorio];
        console.log(ganador);
        let resultado = document.createElement("li")
        resultado.innerHTML = `El Ganador es: ${ganador} 🎉`
        listaGanadora.appendChild(resultado);
        limpiarLista();
    }
}

function limpiarLista() {
    listaAmigos = []; // Vaciar la lista
    mostrarLista(); // Actualizar lista en pantalla
}