// Typing Animation
const startTypingAnimation = () => {
    const typingText = document.querySelector('.typing-text span');
    const words = ["Web Developer", "Software Developer", "Web Designer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
        if (!typingText || words.length === 0) return; // Exit if no element or words

        const currentWord = words[wordIndex];
        if (!isDeleting) {
            // Typing the word
            typingText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Pause at the end of the word
            } else {
                setTimeout(type, 100); // Typing speed
            }
        } else {
            // Deleting the word
            typingText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Move to the next word
                setTimeout(type, 500); // Pause before typing the next word
            } else {
                setTimeout(type, 50); // Deleting speed
            }
        }
    };

    type(); // Start the typing animation
};

// Smooth Scrolling for Anchor Links
const setupSmoothScrolling = () => {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// Toggle Navigation Menu
const setupNavMenuToggle = () => {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    if (!menuIcon || !navMenu) return; // Exit if elements don't exist

    menuIcon.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close the menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
};

// Initialize All Functions
const init = () => {
    startTypingAnimation();
    setupSmoothScrolling();
    setupNavMenuToggle();
};

// Run Initialization on DOM Load
document.addEventListener('DOMContentLoaded', init);