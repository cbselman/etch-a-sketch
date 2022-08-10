function addPixels(amount) {
    const container = document.getElementById("container")
    for (i = 0; i < amount; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for(j = 0; j < amount; j++) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            row.appendChild(pixel)
        }
        container.appendChild(row);
    }
}

addPixels(16)

const pixels = document.querySelectorAll('.pixel');
let mouseIsDown = false;
const body = document.querySelector('body');

document.body.onmousedown = () => (mouseIsDown = true);
document.body.onmouseup = () => (mouseIsDown = false);

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', colorChange);
    pixel.addEventListener('mouseDown', colorChange);
})

function colorChange(e) {
    if (mouseIsDown == true) {
        e.target.className = 'pixelBlack';
    }
}