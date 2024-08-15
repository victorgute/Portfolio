// script.js
document.getElementById('menu-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('menu-active');
});

document.getElementById('menu-close').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.remove('menu-active');
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');

    menuIcon.addEventListener('click', function() {
        menu.classList.add('active');
    });

    menuClose.addEventListener('click', function() {
        menu.classList.remove('active');
    });
});

function animateTransition(targetUrl) {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');

    // Espera o tempo da animação antes de redirecionar
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 700); // 700ms deve coincidir com a duração da animação
}

// ... código existente ...

// Função para animar a transição e redirecionar
function animateTransition(targetUrl) {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');

    // Espera o tempo da animação antes de redirecionar
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 700); // 700ms deve coincidir com a duração da animação
}

// Adiciona o evento de clique para cada link do menu
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetUrl = this.getAttribute('href');
        animateTransition(targetUrl);
    });
});

// ... código existente ...


document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu ul li a');
    const overlay = document.querySelector('.overlay');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o redirecionamento imediato
            const targetUrl = this.href; // Captura o link de destino

            overlay.classList.add('active'); // Ativa a animação

            // Espera a animação terminar antes de redirecionar
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 700); // 700ms deve coincidir com a duração da animação
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.classList.add('fade-in-visible');
    });
});





