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

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.menu');

navbarToggle.addEventListener('click', function () {
    this.classList.toggle('change');
    navbarMenu.classList.toggle('show');
});
