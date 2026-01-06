// Menu Hamburguer e Overlay
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.getElementById('overlay-blur');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Animação do ícone hamburguer
    const bars = document.querySelectorAll('.bar');
    bars[0].classList.toggle('rotate-down');
    bars[1].classList.toggle('fade-out');
    bars[2].classList.toggle('rotate-up');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    });
});

// Efeito de Revelação ao Scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));