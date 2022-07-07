// Constants
const gridContainer = document.getElementById("grid-container");
let rows = document.getElementsByClassName("gridRow");
let columns = document.getElementsByClassName("columnCell")

function createDefaultGrid() {
    // Rows
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        gridContainer.appendChild(row).className = "gridrow";
    }

    // Columns
    for (let j = 0; j < rows.length; j++) {
        for (let k = 0; k < 16; k++) {
            let column = document.createElement("div");
            rows[i].appendChild(column).className = "columnCell";
        }
    }
}