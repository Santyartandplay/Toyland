document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = "menu.html"; // Asegúrate de que el nombre del archivo sea correcto
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script cargado correctamente"); // Verifica si el script se ejecuta

    const assistantModal = document.getElementById("assistant-modal");
    const openAssistantLink = document.querySelector("#openAssistantLink"); 
    const closeAssistant = document.querySelector(".close-assistant");

    if (!assistantModal || !openAssistantLink || !closeAssistant) {
        console.error("No se encontraron los elementos del asistente.");
        return;
    }

    // Abrir modal
    openAssistantLink.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Abriendo asistente...");
        assistantModal.classList.add("show");
    });

    // Cerrar modal
    closeAssistant.addEventListener("click", function () {
        console.log("Cerrando asistente...");
        assistantModal.classList.remove("show");
    });

    // Permitir cerrar con la tecla "Esc"
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            console.log("Cerrando asistente con Escape...");
            assistantModal.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openAssistantDiv = document.getElementById("openAssistantDiv");
    const assistantModal = document.getElementById("assistant-modal");
    const closeAssistant = document.getElementById("closeAssistant");

    if (openAssistantDiv) {
        openAssistantDiv.addEventListener("click", function () {
            if (assistantModal) {
                assistantModal.classList.add("show");
            } else {
                console.error("No se encontró el modal del asistente.");
            }
        });
    }

    if (closeAssistant) {
        closeAssistant.addEventListener("click", function () {
            assistantModal.classList.remove("show");
        });
    }
});
