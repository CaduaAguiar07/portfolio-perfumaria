// Menu de navegação mobile

const botaoMenu = document.querySelector(".menu-mobile");
const menuNavegacao = document.querySelector(".menu");

if (botaoMenu && menuNavegacao) {

    function fecharMenu() {
        menuNavegacao.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");
        botaoMenu.textContent = "☰";
    }

    botaoMenu.addEventListener("click", function () {

        const aberto = menuNavegacao.classList.toggle("aberto");

        botaoMenu.setAttribute("aria-expanded", String(aberto));

        botaoMenu.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );

        botaoMenu.textContent = aberto ? "✕" : "☰";

    });

    menuNavegacao.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", fecharMenu);

    });

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape") {
            fecharMenu();
        }

    });

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {
            fecharMenu();
        }

    });

}