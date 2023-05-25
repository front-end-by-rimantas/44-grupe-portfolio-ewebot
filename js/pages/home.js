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
