// SELECCIONANDO MOKEPONES
let mokepones = ['hipodoge', 'capipepo', 'ratigueya', 'langostelvis', 'tucapalma', 'pydos']


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
    seleccionarMokeponEnemigo()
  }
}


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


// SELECCIONANDO ATAQUES
let ataques = ['FUEGO', 'AGUA', 'TIERRA']
let ataqueJugador
let ataqueEnemigo


// insertar nuevos mensajes
function crearMensaje() {
  //elemento HTML donde se insertara el parrafo
  let sectionMensajes = document.getElementById('mensajes')
  //creando el parrafo
  let parrafo = document.createElement('p') //elemento a crear
  parrafo.innerHTML = `Tu mokepon atacó con ${ataqueJugador}, el mokepon de tu enemigo atacó con ${ataqueEnemigo} - PENDIENTE 🎉` //contenido del elemento
  //ubicación del parrafo
  sectionMensajes.appendChild(parrafo) //metiendo el parrafo en section con id="mensajes"
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


function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = ataques[Math.floor(Math.random()*ataques.length)]
  ataqueEnemigo = ataqueAleatorio
 
  crearMensaje()
}




// función de arranque del programa
function iniciarJuego() {
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
}


/* Ejecución */
window.addEventListener('load', iniciarJuego) //agregando un escucha al navegador
