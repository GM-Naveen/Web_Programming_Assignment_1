// Intersection Observer for scroll animations
const sections = document.querySelectorAll('.section');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Generate particles periodically
setInterval(createParticle, 300);

// // Header scroll effect
// let lastScrollY = window.scrollY;

// window.addEventListener('scroll', () => {
//     const currentScrollY = window.scrollY;
//     const header = document.querySelector('.header');
    
//     if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         header.style.transform = 'translateY(-100%)';
//     } else {
//         header.style.transform = 'translateY(0)';
//     }
    
//     lastScrollY = currentScrollY;
// });

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamic background gradient
let gradientPosition = 0;
setInterval(() => {
    gradientPosition += 1;
    document.body.style.background = `linear-gradient(${gradientPosition}deg, #667eea 0%, #764ba2 100%)`;
}, 100);