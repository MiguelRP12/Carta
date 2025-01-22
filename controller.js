function toggleEnvelope() {
    var envelope = document.querySelector('.envelope');
    var card = document.querySelector('.card');
    
    // Cambiar la clase para abrir o cerrar
    envelope.classList.toggle('open');
    
    // Ajustar la altura de la carta al abrirla
    if (envelope.classList.contains('open')) {
      card.style.maxHeight = card.scrollHeight + "px"; // Establecer altura máxima al contenido
    } else {
      card.style.maxHeight = "0"; // Colapsar
    }
}