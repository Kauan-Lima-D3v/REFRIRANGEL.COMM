document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => { loader.style.display = 'none'; }, 800);
    });

    // Busca
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const term = searchInput.value.toLowerCase();
            const cards = document.querySelectorAll('.product-card');
            cards.forEach(card => {
                const title = card.querySelector('h3').innerText.toLowerCase();
                card.style.display = title.includes(term) ? 'flex' : 'none';
            });
        });
    }
});

// Filtro
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category) || (category === 'todos' && btn.innerText === 'Todos')) {
            btn.classList.add('active');
        }
    });
    cards.forEach(card => {
        if (category === 'todos') { card.style.display = 'flex'; }
        else { card.style.display = card.getAttribute('data-category') === category ? 'flex' : 'none'; }
    });
}

// Lightbox
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}
