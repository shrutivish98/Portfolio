// Add animations to sections when scrolled into view
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerHeight = window.innerHeight / 1.3;
        if (sectionTop < triggerHeight) {
            section.classList.add('show');
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('in-view');  // Combines both functionalities
        }
    });
}, {
    threshold: 0.1  // You can adjust the threshold value as needed
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

