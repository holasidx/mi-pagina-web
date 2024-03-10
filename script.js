document.addEventListener('DOMContentLoaded', function() {
  var mensajes = [
    "Te amo mucho",
    "Eres lo mejor que me ha pasado y llegaste a cambiar mi vida",
    "No hay palabras para expresar todo el amor que siento por ti",
    "Se que en ocasiones no puedo ser el novio que mereces pero no me voy a rendir hasta serlo",
    "Pero mientras sigo luchando con eso, solamente te quiero decir...",
    "Feliz cumpleaños preciosa, muchas gracias por hacer todos y cada uno de mis días los más felices de mi vida",
    "Espero poder ser feliz a tu lado durante muchas más primaveras"
  ];

  var mensaje = document.getElementById('mensaje');
  var indiceMensaje = 0;

  function mostrarSiguienteMensaje() {
    if (indiceMensaje < mensajes.length) {
      mensaje.innerHTML = '<p>' + mensajes[indiceMensaje] + '</p><button id="continuarBtn">Continuar</button>';
      indiceMensaje++;
      var nuevoBotonContinuar = document.getElementById('continuarBtn');
      nuevoBotonContinuar.addEventListener('click', mostrarSiguienteMensaje);
    } else {
      var botonContinuar = document.getElementById('continuarBtn');
      botonContinuar.style.display = 'none';
      mensaje.innerHTML = '<img src="imagen-final.jpg" style="width: 100%;">'; // Inserta la imagen final al final de los mensajes
      mensaje.innerHTML += '<div class="cuadro"><p>Te amo con todo mi corazón</p></div>'; // Agrega el cuadro rosa con el mensaje "Te amo con todo mi corazón"
    }
  }

  mostrarSiguienteMensaje();
});


