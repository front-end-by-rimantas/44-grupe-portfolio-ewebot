// IMPORTS
import scrollFunction from '../components/scrollBtn-1.js';
import scrollWindow from '../components/scrollBtn-2.js';
import { handleHeroImagesPosition } from '../components/hero-images.js';
import { handleTestimonialsImagesPosition } from '../components/testimonials.js';
import headerScroll from '../components/header.js';

// EXECUTION

/* HEADER: start */
headerScroll();
/* HEADER: end */

/* HERO: start */
scrollFunction();
scrollWindow();
handleHeroImagesPosition();
window.addEventListener('resize', handleHeroImagesPosition);
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
handleTestimonialsImagesPosition();
window.addEventListener('resize', handleTestimonialsImagesPosition);
/*  TESTIMONIALS: end */

/* SHOP BOOKS: start */
/* SHOP BOOKS: end */

/* BLOG: start */
/* BLOG: end */

/* CREATIVE: start */
/* CREATIVE: end */

/* FOOTER: start */
/* FOOTER: end */
