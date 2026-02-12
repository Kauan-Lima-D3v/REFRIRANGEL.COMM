document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const video = document.querySelector('.loader-video');

    // 1. Garantir que o vídeo do loader comece a tocar
    if (video) {
        video.play().catch(error => {
            console.log("Autoplay bloqueado pelo navegador, aguardando interação.");
        });
    }

    // 2. Controle do Loader (Tela de Carregamento)
    // Tempo de 1.8s para exibição da marca
    setTimeout(() => {
        if (loader) {
            loader.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s ease';
            loader.style.opacity = '0';
            loader.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }
    }, 1800);

    // 3. Scroll Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 4. Efeito de troca de cor de fundo ao scroll
window.addEventListener('scroll', () => {
    const section = document.querySelector('#producao-detalhe');
    if (section) {
        const sectionPos = section.getBoundingClientRect().top;
        // Se a seção de produção chegar perto do topo da tela
        if (sectionPos < 300) {
            document.body.style.backgroundColor = "#000814"; // Escurece
            document.body.style.transition = "background-color 0.8s ease";
        } else {
            document.body.style.backgroundColor = "#011628"; // Cor original
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Controle do Loader (Tela de carregamento)
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.transition = 'opacity 0.8s ease, visibility 0.8s';
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }, 1500); // 1.5 segundos é o ideal para o usuário não cansar
    }

    // 2. Scroll Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
