const DEFAULT_PIXELS = 16

function createGrid(amount) {
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

createGrid(DEFAULT_PIXELS);

const pixels = document.querySelectorAll('.pixel');
let mouseDown = false;
const body = document.querySelector('body');

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        if (mouseDown == true){
            pixel.className = 'pixelBlack';
        }
    })
})

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener('click', resetGrid)

function resetGrid() {
    pixels.forEach((pixel) => {
        pixel.className = "pixel";
    })
}

let slider = document.getElementById('pixelCount')