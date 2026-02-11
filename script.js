document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');

    // 1. Controle do Loader (Tela de Carregamento)
    // O tempo de 1.8 segundos é ideal para mostrar a marca sem irritar o cliente
    setTimeout(() => {
        // Efeito de sumiço suave (Fade out)
        loader.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s ease';
        loader.style.opacity = '0';
        loader.style.transform = 'scale(1.05)'; // Leve zoom ao sair para dar profundidade
        
        // Remove do HTML após a animação para não atrapalhar os cliques
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 1800);

    // 2. Scroll Suave para links internos (Âncoras)
    // Isso faz o botão "Ver Nossa Produção" deslizar elegantemente até a seção
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

}); window.addEventListener('scroll', () => {
    const section = document.querySelector('#producao-detalhe');
    const scrollPos = window.scrollY + 250;

    if (section && scrollPos > section.offsetTop) {
        document.body.style.backgroundColor = "#000814"; // Escurece na produção
    } else {
        document.body.style.backgroundColor = "#011628"; // Cor original do Hero
    }
}); document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');

    // ADICIONADO: Garante que o vídeo do loader comece a tocar imediatamente
    const video = document.querySelector('.loader-video');
    if (video) {
        video.play().catch(error => {
            console.log("Autoplay aguardando interação ou carregamento.");
        });
    }

    // 1. Controle do Loader (Tela de Carregamento)
    // O tempo de 1.8 segundos é ideal para mostrar a marca sem irritar o cliente
    setTimeout(() => {
        // Efeito de sumiço suave (Fade out)
        loader.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s ease';
        loader.style.opacity = '0';
        loader.style.transform = 'scale(1.05)'; // Leve zoom ao sair para dar profundidade
        
        // Remove do HTML após a animação para não atrapalhar os cliques
        setTimeout(() => {
            loader.style.display = 'none';
        }, 800);
    }, 1800);

    // 2. Scroll Suave para links internos (Âncoras)
    // Isso faz o botão "Ver Nossa Produção" deslizar elegantemente até a seção
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

}); window.addEventListener('scroll', () => {
    const section = document.querySelector('#producao-detalhe');
    const scrollPos = window.scrollY + 250;

    if (section && scrollPos > section.offsetTop) {
        document.body.style.backgroundColor = "#000814"; // Escurece na produção
    } else {
        document.body.style.backgroundColor = "#011628"; // Cor original do Hero
    }
});

