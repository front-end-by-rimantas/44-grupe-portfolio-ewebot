function handleTestimonialsImagesPosition() {
    let mainWidth = document.getElementById('tiw').offsetWidth;

    const ratio = mainWidth / 725;

    const image1 = document.getElementById('moveTest1');
    const image2 = document.getElementById('moveTest2');
    const image3 = document.getElementById('moveTest3');
    const image4 = document.getElementById('moveTest4');
    const image5 = document.getElementById('moveTest5');
    const image6 = document.getElementById('moveTest6');

    image1.style.width = 170 * ratio + 'px';
    image1.style.height = 170 * ratio + 'px';
    image1.style.left = 500 * ratio + 'px';
    image1.style.top = 100 * ratio + 'px';
    
    image2.style.width = 100 * ratio + 'px';
    image2.style.height = 100 * ratio + 'px';
    image2.style.top = 100 * ratio + 'px';
    image2.style.left = 40 * ratio + 'px';

    image3.style.width = 120 * ratio + 'px';
    image3.style.height = 120 * ratio + 'px';
    image3.style.top = 360 * ratio + 'px';
    image3.style.left = 110 * ratio + 'px';

    image4.style.width = 70 * ratio + 'px';
    image4.style.height = 70 * ratio + 'px';
    image4.style.top = 560 * ratio + 'px';
    image4.style.left = 10 * ratio + 'px';

    image5.style.width = 60 * ratio + 'px';
    image5.style.height = 60 * ratio + 'px';
    image5.style.top = 550 * ratio + 'px';
    image5.style.left = 600 * ratio + 'px';

    image6.style.width = 90 * ratio + 'px';
    image6.style.height = 90 * ratio + 'px';
    image6.style.top = 300 * ratio + 'px';
    image6.style.left = -150 * ratio + 'px';
}

export { handleTestimonialsImagesPosition };
