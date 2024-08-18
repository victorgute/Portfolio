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



// Menu toggle
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu-active');
});



document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const contactLink = this.getAttribute('data-contact');
            window.location.href = contactLink;
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-item');

    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const contactLink = this.getAttribute('data-contact');
            if (contactLink.startsWith('mailto:') || contactLink.startsWith('tel:')) {
                const contactText = this.querySelector('span').textContent.split(': ')[1];
                navigator.clipboard.writeText(contactText).then(() => {
                    alert(`${contactText} copiado para a área de transferência!`);
                });
            } else {
                window.location.href = contactLink;
            }
        });
    });
});
