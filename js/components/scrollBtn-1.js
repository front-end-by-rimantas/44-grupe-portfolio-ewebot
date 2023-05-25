let mybutton = document.getElementById('scrollBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        // eslint-disable-next-line no-undef
        mybutton.style.display = 'block';
    } else {
        // eslint-disable-next-line no-undef
        mybutton.style.display = 'none';
    }
}

export default scrollFunction;
