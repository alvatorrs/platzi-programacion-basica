// SELECCIONANDO MOKEPONES
let mokepones = ['hipodoge', 'capipepo', 'ratigueya', 'langostelvis', 'tucapalma', 'pydos']


// definiendo la aleatoriedad
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


// se llama justo después de seleccionarMokeponJugador
function seleccionarMokeponEnemigo() {
  let spanMokeponEnemigo = document.getElementById('mokepon-enemigo') //trae el span
  let mokeponAleatorio = aleatorio(0, mokepones.length -1) //valor aleatorio entre mokepones
  let mokepon = mokepones[mokeponAleatorio]
  mokepon = mokepon.charAt(0).toUpperCase() + mokepon.slice(1) //capitalizando
  spanMokeponEnemigo.innerHTML = mokepon
}


//muestra el mokepon seleccionado una vez se de click al boton
function seleccionarMokeponJugador() {
  let spanMokeponJugador = document.getElementById('mokepon-jugador')
  //se selecciona una opcion
  for (let mokepon of mokepones) {
    let inputMokepon = document.getElementById(mokepon)
    mokepon = mokepon.charAt(0).toUpperCase() + mokepon.slice(1) //capitalizando
    if (inputMokepon.checked) {
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
  } else {
    //ocultando la seccion seleccionar-mokepon
    let sectionSeleccionarMokepon = document.getElementById('seleccionar-mokepon')
    sectionSeleccionarMokepon.style.display = 'none'
    //mostrando la seccion seleccionar-ataque
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    //mokepon enemigo
    seleccionarMokeponEnemigo()
  }
}


// SELECCIONANDO ATAQUES
let ataques = ['FUEGO', 'AGUA', 'TIERRA']
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


// insertar mensaje fin del juego
function crearMensajeFinal(resultadoFinal) {
  //trayendo el elementoHTML con id="resultado" 
  let pResultado = document.getElementById('resultado')
  //agregando el resultado final
  pResultado.innerHTML = resultadoFinal //contenido del parrafo
 
  //deshabilitando los botones
  let botonFuego = document.getElementById('boton-fuego')
  botonFuego.disabled = true
  botonAgua = document.getElementById('boton-agua')
  botonAgua.disabled = true
  let botonTierra = document.getElementById('boton-tierra')
  botonTierra.disabled = true
 
  //mostrando la seccion reiniciar
  let sectionReiniciar = document.getElementById('reiniciar')
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
  //elemento HTML donde se insertara el resultado
  let pResultado = document.getElementById('resultado')
  //elemento HTML donde se insertara el ataque del jugador
  let divAtaqueJugador = document.getElementById('ataque-jugador')
  //elemento HTML donde se insertara el ataque del enemigo
  let divAtaqueEnemigo = document.getElementById('ataque-enemigo')
  
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
  let pVidasJugador = document.getElementById('vidas-jugador')
  let pVidasEnemigo = document.getElementById('vidas-enemigo')
 
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


// REINICIANDO EL JUEGO
function reiniciarJuego() {
  location.reload()
}


// INICIO

// función de arranque del programa
function iniciarJuego() {
  //ocultando la seccion seleccionar-ataque
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
  sectionSeleccionarAtaque.style.display = 'none'
  //ocultando la seccion reiniciar
  let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display = 'none'
 
  //seleccionar mokepon
  let botonMokeponJugador = document.getElementById('boton-mokepon') //seleccionando boton
  botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador) //escuchado eventos
  //seleccionar ataque
  let botonFuego = document.getElementById('boton-fuego')
  botonFuego.addEventListener('click', ataqueJugadorFuego)
  let botonAgua = document.getElementById('boton-agua')
  botonAgua.addEventListener('click', ataqueJugadorAgua)
  let botonTierra = document.getElementById('boton-tierra')
  botonTierra.addEventListener('click', ataqueJugadorTierra)
  //boton de reinicio
  let botonReiniciar = document.getElementById('boton-reiniciar')
  botonReiniciar.addEventListener('click', reiniciarJuego)
}


// Ejecución
window.addEventListener('load', iniciarJuego) //agregando un escucha al navegador
