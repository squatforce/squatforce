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
