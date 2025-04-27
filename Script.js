// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
    
    // Scroll to top button
    const scrollTop = document.querySelector('.scroll-top');
    scrollTop.classList.toggle('active', window.scrollY > 500);
});

// Scroll to top
document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto hover para elementos de contacto
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.querySelector('.contact-icon').style.transform = 'scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.querySelector('.contact-icon').style.transform = 'scale(1)';
    });
});

// Animación para el botón de reserva
const reserveButton = document.querySelector('.btn-reserve');
if (reserveButton) {
    reserveButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    reserveButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
}

// Detectar cuando los elementos entran en la vista
const fadeInElements = document.querySelectorAll('.service-item, .menu-highlight, .gallery-item');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeInObserver.observe(element);
});
