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
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const header = document.getElementById('main-header');

    // 1. Controle do Loader (1.5 segundos de impacto)
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.transform = 'translateY(-100%)';
            document.body.style.overflow = 'auto';
        }, 1800);
    });

    // 2. Mudança no Header ao rolar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Revelação de elementos ao rolar (Scroll Reveal Simples)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-padding, .prod-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Loader Cinematográfico
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 800);
        }, 1500);
    });

    // 2. Animação de Entrada dos Banners (Scroll Reveal)
    const observerOptions = { threshold: 0.2 };
    
    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Seleciona os banners para animar
    document.querySelectorAll('.sector-banner, .loc-info').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 1s cubic-bezier(0.2, 1, 0.3, 1)";
        revealOnScroll.observe(el);
    });

    // 3. Efeito do Header ao rolar
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
});

