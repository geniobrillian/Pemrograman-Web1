// Typing effect for the subtitle text
const typingText = document.getElementById('typing-text');
const words = ['Web Developer  ', 'Backend Developer  '];
let wordIndex = 0;
let letterIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentText = words[wordIndex].substring(0, letterIndex--);
    } else {
        currentText = words[wordIndex].substring(0, letterIndex++);
    }

    typingText.textContent = currentText;

    if (!isDeleting && letterIndex === words[wordIndex].length) {
        isDeleting = true;
        setTimeout(type, 1000); //waktu delay sebelum deleting
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); //waktu delay sebelum typing next word
    } else {
        setTimeout(type, 150);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Navbar active link change on click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth scroll effect
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section with smooth behavior
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});