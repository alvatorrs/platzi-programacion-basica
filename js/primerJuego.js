// definiendo la aleatoriedad
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// definiendo elección
function eleccion(jugada) {
  let resultado = '';
  if (jugada === 1) {
    resultado = 'Piedra';
  }
  else if (jugada === 2) {
    resultado = 'Papel';
  }
  else if (jugada === 3) {
    resultado = 'Tijera';
  }
  else {
    resultado = 'volver a intentarlo';
  }     
  return resultado;
}

// definiendo combate
function combate(jugador, pc){
  if (jugador === pc) {
    return 'Empate';
  }
  else if (jugador === 1 && pc === 3) {
    return 'Ganaste';
  }
  else if (jugador === 2 && pc === 1) {
    return 'Ganaste';
  }
  else if (jugador === 3 && pc === 2) {
    return 'Ganaste';
  }
  else {
    return 'Perdiste';
  }
}


// Jugando 3 veces
let triunfos = 0;
let perdidas = 0;

// dos de tres: Ganar dos veces
while (triunfos < 2 && perdidas < 2) {
  // 1 es piedra, 2 es papel, 3 es tijera
  let jugador = parseInt(prompt("Introduzca un número: 1 para piedra, 2 para papel, 3 para tijera"));
  let pc = aleatorio(1,3);
  let resultado = combate(jugador, pc);

  // alert de las elecciones
  alert(`Usted eligió ${eleccion(jugador)}`);
  alert(`PC eligió ${eleccion(pc)}`);

  // resultado del juego
  if (resultado === 'Ganaste') {
    alert(resultado);
    triunfos++;
  }
  else if (resultado === 'Perdiste') {
    alert(resultado);
    perdidas++;
  }
  else {
    alert(resultado);
  }
}
alert(`Ganaste: ${triunfos} y Perdiste: ${perdidas}`);
