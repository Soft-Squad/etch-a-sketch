// Constants
const DEFAULT_COLOR = "#FF7F50";    // Coral
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

const colorPicker = document.getElementById("colorPicker");
const clearBtn = document.getElementById("clearBtn");
const slider = document.getElementById("sizeSlider");
const sliderValue = document.getElementById("sliderValue");
const gridContainer = document.getElementById("grid-container");

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
slider.onmousemove = (e) => updateGridSize(e.target.value);
slider.onchange = (e) => changeSize(e.target.value);
clearBtn.onclick = () => reloadGrid();

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeSize(value) {
    setCurrentSize(value);
    updateGridSize(value);
    reloadGrid();
}

function updateGridSize(value) {
    sliderValue.innerHTML = `${value} x ${value}`
}

function reloadGrid() {
    clearGrid();
    setGrid(currentSize);
}

function clearGrid() {
    gridContainer.innerHTML = '';
}

function setGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        gridContainer.appendChild(cell);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}   

window.onload = () => {
    setGrid(DEFAULT_SIZE)     // Start
}