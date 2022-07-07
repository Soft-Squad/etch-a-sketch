// Constants
const gridContainer = document.getElementById("grid-container");

function createDefaultGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);

    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);
        gridContainer.appendChild(cell).className = "grid-item";
    }
}

createDefaultGrid(16, 16)     // Start