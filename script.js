document.addEventListener('DOMContentLoaded', () => {
    
    // 1. LOADER CINEMATOGRÁFICO (Efeito de abertura de lente)
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                // Esse efeito casa com o clip-path do CSS surreal
                loader.style.clipPath = 'circle(0% at 50% 50%)';
                document.body.style.overflow = 'auto';
                setTimeout(() => { loader.style.display = 'none'; }, 1200);
            }, 2000);
        });
    }

    // 2. HEADER DINÂMICO
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. SCROLL REVEAL (Faz os elementos surgirem suavemente ao rolar)
    const observerOptions = { threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Seleciona os banners de tecnologia e a localização para animar
    document.querySelectorAll('.tech-banner, .hq-grid, .sector-banner').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px)';
        el.style.transition = 'all 1s cubic-bezier(0.2, 1, 0.3, 1)';
        revealObserver.observe(el);
    });

    // 4. SISTEMA DE BUSCA (Para a página de produtos)
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

// 5. FILTRO DE CATEGORIAS
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const btns = document.querySelectorAll('.filter-btn');
    
    btns.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category.toLowerCase()) || (category === 'todos' && btn.innerText === 'Todos')) {
            btn.classList.add('active');
        }
    });

    cards.forEach(card => {
        if (category === 'todos') {
            card.style.display = 'flex';
        } else {
            card.style.display = card.getAttribute('data-category') === category ? 'flex' : 'none';
        }
    });
}

// 6. LIGHTBOX (Visualização de Imagem ampliada)
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (lb && img) {
        img.src = src;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) {
        lb.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

