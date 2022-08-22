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
//enviarMokeponJugador()
let jugadorId = null
let enemigoId = null
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
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.webp'
//asignando dimensiones al canvas
let anchoCanvas = 600
let altoCanvas = 450
canvasMapa.width = anchoCanvas
canvasMapa.height = altoCanvas
/*const anchoMaximoCanvas = 350*/
/*if (anchoCanvas > anchoMaximoCanvas) {*/
  /*anchoCanvas = anchoMaximoCanvas -80*/
/*}*/

//obtenerAtaques()
let ataqueEnemigo = []
//combate()
let vidasJugador
let vidasEnemigo
const pVidasJugador = document.getElementById('vidas-jugador')
const pVidasEnemigo = document.getElementById('vidas-enemigo')
//enviarPosicion()
let jugadoresConectados = []
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
  constructor(nombre, foto, vida, imagenMokepon, id = null) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    this.ancho = 80
    this.alto = 80
    this.x = aleatorio(10, canvasMapa.width - this.ancho)
    this.y = aleatorio(10, canvasMapa.height - this.alto)
    this.imagenMokepon = new Image()
    this.imagenMokepon.src = imagenMokepon
    this.velocidadX = 0
    this.velocidadY = 0
    this.id = id
  }
  //metodos 
  pintarMokepon() {
    lienzo.drawImage(
      this.imagenMokepon,
      this.x,
      this.y,
      this.ancho,
      this.alto
    )
  }
}

//instanciando objetos
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 
  5,
  './assets/hipodoge.webp'
)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 
  5,
  './assets/capipepo.png'
)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 
  5,
  './assets/ratigueya.png'
)
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.webp',
  5,
  './assets/mokepons_mokepon_langostelvis_attack.webp'
)
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.webp', 
  5,
  './assets/mokepons_mokepon_tucapalma_attack.webp'
)
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.webp', 
  5,
  './assets/mokepons_mokepon_pydos_attack.webp'
)

//agregando ataques
const HIPODOGE_ATAQUES = [
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌱', id: 'boton-tierra'},
]
hipodoge.ataques.push(...HIPODOGE_ATAQUES)

const CAPIPEPO_ATAQUES = [
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🔥', id: 'boton-fuego'},
]
capipepo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES = [
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
]
ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

const LANGOSTELVIS_ATAQUES = [
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
]
langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)

const TUCAPALMA_ATAQUES = [
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
]
tucapalma.ataques.push(...TUCAPALMA_ATAQUES)

const PYDOS_ATAQUES = [
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🔥', id: 'boton-fuego'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌊', id: 'boton-agua'},
  { nombre: '🌱', id: 'boton-tierra'},
  { nombre: '🌱', id: 'boton-tierra'},
]
pydos.ataques.push(...PYDOS_ATAQUES)

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
  //limpiando el intervalo
  clearInterval(intervalo)
  
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


//obteniendo ataques del servidor
function obtenerAtaques() {
  fetch(`http://localhost:8080/mokepon/${enemigoId}/ataques`)
    .then(function (res) {
      if (res.ok) {
        res.json()
          .then(function ({ ataques }) {
            if (ataques.length === 5) {
              ataqueEnemigo = ataques
              combate()
            }
          })
      }
    })
}


//enviando los ataques al servidor
function enviarAtaques() {
  fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ataques: ataqueJugador
    })
  })
  
  //solicitando los ataques del enemigo repetidamente
  intervalo = setInterval(obtenerAtaques, 50)
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
      //enviando los 5 ataques al servidor
      if (ataqueJugador.length === 5) {
        enviarAtaques()
      }
    })
  })
}


// CANVAS

//se llama justo después de una colision con otro jugador
function seleccionarMokeponEnemigo(mokepon) {
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


function detenerMokepon() {
  mokeponJugadorCanvas.velocidadX = 0
  mokeponJugadorCanvas.velocidadY = 0
}


//colision de mokepones
function revisarColision(mokeponEnemigoCanvas) {
  //dimensiones mokepon enemigo
  const arribaEnemigo = mokeponEnemigoCanvas.y
  const abajoEnemigo = mokeponEnemigoCanvas.y + mokeponEnemigoCanvas.alto
  const derechaEnemigo = mokeponEnemigoCanvas.x + mokeponEnemigoCanvas.ancho
  const izquierdaEnemigo = mokeponEnemigoCanvas.x
  //dimensiones mokepon jugador
  const arribaJugador = mokeponJugadorCanvas.y
  const abajoJugador = mokeponJugadorCanvas.y + mokeponJugadorCanvas.alto
  const derechaJugador = mokeponJugadorCanvas.x + mokeponJugadorCanvas.ancho
  const izquierdaJugador = mokeponJugadorCanvas.x
  
  if (
    abajoJugador < arribaEnemigo || arribaJugador > abajoEnemigo ||
    derechaJugador < izquierdaEnemigo || izquierdaJugador > derechaEnemigo
  ) {
    //console.log('No hay colision')
  } else {
    //asignandole el id al enemigo
    enemigoId = mokeponEnemigoCanvas.id
    //alert(`Hay una colisión con ${mokeponEnemigoCanvas.nombre}`)
    detenerMokepon()
    //detener el intervalo que ejecuta a pintarCanvas()
    clearInterval(intervalo)
    //mostrando la seccion seleccionar-ataque
    sectionSeleccionarAtaque.style.display = 'flex'
    //ocultar la seccion del canvas
    sectionVerMapa.style.display = 'none'
    //
    seleccionarMokeponEnemigo(mokeponEnemigoCanvas)
  }
}


//enviar posicion del jugador al servidor
function enviarPosicion(x, y) {
  fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ x, y})
  })
    .then(function (res) {
      if (res.ok) {
        res.json()
          .then(function ({ enemigos }) {
            //console.log(enemigos)
            jugadoresConectados = enemigos.map(function (enemigo) {
              let mokeponEnemigoCanvas = null
              const mokeponEnemigoNombre = enemigo.mokepon.nombre || ""
              for (let mokepon of mokepones) {
                if (mokeponEnemigoNombre === mokepon.nombre) {
                  mokeponEnemigoCanvas = new Mokepon(mokepon.nombre, mokepon.foto, 5, mokepon.imagenMokepon.src, enemigo.id)
                  mokeponEnemigoCanvas.ataques.push(...mokepon.ataques)
                }
              }
              //asignandole las posiciones
              mokeponEnemigoCanvas.x = enemigo.x
              mokeponEnemigoCanvas.y = enemigo.y
              return mokeponEnemigoCanvas
            })
          })
      }
    })
}


