console.log('Todo ok');

// seleccionar mokepon

function seleccionarMokeponJugador(){
  alert('Seleccionaste tu Mokepon')
}

let botonMokeponJugador = document.getElementById('boton-mokepon') //seleccionando boton
botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador) //escuchado eventos
