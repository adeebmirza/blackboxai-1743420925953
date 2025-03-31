// Form validation for contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.elements['name'].value.trim();
            const email = contactForm.elements['email'].value.trim();
            const service = contactForm.elements['service'].value;
            const message = contactForm.elements['message'].value.trim();
            
            // Simple validation
            if (!name || !email || !service || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!validateEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Form submission would go here
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }

    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const nav = this.closest('nav');
            const menu = nav.querySelector('.hidden.md\\:flex');
            if (menu) {
                menu.classList.toggle('hidden');
                menu.classList.toggle('flex');
                menu.classList.toggle('flex-col');
                menu.classList.toggle('absolute');
                menu.classList.toggle('top-16');
                menu.classList.toggle('left-0');
                menu.classList.toggle('right-0');
                menu.classList.toggle('bg-gray-900');
                menu.classList.toggle('p-4');
                menu.classList.toggle('space-y-4');
            }
        });
    }
});

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});