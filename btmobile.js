/* BOTAO MOBILE ONCLICK */
// Seleciona os elementos do botão de abrir, do menu e do overlay (fundo escuro)
let button = document.getElementById("btn");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu");

// Evento que abre o menu mobile ao clicar no botão
button.addEventListener("click", () => {
    menu.classList.add("abrir-menu")
})

// Evento que fecha o menu mobile ao clicar em qualquer item dentro do próprio menu
menu.addEventListener("click", () => {
    menu.classList.remove("abrir-menu")
})

// Evento que fecha o menu mobile ao clicar na área escura (overlay)
overlay.addEventListener("click", () => {
    menu.classList.remove("abrir-menu")
})

// Evento global para fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    // Verifica se o menu está aberto, se o clique não foi dentro do menu e nem no botão de abrir
    // target Indica o elemento real que disparou o evento (clicado)
    //contains = contém / ! = não
    if (menu.classList.contains("abrir-menu") && !menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove("abrir-menu");
    }
})


/*menu topo*/
document.addEventListener("DOMContentLoaded", function () {
    // Selecionando os links de navegação
    const navLinks = document.querySelectorAll(' .nav-menu a, .menu-mobile a, menu-topo , .footer-nav a');

    // Adicionando evento de clique para cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Obtendo o alvo (a seção) do link
            const targetId = link.getAttribute('href').substring(1); // Obtém o id da seção

            // Selecionando a seção correspondente
            const targetSection = document.getElementById(targetId);

            // Rolando suavemente até a seção
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
