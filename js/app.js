// SCROLL SUAVE EN EL MENÚ
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// MENSAJE DEL FORMULARIO
const form = document.querySelector(".demo-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Formulario enviado correctamente 📸");

    form.reset();
});


// ANIMACIÓN AL HACER SCROLL
const secciones = document.querySelectorAll(".seccion");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;

    secciones.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < trigger) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        }
    });
});


// ESTADO INICIAL DE ANIMACIÓN
secciones.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});
