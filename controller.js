function toggleEnvelope() {
  var envelope = document.querySelector('.envelope');
  var card = document.querySelector('.card');
  var messageBox = document.getElementById('messageBox');

  // Cambiar la clase para abrir o cerrar
  envelope.classList.toggle('open');

  // Ajustar la altura de la carta al abrirla
  if (envelope.classList.contains('open')) {
    card.style.maxHeight = card.scrollHeight + "px"; // Establecer altura máxima al contenido
    messageBox.style.opacity = "0"; // Ocultar el cuadro blanco
    setTimeout(() => (messageBox.style.display = "none"), 400); // Ocultar después de la animación
  } else {
    card.style.maxHeight = "0"; // Colapsar
    messageBox.style.display = "block"; // Mostrar el cuadro blanco
    setTimeout(() => (messageBox.style.opacity = "1"), 0); // Mostrar con animación
  }
}