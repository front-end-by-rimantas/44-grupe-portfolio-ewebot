function handleHeroImagesPosition() {
    let mainWidth = document.getElementById('hiw').offsetWidth;

    const ratio = mainWidth / 785;

    const image1 = document.getElementById('move1');
    const image2 = document.getElementById('move2');
    const image3 = document.getElementById('move3');

    image1.style.width = 170 * ratio + 'px';
    image2.style.width = 300 * ratio + 'px';
    image3.style.width = 130 * ratio + 'px';
    image3.style.height = 130 * ratio + 'px';

    image1.style.top = 120 * ratio + 'px';
    image1.style.left = 740 * ratio + 'px';

    image2.style.top = 500 * ratio + 'px';
    image2.style.left = 20 * ratio + 'px';

    image3.style.top = 40 * ratio + 'px';
    image3.style.left = -30 * ratio + 'px';
}

export { handleHeroImagesPosition };
