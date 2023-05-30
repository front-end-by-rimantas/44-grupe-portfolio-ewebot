const words = ['Your Ideas', 'Your Bussines', 'Your Sell'];
const typingDelay = 80;
const erasingDelay = 30;
const pauseDuration = 500;

let wordIndex = 0;
let charIndex = 0;
let direction = 1;
let isWriting = true;

function typeWriter() {
    if (wordIndex >= words.length) {
        wordIndex = 0;
        isWriting = false;
        setTimeout(typeWriter, pauseDuration);
        return;
    }

    const currentWord = words[wordIndex];

    if (charIndex < 0) {
        direction = 1;
        charIndex = 0;
        wordIndex++;
        setTimeout(typeWriter, pauseDuration);
        return;
    }

    if (charIndex > currentWord.length) {
        direction = -1;
        charIndex = currentWord.length;
        setTimeout(typeWriter, pauseDuration);
        return;
    }

    document.getElementById('typing-text').innerHTML = currentWord.substring(
        0,
        charIndex
    );

    charIndex += direction;

    const delay = isWriting ? typingDelay : erasingDelay;
    setTimeout(typeWriter, delay);
}

typeWriter();
