const numberElements = document.querySelectorAll('.numberanime');

const targetValues = [523, 26, 12, 314];

const duration = 3000;

function animateNumbers(element, target, duration) {
    let current = 0;
    const startTime = performance.now();

    const animate = () => {
        const elapsed = performance.now() - startTime;
        current = Math.min(target, Math.ceil((elapsed / duration) * target));

        element.textContent = current.toLocaleString();

        if (elapsed < duration) {
            requestAnimationFrame(animate);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    requestAnimationFrame(animate);
}

numberElements.forEach((element, index) => {
    const target = targetValues[index];
    animateNumbers(element, target, duration);
});

export default animateNumbers;
