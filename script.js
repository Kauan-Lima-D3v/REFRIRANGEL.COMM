
/**
 * REFRI RANGEL - Script de Performance 2026
 * Versão: 2.1 (Anti-CSP Block)
 */

(function() {
    "use strict";

    // Executa quando o DOM estiver pronto
    const init = () => {
        
        // --- 1. LOADER ---
        const loader = document.getElementById('loader');
        if (loader) {
            // Remove o loader após o carregamento total da janela
            window.addEventListener('load', () => {
                setTimeout(() => {
                    loader.style.opacity = '0';
                    loader.style.transition = 'opacity 0.5s ease';
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 500);
                }, 1000);
            });
        }

        // --- 2. SISTEMA DE FILTROS ---
        const filterButtons = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.card');

        if (filterButtons.length > 0 && productCards.length > 0) {
            filterButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();

                    // Pega a categoria do botão clicado
                    const selectedCategory = this.getAttribute('data-cat');

                    // Atualiza estado visual dos botões
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    // Lógica de exibição dos cards
                    productCards.forEach(card => {
                        const cardCategory = card.getAttribute('data-category');
                        
                        // Reseta opacidade para efeito de transição
                        card.style.opacity = '0';
                        
                        setTimeout(() => {
                            if (selectedCategory === 'todos' || cardCategory === selectedCategory) {
                                card.style.display = 'block';
                                setTimeout(() => { card.style.opacity = '1'; }, 50);
                            } else {
                                card.style.display = 'none';
                            }
                        }, 200);
                    });
                });
            });
        }

        // --- 3. EFEITO DE SCROLL NO HEADER ---
        const header = document.querySelector('header');
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.style.padding = '10px 0';
                    header.style.background = 'rgba(5, 5, 7, 0.95)';
                    header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                } else {
                    header.style.padding = '20px 0';
                    header.style.background = 'rgba(5, 5, 7, 0.8)';
                    header.style.boxShadow = 'none';
                }
            });
        }
    };

    // Verifica se o DOM já está pronto ou aguarda
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();





