const DEFAULT_PIXELS = 16
const container = document.getElementById("container")

function createGrid(amount) {
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

function resetGrid() {
    container.innerHTML = '';
    createGrid(slider.value);
    enableDraw();
}

function enableDraw() { //Enables the ability for pixels to change to color when click and dragging
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            if (mouseDown == true){
                pixel.style.backgroundColor = color;
            }       
        })
    })
}

createGrid(DEFAULT_PIXELS);
enableDraw(); 

let slider = document.getElementById('pixelCount');
let sliderNumber = document.getElementById('sliderCount')
sliderNumber.innerText = `${slider.value} x ${slider.value}`

slider.oninput = function() {
    sliderNumber.innerText = `${slider.value} x ${slider.value}`;
    resetGrid();
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

colorPicker = document.getElementById("colorPicker");
color = colorPicker.value;

colorPicker.oninput = function() {
    color = colorPicker.value;
    enableDraw();
}

let eraserOn = false;
const ERASEBTN = document.getElementById('eraser'); //Changes pen to eraser
ERASEBTN.addEventListener('click', () => {
    eraserOn = true;
    color = 'white';
    enableDraw();
    return;
});

const DRAWBTN = document.getElementById('pen'); //Turns the pen back on
DRAWBTN.addEventListener('click', () => {
    eraserOn = false
    color = colorPicker.value;
    enableDraw();
    return;
});

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', resetGrid);