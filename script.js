// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// EmailJS configuration
const serviceID = 'service_ppkfx65'; // Replace with your EmailJS Service ID
const templateID = 'template_x2l84z4'; // Replace with your EmailJS Template ID
const publicKey = 'iE253ZCNR1wtNscyU';  // Replace with your EmailJS Public Key

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        emailjs.init(publicKey);

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };

        emailjs.send(serviceID, templateID, formData)
            .then(() => {
                alert('Thank you! Your message has been sent.');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert('Something went wrong. Please try again later.');
            });
    });
}
