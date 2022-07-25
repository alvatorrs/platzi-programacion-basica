//muestra el mokepon seleccionado una vez se de click al boton
function seleccionarMokeponJugador() {
  let spanMokeponJugador = document.getElementById('mokepon-jugador')
  //se selecciona una opcion
  for (let mokepon of mokepones) {
    let inputMokepon = document.getElementById(mokepon)
    mokepon = mokepon.charAt(0).toUpperCase() + mokepon.slice(1) //capitalizando
    if (inputMokepon.checked) {
      //alert(`Seleccionaste a ${mokepon}`)
      spanMokeponJugador.innerHTML = mokepon
    }
  }
  //no se selecciona una opción
  let contador = 0
  for (let mokepon of mokepones) {
    let inputMokepon = document.getElementById(mokepon)
    if (inputMokepon.checked) {
      contador += 1
    }
  }
  if (contador === 0) {
    alert('Seleccione una opción')
  }
  seleccionarMokeponEnemigo()
}


// definiendo la aleatoriedad
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


// se llama justo después de seleccionarMokeponJugador
function seleccionarMokeponEnemigo() {
  let spanMokeponEnemigo = document.getElementById('mokepon-enemigo') //trae el span
  let ataqueAleatorio = aleatorio(0, mokepones.length -1) //valor aleatorio entre mokepones
  let mokepon = mokepones[ataqueAleatorio]
  mokepon = mokepon.charAt(0).toUpperCase() + mokepon.slice(1) //capitalizando
  spanMokeponEnemigo.innerHTML = mokepon
}


// función de arranque del programa
function iniciarJuego(){
  let botonMokeponJugador = document.getElementById('boton-mokepon') //seleccionando boton
  botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador) //escuchado eventos
}


/* Ejecución */

let mokepones = ['hipodoge', 'capipepo', 'ratigueya', 'langostelvis', 'tucapalma', 'pydos']

// agregando un escucha al navegador
window.addEventListener('load', iniciarJuego)
