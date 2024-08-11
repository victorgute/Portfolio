const textElement = document.getElementById('animated-title');
const text = textElement.innerText;
let index = 0;
let isDeleting = false;
const speed = 100; // Velocidade da animação em milissegundos

function type() {
    if (isDeleting) {
        textElement.innerText = text.substring(0, index--);
    } else {
        textElement.innerText = text.substring(0, index++);
    }

    if (index === text.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000); // Tempo de espera antes de começar a apagar
    } else if (index === -1) {
        isDeleting = false;
        index = 0;
        setTimeout(type, 1000); // Tempo de espera antes de começar a digitar novamente
    } else {
        setTimeout(type, speed);
    }
}

type();

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



