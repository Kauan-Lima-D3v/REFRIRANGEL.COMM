document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    // 1. Cursor Customizado
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX - 11 + 'px';
            follower.style.top = e.clientY - 11 + 'px';
        }, 50);
    });

    // 2. Efeito Magnético
    const magnets = document.querySelectorAll('.magnetic');
    magnets.forEach((mag) => {
        mag.addEventListener('mousemove', (e) => {
            const rect = mag.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const s = mag.getAttribute('data-strength') || 30;
            mag.style.transform = `translate(${x/s}px, ${y/s}px)`;
        });
        mag.addEventListener('mouseleave', () => {
            mag.style.transform = `translate(0px, 0px)`;
        });
    });

    // 3. Loader
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        setTimeout(() => {
            loader.style.clipPath = 'circle(0% at 50% 50%)';
            setTimeout(() => { loader.style.display = 'none'; }, 1000);
        }, 1500);
    });

    // 4. Header Scroll
    window.addEventListener('scroll', () => {
        document.getElementById('main-header').classList.toggle('scrolled', window.scrollY > 50);
    });
});


