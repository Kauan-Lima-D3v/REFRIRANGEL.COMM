// Aguarda o carregamento total
document.addEventListener('DOMContentLoaded', () => {
    
    // LOADER
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.transition = 'opacity 0.5s';
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 500);
            }, 800);
        });
    }

    // FILTROS (Refatorado para ser 100% seguro)
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(btn => {
        btn.onclick = function() {
            const category = this.getAttribute('data-cat');

            // Toggle active class
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Mostrar/Esconder Cards
            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'todos' || cardCat === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        };
    });
});




