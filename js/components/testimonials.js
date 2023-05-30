function handleTestimonialsImagesPosition() {
    let mainWidth = document.getElementById('tiw').offsetWidth;

    const ratio = mainWidth / 785;

    const image1 = document.getElementById('moveTest1');
    const image2 = document.getElementById('moveTest2');
    const image3 = document.getElementById('moveTest3');
    const image4 = document.getElementById('moveTest4');
    const image5 = document.getElementById('moveTest5');

    // image1.style.width = 170 * ratio + 'px';
    // image2.style.width = 300 * ratio + 'px';
    // image3.style.width = 130 * ratio + 'px';
    // image4.style.width = 130 * ratio + 'px';
    // image5.style.width = 130 * ratio + 'px';

    image1.style.top = 230 * ratio + 'px';
    image1.style.right = 50 * ratio + 'px';

    image2.style.top = 4 * ratio + 'px';
    image2.style.left = 4 * ratio + 'px';

    image3.style.top = 7 * ratio + 'px';
    image3.style.left = 7 * ratio + 'px';

    image4.style.top = 6 * ratio + 'px';
    image4.style.left = 6 * ratio + 'px';

    image5.style.top = 9 * ratio + 'px';
    image5.style.left = 9 * ratio + 'px';
}

export { handleTestimonialsImagesPosition };
