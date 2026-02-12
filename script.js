// 1. REMOVER LOADER APÓS CARREGAMENTO
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500); // Tempo para o cliente ver sua marca
});

// 2. SISTEMA DE FILTROS (CATEGORIAS)
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Atualiza botão ativo
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase() === category.toLowerCase() || 
          (category === 'todos' && btn.innerText.toLowerCase() === 'todos')) {
            btn.classList.add('active');
        }
    });

    // Filtra os cards
    cards.forEach(card => {
        if (category === 'todos' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 10);
        } else {
            card.style.opacity = '0';
            card.style.display = 'none';
        }
    });
}

// 3. BARRA DE PESQUISA EM TEMPO REAL
const searchInput = document.getElementById('productSearch');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.product-card');

        cards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            const desc = card.querySelector('p').innerText.toLowerCase();

            if (title.includes(term) || desc.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// 4. SISTEMA DE LIGHTBOX (ZOOM DA FOTO)
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Trava o scroll ao dar zoom
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto'; // Destrava o scroll
}

// Fechar lightbox com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// 5. EFEITO NO HEADER AO ROLAR A PÁGINA
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(5, 5, 7, 0.95)';
        header.style.height = '70px';
    } else {
        header.style.background = 'rgba(5, 5, 7, 0.8)';
        header.style.height = '90px';
    }
});


