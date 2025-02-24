document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    
    // Verificar si hay un modo guardado en localStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        
        // Guardar preferencia en localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    // Animación del nombre
    const nameElement = document.getElementById("animated-name");
    nameElement.style.animation = "fadeIn 2s ease-in-out infinite alternate";

    // Animación heartbeat en las tarjetas
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            card.style.animation = "heartbeat 1.5s infinite";
        });
        card.addEventListener("mouseleave", function () {
            card.style.animation = "";
        });
    });
});

// Definir animaciones CSS en JavaScript
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes heartbeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}`;
document.head.appendChild(styleSheet);
