// Constants
const gridContainer = document.getElementById("grid-container");
const slider = document.getElementById("myRange");

function createDefaultGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        gridContainer.appendChild(cell).className = "gridCell";
    }
}

createDefaultGrid(16, 16)     // Start

let gridItem = document.getElementsByClassName("gridCell");
for (const cell of gridItem) {
    cell.addEventListener('mouseover', function(e) {
        e.target.style.background = 'coral';
    });
    cell.addEventListener('mouseout', function(e) {
        e.target.style.background = '';
    })
};