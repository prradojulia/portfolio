// ==============================
// Menu Mobile
// ==============================

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const links = document.querySelectorAll(".nav-link");

function toggleMenu() {
    menu.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

// Fecha o menu ao clicar em um link
links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    const clicouNoMenu = menu.contains(e.target);
    const clicouNoHamburger = hamburger.contains(e.target);

    if (!clicouNoMenu && !clicouNoHamburger) {
        menu.classList.remove("active");
    }
});
