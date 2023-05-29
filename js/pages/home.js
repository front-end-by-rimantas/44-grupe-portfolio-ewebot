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

const duration = 3000;

function animateNumbers(element, target, duration) {
    let current = 0;
    const startTime = performance.now();

    const animate = () => {
        const elapsed = performance.now() - startTime;
        current = Math.min(target, Math.ceil((elapsed / duration) * target));

        element.textContent = current.toLocaleString();

        if (elapsed < duration) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    requestAnimationFrame(animate);
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
