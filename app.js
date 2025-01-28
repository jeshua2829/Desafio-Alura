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
        let item = document.createElement("li"); // Crear la lista 
        item.textContent = listaAmigos[i]; // Asignar el valor de la lista al <li>
        lista.appendChild(item); //Agregar la lista al contenedor de la lista html, con el DOM
    }
}
function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
    let listaGanadora= document.querySelector("#resultado");//retornarmos el valor a la variable
    listaGanadora.innerHTML = ""; //ponemos el texto en blanco con cada sorteo
    //validamos si la lista tiene elementos
    if (listaAmigos.length === 0) {
        alert("¡No hay amigos en la lista para sortear!");
        return;
    }else{
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Índice aleatorio
        let ganador = listaAmigos[indiceAleatorio]; //asignamos el indice a la variavle
        let resultado = document.createElement("li")//creamos la lista
        resultado.innerHTML = `El Ganador es: ${ganador} 🎉`//mostramos el texto y motramos al ganador
        listaGanadora.appendChild(resultado); // 
        limpiarLista();
        setTimeout(function() {
            location.reload(); // Esto recarga la página
        }, 3000);
    }
}



function limpiarLista() {
    listaAmigos = []; // Vaciar la lista
    mostrarLista(); // Actualizar lista en pantalla
    document.querySelector("#listaAmigos").innerHTML = "";
}