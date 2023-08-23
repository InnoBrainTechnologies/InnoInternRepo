const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    alert('Message submitted successfully!');
    contactForm.reset();
});
