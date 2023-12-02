const container = document.getElementById('container');

const colors = [
    '#000000',
    '#ff0000',
    '#ffff00',
    '#00ff00',
    '#00ffff',
    '#ff00ff',
    '#ffffff'
];

let currentColorIndex = 0;

setInterval(() => {
    currentColorIndex++;
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }

    container.style.backgroundColor = colors[currentColorIndex];
}, 500);
