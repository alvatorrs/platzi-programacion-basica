// seleccionar mokepon

//muestar el mokepon seleccionado una vez se de click al boton
function seleccionarMokeponJugador() {
  let mokepones = ['hipodoge', 'capipepo', 'ratigueya', 'langostelvis', 'tucapalma', 'pydos']
  //si se selecciona una opcion
  for (let mokepon of mokepones) {
    let inputMokepon = document.getElementById(mokepon)
    if (inputMokepon.checked) {
      alert(`Seleccionaste a ${mokepon}`)
    }
  }

  //si no se selecciona una opción
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
}

//
function iniciarJuego(){
  let botonMokeponJugador = document.getElementById('boton-mokepon') //seleccionando boton
  botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador) //escuchado eventos
}

// agregando un escucha al navegador
window.addEventListener('load', iniciarJuego)
