/* DECLARACIONES */
//iniciarJuego()
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMokeponJugador = document.getElementById('boton-mokepon') 
const botonReiniciar = document.getElementById('boton-reiniciar')
//seleccionarMokeponJugador()
let mokepones = []
const divMokeponJugador = document.getElementById('mokepon-jugador')
let inputMokepon
let mokeponJugador
const sectionSeleccionarMokepon = document.getElementById('seleccionar-mokepon')
let nombreMokeponJugador
//mostrarAtaques()
const divBotonesAtaque = document.getElementById('botones-ataque')
let botonAtaque
let botonFuego
let botonAgua
let botonTierra
let botones = []
//secuenciaAtaqueJugador()
let ataqueJugador = []
//seleccionarMokeponEnemigo()
const divMokeponEnemigo = document.getElementById('mokepon-enemigo') 
let mokeponEnemigo
let ataquesMokeponEnemigo = []

//canvas
const sectionVerMapa = document.getElementById('ver-mapa')
const canvasMapa = document.getElementById('mapa')
let lienzo = canvasMapa.getContext('2d') //contexto 2D del canvas
let mokeponJugadorCanvas
let mokeponEnemigoCanvas

//ataqueAleatorioEnemigo()
let ataqueEnemigo = []
let vidasJugador
let vidasEnemigo
//combate()
const pVidasJugador = document.getElementById('vidas-jugador')
const pVidasEnemigo = document.getElementById('vidas-enemigo')
//ataquesLanzados()
let ataqueJugadorLanzado
let ataqueEnemigoLanzado
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
    this.x = 20
    this.y = 30
    this.ancho = 80
    this.alto = 80
    this.imagenMokepon = new Image()
    this.imagenMokepon.src = foto
  }
}

//instanciando objetos
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5)
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.webp', 5)
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.webp', 5)
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.webp', 5)
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

ratigueya.ataques.push(
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
)

langostelvis.ataques.push(
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
)

tucapalma.ataques.push(
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
)

pydos.ataques.push(
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)



// SELECCIONANDO ATAQUES

function reiniciarJuego() {
  location.reload()
}


// insertar mensaje fin del juego
function crearMensajeFinal(resultadoFinal) {
  //deshabilitando los botones sobrantes 
  botones.forEach((boton) => {
    boton.style.background = '#112f58'
    boton.disabled = true
  })
  //agregando el resultado final
  pResultado.innerHTML = resultadoFinal 
  //mostrando la seccion reiniciar
  sectionReiniciar.style.display = 'block'
}


// revisar vidas
function revisarVidas() {
  if (vidasEnemigo === vidasJugador) {
    crearMensajeFinal('Empate ⚔')
  }
  else if (vidasJugador >= vidasEnemigo) {  
    crearMensajeFinal('GANASTE 🏆')
  }
  else if (vidasJugador <= vidasEnemigo) {
    crearMensajeFinal('PERDISTE 🤕')
  }
}


// insertar nuevos mensajes
function crearMensaje() {
  //parrafo ataque jugador
  let parrafoAtaqueJugador = document.createElement('p')
  parrafoAtaqueJugador.innerHTML = `${ataqueJugadorLanzado}`
  divAtaqueJugador.appendChild(parrafoAtaqueJugador) //ubicación
  //parrafo ataque enemigo
  let parrafoAtaqueEnemigo = document.createElement('p')
  parrafoAtaqueEnemigo.innerHTML = `${ataqueEnemigoLanzado}`
  divAtaqueEnemigo.appendChild(parrafoAtaqueEnemigo)
}


// guardando ataques lanzados por cada iteracion
function ataquesLanzados(jugador, enemigo) {
  ataqueJugadorLanzado = jugador
  ataqueEnemigoLanzado = enemigo
}


// resultado combate
function combate() {
  for (let i in ataqueJugador) {
    ataquesLanzados(ataqueJugador[i], ataqueEnemigo[i])
    
    if (ataqueJugador[i] === ataqueEnemigo[i]) {
      //Empate
      crearMensaje()
    }
    else if (ataqueJugador[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA') {
      //Ganaste
      crearMensaje()
      vidasEnemigo--
    }
    else if (ataqueJugador[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO') {
      //Ganaste
      crearMensaje()
      vidasEnemigo--
    }
    else if (ataqueJugador[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA') {
      //Ganaste
      crearMensaje()
      vidasEnemigo--
    }
    else {
      //Perdiste
      crearMensaje()
      vidasJugador--
    }
  }
  pVidasJugador.innerHTML = vidasJugador
  pVidasEnemigo.innerHTML = vidasEnemigo
 
  revisarVidas()
}


//valida que se tenga la secuencia de ataques
function iniciaCombate() {
  if (ataqueJugador.length === 5) {
    combate()
  }
}


function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length-1)
  let nombreAtaqueEnemigo = ataquesMokeponEnemigo[ataqueAleatorio].nombre
  if (nombreAtaqueEnemigo === '🔥') {
    ataqueEnemigo.push('FUEGO')
  } 
  else if (nombreAtaqueEnemigo === '🌊') {
    ataqueEnemigo.push('AGUA')
  } 
  else if (nombreAtaqueEnemigo === '🌱') {
    ataqueEnemigo.push('TIERRA')
  }
  console.log(ataqueEnemigo)
 
  //inicializando el combate
  iniciaCombate()
}


//agregando un evento a cada boton
function secuenciaAtaqueJugador() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (evento) => {
      if (evento.target.textContent === '🔥') {
        ataqueJugador.push('FUEGO') 
      } 
      else if (evento.target.textContent === '🌊') {
        ataqueJugador.push('AGUA') 
      } 
      else if (evento.target.textContent === '🌱') {
        ataqueJugador.push('TIERRA') 
      }
      console.log(ataqueJugador)
      boton.style.background = '#112f58'
      boton.disabled = true
      ataqueAleatorioEnemigo()
    })
  })
}


