document.addEventListener("DOMContentLoaded", () => {
  const verdecito = document.getElementById("verdecito");

  if (verdecito) {
    verdecito.addEventListener("click", () => {
      console.log("Este botón no hace nada... pero mira qué bonito es 🟢");
    });
  }

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("Gmail", "service_qyhmkve", this)
        .then(() => {
          alert("Mensaje enviado correctamente 🎉");
          form.reset();
        }, (error) => {
          alert("Hubo un error al enviar el mensaje 😢");
          console.error("EmailJS Error:", error);
        });
    });
  }
});
