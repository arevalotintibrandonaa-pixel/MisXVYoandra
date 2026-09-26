// 1. Control del Sobre Interactivo y Reproductor de Audio
const envelope = document.getElementById('envelope');
const sealButton = document.getElementById('sealButton');
const bgMusic = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");

sealButton.addEventListener('click', () => {
  envelope.classList.add('open');
  
  // Inicia la música automáticamente al abrir el sobre
  if (bgMusic) {
    bgMusic.play().then(() => {
      playBtn.innerText = "⏸️ Pausar Música";
    }).catch(error => {
      console.log("Reproducción automática bloqueada por el navegador:", error);
    });
  }
});

// Control manual del botón flotante de música
playBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playBtn.innerText = "⏸️ Pausar Música";
  } else {
    bgMusic.pause();
    playBtn.innerText = "🎵 Reproducir Música";
  }
});

// Fecha del evento: 31 de Octubre de 2026 a las 16:00
const eventDate = new Date("oct 31, 2026 16:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Si la fecha ya llegó o pasó
  if (distance <= 0) {
    clearInterval(countdownInterval);
    
    const timerElement = document.getElementById("countdown");
    
    // 1. Ocultamos suavemente los números
    timerElement.style.opacity = "0";
    
    setTimeout(() => {
      // 2. Reemplazamos el HTML por el mensaje animado
      timerElement.innerHTML = `<p class="event-arrived-text">¡LLEGÓ EL DÍA!</p>`;
      
      // 3. Volvemos a hacer visible la sección con la nueva animación
      timerElement.style.opacity = "1";
    }, 500); // Coincide con el tiempo del transition en CSS

    return;
  }

  // Cálculo de Días, Horas, Minutos y Segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualización del DOM (añadiendo ceros a la izquierda si es menor a 10)
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

}, 1000);

// Lógica para las tarjetas giratorias (Flip Cards)
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});