//mostrando botones de ataque jugador
function mostrarAtaques(ataquesMokeponJugador) {
  for (let ataque of ataquesMokeponJugador) {
    botonAtaque = `
      <button id=${ataque.id} class="boton-ataque botones-ataque">${ataque.nombre}</button>
    `
    divBotonesAtaque.innerHTML += botonAtaque
  }
  //trayendo los botones creados
  botones = document.querySelectorAll('.botones-ataque')
}


// CANVAS


// cargando el mokepon en el canvas
function pintarPeronaje() {
  lienzo.clearRect(0, 0, canvasMapa.clientWidth, canvasMapa.clientHeight) //limpia el canvas
  lienzo.drawImage(mokeponJugadorCanvas.imagenMokepon, mokeponJugadorCanvas.x, mokeponJugadorCanvas.y, mokeponJugadorCanvas.ancho, mokeponJugadorCanvas.alto)
}


// moviendo el mokepon a la derecha
function moverMokeponDerecha() {
  mokeponJugadorCanvas.x = mokeponJugadorCanvas.x + 5
  pintarPeronaje()
}


// moviendo el mokepon a la derecha
function moverMokeponIzquierda() {
  mokeponJugadorCanvas.x = mokeponJugadorCanvas.x - 5
  pintarPeronaje()
}


// moviendo el mokepon hacia arriba
function moverMokeponArriba() {
  mokeponJugadorCanvas.y = mokeponJugadorCanvas.y - 5
  pintarPeronaje()
}


// moviendo el mokepon hacia abajo
function moverMokeponAbajo() {
  mokeponJugadorCanvas.y = mokeponJugadorCanvas.y + 5
  pintarPeronaje()
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
  //mokepon canvas
  mokeponEnemigoCanvas = mokepon
  //definiendo e insertando vidas enemigo
  vidasEnemigo = mokepon.vida
  pVidasEnemigo.innerHTML = vidasEnemigo
  //mostrando mokepon enemigo
  mokeponEnemigo = `
    <p>${mokepon.nombre}</p>
    <img src="${mokepon.foto}" alt="${mokepon.nombre}">
  `
  divMokeponEnemigo.innerHTML = mokeponEnemigo 
  
  ataquesMokeponEnemigo = mokepon.ataques
  //agregando un evento a cada boton
  secuenciaAtaqueJugador()
}


//extraer ataques mokepon jugador
function extraerAtaques(nombreMokeponJugador) {
  let ataquesMokeponJugador
  for (let mokepon of mokepones) {
    if (mokepon.nombre === nombreMokeponJugador) {
      ataquesMokeponJugador = mokepon.ataques
    }
  }
  mostrarAtaques(ataquesMokeponJugador)
}


//muestra el mokepon seleccionado una vez se de click al boton
function seleccionarMokeponJugador() {
  //se selecciona una opcion
  for (let mokepon of mokepones) {
    inputMokepon = document.getElementById(mokepon.nombre)
    if (inputMokepon.checked) {
      //mokepon canvas
      mokeponJugadorCanvas = mokepon
      //definiendo e insertando vidas jugador
      vidasJugador = mokepon.vida
      pVidasJugador.innerHTML = vidasJugador
      //mostrando mokepon jugador
      mokeponJugador = `
        <p>${mokepon.nombre}</p>
        <img src="${mokepon.foto}" alt="${mokepon.nombre}">
      `
      divMokeponJugador.innerHTML = mokeponJugador
      nombreMokeponJugador = mokepon.nombre
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
    //mostrar la seccion del canvas
    sectionVerMapa.style.display = 'flex'
    //mostrando el mokepon en el canvas
    lienzo.drawImage(mokeponJugadorCanvas.imagenMokepon, mokeponJugadorCanvas.x, mokeponJugadorCanvas.y, mokeponJugadorCanvas.ancho, mokeponJugadorCanvas.alto)
    
    //mostrando la seccion seleccionar-ataque
    //sectionSeleccionarAtaque.style.display = 'flex'
    
    //extraer ataques jugador
    extraerAtaques(nombreMokeponJugador)
    //mokepon enemigo
    seleccionarMokeponEnemigo()
  }
}


// función de arranque del programa
function iniciarJuego() {
  //ocultando la seccion del canvas
  sectionVerMapa.style.display = 'none'
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
  //boton de reinicio
  botonReiniciar.addEventListener('click', reiniciarJuego)
}


// Ejecución
window.addEventListener('load', iniciarJuego) //agregando un escucha al navegador
