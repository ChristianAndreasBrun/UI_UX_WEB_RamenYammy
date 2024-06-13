document.addEventListener("DOMContentLoaded", function() {
    const botones = document.querySelectorAll(".btn");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            // Elimina la clase "active" de todos los botones
            botones.forEach(b => b.classList.remove("active"));
            
            // Añade la clase "active" al botón que se ha hecho clic
            boton.classList.add("active");
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".readonly");
    const toggleEditBtn = document.getElementById("toggleEdit");

    toggleEditBtn.addEventListener("click", function() {
        let anyInput = false;

        inputs.forEach(input => {
            input.readOnly = !input.readOnly;

            if (input.readOnly) {
                input.classList.add("readonly");
            } else {
                input.classList.remove("readonly");
                anyInput = true;
            }
        });

        if (anyInput) {
            toggleEditBtn.innerHTML = `<span class="btn-save">GUARDAR</span> <i class="fa-solid fa-floppy-disk"></i>`;
        } else {
            toggleEditBtn.innerHTML = `EDITAR <i class="fa-solid fa-pen"></i>`;
        }
    });
});
