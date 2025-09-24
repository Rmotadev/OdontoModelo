// Smooth Scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Fechar o menu mobile após clicar em um link (se estiver aberto)
        const navList = document.querySelector('.nav-list');
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    });
});

// Toggle do menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Fechar o menu mobile ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
        }
    }
});

// Opcional: Adicionar uma classe ao header ao rolar para mudar o estilo
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Adicione este CSS ao seu style.css para a classe 'scrolled'
/*
.scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}
*/