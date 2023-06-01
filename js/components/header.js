function headerScroll() {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset) {
            document.getElementById('header').classList.add('active');
        } else {
            document.getElementById('header').classList.remove('active');
        }
    });
}
export default headerScroll;
