/* DECLARACIONES */
//iniciarJuego()
let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
let sectionReiniciar = document.getElementById('reiniciar')
let botonMokeponJugador = document.getElementById('boton-mokepon') 
let botonFuego = document.getElementById('boton-fuego')
let botonAgua = document.getElementById('boton-agua')
let botonTierra = document.getElementById('boton-tierra')
let botonReiniciar = document.getElementById('boton-reiniciar')
//seleccionarMokeponJugador()
let mokepones = ['hipodoge', 'capipepo', 'ratigueya', 'langostelvis', 'tucapalma', 'pydos']
let spanMokeponJugador = document.getElementById('mokepon-jugador')
let inputMokepon
let sectionSeleccionarMokepon = document.getElementById('seleccionar-mokepon')
//seleccionarMokeponEnemigo()
let spanMokeponEnemigo = document.getElementById('mokepon-enemigo') 

//ataqueAleatorioEnemigo()
let ataques = ['FUEGO', 'AGUA', 'TIERRA']
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
//combate()
let pVidasJugador = document.getElementById('vidas-jugador')
let pVidasEnemigo = document.getElementById('vidas-enemigo')
//crearMensaje()
let pResultado = document.getElementById('resultado')
let divAtaqueJugador = document.getElementById('ataque-jugador')
let divAtaqueEnemigo = document.getElementById('ataque-enemigo')


// SELECCIONANDO ATAQUES

function reiniciarJuego() {
  location.reload()
}


// insertar mensaje fin del juego
function crearMensajeFinal(resultadoFinal) {
  //agregando el resultado final
  pResultado.innerHTML = resultadoFinal 
  //deshabilitando los botones
  botonFuego.disabled = true
  botonAgua.disabled = true
  botonTierra.disabled = true
  //mostrando la seccion reiniciar
  sectionReiniciar.style.display = 'block'
}


// revisar vidas
function revisarVidas() {
  if (vidasEnemigo === 0) {
    crearMensajeFinal('GANASTE 🏆')
  }
  else if (vidasJugador === 0) {
    crearMensajeFinal('PERDISTE 🤕')
  }
}


// insertar nuevos mensajes
function crearMensaje(resultado) {
  //parrafo resultado
  pResultado.innerHTML = ` ${resultado}` //contenido del elemento
  //parrafo ataque jugador
  let parrafoAtaqueJugador = document.createElement('p')
  parrafoAtaqueJugador.innerHTML = `${ataqueJugador}`
  divAtaqueJugador.appendChild(parrafoAtaqueJugador) //ubicación
  //parrafo ataque enemigo
  let parrafoAtaqueEnemigo = document.createElement('p')
  parrafoAtaqueEnemigo.innerHTML = `${ataqueEnemigo}`
  divAtaqueEnemigo.appendChild(parrafoAtaqueEnemigo)
}


// resultado combate
function combate(ataqueJugador, ataqueEnemigo) {
  if (ataqueJugador === ataqueEnemigo) {
    crearMensaje('Empate ⚔')
  }
  else if (ataqueJugador === 'FUEGO' && ataqueEnemigo === 'TIERRA') {
    crearMensaje('Ganaste 🎉')
    vidasEnemigo--
    pVidasEnemigo.innerHTML = vidasEnemigo
  }
  else if (ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO') {
    crearMensaje('Ganaste 🎉')
    vidasEnemigo--
    pVidasEnemigo.innerHTML = vidasEnemigo
  }
  else if (ataqueJugador === 'TIERRA' && ataqueEnemigo === 'AGUA') {
    crearMensaje('Ganaste 🎉')
    vidasEnemigo--
    pVidasEnemigo.innerHTML = vidasEnemigo
  }
  else {
    crearMensaje('Perdiste 💀')
    vidasJugador--
    pVidasJugador.innerHTML = vidasJugador
  }
 
  revisarVidas()
}


function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = ataques[Math.floor(Math.random()*ataques.length)]
  ataqueEnemigo = ataqueAleatorio
 
  combate(ataqueJugador, ataqueEnemigo)
}


function ataqueJugadorFuego() {
  ataqueJugador = 'FUEGO'
  ataqueAleatorioEnemigo()
} 


function ataqueJugadorAgua() {
  ataqueJugador = 'AGUA'
  ataqueAleatorioEnemigo()
} 


function ataqueJugadorTierra() {
  ataqueJugador = 'TIERRA'
  ataqueAleatorioEnemigo()
} 


function reiniciarJuego() {
  location.reload()
}


// SELECCIONANDO MOKEPONES

// definiendo la aleatoriedad
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


// se llama justo después de seleccionarMokeponJugador
function seleccionarMokeponEnemigo() {
  let mokeponAleatorio = aleatorio(0, mokepones.length -1) //valor aleatorio entre mokepones
  let mokepon = mokepones[mokeponAleatorio]
  mokepon = mokepon.charAt(0).toUpperCase() + mokepon.slice(1) //capitalizando
  spanMokeponEnemigo.innerHTML = mokepon
}


//muestra el mokepon seleccionado una vez se de click al boton
function seleccionarMokeponJugador() {
  //se selecciona una opcion
  for (let mokepon of mokepones) {
    inputMokepon = document.getElementById(mokepon)
    mokepon = mokepon.charAt(0).toUpperCase() + mokepon.slice(1) //capitalizando
    if (inputMokepon.checked) {
      spanMokeponJugador.innerHTML = mokepon
    }
  }
  //no se selecciona una opción
  let contador = 0
  for (let mokepon of mokepones) {
    inputMokepon = document.getElementById(mokepon)
    if (inputMokepon.checked) {
      contador += 1
    }
  }
  if (contador === 0) {
    alert('Seleccione una opción')
  } else {
    //ocultando la seccion seleccionar-mokepon
    sectionSeleccionarMokepon.style.display = 'none'
    //mostrando la seccion seleccionar-ataque
    sectionSeleccionarAtaque.style.display = 'flex'
    //mokepon enemigo
    seleccionarMokeponEnemigo()
  }
}


// función de arranque del programa
function iniciarJuego() {
  //ocultando la seccion seleccionar-ataque
  sectionSeleccionarAtaque.style.display = 'none'
  //ocultando la seccion reiniciar
  sectionReiniciar.style.display = 'none'
  //seleccionar mokepon
  botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador) //escuchado eventos
  //seleccionar ataque
  botonFuego.addEventListener('click', ataqueJugadorFuego)
  botonAgua.addEventListener('click', ataqueJugadorAgua)
  botonTierra.addEventListener('click', ataqueJugadorTierra)
  //boton de reinicio
  botonReiniciar.addEventListener('click', reiniciarJuego)
}


// Ejecución
window.addEventListener('load', iniciarJuego) //agregando un escucha al navegador
