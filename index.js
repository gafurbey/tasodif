document.addEventListener('DOMContentLoaded', (event) => {
    const generateButton = document.getElementById('generateButton');
    const randomNumberDisplay = document.getElementById('randomNumber');
    const minInput = document.getElementById('min');
    const maxInput = document.getElementById('max');

    generateButton.addEventListener('click', () => {
        const min = parseInt(minInput.value);
        const max = parseInt(maxInput.value);

        if (isNaN(min) || isNaN(max)) {
            alert("Iltimos, to'g'ri raqamlarni kiriting.");
            return;
        }

        if (min > max) {
            alert("Minimal qiymat maksimal qiymatdan katta bo'lmasligi kerak.");
            return;
        }

        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumberDisplay.textContent = randomNumber;
    });
});
