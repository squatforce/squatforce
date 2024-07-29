
document.addEventListener('DOMContentLoaded', function() {
    console.log('SquatForce website loaded');

    // Glatko pomicanje za navigacijske linkove
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funkcionalnost slideshowa
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Inicijalizacija slideshowa
    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Automatski mijenja slajdove svakih 5 sekundi

    // Dodavanje gumba za kontrolu slideshowa
    const slideshow = document.getElementById('slideshow');
    const prevButton = document.createElement('button');
    prevButton.textContent = '←';
    prevButton.classList.add('slide-control', 'prev');
    prevButton.addEventListener('click', prevSlide);

    const nextButton = document.createElement('button');
    nextButton.textContent = '→';
    nextButton.classList.add('slide-control', 'next');
    nextButton.addEventListener('click', nextSlide);

    slideshow.appendChild(prevButton);
    slideshow.appendChild(nextButton);

    // Funkcionalnost kontakt obrasca
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Ovdje biste dodali kod za slanje podataka iz obrasca
            console.log('Obrazac poslan');
            contactForm.reset();
        });
    }

    // Funkcionalnost FAQ sekcije
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        answer.style.display = 'none'; // Sakrij odgovore na početku

        question.addEventListener('click', () => {
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });
    });
});
