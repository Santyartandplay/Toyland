document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script cargado correctamente");

    // ----------------- ASISTENTE VIRTUAL ----------------- 
    const assistantModal = document.getElementById("assistant-modal");
    const openAssistantLink = document.querySelector("#openAssistantLink"); 
    const closeAssistant = document.querySelector(".close-assistant");

    if (!assistantModal || !openAssistantLink || !closeAssistant) {
        console.error("❌ No se encontraron los elementos del asistente.");
        return;
    }

    openAssistantLink.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Abriendo asistente...");
        assistantModal.classList.add("show");
    });

    closeAssistant.addEventListener("click", function () {
        console.log("Cerrando asistente...");
        assistantModal.classList.remove("show");
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            console.log("Cerrando asistente con Escape...");
            assistantModal.classList.remove("show");
        }
    });

    // ----------------- BOTÓN DE INICIO ----------------- 
    const homeButton = document.getElementById("homeButton");
    if (homeButton) {
        homeButton.addEventListener("click", function () {
            window.location.href = "menu.html"; 
        });
    } else {
        console.error("❌ No se encontró el botón de inicio.");
    }

    // ----------------- CARRUSEL ----------------- 
    console.log("✅ Iniciando carrusel...");

    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel-image");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (!carousel || images.length === 0 || !prevBtn || !nextBtn) {
        console.error("❌ ERROR: No se encontraron elementos del carrusel.");
        return;
    }

    console.log("✅ Elementos del carrusel detectados correctamente.");

    let index = 0;
    const totalImages = images.length;

    function showImage(index) {
        console.log(`🔄 Mostrando imagen ${index + 1} de ${totalImages}`);
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % totalImages;
        showImage(index);
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + totalImages) % totalImages;
        showImage(index);
    });

    // Cambio automático de imagen cada 3 segundos
    setInterval(function () {
        index = (index + 1) % totalImages;
        showImage(index);
    }, 3000);
});
