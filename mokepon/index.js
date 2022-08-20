//importando express
const express = require('express')
//importando cors
const cors = require('cors')

//almacenando en una variable la aplicacion
const app = express()
//le decimos a Express que use a cors
app.use(cors())
//soportando las peticiones POST con JSON como parte del body
app.use(express.json())

//lista de jugadores que se unen al servidor
const jugadores = []

class Jugador {
  constructor(id) {
    this.id = id
  }
 
  asignarMokepon(mokepon) {
    this.mokepon = mokepon
  }
 
  actualizarPosicion(x, y) {
    this.x = x
    this.y = y
  }
}

class Mokepon {
  constructor(nombre) {
    this.nombre = nombre
  }
}

//endpoints

//agregando jugador a jugadores y regresando su id
app.get('/unirse', (req, res) => {
  //identificador aleatorio
  const id = `${Math.floor(Math.random()*1000)}`
  //instanciando un jugador
  const jugador = new Jugador(id)
  //agregando el jugador a jugadores
  jugadores.push(jugador)
  //agregando cabecera
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send(id)
})

//recibiendo el nombre del mokepon del jugador y su id
app.post('/mokepon/:jugadorId', (req, res) => {
  //extrayendo la variable de la solicitud
  const jugadorId = req.params.jugadorId || ""
  //extrayendo el body
  const nombreMokepon = req.body.mokepon || ""
  //creando objeto tipo Mokepon
  const mokepon = new Mokepon(nombreMokepon)
  //asignandole el mokepon al jugador
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarMokepon(mokepon) 
  }
  console.log(jugadores)
  console.log(jugadorId)
  //termino la peticion
  res.end()
})

//recibiendo cordenadas de jugadores
app.post('/mokepon/:jugadorId/posicion', (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const x = req.body.x || 0
  const y = req.body.y || 0
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].actualizarPosicion(x, y)
  }
  
  //enemigos del jugador
  const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)
  //devolviendo los enemigos
  res.send({ enemigos }) //solo se pueden devolver JSON y no arrays
})

//escuchando las peticiones del cliente en el puerto 8080
app.listen(8080, () => {
  console.log('Servidor en el puerto http://localhost:8080/')
})