// cargando el mokepon en el canvas
function pintarCanvas() {
  mokeponJugadorCanvas.x = mokeponJugadorCanvas.x + mokeponJugadorCanvas.velocidadX
  mokeponJugadorCanvas.y = mokeponJugadorCanvas.y + mokeponJugadorCanvas.velocidadY
  lienzo.clearRect(0, 0, canvasMapa.clientWidth, canvasMapa.clientHeight) //limpia el canvas
  //pintando background
  lienzo.drawImage(mapaBackground, 0, 0, canvasMapa.width, canvasMapa.height)
  //pintando mokepon jugador
  mokeponJugadorCanvas.pintarMokepon()
  //enviando posicion jugador al servidor
  enviarPosicion(mokeponJugadorCanvas.x, mokeponJugadorCanvas.y)
  //pintando el mokepon de los jugadores en las posiciones
  jugadoresConectados.forEach(function (mokeponEnemigoCanvas) {
    mokeponEnemigoCanvas.pintarMokepon()
    //revisando colision 
    revisarColision(mokeponEnemigoCanvas)
  })
}


// moviendo el mokepon a la derecha
function moverMokeponJugadorDerecha() {
  mokeponJugadorCanvas.velocidadX = 5
  pintarCanvas()
}


// moviendo el mokepon a la derecha
function moverMokeponJugadorIzquierda() {
  mokeponJugadorCanvas.velocidadX = -5
  pintarCanvas()
}


// moviendo el mokepon hacia arriba
function moverMokeponJugadorArriba() {
  mokeponJugadorCanvas.velocidadY = -5
  pintarCanvas()
}


// moviendo el mokepon hacia abajo
function moverMokeponJugadorAbajo() {
  mokeponJugadorCanvas.velocidadY = 5
  pintarCanvas()
}


//moviendo al mokepon con el teclado
function moverMokeponJugador(evento) {
  switch (evento.key) {
    case 'ArrowRight': moverMokeponJugadorDerecha()
      break
    case 'ArrowLeft': moverMokeponJugadorIzquierda()
      break
    case 'ArrowUp': moverMokeponJugadorArriba()
      break
    case 'ArrowDown': moverMokeponJugadorAbajo()
      break
  }
}


//iniciando el mapa del canvas
function iniciarMapa() {
  //llamando a la funcion pintarCanvas() cada 50ms
  intervalo = setInterval(pintarCanvas, 50) //funcion a ejecutar, tiempo en ms
  //eventos de teclado
  window.addEventListener('keydown', moverMokeponJugador)
  window.addEventListener('keyup', detenerMokepon)
}


// SELECCIONANDO MOKEPONES

// definiendo la aleatoriedad
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
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


//enviando el mokepon al servidor
function enviarMokeponJugador(mokeponJugadorCanvas) {
  fetch(`http://localhost:8080/mokepon/${jugadorId}`, { 
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mokepon: mokeponJugadorCanvas.nombre
    })
  })
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
    //enviando el nombre del mokepon al backend
    enviarMokeponJugador(mokeponJugadorCanvas)
    //ocultando la seccion seleccionar-mokepon
    sectionSeleccionarMokepon.style.display = 'none'
    
    //extraer ataques jugador
    extraerAtaques(nombreMokeponJugador)
    
    //mostrar la seccion del canvas
    sectionVerMapa.style.display = 'flex'
    //iniciando el mapa del canvas
    iniciarMapa()
  }
}


//recibiendo id del jugador por el servidor 
function unirseAlJuego() {
  fetch('http://localhost:8080/unirse') //GET por defecto
    .then(function (res) {
      //console.log(res) //imprimiendo objeto res
      if (res.ok) {
        res.text()
          .then(function (respuesta) {
            //console.log('id: ', respuesta) //imprimiendo la respuesta del servidor
            jugadorId = respuesta
          })
      }
    })
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
  //consumiendo la API
  unirseAlJuego()
}


// Ejecución
window.addEventListener('load', iniciarJuego) //agregando un escucha al navegador
