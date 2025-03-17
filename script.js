document.addEventListener("DOMContentLoaded", function () {
    console.log("🔵 Script cargado correctamente.");

    // Asegurar que los modales estén ocultos al inicio
    let loginModal = document.getElementById("loginModal");
    let registerModal = document.getElementById("registerModal");

    if (loginModal) loginModal.style.display = "none";
    if (registerModal) registerModal.style.display = "none";

    // Función para abrir el modal
    window.openModal = function (modalId) {
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
            playSound("clickSound"); // Sonido al abrir modal
        }
    };

    // Función para cerrar el modal
    window.closeModal = function (modalId) {
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
            playSound("clickSound"); // Sonido al cerrar modal
        }
    };

    // Toggle de contraseña
    window.togglePassword = function (inputId) {
        let input = document.getElementById(inputId);
        if (input) {
            input.type = input.type === "password" ? "text" : "password";
            playSound("clickSound");
        }
    };

    // Reproducir sonido
    function playSound(soundId) {
        let sound = document.getElementById(soundId);
        if (sound) {
            sound.currentTime = 0; // Reinicia el sonido
            sound.play();
        }
    }

    // Agregar sonidos a los botones
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseenter", function () {
            playSound("hoverSound");
        });

        button.addEventListener("click", function () {
            playSound("clickSound");
        });
    });

    // REGISTRAR USUARIO
    let registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar recargar la página
            console.log("🟢 Intentando registrar usuario...");

            let nombre = document.getElementById("registerName").value.trim();
            let correo = document.getElementById("registerEmail").value.trim();
            let password = document.getElementById("registerPassword").value.trim();

            if (!nombre || !correo || !password) {
                alert("⚠️ Todos los campos son obligatorios.");
                return;
            }

            // Guardar en LocalStorage
            let usuario = { nombre, correo, password };
            localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

            alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
            console.log("✅ Usuario registrado:", usuario);
            closeModal("registerModal");
        });
    } else {
        console.error("❌ ERROR: No se encontró el formulario de registro.");
    }

    // INICIAR SESIÓN
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("🟢 Intentando iniciar sesión...");

            let usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

            if (!usuarioGuardado) {
                alert("❌ No hay usuarios registrados. Regístrate primero.");
                return;
            }

            let user = document.getElementById("loginEmail").value.trim();
            let password = document.getElementById("loginPassword").value.trim();

            if (!user || !password) {
                alert("⚠️ Todos los campos son obligatorios.");
                return;
            }

            // Validación de usuario y contraseña
            if (user === usuarioGuardado.correo && password === usuarioGuardado.password) {
                alert("✅ Inicio de sesión exitoso.");
                console.log("🟢 Usuario autenticado correctamente.");
                window.location.href = "menu.html"; // Redirigir al menú principal
            } else {
                alert("❌ Usuario o contraseña incorrectos.");
            }
        });
    } else {
        console.error("❌ ERROR: No se encontró el formulario de inicio de sesión.");
    }

    // Acceder como invitado
    let guestButton = document.querySelector(".btn-red");
    if (guestButton) {
        guestButton.addEventListener("click", function () {
            playSound("clickSound");
            alert("🔹 Accediendo como invitado...");
            window.location.href = "menu.html";
        });
    }
});
