document.addEventListener("DOMContentLoaded", () => {
    const verdecito = document.getElementById("verdecito");
    if (verdecito) {
        verdecito.addEventListener("click", () => {
            console.log("Este botón no hace nada... pero mira qué bonito es 🟢");
        });
    }

    const formularioContacto = document.getElementById("formulario_contacto"); 

    if (formularioContacto) {
        formularioContacto.addEventListener("submit", function (e) {
            e.preventDefault(); 

            emailjs.sendForm('TU_ID_DE_SERVICIO', 'TU_ID_DE_PLANTILLA', this)
                .then(() => {
                    alert("Mensaje enviado correctamente 🎉");
                    formularioContacto.reset(); 
                }, (error) => {
                    alert("Hubo un error al enviar el mensaje 😢");
                    console.error("EmailJS Error:", error);
                });
        });
    }
});