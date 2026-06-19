const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");








/* MENÚ RESPONSIVE */
menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* SCROLL SUAVE */
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const section = document.querySelector(this.getAttribute("href"));

    section.scrollIntoView({
      behavior:"smooth"
    });

    navLinks.classList.remove("active");

  });

});

/* MENSAJE DE CONFIRMACIÓN */
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // Mostrar tarjeta
    document
    .getElementById("successCard")
    .classList.add("active");

    // Limpiar formulario
    form.reset();

    // Ocultar automáticamente después de 6 segundos
    setTimeout(() => {

        document
        .getElementById("successCard")
        .classList.remove("active");

    }, 6000);

});



/* SCROLL SUAVE */
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function(e){

    e.preventDefault();

    const section = document.querySelector(this.getAttribute("href"));

    section.scrollIntoView({
      behavior:"smooth"
    });

    navLinks.classList.remove("active");

  });

});


/*=====================================
SONIDO AUTOCOLOR COLOMBIA
=====================================*/

const motorSound = document.getElementById("motorSound");
const backgroundMusic = document.getElementById("backgroundMusic");
const soundBtn = document.getElementById("soundBtn");

let soundEnabled = true;
let experienceStarted = false;


// Primer clic en cualquier parte de la página
document.addEventListener("click", function () {

    if (!experienceStarted) {

        experienceStarted = true;

        motorSound.play();

        motorSound.addEventListener("ended", function () {

            if (soundEnabled) {

                backgroundMusic.volume = 0.25;

                backgroundMusic.play();

            }

        }, { once: true });

    }

}, { once: true });


// Botón encender/apagar sonido
soundBtn.addEventListener("click", function () {

    if (soundEnabled) {

        backgroundMusic.pause();

        soundBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';

    } else {

        backgroundMusic.play();

        soundBtn.innerHTML =
        '<i class="fa-solid fa-volume-high"></i>';

    }

    soundEnabled = !soundEnabled;

});


/* CERRAR TARJETA */
document
.getElementById("closeCard")
.addEventListener("click", () => {

    document
    .getElementById("successCard")
    .classList.remove("active");

});




