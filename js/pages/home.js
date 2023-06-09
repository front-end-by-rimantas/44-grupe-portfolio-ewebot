// IMPORTS
import scrollFunction from '../components/scrollBtn-1.js';
import scrollWindow from '../components/scrollBtn-2.js';
import { handleHeroImagesPosition } from '../components/hero-images.js';
import { handleTestimonialsImagesPosition } from '../components/testimonials.js';
import headerScroll from '../components/header.js';
import animateNumbers from '../components/metrics.js';

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
animateNumbers();
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
function hover(img)
{
 img.src = "./img/books/books_menu.png"
}
function hoverOut(img){
    img.src = "./img/books/books_heart.png"
}
/* SHOP BOOKS: end */

/* BLOG: start */
/* BLOG: end */

/* CREATIVE: start */
/* CREATIVE: end */

/* FOOTER: start */
/* FOOTER: end */
