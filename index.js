const botonCambiar = document.getElementById("botonCambiar");
if (botonCambiar) {
  botonCambiar.addEventListener("click", function () {
    const texto = document.querySelector(".texto-centro p");
    if (texto) {
      texto.textContent = "SPYRYTCORP te da la vienvenida";
    }
  });
}
