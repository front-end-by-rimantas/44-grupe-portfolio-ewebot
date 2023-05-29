let scrollBtn = document.getElementById('scrollBtn');
const scrollWindow = function () {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 50);
            scrollWindow();
        }, 1);
    }
};
scrollBtn.addEventListener('click', scrollWindow);

export default scrollWindow;
