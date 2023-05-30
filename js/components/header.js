window.addEventListener('scroll', function () {
    if (window.pageYOffset) {
        document.getElementById('header').classList.add('active');
    } else {
        document.getElementById('header').classList.remove('active');
    }
    // eslint-disable-next-line no-undef
    headerScroll();
});

// eslint-disable-next-line no-undef
export default headerScroll;
