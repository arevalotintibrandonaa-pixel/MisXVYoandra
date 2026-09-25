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

// 2. Configuración de la Cuenta Regresiva
const eventDate = new Date("oct 31, 2026 16:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "¡LLEGÓ EL DÍA!";
    return;
  }

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// Lógica para las tarjetas giratorias (Flip Cards)
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});