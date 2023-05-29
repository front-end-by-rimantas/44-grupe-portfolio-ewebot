// IMPORTS
import scrollFunction from '../components/scrollBtn-1.js';
import scrollWindow from '../components/scrollBtn-2.js';

// EXECUTION

/* HEADER: start */
window.addEventListener('scroll', function () {
    if (window.pageYOffset) {
        document.getElementById('header').classList.add('active');
    } else {
        document.getElementById('header').classList.remove('active');
    }
});

/* HEADER: end */

/* HERO: start */
scrollFunction();
scrollWindow();
/* HERO: end */

/* CHOOSE US: start */
/* CHOOSE US: end */

/* METRICS: start */
const numberElements = document.querySelectorAll('.numberanime');

const targetValues = [523, 26, 12, 314];

const duration = 1000;

function animateNumbers(element, target, duration) {
    const start = 0;
    const increment = Math.ceil(target / (duration / 5));

    let current = start;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current.toLocaleString();

        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        }
    }, 10);
}
numberElements.forEach((element, index) => {
    const target = targetValues[index];
    animateNumbers(element, target, duration);
});
/* METRICS: end */

/* VIDEO: start */
/* VIDEO: end */

/* SOCIALS: start */
/* SOCIALS: end */

/*  TESTIMONIALS: start */
/*  TESTIMONIALS: end */

/* SHOP BOOKS: start */
/* SHOP BOOKS: end */

/* BLOG: start */
/* BLOG: end */

/* CREATIVE: start */
/* CREATIVE: end */

/* FOOTER: start */
/* FOOTER: end */
