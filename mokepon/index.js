//importando express
const express = require('express')
//almacenando en una variable la aplicacion
const app = express()

//lista de jugadores que se unen al servidor
const jugadores = []

class Jugador {
  constructor(id) {
    this.id = id
  }
}


//respondiendo la peticion GET

//agregando jugador a jugadores y regresando su id
app.get('/unirse', (req, res) => {
  //identificador aleatorio
  const id = `${Math.floor(Math.random()*1000)}`
  //instanciando un jugador
  const jugador = new Jugador(id)
  //agregando el jugador a jugadores
  jugadores.push(jugador)
  res.send(id)
})

//escuchando las peticiones del cliente en el puerto 8080
app.listen(8080, () => {
  console.log('Servidor en el puerto http://localhost:8080/')
})
