document.addEventListener("DOMContentLoaded", function () {
    console.log("Script cargado correctamente");

    // 🏠 Redirección al menú principal
    const homeButton = document.getElementById("homeButton");
    if (homeButton) {
        homeButton.addEventListener("click", function () {
            window.location.href = "menu.html";
        });
    }

    // 🤖 Asistente Virtual
    const assistantModal = document.getElementById("assistant-modal");
    const openAssistantLink = document.getElementById("openAssistantLink");
    const closeAssistant = document.querySelector(".close-assistant");

    if (assistantModal && openAssistantLink && closeAssistant) {
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
    } else {
        console.error("No se encontraron los elementos del asistente.");
    }

    // 🔍 Búsqueda en tiempo real (corregido)
    const searchBar = document.querySelector(".search-bar"); // Antes buscaba por ID, ahora por clase
    if (searchBar) {
        searchBar.addEventListener("input", function () {
            let filtro = this.value.toLowerCase();
            let items = document.querySelectorAll(".catalog-item");

            items.forEach(item => {
                let nombre = item.querySelector("p").textContent.toLowerCase();
                item.style.display = nombre.includes(filtro) ? "flex" : "none";
            });
        });
    } else {
        console.error("No se encontró el campo de búsqueda.");
    }

    // 📌 Filtrar por precio/popularidad (corregido)
    function filtrar(tipo) {
        if (tipo === "precio") {
            alert("Filtrando por precio... (Pendiente de implementar)");
        } else if (tipo === "popularidad") {
            alert("Filtrando por popularidad... (Pendiente de implementar)");
        }
    }

    // ⭐ Añadir a la lista de deseos
    const wishlistButtons = document.querySelectorAll(".add-to-wishlist");

    wishlistButtons.forEach(button => {
        button.addEventListener("click", function () {
            let catalogItem = this.closest(".catalog-item");

            if (!catalogItem) {
                console.error("No se encontró el contenedor del juguete.");
                return;
            }

            let toy = {
                image: catalogItem.querySelector("img").src,
                name: catalogItem.querySelector("p").textContent.trim()
            };

            let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

            if (!wishlist.some(item => item.name === toy.name)) {
                wishlist.push(toy);
                localStorage.setItem("wishlist", JSON.stringify(wishlist));
                alert(`"${toy.name}" añadido a la lista de deseos.`);
            } else {
                alert(`"${toy.name}" ya está en la lista de deseos.`);
            }

            console.log("Lista de deseos actual:", wishlist);
        });
    });
});