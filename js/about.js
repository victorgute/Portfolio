document.addEventListener('DOMContentLoaded', () => {
    // Adiciona animação de fade-in aos elementos visíveis
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            } else {
                entry.target.classList.remove('fade-in-visible');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Funcionalidade do menu
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');

    menuIcon.addEventListener('click', () => {
        menu.classList.add('menu-active');
        document.body.style.overflow = 'hidden'; // Desativa o scroll do body
    });

    menuClose.addEventListener('click', () => {
        menu.classList.remove('menu-active');
        document.body.style.overflow = 'auto'; // Ativa o scroll do body
    });
});


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








