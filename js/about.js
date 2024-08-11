function animateTransition(targetUrl) {
    const overlay = document.querySelector('.overlay');
    overlay.classList.add('active');

    // Espera o tempo da animação antes de redirecionar
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 700); // 700ms deve coincidir com a duração da animação
}
