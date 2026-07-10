// ==============================
// EmailJS
// ==============================

emailjs.init({
    publicKey: "7X-qRe8RjxdGxCoRB",
});

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

// ==============================
// Formulário de Contato
// ==============================

const contatoForm = document.getElementById("contato-form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const botao = contatoForm.querySelector("button");

// Mensagem de status
const status = document.createElement("div");
contatoForm.appendChild(status);

contatoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
        !nome.value.trim() ||
        !email.value.trim() ||
        !mensagem.value.trim()
    ) {
        status.textContent = "Preencha todos os campos.";
        status.className = "error";
        return;
    }

    botao.disabled = true;
    botao.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

    emailjs.send(
        "service_ga8w51r",
        "template_cpbblt9",
        {
            nome: nome.value.trim(),
            email: email.value.trim(),
            mensagem: mensagem.value.trim()
        }
    )
    .then(() => {
        status.textContent = "Mensagem enviada com sucesso!";
        status.className = "success";

        contatoForm.reset();
    })
    .catch((error) => {
        status.textContent = "Erro ao enviar a mensagem.";
        status.className = "error";

        console.error("Erro EmailJS:", error);
    })
    .finally(() => {

        botao.disabled = false;
        botao.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar';

        setTimeout(() => {
            status.textContent = "";
            status.className = "";
        }, 5000);
    });
});