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

/* ENVÍO DEL FORMULARIO */
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const datos = {

        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        mensaje: document.getElementById("mensaje").value

    };

    try {

        const response = await fetch("/api/contacto", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(datos)

        });

        if (!response.ok) {
            throw new Error();
        }

        // Mostrar tarjeta de éxito
        document
            .getElementById("successCard")
            .classList.add("active");

        form.reset();

        setTimeout(() => {

            document
                .getElementById("successCard")
                .classList.remove("active");

        }, 6000);

    } catch {

        alert("No fue posible enviar la solicitud.");

    }

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




