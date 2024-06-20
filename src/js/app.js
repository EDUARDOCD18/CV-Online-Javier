document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

/*  -- FUNCIÓN JS PRINCIPAL -- */
function iniciarApp() {
  scrollNav();
  botonIrArriba();
  navegacionFija();
}

/* -- FUNCIONES PARA NAVEGACION --*/

/* -- Función para la navegación fija -- */
function navegacionFija() {
  const barra = document.querySelector(".header");
  const educacion = document.querySelector(".educacion");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function () {
    if (educacion.getBoundingClientRect().top <= 0) {
      console.log("xd");
      barra.classList.add("fijo");
      body.classList.add("header-fijo"); // Aplica el padding-top cuando el header es fijo
    } else {
      barra.classList.remove("fijo");
      body.classList.remove("header-fijo"); // Remueve el padding-top cuando el header no es fijo
    }
  });
}

/* -- Función para el scroll--  */
function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion-principal a");

  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();

      const seccionScroll = e.target.attributes.href.value;
      const seccionScroll2 = "." + seccionScroll.substr(1);
      const seccion = document.querySelector(seccionScroll2);
      seccion.scrollIntoView({ behaviour: "smooth" });
    });
  });
}

function botonIrArriba() {
  const btnVolverArriba = document.getElementById("volverArriba");
  const educacion = document.querySelector(".educacion");

  // Verifique la posición de desplazamiento y el botón mostrar/ocultar
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY; // GObtener la posición de desplazamiento actual
    if (educacion.getBoundingClientRect().top < 0) {
      // Mostrar botón después de desplazarse por debajo de .sobre-mi
      btnVolverArriba.classList.add("visible");
    } else {
      btnVolverArriba.classList.remove("visible");
    }
  });

  // Agregar funcionalidad al hacer clic en el botón
  btnVolverArriba.addEventListener("click", function () {
    // desplácese hacia arriba sin problemas
    document.documentElement.scrollTop = 0;
  });
}
