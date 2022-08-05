/* DECLARACIONES */
//iniciarJuego()
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMokeponJugador = document.getElementById('boton-mokepon') 
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')
//seleccionarMokeponJugador()
let mokepones = []
const pMokeponJugador = document.getElementById('mokepon-jugador')
let inputMokepon
const sectionSeleccionarMokepon = document.getElementById('seleccionar-mokepon')
//seleccionarMokeponEnemigo()
const pMokeponEnemigo = document.getElementById('mokepon-enemigo') 

//ataqueAleatorioEnemigo()
let ataques = ['FUEGO', 'AGUA', 'TIERRA']
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
//combate()
const pVidasJugador = document.getElementById('vidas-jugador')
const pVidasEnemigo = document.getElementById('vidas-enemigo')
//crearMensaje()
const pResultado = document.getElementById('resultado')
const divAtaqueJugador = document.getElementById('ataque-jugador')
const divAtaqueEnemigo = document.getElementById('ataque-enemigo')
//inyectando mokepones al HTML
let opcionDeMoquepones
const divContenedorTarjetas = document.getElementById('contenedor-tarjetas')

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}

//instanciando objetos
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5)
//agregando ataques
hipodoge.ataques.push(
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🔥', id: 'boton-fuego'},
)

hipodoge.ataques.push(
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)



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


// SELECCIONANDO MOKEPONES

// definiendo la aleatoriedad
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


// se llama justo después de seleccionarMokeponJugador
function seleccionarMokeponEnemigo() {
  const mokeponAleatorio = aleatorio(0, mokepones.length-1) //valor aleatorio entre mokepones
  const mokepon = mokepones[mokeponAleatorio]
  pMokeponEnemigo.innerHTML = mokepon.nombre
}


//muestra el mokepon seleccionado una vez se de click al boton
function seleccionarMokeponJugador() {
  //se selecciona una opcion
  for (let mokepon of mokepones) {
    inputMokepon = document.getElementById(mokepon.nombre)
    if (inputMokepon.checked) {
      pMokeponJugador.innerHTML = mokepon.nombre
    }
  }
  //no se selecciona una opción
  let contador = 0
  for (let mokepon of mokepones) {
    inputMokepon = document.getElementById(mokepon.nombre)
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
  
  //inyectando los mokepones al class="tarjetas" del HTML
  mokepones.forEach((mokepon) => {
    opcionDeMoquepones = `
      <input type="radio" name="mokepon" id="${mokepon.nombre}" />
      <label for="${mokepon.nombre}" class="tarjeta-mokepon">
        <p>${mokepon.nombre}</p>
        <img src="${mokepon.foto}" alt="${mokepon.nombre}">
      </label>
    `
    divContenedorTarjetas.innerHTML += opcionDeMoquepones //+= para concatenar mokepones 
  })
  
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
