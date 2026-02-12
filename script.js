// Inicializar Animações de Scroll
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true
    });

    // Remover Preloader após carregar
    window.addEventListener('load', () => {
        const loader = document.getElementById('preloader');
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }, 1500); // Tempo para dar o efeito de carregamento
    });
});

// Efeito de Scroll no Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = '#002244';
    } else {
        header.style.padding = '20px 0';
        header.style.background = 'rgba(0, 51, 102, 0.95)';
    }
});






